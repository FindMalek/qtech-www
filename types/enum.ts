import { z } from "zod"

export const workType = z.enum(["full-time", "part-time", "freelance"])
export type WorkType = z.infer<typeof workType>

export const projectStatus = z.enum([
  "active",
  "wip",
  "inactive",
  "on-hold",
  "draft",
  "archived",
])
export type ProjectStatus = z.infer<typeof projectStatus>

export const toolName = z.enum([
  "saveEmail",
  "scheduleMeeting",
  "generatePricing",
  "getResume",
])
export type ToolName = z.infer<typeof toolName>
