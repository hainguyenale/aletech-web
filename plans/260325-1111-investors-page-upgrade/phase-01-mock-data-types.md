---
phase: 1
title: "Mock Data + TypeScript Types"
status: pending
effort: 1.5h
---

# Phase 1: Mock Data + TypeScript Types

## Context Links
- Current types: `app/[lang]/investors/_components/animated-investors.tsx` (lines 22-100)
- Research: `plans/reports/researcher-ir-page-analysis.md`

## Overview
Create typed mock data file covering all 10 sections. Bilingual (EN/VI). Structure must match what Sanity would return so swap is seamless later.

## Key Insights
- Existing `InvestorsData` interface covers 6 sections. Extend it (do not break existing fields).
- Board members need `bio` field added. Reports need `category` and `year` fields. Events need `type` field.
- New sections: companyStory, shareholderStructure, corporateGovernance, newsDisclosures.
- Use placeholder image URLs (e.g. `/images/placeholder.jpg` or `https://placehold.co/...`).

## Requirements

### TypeScript Types (create in `lib/types/investors.ts`)

```typescript
// Extend existing InvestorsData with new sections
export interface InvestorsPageData {
  // EXISTING (keep compatible)
  pageHeader: { title: string; description: string }
  financialHighlights: { ... } // same as current
  financialReports: {
    tagline: string; title: string; description: string
    reports: {
      title: string; date: string
      file: { url: string; size: number; originalFilename: string }
      type: string
      category: 'annual' | 'quarterly' | 'governance'  // NEW
      year: number  // NEW
    }[]
  }
  upcomingEvents: {
    ...existing
    events: {
      ...existing
      type: 'meeting' | 'earnings' | 'conference'  // NEW
      description?: string  // NEW
    }[]
  }
  boardOfDirectors: {
    ...existing
    members: {
      ...existing
      bio: string  // NEW
    }[]
  }
  contactIR: { ...existing }

  // NEW SECTIONS
  heroBanner: {
    tagline: string
    title: string
    highlightedText: string
    description: string
    stats: { number: string; label: string }[]
    backgroundGradient?: string
  }
  companyStory: {
    tagline: string
    title: string
    narrative: string  // HTML-safe paragraph
    milestones: {
      year: string
      title: string
      description: string
    }[]
  }
  shareholderStructure: {
    tagline: string
    title: string
    description: string
    shareholders: {
      name: string
      percentage: number
      color: string  // hex for chart segment
    }[]
    lastUpdated: string
  }
  corporateGovernance: {
    tagline: string
    title: string
    description: string
    documents: {
      title: string
      description: string
      icon: string  // Lucide icon name
      url: string
    }[]
  }
  newsDisclosures: {
    tagline: string
    title: string
    description: string
    items: {
      title: string
      date: string
      category: 'news' | 'disclosure' | 'announcement'
      summary: string
      url?: string
    }[]
  }
}
```

### Mock Data File (`mocks/investors.ts`)

Structure:
```typescript
import { InvestorsPageData } from '@/lib/types/investors'

const investorsDataEN: InvestorsPageData = { ... }
const investorsDataVI: InvestorsPageData = { ... }

export const investorsMockData: Record<string, InvestorsPageData> = {
  en: investorsDataEN,
  vi: investorsDataVI,
}
```

## Implementation Steps

1. Create `lib/types/investors.ts` with full `InvestorsPageData` interface
2. Create `mocks/investors.ts` with EN and VI data objects
3. Populate mock data:
   - **heroBanner**: tagline "Pre-IPO Technology Company", 3 stats (100+ Employees, 5+ Years, 50+ Clients)
   - **companyStory**: 5-6 milestones (2019 founding through 2026 pre-IPO)
   - **financialHighlights**: keep 4 metric cards (Revenue, EBITDA, Clients, Team Growth)
   - **shareholderStructure**: 4-5 segments (Founders 60%, Angel Investors 15%, ESOP 15%, Strategic Partners 10%)
   - **financialReports**: 8-10 reports across annual/quarterly/governance, years 2024-2026
   - **corporateGovernance**: 4-5 docs (Dieu le, Quy che, Noi quy, ESG Report)
   - **boardOfDirectors**: 3-5 members with bios
   - **upcomingEvents**: 3-4 events with types
   - **newsDisclosures**: 5-6 items across categories
   - **contactIR**: email, phone, address
4. Verify TypeScript compiles: `npx tsc --noEmit`

## Related Code Files
- **Create:** `lib/types/investors.ts`
- **Create:** `mocks/investors.ts`
- **Read (reference):** `app/[lang]/investors/_components/animated-investors.tsx`

## Success Criteria
- Types compile with no errors
- Mock data covers all 10 sections
- EN and VI variants present
- Data structure mirrors Sanity schema patterns (file objects, image objects)

## Risk Assessment
- **Risk:** Type mismatch with existing Sanity data shape
- **Mitigation:** Keep existing fields identical; only add new optional fields to upgraded sections
