# novice-anaesthetist-syllabus

A website that signposts the Royal College of Anaesthetists (RCoA) curriculum for novice anaesthetists in their first year of training (Stage 1 / CT1). It does not replace the curriculum. It shows trainees what they need to cover, when to cover it and where the official material is, and links back to RCoA sources for the authoritative detail.

## Start here

- **What it is / conventions:** [`AGENTS.md`](AGENTS.md)
- **Current state:** [`STATUS.md`](STATUS.md)
- **Session history + AI instructions:** [`CLAUDE.md`](CLAUDE.md)

## Layout

```
novice-anaesthetist-syllabus/
├── README.md        # this file
├── AGENTS.md        # static, AI-agnostic description
├── CLAUDE.md        # session log + Claude instructions
├── STATUS.md        # current state at a glance
├── DECISIONS.md     # dated decision records
├── TODO.md          # outstanding work / open questions
├── SOURCES.md       # source register (RCoA curriculum documents)
├── .gitignore
├── .editorconfig
├── code/            # the website → GitHub
└── docs/            # reference PDFs, NOT in git
```

## Security class

> **Security class:** `0 Public` (public curriculum material only; no trainee or patient data)
