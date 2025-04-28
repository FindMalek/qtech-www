import { ToolName } from "@/types/enum"

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
    case "providePlanInformation":
      return "Plan Information"
  }
}
