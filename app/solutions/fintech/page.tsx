import type { Metadata } from "next"
import SolutionPageClient from "../SolutionPageClient"
import { solutionsData } from "../solutions-data"

export const metadata: Metadata = {
  title: "Financial Technology | Aletech",
  description:
    "Innovative fintech solutions combining blockchain technology, secure payment systems, and advanced financial services.",
}

export default function FintechSolutionPage() {
  const solution = solutionsData.find((s) => s.id === "fintech")
  
  if (!solution) {
    return <div>Solution not found</div>
  }
  
  return <SolutionPageClient solution={solution} />
} 