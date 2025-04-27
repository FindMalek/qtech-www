import { clsx, type ClassValue } from "clsx"
import * as Color from "color-bits"
import { twMerge } from "tailwind-merge"
import { ChatMessage, ToolData } from "@/types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to convert any CSS color to rgba
export const getRGBA = (
  cssColor: React.CSSProperties["color"],
  fallback: string = "rgba(180, 180, 180)"
): string => {
  if (typeof window === "undefined") return fallback
  if (!cssColor) return fallback

  try {
    // Handle CSS variables
    if (typeof cssColor === "string" && cssColor.startsWith("var(")) {
      const element = document.createElement("div")
      element.style.color = cssColor
      document.body.appendChild(element)
      const computedColor = window.getComputedStyle(element).color
      document.body.removeChild(element)
      return Color.formatRGBA(Color.parse(computedColor))
    }

    return Color.formatRGBA(Color.parse(cssColor))
  } catch (e) {
    console.error("Color parsing failed:", e)
    return fallback
  }
}

// Helper function to add opacity to an RGB color string
export const colorWithOpacity = (color: string, opacity: number): string => {
  if (!color.startsWith("rgb")) return color
  return Color.formatRGBA(Color.alpha(Color.parse(color), opacity))
}

// Tremor Raw focusInput [v0.0.1]

export const focusInput = [
  // base
  "focus:ring-2",
  // ring color
  "focus:ring-blue-200 focus:dark:ring-blue-700/30",
  // border color
  "focus:border-blue-500 focus:dark:border-blue-700",
]

// Tremor Raw focusRing [v0.0.1]

export const focusRing = [
  // base
  "outline outline-offset-2 outline-0 focus-visible:outline-2",
  // outline color
  "outline-blue-500 dark:outline-blue-500",
]

// Tremor Raw hasErrorInput [v0.0.1]

export const hasErrorInput = [
  // base
  "ring-2",
  // border color
  "border-red-500 dark:border-red-700",
  // ring color
  "ring-red-200 dark:ring-red-700/30",
]

export function sanitizeMessages(messages: ChatMessage[]): ChatMessage[] {
  // First pass: detect context reset messages
  const hasContextReset = messages.some(
    (msg) =>
      msg.role === "system" &&
      typeof msg.content === "string" &&
      msg.content.includes("previous conversation thread has been reset")
  )

  // Filter out system messages used for context resets
  const filteredMessages = messages.filter(
    (msg) =>
      !(
        msg.role === "system" &&
        typeof msg.content === "string" &&
        msg.content.includes("previous conversation thread has been reset")
      )
  )

  return filteredMessages.map((message) => {
    // Skip user messages
    if (message.role === "user") {
      return message
    }

    // Check for context reset messages from assistant
    const isContextResetMessage =
      message.role === "assistant" &&
      typeof message.content === "string" &&
      (message.content.includes("Let's start fresh") ||
        message.content.includes("I understand you want to change the topic"))

    // Keep context reset messages as they are important signals
    if (isContextResetMessage) {
      return message
    }

    // Function to check if a message contains a pending tool call
    const hasPendingToolCall = (msg: ChatMessage): boolean => {
      // Check toolInvocations property
      if (msg.toolInvocations && Array.isArray(msg.toolInvocations)) {
        if (
          msg.toolInvocations.some(
            (tool: ToolData) => tool.state === "call" && !tool.result
          )
        ) {
          return true
        }
      }

      // Check toolCalls property
      if (msg.toolCalls && Array.isArray(msg.toolCalls)) {
        if (
          msg.toolCalls.some(
            (tool: ToolData) => tool.state === "call" && !tool.result
          )
        ) {
          return true
        }
      }

      // Check parts array for tool invocations
      if (msg.parts && Array.isArray(msg.parts)) {
        for (const part of msg.parts) {
          if (
            part.type === "tool-invocation" &&
            part.toolInvocation?.state === "call" &&
            !part.toolInvocation?.result
          ) {
            return true
          }
        }
      }

      return false
    }

    // If message has a pending tool call, sanitize it
    if (hasPendingToolCall(message)) {
      console.log("Found pending tool call, sanitizing message")

      // Create a clean version of the message with better context reset hints for the model
      return {
        role: message.role,
        content: hasContextReset
          ? "Let's start with a completely new topic. How can I help you now?"
          : "I'm ready to help you with something else.",
        id: message.id,
      }
    }

    // Message is clean, return as is
    return message
  })
}