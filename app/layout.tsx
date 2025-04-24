import "@/styles/globals.css"

import type { Metadata, Viewport } from "next"

import { geistMono, geistSans } from "@/config/fonts"
import { siteConfig } from "@/config/site"

import { Analytics } from "@/components/layout/analytics"
import { Footer } from "@/components/layout/footer"
import { LayoutWrapper } from "@/components/layout/layout-wrapper"
import { Navbar } from "@/components/layout/navbar"
import { TailwindIndicator } from "@/components/layout/tailwind-indicator"
import { Toaster } from "@/components/ui/sonner"

interface RootLayoutProps {
  children: React.ReactNode
}

export const viewport: Viewport = {
  width: "device-width",
  height: "device-height",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: false,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | Malek Gara-Hellal`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: "findmalek",
      url: "https://www.findmalek.com",
    },
  ],
  creator: "findmalek",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.images.default, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.images.default],
    creator: "@findmalek",
  },
  icons: {
    icon: "/favicons/favicon.ico",
    shortcut: "/favicons/favicon-16x16.png",
    apple: "/favicons/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
  metadataBase: new URL(siteConfig.url),
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background font-sans antialiased`}
      >
        <LayoutWrapper>
          <div className="relative mx-auto max-w-7xl border-x">
            <div className="border-border absolute left-6 top-0 z-10 block h-full w-px border-l"></div>
            <div className="border-border absolute right-6 top-0 z-10 block h-full w-px border-r"></div>
            <Navbar />
            {children}
            <Footer />
          </div>
          <Analytics />
          <Toaster />
          <TailwindIndicator />
        </LayoutWrapper>
      </body>
    </html>
  )
}
