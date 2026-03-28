---
phase: 3
title: "Build New Sections"
status: pending
effort: 3h
---

# Phase 3: Build New Sections

## Context Links
- Mock data: `mocks/investors.ts` (from Phase 1)
- Types: `lib/types/investors.ts` (from Phase 1)
- Design reference: `plans/reports/researcher-ir-page-analysis.md` (FPT storytelling, Techcombank infographics)
- Animation patterns: `components/animations/fade-in.tsx`
- UI primitives: `components/ui/card.tsx`, `components/ui/badge.tsx`, `components/ui/tabs.tsx`

## Overview
Build 5 new section components. All follow existing design language: dark background, card-based, teal (#30C8C9) accents, FadeIn animations, motion hover effects, mobile-responsive.

---

## Section 1: Hero Banner (`components/investors/hero-banner.tsx`)

**Replaces:** PageHeader component usage

**Design:**
- Full-width section with gradient background (from-background via-primary/5 to-background)
- Left: tagline badge, heading with highlighted text in primary color, description paragraph
- Right: 3 stat cards in a row (Employees, Years, Clients) with animated count-up feel
- Bottom: subtle decorative blur orbs (matches home hero pattern)
- Grid pattern overlay (reuse `.grid-pattern` class from hero-section)

**Props:**
```typescript
interface HeroBannerProps {
  data: {
    tagline: string
    title: string
    highlightedText: string
    description: string
    stats: { number: string; label: string }[]
  }
}
```

**Implementation notes:**
- Follow `components/hero-section.tsx` pattern (containerVariants, itemVariants, statsVariants)
- Use `motion.div` with stagger children for reveal animation
- Stats should use `statItemVariants` with scale animation
- `pt-32 pb-20` padding to clear navbar
- Mobile: stack vertically, stats in 3-column grid

---

## Section 2: Company Story + Milestones (`components/investors/company-story-milestones.tsx`)

**Design:**
- Top: Section header with tagline badge, title, narrative paragraph (FPT-style tech storytelling)
- Bottom: Horizontal scrollable timeline of milestones
  - Each milestone: year badge (primary bg), title, short description
  - Connected by horizontal line with dots
  - On mobile: vertical timeline (stacked)
- Card style: `bg-card/50 backdrop-blur-sm border border-border rounded-xl`

**Props:**
```typescript
interface CompanyStoryProps {
  data: {
    tagline: string
    title: string
    narrative: string
    milestones: { year: string; title: string; description: string }[]
  }
}
```

**Implementation notes:**
- Use `overflow-x-auto` with `flex` for horizontal scroll on desktop
- Each milestone card ~200px wide, snapped
- Vertical line between dots using `border-l-2 border-primary/30` on mobile
- StaggerContainer for milestone cards with stagger reveal
- `dangerouslySetInnerHTML` for narrative (allows bold/links)

---

## Section 3: Shareholder Structure (`components/investors/shareholder-structure.tsx`)

**Design:**
- Section header with tagline badge
- Left: Recharts PieChart (donut) with custom colors per segment
- Right: Legend list - each item shows colored dot, name, percentage bar
- Card wrapper around the whole section
- "Last updated: {date}" footer text

**Props:**
```typescript
interface ShareholderStructureProps {
  data: {
    tagline: string; title: string; description: string
    shareholders: { name: string; percentage: number; color: string }[]
    lastUpdated: string
  }
}
```

**Implementation notes:**
- Import from `recharts`: `PieChart, Pie, Cell, ResponsiveContainer, Tooltip`
- Donut: `innerRadius={60} outerRadius={100}`
- Custom tooltip with dark bg matching theme
- Use `ResponsiveContainer` with `width="100%" height={280}`
- Mobile: stack chart above legend
- Colors from mock data (teal shades, grays)
- Use shadcn chart component pattern if `components/ui/chart.tsx` fits, otherwise raw Recharts

---

## Section 4: Corporate Governance (`components/investors/corporate-governance.tsx`)

**Design:**
- Section header with tagline badge
- Grid of 4-5 document cards (2x2 on desktop, 1-col mobile)
- Each card: icon (Lucide), title, short description, "View Document" link
- Card hover: lift + primary border glow (matches existing pattern)
- Vietnamese doc names: Dieu le Cong ty, Quy che Quan tri, etc.

**Props:**
```typescript
interface CorporateGovernanceProps {
  data: {
    tagline: string; title: string; description: string
    documents: { title: string; description: string; icon: string; url: string }[]
  }
}
```

**Implementation notes:**
- Dynamic Lucide icon rendering: use a simple icon map object (FileText, Shield, Scale, BookOpen, Leaf)
- `motion.div whileHover={{ y: -5 }}` on cards
- External link icon on hover
- Cards: `bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6`

---

## Section 5: News & Disclosures (`components/investors/news-disclosures.tsx`)

**Design:**
- Section header with tagline badge
- Feed list layout (not grid) - each item is a horizontal card
- Left: date badge (month/day stacked, primary bg)
- Center: title, summary text, category badge
- Right: arrow link icon
- Category badge colors: news=primary, disclosure=amber, announcement=blue
- Show 5 items with "View All" button

**Props:**
```typescript
interface NewsDisclosuresProps {
  data: {
    tagline: string; title: string; description: string
    items: { title: string; date: string; category: string; summary: string; url?: string }[]
  }
}
```

**Implementation notes:**
- Use shadcn `Badge` component for category tags
- Each item: `border-b border-border` divider style (not full cards for density)
- FadeIn with stagger on items
- Date formatting: reuse `formatDate` from `lib/utils/format.ts`
- "View All" button: outline style with primary border

---

## Related Code Files
- **Create:** `components/investors/hero-banner.tsx`
- **Create:** `components/investors/company-story-milestones.tsx`
- **Create:** `components/investors/shareholder-structure.tsx`
- **Create:** `components/investors/corporate-governance.tsx`
- **Create:** `components/investors/news-disclosures.tsx`

## Todo List
- [ ] hero-banner.tsx - gradient bg, stats, stagger animation
- [ ] company-story-milestones.tsx - narrative block + horizontal timeline
- [ ] shareholder-structure.tsx - Recharts donut + legend
- [ ] corporate-governance.tsx - document card grid
- [ ] news-disclosures.tsx - feed list with date badges
- [ ] Each component under 200 lines
- [ ] All components mobile-responsive
- [ ] Dark mode verified (no hardcoded light-only colors)
- [ ] Run `npx tsc --noEmit`

## Success Criteria
- 5 new components render correctly with mock data
- Animations consistent with existing sections (FadeIn, StaggerContainer)
- Recharts donut renders with proper colors and tooltip
- Timeline scrolls horizontally on desktop, stacks vertically on mobile
- All text uses `text-foreground`/`text-muted-foreground` (dark mode safe)

## Risk Assessment
- **Risk:** Recharts SSR hydration mismatch
- **Mitigation:** Wrap chart in `"use client"` component; use `ResponsiveContainer` with explicit dimensions; consider dynamic import with `ssr: false` if needed
- **Risk:** Horizontal timeline scroll UX on touch devices
- **Mitigation:** Add scroll-snap and visible overflow indicators
