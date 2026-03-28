---
phase: 4
title: "Upgrade Existing Sections"
status: pending
effort: 1.5h
---

# Phase 4: Upgrade Existing Sections

## Context Links
- Extracted components from Phase 2
- shadcn Tabs: `components/ui/tabs.tsx`
- shadcn HoverCard: `components/ui/hover-card.tsx`

## Overview
Upgrade 3 existing sections with enhanced UX: tab filtering for reports, hover bios for board, timeline layout for events.

---

## Upgrade 1: Financial Reports with Tab Filter (`components/investors/financial-reports-tabs.tsx`)

**Current:** Flat grid of report cards with "Load More" button.

**Upgraded:**
- Add shadcn `Tabs` component at top for filtering
- Tab triggers: "All", "Annual", "Quarterly", "Governance"
- Second row of tabs or select for year filter: "All Years", "2026", "2025", "2024"
- Reports grid filters reactively based on selected tab + year
- Keep existing card design and download button
- Remove "Load More" - show all filtered results (max ~10 per filter)

**Implementation notes:**
```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

// State: activeCategory, activeYear
// Filter: reports.filter(r =>
//   (activeCategory === 'all' || r.category === activeCategory) &&
//   (activeYear === 'all' || r.year === parseInt(activeYear))
// )
```

- Use `useState` for filter state instead of TabsContent (since we cross-filter two dimensions)
- Tabs as visual selectors, not content containers
- AnimatePresence for smooth card transitions when filter changes
- Year filter: row of small pill buttons below main tabs

**Props update:**
```typescript
// Reports now include category + year fields from Phase 1 types
reports: { ...existing, category: string, year: number }[]
```

---

## Upgrade 2: Board of Directors with Hover Bio (`components/investors/board-of-directors.tsx`)

**Current:** Photo card with name + position. No bio.

**Upgraded:**
- On hover (desktop): overlay slides up from bottom showing short bio text
- On mobile: bio visible below name/position by default (no hover on touch)
- Bio text: 2-3 sentences, `text-sm text-muted-foreground`
- Overlay: `bg-gradient-to-t from-background/95 via-background/80 to-transparent`
- Smooth slide-up animation with Framer Motion

**Implementation notes:**
```tsx
<motion.div
  className="absolute inset-0 bg-gradient-to-t from-background/95 ..."
  initial={{ y: '100%' }}
  whileHover={{ y: '40%' }}  // slide up to show bio
  transition={{ duration: 0.3 }}
>
  <div className="absolute bottom-0 p-4">
    <p className="text-sm text-muted-foreground">{member.bio}</p>
  </div>
</motion.div>
```

- Alternative approach: use `group` + `group-hover:translate-y-0` in Tailwind for simpler implementation
- Mobile detection: use `md:` breakpoint to conditionally show bio inline vs overlay
- Keep existing card structure, just add the overlay div inside the image container

**Props update:**
```typescript
members: { ...existing, bio: string }[]
```

---

## Upgrade 3: Upcoming Events as Timeline (`components/investors/upcoming-events-timeline.tsx`)

**Current:** Left column event list + right column presentation card.

**Upgraded:**
- Left column: vertical timeline with connecting line
  - Each event: date badge (colored by event type), title, time, location with MapPin icon
  - Vertical line: `border-l-2 border-primary/20` with dots at each event
  - Event type badge: meeting=blue, earnings=green, conference=purple
- Right column: keep presentation card as-is (it works well)
- Add subtle pulse animation on the topmost (next upcoming) event dot

**Implementation notes:**
```tsx
<div className="relative pl-8">
  {/* Vertical timeline line */}
  <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-primary/20" />

  {events.map((event, i) => (
    <div className="relative mb-8" key={i}>
      {/* Dot on timeline */}
      <div className="absolute -left-5 w-3 h-3 rounded-full bg-primary border-2 border-background" />
      {/* Event card content */}
    </div>
  ))}
</div>
```

- First event dot: add `animate-pulse` class
- Event type badge: use shadcn Badge with variant colors
- Keep the presentation side panel on right (lg:grid-cols-2 layout preserved)

**Props update:**
```typescript
events: { ...existing, type: string, description?: string }[]
```

---

## Related Code Files
- **Modify:** `components/investors/financial-reports-tabs.tsx`
- **Modify:** `components/investors/board-of-directors.tsx`
- **Modify:** `components/investors/upcoming-events-timeline.tsx`

## Todo List
- [ ] Add tab filtering to financial-reports-tabs.tsx
- [ ] Add year pill filter row
- [ ] Add AnimatePresence for filter transitions
- [ ] Add hover bio overlay to board-of-directors.tsx
- [ ] Mobile: show bio inline below name
- [ ] Convert events to vertical timeline layout
- [ ] Add event type badges
- [ ] Add pulse on next-upcoming event dot
- [ ] Each file under 200 lines
- [ ] Run `npx tsc --noEmit`

## Success Criteria
- Report tabs filter correctly by category and year
- Board member hover reveals bio with smooth animation
- Bio visible by default on mobile (no hover needed)
- Timeline connects events visually with line + dots
- All animations smooth (60fps)
