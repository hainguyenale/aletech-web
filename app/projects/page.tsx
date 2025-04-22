import { client } from "@/sanity/lib/client"
import { projectPageQuery } from "@/sanity/queries/projects"
import ProjectsPageClient from "./ProjectsPageClient"

export const metadata = {
  title: "Projects | Aletech",
  description: "Explore Aletech's portfolio of problem-centered technology solutions, from parking management systems to AI-powered healthcare platforms and blockchain applications.",
}

export default async function ProjectsPage() {
  const data = await client.fetch(projectPageQuery)
  console.log('data', data)
  return <ProjectsPageClient initialData={data} />
}

