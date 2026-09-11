# Implementation Plan — Portfolio Renovation (Svelte + Bun)

Goal: replace the current Vue 3 / Vue CLI scaffold with a production-ready SvelteKit SPA built per `renovation-prompt.md` — warm cream/forest-green design system, exact IA (`/`, `/projects`, `/projects/[slug]`, `/about`), Tailwind + CSS-variable tokens, Space Grotesk / Space Mono, Bun as package manager/runtime/dev server, pure static output.

---

## Phase 0 — Inventory & Decisions (done / open)

### Current codebase assessment
| Item | Status | Disposition |
|---|---|---|
| `package.json` (Vue deps) | Scaffold only | Replace with SvelteKit + Bun manifest |
| `vue.config.js`, `babel.config.js`, `.browserslistrc`, `postcss.config.js`, `tailwind.config.js` (v3), `.eslintrc.js` | Vue tooling | Delete; replaced by SvelteKit template config + Tailwind v4 CSS-first setup |
| `src/App.vue`, `main.js`, `router/`, `views/*`, `components/*` | Placeholder views, no real content split | Delete after migrating any reusable content/assets |
| `src/doc/requirements.txt` | Old MoSCoW requirements (contact form → email redirect) | Superseded by renovation prompt (no backend; Email = mailto link). Keep file for reference or archive. |
| `src/assets/multimedia/inigo.jpg` | Profile photo | Reuse → `static/profile.jpg` (About page / hero if needed) |
| `src/assets/logo.png` | Logo | Candidate favicon → `static/favicon.jpg` per prompt |
| `public/index.html`, `favicon.ico` | Vue entry | Replaced by SvelteKit `app.html` + new favicon |

### Decisions
1. **Tailwind v4** (prompt allows v3/v4). SvelteKit templates ship v4 with the Vite plugin; CSS-first config via `@theme` — no `tailwind.config.js` needed for tokens.
2. **Fonts self-hosted** via `@fontsource/space-grotesk` + `@fontsource/space-mono` (no runtime network dependency, matches "pure static site"). Weights: 400/500/600/700 and mono 400/700.
3. **Static strategy:** `@sveltejs/adapter-static` with `fallback: 'index.html'` (SPA mode per prompt) **plus** full prerendering — every route gets its own HTML file, including `/projects/[slug]` pages via slug enumeration (`async = true`). This gives per-page meta titles ("Name — ML Engineer") and works even without JS for the shell.
4. **Svelte 5 runes** throughout (`$state`, `$derived`, `snippets` where useful).
5. **No backend.** Contact = mailto link in header/footer; no contact form (supersedes old requirements.txt).

### Open questions (need input before content phase)
- [ ] Confirm persona details per prompt: name, "ML ENGINEER" label, bio paragraphs, location, GitHub URL, email address.
- [ ] Project list: titles, slugs, years, status badges, tags, multi-paragraph descriptions; which have interactive demos (and what the demo does — ONNX Web / D3 / etc.).
- [ ] Experience timeline entries (role · company | dates), education, skills groups (`//` categories + pills), publications.
- [ ] Confirm `inigo.jpg` is the intended portrait and `logo.png` the favicon source.

---

## Phase 1 — Tooling & Scaffold
1. Verify Bun: `bun --version`; install if missing (Windows x64).
2. Scaffold SvelteKit TS app (`bun create svelte` / template) into a temp dir, then move structure in; or hand-place the standard files:
   - `svelte.config.js`, `vite.config.ts`, `tsconfig.json`, `.eslintrc.cjs` (template), `src/app.html`, `src/app.css`.
3. Delete Vue-specific files listed above. Keep git history intact (single commit per phase).
4. `bun add @sveltejs/adapter-static @fontsource/space-grotesk @fontsource/space-mono`; dev deps: `@sveltejs/vite-plugin-svelte`, `tailwindcss` + `@tailwindcss/vite`.
5. Scripts in `package.json`: `"dev": "bunx vite dev"` / standard SvelteKit scripts run under Bun (`bun run dev|build|preview`).

## Phase 2 — Design System (exact tokens)
`src/app.css` (Tailwind v4):
```css
@import "tailwindcss";
@theme {
  --color-background: #f8f3e7;
  --color-foreground: #24422a;
  --color-muted-foreground: #5c744e;
  --color-muted: #eae3d1;
  --color-accent: #a6c856;
  --color-border: #dad2be;
  --color-card: #fcf9f3;
  --font-sans: "Space Grotesk", sans-serif;
  --font-mono: "Space Mono", monospace;
}
```
- Base layer: `html/body` → bg-background, text-foreground, font-sans, antialiased.
- Shared utilities/components: section label (small uppercase tracked), card (`bg-card border-border rounded-[0.75rem]`), status dot, 150–200ms color transitions on interactive elements.
- `app.html`: meta title pattern "Name — ML Engineer", favicon `/favicon.jpg`, lang, charset; no external font links (self-hosted).

## Phase 3 — Data Layer (`src/lib/data/`)
All content as typed TypeScript modules (single source of truth):
- `site.ts` — name, role label ("ML ENGINEER"), location, bio paragraphs, GitHub URL, email.
- `projects.ts` — `{ slug, title, year, status, tags[], description: string[] | blocks, demo?: 'name' }`; drives `/projects`, home featured subset (first N), and the prerender slug list.
- `experience.ts` — timeline cards (role · company | dates).
- `education.ts`, `skills.ts` (categories with `//` headers + pill tags), `publications.ts`.
- Content authored first-person, precise, slightly introspective; dense short paragraphs. Draft from existing repo info + answers to Phase 0 questions.

## Phase 4 — Layout & Components (`src/lib/components/`)
- `Header.svelte` — sticky top, backdrop-blur + semi-transparent bg (e.g. `bg-background/80 backdrop-blur`), nav Home / Projects / About; active link in accent color; hamburger menu on mobile (client-side toggle).
- `Footer.svelte` — subtle top border; left: `// ml engineer` monospace; right: GitHub + Email links.
- `ProjectCard.svelte` — horizontal layout desktop, stacked mobile; clickable → detail page; status dot next to year.
- `Badge.svelte`, `Tag.svelte` (pill), `SectionLabel.svelte`, `StatusDot.svelte`.
- Icons: inline SVG components only (GitHub mark, mail, arrow).
- Root `+layout.svelte`: Header + Footer shell, per-page title via layout-data export pattern; smooth route transition wrapper.

## Phase 5 — Pages (`src/routes/`)
- `/` Home: hero (small uppercase "ML ENGINEER" label + status dot → large name → short bio → GitHub + Email links), "FEATURED PROJECTS" subset of cards + "All projects →" link, footer.
- `/projects`: "WORK" label above title "Projects", short subtitle, grid of all project cards.
- `/projects/[slug]`: back link "← All projects", status badge + year, large title, tag pills, multi-paragraph description, optional interactive demo section (registry map slug → demo component), footer. `+page.js` with `async = true` enumerating slugs for prerendering; 404 handling for unknown slugs.
- `/about`: "ABOUT" label, large name + location, longer bio paragraphs, experience timeline cards, education section, skills grouped by mono `// ...` headers with pill tags, publications, contact section, footer.

## Phase 6 — Routing & Static Build Details
- `vite.config.ts`: adapter-static `{ fallback: 'index.html' }`.
- Prerender everything (`prerender = true` in root layout) + dynamic slug enumeration → fully static output with per-page HTML and meta titles ("Name — ML Engineer", "Projects — Name", "<Project> — Name").
- Route transitions: subtle fade/slide (150–200ms) on navigation; no heavy animations.

## Phase 7 — Build & QA
1. `bun install`, `bun run dev` → verify all pages, mobile/desktop breakpoints, active nav state, hamburger behavior, transitions.
2. `bun run build` → confirm `.svelte-kit/output/` is pure static (HTML per route + assets); `bun run preview`.
3. Lint/typecheck: template ESLint config + `svelte-check`; TS strict on data modules.
4. Fidelity checklist vs prompt: exact color tokens, fonts loaded, max-w-5xl content width, card radius ~0.75rem, border colors, 150–200ms transitions, sticky header blur, footer consistency, uppercase tracked labels, status dots, mono `//` headers.
5. Side-by-side comparison with adjorn.nl for look/feel/structure parity.

## Phase 8 — Cleanup & Docs
- Remove any leftover Vue files; update `.gitignore`; rewrite `README.md` (Bun setup: install/dev/build/preview).
- Commit per phase; final visual pass.

---

## Risks / Notes
- **Content is the critical path** — structure/design can be built immediately, but data modules need real details (Phase 0 questions). Placeholders drafted in the prompt's tone until confirmed.
- Tailwind v4 differs from the current v3 config approach — no `tailwind.config.js` content globs; CSS-first.
- Svelte 5: prefer runes + standard component patterns; avoid mixing legacy reactivity.
- Prerendered dynamic routes require known slugs at build time (solved by enumerating from `projects.ts`).
- Bun on Windows is stable for dev/build; if any quirk appears, fallback is Node with identical scripts — but target remains Bun per prompt.
