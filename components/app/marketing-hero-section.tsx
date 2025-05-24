"use client"

import { useRef } from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { getGlobalChatContext } from "@/hooks/use-chat-with-tools"



export function MarketingHeroSection() {
  const { hero } = siteConfig
  const hasScrolledRef = useRef(false)

  const handlePrimaryButtonClick = () => {
    try {
      const chatElement = document.getElementById("chat-container")
      if (chatElement) {
        hasScrolledRef.current = true
        chatElement.scrollIntoView({ behavior: "smooth" })

        setTimeout(() => {
          const chatContext = getGlobalChatContext()
          const message = `I'd like to get started with QTech. Can you tell me about your services and how we can work together?`

          if (chatContext) {
            chatContext.setInput(message)

            setTimeout(() => {
              const form = document.querySelector("form") as HTMLFormElement
              if (form) {
                form.dispatchEvent(
                  new Event("submit", { cancelable: true, bubbles: true })
                )
              }
            }, 100)
          }
        }, 800)
      }
    } catch (error) {
      console.error("Error in handlePrimaryButtonClick:", error)
    }
  }

  return (
    <section id="hero" className="relative w-full">
      <div className="relative flex w-full flex-col items-center px-6">
        <div className="absolute inset-0">
          <div className="absolute inset-0 -z-10 h-[600px] w-full rounded-b-xl [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,var(--secondary)_100%)] md:h-[800px]"></div>
        </div>
        <div className="relative z-10 mx-auto flex h-full w-full max-w-3xl flex-col items-center justify-center gap-10 pt-32">
          <p className="border-border bg-accent flex h-8 items-center gap-2 rounded-full border px-3 text-sm">
            {hero.badgeIcon}
            {hero.badge}
          </p>
          <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="text-primary text-balance text-center text-3xl font-medium tracking-tighter md:text-4xl lg:text-5xl xl:text-6xl">
              {hero.title}
            </h1>
            <p className="text-muted-foreground text-balance text-center text-base font-medium leading-relaxed tracking-tight md:text-lg">
              {hero.description}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <Link href={siteConfig.links.meet}>
              <button
                onClick={handlePrimaryButtonClick}
                className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/80 flex h-9 cursor-pointer items-center justify-center rounded-full border border-white/[0.12] px-4 text-sm font-normal tracking-wide shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] transition-all ease-out active:scale-95"
              >
                {hero.cta.primary.text}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative mt-10 px-6">

      </div>
    </section>
  )
}
