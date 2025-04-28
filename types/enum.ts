import { z } from "zod"

export const toolName = z.enum([
  "saveEmail",
  "scheduleMeeting",
  "generatePricing",
  "getResume",
])
export type ToolName = z.infer<typeof toolName>
