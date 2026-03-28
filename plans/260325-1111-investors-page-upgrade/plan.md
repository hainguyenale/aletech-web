---
title: "Investors Page Upgrade"
description: "Upgrade investors page with 4 new sections, 4 upgraded sections, mock data layer"
status: pending
priority: P1
effort: 8h
branch: master
tags: [investors, ui, mock-data, recharts]
created: 2026-03-25
---

# Investors Page Upgrade

## Overview

Upgrade the Aletech investors page from 6 sections to 10 sections. Use mock JSON data (no Sanity changes). Each section as its own component file under `components/investors/`. Follows existing codebase patterns: FadeIn, StaggerContainer, motion hover effects, card-based layouts.

## Current Architecture

- **Page:** `app/[lang]/investors/page.tsx` (server component, fetches from Sanity)
- **Client:** `app/[lang]/investors/_components/animated-investors.tsx` (560 lines, monolithic)
- **Schema:** `sanity/schemaTypes/investors.ts`
- **Query:** `sanity/queries/investors.ts`

## Target Architecture

```
mocks/
  investors.ts                          # All mock data, typed exports

components/investors/
  hero-banner.tsx                       # Section 1 - NEW (replaces PageHeader)
  company-story-milestones.tsx          # Section 2 - NEW
  financial-highlights.tsx              # Section 3 - EXTRACT from animated-investors
  shareholder-structure.tsx             # Section 4 - NEW (Recharts donut)
  financial-reports-tabs.tsx            # Section 5 - UPGRADED (shadcn Tabs)
  corporate-governance.tsx              # Section 6 - NEW
  board-of-directors.tsx                # Section 7 - UPGRADED (hover bio)
  upcoming-events-timeline.tsx          # Section 8 - UPGRADED (timeline)
  news-disclosures.tsx                  # Section 9 - NEW
  ir-contact.tsx                        # Section 10 - EXTRACT from animated-investors

app/[lang]/investors/
  _components/animated-investors.tsx    # Refactored: imports section components
```

## Phase Overview

| Phase | Description | Status | Effort |
|-------|-------------|--------|--------|
| 1 | Mock data + TypeScript types | pending | 1.5h |
| 2 | Extract existing sections to components | pending | 1h |
| 3 | Build new sections (Hero, Story, Shareholder, Governance, News) | pending | 3h |
| 4 | Upgrade existing sections (Reports tabs, Board bio, Events timeline) | pending | 1.5h |
| 5 | Assemble page + responsive/dark mode QA | pending | 1h |

## Key Decisions

- Mock data in `mocks/investors.ts` - single file, typed. Later swap to Sanity fetch with zero UI changes.
- Do NOT modify Sanity schemas or queries yet.
- Keep `animated-investors.tsx` as the assembler (imports all section components).
- Each component receives its data slice via props (not importing mock directly - assembler passes data).
- Recharts PieChart for shareholder donut - already in dependencies.
- shadcn Tabs already available at `components/ui/tabs.tsx`.
- Bilingual: EN/VI mock data objects side by side, selected by `lang` param.
