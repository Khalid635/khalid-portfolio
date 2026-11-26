# Khalid Bin Masud — Portfolio (React rebuild)

React rebuild of the portfolio on branch `react-rebuild`. The live site
(https://khalid-portfolio-lac.vercel.app) still serves the static site from
`main` — nothing here touches production until this branch is reviewed and
merged.

## Layout choice

**Root replacement on the branch** (not a `react/` subdirectory). The old
static site is kept intact for reference under `legacy/`:

- `legacy/index.html`, `legacy/style.css`, `legacy/script.js`,
  `legacy/case-study-dovira.html` — the original static site, verbatim.
- `public/images/` — the original images, served from the site root.
- `src/` — the React app (Vite + React 19 + TypeScript + Tailwind CSS v4).

Why root replacement: Vercel auto-deploys from the repo root, so a preview
deployment of this branch works with no extra Vercel config (a `react/`
subdirectory would need a root-directory override and would complicate the
 eventual merge). `vercel.json` adds an SPA rewrite so the
`/case-study-dovira` route serves `index.html`.

## Stack

| Piece | Version |
| --- | --- |
| Vite | 8.3.8 |
| React / React DOM | 19.3.1 |
| TypeScript | 7.0.2 |
| Tailwind CSS (+ @tailwindcss/vite) | 4.3.5 |
| react-router-dom | 7.18.7 |
| shadcn/ui (radix base, nova preset, CLI 4.23.1) | button, badge, card, separator (copied into `src/components/ui/`) |
| @ui-sdk/core / @ui-sdk/react | 0.1.0-beta.17 (pinned) |
| lucide-react | 1.81.0 |

## Skills used

- **ui-sdk** — project filter tabs (`Tabs`/`TabsList`/`TabsTab`/`TabsPanel`),
  mobile menu + screenshot lightbox (`Dialog` with focus trap, Escape,
  labelled title), keyboard/focus/ARIA correct. API details taken from the
  package `.d.ts` types, which the skill names as the source of truth.
- **oil-ui (light-path)** — direction "Red-hot workshop at night", kept the
  current red identity; no redesign.
- **unslop (light-slop mode)** — solid red instead of gradient
  buttons/name-box/brand-mark, static badge dots (no pulse), 3 static paper
  planes (no float loop), 2 static ambient washes (no drifting orbs),
  sparks removed, emoji in labels replaced with lucide line icons,
  sentence-case section tags.
- **ui-styling** — design-system tokens in `src/index.css` (`@theme`:
  ink/soft/faint, accent #ef3a2c, panel, display/sans/mono/hand fonts).
- **Emil animation skills** — one hero entrance stagger + reveal-on-scroll +
  typing + marquee only; transform/opacity-only, `prefers-reduced-motion`
  respected everywhere.
- **logo-design** — only a minimal favicon (`public/favicon.svg`, red square
  with a white K); existing KM brand mark kept, no reference SVGs copied.
- Stageshow was NOT used for the site itself.

## Content

Every section is ported verbatim from the static site: hero, about, all 5
projects (DOVIRA, Hisab AI, RAG Web, Swift Logistics, SaveClip), stats
(5 / 3 / 28 / 4.0), GitHub calendar, showreel, skills, credentials,
journey, contact/footer, and the DOVIRA case study (now a real route,
`/case-study-dovira`). No projects, numbers or links were invented. The
footer's build note now reads "Built with React, TypeScript & Tailwind CSS"
because that is what this version is built with.

New (additive, no content changed): a project filter (All / AI / Live
sites / Open source), a screenshot lightbox, and a showreel play/pause
button. The interactive terminal (help / whoami / skills / projects /
contact / clear) is ported as a React component.

## Run

```bash
npm install
npm run dev      # local dev server
npm run build    # tsc + vite build (must pass with zero errors)
npm run preview  # serve the production build
```

## Deliberately left out

- No Resume button (no correct resume file exists yet).
- No change to the LinkedIn featured link.
- No new case-study pages for other projects.
- No redesign of the color identity.
- `main` untouched; no merge, no production deploy from this branch.
