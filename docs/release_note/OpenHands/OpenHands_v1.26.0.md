---
title: "OpenHands v1.26.0"
project: "OpenHands"
repo: "OpenHands/OpenHands"
tag: "v1.26.0"
version: "v1.26.0"
published: "2026-10-08"
type: "minor"
lang: "en"
summary: "feat(apps): add authenticated backend view helper · feat(chat): render empty-response corrective nudge as an informational note · feat: verify-openhands skill with control-openhands CLI and the full feature map"
---

# OpenHands v1.26.0

## 1.26.0 (2026-10-08)

<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### Features
* feat(apps): add authenticated backend view helper by @neubig in https://github.com/OpenHands/OpenHands/pull/17656
* feat(chat): render empty-response corrective nudge as an informational note by @errmakov in https://github.com/OpenHands/OpenHands/pull/17864
* feat: verify-openhands skill with control-openhands CLI and the full feature map by @enyst in https://github.com/OpenHands/OpenHands/pull/17961
* feat(verify-openhands): daily pass support and CLI fixes by @enyst in https://github.com/OpenHands/OpenHands/pull/18093
* feat(verify-openhands): map 20 more behaviors, with live recipes by @enyst in https://github.com/OpenHands/OpenHands/pull/18105
* feat(backends): explain a suspended workspace and offer a switch by @hieptl in https://github.com/OpenHands/OpenHands/pull/17988
* feat(onboarding): show the Super Admin setup guide on enterprise backends by @hieptl in https://github.com/OpenHands/OpenHands/pull/17969
* feat(automations): narrow needs review status by @DevinVinson in https://github.com/OpenHands/OpenHands/pull/17682
* feat(onboarding): open the next setup guide step when one is done in Canvas by @hieptl in https://github.com/OpenHands/OpenHands/pull/18138
* feat(verify-openhands): close the harness gaps, re-drive the recipes, and file the reproduced defects by @enyst in https://github.com/OpenHands/OpenHands/pull/18162
### Bug Fixes
* fix(settings): make the LLM profile row menu keyboard-operable by @enyst in https://github.com/OpenHands/OpenHands/pull/18019
* fix(conversation-panel): report download failures once and select Recent by default by @enyst in https://github.com/OpenHands/OpenHands/pull/18021
* fix(mcp): explain failed stdio connection tests without the URL hint by @enyst in https://github.com/OpenHands/OpenHands/pull/18018
* fix(settings): show the server's message instead of raw HttpError text in profile error toasts by @enyst in https://github.com/OpenHands/OpenHands/pull/18030
* fix(automations): read local run logs from the server-level bash events by @enyst in https://github.com/OpenHands/OpenHands/pull/18022
* fix(routes): render unknown URLs as an in-app not-found page by @enyst in https://github.com/OpenHands/OpenHands/pull/18023
* fix(command-menu): list Model Router and Agent Context; show Ctrl+K off Apple by @enyst in https://github.com/OpenHands/OpenHands/pull/18027
* fix(conversation): keep the header "⋯" menu on screen and close it on Escape by @enyst in https://github.com/OpenHands/OpenHands/pull/18028
* fix(backends): redirect off detail pages when switching from Manage backends by @enyst in https://github.com/OpenHands/OpenHands/pull/18024
* fix(onboarding): stop the "No backend is configured." toast before a backend exists by @enyst in https://github.com/OpenHands/OpenHands/pull/18010
* fix: improve backend settings note contrast by @enyst in https://github.com/OpenHands/OpenHands/pull/17911
* fix: keep settings and customization usable on tablets by @enyst in https://github.com/OpenHands/OpenHands/pull/17910
* fix(automations): show one error toast when an automation action fails by @enyst in https://github.com/OpenHands/OpenHands/pull/18043
* fix(automations): keep the filters popover open between choices by @enyst in https://github.com/OpenHands/OpenHands/pull/18026
* fix(plugins): say "plugin" on plugin controls and keep busy app switches inert by @enyst in https://github.com/OpenHands/OpenHands/pull/18040
* fix(conversation): open the drawer at phone width for agent and file-link tab requests by @enyst in https://github.com/OpenHands/OpenHands/pull/18045
* fix(a11y): close menus and popovers on Escape and return focus by @enyst in https://github.com/OpenHands/OpenHands/pull/18044
* fix(home): show folder names at phone width and the workspace empty state by @enyst in https://github.com/OpenHands/OpenHands/pull/18037
* fix(chat): toast on bare /btw and offer Resume only on the latest goal status by @enyst in https://github.com/OpenHands/OpenHands/pull/18036
* fix(a11y): name the icon-only composer and diff viewer buttons by @enyst in https://github.com/OpenHands/OpenHands/pull/18033
* fix(mcp): keep catalog identity for repeated STDIO installs by @enyst in https://github.com/OpenHands/OpenHands/pull/18034
* fix(settings): correct UI copy on settings, MCP and skills pages by @enyst in https://github.com/OpenHands/OpenHands/pull/18035
* fix(files): show the current file body after Refresh and reload by @enyst in https://github.com/OpenHands/OpenHands/pull/18032
* fix(automations): show repositories and plugins stored in preset_metadata by @enyst in https://github.com/OpenHands/OpenHands/pull/18041
* fix(automations): hide repository credentials on the Git Sync status card by @enyst in https://github.com/OpenHands/OpenHands/pull/18039
* fix(hooks): list workspace hooks in the Available Hooks dialog on local backends by @enyst in https://github.com/OpenHands/OpenHands/pull/18031
* fix(plugins,apps): show the server's reason once for failed installs and updates by @enyst in https://github.com/OpenHands/OpenHands/pull/18025
* fix(errors): show the server's message instead of raw HttpError text in generic error toasts by @enyst in https://github.com/OpenHands/OpenHands/pull/18051
* fix(a11y): close the tools, status and tabs menus on Escape by @enyst in https://github.com/OpenHands/OpenHands/pull/18095
* fix(e2e): let the live Agent Server E2E job run and finish by @enyst in https://github.com/OpenHands/OpenHands/pull/18084
* fix: reduce cloud org and git installation polling by @malhotra5 in https://github.com/OpenHands/OpenHands/pull/18128
* fix(telemetry): never initialize PostHog under Do Not Track by @enyst in https://github.com/OpenHands/OpenHands/pull/18086
* fix(desktop): restore the macOS title bar drag region by @Grzesie2k in https://github.com/OpenHands/OpenHands/pull/17474
* fix: cloud conversation org scoping by @malhotra5 in https://github.com/OpenHands/OpenHands/pull/18130
* fix(home): show one error toast and keep the prompt when a launch fails by @errmakov in https://github.com/OpenHands/OpenHands/pull/17985
* fix(canvas): hide unavailable cloud VS Code action by @neubig in https://github.com/OpenHands/OpenHands/pull/18149
* fix(docker): minimize Canvas runtime packages by @neubig in https://github.com/OpenHands/OpenHands/pull/18134
* fix: cloud sandbox resume retry behavior by @malhotra5 in https://github.com/OpenHands/OpenHands/pull/17665
### Documentation
* docs(verify-openhands): map maintenance through main@ed815e141 by @enyst in https://github.com/OpenHands/OpenHands/pull/18085
* docs(verify-openhands): map maintenance 2026-10-08 by @smolpaws in https://github.com/OpenHands/OpenHands/pull/18141
### Maintenance
* refactor(canvas): remove bundled VSCode consumer assumptions by @neubig in https://github.com/OpenHands/OpenHands/pull/17660
* chore(lint): stage raw color warnings by @enyst in https://github.com/OpenHands/OpenHands/pull/18006
* test: Weekly test sweep: remove low-value tests + simplify by @enyst in https://github.com/OpenHands/OpenHands/pull/16574
* revert: restore bundled VS Code consumer support by @neubig in https://github.com/OpenHands/OpenHands/pull/18048
* test(e2e): give the preset automation's Slack stand-in the catalog identity by @enyst in https://github.com/OpenHands/OpenHands/pull/18087
* test(settings): wait for the delete toast and close in DeleteProfileModal test by @enyst in https://github.com/OpenHands/OpenHands/pull/18079
* test(e2e): open Commits from the tabs pane's own menu by @enyst in https://github.com/OpenHands/OpenHands/pull/18122
* test(e2e): launch the same-model profile test from the BETA profile by @enyst in https://github.com/OpenHands/OpenHands/pull/18121

## New Contributors
* @Grzesie2k made their first contribution in https://github.com/OpenHands/OpenHands/pull/17474

**Full Changelog**: https://github.com/OpenHands/OpenHands/compare/v1.25.0...v1.26.0

---
This PR was generated with [Release Please](https://github.com/googleapis/release-please). See [documentation](https://github.com/googleapis/release-please#release-please).
<!-- AGENT_CANVAS_DOCKER_START -->

---

> **Source** [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) · `v1.26.0` · 2026-10-08 · [upstream release](https://github.com/OpenHands/OpenHands/releases/tag/v1.26.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
