import Link from "next/link"
import { allBlogs } from "content-collections"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function MarketingBlogSection() {
  // Sort blogs by date and get the latest 3
  const latestBlogs = allBlogs
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  return (
    <section className="container mx-auto max-w-6xl px-8 py-16 md:py-24">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Latest Insights
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Stay informed with our latest thoughts on AI, automation, and business transformation.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {latestBlogs.map((blog) => {
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

                <h3 className="mb-3 line-clamp-2 text-xl font-semibold group-hover:text-primary">
                  {blog.title}
                </h3>

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

      <div className="mt-12 text-center">
        <Button asChild variant="default">
          <Link href="/blog">
            View All Articles
          </Link>
        </Button>
      </div>
    </section>
  )
} 