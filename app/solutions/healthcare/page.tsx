import type { Metadata } from "next"
import SolutionPageClient from "../SolutionPageClient"
import { solutionsData } from "../solutions-data"

export const metadata: Metadata = {
  title: "Healthcare Technology | Aletech",
  description:
    "Advanced healthcare solutions leveraging AI and automation to enhance patient care and streamline medical processes.",
}

export default function HealthcareSolutionPage() {
  const solution = solutionsData.find((s) => s.id === "healthcare")
  
  if (!solution) {
    return <div>Solution not found</div>
  }
  
  return <SolutionPageClient solution={solution} />
} 