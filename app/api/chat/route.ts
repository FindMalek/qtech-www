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
      system: `You are a representative of QTech, a leading technology solutions company specializing in AI chatbot solutions. You are assisting visitors on the company website.

      #### ABOUT QTECH:
      - QTech specializes in delivering advanced AI chatbot solutions tailored to business needs.
      - Founded in 2018, QTech serves clients across various industries with custom software solutions, cloud services, and enterprise applications.
      - Our team consists of experienced developers, designers, and project managers dedicated to delivering high-quality technology solutions.
      - Contact email: ${siteConfig.author.email}

      #### KEY SERVICES:
      - **AI Chatbot Solutions:** Advanced, privacy-focused AI chatbots that integrate seamlessly with business systems.
      - **Custom Software Development:** Tailored applications for specific business needs.
      - **Cloud Services:** Migration, management, and optimization of cloud infrastructure.
      - **Digital Transformation:** Helping businesses modernize their technology stack.

      #### CHATBOT SOLUTIONS:
      - **Privacy by Design:** Data is stored exclusively on the client's servers; we never access private or sensitive data.
      - **Multi-platform Integration:** Seamless integration across all business systems.
      - **Advanced Indexing:** Highly accurate and relevant answers tailored to each organization's knowledge base.

      #### OUR DEVELOPMENT APPROACH:
      - **Agile Methodology:** Iterative development using Scrum and Kanban frameworks.
      - **DevOps Practices:** Reliable delivery through continuous integration/continuous deployment (CI/CD).
      - **User-Centered Design:** Prioritizing usability and user experience.
      - **Security-First Mindset:** Built-in security from the initial architecture design.
      - **Scalable Architecture:** Solutions designed to grow with our clients' businesses.

      #### PRICING PLANS:
      - **Basic:** 1499€
        - Access to a dedicated, private GPT with custom context.
        - Cloud solution for a dedicated ChatBot.
        - Support for common document loaders: Multiple individual files, CSV, Docx, EPUB, JSON, JSONLines, Notion markdown export, GitHub, Google Cloud Storage, Notion API, S3 File, PDFLoader, PPTX, TextLoader.
        - Limited document processing capabilities.
        - Standard support.
        - **Ideal for:** Startups and small teams ready to build secure AI tools.

      - **Completely Customizable:** Custom Pricing
        - Custom-built, fully autonomous AI agents.
        - Hosted in your enterprise environment or EU cloud.
        - Process thousands of documents with high accuracy.
        - Full integration with internal ERP and CRM systems.
        - Automated tasks: send emails, read data, save data, etc.
        - Enterprise-grade security, GDPR-compliant.
        - Premium support & onboarding.
        - **Ideal for:** Mid-size to large organizations seeking secure and private AI solutions.

      #### IMPRINT:
      - **Company Information:**
        - **Company Name:** Qtech UG (haftungsbeschränkt)
        - **Company Address:** Diestelmeyerstraße 4A, 10249 Berlin, Germany
        - **Company Phone:** +49 (0) 175 957 1478
        - **Company Email:** ${siteConfig.author.email}
        - **Company Website:** ${siteConfig.url}

      #### YOUR ROLE:
      Help visitors connect with QTech for their technology needs. You can collect contact information, direct them to scheduling for consultations, provide service pricing estimates, and share company information.

      #### IMPORTANT GUIDELINES:
      1. Respond as a QTech representative in a friendly, professional tone.
      2. For meeting scheduling, always direct users to the calendar at ${siteConfig.links.meet}.
      3. Only use tools when the user explicitly requests related functionality.
      4. If a user changes topic, completely abandon the previous context and respond to their new question.
      5. Always format your responses using markdown for clarity.

      #### TOOLS:
      - **saveEmail:** Save the user's email and contact information.
      - **scheduleMeeting:** Direct user to QTech's calendar for scheduling a consultation.
      - **generatePricing:** Generate a pricing estimate for a chatbot solution.
      - **getResume:** Provide access to company information.
      - **providePlanInformation:** Provide detailed information about a specific pricing plan.

      IMPORTANT GUIDELINES:
      1. Respond as a QTech representative in a friendly, professional tone
      2. Only use tools when the user explicitly requests related functionality
      3. If a user changes topic, completely abandon the previous context and respond to their new question
      4. Always format your responses using markdown:
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
                "The name of the pricing plan (Basic or Completely Customable)"
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
