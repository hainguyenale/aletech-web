import type { Metadata } from "next"
import InvestorsPageClient from "./InvestorsPageClient"

export const metadata: Metadata = {
  title: "Investor Relations | Aletech",
  description: "Information for investors about Aletech's financial performance, governance, and growth strategy.",
}

export default function InvestorsPage() {
  return <InvestorsPageClient />
}

