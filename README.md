# Morrow Café — ₹150 OFF Campaign

Frontend implementation for the Prozpekt Founding Frontend Engineer Challenge.

## Stack

Next.js + React + TypeScript + Tailwind CSS

## Commands

```bash
npm run dev
npm run build
npm run lint
npm run start
```

## Phase 8 performance audit

- The hero image remains the only priority image because it is above the fold.
- The below-the-fold café image uses lazy loading, an explicit responsive `sizes` value, and reduced image quality.
- Both images use `next/image`, allowing Next.js to serve responsive, optimized formats.
- Font loading was reduced to the `latin` subset only; the existing `next/font` setup self-hosts the fonts and avoids runtime Google Fonts requests.
- Client-side rendering remains limited to the interactive claim dialog, form, copy interaction, and sticky CTA. The page sections remain server-rendered.
- Removed unused UI dependencies and dead files: Base UI, class variance authority, clsx, shadcn, tailwind-merge, and the unused UI button/utilities.
- Existing CSS transitions and animations remain lightweight and respect `prefers-reduced-motion`.
- `npm run lint` passed.
- `npm run build` passed and generated `/`, `/_not-found`, and `/api/claim`.
- A Lighthouse run was attempted against the production server on September 28, 2026, but the environment has no Chrome/Chromium executable, so Lighthouse could not produce numeric scores. No Lighthouse dependency was added to the project.
