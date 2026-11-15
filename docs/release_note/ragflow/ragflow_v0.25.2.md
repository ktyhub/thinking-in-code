---
title: "ragflow v0.25.2"
project: "ragflow"
repo: "infiniflow/ragflow"
tag: "v0.25.2"
version: "v0.25.2"
published: "2026-05-09"
type: "patch"
lang: "en"
summary: "API refactoring and unification: Continues the transition of web APIs to RESTful conventions, ensuring backward compatibility for all legacy endpoints."
---

# ragflow v0.25.2

## Summary

### Improvements

- API refactoring and unification: Continues the transition of web APIs to RESTful conventions, ensuring backward compatibility for all legacy endpoints.

### Data source

- Introduces a lightweight snapshot mechanism for synchronizing deleted files across eight data sources—including Moodle, DingTalk AI Table, and RSS—ensuring a faithful reflection of all remote data sources. [#14362](https://github.com/infiniflow/ragflow/issues/14362)[#14499](https://github.com/infiniflow/ragflow/pull/14499)

### Bug fixes

- Metadata visibility issues during v0.24.0 to v0.25.0 upgrades.
- Duplicate chat output.
- Metadata filtering was handled in-memory instead of leveraging Elasticsearch, incurring performance bottlenecks. [#14576](https://github.com/infiniflow/ragflow/pull/14576)


## What's Changed
* feat: add FuturMix as model provider by @FuturMix in https://github.com/infiniflow/ragflow/pull/14419
* perf: avoid O(n²) array growth in embedding accumulation by @Zzappy24 in https://github.com/infiniflow/ragflow/pull/14369
* Fix: optimize file batch delete by @buua436 in https://github.com/infiniflow/ragflow/pull/14473
* Fix: add document delete permission check by @buua436 in https://github.com/infiniflow/ragflow/pull/14472
* Chore(deps): Bump go.opentelemetry.io/otel from 1.39.0 to 1.41.0 by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/14516
* Fix: Manual/Naive outline tuple unpack crash by @6ba3i in https://github.com/infiniflow/ragflow/pull/14518
* Doc: Updated v0.25.1 release notes by @writinwaters in https://github.com/infiniflow/ragflow/pull/14519
* feat(seafile): support deleted-file sync via slim snapshot by @spider-yamet in https://github.com/infiniflow/ragflow/pull/14499
* Feat: add button for remove header & footer in pipeline by @Magicbook1108 in https://github.com/infiniflow/ragflow/pull/14486
* Feat: add skills space to context engine by @yingfeng in https://github.com/infiniflow/ragflow/pull/13908
* fix: the oceanbase database connector constructs sql... in ob_conn.py by @orbisai0security in https://github.com/infiniflow/ragflow/pull/14470
* feat(asana): support deleted-file sync by @bitloi in https://github.com/infiniflow/ragflow/pull/14468
* feat(zendesk): support deleted-file sync by @bitloi in https://github.com/infiniflow/ragflow/pull/14487
* Fix version info by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/14529
* Not allow to sort by id by @wangq8 in https://github.com/infiniflow/ragflow/pull/14526
* Simplify chat and support multimodal chat by @qinling0210 in https://github.com/infiniflow/ragflow/pull/14523
* Fix: LaTeX formulas cannot be displayed on the chat page. by @cike8899 in https://github.com/infiniflow/ragflow/pull/14531
* Go: implement provider: Vllm by @Haruko386 in https://github.com/infiniflow/ragflow/pull/14532
* Fix #14443 by @wangq8 in https://github.com/infiniflow/ragflow/pull/14536
* feat(webdav): support deleted-file sync via slim snapshot by @spider-yamet in https://github.com/infiniflow/ragflow/pull/14491
* feat(rss): support deleted-file sync by @bitloi in https://github.com/infiniflow/ragflow/pull/14493
* Fix: remove delete_documents uuid validation by @buua436 in https://github.com/infiniflow/ragflow/pull/14533
* Fix: sync data source empty list by @Magicbook1108 in https://github.com/infiniflow/ragflow/pull/14530
* Support stream for multimodal chat by @qinling0210 in https://github.com/infiniflow/ragflow/pull/14537
* Doc: Minor editorial updates by @writinwaters in https://github.com/infiniflow/ragflow/pull/14543
* Doc: RAGFlow now supports DeepSeek v4 by @writinwaters in https://github.com/infiniflow/ragflow/pull/14544
* Feat/configurable metadata display by @Attili-sys in https://github.com/infiniflow/ragflow/pull/13464
* Go: CLI chat with text, image, video by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/14573
* Go: move logger to common module by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/14545
* Chore(deps-dev): Bump pillow from 12.1.1 to 12.2.0 by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/14578
* Use GetChatModel, remove duplicate functions in model_service.go by @qinling0210 in https://github.com/infiniflow/ragflow/pull/14546
* Update README by @yingfeng in https://github.com/infiniflow/ragflow/pull/14547
* Go: implement provider: Ollama by @Haruko386 in https://github.com/infiniflow/ragflow/pull/14580
* Go: implement provider: xAI by @jack-stormentswe in https://github.com/infiniflow/ragflow/pull/14550
* Fix: retry RocksDB metadata contention on concurrent CREATE/DROP by @Zzappy24 in https://github.com/infiniflow/ragflow/pull/14563
* Fix MinerU output fallback and NameError regression by @6ba3i in https://github.com/infiniflow/ragflow/pull/14538
* feat(dingtalk-ai-table): support deleted-file sync via slim snapshot by @spider-yamet in https://github.com/infiniflow/ragflow/pull/14525
* Feat: add IMAP deleted document sync by @buua436 in https://github.com/infiniflow/ragflow/pull/14539
* Memory API: enforce tenant permissions on memory and message endpoints by @jony376 in https://github.com/infiniflow/ragflow/pull/14535
* Fix: add legacy agent completion API compatibility by @buua436 in https://github.com/infiniflow/ragflow/pull/14582
* fix(#14389): normalize list metadata values for in filters by @Shiyao-Huang in https://github.com/infiniflow/ragflow/pull/14410
* Fix AttributeError when appending non-streaming tool calls to chat history in Agentic Agent by @euvre in https://github.com/infiniflow/ragflow/pull/14456
* fix(connector_service): add TIMEZONE setting and correct interval log… by @alfaadriel in https://github.com/infiniflow/ragflow/pull/14446
* fix: authorize beta document downloads by tenant by @sebastiondev in https://github.com/infiniflow/ragflow/pull/14496
* Fix OpenDataLoader naive parsing by normalizing `@OpenDataLoader` and filtering unsupported parser kwargs by @6ba3i in https://github.com/infiniflow/ragflow/pull/14581
* feat(graphrag): fix merge concurrency and add resume-from-checkpoint by @prpercival in https://github.com/infiniflow/ragflow/pull/14238
* Fix: add file convert backward compatibility by @buua436 in https://github.com/infiniflow/ragflow/pull/14583
* Refactor: completion -> completions by @wangq8 in https://github.com/infiniflow/ragflow/pull/14584
* Fix: bootstrap agent replica on demand by @buua436 in https://github.com/infiniflow/ragflow/pull/14588
* fix: normalize double-escaped LaTeX backslashes and HTML entities by @vivek41-glitch in https://github.com/infiniflow/ragflow/pull/14564
* Go: implement provider: lm-studio by @Haruko386 in https://github.com/infiniflow/ragflow/pull/14586
* Bug fix: Support question and custom_header by @wangq8 in https://github.com/infiniflow/ragflow/pull/14594
* Fix agent permission issue by @wangq8 in https://github.com/infiniflow/ragflow/pull/14597
* Fix: support non-stream runtime agent completion by @buua436 in https://github.com/infiniflow/ragflow/pull/14596
* Fix: add base64 to doc generator output by @buua436 in https://github.com/infiniflow/ragflow/pull/14599
* Revert "Fix agent permission issue" by @wangq8 in https://github.com/infiniflow/ragflow/pull/14602
* Fix secret key inconsistency cross the RAGFlow servers by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/14591
* refactor: use warp to improve canvas access check logic by @Woody-Hu in https://github.com/infiniflow/ragflow/pull/14587
* Bump to infinity v0.7.0-dev6 by @qinling0210 in https://github.com/infiniflow/ragflow/pull/14606
* feat(llm): add MiniMax GroupId header support by @yuzhichang in https://github.com/infiniflow/ragflow/pull/14610
* Go: implement provider: OpenAI by @pandadev66 in https://github.com/infiniflow/ragflow/pull/14605
* Feat: enable sync deleted files for RDBMS & fix remove last file issue by @Magicbook1108 in https://github.com/infiniflow/ragflow/pull/14615
* Go: implement provider: Nvidia by @Haruko386 in https://github.com/infiniflow/ragflow/pull/14623
* Allow more task logs for #14617 by @wangq8 in https://github.com/infiniflow/ragflow/pull/14624
* Fix team member cannot edit agent by @wangq8 in https://github.com/infiniflow/ragflow/pull/14612
* Fix: preserve doc generator download metadata in message by @buua436 in https://github.com/infiniflow/ragflow/pull/14626
* Fix: support tool call config by @buua436 in https://github.com/infiniflow/ragflow/pull/14616
* fix: prepend bucket prefix in Azure Blob (SAS/SPN) to prevent cross-dataset file overwrites by @octo-patch in https://github.com/infiniflow/ragflow/pull/14174
* Go: fix auth issue in hybrid mode by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/14611
* feat(moodle): support deleted-file sync by @jack-stormentswe in https://github.com/infiniflow/ragflow/pull/14548
* Go: implement Rerank in ZhipuAI driver by @pandadev66 in https://github.com/infiniflow/ragflow/pull/14608
* fix: prepend bucket prefix to Azure SPN and SAS storage paths by @voidborne-d in https://github.com/infiniflow/ragflow/pull/14185
* Feat: support local provider for code exec component & remove some outdated models by @Magicbook1108 in https://github.com/infiniflow/ragflow/pull/14637
* Fix: Change route name by @dcc123456 in https://github.com/infiniflow/ragflow/pull/14639
* Perf: push metadata filters down to Elasticsearch by @sxxtony in https://github.com/infiniflow/ragflow/pull/14576
* feat: update Turkish localization strings by @bakiburakogun in https://github.com/infiniflow/ragflow/pull/14650
* fix(go): wire CheckConnection to ListModels in ollama, lm-studio, and vllm by @pandadev66 in https://github.com/infiniflow/ragflow/pull/14614
* Go: implement Balance in SiliconFlow driver by @pandadev66 in https://github.com/infiniflow/ragflow/pull/14643
* Go: implement provider: OpenRouter by @Haruko386 in https://github.com/infiniflow/ragflow/pull/14652
* Go: implement Balance in DeepSeek driver by @pandadev66 in https://github.com/infiniflow/ragflow/pull/14632
* fix(go): implement ListModels and CheckConnection in NVIDIA driver by @pandadev66 in https://github.com/infiniflow/ragflow/pull/14636
* fix: add bucket prefix to Azure Blob SPN and SAS storage operations by @D2758695161 in https://github.com/infiniflow/ragflow/pull/14347
* Go: implement Rerank in Gitee AI driver by @pandadev66 in https://github.com/infiniflow/ragflow/pull/14656
* Fix: display error by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/14654
* Refa: migrate document preview/download to RESTful API by @buua436 in https://github.com/infiniflow/ragflow/pull/14633
* Fix: missing authorization checks in `/files/link-to-datasets` by @jony376 in https://github.com/infiniflow/ragflow/pull/14649
* Fix cli login by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/14658
* Go: implement remaining interface for OpenRouter by @Haruko386 in https://github.com/infiniflow/ragflow/pull/14657
* Go: implement Encode (embeddings) in Aliyun driver by @pandadev66 in https://github.com/infiniflow/ragflow/pull/14647
* Fix: enforce tenant authorization on document download endpoint (#14618) by @web-dev0521 in https://github.com/infiniflow/ragflow/pull/14625
* Fix: collapsible thinking display and separate deep research retrieval tag by @wanghualoong in https://github.com/infiniflow/ragflow/pull/14613
* Fix: add compatibility route for document download under /v1 by @buua436 in https://github.com/infiniflow/ragflow/pull/14663
* Fix: path-aware reset in canvas.run() to preserve cross-run outputs by @wanghualoong in https://github.com/infiniflow/ragflow/pull/14600
* Fix: type of tenant_rerank_id by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/14667
* Go CLI: fix register user by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/14665
* Fix(Go): prevent global state pollution in local model connection check by @Haruko386 in https://github.com/infiniflow/ragflow/pull/14669
* Go: fix CLI logout command by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/14672
* Fix: handle null document_metadata in kb_prompt to prevent citation crash (#14651) by @web-dev0521 in https://github.com/infiniflow/ragflow/pull/14666
* Do not bypass threshold for rerank when metadata filter is enabled by @qinling0210 in https://github.com/infiniflow/ragflow/pull/14684
* Fix: move file check by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/14681
* fix: enforce tenant-scoped authorization for chatbot SDK endpoints by @dale053 in https://github.com/infiniflow/ragflow/pull/14592
* Refactor : Allow search multiple datasets by @wangq8 in https://github.com/infiniflow/ragflow/pull/14685
* Fix: Route error in dataset  files page by @dcc123456 in https://github.com/infiniflow/ragflow/pull/14691
* Fix UI search multiple datasets by @wangq8 in https://github.com/infiniflow/ragflow/pull/14689
* Go: implement Rerank in Aliyun driver by @Joseff531 in https://github.com/infiniflow/ragflow/pull/14676
* Fix go cli: search on datasets by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/14692
* Go: Admin list ingestion tasks by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/14695
* Docs: Added a guide on configuring SSL certificates by @writinwaters in https://github.com/infiniflow/ragflow/pull/14696
* fix(sync): scope document IDs per connector to prevent cross-KB collisions by @octo-patch in https://github.com/infiniflow/ragflow/pull/14378
* Fix: IMAGE2TEXT→CHAT fallback with model_type normalization in tenant_model_service by @vincentlambert in https://github.com/infiniflow/ragflow/pull/14704
* Fix: validate kb_ids as UUIDs before SQL interpolation in use_sql by @xingxing21 in https://github.com/infiniflow/ragflow/pull/14087
* Fix: Bedrock api_key overridden by existing-key fallback in add_llm by @vincentlambert in https://github.com/infiniflow/ragflow/pull/14707
* fix: handle missing 'total' key causing KeyError in deep research retrieval by @vincentlambert in https://github.com/infiniflow/ragflow/pull/13942
* Update README by @yingfeng in https://github.com/infiniflow/ragflow/pull/14723
* Bugfix: keep document api backward compatible by @wangq8 in https://github.com/infiniflow/ragflow/pull/14726
* fix(llm): replace mutable default `gen_conf={}` with None + defensive copy by @Ricardo-M-L in https://github.com/infiniflow/ragflow/pull/14566
* Fix: private dataset authorization bypass in shared dataset access checks by @jony376 in https://github.com/infiniflow/ragflow/pull/14645
* Go: implement provider: HuggingFace by @Haruko386 in https://github.com/infiniflow/ragflow/pull/14722
* Fix: tag parser id by @buua436 in https://github.com/infiniflow/ragflow/pull/14724
* Fix: filter api in dataset document by @Magicbook1108 in https://github.com/infiniflow/ragflow/pull/14728
* Docs: Added v0.25.2 release notes by @writinwaters in https://github.com/infiniflow/ragflow/pull/14727
* Fix IDOR: Add permission checks to file ancestry endpoints by @zpf121 in https://github.com/infiniflow/ragflow/pull/14725
* Fix: Some bugs by @dcc123456 in https://github.com/infiniflow/ragflow/pull/14734
* Fix: handle id as keyword by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/14729
* Go CLI: embed and rerank by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/14735
* Fix: Add legacy system healthz route by @buua436 in https://github.com/infiniflow/ragflow/pull/14738
* Fix: restore embedding model switching for datasets with existing chunks by @euvre in https://github.com/infiniflow/ragflow/pull/14732
* Docs: Updated release date by @writinwaters in https://github.com/infiniflow/ragflow/pull/14740
* Docs: Update version references to v0.25.2 in READMEs and docs by @asiroliu in https://github.com/infiniflow/ragflow/pull/14731

## New Contributors
* @FuturMix made their first contribution in https://github.com/infiniflow/ragflow/pull/14419
* @Zzappy24 made their first contribution in https://github.com/infiniflow/ragflow/pull/14369
* @orbisai0security made their first contribution in https://github.com/infiniflow/ragflow/pull/14470
* @jack-stormentswe made their first contribution in https://github.com/infiniflow/ragflow/pull/14550
* @jony376 made their first contribution in https://github.com/infiniflow/ragflow/pull/14535
* @Shiyao-Huang made their first contribution in https://github.com/infiniflow/ragflow/pull/14410
* @alfaadriel made their first contribution in https://github.com/infiniflow/ragflow/pull/14446
* @sebastiondev made their first contribution in https://github.com/infiniflow/ragflow/pull/14496
* @prpercival made their first contribution in https://github.com/infiniflow/ragflow/pull/14238
* @vivek41-glitch made their first contribution in https://github.com/infiniflow/ragflow/pull/14564
* @pandadev66 made their first contribution in https://github.com/infiniflow/ragflow/pull/14605
* @voidborne-d made their first contribution in https://github.com/infiniflow/ragflow/pull/14185
* @sxxtony made their first contribution in https://github.com/infiniflow/ragflow/pull/14576
* @D2758695161 made their first contribution in https://github.com/infiniflow/ragflow/pull/14347
* @web-dev0521 made their first contribution in https://github.com/infiniflow/ragflow/pull/14625
* @wanghualoong made their first contribution in https://github.com/infiniflow/ragflow/pull/14613
* @dale053 made their first contribution in https://github.com/infiniflow/ragflow/pull/14592
* @Joseff531 made their first contribution in https://github.com/infiniflow/ragflow/pull/14676
* @vincentlambert made their first contribution in https://github.com/infiniflow/ragflow/pull/14704

**Full Changelog**: https://github.com/infiniflow/ragflow/compare/v0.25.1...v0.25.2

---

> **Source** [infiniflow/ragflow](https://github.com/infiniflow/ragflow) · `v0.25.2` · 2026-05-09 · [upstream release](https://github.com/infiniflow/ragflow/releases/tag/v0.25.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
