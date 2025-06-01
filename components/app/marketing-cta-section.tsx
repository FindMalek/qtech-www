"use client"

import Image from "next/image"
import { toast } from "sonner"

import { siteConfig } from "@/config/site"
import { useCopyClipboard } from "@/hooks/use-copy-clipboard"

export function MarketingCTASection() {
  const { ctaSection } = siteConfig
  const { copy } = useCopyClipboard()

  // const handleCTAButtonClick = () => {
  //   try {
  //     const chatElement = document.getElementById("chat-container")
  //     if (chatElement) {
  //       hasScrolledRef.current = true
  //       chatElement.scrollIntoView({ behavior: "smooth" })

  //       setTimeout(() => {
  //         const chatContext = getGlobalChatContext()
  //         const message =
  //           "I'd like to learn more about building a custom AI agent with QTech."

  //         if (chatContext) {
  //           chatContext.setInput(message)

  //           setTimeout(() => {
  //             const form = document.querySelector("form") as HTMLFormElement
  //             if (form) {
  //               form.dispatchEvent(
  //                 new Event("submit", { cancelable: true, bubbles: true })
  //               )
  //             }
  //           }, 100)
  //         }
  //       }, 800)
  //     }
  //   } catch (error) {
  //     console.error("Error in handleCTAButtonClick:", error)
  //   }
  // }

  const handleCTAButtonClick = async () => {
    await copy(ctaSection.email)
    toast.success(`Email address copied! Reach out to us at ${ctaSection.email}`)
  }

  return (
    <section
      id="cta"
      className="flex w-full flex-col items-center justify-center"
    >
      <div className="w-full">
        <div className="border-border bg-secondary relative z-20 h-[400px] w-full overflow-hidden rounded-xl border shadow-xl md:h-[400px]">
          <Image
            src={ctaSection.backgroundImage}
            alt="Agent CTA Background"
            className="absolute inset-0 h-full w-full object-cover object-right invert md:object-center dark:invert-0"
            fill
            priority
          />
          <div className="absolute inset-0 -top-32 flex flex-col items-center justify-center md:-top-40">
            <h1 className="text-secondary-foreground max-w-xs text-center text-4xl font-medium tracking-tighter md:max-w-xl md:text-7xl">
              {ctaSection.title}
            </h1>
            <div className="absolute bottom-10 flex flex-col items-center justify-center gap-2">
              <button
                onClick={handleCTAButtonClick}
                className="flex h-10 w-fit cursor-pointer items-center justify-center rounded-full bg-white px-4 text-sm font-semibold text-black shadow-md transition-all ease-out hover:bg-white/90 active:scale-95"
              >
                {ctaSection.button.text}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
