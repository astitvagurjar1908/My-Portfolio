# Astitva Singh Gurjar — Portfolio

A premium, recruiter-focused personal portfolio built with React 19, TypeScript, Tailwind CSS,
and Framer Motion. Dark mode by default with a light-mode toggle, glassmorphism cards, and a
live "system status" dashboard motif in the hero that echoes the observability work
(New Relic / Grafana) described in the resume.

Every fact on the site — roles, metrics, skills, education — is pulled from
`src/data/resume.ts`, which was built directly from the uploaded resume. Nothing is invented:
the resume lists no personal side-projects, so the Projects section presents the real production
systems built at To The New (framed honestly as work projects, not side projects), and the
resume lists no certifications, so that section is coded to render nothing rather than show a
placeholder.

## Tech stack

- React 19 + TypeScript
- Vite 5
- Tailwind CSS 3
- Framer Motion 11
- React Router 6
- React Helmet Async (SEO tags)
- Lucide React (icons)

## Getting started

Requires Node.js 18+.

```bash
npm install
npm run dev
```

The dev server prints a local URL (typically `http://localhost:5173`).

To type-check and build a production bundle:

```bash
npm run build
npm run preview   # serve the production build locally
```

> **Note:** this project was assembled in an offline environment without registry access, so
> `npm install` has not been run end-to-end here. The dependency versions in `package.json` are
> current, standard releases as of writing — if any single package version has since been
> deprecated on npm, loosen that one line in `package.json` (e.g. drop the patch version) and
> reinstall.

## Editing your content

Everything text-based lives in one file:

```
src/data/resume.ts
```

Update `profile`, `experience`, `skills`, `projects`, `education`, or `certifications` there and
every section on the site updates automatically — no need to touch component files for content
changes.

To swap in a different resume PDF for the download button, replace
`public/Astitva-Singh-Gurjar-Resume.pdf` and update `profile.resumeFile` in `resume.ts` if you
rename the file.

To add real LinkedIn/GitHub URLs, update `profile.linkedin` and `profile.github` — these are
currently placeholders since the source resume didn't include the actual URLs.

To add a real Open Graph preview image, drop a 1200×630 image at `public/og-image.png`.

## Project structure

```
src/
├── components/       # All UI sections and reusable pieces
├── data/
│   └── resume.ts     # Single source of truth for all content
├── hooks/             # useTheme, useScrollProgress
├── pages/
│   └── Home.tsx       # Assembles all sections in order
├── App.tsx            # Layout shell, routing, SEO
├── main.tsx           # Entry point
└── index.css          # Tailwind layers + design tokens
```

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for Vercel, Netlify, and GitHub Pages instructions.

## Accessibility & performance notes

- Semantic HTML landmarks (`header`, `main`, `footer`, `section`)
- Visible keyboard focus rings (`:focus-visible`)
- `prefers-reduced-motion` respected — animations are disabled for users who request it
- Code-split vendor/motion bundles configured in `vite.config.ts`
- Lazy-loadable structure — add `React.lazy` per section if you want route-level splitting later
