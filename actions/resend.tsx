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
      from: "QTech Support <info@qtech-company.com>",
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

export async function sendNewsletterSubscriptionNotification(email: string) {
  try {
    await resend.emails.send({
      from: "QTech Newsletter <info@qtech-company.com>",
      to: ["info@qtech-company.com"],
      subject: "New Newsletter Subscription",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">
            New Newsletter Subscription
          </h2>
          <p style="color: #666; font-size: 16px; line-height: 1.5;">
            A new user has subscribed to the QTech newsletter.
          </p>
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <strong style="color: #333;">Email:</strong> ${email}
          </div>
          <p style="color: #666; font-size: 14px; margin-top: 30px;">
            This notification was sent automatically from the QTech website.
          </p>
        </div>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error("Error sending newsletter subscription notification:", error)
    return { success: false }
  }
}
