---
title: "ragflow v1.0.0"
project: "ragflow"
repo: "infiniflow/ragflow"
tag: "v1.0.0"
version: "v1.0.0"
published: "2026-11-06"
type: "major"
lang: "en"
summary: "After three release candidates, we are pleased to announce the official release of RAGFlow 1.0, now ready for production. Built on a complete rewrite in Go, this release significantly reduces deployment and runtime…"
---

# ragflow v1.0.0

After three release candidates, we are pleased to announce the official release of RAGFlow 1.0, now ready for production. Built on a complete rewrite in Go, this release significantly reduces deployment and runtime overhead and introduces an all-new Agentic Chat experience. We encourage all users to upgrade for improved stability, performance, and question answering.

### Highlights
- Rewritten in Go for lighter deployment: Docker images are approximately 10× smaller, and startup is approximately 10× faster.
- Approximately 100× greater concurrency, with substantial improvements in query latency, memory usage, and document parsing speed.
- All-new Agentic Chat: Enables multi-step reasoning and answers to complex questions through iterative retrieval, tool calls, and evidence sufficiency assessment.

### Chat and Agents
- Added Agentic Chat mode, replacing the previous Low, Medium, High, and Ultra thinking levels.
- Introduced the Jev decision model into the agent tool-calling loop to determine whether the available evidence is sufficient to answer a question.
- Added support for the Jev decision model in the Categorize agent component.
- Added storage and display of prompts, token usage, and execution time in chat history.

### Document Ingestion and Retrieval
- Unified the 12 built-in document parsers with the pipeline parsers.
- Added support for multiple ingestion pipeline DSL versions.

### Architecture and Deployment
- Migrated the message queue from Redis to NATS.
- Adopted Kvrocks for cache and checkpoint storage.
- Added Docker images for the arm64 architecture.
- Reimplemented the RAGFlow CLI in Go.

### Stability
- Fixed multiple critical bugs reported by the community and issues identified during the release candidate phase, further improving runtime stability.

### Benchmarks
- Achieved 91% accuracy on the FRAMES multi-hop question-answering benchmark using RAGFlow Agentic Chat with MiniMax M3.

### Upgrading
- From v1.0.0-rc1, rc2, or rc3: Existing data is fully compatible. You can upgrade directly.
- From v0.27.2: You can upgrade directly to v1.0.0. Data migration runs automatically when the RAGFlow Docker container starts.
- From versions earlier than v0.27.2: Follow the migration guide to complete the required intermediate upgrades before upgrading to v1.0.0.
- Back up all data before upgrading. Data migration from v0.27.2 to v1.0.0 is irreversible. If migration fails, restore the complete pre-upgrade backup before trying again.

### Compatibility and Limitations
- Deprecated API aliases are no longer supported.
- The Python SDK is unaffected.
- DeepDoc currently supports CPU environments only.

### Relative references
- Backup and upgrade guide: https://ragflow.io/docs/migration_overview
- Removed APIs: https://ragflow.io/docs/http_api_reference#removed-api-aliases


### What's Changed
* fix(parser): keep recovered PDF TOC leader lines out of the body guard by @jay77721 in https://github.com/infiniflow/ragflow/pull/21768
* CI: Fix log tee failure by @myf-bee in https://github.com/infiniflow/ragflow/pull/21791
* Update release notes of 1.0.0.rc3 by @yingfeng in https://github.com/infiniflow/ragflow/pull/21793
* feat: add Wally as a model provider by @adityabatra072 in https://github.com/infiniflow/ragflow/pull/21719
* add audit hooks to file APIs by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21807
* add log hooks by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21822
* i18n: translate pipeline version and parser settings strings in tr-TR by @bakiburakogun in https://github.com/infiniflow/ragflow/pull/21819
* fix(models): honour context cancellation in driver HTTP requests by @ccclucky in https://github.com/infiniflow/ragflow/pull/21643
* feat(vastbase): support Vastbase G100 as the metadata database in Go by @FengYikai710 in https://github.com/infiniflow/ragflow/pull/20913
* fix: README.md by @eridan-ltu in https://github.com/infiniflow/ragflow/pull/21828
* fix(chunker): prevent PDF child chunks from overwriting each other by @jay77721 in https://github.com/infiniflow/ragflow/pull/21773
* test(sdk): remove explicit Python SDK test skips by @6ba3i in https://github.com/infiniflow/ragflow/pull/21783
* fix(syncer): retain Dropbox checkpoints on download failure by @Zhi-Xiang-Guo in https://github.com/infiniflow/ragflow/pull/21809
* fix(api): keep the datasets API error response body shape by @simpleqt in https://github.com/infiniflow/ragflow/pull/21831
* perf(web): virtualize chat message lists by @dcc123456 in https://github.com/infiniflow/ragflow/pull/21790
* CI: add check for ASCII, disallow none ASCII code check-in by @wangq8 in https://github.com/infiniflow/ragflow/pull/21784
* fix(anthropic): support struct json schema in tool parameters by @Sanderhoff-alt in https://github.com/infiniflow/ragflow/pull/21638
* feat(parser): hand off Markdown and HTML remote images as media refs by @jay77721 in https://github.com/infiniflow/ragflow/pull/21764
* fix(paddleocr): handle submit request creation errors by @QAQadws in https://github.com/infiniflow/ragflow/pull/21839
* fix(deepdoc): add cgo constraints to native configuration tests by @QAQadws in https://github.com/infiniflow/ragflow/pull/21837
* fix: SoMark web page is missing by @fenglingxiansheng in https://github.com/infiniflow/ragflow/pull/21710
* fix(agent): clamp dataset navigation max_docs to the default budget by @flyingwhit in https://github.com/infiniflow/ragflow/pull/21755
* feat(admin): add user search, status filtering, sorting, and CLI pagination by @QAQadws in https://github.com/infiniflow/ragflow/pull/21729
* feat(chat): add AnySearch web search provider by @GunaPalanivel in https://github.com/infiniflow/ragflow/pull/20633
* refa: consolidate model access and tenant defaults by @buua436 in https://github.com/infiniflow/ragflow/pull/21740
* fix(ingestion): stop MinerU JSON path from inlining zip figure bytes by @Souravrajvi0 in https://github.com/infiniflow/ragflow/pull/21803
* fix(tool): cap tool HTTP response bodies at 4 MiB in arxiv, querit, duckduckgo and yahoo_finance by @flyingwhit in https://github.com/infiniflow/ragflow/pull/21769
* fix(models): publish the provider catalog through an atomic pointer and drop the dao-side cache so concurrent readers and publishers no longer race by @flyingwhit in https://github.com/infiniflow/ragflow/pull/21749
* fix(agent): resolve DeepL and QWeather credentials from node config or DEEPL_API_KEY/QWEATHER_API_KEY instead of model-visible params by @flyingwhit in https://github.com/infiniflow/ragflow/pull/21735
* fix(dify): keep retrieval unscoped when metadata conditions are empty by @MoonPointer-Byte in https://github.com/infiniflow/ragflow/pull/21766
* test(retrieval) : add unit tests for retrieval and reranker by @zzy1017-crypto in https://github.com/infiniflow/ragflow/pull/21611
* fix(agent): prevent checkpoint crashes and propagate component errors by @6ba3i in https://github.com/infiniflow/ragflow/pull/21854
* fix(agent): detect webhook Begin in saved canvases by @6ba3i in https://github.com/infiniflow/ragflow/pull/21849
* fix(file): record commit deletions without a missing status column by @ccclucky in https://github.com/infiniflow/ragflow/pull/21796
* fix(tokenizer): replace the default fields instead of appending by @ccclucky in https://github.com/infiniflow/ragflow/pull/21799
* test(mediacache): cover real Kvrocks lifecycle and index boundary by @jay77721 in https://github.com/infiniflow/ragflow/pull/21851
* fix(user): use string for user id in DAO and handler lookups by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21792
* fix(build): adjust onnxruntime static link flags on Darwin arm64 by @Sanderhoff-alt in https://github.com/infiniflow/ragflow/pull/21162
* release dockerhub image remove unnecessary tag by @myf-bee in https://github.com/infiniflow/ragflow/pull/21860
* fix(chunk): number paragraph chunks by their position by @Steve-20-ai in https://github.com/infiniflow/ragflow/pull/21823
* perf(chunker): coalesce PDF renders and share crop workers by @jay77721 in https://github.com/infiniflow/ragflow/pull/21850
* fix(web): restore entity type colors in knowledge graphs by @okht in https://github.com/infiniflow/ragflow/pull/21443
* fix(chunker): align PDF child previews with source positions by @jay77721 in https://github.com/infiniflow/ragflow/pull/21853
* fix(cli): list only accepted commands in \help by @mmporong in https://github.com/infiniflow/ragflow/pull/21503
* fix(channels): stop leaking a goroutine per WhatsApp events reconnect by @flyingwhit in https://github.com/infiniflow/ragflow/pull/21863
* fix(channel): add limit check to qqbot response by @flyingwhit in https://github.com/infiniflow/ragflow/pull/21859
* refactor(kvrocks): remove unused Client.GetOrCreateKey by @Sanderhoff-alt in https://github.com/infiniflow/ragflow/pull/21298
* refa: remove permission service wrappers by @buua436 in https://github.com/infiniflow/ragflow/pull/21856
* fix(ingestion): settle a terminal task's open run before deletion by @ccclucky in https://github.com/infiniflow/ragflow/pull/21798
* fix(agent): resolve single-brace variable references by @6ba3i in https://github.com/infiniflow/ragflow/pull/21865
* Revert "CI: add check for ASCII, disallow none ASCII code check-in" by @wangq8 in https://github.com/infiniflow/ragflow/pull/21873
* test: gate community-only tenant cases from EE by @buua436 in https://github.com/infiniflow/ragflow/pull/21874
* Update docs by @yingfeng in https://github.com/infiniflow/ragflow/pull/21876
* feat(ingestion): emit structured lifecycle events for document-parse tasks by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21711
* refactor by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21875
* fix(agent): serialize HTTP fields and preserve errors by @6ba3i in https://github.com/infiniflow/ragflow/pull/21857
* fix(agent): resolve nested subagent components by @6ba3i in https://github.com/infiniflow/ragflow/pull/21872
* fix(agent): normalize Invoke proxy URLs and avoid panics by @QAQadws in https://github.com/infiniflow/ragflow/pull/21855
* fix(deepseek): validate and normalize thinking effort by @QAQadws in https://github.com/infiniflow/ragflow/pull/21852
* fix(test): remove two races that reddened the ingestion packages by @ccclucky in https://github.com/infiniflow/ragflow/pull/21716
* fix(gmail): retain complete MIME payload when loading threads by @Zhi-Xiang-Guo in https://github.com/infiniflow/ragflow/pull/21811
* feat: add Synap as a model provider by @jimmyplup in https://github.com/infiniflow/ragflow/pull/21818
* fix(agentic-rag): make the finalize and claims budgets configurable by @ccclucky in https://github.com/infiniflow/ragflow/pull/21879
* test(service): gate API-token identity test out of EE builds by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21885
* feat(document): one-click cancel all documents in parsing queue by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21861
* fix(docker): stop the SPA fallback from masking stale hashed assets by @ccclucky in https://github.com/infiniflow/ragflow/pull/21878
* update readme by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21894
* feat(go): MonkeyOCR PDF dispatch on Go ingestion path by @Souravrajvi0 in https://github.com/infiniflow/ragflow/pull/20469
* fix(ingestion): add process_end_at column and keep OSS ingest-log a no-op by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21888
* Fix: Increase the spacing between the labels and the dropdown menus for the PDF and table parsers. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21882
* refa: derive permission identity from context by @buua436 in https://github.com/infiniflow/ragflow/pull/21892
* Refactor: refine response data by @wangq8 in https://github.com/infiniflow/ragflow/pull/21858
* Revert "fix(ingestion): add process_end_at column and keep OSS ingest-log a no-op" by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21897
* fix(agent): use stored log titles in tables and exports by @6ba3i in https://github.com/infiniflow/ragflow/pull/21890
* fix(agent): pass scalar thresholds to memory retrieval by @6ba3i in https://github.com/infiniflow/ragflow/pull/21889
* add sync audit hook by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21901
* Fix: Variables within the "Wait for Input" and "Start" components of an agent are not accessible in the floating window. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21900
* remove codecov upload by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21902
* refactor(common): revert OSS ingest-log collection from #21711 (keep instrumentation only) by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21893
* Fix: Delete the agent log entry by @cike8899 in https://github.com/infiniflow/ragflow/pull/21910
* Stop persisting process_end_at; recover end time from begin + duration by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21906
* feat: add user ownership to resources by @buua436 in https://github.com/infiniflow/ragflow/pull/21914
* Feat: Add a cancel button to pause tasks that are currently running or queued. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21917
* Fix: The referenced content in chat and agent messages is being obscured. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21918
* Fix: disable ciation not working in agentic chat by @wangq8 in https://github.com/infiniflow/ragflow/pull/21913
* fix(parser): detect Office content before selecting Go parsers by @jay77721 in https://github.com/infiniflow/ragflow/pull/21909
* feat(web): add enterprise (ee) seam layer for build-time overlays by @dcc123456 in https://github.com/infiniflow/ragflow/pull/21908
* refa: derive service identity from context by @buua436 in https://github.com/infiniflow/ragflow/pull/21904
* fix(service): purge engine data from RemoveDocumentKeepFile (#20659) by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/20768
* fix(ingestion): share extractor concurrency across tag extraction by @jay77721 in https://github.com/infiniflow/ragflow/pull/21891
* fix(dao): include skill spaces in auto migration by @buua436 in https://github.com/infiniflow/ragflow/pull/21921
* fix(es): preserve dataset and document scope in single chunk updates by @zzy1017-crypto in https://github.com/infiniflow/ragflow/pull/21842
* fix(whatsapp): escape the gateway events session key once by @flyingwhit in https://github.com/infiniflow/ragflow/pull/21871
* docs：Restructure the Team documentation and align sharing configuration across Dataset, Agent, and Memory. by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/21922
* fix(file): scope commit changes to the target folder tree by @ccclucky in https://github.com/infiniflow/ragflow/pull/21795
* feat(ocr): make MinerU parser timeout configurable via environment and setup by @superwiboy in https://github.com/infiniflow/ragflow/pull/21832
* Refactor: Better no such name by @wangq8 in https://github.com/infiniflow/ragflow/pull/21925
* Fix: Adjust layout of DatasetFilter component to conditionally render FilterPopover and SearchInput by @dcc123456 in https://github.com/infiniflow/ragflow/pull/21924
* Fix: Agent – ​​Incomplete display of blueprint examples when creating a wiki template in Compiler by @cike8899 in https://github.com/infiniflow/ragflow/pull/21919
* fix(agent): populate structured output and resolve deferred @structured by @huang-aoqin in https://github.com/infiniflow/ragflow/pull/20679
* feat(gpustack): rework provider setup and fix driver issues by @lemisky in https://github.com/infiniflow/ragflow/pull/21903
* fix(agent): runtime fixes for tool naming, legacy sessions, tenant scoping and MCP SSRF by @techpreneur-a in https://github.com/infiniflow/ragflow/pull/20558
* fix(ingestion): pass the MinerU timeout to the MonkeyOCR file_parse upload by @ccclucky in https://github.com/infiniflow/ragflow/pull/21930
* refa: derive service identity from request context by @buua436 in https://github.com/infiniflow/ragflow/pull/21923
* fix(retrieval): bound rerank and KNN candidate windows by @zzy1017-crypto in https://github.com/infiniflow/ragflow/pull/21907
* feat(ingestion): recognize image tables through the DeepDoc page pipeline by @jay77721 in https://github.com/infiniflow/ragflow/pull/21911
* doc: fix typos by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21947
* Fix: Variables inserted using shortcuts fail to display in the message node. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21946
* Fix: Chat embedded in a website: automatically scrolls down when a question is answered. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21940
* refa: derive service identity from context by @buua436 in https://github.com/infiniflow/ragflow/pull/21942
* Fix: Long messages in floating embedded pages overflow the message box. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21951
* Fix: The pipeline name is too long and overflows the release dialog. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21957
* fix(agent): support String and Object Invoke parameters by @6ba3i in https://github.com/infiniflow/ragflow/pull/21953
* feat(chunker): support media context in title and manual pipelines by @ZXLyyds100 in https://github.com/infiniflow/ragflow/pull/21111
* refa: derive connector, MCP, and memory identity from context by @buua436 in https://github.com/infiniflow/ragflow/pull/21952
* allow chinese words as model instance name by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/21948
* Fix: add system_settings seeder by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/21955
* perf(pdf): read page directives once per document by @jay77721 in https://github.com/infiniflow/ragflow/pull/21950
* Fix: honor ALLOW_ANY_HOST by @wangq8 in https://github.com/infiniflow/ragflow/pull/21949
* Fix: File Management - Move - Folder name is too long, causing visual clipping (clipping through UI elements) by @cike8899 in https://github.com/infiniflow/ragflow/pull/21962
* Filter agent version, allow filter with alias by @wangq8 in https://github.com/infiniflow/ragflow/pull/21943
* refactor(extractor): resolve chat model config once per run by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21960
* Fix: Add a text description to the cancel-parsing button. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21966
* Fix: when agentic chat fail, show the real error by @wangq8 in https://github.com/infiniflow/ragflow/pull/21964
* refactor(deepdoc): drop dead covered-slice+sort in GroupCells span injection by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21954
* refactor(ingestion): consolidate unique* string dedup helpers into common by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21961
* Fix: allow to move to root directory by @wangq8 in https://github.com/infiniflow/ragflow/pull/21969
* ci: web not run go test by @myf-bee in https://github.com/infiniflow/ragflow/pull/21958
* Fix: The messages in the embedded chat interface are positioned too close to the right edge. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21974
* feat(observability): carry user_name/tenant_name through IngestionLog by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21968
* i18n: translate GPUStack provider setup and parse cancel strings in tr-TR by @bakiburakogun in https://github.com/infiniflow/ragflow/pull/21963
* feat(ingestion): record pipeline version on operation logs by @jay77721 in https://github.com/infiniflow/ragflow/pull/21916
* fix(agentic_rag): make the decisionhead package compile without cgo by @ccclucky in https://github.com/infiniflow/ragflow/pull/21932
* fix(deepdoc): keep DLA-labeled body prose out of table captions by @jay77721 in https://github.com/infiniflow/ragflow/pull/21979
* deepdoc/pdf: extend TableBuilder with FinalizeGrid and AttachSpanInfo by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21980
* Fix: agent session by default should not return dsl by @wangq8 in https://github.com/infiniflow/ragflow/pull/21989
* Fix: Deleting a pipeline bound to a dataset should not trigger an error when navigating to the file list page of a different dataset. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21985
* fix(sdk): guard Session._structure_answer against KeyError on non-streaming agent responses by @sandiyochristan in https://github.com/infiniflow/ragflow/pull/21933
* fix(storage): add Content-MD5 to S3 batch delete requests by @liuzelei in https://github.com/infiniflow/ragflow/pull/21877
* fix(go): paginate the Anthropic models list by @pcbeingused333 in https://github.com/infiniflow/ragflow/pull/21899
* fix(chunker): bound the crop page cache by bytes and release pages when a crop task panics by @Xavierando in https://github.com/infiniflow/ragflow/pull/21880
* refactor(structure): read STRUCT_MAX_CHUNKS_PER_BATCH via common.GetEnvInt by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21984
* docs: Documentation Updates and UI Alignment by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/21986
* fix(nlp): add retrieval prune logic and tests by @zzy1017-crypto in https://github.com/infiniflow/ragflow/pull/21627
* fix: align version catalog test with EE permissions by @buua436 in https://github.com/infiniflow/ragflow/pull/22011
* Fix: Dataset file configuration: switching from "pipeline" to "built-in" also triggers an exclamation mark warning. by @cike8899 in https://github.com/infiniflow/ragflow/pull/22010
* Fix: If the title of an agent operator is too long, it overflows beyond the boundaries of the sheet. by @cike8899 in https://github.com/infiniflow/ragflow/pull/22013
* fix(web): hide Agent-related content in chat channel connect dialog by @dcc123456 in https://github.com/infiniflow/ragflow/pull/22015
* Fix: Increase the right-hand margin on the agent share page. by @cike8899 in https://github.com/infiniflow/ragflow/pull/22016
* Fix: second sort key for memory messages by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/22004
* Upgrade office_oxide to v0.1.16 and drop temporary caption/table fixes by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21978
* refa: remove remaining identity arguments by @buua436 in https://github.com/infiniflow/ragflow/pull/22005
* fix(es): return error on item-level failures in metadata bulk write by @zzy1017-crypto in https://github.com/infiniflow/ragflow/pull/21956
* fix(ingestion): preserve PDF sentences across page boundaries by @jay77721 in https://github.com/infiniflow/ragflow/pull/21982
* refactor(ingestion): consolidate duplicated meta-reader helpers into kccommon by @xugangqiang in https://github.com/infiniflow/ragflow/pull/21983
* Add Somark VerifyOCRConnection by @fenglingxiansheng in https://github.com/infiniflow/ragflow/pull/21927
* fix(knowledge-compiler): honor node settings and degrade missing vector mapping by @buua436 in https://github.com/infiniflow/ragflow/pull/22026
* fix(web): pass through 413/504 responses without a duplicate error toast by @dcc123456 in https://github.com/infiniflow/ragflow/pull/22024
* fix(core): enforce consistent name and alias length limits by @jay77721 in https://github.com/infiniflow/ragflow/pull/22020
* fix(parser): preserve Office table cell spans by @jay77721 in https://github.com/infiniflow/ragflow/pull/22012
* Fix: The model category filter does not change based on the system language, and there is no clear visual indicator to show which item is currently selected. by @cike8899 in https://github.com/infiniflow/ragflow/pull/22038
* fix(channels): propagate delivery errors without exposing credentials by @6ba3i in https://github.com/infiniflow/ragflow/pull/22033
* fix(parser): keep the paragraphs of a Markdown blockquote apart by @L4XB in https://github.com/infiniflow/ragflow/pull/21347
* Fix: The agent operator name is too long, causing the icon to be compressed. by @cike8899 in https://github.com/infiniflow/ragflow/pull/22042
* feat(doc-generator): render markdown and expose html decorations by @6ba3i in https://github.com/infiniflow/ragflow/pull/22040
* fix(channels): support WhatsApp gateways through Docker by @6ba3i in https://github.com/infiniflow/ragflow/pull/22032
* Refactor: restrict page_size max value 100 by @wangq8 in https://github.com/infiniflow/ragflow/pull/22036
* docs: record name column widening in database change log by @jay77721 in https://github.com/infiniflow/ragflow/pull/22030
* Feat: Image parsing: DeepDoc is distinguished from other OCR models and is offered as a separate option. by @cike8899 in https://github.com/infiniflow/ragflow/pull/22047
* Bump Infinity to v0.7.5 by @qinling0210 in https://github.com/infiniflow/ragflow/pull/22022
* fix(admin): return every user when the list is unpaged by @ccclucky in https://github.com/infiniflow/ragflow/pull/21723
* docs: add tutorial in quickstart by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/22027
* docs：add use cases for common  scenarios by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/22054
* fix(models): support the MinerU 4.1 Tasks API in ParseMinerUV1 by @ccclucky in https://github.com/infiniflow/ragflow/pull/21995
* Fix: Align the agent operator title to the left. by @cike8899 in https://github.com/infiniflow/ragflow/pull/22051
* fix(pregel): preserve slice types during state reduction by @6ba3i in https://github.com/infiniflow/ragflow/pull/22014
* Add RenderVH dispatch hook to ConstructTable for EE V/H tables by @xugangqiang in https://github.com/infiniflow/ragflow/pull/22055
* fix: seed user rows in tenant service tests by @buua436 in https://github.com/infiniflow/ragflow/pull/22060
* Resolve the comments by @wangq8 in https://github.com/infiniflow/ragflow/pull/22059
* fix: restore harness interrupt resume and events by @buua436 in https://github.com/infiniflow/ragflow/pull/22050
* refactor(common): move IngestionLog and ingest-log sink out of stub.go by @xugangqiang in https://github.com/infiniflow/ragflow/pull/22006
* fix(chat): always conjoin the authorized kb_id filter to SQL retrieval by @zzy1017-crypto in https://github.com/infiniflow/ragflow/pull/21866
* fix(web): harden rename flows and dialog UX by @dcc123456 in https://github.com/infiniflow/ragflow/pull/22068
* feat(channels): support agent workflows and isolate startup failures by @6ba3i in https://github.com/infiniflow/ragflow/pull/22031
* Revert "fix(web): hide Agent-related content in chat channel connect dialog" by @wangq8 in https://github.com/infiniflow/ragflow/pull/22069
* fix(storage): use bounded synchronous MinIO health probes by @liuzelei in https://github.com/infiniflow/ragflow/pull/21945
* refactor(ingestion): drop Python/migration-history comments from tree sub-package by @xugangqiang in https://github.com/infiniflow/ragflow/pull/22008
* fix: harden native analyzer conversions and JSON output by @buua436 in https://github.com/infiniflow/ragflow/pull/22070
* fix: harden agent export, timeout, and artifact handling by @buua436 in https://github.com/infiniflow/ragflow/pull/22037
* fix: clean agent subgraphs and repair frontend requests by @buua436 in https://github.com/infiniflow/ragflow/pull/22048
* fix(pregel): propagate conditional edge and branch errors by @6ba3i in https://github.com/infiniflow/ragflow/pull/22074
* fix(web): use secondary buttons for tenant table actions by @dcc123456 in https://github.com/infiniflow/ragflow/pull/22079
* fix(agent): preserve Markdown headings and lists in DOCX by @6ba3i in https://github.com/infiniflow/ragflow/pull/22078
* Docs: Get rid of (optional) by @wangq8 in https://github.com/infiniflow/ragflow/pull/22085
* feat(parser): add MiniCPM-OCR as a PDF parser by @Caldalis in https://github.com/infiniflow/ragflow/pull/21785
* add more glm models by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/22087
* Provision native libs from versioned user cache (offline CI, drop /opt pre-bake) by @xugangqiang in https://github.com/infiniflow/ragflow/pull/22023
* Fix: handle Vite preload errors with automatic reload by @cike8899 in https://github.com/infiniflow/ragflow/pull/22086
* fix: resolve template, rerank, and migration regressions by @buua436 in https://github.com/infiniflow/ragflow/pull/22083
* fix(agent): preserve nested Markdown lists in PDF exports by @6ba3i in https://github.com/infiniflow/ragflow/pull/22084
* fix: scope upload quotas and lock WeCom listener binding by @buua436 in https://github.com/infiniflow/ragflow/pull/22076
* fix: harden OAuth, gateway auth, and provider parsing by @buua436 in https://github.com/infiniflow/ragflow/pull/22072
* Fix: long name error by @wangq8 in https://github.com/infiniflow/ragflow/pull/22088
* fix(es): prevent Lucene injection in session_id and enforce dataset scope in DeleteChunks by @zzy1017-crypto in https://github.com/infiniflow/ragflow/pull/21981
* fix(web): truncate overflowing titles in embedded chat headers by @dcc123456 in https://github.com/infiniflow/ragflow/pull/22091
* fix: prefix agent channel sessions with the chat channel name by @flyingwhit in https://github.com/infiniflow/ragflow/pull/22090
* feat(chatchannel): stream Feishu, WeCom and DingTalk replies by @flyingwhit in https://github.com/infiniflow/ragflow/pull/22041
* fix(channels): truncate Telegram and Discord upstream error bodies to 200 bytes by @flyingwhit in https://github.com/infiniflow/ragflow/pull/22075
* fix(channels): apply saved agent updates to existing conversations by @6ba3i in https://github.com/infiniflow/ragflow/pull/22093
* Revert "Provision native libs from versioned user cache (offline CI, drop /opt pre-bake)" by @xugangqiang in https://github.com/infiniflow/ragflow/pull/22097
* fix(web): refresh tenant user list after removing a member by @dcc123456 in https://github.com/infiniflow/ragflow/pull/22096
* fix(test): fix always-true assertions in reranker normalize test by @zzy1017-crypto in https://github.com/infiniflow/ragflow/pull/22039
* fix(dataset): sync folder rename in same transaction to prevent binding loss by @zzy1017-crypto in https://github.com/infiniflow/ragflow/pull/22021
* refactor(ingestion): centralize component names and identity checks by @jay77721 in https://github.com/infiniflow/ragflow/pull/22081
* fix(deepdoc): preserve missed PDF table rows and merged headers by @jay77721 in https://github.com/infiniflow/ragflow/pull/22073
* fix(channels): strip citations from outgoing replies by @6ba3i in https://github.com/infiniflow/ragflow/pull/22106
* fix(syncer): retry startup task publication failures by @6ba3i in https://github.com/infiniflow/ragflow/pull/22101
* fix: align ChatChannel permission tests by @buua436 in https://github.com/infiniflow/ragflow/pull/22107
* fix(infinity): decode tag_feas on chunk search reads by @ccclucky in https://github.com/infiniflow/ragflow/pull/21782
* Release notes 1.0 GA by @wangq8 in https://github.com/infiniflow/ragflow/pull/22109
* Docs: Update version references to v1.0.0 in READMEs and docs by @asiroliu in https://github.com/infiniflow/ragflow/pull/22108
* update macos runner to macos-15 for arm64 architecture by @myf-bee in https://github.com/infiniflow/ragflow/pull/22110

## New Contributors
* @adityabatra072 made their first contribution in https://github.com/infiniflow/ragflow/pull/21719
* @eridan-ltu made their first contribution in https://github.com/infiniflow/ragflow/pull/21828
* @Zhi-Xiang-Guo made their first contribution in https://github.com/infiniflow/ragflow/pull/21809
* @fenglingxiansheng made their first contribution in https://github.com/infiniflow/ragflow/pull/21710
* @GunaPalanivel made their first contribution in https://github.com/infiniflow/ragflow/pull/20633
* @MoonPointer-Byte made their first contribution in https://github.com/infiniflow/ragflow/pull/21766
* @Steve-20-ai made their first contribution in https://github.com/infiniflow/ragflow/pull/21823
* @mmporong made their first contribution in https://github.com/infiniflow/ragflow/pull/21503
* @jimmyplup made their first contribution in https://github.com/infiniflow/ragflow/pull/21818
* @superwiboy made their first contribution in https://github.com/infiniflow/ragflow/pull/21832
* @sandiyochristan made their first contribution in https://github.com/infiniflow/ragflow/pull/21933
* @liuzelei made their first contribution in https://github.com/infiniflow/ragflow/pull/21877
* @pcbeingused333 made their first contribution in https://github.com/infiniflow/ragflow/pull/21899
* @Caldalis made their first contribution in https://github.com/infiniflow/ragflow/pull/21785

**Full Changelog**: https://github.com/infiniflow/ragflow/compare/v1.0.0-rc3...v1.0.0

---

> **Source** [infiniflow/ragflow](https://github.com/infiniflow/ragflow) · `v1.0.0` · 2026-11-06 · [upstream release](https://github.com/infiniflow/ragflow/releases/tag/v1.0.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
