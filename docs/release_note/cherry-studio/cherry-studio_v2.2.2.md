---
title: "cherry-studio v2.2.2"
project: "cherry-studio"
repo: "CherryHQ/cherry-studio"
tag: "v2.2.2"
version: "v2.2.2"
published: "2026-11-13"
type: "patch"
lang: "en"
summary: "Cherry Studio 2.2.2 - Agent Approvals, Provider Fixes, and Polish"
---

# cherry-studio v2.2.2

## Downloads (v2.2.2)

| Platform | Architecture | Download |
| --- | --- | --- |
| Windows | x64 | [Installer](https://github.com/CherryHQ/cherry-studio/releases/download/v2.2.2/Cherry-Studio-2.2.2-win-x64-setup.exe) · [Portable](https://github.com/CherryHQ/cherry-studio/releases/download/v2.2.2/Cherry-Studio-2.2.2-win-x64-portable.exe) |
| Windows | arm64 | [Installer](https://github.com/CherryHQ/cherry-studio/releases/download/v2.2.2/Cherry-Studio-2.2.2-win-arm64-setup.exe) · [Portable](https://github.com/CherryHQ/cherry-studio/releases/download/v2.2.2/Cherry-Studio-2.2.2-win-arm64-portable.exe) |
| macOS | Apple silicon (arm64) | [DMG](https://github.com/CherryHQ/cherry-studio/releases/download/v2.2.2/Cherry-Studio-2.2.2-mac-arm64.dmg) · [ZIP](https://github.com/CherryHQ/cherry-studio/releases/download/v2.2.2/Cherry-Studio-2.2.2-mac-arm64.zip) |
| macOS | Intel (x64) | [DMG](https://github.com/CherryHQ/cherry-studio/releases/download/v2.2.2/Cherry-Studio-2.2.2-mac-x64.dmg) · [ZIP](https://github.com/CherryHQ/cherry-studio/releases/download/v2.2.2/Cherry-Studio-2.2.2-mac-x64.zip) |
| Linux | x64 | [AppImage](https://github.com/CherryHQ/cherry-studio/releases/download/v2.2.2/Cherry-Studio-2.2.2-linux-x64.AppImage) · [DEB](https://github.com/CherryHQ/cherry-studio/releases/download/v2.2.2/Cherry-Studio-2.2.2-linux-x64.deb) · [RPM](https://github.com/CherryHQ/cherry-studio/releases/download/v2.2.2/Cherry-Studio-2.2.2-linux-x64.rpm) |
| Linux | arm64 | [AppImage](https://github.com/CherryHQ/cherry-studio/releases/download/v2.2.2/Cherry-Studio-2.2.2-linux-arm64.AppImage) · [DEB](https://github.com/CherryHQ/cherry-studio/releases/download/v2.2.2/Cherry-Studio-2.2.2-linux-arm64.deb) · [RPM](https://github.com/CherryHQ/cherry-studio/releases/download/v2.2.2/Cherry-Studio-2.2.2-linux-arm64.rpm) |

<details>
<summary>Release Notes</summary>

Cherry Studio 2.2.2 - Agent Approvals, Provider Fixes, and Polish

✨ New Features
- [Computer Use] Computer Use is now on by default and asks before accessing each app. Choose Always, Approve for session, or Reject, and manage saved approvals in Settings. Bypass mode skips these prompts without saving permissions. (action required: turn it off in Settings if you do not want it.)
- [Skills] Added an "Export skills to external agents" switch in Settings → Skills. It is off by default for new installations, so the shared skills directory is no longer created without an explicit opt-in; installations that already exported keep it on, and turning it off removes only the links Cherry Studio created.
- [Agent] Agents on DeepSeek models now show a short intent line above each tool call. Agent sessions keep tool steps expanded by default and fold repeated calls of the same kind.
- [App] Added Polish language support.

💄 Improvements
- [MCP] QVeris now supports OAuth browser sign-in as its primary credential, with QVERIS_API_KEY as an optional fallback, so it can be enabled without an API key.
- [Files] File sizes use one consistent format across the app.
- [Agent] Polished session details typography, icon alignment, spacing, and the no-workspace placeholder.

🐛 Bug Fixes
- [Models] CherryIN Claude Sonnet 4.5 tool requests no longer fail with a Bedrock parameter validation error.
- [Models] Claude Opus 5.5 requests on AWS Bedrock now use adaptive reasoning.
- [Models] SiliconFlow uses manual API key entry; the obsolete OAuth login was removed (action required if you signed in with OAuth).
- [Chat] "Input exceeds the context limit" errors are now recognized as context-length rejections, so the existing recovery guidance appears.
- [Chat] Local Markdown file links now open from chat surfaces that do not provide an artifact preview.
- [Chat] Fixed the first composer toolbar activation being lost while loading, and internal tab navigation no longer blocks interaction.
- [Agent] Fixed the missing AskUserQuestion card when a streamed approval request arrives before its tool source.
- [Agent] Fixed the Skip button getting stuck on the final AskUserQuestion when all questions are skipped.
- [Agent] Expanding a Pi Durable read tool call no longer shows blank file details.
- [Agent] Pi Durable agents now automatically load workspace instruction files such as AGENTS.md.
- [Agent] Ordinary MCP tools are discoverable through tool search in the Pi Durable runtime instead of returning "No matching tools found."
- [Agent] Agent tool guidance now treats deferred tools as available through discovery and uses the exact tool names from the session, so agents stop reporting available tools as missing.
- [Agent] When reasoning exhausts the response budget, you now get accurate output-token-limit guidance, and DeepSeek V4.1 Flash capacity resolves correctly for versioned model IDs.
- [API Gateway] Claude Code MCP ToolSearch results are no longer dropped for third-party models.
- [Code] Code Mate's Unified Gateway model picker now lists Cherry Cloud models that are available only to agents.
- [Doctor] Doctor no longer reports a missing API key or an unavailable model list for CherryAI and Cherry Cloud; for Cherry Cloud it now tells you when you need to sign in.
- [UI] Website favicons stay visible in dark mode with a soft light-gray backplate while keeping their original colors.
- [Updater] Release notes in the update dialog now follow the app's resolved language, including when the app follows the system language.

</details>

## What's Changed
* fix(package-release): clear executable mode on table package manifest by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24324
* chore: version packages by @github-actions[bot] in https://github.com/CherryHQ/cherry-studio/pull/24325
* hotfix(message-parts): fix report artifact provenance fixture by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24326
* fix(siliconflow): remove obsolete OAuth login by @kangfenmao in https://github.com/CherryHQ/cherry-studio/pull/24288
* fix(pi-durable): load workspace instructions by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24330
* feat(skills): add an app-wide switch for exporting skills to external agents by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/24242
* fix(pi-durable): preserve output truncation and DeepSeek token limits by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24343
* chore(release): sync v2.2.1 metadata by @kangfenmao in https://github.com/CherryHQ/cherry-studio/pull/24340
* fix(release): sync GitCode releases through Tencent COS on Ubuntu by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24345
* fix(errors): classify context limit rejections by @ZKunZhang in https://github.com/CherryHQ/cherry-studio/pull/24316
* fix(cherryin): omit eager tool streaming for Sonnet 4.5 by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24349
* chore: version packages by @github-actions[bot] in https://github.com/CherryHQ/cherry-studio/pull/24351
* fix(markdown): open local file links in chat by @ZKunZhang in https://github.com/CherryHQ/cherry-studio/pull/24321
* fix(i18n): block literal toast text in the hardcoded-string gate by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/24275
* revert(release): undo Tencent COS GitCode sync (#24345) by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24353
* Add a Markdown outline to agent workspace previews by @404-Page-Found with @Copilot in https://github.com/CherryHQ/cherry-studio/pull/23267
* Route Claude Opus 5.5 Bedrock requests through adaptive reasoning by @404-Page-Found with @Copilot in https://github.com/CherryHQ/cherry-studio/pull/23402
* ci(e2e): run the full regression suite daily on main by @cherry-qa[bot] in https://github.com/CherryHQ/cherry-studio/pull/24335
* test(e2e-regression): align controller gates with scheduled runs by @kangfenmao in https://github.com/CherryHQ/cherry-studio/pull/24375
* fix(agent-details): polish session details typography and alignment by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24356
* chore: version packages by @github-actions[bot] in https://github.com/CherryHQ/cherry-studio/pull/24367
* ci(release): store build outputs directly in Tencent COS by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24386
* fix(pi-durable): render read tool details by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24396
* docs(agent-notes): propose tool call intent for DeepSeek agents by @1lck in https://github.com/CherryHQ/cherry-studio/pull/24307
* feat(agent-messages): show DeepSeek agent tool call intents by @1lck in https://github.com/CherryHQ/cherry-studio/pull/24308
* fix(pi-durable-mcp): defer ordinary MCP tools so tool search can find them by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/24399
* fix(ask-user-question): dismiss fully skipped requests by @bluefateludi in https://github.com/CherryHQ/cherry-studio/pull/24376
* fix(agents): resolve tool names per runtime in the packaged tool guide by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/24413
* fix(updater): localize release notes with the resolved app language by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/24412
* chore(deps): drop mime-types in favor of mime by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/24417
* ci(release): sync GitCode attachments through Shanghai SCF by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24418
* refactor(renderer-utils): consolidate byte-size formatting into formatFileSize by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/24415
* added Polish language by @walec51 in https://github.com/CherryHQ/cherry-studio/pull/24255
* fix(api-gateway): preserve Claude Code tool search matches by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24421
* fix(code-cli): offer agent-granted Cherry Cloud models in Code Mate by @SiinXu in https://github.com/CherryHQ/cherry-studio/pull/24428
* fix(doctor): stop false key/model failures for Cherry providers by @SiinXu in https://github.com/CherryHQ/cherry-studio/pull/24423
* docs(release-build): specify packaging performance optimization by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24398
* ci(release-build): separate compilation and reuse Windows local store by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24403
* ci(release-build): share verified edition bundles across platforms by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24404
* ci(release-build): parallelize hosted architecture packaging by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24405
* ci(release-build): validate shared bundles and reduce cache overhead by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24409
* docs(computer-use): propose remembered app approval by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24355
* feat(computer-use): require remembered per-app approval by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/24407
* fix(e2e-regression): repair desktop failures and support combined runs by @kangfenmao in https://github.com/CherryHQ/cherry-studio/pull/24383
* fix(mcp): prefer OAuth sign-in for QVeris with API-key fallback by @linfangw in https://github.com/CherryHQ/cherry-studio/pull/24430
* fix(favicon): keep website logos visible in dark mode by @1lck in https://github.com/CherryHQ/cherry-studio/pull/24441
* fix(agent-session): retain approval input when the tool source is missing by @NatsUIJM in https://github.com/CherryHQ/cherry-studio/pull/24337

## New Contributors
* @bluefateludi made their first contribution in https://github.com/CherryHQ/cherry-studio/pull/24376
* @walec51 made their first contribution in https://github.com/CherryHQ/cherry-studio/pull/24255

**Full Changelog**: https://github.com/CherryHQ/cherry-studio/compare/v2.2.1...v2.2.2

---

> **Source** [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) · `v2.2.2` · 2026-11-13 · [upstream release](https://github.com/CherryHQ/cherry-studio/releases/tag/v2.2.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
