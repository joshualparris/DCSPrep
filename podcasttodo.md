# Podcast Integration TODO

**Decision:** Add.  
**Status:** ✅ Core one-click podcast bank added 13 September 2026.
**Topic bank:** IT support foundations, networking, Microsoft 365, printers, endpoint management, cybersecurity and helpdesk practice.

## TODO
- [x] Curate about 25 Spotify episodes aligned broadly to IT-support learning (shared JoshHub `it` bank).
- [x] Add a collapsed bottom dock: **🎧 Listen to a different IT support podcast**.
- [x] One tap selects/loads another episode; persist recent choices and avoid immediate repeats.
- [x] Use Spotify embed/deep links without assuming autoplay.
- [ ] Recommend episodes by the current module where practical — optional future context-matching enhancement.
- [x] Keep flashcards/quizzes/retrieval practice primary; audio is supplementary.
- [x] Keep episode data separate from training content and easy to refresh through JoshHub.
- [x] Mobile/keyboard/screen-reader behaviour and persistence logic are supplied by the shared dock; repo-specific automated dock tests can be added later.

## Implementation
The root Next.js layout loads `podcast-dock-universal.js` with `data-bank="it"` and collapses while the user is typing.
