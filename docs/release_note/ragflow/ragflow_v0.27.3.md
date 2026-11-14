---
title: "ragflow v0.27.3"
project: "ragflow"
repo: "infiniflow/ragflow"
tag: "v0.27.3"
version: "v0.27.3"
published: "2026-10-23"
type: "patch"
lang: "en"
---

# ragflow v0.27.3

## What's Changed
* Port agentic RAG to GO by @qinling0210 in https://github.com/infiniflow/ragflow/pull/19500
* Revert "fix(ingestion): allow re-parsing a document whose parse was canceled at progress 0" by @wangq8 in https://github.com/infiniflow/ragflow/pull/19503
* fix(agent/tool): translate MCP tool inputSchema.properties in Info() by @mkaaad in https://github.com/infiniflow/ragflow/pull/19244
* Fix: remove deprecated functions by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/19449
* fix(sdk): preserve agent answer references by @AnnaSuSu in https://github.com/infiniflow/ragflow/pull/19365
* fix(mcp): send rerank_candidates_count so retrieval paging works past 64 results by @xu-jia-ming in https://github.com/infiniflow/ragflow/pull/19018
* fix(agent): compare retrieval KBs by resolved embedding model, not raw embd_id by @kabishou11 in https://github.com/infiniflow/ragflow/pull/19206
* Go: add integration test by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/19485
* Fix: Modify the text color of the TreeSelect component. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19507
* Upon entering a wiki, the top-right corner indicates that modifications have been made, even though no changes were actually performed. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19482
* fix(api): authorize task cancellation by dataset access by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/19359
* refa: remove unused knowledge compilation code by @buua436 in https://github.com/infiniflow/ragflow/pull/19437
* fix: avoid nested compiler pool embedding deadlock by @buua436 in https://github.com/infiniflow/ragflow/pull/19486
* fix(invoke): tolerate invalid headers across runtimes by @6ba3i in https://github.com/infiniflow/ragflow/pull/19481
* fix(wiki): treat MAP-extracted chunks as cache hits instead of missing by @kabishou11 in https://github.com/infiniflow/ragflow/pull/19208
* fix(web): prevent DOCX preview infinite update loop by @Souravrajvi0 in https://github.com/infiniflow/ragflow/pull/19475
* fix(web): add Traditional Chinese child delimiter translations by @huyua9 in https://github.com/infiniflow/ragflow/pull/18951
* fix(figure_parser): accept lang as named parameter on VisionFigureParser (#17280) by @Taranum01 in https://github.com/infiniflow/ragflow/pull/19511
* fix(dataflow): preserve scalar text output shape by @huyua9 in https://github.com/infiniflow/ragflow/pull/18921
* fix(i18n): localize Chinese delimiter preview by @huyua9 in https://github.com/infiniflow/ragflow/pull/18948
* Unify ONNX Runtime native to 1.29.0 from infiniflow/ragflow-build by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19446
* fix(document): validate immutable fields on update by @taek105 in https://github.com/infiniflow/ragflow/pull/19444
* fix(structure-graph): discover buckets from raw rows by @6ba3i in https://github.com/infiniflow/ragflow/pull/19523
* fix: forward NumberInput ref to input by @huyua9 in https://github.com/infiniflow/ragflow/pull/18904
* fix(ssrf): unwrap IPv6 transition addresses in the URL guard by @aroh3006 in https://github.com/infiniflow/ragflow/pull/19517
* Feat: Make the files of the parser operators in the pipeline deletable. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19384
* fix(template): align data analysis CodeExec prompt by @huyua9 in https://github.com/infiniflow/ragflow/pull/18958
* fix(storage): retry transient S3 failures by @6ba3i in https://github.com/infiniflow/ragflow/pull/19526
* Port agentic RAG PRs to GO by @qinling0210 in https://github.com/infiniflow/ragflow/pull/19527
* refa: remove Go artifact deletion APIs by @buua436 in https://github.com/infiniflow/ragflow/pull/19519
* test(infinity): cover SQL literal escaping by @huyua9 in https://github.com/infiniflow/ragflow/pull/18956
* Fix: The text in the SelectWithSearch dropdown menu is obscured by the checkmark icon. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19534
* fix(build): anchor pdf_oxide version gate against suffix versions by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19152
* feat(nlp): rerank on natural chunk text, not tokenized content_ltks by @vincentlambert in https://github.com/infiniflow/ragflow/pull/16961
* fix(chunker): one BPE pass per hardSplitPiece iteration instead of two by @changshenhan in https://github.com/infiniflow/ragflow/pull/18648
* fix: update knowledge artifacts on document status changes by @buua436 in https://github.com/infiniflow/ragflow/pull/19532
* Migrate cache backend from Valkey 8 to apache/kvrocks:2.16.0 by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19374
* docs： update FAQs by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/19538
* refactor(parser): unify parser outputs to structured JSON items by @jay77721 in https://github.com/infiniflow/ragflow/pull/19467
* feat(agent): support document_ids in retrieval node and tool by @huang-aoqin in https://github.com/infiniflow/ragflow/pull/16938
* fix(ingestion): stop dropping QA pairs from multiline table cells by @jay77721 in https://github.com/infiniflow/ragflow/pull/19536
* Add claim/evidence to tree/pageindex compilation pipeline by @yingfeng in https://github.com/infiniflow/ragflow/pull/19267
* fix(parser): handle large sparse spreadsheets, JSON BOM, and XLSX QA chunking by @Souravrajvi0 in https://github.com/infiniflow/ragflow/pull/19237
* fix(wiki): version history always empty on Go API due to page-slug key mismatch by @euvre in https://github.com/infiniflow/ragflow/pull/19305
* Port Agentic RAG to Golang by @yingfeng in https://github.com/infiniflow/ragflow/pull/19563
* feat(data-source): add Feishu Wiki file connector by @Gonghan-Princess in https://github.com/infiniflow/ragflow/pull/19425
* docs: fix dead link to removed docker-compose-gpu.yml by @jrlprost in https://github.com/infiniflow/ragflow/pull/19576
* fix(ollama): disable reasoning for vision descriptions by @6ba3i in https://github.com/infiniflow/ragflow/pull/19529
* fix(beartype): remove package-wide import hooks by @6ba3i in https://github.com/infiniflow/ragflow/pull/19531
* Custom the file extension when saving DB fields, and Parse HTML fragments not just full HTML doc by @wadefelix in https://github.com/infiniflow/ragflow/pull/15998
* fix(api): authorize the dataset document download route by tenant in the Go API by @coderdailyone in https://github.com/infiniflow/ragflow/pull/19543
* fix: handle indirect PDF annotation arrays by @huyua9 in https://github.com/infiniflow/ragflow/pull/18894
* fix(sdk): retain image IDs on chunks by @AnnaSuSu in https://github.com/infiniflow/ragflow/pull/19505
* Fix: Set the minimum value for "top n" to 1 and restrict it to an integer. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19547
* Fix: Validate webhook form by @cike8899 in https://github.com/infiniflow/ragflow/pull/19546
* feat(syncer): add Feishu Wiki connector for the Go backend by @mkaaad in https://github.com/infiniflow/ragflow/pull/19453
* feat: add AnonRouter model provider by @anonrouterai in https://github.com/infiniflow/ragflow/pull/19561
* fix: surface MinerU API error bodies and re-raise parser failures by @huang-aoqin in https://github.com/infiniflow/ragflow/pull/17308
* fix(model): delete provider models and instances in one transaction by @ming1523 in https://github.com/infiniflow/ragflow/pull/19562
* fix: fix security issue in ob_conn_base.py by @anupamme in https://github.com/infiniflow/ragflow/pull/19524
* feat(connector): support file_extension for MySQL/PostgreSQL sync by @mkaaad in https://github.com/infiniflow/ragflow/pull/19466
* feat(channels): WeCom can bind agent by @brucehu in https://github.com/infiniflow/ragflow/pull/18598
* fix(wiki): stamp retrieval fields so compiled pages are searchable by @Souravrajvi0 in https://github.com/infiniflow/ragflow/pull/18787
* feat(api): add image_update_mode for chunk image updates by @Souravrajvi0 in https://github.com/infiniflow/ragflow/pull/18889
* Fix: keep a reference to the qqbot dispatch task so replies are not dropped by @muhzuhaib in https://github.com/infiniflow/ragflow/pull/19029
* fix(agent): make Python webhook trace appends atomic by @T1mn in https://github.com/infiniflow/ragflow/pull/19091
* fix(rag): assign PDF parser tables to tbls in book chunking method (#19557) by @Ritiky23 in https://github.com/infiniflow/ragflow/pull/19559
* fix(storage):preserve original errors after retries by @6ba3i in https://github.com/infiniflow/ragflow/pull/19580
* fix(web): scope pipeline log detail query keys by @huyua9 in https://github.com/infiniflow/ragflow/pull/18909
* fix(api): validate embedding check sample count by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/19574
* fix(api): treat an empty metadata_condition.conditions list as no filter by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/19368
* fix(api): intersect metadata filter results with the caller's doc scope by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/19353
* fix CI native backend test failed by @myf-bee in https://github.com/infiniflow/ragflow/pull/19590
* Remove internal cli 'insert chunks from file' and 'insert metadata from file' by @qinling0210 in https://github.com/infiniflow/ragflow/pull/19591
* fix(storage):preserve errors during backend retries by @6ba3i in https://github.com/infiniflow/ragflow/pull/19578
* fix: merge same-name knowledge graph entities by @buua436 in https://github.com/infiniflow/ragflow/pull/19525
* fix: split knowledge compilation logs by task type by @buua436 in https://github.com/infiniflow/ragflow/pull/19548
* fix(parser): emit xlsx spreadsheets as typed table chunks by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19509
* Fix: UI chat should  pass  pass_all_history_messages=false  in 1.0 go by @cike8899 in https://github.com/infiniflow/ragflow/pull/19602
* Fix: The selected invalid dataset cannot be deleted. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19603
* fix: update image utils test stub by @buua436 in https://github.com/infiniflow/ragflow/pull/19605
* docs: fix Python frontend proxy startup by @liang0417 in https://github.com/infiniflow/ragflow/pull/19606
* fix: align mindmap relations with Python by @buua436 in https://github.com/infiniflow/ragflow/pull/19579
* Revert "Fix: UI chat should  pass  pass_all_history_messages=false  in 1.0 go" by @wangq8 in https://github.com/infiniflow/ragflow/pull/19618
* refactor(ingestion): decouple document parsing state from document.run in favor of ingestion_task by @jay77721 in https://github.com/infiniflow/ragflow/pull/19533
* fix(web): adapt document parsing state for Go ingestion_status (depends on #19533) by @dcc123456 in https://github.com/infiniflow/ragflow/pull/19587
* Feat: Hide the delete and update buttons related to the Go version of the wiki. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19620
* Fix agentic search bugs by @yingfeng in https://github.com/infiniflow/ragflow/pull/19615
* fix(agent): Agent reply empty when a retrieval tool runs — need2cite flips mid-stream by @spicyfishPro in https://github.com/infiniflow/ragflow/pull/19483
* fix(agent): preserve Boolean values in Variable Assigner by @LostSnowfluff in https://github.com/infiniflow/ragflow/pull/19499
* fix(sdk): stop parsing waits on status lookup failures by @AnnaSuSu in https://github.com/infiniflow/ragflow/pull/19506
* feat: add API-Route as a model provider by @DennyHo0917 in https://github.com/infiniflow/ragflow/pull/19566
* PY: refactor by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/19599
* fix(agent/tools): encode GitHub and QWeather query parameters by @MarMarLabs in https://github.com/infiniflow/ragflow/pull/19584
* docs: clarify parser and email text by @gluedtea in https://github.com/infiniflow/ragflow/pull/19541
* fix: show document graph entity counts by @buua436 in https://github.com/infiniflow/ragflow/pull/19617
* Feat: Shorten the default distance of the timeline connector lines. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19612
* Fix: display modelExtra in api response by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/19607
* feat(memory): make Go memory extraction tasks durable and resumable by @taek105 in https://github.com/infiniflow/ragflow/pull/19512
* fix(ci): read DeepDoc testdata from the pre-seeded dir instead of linking it in by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19594
* test: cover TokenizerFromUpstream empty payload contracts by @huyua9 in https://github.com/infiniflow/ragflow/pull/18898
* fix(retrieval): recover dense candidates after empty hybrid search by @6ba3i in https://github.com/infiniflow/ragflow/pull/19502
* Implement endpoint GET /datasets/tags/aggregation in GO by @qinling0210 in https://github.com/infiniflow/ragflow/pull/19626
* docs: repair stale internal links and license reference by @Mnilax in https://github.com/infiniflow/ragflow/pull/19633
* fix(db): abort poisoned transactions on connection loss by @6ba3i in https://github.com/infiniflow/ragflow/pull/19530
* Fix: When calling the `children` and `graph` interfaces on the wiki tree page, the `keywords` parameter should be included. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19627
* Fix chat bot reasoning in GO by @qinling0210 in https://github.com/infiniflow/ragflow/pull/19641
* fix(agent): reject unsupported image input cleanly by @6ba3i in https://github.com/infiniflow/ragflow/pull/19539
* feat(mineru): observability for embedded image loss in chunk stream (#16978) by @Taranum01 in https://github.com/infiniflow/ragflow/pull/18761
* fix(chunker): align custom delimiter text metadata by @yzl0ng in https://github.com/infiniflow/ragflow/pull/19005
* fix(ocr): prevent OpenCV remap crashes with oversized images by clamp… by @lucasoffchain in https://github.com/infiniflow/ragflow/pull/19419
* fix(api): reject empty provider instance deletes by @huyua9 in https://github.com/infiniflow/ragflow/pull/18919
* fix(ingestion): enforce text-only pre-index wire contract by @Souravrajvi0 in https://github.com/infiniflow/ragflow/pull/19478
* fix(api): preserve parent-child config on partial updates by @huyua9 in https://github.com/infiniflow/ragflow/pull/18949
* feat(ingestion): track a run's pipeline log from queue to terminal by @jay77721 in https://github.com/infiniflow/ragflow/pull/19494
* fix(naive): do not route vision layout models to MinerU by @huang-aoqin in https://github.com/infiniflow/ragflow/pull/19513
* ci: drop the kvrocks-parity workflow and the integration tests it ran by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19583
* fix: record generated wiki page versions by @buua436 in https://github.com/infiniflow/ragflow/pull/19636
* fix: support keywords in navigation APIs by @buua436 in https://github.com/infiniflow/ragflow/pull/19645
* fix: sync navigation tree with document status by @buua436 in https://github.com/infiniflow/ragflow/pull/19653
* build(deps): bump flask from 3.1.2 to 3.1.3 by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/19659
* build(deps): bump protobufjs from 7.6.4 to 7.6.6 in /api/channels/whatsapp/gateway-node by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/19655
* build(deps): bump mermaid from 11.16.0 to 11.16.1 in /web by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/19657
* build(deps): bump langgraph-sdk from 0.3.6 to 0.3.15 by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/19660
* Fix: The 'image' parsing method has been configured, but uploading images still results in an error. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19667
* fix(engine): filter chunks by requested IDs in update-by-query by @qinling0210 in https://github.com/infiniflow/ragflow/pull/19665
* refactor(ingestion): migrate general parser and chunker contract by @jay77721 in https://github.com/infiniflow/ragflow/pull/19611
* Refactor: move chat message/reference to dedicated tables by @wangq8 in https://github.com/infiniflow/ragflow/pull/19577
* fix(web): reactively render children delimiter field by @huyua9 in https://github.com/infiniflow/ragflow/pull/18892
* fix: correct hyphens utility on agent template descriptions by @huyua9 in https://github.com/infiniflow/ragflow/pull/18901
* fix(parser): attach positions on TCADP spreadsheet JSON items by @li872 in https://github.com/infiniflow/ragflow/pull/19555
* fix: resolve template names in keyword graph search by @buua436 in https://github.com/infiniflow/ragflow/pull/19640
* fix: filter compilation status by kind by @buua436 in https://github.com/infiniflow/ragflow/pull/19666
* Fix the pipeline email parser failing on every multipart message by @JessYanCoding in https://github.com/infiniflow/ragflow/pull/19406
* fix(nlp): detect capitalized table-of-contents headings by @chuenchen309 in https://github.com/infiniflow/ragflow/pull/17012
* PY: apply cross_languages translation in Retrieval memory mode by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/19669
* Fix saving agent without compiler id should report error by @wangq8 in https://github.com/infiniflow/ragflow/pull/19672
* feat(web): explain chunker delimiter semantics in the pipeline forms by @jay77721 in https://github.com/infiniflow/ragflow/pull/19676
* Go: invite member by send mail by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/19675
* Fix(go): migration cleanup and add DB version tracking by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/19598
* Fix: ignore empty dataset config when creating from a template by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/19677
* fix(memories): derive filter options from page list query to prevent stale filters by @dcc123456 in https://github.com/infiniflow/ragflow/pull/19537
* fix(web): add table styling in chunk card content by @dcc123456 in https://github.com/infiniflow/ragflow/pull/19614
* feat(web): add virtual scrolling to CSV viewer and chunk list by @dcc123456 in https://github.com/infiniflow/ragflow/pull/19621
* feat(web): disable LaTeX math rendering for user messages by @dcc123456 in https://github.com/infiniflow/ragflow/pull/19624
* feat: add DaoXE as an OpenAI-compatible model provider by @seven7763 in https://github.com/infiniflow/ragflow/pull/19560
* fix(agent): expose token and round controls by @6ba3i in https://github.com/infiniflow/ragflow/pull/19637
* fix(ragcon): scope embedding drop_params to official endpoint by @6ba3i in https://github.com/infiniflow/ragflow/pull/19476
* fix(agent): wire MCP tools and preserve execution errors by @6ba3i in https://github.com/infiniflow/ragflow/pull/19628
* Fix: Agent: Clicking multiple times to view the version history and then clicking the initial version causes an error. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19674
* Fix: Remove redundant parameters from the Go-version knowledge base configuration page. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19668
* feat(ui): add locked option support to MultiSelect component by @dcc123456 in https://github.com/infiniflow/ragflow/pull/19658
* Fix: Knowledge Compilation - Graph - Entity count remains unchanged after search. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19652
* fix(web): fall back to dataset ID for tag KB IDs on Go backend by @dcc123456 in https://github.com/infiniflow/ragflow/pull/19648
* Fix: When the agent compiler adds a new chunk node via the "Next Step" action, it can generate multiple subsequent nodes. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19644
* fix(agent): honor multi-select canvas category filter in Go /agents listing by @euvre in https://github.com/infiniflow/ragflow/pull/19625
* fix(llm): skip dashscope/ prefix for Tongyi-Qianwen's OpenAI-compatible endpoint by @Taranum01 in https://github.com/infiniflow/ragflow/pull/19288
* fix(auth): separate OAuth JIT provisioning policy by @6ba3i in https://github.com/infiniflow/ragflow/pull/19651
* fix(web): guard tenant info in embed app modal by @huyua9 in https://github.com/infiniflow/ragflow/pull/18940
* feat(web/switch): allow dot-notation field paths in Switch condition (#14235) by @Khaostica in https://github.com/infiniflow/ragflow/pull/15071
* Fix: restrict instance name to digits, underscores, and letters by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/19680
* fix(data_source): support custom base URL and HTTP for Azure DevOps c… by @ori-frenkel in https://github.com/infiniflow/ragflow/pull/19407
* fix(bedrock): report the expected key schema instead of a JSONDecodeError (#17373) by @Anai-Guo in https://github.com/infiniflow/ragflow/pull/17374
* Fix: append attachment content to last user prompt by @wangq8 in https://github.com/infiniflow/ragflow/pull/19691
* fix(llm): honor the batch size BaiduYiyanEmbed already declares by @L4XB in https://github.com/infiniflow/ragflow/pull/19690
* Fix: use component name instead of ID by @wangq8 in https://github.com/infiniflow/ragflow/pull/19700
* Dev: add LLM_DEBUG to debug LLM request and response. by @wangq8 in https://github.com/infiniflow/ragflow/pull/19703
* fix(mineru): upload the PDF once when several page ranges are configured by @devYRPauli in https://github.com/infiniflow/ragflow/pull/19183
* fix(parser): flush pending text before table/image chunks in _build_cks by @wang393 in https://github.com/infiniflow/ragflow/pull/19521
* feat(ingestion): stop persisting business data in pipeline operation-log DSL by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19631
* fix(ingestion): include the image/table context window in the chunk text by @jay77721 in https://github.com/infiniflow/ragflow/pull/19678
* Fix: allow use - in instance_name by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/19709
* fix(dao): allowlist orderby columns on the search, chat, file and dataset lists by @MarMarLabs in https://github.com/infiniflow/ragflow/pull/19601
* fix(api): stop trusting X-Forwarded-For from every peer in the agent webhook IP whitelist by @coderdailyone in https://github.com/infiniflow/ragflow/pull/19550
* fix: improve knowledge compiler LLM handling by @buua436 in https://github.com/infiniflow/ragflow/pull/19701
* fix(deepdoc): preserve textless PDF figures for VLM extraction (#19679) by @Ritiky23 in https://github.com/infiniflow/ragflow/pull/19688
* Fix: Request artifact logs based on the selected kind. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19716
* Fix {date} not take effect in system prompt by @wangq8 in https://github.com/infiniflow/ragflow/pull/19713
* fix(chunk): gate claims/evidence panels by compilation template kind by @dcc123456 in https://github.com/infiniflow/ragflow/pull/19704
* Fix: Dataset file upload: For unsupported file types, prompt the user to configure the corresponding file parser. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19710
* fix(pipeline-log): record the pipeline Parser's parse_method, not document.parser_id (#18306) by @Taranum01 in https://github.com/infiniflow/ragflow/pull/18763
* Fix: Self-referencing data returned by the API causes the mind map page to freeze. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19720
* fix(csv-preview): move border to inner wrapper so it wraps content only by @dcc123456 in https://github.com/infiniflow/ragflow/pull/19715
* Fix: enable admin user by default by @wangq8 in https://github.com/infiniflow/ragflow/pull/19718
* fix(deepdoc): keep every inference call within one process CPU budget by @jay77721 in https://github.com/infiniflow/ragflow/pull/19695
* Fix the One and Book chunkers when Tika extracts nothing from a .doc by @JessYanCoding in https://github.com/infiniflow/ragflow/pull/19692
* perf(chunker): make hardSplitPiece O(L) with a single-encode token walk by @changshenhan in https://github.com/infiniflow/ragflow/pull/19712
* fix(parser): keep the word boundary a styled space carries into markdown by @L4XB in https://github.com/infiniflow/ragflow/pull/19693
* fix(web): correct metadata filter button semantics by @huyua9 in https://github.com/infiniflow/ragflow/pull/18911
* fix(ingestion): count child tokens and cut media context on sentences by @jay77721 in https://github.com/infiniflow/ragflow/pull/19696
* Fix: keep file API responsive during large connector ingest by @ondery in https://github.com/infiniflow/ragflow/pull/19632
* fix(parser): keep a one-row slide table instead of dropping it by @L4XB in https://github.com/infiniflow/ragflow/pull/19705
* fix(parser): accept a one-sheet dict in the Excel pandas fallback by @L4XB in https://github.com/infiniflow/ragflow/pull/19706
* fix(api): return document metadata from /dify/retrieval by @ebarkhordar in https://github.com/infiniflow/ragflow/pull/19686
* Fix user detail show not work by @wangq8 in https://github.com/infiniflow/ragflow/pull/19719
* fix(agent): accept string variable selectors in VariableAggregator by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/19413
* fix: filter self-loop knowledge compiler relations by @buua436 in https://github.com/infiniflow/ragflow/pull/19721
* docs: update knowledge compilation docs by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/19734
* docs: update MCP documents by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/19730
* fix(i18n): rename 'Max tokens' to 'Max context length' and drop misleading default by @dcc123456 in https://github.com/infiniflow/ragflow/pull/19729
* Fix: Switching the document-level graph selector should also update the corresponding total node count. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19732
* Fix: An error occurs when clicking the virtual root node of the mind map to call the API. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19731
* fix(file-commit): stop delete operations crashing the whole commit by @MarMarLabs in https://github.com/infiniflow/ragflow/pull/19654
* Optimizing recall for agentic RAG  by @yingfeng in https://github.com/infiniflow/ragflow/pull/19687
* Feat: migrate chat message and reference by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/19724
* fix(api): align Go proxy contract parity by @6ba3i in https://github.com/infiniflow/ragflow/pull/19723
* fix(go): harden connector SSRF by @mkaaad in https://github.com/infiniflow/ragflow/pull/19694
* fix(api): clamp memory list tenant_id filter to joined tenants by @coderdailyone in https://github.com/infiniflow/ragflow/pull/19739
* fix(syncer): keep the word boundary a styled space carries into markdown by @mkaaad in https://github.com/infiniflow/ragflow/pull/19722
* feat(mcp): add SDK-backed native Go MCP runtime by @6ba3i in https://github.com/infiniflow/ragflow/pull/19673
* Fix searchbot return 500, should be 200 with error message by @wangq8 in https://github.com/infiniflow/ragflow/pull/19763
* fix(agent): parse composite llm_id right-anchored on provider by @coderdailyone in https://github.com/infiniflow/ragflow/pull/19752
* feat(deepdoc): verify PaddleOCR service connectivity in check_installation by @HUAN2022A in https://github.com/infiniflow/ragflow/pull/17669
* fix(agent): reject missing models before save and run by @6ba3i in https://github.com/infiniflow/ragflow/pull/19761
* fix(parser): skip an unreadable EPUB chapter instead of losing the book by @L4XB in https://github.com/infiniflow/ragflow/pull/19708
* docs: run migrations before starting Go servers by @QAQadws in https://github.com/infiniflow/ragflow/pull/19776
* Feat: If a compilation type is not selected, the toggle for re-splitting Parser output is not displayed. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19771
* fix(ingestion): make running transition atomic across created and scheduled by @jay77721 in https://github.com/infiniflow/ragflow/pull/19764
* refa: keep builtin compilation templates out of database by @buua436 in https://github.com/infiniflow/ragflow/pull/19760
* fix(infinity): repair chunk ingestion and dataset save by @qinling0210 in https://github.com/infiniflow/ragflow/pull/19773
* Fix chunks search with keywords not working by @wangq8 in https://github.com/infiniflow/ragflow/pull/19772
* fix: change citation labels from "Fig. 1" to "[1]" by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/19781
* Fix tree navigation search with keywords not working by @wangq8 in https://github.com/infiniflow/ragflow/pull/19774
* Refactor thinking log of agentic log by @qinling0210 in https://github.com/infiniflow/ragflow/pull/19707
* fix(parser): skip table-of-contents entries when parsing docx by @wang393 in https://github.com/infiniflow/ragflow/pull/19491
* fix(parser): preserve unwrapped Markdown code fences by @AnnaSuSu in https://github.com/infiniflow/ragflow/pull/19552
* fix: align graph keyword search with Python by @buua436 in https://github.com/infiniflow/ragflow/pull/19778
* fix(benchmark): account for failed requests and incomplete streams by @ning-jl in https://github.com/infiniflow/ragflow/pull/19498
* feat(go-syncer): retry sync task errors with per-class budgets by @mkaaad in https://github.com/infiniflow/ragflow/pull/19790
* docs: update data source documentation by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/19798
* Fix: route API-Route to it's driver by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/19793
* feat(agentic_rag): slot-table harness, table rendering + pre-search/metadata channels by @Caobaining1 in https://github.com/infiniflow/ragflow/pull/19780
* feat(sandbox): complete Go sandbox settings and live refresh by @6ba3i in https://github.com/infiniflow/ragflow/pull/19783
* fix(admin): correct service details lookup by @6ba3i in https://github.com/infiniflow/ragflow/pull/19770
* fix(csv-preview): stable horizontal scroll for ragged CSV rows by @dcc123456 in https://github.com/infiniflow/ragflow/pull/19785
* Fix: Update the prompt text displayed when clicking to parse text for an unconfigured audio model. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19788
* feat(chunk): add min/max validation for tag frequency field by @dcc123456 in https://github.com/infiniflow/ragflow/pull/19794
* Refactor: Replace RAGFlowSelect with SelectWithSearch. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19795
* feat(datasource): add BackButton to data source detail page header by @dcc123456 in https://github.com/infiniflow/ragflow/pull/19796
* Fix: Selecting an option from the Wiki Graph dropdown menu also triggers an API request to fetch the latest data. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19801
* fix(web): open variable dropdown from prompt toolbar icon without prior focus by @euvre in https://github.com/infiniflow/ragflow/pull/19728
* Feature: go highlight follow python, follow #19488 by @wangq8 in https://github.com/infiniflow/ragflow/pull/19792
* Fix citation of agentic rag by @qinling0210 in https://github.com/infiniflow/ragflow/pull/19791
* Fix metadata filter issue by @wangq8 in https://github.com/infiniflow/ragflow/pull/19803
* fix(deepdoc): disable ORT BFC memory arena for pooled inference sessions by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19800
* feat(go-syncer): add checkpoint resume for MySQL/PostgreSQL connectors by @mkaaad in https://github.com/infiniflow/ragflow/pull/19762
* fix(api): return empty documents when doc_ids filter is empty by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/19809
* Refact agentic search by @yingfeng in https://github.com/infiniflow/ragflow/pull/19811
* feat: sort sync log list by status priority by @mkaaad in https://github.com/infiniflow/ragflow/pull/19777
* Enhance LLM_DEBUG with took and first token time, short embedding to 3 float by @wangq8 in https://github.com/infiniflow/ragflow/pull/19816
* feat: add Cheaper Inference as an OpenAI-compatible model provider by @aiapienthusiast in https://github.com/infiniflow/ragflow/pull/19748
* fix(parser): move PDF TOC and header/footer removal to box level by @jay77721 in https://github.com/infiniflow/ragflow/pull/19779
* fix(document): skip active and completed tasks on batch ingest by @jay77721 in https://github.com/infiniflow/ragflow/pull/19786
* fix(compiler): keep LLM runtime params when saving a document pipeline config by @euvre in https://github.com/infiniflow/ragflow/pull/19554
* Fix authorization for OpenAI-compatible agent completions by @MQ-xz in https://github.com/infiniflow/ragflow/pull/19817
* Fix: Negative values ​​can be entered for the maximum number of reflection rounds. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19819
* For no auth provider, list models will return empty by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/19827
* Refine citation for agentic RAG by @yingfeng in https://github.com/infiniflow/ragflow/pull/19822
* Fix: Restrict the parser operator so that it can only be followed by a chunker, and a chunker cannot be followed by another chunker. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19833
* refactor(agent-form): remove maxTokens switch field from sub-agent form by @dcc123456 in https://github.com/infiniflow/ragflow/pull/19830
* fix: resolve provider aliases for extractor models by @buua436 in https://github.com/infiniflow/ragflow/pull/19824
* feat(ingestion): add run-scoped progress events by @jay77721 in https://github.com/infiniflow/ragflow/pull/19775
* fix(parser): recover DOCX text boxes in the Python chunkers by @L4XB in https://github.com/infiniflow/ragflow/pull/19735
* Go: add generic Go integration test CI job (infinity) by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19702
* refa: migrate model resolution to ModelSolver by @buua436 in https://github.com/infiniflow/ragflow/pull/19820
* fix(model): move PaddleOCR api_key unwrapping from the generic provider flow into the drivers by @euvre in https://github.com/infiniflow/ragflow/pull/19823
* fix: improve UI wording and localization for parsing and chunking settings by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/19839
* Fix: store <think>content</think> to conversation_message by @wangq8 in https://github.com/infiniflow/ragflow/pull/19836
* Revert "feat(agent): support document_ids in retrieval node and tool" by @wangq8 in https://github.com/infiniflow/ragflow/pull/19837
* fix(embedding): omit unsupported user field for OVH AI endpoint by @techpreneur-a in https://github.com/infiniflow/ragflow/pull/19758
* fix(sdk): preserve completion message IDs by @AnnaSuSu in https://github.com/infiniflow/ragflow/pull/19551
* fix(tts): send required voice payload for SiliconFlow TTS and surface synthesis failures by @euvre in https://github.com/infiniflow/ragflow/pull/19812
* fix(document): hide a disabled document's knowledge-compiled chunks from retrieval by @qinling0210 in https://github.com/infiniflow/ragflow/pull/19845
* fix(go): surface the underlying error instead of generic 500 for related search and mindmap by @QAQadws in https://github.com/infiniflow/ragflow/pull/19832
* fix(ingestion): unify run duration and timestamp parsing log lines by @jay77721 in https://github.com/infiniflow/ragflow/pull/19849
* feat(go,web): port tokenizer counters, embedding limits and multi-provider web search by @yuzhichang in https://github.com/infiniflow/ragflow/pull/19802
* Fix: The Go version of the artifact tree also needs to display build logs. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19841
* fix(admin): show host and port in service status by @6ba3i in https://github.com/infiniflow/ragflow/pull/19848
* refactor(go): default Go cache/queue backend to Kvrocks and fail fast when down by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19804
* fix: update words in UI by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/19861
* fix(memory): expose server-side filter discovery by @6ba3i in https://github.com/infiniflow/ragflow/pull/19840
* fix(agent): report missing Message variables clearly by @6ba3i in https://github.com/infiniflow/ragflow/pull/19831
* fix(admin): use GetKvrocksConfig instead of undefined GetRedisConfig by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19867
* feat(models): add OpenAI GPT-5.6 model family by @Souravrajvi0 in https://github.com/infiniflow/ragflow/pull/19856
* Go: fix MySQL connection port exhaustion under high concurrency by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/19881
* Go: add pprof, use --profile to turn on by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/19858
* Go: reuse a global HTTP client and tune connection pool to prevent port exhaustion by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/19888
* fix(markdown): support non-numeric citation IDs in reference markers by @dcc123456 in https://github.com/infiniflow/ragflow/pull/19846
* fix(dataset): skip clear-chunks confirmation when re-parsing on Go by @dcc123456 in https://github.com/infiniflow/ragflow/pull/19851
* Feat/xiaomi list models refresh by @QAQadws in https://github.com/infiniflow/ragflow/pull/19855
* fix(agent): keep deferred Agent model failures in the chat stream instead of toast popups by @euvre in https://github.com/infiniflow/ragflow/pull/19829
* fix(dataset): move enable/disable below run/cancel in bulk action menu by @dcc123456 in https://github.com/infiniflow/ragflow/pull/19893
* fix(web): persist full embed dialog state in agent widget settings by @euvre in https://github.com/infiniflow/ragflow/pull/19835
* Fix create build-in dataset parser_config should be pipeline config by @wangq8 in https://github.com/infiniflow/ragflow/pull/19860
* fix: enhance PDF figure captions with vision by @buua436 in https://github.com/infiniflow/ragflow/pull/19847
* Fix wording the Similarity threshold by @wangq8 in https://github.com/infiniflow/ragflow/pull/19898
* Fix: mirror python when call llm to extract memory failed by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/19863
* Expose KVROCKS for easy access by @wangq8 in https://github.com/infiniflow/ragflow/pull/19904
* i18n: fill the remaining tr-TR gaps by @bakiburakogun in https://github.com/infiniflow/ragflow/pull/19891
* fix(web): constrain flex children in agent version history dialog by @dcc123456 in https://github.com/infiniflow/ragflow/pull/19903
* feat(model): fetch Xiaomi model list from remote API by @euvre in https://github.com/infiniflow/ragflow/pull/19862
* fix(go-agent): surface CodeExec sandbox artifacts as message attachments by @mkaaad in https://github.com/infiniflow/ragflow/pull/19852
* fix(agentic-rag): fail fast when the chat model cannot answer by @qinling0210 in https://github.com/infiniflow/ragflow/pull/19850
* Go: fix ES connection port exhaustion under high concurrency by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/19901
* Fix: The picture and audio chunkers in the knowledge base display unnecessary configuration options. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19911
* fix(agent): host code-exec artifacts instead of leaking base64 into chat by @euvre in https://github.com/infiniflow/ragflow/pull/19853
* Fix: expose rerank model error by @wangq8 in https://github.com/infiniflow/ragflow/pull/19908
* refactor(go): drop dead KvrocksCheckpointExists probe by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19864
* fix(ingestion): route bare MinerU OCR model UUID to MinerU PDF dispatch by @euvre in https://github.com/infiniflow/ragflow/pull/19639
* fix(web): surface memory-save failure as a toast in agent chat by @QAQadws in https://github.com/infiniflow/ragflow/pull/19844
* Fix the build-in pipeline name by @wangq8 in https://github.com/infiniflow/ragflow/pull/19921
* fix(api): enforce document image ownership authorization by @6ba3i in https://github.com/infiniflow/ragflow/pull/19818
* Revert "fix(go-agent): surface CodeExec sandbox artifacts as message attachments" by @wangq8 in https://github.com/infiniflow/ragflow/pull/19922
* Go: fix resource leak in ES connector by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/19912
* Fix: preserve MCP connection settings across import and edit by @georgeatparallel in https://github.com/infiniflow/ragflow/pull/19518
* Go: fix other models http clients by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/19920
* fix(web): add missing audio and email images to dataset setting ImageMap by @dcc123456 in https://github.com/infiniflow/ragflow/pull/19926
* fix(agent): surface invalid variables and deduplicate errors by @6ba3i in https://github.com/infiniflow/ragflow/pull/19919
* Perf(deepdoc): free ONNX in/out tensors per Run instead of pinning them per session by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19843
* fix: prevent bulk overflow and preserve mindmap results by @buua436 in https://github.com/infiniflow/ragflow/pull/19892
* fix(web): make audio attachments and references playable by @euvre in https://github.com/infiniflow/ragflow/pull/19842
* fix(memory): stabilize filter option ordering by @6ba3i in https://github.com/infiniflow/ragflow/pull/19925
* Removed CLAUDE.md since Claude Code supports AGENTS.md by @yuzhichang in https://github.com/infiniflow/ragflow/pull/19932
* Make kvrocks host configurable by @wangq8 in https://github.com/infiniflow/ragflow/pull/19916
* fix(service): use common.AssertURLSafe in mcp_test.go by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19931
* fix: Updated the pipeline tabs to show consistent labels. by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/19933
* fix: release reused stemmer environments by @buua436 in https://github.com/infiniflow/ragflow/pull/19935
* Fix: check SMTP config before send email by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/19929
* Fix: Switching the dataset's embedding model causes the dropdown menu to disappear. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19927
* Fix re-parse complete document need pass delete:true for go by @wangq8 in https://github.com/infiniflow/ragflow/pull/19936
* fix(web): remount chunk virtual list when result set changes by @dcc123456 in https://github.com/infiniflow/ragflow/pull/19940
* refactor(go-ingestion): remove checkpoint/resume support by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19924
* fix(api): validate memory search numeric filters by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/19883
* Fix dataset logs leak by @wangq8 in https://github.com/infiniflow/ragflow/pull/19942
* fix(go): align retrieval and chat pipeline with Python by @qinling0210 in https://github.com/infiniflow/ragflow/pull/19934
* Fix: hide MinerU.net by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/19943
* fix(config): read boolean env flags so that off means off by @L4XB in https://github.com/infiniflow/ragflow/pull/19689
* feat(agentic_rag): port the harness table/metadata paths to Go, with field-driven metadata_search by @Caobaining1 in https://github.com/infiniflow/ragflow/pull/19941
* Fix: parse negative coordinates in @@ position tags by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19945
* chore(server): document missing CLI and MCP options by @6ba3i in https://github.com/infiniflow/ragflow/pull/19900
* fix: stop SSE stream after terminal error by @midilandlu in https://github.com/infiniflow/ragflow/pull/19870
* fix: handle empty final tool answers by @midilandlu in https://github.com/infiniflow/ragflow/pull/19872
* fix: return only cited Go chat documents by @buua436 in https://github.com/infiniflow/ragflow/pull/19899
* fix(deepdoc): route PDF parse logs through zap and drive colspan e2e in-process by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19947
* fix(agent): preserve empty switch input evaluation by @6ba3i in https://github.com/infiniflow/ragflow/pull/19953
* fix(parser): keep media page-cache eviction alive after page-order break by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19938
* Fix: add a transient error, to retry by @wangq8 in https://github.com/infiniflow/ragflow/pull/19956
* Fix/minio missing file error message by @QAQadws in https://github.com/infiniflow/ragflow/pull/19918
* fix: honor Go chat citation settings and preserve final streamed citations by @QAQadws in https://github.com/infiniflow/ragflow/pull/19797
* feat(models): add recent Gemini models by @Anurag-M1 in https://github.com/infiniflow/ragflow/pull/19885
* Fix(codeexec): codeexec artifact attachments by @mkaaad in https://github.com/infiniflow/ragflow/pull/19954
* fix(parser): scope TCADP bearer token to API server host only by @Taranum01 in https://github.com/infiniflow/ragflow/pull/17672
* fix(retrieval): align Go parent-child chunk behavior by @jay77721 in https://github.com/infiniflow/ragflow/pull/19828
* fix(parser): stop inlining PDF base64 media; crop on demand at VLM and chunker by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19964
* fix(ingestion): honor the dataset language in the Go parser by @jay77721 in https://github.com/infiniflow/ragflow/pull/19966
* Go: update go.mod by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/19963
* Go CLI: fix benchmark by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/19946
* feat(parser): upgrade PDF header/footer removal with 3D cascaded fusion by @jay77721 in https://github.com/infiniflow/ragflow/pull/19957
* refactor(parser): drop write-only setup fields from picture/audio parsers by @jay77721 in https://github.com/infiniflow/ragflow/pull/19971
* fix(string_utils): keep spaces between non-Latin words by @chuenchen309 in https://github.com/infiniflow/ragflow/pull/17015
* Port PR17015 to GO by @qinling0210 in https://github.com/infiniflow/ragflow/pull/19969
* docs: add macOS notes to the launch-from-source guide by @JHWu1117 in https://github.com/infiniflow/ragflow/pull/19970
* Fix: to add dataset logs by @wangq8 in https://github.com/infiniflow/ragflow/pull/19973
* fix: align agentbot release flag handling by @buua436 in https://github.com/infiniflow/ragflow/pull/19968
* fix(web): hide ingestion canvas test run button on Go backend by @jay77721 in https://github.com/infiniflow/ragflow/pull/19977
* fix(pipeline): ignore disconnected nodes during terminal detection by @6ba3i in https://github.com/infiniflow/ragflow/pull/19976
* fix(dataset): preserve parser config on pipeline switch by @QAQadws in https://github.com/infiniflow/ragflow/pull/19978
* feat(ingestion): report sub-component parsing progress instead of a frozen 20% by @jay77721 in https://github.com/infiniflow/ragflow/pull/19965
* feat(agentic_rag): put membership and document metadata into the answer's evidence by @Caobaining1 in https://github.com/infiniflow/ragflow/pull/19981
* fix(parser): route UI "Plain Text" PDF method to the plain-text parser by @jay77721 in https://github.com/infiniflow/ragflow/pull/19979
* Fix Agent cited not show during chat by @wangq8 in https://github.com/infiniflow/ragflow/pull/19986
* fix(agent): normalize Switch operators and numeric strings by @6ba3i in https://github.com/infiniflow/ragflow/pull/19987
* fix(tag): rebuild tagging on a Go tag source index by @qinling0210 in https://github.com/infiniflow/ragflow/pull/19985
* fix(memory): pin memory filter facet options to a canonical order by @euvre in https://github.com/infiniflow/ragflow/pull/19906
* chore: update stale CLAUDE.md references after the AGENTS.md rename by @Jinzhengxu in https://github.com/infiniflow/ragflow/pull/19990
* Go CLI: show hardware by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/19991
* fix(embedding): cut inputs to the model window on every path by @yuzhichang in https://github.com/infiniflow/ragflow/pull/19997
* Fix: Add a checklist to the agent canvas to display errors found on the canvas. by @cike8899 in https://github.com/infiniflow/ragflow/pull/20000
* Fix save chilren delimiters by @wangq8 in https://github.com/infiniflow/ragflow/pull/19998
* Fix: restrict metadata field key by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/19999
* Go CLI: set/show cpu/memory/concurrency by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20002
* Refactor: default log level to warn by @wangq8 in https://github.com/infiniflow/ragflow/pull/20001
* fix(dataset): return accessible datasets for ids filter by @QAQadws in https://github.com/infiniflow/ragflow/pull/19984
* Go: add deepdoc server framework by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/19988
* refactor(mcp): centralize configuration and transport wiring by @6ba3i in https://github.com/infiniflow/ragflow/pull/20011
* feat(connector): add Zotero as a data source by @Souravrajvi0 in https://github.com/infiniflow/ragflow/pull/19742
* fix(markdown): keep a pipe in a table cell from adding a column by @L4XB in https://github.com/infiniflow/ragflow/pull/19749
* Go CLI: fix show user by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20021
* Fix wordnet concurrency panic error by @yingfeng in https://github.com/infiniflow/ragflow/pull/20023
* refactor(harness): extract retrieval wiring from server startup by @6ba3i in https://github.com/infiniflow/ragflow/pull/20012
* Fix: delete document, does not delete the real file in minio by @wangq8 in https://github.com/infiniflow/ragflow/pull/20022
* fix(parser-config): preserve child chunk settings on save by @6ba3i in https://github.com/infiniflow/ragflow/pull/20018
* fix(ingestion, web): converge cancels fast and stop logging them as errors by @jay77721 in https://github.com/infiniflow/ragflow/pull/19992
* Fix: delete datasets does not delete bucket and files in minio by @wangq8 in https://github.com/infiniflow/ragflow/pull/20024
* fix(agent): stamp PDF watermark on every page of DocsGenerator exports by @euvre in https://github.com/infiniflow/ragflow/pull/19915
* fix: synchronize document compilation and navigation projections by @buua436 in https://github.com/infiniflow/ragflow/pull/20030
* Go: fix log level by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20036
* fix(canvas): clarify unmatched Switch routing errors by @6ba3i in https://github.com/infiniflow/ragflow/pull/20038
* fix: rename parserMethod labels by @dcc123456 in https://github.com/infiniflow/ragflow/pull/20020
* fix(compilation): show update/log entry on Go backend for running and failed compiles by @dcc123456 in https://github.com/infiniflow/ragflow/pull/20037
* fix: render Manual Chunker config in dataset parser tabs by @dcc123456 in https://github.com/infiniflow/ragflow/pull/20043
* fix(agent): flag node groups detached from Begin in canvas checklist by @dcc123456 in https://github.com/infiniflow/ragflow/pull/20046
* fix(agent): filter dragged next-step menu by source and skip empty menu by @dcc123456 in https://github.com/infiniflow/ragflow/pull/20049
* fix(agent): do not create node when dragging from an input handle by @dcc123456 in https://github.com/infiniflow/ragflow/pull/20052
* fix: prevent agent message template feedback by @buua436 in https://github.com/infiniflow/ragflow/pull/20042
* refa: remove standalone tool support resolver by @buua436 in https://github.com/infiniflow/ragflow/pull/20047
* refactor(go): unify Go logging on the zap logger by @jay77721 in https://github.com/infiniflow/ragflow/pull/20026
* feat(deepdoc): make inference concurrency configurable (default 4) by @xugangqiang in https://github.com/infiniflow/ragflow/pull/20044
* Fix: add hint url for local AI by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/20039
* feat(deepdoc): share ONNX model weights across pooled native sessions by @xugangqiang in https://github.com/infiniflow/ragflow/pull/20035
* Feature: delete user all stuffs when delete user by @wangq8 in https://github.com/infiniflow/ragflow/pull/20010
* fix(api): align Go proxy route contracts by @6ba3i in https://github.com/infiniflow/ragflow/pull/20032
* fix(document): route image and presentation uploads to their dedicated parsers by @jay77721 in https://github.com/infiniflow/ragflow/pull/20061
* fix(ingestion): derive component param whitelist from component schemas by @jay77721 in https://github.com/infiniflow/ragflow/pull/20060
* fix(parser): catch tight page numbers and site-promo headers/footers by @jay77721 in https://github.com/infiniflow/ragflow/pull/20019
* refactor(parser): drop unreachable headerColEnd fallbacks from XLSX table items by @jay77721 in https://github.com/infiniflow/ragflow/pull/20053
* refa: remove chat model target resolver by @buua436 in https://github.com/infiniflow/ragflow/pull/20055
* fix(qa): read the value Excel computed, not the formula behind it by @L4XB in https://github.com/infiniflow/ragflow/pull/19737
* fix(parser): replace slog.Debug with common.Debug+zap in toc_header_footer by @jay77721 in https://github.com/infiniflow/ragflow/pull/20071
* perf(deepdoc): add single-core PDF throughput + peak-RSS benchmark by @xugangqiang in https://github.com/infiniflow/ragflow/pull/20034
* fix(chunk): scope the chunk list and detail APIs to the route's datas… by @qinling0210 in https://github.com/infiniflow/ragflow/pull/20059
* Revert "fix(api): align Go proxy route contracts" by @wangq8 in https://github.com/infiniflow/ragflow/pull/20075
* fix(deepdoc): align OCR-rec batching with Python (sort by ratio, <=16, 96*1 pool) by @xugangqiang in https://github.com/infiniflow/ragflow/pull/20041
* Fix: move migrate into init flag case list by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/20048
* Fix Connecting other operators after the `message` operator is prohibited. by @cike8899 in https://github.com/infiniflow/ragflow/pull/20076
* Fix unit test by @wangq8 in https://github.com/infiniflow/ragflow/pull/20081
* Fix to add font to support generate English PDF by @wangq8 in https://github.com/infiniflow/ragflow/pull/20078
* fix(api): add missing comma delimiter between question and extracted keywords by @ming1523 in https://github.com/infiniflow/ragflow/pull/19661
* Port PR19661 to go (keyword delimiter) by @qinling0210 in https://github.com/infiniflow/ragflow/pull/20069
* build(sh): pin ONNX Runtime archive sha256 instead of fetching it online by @xugangqiang in https://github.com/infiniflow/ragflow/pull/20082
* fix(parser): drop eager base64 table image from pdf.TableItem by @xugangqiang in https://github.com/infiniflow/ragflow/pull/20051
* fix(api): validate connector create payload by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/19472
* chore(deps-dev): bump immutable from 4.3.7 to 4.3.9 in /web by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/20086
* Update rag_analyzer.cpp (align with PR3503 in Infinity) by @qinling0210 in https://github.com/infiniflow/ragflow/pull/20083
* test(rag): cover file magic-byte helpers in file_utils by @Bruce-Yii in https://github.com/infiniflow/ragflow/pull/20072
* test(model_utils): add comprehensive tests for get_model_type_human and related functions by @Bruce-Yii in https://github.com/infiniflow/ragflow/pull/20068
* chore(deps): bump anyio from 4.9.0 to 4.14.2 in /agent/sandbox by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/20085
* chore(deps): bump soupsieve from 2.8.4 to 2.9 by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/20087
* Fix no delete skill since go has no skill by @wangq8 in https://github.com/infiniflow/ragflow/pull/20094
* fix(chat): prevent blank reference image preview when image url is not ready by @dcc123456 in https://github.com/infiniflow/ragflow/pull/20097
* Fix: Add a loading state to the button that creates a memory. by @cike8899 in https://github.com/infiniflow/ragflow/pull/20098
* chore(deps): bump go.opentelemetry.io/otel/sdk from 1.44.0 to 1.45.0 by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/20088
* test(term_weight): add edge case tests for _alphabetic_oov_frequency by @Bruce-Yii in https://github.com/infiniflow/ragflow/pull/20066
* chore(deps): bump anyio from 4.12.1 to 4.14.2 in /tools/es-to-oceanbase-migration by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/20104
* fix: add standalone CJK font for Go PDF generation by @buua436 in https://github.com/infiniflow/ragflow/pull/20095
* CI: fix kvrocks port is already allocated by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20093
* Fix admin services display by @wangq8 in https://github.com/infiniflow/ragflow/pull/20099
* Go CLI: fix --version by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20112
* fix(markdown): read the first row of a header-less table as its header by @L4XB in https://github.com/infiniflow/ragflow/pull/19750
* Fix: Restrict the canvas to a single compilation operator. by @cike8899 in https://github.com/infiniflow/ragflow/pull/20120
* fix(agent): preserve content semantics with mixed Message branches by @Bruce-Yii in https://github.com/infiniflow/ragflow/pull/19565
* fix(deepdoc): scope table/box overlap to the same page to avoid cross-page expansion by @xugangqiang in https://github.com/infiniflow/ragflow/pull/20089
* chore(deps): bump anyio from 4.12.1 to 4.14.2 by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/20105
* fix: scope document deletion compile events by @buua436 in https://github.com/infiniflow/ragflow/pull/20108
* Fix: If the extractor is not configured with a model, a prompt is displayed in the checklist. by @cike8899 in https://github.com/infiniflow/ragflow/pull/20113
* Fix: The configuration for the pipeline manual chunker cannot be displayed. by @cike8899 in https://github.com/infiniflow/ragflow/pull/20106
* fix: wait for Elasticsearch chunk updates by @buua436 in https://github.com/infiniflow/ragflow/pull/20116
* Fix delete dataset not delete bucket by @wangq8 in https://github.com/infiniflow/ragflow/pull/20110
* fix: use configured known_hosts path for SSH sandbox by @buua436 in https://github.com/infiniflow/ragflow/pull/20114
* Fix: Add the pipeline's detached operators to the checklist. by @cike8899 in https://github.com/infiniflow/ragflow/pull/20127
* Fix: Hide the mind map update button for the Go version. by @cike8899 in https://github.com/infiniflow/ragflow/pull/20130
* fix(chunk): support image updates on the chunk PATCH endpoint by @jay77721 in https://github.com/infiniflow/ragflow/pull/20107
* Fix: rollback added instance when add model failed by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/20129
* fix(agent): make begin form mode options reactive to language switch by @dcc123456 in https://github.com/infiniflow/ragflow/pull/20128
* perf(deepdoc): bucket substring-dedup scan by page and column by @xugangqiang in https://github.com/infiniflow/ragflow/pull/20122
* fix(deepdoc): keep highest-indexed table in MarkNoMergeTables page scoping by @xugangqiang in https://github.com/infiniflow/ragflow/pull/20125
* fix(storage): correct Azure SPN object existence checks by @AnnaSuSu in https://github.com/infiniflow/ragflow/pull/20003
* fix(markdown): delimit a link destination that holds a space or a parenthesis by @L4XB in https://github.com/infiniflow/ragflow/pull/19747
* fix(chunker): eliminate O(n^2) coordinate extension and redundant merge copies by @xugangqiang in https://github.com/infiniflow/ragflow/pull/20132
* fix(deepdoc): bucket table boxes by page in buildTableHTMLs by @xugangqiang in https://github.com/infiniflow/ragflow/pull/20133
* i18n(az): add Azerbaijani (Azərbaycanca) translation by @jamalkamaladdin in https://github.com/infiniflow/ragflow/pull/20131
* fix(service): drop citations and reference when the answer reports no… by @Caobaining1 in https://github.com/infiniflow/ragflow/pull/20111
* Fix: not drop uncreated unique index by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/20118
* fix(parser): accept longer closing fences during table extraction by @imexlovery in https://github.com/infiniflow/ragflow/pull/20028
* fix(parser): split JSONL records only on newline characters by @imexlovery in https://github.com/infiniflow/ragflow/pull/20029
* fix(deps): use numpy 2.x wheels on Python 3.13 (#19928) by @Souravrajvi0 in https://github.com/infiniflow/ragflow/pull/20014
* i18n: sync tr-TR with recent en changes by @bakiburakogun in https://github.com/infiniflow/ragflow/pull/20004
* Fix: clean ingestion task logs by @wangq8 in https://github.com/infiniflow/ragflow/pull/20153
* fix: resolve go CLI latest release without GitHub API by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/20159
* Go CI: fix port conflicts by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20157
* docs: drop KIBANA_USER / KIBANA_PASSWORD, which nothing reads by @lihongyuan99 in https://github.com/infiniflow/ragflow/pull/20150
* fix: update doc by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20164
* fix(dataset): read document-declared tag sources in tag aggregation by @jay77721 in https://github.com/infiniflow/ragflow/pull/20119
* fix: exclude disabled documents from Wiki products by @buua436 in https://github.com/infiniflow/ragflow/pull/20154
* Fix rerank model does not take effect when search in searchbot by @wangq8 in https://github.com/infiniflow/ragflow/pull/20158
* Fix eval error by @wangq8 in https://github.com/infiniflow/ragflow/pull/20180
* Fix: when rerank error stop chat by @wangq8 in https://github.com/infiniflow/ragflow/pull/20178
* Fix no regenerate/delete message in multiple model chats by @wangq8 in https://github.com/infiniflow/ragflow/pull/20182
* Fix: dedup model name by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/20167
* fix(parser): label PDF table items "table" only when they carry <table> markup by @devYRPauli in https://github.com/infiniflow/ragflow/pull/20092
* refactor(agent): pass checkpoint collaborators directly by @6ba3i in https://github.com/infiniflow/ragflow/pull/20168
* fix minimax model ids by @QAQadws in https://github.com/infiniflow/ragflow/pull/20184
* refactor(agent): remove unused canvas stream abstraction by @6ba3i in https://github.com/infiniflow/ragflow/pull/20169
* refactor(agent): remove obsolete component fixtures by @6ba3i in https://github.com/infiniflow/ragflow/pull/20170
* refactor(agent): remove unreachable canvas helpers by @6ba3i in https://github.com/infiniflow/ragflow/pull/20171
* refactor(agent): remove dead document io scaffolding by @6ba3i in https://github.com/infiniflow/ragflow/pull/20172
* refactor(agent): use concrete canvas state access by @6ba3i in https://github.com/infiniflow/ragflow/pull/20173
* fix(agent): reject malformed parallel checkpoints by @6ba3i in https://github.com/infiniflow/ragflow/pull/20174
* refactor(agent): remove dead switch map alias by @6ba3i in https://github.com/infiniflow/ragflow/pull/20175
* fix(agent): preserve standard JSON encodings by @6ba3i in https://github.com/infiniflow/ragflow/pull/20176
* fix(setting): suppress PaddleOCR form autofill and default URL to first option by @dcc123456 in https://github.com/infiniflow/ragflow/pull/20189
* feat(setting): auto-merge newly listed models into draft instance by @dcc123456 in https://github.com/infiniflow/ragflow/pull/20177
* feat(setting): default tool calling on for new provider instances by @dcc123456 in https://github.com/infiniflow/ragflow/pull/20195
* Fix: Switching the parsing mode when creating a dataset will cause the embedding model to change. by @cike8899 in https://github.com/infiniflow/ragflow/pull/20198
* fix(nav): navigation tree search, LLM cluster naming, cluster depth by @qinling0210 in https://github.com/infiniflow/ragflow/pull/20188
* perf(chunker): parallelize cropImageChunks across chunks by @xugangqiang in https://github.com/infiniflow/ragflow/pull/20183
* Fix rerank not working in agent retrieval by @wangq8 in https://github.com/infiniflow/ragflow/pull/20197
* Fix: The checklist allows loop operators to reference the outputs of internal operators. by @cike8899 in https://github.com/infiniflow/ragflow/pull/20205
* Fix: Document Generator – Header Text/Footer Text/Watermark Text configurations cannot be saved. by @cike8899 in https://github.com/infiniflow/ragflow/pull/20187
* fix(dataset): poll ingestion log while parsing and stop after terminal by @dcc123456 in https://github.com/infiniflow/ragflow/pull/20206
* Fix delete user to delete bucket user-downloads, table: file_commit, file_commit_item by @wangq8 in https://github.com/infiniflow/ragflow/pull/20199
* feat(chunker): stream cropped previews to storage instead of batching by @xugangqiang in https://github.com/infiniflow/ragflow/pull/20165
* fix(router): accept beta tokens on document image routes for shared chats by @jay77721 in https://github.com/infiniflow/ragflow/pull/20185
* Feat: Display wiki-related icons on the dataset's log page. by @cike8899 in https://github.com/infiniflow/ragflow/pull/20212
* Doc: add database change log by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/20211
* fix(dataset): confirm before re-parse Go documents with chunks by @dcc123456 in https://github.com/infiniflow/ragflow/pull/20210
* Fix: Switching from the dataset's "Files" page to the "Configuration" page results in the scrollbar not appearing at the top. by @cike8899 in https://github.com/infiniflow/ragflow/pull/20179
* fix: adjust sandbox SSH host configuration by @buua436 in https://github.com/infiniflow/ragflow/pull/20155
* fix(dataflow): make_encode_batch synchronous so thread_pool_exec can run it by @wuisabel-gif in https://github.com/infiniflow/ragflow/pull/16760
* fix(parser): read the separator a CSV was written with by @L4XB in https://github.com/infiniflow/ragflow/pull/19740
* fix(parser): fail an EPUB with no readable chapter instead of returning nothing by @L4XB in https://github.com/infiniflow/ragflow/pull/19814
* fix(agent): harden runtime boundary contracts by @6ba3i in https://github.com/infiniflow/ragflow/pull/20186
* fix: support wiki map writes on Infinity by @buua436 in https://github.com/infiniflow/ragflow/pull/20203
* Fix: Hide the 'local' option in the sandbox configuration. by @cike8899 in https://github.com/infiniflow/ragflow/pull/20269
* fix(tools): guard temporary table creation during mysql_migration dry run (#19570) by @Ritiky23 in https://github.com/infiniflow/ragflow/pull/19623
* feat: add Uzbek language support by @senovr in https://github.com/infiniflow/ragflow/pull/20264
* fix(parser): escape DOCX table cells in the naive, manual and qa chunkers by @L4XB in https://github.com/infiniflow/ragflow/pull/19746
* fix(chunker): skip crop+upload for non-retrievable empty-text media by @xugangqiang in https://github.com/infiniflow/ragflow/pull/20213
* Fix go workspaces APIs by @wangq8 in https://github.com/infiniflow/ragflow/pull/20272
* Go: remove unused files by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20271
* [codex] Fix OpenAI-compatible ASR provider by @HUAN2022A in https://github.com/infiniflow/ragflow/pull/19370
* fix(ingestion): read Python logs in Go backend by @jay77721 in https://github.com/infiniflow/ragflow/pull/20214
* fix(knowledge_compile): make compiled rows writable to Infinity by @qinling0210 in https://github.com/infiniflow/ragflow/pull/20208
* fix(ui): ignore outside clicks right after dialog opens by @dcc123456 in https://github.com/infiniflow/ragflow/pull/20270
* fix(pdf): rejoin line-break hyphens / strip U+FFFD in Go layout (temporary workaround) by @xugangqiang in https://github.com/infiniflow/ragflow/pull/20274
* Fix: It is not possible to select dataset metadata values ​​for the condition in the retrieval operator. by @cike8899 in https://github.com/infiniflow/ragflow/pull/20280
* disable python release schedule workflow by @myf-bee in https://github.com/infiniflow/ragflow/pull/20322
* PY: remove go related codes by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/20366
* chore(deps): bump cryptography from 46.0.7 to 50.0.0 by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/20357
* Fix Python naive_merge dropping bare delimiters (#20276 parity) by @xugangqiang in https://github.com/infiniflow/ragflow/pull/20384
* fix(parser): match the .eml extension in any case by @devYRPauli in https://github.com/infiniflow/ragflow/pull/20090
* chore(deps): bump hpack from 4.1.0 to 4.2.0 by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/20356
* fix(nlp): flush buffer on bare delimiter in _build_cks (docx one-chunk regression) by @xugangqiang in https://github.com/infiniflow/ragflow/pull/20473
* fix(deepdoc): parse negative coordinates in @@ position tags on the Python side by @lihongyuan99 in https://github.com/infiniflow/ragflow/pull/19952
* fix(citation): open external web documents directly by @dcc123456 in https://github.com/infiniflow/ragflow/pull/20458
* feat(vastbase): add Vastbase G100 document engine support by @FengYikai710 in https://github.com/infiniflow/ragflow/pull/20064
* i18n(web): clarify agent citation switch label across locales by @dcc123456 in https://github.com/infiniflow/ragflow/pull/20608
* fix(llm): list inference-profile-only Bedrock models in API-key model discovery by @kimnamu in https://github.com/infiniflow/ragflow/pull/20163
* fix: report real token usage (chat + embedding) in chats_openai by @yangyachen in https://github.com/infiniflow/ragflow/pull/20031
* Fix: pin torch to a CUDA 12.x build to match onnxruntime-gpu by @iwasaki1112 in https://github.com/infiniflow/ragflow/pull/17030
* Fix: accept Ollama duration strings in OLLAMA_KEEP_ALIVE by @jclin0311 in https://github.com/infiniflow/ragflow/pull/20224
* fix(data_source): read Google OAuth env flags so that off means off by @lihongyuan99 in https://github.com/infiniflow/ragflow/pull/20009
* fix: honour chunk_token_num in the laws tree chunker by @shoemoney in https://github.com/infiniflow/ragflow/pull/18668
* fix(task): queue one PDF task for PaddleOCR, SoMark and TCADP by @devYRPauli in https://github.com/infiniflow/ragflow/pull/20136
* Fix: remove unnecessary files and rank conf in llm_factories.json by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/20681
* fix(webdav): tolerate Last-Modified clock skew in incremental poll by @leilei3167 in https://github.com/infiniflow/ragflow/pull/19967
* Bump Infinity to v0.7.4 by @qinling0210 in https://github.com/infiniflow/ragflow/pull/20664
* fix(api): validate top_k range for Dify retrieval endpoint by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/19436
* Bugfix : Restrict provider name by @wangq8 in https://github.com/infiniflow/ragflow/pull/21078
* Fix not restrict ids length when query datasets by @wangq8 in https://github.com/infiniflow/ragflow/pull/21089
* update env by @wangq8 in https://github.com/infiniflow/ragflow/pull/21118
* Update docker compose file by @wangq8 in https://github.com/infiniflow/ragflow/pull/21120
* Fix: The historical message window size for an agent operator must be an integer. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21123
* Fix when parse with ASR model 1, no default model configure, report error; 2. model report error, should report error instead put error message as chunk content by @wangq8 in https://github.com/infiniflow/ragflow/pull/21125
* fix(parser): honor backtick-wrapped custom delimiter in txt parser by @jay77721 in https://github.com/infiniflow/ragflow/pull/21124
* fix(flow): sanitize numpy types in pipeline output before JSON serialization by @jay77721 in https://github.com/infiniflow/ragflow/pull/21121
* Fix: Remove headers and footers, and remove the original table of contents. Keep only PDF and DOCX files; delete all other file types. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21133
* fix(pipeline): load persisted parsing components in Python by @6ba3i in https://github.com/infiniflow/ragflow/pull/21137
* fix(agent): allow incomplete drafts and clarify validation errors by @6ba3i in https://github.com/infiniflow/ragflow/pull/21138
* fix(parser): recognize the plain text PDF method by @6ba3i in https://github.com/infiniflow/ragflow/pull/21139
* fix(agent): hide Run button on ingestion pipeline page by @6ba3i in https://github.com/infiniflow/ragflow/pull/21148
* fix(web): only close rename modal after a successful save by @dcc123456 in https://github.com/infiniflow/ragflow/pull/21151
* Fix: Align the `<th>` elements within the parsed chunk to the left. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21142
* fix(storage): fail fast instead of storing plaintext when crypto config is broken by @errmakov in https://github.com/infiniflow/ragflow/pull/20382
* fix(mws): handle tool-call history and prevent unbound tool execution by @nikminer in https://github.com/infiniflow/ragflow/pull/20307
* feat(llm): add Radeon Cloud provider support by @6ba3i in https://github.com/infiniflow/ragflow/pull/21154
* fix: not allow case-insensitive duplicate provider name by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/21165
* fix(chunking): apply configured overlap to DOCX text chunks by @jay77721 in https://github.com/infiniflow/ragflow/pull/21152
* Fix rereank model wrong key redirect to login page by @wangq8 in https://github.com/infiniflow/ragflow/pull/21168
* fix(chunking): preserve title hierarchy when splitting oversized chunks by @jay77721 in https://github.com/infiniflow/ragflow/pull/21167
* fix(wiki): recover transient page-writer failures after retry exhaustion by @ccclucky in https://github.com/infiniflow/ragflow/pull/20930
* fix(migration): backfill document.meta_fields into per-tenant metadata stores by @qinling0210 in https://github.com/infiniflow/ragflow/pull/21157
* Fix LLM setting for 3 search config (#20955) by @wangq8 in https://github.com/infiniflow/ragflow/pull/21197
* fix: remove KNN fallback from structure search by @buua436 in https://github.com/infiniflow/ragflow/pull/21195
* fix(chunk): write chunk_order_int on every ingestion path by @qinling0210 in https://github.com/infiniflow/ragflow/pull/21164
* Fix: knowledge base files cannot preview by @wangq8 in https://github.com/infiniflow/ragflow/pull/21200
* fix(qa): keep a comma CSV comma separated when one field holds a TAB by @devYRPauli in https://github.com/infiniflow/ragflow/pull/20925
* test: remove import-time module stubs that leak into later tests by @devYRPauli in https://github.com/infiniflow/ragflow/pull/20926
* test(rag): cover non-adjacent repeated cells in the DOCX table colspan loop by @devYRPauli in https://github.com/infiniflow/ragflow/pull/20927
* fix(parser): preserve escaped text in HTML tables by @imexlovery in https://github.com/infiniflow/ragflow/pull/20027
* fix: cap chunk list page size when filtering by chunk ids by @cike8899 in https://github.com/infiniflow/ragflow/pull/21207
* test(parser): cover JSONL records of 0 and false by @devYRPauli in https://github.com/infiniflow/ragflow/pull/20928
* Fix: On the multi-model comparison page, the "Apply," "Delete," and "Add" buttons should be disabled whenever any of the models is generating output.  by @cike8899 in https://github.com/infiniflow/ragflow/pull/21224
* fix(web): bind memory message switch state to the message by @dcc123456 in https://github.com/infiniflow/ragflow/pull/21223
* Fix: Agent - Start Component - When an input variable is set to optional: if a value is entered and then deleted, clicking "Next" triggers a "required field" error. by @cike8899 in https://github.com/infiniflow/ragflow/pull/21225
* Fix agent generated files cannot download by @wangq8 in https://github.com/infiniflow/ragflow/pull/21231
* fix: record all dataset compilation logs by @buua436 in https://github.com/infiniflow/ragflow/pull/21227
* fix(rag): allow agentic answers with retrieved evidence on 0.27.x by @ccclucky in https://github.com/infiniflow/ragflow/pull/20647
* fix(deepdoc): surface empty page-batch results from VisionParser through the task callback by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/18650
* fix(deepdoc): normalize coordinates before crop to prevent crash by @ResidualBlood in https://github.com/infiniflow/ragflow/pull/20282
* fix(agent): allow shared datasets across template blocks  by @cike8899 in https://github.com/infiniflow/ragflow/pull/21235
* fix(retrieval): drop the filter-only fallback by @qinling0210 in https://github.com/infiniflow/ragflow/pull/21242
* Fix when VLM model failure, task should fail by @wangq8 in https://github.com/infiniflow/ragflow/pull/21249
* Fix: sort memory messages by combined key by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/21246
* fix(api): do not reuse task chunks the doc store no longer has by @ebarkhordar in https://github.com/infiniflow/ragflow/pull/20191
* fix(web): accept null table_column_* fields in dataset settings form by @surlymochan in https://github.com/infiniflow/ragflow/pull/21110
* Fix deepseek VLM model does not work by @wangq8 in https://github.com/infiniflow/ragflow/pull/21253
* fix(llm): route Bedrock OpenAI GPT-5.x/GPT-6 through Converse and drop temperature/top_p/stop by @kimnamu in https://github.com/infiniflow/ragflow/pull/20161
* fix(api): return 400 for non-numeric searchbots retrieval_test parameters by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/19471
* fix: accept legacy positional task executor index by @helloxjade in https://github.com/infiniflow/ragflow/pull/16147
* fix(db): postgres in-place upgrade for model_type and tenant_*_id by @Souravrajvi0 in https://github.com/infiniflow/ragflow/pull/18781
* fix(rag/app): separate parse progress counts by @MarMarLabs in https://github.com/infiniflow/ragflow/pull/19586
* fix(agent): log validation failures and trim compat docstring by @kabishou11 in https://github.com/infiniflow/ragflow/pull/20201
* Fix: show all agent messages by @wangq8 in https://github.com/infiniflow/ragflow/pull/21264
* Fix: disable citation should not show references by @wangq8 in https://github.com/infiniflow/ragflow/pull/21268
* fix(api): fall back to create_time for an unknown orderby on the file list by @MarMarLabs in https://github.com/infiniflow/ragflow/pull/19958
* fix(api): pass the message by keyword in file-commit error replies by @MarMarLabs in https://github.com/infiniflow/ragflow/pull/19685
* fix(retrieval): scope mother chunks by document by @noooooooookro in https://github.com/infiniflow/ragflow/pull/19375
* fix(infinity): normalize *_kwd fields that Infinity returns as lists by @qinling0210 in https://github.com/infiniflow/ragflow/pull/21265
* Fix: check duplicate name when create and update instance by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/21272
* fix(opensearch): register 3072 and 3584 vector dimensions by @yosimasu in https://github.com/infiniflow/ragflow/pull/21280
* fix(chunking): split multiline records before title detection by @jay77721 in https://github.com/infiniflow/ragflow/pull/21270
* fix(deepdoc): normalize generated positions and rotated OCR page indices by @ResidualBlood in https://github.com/infiniflow/ragflow/pull/21254
* fix(docker): proxy /mcp to the MCP server in nginx by @yosimasu in https://github.com/infiniflow/ragflow/pull/21276
* fix(api): validate chunk available/available_int before int() (#19479) by @Taranum01 in https://github.com/infiniflow/ragflow/pull/19784
* fix(wiki): prevent nested progress from completing dataset tasks by @ccclucky in https://github.com/infiniflow/ragflow/pull/21296
* fix(wiki): generate wiki pages on Infinity instead of silent empty results by @qinling0210 in https://github.com/infiniflow/ragflow/pull/21290
* fix(agent): require explicit edges for DataOperations query refs by @kabishou11 in https://github.com/infiniflow/ragflow/pull/19698
* fix(structure-graph): page dataset merge past ES max_result_window by @errmakov in https://github.com/infiniflow/ragflow/pull/20400
* fix(qa): localize table pages for partial PDF ranges by @ResidualBlood in https://github.com/infiniflow/ragflow/pull/21299
* fix(agent): allow shared dataset metadata lookups by @6ba3i in https://github.com/infiniflow/ragflow/pull/21318
* Fix email parser by @wangq8 in https://github.com/infiniflow/ragflow/pull/21321
* fix(web): unmount form fields when shouldRender is false by @dcc123456 in https://github.com/infiniflow/ragflow/pull/21322
* fix(web): refetch agent log on reset (#17050) by @Taranum01 in https://github.com/infiniflow/ragflow/pull/20266
* fix(llm): unify api_base routing and fix Bedrock auth_mode compatibility by @211250105 in https://github.com/infiniflow/ragflow/pull/15826
* feat(mineru): support official mineru.net API by @huang-aoqin in https://github.com/infiniflow/ragflow/pull/19980
* fix(agent): route Categorize ties to the most specific category name by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/19411
* fix(infinity): split inserts above the 8192-row statement limit by @qinling0210 in https://github.com/infiniflow/ragflow/pull/21338
* fix(chunking): place PDF figures and tables in reading order by @qinling0210 in https://github.com/infiniflow/ragflow/pull/21337
* fix(agent): restore chat output after branch selection by @6ba3i in https://github.com/infiniflow/ragflow/pull/21378
* add release-python workflow by @myf-bee in https://github.com/infiniflow/ragflow/pull/21382
* Docs: Update version references to v0.27.3 in READMEs and docs by @asiroliu in https://github.com/infiniflow/ragflow/pull/21354

## New Contributors
* @kabishou11 made their first contribution in https://github.com/infiniflow/ragflow/pull/19206
* @huyua9 made their first contribution in https://github.com/infiniflow/ragflow/pull/18951
* @aroh3006 made their first contribution in https://github.com/infiniflow/ragflow/pull/19517
* @wadefelix made their first contribution in https://github.com/infiniflow/ragflow/pull/15998
* @coderdailyone made their first contribution in https://github.com/infiniflow/ragflow/pull/19543
* @anonrouterai made their first contribution in https://github.com/infiniflow/ragflow/pull/19561
* @brucehu made their first contribution in https://github.com/infiniflow/ragflow/pull/18598
* @Ritiky23 made their first contribution in https://github.com/infiniflow/ragflow/pull/19559
* @spicyfishPro made their first contribution in https://github.com/infiniflow/ragflow/pull/19483
* @DennyHo0917 made their first contribution in https://github.com/infiniflow/ragflow/pull/19566
* @gluedtea made their first contribution in https://github.com/infiniflow/ragflow/pull/19541
* @lucasoffchain made their first contribution in https://github.com/infiniflow/ragflow/pull/19419
* @seven7763 made their first contribution in https://github.com/infiniflow/ragflow/pull/19560
* @ori-frenkel made their first contribution in https://github.com/infiniflow/ragflow/pull/19407
* @wang393 made their first contribution in https://github.com/infiniflow/ragflow/pull/19521
* @HUAN2022A made their first contribution in https://github.com/infiniflow/ragflow/pull/17669
* @ning-jl made their first contribution in https://github.com/infiniflow/ragflow/pull/19498
* @aiapienthusiast made their first contribution in https://github.com/infiniflow/ragflow/pull/19748
* @MQ-xz made their first contribution in https://github.com/infiniflow/ragflow/pull/19817
* @georgeatparallel made their first contribution in https://github.com/infiniflow/ragflow/pull/19518
* @Anurag-M1 made their first contribution in https://github.com/infiniflow/ragflow/pull/19885
* @JHWu1117 made their first contribution in https://github.com/infiniflow/ragflow/pull/19970
* @jamalkamaladdin made their first contribution in https://github.com/infiniflow/ragflow/pull/20131
* @imexlovery made their first contribution in https://github.com/infiniflow/ragflow/pull/20028
* @lihongyuan99 made their first contribution in https://github.com/infiniflow/ragflow/pull/20150
* @senovr made their first contribution in https://github.com/infiniflow/ragflow/pull/20264
* @yangyachen made their first contribution in https://github.com/infiniflow/ragflow/pull/20031
* @jclin0311 made their first contribution in https://github.com/infiniflow/ragflow/pull/20224
* @shoemoney made their first contribution in https://github.com/infiniflow/ragflow/pull/18668
* @ccclucky made their first contribution in https://github.com/infiniflow/ragflow/pull/20930
* @ResidualBlood made their first contribution in https://github.com/infiniflow/ragflow/pull/20282
* @surlymochan made their first contribution in https://github.com/infiniflow/ragflow/pull/21110
* @noooooooookro made their first contribution in https://github.com/infiniflow/ragflow/pull/19375
* @yosimasu made their first contribution in https://github.com/infiniflow/ragflow/pull/21280
* @211250105 made their first contribution in https://github.com/infiniflow/ragflow/pull/15826

**Full Changelog**: https://github.com/infiniflow/ragflow/compare/v0.27.2...v0.27.3

---

> **Source** [infiniflow/ragflow](https://github.com/infiniflow/ragflow) · `v0.27.3` · 2026-10-23 · [upstream release](https://github.com/infiniflow/ragflow/releases/tag/v0.27.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
