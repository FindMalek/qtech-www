"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "motion/react"

interface DataInsightsProps {
  startAnimationDelay?: number
  once?: boolean
}

export function MarketingThirdBentoAnimation({
  startAnimationDelay = 0,
  once = false,
}: DataInsightsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once })
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    if (isInView) {
      setShouldAnimate(true)
    } else {
      setShouldAnimate(false)
    }
  }, [isInView])

  // Generate random data points
  const generateDataPoints = (count: number, min: number, max: number) => {
    return Array.from(
      { length: count },
      () => min + Math.random() * (max - min)
    )
  }

  // Data for visualization
  const complexData = generateDataPoints(20, 10, 90)
  const simplifiedData = [30, 45, 60]

  return (
    <div
      ref={ref}
      className="relative flex h-[300px] w-full items-center justify-center overflow-hidden"
    >
      <div className="relative h-full w-full">
        {/* Complex data visualization (scattered dots) */}
        <div className="absolute inset-0 flex items-center justify-center">
          {complexData.map((value, index) => (
            <motion.div
              key={`complex-${index}`}
              className="bg-secondary-foreground absolute rounded-full"
              style={{
                width: `${4 + Math.random() * 4}px`,
                height: `${4 + Math.random() * 4}px`,
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                opacity: 0.3 + Math.random() * 0.4,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: shouldAnimate ? 0.3 + Math.random() * 0.4 : 0,
                scale: shouldAnimate ? 1 : 0,
                x: shouldAnimate ? [0, Math.random() * 10 - 5] : 0,
                y: shouldAnimate ? [0, Math.random() * 10 - 5] : 0,
              }}
              transition={{
                duration: 0.5 + Math.random() * 0.5,
                delay: startAnimationDelay + index * 0.03,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        {/* Central processing circle */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: shouldAnimate ? 1 : 0 }}
          transition={{
            duration: 0.8,
            delay: startAnimationDelay + 0.6,
          }}
        >
          {/* Processing circle */}
          <motion.div
            className="bg-secondary-foreground/35 relative flex h-20 w-20 items-center justify-center rounded-full backdrop-blur-sm"
            initial={{ scale: 0 }}
            animate={{ scale: shouldAnimate ? 1 : 0 }}
            transition={{
              duration: 0.8,
              delay: startAnimationDelay + 0.7,
              ease: "backOut",
            }}
          >
            {/* Pulsing ring */}
            <motion.div
              className="border-secondary-foreground/30 absolute inset-0 rounded-full border-2"
              animate={{
                scale: shouldAnimate ? [0.8, 1.1, 0.8] : 0.8,
                opacity: shouldAnimate ? [0.2, 0.6, 0.2] : 0,
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            {/* AI text */}
            <motion.span
              className="text-secondary text-lg font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: shouldAnimate ? 1 : 0 }}
              transition={{
                duration: 0.5,
                delay: startAnimationDelay + 1,
              }}
            >
              AI
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Simplified data (clean bars) */}
        <motion.div
          className="absolute bottom-10 left-1/2 flex -translate-x-1/2 items-end gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: shouldAnimate ? 1 : 0,
            y: shouldAnimate ? 0 : 20,
          }}
          transition={{
            duration: 0.8,
            delay: startAnimationDelay + 1.2,
            ease: "easeOut",
          }}
        >
          {simplifiedData.map((height, index) => (
            <motion.div
              key={`simple-${index}`}
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{
                opacity: shouldAnimate ? 1 : 0,
                scaleY: shouldAnimate ? 1 : 0,
              }}
              transition={{
                duration: 0.6,
                delay: startAnimationDelay + 1.4 + index * 0.2,
                ease: "easeOut",
              }}
            >
              <div
                className="bg-secondary-foreground w-10 rounded-sm"
                style={{
                  height: `${height}px`,
                  opacity: 0.7 + index * 0.1,
                }}
              />
              <motion.div
                className="bg-secondary-foreground/30 h-1 w-10 rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: shouldAnimate ? 1 : 0 }}
                transition={{
                  duration: 0.3,
                  delay: startAnimationDelay + 1.8 + index * 0.2,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Connecting lines */}
        {complexData.slice(0, 8).map((_, index) => (
          <motion.div
            key={`line-${index}`}
            className="bg-secondary-foreground/20 absolute"
            style={{
              height: "1px",
              width: "40px",
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              rotate: `${Math.random() * 360}deg`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: shouldAnimate ? 0.2 + Math.random() * 0.3 : 0,
              scale: shouldAnimate ? 1 : 0,
            }}
            transition={{
              duration: 0.5,
              delay: startAnimationDelay + 0.8 + index * 0.1,
            }}
          />
        ))}
      </div>
    </div>
  )
}
