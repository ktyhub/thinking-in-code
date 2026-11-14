---
title: "agentscope v2.0.10"
project: "agentscope"
repo: "agentscope-ai/agentscope"
tag: "v2.0.10"
version: "v2.0.10"
published: "2026-10-12"
type: "patch"
lang: "en"
---

# agentscope v2.0.10

## What's Changed
* chore(version): bump version to 2.0.10dev by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2894
* docs: announce SOP, TeamPipeline and MiniMax support in news by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2932
* fix(tts): label audio with the effective response format by @little-spoon77 in https://github.com/agentscope-ai/agentscope/pull/2980
* fix(model): emit the dashscope audio transcript as text by @aniruddhaadak80 in https://github.com/agentscope-ai/agentscope/pull/2925
* fix(rag): preserve omitted Word table columns by @twei43846-afk in https://github.com/agentscope-ai/agentscope/pull/2961
* fix(rag): preserve duplicate and blank Excel headers by @little-spoon77 in https://github.com/agentscope-ai/agentscope/pull/2948
* fix(tts): respect per-call speech instructions by @little-spoon77 in https://github.com/agentscope-ai/agentscope/pull/2990
* fix(tts): propagate DashScope synthesis errors by @little-spoon77 in https://github.com/agentscope-ai/agentscope/pull/2993
* fix(formatter): route Moonshot tool_sequence formatting through _format_tool_sequence by @sunrong1 in https://github.com/agentscope-ai/agentscope/pull/2903
* fix(message): keep a copy of the usage appended to a message by @Lesereingrape in https://github.com/agentscope-ai/agentscope/pull/2805
* fix(skill): read SKILL.md as utf-8-sig so a BOM keeps front matter by @lihongyuan99 in https://github.com/agentscope-ai/agentscope/pull/2735
* fix(tracing): report the MiniMax provider name on chat spans by @RerankerGuo in https://github.com/agentscope-ai/agentscope/pull/3023
* fix(model): give each Ollama tool call its own id by @zaher-m in https://github.com/agentscope-ai/agentscope/pull/3011
* fix(rag): close the latest Elasticsearch PIT by @cxyyy66 in https://github.com/agentscope-ai/agentscope/pull/2998
* fix(rag): normalize deferred PDF read errors by @twei43846-afk in https://github.com/agentscope-ai/agentscope/pull/2975
* fix(embedding): enforce a zero cache file limit by @twei43846-afk in https://github.com/agentscope-ai/agentscope/pull/2962
* fix(model): stream an Anthropic tool call without arguments as {} by @zaher-m in https://github.com/agentscope-ai/agentscope/pull/3008
* fix(tool): treat dash-prefixed grep paths as operands by @twei43846-afk in https://github.com/agentscope-ai/agentscope/pull/2988
* fix(tool): reject empty edit replacement targets by @neu-hsc in https://github.com/agentscope-ai/agentscope/pull/2995
* fix(tts): allow a per-call DashScope voice by @cxyyy66 in https://github.com/agentscope-ai/agentscope/pull/3002
* fix(app): reject an MCP name the library cannot load back by @lihongyuan99 in https://github.com/agentscope-ai/agentscope/pull/3025
* fix(model): normalize nullable Gemini cache token usage by @HootRock in https://github.com/agentscope-ai/agentscope/pull/3079
* fix(tool): unlink local symbolic links without following targets by @little-spoon77 in https://github.com/agentscope-ai/agentscope/pull/3006
* fix(workspace): point the bubblewrap offload test at the workspace:// reference by @sxh313 in https://github.com/agentscope-ai/agentscope/pull/3151
* fix(tts): propagate CosyVoice callback errors by @little-spoon77 in https://github.com/agentscope-ai/agentscope/pull/3042
* fix(model): refresh anthropic streaming usage time by @aniruddhaadak80 in https://github.com/agentscope-ai/agentscope/pull/2927
* fix(tool): preserve option-like glob argument values by @little-spoon77 in https://github.com/agentscope-ai/agentscope/pull/3004
* fix(tool): handle current-directory segments in glob patterns by @little-spoon77 in https://github.com/agentscope-ai/agentscope/pull/2979
* fix(pipeline): join sibling members after a failed round by @neu-hsc in https://github.com/agentscope-ai/agentscope/pull/2982
* fix(app): anchor a schedule's default start time to an absolute instant by @kabishou11 in https://github.com/agentscope-ai/agentscope/pull/3101
* fix(sop): honor a step that marks its own run failed by @RXQ6 in https://github.com/agentscope-ai/agentscope/pull/3096
* test(memory): synchronize retrieval in the deduplication regression by @Shy7777 in https://github.com/agentscope-ai/agentscope/pull/3094
* fix(hub): parse BOM-prefixed skill frontmatter by @GoldArowana in https://github.com/agentscope-ai/agentscope/pull/3119
* fix(app): protect Redis subscription cleanup from cancellation by @iluv7 in https://github.com/agentscope-ai/agentscope/pull/3158
* fix(tests): silence too-many-public-methods in the glob test by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/3162
* fix(tool): await deferred function results by @fhgffy in https://github.com/agentscope-ai/agentscope/pull/3135
* fix(formatter): skip empty thinking blocks in the moonshot formatter by @aniruddhaadak80 in https://github.com/agentscope-ai/agentscope/pull/2954
* fix(realtime): release completed tool-call names in dashscope by @aniruddhaadak80 in https://github.com/agentscope-ai/agentscope/pull/2969
* fix(tool): omit injected state from inferred function schemas by @quifox in https://github.com/agentscope-ai/agentscope/pull/3090
* fix(tool): run a no-argument tool call on an empty argument payload by @RXQ6 in https://github.com/agentscope-ai/agentscope/pull/3095
* fix(middleware): don't block structured output when the budget is spent by @zaher-m in https://github.com/agentscope-ai/agentscope/pull/3027
* fix(mcp): build the owned streamable-HTTP client through the SDK factory by @RerankerGuo in https://github.com/agentscope-ai/agentscope/pull/3010
* fix(scheduler): notify owner after deleting schedules by @quifox in https://github.com/agentscope-ai/agentscope/pull/3103
* fix(workspace): clean up failed Docker initialization by @quifox in https://github.com/agentscope-ai/agentscope/pull/3098
* fix(workspace): resolve case-insensitive skill directory collisions by @HootRock in https://github.com/agentscope-ai/agentscope/pull/3075
* fix(workspace): report an unset OpenSandbox exit code as a failure by @lihongyuan99 in https://github.com/agentscope-ai/agentscope/pull/3062
* fix(tool): resolve symlinks before the dangerous-path check by @sunrong1 in https://github.com/agentscope-ai/agentscope/pull/3033
* fix(tool): treat a separated dotted sed backup suffix as a suffix by @ffffff55 in https://github.com/agentscope-ai/agentscope/pull/3031
* chore(tool): let the backend create Write's parent directories by @RerankerGuo in https://github.com/agentscope-ai/agentscope/pull/3015
* fix(app): normalize document content types before parser lookup by @zhengguangzhuo in https://github.com/agentscope-ai/agentscope/pull/2992
* fix(model): propagate Responses API stream errors by @Tsubaki-01 in https://github.com/agentscope-ai/agentscope/pull/3086
* fix(model): copy extra_body before defaulting thinking.type by @RerankerGuo in https://github.com/agentscope-ai/agentscope/pull/3069
* fix(rag): resolve LOG_LEVEL before configuring the worker by @sxh313 in https://github.com/agentscope-ai/agentscope/pull/3131
* fix(formatter): promote tool-result media in the xai chat formatter by @aniruddhaadak80 in https://github.com/agentscope-ai/agentscope/pull/2928
* fix(rag): normalise powerpoint soft line breaks in text frames by @aniruddhaadak80 in https://github.com/agentscope-ai/agentscope/pull/2940
* fix(formatter): validate input in the dashscope multi-agent formatter by @aniruddhaadak80 in https://github.com/agentscope-ai/agentscope/pull/2952
* fix(model): wrap non-streaming chat audio in a real WAV header by @aniruddhaadak80 in https://github.com/agentscope-ai/agentscope/pull/3028
* fix(rag): extract images embedded in Word table cells by @liwenjie200543 in https://github.com/agentscope-ai/agentscope/pull/3064
* fix(models): preserve Responses reasoning text by @wuyak in https://github.com/agentscope-ai/agentscope/pull/2916
* fix(app): make workspace skill deletion idempotent by @lihongyuan99 in https://github.com/agentscope-ai/agentscope/pull/2892
* refactor(app): group the agent's text-mode settings under chat_config by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2570
* fix(model): preserve OpenAI Responses refusal text by @GoldArowana in https://github.com/agentscope-ai/agentscope/pull/3136
* docs(rag): include qdrant dependency in example setup by @shuxiachai in https://github.com/agentscope-ai/agentscope/pull/3205
* feat(classifier): add OpenAI Decisions API support by @YingchaoX in https://github.com/agentscope-ai/agentscope/pull/3174
* fix(embedding): tolerate missing OpenAI usage by @jipeng6036-del in https://github.com/agentscope-ai/agentscope/pull/3199
* fix(rag): preserve native Excel error cells in ExcelParser by @HsbcJone in https://github.com/agentscope-ai/agentscope/pull/3204
* fix(app): close rejected chat run coroutine by @helloJamest in https://github.com/agentscope-ai/agentscope/pull/3213
* fix(tool): isolate default Read input media types by @lux-liang in https://github.com/agentscope-ai/agentscope/pull/3161
* fix(rag): normalize deferred PPTX XML errors by @shuxiachai in https://github.com/agentscope-ai/agentscope/pull/3217
* feat(realtime): add Qwen3.8 Omni Realtime support by @qbc2016 in https://github.com/agentscope-ai/agentscope/pull/3196
* fix(tts): make TTSModelBase a real abstract base class by @aniruddhaadak80 in https://github.com/agentscope-ai/agentscope/pull/2956
* fix(model): stream an OpenAI Responses tool call without arguments as {} by @ffffff55 in https://github.com/agentscope-ai/agentscope/pull/3229
* fix(model): honor caller-provided Gemini config by @ffffff55 in https://github.com/agentscope-ai/agentscope/pull/3231
* fix(model): read Moonshot cached prompt tokens from prompt_tokens_details by @bfs2021 in https://github.com/agentscope-ai/agentscope/pull/3269
* chore(version): bump version to 2.0.10 by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/3270

## New Contributors
* @little-spoon77 made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2980
* @cxyyy66 made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2998
* @neu-hsc made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2995
* @HootRock made their first contribution in https://github.com/agentscope-ai/agentscope/pull/3079
* @kabishou11 made their first contribution in https://github.com/agentscope-ai/agentscope/pull/3101
* @RXQ6 made their first contribution in https://github.com/agentscope-ai/agentscope/pull/3096
* @GoldArowana made their first contribution in https://github.com/agentscope-ai/agentscope/pull/3119
* @fhgffy made their first contribution in https://github.com/agentscope-ai/agentscope/pull/3135
* @quifox made their first contribution in https://github.com/agentscope-ai/agentscope/pull/3090
* @ffffff55 made their first contribution in https://github.com/agentscope-ai/agentscope/pull/3031
* @zhengguangzhuo made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2992
* @liwenjie200543 made their first contribution in https://github.com/agentscope-ai/agentscope/pull/3064
* @wuyak made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2916
* @shuxiachai made their first contribution in https://github.com/agentscope-ai/agentscope/pull/3205
* @jipeng6036-del made their first contribution in https://github.com/agentscope-ai/agentscope/pull/3199
* @HsbcJone made their first contribution in https://github.com/agentscope-ai/agentscope/pull/3204
* @lux-liang made their first contribution in https://github.com/agentscope-ai/agentscope/pull/3161
* @bfs2021 made their first contribution in https://github.com/agentscope-ai/agentscope/pull/3269

**Full Changelog**: https://github.com/agentscope-ai/agentscope/compare/v2.0.9...v2.0.10

---

> **Source** [agentscope-ai/agentscope](https://github.com/agentscope-ai/agentscope) · `v2.0.10` · 2026-10-12 · [upstream release](https://github.com/agentscope-ai/agentscope/releases/tag/v2.0.10)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
