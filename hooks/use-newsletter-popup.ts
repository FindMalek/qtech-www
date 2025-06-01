"use client"

import { useEffect, useState } from "react"

const NEWSLETTER_POPUP_DELAY = 10000 
const NEWSLETTER_POPUP_STORAGE_KEY = "qtech-newsletter-popup-shown"
const NEWSLETTER_SUBSCRIPTION_STORAGE_KEY = "qtech-newsletter-subscribed"

export function useNewsletterPopup() {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    // Check if user has already seen the popup or subscribed
    const hasSeenPopup = localStorage.getItem(NEWSLETTER_POPUP_STORAGE_KEY)
    const hasSubscribed = localStorage.getItem(NEWSLETTER_SUBSCRIPTION_STORAGE_KEY)

    if (hasSeenPopup || hasSubscribed) {
      return
    }

    // Set a timer to show the popup after the specified delay
    const timer = setTimeout(() => {
      setShowPopup(true)
      localStorage.setItem(NEWSLETTER_POPUP_STORAGE_KEY, "true")
    }, NEWSLETTER_POPUP_DELAY)

    return () => clearTimeout(timer)
  }, [])

  const hidePopup = () => {
    setShowPopup(false)
  }

  const markAsSubscribed = () => {
    localStorage.setItem(NEWSLETTER_SUBSCRIPTION_STORAGE_KEY, "true")
    setShowPopup(false)
  }

  return {
    showPopup,
    hidePopup,
    markAsSubscribed,
  }
} 