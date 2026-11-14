---
title: "WeKnora v0.7.1"
project: "WeKnora"
repo: "Tencent/WeKnora"
tag: "v0.7.1"
version: "v0.7.1"
published: "2026-07-24"
type: "patch"
lang: "en"
summary: "feat(chat): add session header actions and Markdown export · feat(tracing): migrate langfuse client to OTLP/OTel wire protocol · fix(tracing): merge Langfuse finish metadata and export auto root spans"
---

# WeKnora v0.7.1

## What's Changed
* feat(chat): add session header actions and Markdown export by @lyingbug in https://github.com/Tencent/WeKnora/pull/2109
* feat(tracing): migrate langfuse client to OTLP/OTel wire protocol by @lordk911 in https://github.com/Tencent/WeKnora/pull/2099
* fix(tracing): merge Langfuse finish metadata and export auto root spans by @lyingbug in https://github.com/Tencent/WeKnora/pull/2111
* style(chat): widen conversation content area from 800px to 960px by @lyingbug in https://github.com/Tencent/WeKnora/pull/2114
* fix(wiki): prevent stale pending tasks after ingest timeout by @014-code in https://github.com/Tencent/WeKnora/pull/2106
* fix: stabilize top-k retrieval ordering by @KKtwo in https://github.com/Tencent/WeKnora/pull/2091
* refactor: remove Neo4j-based conversation memory feature by @lyingbug in https://github.com/Tencent/WeKnora/pull/2130
* feat(web-search): add Zhipu AI web search provider support by @lyingbug in https://github.com/Tencent/WeKnora/pull/2115
* feat(session): add admin API session bucket and stabilize sidebar filter by @lyingbug in https://github.com/Tencent/WeKnora/pull/2151
* fix(frontend): pin nginx base image by digest for old-host compatibility by @lyingbug in https://github.com/Tencent/WeKnora/pull/2153
* fix(api-keys): allow scoped file serve and ingest batch routes by @lyingbug in https://github.com/Tencent/WeKnora/pull/2154
* fix(frontend): load complete TDesign styles by @jacentsao in https://github.com/Tencent/WeKnora/pull/2148
* feat: support Volcengine rerank by @KKtwo in https://github.com/Tencent/WeKnora/pull/2147
* fix(rerank): batch Volcengine rerank requests over API document limit by @lyingbug in https://github.com/Tencent/WeKnora/pull/2155
* feat(session): gate IM/embed/API channel sessions behind admin by @lyingbug in https://github.com/Tencent/WeKnora/pull/2156
* fix(embed): 兼容不支持 crypto.randomUUID 的浏览器以及http请求模式 by @hbh112233abc in https://github.com/Tencent/WeKnora/pull/2159
* fix(types): use correct GORM tag separator in Message.KnowledgeReferences by @steptian in https://github.com/Tencent/WeKnora/pull/2157
* fix(rerank): stop sending vLLM truncate_prompt_tokens by default by @draix in https://github.com/Tencent/WeKnora/pull/2160
* feat(im): add Yunzhijia integration by @jacentsao in https://github.com/Tencent/WeKnora/pull/2149
* feat(compose): align env vars with code + fix helm GraphRAG bug by @Greenplumwine in https://github.com/Tencent/WeKnora/pull/2164
* fix(compose): let PDF render parallelism follow CPU-aware code default by @lyingbug in https://github.com/Tencent/WeKnora/pull/2168
* fix(feishu): resilient large-wiki sync — retry, streaming resume, failure visibility by @voidkey in https://github.com/Tencent/WeKnora/pull/2166
* feat(api-keys): add platform-scoped API keys for control-plane automation by @lyingbug in https://github.com/Tencent/WeKnora/pull/2165
* fix(knowledge): multiset AminusB for KB clone sync by @lyingbug in https://github.com/Tencent/WeKnora/pull/2169
* fix(frontend): keep custom theme tokens in production builds by @lyingbug in https://github.com/Tencent/WeKnora/pull/2172
* feat(im): render Yunzhijia replies as Markdown by @jacentsao in https://github.com/Tencent/WeKnora/pull/2180
* fix(knowledge): rewrite chunk content image URLs on clone by @lyingbug in https://github.com/Tencent/WeKnora/pull/2183
* fix(knowledge): rewrite parent text chunk image URLs via global pass by @lyingbug in https://github.com/Tencent/WeKnora/pull/2188
* fix: 修复IM问答无法读取session的问题 by @wangkeee2002 in https://github.com/Tencent/WeKnora/pull/2182
* fix(cli): repair acceptance e2e for current CLI contracts by @yuefanxiao in https://github.com/Tencent/WeKnora/pull/2178
* fix(knowledge): copy embedded chunk images into exports namespace by @lyingbug in https://github.com/Tencent/WeKnora/pull/2191
* fix(chat): show model reasoning inline in agent timeline by @lyingbug in https://github.com/Tencent/WeKnora/pull/2193
* fix: normalize API key expiry timestamps to UTC (#2137) by @lyingbug in https://github.com/Tencent/WeKnora/pull/2171
* fix(knowledge): stop async delete from leaving visible/zombie rows (#2192) by @lyingbug in https://github.com/Tencent/WeKnora/pull/2195
* fix: correct graph and multimodal processing traces by @ttommybot in https://github.com/Tencent/WeKnora/pull/2190
* feat(wiki): prune empty folders after document retract by @lyingbug in https://github.com/Tencent/WeKnora/pull/2196
* fix(dev): nc 兼容BSD netcat by @hbh112233abc in https://github.com/Tencent/WeKnora/pull/2205
* 修复跨工作空间共享知识库原始文档预览失败 by @chang30519-art in https://github.com/Tencent/WeKnora/pull/2200
* fix(wiki): support orphan count on sqlite by @wolfkill in https://github.com/Tencent/WeKnora/pull/2209
* feat(knowledge): add scoped activity audit trail by @lyingbug in https://github.com/Tencent/WeKnora/pull/2198
* fix(embedding): reuse SSRF-safe HTTP transport by @March-77 in https://github.com/Tencent/WeKnora/pull/2201
* refactor(http): share SSRF-safe transport across model clients by @lyingbug in https://github.com/Tencent/WeKnora/pull/2213
* fix: refresh pending join request counts after review by @ttommybot in https://github.com/Tencent/WeKnora/pull/2212
* fix(search): validate hybrid search query text by @March-77 in https://github.com/Tencent/WeKnora/pull/2203
* fix(tasks): dequeue work for deleted knowledge bases by @March-77 in https://github.com/Tencent/WeKnora/pull/2202
* fix(tasks): detach KB deletion queue cleanup from request ctx by @lyingbug in https://github.com/Tencent/WeKnora/pull/2215
* feat(im): support Yunzhijia WebSocket image messages by @jacentsao in https://github.com/Tencent/WeKnora/pull/2214
* fix(im): harden Yunzhijia image download after #2214 by @lyingbug in https://github.com/Tencent/WeKnora/pull/2216
* fix(task-inspector): handle lazy queue not found errors by @LHYintheCode in https://github.com/Tencent/WeKnora/pull/2218
* fix(mcp): coordinate OAuth token refresh and authorization polling by @lyingbug in https://github.com/Tencent/WeKnora/pull/2227
* fix: prevent API keys from assigning owner role by @ttommybot in https://github.com/Tencent/WeKnora/pull/2225
* docs: clarify workspace owner cardinality by @ttommybot in https://github.com/Tencent/WeKnora/pull/2224
* feat(runtime): bulk purge archived queue tasks and chat_attachment i18n by @lyingbug in https://github.com/Tencent/WeKnora/pull/2233
* feat(llm): add prompt-cache observability and wiki cache-friendly prompts by @lyingbug in https://github.com/Tencent/WeKnora/pull/2236
* feat(chat): show wiki tool results in the references drawer by @lyingbug in https://github.com/Tencent/WeKnora/pull/2239
* fix(models): align model debug upload limit with global MAX_FILE_SIZE by @lyingbug in https://github.com/Tencent/WeKnora/pull/2240
* feat(frontend): polish shared space settings and join preview UI by @lyingbug in https://github.com/Tencent/WeKnora/pull/2245
* feat(frontend): polish organization space UI and share-to-space panels by @lyingbug in https://github.com/Tencent/WeKnora/pull/2249
* fix(knowledge): restrict source file download to Editor and above by @lyingbug in https://github.com/Tencent/WeKnora/pull/2250
* fix: synchronize organization state after writes by @ttommybot in https://github.com/Tencent/WeKnora/pull/2268
* fix(frontend): correct optimistic organization state after review and detail loads by @lyingbug in https://github.com/Tencent/WeKnora/pull/2269
* fix(agent): honor suggested-questions limit parameter by @jack-wang-176 in https://github.com/Tencent/WeKnora/pull/2253
* fix: prevent TDesign textarea autosize crash in org settings popup by @lyingbug in https://github.com/Tencent/WeKnora/pull/2271
* fix(org): disambiguate shared-space terms and tighten invite search by @lyingbug in https://github.com/Tencent/WeKnora/pull/2273
* fix(doris): harden Stream Load HTTP with SSRF-safe client by @lyingbug in https://github.com/Tencent/WeKnora/pull/2276
* fix(wiki): harden slug integrity across ingest and agent write paths by @lyingbug in https://github.com/Tencent/WeKnora/pull/2280
* chore(release): prepare v0.7.1 by @lyingbug in https://github.com/Tencent/WeKnora/pull/2286

## New Contributors
* @lordk911 made their first contribution in https://github.com/Tencent/WeKnora/pull/2099
* @014-code made their first contribution in https://github.com/Tencent/WeKnora/pull/2106
* @KKtwo made their first contribution in https://github.com/Tencent/WeKnora/pull/2091
* @hbh112233abc made their first contribution in https://github.com/Tencent/WeKnora/pull/2159
* @steptian made their first contribution in https://github.com/Tencent/WeKnora/pull/2157
* @wangkeee2002 made their first contribution in https://github.com/Tencent/WeKnora/pull/2182
* @yuefanxiao made their first contribution in https://github.com/Tencent/WeKnora/pull/2178
* @ttommybot made their first contribution in https://github.com/Tencent/WeKnora/pull/2190
* @chang30519-art made their first contribution in https://github.com/Tencent/WeKnora/pull/2200
* @March-77 made their first contribution in https://github.com/Tencent/WeKnora/pull/2201
* @LHYintheCode made their first contribution in https://github.com/Tencent/WeKnora/pull/2218

**Full Changelog**: https://github.com/Tencent/WeKnora/compare/v0.7.0...v0.7.1

---

> **Source** [Tencent/WeKnora](https://github.com/Tencent/WeKnora) · `v0.7.1` · 2026-07-24 · [upstream release](https://github.com/Tencent/WeKnora/releases/tag/v0.7.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
