# Site source

A static site with no build step and no dependencies.

## View it

Open `index.html` in a browser. It works straight from the file system.

To serve it instead (for example, to view it on another device on your network):

```
cd code
python3 -m http.server 8000
```

Then go to http://localhost:8000.

## Files

- `index.html` — the page shell and the static text for each section
- `data.js` — all the content data: e-LfH session links, IAC clusters, syllabus topics, and the "first anaesthetic" stages
- `app.js` — routing (`#start`, `#journey`, `#syllabus[/topic-id]`, `#iac`, `#resources`, `#glossary`, `#about`, `#checklist`), glossary pop-ups, filters, and progress ticks
- `styles.css` — light theme by default, with an optional dark theme (header toggle) and print styles

## Features
- **Glossary** (`glossary` in `data.js`): the first use of each term in topic notes, journey steps and the Start/IAC pages becomes tappable. `match` is a regex source. It is case-sensitive unless it contains lowercase letters.
- **Printable checklist** (`#checklist`): prints the viewer's own ticks. Use "Save as PDF" in the print dialog.
- **Feedback**: each topic has a "Suggest a change" link that opens a pre-filled GitHub issue (label `feedback`).
- **Further resources** (`further` in `data.js`): shown on the Resources page and also linked from topics via `links`.

## Editing content

- **Add or move a topic:** edit `domains` in `data.js`. Each topic has `ela` (session codes), `iac` (cluster keys), and optional `first`, `note` and `links`.
- **Add an e-LfH session:** add it to `ela` in `data.js` using its public `Component/Details` ID. See the method in `SOURCES.md` (S3). Update the `checked` date whenever you re-check links.
- Progress is stored in each viewer's browser under `localStorage` key `nas-progress-v1`. If you rename a topic `id` or session code, anyone's existing tick for it is lost.
