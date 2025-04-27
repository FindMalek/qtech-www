"use server"

import { Resend } from "resend"

import { env } from "@/env"
import { ConversationHistory } from "@/types"

import { siteConfig } from "@/config/site"

import { MarketingEmailIntroduction } from "@/components/app/marketing-email-introduction"

const resend = new Resend(env.RESEND_API_KEY)

export async function sendContactEmailIntroduction(
  email: string,
  name: string,
  contactPurpose: string,
  conversation: ConversationHistory[]
) {
  try {
    await resend.emails.send({
      from: "QTech Support <no-reply@qtech-company.com>",
      to: [email, siteConfig.author.email],
      subject: `We received your message, ${name}`,
      react: (
        <MarketingEmailIntroduction
          userName={name}
          userEmail={email}
          contactPurpose={contactPurpose}
          conversation={conversation}
        />
      ),
    })

    return {
      userEmailSent: true,
      ownerEmailSent: true,
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      userEmailSent: false,
      ownerEmailSent: false,
    }
  }
}
