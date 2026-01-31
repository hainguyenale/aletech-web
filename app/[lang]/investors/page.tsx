import { client } from "@/sanity/lib/client"
import { investorsPageQuery } from "@/sanity/queries/investors"
import { footerQuery } from "@/sanity/queries/footer"
import { metadataQuery } from "@/sanity/queries/metadata"
import AnimatedInvestors, { InvestorsData } from "./_components/animated-investors"
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
    title: meta?.title ? `Investors | ${meta.title}` : "Investors | Aletech",
    description:
      meta?.description ||
      "Information for investors about Aletech's financial performance, governance, and growth strategy.",
    openGraph: {
      title: meta?.title ? `Investors | ${meta.title}` : "Investors | Aletech",
      description: meta?.description,
      images: [{ url: meta?.thumbnailUrl || "/og-image.jpg" }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta?.title ? `Investors | ${meta.title}` : "Investors | Aletech",
      description: meta?.description,
      images: [meta?.thumbnailUrl || "/og-image.jpg"],
    },
    alternates: {
      canonical: `${baseUrl}/${lang}/investors`,
      languages: {
        en: `${baseUrl}/en/investors`,
        vi: `${baseUrl}/vi/investors`,
        "x-default": `${baseUrl}/en/investors`,
      },
    },
  }
}

export default async function InvestorsPage({ params }: Props) {
  const { lang } = await params

  const [investorsData, footerData] = await Promise.all([
    client.fetch<InvestorsData>(investorsPageQuery, { language: lang }),
    client.fetch<FooterData>(footerQuery, { language: lang }),
  ])

  return <AnimatedInvestors data={investorsData} footerData={footerData} />
}
