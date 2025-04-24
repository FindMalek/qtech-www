import { cn } from "@/lib/utils"

export function Highlight({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        "bg-primary/10 text-primary rounded-sm px-1.5 py-0.5 font-medium dark:font-semibold",
        className
      )}
    >
      {children}
    </span>
  )
}
