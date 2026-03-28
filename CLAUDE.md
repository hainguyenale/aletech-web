# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Aletech corporate website - a bilingual (English/Vietnamese) marketing site built with Next.js 15 and Sanity CMS. All page content is managed through Sanity Studio (mounted at `/studio`) with document internationalization.

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run Next.js ESLint
```

No test framework is configured.

## Architecture

### Tech Stack
- **Next.js 15** (App Router) with React 19 and TypeScript
- **Sanity CMS** for content management with `@sanity/document-internationalization` for i18n
- **Tailwind CSS 3** with **shadcn/ui** (Radix UI primitives) for component library
- **Framer Motion** for animations (scroll-triggered via `react-intersection-observer`)

### Data Flow Pattern
All pages follow the same pattern:
1. `app/<page>/page.tsx` - Server component that exports metadata
2. `app/<page>/<Page>PageClient.tsx` - Client component that fetches data from Sanity using `useLanguage()` context and renders the page

Data fetching happens client-side via `useEffect` + `client.fetch()` with language as a dependency. When language changes, a loading state is shown while new content loads.

### Key Directories
- `sanity/schemaTypes/` - Sanity document schemas (home, about, projects, solutions, investors, contact, footer, navbar, metadata)
- `sanity/queries/` - GROQ queries for each page, parameterized by `$language`
- `contexts/language-context.tsx` - Client-side language provider (persists to localStorage)
- `components/` - Shared UI components; `components/ui/` contains shadcn/ui primitives
- `components/animations/` - Reusable Framer Motion wrappers (fade-in, scale-in, stagger)

### Adding/Modifying Content
To add a new field to a page:
1. Update the Sanity schema in `sanity/schemaTypes/<page>.ts`
2. Update the GROQ query in `sanity/queries/<page>.ts`
3. Update the TypeScript interface in the client component
4. Use the field in the component JSX

### Important Patterns
- **Path aliases**: `@/*` maps to project root
- **Primary color**: `#30C8C9` (teal) defined in `tailwind.config.ts`
- **Dark mode**: Default theme is `dark`, managed via `next-themes` with class strategy
- **Middleware**: `/investors` route is geo-restricted to Vietnam only (`x-vercel-ip-country`)
- **Sanity i18n**: Supported languages are `vi` and `en`; all content schemas listed in `sanity.config.ts` support internationalization
- **No ESLint/TS enforcement on build**: Both are set to `ignoreDuringBuilds`/`ignoreBuildErrors` in `next.config.mjs`

### Environment Variables
- `NEXT_PUBLIC_SANITY_PROJECT_ID` (defaults to `jspa4h9r`)
- `NEXT_PUBLIC_SANITY_DATASET` (defaults to `production`)
- `NEXT_PUBLIC_SANITY_API_VERSION`
