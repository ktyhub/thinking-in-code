---
title: "OpenHands v1.32.0"
project: "OpenHands"
repo: "All-Hands-AI/OpenHands"
tag: "v1.32.0"
published: "2026-10-23"
type: "minor"
lang: "en"
summary: "feat(home): store pinned automations in agent-server settings · feat(mcp): let the install dialog choose between installable library options"
---

# OpenHands v1.32.0

## 1.32.0 (2026-10-23)

<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### Features
* feat(home): store pinned automations in agent-server settings by @abhayymishraa in https://github.com/OpenHands/OpenHands/pull/18190
* feat(mcp): let the install dialog choose between installable library options by @ak684 in https://github.com/OpenHands/OpenHands/pull/18836
* feat(automations): list every cloneable provider's repositories in the automation picker by @ak684 in https://github.com/OpenHands/OpenHands/pull/18821
* feat(canvas): quiet backend logs by default by @neubig in https://github.com/OpenHands/OpenHands/pull/18830
### Maintenance
* chore: bump @openhands/extensions to 0.34.0 by @ak684 in https://github.com/OpenHands/OpenHands/pull/18842
* chore(deps): enforce seven-day third-party release-age policy by @smolpaws in https://github.com/OpenHands/OpenHands/pull/18800
* chore: bump agent-server to 1.58.1, automation to 1.25.1, and @openhands/extensions to 0.35.0 by @all-hands-bot in https://github.com/OpenHands/OpenHands/pull/18851
* chore: remove merged PR artifacts by @all-hands-bot in https://github.com/OpenHands/OpenHands/pull/18845


**Full Changelog**: https://github.com/OpenHands/OpenHands/compare/v1.31.0...v1.32.0

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

> **Source** [All-Hands-AI/OpenHands](https://github.com/All-Hands-AI/OpenHands) · `v1.32.0` · 2026-10-23 · [upstream release](https://github.com/OpenHands/OpenHands/releases/tag/v1.32.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
