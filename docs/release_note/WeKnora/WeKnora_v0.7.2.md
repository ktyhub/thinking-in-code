---
title: "WeKnora v0.7.2"
project: "WeKnora"
repo: "Tencent/WeKnora"
tag: "v0.7.2"
version: "v0.7.2"
published: "2026-08-07"
type: "patch"
lang: "en"
---

# WeKnora v0.7.2

## What's Changed
* refactor(agent): consolidate model-handle codecs into internal/modelcontext by @lyingbug in https://github.com/Tencent/WeKnora/pull/2330
* refactor(auth,router): unify auth session context and split router by domain by @lyingbug in https://github.com/Tencent/WeKnora/pull/2331
* fix(knowledge): clean bound vector stores in batch delete by @BigFishDreamWater in https://github.com/Tencent/WeKnora/pull/2329
* fix: support string args for skill script execution by @koishi514-Z in https://github.com/Tencent/WeKnora/pull/2318
* fix(agent): keep batched wiki_read_page results within output budget by @lyingbug in https://github.com/Tencent/WeKnora/pull/2333
* fix(pipeline): 修复合并阶段输出顺序的不确定性 by @mdrkrg in https://github.com/Tencent/WeKnora/pull/2319
* fix(knowledge): reconcile wiki state when moving documents across KBs by @lyingbug in https://github.com/Tencent/WeKnora/pull/2335
* feat(wiki): page revision history with diff, revert, and manual editing by @lyingbug in https://github.com/Tencent/WeKnora/pull/2336
* style(wiki): polish revision drawer and sidebar to match session list UX by @lyingbug in https://github.com/Tencent/WeKnora/pull/2338
* feat(feishu): sync docx via blocks API with per-type downdrill by @voidkey in https://github.com/Tencent/WeKnora/pull/2334
* fix(i18n): remove duplicate 'members' key in organization locale objects by @hiasky in https://github.com/Tencent/WeKnora/pull/2305
* fix(migrations): renumber knowledge metadata index migration to 000076 by @lyingbug in https://github.com/Tencent/WeKnora/pull/2340
* fix(im): harden connection lifecycle across replicas by @lyingbug in https://github.com/Tencent/WeKnora/pull/2349
* Refine user settings menu and access shortcuts by @lyingbug in https://github.com/Tencent/WeKnora/pull/2368
* Remove redundant Wiki operation log by @lyingbug in https://github.com/Tencent/WeKnora/pull/2367
* feat(knowledge): configure upload tags and processing options by @lyingbug in https://github.com/Tencent/WeKnora/pull/2369
* fix: Remove SanitizeForDisplay from chunk handler responses by @mdrkrg in https://github.com/Tencent/WeKnora/pull/2323
* feat(knowledge): support editable chunks and retrieval metadata by @lyingbug in https://github.com/Tencent/WeKnora/pull/2370
* fix(mcp-server): correct SSE message route to prevent initialization … by @FincherYuan in https://github.com/Tencent/WeKnora/pull/2375
* fix(im): recover channels after leader lock loss by @March-77 in https://github.com/Tencent/WeKnora/pull/2365
* fix(knowledge): clear stale errors when reparse starts by @March-77 in https://github.com/Tencent/WeKnora/pull/2363
* docs: clarify scope-aware contributor validation by @March-77 in https://github.com/Tencent/WeKnora/pull/2366
* fix(frontend): distinguish main stages from postprocess tasks by @March-77 in https://github.com/Tencent/WeKnora/pull/2364
* fix(wiki): prevent finalizing stalls on enqueue failure by @BigFishDreamWater in https://github.com/Tencent/WeKnora/pull/2362
* fix(docparser): resolve remote images referenced by HTML img tags by @ochanism in https://github.com/Tencent/WeKnora/pull/2355
* fix(mcp-server): route diagnostics to stderr to fix stdio protocol crash by @annopick in https://github.com/Tencent/WeKnora/pull/2371
* fix(im): render resource:// images in IM channels (nginx /r/ + config guards) by @voidkey in https://github.com/Tencent/WeKnora/pull/2352
* fix(chat): prevent duplicate terminal answer events by @koishi514-Z in https://github.com/Tencent/WeKnora/pull/2353
* fix(docreader): restore optional XLSX header context by @WHUTcjh-2024 in https://github.com/Tencent/WeKnora/pull/2314
* fix: 在chunk overlap中保留更细的语义边界 by @ttommybot in https://github.com/Tencent/WeKnora/pull/2342
* [Bug] preserve web evidence when page fetches fail by @langcaiye in https://github.com/Tencent/WeKnora/pull/2309
* fix(knowledge): default custom metadata on create by @lyingbug in https://github.com/Tencent/WeKnora/pull/2379
* fix(knowledge): distinguish duplicate files by type by @koishi514-Z in https://github.com/Tencent/WeKnora/pull/2384
* fix(storage): allow image uploads to use file service fallback by @lyingbug in https://github.com/Tencent/WeKnora/pull/2389
* fix(retriever): rebuild a missing vector store engine on demand by @ochanism in https://github.com/Tencent/WeKnora/pull/2357
* fix(agent): exclude disabled FAQ entries by @lyingbug in https://github.com/Tencent/WeKnora/pull/2392
* fix(mcp-server): pin MCP Python SDK to v1.x by @lyingbug in https://github.com/Tencent/WeKnora/pull/2395
* Redesign upload confirmation dialog by @lyingbug in https://github.com/Tencent/WeKnora/pull/2397
* ci(mcp-server): remove duplicate workflow.yml (superseded by mcp-server.yml) by @annopick in https://github.com/Tencent/WeKnora/pull/2398
* fix(knowledge): support local HTML file uploads by @BigFishDreamWater in https://github.com/Tencent/WeKnora/pull/2393
* fix(session): include external users in API session group by @lyingbug in https://github.com/Tencent/WeKnora/pull/2405
* fix(organization): pass avatar when creating shared space by @hiasky in https://github.com/Tencent/WeKnora/pull/2408
* feat(knowledge): add batch tag dialog for selected documents by @hiasky in https://github.com/Tencent/WeKnora/pull/2406
* fix: harden shared agent source permissions by @lyingbug in https://github.com/Tencent/WeKnora/pull/2417
* ci: add PR checks for app, frontend, and DocReader by @lyingbug in https://github.com/Tencent/WeKnora/pull/2416
* fix(mcp-server): migrate to MCPServer high-level API (mcp 2.x) [v1.1.0] by @annopick in https://github.com/Tencent/WeKnora/pull/2420
* fix(docparser): normalize PaddleOCR-VL Cloud HTML tables by @zldkr in https://github.com/Tencent/WeKnora/pull/2419
* test(ci): stabilize MCP session test and decouple frontend checks by @lyingbug in https://github.com/Tencent/WeKnora/pull/2424
* fix(mcp): 修复非 UUID Agent ID 无法解析的问题 by @ZhuangShiHao1207 in https://github.com/Tencent/WeKnora/pull/2422
* fix(sessions): 放行 embed 运行时读取自身会话，修复追问建议 500 与刷新丢对话 by @asmh1989 in https://github.com/Tencent/WeKnora/pull/2421
* fix(frontend): resolve i18n @ syntax errors and TDesign drawer warnings by @lyingbug in https://github.com/Tencent/WeKnora/pull/2426
* fix: preserve wiki folder path after creation by @ttommybot in https://github.com/Tencent/WeKnora/pull/2429
* fix(sqlite): filter vector candidates before top-k by @BigFishDreamWater in https://github.com/Tencent/WeKnora/pull/2440
* fix: 修复 SQLite 下删除 DataSource 失败 by @yuefanxiao in https://github.com/Tencent/WeKnora/pull/2435
* fix(evaluation): use sync passage indexing to fix always-zero retrieval metrics by @lazyayuan in https://github.com/Tencent/WeKnora/pull/2359
* fix(frontend): 编辑保存后自动关闭编辑器，创建后引导继续配置 by @lyingbug in https://github.com/Tencent/WeKnora/pull/2448
* fix(frontend): restore audit and KB activity i18n after locale prune by @lyingbug in https://github.com/Tencent/WeKnora/pull/2449
* fix(frontend): route embed protected images through channel file proxy by @lyingbug in https://github.com/Tencent/WeKnora/pull/2454
* fix(knowledge): allow xlsx in URL import (#2447) by @lyingbug in https://github.com/Tencent/WeKnora/pull/2452
* fix(chat): segment Chinese query expansions with jieba by @BigFishDreamWater in https://github.com/Tencent/WeKnora/pull/2463
* fix(knowledge): surface batch reparse failures by @Myang-print in https://github.com/Tencent/WeKnora/pull/2453
* fix(rerank): batch LKEAP requests within API limits by @BigFishDreamWater in https://github.com/Tencent/WeKnora/pull/2501
* fix(chat): keep attachment upload status reactive by @jacentsao in https://github.com/Tencent/WeKnora/pull/2498
* fix(rerank): normalize NVIDIA logit scores by @BigFishDreamWater in https://github.com/Tencent/WeKnora/pull/2496
* fix(rerank): preserve code and math passages by @BigFishDreamWater in https://github.com/Tencent/WeKnora/pull/2495
* fix: count skipped stages in parsing progress by @ttommybot in https://github.com/Tencent/WeKnora/pull/2500
* fix(docparser): preserve MinerU automatic PDF parsing by @oscarlius in https://github.com/Tencent/WeKnora/pull/2493
* feat(mcp-server): add list_shared_knowledge_bases tool by @FincherYuan in https://github.com/Tencent/WeKnora/pull/2497
* fix: exclude archived wiki pages from lint cursor by @quan020406 in https://github.com/Tencent/WeKnora/pull/2503
* fix(knowledge): clear stale error_message on reprocessing and finalize by @oscarlius in https://github.com/Tencent/WeKnora/pull/2488
* fix(knowledge): clear stale error_message on the remaining reprocess paths by @lyingbug in https://github.com/Tencent/WeKnora/pull/2506
* fix: unify organization settings modal scrolling by @ttommybot in https://github.com/Tencent/WeKnora/pull/2508
* fix: show answer generation status after retrieval by @ttommybot in https://github.com/Tencent/WeKnora/pull/2514
* fix(embedding): prevent ants worker panic and mutex deadlock on empty/mismatched results by @qfzc in https://github.com/Tencent/WeKnora/pull/2520
* feat(knowledge): folder tree sidebar, folder path storage, and document re-filing by @lyingbug in https://github.com/Tencent/WeKnora/pull/2528
* fix(frontend): restore runtime queue i18n and guard against prune by @lyingbug in https://github.com/Tencent/WeKnora/pull/2529
* fix(chat): preserve retrieval results during embedding failures by @KKtwo in https://github.com/Tencent/WeKnora/pull/2525
* perf(container): batch legacy storage alias lookup at startup by @lyingbug in https://github.com/Tencent/WeKnora/pull/2530
* feat(storage): support AWS S3 NoAk default credentials by @qilifan in https://github.com/Tencent/WeKnora/pull/2008
* fix(summary): preserve rows across table chunks  by @BigFishDreamWater in https://github.com/Tencent/WeKnora/pull/2538
* feat(api): resource_urls=public for directly loadable file URLs by @lyingbug in https://github.com/Tencent/WeKnora/pull/2531
* fix(chunking): align preview with parent-child splitting by @BigFishDreamWater in https://github.com/Tencent/WeKnora/pull/2539
* fix(wiki): ensure prompt language is always resolved by @lyingbug in https://github.com/Tencent/WeKnora/pull/2543
* fix(chunking): sync preview swagger and normalize splitter config by @lyingbug in https://github.com/Tencent/WeKnora/pull/2541
* fix(faq): prevent duplicate entries when a create is retried by @lyingbug in https://github.com/Tencent/WeKnora/pull/2544
* Improve Wiki reader layout and revision history UX by @lyingbug in https://github.com/Tencent/WeKnora/pull/2547
* fix(chunking): normalize line endings before splitting by @BigFishDreamWater in https://github.com/Tencent/WeKnora/pull/2546
* feat(mcp-server): add create_knowledge_from_text tool by @01luyicheng in https://github.com/Tencent/WeKnora/pull/2532
* fix: retry document summaries before fallback by @ttommybot in https://github.com/Tencent/WeKnora/pull/2505
* fix: replace all exact wiki text matches by @quan020406 in https://github.com/Tencent/WeKnora/pull/2516
* feat(im): add markdown replies for QQBot #2461 by @YS-zdck in https://github.com/Tencent/WeKnora/pull/2483
* chore(deps): bump the cli-deps group in /cli with 3 updates by @dependabot[bot] in https://github.com/Tencent/WeKnora/pull/2481
* feat(feishu-driver): 新增飞书云盘数据源 by @Greenplumwine in https://github.com/Tencent/WeKnora/pull/2466
* fix(wiki): exclude archived pages from stats queries by @pengpengyi92 in https://github.com/Tencent/WeKnora/pull/2549
* fix(im/wecom): resolve longconn deadlock between closeConn and heartbeatLoop by @yangcongcong-coding in https://github.com/Tencent/WeKnora/pull/2551
* fix(chunks): 恢复未编辑分块的按位置合并 by @mdrkrg in https://github.com/Tencent/WeKnora/pull/2555
* fix(im/wecom): scope connection close to its own generation by @lyingbug in https://github.com/Tencent/WeKnora/pull/2557
* fix(chunks): 受信任分块按精确位置裁剪重叠 by @lyingbug in https://github.com/Tencent/WeKnora/pull/2556
* fix(docs): correct @Router path annotations for agent-chat and knowledge-chat by @qfzc in https://github.com/Tencent/WeKnora/pull/2561
* fix(chunks): 流水线重写后的检索结果不用位置匹配 by @mdrkrg in https://github.com/Tencent/WeKnora/pull/2558
* docs: add comprehensive WeKnora documentation by @lyingbug in https://github.com/Tencent/WeKnora/pull/2350
* docs: 部署步骤增加 docker compose pull，防止复用缓存的旧镜像 by @WHUTcjh-2024 in https://github.com/Tencent/WeKnora/pull/2567
* docs: 补全 docker compose pull 部署与升级说明 by @lyingbug in https://github.com/Tencent/WeKnora/pull/2570
* Revert "docs: 补全 docker compose pull 部署与升级说明" by @lyingbug in https://github.com/Tencent/WeKnora/pull/2571
* Revert "docs: add comprehensive WeKnora documentation" by @lyingbug in https://github.com/Tencent/WeKnora/pull/2572
* update website docs by @lyingbug in https://github.com/Tencent/WeKnora/pull/2573
* docs: complete docker compose pull guidance across deployment docs by @lyingbug in https://github.com/Tencent/WeKnora/pull/2574
* docs(website): add official site link and inject VERSION at build time by @lyingbug in https://github.com/Tencent/WeKnora/pull/2576
* fix(auth): do not sanitize registration password before hashing by @jiahao6635 in https://github.com/Tencent/WeKnora/pull/2568
* docs(release): prepare v0.7.2 release notes and version bump by @lyingbug in https://github.com/Tencent/WeKnora/pull/2585

## New Contributors
* @BigFishDreamWater made their first contribution in https://github.com/Tencent/WeKnora/pull/2329
* @koishi514-Z made their first contribution in https://github.com/Tencent/WeKnora/pull/2318
* @mdrkrg made their first contribution in https://github.com/Tencent/WeKnora/pull/2319
* @FincherYuan made their first contribution in https://github.com/Tencent/WeKnora/pull/2375
* @annopick made their first contribution in https://github.com/Tencent/WeKnora/pull/2371
* @WHUTcjh-2024 made their first contribution in https://github.com/Tencent/WeKnora/pull/2314
* @zldkr made their first contribution in https://github.com/Tencent/WeKnora/pull/2419
* @ZhuangShiHao1207 made their first contribution in https://github.com/Tencent/WeKnora/pull/2422
* @asmh1989 made their first contribution in https://github.com/Tencent/WeKnora/pull/2421
* @lazyayuan made their first contribution in https://github.com/Tencent/WeKnora/pull/2359
* @Myang-print made their first contribution in https://github.com/Tencent/WeKnora/pull/2453
* @oscarlius made their first contribution in https://github.com/Tencent/WeKnora/pull/2493
* @quan020406 made their first contribution in https://github.com/Tencent/WeKnora/pull/2503
* @qfzc made their first contribution in https://github.com/Tencent/WeKnora/pull/2520
* @01luyicheng made their first contribution in https://github.com/Tencent/WeKnora/pull/2532
* @pengpengyi92 made their first contribution in https://github.com/Tencent/WeKnora/pull/2549
* @jiahao6635 made their first contribution in https://github.com/Tencent/WeKnora/pull/2568

**Full Changelog**: https://github.com/Tencent/WeKnora/compare/v0.7.1...v0.7.2

---

> **Source** [Tencent/WeKnora](https://github.com/Tencent/WeKnora) · `v0.7.2` · 2026-08-07 · [upstream release](https://github.com/Tencent/WeKnora/releases/tag/v0.7.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
