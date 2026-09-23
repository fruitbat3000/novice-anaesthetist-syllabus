# Decision records — novice-anaesthetist-syllabus

Accepted decisions, newest first. One entry per decision. A decision here **overrides** session notes and status (see source-of-truth precedence). Do not record speculation; open questions live in `TODO.md`.

---

## 2026-09-23 — Site structure and technology (first version)

**Decision:**
- **Technology:** a static site in `code/` (plain HTML, CSS and JS, no build step and no dependencies) that opens directly from `index.html`. All content lives in `code/data.js`.
- **Structure:** six views: *Start here*, *Your first anaesthetic* (Dr Brooks's worked GA, in stages), *Syllabus* (his domain → group → topic structure, with each topic linked to e-LA sessions and tagged by IAC Key Capability cluster), *The IAC*, *Resources*, *About*.
- **Interactivity:** "I have covered this" ticks per topic and per e-LA session, progress bars, search, IAC cluster filters, a "start here only" filter, deep links to topics, and export/import of progress. Progress is stored in the viewer's browser only (`localStorage`).
- **Mapping:** topics link to the **current live** e-LA sessions. Retired Module 1 basic-science sessions are replaced by their Module 07a–07e equivalents. The 2010 WPBA list in Dr Brooks's guide is dropped in favour of the 2021 IAC clusters and evidence types.

**Context:** Mark asked Claude to "run with" building an interactive site with learning resources, emphasising e-LfH. The structure is Claude's choice for Mark to review.

**Options considered:** a static site generator (e.g. Eleventy) vs plain files; organising by week vs by IAC cluster vs by Dr Brooks's structure.

**Rationale:** Plain files keep it local-only with nothing to install, easy to hand to the school later, and easy to host anywhere. Dr Brooks's structure is the one he designed for novices and it scales to the exams. IAC tags and the worked-GA view give the other two ways in without duplicating content.

**Consequences:** Hosting later is a file copy. Links need periodic re-checking (method in `SOURCES.md`). If the school wants shared or tracked progress, that needs a different approach.

**Status:** accepted (pending Mark's review of the content)

---

## 2026-09-23 — Dr Alistair Brooks's guide may be reused

**Decision:** The site may credit, link to and adapt Dr Alistair Brooks's *An Introduction to Anaesthesia* (`SOURCES.md` S2).

**Context:** Dr Brooks gave permission in person to Mark on 2026-09-23. It was verbal, with Dr Brooks present during the session.

**Options considered:** Link only to RCoA/e-LfH without using the guide; use the guide with permission.

**Rationale:** The guide already has a novice syllabus and a teaching approach built for exactly this audience.

**Consequences:** The guide can form the backbone of the site's structure. Credit Dr Brooks on the site. Update anything that's outdated (it was written against the 2010 curriculum) rather than presenting it as current.

**Status:** accepted

---

## 2026-09-23 — Scope of the site

**Decision:**
- **Audience:** novice trainees in the Yorkshire regional school of anaesthesia.
- **Timespan:** the novice period up to the Initial Assessment of Competence (IAC).
- **Depth:** mainly links, especially to e-Learning for Healthcare (e-LfH) modules. Content is signposting, not original teaching material.
- **Access:** local only for now (run and viewed on Mark's machine). Public or school-wide hosting is a later decision.

**Context:** Answers from Mark to the scoping questions at project start.

**Options considered:** national vs regional audience; up to IAC vs all of CT1; links only vs adding local teaching; public vs restricted.

**Rationale:** Keeping the first version narrow and local makes it quick to build and easy to check before anyone else sees it.

**Consequences:** The site is organised around what a novice needs before the IAC. Each topic links to the relevant RCoA curriculum item and e-LfH module(s). No hosting or domain work is needed yet.

**Status:** accepted
