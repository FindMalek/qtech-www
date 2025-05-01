import { notFound } from "next/navigation"
import { MDXContent } from "@content-collections/mdx/react"
import { allLegals } from "content-collections"

import { Separator } from "@/components/ui/separator"

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return allLegals.map((legal) => ({
    slug: legal.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params
  const legal = allLegals.find((legal) => legal.slug === slug)

  if (!legal) {
    notFound()
  }

  return {
    title: legal.title,
    description: legal.overview,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params

  const legal = allLegals.find((legal) => legal.slug === slug)

  if (!legal) {
    notFound()
  }

  const { title, overview, html } = legal

  return (
    <div className="divide-border flex min-h-screen w-full flex-col justify-start divide-y pt-16 md:pt-24">
      <div className="relative w-full">
        <div className="items-left relative flex w-full flex-col px-8">
          <div className="mb-4 flex w-full flex-col items-start justify-start md:mb-8">
            <span className="text-muted-foreground text-sm">Legal</span>

            <h1 className="mb-2 text-left text-2xl font-bold sm:text-3xl md:mb-4 md:text-4xl">
              {title}
            </h1>

            <p className="text-muted-foreground mb-4 text-left text-base sm:text-lg md:mb-8">
              {overview}
            </p>
          </div>

          <Separator className="my-4" />

          {html && (
            <div className="prose prose-sm sm:prose-base md:prose-lg lg:prose-xl prose-gray dark:prose-invert max-w-full pt-4 md:max-w-3xl">
              <MDXContent code={html} />
            </div>
          )}
        </div>

        <Separator className="my-4" />
      </div>
    </div>
  )
}
