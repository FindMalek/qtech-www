export default async function sitemap() {
  try {
    const currentDate = new Date().toISOString()
    
    const baseUrls = [
      {
        url: "https://www.findmalek.com/",
        lastModified: currentDate,
        changeFrequency: "yearly",
        priority: 1,
      },
    ]

    return baseUrls
  } catch (error) {
    console.error("Error generating sitemap:", error)
    return []
  }
}
