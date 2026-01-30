import type { Metadata } from "next"
import ProjectPageClient from "./ProjectPageClient"

export const metadata: Metadata = {
  title: "Project Details | Aletech",
  description: "Detailed case study of Aletech's technology solutions and implementations.",
}

interface Props {
  params: Promise<{ id: string; lang: string }>
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params
  return <ProjectPageClient id={id} />
}
