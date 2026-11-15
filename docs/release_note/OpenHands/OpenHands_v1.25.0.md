---
title: "OpenHands v1.25.0"
project: "OpenHands"
repo: "OpenHands/OpenHands"
tag: "v1.25.0"
version: "v1.25.0"
published: "2026-10-06"
type: "minor"
lang: "en"
summary: "feat: outline the back navigation control on settings sub-pages · feat(settings): bulk-add provider models as LLM profiles · feat: add direct-prompt Model Router settings"
---

# OpenHands v1.25.0

## 1.25.0 (2026-10-06)

<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### Features
* feat: outline the back navigation control on settings sub-pages by @errmakov in https://github.com/OpenHands/OpenHands/pull/17587
* feat(settings): bulk-add provider models as LLM profiles by @georgeglarson in https://github.com/OpenHands/OpenHands/pull/16426
* feat: add direct-prompt Model Router settings by @juanmichelini in https://github.com/OpenHands/OpenHands/pull/16147
* feat(canvas): retire streaming slots by event id and delete the text-matching reconciler by @VascoSch92 in https://github.com/OpenHands/OpenHands/pull/17465
* feat(apps): add Update action for installed Canvas Apps by @VascoSch92 in https://github.com/OpenHands/OpenHands/pull/17736
* feat(settings): per-connection bulk-add LLM profiles by @juanmichelini in https://github.com/OpenHands/OpenHands/pull/17723
* feat: add Model Router "Run at conversation start" toggle by @juanmichelini in https://github.com/OpenHands/OpenHands/pull/17797
* feat(automations): show templates on cloud backends and offer native git integrations by @hieptl in https://github.com/OpenHands/OpenHands/pull/17830
* feat(chat): add optional voice dictation to the chat input by @VascoSch92 in https://github.com/OpenHands/OpenHands/pull/17804
* feat(automations): filter the automations dashboard by creator by @henriquehirako in https://github.com/OpenHands/OpenHands/pull/17814
* feat: auto-enable 'Run on first message' when the first router is created by @juanmichelini in https://github.com/OpenHands/OpenHands/pull/17840
* feat(conversation): give the drawer tab strip real tab semantics by @errmakov in https://github.com/OpenHands/OpenHands/pull/17612
* feat(canvas): render a canvas extension's manifest-declared SVG icon by @VascoSch92 in https://github.com/OpenHands/OpenHands/pull/17877
* feat(automations): offer the built-in integration before issue-to-PR templates by @hieptl in https://github.com/OpenHands/OpenHands/pull/17868
* feat(agent-profiles): pick every tool from the server's catalog; pin SDK 1.53.0 by @simonrosenberg in https://github.com/OpenHands/OpenHands/pull/17516
* feat(agent-profiles): give a profile its own persona or extra instructions by @simonrosenberg in https://github.com/OpenHands/OpenHands/pull/17843
* feat(files): configure workspace file discovery by @kr1shna-exe in https://github.com/OpenHands/OpenHands/pull/17869
### Bug Fixes
* fix(frontend): keep plugins search usable on narrow screens by @FOWEPJF255 in https://github.com/OpenHands/OpenHands/pull/17592
* fix(frontend): promote compact token counts to the next unit when rounding reaches it by @shinji00222 in https://github.com/OpenHands/OpenHands/pull/17469
* fix(model-selector): correct misspelled perplexity provider key by @Harsh23Kashyap in https://github.com/OpenHands/OpenHands/pull/17464
* fix: detect Dockerfile language from directory-qualified paths by @jabrailkhalil in https://github.com/OpenHands/OpenHands/pull/17152
* fix(chat): make long /btw responses scrollable by @KXHXK in https://github.com/OpenHands/OpenHands/pull/16116
* fix(tests): give the LLMModel fixtures the fields the type now requires by @simonrosenberg in https://github.com/OpenHands/OpenHands/pull/17750
* fix: keep local session keys off externally reachable listeners by @neubig in https://github.com/OpenHands/OpenHands/pull/17007
* fix: preserve canonical LLM settings during onboarding by @neubig in https://github.com/OpenHands/OpenHands/pull/17211
* fix(frontend): show progress while onboarding starts a chat by @neubig in https://github.com/OpenHands/OpenHands/pull/17212
* fix(canvas): respect scoped runtime clients and workspace capabilities by @neubig in https://github.com/OpenHands/OpenHands/pull/17387
* fix: title generation uses the same LLM as the running agent profile by @juanmichelini in https://github.com/OpenHands/OpenHands/pull/16886
* fix: preselect router classifier model so it is created when no profiles exist by @juanmichelini in https://github.com/OpenHands/OpenHands/pull/17835
* fix: consume consent-aware website PostHog handoff by @malhotra5 in https://github.com/OpenHands/OpenHands/pull/16976
* fix(child-conversations): link Cloud children to Agent Canvas by @lilagrc in https://github.com/OpenHands/OpenHands/pull/17842
* fix(automations): page the list by offset so Load more works past 100 by @henriquehirako in https://github.com/OpenHands/OpenHands/pull/17839
* fix(router): complete Flash template prompt and inject model table by @juanmichelini in https://github.com/OpenHands/OpenHands/pull/17860
* fix: back off and stop refetch-on-focus bursts that trip cloud rate limits by @tofarr in https://github.com/OpenHands/OpenHands/pull/17984
* fix(websocket): reconnect on foreground, disconnect cleanly on mobile background by @tofarr in https://github.com/OpenHands/OpenHands/pull/17982
* fix: block hidden Canvas settings pages when locked to a Cloud host by @hieptl in https://github.com/OpenHands/OpenHands/pull/17866
* fix(automations): hide agent profiles for preset actions by @qingshungLI in https://github.com/OpenHands/OpenHands/pull/17971
* fix: provide runtime services to named agent profiles by @simonrosenberg in https://github.com/OpenHands/OpenHands/pull/17279
* fix(frontend):  preserve saved prompt suffix for inline and profile launches by @Harsh23Kashyap in https://github.com/OpenHands/OpenHands/pull/17719
* fix(settings): keep the Agent Canvas update dialog inside phone viewports by @enyst in https://github.com/OpenHands/OpenHands/pull/18008
* fix(agent-profiles): save task_tracker with delegation tools (workaround for SDK#5519) by @simonrosenberg in https://github.com/OpenHands/OpenHands/pull/18001
* fix(a11y): one Settings main landmark, Customize aria-current, synced html lang by @enyst in https://github.com/OpenHands/OpenHands/pull/18012
* fix(settings): keep "Don't create profiles" for router templates by @awss1i in https://github.com/OpenHands/OpenHands/pull/18020
* fix(conversations): treat a null batch entry as not found, not an invalid response by @enyst in https://github.com/OpenHands/OpenHands/pull/18009
* fix(settings): use theme contrast ink for Model Router list text by @enyst in https://github.com/OpenHands/OpenHands/pull/18013
* fix(chat): keep the composer overflow menu open at narrow widths by @enyst in https://github.com/OpenHands/OpenHands/pull/18015
* fix(automations): make the delete confirmation a modal dialog that closes on Escape by @enyst in https://github.com/OpenHands/OpenHands/pull/18011
* fix(llm-profiles): keep the auto-filled profile name following the model by @enyst in https://github.com/OpenHands/OpenHands/pull/18017
* fix(skills): pre-fill the Home composer from Use skill and Create Automation by @enyst in https://github.com/OpenHands/OpenHands/pull/18016
* fix(chat): keep the message text in the composer after "Branch from here" by @enyst in https://github.com/OpenHands/OpenHands/pull/18014
### Documentation
* docs(review): require authentic frontend evidence by @neubig in https://github.com/OpenHands/OpenHands/pull/17638
* docs: define valid live review evidence by @neubig in https://github.com/OpenHands/OpenHands/pull/17726
* docs: multiple docker sandboxes by @enyst in https://github.com/OpenHands/OpenHands/pull/17769
* docs: document cross-repository version compatibility by @nicolasdmolina in https://github.com/OpenHands/OpenHands/pull/16884
* docs(codereview): require design docs for deep, high-risk PRs by @smolpaws in https://github.com/OpenHands/OpenHands/pull/17267
* docs: encourage .pr/ HTML design doc + htmlpreview link for non-trivial PRs by @smolpaws in https://github.com/OpenHands/OpenHands/pull/16316
* docs: clarify Canvas triage and review evidence boundaries by @neubig in https://github.com/OpenHands/OpenHands/pull/17990
### Maintenance
* test: complete LLM model fixtures by @neubig in https://github.com/OpenHands/OpenHands/pull/17729
* chore(deps): bump the react group with 4 updates by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/17756
* chore(deps): bump the i18next group with 3 updates by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/17755
* ci(deps): bump actions/checkout from 4 to 7 in the actions group by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/17752
* chore(deps): bump the tanstack group with 2 updates by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/17754
* chore(deps): bump tailwind-merge from 3.6.0 to 3.7.0 in the tailwind group by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/17753
* chore(deps-dev): bump @types/node from 26.1.2 to 26.2.0 in the types group across 1 directory by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/16648
* chore(deps): bump httpxy from 0.5.3 to 0.5.5 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/16649
* chore(deps-dev): bump electron from 42.3.3 to 43.3.0 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/16650
* chore(deps): bump the react-router group across 1 directory with 6 updates by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/16465
* chore(deps): bump posthog-js from 1.380.0 to 1.415.0 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/16651
* refactor: rename default model routers to OpenHands Router Pro / Flash by @juanmichelini in https://github.com/OpenHands/OpenHands/pull/17782
* chore: remove gpt-5.2-codex from agent-canvas model router prompts by @juanmichelini in https://github.com/OpenHands/OpenHands/pull/17811
* refactor(agent-settings): remove the unreachable non-embedded mode by @simonrosenberg in https://github.com/OpenHands/OpenHands/pull/17825
* chore: bump typescript client and agent server to 1.50.1 by @malhotra5 in https://github.com/OpenHands/OpenHands/pull/17831
* chore: consume Extensions 0.26.0 and Automation 1.17.0 by @hieptl in https://github.com/OpenHands/OpenHands/pull/17850
* chore(lint): reject unknown Tailwind classes with verified theme loading by @smolpaws in https://github.com/OpenHands/OpenHands/pull/17644
* chore(lint): require static classes on Canvas UI components by @enyst in https://github.com/OpenHands/OpenHands/pull/17916
* chore(deps): upgrade shadcn lint to 0.2.0 by @enyst in https://github.com/OpenHands/OpenHands/pull/17987
* chore(deps): remove unused socket.io-client by @enyst in https://github.com/OpenHands/OpenHands/pull/17989
* chore: consume Extensions 0.27.0 by @henriquehirako in https://github.com/OpenHands/OpenHands/pull/17870
* chore: replace remaining Node 22 runtime pins by @enyst in https://github.com/OpenHands/OpenHands/pull/17997
* test(catalog): remove upstream data mirrors by @kr1shna-exe in https://github.com/OpenHands/OpenHands/pull/17855
* chore: bump automation to 1.19.0 and @openhands/extensions to 0.29.0 by @malhotra5 in https://github.com/OpenHands/OpenHands/pull/17998
* refactor: split conversation-panel tests by behavioral responsibility by @wcy12378 in https://github.com/OpenHands/OpenHands/pull/17614

## New Contributors
* @FOWEPJF255 made their first contribution in https://github.com/OpenHands/OpenHands/pull/17592
* @shinji00222 made their first contribution in https://github.com/OpenHands/OpenHands/pull/17469
* @jabrailkhalil made their first contribution in https://github.com/OpenHands/OpenHands/pull/17152
* @henriquehirako made their first contribution in https://github.com/OpenHands/OpenHands/pull/17839
* @nicolasdmolina made their first contribution in https://github.com/OpenHands/OpenHands/pull/16884
* @qingshungLI made their first contribution in https://github.com/OpenHands/OpenHands/pull/17971
* @kr1shna-exe made their first contribution in https://github.com/OpenHands/OpenHands/pull/17869
* @wcy12378 made their first contribution in https://github.com/OpenHands/OpenHands/pull/17614
* @awss1i made their first contribution in https://github.com/OpenHands/OpenHands/pull/18020

**Full Changelog**: https://github.com/OpenHands/OpenHands/compare/v1.24.0...v1.25.0

---
This PR was generated with [Release Please](https://github.com/googleapis/release-please). See [documentation](https://github.com/googleapis/release-please#release-please).
<!-- AGENT_CANVAS_DOCKER_START -->

---

> **Source** [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) · `v1.25.0` · 2026-10-06 · [upstream release](https://github.com/OpenHands/OpenHands/releases/tag/v1.25.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
