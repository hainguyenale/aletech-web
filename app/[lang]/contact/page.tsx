import { client } from "@/sanity/lib/client"
import { contactPageQuery } from "@/sanity/queries/contact"
import { footerQuery } from "@/sanity/queries/footer"
import { metadataQuery } from "@/sanity/queries/metadata"
import AnimatedContact from "./_components/animated-contact"
import type { Metadata } from "next"
import type { Locale } from "@/lib/i18n"
import type { ContactData } from "@/lib/types"
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
    title: meta?.title ? `Contact Us | ${meta.title}` : "Contact Us | Aletech",
    description:
      meta?.description ||
      "Get in touch with Aletech at our headquarters in Buon Ma Thuot, Vietnam. We're ready to discuss your technology needs and deliver problem-centered solutions.",
    openGraph: {
      title: meta?.title ? `Contact Us | ${meta.title}` : "Contact Us | Aletech",
      description: meta?.description,
      images: [{ url: meta?.thumbnailUrl || "/og-image.jpg" }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta?.title ? `Contact Us | ${meta.title}` : "Contact Us | Aletech",
      description: meta?.description,
      images: [meta?.thumbnailUrl || "/og-image.jpg"],
    },
    alternates: {
      canonical: `${baseUrl}/${lang}/contact`,
      languages: {
        en: `${baseUrl}/en/contact`,
        vi: `${baseUrl}/vi/contact`,
        "x-default": `${baseUrl}/en/contact`,
      },
    },
  }
}

export default async function ContactPage({ params }: Props) {
  const { lang } = await params

  const [contactData, footerData] = await Promise.all([
    client.fetch<ContactData>(contactPageQuery, { language: lang }),
    client.fetch<FooterData>(footerQuery, { language: lang }),
  ])

  return <AnimatedContact data={contactData} footerData={footerData} />
}
