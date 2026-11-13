---
title: "OpenHands v1.31.0"
project: "OpenHands"
repo: "All-Hands-AI/OpenHands"
tag: "v1.31.0"
published: "2026-10-22"
type: "minor"
lang: "en"
---

# OpenHands v1.31.0

## 1.31.0 (2026-10-22)

<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### Features
* feat(automations): hide the GitHub token secret field on self-hosted instances when GitHub is connected (OHE-3699) by @hieptl in https://github.com/OpenHands/OpenHands/pull/18829
### Bug Fixes
* fix(mcp): install OAuth-only library entries through the MCP server's own OAuth by @ak684 in https://github.com/OpenHands/OpenHands/pull/18780
* fix: keep automation repositories when editing by @ak684 in https://github.com/OpenHands/OpenHands/pull/18776
* fix(mars): forward typed session key to web bridge on non-baked binds by @lx3133584 in https://github.com/OpenHands/OpenHands/pull/18465
* fix(mars): preserve DigitalOcean sessions through auth recovery by @smolpaws in https://github.com/OpenHands/OpenHands/pull/18604
* fix(mcp): say the sign-in was not completed when an OAuth install pop-up is abandoned by @ak684 in https://github.com/OpenHands/OpenHands/pull/18816
### Documentation
* docs: remove the unwanted specs directory by @smolpaws in https://github.com/OpenHands/OpenHands/pull/18820
### Maintenance
* test: await lazy root gates before availability assertions by @neubig in https://github.com/OpenHands/OpenHands/pull/18797
* chore: remove merged PR artifacts by @all-hands-bot in https://github.com/OpenHands/OpenHands/pull/18822
* chore: remove merged PR artifacts by @all-hands-bot in https://github.com/OpenHands/OpenHands/pull/18828


**Full Changelog**: https://github.com/OpenHands/OpenHands/compare/v1.30.1...v1.31.0

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

> **Source** [All-Hands-AI/OpenHands](https://github.com/All-Hands-AI/OpenHands) · `v1.31.0` · 2026-10-22 · [upstream release](https://github.com/OpenHands/OpenHands/releases/tag/v1.31.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
