import { Geist, Geist_Mono } from "next/font/google"

import { cn } from "@/lib/utils"

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const fonts = cn(
  geistSans.className,
  geistMono.className,
  "touch-manipulation font-sans antialiased"
)
