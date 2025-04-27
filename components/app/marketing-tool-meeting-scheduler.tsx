"use client"

import { siteConfig } from "@/config/site"

import { Icons } from "@/components/shared/icons"
import { Button } from "@/components/ui/button"

export function MarketingToolMeetingScheduler() {
  return (
    <div className="bg-muted/30 space-y-4 rounded-lg border p-4">
      <h3 className="font-medium">Schedule a Consultation</h3>

      <p className="text-sm">
        You can schedule a consultation with QTech directly through our
        calendar.
      </p>

      <a href={siteConfig.links.meet} target="_blank" rel="noopener noreferrer">
        <Button className="w-full">
          <Icons.calendar className="mr-2 h-4 w-4" />
          Open Our Calendar
        </Button>
      </a>

      <p className="text-muted-foreground mt-2 text-xs">
        Select a convenient time slot from our available schedule.
      </p>
    </div>
  )
}
