import { client } from "@/sanity/lib/client"
import { singleProjectQuery } from "@/sanity/queries/projects"
import { footerQuery } from "@/sanity/queries/footer"
import AnimatedProject from "./_components/animated-project"
import { WebPageJsonLd, BreadcrumbJsonLd } from "@/components/json-ld"
import type { Metadata } from "next"
import type { Locale } from "@/lib/i18n"
import type { SingleProjectData } from "@/lib/types"
import type { FooterData } from "@/components/footer"

export const revalidate = 3600 // ISR: 1 hour

interface Props {
  params: Promise<{ id: string; lang: Locale }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id, lang } = await params
  const data = await client.fetch<SingleProjectData>(singleProjectQuery, { id, language: lang })
  const baseUrl = "https://aletech.com"

  if (!data?.project) {
    return {
      title: "Project Not Found | Aletech",
    }
  }

  return {
    title: `${data.project.title} | Aletech`,
    description: data.project.description,
    openGraph: {
      title: `${data.project.title} | Aletech`,
      description: data.project.description,
      images: [{ url: data.project.image?.url || "/og-image.jpg" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${data.project.title} | Aletech`,
      description: data.project.description,
      images: [data.project.image?.url || "/og-image.jpg"],
    },
    alternates: {
      canonical: `${baseUrl}/${lang}/projects/${id}`,
      languages: {
        en: `${baseUrl}/en/projects/${id}`,
        vi: `${baseUrl}/vi/projects/${id}`,
        "x-default": `${baseUrl}/en/projects/${id}`,
      },
    },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { id, lang } = await params

  const [projectData, footerData] = await Promise.all([
    client.fetch<SingleProjectData>(singleProjectQuery, { id, language: lang }),
    client.fetch<FooterData>(footerQuery, { language: lang }),
  ])

  const baseUrl = "https://aletech.com"

  return (
    <>
      <WebPageJsonLd
        name={`${projectData.project?.title || 'Project'} | Aletech`}
        description={projectData.project?.description || ''}
        url={`${baseUrl}/${lang}/projects/${id}`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: `${baseUrl}/${lang}` },
          { name: 'Projects', url: `${baseUrl}/${lang}/projects` },
          { name: projectData.project?.title || 'Project', url: `${baseUrl}/${lang}/projects/${id}` },
        ]}
      />
      <AnimatedProject data={projectData} footerData={footerData} />
    </>
  )
}
