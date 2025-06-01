import type { Metadata } from "next"
import Link from "next/link"
import { allBlogs } from "content-collections"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Blog - QTech",
  description: "Latest insights on AI, automation, and business transformation from the QTech team.",
}

export default function BlogIndexPage() {
  // Sort blogs by date (newest first)
  const sortedBlogs = allBlogs.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  // Get unique categories
  const categories = Array.from(new Set(allBlogs.map((blog) => blog.category)))

  return (
    <div className="divide-border flex min-h-screen w-full flex-col justify-start divide-y pt-16 md:pt-24">
      <div className="relative w-full">
        <div className="container mx-auto max-w-6xl px-8 py-16 md:py-24">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Our Blog
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Insights, guides, and thoughts on AI automation, security, and business transformation.
            </p>
          </div>

          {/* Categories */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Badge key={category} variant="outline">
                {category}
              </Badge>
            ))}
          </div>

          <Separator className="mb-12" />

          {/* Blog Posts Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sortedBlogs.map((blog) => {
              const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })

              return (
                <article
                  key={blog.slug}
                  className="group flex flex-col overflow-hidden rounded-lg border bg-card transition-colors hover:bg-muted/50"
                >
                  <div className="flex-1 p-6">
                    <div className="mb-3 flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {blog.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {blog.readTime}
                      </span>
                    </div>

                    <h2 className="mb-3 line-clamp-2 text-xl font-semibold group-hover:text-primary">
                      <Link href={`/blog/${blog.slug}`} className="hover:underline">
                        {blog.title}
                      </Link>
                    </h2>

                    <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">
                      {blog.overview}
                    </p>

                    <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
                      <span>By {blog.author}</span>
                      <span>•</span>
                      <time dateTime={blog.date}>{formattedDate}</time>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Button asChild variant="outline" className="w-full">
                      <Link href={`/blog/${blog.slug}`}>
                        Read More
                      </Link>
                    </Button>
                  </div>
                </article>
              )
            })}
          </div>

          {/* Empty State */}
          {sortedBlogs.length === 0 && (
            <div className="py-16 text-center">
              <h3 className="mb-2 text-lg font-semibold">No blog posts yet</h3>
              <p className="text-muted-foreground">
                Check back soon for insights and updates from our team.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 