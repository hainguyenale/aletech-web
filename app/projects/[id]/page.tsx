import ProjectPageClient from "./ProjectPageClient"

export const metadata = {
  title: "Project Details | Aletech",
  description: "Detailed case study of Aletech's technology solutions and implementations.",
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  return <ProjectPageClient id={params.id} />
} 