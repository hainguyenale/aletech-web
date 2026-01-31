import type { Metadata } from "next"
import type { Locale } from "@/lib/i18n"
import { client } from "@/sanity/lib/client"
import { metadataQuery } from "@/sanity/queries/metadata"
import { footerQuery } from "@/sanity/queries/footer"
import type { FooterData } from "@/components/footer"
import AnimatedPrivacy from "./_components/animated-privacy"

export const revalidate = 3600 // ISR: revalidate every hour

interface Props {
  params: Promise<{ lang: Locale }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  const meta = await client.fetch(metadataQuery, { language: lang })
  const baseUrl = "https://aletech.com"

  return {
    title: meta?.title ? `Privacy Policy | ${meta.title}` : "Privacy Policy | Aletech",
    description: "Aletech's Privacy Policy - Learn how we collect, use, and protect your personal information when you use our services.",
    alternates: {
      canonical: `${baseUrl}/${lang}/privacy`,
      languages: {
        en: `${baseUrl}/en/privacy`,
        vi: `${baseUrl}/vi/privacy`,
        "x-default": `${baseUrl}/en/privacy`,
      },
    },
  }
}

export default async function PrivacyPage({ params }: Props) {
  const { lang } = await params

  const footerData = await client.fetch<FooterData>(footerQuery, { language: lang })

  return <AnimatedPrivacy footerData={footerData} />
}
