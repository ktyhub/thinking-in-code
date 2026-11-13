---
title: "OpenHands v1.35.0"
project: "OpenHands"
repo: "All-Hands-AI/OpenHands"
tag: "v1.35.0"
published: "2026-11-03"
type: "minor"
lang: "en"
---

# OpenHands v1.35.0

## 1.35.0 (2026-11-03)

<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### Features
* feat(home): remember and clear the cloud repository selection by @tofarr in https://github.com/OpenHands/OpenHands/pull/19053
* feat(automations): store picked Bitbucket Data Center repositories as clone URLs by @ak684 in https://github.com/OpenHands/OpenHands/pull/19023
* feat(automations): list each event source's own event types by @ak684 in https://github.com/OpenHands/OpenHands/pull/19025
* feat: persist workspace/repo metadata as server-side conversation tags by @BSmick6 in https://github.com/OpenHands/OpenHands/pull/16666
* feat(files): add a Download button to the Files tab (OHE-3834) by @hieptl in https://github.com/OpenHands/OpenHands/pull/19076
* feat(conversations): store sidebar pin/archive state in server-side tags by @neubig in https://github.com/OpenHands/OpenHands/pull/18697
* feat(sidebar): drag the sidebar edge to resize it by @ak684 in https://github.com/OpenHands/OpenHands/pull/19097
* feat(sidebar): make sidebar text one size larger by @ak684 in https://github.com/OpenHands/OpenHands/pull/19113
* feat(sidebar): group org rows in the backend picker and keep it inside the sidebar by @ak684 in https://github.com/OpenHands/OpenHands/pull/19102
* feat(automations): suggest the templates that match an instance's integrations by @ak684 in https://github.com/OpenHands/OpenHands/pull/19101
* feat(canvas): attribute local Cloud signup entries (ALL-5962) by @malhotra5 in https://github.com/OpenHands/OpenHands/pull/18874
* feat(chat): group hooks and reasoning with tool calls and say what each group did by @ak684 in https://github.com/OpenHands/OpenHands/pull/19084
* feat: open conversations immediately with inline startup progress by @ak684 in https://github.com/OpenHands/OpenHands/pull/19155
* feat: show live agent status in chat by @ak684 in https://github.com/OpenHands/OpenHands/pull/19130
* feat: show startup activity in sidebar conversation rows by @ak684 in https://github.com/OpenHands/OpenHands/pull/19190
* feat: load saved history without probing unavailable runtimes by @ak684 in https://github.com/OpenHands/OpenHands/pull/19194
* feat: keep startup and agent activity in one conversation group by @ak684 in https://github.com/OpenHands/OpenHands/pull/19211
* feat: reveal shared conversation titles during startup by @ak684 in https://github.com/OpenHands/OpenHands/pull/19209
* feat: show compact message timestamps on hover by @ak684 in https://github.com/OpenHands/OpenHands/pull/19227
* feat(automations): show and edit keep_alive on the automation detail page by @tofarr in https://github.com/OpenHands/OpenHands/pull/19125
* feat: show clear session startup and resume details by @ak684 in https://github.com/OpenHands/OpenHands/pull/19249
* feat: simplify single-tool group titles and disclosure by @ak684 in https://github.com/OpenHands/OpenHands/pull/19250
* feat: use sentence-style activity summaries by @ak684 in https://github.com/OpenHands/OpenHands/pull/19254
* feat: fold blocked hooks into activity groups by @ak684 in https://github.com/OpenHands/OpenHands/pull/19252
* feat(automations): add Events webhook sources view by @malhotra5 in https://github.com/OpenHands/OpenHands/pull/19034
* feat(mcp): send OHE members to Settings > MCP when organization MCP servers are on (OHE-3869) by @hieptl in https://github.com/OpenHands/OpenHands/pull/19267
### Bug Fixes
* fix(llm-profiles): show the server's reason when a profile delete is refused by @enyst in https://github.com/OpenHands/OpenHands/pull/19001
* fix(chat): keep the agent profile pill visible when no profile is selected (OHE-3793) by @hieptl in https://github.com/OpenHands/OpenHands/pull/19046
* fix(sidebar): name the launched agent profile in the conversation hover (OHE-3791) by @hieptl in https://github.com/OpenHands/OpenHands/pull/19045
* fix(home): hide non-git entries from the git provider dropdown (OHE-3776) by @hieptl in https://github.com/OpenHands/OpenHands/pull/19047
* fix(automations): describe the Event trigger without naming specific sources by @ak684 in https://github.com/OpenHands/OpenHands/pull/19029
* fix(apps): show app page names in browser tab titles by @neubig in https://github.com/OpenHands/OpenHands/pull/18558
* fix(chat): distinguish model-switch initiators and show agent rationale by @neubig in https://github.com/OpenHands/OpenHands/pull/18428
* fix(chat): keep a Home message pending until its cloud conversation is reachable (OHE-3605) by @hieptl in https://github.com/OpenHands/OpenHands/pull/19074
* fix(files): refresh the cloud file list and open files outside the workspace (OHE-3797) by @hieptl in https://github.com/OpenHands/OpenHands/pull/19072
* fix(automations): use the built-in providers as the fallback event source list by @ak684 in https://github.com/OpenHands/OpenHands/pull/19085
* fix(launcher): honor LAN opt-in and correct startup diagnostics by @enyst in https://github.com/OpenHands/OpenHands/pull/18363
* fix(git): keep Azure DevOps links on dev.azure.com whatever the host says by @VascoSch92 in https://github.com/OpenHands/OpenHands/pull/19087
* fix: improve mobile conversation touch targets by @niebloomj in https://github.com/OpenHands/OpenHands/pull/19095
* fix(acp): send the enabled catalog skills when launching an ACP profile by @simonrosenberg in https://github.com/OpenHands/OpenHands/pull/18834
* fix(chat): remove the emoji prefix and the ok badge from hook event titles by @ak684 in https://github.com/OpenHands/OpenHands/pull/19083
* fix(automations): preserve template filter scroll across empty results by @tanishqbaweja in https://github.com/OpenHands/OpenHands/pull/18936
* fix: suppress Run on first message after a home-page model pick (cloud + local) by @juanmichelini in https://github.com/OpenHands/OpenHands/pull/19042
* fix(home): stop the "Creating conversation…" toast from flashing on fast starts by @ak684 in https://github.com/OpenHands/OpenHands/pull/19137
* fix: display received replies without a reading-speed delay by @ak684 in https://github.com/OpenHands/OpenHands/pull/19145
* fix: show one error toast for failed context compaction by @ak684 in https://github.com/OpenHands/OpenHands/pull/19152
* fix: upload Cloud attachments to the runtime workspace by @ak684 in https://github.com/OpenHands/OpenHands/pull/19158
* fix: recover transient conversation failures without repeated errors by @ak684 in https://github.com/OpenHands/OpenHands/pull/19144
* fix: keep startup attachment delivery alive across navigation by @ak684 in https://github.com/OpenHands/OpenHands/pull/19159
* fix: resume paused sandboxes when sending another message by @ak684 in https://github.com/OpenHands/OpenHands/pull/19186
* fix: stabilize conversation startup layout and title handoff by @ak684 in https://github.com/OpenHands/OpenHands/pull/19202
* fix(git-sync): link Azure DevOps SSH remotes to their _git page by @enyst in https://github.com/OpenHands/OpenHands/pull/19078
* fix: keep connection recovery quiet by @ak684 in https://github.com/OpenHands/OpenHands/pull/19193
* fix: retry initial Cloud history failures before socket fallback by @ak684 in https://github.com/OpenHands/OpenHands/pull/19207
* fix: keep startup connection progress in one stable group by @ak684 in https://github.com/OpenHands/OpenHands/pull/19219
* fix(conversation): report a missing conversation once by @enyst in https://github.com/OpenHands/OpenHands/pull/19175
* fix: restore terminal output from saved conversation history by @ak684 in https://github.com/OpenHands/OpenHands/pull/19220
* fix: prevent history replay from flashing Thinking by @ak684 in https://github.com/OpenHands/OpenHands/pull/19225
* fix(launcher): fall back to a free frontend port when 3001 is taken by @VascoSch92 in https://github.com/OpenHands/OpenHands/pull/19230
* fix(conversation-card): open VS Code URL with noopener and http(s) only by @VascoSch92 in https://github.com/OpenHands/OpenHands/pull/19229
* fix(automations): keep an event trigger's destination when saving an edit by @enyst in https://github.com/OpenHands/OpenHands/pull/19239
* fix: avoid loading older history before the initial chat scroll by @ak684 in https://github.com/OpenHands/OpenHands/pull/19245
* fix(chat): keep the agent Stop control in the composer at phone width by @enyst in https://github.com/OpenHands/OpenHands/pull/19236
* fix(chat): show empty-state suggestions in the tab that started the conversation by @enyst in https://github.com/OpenHands/OpenHands/pull/19235
* fix(launcher): restart the ingress and static server when they exit by @VascoSch92 in https://github.com/OpenHands/OpenHands/pull/19256
* fix(automations): start the setup conversation from the Ask Agent button by @MindOfqc in https://github.com/OpenHands/OpenHands/pull/19093
### Performance
* perf: defer inactive panels when opening conversations by @ak684 in https://github.com/OpenHands/OpenHands/pull/19153
* perf: request compact Cloud conversation history by @ak684 in https://github.com/OpenHands/OpenHands/pull/19203
* perf: display saved Cloud history before runtime readiness by @ak684 in https://github.com/OpenHands/OpenHands/pull/19195
* perf: start conversation metadata loading on sidebar selection by @ak684 in https://github.com/OpenHands/OpenHands/pull/19205
* perf: avoid rebuilding unchanged conversation sidebar rows by @ak684 in https://github.com/OpenHands/OpenHands/pull/19213
* perf: prepare Cloud history and replay during conversation navigation by @ak684 in https://github.com/OpenHands/OpenHands/pull/19248
### Documentation
* docs(verify-openhands): map maintenance 2026-10-27 by @enyst in https://github.com/OpenHands/OpenHands/pull/19002
* docs(verify-openhands): map maintenance 2026-10-29 by @enyst in https://github.com/OpenHands/OpenHands/pull/19079
* docs(verify-openhands): map maintenance 2026-10-30 by @enyst in https://github.com/OpenHands/OpenHands/pull/19116
* docs(verify-openhands): describe the Suggested and More templates groups by @ak684 in https://github.com/OpenHands/OpenHands/pull/19123
* docs(verify-openhands): map maintenance 2026-10-31 by @enyst in https://github.com/OpenHands/OpenHands/pull/19148
* docs: verify live activity through its status semantics by @ak684 in https://github.com/OpenHands/OpenHands/pull/19189
* docs(verify-openhands): map maintenance 2026-11-01 by @enyst in https://github.com/OpenHands/OpenHands/pull/19171
* docs(verify-openhands): make count and uniqueness checks count by @enyst in https://github.com/OpenHands/OpenHands/pull/19182
* docs(verify-openhands): map maintenance 2026-11-02 by @enyst in https://github.com/OpenHands/OpenHands/pull/19238
* docs(verify): map Automation Events navigation separately by @malhotra5 in https://github.com/OpenHands/OpenHands/pull/19058
* docs(verify-openhands): map maintenance 2026-11-03 by @enyst in https://github.com/OpenHands/OpenHands/pull/19276
### Maintenance
* refactor(backends): name connection chooser recipes by @enyst in https://github.com/OpenHands/OpenHands/pull/18967
* chore: bump agent-server to 1.59.0 by @all-hands-bot in https://github.com/OpenHands/OpenHands/pull/19057
* chore: remove merged PR artifacts by @all-hands-bot in https://github.com/OpenHands/OpenHands/pull/19050
* refactor(home): name workspace picker layout recipes by @enyst in https://github.com/OpenHands/OpenHands/pull/19052
* refactor: name floating menu layers and icon strokes by @enyst in https://github.com/OpenHands/OpenHands/pull/19107
* chore(deps): run dependabot version updates daily by @all-hands-bot in https://github.com/OpenHands/OpenHands/pull/19096
* chore(deps): drop the deprecated boolean package from desktop packaging by @VascoSch92 in https://github.com/OpenHands/OpenHands/pull/19089
* refactor: name shared menu geometry and label recipes by @enyst in https://github.com/OpenHands/OpenHands/pull/19120
* refactor: name shared dialog viewport constraints by @enyst in https://github.com/OpenHands/OpenHands/pull/19161
* chore(lint): reject raw colors in three migrated owners by @enyst in https://github.com/OpenHands/OpenHands/pull/19163
* refactor: name compact metadata font sizes by @enyst in https://github.com/OpenHands/OpenHands/pull/19166
* refactor: use existing theme aliases in conversation UI by @enyst in https://github.com/OpenHands/OpenHands/pull/19216
* chore: remove merged PR artifacts by @all-hands-bot in https://github.com/OpenHands/OpenHands/pull/19111
* chore(deps): bump the react group across 1 directory with 2 updates by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19198
* ci(deps): bump docker/login-action from 4.6.0 to 4.7.0 in the actions group across 1 directory by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19200
* chore(deps): bump the i18next group across 1 directory with 4 updates by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19197
* chore(deps): bump ws and @types/ws by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/18361
* chore: remove merged PR artifacts by @all-hands-bot in https://github.com/OpenHands/OpenHands/pull/19270
* ci: add Windows npm-install E2E job by @VascoSch92 in https://github.com/OpenHands/OpenHands/pull/19246
* chore: remove merged PR artifacts by @all-hands-bot in https://github.com/OpenHands/OpenHands/pull/19282
* test: repair semantic feedback E2E assertions by @neubig in https://github.com/OpenHands/OpenHands/pull/18798
* chore: remove merged PR artifacts by @all-hands-bot in https://github.com/OpenHands/OpenHands/pull/19286

## New Contributors
* @BSmick6 made their first contribution in https://github.com/OpenHands/OpenHands/pull/16666
* @niebloomj made their first contribution in https://github.com/OpenHands/OpenHands/pull/19095
* @tanishqbaweja made their first contribution in https://github.com/OpenHands/OpenHands/pull/18936
* @MindOfqc made their first contribution in https://github.com/OpenHands/OpenHands/pull/19093

**Full Changelog**: https://github.com/OpenHands/OpenHands/compare/v1.34.0...v1.35.0

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

> **Source** [All-Hands-AI/OpenHands](https://github.com/All-Hands-AI/OpenHands) · `v1.35.0` · 2026-11-03 · [upstream release](https://github.com/OpenHands/OpenHands/releases/tag/v1.35.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
