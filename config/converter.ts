import { ProjectType, ToolName } from "@/types/enum"

export const convertToolName = (name: ToolName) => {
  switch (name) {
    case "saveEmail":
      return "Save Email"
    case "scheduleMeeting":
      return "Schedule Meeting"
    case "generatePricing":
      return "Generate Pricing"
    case "getResume":
      return "View Resume"
  }
}

export const convertProjectType = (type: ProjectType) => {
  switch (type) {
    case "website":
      return "Static Website"
    case "automation":
      return "Automation Scripts"
    case "ecommerce":
      return "E-commerce Store"
    case "webapp":
      return "Web Application"
    case "other":
      return "Other"
  }
}
