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
- `app.js` — routing (`#start`, `#journey`, `#syllabus[/topic-id]`, `#iac`, `#resources`, `#about`), filters, and progress ticks
- `styles.css` — light and dark themes, which follow the system setting

## Editing content

- **Add or move a topic:** edit `domains` in `data.js`. Each topic has `ela` (session codes), `iac` (cluster keys), and optional `first`, `note` and `links`.
- **Add an e-LfH session:** add it to `ela` in `data.js` using its public `Component/Details` ID. See the method in `SOURCES.md` (S3). Update the `checked` date whenever you re-check links.
- Progress is stored in each viewer's browser under `localStorage` key `nas-progress-v1`. If you rename a topic `id` or session code, anyone's existing tick for it is lost.
