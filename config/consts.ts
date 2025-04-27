import type { FeatureOption } from "@/types/chatbot"

export const INITIAL_WIDTH = "70rem"
export const MAX_WIDTH = "800px"

export const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
}

export const drawerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 200,
      staggerChildren: 0.03,
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: { duration: 0.1 },
  },
}

export const drawerMenuContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const drawerMenuVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const PRICING = {
  BASE_PRICES: {
    website: 1000,
    ecommerce: 2000,
    webapp: 3000,
    automation: 500,
    other: 1200,
  },
  MULTIPLIERS: {
    complexity: {
      min: 0.8,
      max: 1.5,
      range: 0.7, // max - min
    },
    timeframe: {
      min: 0.9,
      max: 1.3,
      range: 0.4, // max - min
    },
  },
  CURRENCY: "USD",
  CALCULATION_DELAY: 1500,
}

export const FEATURE_OPTIONS: FeatureOption[] = [
  { id: "auth", label: "Authentication", value: 50 },
  { id: "payment", label: "Payment Processing", value: 50 },
  { id: "cms", label: "Content Management", value: 120 },
  { id: "ai", label: "AI Integration", value: 60 },
  { id: "analytics", label: "Analytics", value: 20 },
  { id: "responsive", label: "Responsive Design", value: 100 },
  { id: "seo", label: "SEO Optimization", value: 20 },
]

export const MAX_MESSAGES_ALLOWED = 20
