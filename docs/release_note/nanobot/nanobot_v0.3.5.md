---
title: "nanobot v0.3.5"
project: "nanobot"
repo: "HKUDS/nanobot"
tag: "v0.3.5"
version: "v0.3.5"
published: "2026-09-15"
type: "patch"
lang: "en"
summary: "🐈 nanobot v0.3.5 brings the workbench to the terminal — and makes conversations easier to continue across the browser, terminal, and chat apps."
---

# nanobot v0.3.5

🐈 **nanobot `v0.3.5`** brings the workbench to the terminal — and makes conversations easier to continue across the browser, terminal, and chat apps.

The headline is **one agent, more places to work**. Run `nanobot` for the native terminal client or `nanobot webui` for the browser. Both use the same gateway and saved WebSocket conversations. Terminal sessions can be resumed, forked, inspected, and detached without building a separate agent runtime.

The browser workbench has grown around real multitasking: grouped conversation panes, temporary chats, persistent sidebar ordering, session mentions, a skills marketplace, portable Agent Plugins, and browser OAuth for remote MCP servers. Automations now have task and calendar views, clearer scheduling controls, and per-run replies. Mobile composition, settings, context charts, app logos, and branded mentions received another round of focused polish.

The other story is **continuity you can inspect**. Context usage and compaction are visible, interrupted work has clearer recovery controls, and session history is more durable across pagination, reconnects, and upgrades. This release also tightens attachment, process, workspace, and email-authentication boundaries. Please read the upgrade notes before replacing an existing installation.

## Highlights

- **A native terminal workbench** — Start with `nanobot`, switch sessions, paste supported clipboard images, complete app and skill references, inspect context and file diffs, queue follow-ups, and use `/detach` to leave the gateway running.
- **Browser conversations side by side** — Arrange up to four topics in resizable groups, keep sidebar ordering, drag saved sessions into mentions, and use temporary chats when you do not want a persistent topic.
- **Automations that are easier to manage** — Switch between task and calendar views, inspect run replies, and adjust schedules with clearer controls. Editing a job preserves pending executions; deleting one no longer leaves navigation blocked.
- **Visible context and steadier long sessions** — Per-round token/cache charts, context-compaction progress, paged history search, cumulative summaries, and file-read deduplication scoped to the actual model context.
- **Apps and skills with clearer identities** — SkillHub discovery, portable Agent Plugins, remote MCP OAuth and token refresh, visible connection failures, and consistent app logos and brand names in chat.
- **A better small-screen experience** — Home-screen installation through PWA support, narrower composer controls, draggable context sheets, touch-friendly chart details, and settings navigation that matches its opening direction.
- **Broader model and search choices** — DeepSeek Responses and V4 vision support, Eden AI and OrcaRouter gateways, AnySearch, online OAuth model catalogs, and more resilient provider fallback and Responses-history handling.
- **More reliable channels and runtime boundaries** — Rich Telegram streaming, improved Feishu onboarding, safer QQ attachments, trusted email authentication results, optional macOS Seatbelt isolation, and fewer leaked credentials in subprocess environments.
- **Embedding and operations** — SDK host integration hooks, explicit Desktop attachment, gateway readiness reporting, and checked, version-matched terminal distributions.

## Upgrade Notes

- **Back up configuration, workspaces, and session storage; stop old processes first.** Session JSONL files now live under the configuration directory's `sessions/<workspace-id>/` tree. The first upgraded start migrates existing workspace sessions after verifying the copy. Do not let old and new versions write the same workspace concurrently. Before downgrading, stop nanobot and use `nanobot sessions restore-workspace --config <config.json> --workspace <workspace>`; the command refuses to overwrite a different existing file. See the [session storage and rollback guide](https://github.com/HKUDS/nanobot/blob/v0.3.5/docs/cli-reference.md#session-storage-and-rollback).
- **Email verification requires an explicit receiver trust anchor.** If `verifySpf` or `verifyDkim` is enabled, configure `channels.email.trustedAuthservIds` using the exact identity confirmed by your receiving mail service. That service must remove forged headers claiming its identity and provide one consolidated authentication-results header. Existing verified Email configurations without this field will not start. Keep Email disabled until configured; do not disable verification as a workaround. Follow the [Email upgrade guide](https://github.com/HKUDS/nanobot/blob/v0.3.5/docs/guides/email-ai-agent.md#upgrading-to-v035).
- **Plain `nanobot` opens the native terminal UI.** Use `nanobot --classic` for the Python prompt or `nanobot -m "Hello!"` for one-shot usage. Platform wheels include both the WebUI and the matching TUI, so first TUI launch needs neither Bun nor a GitHub download. Supported wheels target macOS 13+ arm64/x64, glibc 2.17+ Linux arm64/x64, and Windows x64. Other platforms and source-distribution builds can use the classic prompt or WebUI; editable source development uses Bun.
- **The last attached client owns the on-demand gateway lifetime.** Closing the last interactive WebUI/TUI launcher stops that gateway. Use `/detach` in the terminal or `nanobot gateway --background` for work that must continue without a client.
- **Remote project selection uses paths on the nanobot host.** It requires Restricted access. It does not select a directory from the browser device, and remote clients cannot enable Full Access.
- **The gateway health response is more informative.** `/health` can return HTTP 503 when its enabled WebSocket channel is not running. It does not certify model, MCP, or other channel connectivity; update monitoring that previously assumed every live process returned 200.
- **Recheck concurrency and timeout limits.** `NANOBOT_MAX_CONCURRENT_REQUESTS` is unlimited unless set to a positive integer; configure an explicit cap if your deployment needs one. Subagent concurrency defaults to four and excess work waits for capacity. The old `agents.defaults.failOnToolError` field and `NANOBOT_LLM_TIMEOUT_S` are no longer used. Model streams, including internal tasks, use `NANOBOT_STREAM_IDLE_TIMEOUT_S` (90 seconds by default), renewed by each event rather than a fixed total-duration timeout.

## Community

Thank you to everyone who contributed code, reviewed changes, reported regressions, and tested nanobot in everyday work. Since `v0.3.0`, the release includes **402 merged PRs and 45 first-time contributors**. The goal remains a small, inspectable agent whose conversations and work can move with you.

## What's Changed
* docs(readme): clarify WebUI, gateway, and CLI quick starts by @Re-bin in https://github.com/HKUDS/nanobot/pull/5082
* chore: defer compatibility cleanup to v0.3.1 by @Re-bin in https://github.com/HKUDS/nanobot/pull/5083
* Smooth WebUI streaming with state-driven viewport motion by @chengyongru in https://github.com/HKUDS/nanobot/pull/4696
* feat: open WebUI after fresh desktop install by @chengyongru in https://github.com/HKUDS/nanobot/pull/5085
* fix(skills): tolerate null requires/bins/env in skill metadata by @santhreal in https://github.com/HKUDS/nanobot/pull/5086
* fix(memory): skip non-dict history.jsonl lines when reading by @santhreal in https://github.com/HKUDS/nanobot/pull/5090
* fix(session): coerce null session metadata to empty dict by @santhreal in https://github.com/HKUDS/nanobot/pull/5091
* fix(webui): restore file edit diff display by @chengyongru in https://github.com/HKUDS/nanobot/pull/5096
* feat(channels): enable tool hints by default by @chengyongru in https://github.com/HKUDS/nanobot/pull/5097
* fix(feishu): tolerate null text fields when extracting post content by @santhreal in https://github.com/HKUDS/nanobot/pull/5093
* fix(triggers): coerce string lastRunAtMs when loading local triggers by @santhreal in https://github.com/HKUDS/nanobot/pull/5092
* fix(feishu): tolerate null multi_url and list fields in card extract by @santhreal in https://github.com/HKUDS/nanobot/pull/5089
* fix(triggers): treat null runHistory as empty when loading triggers by @santhreal in https://github.com/HKUDS/nanobot/pull/5087
* fix(agent): preserve pending message runtime context by @yu-xin-c in https://github.com/HKUDS/nanobot/pull/5084
* fix(webui): prevent long messages from widening mobile thread by @chengyongru in https://github.com/HKUDS/nanobot/pull/5100
* fix(heartbeat): route unified sessions to last channel by @yu-xin-c in https://github.com/HKUDS/nanobot/pull/4928
* feat(exec): allow extra bwrap bind roots by @yu-xin-c in https://github.com/HKUDS/nanobot/pull/4625
* fix(pairing): treat null approved/pending maps as empty by @santhreal in https://github.com/HKUDS/nanobot/pull/5088
* fix(channels): ignore confirmations after connect cancellation by @KDB-Wind in https://github.com/HKUDS/nanobot/pull/5069
* fix(mcp): normalize local schema refs by @amplifierplus in https://github.com/HKUDS/nanobot/pull/5057
* fix(agent): preserve output across length recovery by @chengyongru in https://github.com/HKUDS/nanobot/pull/5056
* fix(memory): progress past completed no-op Dream batches by @shixi-li in https://github.com/HKUDS/nanobot/pull/5054
* feat(agent): make idle compaction scan interval configurable by @khmylov in https://github.com/HKUDS/nanobot/pull/5036
* feat(dingtalk): gate private chats and mention sender in group replies by @lmzopq in https://github.com/HKUDS/nanobot/pull/4446
* fix(cli): support Codex OAuth in Quick Start by @chengyongru in https://github.com/HKUDS/nanobot/pull/4939
* fix(image): pass aspect ratio and size to Gemini Flash image models by @stupidloud in https://github.com/HKUDS/nanobot/pull/4656
* fix(security): harden generated image URL downloads by @Re-bin in https://github.com/HKUDS/nanobot/pull/5095
* refactor(agent): remove dead lifecycle scaffolding by @chengyongru in https://github.com/HKUDS/nanobot/pull/5105
* chore: remove expired v0.3.1 compatibility shims by @chengyongru in https://github.com/HKUDS/nanobot/pull/5106
* feat(memory): restore Dream model preset override by @chengyongru in https://github.com/HKUDS/nanobot/pull/5107
* fix(memory): preserve unprocessed dream history by @yu-xin-c in https://github.com/HKUDS/nanobot/pull/5099
* docs: improve README discoverability by @chengyongru in https://github.com/HKUDS/nanobot/pull/5109
* fix(webui): stabilize repeated model preset rows by @chengyongru in https://github.com/HKUDS/nanobot/pull/5113
* fix(memory): preserve Dream input integrity by @chengyongru in https://github.com/HKUDS/nanobot/pull/5114
* fix(webui): soften model selector emphasis by @chengyongru in https://github.com/HKUDS/nanobot/pull/5119
* fix(webui): prevent composer resize scroll jitter by @chengyongru in https://github.com/HKUDS/nanobot/pull/5121
* docs: improve README landing page by @chengyongru in https://github.com/HKUDS/nanobot/pull/5123
* refactor(core): remove redundant runtime scaffolding by @chengyongru in https://github.com/HKUDS/nanobot/pull/5127
* fix(webui): rank skill autocomplete results by @chengyongru in https://github.com/HKUDS/nanobot/pull/5128
* docs(readme): add one-click deployment section by @Re-bin in https://github.com/HKUDS/nanobot/pull/5129
* docs: move README title above introduction by @chengyongru in https://github.com/HKUDS/nanobot/pull/5132
* fix(agent): read document attachments on demand by @chengyongru in https://github.com/HKUDS/nanobot/pull/5122
* feat(sdk): add host integration extension points by @chengyongru in https://github.com/HKUDS/nanobot/pull/5111
* fix(agent): prevent gateway crash when stopping active tasks by @chengyongru in https://github.com/HKUDS/nanobot/pull/5134
* fix(webui): reconcile chats after browser resume by @chengyongru in https://github.com/HKUDS/nanobot/pull/5130
* fix(webui): keep composer stable while scrolling by @chengyongru in https://github.com/HKUDS/nanobot/pull/5137
* fix(webui): keep streaming tail visible by @chengyongru in https://github.com/HKUDS/nanobot/pull/5140
* feat(config): add actionable startup diagnostics and WebUI recovery by @chengyongru in https://github.com/HKUDS/nanobot/pull/5110
* fix(webui): open threads at latest message by @chengyongru in https://github.com/HKUDS/nanobot/pull/5142
* fix(webui): animate reasoning drawer transitions by @chengyongru in https://github.com/HKUDS/nanobot/pull/5143
* fix(ci): scope PR path detection to head changes by @chengyongru in https://github.com/HKUDS/nanobot/pull/5144
* fix(ci): stabilize and speed up CI by @chengyongru in https://github.com/HKUDS/nanobot/pull/5145
* fix(memory): expose media references to session consolidation by @chengyongru in https://github.com/HKUDS/nanobot/pull/5157
* refactor: enforce BasedPyright strict type checking by @chengyongru in https://github.com/HKUDS/nanobot/pull/5158
* fix(shell): preserve UTF-8 native input on PowerShell 5 by @ZhouJ-sh in https://github.com/HKUDS/nanobot/pull/5160
* feat(webui): track optimistic message delivery status by @chengyongru in https://github.com/HKUDS/nanobot/pull/5162
* feat(webui): add skill marketplaces and management by @Re-bin in https://github.com/HKUDS/nanobot/pull/5116
* fix(webui): avoid false microphone silence errors by @chengyongru in https://github.com/HKUDS/nanobot/pull/5165
* fix(webui): prevent redundant thread and media reloads by @chengyongru in https://github.com/HKUDS/nanobot/pull/5164
* fix(session): preserve history during idle compaction by @chengyongru in https://github.com/HKUDS/nanobot/pull/5167
* refactor(session): separate persistence behind SessionStore by @chengyongru in https://github.com/HKUDS/nanobot/pull/5170
* refactor(cli): split commands into focused modules by @chengyongru in https://github.com/HKUDS/nanobot/pull/5175
* feat(webui): support remote Codex OAuth login by @chengyongru in https://github.com/HKUDS/nanobot/pull/5174
* fix(webui): preserve automation source on streamed replies by @chengyongru in https://github.com/HKUDS/nanobot/pull/4822
* fix(gitstore): return real git object ids instead of hex-of-hex by @ATECHPCS in https://github.com/HKUDS/nanobot/pull/5126
* fix(webui): drop malformed token-usage day keys by @KDB-Wind in https://github.com/HKUDS/nanobot/pull/5146
* fix(session): tolerate invalid idle-compaction timestamps by @KDB-Wind in https://github.com/HKUDS/nanobot/pull/5117
* fix(pairing): keep approvals across transient store read failures by @KDB-Wind in https://github.com/HKUDS/nanobot/pull/5147
* fix(agent): release idle session locks by @yu-xin-c in https://github.com/HKUDS/nanobot/pull/5151
* fix(exec): bound buffered session output by @yu-xin-c in https://github.com/HKUDS/nanobot/pull/5150
* fix(agent): route finish_reason='length' with blank content to length recovery by @Solaris-star in https://github.com/HKUDS/nanobot/pull/5136
* feat: preserve Responses reasoning state and compact context by @chengyongru in https://github.com/HKUDS/nanobot/pull/5172
* fix(config): install timezone data on all platforms by @shixi-li in https://github.com/HKUDS/nanobot/pull/5189
* fix(webui): preserve user scroll ownership near tail by @chengyongru in https://github.com/HKUDS/nanobot/pull/5193
* fix(slack): scope channel thread openers to their own session by @pblocz in https://github.com/HKUDS/nanobot/pull/5192
* fix(weixin): recover refreshed state after session expiry by @chengyongru in https://github.com/HKUDS/nanobot/pull/5196
* feat(providers): support DeepSeek Responses API by @chengyongru in https://github.com/HKUDS/nanobot/pull/5197
* fix(session): tolerate malformed persisted session summary by @KDB-Wind in https://github.com/HKUDS/nanobot/pull/5201
* fix(exec): preserve wait targets across response truncation by @KDB-Wind in https://github.com/HKUDS/nanobot/pull/5200
* refactor(cli): narrow Pyright suppressions by @KDB-Wind in https://github.com/HKUDS/nanobot/pull/5199
* fix(cron): preserve manual run completion state by @yu-xin-c in https://github.com/HKUDS/nanobot/pull/5183
* fix(memory): handle non-string timestamp and missing role in raw_archive by @santhreal in https://github.com/HKUDS/nanobot/pull/5153
* fix(providers): require api_base before local provider wins on keyword match by @NearlCrews in https://github.com/HKUDS/nanobot/pull/3732
* refactor(webui): reuse sidebar selection highlight by @Re-bin in https://github.com/HKUDS/nanobot/pull/5209
* perf(webui): accelerate JSONL session list and thread loading by @chengyongru in https://github.com/HKUDS/nanobot/pull/5194
* fix(webui): show timestamps for replayed messages by @chengyongru in https://github.com/HKUDS/nanobot/pull/5217
* fix(image): send Gemini Flash hints via generationConfig.imageConfig by @arcdrake22 in https://github.com/HKUDS/nanobot/pull/5216
* Register correct MIME types for static assets on Windows by @amkile in https://github.com/HKUDS/nanobot/pull/5191
* fix(webui): remove unused bot identity settings by @chengyongru in https://github.com/HKUDS/nanobot/pull/5225
* fix(plugins): use uv when pip is unavailable by @KDB-Wind in https://github.com/HKUDS/nanobot/pull/5213
* fix(webui): dismiss mobile keyboard after send by @chengyongru in https://github.com/HKUDS/nanobot/pull/5226
* fix(gateway): close agent resources deterministically on stop by @arcdrake22 in https://github.com/HKUDS/nanobot/pull/5215
* fix(cron): validate expression syntax in _validate_schedule_for_add by @amir-rezaei in https://github.com/HKUDS/nanobot/pull/5141
* feat(providers): add Eden AI as an OpenAI-compatible gateway provider by @MVS-source in https://github.com/HKUDS/nanobot/pull/4861
* fix(webui): stabilize thread during IME input by @chengyongru in https://github.com/HKUDS/nanobot/pull/5229
* fix(webui): show actual local trigger messages by @chengyongru in https://github.com/HKUDS/nanobot/pull/5228
* docs(providers): add ModelScope (魔搭) section by @Krislu1221 in https://github.com/HKUDS/nanobot/pull/5038
* fix(webui): complete i18n audit by @chengyongru in https://github.com/HKUDS/nanobot/pull/5227
* fix(providers): keep DeepSeek reasoning items wire-valid by @arcdrake22 in https://github.com/HKUDS/nanobot/pull/5214
* feat(session): add cross-session search and mentions by @Re-bin in https://github.com/HKUDS/nanobot/pull/5211
* fix(anthropic): support Opus 5 effort controls by @chengyongru in https://github.com/HKUDS/nanobot/pull/5236
* feat(webui): add integrated Vite dev mode by @chengyongru in https://github.com/HKUDS/nanobot/pull/5239
* fix(webui): refine inline token highlights by @chengyongru in https://github.com/HKUDS/nanobot/pull/5241
* fix(commands): reject malformed slash commands by @chengyongru in https://github.com/HKUDS/nanobot/pull/5242
* fix(webui): align automation metadata with timestamps by @chengyongru in https://github.com/HKUDS/nanobot/pull/5243
* refactor(webui): unify floating controls by @Re-bin in https://github.com/HKUDS/nanobot/pull/5240
* fix(webui): align timestamp tooltip styles by @chengyongru in https://github.com/HKUDS/nanobot/pull/5245
* fix(webui): render markdown in prompt rail previews by @chengyongru in https://github.com/HKUDS/nanobot/pull/5244
* fix(telegram): keep fenced code intact when language has special chars by @santhreal in https://github.com/HKUDS/nanobot/pull/5222
* feat(webui): support trusted proxy bootstrap auth by @concertypin in https://github.com/HKUDS/nanobot/pull/5210
* fix(wecom): fall back when filename sanitization strips everything by @santhreal in https://github.com/HKUDS/nanobot/pull/5223
* feat(mattermost): separate group policy for threads and expose in WebUI by @goodtiding5 in https://github.com/HKUDS/nanobot/pull/5233
* refactor(session): remove request-scoped access grants by @chengyongru in https://github.com/HKUDS/nanobot/pull/5238
* fix(webui): feather clipped activity edges by @chengyongru in https://github.com/HKUDS/nanobot/pull/5250
* refactor(webui): improve visual consistency by @chengyongru in https://github.com/HKUDS/nanobot/pull/5249
* fix(whatsapp): detect outbound media content before dispatch by @chengyongru in https://github.com/HKUDS/nanobot/pull/5203
* feat: add provider-native request switches by @chengyongru in https://github.com/HKUDS/nanobot/pull/5254
* perf(webui): reduce cold-start payload by @chengyongru in https://github.com/HKUDS/nanobot/pull/5262
* fix(webui): tighten interactive motion by @chengyongru in https://github.com/HKUDS/nanobot/pull/5267
* fix(matrix): send non-empty POST body on room join for Continuwuity compatibility by @orrinwitt in https://github.com/HKUDS/nanobot/pull/5248
* feat(webui): drag sidebar sessions by @Re-bin in https://github.com/HKUDS/nanobot/pull/5261
* fix(session): preserve proactive channel delivery during session retention trimming by @ziuus in https://github.com/HKUDS/nanobot/pull/5272
* fix(memory): archive short idle sessions for Dream by @chengyongru in https://github.com/HKUDS/nanobot/pull/5280
* feat(webui): expand model preset editor inline by @Re-bin in https://github.com/HKUDS/nanobot/pull/5277
* fix(webui): keep activity text crisp while fading edges by @chengyongru in https://github.com/HKUDS/nanobot/pull/5281
* fix: modernize dependency recovery guidance by @chengyongru in https://github.com/HKUDS/nanobot/pull/5282
* refactor(webui): remove legacy session messages route by @chengyongru in https://github.com/HKUDS/nanobot/pull/5284
* fix(webui): preserve newly created topic route by @chengyongru in https://github.com/HKUDS/nanobot/pull/5285
* fix(weixin): harden protocol delivery, streaming, and login by @chengyongru in https://github.com/HKUDS/nanobot/pull/5263
* fix(channels): preserve global progress defaults by @chengyongru in https://github.com/HKUDS/nanobot/pull/5287
* fix(webui): prevent image hover clipping by @chengyongru in https://github.com/HKUDS/nanobot/pull/5294
* refactor: remove verified dead code by @chengyongru in https://github.com/HKUDS/nanobot/pull/5296
* feat(webui): add temporary chat mode by @Re-bin in https://github.com/HKUDS/nanobot/pull/5252
* fix(webui): explain HTTPS requirement for voice input by @chengyongru in https://github.com/HKUDS/nanobot/pull/5304
* test: strengthen user-path coverage and CI gates by @chengyongru in https://github.com/HKUDS/nanobot/pull/5308
* docs: refresh WebUI user guidance by @chengyongru in https://github.com/HKUDS/nanobot/pull/5312
* fix(mcp): clean up failed HTTP connections by @chengyongru in https://github.com/HKUDS/nanobot/pull/5313
* fix(weixin): honor forced QR login by @KDB-Wind in https://github.com/HKUDS/nanobot/pull/5310
* fix(webui): improve UX recovery and empty states by @chengyongru in https://github.com/HKUDS/nanobot/pull/5315
* fix(webui): move mutations to authenticated WebSocket requests by @chengyongru in https://github.com/HKUDS/nanobot/pull/5317
* refactor(webui): extract deterministic event projection helpers by @chengyongru in https://github.com/HKUDS/nanobot/pull/5318
* refactor(agent): replace reflective runtime state access by @chengyongru in https://github.com/HKUDS/nanobot/pull/5319
* refactor(webui): make gateway own settings services by @chengyongru in https://github.com/HKUDS/nanobot/pull/5321
* fix(files): reject no-op edits by @chengyongru in https://github.com/HKUDS/nanobot/pull/5325
* feat(mcp): add browser OAuth for remote servers by @chengyongru in https://github.com/HKUDS/nanobot/pull/5316
* refactor(webui): split settings backend by domain by @chengyongru in https://github.com/HKUDS/nanobot/pull/5323
* refactor(webui): split settings frontend by domain by @chengyongru in https://github.com/HKUDS/nanobot/pull/5330
* test(webui): await lazy settings import deterministically by @chengyongru in https://github.com/HKUDS/nanobot/pull/5332
* fix(webui): soften form control focus rings by @chengyongru in https://github.com/HKUDS/nanobot/pull/5326
* fix(providers): preserve nanobot tools with OpenRouter server tools by @chengyongru in https://github.com/HKUDS/nanobot/pull/5335
* feat(plugins): integrate Agent Plugins with CLI Apps by @Re-bin in https://github.com/HKUDS/nanobot/pull/5288
* feat(webui): PWA support by @morandot in https://github.com/HKUDS/nanobot/pull/5336
* fix(webui): surface MCP runtime connection failures by @chengyongru in https://github.com/HKUDS/nanobot/pull/5331
* fix(matrix): isolate thread sessions by @yu-xin-c in https://github.com/HKUDS/nanobot/pull/5286
* fix(tools): reject non-finite number parameters by @wesleyzhangwq in https://github.com/HKUDS/nanobot/pull/5265
* fix(providers): stop writing API keys into process os.environ by @LHMQ878 in https://github.com/HKUDS/nanobot/pull/5269
* fix(skills): make weather workflow Windows-safe by @KailBug in https://github.com/HKUDS/nanobot/pull/5303
* fix(cli): stop leaking API keys to CLI app subprocesses by @LHMQ878 in https://github.com/HKUDS/nanobot/pull/5270
* fix(exec): terminate one-shot process trees on cleanup by @yorkhellen in https://github.com/HKUDS/nanobot/pull/5346
* feat(webui): add tabbed pane workbench by @chengyongru in https://github.com/HKUDS/nanobot/pull/5322
* fix(webui): restore session drag and harden frontend loading by @chengyongru in https://github.com/HKUDS/nanobot/pull/5351
* refactor: move MCP lifecycle out of AgentLoop by @chengyongru in https://github.com/HKUDS/nanobot/pull/5343
* feat(webui): add MCP management dialog by @chengyongru in https://github.com/HKUDS/nanobot/pull/5355
* fix(security): harden WebUI caches and CLI app subprocesses by @Re-bin in https://github.com/HKUDS/nanobot/pull/5359
* fix(session): store session history outside the agent workspace by @lmzopq in https://github.com/HKUDS/nanobot/pull/5279
* fix(tools): treat redirection and grouping delimiters in ExecTool path guard by @santhreal in https://github.com/HKUDS/nanobot/pull/5218
* feat(providers): support DeepSeek V4 Pro Responses by @chengyongru in https://github.com/HKUDS/nanobot/pull/5362
* fix(docker): restore capabilities for privilege drop by @yu-xin-c in https://github.com/HKUDS/nanobot/pull/5320
* fix(web): keep credential-bearing URLs away from the remote Jina reader by @shixi-li in https://github.com/HKUDS/nanobot/pull/5258
* fix(exec): guard bare and named-user home paths by @yorkhellen in https://github.com/HKUDS/nanobot/pull/5329
* fix(gemini): preserve imported tool calls with signature fallback by @arcdrake22 in https://github.com/HKUDS/nanobot/pull/5230
* fix(weixin): persist QR-login token to config.json on connect by @aiguozhi123456 in https://github.com/HKUDS/nanobot/pull/5361
* [Security] `exec.allowPatterns` shell-chain bypass allows unintended command execution by @abhinavaditya811 in https://github.com/HKUDS/nanobot/pull/5345
* fix(webui): restore transcript-only session history by @Re-bin in https://github.com/HKUDS/nanobot/pull/5384
* feat(webui): add native workspace folder picker by @Re-bin in https://github.com/HKUDS/nanobot/pull/5381
* fix(session): serialize canonical file access by @chengyongru in https://github.com/HKUDS/nanobot/pull/5383
* fix(session): restore state when file-cap archive fails by @dajiaohuang in https://github.com/HKUDS/nanobot/pull/5380
* feat(webui): polish sidebar and session transitions by @chengyongru in https://github.com/HKUDS/nanobot/pull/5393
* feat(webui): refine conversation groups and shared shapes by @Re-bin in https://github.com/HKUDS/nanobot/pull/5395
* fix(anthropic): treat stream idle timeout as inactivity only, not total time by @shen0122 in https://github.com/HKUDS/nanobot/pull/5392
* fix(webui): preserve range selection and turn timing by @Re-bin in https://github.com/HKUDS/nanobot/pull/5397
* fix(webui): clarify model preset display names by @Re-bin in https://github.com/HKUDS/nanobot/pull/5399
* fix(cron): keep scheduler alive when job-store persistence fails by @rickererer in https://github.com/HKUDS/nanobot/pull/5376
* fix(agent): bound per-session file state lifecycle by @yu-xin-c in https://github.com/HKUDS/nanobot/pull/5370
* fix(plugins): revalidate cached skill roots after package changes by @yu-xin-c in https://github.com/HKUDS/nanobot/pull/5369
* fix(webui): hide assistant actions until turn end by @ZhouJ-sh in https://github.com/HKUDS/nanobot/pull/5371
* feat(providers): add OrcaRouter as a named gateway provider by @XiaoHuo888-hue in https://github.com/HKUDS/nanobot/pull/5328
* refactor(models): unify preset names by @Re-bin in https://github.com/HKUDS/nanobot/pull/5400
* fix(webui): make mutations reconnect-safe by @chengyongru in https://github.com/HKUDS/nanobot/pull/5401
* feat(cli): add native TypeScript terminal UI by @Re-bin in https://github.com/HKUDS/nanobot/pull/5406
* fix(telegram): recover from silently stalled polling by @QQQ300kuai in https://github.com/HKUDS/nanobot/pull/5156
* fix(gateway): stabilize process identities by @Re-bin in https://github.com/HKUDS/nanobot/pull/5416
* fix(gateway): allow Windows launcher PID handoff by @chengyongru in https://github.com/HKUDS/nanobot/pull/5418
* perf(tui): reduce cold-start and exit latency by @chengyongru in https://github.com/HKUDS/nanobot/pull/5424
* fix(tui): keep composer visible and focused by @chengyongru in https://github.com/HKUDS/nanobot/pull/5427
* fix(tui): refresh expired API credentials by @chengyongru in https://github.com/HKUDS/nanobot/pull/5432
* feat(webui): add lightweight cross-session messaging by @chengyongru in https://github.com/HKUDS/nanobot/pull/5358
* test(exec): wait deterministically for truncation output by @chengyongru in https://github.com/HKUDS/nanobot/pull/5433
* fix(mattermost): ignore system posts by @Shizoqua in https://github.com/HKUDS/nanobot/pull/5434
* fix(webui): return promptly after Ctrl-C by @chengyongru in https://github.com/HKUDS/nanobot/pull/5438
* perf(memory): reuse conversation prefix for local compaction by @chengyongru in https://github.com/HKUDS/nanobot/pull/5440
* fix(tui): expose /exit in command menu by @KailBug in https://github.com/HKUDS/nanobot/pull/5443
* feat(tui): start fresh chats in launch workspace by @chengyongru in https://github.com/HKUDS/nanobot/pull/5448
* fix(tui): keep navigation commands in Herdr panes by @chengyongru in https://github.com/HKUDS/nanobot/pull/5449
* fix(tui): prevent local gateway startup stalls by @chengyongru in https://github.com/HKUDS/nanobot/pull/5450
* fix(tui): keep context view concise by @chengyongru in https://github.com/HKUDS/nanobot/pull/5451
* fix(deps): support only standard socks5:// proxies by @chengyongru in https://github.com/HKUDS/nanobot/pull/5439
* feat(tui): print resume command on exit by @chengyongru in https://github.com/HKUDS/nanobot/pull/5452
* fix(provider): retry Codex server_error by @akinolur in https://github.com/HKUDS/nanobot/pull/5455
* fix(agent): keep default prompt paths relative by @chengyongru in https://github.com/HKUDS/nanobot/pull/5460
* fix(providers): report Responses cached tokens by @chengyongru in https://github.com/HKUDS/nanobot/pull/5462
* feat(tui): add /detach command by @chengyongru in https://github.com/HKUDS/nanobot/pull/5461
* fix(matrix): interpolate error log context by @Shizoqua in https://github.com/HKUDS/nanobot/pull/5458
* fix(providers): retry before falling back by @chengyongru in https://github.com/HKUDS/nanobot/pull/5422
* fix(webui): refine model preset badge state and interactions by @chengyongru in https://github.com/HKUDS/nanobot/pull/5465
* fix(tui): reduce redundant runtime chrome by @chengyongru in https://github.com/HKUDS/nanobot/pull/5466
* fix(tui): clarify input cache telemetry by @chengyongru in https://github.com/HKUDS/nanobot/pull/5468
* fix(tui): preserve keyboard picker selection by @chengyongru in https://github.com/HKUDS/nanobot/pull/5470
* feat(providers): support DeepSeek V4 Flash Vision by @chengyongru in https://github.com/HKUDS/nanobot/pull/5474
* fix(webui): keep iOS PWA controls inside safe area by @chengyongru in https://github.com/HKUDS/nanobot/pull/5477
* fix(slack): validate file downloads across redirects by @KDB-Wind in https://github.com/HKUDS/nanobot/pull/5414
* feat(tui): render LaTeX as Unicode by @chengyongru in https://github.com/HKUDS/nanobot/pull/5476
* fix(dream): advance cursor when tool errors were recovered, and report why a run did not complete by @flobo3 in https://github.com/HKUDS/nanobot/pull/5442
* fix(cron): retire persisted heartbeat/dream system jobs when disabled by @aiguozhi123456 in https://github.com/HKUDS/nanobot/pull/5407
* feat(webui): unify turn observability by @Re-bin in https://github.com/HKUDS/nanobot/pull/5486
* docs: refresh team and contributor credits by @Re-bin in https://github.com/HKUDS/nanobot/pull/5488
* refactor: remove remaining dead code by @chengyongru in https://github.com/HKUDS/nanobot/pull/5475
* feat(cli): expose nanobot process identities by @Re-bin in https://github.com/HKUDS/nanobot/pull/5492
* fix(webui): keep answer text outside reasoning shell by @chengyongru in https://github.com/HKUDS/nanobot/pull/5491
* feat(runtime): add user-controlled turn recovery by @Re-bin in https://github.com/HKUDS/nanobot/pull/5420
* fix(tui): avoid saving empty sessions by @Re-bin in https://github.com/HKUDS/nanobot/pull/5499
* fix(codex): reuse TLS contexts across requests by @chengyongru in https://github.com/HKUDS/nanobot/pull/5500
* fix(exec): disable command guard in full access by @chengyongru in https://github.com/HKUDS/nanobot/pull/5501
* fix(tui): preserve shell after Ctrl+C by @chengyongru in https://github.com/HKUDS/nanobot/pull/5502
* fix(webui): preserve causal message order (NAN-29) by @chengyongru in https://github.com/HKUDS/nanobot/pull/5503
* fix(agent): time out no-tools model requests by @chrischen-coder in https://github.com/HKUDS/nanobot/pull/5496
* test(exec): remove Windows process timing races by @chengyongru in https://github.com/HKUDS/nanobot/pull/5517
* refactor(providers): define typed LLM usage contract by @chengyongru in https://github.com/HKUDS/nanobot/pull/5480
* feat(usage): add unified provider usage backend by @chengyongru in https://github.com/HKUDS/nanobot/pull/5481
* fix(agent): honor selected project workspace by @Re-bin in https://github.com/HKUDS/nanobot/pull/5506
* fix(usage): record provider stream timing by @chengyongru in https://github.com/HKUDS/nanobot/pull/5518
* fix(agent): let subagents recover from tool errors by @chengyongru in https://github.com/HKUDS/nanobot/pull/5523
* fix(agent): wait for exec sessions without polling by @chengyongru in https://github.com/HKUDS/nanobot/pull/5526
* feat: add demand-driven document retrieval by @chengyongru in https://github.com/HKUDS/nanobot/pull/5525
* style(tui): keep short transcripts and composer top-aligned by @KailBug in https://github.com/HKUDS/nanobot/pull/5530
* fix(agent): wait for background subagents only at turn exit by @chengyongru in https://github.com/HKUDS/nanobot/pull/5529
* fix(tools): keep find_files scans responsive by @chengyongru in https://github.com/HKUDS/nanobot/pull/5533
* feat(tui): autocomplete skill references by @chengyongru in https://github.com/HKUDS/nanobot/pull/5534
* refactor(tui): clarify active composer actions by @chengyongru in https://github.com/HKUDS/nanobot/pull/5538
* fix(provider): stabilize Codex prompt cache routing by @chengyongru in https://github.com/HKUDS/nanobot/pull/5540
* fix(webui): project generated titles onto per-chat sessions under unifiedSession by @zpljd258 in https://github.com/HKUDS/nanobot/pull/5528
* fix(gateway): retry MCP readiness before turns by @chengyongru in https://github.com/HKUDS/nanobot/pull/5535
* refactor(agent): make run usage explicit by @chengyongru in https://github.com/HKUDS/nanobot/pull/5546
* refactor(agent): remove loop iteration state by @chengyongru in https://github.com/HKUDS/nanobot/pull/5549
* fix(gitstore): detect rapid same-size rewrites by @Wsp030914 in https://github.com/HKUDS/nanobot/pull/5473
* refactor(agent): make checkpoint recovery ownership explicit by @chengyongru in https://github.com/HKUDS/nanobot/pull/5552
* fix(session): clarify read_session query semantics by @bingqilinweimaotai in https://github.com/HKUDS/nanobot/pull/5551
* refactor(agent): reduce loop and runner parameter plumbing by @chengyongru in https://github.com/HKUDS/nanobot/pull/5554
* refactor(webui): isolate websocket application orchestration by @chengyongru in https://github.com/HKUDS/nanobot/pull/5548
* fix(gateway): recover degraded WebSocket listener by @chengyongru in https://github.com/HKUDS/nanobot/pull/5544
* fix(webui): compact single-pane chat header by @Re-bin in https://github.com/HKUDS/nanobot/pull/5519
* refactor(agent): remove duplicate progress streaming path by @chengyongru in https://github.com/HKUDS/nanobot/pull/5555
* fix(tui): surface chat connection failures by @chengyongru in https://github.com/HKUDS/nanobot/pull/5543
* fix(agent): complete native reasoning lifecycle by @chengyongru in https://github.com/HKUDS/nanobot/pull/5556
* refactor(agent): load MyTool through tool loader by @chengyongru in https://github.com/HKUDS/nanobot/pull/5558
* refactor(agent): decouple loop from message tool state by @chengyongru in https://github.com/HKUDS/nanobot/pull/5559
* fix: queue concurrent subagents by @chengyongru in https://github.com/HKUDS/nanobot/pull/5566
* feat(tui): support pasting clipboard images by @chengyongru in https://github.com/HKUDS/nanobot/pull/5563
* refactor(memory): decouple archival from provider state by @chengyongru in https://github.com/HKUDS/nanobot/pull/5565
* fix(agent): default request concurrency to unlimited by @chengyongru in https://github.com/HKUDS/nanobot/pull/5572
* refactor(memory): remove consolidation ratio by @chengyongru in https://github.com/HKUDS/nanobot/pull/5575
* refactor(agent): extract tool execution boundary by @chengyongru in https://github.com/HKUDS/nanobot/pull/5569
* fix(tui): preserve full UI in Herdr panes by @chengyongru in https://github.com/HKUDS/nanobot/pull/5577
* test(tui): avoid clipboard status race on Windows by @chengyongru in https://github.com/HKUDS/nanobot/pull/5578
* feat(cli): make nanobot the default agent command by @Re-bin in https://github.com/HKUDS/nanobot/pull/5560
* fix(webui): preserve named pane groups by @Re-bin in https://github.com/HKUDS/nanobot/pull/5591
* fix(webui): hide SkillHub install counts by @Re-bin in https://github.com/HKUDS/nanobot/pull/5595
* feat(providers): discover OAuth model catalogs online by @Re-bin in https://github.com/HKUDS/nanobot/pull/5596
* fix(cli): stream gateway logs in WebUI launcher by @Re-bin in https://github.com/HKUDS/nanobot/pull/5599
* fix(tui): preserve cursor position on Windows exit by @KailBug in https://github.com/HKUDS/nanobot/pull/5581
* fix(agent): close native reasoning on cancellation by @KDB-Wind in https://github.com/HKUDS/nanobot/pull/5600
* fix(agent): bound session message rate-limit state by @yu-xin-c in https://github.com/HKUDS/nanobot/pull/5594
* fix(agent): add retry hint to raised tool exceptions by @Oxygen56 in https://github.com/HKUDS/nanobot/pull/5588
* fix(cron): sanitize persisted origin metadata by @Oxygen56 in https://github.com/HKUDS/nanobot/pull/5587
* perf(email): fetch headers before body, use UID SEARCH to skip re-fetch by @tilladam in https://github.com/HKUDS/nanobot/pull/5489
* fix(dingtalk): drain inbound background tasks by @yu-xin-c in https://github.com/HKUDS/nanobot/pull/5464
* refactor(agent): defer transcript assembly to runner by @chengyongru in https://github.com/HKUDS/nanobot/pull/5608
* refactor(agent): make memory summaries cumulative by @chengyongru in https://github.com/HKUDS/nanobot/pull/5610
* docs(tools): clarify edit_file selector exclusivity by @dajiaohuang in https://github.com/HKUDS/nanobot/pull/5598
* style(tui): simplify the runtime header by @chengyongru in https://github.com/HKUDS/nanobot/pull/5618
* refactor(agent): unify runner request fitting by @chengyongru in https://github.com/HKUDS/nanobot/pull/5612
* fix(telegram): upgrade streaming preview to rich in place at stream end by @nolanchic in https://github.com/HKUDS/nanobot/pull/5531
* fix(websocket): stop treating SO_ACCEPTCONN as portable in listener health check by @Krislu1221 in https://github.com/HKUDS/nanobot/pull/5617
* fix(tui): preserve input typed after submit by @chengyongru in https://github.com/HKUDS/nanobot/pull/5621
* fix(dream): stop duplicating SOUL/USER/MEMORY into the Dream prompt by @DannyYTL in https://github.com/HKUDS/nanobot/pull/5622
* fix(agent): release completed task groups by @yu-xin-c in https://github.com/HKUDS/nanobot/pull/5430
* fix(webui): delete unpersisted pane sessions by @KailBug in https://github.com/HKUDS/nanobot/pull/5624
* feat(webui): guide first-run AI setup by @Re-bin in https://github.com/HKUDS/nanobot/pull/5625
* refactor(agent): let runner own context compaction by @chengyongru in https://github.com/HKUDS/nanobot/pull/5568
* fix(webui): align native sidebar controls by @Re-bin in https://github.com/HKUDS/nanobot/pull/5636
* fix(channels): bound origin reply fingerprint cache by @Shizoqua in https://github.com/HKUDS/nanobot/pull/5634
* fix(provider): preserve Codex prompt cache affinity by @chengyongru in https://github.com/HKUDS/nanobot/pull/5632
* fix(sdk): preserve queued events on stream close by @Shizoqua in https://github.com/HKUDS/nanobot/pull/5635
* fix(tool_hints): respect max_length for plain (non-path/non-command) tool values by @loseintwilight in https://github.com/HKUDS/nanobot/pull/5629
* fix(agent): observe session reply timeout task failures by @pengpengyi92 in https://github.com/HKUDS/nanobot/pull/5515
* fix(webui): clear stale stream state after Gateway reconnect by @Oxygen56 in https://github.com/HKUDS/nanobot/pull/5514
* fix(signal): honor wildcard in inbound allowlists by @Wsp030914 in https://github.com/HKUDS/nanobot/pull/5472
* fix(providers): apply fallback policy to raised errors by @KDB-Wind in https://github.com/HKUDS/nanobot/pull/5413
* fix(matrix): complete Element SAS request flow by @dajiaohuang in https://github.com/HKUDS/nanobot/pull/5385
* fix(webui): show language names only in their native form by @chengyongru in https://github.com/HKUDS/nanobot/pull/5646
* fix(matrix): propagate stream delivery failures by @Shizoqua in https://github.com/HKUDS/nanobot/pull/5637
* fix(channels): preserve indentation across message splits by @pengpengyi92 in https://github.com/HKUDS/nanobot/pull/5334
* fix(webui): preserve Hero model preset during chat creation by @chengyongru in https://github.com/HKUDS/nanobot/pull/5650
* fix(webui): keep every concurrently loaded channel locale registered by @yaoruiquan in https://github.com/HKUDS/nanobot/pull/5651
* feat(webui): visualize context usage by logical round by @chengyongru in https://github.com/HKUDS/nanobot/pull/5649
* fix(websocket): isolate slow clients from outbound fanout by @chengyongru in https://github.com/HKUDS/nanobot/pull/5655
* refactor(webui): extract outbound wire encoding by @chengyongru in https://github.com/HKUDS/nanobot/pull/5657
* fix: stabilize session labels, TUI streaming, and pairing prompts by @Re-bin in https://github.com/HKUDS/nanobot/pull/5639
* feat: make context compaction visible in channels by @chengyongru in https://github.com/HKUDS/nanobot/pull/5656
* refactor(agent): remove context block budget override by @chengyongru in https://github.com/HKUDS/nanobot/pull/5668
* refactor: remove unused internal helpers and state by @chengyongru in https://github.com/HKUDS/nanobot/pull/5667
* fix(cli): skip WebUI bundle check in dev mode by @chengyongru in https://github.com/HKUDS/nanobot/pull/5671
* test: remove obsolete nonexistence checks by @chengyongru in https://github.com/HKUDS/nanobot/pull/5672
* refactor(events): unify scoped runtime notifications across clients by @chengyongru in https://github.com/HKUDS/nanobot/pull/5670
* fix(tui): show context window usage in footer by @chengyongru in https://github.com/HKUDS/nanobot/pull/5679
* ci: parallelize tests and filter unrelated jobs by @chengyongru in https://github.com/HKUDS/nanobot/pull/5680
* fix(wecom): use SDK media upload API by @chengyongru in https://github.com/HKUDS/nanobot/pull/5683
* test: stabilize flaky and environment-dependent tests by @KDB-Wind in https://github.com/HKUDS/nanobot/pull/5677
* docs: refresh README with current WebUI feature gallery by @chengyongru in https://github.com/HKUDS/nanobot/pull/5684
* fix(webui): resume incomplete model setup in the browser by @chengyongru in https://github.com/HKUDS/nanobot/pull/5685
* fix(ui): surface model retry status (NAN-34) by @chengyongru in https://github.com/HKUDS/nanobot/pull/5504
* fix(memory): invalidate provider state after idle compaction by @chengyongru in https://github.com/HKUDS/nanobot/pull/5688
* fix(webui): keep working timer consistent across first output by @chengyongru in https://github.com/HKUDS/nanobot/pull/5689
* docs: unify personal agent installation with quick start by @chengyongru in https://github.com/HKUDS/nanobot/pull/5690
* feat(cli): add attach-only Desktop target selection by @Re-bin in https://github.com/HKUDS/nanobot/pull/5676
* fix(webui): preserve multiline dollar math with attached delimiters by @chengyongru in https://github.com/HKUDS/nanobot/pull/5691
* docs: clarify gateway health and WebSocket readiness by @shakewingo in https://github.com/HKUDS/nanobot/pull/5687
* feat(web-search): add AnySearch provider (key-optional, anonymous quota) by @cleverLucky in https://github.com/HKUDS/nanobot/pull/5607
* fix: use summary checkpoints for all compaction triggers by @chengyongru in https://github.com/HKUDS/nanobot/pull/5694
* fix(exec): resolve relative working_dir from workspace by @BenWituka in https://github.com/HKUDS/nanobot/pull/5682
* fix(agent): keep tool results stable across replay by @chengyongru in https://github.com/HKUDS/nanobot/pull/5695
* test(webui): require explicit opt-in for title generation by @zpljd258 in https://github.com/HKUDS/nanobot/pull/5648
* fix(webui): keep queued prompts scoped across session switches by @chengyongru in https://github.com/HKUDS/nanobot/pull/5700
* feat(tg): add support for streaming rich messages by @wzrayyy in https://github.com/HKUDS/nanobot/pull/5614
* fix(webui): use styled tooltips for model presets and activity previews by @chengyongru in https://github.com/HKUDS/nanobot/pull/5701
* fix(tools): support recursive glob filters in file searches by @n1uz1 in https://github.com/HKUDS/nanobot/pull/5692
* fix(codex): refresh model catalog for Astra by @Re-bin in https://github.com/HKUDS/nanobot/pull/5709
* fix(webui): preserve less-than comparisons in streaming math by @chengyongru in https://github.com/HKUDS/nanobot/pull/5712
* fix(webui): prevent italic activity labels from clipping by @chengyongru in https://github.com/HKUDS/nanobot/pull/5713
* feat(tui): add /usage context and token charts by @chengyongru in https://github.com/HKUDS/nanobot/pull/5705
* fix(webui): keep edit diffs outside reasoning folds by @chengyongru in https://github.com/HKUDS/nanobot/pull/5714
* fix(webui): refresh skill suggestions when opening the picker by @Re-bin in https://github.com/HKUDS/nanobot/pull/5716
* perf(webui): reduce repeated work and bound history rendering by @chengyongru in https://github.com/HKUDS/nanobot/pull/5703
* fix(webui): preserve project when creating a topic from its menu by @chengyongru in https://github.com/HKUDS/nanobot/pull/5717
* feat(exec): add a macOS Seatbelt sandbox backend by @LuckTerence in https://github.com/HKUDS/nanobot/pull/5628
* feat(providers): send x-opencode-session header for OpenCode session by @GUTYL in https://github.com/HKUDS/nanobot/pull/5662
* feat(webui): expand and organize settings with autosave by @chengyongru in https://github.com/HKUDS/nanobot/pull/5704
* fix(exec): preserve UTF-8 across streaming output chunks by @gary23w in https://github.com/HKUDS/nanobot/pull/5708
* fix(tg): route /compact and /evaluator-prompt to the command router by @Naster17 in https://github.com/HKUDS/nanobot/pull/5707
* fix(mcp): refresh expired OAuth tokens automatically by @chengyongru in https://github.com/HKUDS/nanobot/pull/5573
* fix(telegram): adapt command spellings within the channel by @Naster17 in https://github.com/HKUDS/nanobot/pull/5711
* feat(webui): refine sidebar hierarchy and selection feedback by @chengyongru in https://github.com/HKUDS/nanobot/pull/5722
* fix(webui): align chat elements and fix prompt rail grouping by @chengyongru in https://github.com/HKUDS/nanobot/pull/5725
* fix(webui): align standalone page widths with conversations by @Re-bin in https://github.com/HKUDS/nanobot/pull/5723
* fix(discord): update the compaction notice in place instead of sending a second message by @L4XB in https://github.com/HKUDS/nanobot/pull/5720
* fix: stream internal model calls with idle timeouts by @chengyongru in https://github.com/HKUDS/nanobot/pull/5730
* feat(tg): collapse context compaction notices into one edited message by @Naster17 in https://github.com/HKUDS/nanobot/pull/5706
* feat(webui): improve setup flows across chat channels (NAN-112) by @chengyongru in https://github.com/HKUDS/nanobot/pull/5356
* refactor(webui): split channel setup responsibilities by @chengyongru in https://github.com/HKUDS/nanobot/pull/5733
* perf(webui): cache public favicon requests by @chengyongru in https://github.com/HKUDS/nanobot/pull/5736
* fix(memory): clarify Dream prompt write permissions by @chengyongru in https://github.com/HKUDS/nanobot/pull/5734
* fix(email): disable intermediate progress delivery by @chengyongru in https://github.com/HKUDS/nanobot/pull/5737
* feat(webui): simplify automation management and unify disclosure motion by @Re-bin in https://github.com/HKUDS/nanobot/pull/5740
* fix(webui): omit binary data from tool progress by @chengyongru in https://github.com/HKUDS/nanobot/pull/5741
* fix(webui): restore navigation after automation deletion by @Re-bin in https://github.com/HKUDS/nanobot/pull/5742
* chore: remove core agent line count script by @chengyongru in https://github.com/HKUDS/nanobot/pull/5744
* fix(provider): clean up replayed items before sending them to providers by @kkkhoo in https://github.com/HKUDS/nanobot/pull/5613
* fix(webui): make large history replay incremental and cached by @chengyongru in https://github.com/HKUDS/nanobot/pull/5745
* perf(webui): reduce long-text streaming refresh overhead by @chengyongru in https://github.com/HKUDS/nanobot/pull/5738
* fix(webui): make headless login self-explanatory by @chengyongru in https://github.com/HKUDS/nanobot/pull/5735
* fix(webui): simplify settings catalog controls and headings by @Re-bin in https://github.com/HKUDS/nanobot/pull/5743
* fix(webui): unify app logos and brand mentions by @Re-bin in https://github.com/HKUDS/nanobot/pull/5754
* fix(webui): improve mobile composer and settings navigation by @Re-bin in https://github.com/HKUDS/nanobot/pull/5755
* fix(webui): streamline the connection screen by @chengyongru in https://github.com/HKUDS/nanobot/pull/5758
* fix(webui): support remote project paths and honor picker capabilities by @chengyongru in https://github.com/HKUDS/nanobot/pull/5673
* test(security): keep proxy-clearing fixtures hermetic on hosts with OS-level proxies by @fszcd in https://github.com/HKUDS/nanobot/pull/5756
* fix(webui): keep Markdown table source inline in file previews by @chengyongru in https://github.com/HKUDS/nanobot/pull/5759
* fix(webui): adapt chat toolbar to available width by @chengyongru in https://github.com/HKUDS/nanobot/pull/5760
* fix(cron): preserve pending runs when editing automation details by @beemines in https://github.com/HKUDS/nanobot/pull/5751
* fix(cron): defer timer rearming while jobs execute by @Kuang-xianxin in https://github.com/HKUDS/nanobot/pull/5686
* fix(tools): preserve edit line boundaries and unify success summaries by @KailBug in https://github.com/HKUDS/nanobot/pull/5761
* perf: reduce streaming text processing and classic CLI redraws by @chengyongru in https://github.com/HKUDS/nanobot/pull/5728
* fix(memory): recover archive tool calls before raw fallback by @chengyongru in https://github.com/HKUDS/nanobot/pull/5774
* fix(qq): protect inbound attachment downloads from SSRF by @KDB-Wind in https://github.com/HKUDS/nanobot/pull/5697
* fix(feishu): use /page/cli verification URL for QR onboarding by @hammerhoundai in https://github.com/HKUDS/nanobot/pull/5768
* fix(session): search older pages of persisted conversation history by @beemines in https://github.com/HKUDS/nanobot/pull/5757
* fix(email): require trusted authentication results by @Re-bin in https://github.com/HKUDS/nanobot/pull/5778
* fix(tools): scope file-read dedup to model context by @chengyongru in https://github.com/HKUDS/nanobot/pull/5775
* fix(providers): preserve assistant content with tool calls by @wzrayyy in https://github.com/HKUDS/nanobot/pull/5783
* refactor(webui): animate segmented control indicator by @chengyongru in https://github.com/HKUDS/nanobot/pull/5786
* chore(release): prepare v0.3.5 by @Re-bin in https://github.com/HKUDS/nanobot/pull/5785
* build: bundle native TUI in platform wheels by @Re-bin in https://github.com/HKUDS/nanobot/pull/5787

## New Contributors
* @shixi-li made their first contribution in https://github.com/HKUDS/nanobot/pull/5054
* @khmylov made their first contribution in https://github.com/HKUDS/nanobot/pull/5036
* @stupidloud made their first contribution in https://github.com/HKUDS/nanobot/pull/4656
* @ATECHPCS made their first contribution in https://github.com/HKUDS/nanobot/pull/5126
* @Solaris-star made their first contribution in https://github.com/HKUDS/nanobot/pull/5136
* @arcdrake22 made their first contribution in https://github.com/HKUDS/nanobot/pull/5216
* @amkile made their first contribution in https://github.com/HKUDS/nanobot/pull/5191
* @amir-rezaei made their first contribution in https://github.com/HKUDS/nanobot/pull/5141
* @MVS-source made their first contribution in https://github.com/HKUDS/nanobot/pull/4861
* @concertypin made their first contribution in https://github.com/HKUDS/nanobot/pull/5210
* @orrinwitt made their first contribution in https://github.com/HKUDS/nanobot/pull/5248
* @ziuus made their first contribution in https://github.com/HKUDS/nanobot/pull/5272
* @wesleyzhangwq made their first contribution in https://github.com/HKUDS/nanobot/pull/5265
* @LHMQ878 made their first contribution in https://github.com/HKUDS/nanobot/pull/5269
* @KailBug made their first contribution in https://github.com/HKUDS/nanobot/pull/5303
* @abhinavaditya811 made their first contribution in https://github.com/HKUDS/nanobot/pull/5345
* @shen0122 made their first contribution in https://github.com/HKUDS/nanobot/pull/5392
* @rickererer made their first contribution in https://github.com/HKUDS/nanobot/pull/5376
* @XiaoHuo888-hue made their first contribution in https://github.com/HKUDS/nanobot/pull/5328
* @QQQ300kuai made their first contribution in https://github.com/HKUDS/nanobot/pull/5156
* @Shizoqua made their first contribution in https://github.com/HKUDS/nanobot/pull/5434
* @akinolur made their first contribution in https://github.com/HKUDS/nanobot/pull/5455
* @chrischen-coder made their first contribution in https://github.com/HKUDS/nanobot/pull/5496
* @Wsp030914 made their first contribution in https://github.com/HKUDS/nanobot/pull/5473
* @Oxygen56 made their first contribution in https://github.com/HKUDS/nanobot/pull/5588
* @tilladam made their first contribution in https://github.com/HKUDS/nanobot/pull/5489
* @nolanchic made their first contribution in https://github.com/HKUDS/nanobot/pull/5531
* @DannyYTL made their first contribution in https://github.com/HKUDS/nanobot/pull/5622
* @loseintwilight made their first contribution in https://github.com/HKUDS/nanobot/pull/5629
* @pengpengyi92 made their first contribution in https://github.com/HKUDS/nanobot/pull/5515
* @yaoruiquan made their first contribution in https://github.com/HKUDS/nanobot/pull/5651
* @shakewingo made their first contribution in https://github.com/HKUDS/nanobot/pull/5687
* @cleverLucky made their first contribution in https://github.com/HKUDS/nanobot/pull/5607
* @BenWituka made their first contribution in https://github.com/HKUDS/nanobot/pull/5682
* @n1uz1 made their first contribution in https://github.com/HKUDS/nanobot/pull/5692
* @LuckTerence made their first contribution in https://github.com/HKUDS/nanobot/pull/5628
* @GUTYL made their first contribution in https://github.com/HKUDS/nanobot/pull/5662
* @gary23w made their first contribution in https://github.com/HKUDS/nanobot/pull/5708
* @Naster17 made their first contribution in https://github.com/HKUDS/nanobot/pull/5707
* @L4XB made their first contribution in https://github.com/HKUDS/nanobot/pull/5720
* @kkkhoo made their first contribution in https://github.com/HKUDS/nanobot/pull/5613
* @fszcd made their first contribution in https://github.com/HKUDS/nanobot/pull/5756
* @beemines made their first contribution in https://github.com/HKUDS/nanobot/pull/5751
* @Kuang-xianxin made their first contribution in https://github.com/HKUDS/nanobot/pull/5686
* @hammerhoundai made their first contribution in https://github.com/HKUDS/nanobot/pull/5768

**Full Changelog**: https://github.com/HKUDS/nanobot/compare/v0.3.0...v0.3.5

---

> **Source** [HKUDS/nanobot](https://github.com/HKUDS/nanobot) · `v0.3.5` · 2026-09-15 · [upstream release](https://github.com/HKUDS/nanobot/releases/tag/v0.3.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
