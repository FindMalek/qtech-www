export function SimpleGrid({ className }: { className?: string }) {
    return (
        <div className={`relative ${className}`}>
            <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)]">
                {Array.from({ length: 20 }).map((_, rowIndex) =>
                    Array.from({ length: 20 }).map((_, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            className={`border border-secondary-foreground/10 ${(rowIndex + colIndex) % 4 === 0 ? "bg-secondary-foreground/10" : ""}`}
                        />
                    )),
                )}
            </div>
        </div>
    )
}