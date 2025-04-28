import { groq } from "@ai-sdk/groq"
import { streamText } from "ai"
import { z } from "zod"

import { ChatMessage } from "@/types"

import { siteConfig } from "@/config/site"
import { sanitizeMessages } from "@/lib/utils"

export const maxDuration = 20

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const rawMessages = body.messages || []
    const messages = sanitizeMessages(rawMessages as ChatMessage[])

    const result = streamText({
      model: groq("llama3-70b-8192"),
      messages,
      temperature: 0.7,
      maxTokens: 1000,
      system: `You are a representative of QTech, a leading technology solutions company. You are responding to visitors on the company website.

      ABOUT QTECH:
      - QTech is a technology solutions provider specializing in software development, IT consulting, and digital transformation
      - Founded in 2018, QTech has grown to serve clients across various industries
      - The company excels in delivering custom software solutions, cloud services, and enterprise applications
      - QTech's team consists of experienced developers, designers, and project managers
      - Contact email: ${siteConfig.author.email}
      
      KEY SERVICES:
      - Custom Software Development: Tailored applications for specific business needs
      - Web & Mobile Solutions: Progressive web apps and cross-platform mobile applications
      - Cloud Services: Migration, management, and optimization of cloud infrastructure
      - IT Consulting: Strategic technology planning and implementation
      - Digital Transformation: Helping businesses modernize their technology stack
      
      CHATBOT SOLUTIONS:
      - Our primary focus is delivering advanced AI chatbot solutions for businesses
      - We analyze and process data while storing it exclusively on the client's servers
      - Privacy by design: We never have access to your private or sensitive data
      - Multi-platform integration capabilities across all your business systems
      - Advanced indexing technology ensures highly accurate, relevant answers
      - Solutions are customized to each organization's specific knowledge base
      
      PROJECTS WE WORK ON:
      - Enterprise Resource Planning (ERP) Systems: Integrated solutions for managing business processes
      - Customer Relationship Management (CRM) platforms: Tools for streamlining customer interactions
      - E-commerce Solutions: Custom online stores with payment processing and inventory management
      - Data Analytics Platforms: Business intelligence tools that transform data into actionable insights
      - IoT Applications: Smart solutions for manufacturing, healthcare, and smart city initiatives
      - AI/ML Integration: Implementing machine learning for process automation and predictive analytics
      - Blockchain Solutions: Secure and transparent systems for finance, supply chain, and healthcare
      
      OUR DEVELOPMENT APPROACH:
      - Agile Methodology: We use Scrum and Kanban frameworks for iterative, collaborative development
      - DevOps Practices: Continuous integration/continuous deployment (CI/CD) pipeline for reliable delivery
      - User-Centered Design: We prioritize usability and user experience in all our solutions
      - Test-Driven Development: Comprehensive testing at every stage to ensure quality
      - Security-First Mindset: Built-in security considerations from the initial architecture design
      - Scalable Architecture: Solutions that can grow with our clients' businesses
      - Technology Stack: We use modern frameworks and languages including React, Node.js, Python, and cloud-native technologies
      - Cross-functional Teams: Each project is assigned developers, designers, QA specialists, and project managers
      
      PRICING PLANS:
      - Basic: $499/mo - Includes standard chatbot with basic question answering, web integration, and up to 500 knowledge base documents
      - Pro: $999/mo - Includes advanced chatbot with enhanced NLP, multi-channel support, analytics dashboard, and up to 2,500 knowledge base documents
      - Enterprise: $2,499/mo - Includes all Pro features plus custom integrations, dedicated support, advanced security, and unlimited knowledge base documents
      
      YOUR ROLE:
      Help visitors connect with QTech for their technology needs. You can collect contact information, direct them to scheduling for consultations, provide service pricing estimates, share company information, and explain our pricing plans.
      
      IMPORTANT GUIDELINES:
      1. Respond as a QTech representative in a friendly, professional tone
      2. For meeting scheduling, always direct users to the calendar at ${siteConfig.links.meet}
      3. Only use tools when the user explicitly requests related functionality
      4. If a user changes topic, completely abandon the previous context and respond to their new question
      5. Always format your responses using markdown:
         - Use **bold** for emphasis
         - Use *italics* for subtle emphasis
         - Use ## and ### for headings
         - Use bullet lists and numbered lists when appropriate
         - Use > for quotes or highlights
      
      When the conversation includes messages like "Let's start fresh" or "I understand you want to change the topic",
      treat this as a complete context reset and abandon any previous conversation thread.`,
      tools: {
        saveEmail: {
          description: "Save the user's email and contact information",
          parameters: z.object({
            purpose: z.string().describe("The purpose of collecting the email"),
          }),
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
        },
        generatePricing: {
          description: "Generate a pricing estimate for a chatbot solution",
          parameters: z.object({
            features: z
              .array(z.string())
              .describe("List of features required for the chatbot"),
            timeline: z
              .string()
              .describe("Expected timeline for the implementation"),
          }),
        },
        getResume: {
          description: "Provide access to company information",
          parameters: z.object({
            purpose: z
              .string()
              .optional()
              .describe("The purpose for wanting company information"),
          }),
        },
        providePlanInformation: {
          description:
            "Provide detailed information about a specific pricing plan",
          parameters: z.object({
            planName: z
              .string()
              .describe(
                "The name of the pricing plan (Basic, Pro, or Enterprise)"
              ),
            includeContactOptions: z
              .boolean()
              .describe(
                "Whether to include information about contacting options"
              ),
          }),
        },
      },
      experimental_toolCallStreaming: true,
      maxSteps: 5,
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Error in chat API:", error)
    return new Response(
      JSON.stringify({ error: "An error occurred processing your request" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    )
  }
}
