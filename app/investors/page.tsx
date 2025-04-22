import { client } from "@/sanity/lib/client"
import { investorsPageQuery } from "@/sanity/queries/investors"
import InvestorsPageClient from "./InvestorsPageClient"

export const metadata = {
  title: "Investors | Aletech",
  description: "Information for investors about Aletech's financial performance, governance, and growth strategy.",
}

export default async function InvestorsPage() {
  const data = await client.fetch(investorsPageQuery)
  return <InvestorsPageClient initialData={data} />
}

