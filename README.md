# SmartDesk — React Vite Demo

> A polished premium SaaS landing site and demo built with React, Vite, Tailwind and Framer Motion. This repository is a Vite React app used for learning deployment and building a modern, interactive marketing site (SmartDesk).

## Quick start

Prerequisites

- Node.js 18+ (or current LTS)
- npm (or use yarn/pnpm)

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
# open http://localhost:5173
```

Build for production

```bash
npm run build
```

Preview production build locally

```bash
npm run preview
```

## Project structure (high level)

- `src/` — application source
  - `pages/` — route pages (Home, Features, About, Contact, etc.)
  - `components/` — shared UI components (Navbar, Footer, CursorGlow, cards)
  - `styles/` — Tailwind entry + custom CSS helpers
- `index.html`, `vite.config.js` — Vite config

## Important notes & tips

- Vite `base` setting: If you deploy to a subpath or encounter missing assets on production, set `base: './'` in `vite.config.js` to make asset paths relative.
- CursorGlow: a small Framer Motion component (`src/components/CursorGlow.jsx`) creates pointer-follow glow effects. It expects a `ref` to be passed as `parentRef`. If you add CursorGlow to a component, ensure you create `const ref = useRef(null)` and attach `ref={ref}` to the container.

## Common issues & debugging

- Extra blank area or multiple scrollbars
  - Cause: absolutely-positioned decorative blobs or elements placed outside positioned containers can expand document height. Use DevTools to inspect elements near the bottom of the page. Decorative blobs must be placed inside a positioned parent (e.g. `position: relative` on the footer or section) or moved to `position: fixed` with `pointer-events: none` and transformed so they don't affect layout.
  - Quick debug helper: open DevTools Console and add the temporary outline class to the page to reveal oversized elements:

```js
document.body.classList.add('debug-outline')
```

  - The project includes a temporary `.debug-outline` helper in `src/styles/index.css`. After locating the offending element, remove the helper or run:

```js
document.body.classList.remove('debug-outline')
```

- ReferenceError: `ref` is not defined
  - Cause: Components using `CursorGlow` (or attaching `ref={ref}`) must declare `const ref = useRef(null)` before using that variable. Look in components like `FeatureCard.jsx`, `PricingCard.jsx`, `TestimonialCard.jsx`, and any place that forwards a `ref` to CursorGlow.

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview local production build

## Deployment

This project is friendly to Vercel. A sample `vercel.json` route fallback was used during development to handle SPA routing on Vercel. On Vercel, set the framework to `Other` or `Vite` and deploy the `build` output. If your assets are 404ing after deploy, check `vite.config.js` `base` option.

## Contributing

If you want help expanding the cursor interactions, adding the glow effect across more components, or replacing placeholder assets, open an issue or make a PR. When adding CursorGlow to a component:

1. `import CursorGlow from './CursorGlow'`
2. create a ref `const ref = useRef(null)`
3. attach to a wrapper: `<div ref={ref} className="relative overflow-hidden">`
4. add `<CursorGlow parentRef={ref} />` inside the wrapper

## Where to look for layout helpers

- `src/styles/index.css` — global Tailwind utilities and helpers (btn-glow, hover-glow, no-x-overflow)
- `src/components/CursorGlow.jsx` — cursor-follow glow implementation

## Next steps you might want

- Sweep remaining components to attach CursorGlow where appropriate
- Wire newsletter form to a backend or service (Mailchimp, Postmark, etc.)
- Add E2E tests for layout regressions (Cypress / Playwright)

---

If you'd like, I can also:

- add a short `CONTRIBUTING.md` with branch/workflow rules
- open a PR that auto-fixes remaining components that forgot to declare `ref`
- add a small debug CLI command to run a layout checker

Want me to add any of those?
