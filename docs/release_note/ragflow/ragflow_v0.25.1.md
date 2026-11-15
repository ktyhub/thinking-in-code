---
title: "ragflow v0.25.1"
project: "ragflow"
repo: "infiniflow/ragflow"
tag: "v0.25.1"
version: "v0.25.1"
published: "2026-04-30"
type: "patch"
lang: "en"
summary: "API refactoring and unification: Standardizes web APIs to RESTful conventions across all endpoints, unifying document creation and indexing flows while maintaining backward compatibility."
---

# ragflow v0.25.1

## Summary

### Improvements

- API refactoring and unification: Standardizes web APIs to RESTful conventions across all endpoints, unifying document creation and indexing flows while maintaining backward compatibility.
- Parsing optimizations: Adds [OpenDataLoader](https://github.com/opendataloader-project/opendataloader-pdf) PDF backend. [#14097](https://github.com/infiniflow/ragflow/pull/14097)
- Introduces lazy loading and chunked parsing for large PDFs (&gt;50 pages), significantly reducing memory footprint. [#14385](https://github.com/infiniflow/ragflow/pull/14385)

### Data source

Enables synchronizing deleted files in Bitbucket, Gmail, Google Drive, and Airtable.

### Model support

- DeepSeek v4

### Model providers

- UCloud

### Bug fixes

- Metadata visibility issues during v0.24.0 to v0.25.0 upgrades.
- Duplicate chat output.


## What's Changed
* Refactor: Consolidation WEB API & HTTP API for document get_filter by @xugangqiang in https://github.com/infiniflow/ragflow/pull/14248
* docs: add DeepWiki developer guide page by @hyl64 in https://github.com/infiniflow/ragflow/pull/14244
* Docs: User-level memory is supported in v0.25.0 by @writinwaters in https://github.com/infiniflow/ragflow/pull/14259
* Refactor: Consolidation WEB API & HTTP API for document infos by @xugangqiang in https://github.com/infiniflow/ragflow/pull/14239
* Go: add balance command by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/14262
* Update release note by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/14275
* Refa: align chat and search restful APIs by @buua436 in https://github.com/infiniflow/ragflow/pull/14229
* Refactor: Consolidation WEB API & HTTP API for document delete api by @xugangqiang in https://github.com/infiniflow/ragflow/pull/14254
* fix: normalize think tags in final chat answer by @buua436 in https://github.com/infiniflow/ragflow/pull/14271
* Fix: switch MinerU API endpoint to /pdf_parse by @6ba3i in https://github.com/infiniflow/ragflow/pull/14272
* Doc: v0.25.0 release notes. by @writinwaters in https://github.com/infiniflow/ragflow/pull/14284
* Fix #14213 create folder does not accept FOLDER by @wangq8 in https://github.com/infiniflow/ragflow/pull/14276
* Fix uv.lock by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/14285
* Fix: document and sdk support of searching message with user_id by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/14283
* Fix: MinerU 3.x output discovery and API contract by @6ba3i in https://github.com/infiniflow/ragflow/pull/14282
* feat: Add Astraflow provider support (global + China endpoints) by @ucloudnb666 in https://github.com/infiniflow/ragflow/pull/14270
* Add deepseek and moonshot model json by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/14290
* Fix upload stream handling to prevent truncated files by @bohdansolovie in https://github.com/infiniflow/ragflow/pull/14267
* Fix: serialize GraphRAG entity resolution merges to avoid graph mutation races  by @spider-yamet in https://github.com/infiniflow/ragflow/pull/14237
* Set image tag v0.25.0 by @wangq8 in https://github.com/infiniflow/ragflow/pull/14299
* Doc: two PDF parser optimizers are supported as of v0.25.0. by @writinwaters in https://github.com/infiniflow/ragflow/pull/14261
* Refact: Tenant api by @Magicbook1108 in https://github.com/infiniflow/ragflow/pull/14288
* Refactor: Migrate document metadata config update API by @xugangqiang in https://github.com/infiniflow/ragflow/pull/14286
* Refactor: API connectors by @wangq8 in https://github.com/infiniflow/ragflow/pull/14228
* Fix: Remove duplicate text output from the thought model on the chat page. by @cike8899 in https://github.com/infiniflow/ragflow/pull/14301
* Fix: Some bugs by @dcc123456 in https://github.com/infiniflow/ragflow/pull/14287
* Go: add new provider minimax by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/14296
* Fix: Recall Test Page Metadata Not Displaying. by @cike8899 in https://github.com/infiniflow/ragflow/pull/14297
* Refactor: REST API langfuse api-key by @wangq8 in https://github.com/infiniflow/ragflow/pull/14315
* Refactor: API file2document by @wangq8 in https://github.com/infiniflow/ragflow/pull/14306
* Refactor: Doc metadata update by @xugangqiang in https://github.com/infiniflow/ragflow/pull/14289
* Refa: migrate MCP APIs to RESTful api by @buua436 in https://github.com/infiniflow/ragflow/pull/14317
* Add REDIS zcard by @wangq8 in https://github.com/infiniflow/ragflow/pull/14316
* Build(deps): Bump lxml from 6.0.2 to 6.1.0 in /sdk/python by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/14318
* Add missing timeout to ragflow server health check by @Ricardo-M-L in https://github.com/infiniflow/ragflow/pull/14311
* Refact: system apis by @Magicbook1108 in https://github.com/infiniflow/ragflow/pull/14298
* Refa: migrate chunk APIs to RESTful routes by @buua436 in https://github.com/infiniflow/ragflow/pull/14291
* API refactor: stats_api and plugin_api by @wangq8 in https://github.com/infiniflow/ragflow/pull/14324
* Fix commit override from #14298 of api-key to api_key by @wangq8 in https://github.com/infiniflow/ragflow/pull/14328
* Feat: optimize title chunk by @Magicbook1108 in https://github.com/infiniflow/ragflow/pull/14325
* Refa: remove legacy MCP server web API by @buua436 in https://github.com/infiniflow/ragflow/pull/14322
* fix azure blob put method param by @newyangyang in https://github.com/infiniflow/ragflow/pull/14329
* Feat: Agent api by @Magicbook1108 in https://github.com/infiniflow/ragflow/pull/14157
* fix: migrate Langfuse integration from start_generation to start_obse… by @RazmikGevorgyan in https://github.com/infiniflow/ragflow/pull/14205
* Refactor user REST API by @wangq8 in https://github.com/infiniflow/ragflow/pull/14334
* Feat: deepseek v4 by @Magicbook1108 in https://github.com/infiniflow/ragflow/pull/14346
* Implement retrieval_test in GO by @qinling0210 in https://github.com/infiniflow/ragflow/pull/14231
* docs: fix API key guide typo by @MukundaKatta in https://github.com/infiniflow/ragflow/pull/14352
* Fix api user patch verb does not work by @wangq8 in https://github.com/infiniflow/ragflow/pull/14358
* Refa : migrate agent webhook routes to REST APIs by @buua436 in https://github.com/infiniflow/ragflow/pull/14330
* Fix: allow use image2text as chat model by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/14331
* feat: route docling parsing through native chunking endpoints by @ParasSondhi in https://github.com/infiniflow/ragflow/pull/14218
* fix: check isinstance before len in VariableAssigner _remove_first/_remove_last by @kuishou68 in https://github.com/infiniflow/ragflow/pull/14281
* Fix blob sync: skip unsupported files before download by @6ba3i in https://github.com/infiniflow/ragflow/pull/14357
* Refact: Updated rootAsHeadingTip by @writinwaters in https://github.com/infiniflow/ragflow/pull/14363
* Fix: The button styles in the PaddleOCR dialog are not applying correctly. by @cike8899 in https://github.com/infiniflow/ragflow/pull/14350
* Update API document by @wangq8 in https://github.com/infiniflow/ragflow/pull/14364
* Doc: Updated a 0.25-specific faq by @writinwaters in https://github.com/infiniflow/ragflow/pull/14365
* Go: add gitee and siliconflow as model provider by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/14336
* Feat: introduce minimum type check for pipeline by @Magicbook1108 in https://github.com/infiniflow/ragflow/pull/14354
* Fix: allow search id or _id by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/14356
* Feat: add OpenDataLoader PDF parser backend (#14058) by @wdeveloper16 in https://github.com/infiniflow/ragflow/pull/14097
* Fix: validate URL scheme and resolved IP before crawling to prevent SSRF by @xingxing21 in https://github.com/infiniflow/ragflow/pull/14090
* feat(api): add unified index API and dataset management endpoints by @euvre in https://github.com/infiniflow/ragflow/pull/14222
* Refa: unify document create flows under REST documents API by @buua436 in https://github.com/infiniflow/ragflow/pull/14345
* feat: persist RAPTOR layer metadata on summary chunks by @yuch85 in https://github.com/infiniflow/ragflow/pull/13286
* fix: skip canvas SSE fetch in chat shared page to eliminate spurious 103 error by @euvre in https://github.com/infiniflow/ragflow/pull/14190
* fix: handle Infinity table-not-exist error (3022) in update() methods by @euvre in https://github.com/infiniflow/ragflow/pull/14153
* feat: persist PDF bookmark outline as document metadata by @yuch85 in https://github.com/infiniflow/ragflow/pull/13287
* chore(CLAUDE.md): add shared UI component lock convention to CLAUDE.md by @ZhenhangTung in https://github.com/infiniflow/ragflow/pull/14381
* Refa: restore openai-compatible chat completions api by @buua436 in https://github.com/infiniflow/ragflow/pull/14380
* Go: aliyun model provider by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/14379
* Fix: Remove hardcoded page limits causing parsing failures on large PDFs (>300 pages) by @euvre in https://github.com/infiniflow/ragflow/pull/14382
* Refactor: migrate artifact API by @xugangqiang in https://github.com/infiniflow/ragflow/pull/14348
* Remove evaluation_app.py and kb_app.py by @wangq8 in https://github.com/infiniflow/ragflow/pull/14394
* Fix metadata parsing regression for upgraded v0.24 datasets by @6ba3i in https://github.com/infiniflow/ragflow/pull/14383
* perf: lazy img_np loading and chunked parse_into_bboxes for large PDFs by @yuzhichang in https://github.com/infiniflow/ragflow/pull/14385
* Refactor: migrate doc upload info used in chat by @xugangqiang in https://github.com/infiniflow/ragflow/pull/14359
* Fix: support release in agent update api by @buua436 in https://github.com/infiniflow/ragflow/pull/14396
* Helm template ragflow.yaml: fix nginx-config-volume mountPath according to Dockerfile v0.25.0 by @mginfn in https://github.com/infiniflow/ragflow/pull/14361
* Fix: prioritize explore session ID and reset default conversation variables by @buua436 in https://github.com/infiniflow/ragflow/pull/14399
* Refactor: deco doc-parse API that is not used any more by @xugangqiang in https://github.com/infiniflow/ragflow/pull/14367
* Refa: align list operations and strict mode by @buua436 in https://github.com/infiniflow/ragflow/pull/14387
* Add task API by @wangq8 in https://github.com/infiniflow/ragflow/pull/14393
* Refactor: optimize agent reset conversation variable defaults by @buua436 in https://github.com/infiniflow/ragflow/pull/14401
* Refactor: Doc batch change status by @xugangqiang in https://github.com/infiniflow/ragflow/pull/14337
* tests: add missing HTTP API tests for dataset management endpoints removed in #14222 by @euvre in https://github.com/infiniflow/ragflow/pull/14390
* Refactor: deco document upload_and_parse API by @xugangqiang in https://github.com/infiniflow/ragflow/pull/14366
* Go: add new provider: google by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/14395
* Refactor: migrate document run api by @xugangqiang in https://github.com/infiniflow/ragflow/pull/14351
* Refactor: migrate document thumbnails API by @xugangqiang in https://github.com/infiniflow/ragflow/pull/14344
* Fix: add executor.shutdown by @xugangqiang in https://github.com/infiniflow/ragflow/pull/14403
* Refactor: Doc change parser by @xugangqiang in https://github.com/infiniflow/ragflow/pull/14327
* Doc: Added a database schema and migration guide. by @writinwaters in https://github.com/infiniflow/ragflow/pull/14404
* Fix: thumbnails issue in chat  by @xugangqiang in https://github.com/infiniflow/ragflow/pull/14415
* Go: add volcengine by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/14409
* Fix: preserve infinity available_int zero filter by @buua436 in https://github.com/infiniflow/ragflow/pull/14416
* Fix: align chat recommendation and thumbup APIs by @buua436 in https://github.com/infiniflow/ragflow/pull/14413
* Always return success if no such task id by @wangq8 in https://github.com/infiniflow/ragflow/pull/14417
* Refactor model in GO by @qinling0210 in https://github.com/infiniflow/ragflow/pull/14398
* Go: fix compilation by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/14418
* Fix manual naive parser position extraction fallback by @6ba3i in https://github.com/infiniflow/ragflow/pull/14420
* Fix case-insensitive matching for manual meta_data_filter in / not in list values by @spider-yamet in https://github.com/infiniflow/ragflow/pull/14397
* Feat: enable sync deleted files for more connectors by @Magicbook1108 in https://github.com/infiniflow/ragflow/pull/14353
* Go: update db model by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/14423
* Refactor model type to model class by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/14426
* Fix: agent toolcall null response & schema validation & DeepSeek think history by @buua436 in https://github.com/infiniflow/ragflow/pull/14425
* Fix: document level auto metadata config missing after save  by @xugangqiang in https://github.com/infiniflow/ragflow/pull/14421
* Go: implement provider: Moonshot by @Haruko386 in https://github.com/infiniflow/ragflow/pull/14433
* Feat: more model for paddle by @Magicbook1108 in https://github.com/infiniflow/ragflow/pull/14436
* Simplify Encode by @qinling0210 in https://github.com/infiniflow/ragflow/pull/14437
* Fix: google authentication - gmail && google-drive by @Magicbook1108 in https://github.com/infiniflow/ragflow/pull/14422
* Refactor: migrate chunk retrieval_test and knowledge_graph to REST API endpoints by @euvre in https://github.com/infiniflow/ragflow/pull/14402
* Fix: update based on #14436 by @Magicbook1108 in https://github.com/infiniflow/ragflow/pull/14440
* Fix: enable sync deleted file in airtable by @Magicbook1108 in https://github.com/infiniflow/ragflow/pull/14438
* refactor: improve QwenRerank logic by @Woody-Hu in https://github.com/infiniflow/ragflow/pull/14388
* feat(google-drive): optimize memory payload and enable sync deletion by @ParasSondhi in https://github.com/infiniflow/ragflow/pull/14372
* Feat: sync deleted files in Bitbucket by @Magicbook1108 in https://github.com/infiniflow/ragflow/pull/14450
* Go: update chat URL by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/14453
* Fix: prune deleted doc chunks from retrieval by @buua436 in https://github.com/infiniflow/ragflow/pull/14454
* Fix: Dataset: When configuring the "general chunk method," options such as chunk size and parent-child slicing are unavailable. by @cike8899 in https://github.com/infiniflow/ragflow/pull/14459
* Remove model_bundle.go, modify chat_session.go by @qinling0210 in https://github.com/infiniflow/ragflow/pull/14458
* Fix: add retrieval fallback comments by @buua436 in https://github.com/infiniflow/ragflow/pull/14457
* Add backward compat APIs by @wangq8 in https://github.com/infiniflow/ragflow/pull/14427
* Go: implement provider: volcengine by @Haruko386 in https://github.com/infiniflow/ragflow/pull/14460
* Fix delete graphrag raptor by @wangq8 in https://github.com/infiniflow/ragflow/pull/14469
* Fix query param type by @wangq8 in https://github.com/infiniflow/ragflow/pull/14471
* Fix: Clicking the button in the bottom-right corner of the `/chats/widget` page fails to display the dialog box. by @cike8899 in https://github.com/infiniflow/ragflow/pull/14465
* Feat: enable sync deleted files for Gmail && fix google drive issues by @Magicbook1108 in https://github.com/infiniflow/ragflow/pull/14462
* Port PR14454 to GO (PruneDeletedChunks) by @qinling0210 in https://github.com/infiniflow/ragflow/pull/14463
* Update create model instance command by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/14441
* Fix graph task type by @wangq8 in https://github.com/infiniflow/ragflow/pull/14475
* Fix delete graph by @wangq8 in https://github.com/infiniflow/ragflow/pull/14484
* Fix: RAPTOR "Generation scope" reset to "Single file" when selecting "Dataset" by @euvre in https://github.com/infiniflow/ragflow/pull/14477
* Feat: enable sync deleted files in gitlab by @Magicbook1108 in https://github.com/infiniflow/ragflow/pull/14481
* feat(dropbox): support deleted-file sync by @bitloi in https://github.com/infiniflow/ragflow/pull/14476
* Feat: enable sync deleted file for Discord by @Magicbook1108 in https://github.com/infiniflow/ragflow/pull/14451
* Go: implement provider: MiniMax by @Haruko386 in https://github.com/infiniflow/ragflow/pull/14478
* Go: add drop instance models by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/14485
* Docs: Updated Title chunker references by @writinwaters in https://github.com/infiniflow/ragflow/pull/14483
* Fix: The pipeline column header in the FileLogsTable is displaying incorrectly. by @cike8899 in https://github.com/infiniflow/ragflow/pull/14489
* Fix visit dataset error by @wangq8 in https://github.com/infiniflow/ragflow/pull/14490
* Docs:  by @writinwaters in https://github.com/infiniflow/ragflow/pull/14492
* Fix metadata config by @wangq8 in https://github.com/infiniflow/ragflow/pull/14480
* fix: file logs not displayed in dataset ingestion page by @euvre in https://github.com/infiniflow/ragflow/pull/14479
* Chore(deps): Bump google.golang.org/grpc from 1.66.2 to 1.79.3 by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/14513
* Fix: The GraphRAG icon is not displaying. by @cike8899 in https://github.com/infiniflow/ragflow/pull/14514
* Docs: Update version references to v0.25.1 in READMEs and docs by @asiroliu in https://github.com/infiniflow/ragflow/pull/14488

## New Contributors
* @hyl64 made their first contribution in https://github.com/infiniflow/ragflow/pull/14244
* @ucloudnb666 made their first contribution in https://github.com/infiniflow/ragflow/pull/14270
* @bohdansolovie made their first contribution in https://github.com/infiniflow/ragflow/pull/14267
* @newyangyang made their first contribution in https://github.com/infiniflow/ragflow/pull/14329
* @RazmikGevorgyan made their first contribution in https://github.com/infiniflow/ragflow/pull/14205
* @MukundaKatta made their first contribution in https://github.com/infiniflow/ragflow/pull/14352
* @ParasSondhi made their first contribution in https://github.com/infiniflow/ragflow/pull/14218
* @kuishou68 made their first contribution in https://github.com/infiniflow/ragflow/pull/14281
* @wdeveloper16 made their first contribution in https://github.com/infiniflow/ragflow/pull/14097
* @xingxing21 made their first contribution in https://github.com/infiniflow/ragflow/pull/14090
* @yuch85 made their first contribution in https://github.com/infiniflow/ragflow/pull/13286
* @mginfn made their first contribution in https://github.com/infiniflow/ragflow/pull/14361
* @Haruko386 made their first contribution in https://github.com/infiniflow/ragflow/pull/14433

**Full Changelog**: https://github.com/infiniflow/ragflow/compare/v0.25.0...v0.25.1

---

> **Source** [infiniflow/ragflow](https://github.com/infiniflow/ragflow) · `v0.25.1` · 2026-04-30 · [upstream release](https://github.com/infiniflow/ragflow/releases/tag/v0.25.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
