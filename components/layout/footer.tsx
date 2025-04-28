"use client"

import Link from "next/link"
import { ChevronRightIcon } from "@radix-ui/react-icons"

import { siteConfig } from "@/config/site"
import { useMediaQuery } from "@/hooks/use-media-query"

import { Icons } from "@/components/shared/icons"
import { FlickeringGrid } from "@/components/ui/flickering-grid"

export function Footer() {
  const tablet = useMediaQuery("(max-width: 1024px)")

  return (
    <footer id="footer" className="w-full pb-0">
      <div className="flex flex-col p-10 md:flex-row md:items-center md:justify-between">
        <div className="mx-0 flex max-w-xs flex-col items-start justify-start gap-y-5">
          <Link href="/" className="flex items-center gap-2">
            <Icons.logo className="size-8" />
            <p className="text-primary text-xl font-semibold">
              {siteConfig.name}
            </p>
          </Link>
          <p className="text-muted-foreground font-medium tracking-tight">
            {siteConfig.hero.description}
          </p>
        </div>
        <div className="pt-5 md:w-1/3">
          <div className="flex flex-col items-start justify-start gap-y-5 md:flex-row md:items-center md:justify-between lg:pl-10">
            {siteConfig.footerLinks.map((column, columnIndex) => (
              <ul key={columnIndex} className="flex flex-col gap-y-2">
                <li className="text-primary mb-2 text-sm font-semibold">
                  {column.title}
                </li>
                {column.links.map((link) => (
                  <li
                    key={link.id}
                    className="text-muted-foreground group inline-flex cursor-pointer items-center justify-start gap-1 text-[15px]/snug"
                  >
                    <Link href={link.href}>{link.name}</Link>
                    <div className="border-border flex size-4 translate-x-0 transform items-center justify-center rounded border opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                      <ChevronRightIcon className="h-4 w-4 " />
                    </div>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className="relative z-0 mt-24 h-48 w-full md:h-64">
        <div className="to-background absolute inset-0 z-10 bg-gradient-to-t from-transparent from-40%" />
        <div className="absolute inset-0 mx-6">
          <FlickeringGrid
            text={tablet ? "QTech" : "AI For Your Business"}
            fontSize={tablet ? 70 : 90}
            className="h-full w-full"
            squareSize={2}
            gridGap={tablet ? 2 : 3}
            color="#6B7280"
            maxOpacity={0.3}
            flickerChance={0.1}
          />
        </div>
      </div>
    </footer>
  )
}
