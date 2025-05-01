// Define a type for tool parameters
type ToolParameters = Record<string, unknown>

// Track recent tool calls to prevent duplicates
interface ToolCallRecord {
  name: string
  parameters: ToolParameters
  timestamp: number
}

const recentToolCalls = new Map<string, ToolCallRecord[]>()
const RECENT_CALL_EXPIRY_MS = 60000 // 1 minute expiry time
const MAX_STORED_CALLS = 5 // Maximum stored calls per session

/**
 * Checks if a tool call is a duplicate of a recent call
 */
export function isDuplicateToolCall(
  sessionId: string,
  toolName: string,
  parameters: ToolParameters
): boolean {
  const sessionCalls = recentToolCalls.get(sessionId) || []

  // Clean up expired calls
  const now = Date.now()
  const validCalls = sessionCalls.filter(
    (call) => now - call.timestamp < RECENT_CALL_EXPIRY_MS
  )

  // Check for duplicate calls
  return validCalls.some(
    (call) =>
      call.name === toolName &&
      JSON.stringify(call.parameters) === JSON.stringify(parameters)
  )
}

/**
 * Records a new tool call to prevent future duplicates
 */
export function recordToolCall(
  sessionId: string,
  toolName: string,
  parameters: ToolParameters
): void {
  let sessionCalls = recentToolCalls.get(sessionId) || []

  // Clean up expired calls
  const now = Date.now()
  sessionCalls = sessionCalls
    .filter((call) => now - call.timestamp < RECENT_CALL_EXPIRY_MS)
    .slice(-MAX_STORED_CALLS + 1) // Keep only recent calls up to limit

  // Add new call
  sessionCalls.push({
    name: toolName,
    parameters,
    timestamp: now,
  })

  recentToolCalls.set(sessionId, sessionCalls)
}

// Basic type for tool implementations
type ToolImplementation = (params: unknown) => Promise<{ content: string }>

// Interface for a tool with any parameter type
interface BaseTool {
  description: string
  parameters: unknown
  implementation: ToolImplementation
}

// Interface for our proxied tools
interface ProxiedTool {
  description: string
  parameters: unknown
  implementation: (params: ToolParameters) => Promise<{ content: string }>
}

/**
 * Creates proxied versions of tools to prevent duplicate calls
 */
export function createProxiedTools(
  originalTools: Record<string, BaseTool>,
  sessionId: string
): Record<string, ProxiedTool> {
  const proxiedTools: Record<string, ProxiedTool> = {}

  // Create a proxy for each tool
  for (const toolName in originalTools) {
    const originalTool = originalTools[toolName]

    // Create proxied version of this tool
    proxiedTools[toolName] = {
      ...originalTool,
      // Override the tool's implementation to add duplicate detection
      implementation: async (parameters: ToolParameters) => {
        // Check if this is a duplicate call
        if (isDuplicateToolCall(sessionId, toolName, parameters)) {
          console.log(`Prevented duplicate tool call: ${toolName}`, parameters)
          // Return a message about the duplicate instead of running the tool
          return {
            content:
              "This information was already provided. Please refer to previous responses.",
          }
        }

        // Record this tool call
        recordToolCall(sessionId, toolName, parameters)

        // If it's not a duplicate, return the original implementation
        if (typeof originalTool.implementation === "function") {
          // We need to use unknown here because we can't guarantee parameter types
          return await originalTool.implementation(parameters)
        }

        // Default implementation if none provided
        return {
          content: `Tool ${toolName} executed with parameters: ${JSON.stringify(parameters)}`,
        }
      },
    }
  }

  return proxiedTools
}
