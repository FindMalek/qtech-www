"use client"

import { useRef } from "react"

import { getGlobalChatContext } from "@/hooks/use-chat-with-tools"

export function usePricingSelection() {
  const hasScrolledRef = useRef(false)

  const selectPricingTier = async (tierName: string) => {
    try {
      // Scroll to the chat bot
      const chatElement = document.getElementById("chat-container")
      if (chatElement) {
        hasScrolledRef.current = true
        chatElement.scrollIntoView({ behavior: "smooth" })

        // Wait for the scroll to complete before sending the message
        setTimeout(() => {
          // Get global chat context
          const chatContext = getGlobalChatContext()

          // Create the message for the selected tier
          const message = `I'm interested in the ${tierName} plan. Can you provide more information about it and my options for scheduling a call or contacting you directly?`

          // Set the input and simulate user submission
          if (chatContext) {
            // Set the input value
            chatContext.setInput(message)

            // Small delay to ensure UI updates
            setTimeout(() => {
              // Submit the form programmatically
              const form = document.querySelector("form") as HTMLFormElement
              if (form) {
                form.dispatchEvent(
                  new Event("submit", { cancelable: true, bubbles: true })
                )
              }
            }, 100)
          }
        }, 800) // Wait for scroll to complete
      }
    } catch (error) {
      console.error("Error in selectPricingTier:", error)
    }
  }

  return { selectPricingTier }
}
