"use client"

import Navbar from "@/components/navbar"
import Footer, { FooterData } from "@/components/footer"
import PageHeader from "@/components/page-header"
import CompanyStoryMilestones from "@/components/investors/company-story-milestones"
import FinancialHighlights from "@/components/investors/financial-highlights"
import ShareholderStructure from "@/components/investors/shareholder-structure"
import FinancialReportsTabs from "@/components/investors/financial-reports-tabs"
import CorporateGovernance from "@/components/investors/corporate-governance"
import BoardOfDirectors from "@/components/investors/board-of-directors"
import NewsDisclosures from "@/components/investors/news-disclosures"
import InvestmentRoadmap from "@/components/investors/investment-roadmap"
import IRContact from "@/components/investors/ir-contact"
import type { InvestorsPageData } from "@/lib/types/investors"

interface AnimatedInvestorsProps {
  data: InvestorsPageData
  footerData: FooterData
}

export default function AnimatedInvestors({ data, footerData }: AnimatedInvestorsProps) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <PageHeader title={data.heroBanner.title + " " + data.heroBanner.highlightedText} description={data.heroBanner.description} />
      <div className="max-w-[1200px] mx-auto px-4">
        <CompanyStoryMilestones data={data.companyStory} />
        <FinancialHighlights data={data.financialHighlights} />
        <ShareholderStructure data={data.shareholderStructure} />
        <BoardOfDirectors data={data.boardOfDirectors} />
        <CorporateGovernance data={data.corporateGovernance} />
        <NewsDisclosures data={data.newsDisclosures} />
        <InvestmentRoadmap data={data.investmentRoadmap} />
        <FinancialReportsTabs data={data.financialReports} />
      </div>
      <IRContact data={data.contactIR} />
      <Footer data={footerData} />
    </main>
  )
}
