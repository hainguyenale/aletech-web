import { client } from "@/sanity/lib/client"
import { footerQuery } from "@/sanity/queries/footer"
import { metadataQuery } from "@/sanity/queries/metadata"
import AnimatedNews from "./_components/animated-news"
import type { Metadata } from "next"
import type { Locale } from "@/lib/i18n"
import type { FooterData } from "@/components/footer"

export const revalidate = 3600 // ISR: 1 hour

interface Props {
  params: Promise<{ lang: Locale }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  const meta = await client.fetch(metadataQuery, { language: lang })
  const baseUrl = "https://aletech.com"

  return {
    title: meta?.title ? `News | ${meta.title}` : "News | Aletech",
    description:
      meta?.description ||
      "Stay updated with the latest news, announcements, and insights from Aletech.",
    openGraph: {
      title: meta?.title ? `News | ${meta.title}` : "News | Aletech",
      description: meta?.description,
      images: [{ url: meta?.thumbnailUrl || "/og-image.jpg" }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta?.title ? `News | ${meta.title}` : "News | Aletech",
      description: meta?.description,
      images: [meta?.thumbnailUrl || "/og-image.jpg"],
    },
    alternates: {
      canonical: `${baseUrl}/${lang}/news`,
      languages: {
        en: `${baseUrl}/en/news`,
        vi: `${baseUrl}/vi/news`,
        "x-default": `${baseUrl}/en/news`,
      },
    },
  }
}

export default async function NewsPage({ params }: Props) {
  const { lang } = await params

  const footerData = await client.fetch<FooterData>(footerQuery, { language: lang })

  return <AnimatedNews footerData={footerData} />
}
