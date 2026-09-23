# Variant — personal-context repo

A **per-person** repo holding stable, cross-project facts that make an AI more useful: working style, expertise, answer preferences, recurring constraints. One each for Mark and Nigel. This is context layer 2 (see `shared-conventions/conventions.md`).

## What goes in
- Role, background, domain expertise
- Communication and answer preferences (tone, length, format)
- Decision style; recurring constraints
- Standing instructions that apply across projects

## What must **not** go in
- **Not a personal-data dump.** Classify before adding (see `security-classification.md`).
- No secrets, no identifiers, no health data, no NHS/patient material.
- Nothing that only matters to one project — that belongs in the project.
- Nothing unverified stated as fact — mark inferences (this repo often seeds from ChatGPT extraction; see `migration-plan.md`).

## Security class
Usually **class 1 (Personal)** → **private** GitHub only. If it drifts to class 2 (anything genuinely sensitive), that item belongs in Proton/Cryptomator, not here.

## Shape
```
personal-context/
├── README.md          # what this is, and the "not a dump" rule
├── profile.md         # role, background, expertise
├── preferences.md     # communication, answer format, decision style
├── constraints.md     # recurring constraints, standing instructions
└── conventions.md     # (optional) pointer to shared-conventions
```

## How an AI uses it
Point Claude Code / the assistant at this repo (read-only intent) at the start of work, so its help is tailored without re-explaining yourself each time. Keep it **concise** — long context costs money and dilutes focus. Review and prune it periodically; stale preferences are worse than none.
