---
title: "ragflow v1.0.0-rc3"
project: "ragflow"
repo: "infiniflow/ragflow"
tag: "v1.0.0-rc3"
version: "v1.0.0-rc3"
published: "2026-10-30"
type: "major"
lang: "en"
summary: "1.0.0-rc3 is the third and final release candidate before the official v1.0.0 release. It fixes several issues found in rc2 and introduces new features and enhancements."
---

# ragflow v1.0.0-rc3

1.0.0-rc3 is the third and final release candidate before the official v1.0.0 release. It fixes several issues found in rc2 and introduces new features and enhancements.

## Key updates:
1. Introduced the decision model for evidence sufficiency judgment within the agentic tool loop, and the Categorize component for agents.
2. Added support for multiple versions of ingestion pipeline DSL.
3. Chat history now stores and displays prompts, token usage, and execution time.
4. Compatible with existing v1.0.0-rc2 schema, allowing a direct upgrade.


## What's Changed
* Fix: An additional retrieval node has appeared in the agent created using the CAJAL Scientific Paper Assistant template. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21079
* fix(agent): preserve and resolve webhook header fields by @T1mn in https://github.com/infiniflow/ragflow/pull/20696
* fix(agent): migrate chunk_summary and title_chunker templates to modular Extractor params by @12britz in https://github.com/infiniflow/ragflow/pull/20754
* fix(s3): honor signature_version and addressing_style for S3-compatible stores by @yaoper in https://github.com/infiniflow/ragflow/pull/20815
* fix(agent): retain webhook completion across incremental polls by @T1mn in https://github.com/infiniflow/ragflow/pull/20697
* fix(mcp): return a private cacheScope from tools/list by @leilei3167 in https://github.com/infiniflow/ragflow/pull/20539
* Fix: The quoted content in agent messages is not displayed correctly. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21070
* fix: use id and kb_id when deleting dataset metadata by @aniketkrs in https://github.com/infiniflow/ragflow/pull/20880
* feat(go): complete the Mistral /v1/ocr client and list mistral-ocr-latest as an ocr model by @Xavierando in https://github.com/infiniflow/ragflow/pull/20531
* fix: expose compile_kwd in dataset search results by @liang0417 in https://github.com/infiniflow/ragflow/pull/20859
* fix(chunker): keep structured tables and images in the title family by @jay77721 in https://github.com/infiniflow/ragflow/pull/21040
* Fix: Error related to the 'UserFillUpForm' type by @cike8899 in https://github.com/infiniflow/ragflow/pull/21062
* Test:migrate router contracts api by @flyingwhit in https://github.com/infiniflow/ragflow/pull/21046
* Test:migrate langfuse routes api by @flyingwhit in https://github.com/infiniflow/ragflow/pull/21050
* fix(metadata): preserve string arrays in in-memory filters by @QAQadws in https://github.com/infiniflow/ragflow/pull/21065
* ci(tests): run migrated Go API tests by @6ba3i in https://github.com/infiniflow/ragflow/pull/21077
* Support jev model interface, part1 by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21087
* fix(kvrocks): propagate SetNX errors by @eleven914 in https://github.com/infiniflow/ragflow/pull/20746
* refactor(parser): introduce typed Position API for DocItem positions by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21049
* Remove RowsToHTML; render PDF tables via canonical RenderTableHTML by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21083
* feat(parser): extract SVG text in Go picture ingestion by @errmakov in https://github.com/infiniflow/ragflow/pull/20523
* fix(agent): bound the self-managed error body drain by @Tong-bit-art in https://github.com/infiniflow/ragflow/pull/21058
* test(api): migrate and improve search API tests, make the Go API suite self-sufficient by @qinling0210 in https://github.com/infiniflow/ragflow/pull/21086
* fix(ingestion): document and validate extractor timeout env by @jay77721 in https://github.com/infiniflow/ragflow/pull/21119
* Add more server types by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21127
* feat: migrate permission schema fields by @buua436 in https://github.com/infiniflow/ragflow/pull/21085
* Add token usage for agentic rag by @yingfeng in https://github.com/infiniflow/ragflow/pull/21134
* feat(pipeline): support image and email in general template by @jay77721 in https://github.com/infiniflow/ragflow/pull/21072
* fix(harness): recognize retryable errors beyond string prefixes by @SiyuanChenToDo in https://github.com/infiniflow/ragflow/pull/21114
* fix(parser): write an email's text output in a fixed field order by @L4XB in https://github.com/infiniflow/ragflow/pull/21100
* fix: release , aliyun Personal ACR does not support image proof lists by @myf-bee in https://github.com/infiniflow/ragflow/pull/21136
* Go: update admin client by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21135
* fix(parser): keep JSON numbers and <, >, & as written in JSON items by @L4XB in https://github.com/infiniflow/ragflow/pull/21101
* test(nlp): stop copying the atomic lookupNum in synonym tests by @12britz in https://github.com/infiniflow/ragflow/pull/21102
* refactor(ingestion): pipeline cleanups by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21084
* fix(parser): decode numeric and all named character references in EPUB text by @L4XB in https://github.com/infiniflow/ragflow/pull/21103
* fix(web): defer retrieval document search until selection settles by @dcc123456 in https://github.com/infiniflow/ragflow/pull/21144
* fix(go-models): unwrap bundled api_key for Azure OpenAI by @errmakov in https://github.com/infiniflow/ragflow/pull/20354
* feat(go-auth): bind tenant context to access tokens and API keys by @buua436 in https://github.com/infiniflow/ragflow/pull/21153
* release: move release workflow from self-hosts to github runner hosts by @myf-bee in https://github.com/infiniflow/ragflow/pull/21155
* Fix template integration tests for typed parser DocItem output by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21141
* refactor(ingestion): cleanup — stdlib reuse and shared component names by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21149
* feat(parser): allow tenant PaddleOCR selection for images by @ZXLyyds100 in https://github.com/infiniflow/ragflow/pull/21113
* fix(parser): read text and inline elements under <body> as one item by @L4XB in https://github.com/infiniflow/ragflow/pull/21108
* docs： Add a Tongyi-Qianwen Base URL reminder to the upgrade guide. by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/21166
* feat: add TrustedRouter as a model provider by @jperla in https://github.com/infiniflow/ragflow/pull/21105
* refactor(mcp): move MCP client out of utility into internal/mcp/client by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21150
* Fix claim/evidence usage in agentic RAG by @yingfeng in https://github.com/infiniflow/ragflow/pull/21170
* Test: migrate files api by @flyingwhit in https://github.com/infiniflow/ragflow/pull/21054
* fix(web): correct PaddleOCR provider links to AI Studio by @jay77721 in https://github.com/infiniflow/ragflow/pull/21196
* fix(parser): start a new line before every HTML block element by @L4XB in https://github.com/infiniflow/ragflow/pull/21107
* feat(parser): honor MinerU formula and table controls by @ZXLyyds100 in https://github.com/infiniflow/ragflow/pull/21109
* fix(deepdoc): sample English pages deterministically by @leilei3167 in https://github.com/infiniflow/ragflow/pull/20689
* fix(ingestion): port Python's table-tag strip to the tokenizer embedding path by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21156
* Extract shared storage layer: s3Base + retry/move helpers by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21158
* fix(agent/tool): compare hostnames case-insensitively in DoPinned guard by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21171
* fix(api): return nonempty string response messages by @QAQadws in https://github.com/infiniflow/ragflow/pull/21194
* fix(chunker): group DOCX paragraphs into custom-delimiter records by @Souravrajvi0 in https://github.com/infiniflow/ragflow/pull/20713
* Fix(deps): use onnxruntime-v1.29.0-patch2 to restore Clip@13 in minimal ORT by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21051
* feat(parser): add per-method external DeepDoc analyzer dispatch by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21182
* fix(parser): emit DOC tables as structured items instead of plain text by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21201
* fix(parser): caption DOCX tables with their heading hierarchy by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21202
* fix(parser): use selected tenant SoMark and OpenDataLoader instances by @ZXLyyds100 in https://github.com/infiniflow/ragflow/pull/21112
* feat: add EmpirioLabs AI as a model provider by @Adam-Dalloul in https://github.com/infiniflow/ragflow/pull/21192
* Get server type in boostrap by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21204
* rename job release to publish_sdk by @myf-bee in https://github.com/infiniflow/ragflow/pull/21208
* feat: add AI Stupid Level as a model provider by @StudioPlatforms in https://github.com/infiniflow/ragflow/pull/21185
* Add server type to StartServer function as parameter by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21219
* fix(parser): preserve PaddleOCR PDF highlight positions by @jay77721 in https://github.com/infiniflow/ragflow/pull/21205
* feat(agentic-rag): support per-chat prompts and tool selection by @6ba3i in https://github.com/infiniflow/ragflow/pull/21211
* fix(parser): merge .doc header-row table fragments split by office_oxide by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21222
* refactor(ingestion): converge global singletons into injected dependencies by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21203
* fix(ingestion): migrate composite PaddleOCR layout selectors by @jay77721 in https://github.com/infiniflow/ragflow/pull/21236
* Refactor: turn on local as last by @wangq8 in https://github.com/infiniflow/ragflow/pull/21238
* CLI: add show quota by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21243
* refactor(admin): isolate user agent and dataset listings in EE files by @QAQadws in https://github.com/infiniflow/ragflow/pull/21210
* refactor(memory): inject MQ engine into memory publish path by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21244
* fix(retrieval): drop the filter-only fallback by @qinling0210 in https://github.com/infiniflow/ragflow/pull/21240
* Feat: Remove the execution restrictions imposed when an agent fails the checklist validation. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21232
* Fix: Some files in the `agent` directory are triggering `tsc` errors. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21212
* fix(agent): render fenced Markdown tables in PDFs by @6ba3i in https://github.com/infiniflow/ragflow/pull/21248
* feat(models): add Radeon Cloud provider for GO by @6ba3i in https://github.com/infiniflow/ragflow/pull/21163
* feat(tenant): add tenant roles and permissions by @buua436 in https://github.com/infiniflow/ragflow/pull/21257
* EE: add function toggle by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21262
* fix(knowledge_compile): widen backlog columns to LONGTEXT by @lorenzozanee in https://github.com/infiniflow/ragflow/pull/20855
* update heartbeat message by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21269
* fix(agent): accept typed slices in ListOperations by @6ba3i in https://github.com/infiniflow/ragflow/pull/21252
* fix(admin): honor ADMIN_DEFAULT_PASSWORD for the first superuser by @leilei3167 in https://github.com/infiniflow/ragflow/pull/20562
* refactor(pipeline): remove dead output_format from ingestion templates by @jay77721 in https://github.com/infiniflow/ragflow/pull/21266
* fix(agent): Render Markdown tables in DOCX exports by @6ba3i in https://github.com/infiniflow/ragflow/pull/21274
* docs: restructure the admin docs to make it more user friendly by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/21279
* fix(models): restore gpustack rerank and audio support by @gitlawr in https://github.com/infiniflow/ragflow/pull/21233
* fix services stale clean by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21277
* feat(models): add New API model driver by @wanghualoong in https://github.com/infiniflow/ragflow/pull/21226
* fix(parser): break EPUB text at the end of every block element by @L4XB in https://github.com/infiniflow/ragflow/pull/21104
* feat(utility): route WPS private formats to existing office parsers by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21251
* Fix: knowledge compilation skip writting extra field by @wangq8 in https://github.com/infiniflow/ragflow/pull/21278
* fix(ingestion): block video parse while keeping visual upload routing by @jay77721 in https://github.com/infiniflow/ragflow/pull/21245
* Feat: Display both "naive" and "agentic" configurations on the chat settings page. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21285
* refactor(deepdoc): make model filenames, threshold, and post-processing overridable at runtime by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21275
* Fix: 1. update document parser_config does not clean chunks, 2. after update, pop up dialog to notice use to re-parse by @wangq8 in https://github.com/infiniflow/ragflow/pull/21281
* fix server list issue by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21288
* refactor(ingestion): retire ck_type in favor of layout and doc_type by @jay77721 in https://github.com/infiniflow/ragflow/pull/21259
* feat(decision-model): configure the retrieval judge from the UI and cap run cost by @Caobaining1 in https://github.com/infiniflow/ragflow/pull/21250
* refactor(parser): unify PDF JSON post-processing by @jay77721 in https://github.com/infiniflow/ragflow/pull/21228
* fix(cli): send the dataset_id filter and guard the memory lookup type assertion by @lemonzoey in https://github.com/infiniflow/ragflow/pull/21193
* fix(chunker): preserve list-form PDF positions in title chunkers by @jay77721 in https://github.com/infiniflow/ragflow/pull/21258
* Fix: parse api_key and group_id in Minimax config by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/21289
* Fix: The names of custom pipelines should be displayed as in the original text. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21300
* fix(parser): normalize inline image base64 before chunk upload by @jay77721 in https://github.com/infiniflow/ragflow/pull/21286
* docs: update admin docs with latest release by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/21302
* fix(agentic-rag): deliver the final answer after a budget stop by @Caobaining1 in https://github.com/infiniflow/ragflow/pull/21301
* fix(agent): fall through when a Switch numeric comparison cannot parse by @RerankerGuo in https://github.com/infiniflow/ragflow/pull/21094
* fix(meta): keep an empty auto meta filter unscoped instead of matching nothing by @martincivan in https://github.com/infiniflow/ragflow/pull/20979
* fix(infinity): treat dropping a missing table as a no-op by @bharadwaj-pendyala in https://github.com/infiniflow/ragflow/pull/20512
* refactor(ingestion): remove all ck_type tombstones by @jay77721 in https://github.com/infiniflow/ragflow/pull/21317
* fix(parser): leave out the content of <template> elements by @L4XB in https://github.com/infiniflow/ragflow/pull/21284
* fix init admin client status by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21316
* i18n: translate the tr-TR keys added since the last sync by @bakiburakogun in https://github.com/infiniflow/ragflow/pull/20215
* Fix: chat channel name rule by @flyingwhit in https://github.com/infiniflow/ragflow/pull/21294
* Fix: After successfully creating an agent template, navigate to the agent details page. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21328
* fix(agent): support PostgreSQL connection testing by @6ba3i in https://github.com/infiniflow/ragflow/pull/21229
* fix(agent): resolve single-brace query references by @6ba3i in https://github.com/infiniflow/ragflow/pull/21295
* fix(agent): preserve state outputs for workflow branching by @6ba3i in https://github.com/infiniflow/ragflow/pull/21287
* fix(agent): resolve structured outputs in Message components by @6ba3i in https://github.com/infiniflow/ragflow/pull/21311
* Fix: Admin/user login state collision causes 403s and crashes the home page  #20409 by @cike8899 in https://github.com/infiniflow/ragflow/pull/21320
* docs(api): fix dataset parse_type examples and selection rules by @jay77721 in https://github.com/infiniflow/ragflow/pull/21333
* fix(parser): place a table's footer rows after its body by @L4XB in https://github.com/infiniflow/ragflow/pull/21283
* Add typed envelope accessors for ingestion component boundaries by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21273
* fix(chunker): strip the title-family params ManualChunker cannot honour (#20139) by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/20220
* fix(sdk): align Python SDK with RAGFlow 1.0 dataset API by @jay77721 in https://github.com/infiniflow/ragflow/pull/21319
* Fix: Remove the `output_format` field from the form for the parser operator. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21303
* Fix: TypeScript errors in agent test files by @cike8899 in https://github.com/infiniflow/ragflow/pull/21314
* fix(web): unmount form fields when shouldRender is false by @dcc123456 in https://github.com/infiniflow/ragflow/pull/21323
* disable admin available check by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21335
* refactor(admin): move ingestion task listing to EE by @QAQadws in https://github.com/infiniflow/ragflow/pull/21312
* refactor(parser): remove dead ParseResult.Text field and text output path by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21334
* Fix: keep all user agent versions by @wangq8 in https://github.com/infiniflow/ragflow/pull/21343
* refactor(parser): remove dead output_format readers by @jay77721 in https://github.com/infiniflow/ragflow/pull/21336
* Agent: add apply version and delete by version APIs by @wangq8 in https://github.com/infiniflow/ragflow/pull/21352
* fix(mcp): remove unused force_refresh parameter by @6ba3i in https://github.com/infiniflow/ragflow/pull/21349
* fix(openai): pass request reasoning level to AsyncChat so reasoning=5 selects the agentic path by @flyingwhit in https://github.com/infiniflow/ragflow/pull/21342
* fix(web): restore auto-metadata checkbox in reparse dialog by @dcc123456 in https://github.com/infiniflow/ragflow/pull/21346
* refactor(deps): rename ragflow_deps directory to deps by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21345
* Fix: Change the naive setting to naive. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21353
* Fix: export deleteIfEqual for ee by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/21351
* feat(permission): align resource and agent ownership by @buua436 in https://github.com/infiniflow/ragflow/pull/21350
* fix(agent): save incomplete Message drafts and gate Run by @6ba3i in https://github.com/infiniflow/ragflow/pull/21355
* fix(chunker): retain position-only figures in title chunkers by @monsterlag in https://github.com/infiniflow/ragflow/pull/21309
* fix(ingestion): reject disabled model instances during resolution by @Bruce-Yii in https://github.com/infiniflow/ragflow/pull/20207
* CLI: add show model stats by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21376
* fix(infinity): split InsertChunks into batches of 8192 rows by @zzy1017-crypto in https://github.com/infiniflow/ragflow/pull/21380
* fix(agent): save incomplete data operations and gate Run by @6ba3i in https://github.com/infiniflow/ragflow/pull/21363
* feat(ingestion): generate TOC chunks in the Go Extractor by @devYRPauli in https://github.com/infiniflow/ragflow/pull/21090
* Revert "feat(ingestion): generate TOC chunks in the Go Extractor" by @wangq8 in https://github.com/infiniflow/ragflow/pull/21385
* fix(web): show admin error toasts at the top-right position by @dcc123456 in https://github.com/infiniflow/ragflow/pull/21387
* fix(agent): save incomplete Invoke mappings and gate Run by @6ba3i in https://github.com/infiniflow/ragflow/pull/21364
* fix(chat): relocate decision model to agentic settings and allow inheriting it by @dcc123456 in https://github.com/infiniflow/ragflow/pull/21386
* Refactor: Knowledge compilation: move knowledge_compile_docs column backlog_doc_ids and inflight_doc_ids to seperated tables by @wangq8 in https://github.com/infiniflow/ragflow/pull/21381
* fix(agent): save incomplete Compiler drafts and gate Run by @6ba3i in https://github.com/infiniflow/ragflow/pull/21365
* add python-release workflow on gitHub actions webpage by @myf-bee in https://github.com/infiniflow/ragflow/pull/21391
* fix(parser): make IsPDFParseMethod recognize registered external analyzer methods by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21383
* fix(agent): save incomplete input options and gate Run by @6ba3i in https://github.com/infiniflow/ragflow/pull/21366
* fix(files): make only folder names clickable in the file list by @dcc123456 in https://github.com/infiniflow/ragflow/pull/21394
* fix(agent): save incomplete Loop settings and gate Run by @6ba3i in https://github.com/infiniflow/ragflow/pull/21367
* fix(agent): save incomplete Iteration outputs and gate Run by @6ba3i in https://github.com/infiniflow/ragflow/pull/21368
* fix(agent): save incomplete SQL connections and gate Run by @6ba3i in https://github.com/infiniflow/ragflow/pull/21369
* fix(agent): save incomplete search filters and gate Run by @6ba3i in https://github.com/infiniflow/ragflow/pull/21370
* CLI: model group by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21392
* build(deps-dev): bump pillow from 12.0.0 to 13.0.0 in /sdk/python by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/21401
* build(deps-dev): bump vite from 7.3.0 to 7.3.7 in /web by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/21400
* build(deps): bump certifi from 2026.1.4 to 2026.10.19 in /tools/es-to-oceanbase-migration by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/21404
* build(deps): bump aiohttp from 3.14.3 to 3.14.4 by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/21402
* build(deps-dev): bump pillow from 12.3.0 to 13.0.0 by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/21396
* Fix: super admin should not login to normal page by @wangq8 in https://github.com/infiniflow/ragflow/pull/21405
* fix(agent): save incomplete chunker delimiters and gate Run by @6ba3i in https://github.com/infiniflow/ragflow/pull/21371
* feat(permission): enforce tenant and resource access by @buua436 in https://github.com/infiniflow/ragflow/pull/21377
* refactor(cmd): boot standalone DeepDoc server before infrastructure init by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21398
* Delete toc_enhance (a.k.a. Page Index), it has been moved into knowledge compilation by @wangq8 in https://github.com/infiniflow/ragflow/pull/21406
* refactor(admin): remove user assets tabs from the user detail page by @dcc123456 in https://github.com/infiniflow/ragflow/pull/21397
* fix(agent): save incomplete tool entries and gate Run by @6ba3i in https://github.com/infiniflow/ragflow/pull/21372
* Docs: update wording: chunk method -> parsing mode by @wangq8 in https://github.com/infiniflow/ragflow/pull/21408
* fix: remove system variable API routes by @buua436 in https://github.com/infiniflow/ragflow/pull/21410
* fix(agent): save incomplete model selections and gate Run by @6ba3i in https://github.com/infiniflow/ragflow/pull/21373
* fix(deepdoc): preserve complete PDF figures by @jay77721 in https://github.com/infiniflow/ragflow/pull/21390
* Refactor: add migration versions by @wangq8 in https://github.com/infiniflow/ragflow/pull/21395
* fix(agent): save incomplete aggregation groups and gate Run by @6ba3i in https://github.com/infiniflow/ragflow/pull/21374
* fix： Add tag file format instructions in UI by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/21417
* fix(deepdoc): crop clean media previews without context bands by @jay77721 in https://github.com/infiniflow/ragflow/pull/21412
* refactor(parser): drop ParseResult.OutputFormat/Markdown, gate on Produced() by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21414
* fix(document): honour apply_kb so reparse applies the dataset config by @Bruce-Yii in https://github.com/infiniflow/ragflow/pull/20149
* fix(agent): honor Tavily raw content settings by @6ba3i in https://github.com/infiniflow/ragflow/pull/21422
* Fix: when save dataset parser_config, warn user only new files take effects by @wangq8 in https://github.com/infiniflow/ragflow/pull/21416
* Refactor: use warn message when retrying by @wangq8 in https://github.com/infiniflow/ragflow/pull/21420
* add model group hook by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21431
* update base db model by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21437
* fix migration by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21442
* Fix decision_id can be null by @wangq8 in https://github.com/infiniflow/ragflow/pull/21424
* feat: bind agent webhooks to user credentials by @buua436 in https://github.com/infiniflow/ragflow/pull/21421
* perf(ingestion): add indexes for task user and status filters by @QAQadws in https://github.com/infiniflow/ragflow/pull/21379
* fix(deepdoc): keep native PDF text when OCR detection misses it by @jay77721 in https://github.com/infiniflow/ragflow/pull/21399
* fix(deepdoc): resolve conflicting caption labels by confidence by @jay77721 in https://github.com/infiniflow/ragflow/pull/21415
* Fix: keep metadata sorted, so that prompt could be the same by @wangq8 in https://github.com/infiniflow/ragflow/pull/21459
* Bugfix: add youcomsearch agent tool by @flyingwhit in https://github.com/infiniflow/ragflow/pull/21080
* refactor by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21445
* Fix: TypeScript errors in shared components by @cike8899 in https://github.com/infiniflow/ragflow/pull/21458
* fix(agent): resolve Tavily image URLs and prevent overflow by @6ba3i in https://github.com/infiniflow/ragflow/pull/21460
* feat: add Runcrate as a model provider by @heydryft in https://github.com/infiniflow/ragflow/pull/21446
* fix: respect active tenant in service operations by @buua436 in https://github.com/infiniflow/ragflow/pull/21462
* fix(document): persist parser models with the selected pipeline by @jay77721 in https://github.com/infiniflow/ragflow/pull/21418
* fix: increase scheme-safe response header timeout by @buua436 in https://github.com/infiniflow/ragflow/pull/21469
* refactor(agentic_rag): fold internal/rag into internal/agentic_rag by @Caobaining1 in https://github.com/infiniflow/ragflow/pull/21464
* docs: update quickstart docs by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/21304
* docs： Updated Agent documentation, examples, images, links, and formatting. by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/21471
* docs： update Build Docker Image docs by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/21339
* refactor(parser): carry spreadsheet merge geometry through chunkers by @jay77721 in https://github.com/infiniflow/ragflow/pull/21463
* feat(llm): add decision model type and open it to all providers by @dcc123456 in https://github.com/infiniflow/ragflow/pull/21472
* fix(web): gate SystemOne/RAGcon model listing on api key presence by @dcc123456 in https://github.com/infiniflow/ragflow/pull/21475
* Dev: enable LLM_DEBUG for decision model call by @wangq8 in https://github.com/infiniflow/ragflow/pull/21473
* ci : add ttf font to ragflow_deps image by @myf-bee in https://github.com/infiniflow/ragflow/pull/21461
* test: keep EE test placeholders in OSS by @buua436 in https://github.com/infiniflow/ragflow/pull/21476
* fix: add skill_search_test  by @zzy1017-crypto in https://github.com/infiniflow/ragflow/pull/21457
* fix(stagehand): route Browser through shared model drivers by @6ba3i in https://github.com/infiniflow/ragflow/pull/21477
* fix(agent): support real streaming in canvas LLM component by @Sanderhoff-alt in https://github.com/infiniflow/ragflow/pull/21468
* fix(browser): use tenant model factory for all providers by @6ba3i in https://github.com/infiniflow/ragflow/pull/21478
* Fix: The 'option' parameter for the 'begin' operator cannot be empty. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21484
* fix(docker): provision Chrome for Stagehand sessions by @6ba3i in https://github.com/infiniflow/ragflow/pull/21479
* fix(parser/mineru): rescale content_list bbox from 0..1000 to PDF points by @why5602337 in https://github.com/infiniflow/ragflow/pull/21267
* fix(ingestion): contain process-fatal errors and bound parser work by @jay77721 in https://github.com/infiniflow/ragflow/pull/21480
* Fix: The `exesql` operator, when used as an agent tool, does not display mandatory field validation information in the checklist. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21490
* fix(ingestion): support legacy .xls BIFF8 as tag source by @jay77721 in https://github.com/infiniflow/ragflow/pull/21483
* refactor(cmd): make pprof startup testable and split unit/integration tiers by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21491
* test: prepare tenant permission fixtures by @buua436 in https://github.com/infiniflow/ragflow/pull/21493
* Agent: use decision model in Workflow Categorize by @wangq8 in https://github.com/infiniflow/ragflow/pull/21487
* fix: limit API request body size by @buua436 in https://github.com/infiniflow/ragflow/pull/21474
* feat(cli): add admin ingestion log command hooks by @QAQadws in https://github.com/infiniflow/ragflow/pull/21470
* fix: secure channel egress against SSRF by @buua436 in https://github.com/infiniflow/ragflow/pull/21486
* fix(agent): preserve variable assignments across workflow nodes by @6ba3i in https://github.com/infiniflow/ragflow/pull/21494
* fix(reranker): add direct tests for rerank scoring mathFix/reranker and Fix two defects found while testing by @zzy1017-crypto in https://github.com/infiniflow/ragflow/pull/21485
* fix(syncer): preserve context cancellation during task checks by @QAQadws in https://github.com/infiniflow/ragflow/pull/21481
* fix(harness): prepend conversation history when FullChatHistoryAsInput is enabled by @Hrushikesh-ramilla in https://github.com/infiniflow/ragflow/pull/21456
* feat: ingestion dataflow-canvas DSL multi-version (sticky snapshot + missing state) by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21261
* fix: upload Aliyun ASR audio to DashScope storage instead of sending a data URL by @ccclucky in https://github.com/infiniflow/ragflow/pull/21441
* docs: add release date of rc1 &rc2 to the release notes. by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/21506
* Fix: verify decision model by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/21492
* fix: secure MWS model requests by @buua436 in https://github.com/infiniflow/ragflow/pull/21505
* fix: update tool tips of decision model by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/21507
* fix(agent): serialize UserFillUp inputs as objects by @6ba3i in https://github.com/infiniflow/ragflow/pull/21508
* fix(api): send a rerank window that covers top_k in Dify retrieval by @devYRPauli in https://github.com/infiniflow/ragflow/pull/21427
* fix(tokenizer): never send an empty input to the embedding provider by @1BugKiller in https://github.com/infiniflow/ragflow/pull/21439
* docs: Replace the release tag placeholder with v1.0.0-rc2 in quickstart docs by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/21512
* fix(deepdoc): preserve table rows before cell assignment by @jay77721 in https://github.com/infiniflow/ragflow/pull/21489
* Combine RAGFLOW_MCP_ALLOW_PRIVATE_HOSTS into ALLOW_ANY_HOST by @wangq8 in https://github.com/infiniflow/ragflow/pull/21523
* Docs: update canvas to agent by @wangq8 in https://github.com/infiniflow/ragflow/pull/21525
* fix(agent): show meaningful ExecuteSQL connection test feedback by @6ba3i in https://github.com/infiniflow/ragflow/pull/21524
* fix(agent-logs): capture sub-tool invocations by @6ba3i in https://github.com/infiniflow/ragflow/pull/21518
* Docs: canvas -> agent, and delete not used keys by @wangq8 in https://github.com/infiniflow/ragflow/pull/21528
* Docs: canvas -> agent, and delete not used keys by @wangq8 in https://github.com/infiniflow/ragflow/pull/21530
* fix(web): gate DaoXE/RadeonCloud/DemonRoute model listing on api key by @dcc123456 in https://github.com/infiniflow/ragflow/pull/21520
* feat: configure dataset document upload size by @buua436 in https://github.com/infiniflow/ragflow/pull/21517
* fix: secure Azure DevOps connector requests by @buua436 in https://github.com/infiniflow/ragflow/pull/21509
* Fix: make the provider response-header timeout configurable by @ccclucky in https://github.com/infiniflow/ragflow/pull/21434
* fix(web): number citations per message, not per text node by @dcc123456 in https://github.com/infiniflow/ragflow/pull/21531
* docs: updates docs word with latest UI by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/21521
* fix(preview): highlight all spreadsheet chunk ranges by @jay77721 in https://github.com/infiniflow/ragflow/pull/21511
* fix(agent): preserve tool errors and redact logs by @6ba3i in https://github.com/infiniflow/ragflow/pull/21533
* Feature: add apply and delete version for agent by @wangq8 in https://github.com/infiniflow/ragflow/pull/21538
* Feat: Split the agent list page into three separate tabs. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21529
* feat: add CloudGPU as a model provider by @mrhy7176 in https://github.com/infiniflow/ragflow/pull/21543
* feat(mcp): expose configurable listener transport settings by @6ba3i in https://github.com/infiniflow/ragflow/pull/21547
* fix(agent): prevent disconnected Message nodes from executing by @6ba3i in https://github.com/infiniflow/ragflow/pull/21549
* fix(parser): preserve table structure across document formats by @jay77721 in https://github.com/infiniflow/ragflow/pull/21504
* Fix: agent version apply bad by @wangq8 in https://github.com/infiniflow/ragflow/pull/21555
* fix: add tenant context to shared permission tests by @buua436 in https://github.com/infiniflow/ragflow/pull/21556
* test(ingestion): pin that the image parser handoff never downgrades to text by @ccclucky in https://github.com/infiniflow/ragflow/pull/21500
* Feat: Create a compilation template using a dialog on the pipeline canvas page. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21550
* Fix: &gt; Cannot be displayed in the message by @cike8899 in https://github.com/infiniflow/ragflow/pull/21560
* fix: honor STORAGE_IMPL and enforce chat dataset access by @buua436 in https://github.com/infiniflow/ragflow/pull/21548
* fix: handle malformed provider and CLI responses by @buua436 in https://github.com/infiniflow/ragflow/pull/21546
* fix(agent): route failure branches only after errors by @6ba3i in https://github.com/infiniflow/ragflow/pull/21559
* test(nlp): add pagination guard coverage for RetrievalService.Retrieval by @zzy1017-crypto in https://github.com/infiniflow/ragflow/pull/21557
* fix: prevent command and path injection by @buua436 in https://github.com/infiniflow/ragflow/pull/21539
* fix(admin): return pagination totals for user lists by @QAQadws in https://github.com/infiniflow/ragflow/pull/21540
* fix: guard Notion downloads and REST auth redirects by @buua436 in https://github.com/infiniflow/ragflow/pull/21545
* test(nlp): cover OB/VB local rerank scoring by @zzy1017-crypto in https://github.com/infiniflow/ragflow/pull/21541
* fix(agent): prefill block test inputs from settings by @6ba3i in https://github.com/infiniflow/ragflow/pull/21566
* fix: harden SMTP, SQL, and tokenizer boundaries by @buua436 in https://github.com/infiniflow/ragflow/pull/21558
* Fix: set variable value by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/21554
* fix: prevent concurrent state crashes by @buua436 in https://github.com/infiniflow/ragflow/pull/21568
* feat(chat): add SearchApi web search provider by @gabsferreira in https://github.com/infiniflow/ragflow/pull/21563
* fix(parser): emit Docling page positions and real page_count by @Taranum01 in https://github.com/infiniflow/ragflow/pull/21330
* fix(parser): carry OpenDataLoader PDF positions through to parse items by @ccclucky in https://github.com/infiniflow/ragflow/pull/21450
* build(deps): bump certifi from 2025.10.5 to 2026.10.18 in /sdk/python by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/21581
* docs: clarify admin bootstrap password setup by @buua436 in https://github.com/infiniflow/ragflow/pull/21586
* build(deps): bump serialize-javascript and terser-webpack-plugin in /web by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/21582
* Feat/claim decision filter by @Caobaining1 in https://github.com/infiniflow/ragflow/pull/21587
* build(deps): bump fast-uri from 3.1.8 to 3.1.9 in /web by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/21579
* build(deps): bump certifi from 2026.1.4 to 2026.10.18 by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/21580
* fix: align chat permission tests across editions by @buua436 in https://github.com/infiniflow/ragflow/pull/21589
* Fix: Click "Apply" to sync the parameters from the multi-model comparison page to the chat page. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21564
* Fix: remove sso related code by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/21584
* fix(parser): apply the OpenDataLoader request timeout by @ccclucky in https://github.com/infiniflow/ragflow/pull/21527
* fix(retrieval): align pagerank and rank-feature scoring by @qinling0210 in https://github.com/infiniflow/ragflow/pull/21542
* remove docs by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21598
* i18n: translate new tr-TR keys and refresh outdated strings by @bakiburakogun in https://github.com/infiniflow/ragflow/pull/21496
* build(deps): bump github.com/go-jose/go-jose/v4 from 4.1.4 to 4.1.6 by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/21594
* build(deps): bump qs from 6.16.0 to 6.17.0 in /web by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/21595
* update go.sum by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21596
* Apply datasets parser config to all documents by @wangq8 in https://github.com/infiniflow/ragflow/pull/21590
* fix(tokenizer): fold Cyrillic before stemming so Russian keywords match by @ccclucky in https://github.com/infiniflow/ragflow/pull/21433
* fix(ingestion): scale MinerU content_list bboxes for PDF chunk highlights by @Souravrajvi0 in https://github.com/infiniflow/ragflow/pull/21498
* feat: add WorldRouter model provider by @JinJing-tomo in https://github.com/infiniflow/ragflow/pull/21603
* fix(web): use ConfirmDeleteDialog for reparse and parser-config confirmations by @dcc123456 in https://github.com/infiniflow/ragflow/pull/21606
* fix(parser): read PDF bookmarks into remote parse results by @ccclucky in https://github.com/infiniflow/ragflow/pull/21499
* refactor(server): collapse duplicate ingestor concurrency resolver and drop redundant Max prefix by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21588
* Refactor: delete agent browser by @wangq8 in https://github.com/infiniflow/ragflow/pull/21599
* fix(parser): honour the pipeline context in SoMark and Docling PDF calls by @ccclucky in https://github.com/infiniflow/ragflow/pull/21536
* Revert "fix(web): restore auto-metadata checkbox in reparse dialog (#21346)" by @dcc123456 in https://github.com/infiniflow/ragflow/pull/21601
* fix(tokenizer): let the SSE2 loops in ToLower run by @ccclucky in https://github.com/infiniflow/ragflow/pull/21436
* update admin UI by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21605
* docs: Update documentation to match the latest UI and functionality by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/21600
* Fix list chat/agent session paging by @wangq8 in https://github.com/infiniflow/ragflow/pull/21604
* test(sdk): restore and relocate Python SDK tests by @6ba3i in https://github.com/infiniflow/ragflow/pull/21613
* Fix: use the Anthropic base URL placeholder for Anthropic by @SergeevDmitry in https://github.com/infiniflow/ragflow/pull/21411
* CI : web not run api tests by @myf-bee in https://github.com/infiniflow/ragflow/pull/21615
* fix(web): show session action menu only on the active conversation by @dcc123456 in https://github.com/infiniflow/ragflow/pull/21617
* fix(dataset): restore previous embedding model after failed validation by @6ba3i in https://github.com/infiniflow/ragflow/pull/21602
* feat(web): place the Agent tab first in the agents page by @dcc123456 in https://github.com/infiniflow/ragflow/pull/21621
* fix(chat): reject unsupported completion content by @6ba3i in https://github.com/infiniflow/ragflow/pull/21597
* fix(dataset): report incomplete bulk document deletion by @6ba3i in https://github.com/infiniflow/ragflow/pull/21607
* Feat: Modify the alias of a published agent by @cike8899 in https://github.com/infiniflow/ragflow/pull/21620
* fix(web): exclude video file format from initial parser values by @dcc123456 in https://github.com/infiniflow/ragflow/pull/21622
* refactor server main by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21623
* refactor(build): add empty build_ee.sh extension point + guarded hook by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21616
* refactor by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21624
* refactor by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21626
* feat(parser): add media references for on-demand image materialization by @jay77721 in https://github.com/infiniflow/ragflow/pull/21561
* fix(embedding): respect provider batch limits by @6ba3i in https://github.com/infiniflow/ragflow/pull/21610
* Feat: Use a tree select component to display different versions of the pipeline. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21628
* fix：Changed the Chinese labels to “Token Chunker”, “Compiler”, and “Indexer” with consistent capitalization. by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/21629
* fix(parser): recognize a Table of Contents heading when removing a TOC by @L4XB in https://github.com/infiniflow/ragflow/pull/21331
* test(sdk): audit dataset management tests by @6ba3i in https://github.com/infiniflow/ragflow/pull/21619
* fix: isolate analyzer and benchmark worker state by @buua436 in https://github.com/infiniflow/ragflow/pull/21583
* fix: prevent channel error leaks and iterator panics by @buua436 in https://github.com/infiniflow/ragflow/pull/21565
* fix(model): resolve provider names inside the request's tenant by @flyingwhit in https://github.com/infiniflow/ragflow/pull/21495
* fix(storage): reuse MinIO default transport to preserve connection pool by @Sanderhoff-alt in https://github.com/infiniflow/ragflow/pull/21466
* Fix quickstart by @yingfeng in https://github.com/infiniflow/ragflow/pull/21650
* chore(web): remove unused common.figure locale key by @Yuga-60 in https://github.com/infiniflow/ragflow/pull/21646
* update uv.lock by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21636
* fix(parser): emit page positions for SoMark JSON blocks by @Taranum01 in https://github.com/infiniflow/ragflow/pull/21324
* fix(parser): preserve Markdown image references in chunk text by @jay77721 in https://github.com/infiniflow/ragflow/pull/21608
* fix(chunker): honour Python {,n} level patterns and keep long numbered paragraphs as body by @ccclucky in https://github.com/infiniflow/ragflow/pull/21641
* refactor: keep the enterprise code out of the community build by @yuzhichang in https://github.com/infiniflow/ragflow/pull/21614
* Fix: The alias for a historical version of an agent is too long, pushing the title out of view. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21653
* refactor: drop the ee suffix from the edition-neutral permission fixture by @yuzhichang in https://github.com/infiniflow/ragflow/pull/21664
* feat: add Obscurify.ai as a model provider by @tonydavis629 in https://github.com/infiniflow/ragflow/pull/21639
* Fix: correct chat pipeline timing display by @wangq8 in https://github.com/infiniflow/ragflow/pull/21655
* fix(deepdoc): add the first page height when a crop spans pages by @devYRPauli in https://github.com/infiniflow/ragflow/pull/21428
* fix(agent): preserve Switch routing when recreating ElseIf branches by @6ba3i in https://github.com/infiniflow/ragflow/pull/21663
* fix(agent): initialize omitted optional Begin inputs by @6ba3i in https://github.com/infiniflow/ragflow/pull/21652
* docs: Align user guides with current UI and configuration options by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/21631
* Docs: fix wording - restore draft by @wangq8 in https://github.com/infiniflow/ragflow/pull/21660
* fix: accept .tiff files in upload whitelist by @tanishqbaweja in https://github.com/infiniflow/ragflow/pull/21640
* fix(widget): resolve agent citations by chunk id by @Ricky-RC in https://github.com/infiniflow/ragflow/pull/21438
* fix(agent): retain ReAct tool calls for output and memory by @Ricky-RC in https://github.com/infiniflow/ragflow/pull/21444
* feat(agent): inspect model inputs during single-node test runs by @okht in https://github.com/infiniflow/ragflow/pull/21449
* fix: harden credential and input handling by @buua436 in https://github.com/infiniflow/ragflow/pull/21593
* fix: protect provider instance credentials by @buua436 in https://github.com/infiniflow/ragflow/pull/21618
* test(sdk): audit chunk management tests by @6ba3i in https://github.com/infiniflow/ragflow/pull/21635
* test(sdk): audit chat assistant tests by @6ba3i in https://github.com/infiniflow/ragflow/pull/21654
* test(sdk): audit session management tests by @6ba3i in https://github.com/infiniflow/ragflow/pull/21665
* fix: Rename Chinese labels to “Title Chunker”   “Transformer” "parser" by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/21666
* feat(web): ship empty enterprise overlays under web/src/ee by @dcc123456 in https://github.com/infiniflow/ragflow/pull/21667
* fix(ingestion): stop the MinerU /file_parse upload when the run is cancelled by @ccclucky in https://github.com/infiniflow/ragflow/pull/21573
* chore: add EE DeepDoc build-artifact ignore rules by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21634
* Fix: When switching between different pipeline versions on the dataset configuration page, the displayed operator configuration information is incorrect. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21669
* Revert "fix: remove sso related code" by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/21657
* Add ee stub function by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21671
* fix: isolate community test stubs from EE builds by @buua436 in https://github.com/infiniflow/ragflow/pull/21672
* test(sdk): audit document management tests by @6ba3i in https://github.com/infiniflow/ragflow/pull/21633
* test(sdk): audit agent management tests by @6ba3i in https://github.com/infiniflow/ragflow/pull/21668
* test(sdk): audit memory management tests by @6ba3i in https://github.com/infiniflow/ragflow/pull/21670
* test: audit Python SDK message management by @6ba3i in https://github.com/infiniflow/ragflow/pull/21676
* Fix: Canvas variables are not displaying in the agent's version history. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21675
* fix(syncer): bound Jira/Confluence incremental windows with an exclusive next-minute upper bound so updates in the final minute are not lost by @flyingwhit in https://github.com/infiniflow/ragflow/pull/21630
* fix(parser): drop EE-specific references from OSS parse-method comment by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21674
* Fix: File-level pipeline aliases appear too long by @cike8899 in https://github.com/infiniflow/ragflow/pull/21682
* Feature: chat to store and display prompt, usage and time information by @wangq8 in https://github.com/infiniflow/ragflow/pull/21681
* Fix: Entering a letter in the parser tree selection field and then clicking the collapse icon triggers a data message. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21683
* fix(deepdoc): keep body sentences that cite Table N out of table captions by @ccclucky in https://github.com/infiniflow/ragflow/pull/21453
* fix(parser): remove duplicate figures for extracted PDF tables by @jay77721 in https://github.com/infiniflow/ragflow/pull/21673
* Fix: remove retired OpenAI models from the preset model list by @Anandb71 in https://github.com/infiniflow/ragflow/pull/21685
* feat: add Hostinger Router as a model provider by @ricardasbitinas-jpg in https://github.com/infiniflow/ragflow/pull/21419
* Fix: move to stub by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/21678
* Docs: update version docs by @wangq8 in https://github.com/infiniflow/ragflow/pull/21693
* Fix: Prevent the saving of dataset configurations when creating compilation templates. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21692
* feat(parser): hand off EPUB images as media refs by @jay77721 in https://github.com/infiniflow/ragflow/pull/21677
* Fix: let agent Http request component honor ALLOW_ANY_HOST by @wangq8 in https://github.com/infiniflow/ragflow/pull/21688
* Fix: Disable clicking on the exclamation mark icon in ParserTreeSelect by @cike8899 in https://github.com/infiniflow/ragflow/pull/21695
* Fix: Clicking the "Run" button on the workflow canvas should output the content of the current canvas draft. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21698
* Refactor: no owner nickname for agent version name by @wangq8 in https://github.com/infiniflow/ragflow/pull/21699
* feat(parser): parse MinerU 4 output and verify the endpoint by @huang-aoqin in https://github.com/infiniflow/ragflow/pull/21625
* ci(sdk): restore Python SDK p2 tests by @6ba3i in https://github.com/infiniflow/ragflow/pull/21687
* feat(web): isolate enterprise routes, admin pages and header slots in src/ee by @dcc123456 in https://github.com/infiniflow/ragflow/pull/21696
* feat(web): save model instances per card instead of a batch button by @dcc123456 in https://github.com/infiniflow/ragflow/pull/21708
* fix(web): keep whitespace-only option values in select-with-search by @dcc123456 in https://github.com/infiniflow/ragflow/pull/21706
* fix(agentic_rag): keep compiled knowledge tools inside the turn's document scope by @flyingwhit in https://github.com/infiniflow/ragflow/pull/21658
* Fix: attach figure captions by adjacency, not nearest figure centre by @ccclucky in https://github.com/infiniflow/ragflow/pull/21448
* fix: isolate dataset test helpers by edition by @buua436 in https://github.com/infiniflow/ragflow/pull/21707
* fix(harness): avoid re-locking when Batch handles ListNamespacesOp by @flyingwhit in https://github.com/infiniflow/ragflow/pull/21709
* fix(syncer): accept rest api response without size limit by @flyingwhit in https://github.com/infiniflow/ragflow/pull/21702
* fix(parser): keep PaddleOCR figure regions as media items by @ccclucky in https://github.com/infiniflow/ragflow/pull/21452
* Refactor: move reference into message table by @wangq8 in https://github.com/infiniflow/ragflow/pull/21705
* test(retrieval): add integration tests for retrieval and search by @zzy1017-crypto in https://github.com/infiniflow/ragflow/pull/21690
* fix(agent/tool): read the Tushare token from node config over https and drop it from the model schema by @flyingwhit in https://github.com/infiniflow/ragflow/pull/21679
* feat: add cheapaimodel as a model provider by @nicho810 in https://github.com/infiniflow/ragflow/pull/21612
* fix(parser): parse email attachments whose names are RFC 2047 encoded by @L4XB in https://github.com/infiniflow/ragflow/pull/21361
* fix(syncer): keep Confluence and Jira rows inside the watermark minute by @ccclucky in https://github.com/infiniflow/ragflow/pull/21577
* fix(parser): stop MinerU polling when the run is cancelled by @ccclucky in https://github.com/infiniflow/ragflow/pull/21571
* fix(service): detach the skill space cleanup from the request context by @ccclucky in https://github.com/infiniflow/ragflow/pull/21648
* fix ut by @yingfeng in https://github.com/infiniflow/ragflow/pull/21714
* build: build the server from ./cmd so build tags select the DeepDoc entry by @yuzhichang in https://github.com/infiniflow/ragflow/pull/21704
* refactor(api): hyphenate the remaining route path segments by @yuzhichang in https://github.com/infiniflow/ragflow/pull/21730
* Add audit log stub by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21712
* fix(sdk-agent): restore agent API contracts by @6ba3i in https://github.com/infiniflow/ragflow/pull/21731
* fix build.sh by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21738
* update tips string by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21742
* feat(media): harden run media cache lifecycle and limits by @jay77721 in https://github.com/infiniflow/ragflow/pull/21694
* Fix text processing to treat input as array if input is an array by @wangq8 in https://github.com/infiniflow/ragflow/pull/21743
* test: seed the permission fixtures the enterprise policy needs by @yuzhichang in https://github.com/infiniflow/ragflow/pull/21745
* Refactor: retrieval test -> retrieval by @wangq8 in https://github.com/infiniflow/ragflow/pull/21748
* fix(web): bind memory message switch state to the message by @dcc123456 in https://github.com/infiniflow/ragflow/pull/21752
* test(service): give two permission-aware tests the data the EE policy needs by @yuzhichang in https://github.com/infiniflow/ragflow/pull/21751
* fix(deepdoc): keep inline superscripts in reading order by @ccclucky in https://github.com/infiniflow/ragflow/pull/21447
* fix: unify saved provider model listing by @buua436 in https://github.com/infiniflow/ragflow/pull/21753
* Fix: Reverse-engineer the parameter values ​​that determine the degrees of freedom for the chat interface, based on the large model's parameters. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21750
* Update for audit by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21754
* fix(web): localize the Slovak and Czech cross-language options by @ccclucky in https://github.com/infiniflow/ragflow/pull/21757
* fix(web): use plural wording in remove-all-models confirmation dialog by @dcc123456 in https://github.com/infiniflow/ragflow/pull/21762
* Docs: fix token wording by @wangq8 in https://github.com/infiniflow/ragflow/pull/21761
* fix(service): prevent goroutine leaks on SSE stream channel writes by @Sanderhoff-alt in https://github.com/infiniflow/ragflow/pull/21179
* Add ingest log hooks by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21758
* fix: show pending tenant invitations by @buua436 in https://github.com/infiniflow/ragflow/pull/21763
* docs: Aligning field names, configuration paths, and operating steps, and documenting pending image updates by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/21759
* Feat: There should be a notification at the file level when a pipeline is deleted. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21765
* fix(sdk-chat): validate chat configuration by @6ba3i in https://github.com/infiniflow/ragflow/pull/21732
* fix(sdk-chunk): correct chunk API behavior by @6ba3i in https://github.com/infiniflow/ragflow/pull/21733
* fix(sdk-sessions): restore session API contracts by @6ba3i in https://github.com/infiniflow/ragflow/pull/21746
* fix(sdk-agent): preserve implicit listing order by @6ba3i in https://github.com/infiniflow/ragflow/pull/21747
* feat(parser): hand off Office images as media refs by @jay77721 in https://github.com/infiniflow/ragflow/pull/21700
* fix(chunker): drop DOCX custom-delimiter record prefix by @jay77721 in https://github.com/infiniflow/ragflow/pull/21760
* Fix: Adjust the parameter order in the agent operator form. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21770
* fix(sdk-documents): restore document API contracts by @6ba3i in https://github.com/infiniflow/ragflow/pull/21741
* fix(sdk-messages): correct message API behavior by @6ba3i in https://github.com/infiniflow/ragflow/pull/21744
* fix(sdk-dataset): fix dataset validation by @6ba3i in https://github.com/infiniflow/ragflow/pull/21734
* refactor by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21771
* fix(agent): keep uploaded file metadata tied to the selected file by @dakjdakd in https://github.com/infiniflow/ragflow/pull/21189
* fix: show bell for pending tenant invitations by @buua436 in https://github.com/infiniflow/ragflow/pull/21778
* chore(router): gate /pipelines endpoints behind auth by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21776
* add audit hooks by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21774
* fix(infinity): decode tag_feas JSON text on chunk detail reads by @qinling0210 in https://github.com/infiniflow/ragflow/pull/21779
* test: seed the permission data the enterprise policy reads by @yuzhichang in https://github.com/infiniflow/ragflow/pull/21780
* fix(agent): arxiv send data with https instead of http by @flyingwhit in https://github.com/infiniflow/ragflow/pull/21739
* Fix load agent chat history crashed by @wangq8 in https://github.com/infiniflow/ragflow/pull/21786
* docs: update images locations and links by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/21787
* Docs: 1.0.0-rc3 release notes by @wangq8 in https://github.com/infiniflow/ragflow/pull/21789
* Docs: Update version references to v1.0.0-rc3 in READMEs and docs by @asiroliu in https://github.com/infiniflow/ragflow/pull/21788

## New Contributors
* @aniketkrs made their first contribution in https://github.com/infiniflow/ragflow/pull/20880
* @eleven914 made their first contribution in https://github.com/infiniflow/ragflow/pull/20746
* @Tong-bit-art made their first contribution in https://github.com/infiniflow/ragflow/pull/21058
* @SiyuanChenToDo made their first contribution in https://github.com/infiniflow/ragflow/pull/21114
* @ZXLyyds100 made their first contribution in https://github.com/infiniflow/ragflow/pull/21113
* @jperla made their first contribution in https://github.com/infiniflow/ragflow/pull/21105
* @Adam-Dalloul made their first contribution in https://github.com/infiniflow/ragflow/pull/21192
* @StudioPlatforms made their first contribution in https://github.com/infiniflow/ragflow/pull/21185
* @gitlawr made their first contribution in https://github.com/infiniflow/ragflow/pull/21233
* @lemonzoey made their first contribution in https://github.com/infiniflow/ragflow/pull/21193
* @monsterlag made their first contribution in https://github.com/infiniflow/ragflow/pull/21309
* @zzy1017-crypto made their first contribution in https://github.com/infiniflow/ragflow/pull/21380
* @heydryft made their first contribution in https://github.com/infiniflow/ragflow/pull/21446
* @Sanderhoff-alt made their first contribution in https://github.com/infiniflow/ragflow/pull/21468
* @Hrushikesh-ramilla made their first contribution in https://github.com/infiniflow/ragflow/pull/21456
* @1BugKiller made their first contribution in https://github.com/infiniflow/ragflow/pull/21439
* @mrhy7176 made their first contribution in https://github.com/infiniflow/ragflow/pull/21543
* @gabsferreira made their first contribution in https://github.com/infiniflow/ragflow/pull/21563
* @JinJing-tomo made their first contribution in https://github.com/infiniflow/ragflow/pull/21603
* @SergeevDmitry made their first contribution in https://github.com/infiniflow/ragflow/pull/21411
* @Yuga-60 made their first contribution in https://github.com/infiniflow/ragflow/pull/21646
* @tonydavis629 made their first contribution in https://github.com/infiniflow/ragflow/pull/21639
* @tanishqbaweja made their first contribution in https://github.com/infiniflow/ragflow/pull/21640
* @Ricky-RC made their first contribution in https://github.com/infiniflow/ragflow/pull/21438
* @okht made their first contribution in https://github.com/infiniflow/ragflow/pull/21449
* @Anandb71 made their first contribution in https://github.com/infiniflow/ragflow/pull/21685
* @ricardasbitinas-jpg made their first contribution in https://github.com/infiniflow/ragflow/pull/21419
* @nicho810 made their first contribution in https://github.com/infiniflow/ragflow/pull/21612

**Full Changelog**: https://github.com/infiniflow/ragflow/compare/v1.0.0-rc2...v1.0.0-rc3

---

> **Source** [infiniflow/ragflow](https://github.com/infiniflow/ragflow) · `v1.0.0-rc3` · 2026-10-30 · [upstream release](https://github.com/infiniflow/ragflow/releases/tag/v1.0.0-rc3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
