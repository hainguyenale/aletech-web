import type { Metadata } from "next"
import PrivacyPageClient from "./PrivacyPageClient"

export const metadata: Metadata = {
  title: "Privacy Policy | Aletech",
  description:
    "Aletech's Privacy Policy - Learn how we collect, use, and protect your personal information when you use our services.",
}

export default function PrivacyPage() {
  return <PrivacyPageClient />
} 