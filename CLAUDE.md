# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio/branding site for "1WLF" (Satya Sreekar Pattaswami). Built with React 19, TypeScript, Vite, and Framer Motion. Deployed to GitHub Pages via a CI workflow that runs `npm run build` and publishes the `dist/` directory on every push to `main`.

## Commands

```bash
npm run dev        # Start Vite dev server (hot reload)
npm run build      # TypeScript check + Vite production build → dist/
npm run preview    # Serve the production build locally

# Tests (Playwright — requires a build first)
npx playwright test                       # Run all tests
npx playwright test tests/homepage.spec.ts  # Run a single test file
```

## Architecture

**Multi-page Vite app** with two entry points configured in `vite.config.ts`:

- `index.html` → `src/main.tsx` → `src/App.tsx` — Main portfolio site
- `tms.html` → `src/tms/tms-main.tsx` → `src/tms/TmsApp.tsx` — TMS product page (accessible at `/tms`)

A custom Vite plugin in `vite.config.ts` rewrites `/tms` → `/tms.html` during dev.

**Main site sections** composed in `App.tsx`: Loader → Navbar, ScrollProgress, BackgroundLayers, AuroraGlow, Meteors, MouseGlow → Hero, Projects, FocusAreas, Quotes, Contact.

**Key directories:**

- `src/shared/` — Components used by both pages (ScrollReveal, BackgroundLayers, MouseGlow, ScrollProgress, SkipLink), with barrel export
- `src/components/` — Main site components, grouped by feature (e.g., `Hero/`, `Projects/`, `Quotes/`). Each feature directory co-locates the component, its CSS, and child components. Top-level barrel re-exports all sections.
- `src/hooks/` — Custom hooks (scroll progress, terminal typing animation, reduced motion, count-up)
- `src/data/content.ts` — All text content (terminal commands, quotes, focus areas, projects) as typed exports
- `src/styles/global.css` — Global CSS variables and resets
- `src/tms/` — TMS product page, mirroring the main site structure: `components/` (grouped by feature with co-located CSS), `styles/tms-global.css`, and `tms-content.ts`
- `public/` — Static assets (SVGs, images, CNAME, TMS screenshots)
- `legacy/` — Old static HTML/CSS site (archived, not used)

## Design System

Cyberpunk/terminal aesthetic. Primary accent: `#08FDD8` (cyan). Dark backgrounds: `#0a0a0f`. Fonts: Space Grotesk (headings) and JetBrains Mono (code/terminal). Animations use Framer Motion throughout. Icons from `lucide-react`.

CSS is co-located with each component (e.g., `Hero/hero.css` alongside `Hero/Hero.tsx`). Global variables are in `src/styles/global.css`. The TMS page has its own global styles in `src/tms/styles/tms-global.css` with a blue accent (`#4f6ef7`) instead of cyan.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml` which builds and deploys to GitHub Pages. The site uses a custom domain configured via `CNAME`.
