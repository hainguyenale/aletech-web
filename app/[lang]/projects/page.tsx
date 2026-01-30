import type { Metadata } from "next"
import ProjectsPageClient from "./ProjectsPageClient"

export const metadata: Metadata = {
  title: "Projects | Aletech",
  description: "Explore Aletech's portfolio of problem-centered technology solutions, from parking management systems to AI-powered healthcare platforms and blockchain applications.",
}

export default function ProjectsPage() {
  return <ProjectsPageClient />
}

