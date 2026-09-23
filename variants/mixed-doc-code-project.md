# Variant — mixed document-and-code project

For projects that are **both** a body of documents/data **and** some code to process or present it — the common case in Nigel's and Mark's clinical/analysis work (e.g. a pathway document generated from data, a dashboard, a report pipeline).

## The shape
- `code/` — the scripts/tooling that transform or present (→ git)
- `data/` — the inputs (**not git**; classify — often class 2+ or NHS class 3)
- `docs/` — the generated documents/PDFs (**not git**; regenerated from source)
- Plus the full document set: `AGENTS.md`, `STATUS.md`, `DECISIONS.md`, `SOURCES.md`.

## The key discipline: separate source from output
- **Source of truth is the code + the (classified) data**, not the generated PDF/HTML.
- Generated output (`docs/`) is disposable — it can always be rebuilt, so it stays out of git.
- Keep a clear line: text and logic → GitHub; heavy/sensitive inputs and generated output → cloud/OneDrive by class.

## Classification is the trap here
A mixed project often pulls data of a *higher* class than its code. The **project's security class is the highest class of anything in it.** If it touches NHS data, the *data* lives on NHS OneDrive and no personal AI processes it — even though the *code* sits happily in a private GitHub repo. Do not let the code's low class relax the data's handling.

## Minimal shape
```
mixed-project/
├── README.md  AGENTS.md  CLAUDE.md  STATUS.md  DECISIONS.md  SOURCES.md
├── .gitignore
├── code/               # transform/present scripts → git
├── data/               # inputs (not git; classified)   → cloud / NHS OneDrive
└── docs/               # generated documents (not git)   → cloud
```
