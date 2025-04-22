import type { Metadata } from "next"
import { client } from "@/sanity/lib/client"
import { aboutPageQuery } from "@/sanity/queries/about"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: "About Us | Aletech",
  description:
    "Learn about Aletech's problem-centered approach, key strengths, and the experienced team behind our innovative technology solutions.",
}

export default async function AboutPage() {
  const data = await client.fetch(aboutPageQuery)
  return <AboutPageClient initialData={data} />
}

