"use client"

import { Button } from "@/components/ui/button"

interface SuggestedPromptsProps {
  onSuggestionClick: (suggestion: string) => void
}

export function MarketingSuggestedPrompts({
  onSuggestionClick,
}: SuggestedPromptsProps) {
  const suggestions = [
    "I’d like to explore integrating an Internal AI",
    "Tell me about your software development services",
    "How much does a chatbot implementation cost?",
    "Schedule a consultation",
    "What industries do you serve?",
    "How do you ensure data privacy?",
  ]

  return (
    <div className="border-t p-4">
      <div className="flex flex-wrap justify-center gap-2">
        {suggestions.map((suggestion, index) => (
          <Button
            key={index}
            variant="outline"
            className="rounded-full text-sm"
            onClick={() => onSuggestionClick(suggestion)}
          >
            {suggestion}
          </Button>
        ))}
      </div>
    </div>
  )
}
