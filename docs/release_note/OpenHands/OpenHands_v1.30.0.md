---
title: "OpenHands v1.30.0"
project: "OpenHands"
repo: "OpenHands/OpenHands"
tag: "v1.30.0"
version: "v1.30.0"
published: "2026-10-22"
type: "minor"
lang: "en"
summary: "feat(automations): reflect the built-in integration's connection state in the setup choice modal (OHE-3612)"
---

# OpenHands v1.30.0

## 1.30.0 (2026-10-22)

<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### Features
* feat(automations): reflect the built-in integration's connection state in the setup choice modal (OHE-3612) by @hieptl in https://github.com/OpenHands/OpenHands/pull/18566
### Bug Fixes
* fix(chat): let a Cloud member pick the LLM profile on the home page (OHE-3669) by @hieptl in https://github.com/OpenHands/OpenHands/pull/18729
* fix(sidebar): refresh the conversation list when a cloud start task is ready (OSS-14604) by @hieptl in https://github.com/OpenHands/OpenHands/pull/18741
* fix(sidebar): hide the Getting started checklist on a canvas locked to a Cloud host (OHE-3683) by @hieptl in https://github.com/OpenHands/OpenHands/pull/18739
* fix(canvas): persist workspace grouping via server-side conversation tags by @VascoSch92 in https://github.com/OpenHands/OpenHands/pull/18722
* fix(agent-profiles): keep the `default` rules local and save home LLM picks on Cloud by @simonrosenberg in https://github.com/OpenHands/OpenHands/pull/18747
* fix(frontend): link Azure DevOps repositories to their _git page by @ak684 in https://github.com/OpenHands/OpenHands/pull/18753
* fix: OHE-3677 make the default primary color white (OHE-3677) by @tofarr in https://github.com/OpenHands/OpenHands/pull/18726
* fix(mars): restore explicit opt-in for the web bridge by @enyst in https://github.com/OpenHands/OpenHands/pull/18783
### Documentation
* docs(verify-openhands): map maintenance 2026-10-20 by @enyst in https://github.com/OpenHands/OpenHands/pull/18718
### Maintenance
* ci: fix shell quoting in Debian snapshot defaults step by @VascoSch92 in https://github.com/OpenHands/OpenHands/pull/18760
* refactor(layout): express overview width in CSS by @enyst in https://github.com/OpenHands/OpenHands/pull/18763
* chore: bump @openhands/extensions to 0.33.0 by @neubig in https://github.com/OpenHands/OpenHands/pull/18786
* chore: remove merged PR artifacts by @all-hands-bot in https://github.com/OpenHands/OpenHands/pull/18742


**Full Changelog**: https://github.com/OpenHands/OpenHands/compare/v1.29.0...v1.30.0

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

> **Source** [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) · `v1.30.0` · 2026-10-22 · [upstream release](https://github.com/OpenHands/OpenHands/releases/tag/v1.30.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
