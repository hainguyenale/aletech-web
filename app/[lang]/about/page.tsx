import { client } from "@/sanity/lib/client"
import { aboutPageQuery } from "@/sanity/queries/about"
import { footerQuery } from "@/sanity/queries/footer"
import { metadataQuery } from "@/sanity/queries/metadata"
import AnimatedAbout from "./_components/animated-about"
import type { Metadata } from "next"
import type { Locale } from "@/lib/i18n"
import type { AboutData } from "@/lib/types"
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
    title: meta?.title ? `About Us | ${meta.title}` : "About Us | Aletech",
    description:
      meta?.description ||
      "Learn about Aletech's problem-centered approach, key strengths, and the experienced team behind our innovative technology solutions.",
    openGraph: {
      title: meta?.title ? `About Us | ${meta.title}` : "About Us | Aletech",
      description: meta?.description,
      images: [{ url: meta?.thumbnailUrl || "/og-image.jpg" }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta?.title ? `About Us | ${meta.title}` : "About Us | Aletech",
      description: meta?.description,
      images: [meta?.thumbnailUrl || "/og-image.jpg"],
    },
    alternates: {
      canonical: `${baseUrl}/${lang}/about`,
      languages: {
        en: `${baseUrl}/en/about`,
        vi: `${baseUrl}/vi/about`,
        "x-default": `${baseUrl}/en/about`,
      },
    },
  }
}

export default async function AboutPage({ params }: Props) {
  const { lang } = await params

  const [aboutData, footerData] = await Promise.all([
    client.fetch<AboutData>(aboutPageQuery, { language: lang }),
    client.fetch<FooterData>(footerQuery, { language: lang }),
  ])

  return <AnimatedAbout data={aboutData} footerData={footerData} />
}
