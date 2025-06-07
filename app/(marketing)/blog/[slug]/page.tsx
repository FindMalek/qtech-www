import { notFound } from "next/navigation"
import { MDXContent } from "@content-collections/mdx/react"
import { allBlogs } from "content-collections"

import { Separator } from "@/components/ui/separator"

interface BlogPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({
    slug: blog.slug,
  }))
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params
  const blog = allBlogs.find((blog) => blog.slug === slug)

  if (!blog) {
    notFound()
  }

  return {
    title: blog.title,
    description: blog.overview,
  }
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params

  const blog = allBlogs.find((blog) => blog.slug === slug)

  if (!blog) {
    notFound()
  }

  const { title, author, date, category, readTime, html } = blog

  // Format the date
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="divide-border flex min-h-screen w-full flex-col justify-start divide-y pt-16 md:pt-24">
      <div className="relative w-full">
        <div className="items-left relative flex w-full flex-col px-8">
          <div className="mb-4 flex w-full flex-col items-start justify-start md:mb-8">
            <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
              <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">
                {category}
              </span>
              <span>•</span>
              <span>{readTime}</span>
            </div>

            <h1 className="mb-4 text-left text-2xl font-bold sm:text-3xl md:text-4xl">
              {title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>By  {author}</span>
              <span>•</span>
              <time dateTime={date}>{formattedDate}</time>
            </div>
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
