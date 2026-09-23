# novice-anaesthetist-syllabus

> Replace this file's contents when you create a real project. This is the **template**.

One-paragraph description of what this project is and why it exists.

## Start here

- **What it is / conventions:** [`AGENTS.md`](AGENTS.md)
- **Current state:** [`STATUS.md`](STATUS.md)
- **Session history + AI instructions:** [`CLAUDE.md`](CLAUDE.md)

## Using this template

1. Copy the template into place (or use the `new-project` script), then rename `novice-anaesthetist-syllabus`.
2. Delete the files you do not need — the **core** is `README.md`, `AGENTS.md`, `CLAUDE.md`, `.gitignore`, `code/`. Everything else (`STATUS.md`, `DECISIONS.md`, `TODO.md`, `SOURCES.md`, `data/`, `docs/`) is optional; add only what the project needs.
3. Fill in the placeholders (marked `<...>`).
4. `git init`, first commit, create a **private** GitHub repo, push.
5. If the project has heavy or sensitive files, set up `data/`/`docs/` as symlinks to the cloud (Proton/Dropbox) or NHS OneDrive, and confirm `.gitignore` excludes them.

See [`variants/`](variants/) for how to shape this for a research, coding, mixed, or personal-context project.

## Layout (core + optional)

```
novice-anaesthetist-syllabus/
├── README.md        # this file                                    [core]
├── AGENTS.md        # static, AI-agnostic description               [core]
├── CLAUDE.md        # session log + Claude instructions             [core]
├── .gitignore       # excludes data/, docs/, .env, secrets          [core]
├── .editorconfig    # consistent formatting                  [recommended]
├── code/            # the work → GitHub                             [core]
├── STATUS.md        # current state at a glance               [recommended]
├── DECISIONS.md     # dated decision records                  [recommended]
├── TODO.md          # outstanding work                        [recommended]
├── SOURCES.md       # source register                             [optional]
├── HANDOVER.md      # when passing the project on                 [optional]
├── ARCHIVE-NOTE.md  # when closing/archiving                      [optional]
├── data/            # heavy/sensitive → NOT in git                [optional]
└── docs/            # generated output → NOT in git               [optional]
```

## Security class

State the project's highest security class (0–4, see `security-classification.md`) so anyone opening it knows the handling rules at a glance:

> **Security class:** `<0 Public | 1 Personal | 2 Confidential | 3 NHS confidential | 4 Patient-identifiable>`
