---
title: "OpenHands v1.28.0"
project: "OpenHands"
repo: "OpenHands/OpenHands"
tag: "v1.28.0"
version: "v1.28.0"
published: "2026-10-19"
type: "minor"
lang: "en"
summary: "feat(verify-openhands): executable known bugs and a repeatable fix proof · feat(i18n): add Bahasa Indonesia (id) locale · feat: add close control to Getting started checklist"
---

# OpenHands v1.28.0

## 1.28.0 (2026-10-19)

<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### Features
* feat(verify-openhands): executable known bugs and a repeatable fix proof by @enyst in https://github.com/OpenHands/OpenHands/pull/18348
* feat(i18n): add Bahasa Indonesia (id) locale by @analisaperlengkapan in https://github.com/OpenHands/OpenHands/pull/18067
* feat: add close control to Getting started checklist by @DevinVinson in https://github.com/OpenHands/OpenHands/pull/18185
* feat(secrets): let the agent request a secret through an in-conversation modal by @VascoSch92 in https://github.com/OpenHands/OpenHands/pull/18408
* feat(verify-openhands): adopt the shared known-bug contract by @enyst in https://github.com/OpenHands/OpenHands/pull/18355
* feat(chat): smooth, reading-pace streaming with word fade-in by @VascoSch92 in https://github.com/OpenHands/OpenHands/pull/18491
* feat(secrets): ask for requested secrets inline in the chat by @VascoSch92 in https://github.com/OpenHands/OpenHands/pull/18575
* feat(automations): hide templates that overlap built-in integrations on self-hosted instances (OHE-3611) by @hieptl in https://github.com/OpenHands/OpenHands/pull/18565
### Bug Fixes
* fix(lint): use semantic colors for Git Sync feedback by @enyst in https://github.com/OpenHands/OpenHands/pull/18346
* fix(themes): make backend connection feedback readable by @enyst in https://github.com/OpenHands/OpenHands/pull/18321
* fix(themes): use readable validation and service errors by @enyst in https://github.com/OpenHands/OpenHands/pull/18330
* fix(markdown): wrap long table cells instead of stretching the table by @jpshackelford in https://github.com/OpenHands/OpenHands/pull/18357
* fix(settings): use dedicated taken-name messages for llm and agent profiles by @lx3133584 in https://github.com/OpenHands/OpenHands/pull/18411
* fix(automations): show the API's message when an automation edit fails by @enyst in https://github.com/OpenHands/OpenHands/pull/18391
* fix(settings): show the active backend's values after a backend switch by @enyst in https://github.com/OpenHands/OpenHands/pull/18401
* fix(automations): leave draft test automations out of the overview tiles by @enyst in https://github.com/OpenHands/OpenHands/pull/18393
* fix(automations): make the draft delete confirmation a real dialog by @enyst in https://github.com/OpenHands/OpenHands/pull/18394
* fix(chat): keep confirmation button labels on one line by @enyst in https://github.com/OpenHands/OpenHands/pull/18397
* fix(files): fit the file discovery dialog on phone screens by @enyst in https://github.com/OpenHands/OpenHands/pull/18398
* fix(modals): move focus into ModalBackdrop dialogs and keep it there by @enyst in https://github.com/OpenHands/OpenHands/pull/18400
* fix(themes): make Home mode toggle labels readable in light themes by @enyst in https://github.com/OpenHands/OpenHands/pull/18402
* fix(themes): make toast text readable in light themes by @enyst in https://github.com/OpenHands/OpenHands/pull/18403
* fix(automations): keep the setup composer out of the Home draft by @enyst in https://github.com/OpenHands/OpenHands/pull/18392
* fix(automations): keep the setup handoff on its own conversation by @enyst in https://github.com/OpenHands/OpenHands/pull/18385
* fix(settings): preserve the new LLM profile form values by @enyst in https://github.com/OpenHands/OpenHands/pull/18422
* fix(chat): hold a message until the cloud runtime is reachable instead of failing it (OHE-3314) by @hieptl in https://github.com/OpenHands/OpenHands/pull/18443
* fix(conversation): wake the paused cloud sandbox from Resume instead of calling its runtime (OHE-3407) by @hieptl in https://github.com/OpenHands/OpenHands/pull/18442
* fix(settings): make switches keyboard accessible by @enyst in https://github.com/OpenHands/OpenHands/pull/18370
* fix(automations): show the reason when a draft save is refused by @enyst in https://github.com/OpenHands/OpenHands/pull/18462
* fix(automations): use the theme error color in the setup draft bar by @enyst in https://github.com/OpenHands/OpenHands/pull/18463
* fix(agent-profiles): keep the profile on per-launch LLM picks and in /new by @simonrosenberg in https://github.com/OpenHands/OpenHands/pull/18419
* fix(automations): keep the setup error pill at 4.5:1 on every theme by @enyst in https://github.com/OpenHands/OpenHands/pull/18482
* fix(lint): theme context usage feedback colors by @enyst in https://github.com/OpenHands/OpenHands/pull/18431
* fix(themes): use readable backend focus and valid scrim opacity by @enyst in https://github.com/OpenHands/OpenHands/pull/18327
* fix(backends): cap edit backend dialog width to viewport and enable vertical scrolling by @lx3133584 in https://github.com/OpenHands/OpenHands/pull/18220
* fix(theme): keep composer context feedback readable by @enyst in https://github.com/OpenHands/OpenHands/pull/18504
* fix(theme): make consent backend scope readable by @enyst in https://github.com/OpenHands/OpenHands/pull/18508
* fix(theme): keep model profile messages readable by @enyst in https://github.com/OpenHands/OpenHands/pull/18510
* fix: list Azure DevOps repositories from every organization by @ak684 in https://github.com/OpenHands/OpenHands/pull/18479
* fix(onboarding): open the Auth Providers page from the optional SAML step by @hieptl in https://github.com/OpenHands/OpenHands/pull/18447
* fix(lint): theme critic result text and scores by @enyst in https://github.com/OpenHands/OpenHands/pull/18535
* fix(settings): show the server's reason when an LLM profile save fails by @enyst in https://github.com/OpenHands/OpenHands/pull/18549
* fix(markdown): keep syntax-highlighter tokens inline by @enyst in https://github.com/OpenHands/OpenHands/pull/18542
* fix: fail the launch when the automation backend exits during startup by @enyst in https://github.com/OpenHands/OpenHands/pull/18311
* fix(backends): silence expected recovery model and version probes by @enyst in https://github.com/OpenHands/OpenHands/pull/18369
* fix(settings): preserve application edits after a failed save by @enyst in https://github.com/OpenHands/OpenHands/pull/18372
* fix(theme): keep destructive button labels readable by @enyst in https://github.com/OpenHands/OpenHands/pull/18513
* fix(theme): keep launch errors and retry readable by @enyst in https://github.com/OpenHands/OpenHands/pull/18515
* fix(theme): make bulk model save outcomes readable by @enyst in https://github.com/OpenHands/OpenHands/pull/18529
* fix(theme): keep Markdown links readable across themes by @enyst in https://github.com/OpenHands/OpenHands/pull/18530
* fix(automations): start a Custom schedule from the preset it replaces by @enyst in https://github.com/OpenHands/OpenHands/pull/18464
* fix(theme): clarify chat loading and timeout colors by @enyst in https://github.com/OpenHands/OpenHands/pull/18531
* fix(theme): keep device authorization feedback readable by @enyst in https://github.com/OpenHands/OpenHands/pull/18528
* fix(conversation): open the Usage panel page at phone width by @enyst in https://github.com/OpenHands/OpenHands/pull/18537
* fix(settings): don't retry a 4xx answer when saving settings by @enyst in https://github.com/OpenHands/OpenHands/pull/18490
* fix(backends): keep stacked backend forms on Escape, drop the shared 404 toast, close failed login popups by @enyst in https://github.com/OpenHands/OpenHands/pull/18423
* fix(lint): theme automation validation decorations by @enyst in https://github.com/OpenHands/OpenHands/pull/18526
* fix(chat): clear the saved draft of slash commands handled in the chat by @enyst in https://github.com/OpenHands/OpenHands/pull/18553
* fix(chat): build the plan with Ctrl/Cmd+Enter from the empty composer by @enyst in https://github.com/OpenHands/OpenHands/pull/18544
* fix(launcher): create the resolved terminal socket directory by @enyst in https://github.com/OpenHands/OpenHands/pull/18368
* fix(chat): remove the white line above the chat input resize grip by @VascoSch92 in https://github.com/OpenHands/OpenHands/pull/18574
* fix(ui): keep switch thumbs inside their tracks in right-to-left languages by @enyst in https://github.com/OpenHands/OpenHands/pull/18551
* fix(backends): keep phone backend modals open on Escape over the drawer by @enyst in https://github.com/OpenHands/OpenHands/pull/18591
* fix(automations): show saved draft errors before historical test status by @smolpaws in https://github.com/OpenHands/OpenHands/pull/18617
* fix(automations): keep detail header actions reachable on phones by @smolpaws in https://github.com/OpenHands/OpenHands/pull/18618
* fix(lint): theme hook diagnostics and status badges by @enyst in https://github.com/OpenHands/OpenHands/pull/18534
* fix(library): preserve ESM peer imports in browser hosts by @smolpaws in https://github.com/OpenHands/OpenHands/pull/18619
* fix(verify): correct cleanup and extend browser verification by @smolpaws in https://github.com/OpenHands/OpenHands/pull/18616
* fix(plugins): reject unsupported Local launch parameters explicitly by @smolpaws in https://github.com/OpenHands/OpenHands/pull/18622
* fix(verify): measure available memory on macOS by @enyst in https://github.com/OpenHands/OpenHands/pull/18645
* fix(automations): keep existing bundle when editing a custom automation by @jpshackelford in https://github.com/OpenHands/OpenHands/pull/18649
* fix(conversation-panel): treat a missing-runtime conversation as archived everywhere by @adminypc in https://github.com/OpenHands/OpenHands/pull/18159
### Documentation
* docs(verify-openhands): clarify reconcile and live-pass rules by @enyst in https://github.com/OpenHands/OpenHands/pull/18317
* docs(verify-openhands): map maintenance 2026-10-13 by @enyst in https://github.com/OpenHands/OpenHands/pull/18399
* docs(verify-openhands): map the automation setup page as F28 by @DevinVinson in https://github.com/OpenHands/OpenHands/pull/18452
* docs(verify-openhands): map maintenance 2026-10-14 by @enyst in https://github.com/OpenHands/OpenHands/pull/18437
* docs(verify-openhands): map maintenance 2026-10-15 by @enyst in https://github.com/OpenHands/OpenHands/pull/18477
* docs(verify-openhands): backfill all existing open bugs by @enyst in https://github.com/OpenHands/OpenHands/pull/18334
* docs(verify-openhands): map maintenance 2026-10-16 by @enyst in https://github.com/OpenHands/OpenHands/pull/18545
* docs(verify): use existing OpenHands profiles for critic checks by @smolpaws in https://github.com/OpenHands/OpenHands/pull/18611
* docs(verify-openhands): map maintenance 2026-10-17 by @enyst in https://github.com/OpenHands/OpenHands/pull/18590
* docs(verify-openhands): map maintenance 2026-10-19 by @enyst in https://github.com/OpenHands/OpenHands/pull/18658
### Maintenance
* chore(lint): remove redundant text-medium color exception by @enyst in https://github.com/OpenHands/OpenHands/pull/18320
* chore: remove dead code by @VascoSch92 in https://github.com/OpenHands/OpenHands/pull/18417
* refactor(mars): mount the web bridge by default; drop the MARS_WEB=1 opt-in by @sk09-dev in https://github.com/OpenHands/OpenHands/pull/18349
* refactor(conversation): remove unreachable overview drawer sections by @VascoSch92 in https://github.com/OpenHands/OpenHands/pull/18406
* chore: bump agent-server to 1.55.0 by @all-hands-bot in https://github.com/OpenHands/OpenHands/pull/18485
* chore: defer PR artifact cleanup until after merge to main by @enyst in https://github.com/OpenHands/OpenHands/pull/18469
* chore(lint): remove context color spec bookkeeping by @enyst in https://github.com/OpenHands/OpenHands/pull/18499
* chore: bump agent-server to 1.55.1 by @all-hands-bot in https://github.com/OpenHands/OpenHands/pull/18500
* refactor(theme): apply semantic colors to connection banners by @enyst in https://github.com/OpenHands/OpenHands/pull/18493
* ci: reject temporary artifacts in release PRs by @enyst in https://github.com/OpenHands/OpenHands/pull/18497
* chore: remove merged PR artifacts by @all-hands-bot in https://github.com/OpenHands/OpenHands/pull/18300
* test(e2e): bound and diagnose sidebar modified-click tab waits by @enyst in https://github.com/OpenHands/OpenHands/pull/18364
* chore: remove merged PR artifacts by @all-hands-bot in https://github.com/OpenHands/OpenHands/pull/18561
* refactor(theme): use semantic file chooser colors by @enyst in https://github.com/OpenHands/OpenHands/pull/18532
* ci: isolate verify-skill changes from implementation PRs by @smolpaws in https://github.com/OpenHands/OpenHands/pull/18458
* chore(lint): report palette colors hidden in audited class maps by @enyst in https://github.com/OpenHands/OpenHands/pull/18643
* refactor(backends): express chooser slides with static utilities by @enyst in https://github.com/OpenHands/OpenHands/pull/18642
* refactor(theme): use status classes for icons and diff counts by @enyst in https://github.com/OpenHands/OpenHands/pull/18641
* chore: bump automation to 1.21.0 by @malhotra5 in https://github.com/OpenHands/OpenHands/pull/18647

## New Contributors
* @analisaperlengkapan made their first contribution in https://github.com/OpenHands/OpenHands/pull/18067
* @sk09-dev made their first contribution in https://github.com/OpenHands/OpenHands/pull/18349
* @adminypc made their first contribution in https://github.com/OpenHands/OpenHands/pull/18159

**Full Changelog**: https://github.com/OpenHands/OpenHands/compare/v1.27.1...v1.28.0

---
This PR was generated with [Release Please](https://github.com/googleapis/release-please). See [documentation](https://github.com/googleapis/release-please#release-please).

<!-- AGENT_CANVAS_DOCKER_START -->

---

> **Source** [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) · `v1.28.0` · 2026-10-19 · [upstream release](https://github.com/OpenHands/OpenHands/releases/tag/v1.28.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
