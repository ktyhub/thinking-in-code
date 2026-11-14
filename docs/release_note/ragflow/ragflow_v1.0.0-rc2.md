---
title: "ragflow v1.0.0-rc2"
project: "ragflow"
repo: "infiniflow/ragflow"
tag: "v1.0.0-rc2"
version: "v1.0.0-rc2"
published: "2026-10-16"
type: "major"
lang: "en"
summary: "1.0.0-rc2 is the second release candidate for v1.0.0. This release fixes several issues in rc1 and introduces new features and expanded support."
---

# ragflow v1.0.0-rc2

1.0.0-rc2 is the second release candidate for v1.0.0. This release fixes several issues in rc1 and introduces new features and expanded support.

### Highlights
1. Introduced Agentic mode for chat, replacing the Low, Medium, High, and Ultra thinking levels.
2. Preserved compatibility with existing v1.0.0-rc1 data, allowing direct upgrades.
3. Added support for Team/Me sharing.
4. Added support for model providers DemonRoute and Opper, web search tools Firecrawl and Search1API, and the MinerU 4 model.
5. Added retrieval support for Czech and Slovak.
6. Unified the 12 built-in document parsers with the Pipeline parsers.
7. Added Docker images for the arm64 architecture.

## What's Changed
* refactor(parser): unify spreadsheet tables on a segmented HTML wire by @jay77721 in https://github.com/infiniflow/ragflow/pull/20358
* refactor: use correct ragflow.conf as nginx config file by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20321
* docs:update Docker commands in deployment guides by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/20353
* feat(parser): add opt-in VLM enhancement for images by @jay77721 in https://github.com/infiniflow/ragflow/pull/20166
* refactor(parser_config): make all settings component-scoped (zero flat-key compat) by @xugangqiang in https://github.com/infiniflow/ragflow/pull/20315
* refactor: agent templates by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20364
* Fix: clear GetByID by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/20371
* refa: migrate provider model calls by @buua436 in https://github.com/infiniflow/ragflow/pull/20355
* fix(web): show api key before base url in every model provider form by @dcc123456 in https://github.com/infiniflow/ragflow/pull/20361
* Fix: Unable to delete the last item in the token chunker's delimiter configuration. by @cike8899 in https://github.com/infiniflow/ragflow/pull/20376
* refactor(parser): move native PDF/Office extraction into deepdoc facade by @xugangqiang in https://github.com/infiniflow/ragflow/pull/20273
* docs: align onnxruntime_go binding version in comments with go.mod (v1.29.0) by @xugangqiang in https://github.com/infiniflow/ragflow/pull/20370
* fix: route embeddings through model wrapper by @buua436 in https://github.com/infiniflow/ragflow/pull/20378
* Refactor: explictly use keywords_similarity_weight by @wangq8 in https://github.com/infiniflow/ragflow/pull/20379
* Update CI by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20380
* refactor: remove obsolete chat session compatibility API by @QAQadws in https://github.com/infiniflow/ragflow/pull/20374
* fix(mappings): support any embedding dimension on Elasticsearch by @qinling0210 in https://github.com/infiniflow/ragflow/pull/20368
* refactor: knowledge compilation templates by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20383
* refactor: remove unused py code by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20388
* refactor: remove unused sandbox code by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20389
* Refactor: vector_similarity_weight -> keywords_similarity_weight by @wangq8 in https://github.com/infiniflow/ragflow/pull/20385
* fix(document): clone parser_config to break dataset aliasing; drop dead parser-config helpers by @jay77721 in https://github.com/infiniflow/ragflow/pull/20381
* refactor(web): remove Python backend compatibility code by @dcc123456 in https://github.com/infiniflow/ragflow/pull/20375
* refactor: route audio models through wrappers by @buua436 in https://github.com/infiniflow/ragflow/pull/20387
* Fix Dataset ingestion overview by @QAQadws in https://github.com/infiniflow/ragflow/pull/20190
* refactor: remove unused code and doc by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20392
* Refactor: better message - canvas -> agent by @wangq8 in https://github.com/infiniflow/ragflow/pull/20395
* refactor(workflow): preserve completed parallel results by @6ba3i in https://github.com/infiniflow/ragflow/pull/20391
* fix(cli): drop PENDING as a parameter for message queue commands by @flyingwhit in https://github.com/infiniflow/ragflow/pull/20367
* refactor: move res into internal  by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20390
* fix(file): keep polling until cleared datasets disappear from the list by @dcc123456 in https://github.com/infiniflow/ragflow/pull/20423
* Fix: better GetByID by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/20421
* fix(chunker): attach media context on General markdown and HTML paths (#20141) by @Souravrajvi0 in https://github.com/infiniflow/ragflow/pull/20265
* fix(parser): preserve DOCX XML character references by @jay77721 in https://github.com/infiniflow/ragflow/pull/20359
* Doc: fix errors by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20427
* chore(deps): bump hpack from 4.1.0 to 4.2.0 by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/20434
* Refactor: Delete rag by @wangq8 in https://github.com/infiniflow/ragflow/pull/20425
* chore(deps): bump fast-uri from 3.1.7 to 3.1.8 in /web by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/20433
* chore(deps): bump brace-expansion in /web by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/20435
* chore(deps): bump cryptography from 46.0.7 to 50.0.0 by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/20437
* refactor(workflow): bound parallel task admission by @6ba3i in https://github.com/infiniflow/ragflow/pull/20399
* fix(parser): wire MinerU server_url through Go PDF parser by @Souravrajvi0 in https://github.com/infiniflow/ragflow/pull/19445
* fix: Add the missing env configuration by @myf-bee in https://github.com/infiniflow/ragflow/pull/20444
* refactor: use model tokenizer for rerank by @buua436 in https://github.com/infiniflow/ragflow/pull/20422
* fix(parser): restore picture OCR independently of VLM enhancement by @jay77721 in https://github.com/infiniflow/ragflow/pull/20424
* Refactor: better to use component display name by @wangq8 in https://github.com/infiniflow/ragflow/pull/20431
* refactor: remove python implemention of whatsapp channel by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20432
* refa: route chat calls through ChatModel by @buua436 in https://github.com/infiniflow/ragflow/pull/20441
* Fix: Promote the visual enhancement option to a global setting. by @cike8899 in https://github.com/infiniflow/ragflow/pull/20397
* rename entrypoint-go.sh to entrypoint.sh by @myf-bee in https://github.com/infiniflow/ragflow/pull/20448
* refactor: remove unused python module by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20436
* refactor(deps): use Go dependency downloader as sole entrypoint by @jay77721 in https://github.com/infiniflow/ragflow/pull/20360
* refactor(canvas): reject failed parallel state clones by @6ba3i in https://github.com/infiniflow/ragflow/pull/20443
* refactor: remove unused go functions by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20455
* Drop unscoped (flat) parser_config keys instead of rejecting them by @xugangqiang in https://github.com/infiniflow/ragflow/pull/20445
* refactor(mcp): reject unvalidated redirect destinations by @6ba3i in https://github.com/infiniflow/ragflow/pull/20447
* refactor(agent): avoid unsafe HTTP retries by @6ba3i in https://github.com/infiniflow/ragflow/pull/20456
* refactor(agent): reject non-global destinations by @6ba3i in https://github.com/infiniflow/ragflow/pull/20461
* refactor(agent): bound local output capture by @6ba3i in https://github.com/infiniflow/ragflow/pull/20464
* refactor(components): remove the empty Answer stub by @6ba3i in https://github.com/infiniflow/ragflow/pull/20454
* chore(deps): bump sharp from 0.35.2 to 0.35.5 in /internal/channels/whatsapp-gateway by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/20471
* docs(web): remove stale UmiJS references after Vite migration by @sunshanhui in https://github.com/infiniflow/ragflow/pull/20467
* add nats monitoring port variable in docker-compose-base.yml by @myf-bee in https://github.com/infiniflow/ragflow/pull/19664
* Fix: Text with swapped keyword similarity weights by @cike8899 in https://github.com/infiniflow/ragflow/pull/20472
* Fix: The separator line causes the font size of the agent message error text to be too large. by @cike8899 in https://github.com/infiniflow/ragflow/pull/20462
* fix(metadata): show empty state when no metadata keys exist by @dcc123456 in https://github.com/infiniflow/ragflow/pull/20428
* refactor(chat): push pagination down to ListByOwnerIDs by @flyingwhit in https://github.com/infiniflow/ragflow/pull/20450
* refactor(canvas): preserve parallel item state across resumes by @6ba3i in https://github.com/infiniflow/ragflow/pull/20440
* fix: add json output alias on Retrieval node by @flyingwhit in https://github.com/infiniflow/ragflow/pull/20394
* Refactor: use type_kwd instead of knowledge_graph_kwd by @wangq8 in https://github.com/infiniflow/ragflow/pull/20475
* Port agentic RAG to Go, expose it as a chat mode, and add per-dialog failover by @yuzhichang in https://github.com/infiniflow/ragflow/pull/20503
* feat(agent,ingestion): carry the grep/bm25 contracts and index declared titles by @yuzhichang in https://github.com/infiniflow/ragflow/pull/20542
* chore: fix some function names in comments by @somasoil in https://github.com/infiniflow/ragflow/pull/20550
* chore(deps): bump urllib3 from 2.7.0 to 2.8.0 by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/20538
* docs: fix ui words by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/20426
* fix(citation): open external web documents directly by @dcc123456 in https://github.com/infiniflow/ragflow/pull/20452
* refactor(agent): preserve Stagehand client leases by @6ba3i in https://github.com/infiniflow/ragflow/pull/20451
* refa: simplify model resolution and rerank calls by @buua436 in https://github.com/infiniflow/ragflow/pull/20457
* docs: add DemonRoute to supported model providers by @Harsh28-raj in https://github.com/infiniflow/ragflow/pull/20548
* Refactor: remove API_PROXY_SCHEME by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/20470
* feat: add Opper as a model provider by @Felixkw12 in https://github.com/infiniflow/ragflow/pull/20577
* Doc: remove supported models by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20584
* fix(api): keep a parsing progress of 0.96 from being reported as 1.0 by @SashaMIT in https://github.com/infiniflow/ragflow/pull/20414
* docs: document the Firecrawl web search provider in the HTTP API reference by @JuampiHernandez in https://github.com/infiniflow/ragflow/pull/20479
* WorkerPool resize overspawns after shrinking an idle pool by @Taranum01 in https://github.com/infiniflow/ragflow/pull/20490
* fix(wiki): preserve external link navigation by @Mnilax in https://github.com/infiniflow/ragflow/pull/20517
* fix(go-agent): read Keenable result content from snippet by @errmakov in https://github.com/infiniflow/ragflow/pull/20480
* fix(elasticsearch): propagate search failures with index context by @quifox in https://github.com/infiniflow/ragflow/pull/20546
* docs: fix DOCX parser test link after move to deepdoc/parser/office by @pratikgx in https://github.com/infiniflow/ragflow/pull/20521
* fix(agent): remove obsolete download info toggle by @6ba3i in https://github.com/infiniflow/ragflow/pull/20588
* refactor(search): push pagination down to ListByOwnerIDs by @flyingwhit in https://github.com/infiniflow/ragflow/pull/20386
* fix(storage): URL-encode S3 and OSS copy sources by @AnnaSuSu in https://github.com/infiniflow/ragflow/pull/20504
* fix(cli): refresh filesystem providers when switching API servers by @helloxjade in https://github.com/infiniflow/ragflow/pull/20498
* fix(web): keep pending filter selections when the filter options refresh by @Xavierando in https://github.com/infiniflow/ragflow/pull/20581
* chore(deps): bump dompurify from 3.3.2 to 3.4.16 in /web by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/20589
* chore(deps): bump @vue/server-renderer and vue in /web by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/20591
* chore(deps): bump tinypool and oxfmt in /web by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/20593
* chore(deps): bump multidict from 6.7.0 to 6.9.1 by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/20590
* chore(deps): bump werkzeug from 3.1.8 to 3.1.9 by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/20592
* Fix: Clicking the batch parsing button for the dataset file produces no response. by @cike8899 in https://github.com/infiniflow/ragflow/pull/20602
* Refactor: knowledge compilation field name refactor by @wangq8 in https://github.com/infiniflow/ragflow/pull/20587
* fix(wiki): use plain-text summaries by @QAQadws in https://github.com/infiniflow/ragflow/pull/20598
* feat: add SiliconFlow model catalog entries by @buua436 in https://github.com/infiniflow/ragflow/pull/20596
* Go: go mod tidy by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20605
* fix: backfill tenant model max tokens in rc2 by @buua436 in https://github.com/infiniflow/ragflow/pull/20601
* Remove pullfrog by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20615
* fix(agent): port Sofya search tool to Go by @yusufgurdogan in https://github.com/infiniflow/ragflow/pull/20410
* fix: reject non-string metadata selector document IDs by @helloxjade in https://github.com/infiniflow/ragflow/pull/20540
* serenedb: stop compiling the similarity threshold into the ANN scan by @deadtrickster in https://github.com/infiniflow/ragflow/pull/20222
* perf(tokenizer): memoize term lookups and precompile per-token regexes by @qinling0210 in https://github.com/infiniflow/ragflow/pull/20610
* i18n(web): clarify agent citation switch label across locales by @dcc123456 in https://github.com/infiniflow/ragflow/pull/20607
* Fix: Align the content of the `th` element within the chunk to the left. by @cike8899 in https://github.com/infiniflow/ragflow/pull/20609
* Fix: disable agent citation, should not show citation files by @wangq8 in https://github.com/infiniflow/ragflow/pull/20616
* fix(chat): honor the exact id and name filters when listing chats by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/19962
* feat(vastbase): add Vastbase G100 document engine support with go by @FengYikai710 in https://github.com/infiniflow/ragflow/pull/20419
* Fix: remove raptor and graphrag when migrate parse config by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/20599
* feat(chat): add Search1API web search provider by @fatwang2 in https://github.com/infiniflow/ragflow/pull/20561
* fix(agentic): give web evidence stable content identities by @quifox in https://github.com/infiniflow/ragflow/pull/20547
* fix(agent): accept a string delimiter in StringTransform merge mode by @ekalinin in https://github.com/infiniflow/ragflow/pull/20331
* fix(web): regroup model instance card actions into the header by @dcc123456 in https://github.com/infiniflow/ragflow/pull/20636
* fix(web): keep API key modal within viewport with sticky table header by @dcc123456 in https://github.com/infiniflow/ragflow/pull/20635
* fix(canvas): send a status message without feeding it to the next node by @ondery in https://github.com/infiniflow/ragflow/pull/20600
* Refactor : Clean up compose and env file by @wangq8 in https://github.com/infiniflow/ragflow/pull/20640
* fix(agent): reject webhook body read failures by @T1mn in https://github.com/infiniflow/ragflow/pull/20618
* fix(agent): stop polling expired webhook traces by @T1mn in https://github.com/infiniflow/ragflow/pull/20619
* docs: mark macOS as temporarily unsupported for the Go backend by @xugangqiang in https://github.com/infiniflow/ragflow/pull/20642
* Doc: macOS(arm64) not supported now by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20644
* fix(ingestion): persist and honor global vision settings by @jay77721 in https://github.com/infiniflow/ragflow/pull/20474
* fix(api): persist tag_kwd on Go AddChunk (#20138) by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/20146
* feat(parser): unify BuiltIn and Pipeline parser selection into one dropdown by @xugangqiang in https://github.com/infiniflow/ragflow/pull/20603
* fix(agent): render and constrain generated PDF content by @6ba3i in https://github.com/infiniflow/ragflow/pull/20604
* chore(deps): bump music-metadata from 11.13.0 to 11.16.1 in /internal/channels/whatsapp-gateway by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/20643
* fix(infinity): restore deprecated knowledge-compilation columns in the chunk mapping by @qinling0210 in https://github.com/infiniflow/ragflow/pull/20646
* Fix: remove duplicate list function by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/20648
* feat(agentic_rag): add metadata_search tool to eino smart-reasoning path by @Caobaining1 in https://github.com/infiniflow/ragflow/pull/20645
* Bump Infinity to v0.7.4 by @qinling0210 in https://github.com/infiniflow/ragflow/pull/20652
* fix(web): temporarily hide the verify button on the draft model card by @dcc123456 in https://github.com/infiniflow/ragflow/pull/20653
* Fix: check retrieval node required fields by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/20638
* fix(web): remove the failover models field from chat settings by @yuzhichang in https://github.com/infiniflow/ragflow/pull/20661
* fix(agent): preserve attachment-only Message output by @6ba3i in https://github.com/infiniflow/ragflow/pull/20655
* fix(mcp): prevent managed token exposure by @6ba3i in https://github.com/infiniflow/ragflow/pull/20639
* fix(wiki): remove duplicate Markdown storage by @QAQadws in https://github.com/infiniflow/ragflow/pull/20597
* fix(name): unify case-insensitive entity name dedup and rename handling by @flyingwhit in https://github.com/infiniflow/ragflow/pull/20594
* fix(web): disable the create-key button once 16 API keys exist by @dcc123456 in https://github.com/infiniflow/ragflow/pull/20665
* Doc: fix readme by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20663
* fix(parser): honor the PDF page range for the VLM and plain_text methods by @devYRPauli in https://github.com/infiniflow/ragflow/pull/20336
* fix(chunk): persist tag_kwd on Go UpdateChunk (#20138) by @Xavierando in https://github.com/infiniflow/ragflow/pull/20536
* Docs: fix docker ps/logs by @wangq8 in https://github.com/infiniflow/ragflow/pull/20671
* Fix:  Modify the style of the "Built-in" label in the ParserSelect dropdown menu. by @cike8899 in https://github.com/infiniflow/ragflow/pull/20669
* Remove opencloud9 support, since Go version is released by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20674
* feat(agent): add Search1API search and crawl tools by @fatwang2 in https://github.com/infiniflow/ragflow/pull/20666
* fix: implement CheckConnection and OCRFile for local MinerU driver by @why5602337 in https://github.com/infiniflow/ragflow/pull/20459
* fix(embedding): reject mismatched provider response counts by @kassdinzheng123 in https://github.com/infiniflow/ragflow/pull/20662
* fix(nlp): restore Infinity-safe escaping for synonyms and special chars by @li872 in https://github.com/infiniflow/ragflow/pull/20572
* Fix: The introductory information for the built-in parsing methods is no longer accessible. by @cike8899 in https://github.com/infiniflow/ragflow/pull/20675
* fix(parser): pass do_ocr and pdf_backend to Docling Serve by @BilalAtique in https://github.com/infiniflow/ragflow/pull/20529
* Fix: delete not found message should report error by @wangq8 in https://github.com/infiniflow/ragflow/pull/20678
* Fix: remove rank in mws config by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/20676
* perf(docker): optimize MySQL healthcheck parameters to eliminate startup delay by @MOHITPRADHAN35 in https://github.com/infiniflow/ragflow/pull/20482
* Update docker compose base for mysql by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20682
* fix: enforce dataset access for document detail and metadata summary by @QAQadws in https://github.com/infiniflow/ragflow/pull/20649
* fix(deepdoc): correct DLA channel order (BGR->RGB) and keep per-class NMS to match Python serving by @xugangqiang in https://github.com/infiniflow/ragflow/pull/20637
* fix(agentic_rag): number citations from a per-turn evidence registry by @Caobaining1 in https://github.com/infiniflow/ragflow/pull/20677
* Refactor: refine chat message to use question only by @wangq8 in https://github.com/infiniflow/ragflow/pull/20654
* fix: correct ingestion retry handling and enforce chunk permissions by @QAQadws in https://github.com/infiniflow/ragflow/pull/20658
* CI: optimize go build cache by @myf-bee in https://github.com/infiniflow/ragflow/pull/20684
* fix(parser): drop the BOM and decode JSON and Markdown input in Go parsers by @huiq777 in https://github.com/infiniflow/ragflow/pull/20225
* fix(agent): allow Invoke variables to use a reference or a literal by @pangwangshu in https://github.com/infiniflow/ragflow/pull/20634
* Doc: remove dead links to deleted Supported Models page by @shrxyas-246 in https://github.com/infiniflow/ragflow/pull/20692
* feat(parser): support genuine BIFF8 XLS workbooks by @Ricardo-M-L in https://github.com/infiniflow/ragflow/pull/20573
* refa: centralize Go resource permissions by @buua436 in https://github.com/infiniflow/ragflow/pull/20657
* CLI file timestamps reject offsets and discard milliseconds by @Taranum01 in https://github.com/infiniflow/ragflow/pull/20491
* fix(parser): resolve EPUB manifest hrefs as URLs by @huiq777 in https://github.com/infiniflow/ragflow/pull/20228
* feat(mcp): allow private MCP server hosts via deployment allowlist by @techpreneur-a in https://github.com/infiniflow/ragflow/pull/20571
* feat(web): show built-in pipelines in the agents list as read-only items by @xugangqiang in https://github.com/infiniflow/ragflow/pull/20656
* Fix: agent code exec test run does not work by @wangq8 in https://github.com/infiniflow/ragflow/pull/20705
* fix(dataset): reject an ingestion log_type other than dataset or file by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/19961
* perf(knowledge_compiler): opt out of real-time retry backoff in failure-path unit tests by @xugangqiang in https://github.com/infiniflow/ragflow/pull/20708
* fix(deepdoc): stop PDF caption merge from dropping text and figures by @jay77721 in https://github.com/infiniflow/ragflow/pull/20650
* Fix: Limit the pipeline canvas to a maximum of one extractor operator. by @cike8899 in https://github.com/infiniflow/ragflow/pull/20711
* fix(parser): run image VLM when selected as parse_method by @flyingwhit in https://github.com/infiniflow/ragflow/pull/20668
* Go: refactor by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20717
* feat: expose dataset connector sync logs by @buua436 in https://github.com/infiniflow/ragflow/pull/20704
* Go: run first scheduled task immediately on Start instead of waiting one Interval by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20714
* CLI dataset document pagination is sent as HTTP headers by @Taranum01 in https://github.com/infiniflow/ragflow/pull/20493
* Fix: On the multi-model comparison page, the "Apply," "Delete," and "Add" buttons should be disabled whenever any of the models is generating output. by @cike8899 in https://github.com/infiniflow/ragflow/pull/20723
* Fix: ensure list datasetConnector result distinct. by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/20710
* refa: centralize agent canvas permissions by @buua436 in https://github.com/infiniflow/ragflow/pull/20709
* fix(wiki): tokenize GetWikiGraph keyword to match pre-tokenized content_ltks by @qinling0210 in https://github.com/infiniflow/ragflow/pull/20722
* fix(deepdoc): judge PDF header/footer and TOC removal against the full document instead of the parsed page subset by @flyingwhit in https://github.com/infiniflow/ragflow/pull/20719
* fix(chat): cap TTS text at 500 characters instead of 500 bytes by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/20344
* fix(agent): cap Wikipedia extracts by runes instead of bytes by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/19959
* fix(chunk): count merge budget in runes, not bytes by @kassdinzheng123 in https://github.com/infiniflow/ragflow/pull/20690
* fix(docker): use the SeekDB 1.4 data directory by @hnwyllmm in https://github.com/infiniflow/ragflow/pull/20732
* Go: refactor by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20706
* fix(agentic): preserve final answers after conversation reloads by @6ba3i in https://github.com/infiniflow/ragflow/pull/20718
* feat(go): MonkeyOCR env keys and tenant provisioning by @Souravrajvi0 in https://github.com/infiniflow/ragflow/pull/20468
* CI: optimize, Change the ci build global lock to a host lock by @myf-bee in https://github.com/infiniflow/ragflow/pull/20729
* Feat: Display the built-in pipeline canvas in read-only mode. by @cike8899 in https://github.com/infiniflow/ragflow/pull/20742
* fix(dataset): treat empty avatar as a clear signal on update by @flyingwhit in https://github.com/infiniflow/ragflow/pull/20724
* fix(agent): write version_title in CreateAgentSession so Explore sessions keep it by @flyingwhit in https://github.com/infiniflow/ragflow/pull/20739
* Fix: move model_provider function to separate file by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/20743
* fix(retrieval): search each tenant index once to stop duplicate chunks by @vedjaw in https://github.com/infiniflow/ragflow/pull/20731
* docs(engine): remove stale README by @QAQadws in https://github.com/infiniflow/ragflow/pull/20398
* refactor: Update entrypoint.sh by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20744
* Fix/syncer timer generation guard by @poijygfdyy in https://github.com/infiniflow/ragflow/pull/20725
* feat(parser): emit structured TableData instead of HTML for tables by @xugangqiang in https://github.com/infiniflow/ragflow/pull/20741
* fix(parser): drop hard image edge/pixel limit, add opt-in raster byte ceiling by @xugangqiang in https://github.com/infiniflow/ragflow/pull/20745
* feat(dataset-overview): show datasource sync logs on dataset logs page by @dcc123456 in https://github.com/infiniflow/ragflow/pull/20738
* docs: update migration by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/20476
* feat(setting-model): disable XunFei Spark provider configuration by @dcc123456 in https://github.com/infiniflow/ragflow/pull/20753
* Go: fix xunfei model by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20757
* Go: refactor model provider by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20771
* Go: use unified ToInt by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20772
* fix(pageindex): stop sampling the structure graph and emit rows in source order by @qinling0210 in https://github.com/infiniflow/ragflow/pull/20750
* Feat: Add a toggle switch for the auto-question feature of the extractor operator. by @cike8899 in https://github.com/infiniflow/ragflow/pull/20748
* fix(retrieval): preserve metadata filters during agentic thinking by @6ba3i in https://github.com/infiniflow/ragflow/pull/20707
* fix(agent-logs): persist failed execution status by @6ba3i in https://github.com/infiniflow/ragflow/pull/20752
* refactor(parser): split image OCR into an independent switch by @jay77721 in https://github.com/infiniflow/ragflow/pull/20683
* fix(chunker): preserve punctuation in general TXT and DOCX chunks by @jay77721 in https://github.com/infiniflow/ragflow/pull/20751
* fix(chat): preserve images across reasoning and conversation history by @6ba3i in https://github.com/infiniflow/ragflow/pull/20728
* docker compose: add enable admin parameter by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20791
* refactor by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20783
* docs: fix dead links to pages removed in the Go rewrite by @12britz in https://github.com/infiniflow/ragflow/pull/20758
* fix(web): restrict spreadsheet parser methods to supported options by @jay77721 in https://github.com/infiniflow/ragflow/pull/20749
* Fix Redis INFO memory reporting for Tair-compatible services by @Souravrajvi0 in https://github.com/infiniflow/ragflow/pull/19905
* Go: handle llama-server over-limit rejections in embed and rerank by @yuzhichang in https://github.com/infiniflow/ragflow/pull/20784
* Go: refactor by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20795
* Fix: The general parsing method for legacy data at the file level fails to display. by @cike8899 in https://github.com/infiniflow/ragflow/pull/20794
* docs: Removed the description of API_PROXY_SCHEME and synchronized the README files by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/20756
* doc: update development.md by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20799
* Go: unify tofloat by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20797
* Refactor commends and lib by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20801
* Fix: Validate the value of the 'topn' field on the dataset configuration page when the 'auto keyword' feature of the extractor operator is enabled. by @cike8899 in https://github.com/infiniflow/ragflow/pull/20805
* docs: fix stale and misleading links by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/20804
* fix: S3-compatible storage path-style addressing by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20802
* Fix: update by id without first by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/20755
* feat(ingestion): add progress fraction reporting to VisionEnhancement and cropImageChunks by @jay77721 in https://github.com/infiniflow/ragflow/pull/20800
* refactor: remove unused scripts by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20813
* chore(ci): remove obsolete sandbox plumbing by @6ba3i in https://github.com/infiniflow/ragflow/pull/20811
* refactor(sandbox): remove obsolete configuration by @6ba3i in https://github.com/infiniflow/ragflow/pull/20809
* Fix: Even though a vision model has been configured, uploading a video still triggers a notification stating that no vision model is configured. by @cike8899 in https://github.com/infiniflow/ragflow/pull/20816
* docs: sync the Elasticsearch-only vm.max_map_count step across README translations by @yuee3 in https://github.com/infiniflow/ragflow/pull/20736
* docs(sandbox): correct external deployment guidance by @6ba3i in https://github.com/infiniflow/ragflow/pull/20810
* Fix Agentic RAG does not do web search by @wangq8 in https://github.com/infiniflow/ragflow/pull/20793
* fix: cap chunk list page size when filtering by chunk ids by @dcc123456 in https://github.com/infiniflow/ragflow/pull/20817
* Fix: Agent - Start Component - When an input variable is set to optional: if a value is entered and then deleted, clicking "Next" triggers a "required field" error. by @cike8899 in https://github.com/infiniflow/ragflow/pull/20820
* fix(chunker): preserve PDF and Markdown sentence delimiters by @jay77721 in https://github.com/infiniflow/ragflow/pull/20812
* fix(parser): keep local MinerU images, positions, and API URL by @Souravrajvi0 in https://github.com/infiniflow/ragflow/pull/20721
* refactor(deepdoc): move testdata fetch into native and relocate script to tools/scripts by @xugangqiang in https://github.com/infiniflow/ragflow/pull/20822
* fix(ingestion): preserve typed metadata during merges by @jay77721 in https://github.com/infiniflow/ragflow/pull/20808
* fix(infinity): make pool max idle connections configurable via INFINITY_POOL_MAX_IDLE by @qinling0210 in https://github.com/infiniflow/ragflow/pull/20831
* fix(deepdoc): keep an attached figure caption on its own line by @jay77721 in https://github.com/infiniflow/ragflow/pull/20819
* docs: fix incorrect image references by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/20835
* Fix: agentic rag use the previous answer when LLM is bad by @wangq8 in https://github.com/infiniflow/ragflow/pull/20829
* fix(ingestion): preserve spreadsheet identity in rebuilt chunks by @jay77721 in https://github.com/infiniflow/ragflow/pull/20825
* Revert "fix(cli): drop PENDING as a parameter for message queue commands" by @flyingwhit in https://github.com/infiniflow/ragflow/pull/20823
* fix(chunker): slice General split positions by visible-text ratio by @jay77721 in https://github.com/infiniflow/ragflow/pull/20827
* fix(memory): keep unparseable invalid_at null so memories stay valid by @anneheartrecord in https://github.com/infiniflow/ragflow/pull/20773
* Refactor: No more reference files by @wangq8 in https://github.com/infiniflow/ragflow/pull/20837
* fix: unstable tests by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20838
* Fix: No connecting line appeared after adding an iteration operator following a conditional operator. by @cike8899 in https://github.com/infiniflow/ragflow/pull/20833
* Fix: handle int tenant_*_id by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/20830
* fix(config): mask credentials in Go startup configuration logs by @QAQadws in https://github.com/infiniflow/ragflow/pull/20796
* fix(web): recognize Lexical-normalized artifact links for wiki naviga… by @dcc123456 in https://github.com/infiniflow/ragflow/pull/20828
* fix(nlp): re-enable the datasetnav integration test in the integration CI job by @Caobaining1 in https://github.com/infiniflow/ragflow/pull/20740
* fix(deepdoc): clamp TSR/DLA boxes to image bounds at the analyzer exit by @xugangqiang in https://github.com/infiniflow/ragflow/pull/20836
* fix(web): make Google Drive "My Drive emails" optional for folder-only sync by @errmakov in https://github.com/infiniflow/ragflow/pull/20528
* feat(parser): support MinerU 4.0 V1 HTTP API by @Souravrajvi0 in https://github.com/infiniflow/ragflow/pull/20712
* fix: add buffer-length check in text.c (CWE-120) by @anupamme in https://github.com/infiniflow/ragflow/pull/20803
* fix(file): shorten long URL-upload filenames without dropping the extension by @Jinzhengxu in https://github.com/infiniflow/ragflow/pull/20814
* fix(es-to-oceanbase): preserve array values during JSON encoding by @lorenzozanee in https://github.com/infiniflow/ragflow/pull/20695
* Fix xunfei link by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20849
* fix: correct multi-tenant retrieval scope by @QAQadws in https://github.com/infiniflow/ragflow/pull/20824
* feat(parser): require a text source for images when vision enhancement is off by @jay77721 in https://github.com/infiniflow/ragflow/pull/20839
* fix(agent): finish responses within configured tool budgets by @6ba3i in https://github.com/infiniflow/ragflow/pull/20847
* fix(file): reject moving a folder together with its descendants by @flyingwhit in https://github.com/infiniflow/ragflow/pull/20848
* fix(infinity): drop row keys that are not table columns by @devYRPauli in https://github.com/infiniflow/ragflow/pull/20513
* Add Demon Route as an LLM provider by @demonroute2 in https://github.com/infiniflow/ragflow/pull/20853
* fix(deepdoc): preserve PDF captions labeled as references by @lorenzozanee in https://github.com/infiniflow/ragflow/pull/20767
* docs: Update the CLI documentation to reflect the actual implementation. by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/20821
* fix(service): keep citations and reference for a no-answer reply by @Caobaining1 in https://github.com/infiniflow/ragflow/pull/20862
* fix(knowledge_compile): preserve structure merge metadata by @lorenzozanee in https://github.com/infiniflow/ragflow/pull/20858
* fix: accept .markdown files in upload whitelist by @heranliu in https://github.com/infiniflow/ragflow/pull/20850
* fix(web): allow pipeline methods to save in change-parser dialog by @dcc123456 in https://github.com/infiniflow/ragflow/pull/20864
* Fix: Remove the switch for deleting the original doc/html/markdown directories in the parser operator. by @cike8899 in https://github.com/infiniflow/ragflow/pull/20866
* Feat/migrates navigation tools form old mode to agentic mode by @Caobaining1 in https://github.com/infiniflow/ragflow/pull/20735
* fix(sandbox): reject nonpositive local output limits by @6ba3i in https://github.com/infiniflow/ragflow/pull/20874
* refactor(parser): bake merged-cell geometry into the structured TableData grid by @xugangqiang in https://github.com/infiniflow/ragflow/pull/20832
* fix(api): web API update by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20870
* docs: standardize parameter names in http api docs by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/20868
* Refactor: move rag prompts by @wangq8 in https://github.com/infiniflow/ragflow/pull/20873
* feat: migrate resource checks to permission layer by @buua436 in https://github.com/infiniflow/ragflow/pull/20792
* Feat: Access the "Naive" and "Agentic" menu options on the chat page. by @cike8899 in https://github.com/infiniflow/ragflow/pull/20877
* fix(sync): preserve published blobs and retry incomplete revisions by @dakjdakd in https://github.com/infiniflow/ragflow/pull/20627
* fix(artifact): reject non-integer top_n in wiki graph route (#20006) by @RerankerGuo in https://github.com/infiniflow/ragflow/pull/20483
* fix(sync): reject incomplete Google Drive snapshots before pruning by @dakjdakd in https://github.com/infiniflow/ragflow/pull/20629
* fix(syncer): honor ALLOW_ANY_HOST for private database hosts by @ondery in https://github.com/infiniflow/ragflow/pull/20574
* fix letter case issue by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20878
* update go.mod by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20879
* fix(admin): restore saved settings when switching sandbox executors by @6ba3i in https://github.com/infiniflow/ragflow/pull/20863
* fix: seed dataset owner membership in artifact tests by @buua436 in https://github.com/infiniflow/ragflow/pull/20886
* fix(syncer): fail closed on non-positive connector refresh freq by @jay77721 in https://github.com/infiniflow/ragflow/pull/20871
* Fix: Add SANDBOX_EXECUTOR_MANAGER_ALLOW_UNAUTHENTICATED by @wangq8 in https://github.com/infiniflow/ragflow/pull/20889
* fix(ingestion): fetch a PDF source before image admission in VLM enhancement by @jay77721 in https://github.com/infiniflow/ragflow/pull/20846
* fix(syncer): use the S3-compatible client for S3 sources set to compatible mode by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/20342
* fix(sandbox): compile the local provider on macOS and the BSDs by @wenqiw777 in https://github.com/infiniflow/ragflow/pull/20334
* Go model: fix MinerU local server URL decoding by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20891
* fix(agent): fall back to the default email when PubMed email is blank by @ekalinin in https://github.com/infiniflow/ragflow/pull/20509
* fix(agent): honor sampler enable flags in Go LLM and Agent components by @ekalinin in https://github.com/infiniflow/ragflow/pull/20259
* feat(web): preview source document from chunk reference images  by @dcc123456 in https://github.com/infiniflow/ragflow/pull/20895
* fix(web): expand citation source-locate to all previewable file types by @dcc123456 in https://github.com/infiniflow/ragflow/pull/20898
* Fix: Connecting other nodes after the message node is prohibited. by @cike8899 in https://github.com/infiniflow/ragflow/pull/20897
* fix: allow declining pending tenant invitations by @buua436 in https://github.com/infiniflow/ragflow/pull/20896
* fix(chunker): preserve separators between JSON items by @lorenzozanee in https://github.com/infiniflow/ragflow/pull/20857
* fix(chunker): preserve whole lines in PDF text previews by @jay77721 in https://github.com/infiniflow/ragflow/pull/20890
* fix(storage): prevent MinIO client reconnect races by @6ba3i in https://github.com/infiniflow/ragflow/pull/20888
* fix(agent): apply cross_languages in Go Retrieval memory mode by @errmakov in https://github.com/infiniflow/ragflow/pull/20328
* Refactor: log name without port by @wangq8 in https://github.com/infiniflow/ragflow/pull/20905
* Refactor: Delete not used APIs by @wangq8 in https://github.com/infiniflow/ragflow/pull/20894
* fix(web): drop UNSTART running status and align status labels by @dcc123456 in https://github.com/infiniflow/ragflow/pull/20904
* Fix: The document-level graph search box is not displaying correctly. by @cike8899 in https://github.com/infiniflow/ragflow/pull/20899
* Fix: apply docID filter by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/20908
* fix: scope ingestion documents and reused tasks to the dataset by @QAQadws in https://github.com/infiniflow/ragflow/pull/20806
* Fix: Update the prompt text for file types not supported by the current pipeline. by @cike8899 in https://github.com/infiniflow/ragflow/pull/20911
* fix(harness): return empty iterator when seek clock exceeds event log by @poijygfdyy in https://github.com/infiniflow/ragflow/pull/20726
* docs(chat): describe the two remaining thinking modes by @Caobaining1 in https://github.com/infiniflow/ragflow/pull/20916
* Fix: Validate the parameters of the variable assignment operator. by @cike8899 in https://github.com/infiniflow/ragflow/pull/20915
* fix(chunk): keep the chunk list inside the requested document scope by @qinling0210 in https://github.com/infiniflow/ragflow/pull/20914
* refactor(deps): split dependency download into two Python scripts by @xugangqiang in https://github.com/infiniflow/ragflow/pull/20861
* refactor(cmd): parse CLI flags with the stdlib flag package by @xugangqiang in https://github.com/infiniflow/ragflow/pull/20876
* fix(ingestion): report knowledge compiler progress fractions by @jay77721 in https://github.com/infiniflow/ragflow/pull/20902
* refactor: remove the low/medium/high/ultra thinking modes by @Caobaining1 in https://github.com/infiniflow/ragflow/pull/20910
* fix(web): support audio and video citations in source locate by @dcc123456 in https://github.com/infiniflow/ragflow/pull/20932
* fix(agent): process all configured Message inputs by @6ba3i in https://github.com/infiniflow/ragflow/pull/20936
* Fix: Changing the variable assignment operator results in the error: `c.trim() is not a function` by @cike8899 in https://github.com/infiniflow/ragflow/pull/20937
* CI : Optimize go cache, optimize runner space growing too quickly. by @myf-bee in https://github.com/infiniflow/ragflow/pull/20931
* fix(agent): reject marker-only citation grounding responses by @li872 in https://github.com/infiniflow/ragflow/pull/20685
* fix(agent): return the StringTransform split result as a generic list by @ekalinin in https://github.com/infiniflow/ragflow/pull/20920
* fix(web): only close rename modal after a successful save by @dcc123456 in https://github.com/infiniflow/ragflow/pull/20940
* fix(web): take mind map trigger out of absolute positioning by @dcc123456 in https://github.com/infiniflow/ragflow/pull/20939
* fix(dataset): preserve pipeline child chunk delimiters by @6ba3i in https://github.com/infiniflow/ragflow/pull/20942
* fix(web): auto-scroll to newly linked data source by @dcc123456 in https://github.com/infiniflow/ragflow/pull/20935
* fix(web): filter empty metadata values in dataset meta_fields count by @jay77721 in https://github.com/infiniflow/ragflow/pull/20933
* fix(kvrocks): surface transport errors from SetNX and DistributedLock.Acquire (#20660) by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/20774
* fix: disable max token defaults in agent templates by @buua436 in https://github.com/infiniflow/ragflow/pull/20946
* Feature: add knowledge_compilation_scope by @wangq8 in https://github.com/infiniflow/ragflow/pull/20917
* fix(searchbot): honor the search app's saved retrieval config by @qinling0210 in https://github.com/infiniflow/ragflow/pull/20944
* Fix: prevent database query when no-data by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/20938
* Fix: handle redundant v1 in base_url by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/20952
* Fix LLM setting for 3 search config by @wangq8 in https://github.com/infiniflow/ragflow/pull/20955
* fix(infinity): make memory messages work on the Infinity engine by @qinling0210 in https://github.com/infiniflow/ragflow/pull/20954
* Fix: Validate the SofyaSearch API key in the agent tool. by @cike8899 in https://github.com/infiniflow/ragflow/pull/20945
* Fix: remove deprecated code by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/20970
* fix(harness): preserve message fields and isolate agentic content by @QAQadws in https://github.com/infiniflow/ragflow/pull/20869
* fix: accept ReAct completion on the final iteration by @QAQadws in https://github.com/infiniflow/ragflow/pull/20875
* fix(agent): propagate provider failures before downstream execution by @6ba3i in https://github.com/infiniflow/ragflow/pull/20968
* Render table chunks as HTML on Text at the chunker by @xugangqiang in https://github.com/infiniflow/ragflow/pull/20918
* refactor(config): resolve CLI/env/file precedence in one place with final-value validation by @xugangqiang in https://github.com/infiniflow/ragflow/pull/20934
* Add Slovak & Czech language dataset support by @martincivan in https://github.com/infiniflow/ragflow/pull/19013
* fix(agent): cap generated document names at 180 characters and 255 bytes by @Jinzhengxu in https://github.com/infiniflow/ragflow/pull/20909
* fix: clarify extractor timeout errors by @buua436 in https://github.com/infiniflow/ragflow/pull/20983
* fix(web): sync excel source-locate scrollbar and fix highlight contrast by @dcc123456 in https://github.com/infiniflow/ragflow/pull/20960
* Fix: Remove chunk metadata from the chat and search pages. by @cike8899 in https://github.com/infiniflow/ragflow/pull/20985
* fix(chunker): stop charging the replicated table header against the split budget by @jay77721 in https://github.com/infiniflow/ragflow/pull/20845
* test(api): migrate REST API coverage to Go by @6ba3i in https://github.com/infiniflow/ragflow/pull/20991
* fix(aliyun): transcribe audio via DashScope multimodal-generation by @12britz in https://github.com/infiniflow/ragflow/pull/20975
* fix(chunker): keep ancestor headings on every cap-split hierarchy piece by @jay77721 in https://github.com/infiniflow/ragflow/pull/20953
* fix: scope chunk deletion to route dataset and add Go API coverage by @buua436 in https://github.com/infiniflow/ragflow/pull/21000
* docs:Improve local model deployment and provider configuration docs by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/21002
* Align code with EE by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21007
* fix: Removed broken supported_models links from all UI translations by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/21009
* fix(agent): make single-component debug match real-run state by @flyingwhit in https://github.com/infiniflow/ragflow/pull/20807
* fix(chunk): list parent chunks after source chunks on every doc engine by @qinling0210 in https://github.com/infiniflow/ragflow/pull/20990
* fix: clarify compiler timeout errors during ingestion by @buua436 in https://github.com/infiniflow/ragflow/pull/21011
* fix: preserve named Begin inputs in agent bot runs by @buua436 in https://github.com/infiniflow/ragflow/pull/21014
* fix(agent): preserve empty attachment brackets by @6ba3i in https://github.com/infiniflow/ragflow/pull/21016
* Refactor: split ingestion.go by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/21017
* fix(web): resolve cited chunk by marker key in reference image carousel by @dcc123456 in https://github.com/infiniflow/ragflow/pull/21012
* fix(web): remove a provider-instance draft right after it saves by @dcc123456 in https://github.com/infiniflow/ragflow/pull/20947
* fix(chunk): honor pagination when filtering by entity chunks by @QAQadws in https://github.com/infiniflow/ragflow/pull/21015
* Fix: Separate the `hierarchy` and `group` configurations for the `title` chunker into distinct fields. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21013
* Fix: Use TEI_BASE_URL then TEI_HOST by @wangq8 in https://github.com/infiniflow/ragflow/pull/21021
* fix(dao): migrate Python-era flat ingestion config onto pipeline components by @jay77721 in https://github.com/infiniflow/ragflow/pull/20986
* docs: add tag migration description by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/21020
* Fix: Prevent the left-side handle of a node on the canvas from serving as a starting point for connections to other nodes. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21019
* fix(parser): keep short-line body pages out of PDF TOC removal by @jay77721 in https://github.com/infiniflow/ragflow/pull/20988
* fix(parser): forward caller ctx through PDF TCADP path by @Taranum01 in https://github.com/infiniflow/ragflow/pull/17673
* Remove dead ParseResult.HTML field and redundant EmailParser json-path Text by @xugangqiang in https://github.com/infiniflow/ragflow/pull/20992
* fix(parser): inherit merged data cells, strip invisible chars, trim dataless columns by @jay77721 in https://github.com/infiniflow/ragflow/pull/20996
* test(api): migrate memory and message endpoint coverage by @6ba3i in https://github.com/infiniflow/ragflow/pull/20995
* test(api): migrate OpenAI compatibility and plugin tool tests by @6ba3i in https://github.com/infiniflow/ragflow/pull/20999
* test(api): migrate and improve retrieval API coverage by @6ba3i in https://github.com/infiniflow/ragflow/pull/21004
* fix(agent): remove empty tool from stock research template by @6ba3i in https://github.com/infiniflow/ragflow/pull/20987
* fix(chunk): expose per-chunk `available` in the chunk list by @qinling0210 in https://github.com/infiniflow/ragflow/pull/21022
* Fix: A user-friendly presentation of the indexer's search method by @cike8899 in https://github.com/infiniflow/ragflow/pull/21024
* refactor(cmd): extract server runners into internal/server/* packages by @xugangqiang in https://github.com/infiniflow/ragflow/pull/20883
* fix(search): delete the Search App row like Python does, drop unused soft-delete helpers by @qinling0210 in https://github.com/infiniflow/ragflow/pull/21005
* refactor(parser): type ParseResult.JSON as []DocItem boundary adapter by @xugangqiang in https://github.com/infiniflow/ragflow/pull/20998
* Fix(dataset):auto parse unsupported upload by @flyingwhit in https://github.com/infiniflow/ragflow/pull/21018
* fix(ingestion): scope extractor timeout to single LLM call by @jay77721 in https://github.com/infiniflow/ragflow/pull/21003
* Fix:tokenizer pool race condition by @flyingwhit in https://github.com/infiniflow/ragflow/pull/20903
* fix: cancel GCS upload context when Put returns by @QAQadws in https://github.com/infiniflow/ragflow/pull/20885
* Refactor: move cache to transaction by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/21023
* fix(files): handle vanished folders on list requests instead of returning 500 by @flyingwhit in https://github.com/infiniflow/ragflow/pull/20892
* fix(examples): use PATCH for chunk update in chunk_example.sh by @jrlprost in https://github.com/infiniflow/ragflow/pull/21037
* fix(infinity): keep one row per chunk id on insert by @qinling0210 in https://github.com/infiniflow/ragflow/pull/21043
* Dev: keep EE license by @wangq8 in https://github.com/infiniflow/ragflow/pull/21048
* fix(parser): grow truncated rows to host inherited merge values by @jay77721 in https://github.com/infiniflow/ragflow/pull/21044
* Fix CLI output truncation by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21052
* Fix: Add a tooltip to the 'tag' field of the extractor operator. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21047
* fix: update tenant model max tokens migration version by @buua436 in https://github.com/infiniflow/ragflow/pull/21045
* Fix: rm dead code in kb.go by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/21039
* Fix: The greater-than sign in the message cannot be displayed. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21055
* Build: add multi-platform native build support (linux/arm64, darwin) by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19247
* docs: unify sandbox docs by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/20951
* Feat/agentic kg outline and caller identity by @Caobaining1 in https://github.com/infiniflow/ragflow/pull/21053
* Go: update EE interface by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21056
* test(api): migrate Python dataset API coverage to Go by @6ba3i in https://github.com/infiniflow/ragflow/pull/21063
* test(api): migrate and improve task route coverage by @6ba3i in https://github.com/infiniflow/ragflow/pull/21060
* test(api): migrate and improve session API tests by @6ba3i in https://github.com/infiniflow/ragflow/pull/21057
* test(api): migrate and strengthen system API tests by @6ba3i in https://github.com/infiniflow/ragflow/pull/21059
* Fix: set tag to v1.0.0-rc2 by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/21061
* dockerfile and release add arm64 build by @myf-bee in https://github.com/infiniflow/ragflow/pull/21067
* Go: remove unused APIs by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21073
* test(api): migrate Python document API coverage to Go by @6ba3i in https://github.com/infiniflow/ragflow/pull/21066
* feat(infinity): implement SearchByRegexp for the agent grep tool by @qinling0210 in https://github.com/infiniflow/ragflow/pull/21068
* Docs: Update version references to v1.0.0-rc2 in READMEs and docs by @asiroliu in https://github.com/infiniflow/ragflow/pull/21069
* Docs: 1.0.0-rc2 release notes by @wangq8 in https://github.com/infiniflow/ragflow/pull/21064

## New Contributors
* @sunshanhui made their first contribution in https://github.com/infiniflow/ragflow/pull/20467
* @somasoil made their first contribution in https://github.com/infiniflow/ragflow/pull/20550
* @Harsh28-raj made their first contribution in https://github.com/infiniflow/ragflow/pull/20548
* @Felixkw12 made their first contribution in https://github.com/infiniflow/ragflow/pull/20577
* @SashaMIT made their first contribution in https://github.com/infiniflow/ragflow/pull/20414
* @JuampiHernandez made their first contribution in https://github.com/infiniflow/ragflow/pull/20479
* @errmakov made their first contribution in https://github.com/infiniflow/ragflow/pull/20480
* @quifox made their first contribution in https://github.com/infiniflow/ragflow/pull/20546
* @pratikgx made their first contribution in https://github.com/infiniflow/ragflow/pull/20521
* @fatwang2 made their first contribution in https://github.com/infiniflow/ragflow/pull/20561
* @why5602337 made their first contribution in https://github.com/infiniflow/ragflow/pull/20459
* @kassdinzheng123 made their first contribution in https://github.com/infiniflow/ragflow/pull/20662
* @BilalAtique made their first contribution in https://github.com/infiniflow/ragflow/pull/20529
* @MOHITPRADHAN35 made their first contribution in https://github.com/infiniflow/ragflow/pull/20482
* @huiq777 made their first contribution in https://github.com/infiniflow/ragflow/pull/20225
* @shrxyas-246 made their first contribution in https://github.com/infiniflow/ragflow/pull/20692
* @vedjaw made their first contribution in https://github.com/infiniflow/ragflow/pull/20731
* @poijygfdyy made their first contribution in https://github.com/infiniflow/ragflow/pull/20725
* @12britz made their first contribution in https://github.com/infiniflow/ragflow/pull/20758
* @yuee3 made their first contribution in https://github.com/infiniflow/ragflow/pull/20736
* @lorenzozanee made their first contribution in https://github.com/infiniflow/ragflow/pull/20695
* @demonroute2 made their first contribution in https://github.com/infiniflow/ragflow/pull/20853
* @heranliu made their first contribution in https://github.com/infiniflow/ragflow/pull/20850
* @dakjdakd made their first contribution in https://github.com/infiniflow/ragflow/pull/20627
* @wenqiw777 made their first contribution in https://github.com/infiniflow/ragflow/pull/20334

**Full Changelog**: https://github.com/infiniflow/ragflow/compare/v1.0.0-rc1...v1.0.0-rc2

---

> **Source** [infiniflow/ragflow](https://github.com/infiniflow/ragflow) · `v1.0.0-rc2` · 2026-10-16 · [upstream release](https://github.com/infiniflow/ragflow/releases/tag/v1.0.0-rc2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
