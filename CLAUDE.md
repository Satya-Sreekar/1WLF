# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static personal portfolio/branding site for "1WLF", deployed via GitHub Pages. No build tools, package managers, or frameworks — edit files and open in a browser directly.

## Development

Open `index.html` in a browser. For live-reloading during development, any static file server works:

```bash
npx serve .
# or
python -m http.server 8080
```

## Architecture

Single-page site with a vertical scroll-snap layout. All files:

- **[index.html](index.html)** — Full page structure + all JavaScript (no separate JS file). Contains: terminal typing animation, floating particles system, scroll progress bar, IntersectionObserver for quote reveal animations, and word-by-word quote animation logic.
- **[style.css](style.css)** — All styles. CSS custom properties (`:root`) define the full color system. Section theming uses `.section-theme-N` classes. Animations defined as `@keyframes` and applied via class toggling (`.in-view` added by IntersectionObserver).
- **[Background.svg](Background.svg)** — Used as `background-image` on the `.intro` section only.
- **[color pallet.txt](color pallet.txt)** — Reference document for the color system (not used by the site).

## Design System

Primary accent: `#08FDD8` (cyan). Dark backgrounds: `#0f0f10` / `#1A1B1F`. All color tokens are defined as CSS variables in `:root` at the top of `style.css`. The cyberpunk/terminal aesthetic is consistent throughout — maintain it when adding new sections.

## Page Structure

Sections snap to full viewport height (`scroll-snap-align: start`). Quote sections (`.quote-section`) use alternating entrance animations (left/right/scale/bottom) driven by `nth-of-type` selectors — adding a new quote section will inherit the next pattern in the sequence automatically.

The contact section social icon `href` values are currently placeholder `#` links and need real URLs added.
