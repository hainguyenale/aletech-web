import type { Metadata } from "next"
import SolutionsPageClient from "./SolutionsPageClient"

export const metadata: Metadata = {
  title: "Solutions | Aletech",
  description: "Explore Aletech's comprehensive technology solutions across various industries, from SaaS platforms to AI-powered healthcare systems.",
}

export default function SolutionsPage() {
  return <SolutionsPageClient />
} 