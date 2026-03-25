import type { Metadata } from "next"
import type { Locale } from "@/lib/i18n"
import { client } from "@/sanity/lib/client"
import { metadataQuery } from "@/sanity/queries/metadata"
import { footerQuery } from "@/sanity/queries/footer"
import type { FooterData } from "@/components/footer"
import AnimatedTerms from "./_components/animated-terms"

export const revalidate = 3600 // ISR: revalidate every hour

interface Props {
  params: Promise<{ lang: Locale }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  const meta = await client.fetch(metadataQuery, { language: lang })
  const baseUrl = "https://aletech.com"

  return {
    title: meta?.title ? `Terms of Service | ${meta.title}` : "Terms of Service | Aletech",
    description: "Aletech's Terms of Service - Learn about the terms and conditions for using our services and website.",
    alternates: {
      canonical: `${baseUrl}/${lang}/terms`,
      languages: {
        en: `${baseUrl}/en/terms`,
        vi: `${baseUrl}/vi/terms`,
        "x-default": `${baseUrl}/en/terms`,
      },
    },
  }
}

export default async function TermsPage({ params }: Props) {
  const { lang } = await params

  const footerData = await client.fetch<FooterData>(footerQuery, { language: lang })

  return <AnimatedTerms footerData={footerData} />
}
