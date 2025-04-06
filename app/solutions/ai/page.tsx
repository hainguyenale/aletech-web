import type { Metadata } from "next"
import SolutionPageClient from "../SolutionPageClient"
import { solutionsData } from "../solutions-data"

export const metadata: Metadata = {
  title: "Artificial Intelligence | Aletech",
  description:
    "Cutting-edge AI solutions utilizing advanced machine learning, natural language processing, and intelligent automation.",
}

export default function AISolutionPage() {
  const solution = solutionsData.find((s) => s.id === "ai")
  
  if (!solution) {
    return <div>Solution not found</div>
  }
  
  return <SolutionPageClient solution={solution} />
} 