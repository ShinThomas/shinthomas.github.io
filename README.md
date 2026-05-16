# Thomas Shin Portfolio

A minimal static portfolio built with React, Vite, TypeScript, and Tailwind CSS for deployment to GitHub Pages at `https://shinthomas.github.io`.

## Quick Start

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

This repository is intended to be the user Pages repository named `shinthomas.github.io`, so Vite uses `base: '/'`.

1. Create or open the GitHub repository named `shinthomas.github.io`.
2. Install dependencies:

```bash
npm install
```

3. Deploy the built `dist` folder:

```bash
npm run deploy
```

4. In GitHub, go to `Settings > Pages` and confirm the site is published from the `gh-pages` branch.

If you prefer GitHub Actions, you can also build with `npm run build` and publish the `dist` folder through the official Pages workflow.

## Customize

Most site content lives in `src/data/portfolio.ts`. Edit that file to update roles, projects, course reviews, skills, links, and contact details without touching the component structure.

The site uses hash routes so it stays fully static on GitHub Pages:

- `#/`
- `#/projects`
- `#/course-reviews`
- `#/connect`
