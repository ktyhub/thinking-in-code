---
title: "cherry-studio v2.1.9"
project: "cherry-studio"
repo: "CherryHQ/cherry-studio"
tag: "v2.1.9"
version: "v2.1.9"
published: "2026-10-30"
type: "patch"
lang: "en"
summary: "Release Notes"
---

# cherry-studio v2.1.9

## Downloads (v2.1.9)

| Platform | Architecture | Download |
| --- | --- | --- |
| Windows | x64 | [Installer](https://github.com/CherryHQ/cherry-studio/releases/download/v2.1.9/Cherry-Studio-2.1.9-win-x64-setup.exe) · [Portable](https://github.com/CherryHQ/cherry-studio/releases/download/v2.1.9/Cherry-Studio-2.1.9-win-x64-portable.exe) |
| Windows | arm64 | [Installer](https://github.com/CherryHQ/cherry-studio/releases/download/v2.1.9/Cherry-Studio-2.1.9-win-arm64-setup.exe) · [Portable](https://github.com/CherryHQ/cherry-studio/releases/download/v2.1.9/Cherry-Studio-2.1.9-win-arm64-portable.exe) |
| macOS | Apple silicon (arm64) | [DMG](https://github.com/CherryHQ/cherry-studio/releases/download/v2.1.9/Cherry-Studio-2.1.9-mac-arm64.dmg) · [ZIP](https://github.com/CherryHQ/cherry-studio/releases/download/v2.1.9/Cherry-Studio-2.1.9-mac-arm64.zip) |
| macOS | Intel (x64) | [DMG](https://github.com/CherryHQ/cherry-studio/releases/download/v2.1.9/Cherry-Studio-2.1.9-mac-x64.dmg) · [ZIP](https://github.com/CherryHQ/cherry-studio/releases/download/v2.1.9/Cherry-Studio-2.1.9-mac-x64.zip) |
| Linux | x64 | [AppImage](https://github.com/CherryHQ/cherry-studio/releases/download/v2.1.9/Cherry-Studio-2.1.9-linux-x64.AppImage) · [DEB](https://github.com/CherryHQ/cherry-studio/releases/download/v2.1.9/Cherry-Studio-2.1.9-linux-x64.deb) · [RPM](https://github.com/CherryHQ/cherry-studio/releases/download/v2.1.9/Cherry-Studio-2.1.9-linux-x64.rpm) |
| Linux | arm64 | [AppImage](https://github.com/CherryHQ/cherry-studio/releases/download/v2.1.9/Cherry-Studio-2.1.9-linux-arm64.AppImage) · [DEB](https://github.com/CherryHQ/cherry-studio/releases/download/v2.1.9/Cherry-Studio-2.1.9-linux-arm64.deb) · [RPM](https://github.com/CherryHQ/cherry-studio/releases/download/v2.1.9/Cherry-Studio-2.1.9-linux-arm64.rpm) |

<details>
<summary>Release Notes</summary>

Cherry Studio 2.1.9 - Diagrams, File Pane, and Provider Updates

✨ New Features
- [Diagrams] Mermaid diagrams now render with a faster engine in the background, match the app's light/dark theme, and open as previews from .mmd/.mermaid files.
- [Agent Files] Open files in tabs with a breadcrumb, resize the tree, and configure autosave, indent, and word wrap in pane settings. Right-click to attach files or folders as context.
- [Agents] Archive all conversations of an Agent in one action, with a confirmation showing the count. Delete conversation branches from the Branch Management panel.
- [Web Search] Add Desearch and SearchApi as web search providers.
- [Providers] Add QwenCloud with chat, image, reasoning controls and native web search. Rebrand DashScope to Qwen AI Platform with updated endpoints and icons. Add Anthropic prompt caching support for Vercel AI Gateway.
- [Code Theme] New default “Cherry” code theme blends into the app background in light and dark mode.
- [Thinking] Edit a message's reasoning content directly in the assistant message editor.
- [Permissions] Enabling Full Access now shows a scope confirmation before taking effect.
- [Tabs] The active conversation tab has a clearer selected outline and slightly bolder title.
- [Notes] Open a newly saved note directly from the export success toast.

🐛 Bug Fixes
- [Tooltips] Fixed tooltips being cut off at the edge of dialogs, such as the help tooltips in the Selection Assistant custom action dialog.
- [Chat] Long silent reasoning phases no longer abort after 30 minutes; the idle bound is now 120 minutes. Fixed misleading error when an assistant's model no longer exists after an update.
- [Tabs] Show the conversation name and assistant icon on tabs again. New tabs open next to the active tab; the plus button appends at the end.
- [Navigation] Unified sidebar and tab selection style with clearer contrast in light and dark themes.
- [Notes] Fixed a freeze when typing a diagram code block. New diagram blocks open in edit mode.
- [Knowledge] Fixed rebuilds resetting chunking rules, imports timing out while waiting, interrupted conversions resuming after restart, and stuck “preparing” states.
- [Browser] Preserve unsaved input and page state when following fragment links in local HTML files.
- [File Links] Removed the hover reveal icon from chat file links; use the context menu to reveal a file.
- [Web Search] Fixed DashScope models failing with “This model does not support enable_search”. Blacklist rules now exclude domains on Bocha and Querit.
- [TTS] Kokoro Chinese text-to-speech now initializes correctly on Windows with the required Mandarin eSpeak data.
- [MCP] Fixed built-in MCP server documentation links that opened a removed page.
- [AiHubMix] Fix Claude chats failing with HTTP 400 when built-in tools include input examples.

⚡ Performance
- [Knowledge] Deleting or reindexing items in large knowledge bases is much faster.
- [Conversations] Fixed slow branch switching and message deletion in very long conversations. Loading earlier messages is faster.

</details>

## What's Changed
* fix(message-rules): drop duplicate tool parts sharing one id before replay by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/22532
* fix(html-artifact): stop the inline preview height from flipping on a fixed embed by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/22512
* feat(message-renderer): add an opt-in switch to keep intermediate assistant text in the response lane by @lianshuang-photo in https://github.com/CherryHQ/cherry-studio/pull/21086
* fix(file-preview): enable copying text from DOCX previews by @WhiteZeek in https://github.com/CherryHQ/cherry-studio/pull/22548
* feat(model-list): filter completely failed models by @Bruce-Yii in https://github.com/CherryHQ/cherry-studio/pull/21015
* feat(tool-permission): add plain-language risk summary to approval dialog by @404-Page-Found in https://github.com/CherryHQ/cherry-studio/pull/20444
* fix(knowledge): keep conversation save when a referenced file is missing by @gokay-ai in https://github.com/CherryHQ/cherry-studio/pull/20355
* chore: version packages by @github-actions[bot] in https://github.com/CherryHQ/cherry-studio/pull/22557
* fix(i18n): restore missing Italian tool risk translations by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/22558
* perf(code-highlight): unify Highlights and virtualize large code previews by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/22469
* fix(paintings): show quality and size controls for GPT Image 2.5 models by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/22515
* chore: version packages by @github-actions[bot] in https://github.com/CherryHQ/cherry-studio/pull/22561
* fix(agent-tools): render the navigate card in Agent sessions by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/22565
* docs: remove duplicated install step in development guide by @pei711 in https://github.com/CherryHQ/cherry-studio/pull/22573
* feat(composer): search skills and knowledge bases by metadata by @SiinXu in https://github.com/CherryHQ/cherry-studio/pull/22358
* feat(provider-registry): support Kimi K3.1 Pro models by @ousugo in https://github.com/CherryHQ/cherry-studio/pull/22575
* chore: version packages by @github-actions[bot] in https://github.com/CherryHQ/cherry-studio/pull/22590
* fix(tool-disclosure): restore scroll chaining at panel boundaries by @tommyzhang100504 in https://github.com/CherryHQ/cherry-studio/pull/22591
* fix(image-generation): honor a configurable submit timeout by @NatsUIJM in https://github.com/CherryHQ/cherry-studio/pull/22448
* fix: close small correctness gaps found in a code sweep by @angri450 in https://github.com/CherryHQ/cherry-studio/pull/22593
* perf(dialog): remove entrance scaling to avoid raster jank by @Wit-2k in https://github.com/CherryHQ/cherry-studio/pull/22597
* hotfix(file-edit): resolve the conflict when dismissing the edit-conflict dialog by @ousugo in https://github.com/CherryHQ/cherry-studio/pull/22617
* fix(voice): make maximum-length dictation recordings transcribe reliably by @angri450 in https://github.com/CherryHQ/cherry-studio/pull/22611
* fix(e2e-regression): honour CHERRY_CDP_PORT when launching in branch mode by @cherry-qa[bot] in https://github.com/CherryHQ/cherry-studio/pull/22619
* fix(api-gateway): never answer a failed generation with HTTP 2xx by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/22342
* feat(knowledge-ui): allow knowledge batch imports beyond 20 files by @EurFelux in https://github.com/CherryHQ/cherry-studio/pull/22089
* feat(knowledge-ingestion): copy imported sources outside the base lock by @EurFelux in https://github.com/CherryHQ/cherry-studio/pull/22090
* feat(knowledge-ingestion): let file items wait in preparing while copied in by @EurFelux in https://github.com/CherryHQ/cherry-studio/pull/22094
* fix(knowledge-ingestion): backfill embeddings from the in-base copy, one indexing job per leaf by @EurFelux in https://github.com/CherryHQ/cherry-studio/pull/22454
* test(e2e): add an opt-in in-job mock provider to the regression workflow by @cherry-qa[bot] in https://github.com/CherryHQ/cherry-studio/pull/22452
* fix(code-viewer): keep measured wrapped row heights across width changes by @tommyzhang100504 in https://github.com/CherryHQ/cherry-studio/pull/22639
* fix(import): make a failed conversation import side-effect free by @ousugo in https://github.com/CherryHQ/cherry-studio/pull/22642
* fix(error-category): stop diagnosing a rejected request body as invalid AI content by @404-Page-Found in https://github.com/CherryHQ/cherry-studio/pull/22638
* fix(updater): distinguish withheld feed from up-to-date result by @404-Page-Found in https://github.com/CherryHQ/cherry-studio/pull/20865
* fix(file-storage): parent legacy save dialogs to caller window to avoid Unicode filename crash by @404-Page-Found with @Copilot in https://github.com/CherryHQ/cherry-studio/pull/20778
* feat(knowledge-data-source): import a folder by drag-and-drop by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/22656
* fix(notes): bound generated note names and report the real rename outcome by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/22654
* feat(chat-files): surface a reveal action on chat file links by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/22646
* fix(renderer-styles): keep test files out of tailwind scanning by @sseymdoc in https://github.com/CherryHQ/cherry-studio/pull/22664
* fix(hooks): stop post-checkout hang on fresh worktrees by @404-Page-Found in https://github.com/CherryHQ/cherry-studio/pull/22627
* test(voice): assert scratch POSIX modes only where they are enforced by @angri450 in https://github.com/CherryHQ/cherry-studio/pull/22624
* fix(chat): validate local image bytes before model dispatch by @404-Page-Found in https://github.com/CherryHQ/cherry-studio/pull/22626
* hotfix(release): restore backport checkout and CI test cleanup by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/22671
* fix(agent-tools): report a platform limitation for to_markdown on Windows ARM64 by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/22635
* fix(claude-code): pin the sub-agent model on the gateway route by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/22649
* fix(e2e-regression): drive the macOS 27 native panel and decouple fixtures from locale by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/21866
* fix(mcp): launch the configured stdio command when lookup is denied by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/22598
* fix(webdav-backup): preserve upload size rejection guidance by @Dante-dan in https://github.com/CherryHQ/cherry-studio/pull/22685
* chore(release): sync v2.1.8 metadata by @kangfenmao in https://github.com/CherryHQ/cherry-studio/pull/22691
* feat(provider-registry): add the DeepSeek V4 Flash off switch by @JuLuogo in https://github.com/CherryHQ/cherry-studio/pull/22629
* feat(reasoning): allow editing a message's thinking content by @JuLuogo in https://github.com/CherryHQ/cherry-studio/pull/22628
* chore: version packages by @github-actions[bot] in https://github.com/CherryHQ/cherry-studio/pull/22692
* fix(web-search): send bare domains to Bocha and Querit site exclusion by @RaphaelFakhri in https://github.com/CherryHQ/cherry-studio/pull/22613
* fix(file-edit): preserve autosave drafts and unblock file operations by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/22687
* fix(proxy-settings): remove detailed proxy mode description by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/22701
* feat(agent-permission): confirm scope before enabling Full Access by @404-Page-Found in https://github.com/CherryHQ/cherry-studio/pull/20807
* fix(dashscope): send enable_search only to models that serve it by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/22719
* fix(i18n): point four renderer labels at keys the catalogs define by @mmporong in https://github.com/CherryHQ/cherry-studio/pull/22716
* chore: version packages by @github-actions[bot] in https://github.com/CherryHQ/cherry-studio/pull/22723
* fix(cherry-autonomy-tools): deny config mutations on headless turns in every runtime by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/21351
* feat(notes): open saved notes from success toast by @louisfy in https://github.com/CherryHQ/cherry-studio/pull/22720
* fix(streaming-markdown): release completed fade animations by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/22735
* fix(tabs): open new tabs next to the active tab by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/22733
* fix(tabs): append tabs opened from the plus button by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/22749
* refactor(async-coordination): drop duplicate queue and legacy async forwards by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/22762
* feat(provider-registry): add GPT-6.1 Terra support by @ousugo in https://github.com/CherryHQ/cherry-studio/pull/22711
* chore: version packages by @github-actions[bot] in https://github.com/CherryHQ/cherry-studio/pull/22777
* fix(mcp): accept extra fields in a legacy ping health result by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/22783
* refactor(browser-automation): remove tool adapters orphaned by #21704 by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/22776
* fix(renderer): handle stale assistant-bound model after update (#22571) by @404-Page-Found in https://github.com/CherryHQ/cherry-studio/pull/22765
* feat(agent-sessions): add session rename tool by @ousugo in https://github.com/CherryHQ/cherry-studio/pull/22796
* fix(web-search): preserve Querit page failures and scope the fetch probe by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/22793
* chore: version packages by @github-actions[bot] in https://github.com/CherryHQ/cherry-studio/pull/22814
* feat(web-search): add SearchApi search provider by @sgan0420 in https://github.com/CherryHQ/cherry-studio/pull/22599
* refactor(in-loop-compaction): cache the folded prefix token estimate by @xiong-wei1 in https://github.com/CherryHQ/cherry-studio/pull/22842
* fix(knowledge-ingestion): count the file-processing wait from the job's start by @EurFelux in https://github.com/CherryHQ/cherry-studio/pull/22636
* fix(knowledge-ingestion): cancel interrupted file conversions at restart instead of resuming them by @EurFelux in https://github.com/CherryHQ/cherry-studio/pull/22662
* refactor(knowledge-ingestion): check file-processing results when the job settles instead of polling by @EurFelux in https://github.com/CherryHQ/cherry-studio/pull/22657
* perf(code-highlight): unify Highlights and virtualize large code previews by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/22730
* chore: version packages by @github-actions[bot] in https://github.com/CherryHQ/cherry-studio/pull/22816
* fix(agent-tasks): broadcast task read-model changes after every committed write by @ousugo in https://github.com/CherryHQ/cherry-studio/pull/22874
* feat(knowledge): let agents create knowledge bases and batch-add sources by @angri450 in https://github.com/CherryHQ/cherry-studio/pull/22647
* perf(message-branch): page conversation history on path ids by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/22899
* perf(message-service): use parent_id index for the newest-leaf CTE by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/22903
* perf(knowledge-item): resolve batch selections and subtrees in bounded queries by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/22901
* refactor(message-tree): load the flow-canvas tree in one topic query by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/22898
* docs(selection-assistant): propose the agent window Spec by @EurFelux in https://github.com/CherryHQ/cherry-studio/pull/22827
* fix(docs): escape table cells in the generated documentation index by @c020627 in https://github.com/CherryHQ/cherry-studio/pull/22914
* fix(i18n): include attribute-bearing tags in the tag-placeholder check by @c020627 in https://github.com/CherryHQ/cherry-studio/pull/22913
* fix(pi-runtime): send Vercel AI Gateway OpenAI requests to /v1 by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/22916
* docs(code-theme): propose Cherry default code theme by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/22910
* feat(code-theme): add the Cherry default code theme by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/22911
* fix(archive): re-read the All list when the page is opened (#22712) by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/22943
* feat(settings-search): keep the query box open and focused after clearing it by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/22944
* fix(mcp): repoint built-in MCP setup links to the current docs page by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/22951
* fix(citation): keep dots in the knowledge-citation preview text by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/22955
* fix(api-gateway): parse empty Chat Completions tool-call arguments as {} by @jaeminbird in https://github.com/CherryHQ/cherry-studio/pull/22957
* fix(webview): freeze browser tabs hidden for five minutes by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/22950
* feat(browser): make the tool-driven browser panel auto-open configurable by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/22963
* fix(automation): scope assistant automation REPL guidance to enabled capabilities by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/22967
* fix(poe): route bots by the chat endpoint they declare by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/22969
* feat(paintings): labelled prompt preset entry with in-page management by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/22989
* fix(proxy): keep loopback traffic off the user proxy by @superbigcup325 in https://github.com/CherryHQ/cherry-studio/pull/21030
* fix(data-api): avoid overlapping timed-out reads by @Dante-dan in https://github.com/CherryHQ/cherry-studio/pull/20349
* fix(data-api): format timeout test imports by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/23010
* fix(renderer-styles): let message prose honor the configured global font by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/22953
* fix(profile-avatar): retire replaced image files by @focus-zyw in https://github.com/CherryHQ/cherry-studio/pull/21454
* fix(provider-settings): confirm copies in place instead of with a toast by @EurFelux in https://github.com/CherryHQ/cherry-studio/pull/23001
* feat(markdown): open knowledge-app URI schemes from message links by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/22994
* fix(pi-runtime): apply the persisted reasoning effort to Pi sessions by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/22997
* fix(conversation-surfaces): re-level the dark conversation surfaces by @kennyzheng-builds in https://github.com/CherryHQ/cherry-studio/pull/17538
* fix(provider): survive legacy order keys in the startup registry sync by @ggbdpq in https://github.com/CherryHQ/cherry-studio/pull/21284
* test(migration): make the v2 migration suite host-agnostic by @angri450 in https://github.com/CherryHQ/cherry-studio/pull/21775
* feat(web-search): sync DeepSeek API keys from the model provider by @EurFelux in https://github.com/CherryHQ/cherry-studio/pull/23000
* fix(import): import API-style Claude exports without silent message loss by @linxule in https://github.com/CherryHQ/cherry-studio/pull/18135
* feat(usage-analysis): restore full-window total breakdowns by @ning-jl in https://github.com/CherryHQ/cherry-studio/pull/20347
* fix(provider-registry): infer StepFun step-5-preview reasoning effort by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/21869
* revert(chat-files): remove inline reveal button by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/23019
* chore: version packages by @github-actions[bot] in https://github.com/CherryHQ/cherry-studio/pull/23017
* feat(skills): add enabled-only filter by @SiinXu in https://github.com/CherryHQ/cherry-studio/pull/19019
* fix(error-category): classify embedded runtime connection codes as network by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/22344
* fix(aiCore): stop the Azure chat-mode web search crash (provider.tools is undefined) by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/23014
* feat(provider): add QwenCloud provider by @GeorgeDong32 in https://github.com/CherryHQ/cherry-studio/pull/19810
* feat(provider): rebrand dashscope to Qwen AI Platform by @GeorgeDong32 in https://github.com/CherryHQ/cherry-studio/pull/19811
* fix(error-category): stop reading a Groq service-tier denial as quota exhaustion by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/22340
* fix(web-search): point the Yuanbao API key link at the live Tencent console by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/23042
* fix(binary-manager): pin bundled uv 0.13.6 and reject unmet explicit targets by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/23012
* chore: version packages by @github-actions[bot] in https://github.com/CherryHQ/cherry-studio/pull/23040
* refactor(ipc): retire legacy channels duplicated by IpcApi by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/23039
* fix(pi-runtime): upgrade Pi to 1.4.0 for Gemini thinking levels by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/23027
* feat(provider-gateway): add Anthropic prompt caching support for Vercel AI Gateway by @404-Page-Found in https://github.com/CherryHQ/cherry-studio/pull/22926
* fix(horizontal-scroll): avoid duplicate resize listeners by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/18941
* Fix Windows Kokoro initialization and add Mandarin eSpeak data by @404-Page-Found with @Copilot in https://github.com/CherryHQ/cherry-studio/pull/23020
* feat(web-search): add Desearch web search provider by @Chkhikvadze in https://github.com/CherryHQ/cherry-studio/pull/21987
* chore: version packages by @github-actions[bot] in https://github.com/CherryHQ/cherry-studio/pull/23053
* fix(packaging): declare macOS privacy usage descriptions and entitlements for local MCP servers by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/23051
* fix(knowledge): preserve chunking rules when restoring bases by @ousugo in https://github.com/CherryHQ/cherry-studio/pull/23063
* fix(fileProcessing): rotate API keys over distinct entries by @c020627 in https://github.com/CherryHQ/cherry-studio/pull/21434
* perf(backup): load S3, WebDAV, archiver, and cheerio on demand by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/23062
* feat(paintings): add Grok Imagine aspect-ratio controls for image editing by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/23050
* chore: version packages by @github-actions[bot] in https://github.com/CherryHQ/cherry-studio/pull/23069
* fix(tabs): restore conversation names as Chat and Work tab titles by @NatsUIJM in https://github.com/CherryHQ/cherry-studio/pull/22722
* perf(markdown): keep mermaid out of the default preset bundle by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/23079
* test(tabs): cover conversation titles in Electron e2e by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/23088
* feat(chat-branches): delete a conversation branch from Branch Management by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/23075
* feat(agent-file-pane): add file tabs, breadcrumb, and pane settings by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/23064
* fix(browser): preserve local HTML state during fragment navigation by @ousugo in https://github.com/CherryHQ/cherry-studio/pull/23058
* feat(tabs): make the active conversation tab visually distinct by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/23085
* fix(stream-manager): raise the chat turn parsed-chunk idle bound to 120 minutes by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/23073
* docs(path-containment): propose collapsing duplicated main-process containment predicates by @kovsu in https://github.com/CherryHQ/cherry-studio/pull/23057
* feat(mermaid): render diagrams with Merman in a worker and preview Mermaid files by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/23095
* fix(rich-editor): stop diagram code blocks from freezing the notes editor by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/23101
* fix(app-shell): unify navigation selection and contrast by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/23104
* fix(preview-tests): restore main CI fixture and resize readiness by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/23105
* feat(settings): show installed size in Environment Dependencies by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/23086
* feat(agents): archive all conversations of an Agent in one action by @cherry-coding[bot] in https://github.com/CherryHQ/cherry-studio/pull/23067
* fix(tooltip): portal dialog tooltips beside the dialog content by @EurFelux in https://github.com/CherryHQ/cherry-studio/pull/22992
* fix(aihubmix): backport #22364 to v2.1.9 by @DeJeune in https://github.com/CherryHQ/cherry-studio/pull/23123

## New Contributors
* @pei711 made their first contribution in https://github.com/CherryHQ/cherry-studio/pull/22573
* @Wit-2k made their first contribution in https://github.com/CherryHQ/cherry-studio/pull/22597
* @sseymdoc made their first contribution in https://github.com/CherryHQ/cherry-studio/pull/22664
* @JuLuogo made their first contribution in https://github.com/CherryHQ/cherry-studio/pull/22629
* @RaphaelFakhri made their first contribution in https://github.com/CherryHQ/cherry-studio/pull/22613
* @mmporong made their first contribution in https://github.com/CherryHQ/cherry-studio/pull/22716
* @sgan0420 made their first contribution in https://github.com/CherryHQ/cherry-studio/pull/22599
* @xiong-wei1 made their first contribution in https://github.com/CherryHQ/cherry-studio/pull/22842
* @jaeminbird made their first contribution in https://github.com/CherryHQ/cherry-studio/pull/22957
* @linxule made their first contribution in https://github.com/CherryHQ/cherry-studio/pull/18135
* @ning-jl made their first contribution in https://github.com/CherryHQ/cherry-studio/pull/20347
* @Chkhikvadze made their first contribution in https://github.com/CherryHQ/cherry-studio/pull/21987

**Full Changelog**: https://github.com/CherryHQ/cherry-studio/compare/v2.1.8...v2.1.9

---

> **Source** [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) · `v2.1.9` · 2026-10-30 · [upstream release](https://github.com/CherryHQ/cherry-studio/releases/tag/v2.1.9)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
