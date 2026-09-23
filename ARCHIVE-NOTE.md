# Archive note — novice-anaesthetist-syllabus

Written when the project is **closed**. Freezes what it was and how to bring it back. Once archived, the working tree should be clean and pushed, and a final tag/release cut.

## Closed on
2026-09-23

## What it was
<one paragraph — the objective and the outcome>

## Final state / outcome
<what was delivered; what was not; why it closed>

## Security class
<0–4> — handling rules still apply to the archived data.

## Where each tier now lives
- Code / text: <repo URL> @ tag `<v-final>` <or GitHub release link>
- Data: <final resting location — Proton/Dropbox/OneDrive path>
- Docs/output: <location>

## Freeze markers
- Git tag / release: `<v-final>`
- Data manifest / checksums: <path to a `shasum -a 256` manifest, if made>

## How to restore into a test folder
1. `git clone <repo URL>` into a scratch directory.
2. Retrieve the data from <location>; "Make Available Offline" if needed.
3. Re-create any `data/`/`docs/` symlinks.
4. Verify: <the one command or check that proves completeness>.

## Retention / disposal
<how long to keep; any deletion obligation; who owns that decision>
