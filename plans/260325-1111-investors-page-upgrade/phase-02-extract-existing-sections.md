---
phase: 2
title: "Extract Existing Sections to Components"
status: pending
effort: 1h
---

# Phase 2: Extract Existing Sections to Components

## Context Links
- Source: `app/[lang]/investors/_components/animated-investors.tsx` (560 lines)
- Animation helpers: `components/animations/fade-in.tsx`, `stagger-container.tsx`, `stagger-item.tsx`

## Overview
Split the monolithic `animated-investors.tsx` into individual section component files. No visual changes - pure refactor. Each component receives typed props, uses existing animation wrappers.

## Key Insights
- Current file has 6 inline sections. Extract 3 that stay unchanged (Financial Highlights, existing Contact IR) and 3 that will be upgraded in Phase 4.
- Keep `animated-investors.tsx` as the assembler/orchestrator.
- Follow kebab-case file naming. Keep each file under 200 lines.
- Use `"use client"` directive on each component (they use Framer Motion).

## Implementation Steps

### Step 1: Create `components/investors/financial-highlights.tsx`
Extract lines 137-193 from animated-investors.tsx.

Props interface:
```typescript
interface FinancialHighlightsProps {
  data: {
    tagline: string; title: string; description: string
    metrics: { title: string; value: string; growth?: string; progressPercentage?: number; icon: string }[]
  }
}
```

Keep: FadeIn, StaggerContainer, StaggerItem, motion hover, icon mapping (TrendingUp, BarChart3, PieChart).

### Step 2: Create `components/investors/ir-contact.tsx`
Extract lines 483-555 from animated-investors.tsx.

Props interface:
```typescript
interface IRContactProps {
  data: {
    title: string; description: string
    email: string; phone: string; address: string[]
  }
}
```

Keep: FadeIn, motion hover on card, 3 CTA buttons.

### Step 3: Create `components/investors/financial-reports-tabs.tsx` (stub)
Extract lines 195-275. This will be upgraded in Phase 4 with Tabs, but extract as-is first.

### Step 4: Create `components/investors/board-of-directors.tsx` (stub)
Extract lines 431-481. Will be upgraded with hover bio in Phase 4.

### Step 5: Create `components/investors/upcoming-events-timeline.tsx` (stub)
Extract lines 278-427. Will be upgraded in Phase 4.

### Step 6: Refactor `animated-investors.tsx`
Replace inline JSX with component imports:

```tsx
import FinancialHighlights from '@/components/investors/financial-highlights'
import IRContact from '@/components/investors/ir-contact'
import FinancialReportsTabs from '@/components/investors/financial-reports-tabs'
import BoardOfDirectors from '@/components/investors/board-of-directors'
import UpcomingEventsTimeline from '@/components/investors/upcoming-events-timeline'
// ... new sections added in Phase 3

export default function AnimatedInvestors({ data, footerData }) {
  return (
    <main>
      <Navbar />
      {/* Hero Banner - Phase 3 */}
      {/* Company Story - Phase 3 */}
      <FinancialHighlights data={data.financialHighlights} />
      {/* Shareholder Structure - Phase 3 */}
      <FinancialReportsTabs data={data.financialReports} />
      {/* Corporate Governance - Phase 3 */}
      <BoardOfDirectors data={data.boardOfDirectors} />
      <UpcomingEventsTimeline data={data.upcomingEvents} />
      {/* News & Disclosures - Phase 3 */}
      <IRContact data={data.contactIR} />
      <Footer data={footerData} />
    </main>
  )
}
```

### Step 7: Move utility functions
Move `formatFileSize` and `formatDate` to `lib/utils/format.ts` (shared across components).

## Related Code Files
- **Modify:** `app/[lang]/investors/_components/animated-investors.tsx`
- **Create:** `components/investors/financial-highlights.tsx`
- **Create:** `components/investors/ir-contact.tsx`
- **Create:** `components/investors/financial-reports-tabs.tsx`
- **Create:** `components/investors/board-of-directors.tsx`
- **Create:** `components/investors/upcoming-events-timeline.tsx`
- **Create:** `lib/utils/format.ts`

## Todo List
- [ ] Create `components/investors/` directory
- [ ] Extract financial-highlights.tsx
- [ ] Extract ir-contact.tsx
- [ ] Extract financial-reports-tabs.tsx (stub, pre-upgrade)
- [ ] Extract board-of-directors.tsx (stub, pre-upgrade)
- [ ] Extract upcoming-events-timeline.tsx (stub, pre-upgrade)
- [ ] Extract format utilities to lib/utils/format.ts
- [ ] Refactor animated-investors.tsx to import components
- [ ] Verify page renders identically (visual regression check)
- [ ] Run `npx tsc --noEmit`

## Success Criteria
- Page renders identically to current version
- animated-investors.tsx under 80 lines
- Each extracted component under 200 lines
- No TypeScript errors
