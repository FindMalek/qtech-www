import type { Metadata } from "next"

import { MarketingBentoSection } from "@/components/app/marketing-bento-section"
import { MarketingCompanyShowcase } from "@/components/app/marketing-company-showcase"
import { MarketingCTASection } from "@/components/app/marketing-cta-section"
import { MarketingFAQSection } from "@/components/app/marketing-faq-section"
import { MarketingFeatureSection } from "@/components/app/marketing-feature-section"
import { MarketingGrowthSection } from "@/components/app/marketing-growth-section"
import { MarketingHeroSection } from "@/components/app/marketing-hero-section"
import { MarketingPricingSection } from "@/components/app/marketing-pricing-section"
import { MarketingQuoteSection } from "@/components/app/marketing-quote-section"
import { MarketingTestimonialSection } from "@/components/app/marketing-testimonial-section"

export const metadata: Metadata = {
  title: "Your Partner for Safe, Accurate Internal AI",
}

export default function MarketingPage() {
  return (
    <main className="divide-border flex min-h-screen w-full flex-col items-center justify-center divide-y">
      <MarketingHeroSection />
      <MarketingCompanyShowcase />
      <MarketingBentoSection />
      <MarketingQuoteSection />
      <MarketingFeatureSection />
      <MarketingGrowthSection />
      <MarketingPricingSection />
      <MarketingTestimonialSection />
      <MarketingFAQSection />
      <MarketingCTASection />
    </main>
  )
}
