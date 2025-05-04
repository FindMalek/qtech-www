import { ChangeEvent, FormEvent, KeyboardEvent } from "react"

import { Icons } from "@/components/shared/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface ChatContextProps {
  input: string
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleFormSubmit: (e: FormEvent) => void
  handleKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void
}

interface MarketingChatInputProps {
  chatContext: ChatContextProps
  isLoading: boolean
  isCancelling: boolean
}

export function MarketingChatInput({
  chatContext,
  isLoading,
  isCancelling,
}: MarketingChatInputProps) {
  const { input, handleInputChange, handleFormSubmit, handleKeyDown } =
    chatContext

  return (
    <form onSubmit={handleFormSubmit} className="flex space-x-2">
      <Input
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Type your message..."
        className="flex-1"
        disabled={isLoading || isCancelling}
        autoFocus={false}
      />
      <Button
        type="submit"
        size="icon"
        disabled={isLoading || !input.trim() || isCancelling}
      >
        <Icons.send className="h-4 w-4" />
      </Button>
    </form>
  )
}
