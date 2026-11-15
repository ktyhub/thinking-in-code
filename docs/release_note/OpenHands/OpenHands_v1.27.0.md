---
title: "OpenHands v1.27.0"
project: "OpenHands"
repo: "OpenHands/OpenHands"
tag: "v1.27.0"
version: "v1.27.0"
published: "2026-10-12"
type: "minor"
lang: "en"
summary: "feat(verify-openhands): drive the mock-LLM e2e behaviors on DeepSeek and map the gaps · feat(verify-openhands): record videos of the browser with browser record"
---

# OpenHands v1.27.0

## 1.27.0 (2026-10-12)

<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### Features
* feat(verify-openhands): drive the mock-LLM e2e behaviors on DeepSeek and map the gaps by @enyst in https://github.com/OpenHands/OpenHands/pull/18191
* feat(verify-openhands): record videos of the browser with `browser record` by @enyst in https://github.com/OpenHands/OpenHands/pull/18211
* feat(acp): add OpenCode and Pi as built-in ACP agents on local backends by @Placidoe in https://github.com/OpenHands/OpenHands/pull/17758
* feat: Add splash page mode toggle by @malhotra5 in https://github.com/OpenHands/OpenHands/pull/17199
* feat: add automate setup split panel by @malhotra5 in https://github.com/OpenHands/OpenHands/pull/17200
* feat: add agent-assisted automation form updates by @malhotra5 in https://github.com/OpenHands/OpenHands/pull/17201
* feat: add persisted automation draft management UI by @malhotra5 in https://github.com/OpenHands/OpenHands/pull/17242
* feat: finalize automation setup draft flow by @malhotra5 in https://github.com/OpenHands/OpenHands/pull/17688
* feat: add compact section navigation on tablets by @enyst in https://github.com/OpenHands/OpenHands/pull/18200
* feat(verify-openhands): hold keys with `browser key down|up|release-all` by @enyst in https://github.com/OpenHands/OpenHands/pull/18292
* feat(acp): take ACP model lists from the agent instead of hardcoding them by @simonrosenberg in https://github.com/OpenHands/OpenHands/pull/18131
* feat(mars): connect Agent Canvas to DigitalOcean Managed Agents (desktop and web) by @amandhaw in https://github.com/OpenHands/OpenHands/pull/17838
### Bug Fixes
* fix(e2e): preserve mock validation trajectories by @kr1shna-exe in https://github.com/OpenHands/OpenHands/pull/17876
* fix(hooks): show prompt and agent hook text in the Available Hooks dialog by @fengyue-xve in https://github.com/OpenHands/OpenHands/pull/18107
* fix(a11y): close the composer's More input actions menu on Escape by @enyst in https://github.com/OpenHands/OpenHands/pull/18174
* fix(verify-openhands): point the default agent profile at the preset's model by @enyst in https://github.com/OpenHands/OpenHands/pull/18209
* fix(plugins): point duplicate-install toast at Update or Uninstall by @fengyue-xve in https://github.com/OpenHands/OpenHands/pull/18110
* fix(hooks): use dedicated hooks fetch error message in available hooks dialog by @lx3133584 in https://github.com/OpenHands/OpenHands/pull/18177
* fix: use theme colors for form validation by @enyst in https://github.com/OpenHands/OpenHands/pull/18199
* fix(backends): open on the org the cloud web app hands back by @hieptl in https://github.com/OpenHands/OpenHands/pull/18228
* fix: fit Edit backend dialog to small viewports by @enyst in https://github.com/OpenHands/OpenHands/pull/18219
* fix(onboarding): start a setup step's tour from its row and drop the template stop's footer by @hieptl in https://github.com/OpenHands/OpenHands/pull/18243
* fix(automations): keep a long run's Logs dialog inside its panel by @enyst in https://github.com/OpenHands/OpenHands/pull/18175
* fix(mcp): show one error toast when an MCP server change fails by @enyst in https://github.com/OpenHands/OpenHands/pull/18182
* fix(docker): bind the frontend to 0.0.0.0 when the kernel has no IPv6 by @enyst in https://github.com/OpenHands/OpenHands/pull/18180
* fix(settings): give the settings screen a definite height by @enyst in https://github.com/OpenHands/OpenHands/pull/18256
* fix(mcp): show one toast when the pre-save connection test fails by @smolpaws in https://github.com/OpenHands/OpenHands/pull/18267
* fix(hooks): pick the Available Hooks text by hook type by @fengyue-xve in https://github.com/OpenHands/OpenHands/pull/18215
* fix(conversation-panel): pass testId to BrandButton in confirm modals by @lx3133584 in https://github.com/OpenHands/OpenHands/pull/18151
* fix(settings): flag taken names in the LLM and agent profile editors by @awss1i in https://github.com/OpenHands/OpenHands/pull/18144
* fix(a11y): make the agent profile row menu keyboard-operable by @fengyue-xve in https://github.com/OpenHands/OpenHands/pull/18112
* fix(automations): show Default when the agent profile field is empty by @fengyue-xve in https://github.com/OpenHands/OpenHands/pull/18111
* fix(onboarding): keep the setup tour off other dialogs and start the MCP tour at the library by @hieptl in https://github.com/OpenHands/OpenHands/pull/18261
* fix(onboarding): say "Use" on the built-in integration choice and rename the automation step by @hieptl in https://github.com/OpenHands/OpenHands/pull/18262
* fix: close skill tag popover before modal on Escape by @pei711 in https://github.com/OpenHands/OpenHands/pull/17967
* fix: show header-specific MCP validation errors by @pei711 in https://github.com/OpenHands/OpenHands/pull/17966
* fix(chat): flush conversation drafts before navigation by @GoldArowana in https://github.com/OpenHands/OpenHands/pull/17968
* fix: accept Ctrl for confirmation shortcuts off macOS by @errmakov in https://github.com/OpenHands/OpenHands/pull/18127
* fix(settings): scope local settings cache by backend by @enyst in https://github.com/OpenHands/OpenHands/pull/16958
* fix(telemetry): retry automation consent sync by @enyst in https://github.com/OpenHands/OpenHands/pull/16959
* fix(mcp): use theme-aware secret selection by @enyst in https://github.com/OpenHands/OpenHands/pull/18278
* fix: resolve rejected and errored actions in event groups by @errmakov in https://github.com/OpenHands/OpenHands/pull/17995
* fix(i18n): use translation key for subscription models not loaded message by @lx3133584 in https://github.com/OpenHands/OpenHands/pull/18308
### Documentation
* docs(verify-openhands): map the Available Hooks text fix from #18107 by @enyst in https://github.com/OpenHands/OpenHands/pull/18207
* docs(verify-openhands): map maintenance 2026-10-08 by @enyst in https://github.com/OpenHands/OpenHands/pull/18183
* docs(verify-openhands): map maintenance 2026-10-09 by @enyst in https://github.com/OpenHands/OpenHands/pull/18237
* docs(verify-openhands): map maintenance 2026-10-10 by @smolpaws in https://github.com/OpenHands/OpenHands/pull/18264
* docs(verify-openhands): map maintenance 2026-10-11 by @smolpaws in https://github.com/OpenHands/OpenHands/pull/18281
* docs(verify-openhands): recover map corrections from the closed 2026-10-09 sweep by @enyst in https://github.com/OpenHands/OpenHands/pull/18295
* docs(verify-openhands): record every known bug in the feature map by @enyst in https://github.com/OpenHands/OpenHands/pull/18304
### Maintenance
* chore: bump agent-server to 1.54.0 by @all-hands-bot in https://github.com/OpenHands/OpenHands/pull/18253
* chore(lint): protect divider and toggle appearance contracts by @enyst in https://github.com/OpenHands/OpenHands/pull/18194
* refactor(theme): separate base color from text-base typography by @smolpaws in https://github.com/OpenHands/OpenHands/pull/17646
* refactor(theme): use readable MCP feedback text tokens by @enyst in https://github.com/OpenHands/OpenHands/pull/18270
* chore(lint): stage inline-style warnings by @enyst in https://github.com/OpenHands/OpenHands/pull/18275
* chore(lint): protect caret appearance and state rotation by @enyst in https://github.com/OpenHands/OpenHands/pull/18274
* chore: remove merged PR artifacts by @all-hands-bot in https://github.com/OpenHands/OpenHands/pull/17718
* test(onboarding): preserve complete model profiles by @kr1shna-exe in https://github.com/OpenHands/OpenHands/pull/17889
* refactor(onboarding): edit the active LLM profile instead of raw LLM settings by @enyst in https://github.com/OpenHands/OpenHands/pull/18218
* chore(lint): update shadcn lint to 0.2.1 by @enyst in https://github.com/OpenHands/OpenHands/pull/18315
* chore: bump @openhands/extensions to 0.30.0 by @hieptl in https://github.com/OpenHands/OpenHands/pull/18336

## New Contributors
* @fengyue-xve made their first contribution in https://github.com/OpenHands/OpenHands/pull/18107
* @lx3133584 made their first contribution in https://github.com/OpenHands/OpenHands/pull/18177
* @Placidoe made their first contribution in https://github.com/OpenHands/OpenHands/pull/17758
* @pei711 made their first contribution in https://github.com/OpenHands/OpenHands/pull/17967
* @GoldArowana made their first contribution in https://github.com/OpenHands/OpenHands/pull/17968
* @amandhaw made their first contribution in https://github.com/OpenHands/OpenHands/pull/17838

**Full Changelog**: https://github.com/OpenHands/OpenHands/compare/v1.26.0...v1.27.0

---
This PR was generated with [Release Please](https://github.com/googleapis/release-please). See [documentation](https://github.com/googleapis/release-please#release-please).
<!-- AGENT_CANVAS_DOCKER_START -->

---

> **Source** [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) · `v1.27.0` · 2026-10-12 · [upstream release](https://github.com/OpenHands/OpenHands/releases/tag/v1.27.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
