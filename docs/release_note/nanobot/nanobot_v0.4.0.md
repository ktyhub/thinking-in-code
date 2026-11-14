---
title: "nanobot v0.4.0"
project: "nanobot"
repo: "HKUDS/nanobot"
tag: "v0.4.0"
version: "v0.4.0"
published: "2026-10-28"
type: "minor"
lang: "en"
summary: "🐈 nanobot v0.4.0 makes everyday work easier to continue — with durable conversation history, a more capable workbench, and a clearer path to the next update."
---

# nanobot v0.4.0

🐈 **nanobot `v0.4.0`** makes everyday work easier to continue — with durable conversation history, a more capable workbench, and a clearer path to the next update.

**Keep moving.** The gateway now stores model history and browser transcripts in SQLite, imports existing conversations, and coordinates updates around saved state. Stable and opt-in Preview releases share one update flow, with explicit confirmation before installation and restart.

The browser workbench is easier to navigate and connect: complete prompt-history navigation, remote instances, clearer delegated-task details, richer attachments, and more consistent mobile controls. The terminal gains Mermaid diagram viewing and target-specific native bundles. Both clients continue to use the same Python gateway.

This release also makes installation ownership explicit. Supported managed installations can update and recover the program through the app; other installations receive instructions for their original package manager or deployment. Recovery does not mean restoring an old copy of your chats. Please read the upgrade notes before replacing an existing installation.

## Highlights

- **One update flow, with your confirmation** — Check releases in Settings → About, choose whether to receive Preview updates, review the exact version, and confirm installation and restart. Supported official-installer and POSIX uv environments can use the in-app flow once the public release has verified approval proof.
- **Recovery that protects current data** — Installer-managed updates can attempt repair and, when safe, restore the original program and service. Configuration and conversations are not automatically replaced with an older backup. Installation owners outside that flow keep their own repair route.
- **Durable conversation history** — SQLite brings model history and WebUI display history under gateway ownership. Existing JSONL history is imported with source backups retained. Paging, live-output reconciliation, queued follow-ups and goal continuation receive reliability fixes.
- **A clearer browser workbench** — Navigate the full prompt history with bounded loading, search loaded messages and session handles, rename topics inline, and archive topics in batches. Delegated tasks have clearer run state and detail views.
- **Your workbench, on the right host** — Connect to existing remote instances with explicit host identity, pairing and reconnect feedback. Update instructions identify the gateway computer, rather than assuming it is the device displaying the page.
- **Richer files and a better small-screen experience** — Local-file and video attachments, image thumbnails, file cards, Markdown source views, reading-size controls, and touch and theme improvements. External websites open in the browser instead of an arbitrary embedded preview.
- **Diagrams in the terminal** — View, zoom, pan and copy Mermaid diagrams without leaving the conversation. Platform wheels contain the matching native TUI and built WebUI; supported wheel installations need neither Bun nor a first-launch TUI download.
- **More control over models and integrations** — Searchable providers, explicit API choices, per-preset request overrides, shared proxy choices, Linear and WhatsApp Agent Platform channels, QQ QR setup, and DeepSeek Search. Scheduled jobs can be edited, enabled and disabled in place, with recent runs available for inspection.
- **A fix for Windows idle memory growth** — Process-status polling now reuses native type and API bindings on Python versions before 3.14, while keeping live process checks and handle cleanup.

## Upgrade Notes

- **Distribution availability.** The verified v0.4.0 packages are available in this GitHub Release and on [PyPI](https://pypi.org/project/nanobot-ai/0.4.0/). In-app automatic installation is not enabled for this release yet: it requires verified release approval proof and the applicable public release sources. Publishing these files does not enroll users in Preview or start an update.
- **Upgrade v0.3.5 through its original installation method first.** That release does not contain this new in-app updater. Run the installer, package manager or container replacement on the gateway computer under its original OS account. Existing installations are not silently converted into official-installer environments. Follow the [installation-owner instructions](https://github.com/HKUDS/nanobot/blob/v0.4.0/docs/updating.md#installation-owners), including recorded extras, constraints and custom options.
- **Stop shared writers and back up the complete instance.** Finish active work, stop all nanobot processes using the environment or data, and back up the selected configuration directory and workspace together. Include authentication, sessions and WebUI state. Do not copy only a live SQLite database file. After upgrading, use the original launcher, check the running version, open older conversations, write a new message and verify another restart.
- **SQLite changes the downgrade procedure.** JSONL import remains available throughout 0.4.x; older JSONL-only installations must pass through an import-capable release before 0.5.0. Keep imported source backups and the old WebUI directory. Older versions cannot read new SQLite display history. A downgrade requires a stopped-writer backup-restoration procedure that accounts for messages created since the backup; it is not an automatic data rollback. See [Session Storage](https://github.com/HKUDS/nanobot/blob/v0.4.0/docs/cli-reference.md#session-storage).
- **An update can restart the gateway.** Confirming installation can interrupt running tasks. Turning Preview off saves the subscription but does not downgrade an installed Preview. Recovery cannot guarantee service restoration after permanent storage damage, incompatible data writes, or loss of both recovery processes. Missing or unverifiable public assets must not be treated as a successful install. See [Updating nanobot](https://github.com/HKUDS/nanobot/blob/v0.4.0/docs/updating.md).
- **Fresh official-installer instances stay in the background.** Their normal WebUI launcher starts a persistent instance. Closing the terminal or browser does not stop it; use `nanobot gateway stop` with the same configuration and workspace selectors. Existing unrecorded installations retain their original lifecycle. Local macOS WebUI sessions can show a Dock icon; `--no-dock` suppresses it.
- **Review migrated configuration before saving.** Legacy proxy conversion remains supported in 0.4.x. The old OpenAI `apiType` / `api_type` selector is converted to `api` in 0.4.0 and the immediately following release; save the current format during that window. See [Configuration](https://github.com/HKUDS/nanobot/blob/v0.4.0/docs/configuration.md).
- **Platform requirements remain explicit.** Python 3.11+ is required. Native wheels target macOS 13+ arm64/x64, glibc 2.17+ Linux arm64/x64, and Windows x64; x64 requires SSE4.2. Windows ARM64 and musl Linux do not have native wheels. Chinese terminal diagrams require suitable installed fonts: Heiti SC on macOS, Noto Sans CJK on Linux, or Microsoft YaHei on Windows. Diagram source remains accessible if rendering is unavailable.
- **Keep container data volumes and reconnect clients.** Replace the container through its deployment owner; do not upgrade packages inside a running container. Reconnect or reload WebUI/TUI clients after upgrading the intended gateway, and follow any client/host compatibility guidance shown.

## Community

Thank you to everyone who contributed code, reviewed changes, reported problems, supplied reproductions and tested nanobot in everyday use. Clear bug reports and useful use cases remain important contributions. We want the agent to stay small and inspectable while becoming easier to rely on for daily work.

## What's Changed

* docs: refresh README WebUI screenshots by @chengyongru in https://github.com/HKUDS/nanobot/pull/5789
* fix(tui): keep input responsive during agent output by @chengyongru in https://github.com/HKUDS/nanobot/pull/5791
* fix(cron): reject past one-time schedules in the cron tool by @FanouZeng-TT in https://github.com/HKUDS/nanobot/pull/5762
* fix(cron): reject conflicting schedule fields by @FanouZeng-TT in https://github.com/HKUDS/nanobot/pull/5766
* fix(memory): preserve full consolidation input by @dajiaohuang in https://github.com/HKUDS/nanobot/pull/5379
* fix(api): require boolean stream values by @FanouZeng-TT in https://github.com/HKUDS/nanobot/pull/5765
* fix(agent): serialize and batch per-session messages by @chengyongru in https://github.com/HKUDS/nanobot/pull/5792
* fix(channels): drop compaction notices on channels without an in-place affordance by @AlfredChaos in https://github.com/HKUDS/nanobot/pull/5799
* fix(webui): hide model details until AI setup is complete by @Re-bin in https://github.com/HKUDS/nanobot/pull/5802
* feat(discord): add replyToMessage parity with Telegram by @ZedingZhang in https://github.com/HKUDS/nanobot/pull/5800
* fix(webui): show all channels when only WebUI is enabled by @chengyongru in https://github.com/HKUDS/nanobot/pull/5810
* fix(agent): run explicit recovery continuations by @chengyongru in https://github.com/HKUDS/nanobot/pull/5812
* feat(channels): add native Linear agent channel by @chengyongru in https://github.com/HKUDS/nanobot/pull/5495
* feat(webui): polish provider setup and unify settings controls by @Re-bin in https://github.com/HKUDS/nanobot/pull/5816
* chore: remove CLAUDE.md by @chengyongru in https://github.com/HKUDS/nanobot/pull/5818
* fix(agent): discard stopped follow-up recovery journal by @yu-xin-c in https://github.com/HKUDS/nanobot/pull/5809
* fix(webui): remove intermediate answer footer gap by @chengyongru in https://github.com/HKUDS/nanobot/pull/5814
* refactor: remove expired write_stdin compatibility by @chengyongru in https://github.com/HKUDS/nanobot/pull/5822
* refactor(webui): unify live and replay event projection by @chengyongru in https://github.com/HKUDS/nanobot/pull/5819
* feat(webui): show persisted fallback preset on replies by @Re-bin in https://github.com/HKUDS/nanobot/pull/5827
* fix(agent): remove local context tail truncation by @chengyongru in https://github.com/HKUDS/nanobot/pull/5820
* docs: refresh v0.3.5 release information by @chengyongru in https://github.com/HKUDS/nanobot/pull/5828
* refactor(webui): remove legacy message projection by @chengyongru in https://github.com/HKUDS/nanobot/pull/5823
* test(agent): fix response-source CI contract by @chengyongru in https://github.com/HKUDS/nanobot/pull/5835
* fix(webui): make OAuth reauthentication actionable by @Re-bin in https://github.com/HKUDS/nanobot/pull/5836
* fix(agent): respect temporary chat privacy in tool execution by @Re-bin in https://github.com/HKUDS/nanobot/pull/5841
* fix(webui): prevent mobile sidebar tooltip and double-tap navigation by @Re-bin in https://github.com/HKUDS/nanobot/pull/5839
* fix(webui): retain temporary chats across navigation by @Re-bin in https://github.com/HKUDS/nanobot/pull/5837
* fix: improve log reliability and request correlation by @chengyongru in https://github.com/HKUDS/nanobot/pull/5840
* fix(tui): make Markdown links clickable by @chengyongru in https://github.com/HKUDS/nanobot/pull/5829
* fix(webui): clarify queued guidance delivery by @chengyongru in https://github.com/HKUDS/nanobot/pull/5844
* Remove queued send hint by @chengyongru in https://github.com/HKUDS/nanobot/pull/5860
* fix(webui): wrap Markdown table content by @chengyongru in https://github.com/HKUDS/nanobot/pull/5862
* feat(webui): streamline contextual message controls by @chengyongru in https://github.com/HKUDS/nanobot/pull/5831
* fix(exec): invoke quoted Windows executable without arguments by @Xalzeroph in https://github.com/HKUDS/nanobot/pull/5868
* fix(tools): handle boolean JSON subschemas during argument validation by @KailBug in https://github.com/HKUDS/nanobot/pull/5859
* fix(files): decode BOM-marked text correctly by @Xalzeroph in https://github.com/HKUDS/nanobot/pull/5867
* fix(tools): keep searches scoped and results resumable by @chengyongru in https://github.com/HKUDS/nanobot/pull/5876
* fix: isolate maintenance-session compaction notifications by @chengyongru in https://github.com/HKUDS/nanobot/pull/5874
* refactor(tools): build grep context pages incrementally by @chengyongru in https://github.com/HKUDS/nanobot/pull/5877
* refactor(utils): dedupe atomic JSONL write helper (Closes #5290) by @Frank-zhu0404 in https://github.com/HKUDS/nanobot/pull/5873
* fix(agent): log mid-turn injected messages by @chengyongru in https://github.com/HKUDS/nanobot/pull/5878
* docs: correct context compaction behavior and document /compact by @chengyongru in https://github.com/HKUDS/nanobot/pull/5882
* fix(webui): clear stale restart prompt after reconnect by @chengyongru in https://github.com/HKUDS/nanobot/pull/5813
* fix(agent): preserve state for required Codex compaction by @chengyongru in https://github.com/HKUDS/nanobot/pull/5883
* feat(linear): improve native agent UX by @chengyongru in https://github.com/HKUDS/nanobot/pull/5871
* fix(providers): preserve image inputs for deepseek-flash by @KailBug in https://github.com/HKUDS/nanobot/pull/5886
* refactor(dingtalk): use streaming media downloads in tests and runtime by @chengyongru in https://github.com/HKUDS/nanobot/pull/5889
* fix(cli): reuse WebUI model discovery in onboarding by @chengyongru in https://github.com/HKUDS/nanobot/pull/5888
* refactor(tools): remove unused global file state compatibility by @chengyongru in https://github.com/HKUDS/nanobot/pull/5893
* refactor(api): use typed application state consistently by @chengyongru in https://github.com/HKUDS/nanobot/pull/5892
* refactor(webui): clear turns only through the owner registry by @chengyongru in https://github.com/HKUDS/nanobot/pull/5891
* fix(webui): require handshake headers for Full Access eligibility by @chengyongru in https://github.com/HKUDS/nanobot/pull/5890
* fix(cli): explain session storage conflicts before startup by @chengyongru in https://github.com/HKUDS/nanobot/pull/5887
* feat(webui): unify session file and website previews by @Re-bin in https://github.com/HKUDS/nanobot/pull/5847
* feat(webui): invite returning users to star nanobot by @chengyongru in https://github.com/HKUDS/nanobot/pull/5895
* fix(providers): backfill missing reasoning history for deepseek-flash by @KailBug in https://github.com/HKUDS/nanobot/pull/5894
* fix(tools): keep read_file progressing on oversized lines by @FanouZeng-TT in https://github.com/HKUDS/nanobot/pull/5824
* refactor: remove unused helpers and internal exports by @chengyongru in https://github.com/HKUDS/nanobot/pull/5897
* feat(webui): add completion notification sound by @0717lee in https://github.com/HKUDS/nanobot/pull/5602
* fix(webui): allow custom context window token budgets by @chengyongru in https://github.com/HKUDS/nanobot/pull/5901
* fix(agent): report background task failures by @yu-xin-c in https://github.com/HKUDS/nanobot/pull/5431
* fix(discord): clean up reaction state on stop by @yu-xin-c in https://github.com/HKUDS/nanobot/pull/5807
* fix(matrix): reply to the room-level user event that started the turn by @michaelxer in https://github.com/HKUDS/nanobot/pull/5292
* perf(webui): improve chat refresh and mobile interactions by @chengyongru in https://github.com/HKUDS/nanobot/pull/5904
* fix(webui): keep global page URLs clean and defer chat mounting by @chengyongru in https://github.com/HKUDS/nanobot/pull/5905
* feat(webui): localize agent activity by @ZhouJ-sh in https://github.com/HKUDS/nanobot/pull/5367
* test: consolidate redundant coverage across the test suite by @chengyongru in https://github.com/HKUDS/nanobot/pull/5907
* fix(webui): preserve composer drafts across navigation and reloads by @chengyongru in https://github.com/HKUDS/nanobot/pull/5912
* feat(linear): manage member access and simplify workspace connections by @Re-bin in https://github.com/HKUDS/nanobot/pull/5919
* fix(mcp): load all pages of server tools before registration by @KailBug in https://github.com/HKUDS/nanobot/pull/5916
* fix(providers): preserve optional tool parameters in Responses requests by @chengyongru in https://github.com/HKUDS/nanobot/pull/5938
* fix(providers): stop Responses streams at terminal events by @chengyongru in https://github.com/HKUDS/nanobot/pull/5937
* fix(weixin): silence polling request logs by @Shizoqua in https://github.com/HKUDS/nanobot/pull/5936
* fix(webui): unblock earlier-history pagination and show retry states by @chengyongru in https://github.com/HKUDS/nanobot/pull/5934
* feat(webui): polish the GitHub star invitation by @Re-bin in https://github.com/HKUDS/nanobot/pull/5944
* fix(providers): expose GPT-6 Sol and Luna in Codex model discovery by @bingqilinweimaotai in https://github.com/HKUDS/nanobot/pull/5940
* fix(tui): restore saved session history from canonical events by @chengyongru in https://github.com/HKUDS/nanobot/pull/5950
* feat(tools): use installed ripgrep for native file search by @chengyongru in https://github.com/HKUDS/nanobot/pull/5948
* fix(tokens): warm fallback tokenizer in background by @chengyongru in https://github.com/HKUDS/nanobot/pull/5861
* docs: refresh contributors and preserve historical credits by @chengyongru in https://github.com/HKUDS/nanobot/pull/5951
* fix(webui): restore Codex title generation and diagnose API failures by @chengyongru in https://github.com/HKUDS/nanobot/pull/5952
* fix(web): propagate web_fetch failures as structured tool errors by @KailBug in https://github.com/HKUDS/nanobot/pull/5949
* fix(tui): keep unknown terminal themes readable by @chengyongru in https://github.com/HKUDS/nanobot/pull/5958
* fix(tui): animate status with unknown terminal theme by @chengyongru in https://github.com/HKUDS/nanobot/pull/5959
* fix(tui): align controls and header with transcript by @chengyongru in https://github.com/HKUDS/nanobot/pull/5964
* fix(tui): keep overflow picker choices reachable by @chengyongru in https://github.com/HKUDS/nanobot/pull/5966
* fix(agent): require subagent consolidator at construction by @chengyongru in https://github.com/HKUDS/nanobot/pull/5969
* refactor(tui): organize source by feature boundaries by @chengyongru in https://github.com/HKUDS/nanobot/pull/5975
* fix(my): scope subagent snapshots to the current session by @chengyongru in https://github.com/HKUDS/nanobot/pull/5976
* fix(providers): honor configured fallbacks on "insufficient credits" by @CarmeloCampos in https://github.com/HKUDS/nanobot/pull/5968
* Correct misleading Taiwanese WebUI messages by @PeterDaveHello in https://github.com/HKUDS/nanobot/pull/5982
* fix(tui): accept goal requests during active turns by @chengyongru in https://github.com/HKUDS/nanobot/pull/5981
* fix(tools): preserve PATH for argument-vector commands by @chengyongru in https://github.com/HKUDS/nanobot/pull/5986
* fix(codex): avoid release-pinned model catalog filtering by @Fatih0234 in https://github.com/HKUDS/nanobot/pull/5984
* fix: stop sending context compaction notifications by @wzrayyy in https://github.com/HKUDS/nanobot/pull/5780
* fix(cli): avoid duplicate WebUI config announcement by @chengyongru in https://github.com/HKUDS/nanobot/pull/5988
* fix(webui): stop repairing completed Markdown by @chengyongru in https://github.com/HKUDS/nanobot/pull/5989
* fix(webui): keep completed turns terminal across late events by @chengyongru in https://github.com/HKUDS/nanobot/pull/5991
* docs: streamline project instructions and engineering constraints by @chengyongru in https://github.com/HKUDS/nanobot/pull/5996
* refactor: remove unused runtime and WebUI helpers by @chengyongru in https://github.com/HKUDS/nanobot/pull/5999
* feat(webui): connect to existing remote nanobot instances by @Re-bin in https://github.com/HKUDS/nanobot/pull/5941
* fix(webui): preserve TeX formula boundaries in streaming Markdown by @chengyongru in https://github.com/HKUDS/nanobot/pull/5990
* fix(agent): preserve explicitly empty tool registries by @KailBug in https://github.com/HKUDS/nanobot/pull/5994
* fix(cron): preserve pending actions until store save succeeds by @yu-xin-c in https://github.com/HKUDS/nanobot/pull/5933
* fix(exec): enforce session hard timeouts without polling by @KailBug in https://github.com/HKUDS/nanobot/pull/5957
* fix(linear): reject stale member access updates after reauthorization by @KDB-Wind in https://github.com/HKUDS/nanobot/pull/5997
* fix(agent): clear stale failure state when resuming runner iterations by @KailBug in https://github.com/HKUDS/nanobot/pull/5995
* fix(tools): preserve valid JSON Schema union arguments by @KailBug in https://github.com/HKUDS/nanobot/pull/5918
* fix(webui): prevent Windows manifest read/replace races by @chengyongru in https://github.com/HKUDS/nanobot/pull/6016
* fix(tools): preserve separator whitespace in inline replacements by @KailBug in https://github.com/HKUDS/nanobot/pull/5796
* fix(tools): preserve indentation in newline-terminated fallback edits by @KailBug in https://github.com/HKUDS/nanobot/pull/5795
* fix: 创建文件时保留原始换行，避免 Windows 重复回车 by @2gg-bit in https://github.com/HKUDS/nanobot/pull/5925
* refactor(session): decouple history tools from WebUI replay by @chengyongru in https://github.com/HKUDS/nanobot/pull/6017
* fix(telegram): keep link URLs intact when rendering Markdown to HTML by @Bdysj in https://github.com/HKUDS/nanobot/pull/5960
* fix(slack): keep full text of button messages beyond 3000 chars by @Bdysj in https://github.com/HKUDS/nanobot/pull/5961
* fix: 保留 Telegram 命令的换行参数和邮箱内容 by @2gg-bit in https://github.com/HKUDS/nanobot/pull/5931
* fix: 邮件正文字符集未知时回退解码，避免中断收件轮询 by @2gg-bit in https://github.com/HKUDS/nanobot/pull/5928
* fix: 通知评估器拒绝非布尔值，避免将字符串 false 视为通知许可 by @2gg-bit in https://github.com/HKUDS/nanobot/pull/5927
* fix(cron): reject non-positive every_seconds intervals by @Bdysj in https://github.com/HKUDS/nanobot/pull/5962
* fix(providers): sum compound durations in 'try again in' retry hints by @Bdysj in https://github.com/HKUDS/nanobot/pull/5963
* fix: 执行 null 参数的类型和枚举校验 by @2gg-bit in https://github.com/HKUDS/nanobot/pull/5965
* fix: 避免网页抓取将大小写不同的 URL 误判为重复请求 by @2gg-bit in https://github.com/HKUDS/nanobot/pull/5926
* fix(webui): provide iOS PWA top-edge color surface by @Re-bin in https://github.com/HKUDS/nanobot/pull/5942
* fix(tools): scope recursive directory ignores to listed root by @RaycarlLei in https://github.com/HKUDS/nanobot/pull/5793
* fix(api): return 400 for invalid multimodal field types by @FanouZeng-TT in https://github.com/HKUDS/nanobot/pull/5763
* feat(webui): mobile keyboard input and streaming send by @morandot in https://github.com/HKUDS/nanobot/pull/5640
* fix(webui): hide unavailable website preview actions by @Re-bin in https://github.com/HKUDS/nanobot/pull/6021
* fix(webui): keep touch navigation visible above the keyboard by @Re-bin in https://github.com/HKUDS/nanobot/pull/6022
* fix(webui): enlarge preview controls on touch devices by @Re-bin in https://github.com/HKUDS/nanobot/pull/6023
* fix(cli-apps): preserve XDG_RUNTIME_DIR for desktop CLIs by @KevinAndrewDong in https://github.com/HKUDS/nanobot/pull/6030
* fix(webui): keep edit diffs visible and distinguish file creation by @chengyongru in https://github.com/HKUDS/nanobot/pull/6049
* fix(webui): keep composer palettes inside the mobile viewport by @Re-bin in https://github.com/HKUDS/nanobot/pull/6052
* fix(webui): fit session search above the mobile keyboard by @Re-bin in https://github.com/HKUDS/nanobot/pull/6053
* fix(webui): avoid automatic zoom when focusing mobile text fields by @Re-bin in https://github.com/HKUDS/nanobot/pull/6055
* fix(webui): make sidebar actions discoverable on touch devices by @Re-bin in https://github.com/HKUDS/nanobot/pull/6056
* fix(webui): restore sidebar menu focus on Escape by @Re-bin in https://github.com/HKUDS/nanobot/pull/6058
* fix(webui): restore sidebar focus after submenu Escape by @Re-bin in https://github.com/HKUDS/nanobot/pull/6059
* fix(providers): preserve temperature for compatible reasoning models by @qingshungLI in https://github.com/HKUDS/nanobot/pull/6005
* docs(memory): correct Git layout and history search example by @Excelius-Wang in https://github.com/HKUDS/nanobot/pull/6054
* fix(webui): dismiss mobile sidebar on current topic selection by @Re-bin in https://github.com/HKUDS/nanobot/pull/6061
* feat(subagent): add session-owned task messaging and cancellation by @chengyongru in https://github.com/HKUDS/nanobot/pull/5985
* fix(webui): restore CJK line height and refine text wrapping by @chengyongru in https://github.com/HKUDS/nanobot/pull/6073
* fix(documents): read cells beyond declared XLSX dimensions by @takiAA in https://github.com/HKUDS/nanobot/pull/6060
* feat(webui): unify icons and refine interaction feedback by @chengyongru in https://github.com/HKUDS/nanobot/pull/6074
* fix(mcp): let streamable HTTP read timeout cover tool_timeout by @maxmilian in https://github.com/HKUDS/nanobot/pull/6066
* fix(webui): fit wide equations and refine math spacing by @chengyongru in https://github.com/HKUDS/nanobot/pull/6075
* test: isolate Star invitation state and stabilize late-result waits by @chengyongru in https://github.com/HKUDS/nanobot/pull/6076
* feat(webui): show commit and prefill bug report diagnostics by @chengyongru in https://github.com/HKUDS/nanobot/pull/6080
* feat(webui): choose the chat for scheduled tasks by @Re-bin in https://github.com/HKUDS/nanobot/pull/6057
* refactor(ui): replace middle-dot separators with clearer hierarchy by @chengyongru in https://github.com/HKUDS/nanobot/pull/6087
* feat(webui): add catalog loading skeletons by @chengyongru in https://github.com/HKUDS/nanobot/pull/6092
* fix(webui): improve destructive contrast in dark mode by @Wenyan0315 in https://github.com/HKUDS/nanobot/pull/6095
* fix(tui): prioritize slash command name matches by @chengyongru in https://github.com/HKUDS/nanobot/pull/6098
* fix(webui): render CJK bold labels before Latin text by @chengyongru in https://github.com/HKUDS/nanobot/pull/6099
* feat(providers): share Responses backend with Codex WebSocket continuation by @chengyongru in https://github.com/HKUDS/nanobot/pull/6096
* fix(webui): upload TUI and WebUI attachments over binary HTTP by @chengyongru in https://github.com/HKUDS/nanobot/pull/5980
* ci: reduce test runtime while preserving coverage by @chengyongru in https://github.com/HKUDS/nanobot/pull/6101
* fix(webui): correct SkillHub skill detail links by @Re-bin in https://github.com/HKUDS/nanobot/pull/6102
* feat(webui): add a column directory picker and streamline composer actions by @chengyongru in https://github.com/HKUDS/nanobot/pull/6089
* fix(providers): prepare inline image batches and recover Codex transport by @chengyongru in https://github.com/HKUDS/nanobot/pull/6107
* fix(commands): keep slash-prefixed paths in normal chat by @Re-bin in https://github.com/HKUDS/nanobot/pull/6108
* feat(qq): show the agent the message a user quoted by @GZY-SUPER-HACKER in https://github.com/HKUDS/nanobot/pull/6007
* fix(webui): keep CJK prose outside bold URL links by @chengyongru in https://github.com/HKUDS/nanobot/pull/6115
* fix(webui): simplify existing copy across all locales by @chengyongru in https://github.com/HKUDS/nanobot/pull/6116
* docs(agents): add interface copywriting guidance by @chengyongru in https://github.com/HKUDS/nanobot/pull/6117
* chore(linear): format Chinese locale JSON by @chengyongru in https://github.com/HKUDS/nanobot/pull/6119
* feat(models): declare request APIs for providers and presets by @chengyongru in https://github.com/HKUDS/nanobot/pull/5204
* fix(whatsapp): normalize neonize timestamps before replay filtering by @jipeng6036-del in https://github.com/HKUDS/nanobot/pull/6127
* docs: refresh stale runtime comments and docstrings by @chengyongru in https://github.com/HKUDS/nanobot/pull/6129
* feat(cli): add --home instance directory selector by @chengyongru in https://github.com/HKUDS/nanobot/pull/6128
* docs: remove manual paragraph line wraps by @chengyongru in https://github.com/HKUDS/nanobot/pull/6131
* test: align test names with current assertions by @chengyongru in https://github.com/HKUDS/nanobot/pull/6130
* fix(security): pin validated DNS for bytes hostnames by @wkdddd in https://github.com/HKUDS/nanobot/pull/6069
* fix(deepseek): map minimal reasoning effort to low by @ZedingZhang in https://github.com/HKUDS/nanobot/pull/6132
* fix(webui): clarify Chinese temporary chat tooltip by @chengyongru in https://github.com/HKUDS/nanobot/pull/6144
* feat(webui): improve model and provider settings UX by @chengyongru in https://github.com/HKUDS/nanobot/pull/6145
* fix(agent): report current workspace access before tool use by @Re-bin in https://github.com/HKUDS/nanobot/pull/6113
* fix(webui): support WSL browser launch and clearer startup output by @chengyongru in https://github.com/HKUDS/nanobot/pull/6150
* fix(channels): remove retired outbound metadata compatibility by @chengyongru in https://github.com/HKUDS/nanobot/pull/6169
* refactor(command): declare session queue policy at registration by @chengyongru in https://github.com/HKUDS/nanobot/pull/6170
* fix(providers): honor disabled thinking for supported GLM models by @KailBug in https://github.com/HKUDS/nanobot/pull/6155
* fix(providers): preserve disabled reasoning for MiMo Responses by @KailBug in https://github.com/HKUDS/nanobot/pull/6156
* test(providers): separate EOF checks from stream timing by @chengyongru in https://github.com/HKUDS/nanobot/pull/6174
* fix(webui): allow switching Default permissions back to Full Access by @chengyongru in https://github.com/HKUDS/nanobot/pull/6175
* fix(image): use standalone Codex Images API by @chengyongru in https://github.com/HKUDS/nanobot/pull/6177
* feat(models): add per-preset request overrides by @Re-bin in https://github.com/HKUDS/nanobot/pull/6159
* fix(webui): place web proxy with web access settings by @Re-bin in https://github.com/HKUDS/nanobot/pull/6161
* fix(webui): keep settings restarts out of chat history by @Re-bin in https://github.com/HKUDS/nanobot/pull/6162
* fix(feishu): restore assistant creation and pairing recovery by @Re-bin in https://github.com/HKUDS/nanobot/pull/6157
* refactor(agent): compose image tools in application runtimes by @chengyongru in https://github.com/HKUDS/nanobot/pull/6172
* feat(images): reuse named connections and image request settings by @Re-bin in https://github.com/HKUDS/nanobot/pull/6160
* feat(skills): explain nanobot usage from bundled documentation by @chengyongru in https://github.com/HKUDS/nanobot/pull/6176
* refactor: isolate runtime contracts and enforce import boundaries by @chengyongru in https://github.com/HKUDS/nanobot/pull/6166
* fix(documents): preserve empty PPTX table columns by @maxazure in https://github.com/HKUDS/nanobot/pull/6181
* refactor(webui): separate presentation views and expand component gallery by @chengyongru in https://github.com/HKUDS/nanobot/pull/6179
* refactor(tools): streamline built-in tool descriptions by @chengyongru in https://github.com/HKUDS/nanobot/pull/6201
* refactor: remove unused internal code and styles by @chengyongru in https://github.com/HKUDS/nanobot/pull/6193
* refactor: deduplicate durable writes and file-edit path resolution by @chengyongru in https://github.com/HKUDS/nanobot/pull/6204
* fix(webui): prevent equation tags from overlapping formulas by @chengyongru in https://github.com/HKUDS/nanobot/pull/6205
* refactor(transcription): share JSON request retries by @chengyongru in https://github.com/HKUDS/nanobot/pull/6206
* refactor(webui): remove session list previews and timestamps by @chengyongru in https://github.com/HKUDS/nanobot/pull/6189
* fix(webui): require double tildes for strikethrough by @chengyongru in https://github.com/HKUDS/nanobot/pull/6207
* fix(webui): send same-origin cookies with uploads by @DKlaper in https://github.com/HKUDS/nanobot/pull/6198
* fix(webui): restore and synchronize live activity sheen by @chengyongru in https://github.com/HKUDS/nanobot/pull/6209
* perf(webui): stream bounded file diff previews by @chengyongru in https://github.com/HKUDS/nanobot/pull/6208
* fix(providers): preserve supported Kimi K3 reasoning efforts by @KailBug in https://github.com/HKUDS/nanobot/pull/6210
* fix(webui): remove subtask polling and load error UI by @chengyongru in https://github.com/HKUDS/nanobot/pull/6212
* feat(webui): expand MCP service presets by @chengyongru in https://github.com/HKUDS/nanobot/pull/6216
* fix(webui): give media gallery components distinct examples by @chengyongru in https://github.com/HKUDS/nanobot/pull/6190
* perf(agent): reuse skill discovery within each prompt by @chengyongru in https://github.com/HKUDS/nanobot/pull/6217
* fix(skills): bind plugin snapshots to approved content by @chengyongru in https://github.com/HKUDS/nanobot/pull/6225
* fix(exec): reject shell paths with unresolved home directories by @chengyongru in https://github.com/HKUDS/nanobot/pull/6222
* fix(session): serialize compaction with active turns by @chengyongru in https://github.com/HKUDS/nanobot/pull/6221
* perf(agent): skip transcript snapshots without run hooks by @chengyongru in https://github.com/HKUDS/nanobot/pull/6218
* fix(sdk): validate imported messages before session changes by @chengyongru in https://github.com/HKUDS/nanobot/pull/6219
* perf(providers): estimate missing usage outside the event loop by @chengyongru in https://github.com/HKUDS/nanobot/pull/6220
* fix(gateway): retain tasks for staged signal shutdown by @chengyongru in https://github.com/HKUDS/nanobot/pull/6223
* fix(ui): keep theme text and selections readable by @chengyongru in https://github.com/HKUDS/nanobot/pull/6226
* fix(agent): make tool error guidance neutral by @chengyongru in https://github.com/HKUDS/nanobot/pull/6227
* fix(agent): trim redundant system prompt context by @chengyongru in https://github.com/HKUDS/nanobot/pull/6233
* fix(exec): filter terminal control sequences from shell output by @chengyongru in https://github.com/HKUDS/nanobot/pull/6235
* refactor(skills): shorten built-in skill descriptions by @chengyongru in https://github.com/HKUDS/nanobot/pull/6236
* fix(cli): set SPT_NOENV only on Linux by @cristianchiriac in https://github.com/HKUDS/nanobot/pull/6232
* feat(provider): langfuse tracing for codex by @akinolur in https://github.com/HKUDS/nanobot/pull/5520
* fix(cli): reject misplaced gateway instance selectors by @chengyongru in https://github.com/HKUDS/nanobot/pull/6229
* fix(webui): keep sheet close focus rings keyboard-only by @chengyongru in https://github.com/HKUDS/nanobot/pull/6239
* fix(webui): avoid blocking the gateway on skill loading by @chengyongru in https://github.com/HKUDS/nanobot/pull/6241
* fix(webui): reconcile turns after reconnect by @chengyongru in https://github.com/HKUDS/nanobot/pull/6211
* perf(agent): prepare prompts outside the event loop by @chengyongru in https://github.com/HKUDS/nanobot/pull/6224
* fix(webui): resume queued prompts after turn completion by @chengyongru in https://github.com/HKUDS/nanobot/pull/6242
* fix(webui): space other tasks from following messages by @chengyongru in https://github.com/HKUDS/nanobot/pull/6243
* fix(shell): separate wait, idle, and runtime limits by @chengyongru in https://github.com/HKUDS/nanobot/pull/6228
* fix(webui): load history for running sessions by @chengyongru in https://github.com/HKUDS/nanobot/pull/6245
* fix(webui): preserve custom shell runtime editing by @chengyongru in https://github.com/HKUDS/nanobot/pull/6244
* refactor(webui): centralize client run lifecycle state by @chengyongru in https://github.com/HKUDS/nanobot/pull/6246
* refactor(settings): preserve domain controller objects by @chengyongru in https://github.com/HKUDS/nanobot/pull/6249
* perf(webui): avoid subtree style invalidation while typing by @chengyongru in https://github.com/HKUDS/nanobot/pull/6250
* refactor(providers): remove duplicate chat response parsers by @chengyongru in https://github.com/HKUDS/nanobot/pull/6248
* refactor(cli): use Questionary for onboarding selection by @chengyongru in https://github.com/HKUDS/nanobot/pull/6251
* fix(webui): preserve sidebar state after failed initial fetch by @Oxygen56 in https://github.com/HKUDS/nanobot/pull/6009
* Require dulwich>=0.24.0: `GitStore.diff_commits` uses `porcelain.diff` by @hazelxue in https://github.com/HKUDS/nanobot/pull/6252
* fix: preserve subtask request attribution after restart by @chengyongru in https://github.com/HKUDS/nanobot/pull/6247
* refactor(session): centralize state ownership in SQLite by @chengyongru in https://github.com/HKUDS/nanobot/pull/5943
* fix(webui): hide recovery notice while resumed tasks run by @chengyongru in https://github.com/HKUDS/nanobot/pull/6255
* fix(webui): hide provider models past OpenAI shutdown_date by @gianfrancodemarco in https://github.com/HKUDS/nanobot/pull/5979
* fix(consolidation): trigger compaction from reported usage, not just tiktoken estimates by @Muzhen2000 in https://github.com/HKUDS/nanobot/pull/6260
* fix(channels): retain scheduled results across pre-send outages by @Re-bin in https://github.com/HKUDS/nanobot/pull/6266
* docs(automations): keep Markdown paragraphs on one line by @chengyongru in https://github.com/HKUDS/nanobot/pull/6272
* fix(webui): use file-type icons in file change activity by @chengyongru in https://github.com/HKUDS/nanobot/pull/6257
* fix(webui): keep CLI Apps reads off the event loop by @chengyongru in https://github.com/HKUDS/nanobot/pull/6275
* feat(webui): preview Markdown files with a source toggle by @Re-bin in https://github.com/HKUDS/nanobot/pull/6274
* fix(webui): align mention overlay spacing with the native caret by @chengyongru in https://github.com/HKUDS/nanobot/pull/6277
* refactor(agent): deduplicate model request preparation by @chengyongru in https://github.com/HKUDS/nanobot/pull/6278
* fix(webui): preserve list semantics around links by @chengyongru in https://github.com/HKUDS/nanobot/pull/6276
* fix(webui): keep search activity summaries on one line by @chengyongru in https://github.com/HKUDS/nanobot/pull/6281
* feat(webui): rename sidebar topics inline by @chengyongru in https://github.com/HKUDS/nanobot/pull/6279
* test: replace false-green checks with behavioral coverage by @chengyongru in https://github.com/HKUDS/nanobot/pull/6282
* feat(channels): add WhatsApp Agent Platform channel by @CarmeloCampos in https://github.com/HKUDS/nanobot/pull/6152
* fix(media): keep Unicode upload names within the filesystem byte limit by @shoaibulhaque in https://github.com/HKUDS/nanobot/pull/6253
* fix(web): handle case-insensitive image media types by @fhgffy in https://github.com/HKUDS/nanobot/pull/6197
* fix(documents): skip chart-only sheets when reading XLSX files by @lux-liang in https://github.com/HKUDS/nanobot/pull/6097
* fix: preserve XLSX grep cell locators with literal tabs by @rudycelekli in https://github.com/HKUDS/nanobot/pull/6183
* fix(documents): preserve complete PDF pages across reads by @takiAA in https://github.com/HKUDS/nanobot/pull/6093
* fix(webui): make full chat navigation scrollable and efficient by @Re-bin in https://github.com/HKUDS/nanobot/pull/6293
* fix(telegram): detect remote media types with queries by @gianfrancodemarco in https://github.com/HKUDS/nanobot/pull/6124
* fix(telegram): render tilde and longer code fences as code by @huiq777 in https://github.com/HKUDS/nanobot/pull/5911
* fix(napcat): keep a message whose image declares a non-numeric file_size by @Lesereingrape in https://github.com/HKUDS/nanobot/pull/5914
* fix(email): exclude attached messages from body extraction by @fhgffy in https://github.com/HKUDS/nanobot/pull/6186
* fix(deepseek): align model capabilities with the official API by @chengyongru in https://github.com/HKUDS/nanobot/pull/6283
* fix(session): preserve Unicode separators during JSONL migration by @GoldArowana in https://github.com/HKUDS/nanobot/pull/6292
* fix(email): preserve attachments with colliding filenames by @fhgffy in https://github.com/HKUDS/nanobot/pull/6184
* fix(agent): preserve separators in streamed inline reasoning by @ningyixi in https://github.com/HKUDS/nanobot/pull/6270
* fix(providers): preserve the first SSE event with a leading UTF-8 BOM by @pei711 in https://github.com/HKUDS/nanobot/pull/6050
* fix(tools): accept integral JSON numbers for integer parameters by @shoaibulhaque in https://github.com/HKUDS/nanobot/pull/6254
* fix: use JSON equality for enum validation by @KennyMcSimpson in https://github.com/HKUDS/nanobot/pull/6013
* fix(mcp): prevent credential leakage in discovery error logs by @wkdddd in https://github.com/HKUDS/nanobot/pull/6067
* fix(mcp): connect to servers without tool capabilities by @pei711 in https://github.com/HKUDS/nanobot/pull/6019
* fix(mcp): discover all resource and prompt pages by @pei711 in https://github.com/HKUDS/nanobot/pull/6018
* fix(cron): keep pending interval runs across gateway restarts by @Hugo-DDT in https://github.com/HKUDS/nanobot/pull/6167
* fix(cron): preserve schedules edited during execution by @fhgffy in https://github.com/HKUDS/nanobot/pull/6071
* docs: make user guidance easier to follow by @chengyongru in https://github.com/HKUDS/nanobot/pull/6297
* fix(webui): keep unbranded app initials readable by @chengyongru in https://github.com/HKUDS/nanobot/pull/6295
* fix(webui): restore symmetry of the settings gear by @chengyongru in https://github.com/HKUDS/nanobot/pull/6298
* fix(session): prevent consumed follow-ups from replaying after restart by @chengyongru in https://github.com/HKUDS/nanobot/pull/6299
* fix(docker): make first-run Compose services usable by @LuckVd in https://github.com/HKUDS/nanobot/pull/6171
* perf(webui): reuse versioned history navigation snapshots by @chengyongru in https://github.com/HKUDS/nanobot/pull/6301
* fix(webui): show route-aligned skeletons from first paint by @chengyongru in https://github.com/HKUDS/nanobot/pull/6303
* feat(tools): add DeepSeek Search as a web_search provider by @morandot in https://github.com/HKUDS/nanobot/pull/6294
* fix(webui): isolate transcript replay from live observers by @chengyongru in https://github.com/HKUDS/nanobot/pull/6306
* feat(webui): render Mermaid diagrams with Pele by @chengyongru in https://github.com/HKUDS/nanobot/pull/6302
* test(webui): await rendered canonical reconciliation by @chengyongru in https://github.com/HKUDS/nanobot/pull/6307
* fix(webui): merge consecutive waiting messages by @chengyongru in https://github.com/HKUDS/nanobot/pull/6309
* fix(webui): align provider parameter row typography by @chengyongru in https://github.com/HKUDS/nanobot/pull/6310
* fix(webui): recognize typed session handles as references by @chengyongru in https://github.com/HKUDS/nanobot/pull/6311
* fix(webui): make browser notification failures actionable by @Re-bin in https://github.com/HKUDS/nanobot/pull/6158
* perf(ci): shorten WebUI feedback latency by @chengyongru in https://github.com/HKUDS/nanobot/pull/6326
* fix(webui): restore full-project typechecking by @chengyongru in https://github.com/HKUDS/nanobot/pull/6327
* fix(webui): add spring feedback at the history boundary by @chengyongru in https://github.com/HKUDS/nanobot/pull/6322
* feat(webui): add reading text size preferences by @chengyongru in https://github.com/HKUDS/nanobot/pull/6325
* fix(webui): localize the component gallery by @chengyongru in https://github.com/HKUDS/nanobot/pull/6330
* fix(webui): keep zoomed Mermaid images sharp by @chengyongru in https://github.com/HKUDS/nanobot/pull/6332
* fix(webui): hide exhausted history hints at rest by @chengyongru in https://github.com/HKUDS/nanobot/pull/6334
* test(webui): synchronize touch composer typography snapshots by @chengyongru in https://github.com/HKUDS/nanobot/pull/6335
* feat(tui): render Mermaid diagrams as terminal images by @chengyongru in https://github.com/HKUDS/nanobot/pull/6320
* feat(qq): add QR scan connection for QQ bots by @bingqilinweimaotai in https://github.com/HKUDS/nanobot/pull/6333
* fix(webui): show skeleton while conversation history loads by @chengyongru in https://github.com/HKUDS/nanobot/pull/6338
* fix(agent): skip subagent sessions during idle compaction by @chengyongru in https://github.com/HKUDS/nanobot/pull/6339
* fix(webui): recover model failures and align chat controls by @Re-bin in https://github.com/HKUDS/nanobot/pull/6329
* fix(webui): stabilize transcript while typing multiline drafts by @chengyongru in https://github.com/HKUDS/nanobot/pull/6354
* fix(gateway): request graceful Windows shutdown by @chengyongru in https://github.com/HKUDS/nanobot/pull/6353
* fix(webui): stabilize earlier-history loading and reclaim space by @chengyongru in https://github.com/HKUDS/nanobot/pull/6349
* ci: reduce Python test overhead and Windows latency by @chengyongru in https://github.com/HKUDS/nanobot/pull/6357
* test(webui): respect history top-edge tolerance by @chengyongru in https://github.com/HKUDS/nanobot/pull/6362
* refactor(session): unify model and display history storage by @chengyongru in https://github.com/HKUDS/nanobot/pull/6336
* fix(webui): render cross-session inputs as left-aligned bubbles by @chengyongru in https://github.com/HKUDS/nanobot/pull/6369
* fix(webui): preserve answer checkpoints and stream order by @chengyongru in https://github.com/HKUDS/nanobot/pull/6368
* feat(update): integrate managed installs and recoverable in-app updates by @Re-bin in https://github.com/HKUDS/nanobot/pull/6168
* fix(webui): synchronize neutral Ring sidebar activity indicators by @chengyongru in https://github.com/HKUDS/nanobot/pull/6371
* fix(webui): keep version checks on the gateway event loop by @chengyongru in https://github.com/HKUDS/nanobot/pull/6376
* ci: scope native acceptance and bind release candidate artifacts by @chengyongru in https://github.com/HKUDS/nanobot/pull/6378
* fix(webui): remove Mermaid preparation status text by @chengyongru in https://github.com/HKUDS/nanobot/pull/6380
* fix(webui): admit history without dropping live output by @chengyongru in https://github.com/HKUDS/nanobot/pull/6373
* fix(webui): preserve cross-session provenance at display persistence by @chengyongru in https://github.com/HKUDS/nanobot/pull/6379
* fix(webui): parse CJK emphasis at delimiter boundaries by @chengyongru in https://github.com/HKUDS/nanobot/pull/6381
* fix(qq): clarify QR binding states and setup actions by @chengyongru in https://github.com/HKUDS/nanobot/pull/6340
* fix(agent): finalize stopped turns without checkpoints by @chengyongru in https://github.com/HKUDS/nanobot/pull/6382
* fix(exec): yield long-running commands by default by @chengyongru in https://github.com/HKUDS/nanobot/pull/6385
* fix(webui): save settings when editing completes by @chengyongru in https://github.com/HKUDS/nanobot/pull/6384
* feat(webui): configure idle compaction timeout by @chengyongru in https://github.com/HKUDS/nanobot/pull/6383
* fix(ci): classify known test fixtures by validation consumers by @chengyongru in https://github.com/HKUDS/nanobot/pull/6387
* fix(webui): preserve file edit stats and left-truncate long paths by @chengyongru in https://github.com/HKUDS/nanobot/pull/6388
* fix(compaction): align native lifecycle and reconcile replay notices by @chengyongru in https://github.com/HKUDS/nanobot/pull/6386
* fix(webui): restore messages after batched visibility changes by @chengyongru in https://github.com/HKUDS/nanobot/pull/6390
* feat(network): centralize proxy settings and add MCP routing by @chengyongru in https://github.com/HKUDS/nanobot/pull/6372
* feat(webui): distinguish context compaction reasons by @chengyongru in https://github.com/HKUDS/nanobot/pull/6389
* refactor(webui): use native link actions and remove website previews by @chengyongru in https://github.com/HKUDS/nanobot/pull/6391
* fix(webui): offer restart in installed channel rows by @chengyongru in https://github.com/HKUDS/nanobot/pull/6392
* test: remove unreachable cases and strengthen weak assertions by @chengyongru in https://github.com/HKUDS/nanobot/pull/6394
* fix(webui): keep restored waiting messages manual by @chengyongru in https://github.com/HKUDS/nanobot/pull/6393
* feat(attachments): support local files and video attachments by @chengyongru in https://github.com/HKUDS/nanobot/pull/6321
* fix(webui): clarify OAuth callback instructions across locales by @Re-bin in https://github.com/HKUDS/nanobot/pull/6396
* fix(webui): check for updates only after opening About by @chengyongru in https://github.com/HKUDS/nanobot/pull/6397
* fix(webui): preserve dollar prefix in skill references by @chengyongru in https://github.com/HKUDS/nanobot/pull/6398
* fix(webui): refine sidebar icon consistency and spacing by @chengyongru in https://github.com/HKUDS/nanobot/pull/6400
* ci: isolate Test Suite runs by revision by @chengyongru in https://github.com/HKUDS/nanobot/pull/6402
* perf(webui): animate segmented indicator without layout by @chengyongru in https://github.com/HKUDS/nanobot/pull/6403
* fix(mcp): remove Figma remote preset and open management by @chengyongru in https://github.com/HKUDS/nanobot/pull/6399
* fix(webui): keep missing pasted paths silent by @chengyongru in https://github.com/HKUDS/nanobot/pull/6408
* fix(web): report ambiguous ddgs failures as unavailable by @chengyongru in https://github.com/HKUDS/nanobot/pull/6409
* ci: reuse isolated pip seeds and parallelize native acceptance by @chengyongru in https://github.com/HKUDS/nanobot/pull/6395
* fix(tui): submit prompts with Kitty keypad Enter by @dajiaohuang in https://github.com/HKUDS/nanobot/pull/6025
* feat(providers): add MiniMax-M3.1-Flash and avoid reasoning_split=false by @SaladDay in https://github.com/HKUDS/nanobot/pull/6360
* feat(webui): add a compact composer workspace toolbar by @chengyongru in https://github.com/HKUDS/nanobot/pull/6256
* fix(webui): simplify workspace picker icon by @chengyongru in https://github.com/HKUDS/nanobot/pull/6415
* fix(providers): use reasoning_text for DeepSeek Responses reasoning replay by @Hugo-DDT in https://github.com/HKUDS/nanobot/pull/6414
* fix(webui): keep Apps search within active filter by @chengyongru in https://github.com/HKUDS/nanobot/pull/6416
* fix(webui): share sidebar and Composer run state by @chengyongru in https://github.com/HKUDS/nanobot/pull/6337
* fix(webui): remove goal halo and redundant detail header by @chengyongru in https://github.com/HKUDS/nanobot/pull/6417
* fix(providers): support Kimi K3.1 Pro request parameters by @chengyongru in https://github.com/HKUDS/nanobot/pull/6418
* feat(webui): refine composer action feedback by @chengyongru in https://github.com/HKUDS/nanobot/pull/6419
* fix(webui): show renamed topic titles in @ mentions by @chengyongru in https://github.com/HKUDS/nanobot/pull/6413
* fix(agent): preserve goal continuation lifecycle by @chengyongru in https://github.com/HKUDS/nanobot/pull/6420
* fix(webui): tighten mobile chat layout and soften transcript edges by @chengyongru in https://github.com/HKUDS/nanobot/pull/6429
* fix(webui): keep MCP connection rows compact by @chengyongru in https://github.com/HKUDS/nanobot/pull/6431
* perf(webui): avoid history drafts for turn-end metadata by @chengyongru in https://github.com/HKUDS/nanobot/pull/6430
* perf(webui): avoid redundant math layout setup by @chengyongru in https://github.com/HKUDS/nanobot/pull/6433
* perf(sdk): reuse consecutive effective model overrides by @chengyongru in https://github.com/HKUDS/nanobot/pull/6434
* fix(api): route each session_id to its own chat by @ljluestc in https://github.com/HKUDS/nanobot/pull/5838
* perf(tui): shrink standalone builds and target native bindings by @chengyongru in https://github.com/HKUDS/nanobot/pull/6432
* perf(webui): defer non-chat startup interfaces by @chengyongru in https://github.com/HKUDS/nanobot/pull/6435
* fix(agent): don't resume abandoned work after max_iterations by @er-s-an in https://github.com/HKUDS/nanobot/pull/6346
* fix(diagrams): upgrade Pele to 1.9.0 with measured rich text by @chengyongru in https://github.com/HKUDS/nanobot/pull/6437
* fix(webui): separate file cards from media previews by @Re-bin in https://github.com/HKUDS/nanobot/pull/6425
* feat(webui): show image attachments as composer thumbnails by @Re-bin in https://github.com/HKUDS/nanobot/pull/6436
* fix(web): require ddgs 9.16.1 search fixes by @chengyongru in https://github.com/HKUDS/nanobot/pull/6442
* fix: recover oversized pending file reads after compaction by @ZhouJ-sh in https://github.com/HKUDS/nanobot/pull/5880
* fix: decode nested JSON tool arguments by schema by @uuzzrm in https://github.com/HKUDS/nanobot/pull/5314
* fix(agent): recheck idle expiry after acquiring session lock by @leninworld in https://github.com/HKUDS/nanobot/pull/6421
* feat(cron): update scheduled tasks in place by @david-dev666 in https://github.com/HKUDS/nanobot/pull/6345
* feat(cron): enable and disable jobs from the tool by @david-dev666 in https://github.com/HKUDS/nanobot/pull/6313
* feat(cron): expose recent run history to the agent by @david-dev666 in https://github.com/HKUDS/nanobot/pull/6319
* fix(webui): remove extra frames from activity logos by @Re-bin in https://github.com/HKUDS/nanobot/pull/6449
* style(webui): refine composer surface and workspace hover by @chengyongru in https://github.com/HKUDS/nanobot/pull/6444
* feat(webui): smooth theme changes and sun-moon transitions by @chengyongru in https://github.com/HKUDS/nanobot/pull/6450
* fix(webui): send waiting messages with empty Enter by @chengyongru in https://github.com/HKUDS/nanobot/pull/6451
* fix(webui): refresh pairing prompts on gateway changes by @chengyongru in https://github.com/HKUDS/nanobot/pull/6401
* feat(webui): search loaded message text in Ctrl+K by @chengyongru in https://github.com/HKUDS/nanobot/pull/6453
* fix(webui): unify skill and session link highlighting by @chengyongru in https://github.com/HKUDS/nanobot/pull/6454
* fix(tui): use canonical session handles by @chengyongru in https://github.com/HKUDS/nanobot/pull/6455
* feat(webui): refine appearance and add custom reading sizes by @Re-bin in https://github.com/HKUDS/nanobot/pull/6456
* feat(webui): refine attachment galleries and file cards by @chengyongru in https://github.com/HKUDS/nanobot/pull/6457
* fix(webui): place permission hover hint below its control by @chengyongru in https://github.com/HKUDS/nanobot/pull/6458
* fix(webui): crossfade theme changes as one page by @chengyongru in https://github.com/HKUDS/nanobot/pull/6459
* chore(webui): remove live preview badge from reading settings by @chengyongru in https://github.com/HKUDS/nanobot/pull/6466
* fix(webui): move appearance help to hints and smooth theme preview by @chengyongru in https://github.com/HKUDS/nanobot/pull/6467
* feat(webui): keep delegated work within reach by @chengyongru in https://github.com/HKUDS/nanobot/pull/6443
* fix(media): accept data URLs that capitalize the base64 token by @rudycelekli in https://github.com/HKUDS/nanobot/pull/6464
* chore(webui): remove subtask message status by @chengyongru in https://github.com/HKUDS/nanobot/pull/6469
* fix(webui): keep permission hints clear of existing-session drafts by @chengyongru in https://github.com/HKUDS/nanobot/pull/6470
* fix(webui): simplify selected theme indicator by @chengyongru in https://github.com/HKUDS/nanobot/pull/6472
* docs: align runtime references with current behavior by @chengyongru in https://github.com/HKUDS/nanobot/pull/6471
* fix(webui): match slash command highlighting to skills by @chengyongru in https://github.com/HKUDS/nanobot/pull/6473
* refactor: remove verified unused internals by @chengyongru in https://github.com/HKUDS/nanobot/pull/6460
* feat(webui): complete bang commands and literal output by @chengyongru in https://github.com/HKUDS/nanobot/pull/6173
* fix(webui): keep subtask details reachable in long results by @chengyongru in https://github.com/HKUDS/nanobot/pull/6478
* feat(webui): add compact batch archive actions by @chengyongru in https://github.com/HKUDS/nanobot/pull/6476
* fix(webui): check explicit file links before enabling previews by @chengyongru in https://github.com/HKUDS/nanobot/pull/6483
* feat(webui): unify mention candidate display by @chengyongru in https://github.com/HKUDS/nanobot/pull/6489
* test(webui): trim redundant browser coverage by @chengyongru in https://github.com/HKUDS/nanobot/pull/6492
* fix(webui): align chat links with edit filename colors by @chengyongru in https://github.com/HKUDS/nanobot/pull/6484
* fix(webui): simplify retry status copy by @chengyongru in https://github.com/HKUDS/nanobot/pull/6491
* fix(webui): show context and reasoning for all presets by @chengyongru in https://github.com/HKUDS/nanobot/pull/6490
* fix(webui): open subtask details from task content by @chengyongru in https://github.com/HKUDS/nanobot/pull/6487
* fix(utils): preserve exact newlines in atomic text writes by @notoufa in https://github.com/HKUDS/nanobot/pull/6475
* fix(webui): stabilize interaction tests and tooltip dismissal by @chengyongru in https://github.com/HKUDS/nanobot/pull/6495
* fix(webui): remove ellipses from sending labels by @chengyongru in https://github.com/HKUDS/nanobot/pull/6496
* fix(agent): preserve streamed replies after model failures by @chengyongru in https://github.com/HKUDS/nanobot/pull/6494
* fix(webui): preserve wrapping in numbered code blocks by @chengyongru in https://github.com/HKUDS/nanobot/pull/6501
* fix(webui): keep Dock taps working after touch drags by @chengyongru in https://github.com/HKUDS/nanobot/pull/6502
* docs: clarify contribution policy and issue author credit by @chengyongru in https://github.com/HKUDS/nanobot/pull/6503
* fix(websocket): abort disconnected HTTP handshakes before sending by @chengyongru in https://github.com/HKUDS/nanobot/pull/6348
* fix(webui): retain history touch gestures across message replacement by @chengyongru in https://github.com/HKUDS/nanobot/pull/6500
* fix(runtime): stop Windows identity polling memory leak by @chengyongru, co-authored by @snailak, in https://github.com/HKUDS/nanobot/pull/6507
* chore(skills): remove obsolete update-setup skill by @chengyongru in https://github.com/HKUDS/nanobot/pull/6508
* chore(release): prepare 0.4.0 by @Re-bin in https://github.com/HKUDS/nanobot/pull/6504
* fix(build): fetch locked WebUI packages from npm registry by @Re-bin in https://github.com/HKUDS/nanobot/pull/6510

## New Contributors

* @FanouZeng-TT made their first contribution in https://github.com/HKUDS/nanobot/pull/5762
* @AlfredChaos made their first contribution in https://github.com/HKUDS/nanobot/pull/5799
* @ZedingZhang made their first contribution in https://github.com/HKUDS/nanobot/pull/5800
* @Xalzeroph made their first contribution in https://github.com/HKUDS/nanobot/pull/5868
* @Frank-zhu0404 made their first contribution in https://github.com/HKUDS/nanobot/pull/5873
* @0717lee made their first contribution in https://github.com/HKUDS/nanobot/pull/5602
* @CarmeloCampos made their first contribution in https://github.com/HKUDS/nanobot/pull/5968
* @Fatih0234 made their first contribution in https://github.com/HKUDS/nanobot/pull/5984
* @2gg-bit made their first contribution in https://github.com/HKUDS/nanobot/pull/5925
* @Bdysj made their first contribution in https://github.com/HKUDS/nanobot/pull/5960
* @RaycarlLei made their first contribution in https://github.com/HKUDS/nanobot/pull/5793
* @KevinAndrewDong made their first contribution in https://github.com/HKUDS/nanobot/pull/6030
* @qingshungLI made their first contribution in https://github.com/HKUDS/nanobot/pull/6005
* @Excelius-Wang made their first contribution in https://github.com/HKUDS/nanobot/pull/6054
* @takiAA made their first contribution in https://github.com/HKUDS/nanobot/pull/6060
* @Wenyan0315 made their first contribution in https://github.com/HKUDS/nanobot/pull/6095
* @GZY-SUPER-HACKER made their first contribution in https://github.com/HKUDS/nanobot/pull/6007
* @jipeng6036-del made their first contribution in https://github.com/HKUDS/nanobot/pull/6127
* @wkdddd made their first contribution in https://github.com/HKUDS/nanobot/pull/6069
* @maxazure made their first contribution in https://github.com/HKUDS/nanobot/pull/6181
* @DKlaper made their first contribution in https://github.com/HKUDS/nanobot/pull/6198
* @cristianchiriac made their first contribution in https://github.com/HKUDS/nanobot/pull/6232
* @hazelxue made their first contribution in https://github.com/HKUDS/nanobot/pull/6252
* @gianfrancodemarco made their first contribution in https://github.com/HKUDS/nanobot/pull/5979
* @Muzhen2000 made their first contribution in https://github.com/HKUDS/nanobot/pull/6260
* @shoaibulhaque made their first contribution in https://github.com/HKUDS/nanobot/pull/6253
* @fhgffy made their first contribution in https://github.com/HKUDS/nanobot/pull/6197
* @lux-liang made their first contribution in https://github.com/HKUDS/nanobot/pull/6097
* @rudycelekli made their first contribution in https://github.com/HKUDS/nanobot/pull/6183
* @huiq777 made their first contribution in https://github.com/HKUDS/nanobot/pull/5911
* @Lesereingrape made their first contribution in https://github.com/HKUDS/nanobot/pull/5914
* @GoldArowana made their first contribution in https://github.com/HKUDS/nanobot/pull/6292
* @ningyixi made their first contribution in https://github.com/HKUDS/nanobot/pull/6270
* @pei711 made their first contribution in https://github.com/HKUDS/nanobot/pull/6050
* @KennyMcSimpson made their first contribution in https://github.com/HKUDS/nanobot/pull/6013
* @Hugo-DDT made their first contribution in https://github.com/HKUDS/nanobot/pull/6167
* @LuckVd made their first contribution in https://github.com/HKUDS/nanobot/pull/6171
* @SaladDay made their first contribution in https://github.com/HKUDS/nanobot/pull/6360
* @ljluestc made their first contribution in https://github.com/HKUDS/nanobot/pull/5838
* @er-s-an made their first contribution in https://github.com/HKUDS/nanobot/pull/6346
* @uuzzrm made their first contribution in https://github.com/HKUDS/nanobot/pull/5314
* @leninworld made their first contribution in https://github.com/HKUDS/nanobot/pull/6421
* @david-dev666 made their first contribution in https://github.com/HKUDS/nanobot/pull/6345
* @notoufa made their first contribution in https://github.com/HKUDS/nanobot/pull/6475

**Full Changelog**: https://github.com/HKUDS/nanobot/compare/v0.3.5...v0.4.0

---

> **Source** [HKUDS/nanobot](https://github.com/HKUDS/nanobot) · `v0.4.0` · 2026-10-28 · [upstream release](https://github.com/HKUDS/nanobot/releases/tag/v0.4.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
