# Variant — research project

How to shape the standard template for **research** (a review, an analysis, a paper, an evidence synthesis).

## Add these folders
- `research/` — working notes, drafts, analysis
- `references/` — source PDFs and reference material (**heavy → cloud, not git**)
- `data/` — datasets (**not git**; classify carefully — often class 2+)
- `docs/` — generated output (the write-up PDF, named after the folder)

## Emphasise these files
- **`SOURCES.md`** is central — a research project lives or dies on traceable provenance. Verify every identifier; mark unverified claims.
- **`DECISIONS.md`** — methodological choices (inclusion criteria, analysis approach) are decisions; record them.

## Conventions that matter here
- **Never reconstruct DOIs, PMIDs, URLs or author lists from memory** — verify each.
- Keep raw data read-only; do analysis on copies.
- The write-up is generated *from* source (Markdown/LaTeX → PDF); the PDF is a deliverable, not the source of truth.
- If the data is class 2+ (personal/health), it goes to Proton/Cryptomator or NHS OneDrive per its class — not GitHub.

## Minimal shape
```
research-project/
├── README.md  AGENTS.md  CLAUDE.md  STATUS.md
├── SOURCES.md          # the register — verified
├── DECISIONS.md        # methodology decisions
├── research/           # notes, analysis, drafts (text → git)
├── references/         # source PDFs (heavy → cloud)
├── data/               # datasets (not git; classified)
└── docs/               # generated write-up
```
