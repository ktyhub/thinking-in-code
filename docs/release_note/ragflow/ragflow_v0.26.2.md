---
title: "ragflow v0.26.2"
project: "ragflow"
repo: "infiniflow/ragflow"
tag: "v0.26.2"
version: "v0.26.2"
published: "2026-06-29"
type: "patch"
lang: "en"
summary: "Released on June 29, 2026."
---

# ragflow v0.26.2

## Summary

Released on June 29, 2026.

### New features

- Chat channels:
  - Integrates WhatsApp via a QR code scan. [#16238](https://github.com/infiniflow/ragflow/pull/16238)
  - Integrates DingTalk via bot API credentials. [#16183](https://github.com/infiniflow/ragflow/pull/16183)
  - Integrates WeCom via WebSocket connection. [#16175](https://github.com/infiniflow/ragflow/pull/16175)
- File parsing: Adds fallback logic for PP-OCRv6 and similar text recognition models, and integrates image parsing within the PaddleOCR pipeline. [#16150](https://github.com/infiniflow/ragflow/pull/16150)

### Improvements

- Datasets
  - Adds an edge-case check to the file ingestion logic to safely link empty folders to a dataset. [#16296](https://github.com/infiniflow/ragflow/pull/16296)
  - Adds pagination to the `get_flatted_meta_by_kbs()` method to prevent CRUD failures relating to datasets with more than 10,000 documents. [#16095](https://github.com/infiniflow/ragflow/pull/16095)
- Chat channels: Ensures end-user conversation histories persist across restarts but still separate when a channel is bound to a new dialog. [#16274](https://github.com/infiniflow/ragflow/pull/16274)

### i18n

- Expands i18n coverage and refines translations for the Korean UI. [#16203](https://github.com/infiniflow/ragflow/pull/16203)；
- Adds missing French translations for chat channels, username validation, and model editing. [#16217](https://github.com/infiniflow/ragflow/pull/16217)

### Bug fixes

- File parsing:
  - A `ValueError` was raised during `.docx` parsing on 'Heading' styles. [#16284](https://github.com/infiniflow/ragflow/pull/16284)
  - Tables in `.docx` files were silently removed by the laws document parser. [#16155](https://github.com/infiniflow/ragflow/pull/16155)
  - Lone Markdown headers were separated from their subsequent sections when a DeepDoc delimiter was set. [#16109](https://github.com/infiniflow/ragflow/pull/16109)
  - Markdown tables appeared twice in chunk results, once as a standalone chunk and again within a regular text chunk. [#16143](https://github.com/infiniflow/ragflow/pull/16143)
- MCP
  - The MCP server hung indefinitely when encountering empty document pages; the final page of documents was silently dropped due to flawed pagination. [#16285](https://github.com/infiniflow/ragflow/pull/16285)
  - The MCP connection and dataset discovery process failed because the server's hardcoded fetch limit exceeded the introduced `page_size` restriction. [#16148](https://github.com/infiniflow/ragflow/pull/16148)
- Dataflow
  - Restores the dataflow rerun endpoint and ensures the ingestion response includes the DSL payload to reliably render the timeline and parser views. [#16292](https://github.com/infiniflow/ragflow/pull/16292)
  - Restores dataflow parser defaults and returns the actual SSE payload, ensuring pipeline runs correctly surface message IDs and log updates. [#16290](https://github.com/infiniflow/ragflow/pull/16290)
- LLM: Failed to use the new `gemini-3.5-flash` model via the Google Cloud (Vertex AI) provider using `eu` or `us` region endpoint. This is resolved by explicitly multi-region routing requests to the required `aiplatform.<region>.rep.googleapis.com` domains instead of synthesized `<region>-aiplatform.googleapis.com` hosts. [#15990](https://github.com/infiniflow/ragflow/pull/15990)
- UI/UX: The metadata add modal sent empty values to the backend. [#15229](https://github.com/infiniflow/ragflow/pull/15229)


## What's Changed
* Fix the launch script by @wangq8 in https://github.com/infiniflow/ragflow/pull/16159
* Refactor(go-cli): improve variable and label naming in CLI parseAddModel by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16145
* Fix Chat/Search/Agent bot show image by @wangq8 in https://github.com/infiniflow/ragflow/pull/16152
* Fix: MCP dataset discovery fails due to REST API max page size limit … by @xuhaiL in https://github.com/infiniflow/ragflow/pull/16148
* Fix: cli points to the wrong api endpoints by @6ba3i in https://github.com/infiniflow/ragflow/pull/16171
* feat(go-api): implement Go-side document PATCH API & align parsing/metadata sync behavior by @Hz-186 in https://github.com/infiniflow/ragflow/pull/15975
* feat(go-api): migrate MCP server detail and download API to Go by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16113
* feat: support wecom websocket channel by @buua436 in https://github.com/infiniflow/ragflow/pull/16175
* Fix: Lint error. by @cike8899 in https://github.com/infiniflow/ragflow/pull/16172
* fix: fix some bugs in check_conn and drop_inst by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16180
* fix(deepdoc): attach lone header lines to the following section when delimiter is set by @jaso0n0818 in https://github.com/infiniflow/ragflow/pull/16109
* Go CLI: add support for windows, linux, macos by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16082
* Go: add statistics command by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16119
* Fix search rename error with multiple error message (#664) by @wangq8 in https://github.com/infiniflow/ragflow/pull/16186
* Go CLI: add support for windows, linux, macos by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16184
* fix: use RESTful pipeline detail API with knowledgeId and logId by @euvre in https://github.com/infiniflow/ragflow/pull/16182
* Fix: replace tenant_llm apis by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/16131
* fix: add nightly tags by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16189
* Go: add command, show tasks summary by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16187
* fix: chat channel defaults and feishu shutdown by @buua436 in https://github.com/infiniflow/ragflow/pull/16176
* fix: wrong clang/toolchain for windows by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16191
* Go: add command, list, remove, stop tasks by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16190
* feat[Go]: add modelID for delete_model and update_status by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16025
* feat[go]: implement /api/v1/datasets/<dataset_id> PUT by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16122
* feat[Go]: implement datasets/<dataset_id>/index P/G by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16153
* Json add paddleOCR models by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16156
* Implement OpenAI chat completions in GO by @qinling0210 in https://github.com/infiniflow/ragflow/pull/16177
* fix: hard-coded paths for Windows C compiler by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16193
* Fix that agent cannot be the same name by @wangq8 in https://github.com/infiniflow/ragflow/pull/16192
* feat: add dingtalk chat channel by @buua436 in https://github.com/infiniflow/ragflow/pull/16183
* Go: fix duplicate models by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16197
* Go CLI: add list user commands framework by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16201
* Go CLI: refactor some commands by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16204
* Go CLI: refactor commands by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16213
* Go CLI: admin list configs by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16221
* Fix: preserve tables when parsing DOCX with the laws parser (#16008) by @manan-tech in https://github.com/infiniflow/ragflow/pull/16155
* fix: Enhance Windows build process for office_oxide and rag tokenizer by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16223
* feat(agent): align Go agent behavior with Python (except retrieval component) by @yuzhichang in https://github.com/infiniflow/ragflow/pull/16225
* fix: Enhance Windows build configuration in release.yml by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16227
* Fix: metadata add modal sends empty value due to stale closure by @nickmopen in https://github.com/infiniflow/ragflow/pull/15229
* Go CLI: Fix alter role by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16226
* fix: fix release workflow for Windows and MAC builds by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16235
* feat[Go]: implement api /api/v1/datasets/<dataset_id>/chunks POST by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16067
* fix: unable to chat after set model by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16195
* feat(go-api): complete chat channel API migration with tests by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16139
* feat(go-api): Implement BulkDeleteChats Go API and fix ListChats  by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16157
* feat(go-api): migrate searchbot share detail endpoint to go by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16124
* Add show / set role default models by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16240
* Feat: Add a prefix to the `name` of the `FormField` associated with the chat. by @cike8899 in https://github.com/infiniflow/ragflow/pull/16178
* i18n(fr): add missing French translations for chat channels, username validation and model editing by @vincentlambert in https://github.com/infiniflow/ragflow/pull/16217
* test(go): ensure go unit tests pass by @yuzhichang in https://github.com/infiniflow/ragflow/pull/16241
* Go CLI: admin list providers by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16243
* fix: handle SIMDe headers installation for arm64 by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16244
* Fix: When re-entering the agent page, the data from the previous session flashes briefly. by @cike8899 in https://github.com/infiniflow/ragflow/pull/16251
* fix: propagate contextvars through thread_pool_exec by @vincentlambert in https://github.com/infiniflow/ragflow/pull/16247
* refactor(log): unify Go logging to zap with rotation, strip per-package levels by @yuzhichang in https://github.com/infiniflow/ragflow/pull/16261
* Go CLI: admin model framework by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16252
* Go: default public key by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16265
* feat: add whatsapp web qr chat channel by @buua436 in https://github.com/infiniflow/ragflow/pull/16238
* Fix: add /v1/document/upload_info -> /api/v1/documents/upload back by @wangq8 in https://github.com/infiniflow/ragflow/pull/16264
* Go CLI: add response output by @myf-bee in https://github.com/infiniflow/ragflow/pull/16263
* feat[Go]: implement <document_id>/chunks/<chunk_id> PATCH by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16232
* feat[Go]: implement /datasets/<dataset_id>/documents/batch-update-status by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16258
* Document[Go-develop]: update Go development docs by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16229
* Go: rename ragflow_cli to ragflow-cli by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16270
* Go: show model and list all models by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16272
* Refactor harness framework by @yingfeng in https://github.com/infiniflow/ragflow/pull/16271
* fix(rag/raptor): handle max_cluster edge case in GMM cluster selection by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/16199
* fix(paddleocr): support PP-OCRv6 ocrResults fallback and integrate image parsing by @Rander7 in https://github.com/infiniflow/ragflow/pull/16150
* Fix release by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16278
* fix(i18n): fix missing i18n coverage and refine Korean translations by @yooxdb in https://github.com/infiniflow/ragflow/pull/16203
* fix: support Google Cloud Gemini eu/us multipoint endpoints by @glu000 in https://github.com/infiniflow/ragflow/pull/15990
* fix: restore dataflow defaults and SSE response by @buua436 in https://github.com/infiniflow/ragflow/pull/16290
* fix: keep chat channel bindings consistent by @buua436 in https://github.com/infiniflow/ragflow/pull/16274
* fix: guard against missing component IDs in Switch Flow path to prevent NoneType crash by @OSHA-B in https://github.com/infiniflow/ragflow/pull/16279
* fix: restore dataflow rerun and detail payload by @buua436 in https://github.com/infiniflow/ragflow/pull/16292
* fix(document_service): prevent NoneType error on progress_msg.strip() by @Dimon0000000 in https://github.com/infiniflow/ragflow/pull/16289
* Fix: MCP document metadata cache can loop forever when documents returns an empty docs page by @minion1227 in https://github.com/infiniflow/ragflow/pull/16285
* Fix: docx parsing raises ValueError on 'Heading' styles by @minion1227 in https://github.com/infiniflow/ragflow/pull/16284
* Fix: paginate get_flatted_meta_by_kbs to support datasets with >10k documents (#16034) by @Dr1985 in https://github.com/infiniflow/ragflow/pull/16095
* fix: deduplicate markdown table chunks by @helloxjade in https://github.com/infiniflow/ragflow/pull/16143
* Fix: handle empty folder when link to datasets by @wangq8 in https://github.com/infiniflow/ragflow/pull/16296
* fix(agent): handle different reference data formats by @Ambercssa in https://github.com/infiniflow/ragflow/pull/16276
* Go CLI: fix mode switch by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16294
* Fix: guess volc embedding model by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/16298
* fix(api): use dataset-owner tenant for legacy /chunks docstore cleanup by @kiannidev in https://github.com/infiniflow/ragflow/pull/15961
* feat(go-api): migrate datasets tags aggregation API to Go by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16181
* feat[Go] implement datasets/<dataset_id>/<index_type> DELETE by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16257
* feat(go-api): Align document metadata batch APIs and upload_info with Python by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16269
* fix(go): normalizeDatasetID by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16301
* Go CLI: refactor by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16299
* feat(go-api): add dataset tags endpoints by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16231
* feat(go-api): align chat session get/update with python behavior by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16239
* Go CLI: fix key commands by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16306
* fix: new dataset can not update configuration by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16291
* implement: <dataset_id>/embedding/check POST by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16266
* feat[go]: datasets/<dataset_id>/chunks DELETE by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16185
* More resilient graph engine by @yingfeng in https://github.com/infiniflow/ragflow/pull/16325
* Go CLI: list provider instance models, sync and list provider by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16311
* Example: list_datasets.sh by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16335
* Add Keenable web search tool to the agent by @ilya-bogin-keenable in https://github.com/infiniflow/ragflow/pull/16233
* Fix when empty response not set, it report: ERROR: 'knowledge' by @wangq8 in https://github.com/infiniflow/ragflow/pull/16338
* feat: unify provider id or name routing by @buua436 in https://github.com/infiniflow/ragflow/pull/16336
* fix(agent): log Wikipedia disambiguation and page errors instead of s… by @Willsgao in https://github.com/infiniflow/ragflow/pull/16207
* feat(go-api): add dataset search endpoint by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16304
* feat(go-api): implement dataset document upload API by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16295
* Go CLI: fix list dataset files by dataset name by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16341
* fix(web): agent log refetch and slider percentage rounding by @dcc123456 in https://github.com/infiniflow/ragflow/pull/16344
* feat(go-api): add Go support for POST /api/v1/datasets/{dataset_id}/documents/{document_id}/chunks by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16256
* fix(agent): coerce None Switch inputs before string operators by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/16320
* fix(agent/tools): PubMed tool always returns "Unknown Authors" by @immuhammadfurqan in https://github.com/infiniflow/ragflow/pull/16330
* Fix multimodal chat image routing for VLM channel requests by @6ba3i in https://github.com/infiniflow/ragflow/pull/16343
* fix(web): bump lodash past vulnerable range by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/16281
* fix(agent/tools): DeepL component fails validation and drops errors by @immuhammadfurqan in https://github.com/infiniflow/ragflow/pull/16332
* Fix: Flexible Chat Configuration by @cike8899 in https://github.com/infiniflow/ragflow/pull/16293
* Go CLI: fix list provider instance tasks by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16345
* fix(html_parser): preserve original text when splitting oversized blocks by @devYRPauli in https://github.com/infiniflow/ragflow/pull/16052
* Go:CLI  add new response function by @myf-bee in https://github.com/infiniflow/ragflow/pull/16347
* Add env ALLOW_ANY_HOST to skip host check by @wangq8 in https://github.com/infiniflow/ragflow/pull/16351
* Fix add VLLM without apikey will fail by @wangq8 in https://github.com/infiniflow/ragflow/pull/16352
* Fix [ID:0] not converted to Fig. 1 by @wangq8 in https://github.com/infiniflow/ragflow/pull/16357
* Fix: An empty message notification pops up at the top of the agent conversation. by @cike8899 in https://github.com/infiniflow/ragflow/pull/16353
* fix(api): align use_sql Markdown separator with Source header by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/16317
* feat[Go]: implemet api: Search/Get/Update-Messages by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16307
* feat[go]: add router for connectors/<connector_id> PATCH by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16358
* fix(deepdoc): keep zero and false Excel cells in __call__ by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/16318
* fix: naive_merge splits oversized sections and counts overlap tokens correctly by @cleanjunc in https://github.com/infiniflow/ragflow/pull/15802
* fix(web): fix layout issues with text, overflow, and spacing consistency by @yooxdb in https://github.com/infiniflow/ragflow/pull/16324
* feat(go-api): Langfuse API key migration behavior by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16356
* fix(deepdoc): accept GFM table separators with one or more dashes by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/16319
* fix(api): validate immutable document fields when value is zero by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/16309
* Revert "fix(deepdoc): keep zero and false Excel cells in __call__" by @wangq8 in https://github.com/infiniflow/ragflow/pull/16366
* fix(rag/nlp): treat string input as one phrase in is_english by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/16308
* Refactor: migrate pdf_parser.py to golang by @xugangqiang in https://github.com/infiniflow/ragflow/pull/16323
* Go CLI: refactor by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16355
* Go CLI: fix model related commands by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16368
* fix(excel_parser): keep zero-valued cells when building Excel text chunks by @devYRPauli in https://github.com/infiniflow/ragflow/pull/16287
* Fix: remove deepdoc dep by @xugangqiang in https://github.com/infiniflow/ragflow/pull/16372
* Model config: add tools by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16371
* Go CLI: fix show variable by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16370
* Docs: Added v0.26.2 release notes. by @writinwaters in https://github.com/infiniflow/ragflow/pull/16373
* feat: add missing qwen models to all_models.json by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16379
* Go CLI: Fix show model and list models by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16380
* Fix missing move and copy methods in Python RAGFlowS3 storage implementation by @ondery in https://github.com/infiniflow/ragflow/pull/16350
* Fix document progress not set to fail when embedding model error by @wangq8 in https://github.com/infiniflow/ragflow/pull/16381
* feat: add log icon to parsing status display by @dcc123456 in https://github.com/infiniflow/ragflow/pull/16383
* fix: tighten loop validation by @buua436 in https://github.com/infiniflow/ragflow/pull/16374
* Feat: support new qwen model by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/16385
* Fix: If the type of the loop variable in the Loop operator is set to `object`, an error occurs when clicking the Variable Replicator operator inside it. by @cike8899 in https://github.com/infiniflow/ragflow/pull/16388
* Fix handle move file failed by @wangq8 in https://github.com/infiniflow/ragflow/pull/16384
* fix: adjust table height and button position in DatasetTable component by @dcc123456 in https://github.com/infiniflow/ragflow/pull/16390
* Feat: Add New API model provider for OpenAI-compatible gateways by @wanghualoong in https://github.com/infiniflow/ragflow/pull/15991
* Go CLI: Fix show admin server and api server by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16382
* feat[Go]: implement Add messages for Go by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16375
* feat(go-api): add chat update endpoints by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16378
* feat[Go]: implement Create-Chat/Session, Delete-Session by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16386
* Fix VLM PDF parser only parse first 12 pages, and default page range for PDF files align with backend by @wangq8 in https://github.com/infiniflow/ragflow/pull/16394
* fix: remove dup-method by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16393

## New Contributors
* @xuhaiL made their first contribution in https://github.com/infiniflow/ragflow/pull/16148
* @manan-tech made their first contribution in https://github.com/infiniflow/ragflow/pull/16155
* @OSHA-B made their first contribution in https://github.com/infiniflow/ragflow/pull/16279
* @minion1227 made their first contribution in https://github.com/infiniflow/ragflow/pull/16285
* @helloxjade made their first contribution in https://github.com/infiniflow/ragflow/pull/16143
* @Ambercssa made their first contribution in https://github.com/infiniflow/ragflow/pull/16276
* @ilya-bogin-keenable made their first contribution in https://github.com/infiniflow/ragflow/pull/16233
* @immuhammadfurqan made their first contribution in https://github.com/infiniflow/ragflow/pull/16330
* @ondery made their first contribution in https://github.com/infiniflow/ragflow/pull/16350

**Full Changelog**: https://github.com/infiniflow/ragflow/compare/v0.26.1...v0.26.2

---

> **Source** [infiniflow/ragflow](https://github.com/infiniflow/ragflow) · `v0.26.2` · 2026-06-29 · [upstream release](https://github.com/infiniflow/ragflow/releases/tag/v0.26.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
