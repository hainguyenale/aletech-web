import { client } from "@/sanity/lib/client"
import { singleProjectQuery } from "@/sanity/queries/projects"
import ProjectPageClient from "./ProjectPageClient"

export const metadata = {
  title: "Project Details | Aletech",
  description: "Detailed case study of Aletech's technology solutions and implementations.",
}

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const data = await client.fetch(singleProjectQuery, { id: params.id })
  
  return <ProjectPageClient initialData={data} />
} 