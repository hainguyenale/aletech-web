import { investorsMockData } from "@/mocks/investors"
import { client } from "@/sanity/lib/client"
import { footerQuery } from "@/sanity/queries/footer"
import { metadataQuery } from "@/sanity/queries/metadata"
import AnimatedNewsDetail from "./_components/animated-news-detail"
import type { Metadata } from "next"
import type { Locale } from "@/lib/i18n"
import type { FooterData } from "@/components/footer"
import { SUPPORTED_LOCALES } from "@/lib/i18n"
import { notFound } from "next/navigation"

export const revalidate = 3600

interface Props {
  params: Promise<{ slug: string; lang: Locale }>
}

function getArticle(slug: string, lang: string) {
  const data = investorsMockData[lang] || investorsMockData["en"]
  return data.newsDisclosures.items.find((item) => item.slug === slug)
}

export async function generateStaticParams() {
  const allSlugs = investorsMockData["en"].newsDisclosures.items.map((item) => item.slug)
  return SUPPORTED_LOCALES.flatMap((lang) =>
    allSlugs.map((slug) => ({ lang, slug }))
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, lang } = await params
  const article = getArticle(slug, lang)
  const meta = await client.fetch(metadataQuery, { language: lang })
  const baseUrl = "https://aletech.com"

  if (!article) return { title: "Not Found" }

  return {
    title: `${article.title} | ${meta?.title || "Aletech"}`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
    },
    alternates: {
      canonical: `${baseUrl}/${lang}/news/${slug}`,
      languages: {
        en: `${baseUrl}/en/news/${slug}`,
        vi: `${baseUrl}/vi/news/${slug}`,
      },
    },
  }
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug, lang } = await params
  const article = getArticle(slug, lang)

  if (!article) notFound()

  const allArticles = (investorsMockData[lang] || investorsMockData["en"]).newsDisclosures.items
  const footerData = await client.fetch<FooterData>(footerQuery, { language: lang })

  return <AnimatedNewsDetail article={article} allArticles={allArticles} footerData={footerData} />
}
