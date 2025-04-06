import type { Metadata } from "next"
import SolutionPageClient from "../SolutionPageClient"
import { solutionsData } from "../solutions-data"

export const metadata: Metadata = {
  title: "E-commerce Solutions | Aletech",
  description:
    "Comprehensive e-commerce solutions with high-volume processing capabilities and intelligent business analytics.",
}

export default function EcommerceSolutionPage() {
  const solution = solutionsData.find((s) => s.id === "ecommerce")
  
  if (!solution) {
    return <div>Solution not found</div>
  }
  
  return <SolutionPageClient solution={solution} />
} 