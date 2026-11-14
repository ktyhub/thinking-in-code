---
title: "nanobot v0.2.1"
project: "nanobot"
repo: "HKUDS/nanobot"
tag: "v0.2.1"
version: "v0.2.1"
published: "2026-06-01"
type: "patch"
lang: "en"
summary: "🐈 nanobot v0.2.1 is here — 84 PRs merged, 17 new contributors. The agent got a real workbench."
---

# nanobot v0.2.1

🐈 **nanobot `v0.2.1`** is here — 84 PRs merged, 17 new contributors. The agent got a real workbench.

The headline is the **WebUI becoming the place where work actually happens**. The chat surface is smoother, faster, and easier to trust: live file edits show up as activity, tool traces render more cleanly, source links get readable favicons, markdown and code blocks behave better, new chats survive refreshes, and Thought / response ordering now matches the model's real turn structure. Settings, sidebar controls, model switching, context-window control, slash commands, project workspaces, and access modes all moved closer to a single coherent control surface.

The second story is **long-running work getting more durable**. Sustained goals no longer trip the runner, goal iteration budget is higher, session locks prevent overlapping turns from stepping on each other, AutoCompact and consolidation races were fixed, heartbeat moved onto cron, and session archive retention got several data-loss fixes. In practice, this means fewer mysterious interruptions, fewer duplicate archives, and a much better chance that a long agent workflow keeps its thread of intent.

The third story is **nanobot becoming easier to plug into real stacks**. CLI Apps and MCP now share a more unified extension path; preset setup and capability mentions make tools easier to discover; the extension registry gives integrations a first-class home. Provider coverage expanded across Ant Ling, Skywork, Novita, Step Plan, StepFun, Zhipu image generation, OpenAI/Codex image generation, Ollama image generation, and richer OpenAI-compatible configuration. Channels also grew with Signal, Telegram webhook mode, Discord model slash commands, Matrix verification fixes, and safer Weixin / Teams / Matrix behavior.

## Highlights

- **WebUI as a daily workbench** — The WebUI is no longer just a packaged chat surface. It now has better activity rendering, live file edit visibility, cleaner source links, stronger markdown/code rendering, improved sidebar performance, project workspaces, access controls, context-window settings, model controls, slash command actions, and a more polished native-host feel. The final Thought / response ordering fix makes streamed agent work read in the order it actually happened. (#3877, #3899, #3906, #3951, #3953, #3987, #4007, #4045, #4108, #4121, #4137)

- **Long-running agent stability** — Goal mode and multi-turn work got sturdier: sustained goals keep the runner alive, goal iteration budget is extended, `process_direct` now has per-session locking, streaming/session concurrency bugs were tightened, AutoCompact and consolidator races were fixed, and archive retention now avoids duplicate archives and message loss. (#3881, #3999, #4041, #4104, #4127, #4129)

- **CLI Apps, MCP, and extension workflows** — CLI Apps landed as a way to connect CLI-native tools, then got unified with MCP concepts through preset setup, capability mentions, stale install recovery, registry logos, and an extension registry source. The result is a clearer path from "I have a useful local tool" to "nanobot can invoke it in a workflow." (#3963, #3979, #3991, #4046)

- **More providers, richer model routing** — The provider surface widened with Ant Ling, Skywork, Novita, Step Plan, OpenAI API type selection, `extraBody`, and multiple image-generation providers including StepFun, OpenAI/Codex, Ollama, and Zhipu. Several follow-up fixes preserve tool-call IDs, improve quota/billing errors, handle provider transport edge cases, and keep thinking/reasoning controls honest across OpenAI-compatible routes. (#3900, #3910, #3916, #3927, #3946, #3954, #3971, #3974, #3984, #3988, #4048)

- **Channels and deployment polish** — Signal support, Telegram webhook mode, Discord model slash commands, Docker/WebUI deployment fixes, and clearer secret/deployment docs make nanobot easier to run outside a local terminal. Gateway cold start also dropped dramatically, from seconds to sub-second territory. (#3872, #3918, #3935, #3996, #4031)

- **Security and reliability hardening** — WebSocket token issuance now requires auth, redirect targets are validated before web fetches, IPv6-mapped IPv4 addresses are normalized in SSRF checks, Teams replies trust service URLs, Matrix inbound media downloads are bounded, and shell/exec behavior was tightened on Windows and URL-heavy commands. (#3928, #3933, #4051, #4086, #4103, #4106, #4047)

- **Internationalization and docs** — The WebUI locale set was filled out across zh-TW, ja, and remaining keys, the README positioning and news section were refreshed, multi-language doc links were surfaced, local provider setup is easier to find, and `AGENTS.md` gives coding agents a clearer way into the repo. (#3930, #3962, #3964, #4131)

## Community

Huge thanks to everyone who shipped **`v0.2.1`** — **84 PRs**, **29 contributors**, and a warm welcome to **17** first-time contributors. This release feels less like one big feature drop and more like nanobot becoming something you can keep open all day: steadier, clearer, and much easier to extend.

## What's Changed
* fix(providers): recognize Chinese rate-limit marker '访问量过大' as transient error by @chengyongru in https://github.com/HKUDS/nanobot/pull/3864
* fix docker build and webui by @huanglei214 in https://github.com/HKUDS/nanobot/pull/3872
* docs(configuration): expand secrets section with more examples by @olgagaga in https://github.com/HKUDS/nanobot/pull/3866
* docs(deployment): match docker run gateway example to docker-compose.yml (refs #3873) by @voidborne-d in https://github.com/HKUDS/nanobot/pull/3874
* fix(agent): resolve race between AutoCompact and Consolidator by @chengyongru in https://github.com/HKUDS/nanobot/pull/3881
* fix(cli): buffer reasoning tokens to avoid one-token-per-line display by @li-yazhou in https://github.com/HKUDS/nanobot/pull/3878
* feat(webui+agent): optimize streaming, activity rendering, and runtime sync by @Re-bin in https://github.com/HKUDS/nanobot/pull/3877
* fix(webui): preserve single newlines in markdown rendering by @chengyongru in https://github.com/HKUDS/nanobot/pull/3889
* feat(cli): add Model Preset wizard to onboard by @chengyongru in https://github.com/HKUDS/nanobot/pull/3890
* feat(webui): add live file edit activity by @Re-bin in https://github.com/HKUDS/nanobot/pull/3899
* feat(providers): add Ant Ling support by @Re-bin in https://github.com/HKUDS/nanobot/pull/3900
* refactor(image-generation): introduce provider registry by @chengyongru in https://github.com/HKUDS/nanobot/pull/3893
* docs: surface local provider setup in README by @yanalialiuk in https://github.com/HKUDS/nanobot/pull/3912
* feat(webui): upgrade settings and sidebar controls by @Re-bin in https://github.com/HKUDS/nanobot/pull/3906
* fix(webui): accept end/error phases in tool trace rendering by @HengWeiBin in https://github.com/HKUDS/nanobot/pull/3894
* feat(image-generation): add StepFun (阶跃星辰) provider support by @morandot in https://github.com/HKUDS/nanobot/pull/3910
* feat(providers): add Skywork first-level support by @Re-bin in https://github.com/HKUDS/nanobot/pull/3916
* perf: optimize gateway cold start from ~4.6s to ~480ms by @chengyongru in https://github.com/HKUDS/nanobot/pull/3918
* fix(exec): detach stdin for shell commands by @Re-bin in https://github.com/HKUDS/nanobot/pull/3922
* fix(providers): update Skywork APIFree agent endpoint by @morandot in https://github.com/HKUDS/nanobot/pull/3917
* docs(readme): add multi-language doc site links by @chengyongru in https://github.com/HKUDS/nanobot/pull/3930
* feat(signal): add Signal channel support by @chengyongru in https://github.com/HKUDS/nanobot/pull/3935
* fix(provider): deduplicate streaming tool_call_ids for parallel calls by @chengyongru in https://github.com/HKUDS/nanobot/pull/3943
* fix(webui): keep new chat during session refresh by @boogieLing in https://github.com/HKUDS/nanobot/pull/3944
* fix(weixin): prevent silent message drops from poll exceptions, expired tokens, and ret=-2 by @chengyongru in https://github.com/HKUDS/nanobot/pull/3684
* fix(providers): inject OpenRouter `reasoning.effort` for thinking models (follow-up to #3851) by @olgagaga in https://github.com/HKUDS/nanobot/pull/3867
* Fix shell guard false positives on URL commands by @HaisamAbbas in https://github.com/HKUDS/nanobot/pull/3933
* feat(tools): optimize coding workflows by @Re-bin in https://github.com/HKUDS/nanobot/pull/3923
* feat: add Novita AI provider by @Alex-yang00 in https://github.com/HKUDS/nanobot/pull/3927
* feat(webui): refine collapsible sidebar by @Re-bin in https://github.com/HKUDS/nanobot/pull/3951
* feat(webui): improve sidebar performance by @Re-bin in https://github.com/HKUDS/nanobot/pull/3953
* fix: drop redundant reasoning_effort for Kimi thinking models by @agbocsardi in https://github.com/HKUDS/nanobot/pull/3940
* fix(webui): avoid misleading file edit counters by @Re-bin in https://github.com/HKUDS/nanobot/pull/3957
* refactor(apply_patch): remove deprecated patch mode, keep edits-only by @chengyongru in https://github.com/HKUDS/nanobot/pull/3960
* feat(image-generation): add OpenAI and Codex provider support by @ZegWe in https://github.com/HKUDS/nanobot/pull/3954
* Add Ollama image generation support by @HaisamAbbas in https://github.com/HKUDS/nanobot/pull/3946
* fix: dedupe Responses replay item ids by @Yuxin-Lou in https://github.com/HKUDS/nanobot/pull/3961
* Unify image provider HTTP handling and document Gemini image base URLs by @HaisamAbbas in https://github.com/HKUDS/nanobot/pull/3929
* chore: fill zh-TW and ja locale keys by @yu-xin-c in https://github.com/HKUDS/nanobot/pull/3962
* [security] fix(web): validate redirect targets before fetching by @Hinotoi-agent in https://github.com/HKUDS/nanobot/pull/3928
* chore: fill remaining WebUI locale keys by @yu-xin-c in https://github.com/HKUDS/nanobot/pull/3964
* feat(cli): add CLI Apps for CLI-Anything integrations by @Re-bin in https://github.com/HKUDS/nanobot/pull/3963
* test(cli): cover CLI Apps on Windows CI by @Re-bin in https://github.com/HKUDS/nanobot/pull/3965
* feat: Add Zhipu (智谱) image generation provider by @JiajunBernoulli in https://github.com/HKUDS/nanobot/pull/3971
* fix: uncap exec config timeout and normalize transcription apiBase (#3595, #3637) by @04cb in https://github.com/HKUDS/nanobot/pull/3967
* docs: use xiaomi_mimo provider for MiMo token plan by @honjiaxuan in https://github.com/HKUDS/nanobot/pull/3972
* feat(spawn): allow per-subagent sampling temperature (#3969) by @04cb in https://github.com/HKUDS/nanobot/pull/3975
* feat(mcp): add preset setup and capability mentions by @Re-bin in https://github.com/HKUDS/nanobot/pull/3979
* fix(provider): preserve OpenAI-compatible tool call ids by @Yuxin-Lou in https://github.com/HKUDS/nanobot/pull/3984
* feat(webui): improve slash command actions by @Re-bin in https://github.com/HKUDS/nanobot/pull/3987
* feat(providers): add OpenAI API type and extra body configuration by @outlook84 in https://github.com/HKUDS/nanobot/pull/3974
* fix(agent): propagate maxConcurrentSubagents config to SubagentManager by @Felix8568 in https://github.com/HKUDS/nanobot/pull/3978
* feat(providers): add Step Plan support by @morandot in https://github.com/HKUDS/nanobot/pull/3988
* feat(apps): unify CLI apps and MCP by @Re-bin in https://github.com/HKUDS/nanobot/pull/3991
* fix(agent): prevent runner from exiting while sustained goal is active by @chengyongru in https://github.com/HKUDS/nanobot/pull/3999
* fix(web): update Kagi search API integration by @agbocsardi in https://github.com/HKUDS/nanobot/pull/4004
* feat(telegram): add webhook mode by @outlook84 in https://github.com/HKUDS/nanobot/pull/3996
* chore: enable WebUI ESLint by @yu-xin-c in https://github.com/HKUDS/nanobot/pull/3981
* fix(provider): handle blank Codex transport errors by @ehs208 in https://github.com/HKUDS/nanobot/pull/4009
* fix(provider): honor NANOBOT_STREAM_IDLE_TIMEOUT_S in Codex provider by @yeounhyeok in https://github.com/HKUDS/nanobot/pull/4018
* feature: Add Discord model slash command by @hamb1y in https://github.com/HKUDS/nanobot/pull/4031
* refactor(heartbeat): migrate heartbeat service to cron-based auto-registration by @chengyongru in https://github.com/HKUDS/nanobot/pull/4023
* Fix session, goal, streaming, and context-budget bugs by @hamb1y in https://github.com/HKUDS/nanobot/pull/4041
* feat(webui): add project workspaces and access controls by @Re-bin in https://github.com/HKUDS/nanobot/pull/4007
* feat(webui): add context window setting by @Re-bin in https://github.com/HKUDS/nanobot/pull/4045
* feat(channels): add document extraction toggle by @boogieLing in https://github.com/HKUDS/nanobot/pull/4049
* fix(providers): surface clear arrearage warning to user on quota/billing errors (#3006) by @04cb in https://github.com/HKUDS/nanobot/pull/4048
* [security] fix(msteams): trust service URLs before replies by @Hinotoi-agent in https://github.com/HKUDS/nanobot/pull/4047
* feat(apps): add nanobot extension registry by @Re-bin in https://github.com/HKUDS/nanobot/pull/4046
* fix(exec): bypass cmd.exe for multi-line python -c commands on Windows by @chengyongru in https://github.com/HKUDS/nanobot/pull/4051
* [security] fix(matrix): bound inbound media downloads by @Hinotoi-agent in https://github.com/HKUDS/nanobot/pull/4106
* fix(security): normalize IPv6-mapped IPv4 addresses in SSRF checks by @yorkhellen in https://github.com/HKUDS/nanobot/pull/4086
* fix: coerce typeless Anthropic content blocks + add Dream enable toggle (#3993, #3885) by @04cb in https://github.com/HKUDS/nanobot/pull/4054
* feat(webui): refine output timeline and model controls by @Re-bin in https://github.com/HKUDS/nanobot/pull/4108
* fix(agent): acquire per-session lock in process_direct (#4080) by @04cb in https://github.com/HKUDS/nanobot/pull/4104
* fix(matrix): handle SAS device verification by @mytechdream in https://github.com/HKUDS/nanobot/pull/4110
* fix(heartbeat): skip empty HEARTBEAT.md and fail closed on delivery (#4111) by @04cb in https://github.com/HKUDS/nanobot/pull/4114
* Require auth for WebSocket token issuance by @hamb1y in https://github.com/HKUDS/nanobot/pull/4103
* fix(webui): handle undefined language in code blocks by @Flinn-X in https://github.com/HKUDS/nanobot/pull/4117
* feat(webui): polish chat rendering and host runtime by @Re-bin in https://github.com/HKUDS/nanobot/pull/4121
* fix(agent): extend sustained goal iteration budget by @Re-bin in https://github.com/HKUDS/nanobot/pull/4127
* fix(webui): preserve Thought/response ordering by @Re-bin in https://github.com/HKUDS/nanobot/pull/4137
* docs: add AGENTS.md for Codex by @jiehaoZ in https://github.com/HKUDS/nanobot/pull/4131
* fix(session): prevent duplicate archive and message loss in enforce_file_cap by @yorkhellen in https://github.com/HKUDS/nanobot/pull/4129

## New Contributors
* @huanglei214 made their first contribution in https://github.com/HKUDS/nanobot/pull/3872
* @voidborne-d made their first contribution in https://github.com/HKUDS/nanobot/pull/3874
* @li-yazhou made their first contribution in https://github.com/HKUDS/nanobot/pull/3878
* @HengWeiBin made their first contribution in https://github.com/HKUDS/nanobot/pull/3894
* @HaisamAbbas made their first contribution in https://github.com/HKUDS/nanobot/pull/3933
* @Alex-yang00 made their first contribution in https://github.com/HKUDS/nanobot/pull/3927
* @agbocsardi made their first contribution in https://github.com/HKUDS/nanobot/pull/3940
* @ZegWe made their first contribution in https://github.com/HKUDS/nanobot/pull/3954
* @Yuxin-Lou made their first contribution in https://github.com/HKUDS/nanobot/pull/3961
* @yu-xin-c made their first contribution in https://github.com/HKUDS/nanobot/pull/3962
* @outlook84 made their first contribution in https://github.com/HKUDS/nanobot/pull/3974
* @Felix8568 made their first contribution in https://github.com/HKUDS/nanobot/pull/3978
* @ehs208 made their first contribution in https://github.com/HKUDS/nanobot/pull/4009
* @yeounhyeok made their first contribution in https://github.com/HKUDS/nanobot/pull/4018
* @hamb1y made their first contribution in https://github.com/HKUDS/nanobot/pull/4031
* @mytechdream made their first contribution in https://github.com/HKUDS/nanobot/pull/4110
* @jiehaoZ made their first contribution in https://github.com/HKUDS/nanobot/pull/4131

**Full Changelog**: https://github.com/HKUDS/nanobot/compare/v0.2.0...v0.2.1

---

> **Source** [HKUDS/nanobot](https://github.com/HKUDS/nanobot) · `v0.2.1` · 2026-06-01 · [upstream release](https://github.com/HKUDS/nanobot/releases/tag/v0.2.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
