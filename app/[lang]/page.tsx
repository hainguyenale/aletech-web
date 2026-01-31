import { client } from "@/sanity/lib/client"
import { homeQuery } from "@/sanity/queries/home"
import { footerQuery } from "@/sanity/queries/footer"
import { metadataQuery } from "@/sanity/queries/metadata"
import AnimatedHome from "./_components/animated-home"
import { WebPageJsonLd } from "@/components/json-ld"
import type { Metadata } from "next"
import type { Locale } from "@/lib/i18n"
import type { HomeData } from "@/lib/types"
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
    title: meta?.title || "Aletech - Problem-Centered Technology Solutions",
    description:
      meta?.description ||
      "Aletech is your committed outsourcing partner, delivering tailored end-to-end solutions.",
    openGraph: {
      title: meta?.title || "Aletech - Problem-Centered Technology Solutions",
      description: meta?.description,
      images: [{ url: meta?.thumbnailUrl || "/og-image.jpg" }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta?.title || "Aletech - Problem-Centered Technology Solutions",
      description: meta?.description,
      images: [meta?.thumbnailUrl || "/og-image.jpg"],
    },
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        en: `${baseUrl}/en`,
        vi: `${baseUrl}/vi`,
        "x-default": `${baseUrl}/en`,
      },
    },
  }
}

export default async function HomePage({ params }: Props) {
  const { lang } = await params

  const [homeData, footerData] = await Promise.all([
    client.fetch<HomeData>(homeQuery, { language: lang }),
    client.fetch<FooterData>(footerQuery, { language: lang }),
  ])

  const baseUrl = "https://aletech.com"

  return (
    <>
      <WebPageJsonLd
        name="Aletech - Problem-Centered Technology Solutions"
        description="Tailored end-to-end solutions for unique challenges."
        url={`${baseUrl}/${lang}`}
      />
      <AnimatedHome data={homeData} footerData={footerData} lang={lang} />
    </>
  )
}
