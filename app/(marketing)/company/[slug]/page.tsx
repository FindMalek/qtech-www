import { notFound } from "next/navigation"
import { MDXContent } from "@content-collections/mdx/react"
import { allCompanies } from "content-collections"

import { Separator } from "@/components/ui/separator"

interface CompanyPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return allCompanies.map((company) => ({
    slug: company.slug,
  }))
}

export async function generateMetadata({ params }: CompanyPageProps) {
  const { slug } = await params
  const company = allCompanies.find((company) => company.slug === slug)

  if (!company) {
    notFound()
  }

  return {
    title: company.title,
    description: company.overview,
  }
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  const { slug } = await params

  const company = allCompanies.find((company) => company.slug === slug)

  if (!company) {
    notFound()
  }

  const { title, html } = company

  return (
    <div className="divide-border flex min-h-screen w-full flex-col justify-start divide-y pt-16 md:pt-24">
      <div className="relative w-full">
        <div className="items-left relative flex w-full flex-col px-8">
          <div className="mb-4 flex w-full flex-col items-start justify-start md:mb-8">
            <span className="text-muted-foreground text-sm">Company</span>

            <h1 className="mb-2 text-left text-2xl font-bold sm:text-3xl md:mb-4 md:text-4xl">
              {title}
            </h1>
          </div>

          <Separator className="my-4" />

          {html && (
            <div className="prose prose-sm sm:prose-base md:prose-lg lg:prose-xl prose-gray dark:prose-invert max-w-full pt-4 md:max-w-3xl">
              <MDXContent code={html} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
