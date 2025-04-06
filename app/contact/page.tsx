import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us | Aletech",
  description:
    "Get in touch with Aletech for inquiries, support, or to discuss how we can help with your technology needs.",
}

export default function ContactPage() {
  return <ContactPageClient />
}

