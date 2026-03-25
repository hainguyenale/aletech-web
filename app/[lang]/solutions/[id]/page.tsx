import { notFound } from "next/navigation"
import { client } from "@/sanity/lib/client"
import { solutionQuery } from "@/sanity/queries/solutions"
import { footerQuery } from "@/sanity/queries/footer"
import AnimatedSolution from "./_components/animated-solution"
import { WebPageJsonLd, BreadcrumbJsonLd } from "@/components/json-ld"
import type { Metadata } from "next"
import { SUPPORTED_LOCALES, type Locale } from "@/lib/i18n"
import type { Solution } from "@/lib/types"
import type { FooterData } from "@/components/footer"

export const revalidate = 3600 // ISR: 1 hour

interface Props {
  params: Promise<{ id: string; lang: Locale }>
}

export async function generateStaticParams() {
  const solutions = await client.fetch<{ id: string }[]>(
    `*[_type == "solution" && !(_id in path("drafts.**"))]{ id }`
  )

  if (!solutions?.length) return []

  return SUPPORTED_LOCALES.flatMap((lang) =>
    solutions.map((solution) => ({
      lang,
      id: solution.id,
    }))
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id, lang } = await params
  const data = await client.fetch<Solution>(solutionQuery, { id, language: lang })
  const baseUrl = "https://aletech.com"

  if (!data) {
    return {
      title: "Solution Not Found | Aletech",
    }
  }

  return {
    title: `${data.title} | Aletech`,
    description: data.description,
    openGraph: {
      title: `${data.title} | Aletech`,
      description: data.description,
      images: [{ url: data.image?.url || "/og-image.jpg" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${data.title} | Aletech`,
      description: data.description,
      images: [data.image?.url || "/og-image.jpg"],
    },
    alternates: {
      canonical: `${baseUrl}/${lang}/solutions/${id}`,
      languages: {
        en: `${baseUrl}/en/solutions/${id}`,
        vi: `${baseUrl}/vi/solutions/${id}`,
        "x-default": `${baseUrl}/en/solutions/${id}`,
      },
    },
  }
}

export default async function SolutionPage({ params }: Props) {
  const { id, lang } = await params

  const [solutionData, footerData] = await Promise.all([
    client.fetch<Solution>(solutionQuery, { id, language: lang }),
    client.fetch<FooterData>(footerQuery, { language: lang }),
  ])

  if (!solutionData) {
    notFound()
  }

  const baseUrl = "https://aletech.com"

  return (
    <>
      <WebPageJsonLd
        name={`${solutionData.title} | Aletech`}
        description={solutionData.description}
        url={`${baseUrl}/${lang}/solutions/${id}`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: `${baseUrl}/${lang}` },
          { name: 'Solutions', url: `${baseUrl}/${lang}/solutions` },
          { name: solutionData.title, url: `${baseUrl}/${lang}/solutions/${id}` },
        ]}
      />
      <AnimatedSolution data={solutionData} footerData={footerData} />
    </>
  )
}
