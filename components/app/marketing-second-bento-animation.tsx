import Image from "next/image"

import { env } from "@/env"

import { Icons } from "@/components/shared/icons"
import { OrbitingCircles } from "@/components/ui/orbiting-circle"

// Define integration logos for orbiting circles
const integrationLogos = [
  // First circle
  [
    { id: "slack", imageUrl: "https://img.logo.dev/slack.com", title: "Slack" },
    {
      id: "teams",
      imageUrl: "https://img.logo.dev/ring2cloud.com",
      title: "Microsoft Teams",
    },
    {
      id: "notion",
      imageUrl: "https://img.logo.dev/notion.so",
      title: "Notion",
    },
  ],
  // Second circle
  [
    { id: "gmail", imageUrl: "https://img.logo.dev/gmail.com", title: "Gmail" },
    {
      id: "sharepoint",
      imageUrl: "https://img.logo.dev/sharepointeurope.com",
      title: "SharePoint",
    },
    {
      id: "outlook",
      imageUrl: "https://img.logo.dev/microsoft.com",
      title: "Outlook",
    },
  ],
  // Third circle
  [
    {
      id: "salesforce",
      imageUrl: "https://img.logo.dev/salesforce.com",
      title: "Salesforce",
    },
    {
      id: "hubspot",
      imageUrl: "https://img.logo.dev/hubspot.com",
      title: "HubSpot",
    },
    {
      id: "zendesk",
      imageUrl: "https://img.logo.dev/zendesk.com",
      title: "Zendesk",
    },
  ],
]

export function MarketingSecondBentoAnimation() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div className="from-background pointer-events-none absolute bottom-0 left-0 z-20 h-20 w-full bg-gradient-to-t to-transparent"></div>
      <div className="from-background pointer-events-none absolute left-0 top-0 z-20 h-20 w-full bg-gradient-to-b to-transparent"></div>

      <div className="bg-secondary absolute left-1/2 top-1/2 z-30 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-2 rounded-full p-2 md:bottom-0 md:top-auto">
        <Icons.logo className="fill-secondary-foreground size-10" />
      </div>
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
        <div className="relative flex h-full w-full translate-y-0 items-center justify-center md:translate-y-32">
          <OrbitingCircles
            index={0}
            iconSize={60}
            radius={100}
            reverse
            speed={1}
          >
            {integrationLogos[0].map((item) => (
              <div
                key={item.id}
                className="bg-background flex items-center justify-center rounded-full p-2"
              >
                <Image
                  src={`${item.imageUrl}?token=${env.NEXT_PUBLIC_LOGO_DEV_TOKEN}&size=48`}
                  alt={item.title}
                  width={28}
                  height={28}
                />
              </div>
            ))}
          </OrbitingCircles>

          <OrbitingCircles index={1} iconSize={60} speed={0.5}>
            {integrationLogos[1].map((item) => (
              <div
                key={item.id}
                className="bg-background flex items-center justify-center rounded-full p-2"
              >
                <Image
                  src={`${item.imageUrl}?token=${env.NEXT_PUBLIC_LOGO_DEV_TOKEN}&size=48`}
                  alt={item.title}
                  width={28}
                  height={28}
                />
              </div>
            ))}
          </OrbitingCircles>

          <OrbitingCircles
            index={2}
            iconSize={60}
            radius={230}
            reverse
            speed={0.5}
          >
            {integrationLogos[2].map((item) => (
              <div
                key={item.id}
                className="bg-background flex items-center justify-center rounded-full p-2"
              >
                <Image
                  src={`${item.imageUrl}?token=${env.NEXT_PUBLIC_LOGO_DEV_TOKEN}&size=48`}
                  alt={item.title}
                  width={28}
                  height={28}
                />
              </div>
            ))}
          </OrbitingCircles>
        </div>
      </div>
    </div>
  )
}
