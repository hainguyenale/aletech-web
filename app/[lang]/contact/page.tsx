import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us | Aletech",
  description:
    "Get in touch with Aletech at our headquarters in Buon Ma Thuot, Vietnam. We're ready to discuss your technology needs and deliver problem-centered solutions.",
}

export default function ContactPage() {
  return <ContactPageClient />
}

