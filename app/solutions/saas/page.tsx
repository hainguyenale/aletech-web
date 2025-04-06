import type { Metadata } from "next"
import SolutionPageClient from "../SolutionPageClient"
import { solutionsData } from "../solutions-data"

export const metadata: Metadata = {
  title: "SaaS Solutions | Aletech",
  description:
    "Expertise in building scalable, multi-tenant SaaS platforms with robust architecture and seamless deployment capabilities.",
}

export default function SaaSSolutionPage() {
  const solution = solutionsData.find((s) => s.id === "saas")
  
  if (!solution) {
    return <div>Solution not found</div>
  }
  
  return <SolutionPageClient solution={solution} />
} 