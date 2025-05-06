import type { Metadata } from "next"
import Link from "next/link"
import { Mail } from "lucide-react"

import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Careers at QTech",
}

export default function CareerPage() {
  return (
    <div className="container mx-auto space-y-12 px-4 py-12 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Careers
        </h1>
        <p className="text-muted-foreground mt-4 text-lg">
          Join our team and help us build the future
        </p>
      </div>

      <div className="mx-auto max-w-md text-center">
        <p className="mb-4">
          If you&apos;re passionate about what we do and interested in joining
          our project, we&apos;d love to hear from you.
        </p>
        <p className="mb-6">
          Please reach out with your resume and a brief introduction to:
        </p>
        <div className="border-input bg-background inline-flex items-center justify-center rounded-lg border px-4 py-2">
          <Mail className="mr-2 h-4 w-4" />
          <span className="font-medium">info@qtech-company.com</span>
        </div>
        <Button asChild>
          <Link href="mailto:info@qtech-company.com">Contact Us</Link>
        </Button>
      </div>
    </div>
  )
}
