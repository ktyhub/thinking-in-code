---
title: "ragflow v0.26.3"
project: "ragflow"
repo: "infiniflow/ragflow"
tag: "v0.26.3"
version: "v0.26.3"
published: "2026-07-02"
type: "patch"
lang: "en"
summary: "Released on July 2, 2026."
---

# ragflow v0.26.3

## Summary

Released on July 2, 2026.

### New features

- Data source connector: Introduces Google BigQuery as a data source connector for document ingestion and incremental syncing. [#15871](https://github.com/infiniflow/ragflow/pull/15871)
- MCP: Adds two MCP tools `ragflow_list_datasets` and `ragflow_list_chats` to the RAGFlow MCP server. [#15384](https://github.com/infiniflow/ragflow/pull/15384)
- File ingestion
  - Integrates the layout-aware SoMark OCR parser into the system for extracting and indexing complex document elements like tables and figures. [#16482](https://github.com/infiniflow/ragflow/pull/16482)
  - API: Exposes the [Ingest documents](./references/http_api_reference.md#ingest-documents) endpoint for processing documents using a customized pipeline. [#16395](https://github.com/infiniflow/ragflow/pull/16395)

### Improvements

- Backend: Introduces partial success handling for batch document uploads, ensuring that a single failed file no longer causes the entire batch to be discarded. [#16438](https://github.com/infiniflow/ragflow/pull/16438)
- UI/UX: Refactors the global header to dynamically switch between a full desktop navigation bar and a mobile-friendly side drawer based on available screen space, resolving overlapping issues and significantly improving the mobile user experience. [#15984](https://github.com/infiniflow/ragflow/pull/15984)

### Bug fixes

- After setting up the Ollama provider, the system returned the error: 'Failed to access model(name) using this api key'. [#16519](https://github.com/infiniflow/ragflow/pull/16519)
- Deleting a user/assistant chat message pair mistakenly removed the previous conversation turn's reference due to an index misalignment. [#16436](https://github.com/infiniflow/ragflow/pull/16436)
- 
## What's Changed
* refactor: enhance UI components and improve layout by @carlh7777 in https://github.com/infiniflow/ragflow/pull/15984
* fix: update variable completeness check to allow None parameter by @buua436 in https://github.com/infiniflow/ragflow/pull/16389
* Go CLI: Add create and drop commands by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16430
* Docs: Updated release date and cli installation commands by @writinwaters in https://github.com/infiniflow/ragflow/pull/16435
* Fix PR template by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16439
* feat: handle partial upload success in document batch upload by @euvre in https://github.com/infiniflow/ragflow/pull/16438
* Guard /datasets/{dataset_id}/chunks cannot parse ingestion pipeline, use /documents/ingest instead by @wangq8 in https://github.com/infiniflow/ragflow/pull/16395
* fix(rag/nlp): handle non-numbered DOCX heading styles by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/16219
* Fix: failed to get embedding model by embd_id: model config not found BAAI/bge-m3@...@SILICONFLOW by @wangq8 in https://github.com/infiniflow/ragflow/pull/16445
* fix: user-setting modal fixes and DOMPurify cleanup by @dcc123456 in https://github.com/infiniflow/ragflow/pull/16449
* [Go] Fix searchbot BETA auth by @wangq8 in https://github.com/infiniflow/ragflow/pull/16450
* Go CLI: refactor commands by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16447
* [Go] Fix searchbot retrieval_test accept kb_id as array, fix model recognize by @wangq8 in https://github.com/infiniflow/ragflow/pull/16452
* Refactor: oss parser go refactor by @xugangqiang in https://github.com/infiniflow/ragflow/pull/16391
* fix: auth middleware double responses on early rejection by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16444
* fix: unable to upload avatar for search by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16437
* fix: new chat cannot be edit by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16434
* fix(py): chat message reference deletion index by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16436
* feat(go-api): Add Go chat session message delete and feedback APIs by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16442
* [Go] Fix beta auth for /documents/images/:image_id and /documents/:id/preview and /thumbnails by @wangq8 in https://github.com/infiniflow/ragflow/pull/16453
* Go CLI: fix api commands by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16457
* feat[Go]: implement searches/<search_id>/completions POST by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16440
* Docs: Added an FAQ by @writinwaters in https://github.com/infiniflow/ragflow/pull/16466
* Revert "feat(go-api): Add Go chat session message delete and feedback APIs" by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16465
* Feature big query connector by @Attili-sys in https://github.com/infiniflow/ragflow/pull/15871
* Go CLI: add show users plan summary by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16463
* Go CLI: add admin_command  response table funtion by @myf-bee in https://github.com/infiniflow/ragflow/pull/16454
* build(deps): bump crawl4ai from 0.8.9 to 0.9.0 by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/16470
* Fix: allow any host for url for development by @wangq8 in https://github.com/infiniflow/ragflow/pull/16459
* fix: adjust width of messageItemSectionLeft to fit-content by @dcc123456 in https://github.com/infiniflow/ragflow/pull/16488
* Go CLI: merge function by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16458
* fix(agent): inject uploaded attachments into LLM context (#15215) by @Rene0422 in https://github.com/infiniflow/ragflow/pull/15220
* Port 14 upstream agent security / correctness fixes to Go canvas by @yuzhichang in https://github.com/infiniflow/ragflow/pull/16455
* [Go] Add /api/v1/searchbots/mindmap and /api/v1/chat/mindmap by @wangq8 in https://github.com/infiniflow/ragflow/pull/16443
* fix(agent): return session_id when chat completion produces no events (#15169) by @Rene0422 in https://github.com/infiniflow/ragflow/pull/15228
* fix: remove dup-prefix in bot_routes by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16492
* Fix: UI cannot start up by @wangq8 in https://github.com/infiniflow/ragflow/pull/16497
* fix(agent): add canvas_type filter and field to list_agents API by @huang-aoqin in https://github.com/infiniflow/ragflow/pull/15754
* Fix harness streaming emit by @yingfeng in https://github.com/infiniflow/ragflow/pull/16486
* feat(go-api): Migrate Box web OAuth connector APIs to Go by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16480
* Add spacy based ner and relationship extractor for both python and Go version with equivalent outputs by @yingfeng in https://github.com/infiniflow/ragflow/pull/16456
* revert: roll back tests.yml CI changes from PR #16391 by @xugangqiang in https://github.com/infiniflow/ragflow/pull/16505
* Fix: CI by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/16504
* fix(common/time_utils): correct None/empty timestamp fallback and ISO 8601 parsing by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/16483
* fix(agent): prevent empty LLM user message after prompt fitting by @Taranum01 in https://github.com/infiniflow/ragflow/pull/16413
* fix: handle non-serializable objects in agent canvas SSE and state se… by @RazmikGevorgyan in https://github.com/infiniflow/ragflow/pull/14210
* Add CAJAL scientific paper agent template by @sxxtony in https://github.com/infiniflow/ragflow/pull/14641
* feat(mcp): add ragflow_list_datasets and ragflow_list_chats tools by @saltsalt123 in https://github.com/infiniflow/ragflow/pull/15384
* Fix g++ 11 incompatibility issue by @yingfeng in https://github.com/infiniflow/ragflow/pull/16512
* fix(agent/tools): GoogleScholar empty json output and ignored top_n by @immuhammadfurqan in https://github.com/infiniflow/ragflow/pull/16419
* [Go] Add API /api/v1/chat/recommendation and consolidate with /api/v1/searchbots/related_questions by @wangq8 in https://github.com/infiniflow/ragflow/pull/16500
* Fix: ollama provider by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/16519
* Feat: SoMark by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/16482
* fix(web): sanitize agent rerun modal HTML against stored XSS by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/16516
* fix(agent): filter TuShare news with upstream keyword input by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/16361
* feat(agent): add BGPT structured literature evidence search tool by @connerlambden in https://github.com/infiniflow/ragflow/pull/16050
* fix(deepdoc): parse bodyless HTML fragments by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/16423
* fix(qa): preserve final CSV pair row number by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/16433
* Implement chat completions in go by @qinling0210 in https://github.com/infiniflow/ragflow/pull/16491
* fix(api): fall back to factory max_tokens for tenant models by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/16364
* fix(harness): truncate text on rune boundary to keep UTF-8 valid by @feizhuzheng in https://github.com/infiniflow/ragflow/pull/16511
* feat(frontend): add AuthenticatedImg component for authorized image requests by @euvre in https://github.com/infiniflow/ragflow/pull/16525
* Fix GetProjectRoot in GO by @qinling0210 in https://github.com/infiniflow/ragflow/pull/16520
* refactor: replace context.WithCancel with t.Context by @blackflytech in https://github.com/infiniflow/ragflow/pull/16509
* fix: unable to open filter in agent page(no agent tags...) by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16531
* Go CLI: fix list provider models by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16493
* fix: normalize Q&A parser ID key to lowercase 'qa' by @euvre in https://github.com/infiniflow/ragflow/pull/16530
* fix: return call failed when LLM not available by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16518
* perf: batch-embed entity/edge names in set_graph() to fix stall on large graphs (#16205) by @OSHA-B in https://github.com/infiniflow/ragflow/pull/16472
* Fix: use .a to replace .so for pdfium/pdf_oxide/office_oxide by @xugangqiang in https://github.com/infiniflow/ragflow/pull/16496
* feat(agent): report accurate aggregated token usage and propagate session/user + input/output to Langfuse for agent runs by @ondery in https://github.com/infiniflow/ragflow/pull/16420
* Port agent PRs to GO by @qinling0210 in https://github.com/infiniflow/ragflow/pull/16529
* Feat/oss parser no post by @xugangqiang in https://github.com/infiniflow/ragflow/pull/16464
* feat(go-api) sessions message update  by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16517
* fix(go): document count in kb by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16490
* [Go] Fix to allow duplicate key for provider by @wangq8 in https://github.com/infiniflow/ragflow/pull/16543
* fix: improve Normal role badge visibility with proper styling by @euvre in https://github.com/infiniflow/ragflow/pull/16528
* Stabilize timeout tests with semantic assertions by @yuzhichang in https://github.com/infiniflow/ragflow/pull/16537
* Fix: close MCP sessions after canvas execution to prevent connection leaks by @Br1an67 in https://github.com/infiniflow/ragflow/pull/13295
* fix: unadble to add metadata for file in kb by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16523
* fix: get duplicate datasetID when get-Chat by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16498
* fix: JSONMap scan in dataset index chunking config by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16489
* fix(go): accept disabled chunk filter in list chunks handler by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16532
* fix(go): agent explore thumbnail loading for multiple doc_ids by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16514
* fix(go): agent settings update clearing DSL by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16495
* refactor: use WaitGroup.Go to simplify code by @grandpig in https://github.com/infiniflow/ragflow/pull/16539
* Go: fix lint by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16533
* workflow steps separated to go or python by @myf-bee in https://github.com/infiniflow/ragflow/pull/16561
* fix(go): prevent moving folders into themselves by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16522
* fix(go): clear task cancel signals and chunk counters on rerunWithDelete by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16544
* [Python] 1, Fix to allow single login, 2, update password to force re-login by @wangq8 in https://github.com/infiniflow/ragflow/pull/16556
* fix: add search keywords and filter for datasets-search by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16550
* fix: unable to build go backend by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16542
* fix: unable to load pic in chunk result by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16485
* Feat: add DOCX parser by @xugangqiang in https://github.com/infiniflow/ragflow/pull/16521
* fix(go): shared chatbot session id length by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16559
* Fix: enhance reference handling in SessionChat component by @dcc123456 in https://github.com/infiniflow/ragflow/pull/16571
* Fix: pass mcp to useExportMcp for correct JSON export filename by @dcc123456 in https://github.com/infiniflow/ragflow/pull/16564
* Fix: hide model settings button and related functionality by @dcc123456 in https://github.com/infiniflow/ragflow/pull/16563
* Docs: Added v0.26.3 release notes. by @writinwaters in https://github.com/infiniflow/ragflow/pull/16566
* add web and build start steps by @myf-bee in https://github.com/infiniflow/ragflow/pull/16572
* Fix: correct download_deps.py path in error messages and add native libs doc by @xugangqiang in https://github.com/infiniflow/ragflow/pull/16557
* feat(go): implement chatbots/<dialog_id>/info and searchbots/detail by @RenzoMXD in https://github.com/infiniflow/ragflow/pull/15420
* Fix: disable agent tests by @xugangqiang in https://github.com/infiniflow/ragflow/pull/16562
* Fix graphrag generate error - AttributeError: 'RedisDB' object has no attribute 'mget' by @wangq8 in https://github.com/infiniflow/ragflow/pull/16573
* Fix: PDF page count detection for compressed PDFs by @euvre in https://github.com/infiniflow/ragflow/pull/16487
* Fix Go: fix minio port issue by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16552
* fix(go): Add tenant filter to file queries by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16526
* fix(go): chunk stats after chunk deletion by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16553
* Fix chat thinking & Figure issue in GO by @qinling0210 in https://github.com/infiniflow/ragflow/pull/16558
* Port agent PRs to GO - 2 by @qinling0210 in https://github.com/infiniflow/ragflow/pull/16565
* Fix: send agent log date filters as local wall-clock strings by @dcc123456 in https://github.com/infiniflow/ragflow/pull/16575
* Fix: display model_id in memory_list by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/16567
* fix workflow file type Identify by @myf-bee in https://github.com/infiniflow/ragflow/pull/16576
* Fix the sandbox exec image cannot show and download by @wangq8 in https://github.com/infiniflow/ragflow/pull/16577
* Docs: Update version references to v0.26.3 in READMEs and docs by @asiroliu in https://github.com/infiniflow/ragflow/pull/16574

## New Contributors
* @Taranum01 made their first contribution in https://github.com/infiniflow/ragflow/pull/16413
* @saltsalt123 made their first contribution in https://github.com/infiniflow/ragflow/pull/15384
* @connerlambden made their first contribution in https://github.com/infiniflow/ragflow/pull/16050
* @feizhuzheng made their first contribution in https://github.com/infiniflow/ragflow/pull/16511
* @blackflytech made their first contribution in https://github.com/infiniflow/ragflow/pull/16509
* @grandpig made their first contribution in https://github.com/infiniflow/ragflow/pull/16539

**Full Changelog**: https://github.com/infiniflow/ragflow/compare/v0.26.2...v0.26.3

---

> **Source** [infiniflow/ragflow](https://github.com/infiniflow/ragflow) · `v0.26.3` · 2026-07-02 · [upstream release](https://github.com/infiniflow/ragflow/releases/tag/v0.26.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
