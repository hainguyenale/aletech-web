import { client } from "@/sanity/lib/client"
import { projectPageQuery } from "@/sanity/queries/projects"
import { footerQuery } from "@/sanity/queries/footer"
import { metadataQuery } from "@/sanity/queries/metadata"
import AnimatedProjects from "./_components/animated-projects"
import type { Metadata } from "next"
import type { Locale } from "@/lib/i18n"
import type { ProjectsPageData } from "@/lib/types"
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
    title: meta?.title ? `Projects | ${meta.title}` : "Projects | Aletech",
    description:
      meta?.description ||
      "Explore Aletech's portfolio of problem-centered technology solutions, from parking management systems to AI-powered healthcare platforms and blockchain applications.",
    openGraph: {
      title: meta?.title ? `Projects | ${meta.title}` : "Projects | Aletech",
      description: meta?.description,
      images: [{ url: meta?.thumbnailUrl || "/og-image.jpg" }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta?.title ? `Projects | ${meta.title}` : "Projects | Aletech",
      description: meta?.description,
      images: [meta?.thumbnailUrl || "/og-image.jpg"],
    },
    alternates: {
      canonical: `${baseUrl}/${lang}/projects`,
      languages: {
        en: `${baseUrl}/en/projects`,
        vi: `${baseUrl}/vi/projects`,
        "x-default": `${baseUrl}/en/projects`,
      },
    },
  }
}

export default async function ProjectsPage({ params }: Props) {
  const { lang } = await params

  const [projectsData, footerData] = await Promise.all([
    client.fetch<ProjectsPageData>(projectPageQuery, { language: lang }),
    client.fetch<FooterData>(footerQuery, { language: lang }),
  ])

  return <AnimatedProjects data={projectsData} footerData={footerData} />
}
