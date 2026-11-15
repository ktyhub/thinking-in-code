---
title: "OpenHands v1.29.0"
project: "OpenHands"
repo: "OpenHands/OpenHands"
tag: "v1.29.0"
version: "v1.29.0"
published: "2026-10-20"
type: "minor"
lang: "en"
summary: "feat(backends): show full organization names in the backend selector · feat(launchers): read public skills from the bundled extensions package · feat(agent-profiles): choose skills per profile from the server catalog"
---

# OpenHands v1.29.0

## 1.29.0 (2026-10-20)

<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### Features
* feat(backends): show full organization names in the backend selector by @ak684 in https://github.com/OpenHands/OpenHands/pull/18667
* feat(launchers): read public skills from the bundled extensions package by @simonrosenberg in https://github.com/OpenHands/OpenHands/pull/18683
* feat(agent-profiles): choose skills per profile from the server catalog by @simonrosenberg in https://github.com/OpenHands/OpenHands/pull/18686
* feat(agent-profiles): edit condenser and verification per profile by @simonrosenberg in https://github.com/OpenHands/OpenHands/pull/18679
* feat(agent-profiles): choose a Model Router per profile by @simonrosenberg in https://github.com/OpenHands/OpenHands/pull/18685
* feat(home): dismiss recommended automations rail from Home and Application settings by @lx3133584 in https://github.com/OpenHands/OpenHands/pull/18538
* feat(agent-profiles): launch `default` by id; profiles own their settings by @simonrosenberg in https://github.com/OpenHands/OpenHands/pull/18720
### Bug Fixes
* fix(conversations): save a connected repository on the cloud conversation by @henriquehirako in https://github.com/OpenHands/OpenHands/pull/18158
* fix(chat): show git chip icons in light themes by @enyst in https://github.com/OpenHands/OpenHands/pull/18660
* fix(chat): catch up with the model within a second instead of ten by @VascoSch92 in https://github.com/OpenHands/OpenHands/pull/18651
* fix(onboarding): skip the first-run modal on a canvas locked to a Cloud host (OHE-3670) by @hieptl in https://github.com/OpenHands/OpenHands/pull/18724
* fix(onboarding): turn the setup guide off from its close button (OHE-3658) by @hieptl in https://github.com/OpenHands/OpenHands/pull/18703
* fix(settings): filter and sort the LLM provider picker (OHE-3653) by @hieptl in https://github.com/OpenHands/OpenHands/pull/18710
* fix(automations): stop offering an agent profile to prompt and plugin presets by @simonrosenberg in https://github.com/OpenHands/OpenHands/pull/18708
* fix(conversation): keep the first Cloud message when the history page lags the runtime by @enyst in https://github.com/OpenHands/OpenHands/pull/18719
* fix(library): ship a scoped stylesheet with the npm library by @enyst in https://github.com/OpenHands/OpenHands/pull/18663
* fix(launcher): pin uvx to Python 3.12-3.14 until deps ship 3.15 wheels by @VascoSch92 in https://github.com/OpenHands/OpenHands/pull/18731
### Maintenance
* ci(docker): verify agent server version in image by @Xalzeroph in https://github.com/OpenHands/OpenHands/pull/17544
* ci(desktop-macos): surface the unquarantine workaround on the release by @VascoSch92 in https://github.com/OpenHands/OpenHands/pull/18723
* chore: bump @openhands/extensions to 0.32.0 by @VascoSch92 in https://github.com/OpenHands/OpenHands/pull/18730
* refactor(markdown): give alerts readable theme roles by @enyst in https://github.com/OpenHands/OpenHands/pull/18696
* refactor(theme): use semantic colors for failed health dots by @enyst in https://github.com/OpenHands/OpenHands/pull/18694
* chore: remove merged PR artifacts by @all-hands-bot in https://github.com/OpenHands/OpenHands/pull/18709
* chore: remove merged PR artifacts by @all-hands-bot in https://github.com/OpenHands/OpenHands/pull/18736

## New Contributors
* @Xalzeroph made their first contribution in https://github.com/OpenHands/OpenHands/pull/17544

**Full Changelog**: https://github.com/OpenHands/OpenHands/compare/v1.28.1...v1.29.0

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

> **Source** [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) · `v1.29.0` · 2026-10-20 · [upstream release](https://github.com/OpenHands/OpenHands/releases/tag/v1.29.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
