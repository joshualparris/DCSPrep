# DCSPrep — Foundations (seed)

This workspace contains a minimal Next.js + TypeScript app scaffold for the DCSPrep onboarding app (Foundations module seeded).

Quick features implemented for the MVP:
- Next.js (App Router) app
- TypeScript + TailwindCSS
- Local progress storage (localStorage)
- Module data and seed content for Module 1: `foundations` (sections, flashcards, quiz)
- Flashcards, Quiz engine, Section reader and completion math

Minimal run steps (local, dev):

1. Install dependencies

```powershell
npm install
```

2. Run development server

```powershell
npm run dev
```

Open http://localhost:3000

How content is organised
- `src/types/training.ts` — type definitions.
- `src/data/modules.ts` — all module content (seeded Foundations module).
- `src/lib/progress.ts` — read/write localStorage helpers for progress.
- `src/lib/moduleMath.ts` — deterministic completion calculation (sections 50%, flashcards 20%, quiz 30%).
- `src/components/` — UI components for shell, modules, flashcards and quiz.
- `app/` — pages and layout.

Adding Module 2+
1. Duplicate the object shape inside `src/data/modules.ts` and use a unique `id`.
2. Add sections, flashcards and quiz following the same schemas.

Notes
- The app saves progress in localStorage (no remote services yet). Use Settings → Reset progress to clear state.

Dev server tips & OneDrive note
- If your project lives inside OneDrive, Windows may lock files under `.next` and cause permission errors (EPERM) when the dev server writes traces or caches. To avoid this: move the project outside OneDrive or exclude the project folder (or at least `.next`) from OneDrive syncing.

- Next chooses port 3000 by default. If 3000 is already in use Next will fall back to another port (for example 3001). To explicitly start the dev server on port 3000, you can run:

```powershell
$env:PORT=3000
npm run dev
```

Or use the convenience script added to this project:

```powershell
npm run dev:3000
```
