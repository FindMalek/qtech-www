"use client"

import { useNewsletterPopup } from "@/hooks/use-newsletter-popup"
import { NewsletterSubscriptionDialog } from "./newsletter-subscription-dialog"

export function NewsletterPopupProvider() {
  const { showPopup, hidePopup, markAsSubscribed } = useNewsletterPopup()

  return (
    <NewsletterSubscriptionDialog
      open={showPopup}
      onOpenChange={(open) => {
        if (!open) {
          hidePopup()
        }
      }}
      onSubscribed={markAsSubscribed}
    />
  )
} 