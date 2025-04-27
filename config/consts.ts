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
  BASE_PRICE: 6000,
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
  { id: "auth", label: "Enterprise Authentication (SSO/SAML)", value: 1500 },
  { id: "self_hosted", label: "Self-Hosted Deployment", value: 2000 },
  { id: "cloud_hosted", label: "Cloud-Hosted Solution", value: 1000 },
  {
    id: "ms_integration",
    label: "Microsoft 365 Integration (OneDrive/Teams)",
    value: 1800,
  },
  { id: "clickup", label: "ClickUp Integration", value: 1200 },
  { id: "jira", label: "Jira Integration", value: 1400 },
  { id: "salesforce", label: "Salesforce CRM Integration", value: 2500 },
  { id: "hubspot", label: "HubSpot CRM Integration", value: 2000 },
  { id: "zendesk", label: "Zendesk Integration", value: 1500 },
  { id: "secure_context", label: "Enterprise Context Security", value: 3000 },
  { id: "data_retention", label: "Customizable Data Retention", value: 1200 },
  { id: "analytics", label: "Advanced Analytics Dashboard", value: 1800 },
  { id: "multi_lang", label: "Multi-language Support", value: 2200 },
]

export const MAX_MESSAGES_ALLOWED = 20
