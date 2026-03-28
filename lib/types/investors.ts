export interface SanityImage {
  url: string
  metadata: {
    dimensions: {
      width: number
      height: number
    }
  }
}

export interface SanityFile {
  url: string
  size: number
  originalFilename: string
}

export interface HeroBannerData {
  tagline: string
  title: string
  highlightedText: string
  description: string
  stats: { number: string; label: string }[]
}

export interface CompanyStoryData {
  tagline: string
  title: string
  narrative: string
  milestones: { year: string; title: string; description: string }[]
}

export interface FinancialHighlightsData {
  tagline: string
  title: string
  description: string
  metrics: {
    title: string
    value: string
    growth?: string
    progressPercentage?: number
    icon: string
  }[]
}

export interface ShareholderStructureData {
  tagline: string
  title: string
  description: string
  shareholders: { name: string; percentage: number; color: string }[]
  lastUpdated: string
}

export interface FinancialReportsData {
  tagline: string
  title: string
  description: string
  reports: {
    title: string
    date: string
    file: SanityFile
    type: string
    category: "annual" | "quarterly" | "governance"
    year: number
  }[]
}

export interface CorporateGovernanceData {
  tagline: string
  title: string
  description: string
  documents: {
    title: string
    description: string
    icon: string
    url: string
  }[]
}

export interface BoardMember {
  name: string
  position: string
  image: SanityImage
  bio: string
}

export interface BoardOfDirectorsData {
  tagline: string
  title: string
  description: string
  members: BoardMember[]
}

export interface UpcomingEventsData {
  tagline: string
  title: string
  description: string
  events: {
    title: string
    date: string
    time: string
    location: string
    type: "meeting" | "earnings" | "conference"
    description?: string
  }[]
  presentation: {
    title: string
    description: string
    thumbnailImage: SanityImage
    file: SanityFile
  }
}

export interface NewsDisclosuresData {
  tagline: string
  title: string
  description: string
  items: {
    title: string
    slug: string
    date: string
    category: "news" | "disclosure" | "announcement"
    summary: string
    body: string
    url?: string
  }[]
}

export interface InvestmentRoadmapData {
  tagline: string
  title: string
  description: string
  milestones: {
    title: string
    date: string
    description: string
    location: string
  }[]
  businessPlan: {
    title: string
    cta: string
    file: SanityFile
  }
}

export interface ContactIRData {
  title: string
  description: string
  email: string
  phone: string
  address: string[]
}

export interface InvestorsPageData {
  heroBanner: HeroBannerData
  companyStory: CompanyStoryData
  financialHighlights: FinancialHighlightsData
  shareholderStructure: ShareholderStructureData
  financialReports: FinancialReportsData
  corporateGovernance: CorporateGovernanceData
  boardOfDirectors: BoardOfDirectorsData
  upcomingEvents: UpcomingEventsData
  newsDisclosures: NewsDisclosuresData
  investmentRoadmap: InvestmentRoadmapData
  contactIR: ContactIRData
}
