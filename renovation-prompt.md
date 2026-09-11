# Adjorn.nl Replica Prompt (Svelte + Bun)

Create a complete, production-ready personal portfolio website that is a near-exact visual, structural, technical, and experiential replica of https://adjorn.nl (the personal site of an ML Engineer). The site must feel identical in aesthetics, information architecture, interaction patterns, typography, color system, spacing, and overall tone.

## 1. Overall Concept & Tone

- Minimal, quiet, highly refined personal portfolio of an ML / deep learning engineer.
- Calm, intellectual, slightly academic but modern and clean.
- No marketing fluff, no heavy animations, no stock photos, no decorative illustrations.
- Content is first-person, thoughtful, technically precise, and slightly introspective.
- Color palette is warm beige / cream with deep forest green and muted olive accents — never pure white or pure black.
- Feels like a carefully typeset technical notebook or a modern academic homepage.

## 2. Information Architecture & Routing

Single-page application (SPA) with client-side routing. Exact page structure:

### `/` (Home)
- Sticky header navigation
- Hero section: small uppercase label “ML ENGINEER” + status dot, large name, short bio paragraph, GitHub + Email links
- “FEATURED PROJECTS” section showing a small selection of project cards + “All projects →” link
- Footer

### `/projects`
- Page title “Projects” with small uppercase “WORK” label above
- Short subtitle
- Grid of all project cards
- Footer

### `/projects/[slug]` (dynamic project detail pages)
- Back link “← All projects”
- Status badge + year
- Large project title
- Tag pills
- Multi-paragraph technical description
- Optional interactive demo section (if the project has one)
- Footer

### `/about`
- Small uppercase “ABOUT” label
- Large name + location
- Longer bio paragraphs
- Experience section (timeline-style cards)
- Education section
- Skills section grouped by category with mono-style headers (`// ...`) and pill tags
- Publications section
- Contact section
- Footer

**Navigation:** Home / Projects / About (hamburger on mobile). Active link highlighted in the accent color.

**Footer** (on every page):
- Left: `// ml engineer` in monospace
- Right: GitHub + Email links
- Subtle top border

## 3. Tech Stack (Svelte + Bun)

- **Runtime & tooling**: Bun (latest). Use Bun as package manager, runtime, and development server.
- **Framework**: Svelte 5 (preferred) or Svelte 4 + SvelteKit.
- **Routing**:
  - Preferred: SvelteKit in SPA mode (`adapter-static` with `fallback: 'index.html'`), or
  - Pure Svelte SPA using a lightweight router.
- **Styling**: Tailwind CSS (v3 or v4) with a heavily customized design system via CSS variables.
- **Fonts**:
  - Primary: Space Grotesk (400/500/600/700)
  - Monospace: Space Mono (400/700)
- **Icons**: Inline SVGs only.
- **Interactive elements**: Support for client-side interactive demos where needed (e.g. using ONNX Runtime Web, WebGPU/WASM, D3, or similar libraries).
- **No backend**. All content is static / stored in simple TypeScript modules.
- **Build**: Output a pure static site.

### Exact color tokens

```css
--color-background: #f8f3e7
--color-foreground: #24422a
--color-muted-foreground: #5c744e
--color-muted: #eae3d1
--color-accent: #a6c856
--color-border: #dad2be
--color-card: #fcf9f3
```

## 4. Aesthetics & Visual Design System

- Warm cream background (`#f8f3e7`)
- Deep forest green text (`#24422a`)
- Muted olive secondary text (`#5c744e`)
- Soft lime accent (`#a6c856`)
- Cards: subtle border (`#dad2be`), light cream fill (`#fcf9f3`), soft rounded corners (~0.75rem)
- Project cards horizontal on desktop, stack on mobile
- Status dots next to years
- Small uppercase tracked section labels
- Max width ≈ `max-w-5xl`, generous but controlled whitespace
- Sticky header with backdrop-blur + semi-transparent background
- Subtle 150–200ms color transitions
- Flat design — no heavy shadows

## 5. Content Style

- First-person, precise, technical, slightly philosophical
- Dense short paragraphs
- Skills grouped under mono headers starting with `//`
- Experience presented as clean cards (role · company | dates)

## 6. Interactive Requirements

- Project detail pages should support optional rich interactive demos when relevant.
- Smooth client-side route transitions.
- Project cards are clickable and navigate to their detail page.

## 7. Recommended Project Structure (SvelteKit + Bun)

```
/
├── package.json
├── bun.lockb
├── svelte.config.js
├── tailwind.config.js (or .ts)
├── tsconfig.json
├── src/
│   ├── app.html
│   ├── app.css                 # Tailwind + CSS variables
│   ├── routes/
│   │   ├── +layout.svelte      # Header + Footer
│   │   ├── +page.svelte        # Home
│   │   ├── projects/
│   │   │   ├── +page.svelte    # Projects listing
│   │   │   └── [slug]/
│   │   │       └── +page.svelte
│   │   └── about/
│   │       └── +page.svelte
│   ├── lib/
│   │   ├── components/
│   │   │   ├── Header.svelte
│   │   │   ├── Footer.svelte
│   │   │   ├── ProjectCard.svelte
│   │   │   ├── Badge.svelte
│   │   │   └── Tag.svelte
│   │   ├── data/
│   │   │   ├── projects.ts
│   │   │   ├── experience.ts
│   │   │   ├── skills.ts
│   │   │   └── ...
│   │   └── ...
│   └── ...
├── static/
│   └── favicon.jpg
└── ...
```

Use Svelte 5 runes where appropriate (`$state`, `$derived`, etc.).

## 8. Additional Fidelity Requirements

- Meta title in the style of “Name — ML Engineer”
- Simple favicon
- Consistent header/footer on every page
- Responsive behavior matching the original
- Overall feeling of quiet competence and intellectual curiosity

Build the site so that side-by-side comparison with adjorn.nl makes it difficult to tell which is the original in terms of look, feel, structure, and interaction patterns. Prioritize visual and structural fidelity. Use Bun + Svelte throughout the development and build pipeline.
