---
title: "OpenHands v1.39.0"
project: "OpenHands"
repo: "OpenHands/OpenHands"
tag: "v1.39.0"
version: "v1.39.0"
published: "2026-11-11"
type: "minor"
lang: "en"
---

# OpenHands v1.39.0

## 1.39.0 (2026-11-11)

<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### Features
* feat(automations): filter the dashboard by owner with a Service accounts option by @hieptl in https://github.com/OpenHands/OpenHands/pull/19472
* feat(chat): move the message hover timestamp closer to its message by @ak684 in https://github.com/OpenHands/OpenHands/pull/19623
* feat(conversation): keep Stop hook feedback out of the chat by @ak684 in https://github.com/OpenHands/OpenHands/pull/19619
* feat(themes): print Paper as aged newsprint, with readable warnings by @enyst in https://github.com/OpenHands/OpenHands/pull/19595
* feat(verify-openhands): Server: lines link Canvas families to Agent Server features by @enyst in https://github.com/OpenHands/OpenHands/pull/18568
### Bug Fixes
* fix(chat): interpret resume visibility timestamps as UTC by @enyst in https://github.com/OpenHands/OpenHands/pull/19603
* fix(websocket): memoize filteredSubConversations in WebSocketProviderWrapper (#19279) by @yunusarda-sudo in https://github.com/OpenHands/OpenHands/pull/19290
* fix(chat): deliver over HTTP until the session socket is served by @enyst in https://github.com/OpenHands/OpenHands/pull/19574
* fix(automations): make the populated Event Key dropdown open by @neubig in https://github.com/OpenHands/OpenHands/pull/19630
* fix(automations): respect backend profile selection availability by @neubig in https://github.com/OpenHands/OpenHands/pull/19633
* fix(setup-guide): start the tour in an open dialog and end it when that dialog closes by @hieptl in https://github.com/OpenHands/OpenHands/pull/19640
* fix(setup-guide): drop an unanswered close question when the guide hides by @hieptl in https://github.com/OpenHands/OpenHands/pull/19642
* fix(events): catch missing event file error to prevent UI crash by @mohitdebian in https://github.com/OpenHands/OpenHands/pull/16806
### Documentation
* docs(verify-openhands): map maintenance 2026-11-09 by @enyst in https://github.com/OpenHands/OpenHands/pull/19559
### Maintenance
* chore(deps): bump mdast-util-from-markdown from 2.0.3 to 2.1.0 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19590
* chore(deps-dev): bump electron-builder from 26.15.3 to 26.18.0 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19591
* chore(deps): bump react-icons from 5.6.0 to 5.7.0 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19589
* test(automations): complete dashboard cloud config fixture by @smolpaws in https://github.com/OpenHands/OpenHands/pull/19607
* chore(deps-dev): bump @eslint/js from 9.39.4 to 10.0.1 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19588
* chore(deps-dev): bump the testing group across 1 directory with 2 updates by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19586
* chore(deps): bump @heroui/react from 3.2.4 to 3.2.7 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19587
* chore(deps): bump the tanstack group across 1 directory with 2 updates by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19585
* chore(deps): bump react-hot-toast from 2.6.0 to 2.6.1 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19638
* chore(deps-dev): bump electron from 45.2.1 to 45.2.2 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19639
* chore(deps): bump ws from 8.22.0 to 8.22.1 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19637
* chore: bump agent-server to 1.62.0 by @openhands-release-bot[bot] in https://github.com/OpenHands/OpenHands/pull/19658
* chore: bump automation to 1.32.1 and @openhands/extensions to 0.42.0 by @hieptl in https://github.com/OpenHands/OpenHands/pull/19659
* chore: remove merged PR artifacts by @all-hands-bot in https://github.com/OpenHands/OpenHands/pull/19601

## New Contributors
* @yunusarda-sudo made their first contribution in https://github.com/OpenHands/OpenHands/pull/19290

**Full Changelog**: https://github.com/OpenHands/OpenHands/compare/v1.38.0...v1.39.0

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

> **Source** [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) · `v1.39.0` · 2026-11-11 · [upstream release](https://github.com/OpenHands/OpenHands/releases/tag/v1.39.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
