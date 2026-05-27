# react-vercel-demo

Small React + Vite demo project configured for Vercel deployment.

## Install

Run:

```bash
npm install
```

## Development

```bash
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Vercel Deployment

1. Ensure you have a Vercel account and the Vercel CLI (optional).
2. Push repository to GitHub (or connect your repo in Vercel).
3. In Vercel, import the project and set the framework to "Other" or "Vite".
4. Set the build command to `npm run build` and the output directory to `dist`.
5. Deploy — routing is handled by `vercel.json` which rewrites all routes to `index.html`.

## Folder structure

- [src](src)
  - [components](src/components)
  - [pages](src/pages)
  - [styles](src/styles)

Key files:
- [src/main.jsx](src/main.jsx#L1)
- [src/App.jsx](src/App.jsx#L1)
- [vercel.json](vercel.json)
