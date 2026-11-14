---
title: "OpenHands v1.40.0"
project: "OpenHands"
repo: "OpenHands/OpenHands"
tag: "v1.40.0"
version: "v1.40.0"
published: "2026-11-12"
type: "minor"
lang: "en"
summary: "feat: improve Codex subscription authentication guidance"
---

# OpenHands v1.40.0

## 1.40.0 (2026-11-12)

<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### Features
* feat: improve Codex subscription authentication guidance by @xunjizhe in https://github.com/OpenHands/OpenHands/pull/17194
### Bug Fixes
* fix(chat): keep messages at tied history page boundaries by @enyst in https://github.com/OpenHands/OpenHands/pull/19649
* fix(chat): prevent delayed echoes from deleting newer drafts by @marcello-pichini in https://github.com/OpenHands/OpenHands/pull/19382
* fix(chat): activate the home model pick when a self-hosted instance turns Agent Profiles off by @hieptl in https://github.com/OpenHands/OpenHands/pull/19682
* fix(git): use a repository's real default branch instead of assuming "main" by @hieptl in https://github.com/OpenHands/OpenHands/pull/19604
* fix(i18n): add the missing Indonesian translations for the Codex subscription keys by @hieptl in https://github.com/OpenHands/OpenHands/pull/19685
### Maintenance
* chore(deps): bump the i18next group across 1 directory with 2 updates by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19634
* chore(deps): bump unist-util-visit from 5.1.0 to 5.2.0 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19635
* chore(deps): bump posthog-js from 1.444.0 to 1.445.1 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19636
* chore(deps-dev): bump @shadcn/lint from 0.2.3 to 0.2.5 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19678
* ci(deps): bump docker/login-action from 4.7.0 to 4.8.0 in the actions group by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19671
* chore(deps): bump the tanstack group with 2 updates by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19672
* chore(deps): bump mermaid from 12.2.0 to 12.3.0 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19673
* chore(deps): bump @microlink/react-json-view from 1.31.25 to 1.31.46 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19675
* chore(deps): bump posthog-js from 1.445.1 to 1.446.0 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19677
* chore(deps): bump @heroui/styles from 3.2.4 to 3.2.7 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19676
* chore(deps): bump lucide-react from 1.66.0 to 1.68.0 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19674
* ci: absorb review artifact cleanup into release PRs by @smolpaws in https://github.com/OpenHands/OpenHands/pull/19109

## New Contributors
* @xunjizhe made their first contribution in https://github.com/OpenHands/OpenHands/pull/17194
* @marcello-pichini made their first contribution in https://github.com/OpenHands/OpenHands/pull/19382

**Full Changelog**: https://github.com/OpenHands/OpenHands/compare/v1.39.0...v1.40.0

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

> **Source** [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) · `v1.40.0` · 2026-11-12 · [upstream release](https://github.com/OpenHands/OpenHands/releases/tag/v1.40.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
