"use client"

import React, { useState } from "react"
import { type ToolInvocation } from "ai"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"
import { getGlobalChatContext } from "@/hooks/use-chat-with-tools"

import { Icons } from "@/components/shared/icons"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface MarketingToolPlanInformationProps {
  toolCall: ToolInvocation
}

export function MarketingToolPlanInformation({
  toolCall,
}: MarketingToolPlanInformationProps) {
  const { planName } = toolCall.args as { planName: string }
  const [activeTab, setActiveTab] = useState("overview")

  // Plan details based on the selected plan
  const planDetails = {
    Basic: {
      price: "1499€",
      description:
        "Ideal for startups and small teams ready to build secure AI tools",
      features: [
        { name: "Access to a dedicated, private GPT", included: true },
        { name: "Connect basic tools (Gmail, Notion, etc.)", included: true },
        { name: "Limited document processing", included: true },
        { name: "Standard support", included: true },
      ],
    },
    "Completely Customable": {
      price: "Custom",
      description:
        "Fully customised solutions for mid-size to large organisations",
      features: [
        { name: "Custom-built, privatised AI agents", included: true },
        { name: "Hosted in your environment or EU cloud", included: true },
        {
          name: "Full tool integration (CRM, ERP, internal systems)",
          included: true,
        },
        {
          name: "Millions of documents processed with high accuracy",
          included: true,
        },
        {
          name: "Onboarding, training, and execution capabilities",
          included: true,
        },
        { name: "Enterprise-grade security, GDPR-compliant", included: true },
        { name: "Premium support & onboarding", included: true },
      ],
    },
  }[planName] || {
    price: "",
    description: "",
    features: [],
  }

  const handleScheduleClick = () => {
    const chatContext = getGlobalChatContext()
    chatContext.setInput(
      `I'd like to schedule a consultation about the ${planName} plan`
    )

    setTimeout(() => {
      const form = document.querySelector("form") as HTMLFormElement
      if (form) {
        form.dispatchEvent(
          new Event("submit", { cancelable: true, bubbles: true })
        )
      }
    }, 100)
  }

  const handleContactClick = () => {
    const chatContext = getGlobalChatContext()
    chatContext.setInput(
      `I'm interested in the ${planName} plan and would like to provide my contact information`
    )

    setTimeout(() => {
      const form = document.querySelector("form") as HTMLFormElement
      if (form) {
        form.dispatchEvent(
          new Event("submit", { cancelable: true, bubbles: true })
        )
      }
    }, 100)
  }

  const handleEstimatePilotPricingClick = () => {
    const chatContext = getGlobalChatContext()
    chatContext.setInput(
      `I'm interested in the ${planName} plan and would like to estimate the pilot pricing`
    )

    setTimeout(() => {
      const form = document.querySelector("form") as HTMLFormElement
      if (form) {
        form.dispatchEvent(
          new Event("submit", { cancelable: true, bubbles: true })
        )
      }
    }, 100)
  }

  return (
    <Card className="bg-muted/30 overflow-hidden border shadow-md">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">{planName} Plan</h3>
          <div className="text-2xl font-bold">{planDetails.price}</div>
        </div>
        <p className="text-muted-foreground mt-1 text-sm">
          {planDetails.description}
        </p>
      </div>

      <div className="w-full border-b">
        <div className="grid w-full grid-cols-2">
          <TabButton
            isActive={activeTab === "overview"}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </TabButton>
          <TabButton
            isActive={activeTab === "contact"}
            onClick={() => setActiveTab("contact")}
          >
            Contact
          </TabButton>
        </div>
      </div>

      <div className="p-4">
        {activeTab === "overview" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <div>
              <h4 className="font-medium">What&apos;s included:</h4>
              <ul className="mt-2 space-y-2">
                {planDetails.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <Icons.check className="text-primary size-4" />
                    {feature.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <Button onClick={handleScheduleClick} className="flex-1">
                Schedule Consultation
              </Button>
              <Button
                onClick={handleEstimatePilotPricingClick}
                variant="outline"
                className="flex-1"
              >
                Estimate Pilot Pricing
              </Button>
              <Button
                onClick={handleContactClick}
                variant="outline"
                className="flex-1"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        )}

        {activeTab === "contact" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <p className="text-sm">
              We&apos;d love to discuss how our {planName} Plan can meet your
              needs. Choose your preferred way to get in touch:
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              <Button
                onClick={handleScheduleClick}
                className="flex items-center justify-center gap-2"
                variant="default"
              >
                <Icons.calendar className="size-4" />
                Schedule a Call
              </Button>

              <Button
                onClick={handleContactClick}
                className="flex items-center justify-center gap-2"
                variant="outline"
              >
                <Icons.mail className="size-4" />
                Contact Form
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </Card>
  )
}

interface TabButtonProps {
  isActive: boolean
  onClick: () => void
  children: React.ReactNode
}

function TabButton({ isActive, onClick, children }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full px-4 py-2 text-sm font-medium transition-colors",
        "border-b-2 focus:outline-none",
        isActive
          ? "border-primary text-primary"
          : "text-muted-foreground hover:text-foreground hover:border-border border-transparent"
      )}
    >
      {children}
    </button>
  )
}
