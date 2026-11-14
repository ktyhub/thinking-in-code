---
title: "OpenHands v1.37.0"
project: "OpenHands"
repo: "OpenHands/OpenHands"
tag: "v1.37.0"
version: "v1.37.0"
published: "2026-11-06"
type: "minor"
lang: "en"
summary: "feat(automations): explain each automation with a Mermaid diagram"
---

# OpenHands v1.37.0

## 1.37.0 (2026-11-06)

<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### Features
* feat(automations): explain each automation with a Mermaid diagram by @VascoSch92 in https://github.com/OpenHands/OpenHands/pull/19318
### Bug Fixes
* fix(chat): place resumed sessions after UTC conversation history by @ak684 in https://github.com/OpenHands/OpenHands/pull/19400
* fix: keep generated conversation titles visible during startup handoff by @ak684 in https://github.com/OpenHands/OpenHands/pull/19404
* fix: wait for session replay before showing empty chat suggestions by @enyst in https://github.com/OpenHands/OpenHands/pull/19377
* fix: load the home page at the base path without a trailing slash by @ak684 in https://github.com/OpenHands/OpenHands/pull/19406
### Performance
* perf(chat): avoid repeated history scans during live updates by @enyst in https://github.com/OpenHands/OpenHands/pull/19266
### Maintenance
* chore: remove merged PR artifacts by @all-hands-bot in https://github.com/OpenHands/OpenHands/pull/19401
* refactor: name existing control corner radii by @enyst in https://github.com/OpenHands/OpenHands/pull/19263
* chore(lint): reject arbitrary values in four migrated owners by @enyst in https://github.com/OpenHands/OpenHands/pull/19264
* chore(deps): bump lucide-react from 1.25.0 to 1.64.0 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19413
* chore(deps): bump driver.js from 1.3.6 to 1.10.2 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19411
* chore(deps-dev): bump @types/node from 26.6.3 to 26.6.6 in the types group by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19410
* chore: remove merged PR artifacts by @all-hands-bot in https://github.com/OpenHands/OpenHands/pull/19417


**Full Changelog**: https://github.com/OpenHands/OpenHands/compare/v1.36.0...v1.37.0

---
This PR was generated with [Release Please](https://github.com/googleapis/release-please). See [documentation](https://github.com/googleapis/release-please#release-please).
<!-- AGENT_CANVAS_DOCKER_START -->

<!-- macos-install-note -->
### macOS install note

The app isn't signed with an Apple Developer ID yet, so macOS may call a
downloaded build *"damaged"* — it's Gatekeeper quarantine, not a bad file.
After moving the app to Applications, clear the flag once, then open normally:

```sh
xattr -dr com.apple.quarantine "/Applications/OpenHands Agent Canvas.app"
```

Signing + notarization is tracked in OpenHands/OpenHands#16774.

---

> **Source** [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) · `v1.37.0` · 2026-11-06 · [upstream release](https://github.com/OpenHands/OpenHands/releases/tag/v1.37.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
