import type { MetadataRoute } from 'next'

const BASE_URL = 'https://littleathlete.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ['', '/about-us', '/location', '/certification', '/program']
  return staticRoutes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }))
}
