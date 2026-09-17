# DCSPrep — Beautiful Code Standard Audit

**Audit date:** 17 September 2026  
**Repository:** `joshualparris/DCSPrep`  
**Audited branch:** `main`  
**Repository tier:** Critical / relied-upon  
**Standard:** The Beautiful Code Standard

## Overall finding

DCSPrep has a small, understandable Next.js structure and clear separation between pages and UI components, but it does **not yet meet the Beautiful Code Standard** for a relied-upon user-facing app.

The biggest gap is not style. It is **evidence that the app actually works**. The repository has build, lint and Vitest scripts, but the default branch currently exposes no visible test suite or CI workflow. That means there is no independent gate proving the app builds, tests pass, or its real user flows remain usable after a change.

The recent podcast failure is exactly the kind of problem the standard is intended to catch: an app can deploy successfully while a real control still freezes or fails when pressed.

## What is already good

- The project layout is relatively small and easy to navigate.
- Next.js routes live under `app/`; reusable UI lives under `src/components/`.
- `package.json` provides explicit `build`, `lint` and `test` commands.
- TypeScript is used.
- The podcast component has clear state (`open`, `currentIndex`) and straightforward event handlers rather than hidden global behaviour.
- Spotify links use `rel="noopener noreferrer"` when opening a new tab.
- Dependencies are modest for a React/Next application rather than an unnecessarily large framework stack.

## Findings against the standard

| Area | Status | Finding |
|---|---|---|
| Reality / working behaviour | **Needs work** | No automated real-user smoke test proves the main learning flow or podcast flow works. |
| Obvious code | **Good** | The current page/component structure is straightforward. |
| Coherent responsibilities | **Good** | Pages, module components, quiz components and podcast UI are separated sensibly. |
| Hidden behaviour | **Mostly good** | Podcast choice/open state is explicit. External Spotify embed behaviour remains an important external dependency. |
| One source of truth | **Review** | Podcast episode data is embedded directly in `PodcastPlayer.tsx`; acceptable while there is only one consumer, but it should not be duplicated elsewhere. |
| Architecture proportionality | **Good** | No unnecessary service layer or large abstraction framework is visible. |
| Change locality | **Good / unproven** | Components are reasonably local, but there is no regression suite proving local changes stay local. |
| Dead code / repository neatness | **Review** | Keep generated artefacts and stale learning documents out of the runtime tree unless they serve a current purpose. |
| Error design | **Needs work** | External media failure has no visible fallback or automated failure-path check. |
| Invalid states | **Good baseline** | TypeScript and explicit `Episode` shape help. |
| Behavioural tests | **Major gap** | `vitest` is configured as a script, but no visible test files protect the app's important behaviour on `main`. |
| Test trustworthiness | **Unknown** | With no visible CI test execution, determinism and flakiness cannot be established. |
| Security / privacy | **Review urgently** | The public repository contains a school-related dossier in both DOCX and PDF form. Confirm that every document and piece of school information in the public repo is intentionally public. |
| Dependency security | **Gap** | No visible dependency-audit/security gate on the default branch. |
| Release gates | **Major gap** | No visible GitHub Actions workflow currently blocks a broken build/test/lint result. |
| Ratchets / signals | **Not established** | Coverage, complexity and other quality metrics should be added only after behavioural gates exist. |

## Priority 0 — make reality provable

1. Add a CI workflow that runs a clean install, TypeScript/build, lint and tests on every pull request and push to `main`.
2. Add at least one browser-level smoke test for the actual critical flow: open the app, open a module/learning activity, interact with it, and confirm a meaningful result renders.
3. Add a podcast regression test covering the button that previously froze the app: open Podcasts → render a valid episode/player state → switch episode → close/reopen without locking the UI.
4. Treat a deployment success or HTTP 200 as insufficient evidence unless the browser smoke test passes.
5. Review the public `docs/` contents, especially the school dossier PDF/DOCX, and remove or privatise anything not deliberately intended for public distribution.

## Priority 1 — add sensible gates

Use hard gates for:

- clean dependency install;
- production build;
- TypeScript/type correctness;
- lint errors;
- behavioural tests;
- critical smoke test;
- dependency/security audit;
- secret scanning.

Do **not** make CRAP, CC, raw coverage or duplication universal pass/fail definitions of good code. Introduce them later as ratchets/signals when they provide useful evidence.

## Priority 2 — improve maintainability without overengineering

- Keep podcast episode data in one canonical place if other pages begin consuming it.
- Add tests when fixing each real bug so the same regression cannot quietly return.
- Prefer small component-level improvements over a rewrite.
- Remove stale documents, abandoned experiments and unused dependencies rather than building abstractions around them.
- Add a short human review checklist for changes that automation cannot judge: truthful UI, privacy, clarity, unnecessary abstraction and source-of-truth drift.

## Definition of done for DCSPrep

A change to DCSPrep should not be called complete until:

1. the requested behaviour works in the browser;
2. the main learning flow still works;
3. the podcast/player flow still works when relevant;
4. build, lint/type and tests pass from a clean checkout;
5. dependency/security checks pass;
6. no private school/user information has been accidentally exposed;
7. CI independently confirms the automated evidence.

## Bottom line

DCSPrep is structurally simple enough to become a very clean repository without adding much machinery. The next improvement should be **proof of behaviour**, not more metrics.

> **Correct first. Clear second. Simple always. Measure what helps. Prove what matters.**
