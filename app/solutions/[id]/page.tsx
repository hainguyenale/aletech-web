import type { Metadata } from "next"
import SolutionPageClient from "./SolutionPageClient"

export const metadata: Metadata = {
  title: "Solution Details | Aletech",
  description: "Detailed information about Aletech's technology solutions.",
}

export default async function SolutionPage({ params }: { params: { id: string } }) {
  return <SolutionPageClient id={params.id} />
} 