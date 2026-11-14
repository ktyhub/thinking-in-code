---
title: "nanobot v0.3.0"
project: "nanobot"
repo: "HKUDS/nanobot"
tag: "v0.3.0"
version: "v0.3.0"
published: "2026-07-25"
type: "minor"
lang: "en"
summary: "🐈 nanobot v0.3.0 is here: 260 PRs merged and 38 new contributors. The agent gained agency."
---

# nanobot v0.3.0

🐈 **nanobot `v0.3.0`** is here: **260 PRs merged and 38 new contributors**. The agent gained agency.

The fastest way to experience the release is one command:

```bash
nanobot webui
```

It prepares the local WebUI, starts the gateway, and opens the browser workbench. On a fresh install, guided setup helps you choose a provider and configure access without beginning in a JSON file. The published package already includes the WebUI, so there is no separate frontend build.

The product story is **a WebUI that now feels like the front door to nanobot**. Chats read as topics; documents, quoted follow-ups, multimodal tool results, file diffs, code previews, and model fallback are visible in the conversation. Model presets can be switched from the composer, native desktop hosts can open a system folder picker, settings work better across narrow screens and dark mode, and the interface now includes Brazilian Portuguese plus substantially improved Traditional Chinese.

Underneath that experience is **agency with boundaries**. nanobot can consult inline subagents, carry explicitly authorized work through verification, route turn state through a clearer runtime context, and switch model presets per session. Long-running behavior is deliberate: `/goal` opts a task into sustained execution, while ordinary conversations remain ordinary conversations.

The foundation is **a runtime built for real deployment**. Configuration can reload without tearing down the process, channels have clearer package boundaries, gateway restart and shutdown paths are sturdier, and Docker and Render deployment are easier to reproduce. Provider-scoped proxies, OpenCode, Kimi Coding, Grok OAuth with hosted X Search, Parallel Search, Serper, Mattermost, and the native Neonize WhatsApp channel broaden where nanobot can run and what it can reach.

## Highlights

- **One command to the workbench** - `nanobot webui` prepares the local channel, starts the gateway, opens the browser, and leads first-time users into guided setup.
- **A stronger browser workbench** - Topic-style chats, composer model switching, quoted follow-ups, document attachments, native folder selection, responsive settings, and clearer fallback state.
- **Agent coordination without core sprawl** - Inline subagents can consult inside the active task, authorized work can continue through verification, and typed runtime context keeps provider-owned state out of ad hoc loop logic.
- **Explicit long-running goals** - Sustained execution is gated behind `/goal`, with clearer permission, cancellation, timeout, heartbeat, and local-trigger behavior.
- **Files and tool activity you can inspect** - Syntax-highlighted previews, live file-edit diffs, better code-copy behavior, structured tool errors, richer MCP artifacts, and preserved multimodal tool output.
- **A more operational runtime** - Live configuration reloads, bounded session and exec state, safer restart/shutdown, cleaner cancellation ownership, more reliable scheduled work, and faster CI.
- **Broader providers and search** - OpenCode Zen/Go, Kimi Coding, Grok OAuth, provider-scoped proxies, Copilot Enterprise overrides, Parallel Search, Serper, and steadier authentication fallback.
- **Channels as maintainable extensions** - Native Neonize WhatsApp, Mattermost, improved Feishu/Telegram/Discord/Matrix/QQ behavior, optional channel dependencies, and clearer setup flows.
- **Security tightened at the edges** - Chained-command allowlist bypasses are blocked, SSRF checks pin validated DNS, credentials are redacted from MCP URLs, remote API binds require authentication, and attachment ingress is constrained.
- **Documentation and delivery caught up** - Workflow-oriented docs, an automation guide, one-click Render deployment, stronger Docker controls, community-maintained project language, and a refreshed SVG identity.

## Upgrade Notes

- **WhatsApp now uses Neonize instead of the old Node.js/Baileys bridge.** Remove `bridgeUrl` and `bridgeToken`, run `nanobot plugins enable whatsapp`, and link the account again with `nanobot channels login whatsapp`. The old bridge authentication data is not reused. `allowFrom` entries should use the sender ID without a leading `+`.
- **Sustained goals are now explicit.** Use `/goal` when a task should keep working across continuation turns. Normal chats no longer inherit long-running goal behavior implicitly.
- **Remote exposure requires authentication.** Configurations that bind the API or WebUI gateway beyond loopback must provide the corresponding API or Web token. Localhost setup continues to use the guided short-lived token flow.

## Community

Thank you to everyone who shaped **`v0.3.0`**: **260 merged PRs**, **38 first-time contributors**, and a month of careful review across the agent core, WebUI, providers, channels, security, documentation, and deployment. The Agency Release is not about making nanobot act without limits. It is about giving a small, inspectable agent the coordination, evidence, and operational discipline to finish more of the work you intentionally hand it.

## What's Changed
* docs: add v0.2.2 release news by @Re-bin in https://github.com/HKUDS/nanobot/pull/4461
* fix: skip sendRichMessage when streaming preview exists (#4470) by @axelray-dev in https://github.com/HKUDS/nanobot/pull/4472
* fix(providers): dedupe tool_use ids to prevent Anthropic 400s by @tedyyan in https://github.com/HKUDS/nanobot/pull/4444
* chore: bump to node 24 by @dvejmz in https://github.com/HKUDS/nanobot/pull/4460
* feat(providers): add OpenCode Zen and OpenCode Go providers by @zpljd258 in https://github.com/HKUDS/nanobot/pull/4476
* fix(webui): prevent iOS Safari composer zoom by @chengyongru in https://github.com/HKUDS/nanobot/pull/4471
* docs: document runtime environment variables by @chengyongru in https://github.com/HKUDS/nanobot/pull/4462
* fix(gateway): handle lifecycle edge cases by @chengyongru in https://github.com/HKUDS/nanobot/pull/4447
* fix(pairing): normalize sender IDs to str in the pairing store by @waelantar in https://github.com/HKUDS/nanobot/pull/4433
* feat(provider): add kimi_coding provider for Kimi Coding Plan by @zpljd258 in https://github.com/HKUDS/nanobot/pull/4464
* Fix raw <thinking> tags in reasoning output by @ZhouJ-sh in https://github.com/HKUDS/nanobot/pull/4466
* fix(config): preserve dream cron when saving config by @yorkhellen in https://github.com/HKUDS/nanobot/pull/4478
* fix(web): pass proxy to DDGS client for DuckDuckGo search by @hyoukadev in https://github.com/HKUDS/nanobot/pull/4484
* fix: exclude archived keys in heartbeat & fallback missing session timestamps by @HengWeiBin in https://github.com/HKUDS/nanobot/pull/4468
* fix(webui): keep multi-file apply_patch edits by @chengyongru in https://github.com/HKUDS/nanobot/pull/4487
* fix(webui): restore code block copy fallback by @chengyongru in https://github.com/HKUDS/nanobot/pull/4509
* test: speed up test suite by @chengyongru in https://github.com/HKUDS/nanobot/pull/4507
* fix: add rich_messages config to disable sendRichMessage for Telegram Web (#4488) by @axelray-dev in https://github.com/HKUDS/nanobot/pull/4489
* fix(tools): gate MCP resource and prompt registration behind enabledTools by @michaelxer in https://github.com/HKUDS/nanobot/pull/4436
* fix(dingtalk): preserve richText formatting and set HTTP client timeout by @maxmilian in https://github.com/HKUDS/nanobot/pull/4501
* fix(cli): show search engines (incl. Keenable) in onboard wizard by @IlyaGusev in https://github.com/HKUDS/nanobot/pull/4438
* fix(webui): WebM→WAV conversion for Xiaomi MiMo ASR transcription by @zpljd258 in https://github.com/HKUDS/nanobot/pull/4493
* fix: advance dream cursor when Dream is disabled to prevent prompt bloat (#4242) by @axelray-dev in https://github.com/HKUDS/nanobot/pull/4481
* fix: allow custom provider to configure thinking style (#4429) by @axelray-dev in https://github.com/HKUDS/nanobot/pull/4482
* fix: make subagent fail_on_tool_error configurable (#4198) by @axelray-dev in https://github.com/HKUDS/nanobot/pull/4485
* docs: clarify heartbeat versus cron delivery by @chengyongru in https://github.com/HKUDS/nanobot/pull/4543
* test: harden webui and gateway checks by @chengyongru in https://github.com/HKUDS/nanobot/pull/4535
* fix: change exec login-shell default from true to false (#4518) by @axelray-dev in https://github.com/HKUDS/nanobot/pull/4525
* fix(session): remove message time replay prefixes by @chengyongru in https://github.com/HKUDS/nanobot/pull/4540
* fix(agent): gate microcompaction on context pressure by @chengyongru in https://github.com/HKUDS/nanobot/pull/4238
* refactor(whatsapp): replace bridge with neonize by @chengyongru in https://github.com/HKUDS/nanobot/pull/4537
* fix(exec): prevent allowPatterns bypass via chained commands by @axelray-dev in https://github.com/HKUDS/nanobot/pull/4526
* test: fix flaky test_keeps_n_most_recent due to identical mtimes by @primit1v0 in https://github.com/HKUDS/nanobot/pull/4523
* fix: deduplicate tool call IDs in non-stream parser (#4059) by @axelray-dev in https://github.com/HKUDS/nanobot/pull/4530
* fix: include _stream_id in stream delta coalescing key (#4063) by @axelray-dev in https://github.com/HKUDS/nanobot/pull/4531
* fix: validate content block type in Anthropic assistant blocks (#4060) by @axelray-dev in https://github.com/HKUDS/nanobot/pull/4532
* fix: prevent session key collision on disk (#4057) by @axelray-dev in https://github.com/HKUDS/nanobot/pull/4533
* fix(cron): guard public APIs against unavailable store by @yorkhellen in https://github.com/HKUDS/nanobot/pull/4564
* fix(webui): clear stuck streaming after reconnect and improve stop reliability by @axelray-dev in https://github.com/HKUDS/nanobot/pull/4565
* feat(mcp): deliver image content from MCP tools as artifacts by @codedragoncom in https://github.com/HKUDS/nanobot/pull/4542
* fix(session): repair corrupt legacy-stem files in list_sessions by @axelray-dev in https://github.com/HKUDS/nanobot/pull/4566
* fix(agent): harden tool-call path against malformed relay responses by @m11y in https://github.com/HKUDS/nanobot/pull/4569
* fix(context): make replay message cap internal by @chengyongru in https://github.com/HKUDS/nanobot/pull/4582
* refactor(session): return RetentionResult instead of bare tuple by @axelray-dev in https://github.com/HKUDS/nanobot/pull/4574
* feat(webui): refine prompt rail minimap by @Re-bin in https://github.com/HKUDS/nanobot/pull/4600
* fix(streaming): skip non-file-edit tools in apply_final_call_ids to prevent id corruption by @axelray-dev in https://github.com/HKUDS/nanobot/pull/4596
* fix(install): skip wizard without an interactive terminal by @chengyongru in https://github.com/HKUDS/nanobot/pull/4602
* fix(restart): add explicit restart mode by @chengyongru in https://github.com/HKUDS/nanobot/pull/4607
* feat(providers): support GitHub Copilot endpoint overrides for enterprise/GHE by @04cb in https://github.com/HKUDS/nanobot/pull/4598
* feat(whatsapp): send read receipts (blue double-check) for incoming messages by @franciscomaestre in https://github.com/HKUDS/nanobot/pull/4601
* feat(providers): support provider-scoped proxy config by @chengyongru in https://github.com/HKUDS/nanobot/pull/4578
* test(exec): cover bwrap sandbox mounts by @yu-xin-c in https://github.com/HKUDS/nanobot/pull/4577
* fix(weixin): stream LLM calls + buffer reply delivery to dodge non-stream relay bug by @m11y in https://github.com/HKUDS/nanobot/pull/4567
* fix(mcp): redact credentials from URLs before logging by @weijun-xia in https://github.com/HKUDS/nanobot/pull/4584
* fix(cli): allow oauth login to be/set main provider by @hamb1y in https://github.com/HKUDS/nanobot/pull/4573
* fix(webui): keep idle compaction out of session recency by @chengyongru in https://github.com/HKUDS/nanobot/pull/4609
* refactor(webui): derive provider model catalog kind by @chengyongru in https://github.com/HKUDS/nanobot/pull/4613
* refactor(tools): use structured tool error results by @chengyongru in https://github.com/HKUDS/nanobot/pull/4610
* feat(api): require api_key when binding to all interfaces (parity with WS gateway) by @dajiaohuang in https://github.com/HKUDS/nanobot/pull/4548
* feat(webui): add dollar skill shortcuts by @chengyongru in https://github.com/HKUDS/nanobot/pull/4284
* fix(cron): tolerate unsupported directory fsync by @chengyongru in https://github.com/HKUDS/nanobot/pull/4617
* refactor(bus): type outbound runtime events by @chengyongru in https://github.com/HKUDS/nanobot/pull/4590
* feat(trigger): add session-bound local triggers by @chengyongru in https://github.com/HKUDS/nanobot/pull/4591
* fix(trigger): cap local trigger audit records by @Re-bin in https://github.com/HKUDS/nanobot/pull/4642
* fix(exec): return early when session command exits by @chengyongru in https://github.com/HKUDS/nanobot/pull/4643
* test(cron): cover stale instance mutation consistency by @yu-xin-c in https://github.com/HKUDS/nanobot/pull/4633
* test: cover runner blocked tool-call finish reasons by @yu-xin-c in https://github.com/HKUDS/nanobot/pull/4630
* fix(webui): hide subagent backfill payloads by @chengyongru in https://github.com/HKUDS/nanobot/pull/4641
* fix(agent): avoid tool compaction echo loops by @chengyongru in https://github.com/HKUDS/nanobot/pull/4647
* fix(trigger): keep local worker alive on turn cancel by @chengyongru in https://github.com/HKUDS/nanobot/pull/4644
* feat(memory): add workspace Dream prompt override by @chengyongru in https://github.com/HKUDS/nanobot/pull/4491
* fix(providers): update Anthropic default model to claude-sonnet-4-6 by @bingqilinweimaotai in https://github.com/HKUDS/nanobot/pull/4687
* fix: omit temperature for sonnet 5 by @hamb1y in https://github.com/HKUDS/nanobot/pull/4685
* Add optional Nanobot plugin controls by @chengyongru in https://github.com/HKUDS/nanobot/pull/4396
* feat(cli): add safe WebUI first-run launcher by @Re-bin in https://github.com/HKUDS/nanobot/pull/4688
* fix(config): serialize model presets as camelCase by @Yuxin-Lou in https://github.com/HKUDS/nanobot/pull/4692
* fix(mcp): contain malformed tool results by @Yuxin-Lou in https://github.com/HKUDS/nanobot/pull/4666
* fix(copilot): guard token refresh with asyncio.Lock to prevent race condition by @axelray-dev in https://github.com/HKUDS/nanobot/pull/4684
* fix(pairing): restore durable atomic writes by @yorkhellen in https://github.com/HKUDS/nanobot/pull/4653
* fix(dingtalk): stop stream task on shutdown by @chengyongru in https://github.com/HKUDS/nanobot/pull/4646
* fix(gateway): handle Windows stop fallback by @Raccoon-njuse in https://github.com/HKUDS/nanobot/pull/4690
* fix(providers): standardize oauth_cli_kit error messages across CLI and WebUI by @axelray-dev in https://github.com/HKUDS/nanobot/pull/4698
* fix: normalize text tool call markup by @hamb1y in https://github.com/HKUDS/nanobot/pull/4662
* fix: isolate matrix stream buffers by @hamb1y in https://github.com/HKUDS/nanobot/pull/4659
* fix: resolve builtin skill reads by @hamb1y in https://github.com/HKUDS/nanobot/pull/4658
* fix(exec): default Windows commands to PowerShell and allow shell parameter by @dajiaohuang in https://github.com/HKUDS/nanobot/pull/4545
* feat(web-search): add Serper.dev (Google Search API) provider by @franciscomaestre in https://github.com/HKUDS/nanobot/pull/4406
* fix: limit long MCP-derived tool names by @thomya in https://github.com/HKUDS/nanobot/pull/4700
* fix(webui): keep chat viewport and composer inside narrow viewports, fixes #4693 by @hata33 in https://github.com/HKUDS/nanobot/pull/4694
* fix(dream): ground memory audit records in the real git diff by @goodtiding5 in https://github.com/HKUDS/nanobot/pull/4673
* feat: support canonical opencode provider by @hamb1y in https://github.com/HKUDS/nanobot/pull/4686
* feat(feishu): add new session divider by @chengyongru in https://github.com/HKUDS/nanobot/pull/4763
* feat: add Mattermost channel support by @goodtiding5 in https://github.com/HKUDS/nanobot/pull/4459
* fix(cli): print response text when streaming fails in interactive mode by @goodtiding5 in https://github.com/HKUDS/nanobot/pull/4654
* fix(gateway): self-heal state file PID on server startup by @dajiaohuang in https://github.com/HKUDS/nanobot/pull/4547
* fix(gateway): resolve config path for state refresh by @Re-bin in https://github.com/HKUDS/nanobot/pull/4770
* fix: pin validated dns for ssrf checks by @hamb1y in https://github.com/HKUDS/nanobot/pull/4671
* feat(cli): support multiline input via Alt+Enter by @m11y in https://github.com/HKUDS/nanobot/pull/4614
* chore: remove unused dead code by @chengyongru in https://github.com/HKUDS/nanobot/pull/4824
* fix(webui): show generic tool arguments in activity by @chengyongru in https://github.com/HKUDS/nanobot/pull/4821
* refactor(webui): drive slash commands from lifecycle metadata by @chengyongru in https://github.com/HKUDS/nanobot/pull/4766
* fix: require api key for serve by @hamb1y in https://github.com/HKUDS/nanobot/pull/4669
* Fix missing aiohttp slack dependency in pyproject.toml by @alekwo in https://github.com/HKUDS/nanobot/pull/4830
* fix(webui): keep prompt rail out of narrow chat columns by @chengyongru in https://github.com/HKUDS/nanobot/pull/4831
* Feature: non-interactive config refresh with 'nanobot onboard --refresh' by @alekwo in https://github.com/HKUDS/nanobot/pull/4852
* docs: improve search entry pages by @chengyongru in https://github.com/HKUDS/nanobot/pull/4850
* fix(webui): gate bootstrap API token issuance by @chengyongru in https://github.com/HKUDS/nanobot/pull/4849
* refactor(agent): extract turn hook assembly by @chengyongru in https://github.com/HKUDS/nanobot/pull/4848
* fix(webui): restore localhost bootstrap API tokens by @chengyongru in https://github.com/HKUDS/nanobot/pull/4856
* feat(webui): add file edit diff progress view by @chengyongru in https://github.com/HKUDS/nanobot/pull/4828
* fix(matrix): preserve mxc markdown image sources by @chengyongru in https://github.com/HKUDS/nanobot/pull/4859
* Add Dockerfile arg to override optional Python dependencies to install at build time by @dvejmz in https://github.com/HKUDS/nanobot/pull/4857
* refactor(agent): establish turn/runtime context foundation by @chengyongru in https://github.com/HKUDS/nanobot/pull/4868
* docs: add automation guide by @chengyongru in https://github.com/HKUDS/nanobot/pull/4865
* fix(webui): sync package-lock.json to resolve docker build failure by @SIDD-KIDD in https://github.com/HKUDS/nanobot/pull/4863
* fix(sandbox): add Red Hat certificate path support for Node by @luojiaaoo in https://github.com/HKUDS/nanobot/pull/4845
* fix(cli): handle CSI-u Shift+Enter instead of dumping raw escapes by @m11y in https://github.com/HKUDS/nanobot/pull/4832
* fix(webui): bind landing first message to created chat by @sidkang in https://github.com/HKUDS/nanobot/pull/4836
* fix(shell): reap zombie processes on all subprocess exit paths by @macroadster in https://github.com/HKUDS/nanobot/pull/4840
* feat(webui): highlight file previews and diffs by @chengyongru in https://github.com/HKUDS/nanobot/pull/4877
* feat(webui): guide queued prompt with second Enter by @chengyongru in https://github.com/HKUDS/nanobot/pull/4876
* fix(tools): enforce exact edit_file line hints by @chengyongru in https://github.com/HKUDS/nanobot/pull/4635
* fix(dream): skip no-op periodic commit attempts by @alekwo in https://github.com/HKUDS/nanobot/pull/4873
* fix(mcp): keep transport cleanup in owner tasks by @flyzstu in https://github.com/HKUDS/nanobot/pull/4843
* refactor(agent): gate sustained goals behind explicit /goal by @chengyongru in https://github.com/HKUDS/nanobot/pull/4844
* fix(webui): allow remote workspace access reduction by @Re-bin in https://github.com/HKUDS/nanobot/pull/4892
* fix(heartbeat): rewrite prompt to execute tasks instead of reporting by @wzrayyy in https://github.com/HKUDS/nanobot/pull/4896
* fix(discord): route unauthorized DMs to pairing by @chengyongru in https://github.com/HKUDS/nanobot/pull/4899
* fix(memory): prune encoded Dream sessions by @chengyongru in https://github.com/HKUDS/nanobot/pull/4900
* feat(webui): add guided setup flows by @Re-bin in https://github.com/HKUDS/nanobot/pull/4855
* fix(cli): restore enter before webui prompts by @Re-bin in https://github.com/HKUDS/nanobot/pull/4903
* fix(gateway): harden health endpoint exposure by @Re-bin in https://github.com/HKUDS/nanobot/pull/4906
* fix: align optional dependency contracts by @chengyongru in https://github.com/HKUDS/nanobot/pull/4907
* fix(dream): filter non-Dream history commits by @chengyongru in https://github.com/HKUDS/nanobot/pull/4905
* fix(codex): align OAuth defaults and setup docs by @chengyongru in https://github.com/HKUDS/nanobot/pull/4910
* docs: remove broken Star History embed by @chengyongru in https://github.com/HKUDS/nanobot/pull/4912
* docs: update recent changes through July 12 by @chengyongru in https://github.com/HKUDS/nanobot/pull/4913
* feat(webui): add Brazilian Portuguese (pt-BR) locale by @bill-kopp-ai-dev in https://github.com/HKUDS/nanobot/pull/4914
* fix(dream): ignore line-ending-only memory diffs by @bingqilinweimaotai in https://github.com/HKUDS/nanobot/pull/4909
* fix(telegram): HTML parse_mode for stream overflow chunks by @asif786ka in https://github.com/HKUDS/nanobot/pull/4839
* fix(shell): decode UTF-16 process output on Windows by @adabarbulescu in https://github.com/HKUDS/nanobot/pull/4917
* docs: reorganize documentation around user workflows by @chengyongru in https://github.com/HKUDS/nanobot/pull/4916
* feat(webui): support document attachments with ingress safeguards by @chengyongru in https://github.com/HKUDS/nanobot/pull/4771
* refactor(webui): centralize native runtime access by @chengyongru in https://github.com/HKUDS/nanobot/pull/4769
* fix(agent): add wall-clock timeout for streaming LLM requests by @wingkwong in https://github.com/HKUDS/nanobot/pull/4902
* fix: catch asyncio CancelledError in close_mcp shutdown by @bjoshuanoah in https://github.com/HKUDS/nanobot/pull/4842
* fix: install timezone data on Windows by @chengyongru in https://github.com/HKUDS/nanobot/pull/4921
* chore(codex): identify failing request stage by @chengyongru in https://github.com/HKUDS/nanobot/pull/4929
* feat(webui): add copy action to user messages by @chengyongru in https://github.com/HKUDS/nanobot/pull/4930
* fix(webui): sync package-lock.json for qrcode dependency by @3L1AS in https://github.com/HKUDS/nanobot/pull/4927
* fix: standardize --config help text across CLI commands by @rbankole in https://github.com/HKUDS/nanobot/pull/4932
* test: speed up CI and harden the suite by @chengyongru in https://github.com/HKUDS/nanobot/pull/4936
* feat(webui): highlight slash commands and app mentions by @chengyongru in https://github.com/HKUDS/nanobot/pull/4933
* fix(restart): deliver completion after channel reconnects by @chengyongru in https://github.com/HKUDS/nanobot/pull/4931
* fix(heartbeat): make response evaluation more configurable by @wzrayyy in https://github.com/HKUDS/nanobot/pull/4915
* fix(cli): point onboarding to the WebUI launcher by @chengyongru in https://github.com/HKUDS/nanobot/pull/4938
* fix(webui): validate inferred file paths before preview by @chengyongru in https://github.com/HKUDS/nanobot/pull/4935
* fix(webui): correct activity timer duration by @chengyongru in https://github.com/HKUDS/nanobot/pull/4649
* fix(providers): honor Codex proxy config consistently by @chengyongru in https://github.com/HKUDS/nanobot/pull/4943
* fix(gateway): stop channels before draining tasks by @chengyongru in https://github.com/HKUDS/nanobot/pull/4944
* docs(readme): reflect community maintenance by @Re-bin in https://github.com/HKUDS/nanobot/pull/4950
* feat(webui): support native folder picker bridges by @Re-bin in https://github.com/HKUDS/nanobot/pull/4953
* fix(providers): omit temperature for Moonshot Kimi K2.5/K2.6 by @bingqilinweimaotai in https://github.com/HKUDS/nanobot/pull/4967
* Improve zh-TW Traditional Chinese locale by @PeterDaveHello in https://github.com/HKUDS/nanobot/pull/4958
* fix(utils): handle empty commit messages in CommitInfo.format by @santhreal in https://github.com/HKUDS/nanobot/pull/4973
* fix(utils): coerce Tavily usage counters to int by @santhreal in https://github.com/HKUDS/nanobot/pull/4972
* fix(utils): avoid hang in split_message when max_len <= 0 by @santhreal in https://github.com/HKUDS/nanobot/pull/4971
* fix(exec): isolate exec session managers by @yu-xin-c in https://github.com/HKUDS/nanobot/pull/4862
* fix: preserve real cancellation in MCP paths by @adabarbulescu in https://github.com/HKUDS/nanobot/pull/4960
* fix(session): bound the in-memory session cache by @KDB-Wind in https://github.com/HKUDS/nanobot/pull/4957
* (fix docker) Harden default Docker Compose security by @Yuxin-Lou in https://github.com/HKUDS/nanobot/pull/4955
* feat: add Kimi K3 support by @bingqilinweimaotai in https://github.com/HKUDS/nanobot/pull/4966
* fix(cron): dual-case keys when loading jobs.json by @santhreal in https://github.com/HKUDS/nanobot/pull/4974
* feat: add one-click deploy to render support by @Ho1yShif in https://github.com/HKUDS/nanobot/pull/4937
* fix(agent): guide recovery from oversized tool results by @chengyongru in https://github.com/HKUDS/nanobot/pull/4925
* fix(triggers): coerce null ms fields when loading local triggers by @santhreal in https://github.com/HKUDS/nanobot/pull/4986
* fix(gitstore): resolve staged paths relative to workspace by @kuchazi-yy in https://github.com/HKUDS/nanobot/pull/4979
* fix(cli-apps): decode subprocess output as UTF-8 by @kuchazi-yy in https://github.com/HKUDS/nanobot/pull/4976
* fix(providers): fail over across provider failure domains by @chengyongru in https://github.com/HKUDS/nanobot/pull/4904
* fix(whatsapp): allow group ids in allowFrom by @chengyongru in https://github.com/HKUDS/nanobot/pull/4834
* fix(triggers): reject deliveries to disabled channels by @kuchazi-yy in https://github.com/HKUDS/nanobot/pull/4990
* refactor(channels): make built-in channels self-contained by @chengyongru in https://github.com/HKUDS/nanobot/pull/4908
* fix(webui): resolve Windows package manager shims by @chengyongru in https://github.com/HKUDS/nanobot/pull/4994
* fix(webui): show copy action on every assistant message by @chengyongru in https://github.com/HKUDS/nanobot/pull/5001
* style(webui): simplify Markdown code blocks by @chengyongru in https://github.com/HKUDS/nanobot/pull/5002
* fix(channels): complete dependency manifest migration by @chengyongru in https://github.com/HKUDS/nanobot/pull/4995
* docs(ollama): document tool prompt cache diagnostics by @chengyongru in https://github.com/HKUDS/nanobot/pull/4998
* fix(qq): add exponential backoff to WebSocket reconnect loop by @gola in https://github.com/HKUDS/nanobot/pull/4768
* refactor(agent): unify internal turn lifecycle by @chengyongru in https://github.com/HKUDS/nanobot/pull/4993
* fix(session): tolerate unsupported directory fsync by @amplifierplus in https://github.com/HKUDS/nanobot/pull/5004
* fix: stop masking runtime failures by @chengyongru in https://github.com/HKUDS/nanobot/pull/5011
* fix(cron): coerce null runHistory ms fields from jobs.json by @santhreal in https://github.com/HKUDS/nanobot/pull/4985
* fix(runner): narrow BaseException catch to Exception in tool execution by @axelray-dev in https://github.com/HKUDS/nanobot/pull/4816
* fix(session): cap messages at persistence boundary by @KDB-Wind in https://github.com/HKUDS/nanobot/pull/4956
* fix(exec): terminate active session process trees on shutdown by @KDB-Wind in https://github.com/HKUDS/nanobot/pull/4978
* fix(security): validate each shell segment against exec.allowPatterns by @michaelxer in https://github.com/HKUDS/nanobot/pull/4562
* fix(files): reject oversized reads before loading by @amplifierplus in https://github.com/HKUDS/nanobot/pull/5014
* fix(webui): keep Markdown table diffs inline by @chengyongru in https://github.com/HKUDS/nanobot/pull/5015
* fix(webui): prioritize skill names in autocomplete by @chengyongru in https://github.com/HKUDS/nanobot/pull/5016
* fix(config): write config.json atomically via temp+replace by @santhreal in https://github.com/HKUDS/nanobot/pull/4984
* fix(transcription): resolve ${VAR} env refs in transcription api_key/api_base by @benlenarts in https://github.com/HKUDS/nanobot/pull/4989
* feat(providers): support Codex fast mode by @chengyongru in https://github.com/HKUDS/nanobot/pull/5019
* fix(cron): coerce string schedule/state ms fields from jobs.json by @santhreal in https://github.com/HKUDS/nanobot/pull/4983
* fix(providers): sanitize UTF-16 surrogates at provider request boundary by @Krislu1221 in https://github.com/HKUDS/nanobot/pull/4952
* feat(webui): highlight skill references in sent messages by @chengyongru in https://github.com/HKUDS/nanobot/pull/5020
* Feat/modelscope provider support by @yrk111222 in https://github.com/HKUDS/nanobot/pull/4965
* docs(security): recommend env-var references over plaintext API keys by @cms19859230182-lang in https://github.com/HKUDS/nanobot/pull/5010
* fix: quarantine invalid tool results by @hamb1y in https://github.com/HKUDS/nanobot/pull/4663
* fix(providers): add Qwen model-level thinking style mapping by @cms19859230182-lang in https://github.com/HKUDS/nanobot/pull/5023
* feat(webui): show pin indicators for pinned chats by @chengyongru in https://github.com/HKUDS/nanobot/pull/5025
* feat(config): watch runtime configuration changes by @chengyongru in https://github.com/HKUDS/nanobot/pull/5026
* fix(webui): detect Chrome voice recording support by @chengyongru in https://github.com/HKUDS/nanobot/pull/5027
* style(webui): clarify surface hierarchy by @chengyongru in https://github.com/HKUDS/nanobot/pull/5029
* fix(webui): improve mobile composer layout by @chengyongru in https://github.com/HKUDS/nanobot/pull/5030
* fix(subagent): cascade exec session termination on /stop by @yorkhellen in https://github.com/HKUDS/nanobot/pull/5021
* fix(webui): avoid mobile welcome composer overlap by @chengyongru in https://github.com/HKUDS/nanobot/pull/5031
* fix(agent): preserve agent-owned state in project workspaces by @chengyongru in https://github.com/HKUDS/nanobot/pull/4945
* feat(webui): polish agent output and app discovery by @Re-bin in https://github.com/HKUDS/nanobot/pull/4963
* fix(webui): deliver late subagent results as new turns by @chengyongru in https://github.com/HKUDS/nanobot/pull/4992
* feat(agent): make model presets session-scoped by @chengyongru in https://github.com/HKUDS/nanobot/pull/4866
* feat(providers): add xAI Grok OAuth with capability-gated X Search by @chengyongru in https://github.com/HKUDS/nanobot/pull/5035
* feat(image): apply generation settings live by @Re-bin in https://github.com/HKUDS/nanobot/pull/4964
* fix(agent): deliver non-streamed finalization responses by @chengyongru in https://github.com/HKUDS/nanobot/pull/5049
* docs: explain slow optional dependency installs by @chengyongru in https://github.com/HKUDS/nanobot/pull/5048
* feat(xai): surface hosted X Search activity by @chengyongru in https://github.com/HKUDS/nanobot/pull/5050
* fix(feishu): keep fenced markdown tables out of card tables by @santhreal in https://github.com/HKUDS/nanobot/pull/5046
* fix(slack): keep fenced markdown tables intact in _to_mrkdwn by @santhreal in https://github.com/HKUDS/nanobot/pull/5045
* fix(pairing): treat null approved channel lists as empty by @santhreal in https://github.com/HKUDS/nanobot/pull/5044
* fix(cron): skip null runHistory elements when loading jobs.json by @santhreal in https://github.com/HKUDS/nanobot/pull/5043
* fix: add one second to retry after delays by @wzrayyy in https://github.com/HKUDS/nanobot/pull/4959
* fix(telegram): expose proxy setup in WebUI by @chengyongru in https://github.com/HKUDS/nanobot/pull/5033
* fix(providers): fall back on authentication errors by @chengyongru in https://github.com/HKUDS/nanobot/pull/5052
* fix(session): fall back to legacy paths in metadata reads by @axelray-dev in https://github.com/HKUDS/nanobot/pull/4941
* chore: pin migration TODOs to v0.2.4 by @chengyongru in https://github.com/HKUDS/nanobot/pull/5053
* feat(webui): indicate per-turn model fallback by @chengyongru in https://github.com/HKUDS/nanobot/pull/5017
* fix(documents): preserve DOCX table content by @Re-bin in https://github.com/HKUDS/nanobot/pull/5039
* style(webui): unify settings and dark mode surfaces by @chengyongru in https://github.com/HKUDS/nanobot/pull/5058
* fix(webui): polish responsive layouts and settings search by @chengyongru in https://github.com/HKUDS/nanobot/pull/5060
* fix(webui): keep composer model badge in sync by @Re-bin in https://github.com/HKUDS/nanobot/pull/5067
* fix(session): tolerate files removed during listing by @KDB-Wind in https://github.com/HKUDS/nanobot/pull/5068
* fix(exec): retain stale sessions after cleanup failure by @KDB-Wind in https://github.com/HKUDS/nanobot/pull/5066
* fix(telegram): advance markdown split on long single-line fences by @santhreal in https://github.com/HKUDS/nanobot/pull/5055
* fix(exec): extract absolute paths after equals sign in shell guard by @axelray-dev in https://github.com/HKUDS/nanobot/pull/4594
* fix(webui): allow media directory access when restrictToWorkspace is enabled by @cms19859230182-lang in https://github.com/HKUDS/nanobot/pull/5065
* feat(webui): simplify model preset settings by @chengyongru in https://github.com/HKUDS/nanobot/pull/5061
* test(agent): use python3 in ExecTool workspace scope tests by @flyzstu in https://github.com/HKUDS/nanobot/pull/5064
* feat(webui): present chats as topics by @chengyongru in https://github.com/HKUDS/nanobot/pull/5070
* feat(webui): add Parallel Search MCP preset by @georgeatparallel in https://github.com/HKUDS/nanobot/pull/5047
* fix: preserve pending message runtime context by @hamb1y in https://github.com/HKUDS/nanobot/pull/4665
* fix(webui): show quoted context after follow-up send by @chengyongru in https://github.com/HKUDS/nanobot/pull/5071
* Revert "fix: preserve pending message runtime context" by @chengyongru in https://github.com/HKUDS/nanobot/pull/5072
* feat(webui): switch model presets from the composer by @chengyongru in https://github.com/HKUDS/nanobot/pull/5077
* fix(webui): honor custom gateway port with Vite by @chengyongru in https://github.com/HKUDS/nanobot/pull/5076
* fix(providers): preserve multimodal tool outputs by @Re-bin in https://github.com/HKUDS/nanobot/pull/5073
* feat(agent): support inline subagent consultation by @Re-bin in https://github.com/HKUDS/nanobot/pull/5074
* feat(agent): carry authorized tasks through verification by @Re-bin in https://github.com/HKUDS/nanobot/pull/5075
* feat: launch first-time setup in webui by @chengyongru in https://github.com/HKUDS/nanobot/pull/5078
* Add nanobot logo (SVG) by @d1ago in https://github.com/HKUDS/nanobot/pull/5079
* feat(brand): migrate README and WebUI assets to SVG by @chengyongru in https://github.com/HKUDS/nanobot/pull/5080
* chore(release): prepare v0.3.0 by @Re-bin in https://github.com/HKUDS/nanobot/pull/5081

## New Contributors
* @tedyyan made their first contribution in https://github.com/HKUDS/nanobot/pull/4444
* @dvejmz made their first contribution in https://github.com/HKUDS/nanobot/pull/4460
* @ZhouJ-sh made their first contribution in https://github.com/HKUDS/nanobot/pull/4466
* @hyoukadev made their first contribution in https://github.com/HKUDS/nanobot/pull/4484
* @maxmilian made their first contribution in https://github.com/HKUDS/nanobot/pull/4501
* @codedragoncom made their first contribution in https://github.com/HKUDS/nanobot/pull/4542
* @m11y made their first contribution in https://github.com/HKUDS/nanobot/pull/4569
* @weijun-xia made their first contribution in https://github.com/HKUDS/nanobot/pull/4584
* @dajiaohuang made their first contribution in https://github.com/HKUDS/nanobot/pull/4548
* @bingqilinweimaotai made their first contribution in https://github.com/HKUDS/nanobot/pull/4687
* @Raccoon-njuse made their first contribution in https://github.com/HKUDS/nanobot/pull/4690
* @thomya made their first contribution in https://github.com/HKUDS/nanobot/pull/4700
* @hata33 made their first contribution in https://github.com/HKUDS/nanobot/pull/4694
* @goodtiding5 made their first contribution in https://github.com/HKUDS/nanobot/pull/4673
* @SIDD-KIDD made their first contribution in https://github.com/HKUDS/nanobot/pull/4863
* @luojiaaoo made their first contribution in https://github.com/HKUDS/nanobot/pull/4845
* @sidkang made their first contribution in https://github.com/HKUDS/nanobot/pull/4836
* @flyzstu made their first contribution in https://github.com/HKUDS/nanobot/pull/4843
* @wzrayyy made their first contribution in https://github.com/HKUDS/nanobot/pull/4896
* @bill-kopp-ai-dev made their first contribution in https://github.com/HKUDS/nanobot/pull/4914
* @asif786ka made their first contribution in https://github.com/HKUDS/nanobot/pull/4839
* @adabarbulescu made their first contribution in https://github.com/HKUDS/nanobot/pull/4917
* @wingkwong made their first contribution in https://github.com/HKUDS/nanobot/pull/4902
* @bjoshuanoah made their first contribution in https://github.com/HKUDS/nanobot/pull/4842
* @3L1AS made their first contribution in https://github.com/HKUDS/nanobot/pull/4927
* @rbankole made their first contribution in https://github.com/HKUDS/nanobot/pull/4932
* @PeterDaveHello made their first contribution in https://github.com/HKUDS/nanobot/pull/4958
* @santhreal made their first contribution in https://github.com/HKUDS/nanobot/pull/4973
* @KDB-Wind made their first contribution in https://github.com/HKUDS/nanobot/pull/4957
* @Ho1yShif made their first contribution in https://github.com/HKUDS/nanobot/pull/4937
* @kuchazi-yy made their first contribution in https://github.com/HKUDS/nanobot/pull/4979
* @gola made their first contribution in https://github.com/HKUDS/nanobot/pull/4768
* @amplifierplus made their first contribution in https://github.com/HKUDS/nanobot/pull/5004
* @Krislu1221 made their first contribution in https://github.com/HKUDS/nanobot/pull/4952
* @yrk111222 made their first contribution in https://github.com/HKUDS/nanobot/pull/4965
* @cms19859230182-lang made their first contribution in https://github.com/HKUDS/nanobot/pull/5010
* @georgeatparallel made their first contribution in https://github.com/HKUDS/nanobot/pull/5047
* @d1ago made their first contribution in https://github.com/HKUDS/nanobot/pull/5079

**Full Changelog**: https://github.com/HKUDS/nanobot/compare/v0.2.2...v0.3.0

---

> **Source** [HKUDS/nanobot](https://github.com/HKUDS/nanobot) · `v0.3.0` · 2026-07-25 · [upstream release](https://github.com/HKUDS/nanobot/releases/tag/v0.3.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
