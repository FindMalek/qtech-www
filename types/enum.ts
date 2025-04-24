import { z } from "zod"

export const billingCycle = z.enum(["monthly", "yearly"])
export type BillingCycle = z.infer<typeof billingCycle>
