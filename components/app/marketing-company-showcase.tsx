import Link from "next/link"

import { siteConfig } from "@/config/site"

export function MarketingCompanyShowcase() {
  const { companyShowcase } = siteConfig

  return (
    <section
      id="company"
      className="relative flex w-full flex-col items-center justify-center gap-10 px-6 py-10 pt-20"
    >
      <p className="text-muted-foreground font-medium">
        Trusted by Innovative Companies:
      </p>
      <div className="border-border z-20 grid w-full max-w-7xl grid-cols-2 items-center justify-center overflow-hidden border-y">
        {companyShowcase.companyLogos.map((logo) => (
          <Link
            href="#"
            className="before:bg-border after:bg-border group relative flex h-28 w-full items-center justify-center p-4 before:absolute before:-left-1 before:top-0 before:z-10 before:h-screen before:w-px before:content-[''] after:absolute after:-top-1 after:left-0 after:z-10 after:h-px after:w-screen after:content-['']"
            key={logo.id}
          >
            <div className="[cubic-bezier(0.165, 0.84, 0.44, 1)] flex h-full w-full translate-y-0 items-center justify-center transition-all duration-300">
              {logo.logo}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
