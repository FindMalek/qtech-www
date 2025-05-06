export * from "./chatbot"
export * from "./enum"

export type SiteLinks = {
  twitter: string
  github: string
  facebook: string
  instagram: string
  linkedin: string
  contact: string
  demo: string
  meet: string
}

export type SiteImages = {
  default: string
  notFound: string
  logo: string
}

export type SiteAuthor = {
  name: string
  url: string
  email: string
  github?: string
}

export type SiteNavLink = {
  id: number
  name: string
  href: string
}

export type SiteNavigation = {
  links: SiteNavLink[]
}

export type SiteCTA = {
  text: string
  href: string
}

export type SiteHero = {
  badgeIcon: React.ReactNode
  badge: string
  title: string
  description: string
  cta: {
    primary: SiteCTA
    secondary?: SiteCTA
  }
}

export type SiteCompanyShowcase = {
  companyLogos: {
    id: number
    name: string
    logo: React.ReactNode
  }[]
}

export type SiteBentoItem = {
  id: number
  title: string
  description: string
  content: React.ReactNode
}

export type SiteBentoSection = {
  title: string
  description: string
  items: SiteBentoItem[]
}

export type SiteQuoteAuthor = {
  name: string
  role: string
  image: string
}

export type SiteQuoteSection = {
  quote: string
  author: SiteQuoteAuthor
}

export type SiteFeatureItem = {
  id: number
  title: string
  content: string
  image: string
}

export type SiteGrowthItem = {
  id: number
  title: string
  description: string
  content: React.ReactNode
}

export type SiteGrowthSection = {
  title: string
  description: string
  items: SiteGrowthItem[]
}

export type SiteUseCasesItem = {
  name: string
  description: string
  icon: React.ReactNode
}

export type SiteUseCasesSection = {
  title: string
  description: string
  items: SiteUseCasesItem[]
}

export type SitePricingItem = {
  name: string
  description: string
  price: string
  features: string[]
  buttonText: string
  buttonColor: string
  isPopular: boolean
}

export type SitePricingSection = {
  title: string
  description: string
  pricingItems: SitePricingItem[]
}

export type SiteTestimonial = {
  id: number
  name: string
  role: string
  img: string
  description: React.ReactNode
}

export type SiteFooterLink = {
  title: string
  links: SiteNavLink[]
}

export type SiteFooterLinks = SiteFooterLink[]

export type SiteCTASection = {
  id: string
  title: string
  button: SiteCTA
  subtext: string
  backgroundImage: string
}

export type SiteFAQSection = {
  title: string
  description: string
  faQitems: SiteFAQItem[]
}

export type SiteConfig = {
  name: string
  description: string
  url: string
  links: SiteLinks
  images: SiteImages
  author: SiteAuthor
  keywords: string[]
  nav: SiteNavigation
  hero: SiteHero
  companyShowcase: SiteCompanyShowcase
  bentoSection: SiteBentoSection
  quoteSection: SiteQuoteSection
  featureSection: SiteFeatureSection
  growthSection: SiteGrowthSection
  useCasesSection: SiteUseCasesSection
  pricing: SitePricingSection
  testimonials: SiteTestimonialSection
  footerLinks: SiteFooterLinks
  ctaSection: SiteCTASection
  faqSection: SiteFAQSection
}

export interface ConversationHistory {
  role: string
  message: string
  toolCall?: string
}

export interface ContactEmailIntroductionProps {
  userName: string
  userEmail: string
  contactPurpose: string
  conversation: ConversationHistory[]
}
