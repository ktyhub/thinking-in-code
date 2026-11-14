---
title: "agentscope v2.0.7"
project: "agentscope"
repo: "agentscope-ai/agentscope"
tag: "v2.0.7"
version: "v2.0.7"
published: "2026-08-24"
type: "patch"
lang: "en"
---

# agentscope v2.0.7

## What's Changed
* fix(gemini): remove unsupported $schema from tool parameters by @qbc2016 in https://github.com/agentscope-ai/agentscope/pull/2277
* feat(workspace): share workspace across different agents by @iluv7 in https://github.com/agentscope-ai/agentscope/pull/1951
* feat(workspace): isolate skills per agent, select them per session by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2283
* fix(hub): preserve GitHub MCP environment inputs by @RerankerGuo in https://github.com/agentscope-ai/agentscope/pull/2230
* fix(app): stop stranding session inbox payloads until the next user turn by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2295
* feat(console): add terminal console for trying and debugging agents by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2297
* fix(tool): fix the  meta tool by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2302
* fix(model): fixing MoonshotChatModel streaming usage by @silicon14 in https://github.com/agentscope-ai/agentscope/pull/2314
* fix(mcp): allow reconnecting stateful clients by @Solaris-star in https://github.com/agentscope-ai/agentscope/pull/2308
* feat(agent): let on_reply middlewares swallow ReplyEndEvent to continue the reply loop by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2322
* fix(formatter): use data URLs for DashScope base64 audio by @qbc2016 in https://github.com/agentscope-ai/agentscope/pull/2315
* fix(model): close OpenAI Responses stream deterministically by @BlessedWithLuck1105 in https://github.com/agentscope-ai/agentscope/pull/2349
* fix(model): close Anthropic stream deterministically by @BlessedWithLuck1105 in https://github.com/agentscope-ai/agentscope/pull/2350
* fix(formatter): keep images accumulated before a tool call by @BlessedWithLuck1105 in https://github.com/agentscope-ai/agentscope/pull/2351
* fix(hub): accept owner-scoped skill card ids by @csurong in https://github.com/agentscope-ai/agentscope/pull/2291
* feat(rag): make chunker config explicit and schema-driven by @qbc2016 in https://github.com/agentscope-ai/agentscope/pull/2083
* fix(ui): distinguish credentials by name in TTS and fallback model selectors by @qbc2016 in https://github.com/agentscope-ai/agentscope/pull/2169
* fix: disable thinking for structured output calls and add compression fallback by @qbc2016 in https://github.com/agentscope-ai/agentscope/pull/2140
* fix(app): load mutable session state under session lock by @qbc2016 in https://github.com/agentscope-ai/agentscope/pull/2232
* feat(agent): add max_image_num to ContextConfig to limit images in context by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2362
* fix(tool): pick the shell by the backend OS instead of the host OS in Bash by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2366
* docs(tool): fix typo in toolkit group validation comment by @hata333 in https://github.com/agentscope-ai/agentscope/pull/2355
* feat(tool): support DataBlock return in Read tool for binary and structured files by @qbc2016 in https://github.com/agentscope-ai/agentscope/pull/2114
* fix(tool): resolve PEP 563 lazy annotations when extracting tool schemas by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2371
* fix(event): validate tool result data source by @fancyboi999 in https://github.com/agentscope-ai/agentscope/pull/2370
* fix(mcp): detect SSE transport by URL path so query strings work by @1753936488 in https://github.com/agentscope-ai/agentscope/pull/2311
* fix(tool): distinguish inactive tool groups from missing tools in check_tool_available by @wizardeur in https://github.com/agentscope-ai/agentscope/pull/2316
* fix(app): clean up index worker tasks on cancellation by @helloJamest in https://github.com/agentscope-ai/agentscope/pull/2220
* fix(utils): make DictMixin honor missing-attribute semantics by @jesseedcp in https://github.com/agentscope-ai/agentscope/pull/2241
* fix(state): refresh read file cache recency on access by @faisalishfaq2005 in https://github.com/agentscope-ai/agentscope/pull/1811
* fix(memory): own minimal ReMe configuration by @ployts in https://github.com/agentscope-ai/agentscope/pull/2374
* feat(tool): support custom input_schema in FunctionTool by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2378
* feat(ui): display exceeding max iteration alert in chat page by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2381
* feat(rag): add chunk browsing, raw document preview and enriched knowledge base listing by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2372
* feat(agent-team): add loop middleware for subagent in teams by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2379
* feat(agent-team): tell the leader when a member's turn fails by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2386
* fix(web_ui): keep an uploaded file visible while the worker indexes it by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2387
* fix(rag): escape Word and PPT Markdown table cells by @kaiwangleo in https://github.com/agentscope-ai/agentscope/pull/2377
* fix(agent): keep prompt cache tokens in usage by @yingz23 in https://github.com/agentscope-ai/agentscope/pull/2318
* feat(channel): hold the long connections in a dedicated worker by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2390
* fix(context): allow trigger ratio of 0.9 by @qbc2016 in https://github.com/agentscope-ai/agentscope/pull/2396
* refactor(channel): deliver a reply from the node that produced it by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2395
* feat(channel): add DingTalk channel by @iluv7 in https://github.com/agentscope-ai/agentscope/pull/2285
* chore(version): bump version to 2.0.7 for release by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2407
* feat(workspace): add workspace pool for pooling by @cuiyuebing in https://github.com/agentscope-ai/agentscope/pull/1755
* fix(tracing): include input messages in chat spans by @qbc2016 in https://github.com/agentscope-ai/agentscope/pull/2391
* fix(scheduler): bind a real workspace to scheduled sessions by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2410
* fix(channel): let DingTalk send without the inbound connection by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2409
* feat(storage): support channel records on SQL storage by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2388

## New Contributors
* @silicon14 made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2314
* @Solaris-star made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2308
* @BlessedWithLuck1105 made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2349
* @hata333 made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2355
* @1753936488 made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2311
* @wizardeur made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2316
* @jesseedcp made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2241
* @kaiwangleo made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2377
* @yingz23 made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2318

**Full Changelog**: https://github.com/agentscope-ai/agentscope/compare/v2.0.6...v2.0.7

---

> **Source** [agentscope-ai/agentscope](https://github.com/agentscope-ai/agentscope) · `v2.0.7` · 2026-08-24 · [upstream release](https://github.com/agentscope-ai/agentscope/releases/tag/v2.0.7)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
