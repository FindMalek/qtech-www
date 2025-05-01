import { groq } from "@ai-sdk/groq"
import { smoothStream, streamText } from "ai"

import { ChatMessage } from "@/types"

import { getSystemPrompt } from "@/lib/system-prompt"
import { createProxiedTools } from "@/lib/tool-deduplication"
import { tools } from "@/lib/tools"
import { sanitizeMessages } from "@/lib/utils"

export const maxDuration = 20

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const rawMessages = body.messages || []
    const messages = sanitizeMessages(rawMessages as ChatMessage[])

    const firstMessage = messages[0]
    const sessionId = firstMessage
      ? `${firstMessage.id || Date.now().toString()}-${firstMessage.content?.slice(0, 10) || ""}`
      : Date.now().toString()

    // Create proxied versions of tools that prevent duplicates
    const proxiedTools = createProxiedTools(tools, sessionId)

    const result = streamText({
      model: groq("llama3-70b-8192"),
      messages,
      temperature: 0.7,
      maxTokens: 1000,
      system: getSystemPrompt(),
      tools: proxiedTools,
      experimental_toolCallStreaming: true,
      experimental_transform: smoothStream({
        delayInMs: 20,
        chunking: "line",
      }),
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Error in chat API:", error)
    return new Response(
      JSON.stringify({
        error: "An error occurred processing your request",
        details: error instanceof Error ? error.message : String(error),
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    )
  }
}
