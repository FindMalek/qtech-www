import { BillingCycle } from "@/types/enum"

export function convertBillingCycleToPrice(entity: BillingCycle) {
  switch (entity) {
    case "monthly":
      return "Monthly"
    case "yearly":
      return "Yearly"
  }
}
