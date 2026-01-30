import type { Metadata } from "next"
import TermsPageClient from "./TermsPageClient"

export const metadata: Metadata = {
  title: "Terms of Service | Aletech",
  description:
    "Aletech's Terms of Service - Learn about the terms and conditions for using our services and website.",
}

export default function TermsPage() {
  return <TermsPageClient />
} 