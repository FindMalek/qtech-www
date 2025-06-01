"use client"

import { useState } from "react"
import { MailIcon } from "lucide-react"
import { toast } from "sonner"

import { sendNewsletterSubscriptionNotification } from "@/actions/resend"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

interface NewsletterSubscriptionDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubscribed?: () => void
}

export function NewsletterSubscriptionDialog({
  open,
  onOpenChange,
  onSubscribed,
}: NewsletterSubscriptionDialogProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)

    try {
      const result = await sendNewsletterSubscriptionNotification(email)
      
      if (result.success) {
        toast.success("Thank you for subscribing to our newsletter!")
        setEmail("")
        onSubscribed?.()
        onOpenChange(false)
      } else {
        toast.error("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Error subscribing to newsletter:", error)
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSkip = () => {
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <MailIcon className="h-6 w-6 text-primary" />
          </div>
          <DialogTitle className="text-xl font-semibold">
            Stay in the loop!
          </DialogTitle>
          <DialogDescription className="text-base">
            Get the latest updates, insights, and exclusive content delivered straight to your inbox.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
              required
            />
          </div>

          <div className="flex gap-2">
            <Button
              type="submit"
              className="flex-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={handleSkip}
              disabled={isSubmitting}
            >
              Maybe later
            </Button>
          </div>
        </form>

        <p className="text-xs text-muted-foreground text-center">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </DialogContent>
    </Dialog>
  )
} 