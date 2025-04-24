import { z } from "zod"

export const billingCycle = z.enum(["monthly", "yearly"])
export type BillingCycle = z.infer<typeof billingCycle>
export const LIST_OF_BILLING_CYCLES = ["monthly", "yearly"] as const
export type ListOfBillingCycles = (typeof LIST_OF_BILLING_CYCLES)[number]
