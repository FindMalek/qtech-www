"use client"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { SectionHeader } from "@/components/shared/section-header"

export function MarketingUseCasesSection() {
  const { title, description, items } = siteConfig.useCasesSection

  return (
    <section
      id="use-cases"
      className="relative flex w-full flex-col items-center justify-center px-5 md:px-10"
    >
      <div className="relative mx-5 border-x md:mx-10">
        <div className="absolute -left-4 top-0 h-full w-4 bg-[size:10px_10px] text-gray-950/5 [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)] md:-left-14 md:w-14"></div>
        <div className="absolute -right-4 top-0 h-full w-4 bg-[size:10px_10px] text-gray-950/5 [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)] md:-right-14 md:w-14"></div>

        <SectionHeader>
          <h2 className="text-balance text-center text-3xl font-medium tracking-tighter md:text-4xl">
            {title}
          </h2>
          <p className="text-muted-foreground text-balance text-center font-medium">
            {description}
          </p>
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ name, description, icon: Icon }, index) => (
            <div
              key={index}
              className={cn(
                "hover:bg-secondary/20 flex flex-col items-center justify-center gap-y-2 border-b px-4 py-8 transition-colors",
                "last:border-b-0",
                "md:[&:nth-child(2n+1)]:border-r md:[&:nth-child(n+5)]:border-b-0",
                "lg:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(n+4)]:border-b-0"
              )}
            >
              <div className="flex flex-col items-center gap-y-2">
                <div className="from-primary to-primary/80 group-hover:from-secondary group-hover:to-secondary/80 text-secondary rounded-lg bg-gradient-to-b p-2 transition-colors">
                  {Icon}
                </div>
                <h2 className="text-card-foreground text-balance text-center text-xl font-medium">
                  {name}
                </h2>
              </div>
              <p className="text-muted-foreground mx-auto max-w-md text-balance text-center text-sm">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
