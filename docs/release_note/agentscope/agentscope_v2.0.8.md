---
title: "agentscope v2.0.8"
project: "agentscope"
repo: "agentscope-ai/agentscope"
tag: "v2.0.8"
version: "v2.0.8"
published: "2026-09-08"
type: "patch"
lang: "en"
summary: "Realtime Voice Agent: Introduced a realtime voice agent with DashScope backends and local transport support. · A2A Protocol Support: Added A2AAgent class to the agent module, enabling agent-to-agent communication."
---

# agentscope v2.0.8

## Highlight
- **Realtime Voice Agent**: Introduced a realtime voice agent with DashScope backends and local transport support.
- **A2A Protocol Support**: Added `A2AAgent` class to the agent module, enabling agent-to-agent communication.
- **New Pipeline Module**: Added a new pipeline module with a `GoalPipeline` class for goal-driven agent workflows.
- **Agent-Driven Context Compression**: Introduced a context compression tool that allows agents to manage their own context window.
- **LLM Rerank for RAG**: Added LLM-based reranking support to improve RAG retrieval quality.
- **Volcengine Ark Model**: Added support for Volcengine Ark chat model.
- **MCP Enhancements**: Support runtime MCP headers in Docker workspaces and improved MCP connection cleanup.
- **Web UI Polish**: Chat experience improvements including session auto-naming, query caching, and better dark mode support.



## What's Changed
* fix(formatter): derive audio format from media type by @ump45nose in https://github.com/agentscope-ai/agentscope/pull/2301
* fix(gemini): exclude tool-execution tokens from output_tokens by @iluv7 in https://github.com/agentscope-ai/agentscope/pull/2406
* feat(formatter): use native multimodal tool outputs by @fancyboi999 in https://github.com/agentscope-ai/agentscope/pull/2389
* docs(examples): fix broken relative link to _types.py in mem0 README by @feizhuzheng in https://github.com/agentscope-ai/agentscope/pull/2438
* feat(pipeline): add new pipeline module and a `GoalPipeline` class by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2428
* fix(webui): isolate sessions when switching agents by @iluv7 in https://github.com/agentscope-ai/agentscope/pull/2429
* chore: bump version to 2.0.7.post1 by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2452
* feat(agent): generate a final text summary after reaching max iterations by @qbc2016 in https://github.com/agentscope-ai/agentscope/pull/2443
* fix(tracing): report interrupted chat responses by @fengting124 in https://github.com/agentscope-ai/agentscope/pull/2450
* fix(model): preserve encrypted reasoning items in OpenAI Responses history by @qbc2016 in https://github.com/agentscope-ai/agentscope/pull/2426
* fix(gemini): sanitize nullable type arrays by @helloJamest in https://github.com/agentscope-ai/agentscope/pull/2437
* fix(webui): keep channel toggle inside card by @iluv7 in https://github.com/agentscope-ai/agentscope/pull/2466
* fix(webui): follow system dark mode so sidebar buttons stay visible (#2467) by @PiedPiper911 in https://github.com/agentscope-ai/agentscope/pull/2468
* fix(state): preserve LRU cache under concurrent hits by @fengting124 in https://github.com/agentscope-ai/agentscope/pull/2457
* fix(xai): include reasoning tokens in output usage by @iluv7 in https://github.com/agentscope-ai/agentscope/pull/2461
* ci(monitor): stop watching review events that can never access secrets by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2472
* fix(formatter): derive multimodal tool-result identifier from the block's own stable id by @AmirF194 in https://github.com/agentscope-ai/agentscope/pull/2165
* fix(example): disable uvicorn hot reload on Windows by @dvd233 in https://github.com/agentscope-ai/agentscope/pull/2434
* fix(tool): make read cache backend-aware so Read->Edit works in workspaces by @nolanchic in https://github.com/agentscope-ai/agentscope/pull/2092
* fix(agent): hint after repeated tool errors by @he-yufeng in https://github.com/agentscope-ai/agentscope/pull/1816
* fix(app): drain the wake-up queue atomically by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2476
* fix(scheduler): let one node own the timers by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2477
* feat(rag): add LLM rerank support by @BreezyB1n in https://github.com/agentscope-ai/agentscope/pull/1975
* fix(scheduler): validate cron before persistence by @redSun64 in https://github.com/agentscope-ai/agentscope/pull/2442
* feat(agent): add agent-driven context compression tool by @jinliyl in https://github.com/agentscope-ai/agentscope/pull/2143
* feat(channel): bind channel credentials interactively by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2484
* fix(channel): show a channel that is starting as connecting, not stopped by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2487
* feat(a2a): add `A2AAgent` class in the agent module by @YingchaoX in https://github.com/agentscope-ai/agentscope/pull/2142
* docs(middleware): fix reply budget example class name by @zjncs in https://github.com/agentscope-ai/agentscope/pull/2493
* fix(tool): apply schema-guided repair to tool arguments by @iluv7 in https://github.com/agentscope-ai/agentscope/pull/2496
* fix: correct misleading docstring in src/agentscope/__init__.py by @sunrong1 in https://github.com/agentscope-ai/agentscope/pull/2502
* fix(rag): normalize distance scores so higher means more relevant by @lyh7c00 in https://github.com/agentscope-ai/agentscope/pull/2486
* fix(agent): record compression usage in context by @fengting124 in https://github.com/agentscope-ai/agentscope/pull/2433
* feat(web_ui): chat polish, session auto-naming, and a query cache by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2503
* fix(webui): auto-open task panel on first stateUpdated per session by @aniruddhaadak80 in https://github.com/agentscope-ai/agentscope/pull/2431
* fix(mcp): clean up cancelled MCP connections by @014-code in https://github.com/agentscope-ai/agentscope/pull/2499
* chore(release): bump version to 2.0.8 and add the A2A news item by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2505
* fix: repair agent-facing prompt template text defects by @simpleqt in https://github.com/agentscope-ai/agentscope/pull/2513
* docs: replace full-width colons with ASCII colons in CONTRIBUTING_zh.md URLs by @simpleqt in https://github.com/agentscope-ai/agentscope/pull/2511
* fix(app): clear inbox consumer on session delete by @CoralGarden52 in https://github.com/agentscope-ai/agentscope/pull/2519
* feat(mcp): support runtime MCP headers in Docker workspaces by @qbc2016 in https://github.com/agentscope-ai/agentscope/pull/2456
* fix: block sending by Enter while a reply is in progress by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2529
* fix(rag): escape Excel Markdown table cells by @MaxFreedomPollard in https://github.com/agentscope-ai/agentscope/pull/2528
* fix(deps): pin ripgrep below 15.x to restore Windows dev installs by @Shxiao101 in https://github.com/agentscope-ai/agentscope/pull/2526
* refactor(app): a session's origin is one tagged union by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2536
* fix(app): support cross-owner agent invites by @logicwu0 in https://github.com/agentscope-ai/agentscope/pull/2326
* test(mcp): follow SDK transport defaults by @iluv7 in https://github.com/agentscope-ai/agentscope/pull/2542
* feat(model): add Volcengine Ark chat model support by @iluv7 in https://github.com/agentscope-ai/agentscope/pull/2532
* feat(realtime): realtime voice agent with DashScope backends and local transport by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2547
* docs(zh): link zh news entries to the zh docs locale by @ConcaSun in https://github.com/agentscope-ai/agentscope/pull/2546
* fix(pipeline): honor verifier context reset by @yaodong-shen in https://github.com/agentscope-ai/agentscope/pull/2544
* fix(web-ui): keep running MCP tool calls visible by @yang0228 in https://github.com/agentscope-ai/agentscope/pull/2490
* fix(state): skip oversized read-cache entries by @wuwenbo0626 in https://github.com/agentscope-ai/agentscope/pull/2534
* refactor(realtime): align RealtimeAgent naming with Agent by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2550
* fix(task): hide completed prerequisites from blockedBy by @wuwenbo0626 in https://github.com/agentscope-ai/agentscope/pull/2541
* fix(rag): preserve blank lines between paragraphs in WordParser by @liugy789 in https://github.com/agentscope-ai/agentscope/pull/2538

## New Contributors
* @ump45nose made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2301
* @feizhuzheng made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2438
* @fengting124 made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2450
* @PiedPiper911 made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2468
* @AmirF194 made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2165
* @dvd233 made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2434
* @redSun64 made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2442
* @zjncs made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2493
* @sunrong1 made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2502
* @lyh7c00 made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2486
* @aniruddhaadak80 made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2431
* @014-code made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2499
* @simpleqt made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2513
* @CoralGarden52 made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2519
* @MaxFreedomPollard made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2528
* @Shxiao101 made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2526
* @ConcaSun made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2546
* @yaodong-shen made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2544
* @yang0228 made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2490
* @wuwenbo0626 made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2534
* @liugy789 made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2538

**Full Changelog**: https://github.com/agentscope-ai/agentscope/compare/v2.0.7...v2.0.8

---

> **Source** [agentscope-ai/agentscope](https://github.com/agentscope-ai/agentscope) · `v2.0.8` · 2026-09-08 · [upstream release](https://github.com/agentscope-ai/agentscope/releases/tag/v2.0.8)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
