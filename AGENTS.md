# novice-anaesthetist-syllabus

Static, AI-agnostic description. Any assistant reads this first to orient. Session history lives in `CLAUDE.md`; do not put session logs here.

## What this is
A website that signposts the RCoA curriculum for year-1 anaesthetic trainees (the novice period through Stage 1 / CT1). It organises and explains what trainees need to cover and links to the official RCoA material. The RCoA documents stay the authoritative source, and the site should never contradict or paraphrase them in a misleading way.

## Security class
0 Public. Handling follows `security-classification.md`. The site uses published curriculum material only, with no trainee names, assessment results or patient data.

## Status
First version built. See `STATUS.md` for the live detail.

## Structure
- `code/`: the website (static HTML/CSS/JS, no build step). Open `code/index.html`. Content lives in `code/data.js`; see `code/README.md`.
- `docs/`: reference documents, **not in git** (currently *An Introduction to Anaesthesia* PDF)

## Conventions
- Folder names kebab-case, UK English, ISO dates. Full rules: `shared-conventions/conventions.md`.
- Every curriculum claim on the site traces to an entry in `SOURCES.md`. Link to the RCoA and don't copy large sections of their text (copyright).
- Source-of-truth precedence: spec → decisions → status → sources → session notes.

## Source-of-truth files
- Spec: none yet
- Decisions: `DECISIONS.md`
- Status: `STATUS.md`
- Sources: `SOURCES.md`

## External sources / related folders
- None yet.
