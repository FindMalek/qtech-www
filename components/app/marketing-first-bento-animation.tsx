"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView } from "motion/react"

import { Icons } from "@/components/shared/icons"
import {
  Reasoning,
  ReasoningContent,
  ReasoningResponse,
} from "@/components/ui/reasoning"

export function KnowledgeBaseResponse() {
  const reasoningText = `I found that document for you! The 2022 client onboarding process document is located in Teams > Client Success > Onboarding > 2022. It contains the 7-step workflow we use, including the kickoff meeting template and success metrics. Let me know if you need me to summarize any specific section.`

  return (
    <Reasoning>
      <ReasoningContent className="">
        <ReasoningResponse text={reasoningText} />
      </ReasoningContent>
    </Reasoning>
  )
}

export function MarketingFirstBentoAnimation() {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const [animationStage, setAnimationStage] = useState(0)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    if (isInView) {
      timeoutId = setTimeout(() => {
        setAnimationStage(1)
        setTimeout(() => {
          setAnimationStage(2)
          setTimeout(() => {
            setAnimationStage(3)
          }, 3000)
        }, 2500)
      }, 1500)
    } else {
      setAnimationStage(0)
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [isInView])

  return (
    <div
      ref={ref}
      className="flex h-full w-full flex-col items-center justify-center gap-5 p-4"
    >
      <div className="from-background pointer-events-none absolute bottom-0 left-0 z-20 h-20 w-full bg-gradient-to-t to-transparent"></div>
      <motion.div
        className="mx-auto flex w-full max-w-md flex-col gap-3"
        animate={{
          y: animationStage >= 2 ? -80 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        {/* New Employee Question */}
        <div className="flex items-end justify-end gap-3">
          <motion.div
            className="bg-secondary text-secondary-foreground ml-auto max-w-[280px] rounded-2xl p-4 shadow-[0_0_10px_rgba(0,0,0,0.05)]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <p className="text-sm">
              Hi everyone! I&apos;m new here and trying to find the 2022 client
              onboarding process document. Anyone know where it might be stored?
            </p>
          </motion.div>
          <div className="bg-background border-border flex w-fit flex-shrink-0 items-center rounded-full border">
            <Image
              src="https://randomuser.me/api/portraits/men/42.jpg"
              alt="New Employee Avatar"
              className="size-8 flex-shrink-0 rounded-full"
              width={32}
              height={32}
            />
          </div>
        </div>

        {/* Time Passed Indicator */}
        {animationStage >= 1 && (
          <motion.div
            className="self-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-muted text-muted-foreground rounded-full px-3 py-1 text-xs">
              20 minutes later...
            </div>
          </motion.div>
        )}

        {/* Follow-up with @qtech tag */}
        {animationStage >= 2 && (
          <div className="flex items-end justify-end gap-3">
            <motion.div
              className="bg-secondary text-secondary-foreground ml-auto max-w-[280px] rounded-2xl p-4 shadow-[0_0_10px_rgba(0,0,0,0.05)]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
                delay: 0.2,
              }}
            >
              <p className="text-sm">
                Looks like everyone&apos;s busy!{" "}
                <span className="font-medium text-blue-500">@internalAI</span>{" "}
                can you help me find the 2022 client onboarding process
                document?
              </p>
            </motion.div>
            <div className="bg-background border-border flex w-fit flex-shrink-0 items-center rounded-full border">
              <Image
                src="https://randomuser.me/api/portraits/men/42.jpg"
                alt="New Employee Avatar"
                className="size-8 flex-shrink-0 rounded-full"
                width={32}
                height={32}
              />
            </div>
          </div>
        )}

        {/* AI Response */}
        {animationStage >= 3 && (
          <div className="flex items-start gap-2">
            <div className="bg-background border-border flex size-10 flex-shrink-0 items-center justify-center rounded-full border shadow-[0_0_10px_rgba(0,0,0,0.05)]">
              <Icons.logo className="fill-secondary-foreground size-4" />
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              <div className="bg-accent border-border min-w-[220px] rounded-xl border p-4 shadow-[0_0_10px_rgba(0,0,0,0.05)] md:min-w-[320px]">
                <KnowledgeBaseResponse />
              </div>
            </motion.div>
          </div>
        )}
      </motion.div>
    </div>
  )
}
