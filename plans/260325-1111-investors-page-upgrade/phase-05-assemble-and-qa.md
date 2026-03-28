---
phase: 5
title: "Assemble Page + QA"
status: pending
effort: 1h
---

# Phase 5: Assemble Page + Responsive/Dark Mode QA

## Context Links
- Assembler: `app/[lang]/investors/_components/animated-investors.tsx`
- Page: `app/[lang]/investors/page.tsx`

## Overview
Wire all section components into the assembler. Switch data source from Sanity to mock. Verify responsive layout and dark mode across all sections.

## Implementation Steps

### Step 1: Update `animated-investors.tsx` as assembler

Final structure (under 80 lines):

```tsx
"use client"

import Navbar from '@/components/navbar'
import Footer, { FooterData } from '@/components/footer'
import HeroBanner from '@/components/investors/hero-banner'
import CompanyStoryMilestones from '@/components/investors/company-story-milestones'
import FinancialHighlights from '@/components/investors/financial-highlights'
import ShareholderStructure from '@/components/investors/shareholder-structure'
import FinancialReportsTabs from '@/components/investors/financial-reports-tabs'
import CorporateGovernance from '@/components/investors/corporate-governance'
import BoardOfDirectors from '@/components/investors/board-of-directors'
import UpcomingEventsTimeline from '@/components/investors/upcoming-events-timeline'
import NewsDisclosures from '@/components/investors/news-disclosures'
import IRContact from '@/components/investors/ir-contact'
import type { InvestorsPageData } from '@/lib/types/investors'

interface AnimatedInvestorsProps {
  data: InvestorsPageData
  footerData: FooterData
}

export default function AnimatedInvestors({ data, footerData }: AnimatedInvestorsProps) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroBanner data={data.heroBanner} />
      <CompanyStoryMilestones data={data.companyStory} />
      <FinancialHighlights data={data.financialHighlights} />
      <ShareholderStructure data={data.shareholderStructure} />
      <FinancialReportsTabs data={data.financialReports} />
      <CorporateGovernance data={data.corporateGovernance} />
      <BoardOfDirectors data={data.boardOfDirectors} />
      <UpcomingEventsTimeline data={data.upcomingEvents} />
      <NewsDisclosures data={data.newsDisclosures} />
      <IRContact data={data.contactIR} />
      <Footer data={footerData} />
    </main>
  )
}
```

### Step 2: Update `app/[lang]/investors/page.tsx`

Switch data source to mock data:

```tsx
import { investorsMockData } from '@/mocks/investors'

export default async function InvestorsPage({ params }: Props) {
  const { lang } = await params

  const [footerData] = await Promise.all([
    client.fetch<FooterData>(footerQuery, { language: lang }),
  ])

  // Use mock data for investors, keep Sanity for footer
  const investorsData = investorsMockData[lang] || investorsMockData['en']

  return <AnimatedInvestors data={investorsData} footerData={footerData} />
}
```

Keep Sanity fetch for footer (it's shared). Only mock investors data.

### Step 3: Remove old exports
- Remove `InvestorsData` export from animated-investors.tsx (replaced by `lib/types/investors.ts`)
- Update page.tsx import to use new type

### Step 4: QA Checklist

**Responsive breakpoints to test:**
- [ ] Mobile (375px) - all sections stack, timeline vertical, stats 3-col grid
- [ ] Tablet (768px) - 2-col grids, board 2-col
- [ ] Desktop (1280px) - full layout, horizontal timeline, side-by-side events

**Dark mode:**
- [ ] All text uses theme tokens (text-foreground, text-muted-foreground)
- [ ] Cards use bg-card/50, not hardcoded colors
- [ ] Recharts tooltip has dark bg
- [ ] Primary accent (#30C8C9) visible on dark bg
- [ ] No white/light-only backgrounds

**Animations:**
- [ ] FadeIn triggers on scroll for each section
- [ ] Stagger works on card grids
- [ ] Hover effects on all cards
- [ ] Hero stats animate in
- [ ] Timeline dots visible with connecting line

**Functionality:**
- [ ] Report tab filtering works (category + year)
- [ ] Board hover bio reveals on desktop
- [ ] Board bio visible on mobile
- [ ] Download buttons have correct hrefs (mock URLs)
- [ ] News items link correctly
- [ ] IR contact email/phone clickable

### Step 5: Compile check
```bash
npx tsc --noEmit
npm run build
```

## Related Code Files
- **Modify:** `app/[lang]/investors/_components/animated-investors.tsx`
- **Modify:** `app/[lang]/investors/page.tsx`

## Todo List
- [ ] Wire all 10 section components in assembler
- [ ] Switch page.tsx to mock data
- [ ] Remove old InvestorsData export
- [ ] Test mobile layout (375px)
- [ ] Test tablet layout (768px)
- [ ] Test desktop layout (1280px)
- [ ] Verify dark mode across all sections
- [ ] Verify all animations trigger correctly
- [ ] Verify tab filtering works
- [ ] Verify hover bio works
- [ ] `npx tsc --noEmit` passes
- [ ] `npm run build` succeeds

## Success Criteria
- Page loads with all 10 sections in correct order
- No TypeScript errors
- Build succeeds
- Responsive at all breakpoints
- Dark mode fully compatible
- All interactive features functional

## Next Steps (Future, out of scope)
- Swap mock data for Sanity queries (update schema + query, keep UI as-is)
- Add bilingual content in Sanity CMS
- Add real PDF files and board member photos
- SEO: add structured data (JSON-LD) for organization/financial info
