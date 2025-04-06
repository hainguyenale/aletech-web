import type { Metadata } from "next"
import SolutionPageClient from "../SolutionPageClient"
import { solutionsData } from "../solutions-data"

export const metadata: Metadata = {
  title: "Database Solutions | Aletech",
  description:
    "Advanced database solutions with intelligent querying, data processing, and enterprise-grade security features.",
}

export default function DatabaseSolutionPage() {
  const solution = solutionsData.find((s) => s.id === "database")
  
  if (!solution) {
    return <div>Solution not found</div>
  }
  
  return <SolutionPageClient solution={solution} />
} 