# novice-anaesthetist-syllabus — session log

Claude-specific working instructions **and** the running session history. Durable, AI-agnostic facts belong in `AGENTS.md`. Link to them here rather than duplicating.

## Working instructions for Claude
- Read `AGENTS.md` and `STATUS.md` at the start of each session.
- Security class is 0 (public). Never add trainee-identifiable or patient data.
- Verify every RCoA URL and curriculum detail against the live source before using it. Never reconstruct them from memory, and log them in `SOURCES.md`.
- At session end: promote anything worth keeping into `STATUS.md` / `DECISIONS.md` / `TODO.md`, update this log, then commit and push.

## Session log

### 2026-09-23 — Project scaffolded (Claude Code, Mark's Mac)
- Created from shared-project-template via `new-project.sh`. Class 0. Removed ARCHIVE-NOTE, HANDOVER, variants.
- Scope confirmed by Mark: a website signposting the RCoA curriculum to year-1 trainees; nothing sensitive.
- Mark supplied *An Introduction to Anaesthesia* (PDF, 30 pp, 2018), now in `docs/` (gitignored, so local only). A skim shows it's a self-directed novice guide whose Section 5 is a full novice syllabus with an "I have" checklist. It references the **2010** curriculum (Annex B), so it needs re-mapping to 2021. Author not stated. See `SOURCES.md` S2.
- Scope answered by Mark and recorded in `DECISIONS.md`: regional school; novice period up to the IAC; links, especially e-LfH; local only for now.
- The PDF's author is Dr Alistair Brooks, a colleague of Mark's. He was present and gave permission in person to reuse/adapt it with credit.
- The school is Yorkshire.
- Session ended here, ready to restart in this subfolder.
- **Next step (restart here):** work through `TODO.md` "Now": verify the RCoA IAC material and e-LfH content, read the PDF in full and map it, then propose a site structure. Ask Mark about the Yorkshire school's local IAC process and teaching programme.

### 2026-09-23 (later) — Sources verified, first site built (Claude Code, Mark's Mac)
- `git pull` wasn't possible because the repo has no remote. Commits are local only.
- Mark said to "run with" building an interactive site with learning resources, with e-LfH being particularly useful.
- The RCoA site 403s curl/WebFetch, so it was read in Chrome. WebFetch did save the binary PDFs, which were then extracted with `pdftotext`. The IAC Workbook v1.2 and the e-LA Module 1 workbook are in the scratchpad only.
- e-LfH: the catalogue is public. The browser endpoints `GetCatalogueChildComponents` and `GetDetailsPartialForCatalogueComponent` give public `Component/Details` IDs. **Don't run long synchronous loops on the catalogue page**, because it froze the tab. Use `fetch` from a light page such as `/cookiepolicy`. Found that Module 1 has been restructured (see `SOURCES.md` S3).
- Built `code/` as a static site. All 100 e-LfH session links were checked with curl (200, not retired, code matched).
- The Y&H deanery novice page has been retired. YAIRN was found as the school's teaching network.
- Next: Mark reviews the site, then add Yorkshire local detail (`TODO.md`).
