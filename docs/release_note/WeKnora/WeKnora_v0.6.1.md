---
title: "WeKnora v0.6.1"
project: "WeKnora"
repo: "Tencent/WeKnora"
tag: "v0.6.1"
version: "v0.6.1"
published: "2026-06-05"
type: "patch"
lang: "en"
summary: "perf(repository): exclude embedding field from Elasticsearch search r… · fix(swagger): Fix some Swagger API endpoints returning 404 errors and regenerate the Swagger documentation"
---

# WeKnora v0.6.1

## What's Changed
* perf(repository): exclude embedding field from Elasticsearch search r… by @majinding in https://github.com/Tencent/WeKnora/pull/1433
* fix(swagger): Fix some Swagger API endpoints returning 404 errors and regenerate the Swagger documentation by @ChenRussell in https://github.com/Tencent/WeKnora/pull/1436
* fix(repository): qualify tenant_id with table name to resolve ambiguous column reference by @ChenRussell in https://github.com/Tencent/WeKnora/pull/1435
* fix(frontend): improve tenant settings and member list UX by @lyingbug in https://github.com/Tencent/WeKnora/pull/1438
* fix(summary): preserve image caption/OCR text in document summaries by @lyingbug in https://github.com/Tencent/WeKnora/pull/1447
* fix (chat history): #1431 Preserve multiline formatting in chat messages by @tranphuongyd in https://github.com/Tencent/WeKnora/pull/1446
* feat(frontend): expose KB ↔ vector store binding in editor, list, and detail by @ochanism in https://github.com/Tencent/WeKnora/pull/1427
* fix(frontend): keep X-Tenant-ID override when switching back to home by @lyingbug in https://github.com/Tencent/WeKnora/pull/1451
* refactor(logger): support LOG_FORMAT template and harden level coloring by @nixidexiangjiao in https://github.com/Tencent/WeKnora/pull/1426
* feat(retriever): add OpenSearch type prep ahead of Phase 3 driver by @ochanism in https://github.com/Tencent/WeKnora/pull/1445
* feat(wiki): add "View in Graph" entry on wiki page by @lyingbug in https://github.com/Tencent/WeKnora/pull/1452
* fix: correct agent selector position under zoom by @shenDv6 in https://github.com/Tencent/WeKnora/pull/1459
* fix(frontend): correct floating UI positioning under root `zoom` (follow-up to #1459) by @lyingbug in https://github.com/Tencent/WeKnora/pull/1460
* fix(chat): stabilize tool ordering and report cached prompt tokens by @young1lin in https://github.com/Tencent/WeKnora/pull/1463
* 修复客户端模型类型枚举 by @cn-kali-team in https://github.com/Tencent/WeKnora/pull/1464
* fix: skip empty milvus enabled status groups by @wolfkill in https://github.com/Tencent/WeKnora/pull/1462
* 增加sandbox对windows编译支持，现在默认是linux的实现，windows直接编译报错 by @Hitvz in https://github.com/Tencent/WeKnora/pull/1434
* refactor(knowledge): route single delete through async pipeline by @lyingbug in https://github.com/Tencent/WeKnora/pull/1467
* feat(chunk): support filtering chunks by multiple chunk_type params by @lyingbug in https://github.com/Tencent/WeKnora/pull/1470
* feat(docreader): improve web parser for WeChat Official Account articles by @lyingbug in https://github.com/Tencent/WeKnora/pull/1473
* refactor(chunk): remove unused VideoInfo field from Chunk struct by @lyingbug in https://github.com/Tencent/WeKnora/pull/1472
* refactor(knowledge): make checkStorageEngineConfigured a service method with global file-service fallback by @lyingbug in https://github.com/Tencent/WeKnora/pull/1471
* feat(frontend): consolidate KB metadata into an info popover by @lyingbug in https://github.com/Tencent/WeKnora/pull/1478
* fix: respect multi-turn-disabled flag in KnowledgeQA pipeline by @lyingbug in https://github.com/Tencent/WeKnora/pull/1480
* feat(builtin-models): add YAML-based declarative config with ${ENV} interpolation by @jackson-jia-914 in https://github.com/Tencent/WeKnora/pull/1453
* feat(builtin-models): add YAML lifecycle (delete, resurrect, default invariant) on top of #1453 by @lyingbug in https://github.com/Tencent/WeKnora/pull/1483
* fix(frontend): apply default context template when switching to quick-answer mode by @HelloAndyZhang in https://github.com/Tencent/WeKnora/pull/1492
* fix(input-field): wrong toast when selecting built-in agents other than quick-answer / smart-reasoning by @jackson-jia-914 in https://github.com/Tencent/WeKnora/pull/1489
* fix(doris): inline LIMIT/OFFSET as literals and enable parameter inte… by @SilentMil in https://github.com/Tencent/WeKnora/pull/1488
* feat(agent): add intent prompt customization in agent editor by @HelloAndyZhang in https://github.com/Tencent/WeKnora/pull/1491
* fix(pipeline): fallback to raw retrieval results when rerank API fails by @ChenRussell in https://github.com/Tencent/WeKnora/pull/1484
* fix(datasource): support Yuque team token in connector by @Once-the-sea-was-difficult-for-water in https://github.com/Tencent/WeKnora/pull/1477
* feat(retriever): add OpenSearch driver skeleton with gated interface stubs by @ochanism in https://github.com/Tencent/WeKnora/pull/1481
* fix(agent): preserve agent intent prompt whitespace and add tests by @lyingbug in https://github.com/Tencent/WeKnora/pull/1494
* feat(system): unified system administration console + platform audit log by @lyingbug in https://github.com/Tencent/WeKnora/pull/1493
* feat(cli)!: v0.7 agent-first wire contract + command-surface cleanup by @voidkey in https://github.com/Tencent/WeKnora/pull/1475
* feat(settings): regroup sidebar nav and redesign model card by @lyingbug in https://github.com/Tencent/WeKnora/pull/1495
* fix(im): recover from deleted session when GetSession returns app sentinel (#1499) by @lyingbug in https://github.com/Tencent/WeKnora/pull/1500
* feat(rbac): add multi-use share-link invitations for invite_only mode by @lyingbug in https://github.com/Tencent/WeKnora/pull/1504
* refactor(qdrant): optimize batch save, map iteration, and error wrapping by @sheep44044 in https://github.com/Tencent/WeKnora/pull/1508
* fix(agent): harden tool parameter parsing against LLM type mismatches by @caiyuze-cpu in https://github.com/Tencent/WeKnora/pull/1505
* feat(retriever): implement OpenSearch driver read/write paths by @ochanism in https://github.com/Tencent/WeKnora/pull/1482
* fix(im): make presigned URL flow diagnosable end-to-end by @lyingbug in https://github.com/Tencent/WeKnora/pull/1507
* fix(knowledge): prevent stuck parsing with span-tree progress tracking by @lyingbug in https://github.com/Tencent/WeKnora/pull/1503
* feat(knowledge-base): integrate trace availability checks and enhance UI interactions by @lyingbug in https://github.com/Tencent/WeKnora/pull/1514
* fix: add model display name by @wolfkill in https://github.com/Tencent/WeKnora/pull/1523
* fix: show agent id in editor by @wolfkill in https://github.com/Tencent/WeKnora/pull/1521
* feat(cli): v0.8 — --dry-run, MCP annotations, session continue-stream by @voidkey in https://github.com/Tencent/WeKnora/pull/1510
* feat: add knowledge parse cancellation with finalizing post-process state by @lyingbug in https://github.com/Tencent/WeKnora/pull/1522
* fix: apply document process timeout to asynq tasks by @HelloWeit in https://github.com/Tencent/WeKnora/pull/1525
* test: add document process task options tests by @lyingbug in https://github.com/Tencent/WeKnora/pull/1529
* feat(frontend): improve agent/KB editor ID display and intent prompts UX by @lyingbug in https://github.com/Tencent/WeKnora/pull/1532
* fix(im,kb): storage URL rewriting and tenant default KB storage by @lyingbug in https://github.com/Tencent/WeKnora/pull/1540
* feat(frontend): enhance IMChannelsOverviewPanel layout and functionality by @lyingbug in https://github.com/Tencent/WeKnora/pull/1543
* fix(knowledgeBase): improve tag loading logic and ensure consistent behavior by @lyingbug in https://github.com/Tencent/WeKnora/pull/1544
* fix(container): correct resetPendingTasks SQL on startup by @lyingbug in https://github.com/Tencent/WeKnora/pull/1538
* fix(knowledgeBase): improve tag loading logic and ensure consistent behavior by @lyingbug in https://github.com/Tencent/WeKnora/pull/1545
* feat(retriever): activate OpenSearch k-NN driver (PR 3 of 3) by @ochanism in https://github.com/Tencent/WeKnora/pull/1542
* feat(mcp): expose read-only wiki tools via Python MCP server by @zhuzhaoyun in https://github.com/Tencent/WeKnora/pull/1502
* feat(mcp-server): add multi-transport support and restore session configuration by @SilentMil in https://github.com/Tencent/WeKnora/pull/1490
* fix: avoid stale knowledge records on upload failure by @wolfkill in https://github.com/Tencent/WeKnora/pull/1537
* fix: scrub inline image payloads before embedding by @wolfkill in https://github.com/Tencent/WeKnora/pull/1536
* refactor(keywords_vector_hybrid_indexer): enhance image payload sanitization logic by @lyingbug in https://github.com/Tencent/WeKnora/pull/1546
* feat(migrations): add display_name column to models table by @lyingbug in https://github.com/Tencent/WeKnora/pull/1547
* fix(knowledge): unstick summary and isolate manual re-index trace attempts by @lyingbug in https://github.com/Tencent/WeKnora/pull/1548
* feat(knowledge): add stop-parse button to the trace timeline panel by @lyingbug in https://github.com/Tencent/WeKnora/pull/1549
* feat(knowledge): count wiki ingest in the finalizing subtask counter by @lyingbug in https://github.com/Tencent/WeKnora/pull/1550
* fix(chat): keep in-progress message reactive so continue-stream renders by @lyingbug in https://github.com/Tencent/WeKnora/pull/1553
* fix(knowledge): make finalizing subtask counter reliable + async question fan-out by @lyingbug in https://github.com/Tencent/WeKnora/pull/1552
* fix(knowledge): wrap locale code with LanguageLocaleName in wiki ingest prompts by @jackson-jia-914 in https://github.com/Tencent/WeKnora/pull/1554
* fix(knowledge): stitch chunks by text overlap, not by position by @lyingbug in https://github.com/Tencent/WeKnora/pull/1555
* refactor(settings): unify drawer style across model/parser/storage/vector/websearch/mcp by @lyingbug in https://github.com/Tencent/WeKnora/pull/1558
* refactor(settings): enhance card interactions and accessibility across components by @lyingbug in https://github.com/Tencent/WeKnora/pull/1561
* fix(doc_parser): enhance DOC to DOCX conversion reliability by @lyingbug in https://github.com/Tencent/WeKnora/pull/1566
* feat(chat): implement local image resolver for multimodal chat by @lyingbug in https://github.com/Tencent/WeKnora/pull/1567
* fix(embedding): support native Gemini embeddings by @ziwon in https://github.com/Tencent/WeKnora/pull/1571
* feat: add MiniMax-M3 to provider model list by @octo-patch in https://github.com/Tencent/WeKnora/pull/1569
* chore(deps): bump github.com/mattn/go-runewidth from 0.0.23 to 0.0.24 in /cli in the cli-deps group by @dependabot[bot] in https://github.com/Tencent/WeKnora/pull/1572
* feat(tour): implement new user guide component and integrate into user menu by @lyingbug in https://github.com/Tencent/WeKnora/pull/1578
* feat(docreader): scanned PDF streaming, task queues, and parser engines by @lyingbug in https://github.com/Tencent/WeKnora/pull/1583
* feat(contextualGuides): add multiple contextual guide components for agent and knowledge base creation by @lyingbug in https://github.com/Tencent/WeKnora/pull/1585
* fix: deep-copy stored files and images when cloning a knowledge base by @ochanism in https://github.com/Tencent/WeKnora/pull/1574
* fix: validate vector store connection addresses against SSRF policy by @ochanism in https://github.com/Tencent/WeKnora/pull/1596
* fix(dev): use writable local storage path by @langcaiye in https://github.com/Tencent/WeKnora/pull/1593
* fix: skip credential validation when editing data source by @langcaiye in https://github.com/Tencent/WeKnora/pull/1588
* feat: support Feishu wiki node resources by @langcaiye in https://github.com/Tencent/WeKnora/pull/1587
* fix(datasource): align Feishu connector capabilities by @langcaiye in https://github.com/Tencent/WeKnora/pull/1586
* fix(event): add panic recovery to async goroutines by @gordonlu in https://github.com/Tencent/WeKnora/pull/1581
* refactor(agent): remove final_answer tool references and update related logic by @lyingbug in https://github.com/Tencent/WeKnora/pull/1597
* fix(im): inject synthetic identity so IM channels can use shared KBs by @lyingbug in https://github.com/Tencent/WeKnora/pull/1601
* feat(lkeap): integrate Tencent Cloud LKEAP Rerank support by @lyingbug in https://github.com/Tencent/WeKnora/pull/1602
* fix(frontend): pass {size} param to fileSizeExceeded i18n on Nginx 413 by @jackson-jia-914 in https://github.com/Tencent/WeKnora/pull/1598
* fix: preserve agent system prompt for greetings by @wolfkill in https://github.com/Tencent/WeKnora/pull/1527
* Revert "fix: preserve agent system prompt for greetings" by @lyingbug in https://github.com/Tencent/WeKnora/pull/1603
* fix(datasource): fail sync when all fetched items fail by @langcaiye in https://github.com/Tencent/WeKnora/pull/1599
* feat(faq): enhance FAQ handling and localization support by @lyingbug in https://github.com/Tencent/WeKnora/pull/1607
* feat(thinkingControl): implement thinking mode configuration in model editor by @lyingbug in https://github.com/Tencent/WeKnora/pull/1613
* fix(handler): /knowledge/search — accept ?query= alias, reject empty keyword by @toy0116 in https://github.com/Tencent/WeKnora/pull/1612
* fix: reject cross-store reuse_vectors knowledge move by @ochanism in https://github.com/Tencent/WeKnora/pull/1611
* feat: support Milvus database selection for vector stores by @LiRuihaoA in https://github.com/Tencent/WeKnora/pull/1608
* fix(schema): expand knowledge source length by @langcaiye in https://github.com/Tencent/WeKnora/pull/1605
* feat: release v0.6.1 by @lyingbug in https://github.com/Tencent/WeKnora/pull/1614

## New Contributors
* @majinding made their first contribution in https://github.com/Tencent/WeKnora/pull/1433
* @tranphuongyd made their first contribution in https://github.com/Tencent/WeKnora/pull/1446
* @shenDv6 made their first contribution in https://github.com/Tencent/WeKnora/pull/1459
* @young1lin made their first contribution in https://github.com/Tencent/WeKnora/pull/1463
* @Hitvz made their first contribution in https://github.com/Tencent/WeKnora/pull/1434
* @jackson-jia-914 made their first contribution in https://github.com/Tencent/WeKnora/pull/1453
* @HelloAndyZhang made their first contribution in https://github.com/Tencent/WeKnora/pull/1492
* @Once-the-sea-was-difficult-for-water made their first contribution in https://github.com/Tencent/WeKnora/pull/1477
* @sheep44044 made their first contribution in https://github.com/Tencent/WeKnora/pull/1508
* @zhuzhaoyun made their first contribution in https://github.com/Tencent/WeKnora/pull/1502
* @ziwon made their first contribution in https://github.com/Tencent/WeKnora/pull/1571
* @gordonlu made their first contribution in https://github.com/Tencent/WeKnora/pull/1581
* @LiRuihaoA made their first contribution in https://github.com/Tencent/WeKnora/pull/1608

**Full Changelog**: https://github.com/Tencent/WeKnora/compare/v0.6.0...v0.6.1

---

> **Source** [Tencent/WeKnora](https://github.com/Tencent/WeKnora) · `v0.6.1` · 2026-06-05 · [upstream release](https://github.com/Tencent/WeKnora/releases/tag/v0.6.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
