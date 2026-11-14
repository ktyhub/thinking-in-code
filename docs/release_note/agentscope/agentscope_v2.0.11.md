---
title: "agentscope v2.0.11"
project: "agentscope"
repo: "agentscope-ai/agentscope"
tag: "v2.0.11"
version: "v2.0.11"
published: "2026-10-27"
type: "patch"
lang: "en"
summary: "fix(model): declare real WAV sizes in the final streamed audio block · fix(embedding): isolate Ollama embedding caches by host · fix(model): await provider stream cleanup on public aclose"
---

# agentscope v2.0.11

## What's Changed
* fix(model): declare real WAV sizes in the final streamed audio block by @BlueX888 in https://github.com/agentscope-ai/agentscope/pull/3242
* fix(embedding): isolate Ollama embedding caches by host by @maahumada in https://github.com/agentscope-ai/agentscope/pull/3265
* fix(model): await provider stream cleanup on public aclose by @HsbcJone in https://github.com/agentscope-ai/agentscope/pull/3216
* fix(workspace): offload nested media from context archives by @wuyak in https://github.com/agentscope-ai/agentscope/pull/3201
* feat(tui): add right arrow key to switch questions in ask user ui by @allenli178 in https://github.com/agentscope-ai/agentscope/pull/3275
* feat(asr): add batch transcription abstraction and OpenAI model by @wangtaotaotao95 in https://github.com/agentscope-ai/agentscope/pull/2667
* fix(agent): preserve cancellation before concurrent tool execution by @dafyy321-pixel in https://github.com/agentscope-ai/agentscope/pull/2768
* chore: bumping version to 2.0.11dev by @qbc2016 in https://github.com/agentscope-ai/agentscope/pull/3300
* feat(mcp): support mcp 2.x Python SDK, unpin mcp<2.0.0 by @a-yeyang in https://github.com/agentscope-ai/agentscope/pull/2216
* fix(tool): preserve annotations and docstrings for partial functions by @shuxiachai in https://github.com/agentscope-ai/agentscope/pull/3257
* fix(rag): bound MongoDB search candidates by @shuxiachai in https://github.com/agentscope-ai/agentscope/pull/3316
* fix(tui): scope tool interactions by reply by @wuwenbo0626 in https://github.com/agentscope-ai/agentscope/pull/3282
* fix(tracing): serialize pydantic tool results as JSON instead of repr by @maahumada in https://github.com/agentscope-ai/agentscope/pull/3263
* fix(workspace): append nothing when offloading an empty context batch by @ffffff55 in https://github.com/agentscope-ai/agentscope/pull/3254
* fix(formatter): decode percent-encoded local file URLs before opening by @kabishou11 in https://github.com/agentscope-ai/agentscope/pull/3250
* fix(formatter): decode ollama file URLs by @qingshungLI in https://github.com/agentscope-ai/agentscope/pull/3141
* fix(console): preserve pending replies across agent switches by @FengZhiheng666 in https://github.com/agentscope-ai/agentscope/pull/3317
* docs(contributing): correct the workspace manager module path by @kun654 in https://github.com/agentscope-ai/agentscope/pull/3354
* fix(memory): keep frontmatter when the closing fence ends the text by @kabishou11 in https://github.com/agentscope-ai/agentscope/pull/3345
* fix(embedding): honor configured Gemini text parameters by @HootRock in https://github.com/agentscope-ai/agentscope/pull/3361
* fix(asr): let per-call options override the transcribe defaults by @lihongyuan99 in https://github.com/agentscope-ai/agentscope/pull/3333
* fix(rag): clean up static hints when streams close by @kaijin-code in https://github.com/agentscope-ai/agentscope/pull/3363
* fix(webui): send a message that carries only an attachment by @ydflow in https://github.com/agentscope-ai/agentscope/pull/3365
* fix(rag): preserve embedded PowerPoint image media types by @shuxiachai in https://github.com/agentscope-ai/agentscope/pull/3339
* fix(embedding): preserve configured dashscope multimodal dimensions by @HootRock in https://github.com/agentscope-ai/agentscope/pull/3350
* fix(workspace): read the persisted .mcp file as utf-8-sig by @Tong-bit-art in https://github.com/agentscope-ai/agentscope/pull/3338
* fix(embedding): report cache source for fully cached multi-batch merges by @ZxlDragonDoctor in https://github.com/agentscope-ai/agentscope/pull/2690
* fix(embedding): report the maximum batch time instead of the sum by @aniruddhaadak80 in https://github.com/agentscope-ai/agentscope/pull/2967
* fix(message-bus): honor zero queue TTL in memory by @wuwenbo0626 in https://github.com/agentscope-ai/agentscope/pull/3376
* fix(tool): escape glob metacharacters in Write/Edit permission suggestions by @lihongyuan99 in https://github.com/agentscope-ai/agentscope/pull/3378
* test(formatter): cover Ollama file URI decoding edge cases by @GoldArowana in https://github.com/agentscope-ai/agentscope/pull/3107
* fix(pipeline): cap the GoalPipeline structured-output retries by @RXQ6 in https://github.com/agentscope-ai/agentscope/pull/3078
* test(model): cover final Anthropic streaming usage time by @RerankerGuo in https://github.com/agentscope-ai/agentscope/pull/3067
* fix(tool): report deferred PDF read failures by @neu-hsc in https://github.com/agentscope-ai/agentscope/pull/3057
* feat(classifier): let per-call options override the Decisions defaults by @lihongyuan99 in https://github.com/agentscope-ai/agentscope/pull/3391
* feat(mcp): keep an MCP structured tool result by @ydflow in https://github.com/agentscope-ai/agentscope/pull/3389
* fix(rag): serialize knowledge base collection initialization by @twei43846-afk in https://github.com/agentscope-ai/agentscope/pull/2853
* fix(rag): read a Word text box once, and as its own block by @L4XB in https://github.com/agentscope-ai/agentscope/pull/2662
* fix(rag): read content inside block-level Word content controls by @sxh313 in https://github.com/agentscope-ai/agentscope/pull/2845
* fix(formatter): put parallel Gemini function responses in one user turn by @MaxFreedomPollard in https://github.com/agentscope-ai/agentscope/pull/2631
* fix(agent): preserve tool data-block identity during event replay by @dvd233 in https://github.com/agentscope-ai/agentscope/pull/2551
* fix(rag): enforce knowledge base scope during document deletion by @dafyy321-pixel in https://github.com/agentscope-ai/agentscope/pull/3222
* fix(gemini): preserve tool call thought signatures by @Oxygen56 in https://github.com/agentscope-ai/agentscope/pull/2463
* fix(formatter): never emit a null text part for a gemini system msg by @aniruddhaadak80 in https://github.com/agentscope-ai/agentscope/pull/2950
* feat(rag): surface Excel worksheet parsing failures by @Daomiyo in https://github.com/agentscope-ai/agentscope/pull/3021
* fix(rag): avoid mutating chunks during document insertion by @Yongthyuan in https://github.com/agentscope-ai/agentscope/pull/2897
* fix(rag): keep blank Word paragraphs that still carry a run by @Starchaser1024 in https://github.com/agentscope-ai/agentscope/pull/3401
* docs(agent-service): quote extras in editable install command by @xu-song in https://github.com/agentscope-ai/agentscope/pull/3399
* feat(embedding): let a per-call output_dimensionality reach the gemini config by @lihongyuan99 in https://github.com/agentscope-ai/agentscope/pull/3404
* fix(embedding): preserve Ollama input token usage by @HootRock in https://github.com/agentscope-ai/agentscope/pull/3393
* feat(classifier): let a per-call model override reach the Jev system_one call by @lihongyuan99 in https://github.com/agentscope-ai/agentscope/pull/3424
* fix(deps): upgrade certifi, pip, uv and node to drop distrusted CAs by @qbc2016 in https://github.com/agentscope-ai/agentscope/pull/3410
* test(workspace): install checkout wheels in sandbox integration tests by @qbc2016 in https://github.com/agentscope-ai/agentscope/pull/3368
* fix(app): replace deprecated HTTP 422 status constants by @shi-felix in https://github.com/agentscope-ai/agentscope/pull/3479
* feat(models): add latest chat, TTS, and realtime model configs by @qbc2016 in https://github.com/agentscope-ai/agentscope/pull/3488
* feat(model): add OpenAI Chat and Responses API selection by @qbc2016 in https://github.com/agentscope-ai/agentscope/pull/1937
* feat(app): refine realtime voice UX and response lifecycle by @qbc2016 in https://github.com/agentscope-ai/agentscope/pull/3180
* feat(mcp): support MCP SDK 2.x and tool progress streaming by @qbc2016 in https://github.com/agentscope-ai/agentscope/pull/3325
* chore(version): bumping version to 2.0.11 by @qbc2016 in https://github.com/agentscope-ai/agentscope/pull/3496

## New Contributors
* @BlueX888 made their first contribution in https://github.com/agentscope-ai/agentscope/pull/3242
* @maahumada made their first contribution in https://github.com/agentscope-ai/agentscope/pull/3265
* @a-yeyang made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2216
* @qingshungLI made their first contribution in https://github.com/agentscope-ai/agentscope/pull/3141
* @FengZhiheng666 made their first contribution in https://github.com/agentscope-ai/agentscope/pull/3317
* @kun654 made their first contribution in https://github.com/agentscope-ai/agentscope/pull/3354
* @kaijin-code made their first contribution in https://github.com/agentscope-ai/agentscope/pull/3363
* @Tong-bit-art made their first contribution in https://github.com/agentscope-ai/agentscope/pull/3338
* @ZxlDragonDoctor made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2690
* @Daomiyo made their first contribution in https://github.com/agentscope-ai/agentscope/pull/3021
* @Yongthyuan made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2897
* @Starchaser1024 made their first contribution in https://github.com/agentscope-ai/agentscope/pull/3401
* @xu-song made their first contribution in https://github.com/agentscope-ai/agentscope/pull/3399
* @shi-felix made their first contribution in https://github.com/agentscope-ai/agentscope/pull/3479

**Full Changelog**: https://github.com/agentscope-ai/agentscope/compare/v2.0.10...v2.0.11

---

> **Source** [agentscope-ai/agentscope](https://github.com/agentscope-ai/agentscope) · `v2.0.11` · 2026-10-27 · [upstream release](https://github.com/agentscope-ai/agentscope/releases/tag/v2.0.11)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
