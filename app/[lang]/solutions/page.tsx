import { client } from "@/sanity/lib/client"
import { solutionsPageQuery } from "@/sanity/queries/solutions"
import { footerQuery } from "@/sanity/queries/footer"
import { metadataQuery } from "@/sanity/queries/metadata"
import AnimatedSolutions from "./_components/animated-solutions"
import type { Metadata } from "next"
import type { Locale } from "@/lib/i18n"
import type { SolutionsPageData } from "@/lib/types"
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
    title: meta?.title ? `Solutions | ${meta.title}` : "Solutions | Aletech",
    description:
      meta?.description ||
      "Explore Aletech's comprehensive technology solutions across various industries, from SaaS platforms to AI-powered healthcare systems.",
    openGraph: {
      title: meta?.title ? `Solutions | ${meta.title}` : "Solutions | Aletech",
      description: meta?.description,
      images: [{ url: meta?.thumbnailUrl || "/og-image.jpg" }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta?.title ? `Solutions | ${meta.title}` : "Solutions | Aletech",
      description: meta?.description,
      images: [meta?.thumbnailUrl || "/og-image.jpg"],
    },
    alternates: {
      canonical: `${baseUrl}/${lang}/solutions`,
      languages: {
        en: `${baseUrl}/en/solutions`,
        vi: `${baseUrl}/vi/solutions`,
        "x-default": `${baseUrl}/en/solutions`,
      },
    },
  }
}

export default async function SolutionsPage({ params }: Props) {
  const { lang } = await params

  const [solutionsData, footerData] = await Promise.all([
    client.fetch<SolutionsPageData>(solutionsPageQuery, { language: lang }),
    client.fetch<FooterData>(footerQuery, { language: lang }),
  ])

  return <AnimatedSolutions data={solutionsData} footerData={footerData} />
}
