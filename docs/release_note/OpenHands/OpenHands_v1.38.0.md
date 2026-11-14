---
title: "OpenHands v1.38.0"
project: "OpenHands"
repo: "OpenHands/OpenHands"
tag: "v1.38.0"
version: "v1.38.0"
published: "2026-11-10"
type: "minor"
lang: "en"
summary: "feat: edit executable plugin configuration in automation help · feat: display conversation budgets with semantic meter fills · feat: add Paper theme to Agent Canvas"
---

# OpenHands v1.38.0

## 1.38.0 (2026-11-10)

<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### Features
* feat: edit executable plugin configuration in automation help by @ak684 in https://github.com/OpenHands/OpenHands/pull/19453
* feat: display conversation budgets with semantic meter fills by @enyst in https://github.com/OpenHands/OpenHands/pull/18533
* feat: add Paper theme to Agent Canvas by @enyst in https://github.com/OpenHands/OpenHands/pull/19445
* feat(chat): show a resolved banner for project conversations by @enyst in https://github.com/OpenHands/OpenHands/pull/19494
* feat(themes): finish Light+ and Solarized contrast pass by @rajshah4 in https://github.com/OpenHands/OpenHands/pull/17730
* feat(launch): automation-aware install via mode=automation + POST /plugin-spec (toward #18793) by @juanmichelini in https://github.com/OpenHands/OpenHands/pull/18699
* feat(automations): let prompt and plugin presets run from an agent profile by @simonrosenberg in https://github.com/OpenHands/OpenHands/pull/19421
* feat(license): show the OpenHands Enterprise license banner in Canvas by @hieptl in https://github.com/OpenHands/OpenHands/pull/19470
* feat(launch): allow message-only /launch links without a plugin by @juanmichelini in https://github.com/OpenHands/OpenHands/pull/18734
### Bug Fixes
* fix(automations): carry the script bundle through export and import by @hieptl in https://github.com/OpenHands/OpenHands/pull/19330
* fix(docker): exit non-zero when the agent-server stops responding by @liwenjie200543 in https://github.com/OpenHands/OpenHands/pull/19275
* fix: let org admins and owners edit other users' automations by @jpelletier1 in https://github.com/OpenHands/OpenHands/pull/19307
* fix(onboarding): save an ACP pick to its own profile instead of `default` by @simonrosenberg in https://github.com/OpenHands/OpenHands/pull/19384
* fix(theme): use managed-agent keyboard focus colors by @enyst in https://github.com/OpenHands/OpenHands/pull/18520
* fix: preserve automation context and open help chats immediately by @ak684 in https://github.com/OpenHands/OpenHands/pull/19451
* fix(chat): blend wide-table fades into message bubbles by @enyst in https://github.com/OpenHands/OpenHands/pull/19518
* fix: composer stop interrupts the agent instead of pausing the Cloud sandbox by @ak684 in https://github.com/OpenHands/OpenHands/pull/19546
* fix(chat): hide the agent profile switch when a self-hosted instance turns Agent Profiles off by @hieptl in https://github.com/OpenHands/OpenHands/pull/19471
* fix: fail fast on unwritable Docker bind mounts and document the permission fix by @Lothnic in https://github.com/OpenHands/OpenHands/pull/16512
* fix(chat): reconcile active LLM profile against backend model (incl. race fix) by @juanmichelini in https://github.com/OpenHands/OpenHands/pull/19568
* fix(automations): name the Bitbucket Data Center template filter chip by @enyst in https://github.com/OpenHands/OpenHands/pull/19478
* fix(diff-viewer): release models after editor teardown by @enyst in https://github.com/OpenHands/OpenHands/pull/19501
* fix(docker): keep conversation workspaces in the persisted volume by @MindOfqc in https://github.com/OpenHands/OpenHands/pull/18975
* fix(launch-view): don't yank focus when the user has navigated away by @juanmichelini in https://github.com/OpenHands/OpenHands/pull/19397
### Documentation
* docs(verify-openhands): map maintenance 2026-11-07 by @enyst in https://github.com/OpenHands/OpenHands/pull/19480
* docs(verify-openhands): tighten Paper theme recipes by @enyst in https://github.com/OpenHands/OpenHands/pull/19498
* docs(verify-openhands): map maintenance 2026-11-08 by @enyst in https://github.com/OpenHands/OpenHands/pull/19519
* docs(verify-openhands): include every family in daily rotation by @enyst in https://github.com/OpenHands/OpenHands/pull/19528
### Maintenance
* chore(deps-dev): bump @stryker-mutator/core from 9.6.1 to 10.1.1 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19341
* refactor: use integer utilities for existing z-index layers by @enyst in https://github.com/OpenHands/OpenHands/pull/19262
* refactor: name metadata and automation grid columns by @enyst in https://github.com/OpenHands/OpenHands/pull/19438
* refactor: complete the named Canvas type scale by @enyst in https://github.com/OpenHands/OpenHands/pull/19437
* chore: remove merged PR artifacts by @all-hands-bot in https://github.com/OpenHands/OpenHands/pull/19418
* chore(deps): bump the react-router group across 1 directory with 3 updates by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19408
* chore(deps): bump the tanstack group across 1 directory with 2 updates by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19407
* refactor: name shared message and toast wrapping by @enyst in https://github.com/OpenHands/OpenHands/pull/19446
* chore(lint): guard four clean inline-style owners by @enyst in https://github.com/OpenHands/OpenHands/pull/19448
* refactor: name shared control and panel motion recipes by @enyst in https://github.com/OpenHands/OpenHands/pull/19447
* chore(lint): guard four migrated layer owners by @enyst in https://github.com/OpenHands/OpenHands/pull/19439
* chore(deps-dev): bump lint-staged from 17.3.0 to 17.6.0 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19459
* chore(deps): bump lucide-react from 1.64.0 to 1.65.0 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19458
* chore(deps): bump vite from 8.0.16 to 8.3.5 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19457
* chore(lint): enforce named values in cleaned message and motion owners by @enyst in https://github.com/OpenHands/OpenHands/pull/19484
* chore: remove merged PR artifacts by @all-hands-bot in https://github.com/OpenHands/OpenHands/pull/19460
* refactor(chat): name file-drop illustration coordinates by @enyst in https://github.com/OpenHands/OpenHands/pull/19486
* refactor(markdown): name font-relative code padding by @enyst in https://github.com/OpenHands/OpenHands/pull/19491
* refactor(ui): name shared horizontal scroll-fade tokens by @enyst in https://github.com/OpenHands/OpenHands/pull/19492
* chore(deps-dev): bump the eslint group across 1 directory with 3 updates by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19409
* chore(deps-dev): bump globals from 16.5.0 to 17.13.0 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19456
* chore(deps): bump the i18next group across 1 directory with 3 updates by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19454
* refactor(ui): use spacing-scale aliases for rem layout limits by @enyst in https://github.com/OpenHands/OpenHands/pull/19493
* chore(deps): bump posthog-js from 1.415.0 to 1.444.0 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19511
* chore(deps): bump i18next from 26.5.12 to 26.6.0 in the i18next group by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19506
* chore(deps-dev): bump postcss-prefix-selector from 2.1.1 to 2.2.1 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19510
* chore(lint): enforce clean palette and completed recipe boundaries by @enyst in https://github.com/OpenHands/OpenHands/pull/19529
* refactor(frontend): scope home route-at-start suppression to home composer and active backend (#19138) by @phatloi0010 in https://github.com/OpenHands/OpenHands/pull/19228
* chore(deps): bump framer-motion from 12.38.0 to 14.9.0 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19455
* chore(deps): bump lucide-react from 1.65.0 to 1.66.0 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19508
* chore(deps-dev): bump @shadcn/lint from 0.2.1 to 0.2.3 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19509
* refactor(ui): name exact Canvas letter-spacing metrics by @enyst in https://github.com/OpenHands/OpenHands/pull/19533
* refactor(ui): name badge and reorder inset-shadow recipes by @enyst in https://github.com/OpenHands/OpenHands/pull/19534
* refactor(ui): adopt inline-style lint errors for context meters by @enyst in https://github.com/OpenHands/OpenHands/pull/19561
* refactor(ui): name existing Canvas background and on-accent colors by @enyst in https://github.com/OpenHands/OpenHands/pull/19530
* refactor(ui): name Commit viewer layout and guard arbitrary values by @enyst in https://github.com/OpenHands/OpenHands/pull/19566
* chore(lint): enforce arbitrary-value checks on cleaned typography and shadow owners by @enyst in https://github.com/OpenHands/OpenHands/pull/19564
* ci(docker): open the Canvas page in a browser in the image smoke test by @VascoSch92 in https://github.com/OpenHands/OpenHands/pull/19428
* chore(deps-dev): bump globals from 17.13.0 to 17.14.0 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19539
* chore(deps): bump react-syntax-highlighter from 16.1.1 to 16.1.2 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19540
* chore(deps): bump the i18next group with 4 updates by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19537
* chore(deps): bump the tanstack group with 2 updates by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19536
* chore(deps): bump uuid from 14.0.1 to 14.0.3 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19538
* chore(deps-dev): bump typescript from 6.0.3 to 7.0.2 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19414
* chore(deps-dev): bump electron from 43.3.0 to 45.2.1 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19541
* chore: remove merged PR artifacts by @all-hands-bot in https://github.com/OpenHands/OpenHands/pull/19499
* test(e2e): wait on the live page after deleting the active LLM profile by @VascoSch92 in https://github.com/OpenHands/OpenHands/pull/19426
* chore: bump agent-server to 1.61.0 by @openhands-release-bot[bot] in https://github.com/OpenHands/OpenHands/pull/19572
* chore(deps): bump @heroui/react from 2.8.10 to 3.2.4 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/16654
* refactor(ui): name the shared dark Git control border by @enyst in https://github.com/OpenHands/OpenHands/pull/19578
* refactor(ui): name Files tab scroll and discovery height recipes by @enyst in https://github.com/OpenHands/OpenHands/pull/19571
* chore: remove merged PR artifacts by @all-hands-bot in https://github.com/OpenHands/OpenHands/pull/19582

## New Contributors
* @liwenjie200543 made their first contribution in https://github.com/OpenHands/OpenHands/pull/19275
* @rajshah4 made their first contribution in https://github.com/OpenHands/OpenHands/pull/17730
* @phatloi0010 made their first contribution in https://github.com/OpenHands/OpenHands/pull/19228

**Full Changelog**: https://github.com/OpenHands/OpenHands/compare/v1.37.0...v1.38.0

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

> **Source** [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) · `v1.38.0` · 2026-11-10 · [upstream release](https://github.com/OpenHands/OpenHands/releases/tag/v1.38.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
