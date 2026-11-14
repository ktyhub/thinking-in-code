---
title: "ragflow v0.27.1"
project: "ragflow"
repo: "infiniflow/ragflow"
tag: "v0.27.1"
version: "v0.27.1"
published: "2026-08-28"
type: "patch"
lang: "en"
summary: "New Azure DevOps connector for data sources (#18715) · New You.com web search provider for chat and agent (#18478) · New Serply web search provider for chat (#18475)"
---

# ragflow v0.27.1

## New features
- New Azure DevOps connector for data sources ([#18715](https://github.com/infiniflow/ragflow/pull/18715))
- New You.com web search provider for chat and agent ([#18478](https://github.com/infiniflow/ragflow/pull/18478))
- New Serply web search provider for chat ([#18475](https://github.com/infiniflow/ragflow/pull/18475))

## Model Support
- New Synthorai model provider ([#18830](https://github.com/infiniflow/ragflow/pull/18830))
- Missing DeepSeek models added ([#18678](https://github.com/infiniflow/ragflow/pull/18678))
- AWS Bedrock API key authentication support ([#18301](https://github.com/infiniflow/ragflow/pull/18301))

## Improvements
- Retrieval API exposes rerank_candidates_count, knn top_k, and num_candidates ([#18768](https://github.com/infiniflow/ragflow/pull/18768), [#18737](https://github.com/infiniflow/ragflow/pull/18737))
- Metadata filters pushed down to the metadata index for faster retrieval ([#18219](https://github.com/infiniflow/ragflow/pull/18219))
- Chat settings form auto-scrolls to the error location on save ([#18811](https://github.com/infiniflow/ragflow/pull/18811))
- Search page validates deleted knowledge bases ([#18522](https://github.com/infiniflow/ragflow/pull/18522))

## Bug fixes
- Fixed PDF parsing failure in chat ([#18860](https://github.com/infiniflow/ragflow/pull/18860))
- Fixed wiki compilation accepting LLM error responses ([#18857](https://github.com/infiniflow/ragflow/pull/18857))
- Fixed MinerU rendering stability, error visibility, and code block parsing ([#18617](https://github.com/infiniflow/ragflow/pull/18617))
- Fixed 0-chunk datasets not showing, preventing scrolling to fetch more datasets ([#18810](https://github.com/infiniflow/ragflow/pull/18810))
- Fixed QA Excel parser dropping rows whose answer is zero ([#17902](https://github.com/infiniflow/ragflow/pull/17902))
- Fixed naive parser treating an empty upload as a missing binary ([#18826](https://github.com/infiniflow/ragflow/pull/18826))
- Fixed encoding detection discarding confident detection results ([#15793](https://github.com/infiniflow/ragflow/pull/15793))
- Fixed reasoning-enabled chat ignoring the dialog system prompt ([#18842](https://github.com/infiniflow/ragflow/pull/18842))
- Fixed knowledge compilation using the default tenant LLM instead of the pipeline LLM ([#18572](https://github.com/infiniflow/ragflow/pull/18572))
- Fixed chat network search service not allowed to be null ([#18791](https://github.com/infiniflow/ragflow/pull/18791))
- Fixed Firefox chat auto-scroll not pinned to the bottom ([#18736](https://github.com/infiniflow/ragflow/pull/18736))
- Fixed chat auto-scroll not following streamed answers ([#18570](https://github.com/infiniflow/ragflow/pull/18570))
- Fixed parsing progress not visible after selecting upload ([#18741](https://github.com/infiniflow/ragflow/pull/18741))
- Fixed BigQuery connector constructing SQL queries incorrectly ([#17500](https://github.com/infiniflow/ragflow/pull/17500))
- Fixed WebDAV listing errors not propagated, causing prune data loss ([#18694](https://github.com/infiniflow/ragflow/pull/18694))
- Fixed cross-KB document ID collision in data source sync ([#18244](https://github.com/infiniflow/ragflow/pull/18244))
- Fixed GPUStack model discovery and audio support ([#18599](https://github.com/infiniflow/ragflow/pull/18599))
- Fixed Kimi K3 temperature ([#18564](https://github.com/infiniflow/ragflow/pull/18564))
- Fixed OCR text lost when no image2text model is configured ([#18012](https://github.com/infiniflow/ragflow/pull/18012))
- Fixed hierarchical Wiki topic navigation ([#18721](https://github.com/infiniflow/ragflow/pull/18721))

## What's Changed
* fix(web): style think/retrieving blocks in floating chat widget by @dcc123456 in https://github.com/infiniflow/ragflow/pull/18512
* fix[syncer]: github data source don't validate repo's accessible by @Haruko386 in https://github.com/infiniflow/ragflow/pull/18477
* fix: test data source connection need connector name by @Haruko386 in https://github.com/infiniflow/ragflow/pull/18495
* feat[syncer]: add data source Confluence by @Haruko386 in https://github.com/infiniflow/ragflow/pull/18501
* refactor: remove some unused model types by @Haruko386 in https://github.com/infiniflow/ragflow/pull/18502
* fix(api): report why provider model discovery failed instead of swallowing it by @olifarhaan in https://github.com/infiniflow/ragflow/pull/18027
* fix: preserve extensionless document suffix on GaussDB by @Sevenzuo in https://github.com/infiniflow/ragflow/pull/18483
* fix(memory): honor custom extraction prompts by @yzl0ng in https://github.com/infiniflow/ragflow/pull/18461
* fix(memory): normalize invalid extraction timestamps by @yzl0ng in https://github.com/infiniflow/ragflow/pull/18463
* fix(memory): require semantic valid_at timestamp by @yzl0ng in https://github.com/infiniflow/ragflow/pull/18462
* fix(nlp): differentiate alphabetic OOV term weights by @yzl0ng in https://github.com/infiniflow/ragflow/pull/18470
* fix: chat did not pass model config to provider by @Haruko386 in https://github.com/infiniflow/ragflow/pull/18485
* feat(chat): self-check contradictory prompt/dataset settings (#5703) by @peewee92 in https://github.com/infiniflow/ragflow/pull/18274
* feat(chat): add Serply web search provider by @googio in https://github.com/infiniflow/ragflow/pull/18475
* fix: clear stale tenant model ids by @01JohnMa in https://github.com/infiniflow/ragflow/pull/18210
* Feat: connector go imap by @mkaaad in https://github.com/infiniflow/ragflow/pull/18513
* fix: pass Infinity vector similarity weight by @Hellrakk in https://github.com/infiniflow/ragflow/pull/17453
* TS: update thinking description by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/18521
* fix: keep OCR text when no image2text model is configured by @Dhruv-kys in https://github.com/infiniflow/ragflow/pull/18012
* fix(chat): drain deep-research goroutines before closing the async channel by @euvre in https://github.com/infiniflow/ragflow/pull/18504
* feat(deepdoc): Python-intermediate replay parity harness + table cell-fill fixes by @xugangqiang in https://github.com/infiniflow/ragflow/pull/18516
* fix(ollama): preserve multimodal images by @lntutor in https://github.com/infiniflow/ragflow/pull/17663
* feat(cli): add --version flag to cli by @krishna231122-del in https://github.com/infiniflow/ragflow/pull/18534
* Add ulimits for cpu and gpu services in Docker Compose by @Ro0tk1t in https://github.com/infiniflow/ragflow/pull/17205
* fix: ollama chat error by @Haruko386 in https://github.com/infiniflow/ragflow/pull/18540
* fix: avoid quadratic dedup in RAG merge paths by @DeviousDrops in https://github.com/infiniflow/ragflow/pull/18135
* refactor(chunker): replace QAChunker/PresentationChunker with PairChunker/PageChunker, drop TagChunker by @xugangqiang in https://github.com/infiniflow/ragflow/pull/18523
* Update release notes by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/18544
* feat(chat): add You.com web search provider by @brainsparker in https://github.com/infiniflow/ragflow/pull/18478
* Fix: respect IME composition state on Enter key in dataset creating dialog by @iwasaki1112 in https://github.com/infiniflow/ragflow/pull/17150
* fix(dataset): preserve disabled RAPTOR and GraphRAG settings by @lntutor in https://github.com/infiniflow/ragflow/pull/17665
* Fix: handle tenant_llm without id by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/18541
* refactor(ingestion): unify auto-metadata on modular metadata and hard-delete legacy flats (BuiltInMetadata carried, not LLM) by @jay77721 in https://github.com/infiniflow/ragflow/pull/18511
* feat(title-chunker): enforce chunk_token_cap on the Go title-family chunks (#18455) by @xugangqiang in https://github.com/infiniflow/ragflow/pull/18551
* fix(deepdoc): drop nested OCR boxes before table cell fill + expose 13/14 parity gaps by @xugangqiang in https://github.com/infiniflow/ragflow/pull/18524
* fix: data source return two error once it occured by @Haruko386 in https://github.com/infiniflow/ragflow/pull/18535
* feat[syncer]: implement dingtalk AI table data source by @Haruko386 in https://github.com/infiniflow/ragflow/pull/18539
* docs: add dataset docs & fix broken links in docs by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/18553
* test: pin bare tenant_model.id resolution in resolve_model_config by @pangwangshu in https://github.com/infiniflow/ragflow/pull/18528
* fix(memory): make default prompts deterministic by @primorLee in https://github.com/infiniflow/ragflow/pull/18547
* fix(auth): strip trailing slash from OIDC issuer before discovery by @krim404 in https://github.com/infiniflow/ragflow/pull/18530
* feat(syncer): add R2 connector with checkpoint resume by @mkaaad in https://github.com/infiniflow/ragflow/pull/18548
* feat(chunker): enforce a hard token cap in the TokenChunker merge by @xugangqiang in https://github.com/infiniflow/ragflow/pull/18525
* fix: get two VLM model type when list all models by @Haruko386 in https://github.com/infiniflow/ragflow/pull/18546
* fix(db): make negative GET_LOCK timeouts work on MariaDB by @krim404 in https://github.com/infiniflow/ragflow/pull/18529
* fix: preserve blocking GaussDB advisory locks by @Sevenzuo in https://github.com/infiniflow/ragflow/pull/18506
* feat: improve incremental Wiki compilation by @buua436 in https://github.com/infiniflow/ragflow/pull/18557
* Fix: ensure tenant_ocr_id is added by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/18560
* Fix: switch image/ppt/email/audio from General to pipeline, or switch back, it report error by @wangq8 in https://github.com/infiniflow/ragflow/pull/18555
* fix(compilation-template): emit wiki presets with the contracted "example" key by @euvre in https://github.com/infiniflow/ragflow/pull/18549
* Fix: go switch user from superuser to normal user error by @wangq8 in https://github.com/infiniflow/ragflow/pull/18537
* fix(ingestion): show data pipeline column for builtin pipeline ingestion logs by @euvre in https://github.com/infiniflow/ragflow/pull/18484
* feat(syncer): add Moodle connector with checkpoint resume by @mkaaad in https://github.com/infiniflow/ragflow/pull/18554
* refactor: simplify sync task service and harden scheduler recovery by @Haruko386 in https://github.com/infiniflow/ragflow/pull/18550
* feat[syncer]: implement data source Jira by @Haruko386 in https://github.com/infiniflow/ragflow/pull/18558
* fix: render both initials for multi-word names in RAGFlowAvatar by @tryeverything24 in https://github.com/infiniflow/ragflow/pull/17320
* feat(agent): support OpenAI-compatible responses by @T1mn in https://github.com/infiniflow/ragflow/pull/18316
* fix: align wiki graph and dataset logs by @buua436 in https://github.com/infiniflow/ragflow/pull/18566
* fix: apply order_by return value in deep-pagination helpers (unordered OFFSET/LIMIT can skip/dupe rows) by @rsnetworkinginc in https://github.com/infiniflow/ragflow/pull/17325
* fix(web): sanitize the parsed markdown tree instead of the string (GHSA-jv5f-3mqh-cxwf) by @kah-ja in https://github.com/infiniflow/ragflow/pull/17590
* fix(deepdoc): dedup OCR substring fragments regardless of whitespace divergence by @xugangqiang in https://github.com/infiniflow/ragflow/pull/18568
* fix(deepdoc): preserve covered cells through span injection so span tables keep all TSR rows by @xugangqiang in https://github.com/infiniflow/ragflow/pull/18574
* Go: fix error handle by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/18573
* fix: store source key only in pipeline_operation_log.source_from by @euvre in https://github.com/infiniflow/ragflow/pull/18239
* fix(parser): allow text output_format for audio family by @xugangqiang in https://github.com/infiniflow/ragflow/pull/18575
* fix(agent): reset execution path for new sessions by @yzl0ng in https://github.com/infiniflow/ragflow/pull/18532
* Feat: Validate the knowledge base that was deleted from the search page. by @cike8899 in https://github.com/infiniflow/ragflow/pull/18522
* fix(web): keep chat auto-scroll following streamed answers by @dcc123456 in https://github.com/infiniflow/ragflow/pull/18570
* Fix knowledge compilation to use pipeline LLM instead of default tenant LLM by @wangq8 in https://github.com/infiniflow/ragflow/pull/18572
* Fix: kimi k3 temperature by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/18564
* fix(web): preserve entire subtree of title-matching nodes in TreeSelect filter by @dcc123456 in https://github.com/infiniflow/ragflow/pull/18561
* fix: implement Tongyi-Qianwen TTS via DashScope native endpoint by @euvre in https://github.com/infiniflow/ragflow/pull/17924
* fix(agent): bind query field in agentbot completions and clean up failed first-touch sessions by @euvre in https://github.com/infiniflow/ragflow/pull/17844
* fix(file): reject folder names containing "/" in create/rename by @euvre in https://github.com/infiniflow/ragflow/pull/18586
* fix(memory): persist memory valid_at/forget_at as server-local time instead of UTC by @euvre in https://github.com/infiniflow/ragflow/pull/18538
* Fix: propagate file rename to all linked knowledgebase documents by @euvre in https://github.com/infiniflow/ragflow/pull/18590
* fix(models): infer model types on catalog miss so Qwen VLMs show LLM+VLM tags by @euvre in https://github.com/infiniflow/ragflow/pull/18571
* Fix: Go chat pipeline sends image blocks to text-only models (Zhipu GLM error 1210) by @euvre in https://github.com/infiniflow/ragflow/pull/18580
* fix(engine): return error instead of panic when NATS engine is uninitialized by @euvre in https://github.com/infiniflow/ragflow/pull/18536
* Feat: Rewrite the Go-based extractor operator form. by @cike8899 in https://github.com/infiniflow/ragflow/pull/18600
* Fix: allow yiyan api key by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/18601
* fix(doc_store): retry transient connection errors in pool init by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/17196
* fix(search): fix layout clipping when search page is not fullscreen by @euvre in https://github.com/infiniflow/ragflow/pull/18519
* fix(search): do not jump to previous search results on empty query by @euvre in https://github.com/infiniflow/ragflow/pull/18520
* feat(go-syncer): add Slack connector with checkpoint resume by @mkaaad in https://github.com/infiniflow/ragflow/pull/18603
* perf(retrieval): push metadata filters down to the metadata index by @ting-hong-shieh in https://github.com/infiniflow/ragflow/pull/18219
* add dockerfile_ci for workflow and restore the single dockerfile by @myf-bee in https://github.com/infiniflow/ragflow/pull/18606
* docs: add links between docs  by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/18609
* fix(web): clicking anywhere in a switch setting row toggles the switch by @euvre in https://github.com/infiniflow/ragflow/pull/18567
* fix(metadata): batch large document ID filters by @guominjia in https://github.com/infiniflow/ragflow/pull/17394
* fix: dataset ingestion log has no other type instead of success by @Haruko386 in https://github.com/infiniflow/ragflow/pull/18605
* fix(llm): consolidate TTS / Seq2txt provider key resolution across 3 call sites by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/17688
* fix: preserve empty chat fields on GaussDB by @Sevenzuo in https://github.com/infiniflow/ragflow/pull/18445
* feat[provider]: apply model_type infer when model has no type by @Haruko386 in https://github.com/infiniflow/ragflow/pull/18593
* feat[syncer]: add data source DropBox by @Haruko386 in https://github.com/infiniflow/ragflow/pull/18612
* optimize[syncer]: optimize returning error when it occur by @Haruko386 in https://github.com/infiniflow/ragflow/pull/18613
* fix(build): name the compiler the check requires, and the option that failed by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/18594
* fix: preserve non-string values in update_metadata_to by @huang-aoqin in https://github.com/infiniflow/ragflow/pull/17346
* Feat/connector go sharepoint by @mkaaad in https://github.com/infiniflow/ragflow/pull/18618
* Refactor: Refactored the frontend logic for handling different backend services to use `pickByBackend`, thereby improving code clarity and maintainability. by @cike8899 in https://github.com/infiniflow/ragflow/pull/18614
* fix(web): keep multi-select count in sync after deleting a single file by @euvre in https://github.com/infiniflow/ragflow/pull/18589
* Fix: Owner filter count not updated after deleting a dataset by @euvre in https://github.com/infiniflow/ragflow/pull/18623
* Fix(go): use llm setting for AI summary and return raw error msg by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/18615
* fix(web): accept a single API key for Baidu YiYan by @dcc123456 in https://github.com/infiniflow/ragflow/pull/18611
* fix(deepdoc): close ocr_real text-gap divergences and pin char-to-box matching by @xugangqiang in https://github.com/infiniflow/ragflow/pull/18630
* fix(cli): count benchmark application failures by @NgoQuocViet2001 in https://github.com/infiniflow/ragflow/pull/18292
* fix(show_env): keep git errors out of the environment report by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/18597
* docs(entrypoint): show every option usage() accepts by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/18596
* fix(deepdoc): align Go table row count with Python per-char R/C in parity replay by @xugangqiang in https://github.com/infiniflow/ragflow/pull/18622
* fix(deepdoc): resolve OCR text gaps — char loss/duplication in pdf parser by @xugangqiang in https://github.com/infiniflow/ragflow/pull/18643
* Fix HTML parser treating an empty upload as a missing binary by @devYRPauli in https://github.com/infiniflow/ragflow/pull/17904
* port smart-reasoning agentic RAG to eino ADK by @yuzhichang in https://github.com/infiniflow/ragflow/pull/18654
* fix(web): give each provider instance card its own surface by @dcc123456 in https://github.com/infiniflow/ragflow/pull/18620
* fix(ingestion): honor auto-keyword/auto-question top_n sliders in extractor prompts by @euvre in https://github.com/infiniflow/ragflow/pull/18632
* fix(web): resize the mind map graph when its container changes size by @dcc123456 in https://github.com/infiniflow/ragflow/pull/18616
* fix(web): use the real Keenable mark for the tool icon by @ilya-bogin-keenable in https://github.com/infiniflow/ragflow/pull/18660
* add nats and clickhouse expose port in docker compose by @myf-bee in https://github.com/infiniflow/ragflow/pull/18577
* fix: Invoke proxy uses validated URL; remove stray debug print in Canvas.reset by @simpleqt in https://github.com/infiniflow/ragflow/pull/18657
* Remove three no-op self-assignments by @darkdi in https://github.com/infiniflow/ragflow/pull/18652
* docs: replace root-relative cross links with relative page links by @simpleqt in https://github.com/infiniflow/ragflow/pull/18664
* fix(opensearch): stop zeroing vector scores by mapping similarity to knn boost by @barandras in https://github.com/infiniflow/ragflow/pull/18662
* Revert "port smart-reasoning agentic RAG to eino ADK" by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/18670
* Fix docs format by @yingfeng in https://github.com/infiniflow/ragflow/pull/18675
* fix: account for checkpointed ingestion progress by @buua436 in https://github.com/infiniflow/ragflow/pull/18667
* fix(workerpool): close the SubmitTo/StopWait race without losing in-flight tasks by @changshenhan in https://github.com/infiniflow/ragflow/pull/18646
* fix(manual): match .docx only so legacy .doc fails cleanly by @ayam04 in https://github.com/infiniflow/ragflow/pull/18649
* feat(go-syncer): add Salesforce connector with checkpoint resume by @mkaaad in https://github.com/infiniflow/ragflow/pull/18674
* fix(ingestion): refactor tag extractor with memory index, asymmetric coverage, multi-source enrichment and worker pool sequencing by @jay77721 in https://github.com/infiniflow/ragflow/pull/18607
* security: remove leaked OAuth credentials and stop logging user secrets by @simpleqt in https://github.com/infiniflow/ragflow/pull/18658
* Fix: correct rerank #17296 - add prefetch_size by @wangq8 in https://github.com/infiniflow/ragflow/pull/18300
* feat(go-syncer): add Teams connector with positional resume by @mkaaad in https://github.com/infiniflow/ragflow/pull/18680
* fix: precompile regexes on the retrieval hot path by @changshenhan in https://github.com/infiniflow/ragflow/pull/18644
* Fix: porting #18300 to go by @wangq8 in https://github.com/infiniflow/ragflow/pull/18690
* fix(web): hide empty thinking strip in floating chat widget by @euvre in https://github.com/infiniflow/ragflow/pull/18608
* fix(agent): preserve whitespace around message references by @primorLee in https://github.com/infiniflow/ragflow/pull/18666
* fix: validate message content to prevent empty values by @6ba3i in https://github.com/infiniflow/ragflow/pull/18676
* fix: the pdf generation issue in agent by @6ba3i in https://github.com/infiniflow/ragflow/pull/18673
* Chore: add missing deepseek model by @6ba3i in https://github.com/infiniflow/ragflow/pull/18678
* fix(sdk): temperature default should be a float, not a 1-tuple by @simpleqt in https://github.com/infiniflow/ragflow/pull/18656
* fix(task_executor): cap extracted important_kwd terms to ES keyword limit by @RahilOp in https://github.com/infiniflow/ragflow/pull/17512
* Fix some comments by @wangq8 in https://github.com/infiniflow/ragflow/pull/18705
* fix: normalize model types in _factory_model_types and update calculate_model_type by @6ba3i in https://github.com/infiniflow/ragflow/pull/18685
* fix: recover panics in executeMemoryTask so a poison memory task cannot kill the ingestor worker by @xugangqiang in https://github.com/infiniflow/ragflow/pull/18687
* feat(extractor): add inline 24h Redis LLM cache for keywords, questions, and summary by @jay77721 in https://github.com/infiniflow/ragflow/pull/18716
* fix(deepdoc): prevent cross-page table over-merge from page-local Y coordinates by @xugangqiang in https://github.com/infiniflow/ragflow/pull/18688
* Feat: The extractor operator can handle multiple extraction tasks simultaneously. by @cike8899 in https://github.com/infiniflow/ragflow/pull/18717
* fix(chat): stop rag_agent forwarding message bookkeeping keys to the provider by @bharadwaj-pendyala in https://github.com/infiniflow/ragflow/pull/18663
* fix(deepdoc): propagate spanning-cell bbox so Go emits correct colspan by @xugangqiang in https://github.com/infiniflow/ragflow/pull/18707
* fix: publish wiki event when document is deleted by @buua436 in https://github.com/infiniflow/ragflow/pull/18682
* fix(agent): surface cancellation terminal state by @T1mn in https://github.com/infiniflow/ragflow/pull/18579
* fix(models): pass selected models into verify and catch constructor errors by @ondery in https://github.com/infiniflow/ragflow/pull/17132
* feat(bedrock): support API key authentication by @whhe in https://github.com/infiniflow/ragflow/pull/18301
* fix: classify .wmf files as VISUAL instead of OTHER by @devYRPauli in https://github.com/infiniflow/ragflow/pull/15822
* Refactor: rename prefetch_size to rerank_candidates by @wangq8 in https://github.com/infiniflow/ragflow/pull/18718
* fix(wiki): guard generation without compilation config by @libaojiang in https://github.com/infiniflow/ragflow/pull/18695
* docs(migration): say which volumes the backup actually covers by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/18626
* fix(api): make the API-key subject carve-out on POST /messages reachable by @olifarhaan in https://github.com/infiniflow/ragflow/pull/18026
* feat(agent): add You.com search tool by @brainsparker in https://github.com/infiniflow/ragflow/pull/18583
* fix(rag): keep search queries and page text out of connector logs by @brainsparker in https://github.com/infiniflow/ragflow/pull/18582
* fix(admin): display AWS S3 status correctly by @yaoper in https://github.com/infiniflow/ragflow/pull/17300
* [Fix] Refined the NLTK data usage directory by @paulhuiseismic in https://github.com/infiniflow/ragflow/pull/17376
* fix: substitute UserFillUp tips placeholders literally to avoid re.error by @rsnetworkinginc in https://github.com/infiniflow/ragflow/pull/17321
* fix: substitute Message variables literally to avoid re.error on regex escapes by @rsnetworkinginc in https://github.com/infiniflow/ragflow/pull/17319
* fix: remove trailing space in human-readable duration labels by @tryeverything24 in https://github.com/infiniflow/ragflow/pull/17317
* fix(web): return real navigation state from history.location getter by @tryeverything24 in https://github.com/infiniflow/ragflow/pull/17324
* fix(web): ignore IME composition Enter in tag input by @tryeverything24 in https://github.com/infiniflow/ragflow/pull/17322
* Fix: show linked knowledge base names instead of IDs when searching in the "Link to knowledge base" dialog by @euvre in https://github.com/infiniflow/ragflow/pull/18581
* fix(web): show agent opening statement in embedded floating widget by @euvre in https://github.com/infiniflow/ragflow/pull/18517
* fix(bot): align chatbot completion final frame and history persistence with python by @euvre in https://github.com/infiniflow/ragflow/pull/18526
* Fix: Add a custom placeholder to SelectWithSearch by @cike8899 in https://github.com/infiniflow/ragflow/pull/18719
* Fix: add and use paddleOCR.net model by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/18696
* fix(web): keep multi-select options in their declared order while searching by @dcc123456 in https://github.com/infiniflow/ragflow/pull/18672
* fix(web): make chat attachment images click-to-zoomable by @euvre in https://github.com/infiniflow/ragflow/pull/18259
* fix(web): make overflowing card description tooltips scrollable by @euvre in https://github.com/infiniflow/ragflow/pull/18700
* fix(setting-model): stop silently dropping a duplicate-named provider  instance by @dcc123456 in https://github.com/infiniflow/ragflow/pull/18722
* fix(go): sort provider model instances by creation time by @euvre in https://github.com/infiniflow/ragflow/pull/18684
* fix(web): chat settings panel overlapped by chat input on narrow viewports by @euvre in https://github.com/infiniflow/ragflow/pull/18723
* Fix: After deleting all compiled entities, returning to this page will show an empty data entry. by @cike8899 in https://github.com/infiniflow/ragflow/pull/18724
* fix(web): always show copy button on floating chat widget replies by @euvre in https://github.com/infiniflow/ragflow/pull/18527
* fix(router): accept share (beta) token on agent upload and attachment download by @euvre in https://github.com/infiniflow/ragflow/pull/18681
* fix(svr): distinguish empty-docs from missing-template in wiki empty-eligibility message by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/18691
* fix(common): propagate WebDAV listing errors from _list_files_recursive to avoid prune data loss by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/18694
* fix(agent): bound crawler response bodies to 4 MiB by @Lem0nTea2002 in https://github.com/infiniflow/ragflow/pull/18677
* fix: support hierarchical Wiki topic navigation by @buua436 in https://github.com/infiniflow/ragflow/pull/18721
* Fix email and presentation parsers treating an empty upload as a missing binary by @devYRPauli in https://github.com/infiniflow/ragflow/pull/18712
* Go: porting #18663 by @wangq8 in https://github.com/infiniflow/ragflow/pull/18726
* fix: skip empty knowledge compile events by @buua436 in https://github.com/infiniflow/ragflow/pull/18728
* Fix: Modify the error message for empty chat responses. by @cike8899 in https://github.com/infiniflow/ragflow/pull/18730
* fix(mcp): include dataset name in list_datasets output (#17133) by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/18710
* fix(connector): honor configured S3-compatible bucket type by @yijiaquan in https://github.com/infiniflow/ragflow/pull/18576
* fix(pdf): colspan assembly loss + TSR geometry comparison diagnostics by @xugangqiang in https://github.com/infiniflow/ragflow/pull/18727
* Fix: cross-KB document id collision in data source sync (#18116) by @sarbojitrana in https://github.com/infiniflow/ragflow/pull/18244
* Refactor: expose knn top_k and knn num_candidaties by @wangq8 in https://github.com/infiniflow/ragflow/pull/18737
* feat(go-syncer): add Azure Blob Storage connector with checkpoint resume by @mkaaad in https://github.com/infiniflow/ragflow/pull/18701
* fix(admin): honor DEFAULT_SUPERUSER_EMAIL/PASSWORD env vars in bootstrap by @Taranum01 in https://github.com/infiniflow/ragflow/pull/17674
* Fix: After selecting upload, the document is parsed directly, but the parsing progress cannot be seen. by @cike8899 in https://github.com/infiniflow/ragflow/pull/18741
* fix(web): fall back a page when the dataset file list empties by @dcc123456 in https://github.com/infiniflow/ragflow/pull/18738
* fix(web): require chunk content when creating or editing a chunk by @dcc123456 in https://github.com/infiniflow/ragflow/pull/18739
* Fix: Add the chat model to the Python version of the dataset configuration page. by @cike8899 in https://github.com/infiniflow/ragflow/pull/18735
* fix(web): keep Firefox chat auto-scroll pinned to the bottom by @dcc123456 in https://github.com/infiniflow/ragflow/pull/18736
* fix(agent): prevent path traversal and SSRF in Browser URL file upload by @simpleqt in https://github.com/infiniflow/ragflow/pull/18711
* fix(agent): redact internal terminal errors by @T1mn in https://github.com/infiniflow/ragflow/pull/18743
* Fix GPUStack model discovery and audio support by @javen-yan in https://github.com/infiniflow/ragflow/pull/18599
* Porting #18737 to go by @wangq8 in https://github.com/infiniflow/ragflow/pull/18745
* fix(pdf): restore cross-page table merge wrongly rejected by #18688 page-absolute Y gate by @xugangqiang in https://github.com/infiniflow/ragflow/pull/18740
* Fix total as the total, follow Go by @wangq8 in https://github.com/infiniflow/ragflow/pull/18750
* fix(agent): panic and raw error when auto play runs without a default TTS model by @euvre in https://github.com/infiniflow/ragflow/pull/18734
* fix(chat): propagate mind map stream failures by @Lem0nTea2002 in https://github.com/infiniflow/ragflow/pull/18733
* fix(parser): crop media sections in PDF JSON path, unify Data URI and markdown rendering by @jay77721 in https://github.com/infiniflow/ragflow/pull/18742
* fix(deepdoc): harden opendataloader table-cell parsing against bad json by @Yurii214 in https://github.com/infiniflow/ragflow/pull/17316
* fix(pdf): strip tiled watermark text from text-layer extraction by @Taranum01 in https://github.com/infiniflow/ragflow/pull/18308
* fix(agent): default missing Graph path so stored DSL cannot KeyError by @BetterAndBetterII in https://github.com/infiniflow/ragflow/pull/18753
* Fix(go): PaddleOCR -> PaddleOCR.local, PaddleOCR.net -> PaddleOCR by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/18747
* fix(chat): deliver uploaded image attachments to vision models in Go chat pipeline by @euvre in https://github.com/infiniflow/ragflow/pull/18708
* feat(data_source): add Azure DevOps connector by @erhanaydin in https://github.com/infiniflow/ragflow/pull/18715
* fix(memory): align Go semantic valid_at prompt with the Python wording by @anneheartrecord in https://github.com/infiniflow/ragflow/pull/18752
* docs(sandbox): describe how the container pool is actually sized by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/18625
* fix(sandbox): remove the sandbox containers that exist, not a pool-size range by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/18629
* fix(web): surface dataset navigation tree load failures (closes #17301) by @Souravrajvi0 in https://github.com/infiniflow/ragflow/pull/17668
* Docs: update 27.0 release notes by @wangq8 in https://github.com/infiniflow/ragflow/pull/18770
* fix(parser): clean .eml text output for chunking by @euvre in https://github.com/infiniflow/ragflow/pull/18592
* fix(web): agent explore streaming answer leaking into the switched-to session by @euvre in https://github.com/infiniflow/ragflow/pull/18686
* fix(web): stop RAGFlow brand block from overlapping embedded share header by @euvre in https://github.com/infiniflow/ragflow/pull/18729
* fix(sandbox): sync the sandbox env with the Python version it requires by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/18766
* docs(api): spell the recommendation endpoint the way the server registers it by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/18764
* docs(api): document the document-update endpoint as PATCH by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/18765
* Fix: MinerU model by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/18767
* Fix: The recommended chunk size for the token chunker is restricted to integers only. by @cike8899 in https://github.com/infiniflow/ragflow/pull/18786
* fix(agent): propagate webhook terminal states by @T1mn in https://github.com/infiniflow/ragflow/pull/18758
* fix: allow empty GitHub repositories by @buua436 in https://github.com/infiniflow/ragflow/pull/18776
* Fix: find_codec discards confident encoding detection and returns a garbage codec by @devYRPauli in https://github.com/infiniflow/ragflow/pull/15793
* fix: inherit document status when inserting chunks by @huang-aoqin in https://github.com/infiniflow/ragflow/pull/18610
* fix(naive): route misconfigured MinerU PDFs to by_mineru instead of by_plaintext (#17114) by @Taranum01 in https://github.com/infiniflow/ragflow/pull/18762
* refactor(parser): consolidate vision figure enhancement across document formats by @jay77721 in https://github.com/infiniflow/ragflow/pull/18775
* fix(parser): support webp in image OCR and correct rune count for VLM gate by @jay77721 in https://github.com/infiniflow/ragflow/pull/18785
* fix: the bigquery connector constructs sql queries u... in... by @anupamme in https://github.com/infiniflow/ragflow/pull/17500
* fix(opensearch): scope multi-document update to the target knowledge base by @AnnaSuSu in https://github.com/infiniflow/ragflow/pull/17048
* fix: accept empty ASR verification results by @buua436 in https://github.com/infiniflow/ragflow/pull/18788
* fix(web): cap embed dialog User ID input length and add data-type hint by @euvre in https://github.com/infiniflow/ragflow/pull/18773
* fix(model-provider): resolve instances by persisted ID by @6ba3i in https://github.com/infiniflow/ragflow/pull/18792
* fix(docker): prevent all foreground entrypoint.sh loops from exiting on non-zero exit by @skbs-eng in https://github.com/infiniflow/ragflow/pull/18545
* feat(data-source): add Xquik X search connector by @kriptoburak in https://github.com/infiniflow/ragflow/pull/18714
* fix(web): skip canvas autosave of empty nodes/edges by @Souravrajvi0 in https://github.com/infiniflow/ragflow/pull/18783
* fix(sdk): filter documents by multiple IDs by @WOLIKIMCHENG in https://github.com/infiniflow/ragflow/pull/18790
* fix(web): use a dedicated label for the thinking mode field by @dcc123456 in https://github.com/infiniflow/ragflow/pull/18806
* Fix: The chat network search service is allowed to be null. by @cike8899 in https://github.com/infiniflow/ragflow/pull/18791
* fix(security): authenticate sandbox executor API and isolate container network by @simpleqt in https://github.com/infiniflow/ragflow/pull/18703
* refactor(parser): extract shared parseWithTCADP core from pptx/xls/pdf wrappers by @Taranum01 in https://github.com/infiniflow/ragflow/pull/17671
* Fix 0 chunk datasets not show, cause cannot scroll to fetch more datasets by @wangq8 in https://github.com/infiniflow/ragflow/pull/18810
* fix(chat): preserve deep-research cancellation after workers finish by @Lem0nTea2002 in https://github.com/infiniflow/ragflow/pull/18692
* fix(mineru): Fix MinerU Rendering Stability, Error Visibility, and Code Block Parsing Issues by @Aeovy in https://github.com/infiniflow/ragflow/pull/18617
* fix(web): list the agent flow type card first by @dcc123456 in https://github.com/infiniflow/ragflow/pull/18808
* Chore: remove knowledge compiler from types and tests by @6ba3i in https://github.com/infiniflow/ragflow/pull/18809
* Feat: When there are errors in the chat settings form, clicking the "Save" button automatically scrolls to the location of the error. by @cike8899 in https://github.com/infiniflow/ragflow/pull/18811
* Refactor: Add rerank_candidates_count, knn top_k and num_candidates to /api/v1/retrieval by @wangq8 in https://github.com/infiniflow/ragflow/pull/18768
* fix(go): drop the removed internal/cache package from run_go_tests.sh by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/18819
* fix(build): keep the admin server in build.sh's cleanup trap by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/18816
* fix(tests): let run_tests.py --help exit 0 by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/18814
* Go: fix context, part3 by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/18821
* feat: extract images from xlsx parser by @buua436 in https://github.com/infiniflow/ragflow/pull/18800
* fix(pdf): do not cross-page merge tables whose anchor is not at page bottom by @xugangqiang in https://github.com/infiniflow/ragflow/pull/18789
* fix(document): reject config edits while document is parsing or scheduled by @xugangqiang in https://github.com/infiniflow/ragflow/pull/18804
* fix(parser): align image output_format to json and use per-family defaults (strict) by @jay77721 in https://github.com/infiniflow/ragflow/pull/18802
* Better enhance message by @wangq8 in https://github.com/infiniflow/ragflow/pull/18818
* fix(graph): use max-wins for PageRank in AnalyzeNHopPaths + correct test fixtures (#15695) by @Taranum01 in https://github.com/infiniflow/ragflow/pull/18784
* fix: align cross-language prompt separator with parser by @zhouyuchong in https://github.com/infiniflow/ragflow/pull/18831
* docs(configuration): name the ragflow serving-port key http_port by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/18825
* Fix: An error occurs when accessing the Go version of the wiki page. by @cike8899 in https://github.com/infiniflow/ragflow/pull/18835
* Refactor: refine error messages - use %W by @wangq8 in https://github.com/infiniflow/ragflow/pull/18834
* fix(pdf): remove unused context import breaking manual test build by @xugangqiang in https://github.com/infiniflow/ragflow/pull/18837
* fix(schema-sync): stop reporting BaseModel timestamps as dropped columns by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/18824
* fix(chunker): keep PDF positions on all cap-split sub-chunks so chunks don't lose their preview images by @euvre in https://github.com/infiniflow/ragflow/pull/18772
* fix(examples): wait for the DONE status the API actually returns by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/18827
* Fix the naive parser treating an empty upload as a missing binary by @devYRPauli in https://github.com/infiniflow/ragflow/pull/18826
* Refine entrypoint.sh - tidy code by @wangq8 in https://github.com/infiniflow/ragflow/pull/18838
* Fix: On the MCP list page, if the only record on the last page is deleted, the view should navigate to the previous page. by @cike8899 in https://github.com/infiniflow/ragflow/pull/18840
* Feat: sync anchor resume by @mkaaad in https://github.com/infiniflow/ragflow/pull/18795
* Fix QA Excel parser dropping rows whose answer is a zero value by @devYRPauli in https://github.com/infiniflow/ragflow/pull/17902
* Update None to Naive (Follow English) by @wangq8 in https://github.com/infiniflow/ragflow/pull/18848
* feat: add Synthorai model provider by @cuihuan in https://github.com/infiniflow/ragflow/pull/18830
* Fix OceanBase chunk order field persistence by @zcxGGmu in https://github.com/infiniflow/ragflow/pull/16997
* fix: fall back to the real office container format when extension is wrong by @jay77721 in https://github.com/infiniflow/ragflow/pull/18843
* Refactor: Translate figure 'Fig.' to Chinese by @wangq8 in https://github.com/infiniflow/ragflow/pull/18852
* fix(api): honor dialog system prompt in reasoning-enabled chat by @RahilOp in https://github.com/infiniflow/ragflow/pull/18842
* feat(agent): make MCP tool call timeout configurable by @var4dev in https://github.com/infiniflow/ragflow/pull/18016
* fix(agent): implement webhook trace polling by @T1mn in https://github.com/infiniflow/ragflow/pull/18815
* fix(web): keep typed slider values on the slider's step grid by @dcc123456 in https://github.com/infiniflow/ragflow/pull/18847
* fix(dataset): canonicalize naive parser IDs to general by @6ba3i in https://github.com/infiniflow/ragflow/pull/18839
* fix(web): cap description length at 512 characters by @dcc123456 in https://github.com/infiniflow/ragflow/pull/18836
* Fix: The models for audio and video parsers are required fields. by @cike8899 in https://github.com/infiniflow/ragflow/pull/18851
* Fix: remove deprecated mimo-v2-flash by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/18854
* fix(web): add missing hover tooltips to dataset data source action buttons by @euvre in https://github.com/infiniflow/ragflow/pull/18812
* feat(go-syncer): add OCI Storage connector with resume by @mkaaad in https://github.com/infiniflow/ragflow/pull/18850
* test(agent): pin whitespace handling of template ref patterns by @ayam04 in https://github.com/infiniflow/ragflow/pull/18720
* fix(web): dataset auto-metadata toggle reverts to off after save by @euvre in https://github.com/infiniflow/ragflow/pull/18813
* Fix: When the pipeline-paeser component switches the file type from PDF to image, the default parsing method should be OCR. by @cike8899 in https://github.com/infiniflow/ragflow/pull/18858
* fix(web): keep token chunker settings when saving in One mode by @euvre in https://github.com/infiniflow/ragflow/pull/18749
* fix(nlp): load term weight resources as UTF-8 by @yzl0ng in https://github.com/infiniflow/ragflow/pull/18467
* fix: support .wmf file extension case-insensitively and remove duplicate avi by @Wsp030914 in https://github.com/infiniflow/ragflow/pull/15498
* fix(parser): wire per-call VLM model config, harden vision dispatch by @jay77721 in https://github.com/infiniflow/ragflow/pull/18846
* Revert "fix(web): file list total count doesn't match displayed rows (#17747)" by @dcc123456 in https://github.com/infiniflow/ragflow/pull/18856
* fix(ingestion): run wiki compiler cache-less in canvas debug runs by @euvre in https://github.com/infiniflow/ragflow/pull/18828
* fix: reject wiki LLM error responses by @buua436 in https://github.com/infiniflow/ragflow/pull/18857
* Fix: parse pdf in chat by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/18860
* Fix: hide skills folder in REST API by @wangq8 in https://github.com/infiniflow/ragflow/pull/18859
* Fix rerank_candidates_count validation error by @wangq8 in https://github.com/infiniflow/ragflow/pull/18863
* fix(metadata-filter): propagate resolved document IDs to retrieval by @6ba3i in https://github.com/infiniflow/ragflow/pull/18865
* Fix Go Agents tab ordering to match Python by @6ba3i in https://github.com/infiniflow/ragflow/pull/18845
* feat(go-syncer): add S3 and S3 compatible connectors by @mkaaad in https://github.com/infiniflow/ragflow/pull/18861
* fix(chunker): proportionally slice PDF positions so sub-chunk previews match text by @jay77721 in https://github.com/infiniflow/ragflow/pull/18864
* Fix: No need to validate data that is not in dataset format by @cike8899 in https://github.com/infiniflow/ragflow/pull/18871
* Fix: rm default model in create and display builtin model by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/18875
* docs: add Chat documents by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/18870
* fix(web): derive provider base_url visibility from the provider catalog by @dcc123456 in https://github.com/infiniflow/ragflow/pull/18866
* fix: handle Jina VLM streaming responses by @buua436 in https://github.com/infiniflow/ragflow/pull/18855
* fix: map agent rounds to react steps by @buua436 in https://github.com/infiniflow/ragflow/pull/18868
* Fix oversized important keywords in OceanBase and SeekDB by @hnwyllmm in https://github.com/infiniflow/ragflow/pull/18872
* fix(rag/utils): ensure_v1 must recognize v1beta/v1alpha-style version suffixes by @chuenchen309 in https://github.com/infiniflow/ragflow/pull/16916
* fix: honor generation parameter enable flags by @buua436 in https://github.com/infiniflow/ragflow/pull/18880
* fix: support SeekDB vector score extraction by @kic635 in https://github.com/infiniflow/ragflow/pull/18874
* Refactor: add page_size support by @wangq8 in https://github.com/infiniflow/ragflow/pull/18876
* Fix: add Separator component and restore GlobalIndexModelItem in NaiveConfiguration by @cike8899 in https://github.com/infiniflow/ragflow/pull/18882
* fix(api): derive SQL retrieval tenant from dataset owner, not chat tenant by @ChendongPang in https://github.com/infiniflow/ragflow/pull/18518
* fix(web): stop the field label from opening the MultiSelect popover by @dcc123456 in https://github.com/infiniflow/ragflow/pull/18922
* Fix: reorder components in NaiveConfiguration for better structure by @cike8899 in https://github.com/infiniflow/ragflow/pull/18924
* Fix: Switching the file type of the parser operator caused the corresponding parse method to fail to switch. by @cike8899 in https://github.com/infiniflow/ragflow/pull/18931
* Fix: respect IME composition state on Enter key send by @iwasaki1112 in https://github.com/infiniflow/ragflow/pull/16922
* fix(build): pass GOPROXY to the ragflow-cli go build by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/18925
* feat(go-connector): add Box connector by @mkaaad in https://github.com/infiniflow/ragflow/pull/18934
* fix(web): stop the field label from toggling the Switch by @dcc123456 in https://github.com/infiniflow/ragflow/pull/18945
* fix(dataset): rebuild the navigation tree in the dataset owner index by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/18932
* Docs: Update version references to v0.27.1 in READMEs and docs by @asiroliu in https://github.com/infiniflow/ragflow/pull/18849
* Docs: 0.27.1 release notes by @wangq8 in https://github.com/infiniflow/ragflow/pull/18879

## New Contributors
* @olifarhaan made their first contribution in https://github.com/infiniflow/ragflow/pull/18027
* @yzl0ng made their first contribution in https://github.com/infiniflow/ragflow/pull/18461
* @googio made their first contribution in https://github.com/infiniflow/ragflow/pull/18475
* @Hellrakk made their first contribution in https://github.com/infiniflow/ragflow/pull/17453
* @Dhruv-kys made their first contribution in https://github.com/infiniflow/ragflow/pull/18012
* @krishna231122-del made their first contribution in https://github.com/infiniflow/ragflow/pull/18534
* @Ro0tk1t made their first contribution in https://github.com/infiniflow/ragflow/pull/17205
* @DeviousDrops made their first contribution in https://github.com/infiniflow/ragflow/pull/18135
* @brainsparker made their first contribution in https://github.com/infiniflow/ragflow/pull/18478
* @primorLee made their first contribution in https://github.com/infiniflow/ragflow/pull/18547
* @krim404 made their first contribution in https://github.com/infiniflow/ragflow/pull/18530
* @T1mn made their first contribution in https://github.com/infiniflow/ragflow/pull/18316
* @rsnetworkinginc made their first contribution in https://github.com/infiniflow/ragflow/pull/17325
* @kah-ja made their first contribution in https://github.com/infiniflow/ragflow/pull/17590
* @marmar9615-cloud made their first contribution in https://github.com/infiniflow/ragflow/pull/18594
* @NgoQuocViet2001 made their first contribution in https://github.com/infiniflow/ragflow/pull/18292
* @simpleqt made their first contribution in https://github.com/infiniflow/ragflow/pull/18657
* @darkdi made their first contribution in https://github.com/infiniflow/ragflow/pull/18652
* @barandras made their first contribution in https://github.com/infiniflow/ragflow/pull/18662
* @changshenhan made their first contribution in https://github.com/infiniflow/ragflow/pull/18646
* @ayam04 made their first contribution in https://github.com/infiniflow/ragflow/pull/18649
* @bharadwaj-pendyala made their first contribution in https://github.com/infiniflow/ragflow/pull/18663
* @libaojiang made their first contribution in https://github.com/infiniflow/ragflow/pull/18695
* @yijiaquan made their first contribution in https://github.com/infiniflow/ragflow/pull/18576
* @javen-yan made their first contribution in https://github.com/infiniflow/ragflow/pull/18599
* @BetterAndBetterII made their first contribution in https://github.com/infiniflow/ragflow/pull/18753
* @erhanaydin made their first contribution in https://github.com/infiniflow/ragflow/pull/18715
* @Souravrajvi0 made their first contribution in https://github.com/infiniflow/ragflow/pull/17668
* @kriptoburak made their first contribution in https://github.com/infiniflow/ragflow/pull/18714
* @zhouyuchong made their first contribution in https://github.com/infiniflow/ragflow/pull/18831
* @cuihuan made their first contribution in https://github.com/infiniflow/ragflow/pull/18830
* @Wsp030914 made their first contribution in https://github.com/infiniflow/ragflow/pull/15498
* @kic635 made their first contribution in https://github.com/infiniflow/ragflow/pull/18874
* @ChendongPang made their first contribution in https://github.com/infiniflow/ragflow/pull/18518

**Full Changelog**: https://github.com/infiniflow/ragflow/compare/v0.27.0...v0.27.1

---

> **Source** [infiniflow/ragflow](https://github.com/infiniflow/ragflow) · `v0.27.1` · 2026-08-28 · [upstream release](https://github.com/infiniflow/ragflow/releases/tag/v0.27.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
