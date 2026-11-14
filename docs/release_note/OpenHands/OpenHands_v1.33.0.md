---
title: "OpenHands v1.33.0"
project: "OpenHands"
repo: "All-Hands-AI/OpenHands"
tag: "v1.33.0"
published: "2026-10-23"
type: "minor"
lang: "en"
summary: "feat(verify-openhands): launch --mars-web and --lock-to-cloud · feat(digitalocean): keep the web build signed in across restarts"
---

# OpenHands v1.33.0

## 1.33.0 (2026-10-23)

<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### Features
* feat(verify-openhands): launch --mars-web and --lock-to-cloud by @enyst in https://github.com/OpenHands/OpenHands/pull/18848
* feat(digitalocean): keep the web build signed in across restarts by @enyst in https://github.com/OpenHands/OpenHands/pull/18705
### Bug Fixes
* fix(automations): render the shipped current_phase on live runs by @aartem1 in https://github.com/OpenHands/OpenHands/pull/17122
* fix(verify-openhands): bug run puts back the viewport a block changed by @enyst in https://github.com/OpenHands/OpenHands/pull/18850
* fix(digitalocean): default new agents to the smallest VM by @smolpaws in https://github.com/OpenHands/OpenHands/pull/18702
* fix: mask secret values in request and Settings forms by @neubig in https://github.com/OpenHands/OpenHands/pull/18870
### Documentation
* docs(verify-openhands): map maintenance 2026-10-22 by @enyst in https://github.com/OpenHands/OpenHands/pull/18811
* docs(verify-openhands): map maintenance 2026-10-23 by @enyst in https://github.com/OpenHands/OpenHands/pull/18865
* docs: remove beta badge from README by @jpshackelford in https://github.com/OpenHands/OpenHands/pull/18176
### Maintenance
* refactor(files): express tree indentation in CSS by @enyst in https://github.com/OpenHands/OpenHands/pull/18804
* refactor(sidebar): express mobile drawer duration in CSS by @enyst in https://github.com/OpenHands/OpenHands/pull/18805
* style(automations): restyle template filter chips as a draggable scroll rail by @FraterCCCLXIII in https://github.com/OpenHands/OpenHands/pull/18832
* style(automations): tab the setup choice modal between native and MCP server by @FraterCCCLXIII in https://github.com/OpenHands/OpenHands/pull/18833
* chore(verify-openhands): time network responses and order them by completion by @enyst in https://github.com/OpenHands/OpenHands/pull/18849
* chore: remove merged PR artifacts by @all-hands-bot in https://github.com/OpenHands/OpenHands/pull/18853


**Full Changelog**: https://github.com/OpenHands/OpenHands/compare/v1.32.0...v1.33.0

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

> **Source** [All-Hands-AI/OpenHands](https://github.com/All-Hands-AI/OpenHands) · `v1.33.0` · 2026-10-23 · [upstream release](https://github.com/OpenHands/OpenHands/releases/tag/v1.33.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
