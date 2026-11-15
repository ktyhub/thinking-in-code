---
title: "ragflow v0.26.0"
project: "ragflow"
repo: "infiniflow/ragflow"
tag: "v0.26.0"
version: "v0.26.0"
published: "2026-06-11"
type: "minor"
lang: "en"
summary: "Model providers"
---

# ragflow v0.26.0

## Summary

### New features

- **Model providers**
  - Implements auto-populated model lists for multiple providers, eliminating the need to type model names manually. This feature currently supports: Ollama, OpenRouter, vLLM, OpenAI-API-Compatible, LM-Studio, VolcEngine, Xinference, LocalAI, BaiduYiyan, GPUStack, and Fish Audio.
  - Allows configuring multiple API keys for the same model provider. [#14595](https://github.com/infiniflow/ragflow/pull/14595)
  - Dynamically populates model selection dropdowns in the UI by fetching the currently available models directly from remote model providers. [#15711](https://github.com/infiniflow/ragflow/pull/15711)
- **Data source connectors**: Implements new data source connectors for Outlook, OneDrive, Microsoft Teams, Slack, SharePoint, Salesforce, and Azure Blob Storage. [#15333](https://github.com/infiniflow/ragflow/pull/15333)[#15330](https://github.com/infiniflow/ragflow/pull/15330)[#15332](https://github.com/infiniflow/ragflow/pull/15332)[#15188](https://github.com/infiniflow/ragflow/pull/15188)[#15190](https://github.com/infiniflow/ragflow/pull/15190)[#15462](https://github.com/infiniflow/ragflow/pull/15462)[#15466](https://github.com/infiniflow/ragflow/pull/15466)
- **Dataset** - Implements a checkpoint and resume feature for community extraction and entity resolution, the most expensive and time-consuming parts of the GraphRAG indexing pipeline. [#15518](https://github.com/infiniflow/ragflow/issues/15518)[#15523](https://github.com/infiniflow/ragflow/pull/15523)

### Improvements

- Removes `<think>` text buffering to ensure reasoning-capable models feel faster and more transparent during interactions. [#15891](https://github.com/infiniflow/ragflow/pull/15891)
- Marks MySQL migrations as applied. [#15504](https://github.com/infiniflow/ragflow/pull/15504)

### Model Support

- Four new SiliconFlow models [#15383](https://github.com/infiniflow/ragflow/pull/15383)
- MiniMax-M3 model [#15513](https://github.com/infiniflow/ragflow/pull/15513)
- Latest Anthropic models [#15516](https://github.com/infiniflow/ragflow/pull/15516)
- Voyage 4 model family [#15516](https://github.com/infiniflow/ragflow/pull/15516)
- Cohere model list. [#15576](https://github.com/infiniflow/ragflow/pull/15576)

### i18n

- Completes Korean translation. [#15863](https://github.com/infiniflow/ragflow/pull/15863)
- Completes Italian translation. [#15729](https://github.com/infiniflow/ragflow/pull/15729)

### Bug fixes

- The thinking mode of MiniMax models was not correctly enabled. [#15496](https://github.com/infiniflow/ragflow/pull/15496)
- Infinite loops were triggered when the thinking mode was enabled for Qwen3.5 and Qwen3.6 models. [#15101](https://github.com/infiniflow/ragflow/pull/15101)
- Streamed answers were being duplicated when using the OpenAI-compatible chat completions API endpoint. [#15286](https://github.com/infiniflow/ragflow/issues/15286)[#15443](https://github.com/infiniflow/ragflow/pull/15443)
- Serialization errors were caused during chat completions when invalid numeric scores like `NaN` (Not-a-Number) or `Inf` (Infinity) were passed to the JSON encoder. [#15245](https://github.com/infiniflow/ragflow/issues/15245)[#15266](https://github.com/infiniflow/ragflow/pull/15266)
- Chat completions using LiteLLM providers were failing because unrecognized internal configuration parameters were not being filtered out before reaching the external APIs. [#15427](https://github.com/infiniflow/ragflow/issues/15427)[#15432](https://github.com/infiniflow/ragflow/pull/15432)
- The OpenAI-compatible chat completions API was defaulting to streamed responses. [#15356](https://github.com/infiniflow/ragflow/issues/15356)[#15394](https://github.com/infiniflow/ragflow/pull/15394)
- Empty `AND` results were incorrectly dropped during metadata filtering. [#15477](https://github.com/infiniflow/ragflow/pull/15477)
- Repetitive page chrome, such as headers and footers, was incorrectly extracted as main text by the MinerU parser. [#15335](https://github.com/infiniflow/ragflow/issues/15335)[#15387](https://github.com/infiniflow/ragflow/pull/15387)
- English chart titles were missing during document extraction in the DeepDoc module. [#15481](https://github.com/infiniflow/ragflow/pull/15481)
- Empty outputs were returned by the TitleChunker for `json` and `chunks` upstream formats [#14247](https://github.com/infiniflow/ragflow/pull/14247)[#15396](https://github.com/infiniflow/ragflow/pull/15396)
- An error message was missing when a .tsv file upload attempt failed. [#15284](https://github.com/infiniflow/ragflow/pull/15284)
- API tokens missing beta values caused token retrieval errors. [#15405](https://github.com/infiniflow/ragflow/pull/15405)
- Caps the maximum page size to fix system crashes or slowdowns from large queries. [#15292](https://github.com/infiniflow/ragflow/pull/15292)
- Client errors were caused by the OpenAI-compatible chat completion API incorrectly defaulting to streamed responses. [#15356](https://github.com/infiniflow/ragflow/issues/15356)[#15394](https://github.com/infiniflow/ragflow/pull/15394)
- HTTP 500 internal server errors were triggered instead of standard 4xx client errors when users attempted to download missing files from the storage backend. [#15369](https://github.com/infiniflow/ragflow/issues/15369)[#15371](https://github.com/infiniflow/ragflow/pull/15371)
- GraphRAG entity ranking was broken. [#15795](https://github.com/infiniflow/ragflow/issues/15795)[#15797](https://github.com/infiniflow/ragflow/pull/15797)


## What's Changed
* Fix: The Creativity parameter of chat was not saved. by @cike8899 in https://github.com/infiniflow/ragflow/pull/15243
* Feat: add new tests and tescases for restful api suite by @6ba3i in https://github.com/infiniflow/ragflow/pull/15277
* fix(go-models): add VolcEngine model listing suffix by @oktofeesh1 in https://github.com/infiniflow/ragflow/pull/15234
* go: add Qiniu model provider by @Hz-186 in https://github.com/infiniflow/ragflow/pull/15280
* feat: add GiteeAI provider support to Go API server by @Helios531 in https://github.com/infiniflow/ragflow/pull/15131
* Go: implement Rerank in Replicate driver by @sxxtony in https://github.com/infiniflow/ragflow/pull/15278
* Go: implement connector get API by @tmimmanuel in https://github.com/infiniflow/ragflow/pull/15259
* Go: implement TTS and ASR for X.AI by @Haruko386 in https://github.com/infiniflow/ragflow/pull/15247
* fix(go-models): validate TokenHub chat requests by @oktofeesh1 in https://github.com/infiniflow/ragflow/pull/15283
* Fix: Uploading TSV format documents to the knowledge base did not generate any error messages. by @cike8899 in https://github.com/infiniflow/ragflow/pull/15284
* feat[Go]: implement create_connector API by @Haruko386 in https://github.com/infiniflow/ragflow/pull/15285
* Fix: ExeSQL node continues on per-statement SQL errors by @nickmopen in https://github.com/infiniflow/ragflow/pull/15140
* Docs: Updated converse with agent API reference. by @writinwaters in https://github.com/infiniflow/ragflow/pull/15257
* Docs: Finalized v0.25.6 release notes. by @writinwaters in https://github.com/infiniflow/ragflow/pull/15305
* Refactor: Task Executor by @xugangqiang in https://github.com/infiniflow/ragflow/pull/15154
* go: add PATCH /api/v1/users/me user settings update by @Hz-186 in https://github.com/infiniflow/ragflow/pull/15297
* Feat: add new tests and tescases for restful api suite by @6ba3i in https://github.com/infiniflow/ragflow/pull/15299
* Feature: Allow page_size max value 100 by @wangq8 in https://github.com/infiniflow/ragflow/pull/15292
* feat: implement SharePoint data source connector by @JPette1783 in https://github.com/infiniflow/ragflow/pull/15190
* Go: implement system healthz API by @tmimmanuel in https://github.com/infiniflow/ragflow/pull/15307
* fix: include user model settings in /user/me response by @Hz-186 in https://github.com/infiniflow/ragflow/pull/15320
* fix(go-models): harden 302.AI driver requests by @oktofeesh1 in https://github.com/infiniflow/ragflow/pull/15289
* Fix: Clustering method echo error by @dcc123456 in https://github.com/infiniflow/ragflow/pull/15322
* feat: implement Slack data source connector by @JPette1783 in https://github.com/infiniflow/ragflow/pull/15188
* Update developer doc by @xugangqiang in https://github.com/infiniflow/ragflow/pull/15336
* feat: add Go MCP server create API by @Helios531 in https://github.com/infiniflow/ragflow/pull/15260
* feat[Go]: implement delete/ rebuild/ listlog api for connector by @Haruko386 in https://github.com/infiniflow/ragflow/pull/15300
* fix(go-models): harden LongCat default transport handling by @glorydavid03023 in https://github.com/infiniflow/ragflow/pull/15340
* fix(go-models): harden Voyage default transport handling by @glorydavid03023 in https://github.com/infiniflow/ragflow/pull/15341
* feat: implement Microsoft Teams data source connector by @JPette1783 in https://github.com/infiniflow/ragflow/pull/15193
* feat(go-api): implement connector (data source) management endpoints by @JPette1783 in https://github.com/infiniflow/ragflow/pull/15274
* feat(go-api): implement GET /api/v1/agents list endpoint (issue #15328) by @JPette1783 in https://github.com/infiniflow/ragflow/pull/15329
* fix(go-models): harden ModelScope default transport handling by @glorydavid03023 in https://github.com/infiniflow/ragflow/pull/15339
* Fix(kb): enforce tenant authorization on UpdateMetadataSetting (#15268) by @nickmopen in https://github.com/infiniflow/ragflow/pull/15270
* fix(go-models): harden JieKouAI driver requests by @oktofeesh1 in https://github.com/infiniflow/ragflow/pull/15337
* feat[Go]: implement /api/v1/system/status GET by @Haruko386 in https://github.com/infiniflow/ragflow/pull/15348
* feat(go-api): implement tenant member management (issue #15294) by @JPette1783 in https://github.com/infiniflow/ragflow/pull/15295
* fix: validate custom model inputs by @bitloi in https://github.com/infiniflow/ragflow/pull/15200
* fix(go-models): harden Novita default transport handling by @glorydavid03023 in https://github.com/infiniflow/ragflow/pull/15350
* Feat: tenant llm provider by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/14595
* Fix: default OpenAI chat completions to non-stream by @buua436 in https://github.com/infiniflow/ragflow/pull/15394
* feat(connector): implement OneDrive data source connector (issue #15330) by @JPette1783 in https://github.com/infiniflow/ragflow/pull/15331
* feat: add 4 new models for siliconflow by @leslie2046 in https://github.com/infiniflow/ragflow/pull/15383
* Fix user registration initialization in Go API by @Hz-186 in https://github.com/infiniflow/ragflow/pull/15349
* feat: add Go MCP server delete API by @Helios531 in https://github.com/infiniflow/ragflow/pull/15262
* fix: persist logout access token invalidation by @Hz-186 in https://github.com/infiniflow/ragflow/pull/15397
* feat[Go]: implement /system/stats and refactor /system/config/log by @Haruko386 in https://github.com/infiniflow/ragflow/pull/15407
* fix(go): resolve custom base_url for empty default region by @bitloi in https://github.com/infiniflow/ragflow/pull/15043
* fix(metadata): preserve empty AND results across filter conditions by @monsterdavidliu-ux in https://github.com/infiniflow/ragflow/pull/15386
* fix(go-models): raise SSE scanner buffer so large stream chunks are not dropped by @Dexterity104 in https://github.com/infiniflow/ragflow/pull/15382
* Validate chunk image_base64 before doc-store write by @kiannidev in https://github.com/infiniflow/ragflow/pull/15364
* Fix: JWT algorithm-confusion in OIDC ID token verification by @galuis116 in https://github.com/infiniflow/ragflow/pull/15181
* fix(go-models): harden Hunyuan embedding validation by @oktofeesh1 in https://github.com/infiniflow/ragflow/pull/15249
* fix: backfill missing api token beta values by @Hz-186 in https://github.com/infiniflow/ragflow/pull/15405
* File addition .rooignore by @Attili-sys in https://github.com/infiniflow/ragflow/pull/15414
* fix: upgrade crawl4ai to 0.8.0 (CVE-2026-26217) by @orbisai0security in https://github.com/infiniflow/ragflow/pull/15415
* fix(api): move dify retrieval health check to /dify/retrieval/health by @jony376 in https://github.com/infiniflow/ragflow/pull/15311
* fix(opensearch): implement get_scores for KNN second-pass scoring by @ef-rintaro in https://github.com/infiniflow/ragflow/pull/15390
* fix(opensearch): repair document-metadata path broken by #14577 by @ef-rintaro in https://github.com/infiniflow/ragflow/pull/15393
* feat(connector): implement Outlook data source connector (issue #15332) by @JPette1783 in https://github.com/infiniflow/ragflow/pull/15333
* Fix: If the filename is too long, it overflows the confirmation box for deleting the file. by @cike8899 in https://github.com/infiniflow/ragflow/pull/15287
* Fix memory empty issue by @wangq8 in https://github.com/infiniflow/ragflow/pull/15411
* Feat: add new tests and tescases for restful api suite by @6ba3i in https://github.com/infiniflow/ragflow/pull/15347
* feat[Go] implement api/v1/thumbnails API by @Haruko386 in https://github.com/infiniflow/ragflow/pull/15416
* Go: implement Embed in GPUStack driver by @glorydavid03023 in https://github.com/infiniflow/ragflow/pull/15182
* Go: implement dataset ingestion log APIs by @sxxtony in https://github.com/infiniflow/ragflow/pull/15421
* GraphRAG - NER - spacy - fix spacy extraction by @wangq8 in https://github.com/infiniflow/ragflow/pull/14783
* Fix: Unable to create dataset by @cike8899 in https://github.com/infiniflow/ragflow/pull/15472
* fix: restore TitleChunker output for json/chunks upstream formats by @euvre in https://github.com/infiniflow/ragflow/pull/15396
* Fix: The newly added model did not appear in the drop-down menu. by @cike8899 in https://github.com/infiniflow/ragflow/pull/15476
* Return 4xx when file download storage blob is missing by @kiannidev in https://github.com/infiniflow/ragflow/pull/15371
* Infer Content-Type for document image endpoint by @kiannidev in https://github.com/infiniflow/ragflow/pull/15368
* Bug fix: Enhance embeding model to give better error message by @wangq8 in https://github.com/infiniflow/ragflow/pull/15346
* fix(deepdoc): add English caption patterns to fix missing figure/table numbering by @euvre in https://github.com/infiniflow/ragflow/pull/15481
* fix(go-models): apply custom Google base URLs by @oktofeesh1 in https://github.com/infiniflow/ragflow/pull/15385
* fix(mineru): skip page chrome blocks to prevent duplicate chunks by @monsterdavidliu-ux in https://github.com/infiniflow/ragflow/pull/15387
* Docs: Added a guide on how to ingest an RSS feed. by @writinwaters in https://github.com/infiniflow/ragflow/pull/15467
* docs: add Tigris as S3-compatible storage backend, fix s3 region field name by @davidmyriel in https://github.com/infiniflow/ragflow/pull/15361
* feat: add Go MCP server list API by @Helios531 in https://github.com/infiniflow/ragflow/pull/15253
* feat(go-api): implement password-reset flow (issue #15282) by @JPette1783 in https://github.com/infiniflow/ragflow/pull/15293
* Fix:empty chat model fallback by @buua436 in https://github.com/infiniflow/ragflow/pull/15477
* fix(llm): strip non-generation keys from gen_conf for LiteLLM providers (#15427) by @nickmopen in https://github.com/infiniflow/ragflow/pull/15432
* fix(chat): sanitize NaN/Inf scores before serializing chat completions (#15245) by @Rene0422 in https://github.com/infiniflow/ragflow/pull/15266
* Fix auto metadata type issue by @xugangqiang in https://github.com/infiniflow/ragflow/pull/15338
* fix(api): handle array message content on OpenAI chat completions by @glorysr1209-png in https://github.com/infiniflow/ragflow/pull/15359
* fix(migration): parameterize tenant_model_provider inserts in mysql_migration by @jony376 in https://github.com/infiniflow/ragflow/pull/15313
* fix(rag): id2image parsing for hyphenated storage object keys (#15117) by @kiannidev in https://github.com/infiniflow/ragflow/pull/15118
* fix(api): document image_id parsing for hyphenated thumbnail keys (#15115) by @kiannidev in https://github.com/infiniflow/ragflow/pull/15116
* Add Bulk action for linking Multiple Files to Datasets by @Letssharearow in https://github.com/infiniflow/ragflow/pull/14960
* Fix: migrate legacy model id configs by @buua436 in https://github.com/infiniflow/ragflow/pull/15495
* fix(api): stop duplicating answer in openai-compatible chat completions stream (#15286) by @nickmopen in https://github.com/infiniflow/ragflow/pull/15443
* Fix: disable thinking to avoid potential infinite loops in Qwen3.5/Qwen3.6 models by @Aeovy in https://github.com/infiniflow/ragflow/pull/15101
* fix: rewrite enable thinking mode for minimax by @Dimon0000000 in https://github.com/infiniflow/ragflow/pull/15496
* fix(go-models): remove duplicate roundTripperFunc from novita_test.go by @dripsmvcp in https://github.com/infiniflow/ragflow/pull/15492
* feat[Go] implement /api/v1/datasets/<dataset_id>/metadata/config by @Haruko386 in https://github.com/infiniflow/ragflow/pull/15493
* Fix: model-provider bugs by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/15460
* fix: post /api/v1/system/tokens by @Hz-186 in https://github.com/infiniflow/ragflow/pull/15410
* fix(go-models): harden N1N default transport handling by @glorydavid03023 in https://github.com/infiniflow/ragflow/pull/15351
* Feat: mark mysql migrations as applied by @buua436 in https://github.com/infiniflow/ragflow/pull/15504
* fix(go-models): use per call context timeouts so long streaming responses are not truncated by @Dexterity104 in https://github.com/infiniflow/ragflow/pull/15380
* feat: add Go MCP server update API by @Helios531 in https://github.com/infiniflow/ragflow/pull/15261
* Feature: Add MiniMax M3 by @wangq8 in https://github.com/infiniflow/ragflow/pull/15513
* Feature: Add the new anthropic and voyage models by @wangq8 in https://github.com/infiniflow/ragflow/pull/15516
* Fix: model provider by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/15517
* feat[Go] implement check connection by using apikey and region by @Haruko386 in https://github.com/infiniflow/ragflow/pull/15475
* feat[Go]: implement /api/v1/connectors/<connector_id> PATCH by @Dimon0000000 in https://github.com/infiniflow/ragflow/pull/15512
* GOCli check provider region by @Hz-186 in https://github.com/infiniflow/ragflow/pull/15474
* Fix: model provider orders by @wangq8 in https://github.com/infiniflow/ragflow/pull/15524
* [Fix] naive: force-merge short markdown headers to prevent separate chunks by @VictorECDSA in https://github.com/infiniflow/ragflow/pull/15488
* Guard missing storage blobs on preview and image endpoints by @kiannidev in https://github.com/infiniflow/ragflow/pull/15366
* Fix: Chat completion generation parameter overrides by @bitloi in https://github.com/infiniflow/ragflow/pull/15389
* Refa: refine mysql migration version workflow by @buua436 in https://github.com/infiniflow/ragflow/pull/15549
* Fix: Model provider add verify and fixed form in modal not resetting issue by @dcc123456 in https://github.com/infiniflow/ragflow/pull/15520
* Go: fix gitee balance api by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/15554
* Go: refactor provider code by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/15564
* Feat: display intl url for siliconflow and verify model provider without llms in json by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/15550
* Fix: agent template smart_customer_service_specialist.json by @buua436 in https://github.com/infiniflow/ragflow/pull/15565
* feat[Go]: implement add multi_models by @Haruko386 in https://github.com/infiniflow/ragflow/pull/15563
* Chore: update cohere models by @6ba3i in https://github.com/infiniflow/ragflow/pull/15576
* Fix: Switching pagesize on a chunk page did not reset the current page. by @dcc123456 in https://github.com/infiniflow/ragflow/pull/15401
* Fix: no more @token_required by @wangq8 in https://github.com/infiniflow/ragflow/pull/15562
* Go: refactor model provider by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/15568
* refactor: overhaul task executor with layered architecture and comprehensive test suite by @xugangqiang in https://github.com/infiniflow/ragflow/pull/15471
* Remove unused codes by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/15579
* fix(api): guard document rename when linked file row is missing by @bohdansolovie in https://github.com/infiniflow/ragflow/pull/15536
* refactor(go-models): add unsupported model driver defaults by @bitloi in https://github.com/infiniflow/ragflow/pull/15431
* Fix: consolidate beta auth by @wangq8 in https://github.com/infiniflow/ragflow/pull/15581
* feat[Go] implement /connectors/google/oauth by @Haruko386 in https://github.com/infiniflow/ragflow/pull/15584
* feat: migrate DELETE /api/v1/datasets/:dataset_id/documents to Go by @xugangqiang in https://github.com/infiniflow/ragflow/pull/15577
* fix: show default embedding model when provider is not yet registered by @euvre in https://github.com/infiniflow/ragflow/pull/15511
* fix(api): restore DocumentService.accessible check on /preview by @dripsmvcp in https://github.com/infiniflow/ragflow/pull/15508
* fix(api): restore accessible check on document preview by @kiannidev in https://github.com/infiniflow/ragflow/pull/15505
* Fix: think stream tail handling by @buua436 in https://github.com/infiniflow/ragflow/pull/15582
* Fix: search bot and verify model instance by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/15588
* Fix: remove duplicate document preview access check by @buua436 in https://github.com/infiniflow/ragflow/pull/15625
* Fix: markdown fenced code block extraction by @bitloi in https://github.com/infiniflow/ragflow/pull/15630
* fix: fall back from empty Docling native chunks by @he-yufeng in https://github.com/infiniflow/ragflow/pull/15601
* feat: migrate POST /api/v1/datasets/<dataset_id>/documents/stop to Go by @xugangqiang in https://github.com/infiniflow/ragflow/pull/15597
* feat: implement GET /api/v1/agents/<agent_id>/versions API by @xugangqiang in https://github.com/infiniflow/ragflow/pull/15629
* Fix: model provider by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/15634
* feat: implement POST /api/v1/agents/<agent_id>/upload API by @xugangqiang in https://github.com/infiniflow/ragflow/pull/15633
* fix: pass search id to searchbots ask by @buua436 in https://github.com/infiniflow/ragflow/pull/15646
* Refactor[Go Model Provider]: refactor baseURL and modelConfig by @Haruko386 in https://github.com/infiniflow/ragflow/pull/15627
* fix: duplicate document ingest guard by @buua436 in https://github.com/infiniflow/ragflow/pull/15638
* feat: implement GET /api/v1/agents/<agent_id>/versions/<version_id> API by @xugangqiang in https://github.com/infiniflow/ragflow/pull/15640
* feat: implement POST /api/v1/searchbots/related_questions API by @xugangqiang in https://github.com/infiniflow/ragflow/pull/15639
* feat: migrate meta_filter and convert_conditions to Go by @xugangqiang in https://github.com/infiniflow/ragflow/pull/15648
* fix: add nil guard to DocumentDAO.GetByIDs and add tests by @xugangqiang in https://github.com/infiniflow/ragflow/pull/15649
* feat(connectors): add Azure Blob Storage data source connector by @JPette1783 in https://github.com/infiniflow/ragflow/pull/15466
* refactor: change GetFlattedMetaByKBs return type to common.MetaData by @xugangqiang in https://github.com/infiniflow/ragflow/pull/15656
* feat: add ResolveReferenceMetadata utility function by @xugangqiang in https://github.com/infiniflow/ragflow/pull/15663
* fix(docker): mount tmpfs on es01 /tmp for entrypoint permissions by @whhe in https://github.com/infiniflow/ragflow/pull/15655
* Fix: volc engine and other json key factories by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/15653
* fix(api): set SDK document download Content-Type from filename (#15112) by @kiannidev in https://github.com/infiniflow/ragflow/pull/15113
* feat: add KG scoring utilities by @xugangqiang in https://github.com/infiniflow/ragflow/pull/15666
* feat: add QueryRewrite prompt builder and response parser by @xugangqiang in https://github.com/infiniflow/ragflow/pull/15669
* feat[Go]: implement GET /agents/templates (issue #15240) by @dripsmvcp in https://github.com/infiniflow/ragflow/pull/15573
* Fix: preserve markdown tables during delimiter extraction by @bitloi in https://github.com/infiniflow/ragflow/pull/15632
* Refactor: consolidate to use @login_required by @wangq8 in https://github.com/infiniflow/ragflow/pull/15652
* feat: support SelectFields override in DocEngine for KG-specific queries by @xugangqiang in https://github.com/infiniflow/ragflow/pull/15684
* feat: add EnrichChunksWithDocMetadata function to attach document metadata to chunks by @xugangqiang in https://github.com/infiniflow/ragflow/pull/15659
* fix: restore case-insensitive contains/not contains/not in and consolidate metadata filter pipeline by @xugangqiang in https://github.com/infiniflow/ragflow/pull/15686
* fix: prevent duplicated post-think text by @buua436 in https://github.com/infiniflow/ragflow/pull/15651
* feat[Go]: implement Agent/Workflow PUT /api/v1/agents/<canvas_id>/tags by @Haruko386 in https://github.com/infiniflow/ragflow/pull/15641
* feat: add KG entity/relation/community search functions by @xugangqiang in https://github.com/infiniflow/ragflow/pull/15689
* feat(connectors): add Salesforce CRM data source connector by @JPette1783 in https://github.com/infiniflow/ragflow/pull/15462
* feat(go-api): implement MCP server management endpoints by @JPette1783 in https://github.com/infiniflow/ragflow/pull/15281
* Go: implement Bedrock embeddings by @tmimmanuel in https://github.com/infiniflow/ragflow/pull/15543
* fix: Update Dockerfile and release workflow to use GitHub mirror instead of Gitee by @asiroliu in https://github.com/infiniflow/ragflow/pull/15700
* fix(agent): skip empty switch conditions by @he-yufeng in https://github.com/infiniflow/ragflow/pull/15691
* Revert "fix(api): authorize owner_ids for list chats and search apps (#14775) by @wangq8 in https://github.com/infiniflow/ragflow/pull/15698
* Revert "fix: duplicate document ingest guard" by @wangq8 in https://github.com/infiniflow/ragflow/pull/15707
* feat: add KGSearchRetrieval for full KG pipeline (N-hop, scoring, query_rewrite, community) by @xugangqiang in https://github.com/infiniflow/ragflow/pull/15690
* Fix: When adding a chat in the main interface, a warning will automatically pop up  by @cike8899 in https://github.com/infiniflow/ragflow/pull/15685
* feat(go-cli): support batch model add/remove and optional embedding dimension by @Hz-186 in https://github.com/infiniflow/ragflow/pull/15631
* feat: Dify-compatible retrieval API endpoint by @xugangqiang in https://github.com/infiniflow/ragflow/pull/15704
* fix(onedrive): normalize folder_path for Graph delta URL by @kiannidev in https://github.com/infiniflow/ragflow/pull/15503
* Feat: get model list from remote by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/15711
* fix(go-api): sync document handler interface and enforce preview acce… by @Hz-186 in https://github.com/infiniflow/ragflow/pull/15688
* Refine handling of POST /api/v1/datasets/search in GO by @qinling0210 in https://github.com/infiniflow/ragflow/pull/15583
* fix(retrieval): keep rerank window aligned to page_size for deep pagination by @cleanjunc in https://github.com/infiniflow/ragflow/pull/15434
* feat[Go]: implement GET /plugin/tools (issue #15240) by @dripsmvcp in https://github.com/infiniflow/ragflow/pull/15570
* fix(rerank): normalize reranker scores onto a single scale before hybrid blend by @cleanjunc in https://github.com/infiniflow/ragflow/pull/15429
* Go: implement Xiaomi chat provider by @tmimmanuel in https://github.com/infiniflow/ragflow/pull/15626
* fix(go-models): increase JieKouAI SSE scanner buffer by @oktofeesh1 in https://github.com/infiniflow/ragflow/pull/15737
* fix: normalize reasoning model families by @bitloi in https://github.com/infiniflow/ragflow/pull/15612
* Fix: The time zone is not displayed on the personal profile page. by @cike8899 in https://github.com/infiniflow/ragflow/pull/15759
* feat: add placeholder model metas by @buua436 in https://github.com/infiniflow/ragflow/pull/15753
* Update Rerank logic in GO by @qinling0210 in https://github.com/infiniflow/ragflow/pull/15755
* fix: normalize agent session chunks by @buua436 in https://github.com/infiniflow/ragflow/pull/15756
* Fix: The embedded website floating component on the agent page does not display citations. by @cike8899 in https://github.com/infiniflow/ragflow/pull/15767
* feat: implement POST /api/v1/searchbots/retrieval_test by @xugangqiang in https://github.com/infiniflow/ragflow/pull/15710
* fix(opensearch): keep the BM25 leg in hybrid search by @mateidanut in https://github.com/infiniflow/ragflow/pull/15760
* feat[Go]: implement /api/v1/agents/<agent_id>/sessions by @Haruko386 in https://github.com/infiniflow/ragflow/pull/15705
* Fix : Ci fail for infinity on level p3 by @6ba3i in https://github.com/infiniflow/ragflow/pull/15757
* Addd OpenRouter OpenAI API compatible list models by @wangq8 in https://github.com/infiniflow/ragflow/pull/15764
* feat: Unify the 'Add Model Provider' modal by @dcc123456 in https://github.com/infiniflow/ragflow/pull/15768
* fix: refine think stream parsing by @buua436 in https://github.com/infiniflow/ragflow/pull/15745
* feat: implement FetchChunkVectors for citation vector hydration by @xugangqiang in https://github.com/infiniflow/ragflow/pull/15749
* Fix: Model provider bugs by @dcc123456 in https://github.com/infiniflow/ragflow/pull/15770
* fix(nlp): tokenize content_tks by whitespace in FulltextQueryer.paragraph by @seekmistar01 in https://github.com/infiniflow/ragflow/pull/15721
* Fix: Excel parser emits a spurious header-only chunk at exact chunk_rows multiples by @devYRPauli in https://github.com/infiniflow/ragflow/pull/15490
* fix(opensearch): keep "id" in _source on insert so document metadata isn't empty by @ef-rintaro in https://github.com/infiniflow/ragflow/pull/15473
* feat(web): show provider count on each model-type filter tag by @sunlight7777777 in https://github.com/infiniflow/ragflow/pull/15444
* i18n(it): complete Italian translation (49% → 100%) by @gaulin-ai in https://github.com/infiniflow/ragflow/pull/15729
* fix(browser): show resolved variables in workflow run log input by @huang-aoqin in https://github.com/infiniflow/ragflow/pull/15325
* feat: add ModelMeta implementations for Xinference, LocalAI, BaiduYiyan, and Tencent Cloud by @euvre in https://github.com/infiniflow/ragflow/pull/15752
* fix: support auto mode in table parser document metadata aggregation by @euvre in https://github.com/infiniflow/ragflow/pull/15780
* fix: Resolve error when checking pipeline parsing result by @dcc123456 in https://github.com/infiniflow/ragflow/pull/15778
* Fix: Add a waiting status to the messages on the chat page. by @cike8899 in https://github.com/infiniflow/ragflow/pull/15773
* fix: await lmstudio embedding verification by @buua436 in https://github.com/infiniflow/ragflow/pull/15772
* Fix OpenRouter key JSONDecodeError by @wangq8 in https://github.com/infiniflow/ragflow/pull/15776
* fix(go-models): fix Moonshot model and balance requests by @oktofeesh1 in https://github.com/infiniflow/ragflow/pull/15528
* Go: implement ASR and TTS for xiaomi by @Haruko386 in https://github.com/infiniflow/ragflow/pull/15765
* fix(go-models): validate URL suffix config keys by @oktofeesh1 in https://github.com/infiniflow/ragflow/pull/15734
* fix(go-models): fix MiniMax driver requests by @oktofeesh1 in https://github.com/infiniflow/ragflow/pull/15527
* fix(go-models): normalize Qwen reasoning families by @oktofeesh1 in https://github.com/infiniflow/ragflow/pull/15735
* Delete not supported model providers list by @wangq8 in https://github.com/infiniflow/ragflow/pull/15783
* feat(ci): enable go test in CI pipeline by @xugangqiang in https://github.com/infiniflow/ragflow/pull/15750
* Feat: model list by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/15774
* Fix: is_english() returns False for any list argument (broken language detection) by @devYRPauli in https://github.com/infiniflow/ragflow/pull/15489
* fix: guard http.DefaultTransport type assertion in xiaomi for Go 1.25 by @xugangqiang in https://github.com/infiniflow/ragflow/pull/15787
* Go: new CLI command, list all models and show model  by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/15786
* fix(api): guard missing row in SearchService.get_detail by @dearsishs in https://github.com/infiniflow/ragflow/pull/15622
* fix(api): await asyncio.wait_for in verify_api_key embedding branch by @dearsishs in https://github.com/infiniflow/ragflow/pull/15620
* Fix: Add bge as embedding by @wangq8 in https://github.com/infiniflow/ragflow/pull/15784
* Fix: OceanBase tenant startup drift and docs by @6ba3i in https://github.com/infiniflow/ragflow/pull/15829
* Fix empty response set not take effect by @wangq8 in https://github.com/infiniflow/ragflow/pull/15824
* fix: resolve issue where some models do not use modelInfo parameter by @dcc123456 in https://github.com/infiniflow/ragflow/pull/15830
* Fix: list intl Tongyi-Qianwen base_url by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/15831
* Go: refactor CLI by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/15728
* feat: Implement checkpoint/resume support for GraphRAG community extraction and entity resolution by @jonathanchang31 in https://github.com/infiniflow/ragflow/pull/15523
* Fix: An error message appears when accessing the agent's launch page: "pagesize exceeds maximum value". by @cike8899 in https://github.com/infiniflow/ragflow/pull/15835
* Clean CLI for filesystem by @yingfeng in https://github.com/infiniflow/ragflow/pull/15838
* feat(api): implement `GET /api/v1/agents/prompts` endpoint in Go by @Hz-186 in https://github.com/infiniflow/ragflow/pull/15748
* fix: propagate memory tenant id in task collect by @buua436 in https://github.com/infiniflow/ragflow/pull/15837
* fix: Remove trailing comma in CREATE TABLE tenant_model SQL (#15832) by @Dr1985 in https://github.com/infiniflow/ragflow/pull/15836
* Go CLI: update list supported models by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/15845
* fix: force image parser json output by @buua436 in https://github.com/infiniflow/ragflow/pull/15847
* fix: BaiduYiyan API key validation fails in set_api_key by @euvre in https://github.com/infiniflow/ragflow/pull/15828
* Fix: model list by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/15839
* Fix: MinerU cannot be added by @wangq8 in https://github.com/infiniflow/ragflow/pull/15841
* fix: prevent None values in auto-metadata from causing KeyError by @xugangqiang in https://github.com/infiniflow/ragflow/pull/15842
* Fix VLLM cannot add without /v1 by @wangq8 in https://github.com/infiniflow/ragflow/pull/15851
* feat: support custom editing for model list by @dcc123456 in https://github.com/infiniflow/ragflow/pull/15855
* fix(models): guard unsafe index access in Google and Ollama drivers by @JPette1783 in https://github.com/infiniflow/ragflow/pull/15819
* feat(go-api): Add GET dataset metadata summary API by @Hz-186 in https://github.com/infiniflow/ragflow/pull/15843
* fix(go): guard four nil-pointer dereferences causing runtime panics by @JPette1783 in https://github.com/infiniflow/ragflow/pull/15815
* Fix: The variables in the Visual Input File of the agent operator are not displayed. by @cike8899 in https://github.com/infiniflow/ragflow/pull/15856
* fix(elasticsearch): complete Go result functions by @JSONbored in https://github.com/infiniflow/ragflow/pull/15148
* Fix: restore GraphRAG entity ranking by indexing pagerank and n-hop paths by @cleanjunc in https://github.com/infiniflow/ragflow/pull/15797
* fix(ci): re-enable Go tests and fix compilation errors after ListModels signature change by @xugangqiang in https://github.com/infiniflow/ragflow/pull/15862
* Fix wrong unit test path by @yingfeng in https://github.com/infiniflow/ragflow/pull/15864
* feat: implement POST /api/v1/searchbots/ask — streaming RAG with citations and think-tag processing by @xugangqiang in https://github.com/infiniflow/ragflow/pull/15825
* feat[Go]: implement /api/v1/agents/<agent_id> and test_db_connection by @Haruko386 in https://github.com/infiniflow/ragflow/pull/15771
* feat[Go]: api datasets/<dataset_id>/documents/<document_id>/metadata/… by @Haruko386 in https://github.com/infiniflow/ragflow/pull/15846
* Docs: Supported model providers and URLs updated by @writinwaters in https://github.com/infiniflow/ragflow/pull/15866
* Go CLI: switch to admin/api server by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/15861
* feat(go-api): add RAG retrieval to chat completions by @oktofeesh1 in https://github.com/infiniflow/ragflow/pull/15739
* Enhancement: slim Docker image, add .dockerignore, fix Go binary shipping by @6ba3i in https://github.com/infiniflow/ragflow/pull/15880
* Fix paddle ocr cannot add by @wangq8 in https://github.com/infiniflow/ragflow/pull/15858
* fix: handle qwen rerank error response by @buua436 in https://github.com/infiniflow/ragflow/pull/15881
* feat(go): Add DeepSeek models and Gitee alias metadata tests by @Hz-186 in https://github.com/infiniflow/ragflow/pull/15885
* Fix: Fix some model provider-related UI issues by @dcc123456 in https://github.com/infiniflow/ragflow/pull/15884
* Fix: tenant_model migrate by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/15886
* fix: rename ark_api_key to api_key for volcengine provider config by @dcc123456 in https://github.com/infiniflow/ragflow/pull/15896
* Fix add OpenRouter base_url, UI need to select at least one model to verify by @wangq8 in https://github.com/infiniflow/ragflow/pull/15894
* Fix: model list by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/15860
* feat: support multi-type factory models by @buua436 in https://github.com/infiniflow/ragflow/pull/15893
* Fix: cohere call failing by @6ba3i in https://github.com/infiniflow/ragflow/pull/15899
* Go: refactor CLI by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/15898
* feat(go-api): migrate agent file download handler to Go with strict P… by @Hz-186 in https://github.com/infiniflow/ragflow/pull/15769
* feat[Go]: implement POST /api/v1/files/link-to-datasets by @hunnyboy1217 in https://github.com/infiniflow/ragflow/pull/15674
* Fix no need to put inactive models to bottom by @wangq8 in https://github.com/infiniflow/ragflow/pull/15903
* fix: remove think text buffering for real-time reasoning stream by @shaoqing404 in https://github.com/infiniflow/ragflow/pull/15891
* Fix cannot add bedrock by @wangq8 in https://github.com/infiniflow/ragflow/pull/15904
* Fix: model list by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/15905
* fix: strip Ollama-style tag suffix from LocalAI model names by @xugangqiang in https://github.com/infiniflow/ragflow/pull/15908
* fix: route visual agent calls to image model by @buua436 in https://github.com/infiniflow/ragflow/pull/15906
* Fix: The dataset retrieval test returned an incorrect total number. by @cike8899 in https://github.com/infiniflow/ragflow/pull/15901
* Fix: add thin scrollbar styling for x-spreadsheet component by @dcc123456 in https://github.com/infiniflow/ragflow/pull/15912
* Fix cannot add fish audio by @wangq8 in https://github.com/infiniflow/ragflow/pull/15913
* Fix:  add image2text/speech2text/ocr support by @dcc123456 in https://github.com/infiniflow/ragflow/pull/15915
* fix(go): Fix case-insensitive model alias lookup by @Hz-186 in https://github.com/infiniflow/ragflow/pull/15911
* feat(go): Update Qwen models in all_models.json by @Hz-186 in https://github.com/infiniflow/ragflow/pull/15910
* Go: fix test and remove unused code by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/15909
* feat: Implement API of ragflow server in Go by @jonathanchang31 in https://github.com/infiniflow/ragflow/pull/15256
* feat(go-api): port forgot-password flow to Go (#15282) by @Rene0422 in https://github.com/infiniflow/ragflow/pull/15290
* Fix: model list by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/15914
* Fix multiple tags by @wangq8 in https://github.com/infiniflow/ragflow/pull/15931
* fix(deps): exclude litellm 1.82.6 (internal ImportError) — #15916 by @Rene0422 in https://github.com/infiniflow/ragflow/pull/15920
* fix: allow zero message history window and clear history for new sessions (#15897) by @zaviermeekz-cpu in https://github.com/infiniflow/ragflow/pull/15902
* fix(sync): tolerate list inputs for Discord server_ids / channels (#15790) by @Rene0422 in https://github.com/infiniflow/ragflow/pull/15809
* fix(go-models): guard nil pointers in DeepSeek and VolcEngine streaming by @JPette1783 in https://github.com/infiniflow/ragflow/pull/15817
* Go: Refactor list-models func by @Haruko386 in https://github.com/infiniflow/ragflow/pull/15900
* Go: add parse and chunk command by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/15936
* Fix Agent chat Minimax content in thinking by @wangq8 in https://github.com/infiniflow/ragflow/pull/15937
* Fix: The regular expression configuration for pipeline header-based chunking will be reset. by @cike8899 in https://github.com/infiniflow/ragflow/pull/15935
* fix: add model_name to embed completion request (#15883) by @zaviermeekz-cpu in https://github.com/infiniflow/ragflow/pull/15888
* fix(es): downgrade LLM-generated invalid SQL to WARNING in ES sql() (#15409) by @Rene0422 in https://github.com/infiniflow/ragflow/pull/15709
* fix: replicate model provider  by @6ba3i in https://github.com/infiniflow/ragflow/pull/15933
* fix(api): guard dataset delete when File2Document row is missing by @bohdansolovie in https://github.com/infiniflow/ragflow/pull/15533
* fix(preview): authenticate markdown document preview requests by @monsterdavidliu-ux in https://github.com/infiniflow/ragflow/pull/15589
* fix(db): drop Peewee-auto-named unique index on tenant_model_instance (#15699) by @Rene0422 in https://github.com/infiniflow/ragflow/pull/15879
* fix(connectors): enforce WebDAV numeric string size limits by @oktofeesh1 in https://github.com/infiniflow/ragflow/pull/15731
* fix(api): POST /documents/stop removes partial chunks and resets counters by @kiannidev in https://github.com/infiniflow/ragflow/pull/15789
* fix(dialog): guard async_ask() against empty or invalid kb_ids by @bohdansolovie in https://github.com/infiniflow/ragflow/pull/15530
* fix: tolerate raw api_key string in AzureEmbed and AzureGptV4 __init__ by @jaso0n0818 in https://github.com/infiniflow/ragflow/pull/15877
* fix: guard docStoreConn.delete with index_exist in parse and stop_parsing by @jaso0n0818 in https://github.com/infiniflow/ragflow/pull/15876
* Fix: Remove the pagination from the search and retrieval pages. by @cike8899 in https://github.com/infiniflow/ragflow/pull/15942
* i18n(ko): add Korean (한국어) translation by @yooxdb in https://github.com/infiniflow/ragflow/pull/15863
* fix: propagate max_tokens from model config to downstream consumers by @shaoqing404 in https://github.com/infiniflow/ragflow/pull/15945
* Fix: get is_tools from model record by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/15946
* feat(go): Add embedding dimension metadata and validation by @Hz-186 in https://github.com/infiniflow/ragflow/pull/15939
* Fix: Search mindmap not working by @wangq8 in https://github.com/infiniflow/ragflow/pull/15949
* Docs: Added initial draft for v0.26.0 release notes. by @writinwaters in https://github.com/infiniflow/ragflow/pull/15603
* Docs: Update version references to v0.26.0 in READMEs and docs by @asiroliu in https://github.com/infiniflow/ragflow/pull/15941

## New Contributors
* @Helios531 made their first contribution in https://github.com/infiniflow/ragflow/pull/15131
* @leslie2046 made their first contribution in https://github.com/infiniflow/ragflow/pull/15383
* @monsterdavidliu-ux made their first contribution in https://github.com/infiniflow/ragflow/pull/15386
* @Dexterity104 made their first contribution in https://github.com/infiniflow/ragflow/pull/15382
* @galuis116 made their first contribution in https://github.com/infiniflow/ragflow/pull/15181
* @ef-rintaro made their first contribution in https://github.com/infiniflow/ragflow/pull/15390
* @davidmyriel made their first contribution in https://github.com/infiniflow/ragflow/pull/15361
* @glorysr1209-png made their first contribution in https://github.com/infiniflow/ragflow/pull/15359
* @Aeovy made their first contribution in https://github.com/infiniflow/ragflow/pull/15101
* @VictorECDSA made their first contribution in https://github.com/infiniflow/ragflow/pull/15488
* @he-yufeng made their first contribution in https://github.com/infiniflow/ragflow/pull/15601
* @cleanjunc made their first contribution in https://github.com/infiniflow/ragflow/pull/15434
* @mateidanut made their first contribution in https://github.com/infiniflow/ragflow/pull/15760
* @seekmistar01 made their first contribution in https://github.com/infiniflow/ragflow/pull/15721
* @devYRPauli made their first contribution in https://github.com/infiniflow/ragflow/pull/15490
* @sunlight7777777 made their first contribution in https://github.com/infiniflow/ragflow/pull/15444
* @gaulin-ai made their first contribution in https://github.com/infiniflow/ragflow/pull/15729
* @dearsishs made their first contribution in https://github.com/infiniflow/ragflow/pull/15622
* @Dr1985 made their first contribution in https://github.com/infiniflow/ragflow/pull/15836
* @zaviermeekz-cpu made their first contribution in https://github.com/infiniflow/ragflow/pull/15902
* @jaso0n0818 made their first contribution in https://github.com/infiniflow/ragflow/pull/15877
* @yooxdb made their first contribution in https://github.com/infiniflow/ragflow/pull/15863

**Full Changelog**: https://github.com/infiniflow/ragflow/compare/v0.25.6...v0.26.0

---

> **Source** [infiniflow/ragflow](https://github.com/infiniflow/ragflow) · `v0.26.0` · 2026-06-11 · [upstream release](https://github.com/infiniflow/ragflow/releases/tag/v0.26.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
