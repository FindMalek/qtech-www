import { z } from "zod"

export const legalSchema = z.object({
  slug: z.string(),
  title: z.string().min(1),
  overview: z.string().min(1),
})

export type LegalRo = z.infer<typeof legalSchema>

export const companySchema = z.object({
  slug: z.string(),
  title: z.string().min(1),
  overview: z.string().min(1),
})

export type CompanyRo = z.infer<typeof companySchema>

export const emailFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Message is required" }),
})

export type EmailFormValues = z.infer<typeof emailFormSchema>

export const meetingSchedulerSchema = z.object({
  date: z.date({
    required_error: "Please select a date",
  }),
  timeSlot: z.string({
    required_error: "Please select a time slot",
  }),
  duration: z.enum(["15", "30"], {
    required_error: "Please select meeting duration",
  }),
})

export type MeetingSchedulerValues = z.infer<typeof meetingSchedulerSchema>

export const pricingEstimatorSchema = z.object({
  complexity: z.number().min(0).max(100),
  timeframe: z.number().min(0).max(100),
  selectedFeatures: z.array(z.string()),
})

export type PricingEstimatorValues = z.infer<typeof pricingEstimatorSchema>
