---
title: "cherry-studio v2.2.1"
project: "cherry-studio"
repo: "CherryHQ/cherry-studio"
tag: "v2.2.1"
version: "v2.2.1"
published: "2026-11-12"
type: "patch"
lang: "en"
summary: "Release Notes"
---

# cherry-studio v2.2.1

## Downloads (v2.2.1)

| Platform | Architecture | Download |
| --- | --- | --- |
| Windows | x64 | [Installer](https://github.com/CherryHQ/cherry-studio/releases/download/v2.2.1/Cherry-Studio-2.2.1-win-x64-setup.exe) · [Portable](https://github.com/CherryHQ/cherry-studio/releases/download/v2.2.1/Cherry-Studio-2.2.1-win-x64-portable.exe) |
| Windows | arm64 | [Installer](https://github.com/CherryHQ/cherry-studio/releases/download/v2.2.1/Cherry-Studio-2.2.1-win-arm64-setup.exe) · [Portable](https://github.com/CherryHQ/cherry-studio/releases/download/v2.2.1/Cherry-Studio-2.2.1-win-arm64-portable.exe) |
| macOS | Apple silicon (arm64) | [DMG](https://github.com/CherryHQ/cherry-studio/releases/download/v2.2.1/Cherry-Studio-2.2.1-mac-arm64.dmg) · [ZIP](https://github.com/CherryHQ/cherry-studio/releases/download/v2.2.1/Cherry-Studio-2.2.1-mac-arm64.zip) |
| macOS | Intel (x64) | [DMG](https://github.com/CherryHQ/cherry-studio/releases/download/v2.2.1/Cherry-Studio-2.2.1-mac-x64.dmg) · [ZIP](https://github.com/CherryHQ/cherry-studio/releases/download/v2.2.1/Cherry-Studio-2.2.1-mac-x64.zip) |
| Linux | x64 | [AppImage](https://github.com/CherryHQ/cherry-studio/releases/download/v2.2.1/Cherry-Studio-2.2.1-linux-x64.AppImage) · [DEB](https://github.com/CherryHQ/cherry-studio/releases/download/v2.2.1/Cherry-Studio-2.2.1-linux-x64.deb) · [RPM](https://github.com/CherryHQ/cherry-studio/releases/download/v2.2.1/Cherry-Studio-2.2.1-linux-x64.rpm) |
| Linux | arm64 | [AppImage](https://github.com/CherryHQ/cherry-studio/releases/download/v2.2.1/Cherry-Studio-2.2.1-linux-arm64.AppImage) · [DEB](https://github.com/CherryHQ/cherry-studio/releases/download/v2.2.1/Cherry-Studio-2.2.1-linux-arm64.deb) · [RPM](https://github.com/CherryHQ/cherry-studio/releases/download/v2.2.1/Cherry-Studio-2.2.1-linux-arm64.rpm) |

<details>
<summary>Release Notes</summary>

Cherry Studio 2.2.1 - Remote Tasks, Search Providers, and Agent Fixes

✨ New Features
- [Tasks] Remote clients can discover scheduled-task result conversations and query task schedules, run history, and bounded summaries. Task conversations remain discoverable after run records are cleaned up.
- [Models] Rapid-MLX is available as a built-in, keyless local provider.
- [Web Search] Added SerpKite and StepFun keyword search providers, and Exa can now fetch the content of a URL through its Contents API.
- [Files] Dropping a Markdown file (.md, .markdown, .mdx) onto the app window opens it in the read-only preview.
- [Agent] System and global package installs now ask for approval in normal modes and run in Full Access, instead of being blocked in every mode.
- [Agent] Agents and assistants can use an uploaded image as their avatar, shown in catalogs, selectors, conversations, message headers, and Work tab icons. Existing emoji avatars are unchanged.
- [Agent] Workspace and agent groups can be pinned to the top Pinned section while their tasks stay expandable.
- [Agent] Computer Use calls show the applications they operated, and session details show the same app icons.
- [Agent] Subagent calls can name both a provider and a model, and the subtask row shows the requested model.
- [Composer] With Markdown input rendering enabled, Markdown is previewed live while typing in Chat, Agent, and the selection compose bar; markers appear when the caret reaches them and the sent text is unchanged.
- [Composer] In the Markdown preview, selected text can be made bold, italic, or inline code with Cmd/Ctrl+B, Cmd/Ctrl+I, and a backtick.
- [Composer] In the Markdown preview, fenced code blocks render as a highlighted code region, with Enter inserting a newline, Tab indenting, automatic bracket pairing, and variables or shortcuts staying literal inside the fence.
- [Browser] New tabs in the built-in browser can start from a blank page, the last opened page, or a custom URL.
- [Knowledge] OpenDocument (.odt, .odp, .ods) and RTF (.rtf) files can be added as knowledge sources.
- [API Gateway] CherryAI subscription models are available to external clients and Code Mate through the gateway using the signed-in account's quota.

💄 Improvements
- [Agent] Pi and Pi Durable use their runtimes' native compaction and keep provider error details.
- [Agent] Session details list the applications an agent is controlling, with their status and a Stop action.
- [Chat] The branch map locates the active branch node and can be panned on scroll.
- [Models] The reasoning-effort slider follows dragging smoothly, settles onto effort levels, and respects reduced-motion settings.
- [Models] Truncated model names in the model selector show the full name on hover, and the model details card no longer clips them.
- [Scheduled Tasks] Anchor navigation stays aligned while history loads, and failed run summaries show error details in a tooltip.
- [Files] File lists and grids show each file's source path in the name tooltip so same-name files can be distinguished.
- [Prompt Polish] Shows the default model with a link to its settings and distinguishes timeouts, missing models, empty responses, and provider failures.
- [Feedback] Attaching diagnostics to a problem report is now optional.
- [macOS] The DMG installer has a new background and a larger, centered drag-to-Applications layout.
- [Assistant] The English default assistant is now named "Cherie".
- [UI] Expanded notification stacks no longer clip their shadows.

🐛 Bug Fixes
- [Agent] Nested shell, file, and artifact tool results in Pi and Pi Durable codemode are shown again, including after reopening a conversation.
- [Agent] Pi shell commands without an explicit timeout no longer wait indefinitely.
- [Agent] Closing a session interrupts Claude work first, and interrupted Claude Code turns no longer show a "No response requested." placeholder.
- [Agent] Fork and Edit & Resend work after a /compact boundary, and fork no longer rejects a healthy Claude session with blank framing lines.
- [Agent] The Step panel no longer shows a finished turn as running, and tasks deleted by the agent leave the list.
- [Agent] The Agent top bar keeps the workspace name and open-directory action after the first message.
- [Agent] Subagent output and the main agent's continuation appear in the correct order in the open conversation.
- [Agent] Goals complete when the verifying model wraps its verdict in a code block or extra text.
- [Agent] Agent message edit failures show complete, persistent explanations with copyable diagnostics.
- [Agent] The context usage panel shows configured MCP server names instead of IDs.
- [Agent] Cross-agent session cards name the target agent.
- [Agent] Assistant replies in Work conversations no longer offer Delete, because deleting them cannot remove the runtime transcript.
- [Agent] Editing a message asks for confirmation before replacing later conversation history.
- [Agent] Markdown artifacts can be previewed from an Agent conversation even when the workspace is empty.
- [Agent] Work tab icons update when the agent avatar changes while the tab is hidden.
- [Chat] Links in sent messages can be selected smoothly, without accidental navigation.
- [Chat] Editing a message no longer drops characters typed right after clicking Edit.
- [Chat] An error saved twice in older messages now shows one error card.
- [Chat] Empty or malformed API responses show a clear diagnosis with retry guidance instead of an unknown error.
- [Chat] The "message is still syncing" branch-switch warning is localized.
- [Notes] Code syntax highlighting no longer disappears in the editor.
- [Shortcuts] Conversation number shortcuts keep working after the first switch without refocusing the window.
- [Browser] Page-load failures use a generic message instead of suggesting that a local server stopped.
- [Mini Apps] Website MiniApp sign-in popups stay in their persistent session.
- [Knowledge] Failed knowledge items show the failure reason, and empty extraction messages are localized.
- [Scheduled Tasks] Cron timeouts work with Gemini-compatible runtimes, and deleting a task with more than about 32,000 sessions no longer fails.
- [Providers] Requests no longer fail when a client tool has a blank name.
- [Claude] Claude Code creates its runtime folder before staging a download, so installs no longer fail on a missing folder.
- [Paintings] SiliconFlow MOSS Image requests no longer fail when no image size is selected.
- [Code] Codex CLI keeps the selected model's context window and compaction limit when its configuration is rebuilt.
- [UI] Agent Session Details no longer crowds its content or overlaps the file preview.

⚡ Performance
- [Agent] Branch switching and message editing are faster in long sessions.

</details>

## What's Changed
* fix(ci): cancel closed PR runs and superseded manual validation by @kangfenmao in https://github.com/CherryHQ/cherry-studio/pull/23993
* feat(agent-runtime-acp): add stable v1 runtime adapter by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/23996
* feat(browser): open a configurable start page in the built-in browser by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/23961
* feat(knowledge): accept OpenDocument and RTF files by @404-Page-Found in https://github.com/CherryHQ/cherry-studio/pull/24010
* fix(agent-session): confirm before replacing edited history by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/23990
* fix(grok-cli): resolve version file through path registry by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/24014
* feat(agent): show desktop control state in session details by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/23959
* hotfix(agent-details): persist shared card visibility by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24023
* test(e2e-regression): retain cross-platform verified coverage by @kangfenmao in https://github.com/CherryHQ/cherry-studio/pull/23723
* fix(release): backport hotfixes before the first draft by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24029
* hotfix(agent-runtime-claude-code): keep Claude Code login readable on macOS by @SiinXu in https://github.com/CherryHQ/cherry-studio/pull/24030
* hotfix(cherry-cloud): keep checking for notifications after a 404 by @SiinXu in https://github.com/CherryHQ/cherry-studio/pull/24035
* fix(agent-session): stop usage owners from retaining finished turns by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/24009
* hotfix(cherry-cloud): show subscription notifications in the notification center by @SiinXu in https://github.com/CherryHQ/cherry-studio/pull/24036
* fix(code-cli): write the Codex context window from the selected model by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/24016
* fix(error-category): recognize empty or malformed API responses by @ZKunZhang in https://github.com/CherryHQ/cherry-studio/pull/24033
* hotfix(workspace-ui): align styling and stabilize desktop interactions by @kangfenmao in https://github.com/CherryHQ/cherry-studio/pull/24041
* hotfix(api-gateway): preserve caller context in single-step SDK forwarding by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24037
* feat(feedback): make diagnostic attachments optional in the problem report by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/24069
* fix(agent-session): name the target Agent on cross-Agent session_create cards by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/24079
* perf(ci): parallelize validation and reduce workflow latency by @1lck in https://github.com/CherryHQ/cherry-studio/pull/24080
* feat(web-search): add Exa URL fetching through the Contents API by @NatsUIJM in https://github.com/CherryHQ/cherry-studio/pull/24077
* chore: version packages by @github-actions[bot] in https://github.com/CherryHQ/cherry-studio/pull/24082
* fix(agent-fork): skip blank framing lines in Claude native history by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/24062
* fix(e2e-regression): restore highlighting and repair desktop checks by @kangfenmao in https://github.com/CherryHQ/cherry-studio/pull/24078
* hotfix(dialog-ui): restore close animations and editor layouts by @kangfenmao in https://github.com/CherryHQ/cherry-studio/pull/24081
* fix(agent-chat): hide delete for assistant replies in Work conversations by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/24093
* fix(agent-session): chunk session id lists below the SQLite variable limit by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/24094
* fix(pi-runtime): extract the goal verdict from fenced or prefixed model text by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/24026
* fix(pi-durable): flush pending child output before saving a continuation by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/24025
* fix(files): show source path for same-name rows by @SiinXu in https://github.com/CherryHQ/cherry-studio/pull/19499
* hotfix(settings): reorganize built-in tools and language settings by @kangfenmao in https://github.com/CherryHQ/cherry-studio/pull/24099
* hotfix(pi-runtime): enable PowerShell tools on Windows by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24113
* fix(agent-session): pin message tree queries to the parent index by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/24103
* hotfix(pi-subagent): default Pi subagent permissions to bypass by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24124
* hotfix(navigation): restore sidebar settings and correct session details tooltip by @kangfenmao in https://github.com/CherryHQ/cherry-studio/pull/24123
* Keep MiniApp OAuth popups in their persistent session by @404-Page-Found with @Copilot in https://github.com/CherryHQ/cherry-studio/pull/24092
* fix(claude-code): drop synthetic CLI turn-closer instead of rendering it as a reply by @404-Page-Found in https://github.com/CherryHQ/cherry-studio/pull/20816
* fix(prompt-polish): surface model identity and distinct failures by @SiinXu in https://github.com/CherryHQ/cherry-studio/pull/20772
* fix(conversation-shortcuts): preserve continuous number-key navigation by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24133
* fix(agent-artifact): open Markdown artifacts from chat when the system workspace is empty by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/22920
* feat(message-flow): locate the active branch node and pan on scroll by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/22933
* fix(agent-chat): preserve complete edit failure diagnostics by @ZKunZhang in https://github.com/CherryHQ/cherry-studio/pull/24134
* fix(toast): keep expanded stack shadows inside the scroll padding by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/24141
* fix(agent-tabs): synchronize hidden tab avatars by @ZKunZhang in https://github.com/CherryHQ/cherry-studio/pull/24139
* feat(mac-installer): give the DMG window a custom background and layout by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/24147
* refactor(ipc): remove dead legacy IPC channels by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/24158
* refactor(file-storage): remove unregistered legacy FileStorage methods by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/24157
* fix(cron): advertise a Gemini-compatible timeout schema by @ZKunZhang in https://github.com/CherryHQ/cherry-studio/pull/24156
* refactor(remote-access): drop cross-phase IpcApiService dependency by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/24153
* fix(silicon-image): default missing MOSS image size by @ZKunZhang in https://github.com/CherryHQ/cherry-studio/pull/24137
* chore(release): sync v2.2.0 metadata by @kangfenmao in https://github.com/CherryHQ/cherry-studio/pull/24135
* feat(i18n): name the English default assistant "Cherie" by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/24164
* test(openai-responses): cover textless stream events by @404-Page-Found with @Copilot in https://github.com/CherryHQ/cherry-studio/pull/24106
* refactor(temporary-chat): move temporary topic routes from DataApi to IpcApi by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/24101
* docs(composer): propose Markdown live preview Spec by @EurFelux in https://github.com/CherryHQ/cherry-studio/pull/23898
* feat(composer): keep one paragraph per source line by @EurFelux in https://github.com/CherryHQ/cherry-studio/pull/24055
* feat(composer): render Markdown as live preview decorations by @EurFelux in https://github.com/CherryHQ/cherry-studio/pull/24056
* feat(composer): edit fenced code blocks in the Markdown preview by @EurFelux in https://github.com/CherryHQ/cherry-studio/pull/24057
* feat(composer): keep fenced Markdown code literal by @EurFelux in https://github.com/CherryHQ/cherry-studio/pull/24058
* feat(composer): toggle Markdown styles on a selection by @EurFelux in https://github.com/CherryHQ/cherry-studio/pull/24059
* chore(agent-runtime): upgrade Pi and Pi Durable to 1.5.2 by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24187
* feat(agent-sessions): pin workspace and agent groups by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24197
* fix(cherry-cloud): credit Subscribe clicks made under the avatar dot by @SiinXu in https://github.com/CherryHQ/cherry-studio/pull/24190
* fix(agent-context): resolve MCP server display names by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24198
* feat(assistant): upload an image avatar for assistants by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/23773
* feat(agent): upload an image avatar for agents by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/23788
* perf(ci-validation): reduce runner usage and skip unrelated platform jobs by @kangfenmao in https://github.com/CherryHQ/cherry-studio/pull/24132
* test(test-quality): remove low-signal behavior-pinning tests by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24204
* fix(code-highlight): drop worker replies when the response channel is gone by @404-Page-Found in https://github.com/CherryHQ/cherry-studio/pull/24208
* feat(subagent): show the requested model and resolve provider-qualified names by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/24182
* feat(api-gateway): expose CherryAI subscription models by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24225
* test(pi-durable): allow subagent integration turn to settle by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24229
* fix(knowledge-indexing): show a failed item's reason and localize empty extraction by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/24185
* fix(scroll-area): separate scroll boundaries from content spacing by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24226
* chore: version packages by @github-actions[bot] in https://github.com/CherryHQ/cherry-studio/pull/24231
* feat(computer-use): display apps through client presentation data by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24138
* fix(agent-session): render the main agent's continuation after a sub-agent returns by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/24228
* feat(web-search): add StepFun keyword search provider by @404-Page-Found in https://github.com/CherryHQ/cherry-studio/pull/24181
* fix(claude-code): create the runtime root before staging a download by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/24191
* fix(chat): show one card for an error part persisted twice by @SiinXu in https://github.com/CherryHQ/cherry-studio/pull/24172
* chore: version packages by @github-actions[bot] in https://github.com/CherryHQ/cherry-studio/pull/24232
* chore(package-licenses): standardize public libraries on MIT by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24234
* feat(web-search): add SerpKite search provider by @Nolikzero in https://github.com/CherryHQ/cherry-studio/pull/21426
* fix(agent): keep the workspace identity in the Agent top bar after the first message by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/24227
* fix(agent): stop the Step panel from showing a finished turn as running by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/24240
* fix(api-gateway): drop blank client tool names before the provider request by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/24196
* fix(composer): keep keystrokes typed right after starting a message edit by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/24194
* feat(agent): let users approve system and global package installs by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/24195
* feat(file-preview): open a dropped Markdown file in the read-only preview by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/24201
* docs(chat): document ordinary-chat context defaults and windowless compaction by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/24202
* fix(model-selector): surface a clipped model name through a tooltip by @1lck in https://github.com/CherryHQ/cherry-studio/pull/24264
* fix(model-speed-control): smooth reasoning slider feedback by @1lck in https://github.com/CherryHQ/cherry-studio/pull/24272
* feat(provider-registry): add Rapid-MLX as a local provider by @raullenchai in https://github.com/CherryHQ/cherry-studio/pull/23363
* test(e2e-regression): free the duplicated MP-152 case id by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/24256
* fix(chat-write-actions): localize the still-syncing branch toast by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/24271
* fix(claude-code): restore fork and edit-resend after a /compact boundary by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/24253
* fix(webview): use generic browser load failure copy by @ZKunZhang in https://github.com/CherryHQ/cherry-studio/pull/24273
* docs(websearch): state the scope of "Prefer model-native web tools" by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/24243
* fix(scheduled-tasks): center anchor rails and show error tooltips by @kangfenmao in https://github.com/CherryHQ/cherry-studio/pull/24290
* refactor(renderer-boundary): keep hooks from importing components by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/24311
* fix(agent-session): interrupt Claude work before closing sessions by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24310
* fix(markdown): keep className parsing runtime-safe and restore array-rewrite coverage by @404-Page-Found in https://github.com/CherryHQ/cherry-studio/pull/24206
* perf(usage-budget-notification): sum today's tokens instead of running full usage stats by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/24301
* fix(composer): allow smooth text selection in sent links by @1lck in https://github.com/CherryHQ/cherry-studio/pull/24314
* fix(pi-shell): default Pi and Durable shell calls to a native timeout by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24317
* docs(agent-compaction): propose native runtime ownership by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24289
* fix(pi-artifacts): preserve nested declarations from native history by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24318
* fix(agent-runtime): use native compaction and preserve provider errors by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24305
* fix(pi-runtime): preserve nested codemode tool results and rendering by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24322
* docs(remote-task-api): define task queries and result discovery by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24298
* feat(remote-task-api): expose tasks and restore result discovery by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24299
* fix(release): backport #24326 to v2.2.1 by @kangfenmao in https://github.com/CherryHQ/cherry-studio/pull/24327

## New Contributors
* @Nolikzero made their first contribution in https://github.com/CherryHQ/cherry-studio/pull/21426
* @raullenchai made their first contribution in https://github.com/CherryHQ/cherry-studio/pull/23363

**Full Changelog**: https://github.com/CherryHQ/cherry-studio/compare/v2.2.0...v2.2.1

---

> **Source** [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) · `v2.2.1` · 2026-11-12 · [upstream release](https://github.com/CherryHQ/cherry-studio/releases/tag/v2.2.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
