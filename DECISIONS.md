# Decision records — novice-anaesthetist-syllabus

Accepted decisions, newest first. One entry per decision. A decision here **overrides** session notes and status (see source-of-truth precedence). Do not record speculation — open questions live in `TODO.md`.

Template for each entry:

---

## 2026-09-23 — <decision title>

**Decision:** <what was decided, stated plainly>

**Context:** <what prompted it; what problem it solves>

**Options considered:** <the alternatives, briefly>

**Rationale:** <why this option>

**Consequences:** <what follows; what this commits us to>

**Status:** <accepted | superseded by <date> | reversed>

---

## Example

## 2026-07-20 — Sensitive files go to Proton Drive, not Dropbox

**Decision:** Class-2 personal files for this project are stored on Proton Drive (E2EE, CH), not Dropbox.

**Context:** Dropbox is US-hosted and not zero-knowledge; the project holds confidential personal material.

**Options considered:** Dropbox as-is; Cryptomator vault over Dropbox; Proton Drive.

**Rationale:** Proton gives native zero-knowledge with the least ongoing friction for a small volume.

**Consequences:** The `data/` symlink points at Proton; must be "Made Available Offline" for scripts.

**Status:** accepted
