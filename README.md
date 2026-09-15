# Portfolio — UX Engineer

Personal portfolio website built with SvelteKit, Bun, and Tailwind CSS v4. Static output via adapter-static with full prerendering.

## Tech Stack

- **Runtime**: Bun (package manager, runtime, dev server)
- **Framework**: Svelte 5 + SvelteKit
- **Styling**: Tailwind CSS v4 (CSS-first config via `@theme`)
- **Fonts**: Space Grotesk & Space Mono (self-hosted via @fontsource)
- **Output**: Pure static site with per-route HTML files

## Development

```bash
# Install dependencies
bun install

# Start dev server
bun run dev

# Typecheck and lint
bun run check
```

## Build & Preview

```bash
# Build production bundle (static output to build/)
bun run build

# Preview production build locally
bun run preview
```

## Structure

- `src/routes/` — SvelteKit routes (/, /projects, /projects/[slug], /about)
- `src/lib/components/` — Reusable UI components
- `src/lib/data/` — Content data modules (single source of truth)
- `static/` — Static assets (favicon, images)

## Design System

Warm cream/forest-green palette with Space Grotesk typography. See `src/app.css` for exact tokens and Tailwind configuration.