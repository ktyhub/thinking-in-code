---
title: "OpenHands v1.30.1"
project: "OpenHands"
repo: "All-Hands-AI/OpenHands"
tag: "v1.30.1"
published: "2026-10-22"
type: "patch"
lang: "en"
summary: "refactor(diff): express the Markdown preview cap in CSS · refactor(automations): express the activity track height in CSS · chore: bump agent-server to 1.57.0 · chore: remove merged PR artifacts"
---

# OpenHands v1.30.1

## 1.30.1 (2026-10-22)

<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### Maintenance
* refactor(diff): express the Markdown preview cap in CSS by @enyst in https://github.com/OpenHands/OpenHands/pull/18762
* refactor(automations): express the activity track height in CSS by @enyst in https://github.com/OpenHands/OpenHands/pull/18788
* chore: bump agent-server to 1.57.0 by @all-hands-bot in https://github.com/OpenHands/OpenHands/pull/18774
* chore: remove merged PR artifacts by @all-hands-bot in https://github.com/OpenHands/OpenHands/pull/18806


**Full Changelog**: https://github.com/OpenHands/OpenHands/compare/v1.30.0...v1.30.1

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

> **Source** [All-Hands-AI/OpenHands](https://github.com/All-Hands-AI/OpenHands) · `v1.30.1` · 2026-10-22 · [upstream release](https://github.com/OpenHands/OpenHands/releases/tag/v1.30.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
