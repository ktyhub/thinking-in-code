---
title: "cherry-studio v2.1.10"
project: "cherry-studio"
repo: "CherryHQ/cherry-studio"
tag: "v2.1.10"
version: "v2.1.10"
published: "2026-10-31"
type: "patch"
lang: "en"
summary: "Cherry Studio 2.1.10 - File Comments, Touch Reorder, and Update Timeline"
---

# cherry-studio v2.1.10

## Downloads (v2.1.10)

| Platform | Architecture | Download |
| --- | --- | --- |
| Windows | x64 | [Installer](https://github.com/CherryHQ/cherry-studio/releases/download/v2.1.10/Cherry-Studio-2.1.10-win-x64-setup.exe) · [Portable](https://github.com/CherryHQ/cherry-studio/releases/download/v2.1.10/Cherry-Studio-2.1.10-win-x64-portable.exe) |
| Windows | arm64 | [Installer](https://github.com/CherryHQ/cherry-studio/releases/download/v2.1.10/Cherry-Studio-2.1.10-win-arm64-setup.exe) · [Portable](https://github.com/CherryHQ/cherry-studio/releases/download/v2.1.10/Cherry-Studio-2.1.10-win-arm64-portable.exe) |
| macOS | Apple silicon (arm64) | [DMG](https://github.com/CherryHQ/cherry-studio/releases/download/v2.1.10/Cherry-Studio-2.1.10-mac-arm64.dmg) · [ZIP](https://github.com/CherryHQ/cherry-studio/releases/download/v2.1.10/Cherry-Studio-2.1.10-mac-arm64.zip) |
| macOS | Intel (x64) | [DMG](https://github.com/CherryHQ/cherry-studio/releases/download/v2.1.10/Cherry-Studio-2.1.10-mac-x64.dmg) · [ZIP](https://github.com/CherryHQ/cherry-studio/releases/download/v2.1.10/Cherry-Studio-2.1.10-mac-x64.zip) |
| Linux | x64 | [AppImage](https://github.com/CherryHQ/cherry-studio/releases/download/v2.1.10/Cherry-Studio-2.1.10-linux-x64.AppImage) · [DEB](https://github.com/CherryHQ/cherry-studio/releases/download/v2.1.10/Cherry-Studio-2.1.10-linux-x64.deb) · [RPM](https://github.com/CherryHQ/cherry-studio/releases/download/v2.1.10/Cherry-Studio-2.1.10-linux-x64.rpm) |
| Linux | arm64 | [AppImage](https://github.com/CherryHQ/cherry-studio/releases/download/v2.1.10/Cherry-Studio-2.1.10-linux-arm64.AppImage) · [DEB](https://github.com/CherryHQ/cherry-studio/releases/download/v2.1.10/Cherry-Studio-2.1.10-linux-arm64.deb) · [RPM](https://github.com/CherryHQ/cherry-studio/releases/download/v2.1.10/Cherry-Studio-2.1.10-linux-arm64.rpm) |

<details>
<summary>Release Notes</summary>

Cherry Studio 2.1.10 - File Comments, Touch Reorder, and Update Timeline

✨ New Features
- [Agent Files] Comment on files for the agent. In a text file, hover a line and click '+' (or drag across several lines) to write a comment. In Word, Excel, PDF and PowerPoint files, pick a part and click Comment. Each comment is added to the message as a chip with its location.
- [Updates] View skipped stable-version release notes in a collapsible timeline; single-version updates show their notes directly. Markdown footnote navigation now works correctly with backlinks.
- [Proxy] Test proxy connection in General Settings before saving, with support for PAC proxy/direct fallback reporting.
- [Touch] Reorder lists by pressing and holding a row. Buttons inside a row no longer start a drag. Selection Assistant settings now show enabled and disabled actions in one list separated by a divider.

🐛 Bug Fixes
- [Chat] The message list no longer jumps back to the first message while scrolling a conversation that contains code blocks.
- [Agents] Existing conversations resume correctly after moving the data directory, preserving their history.
- [Local Dictation] Fix local speech recognition silently losing the second half of long utterances.
- [Streaming] Fix missing or duplicated response text when stream replay overlaps incoming output.
- [Composer] Option descriptions in question panels are no longer truncated.
- [Right Panel] The browser sidebar no longer opens unexpectedly when creating or switching Agent tasks.
- [Code Block] Diagram preview toolbars are no longer clipped. Mermaid, Graphviz, SVG, LaTeX, and ECharts previews blend into the message background.
- [Knowledge] File conversion progress starts from 0% and updates immediately instead of every 5 seconds.
- [Conversation List] Recent conversations no longer sort to the bottom after midnight.
- [MiMo] Fix MiMo models returning “Unsupported model” errors.

⚡ Performance
- [Code Blocks] Reduce unnecessary rendering work while scrolling conversations with code blocks.

</details>

## What's Changed
* fix(move-to-trash): refuse protected paths behind ..-prefixed segments and macOS case variants by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/23115
* fix(ui): align tailwind-merge and lucide-react with the app by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/23120
* refactor(path-containment): collapse duplicated main-process containment predicates by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/23116
* hotfix(aihubmix): omit tool input examples on the Anthropic route by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/22364
* fix(account-menu): unify account actions and feedback access by @kangfenmao in https://github.com/CherryHQ/cherry-studio/pull/23043
* fix: accept sparse OpenAI response lifecycle events by @Dante-dan in https://github.com/CherryHQ/cherry-studio/pull/20323
* feat(external-app): discover system file handlers and native icons by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/23127
* fix(pi-runtime): preserve Google signatures across connection identities by @frangled123 in https://github.com/CherryHQ/cherry-studio/pull/23124
* fix(browser): preserve address submission while find is open by @ousugo in https://github.com/CherryHQ/cherry-studio/pull/23132
* fix(import): preserve context in flat Claude exports by @ousugo in https://github.com/CherryHQ/cherry-studio/pull/23130
* perf(chat-messages): scope tool part lookups to their own message by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/23121
* docs(file-processing): propose a FileProcessing-owned task model by @EurFelux in https://github.com/CherryHQ/cherry-studio/pull/22996
* fix(claude-code): show the runtime check only when it takes longer than 200ms by @EurFelux in https://github.com/CherryHQ/cherry-studio/pull/23159
* refactor(composer): move module-level code out of the composers by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/23152
* fix(agent-composer): roll back reasoning effort when saving fails by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/23148
* docs(sortable): propose backing Sortable with @dnd-kit/react by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/23147
* refactor(composer): share queued follow-up editing by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/23149
* fix(import): stop ChatGPT importer from hanging on cyclic parent pointers by @c020627 in https://github.com/CherryHQ/cherry-studio/pull/23150
* refactor(composer): share knowledge base draft sync by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/23151
* docs(tool-approval): state the external MCP per-call approval guarantees by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/23160
* fix(file-storage): fall back to permanent delete when trash is unavailable by @404-Page-Found with @Copilot in https://github.com/CherryHQ/cherry-studio/pull/23153
* Fix relative Agent artifact preview and open paths by @404-Page-Found with @Copilot in https://github.com/CherryHQ/cherry-studio/pull/23112
* chore(release): sync v2.1.9 metadata by @kangfenmao in https://github.com/CherryHQ/cherry-studio/pull/23175
* refactor(ui): back Sortable with @dnd-kit/react by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/23170
* feat(file-processing): give file processing its own task model by @EurFelux in https://github.com/CherryHQ/cherry-studio/pull/23161
* refactor(knowledge-ingestion): reach file processing only through its task API by @EurFelux in https://github.com/CherryHQ/cherry-studio/pull/23162
* perf(resource-list): refresh time grouping only when the day changes by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/23178
* refactor(icons): remove dead renderer icons and duplicate primitives by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/23177
* refactor(lifecycle): dispose owned emitters on destroy and forbid registering them by @EurFelux in https://github.com/CherryHQ/cherry-studio/pull/23176
* fix(code-block): align preview surfaces and toolbar spacing by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/23182
* feat(release-build): add opt-in incremental release builds by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/23134
* revert(release-build): remove incremental release build caching by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/23184
* fix(ai-stream): preserve output across replay handoff by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/22413
* feat(proxy): add connection test by @Dante-dan in https://github.com/CherryHQ/cherry-studio/pull/20487
* fix(right-panel): prevent browser sidebar opening on new tasks by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/23187
* fix(pi-runtime): preserve steering boundaries with Pi 1.4.0 by @MyPrototypeWhat in https://github.com/CherryHQ/cherry-studio/pull/21743
* fix(composer): wrap ask-question option descriptions instead of truncating by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/22995
* fix(agent-session): recover sessions after data directory relocation by @WhiteZeek in https://github.com/CherryHQ/cherry-studio/pull/21406
* fix(code-viewer): avoid layout-origin measurements on scroll by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/23218
* refactor(resource-list): share conversation list helpers by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/23203
* fix(e2e-regression): launch branch mode on its own inspector port by @cherry-qa[bot] in https://github.com/CherryHQ/cherry-studio/pull/23190
* feat(agent-file-pane): comment on files into the composer by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/23186
* docs(app-updater): specify aggregated upgrade release notes by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/23191
* feat(app-updater): show release notes across skipped versions by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/23213
* refactor(agent-runtime): introduce thread contracts and native harness adapters by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/21910
* fix(mimo): send the dotted model IDs the official API accepts by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/22768
* fix(local-asr): size FunASR Nano chunks to the decoder KV budget by @angri450 in https://github.com/CherryHQ/cherry-studio/pull/22607
* fix(code-viewer): keep the message list viewport when an expanded code viewer attaches by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/23198

## New Contributors
* @frangled123 made their first contribution in https://github.com/CherryHQ/cherry-studio/pull/23124

**Full Changelog**: https://github.com/CherryHQ/cherry-studio/compare/v2.1.9...v2.1.10

---

> **Source** [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) · `v2.1.10` · 2026-10-31 · [upstream release](https://github.com/CherryHQ/cherry-studio/releases/tag/v2.1.10)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
