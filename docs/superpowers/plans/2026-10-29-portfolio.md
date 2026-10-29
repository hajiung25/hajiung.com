# Portfolio Implementation Plan

> Execute inline using executing-plans; user approved implementation and local preview.

**Goal:** Readable single-page Korean portfolio at localhost.
**Architecture:** TanStack Start SSR, typed local career data, reusable document sections, print styles.
**Tech Stack:** React, TypeScript, Tailwind CSS, Vite, pnpm.

## Constraints
Keep existing resume images outside website/public. No deployment, invented metrics, private repository links or personal contact data. Follow approved design.

## Tasks
- [x] Create website/package.json, tsconfig.json, vite.config.ts and src/router.tsx; install dependencies. Use tanstackStart() before react() in Vite plugins.
- [x] Create src/content/career.ts exporting typed careers and projects; use reviewed latest résumé and older career PDF, omit outdated forecast numbers.
- [x] Create src/routes/__root.tsx and index.tsx plus src/components/Portfolio.tsx; render all content server-side, semantic sections, anchor navigation and print action using window.print().
- [x] Create src/styles.css and public/favicon.svg, robots.txt, sitemap.xml. Responsive document layout with narrow date column and broad reading column; @media print removes navigation and controls.
- [x] Run pnpm build and pnpm typecheck; launch pnpm dev --host 127.0.0.1. Check HTTP response contains career content and unknown path returns 404.
- [x] Inspect browser desktop and mobile views; check links and overflow. Save screenshot and open local URL for user. Record commands in README.
