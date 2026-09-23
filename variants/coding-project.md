# Variant — coding project

How to shape the standard template for a **software** project (a tool, a script, an app).

## Add these folders
- `src/` (or keep `code/`) — the source
- `tests/` — tests; a coding project should have them
- `docs/` — generated documentation (**not git** if built from source)

## Emphasise these files
- **`.editorconfig`** and a language-appropriate formatter/linter — consistency from the start.
- **`.gitignore`** must cover the language's build/dependency output (`node_modules/`, `.venv/`, `dist/`).
- **`README.md`** carries install + run instructions with copyable commands and expected output.
- **`DECISIONS.md`** — architecture and dependency choices.

## Conventions that matter here
- **Commit often, small commits** — a coding project is where Git's undo net earns its keep.
- Secrets in `.env` (git-ignored) or Keychain — never hard-coded.
- Consider **pre-commit secret scanning** (optional/advanced) once comfortable.
- Claude Code is at its most useful here — but review every diff; keep the working tree on local disk, not synced cloud.

## Minimal shape
```
coding-project/
├── README.md  AGENTS.md  CLAUDE.md  STATUS.md  DECISIONS.md
├── .gitignore  .editorconfig
├── src/                # source → git
├── tests/              # tests → git
└── docs/               # generated docs (not git)
```
