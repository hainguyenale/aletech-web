import type { Metadata } from "next"
import SolutionPageClient from "./SolutionPageClient"

export const metadata: Metadata = {
  title: "Solution Details | Aletech",
  description: "Detailed information about Aletech's technology solutions.",
}

interface Props {
  params: Promise<{ id: string; lang: string }>
}

export default async function SolutionPage({ params }: Props) {
  const { id } = await params
  return <SolutionPageClient id={id} />
}
