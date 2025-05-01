import { z } from "zod"

import { siteConfig } from "@/config/site"

/**
 * Defines all available tools for the chat API
 */
export const tools = {
  saveEmail: {
    description: "Save the user's email and contact information",
    parameters: z.object({
      purpose: z.string().describe("The purpose of collecting the email"),
    }),
    implementation: async (params: unknown) => {
      try {
        // Type guard and actual implementation
        if (
          typeof params === "object" &&
          params &&
          "purpose" in params &&
          typeof params.purpose === "string"
        ) {
          return { content: `Email saved for purpose: ${params.purpose}` }
        }
        throw new Error(
          `Invalid parameters for saveEmail: ${JSON.stringify(params)}`
        )
      } catch (error) {
        console.error("Error in saveEmail tool:", error)
        return { content: "Failed to save email. Please try again." }
      }
    },
  },
  scheduleMeeting: {
    description:
      "Direct user to QTech's calendar for scheduling a consultation",
    parameters: z.object({
      purpose: z.string().describe("The purpose of the meeting"),
      calendarLink: z
        .string()
        .default(siteConfig.links.meet)
        .describe("The link to QTech's calendar"),
    }),
    implementation: async (params: unknown) => {
      try {
        if (
          typeof params === "object" &&
          params &&
          "purpose" in params &&
          typeof params.purpose === "string" &&
          "calendarLink" in params &&
          typeof params.calendarLink === "string"
        ) {
          return {
            content: `Meeting scheduled for purpose: ${params.purpose}, calendar link: ${params.calendarLink}`,
          }
        }
        throw new Error(
          `Invalid parameters for scheduleMeeting: ${JSON.stringify(params)}`
        )
      } catch (error) {
        console.error("Error in scheduleMeeting tool:", error)
        return { content: "Failed to schedule meeting. Please try again." }
      }
    },
  },
  generatePricing: {
    description: "Generate a pricing estimate for a chatbot solution",
    parameters: z.object({
      features: z
        .array(z.string())
        .describe("List of features required for the chatbot"),
      timeline: z.string().describe("Expected timeline for the implementation"),
    }),
    implementation: async (params: unknown) => {
      try {
        if (
          typeof params === "object" &&
          params &&
          "features" in params &&
          Array.isArray(params.features) &&
          "timeline" in params &&
          typeof params.timeline === "string"
        ) {
          return {
            content: `Pricing generated for features: ${params.features.join(", ")}, timeline: ${params.timeline}`,
          }
        }
        throw new Error(
          `Invalid parameters for generatePricing: ${JSON.stringify(params)}`
        )
      } catch (error) {
        console.error("Error in generatePricing tool:", error)
        return {
          content: "Failed to generate pricing estimate. Please try again.",
        }
      }
    },
  },
  getResume: {
    description: "Provide access to company information",
    parameters: z.object({
      purpose: z
        .string()
        .optional()
        .describe("The purpose for wanting company information"),
    }),
    implementation: async (params: unknown) => {
      try {
        if (typeof params === "object" && params) {
          const purpose =
            "purpose" in params && typeof params.purpose === "string"
              ? params.purpose
              : "general inquiry"
          return {
            content: `Company information provided for purpose: ${purpose}`,
          }
        }
        throw new Error(
          `Invalid parameters for getResume: ${JSON.stringify(params)}`
        )
      } catch (error) {
        console.error("Error in getResume tool:", error)
        return {
          content: "Failed to retrieve company information. Please try again.",
        }
      }
    },
  },
  providePlanInformation: {
    description: "Provide detailed information about a specific pricing plan",
    parameters: z.object({
      planName: z
        .string()
        .describe(
          "The name of the pricing plan (Basic or Completely Customable)"
        ),
      includeContactOptions: z
        .boolean()
        .describe("Whether to include information about contacting options"),
    }),
    implementation: async (params: unknown) => {
      try {
        if (
          typeof params === "object" &&
          params &&
          "planName" in params &&
          typeof params.planName === "string" &&
          "includeContactOptions" in params &&
          typeof params.includeContactOptions === "boolean"
        ) {
          return {
            content:
              `Plan information provided for plan: ${params.planName}, ` +
              `contact options ${params.includeContactOptions ? "included" : "not included"}`,
          }
        }
        throw new Error(
          `Invalid parameters for providePlanInformation: ${JSON.stringify(params)}`
        )
      } catch (error) {
        console.error("Error in providePlanInformation tool:", error)
        return {
          content: "Failed to provide plan information. Please try again.",
        }
      }
    },
  },
} as const
