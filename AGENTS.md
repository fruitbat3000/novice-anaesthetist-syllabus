# novice-anaesthetist-syllabus

Static, AI-agnostic description. Any assistant reads this first to orient. Session history lives in `CLAUDE.md`; do not put session logs here.

## What this is
<one-paragraph description of the project and its goal>

## Security class
<0 Public | 1 Personal | 2 Confidential | 3 NHS confidential | 4 Patient-identifiable>
Handling follows `security-classification.md`. <e.g. "Dummy/simulated data only until an IG route is agreed.">

## Status
<current state / what exists> — see `STATUS.md` for the live detail.

## Structure
- `code/` — <what's here> → GitHub
- `data/` — heavy or sensitive files, **not in git** (on <Proton/Dropbox> / NHS OneDrive) <or delete if none>
- `docs/` — generated output, **not in git** <or delete if none>

## Conventions
- Folder names kebab-case, UK English, ISO dates. Full rules: `shared-conventions/conventions.md`.
- Text → private GitHub; sensitive heavy files → Proton/Cryptomator; NHS material → NHS OneDrive only.
- Source-of-truth precedence: spec → decisions → status → sources → session notes.

## Source-of-truth files
- Spec: <path or "none">
- Decisions: `DECISIONS.md`
- Status: `STATUS.md`
- Sources: `SOURCES.md`

## External sources / related folders
<breadcrumbs: any folder this project draws on, supersedes, or relocated content from — bidirectional _AGENT-NOTE.md at both ends>
