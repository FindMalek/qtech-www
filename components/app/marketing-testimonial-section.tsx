import { siteConfig } from "@/config/site"

import { MarketingSocialProofTestimonials } from "@/components/app/marketing-testimonial-scroll"
import { SectionHeader } from "@/components/shared/section-header"

export function MarketingTestimonialSection() {
  const { testimonials } = siteConfig

  return (
    <section
      id="testimonials"
      className="flex w-full flex-col items-center justify-center"
    >
      <SectionHeader>
        <h2 className="text-balance text-center text-3xl font-medium tracking-tighter md:text-4xl">
          Empower Your Workflow with AI
        </h2>
        <p className="text-muted-foreground text-balance text-center font-medium">
          Ask your AI Agent for real-time collaboration, seamless integrations,
          and actionable insights to streamline your operations.
        </p>
      </SectionHeader>
      <MarketingSocialProofTestimonials testimonials={testimonials} />
    </section>
  )
}
