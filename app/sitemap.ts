import { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'
import { SUPPORTED_LOCALES } from '@/lib/i18n'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://aletech.com'

  // Static pages
  const staticPages = [
    '',           // home
    '/about',
    '/contact',
    '/projects',
    '/solutions',
    '/investors',
    '/news',
    '/privacy',
    '/terms',
  ]

  // Generate static page entries for all locales
  const staticEntries = SUPPORTED_LOCALES.flatMap((locale) =>
    staticPages.map((page) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: page === '' ? 'weekly' : 'monthly' as const,
      priority: page === '' ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          SUPPORTED_LOCALES.map((l) => [l, `${baseUrl}/${l}${page}`])
        ),
      },
    }))
  )

  // Fetch dynamic pages from Sanity
  const [projects, solutions] = await Promise.all([
    client.fetch<{ slug: string; updatedAt: string }[]>(
      `*[_type == "project"]{ "slug": slug.current, "updatedAt": _updatedAt }`
    ),
    client.fetch<{ slug: string; updatedAt: string }[]>(
      `*[_type == "solution"]{ "slug": slug.current, "updatedAt": _updatedAt }`
    ),
  ])

  // Project detail entries
  const projectEntries = SUPPORTED_LOCALES.flatMap((locale) =>
    (projects || []).map((p) => ({
      url: `${baseUrl}/${locale}/projects/${p.slug}`,
      lastModified: new Date(p.updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: Object.fromEntries(
          SUPPORTED_LOCALES.map((l) => [l, `${baseUrl}/${l}/projects/${p.slug}`])
        ),
      },
    }))
  )

  // Solution detail entries
  const solutionEntries = SUPPORTED_LOCALES.flatMap((locale) =>
    (solutions || []).map((s) => ({
      url: `${baseUrl}/${locale}/solutions/${s.slug}`,
      lastModified: new Date(s.updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: Object.fromEntries(
          SUPPORTED_LOCALES.map((l) => [l, `${baseUrl}/${l}/solutions/${s.slug}`])
        ),
      },
    }))
  )

  return [...staticEntries, ...projectEntries, ...solutionEntries]
}
