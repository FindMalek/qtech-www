
export interface ToolData {
    state: string
    step?: number
    toolCallId: string
    toolName: string
    args: Record<string, unknown>
    result?: Record<string, unknown>
  }
  
  export interface MessagePart {
    type: string
    text?: string
    toolInvocation?: {
      state: string
      step?: number
      toolCallId: string
      toolName: string
      args: Record<string, unknown>
      result?: Record<string, unknown>
    }
    [key: string]: unknown
  }
  
  export interface ChatMessage {
    role: "user" | "assistant" | "system"
    content: string
    id?: string
    toolInvocations?: ToolData[]
    toolCalls?: ToolData[]
    parts?: MessagePart[]
    [key: string]: unknown
  }