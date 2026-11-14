---
title: "nanobot v0.2.2"
project: "nanobot"
repo: "HKUDS/nanobot"
tag: "v0.2.2"
version: "v0.2.2"
published: "2026-06-23"
type: "patch"
lang: "en"
summary: "🐈 nanobot v0.2.2 is here — 140 PRs merged, 21 new contributors. The agent got sturdier!"
---

# nanobot v0.2.2

🐈 **nanobot `v0.2.2`** is here — 140 PRs merged, 21 new contributors. The agent got sturdier!

The headline is **durability**. WebUI conversations now survive more of real life: transcripts are segmented instead of living in one fragile file, forked chats preserve replies more reliably, active turns scroll and replay more predictably, startup paths block less, and gateway shutdown is much calmer. Long sessions, stale providers, slow routes, broken config files, malformed history, stream stalls, and empty provider responses all got less likely to derail the work.

The second story is **nanobot becoming a real Python runtime**. The SDK is no longer just a thin convenience layer around the agent loop: concurrent `run()` calls are isolated, hooks are cleaner, MCP lifecycle handling is safer, runtime controls are broader, and the docs now teach the SDK from first principles. If you want to embed nanobot inside your own application, `v0.2.2` is the first release where that path feels intentional.

The third story is **the workbench getting broader and easier to live in**. The WebUI gained automation management, prompt navigation, token usage visibility, mobile polish, better update checks, richer activity timing, and a faster settings surface. The ecosystem expanded with Firecrawl as a keyless Web Data app, Exa / Bocha / Keenable / Volcengine search, more transcription providers, custom image generation, better Mistral and Kimi handling, and many channel fixes across Telegram, Feishu, WhatsApp, Slack, Email, QQ, DingTalk, and more.

## Highlights

- **More durable WebUI sessions** — Segmented transcript storage keeps large conversations readable without throwing away old turns, fork/replay paths preserve assistant replies more reliably, session deletion cleans up legacy files, refreshes no longer revive stale content, and active turns stay anchored while the model works. The WebUI also got prompt navigation, better mobile layout, clearer activity durations, token usage rendering, safer startup fetches, and on-demand version checks.

- **Python SDK as a first-class runtime** — The SDK now has safer concurrent `run()` behavior, explicit runtime controls, cleaner per-run hook handling, better MCP cleanup, improved facade lifecycle behavior, and more beginner-friendly documentation. This makes nanobot easier to embed in scripts, services, evaluations, and custom agent products.

- **Gateway and onboarding polish** — The gateway gained background/service controls, cleaner foreground shutdown, safer Ctrl+C behavior, and better MCP stdio cleanup. The onboarding flow was simplified around provider-first Quick Start, more neutral provider selection, safer WebUI setup, rollback on WebSocket failure, and better keyboard navigation.

- **Search, speech, and provider coverage** — Web search now covers Firecrawl, Exa, Bocha, Keenable, and Volcengine paths; transcription expanded with shared voice input plus OpenRouter, StepFun, SiliconFlow, Xiaomi MiMo, and AssemblyAI support. Providers got better Mistral reasoning handling, Kimi K2.7 thinking, OpenAI-compatible query/body controls, custom image generation, OpenAI image edits, safer Anthropic tool IDs, and stronger retry/fallback behavior.

- **Reliability hardening across the agent core** — Recent-history context is token-capped, idle auto-compact is on by default, Dream explains empty runs, malformed history is skipped, history cursors stay monotonic, tool schema estimates are cached, unknown builtin tool parameters are rejected, provider fallback logs the primary error, and stream stalls can retry or fall back without returning a truncated answer.

- **Channels that behave more like real apps** — Telegram gained richer message support with safer fallback detection; Feishu got streaming recovery, WebSocket card reading, table extraction, lazy SDK loading, and QR login; WhatsApp got read receipts, forwarded-message handling, and LID mapping; Slack allowlisted channels can require mentions; Email gained attachments and IMAP post-actions; QQ / Napcat, DingTalk, Weixin, Matrix, and others received targeted fixes.

- **Security and workspace boundaries** — Unsafe MCP HTTP URLs are rejected before probing, local provider endpoints bypass env proxies while cloud endpoints still respect them, workspace write policy is clearer, git commands work from workspace subdirectories without relaxing path guards, bwrap gets a sane `HOME`, and stripped image inputs no longer leak misleading local paths.

## Community

Huge thanks to everyone who shipped **`v0.2.2`** — **140 PRs**, **21 first-time contributors**, and a lot of careful review work. This release is less about one big switch and more about making nanobot dependable enough to keep open every day: steadier sessions, cleaner extension points, broader providers, and fewer sharp edges when real work gets long.

## What's Changed
* Refactor WebUI runtime state onto event bus by @chengyongru in https://github.com/HKUDS/nanobot/pull/4135
* feat(dingtalk): add group_user_isolation to separate sessions per use… by @lmzopq in https://github.com/HKUDS/nanobot/pull/4016
* feat(search): add Volcengine web search provider by @Re-bin in https://github.com/HKUDS/nanobot/pull/4141
* fix(webui): sort Chats group among projects by recency by @chengyongru in https://github.com/HKUDS/nanobot/pull/4151
* Fix WebUI refresh location routing by @chengyongru in https://github.com/HKUDS/nanobot/pull/4150
* fix: Support fallback copy for WebUI replies by @chengyongru in https://github.com/HKUDS/nanobot/pull/4149
* fix(memory): serialize cursor allocation in append_history (#4081) by @04cb in https://github.com/HKUDS/nanobot/pull/4147
* feat(channels): Add Napcat (QQ) channel by @chengyongru in https://github.com/HKUDS/nanobot/pull/4146
* feat(webui): add prompt rail and polish links by @Re-bin in https://github.com/HKUDS/nanobot/pull/4156
* fix(runner): prevent read_file offload loop by @jiehaoZ in https://github.com/HKUDS/nanobot/pull/4155
* refactor: split WebUI gateway dependencies by @chengyongru in https://github.com/HKUDS/nanobot/pull/4115
* fix(webui): bound startup fetch waits by @chengyongru in https://github.com/HKUDS/nanobot/pull/4157
* feat(email): add file attachment support to email channel by @chengyongru in https://github.com/HKUDS/nanobot/pull/4162
* refactor(dream): replace two-phase Dream class with simple cron + process_direct by @chengyongru in https://github.com/HKUDS/nanobot/pull/3990
* fix(session): reset out-of-range last_consolidated to recover hidden history (#4066) by @04cb in https://github.com/HKUDS/nanobot/pull/4169
* fix(email): skip progress messages to prevent empty emails after tool calls by @nblondiau in https://github.com/HKUDS/nanobot/pull/4165
* fix: restore top-level import order by @chengyongru in https://github.com/HKUDS/nanobot/pull/4174
* fix(qq): send pairing codes for unauthorized C2C users by @yorkhellen in https://github.com/HKUDS/nanobot/pull/4180
* fix(mcp): reconnect terminated sessions by @chengyongru in https://github.com/HKUDS/nanobot/pull/4171
* feat(webui): add new chat keyboard shortcut by @chengyongru in https://github.com/HKUDS/nanobot/pull/4185
* test: improve deterministic unit test coverage by @chengyongru in https://github.com/HKUDS/nanobot/pull/4189
* fix(cli): fall back to uv pip when pip is unavailable by @axelray-dev in https://github.com/HKUDS/nanobot/pull/4164
* Add run-level agent hook lifecycle by @chengyongru in https://github.com/HKUDS/nanobot/pull/4176
* feat(provider): Add support for Azure AAD based Auth for Azure OpenAI provider by @kunalk16 in https://github.com/HKUDS/nanobot/pull/4126
* fix(feishu): strip leading bot mention before commands by @Re-bin in https://github.com/HKUDS/nanobot/pull/4184
* feat(image): support custom image generation provider by @axelray-dev in https://github.com/HKUDS/nanobot/pull/4187
* Fix DM pairing for Weixin and Telegram by @chengyongru in https://github.com/HKUDS/nanobot/pull/4197
* fix(webui): persist user messages for refresh by @chengyongru in https://github.com/HKUDS/nanobot/pull/4201
* feat(command): add /skill slash command to list enabled skills by @Endeavour-Yuan in https://github.com/HKUDS/nanobot/pull/3968
* fix(sdk): close MCP connections from Nanobot facade by @axelray-dev in https://github.com/HKUDS/nanobot/pull/4216
* fix(providers): allow dropping default OpenAI image params via null extraBody by @04cb in https://github.com/HKUDS/nanobot/pull/4209
* feat(desktop): polish desktop shell and shared WebUI surfaces by @Re-bin in https://github.com/HKUDS/nanobot/pull/4195
* fix(whatsapp): handle LID group mentions by @danielphang in https://github.com/HKUDS/nanobot/pull/2663
* fix: preserve empty-string reasoning_content instead of coercing to None by @michaelxer in https://github.com/HKUDS/nanobot/pull/4227
* Fix token usage heatmap rendering by @chengyongru in https://github.com/HKUDS/nanobot/pull/4248
* docs: remove nightly branch guidance by @chengyongru in https://github.com/HKUDS/nanobot/pull/4245
* fix(mcp): reject unsafe HTTP URLs before probe by @yu-xin-c in https://github.com/HKUDS/nanobot/pull/4123
* feat(transcription): add shared voice input support by @Re-bin in https://github.com/HKUDS/nanobot/pull/4232
* feat(providers): add extra_query config for OpenAI-compatible providers by @axelray-dev in https://github.com/HKUDS/nanobot/pull/4217
* feat(transcription): configurable STT model + OpenRouter transcription provider by @breitburg in https://github.com/HKUDS/nanobot/pull/4113
* feat(transcription): add Xiaomi MiMo ASR provider (mimo-v2.5-asr) by @zpljd258 in https://github.com/HKUDS/nanobot/pull/4175
* feat(transcription): add AssemblyAI as transcription provider by @franciscomaestre in https://github.com/HKUDS/nanobot/pull/4224
* Improve tool call validation strictness by @chengyongru in https://github.com/HKUDS/nanobot/pull/4190
* fix(webui): render TeX math delimiters by @chengyongru in https://github.com/HKUDS/nanobot/pull/4252
* feat(email): add configurable IMAP post-actions for processed messages by @chengyongru in https://github.com/HKUDS/nanobot/pull/4258
* docs: make onboarding friendlier for beginners by @chengyongru in https://github.com/HKUDS/nanobot/pull/4177
* feat(webui): add assistant reply fork-from-here by @Bayern4ever-dot in https://github.com/HKUDS/nanobot/pull/4208
* fix(tools): keep apply_patch additions line-separated by @yu-xin-c in https://github.com/HKUDS/nanobot/pull/4266
* fix(providers): use max_completion_tokens for GPT-5/o-series models (#4261) by @04cb in https://github.com/HKUDS/nanobot/pull/4268
* fix(agent): finalize max-iteration turns without tools by @chengyongru in https://github.com/HKUDS/nanobot/pull/4269
* Add Exa web search provider by @erikmackinnon in https://github.com/HKUDS/nanobot/pull/4213
* feat(asr): add StepFun ASR SSE transcription provider by @morandot in https://github.com/HKUDS/nanobot/pull/4260
* fix(sandbox): set HOME inside bwrap by @primit1v0 in https://github.com/HKUDS/nanobot/pull/4239
* search: add Bocha web search provider by @morandot in https://github.com/HKUDS/nanobot/pull/4182
* fix(websocket): Fix bug in webui where session content is dropped by @Syoc in https://github.com/HKUDS/nanobot/pull/4267
* fix(feishu): lazy-load lark SDK during gateway startup by @chengyongru in https://github.com/HKUDS/nanobot/pull/4277
* Fail fast on invalid config files by @chengyongru in https://github.com/HKUDS/nanobot/pull/4275
* Scope prompt recent history by session by @chengyongru in https://github.com/HKUDS/nanobot/pull/4274
* feat(exec): add pathPrepend config by @chengyongru in https://github.com/HKUDS/nanobot/pull/4273
* fix(providers): allow retry and fallback on stream stalled timeout by @aiguozhi123456 in https://github.com/HKUDS/nanobot/pull/4272
* refactor(webui): on-demand version check in Settings > About by @JiajunBernoulli in https://github.com/HKUDS/nanobot/pull/4255
* feat(webui): segment transcript storage by @Re-bin in https://github.com/HKUDS/nanobot/pull/4278
* feat(transcription): add SiliconFlow as transcription provider by @morandot in https://github.com/HKUDS/nanobot/pull/4281
* fix(utils): make split_message fenced-code-block-aware by @axelray-dev in https://github.com/HKUDS/nanobot/pull/4257
* feat(slack): add groupRequireMention to scope allowlist channels to @mentions by @brendanlevy in https://github.com/HKUDS/nanobot/pull/4289
* feat: support multiple custom OpenAI-compatible providers by @JagoWang in https://github.com/HKUDS/nanobot/pull/3239
* fix(session): prevent orphaned tool results from being persisted to history (#4006) by @tangtaizong666 in https://github.com/HKUDS/nanobot/pull/4306
* feat(bridge): WhatsApp forwarded message detection, startup guard, and contact handling by @franciscomaestre in https://github.com/HKUDS/nanobot/pull/4226
* feat(cron): bind scheduled automations to sessions by @chengyongru in https://github.com/HKUDS/nanobot/pull/4299
* chore(repo): remove desktop app from core repo by @Re-bin in https://github.com/HKUDS/nanobot/pull/4294
* Break tool config schema import cycle by @chengyongru in https://github.com/HKUDS/nanobot/pull/4314
* Fix WebUI startup blocking on slow gateway routes by @chengyongru in https://github.com/HKUDS/nanobot/pull/4327
* fix(memory): summarize full session tail during idle compaction (#4264) by @tangtaizong666 in https://github.com/HKUDS/nanobot/pull/4326
* fix(cli): use configured bot_icon in agent interactive banner (#4262) by @04cb in https://github.com/HKUDS/nanobot/pull/4335
* fix(providers): widen omit_temperature to cover opus-4-8 and fable by @axelray-dev in https://github.com/HKUDS/nanobot/pull/4334
* Fix Codex image SSE handling by @cypggs in https://github.com/HKUDS/nanobot/pull/4332
* docs: add Kimi and MiniMax partner links by @oriengy in https://github.com/HKUDS/nanobot/pull/4295
* docs(readme): link Kimi partner banner by @Re-bin in https://github.com/HKUDS/nanobot/pull/4338
* fix(webui): localize update check copy by @chengyongru in https://github.com/HKUDS/nanobot/pull/4331
* docs(readme): add themed cover image by @Re-bin in https://github.com/HKUDS/nanobot/pull/4341
* Improve WebUI mobile responsiveness by @chengyongru in https://github.com/HKUDS/nanobot/pull/4339
* Add tools.file.enable to toggle built-in filesystem tools by @niradler in https://github.com/HKUDS/nanobot/pull/4138
* fix(runner): ignore empty injected payloads by @yu-xin-c in https://github.com/HKUDS/nanobot/pull/4337
* fix(memory): ignore malformed history entries by @yu-xin-c in https://github.com/HKUDS/nanobot/pull/4315
* fix(api): forward real LLM usage in /v1/chat/completions response by @michaelxer in https://github.com/HKUDS/nanobot/pull/4310
* fix(session): keep auto compact suffix on user turn by @chengyongru in https://github.com/HKUDS/nanobot/pull/4348
* fix(agent): refresh goal continuation context by @chengyongru in https://github.com/HKUDS/nanobot/pull/4359
* fix(webui): override wsUrl with local LAN IP when on dev server port 5173 by @HengWeiBin in https://github.com/HKUDS/nanobot/pull/4364
* chore: ignore bridge/node_modules by @franciscomaestre in https://github.com/HKUDS/nanobot/pull/4355
* fix(providers): enable thinking for Kimi K2.7 models by @Re-bin in https://github.com/HKUDS/nanobot/pull/4361
* fix(api): avoid duplicate user turn on empty-response retry (#4079) by @04cb in https://github.com/HKUDS/nanobot/pull/4358
* fix(providers): validate stream idle timeout config by @yu-xin-c in https://github.com/HKUDS/nanobot/pull/4363
* fix(context): cap recent-history digest by tokens, not characters by @waelantar in https://github.com/HKUDS/nanobot/pull/4352
* Explain empty Dream runs by @chengyongru in https://github.com/HKUDS/nanobot/pull/4369
* Enable idle auto-compact by default by @chengyongru in https://github.com/HKUDS/nanobot/pull/4370
* Fix macOS installer for externally managed Python by @chengyongru in https://github.com/HKUDS/nanobot/pull/4368
* docs: use pipe pattern for curl installer commands by @HaisamAbbas in https://github.com/HKUDS/nanobot/pull/4365
* feat(webui): add automation management view by @chengyongru in https://github.com/HKUDS/nanobot/pull/4330
* fix: silence unroutable cli progress noise by @chengyongru in https://github.com/HKUDS/nanobot/pull/4386
* fix: log primary model error before fallback by @chengyongru in https://github.com/HKUDS/nanobot/pull/4385
* fix: recover failed Feishu streaming updates by @chengyongru in https://github.com/HKUDS/nanobot/pull/4381
* fix: allow git commands in workspace subdirectories by @HaisamAbbas in https://github.com/HKUDS/nanobot/pull/4380
* fix(providers): disable proxy for local endpoints, respect env proxy for cloud by @michaelxer in https://github.com/HKUDS/nanobot/pull/4367
* fix(anthropic): sanitize tool_use/tool_result IDs to API pattern by @franciscomaestre in https://github.com/HKUDS/nanobot/pull/4356
* Fix my tool model preset switching by @chengyongru in https://github.com/HKUDS/nanobot/pull/4347
* fix(webui): correct activity duration display by @chengyongru in https://github.com/HKUDS/nanobot/pull/4283
* fix(session): preserve user turns in replay-window history by @Re-bin in https://github.com/HKUDS/nanobot/pull/4349
* Clarify filesystem workspace write policy by @chengyongru in https://github.com/HKUDS/nanobot/pull/4202
* feat(bridge): send read receipts (blue ticks) for incoming WhatsApp messages by @franciscomaestre in https://github.com/HKUDS/nanobot/pull/4354
* feat(providers): better Mistral support by @La-Volpe in https://github.com/HKUDS/nanobot/pull/4351
* feat(web): add Keenable search provider by @IlyaGusev in https://github.com/HKUDS/nanobot/pull/4350
* feat(feishu): add QR scan-to-create bot CLI login feishu command by @bllackhu in https://github.com/HKUDS/nanobot/pull/4391
* ci: skip docs-only changes by @chengyongru in https://github.com/HKUDS/nanobot/pull/4400
* feat(webui): make Firecrawl a keyless Web Data app by @Re-bin in https://github.com/HKUDS/nanobot/pull/4403
* fix(fallback): treat empty API choices as fallbackable error, 将 API 返回空 choices 视为可 fallback 的错误 (#4287) by @yonghuname in https://github.com/HKUDS/nanobot/pull/4288
* [codex] fix MCP malformed progress notifications by @yu-xin-c in https://github.com/HKUDS/nanobot/pull/4372
* fix(providers): use non-descriptive placeholder when stripping images by @michaelxer in https://github.com/HKUDS/nanobot/pull/4401
* fix(feishu): support reading WebSocket rendered card content by @JiajunBernoulli in https://github.com/HKUDS/nanobot/pull/4342
* fix: support OpenAI image reference edits by @sbyinin in https://github.com/HKUDS/nanobot/pull/4394
* fix(session): delete_session also removes legacy path files to prevent history revival by @yorkhellen in https://github.com/HKUDS/nanobot/pull/4246
* fix: set httpx timeout for streamableHttp transport by @lucndm in https://github.com/HKUDS/nanobot/pull/4230
* feat(whatsapp): seed LID->phone mappings on startup by @franciscomaestre in https://github.com/HKUDS/nanobot/pull/4407
* fix(memory): keep history cursor monotonic by @yu-xin-c in https://github.com/HKUDS/nanobot/pull/4256
* perf(tokens): cache tool schema estimates by @yu-xin-c in https://github.com/HKUDS/nanobot/pull/4428
* fix(telegram): narrow rich capability error detection and fix misleading log by @zpljd258 in https://github.com/HKUDS/nanobot/pull/4423
* fix(tools): reject unknown builtin parameters by @yu-xin-c in https://github.com/HKUDS/nanobot/pull/4343
* feat(web): allow Keenable search without an API key by @IlyaGusev in https://github.com/HKUDS/nanobot/pull/4405
* fix(sdk): isolate per-run hooks for concurrent run() calls by @michaelxer in https://github.com/HKUDS/nanobot/pull/4425
* feat(sdk): expand Python SDK runtime controls by @Re-bin in https://github.com/HKUDS/nanobot/pull/4296
* docs(readme): update news through 2026-06-20 by @Re-bin in https://github.com/HKUDS/nanobot/pull/4432
* Improve onboard wizard setup flow by @chengyongru in https://github.com/HKUDS/nanobot/pull/4395
* feat(gateway): add background and service controls by @xcosmosbox in https://github.com/HKUDS/nanobot/pull/1854
* fix(webui): avoid slow settings route refreshes by @chengyongru in https://github.com/HKUDS/nanobot/pull/4398
* chore(config): default context window to 200k by @chengyongru in https://github.com/HKUDS/nanobot/pull/4448
* fix: close MCP stdio transports from agent task by @Re-bin in https://github.com/HKUDS/nanobot/pull/4450
* fix(webui): stabilize sent turn layout and dev reloads by @Re-bin in https://github.com/HKUDS/nanobot/pull/4451
* chore(release): prepare v0.2.2 by @Re-bin in https://github.com/HKUDS/nanobot/pull/4445
* fix(webui): follow active turn output after send by @Re-bin in https://github.com/HKUDS/nanobot/pull/4453
* fix: stabilize gateway shutdown and webui fork replay by @Re-bin in https://github.com/HKUDS/nanobot/pull/4454
* fix(gateway): tolerate cancelled channel tasks during shutdown by @Re-bin in https://github.com/HKUDS/nanobot/pull/4456

## New Contributors
* @lmzopq made their first contribution in https://github.com/HKUDS/nanobot/pull/4016
* @nblondiau made their first contribution in https://github.com/HKUDS/nanobot/pull/4165
* @michaelxer made their first contribution in https://github.com/HKUDS/nanobot/pull/4227
* @breitburg made their first contribution in https://github.com/HKUDS/nanobot/pull/4113
* @zpljd258 made their first contribution in https://github.com/HKUDS/nanobot/pull/4175
* @Bayern4ever-dot made their first contribution in https://github.com/HKUDS/nanobot/pull/4208
* @erikmackinnon made their first contribution in https://github.com/HKUDS/nanobot/pull/4213
* @primit1v0 made their first contribution in https://github.com/HKUDS/nanobot/pull/4239
* @Syoc made their first contribution in https://github.com/HKUDS/nanobot/pull/4267
* @brendanlevy made their first contribution in https://github.com/HKUDS/nanobot/pull/4289
* @JagoWang made their first contribution in https://github.com/HKUDS/nanobot/pull/3239
* @tangtaizong666 made their first contribution in https://github.com/HKUDS/nanobot/pull/4306
* @oriengy made their first contribution in https://github.com/HKUDS/nanobot/pull/4295
* @niradler made their first contribution in https://github.com/HKUDS/nanobot/pull/4138
* @waelantar made their first contribution in https://github.com/HKUDS/nanobot/pull/4352
* @La-Volpe made their first contribution in https://github.com/HKUDS/nanobot/pull/4351
* @IlyaGusev made their first contribution in https://github.com/HKUDS/nanobot/pull/4350
* @bllackhu made their first contribution in https://github.com/HKUDS/nanobot/pull/4391
* @yonghuname made their first contribution in https://github.com/HKUDS/nanobot/pull/4288
* @sbyinin made their first contribution in https://github.com/HKUDS/nanobot/pull/4394
* @lucndm made their first contribution in https://github.com/HKUDS/nanobot/pull/4230

**Full Changelog**: https://github.com/HKUDS/nanobot/compare/v0.2.1...v0.2.2

---

> **Source** [HKUDS/nanobot](https://github.com/HKUDS/nanobot) · `v0.2.2` · 2026-06-23 · [upstream release](https://github.com/HKUDS/nanobot/releases/tag/v0.2.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
