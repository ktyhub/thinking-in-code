---
title: "ragflow v0.27.2"
project: "ragflow"
repo: "infiniflow/ragflow"
tag: "v0.27.2"
version: "v0.27.2"
published: "2026-09-10"
type: "patch"
lang: "en"
summary: "Agentic RAG: Refactored the Agentic RAG retrieval framework, significantly improving reasoning speed and benchmark performance. (#19046, #19112, #19172, #19209, #19424, #19459)"
---

# ragflow v0.27.2

## New features
- Agentic RAG: Refactored the Agentic RAG retrieval framework, significantly improving reasoning speed and benchmark performance. ([#19046](https://github.com/infiniflow/ragflow/pull/19046), [#19112](https://github.com/infiniflow/ragflow/pull/19112), [#19172](https://github.com/infiniflow/ragflow/pull/19172), [#19209](https://github.com/infiniflow/ragflow/pull/19209), [#19424](https://github.com/infiniflow/ragflow/pull/19424), [#19459](https://github.com/infiniflow/ragflow/pull/19459))
- Knowledge compilation runtime settings ([#19254](https://github.com/infiniflow/ragflow/pull/19254))
- Enforce a rate limit on the knowledge compilation pipeline ([#19156](https://github.com/infiniflow/ragflow/pull/19156))
- Knowledge graph shows total and current node counts ([#19142](https://github.com/infiniflow/ragflow/pull/19142),[#19095](https://github.com/infiniflow/ragflow/pull/19095), [#19114](https://github.com/infiniflow/ragflow/pull/19114))
- Graph search highlights the node when pressing Enter on an entity name ([#19320](https://github.com/infiniflow/ragflow/pull/19320))
- New Sitemap data source for sitemap.xml-based web ingestion ([#19344](https://github.com/infiniflow/ragflow/pull/19344))
- WebDAV connector supports custom CA certificates ([#16901](https://github.com/infiniflow/ragflow/pull/16901))
- MonkeyOCRv2 parsing support ([#18887](https://github.com/infiniflow/ragflow/pull/18887))
- Self-hosted PaddleOCR-VL deployment support ([#19011](https://github.com/infiniflow/ragflow/pull/19011))
- New Sofya search tool for agent ([#19323](https://github.com/infiniflow/ragflow/pull/19323))
- EPUB document preview ([#19242](https://github.com/infiniflow/ragflow/pull/19242))
- Excel citation sources located in document preview ([#18853](https://github.com/infiniflow/ragflow/pull/18853))

## Model Support
- New Hubris model provider ([#19341](https://github.com/infiniflow/ragflow/pull/19341))
- New llmman model provider ([#19030](https://github.com/infiniflow/ragflow/pull/19030))

## Improvements
- New RERANK_TOKEN_LIMIT_MODE configuration ([#19404](https://github.com/infiniflow/ragflow/pull/19404))
- Highlight in retrieval testing and search ([#18981](https://github.com/infiniflow/ragflow/pull/18981))
- Similarity threshold displayed as a percentage ([#18974](https://github.com/infiniflow/ragflow/pull/18974))

## UI/UX
- Completed Turkish locale ([#19009](https://github.com/infiniflow/ragflow/pull/19009))
- Search match highlighting in Team settings tables ([#15985](https://github.com/infiniflow/ragflow/pull/15985))

## Bug fixes
- Fixed images uploaded in chat being ignored by vision models ([#18884](https://github.com/infiniflow/ragflow/pull/18884))
- Fixed non-UTF-8 encodings in CSV/TXT preview and document decoding ([#19222](https://github.com/infiniflow/ragflow/pull/19222), [#19253](https://github.com/infiniflow/ragflow/pull/19253))

## What's Changed
* fix(agentic_rag): include configured system prompt in RAGTools.sys_prompt() by @chakshu-dhannawat in https://github.com/infiniflow/ragflow/pull/18927
* fix(web): make sidebar i18n reactive and refine template card/icon UI by @yooxdb in https://github.com/infiniflow/ragflow/pull/16646
* fix(dataset): align parser methods order with python by @6ba3i in https://github.com/infiniflow/ragflow/pull/18877
* feat(webdav): support custom CA certificates by @taek105 in https://github.com/infiniflow/ragflow/pull/16901
* Fix Azure embedding endpoint handling by @zcxGGmu in https://github.com/infiniflow/ragflow/pull/16993
* fix go: migrate missing table chatchannel by @myf-bee in https://github.com/infiniflow/ragflow/pull/18944
* Python && Go: fix parse status by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/18841
* fix(ollama): preserve native API base URL in OllamaCV by @iwasaki1112 in https://github.com/infiniflow/ragflow/pull/17013
* fix(file): stop is_parent_folder_exist raising on a missing parent by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/18930
* fix(agent): enforce MCP task deadlines in worker by @Lem0nTea2002 in https://github.com/infiniflow/ragflow/pull/18869
* fix: upgrade starlette to 1.3.1 (CVE-2026-54283) by @anupamme in https://github.com/infiniflow/ragflow/pull/18947
* refactor: delete the unused discord_svr.py bot script by @noron12234 in https://github.com/infiniflow/ragflow/pull/17682
* Refactor: make all url inside tooltip as link by @wangq8 in https://github.com/infiniflow/ragflow/pull/18943
* Py: add update_time in select list when list data sync logs by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/18867
* fix: include filename in file download Content-Disposition header by @huang-aoqin in https://github.com/infiniflow/ragflow/pull/17105
* fix(embed): drop_params: True was rejected by Together AI and other strict providers by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/18627
* fix(rag): key Infinity field_map by original column names, not pinyin by @Taranum01 in https://github.com/infiniflow/ragflow/pull/18318
* feat(go-syncer): add Zendesk connector by @mkaaad in https://github.com/infiniflow/ragflow/pull/18961
* Fix: Remove the empty response field from the retrieval operator. by @cike8899 in https://github.com/infiniflow/ragflow/pull/18963
* fix(agent): reject fractional integer DSL parameters by @6ba3i in https://github.com/infiniflow/ragflow/pull/18964
* Fix: update tooltip url to correct link by @wangq8 in https://github.com/infiniflow/ragflow/pull/18966
* fix: Introduce argparse to resolve hardcoded parameter values in the SDK test file by @Ricardo-shuo-liu in https://github.com/infiniflow/ragflow/pull/16763
* Fix dataset LLM tooltip by @wangq8 in https://github.com/infiniflow/ragflow/pull/18971
* fix(web): block saving an agent when an edited Parser node is invalid by @dcc123456 in https://github.com/infiniflow/ragflow/pull/18967
* fix(ingestion): carry component outputs in the pipeline operation log DSL by @euvre in https://github.com/infiniflow/ragflow/pull/18774
* feat(web): display similarity threshold as a percentage by @dcc123456 in https://github.com/infiniflow/ragflow/pull/18974
* fix(agent): let global variable textareas resize vertically by @dcc123456 in https://github.com/infiniflow/ragflow/pull/18972
* fix(web): stop the note node resize handle from covering its textarea by @dcc123456 in https://github.com/infiniflow/ragflow/pull/18969
* fix(dataflow): decode non-UTF-8 HTML files before parsing in Go pipeline by @euvre in https://github.com/infiniflow/ragflow/pull/18801
* fix(parser): drop merged-block and wrapped PDF TOC entries when remove_toc is enabled by @euvre in https://github.com/infiniflow/ragflow/pull/18793
* Fix: On the dataset configuration page of the Go version, no error message appears when saving if mandatory fields are left blank. by @cike8899 in https://github.com/infiniflow/ragflow/pull/18970
* Fix the tooltip wrong url by @wangq8 in https://github.com/infiniflow/ragflow/pull/18975
* fix(admin): stop silent superuser creation on auth probe and harden bootstrap by @simpleqt in https://github.com/infiniflow/ragflow/pull/18702
* docs(deepdoc): point the build examples at the Dockerfile's real path by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/18820
* Fix: For datasets with doc, docx, or markdown formats, the "remove original directory" toggle fails to save successfully. by @cike8899 in https://github.com/infiniflow/ragflow/pull/18976
* fix(ingestor,nats): recover consumption, fail fast on NATS startup and harden reconciliation (P0 blockers) by @jay77721 in https://github.com/infiniflow/ragflow/pull/18942
* Fix(chat): reorder Rerank and Cross Language form fields in ChatPromptEngine by @cike8899 in https://github.com/infiniflow/ragflow/pull/18978
* Fix: remove deprecated qwen tts model by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/18977
* feat(models): add 13 Volcengine Ark chat models by @chyroc in https://github.com/infiniflow/ragflow/pull/18973
* fix(agent): make user added emppty entries fail to save by @6ba3i in https://github.com/infiniflow/ragflow/pull/18979
* Feature: add highlight for retrieval testing and search by @wangq8 in https://github.com/infiniflow/ragflow/pull/18981
* docs：fix some bugs of documents by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/18984
* Fix: pass the kb id to the wiki page insert-error warning by @muhzuhaib in https://github.com/infiniflow/ragflow/pull/18985
* Refine agentic search by @yingfeng in https://github.com/infiniflow/ragflow/pull/18798
* Refactor agentic search by @yingfeng in https://github.com/infiniflow/ragflow/pull/19000
* feat(parser): zero-alloc rune count, bmp/tiff decoders, and clean OCR gate tests (#18794) by @avikumart in https://github.com/infiniflow/ragflow/pull/18829
* feat(dataflow): cap debug-run chunk preview and surface run limits in tooltip by @xugangqiang in https://github.com/infiniflow/ragflow/pull/18881
* fix(agent): persist webhook traces as JSON objects by @T1mn in https://github.com/infiniflow/ragflow/pull/18883
* feat: locate Excel citation sources in document preview by @huang-aoqin in https://github.com/infiniflow/ragflow/pull/18853
* fix(agentic_rag): return calculate tool result by @yzl0ng in https://github.com/infiniflow/ragflow/pull/19012
* Refactor: update similarity threshold tooltip from 0.2 to 20 by @wangq8 in https://github.com/infiniflow/ragflow/pull/19033
* Revert "Refactor: update similarity threshold tooltip from 0.2 to 20" by @wangq8 in https://github.com/infiniflow/ragflow/pull/19034
* Refactor: update similarity threshold tooltip from 0.2 to 20 by @wangq8 in https://github.com/infiniflow/ragflow/pull/19036
* fix(agentic_rag): normalize structure answers by @yzl0ng in https://github.com/infiniflow/ragflow/pull/19025
* Fix: Limit the input box for automatic tags to only accept integers by @cike8899 in https://github.com/infiniflow/ragflow/pull/19038
* Refactor agentic search by @yingfeng in https://github.com/infiniflow/ragflow/pull/19040
* Fix llm.py by @qinling0210 in https://github.com/infiniflow/ragflow/pull/19037
* Feature: support self-hosted PaddleOCR-VL deployments by @maxiaolong03 in https://github.com/infiniflow/ragflow/pull/19011
* fix(parser): make PDF "remove TOC" and "remove header/footer" options work without DeepDoc inference by @euvre in https://github.com/infiniflow/ragflow/pull/18602
* feat(deepdoc): in-process static-linked ONNX Runtime DeepDoc backend by @xugangqiang in https://github.com/infiniflow/ragflow/pull/18731
* feat(go-syncer): add OneDrive connector with lazy fetch and resume by @mkaaad in https://github.com/infiniflow/ragflow/pull/18968
* fix(agent): allow deleting edges inside iteration on canvas by @huang-aoqin in https://github.com/infiniflow/ragflow/pull/16925
* fix(web): warn about empty Message component content on agent save by @euvre in https://github.com/infiniflow/ragflow/pull/18993
* fix(rag/nlp): include question_tks when reranking with a rerank model by @immuhammadfurqan in https://github.com/infiniflow/ragflow/pull/18473
* fix(api): return parsing-status counts at the top level of each dataset (#17595) by @Anai-Guo in https://github.com/infiniflow/ragflow/pull/17611
* Fix: pass Qwen3 enable_thinking via chat_template_kwargs by @FJH886 in https://github.com/infiniflow/ragflow/pull/17592
* fix(common): redact OAuth / API credentials from ConnectorRunner error logs by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/17588
* fix(rag): exclude overflow chunk from kb_prompt token budget by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/16377
* fix(chat): keep reasoning chats grounded when LLM lacks tool calling by @georgelichen in https://github.com/infiniflow/ragflow/pull/18983
* Add go build files , reduce image size, update entrypoint-go.sh by @myf-bee in https://github.com/infiniflow/ragflow/pull/19041
* fix(agent): sanitize Excel output sheet names by @uczltw6 in https://github.com/infiniflow/ragflow/pull/18505
* fix(migrations): parse the --config flag the usage line documents by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/18817
* feat(go-syncer): add Airtable connector with lazy fetch and resume by @mkaaad in https://github.com/infiniflow/ragflow/pull/19032
* fix(web): default NumberInput precision to 2 by @dcc123456 in https://github.com/infiniflow/ragflow/pull/19051
* fix(docker): let the backend launcher retry loops actually run by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/18926
* fix: allow special tokens in token counting by @buua436 in https://github.com/infiniflow/ragflow/pull/19052
* Fix: KnowledgebaseService.dfs_update crashes on stored None parser_config values by @BaptisteJosh in https://github.com/infiniflow/ragflow/pull/15964
* docs: add search docs by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/19057
* Fix: pipeline with compilation + transfomer (extrator) does not work by @wangq8 in https://github.com/infiniflow/ragflow/pull/19045
* fix(agent): warn at save time when an Agent node has no model selected by @euvre in https://github.com/infiniflow/ragflow/pull/18996
* fix(dify): search the dataset owner's index, not the caller's by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/18987
* fix(rag): return 1-D vector from BaiduYiyan encode_queries by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/16398
* feat(web): complete the Turkish locale and fix broken placeholders by @bakiburakogun in https://github.com/infiniflow/ragflow/pull/19009
* Fix: Clicking the save button on the Go version of the dataset configuration page automatically locates the field where the error occurred. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19061
* fix(sdk): reject conflicting dataset ID filters by @WOLIKIMCHENG in https://github.com/infiniflow/ragflow/pull/19047
* fix(memory): restore Python-side rules in Go TYPE_INSTRUCTIONS by @anneheartrecord in https://github.com/infiniflow/ragflow/pull/19002
* Restore visible Markdown list styling in chat by @georgelichen in https://github.com/infiniflow/ragflow/pull/19010
* fix(serenedb): keep the available_int=0 chunk filter by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/18928
* fix(confluence): stop passing start/end to _retrieve_all_slim_docs by @Anai-Guo in https://github.com/infiniflow/ragflow/pull/18995
* fix: retrieve with the assistant's configured settings by @martincivan in https://github.com/infiniflow/ragflow/pull/19016
* feat(go-syncer): add Asana connector with resume and prune by @mkaaad in https://github.com/infiniflow/ragflow/pull/19049
* fix(web): shorten the empty-state copy for the wiki tab by @dcc123456 in https://github.com/infiniflow/ragflow/pull/19062
* fix(chat): images uploaded in chat UI were ignored by vision models (agentic loop / Go attachment drop) by @euvre in https://github.com/infiniflow/ragflow/pull/18884
* fix(web): bound port and max records in the Execute SQL form by @dcc123456 in https://github.com/infiniflow/ragflow/pull/19072
* Feat: List all file type parsing configurations for the parser operator. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19050
* docs: delete redundant  docs by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/19078
* fix: always use full hierarchical path for Confluence attachment/page identifiers by @OSHA-B in https://github.com/infiniflow/ragflow/pull/16711
* fix: compare datasets by resolved embedding model name by @yiheng-kkk in https://github.com/infiniflow/ragflow/pull/19069
* fix(test): give the rag_agent dialog stub the retrieval settings it now reads by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/19081
* Go: refactor by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/19084
* fix(search): honor the cached document-deleted flag so deleted docs stay pruned by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/19070
* fix(agent): prevent concurrent webhook trace overwrites by @T1mn in https://github.com/infiniflow/ragflow/pull/19026
* feat(agent): expose Iteration max_concurrency on the canvas by @huang-aoqin in https://github.com/infiniflow/ragflow/pull/19066
* feat(go-syncer): add SeaFile connector by @mkaaad in https://github.com/infiniflow/ragflow/pull/19073
* fix(agent): avoid shared StringTransform merge arguments by @alaningtrump in https://github.com/infiniflow/ragflow/pull/19023
* Fix don't send an empty tools array by @martincivan in https://github.com/infiniflow/ragflow/pull/19015
* fix(go): parse PPTX one chunk per slide by @euvre in https://github.com/infiniflow/ragflow/pull/18254
* fix(ingestion): make NATS task scheduling crash-safe by @jay77721 in https://github.com/infiniflow/ragflow/pull/19074
* Refactor agentic search by @yingfeng in https://github.com/infiniflow/ragflow/pull/19046
* fix(go-syncer): always use full hierarchical path for Confluence iden… by @mkaaad in https://github.com/infiniflow/ragflow/pull/19085
* fix(web): fall back to backend defaults for unset search LLM parameters by @LuckTerence in https://github.com/infiniflow/ragflow/pull/19079
* refactor: add context_length for list_models and refactor content_length by @Haruko386 in https://github.com/infiniflow/ragflow/pull/19075
* CI : fix ci step ragflow_native_backend requires the following condition by @myf-bee in https://github.com/infiniflow/ragflow/pull/19086
* Fix 2 continuous images, the first image got lost by @wangq8 in https://github.com/infiniflow/ragflow/pull/19083
* Refactor: add total/returned entities/relations by @wangq8 in https://github.com/infiniflow/ragflow/pull/19095
* fix(nats): use DiscardNew for all JetStream work-queue streams by @jay77721 in https://github.com/infiniflow/ragflow/pull/19099
* fix(agent): finalize interrupted webhook traces by @T1mn in https://github.com/infiniflow/ragflow/pull/19089
* fix(memory): put the keyword weight in the text slot of the fusion expression by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/18989
* fix(agent): reject only truly-empty delimiter entries on canvas save by @euvre in https://github.com/infiniflow/ragflow/pull/19048
* fix(web): honor webhook trace terminal status by @T1mn in https://github.com/infiniflow/ragflow/pull/19087
* feat(go-syncer): add BigQuery connector by @mkaaad in https://github.com/infiniflow/ragflow/pull/19106
* Fix: The test database connection failed and repeated errors. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19102
* Fix: Allow deletion of selected tags in the extractor operator form. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19097
* fix(agent): prevent duplicate tools on one Agent node at creation by @euvre in https://github.com/infiniflow/ragflow/pull/19053
* Go: add context, part5 by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/19108
* fix(document-preview): keep xlsx sheet tabs on one row, drop duplicate fetch by @dcc123456 in https://github.com/infiniflow/ragflow/pull/19105
* fix(memory): use the shared NumberInput for the temperature field by @dcc123456 in https://github.com/infiniflow/ragflow/pull/19109
* Fix: check minerU.net connection by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/19115
* fix error where returns a no dataset found error in a 500 wrapper by @6ba3i in https://github.com/infiniflow/ragflow/pull/19059
* fix(agentic_rag): table-aware retrieval truncation fixes + action-session loop guards       by @Caobaining1 in https://github.com/infiniflow/ragflow/pull/19112
* Fix: Use default pipeline configuration when parsing documents via HTTP API- #13297 by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/19116
* docs: update glossary docs by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/19077
* fix(agent): propagate deferred stream errors through Message by @Lem0nTea2002 in https://github.com/infiniflow/ragflow/pull/18796
* build: bump office_oxide to v0.1.9 and pdf_oxide to v0.3.73 by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19124
* build(deps): bump nanoid from 3.3.11 to 3.3.18 in /web by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/19128
* fix(deepdoc): harden ORT build guard, OCR test contract by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19082
* Fix(parser): raise legacy .doc parsing fidelity via structured IR by @xugangqiang in https://github.com/infiniflow/ragflow/pull/18192
* build(deps): bump google.golang.org/grpc from 1.82.1 to 1.83.1 by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/19127
* fix(utils): round minimum_should_match fraction instead of truncating by @RahilOp in https://github.com/infiniflow/ragflow/pull/19031
* fix(docker): disable stale macOS nginx mount by @dynnfa in https://github.com/infiniflow/ragflow/pull/19126
* fix(test): expect the bare attachment disposition the download path emits by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/19132
* test(chunker): pin current applyChildrenDelimText behavior (#17876 partial coverage) by @Taranum01 in https://github.com/infiniflow/ragflow/pull/18315
* fix(rag/app/table): keep table cells that column type conversion cannot represent by @OmarFaig in https://github.com/infiniflow/ragflow/pull/18460
* fix(file): Fix link folder always use 'add' and use API result to refresh linked datasets by @dcc123456 in https://github.com/infiniflow/ragflow/pull/19134
* fix(integration): register in-process DeepDoc backend + correct stale chunk/knn assertions by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19107
* Refactor: add total/returned entities/relations 2 by @wangq8 in https://github.com/infiniflow/ragflow/pull/19114
* fix(tagging): stop a non-object LLM reply from failing the whole batch by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/18991
* Feat: Displays the total number of nodes and the current number of nodes in ArtifactForceGraph. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19142
* fix(agent): restore message download button when output file type is selected by @euvre in https://github.com/infiniflow/ragflow/pull/18955
* build(deps): bump nltk from 3.10.0 to 3.10.3 by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/19129
* fix(mcp): bound metadata cache and prevent partial pagination caching by @6ba3i in https://github.com/infiniflow/ragflow/pull/19138
* feat(ingestor): raise default max_concurrent_workers from 1 to 2 by @jay77721 in https://github.com/infiniflow/ragflow/pull/19133
* fix(ingestion): preserve run input on resume and detach context for terminal cleanup by @jay77721 in https://github.com/infiniflow/ragflow/pull/19088
* fix(agent): reject empty message rows when saving canvas by @6ba3i in https://github.com/infiniflow/ragflow/pull/19149
* Fix: link to existing dataset clean the document chunks by @wangq8 in https://github.com/infiniflow/ragflow/pull/19143
* Fix: hide forgotten message by default. by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/19144
* fix(parser): propagate cancellation while waiting for vision figure futures by @iwasaki1112 in https://github.com/infiniflow/ragflow/pull/17014
* test(deepdoc): add 1.pdf colspan end-to-end replay test by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19139
* refactor(go-syncer): route GetConnector access errors through helper by @mkaaad in https://github.com/infiniflow/ragflow/pull/19146
* Fix NameError in audio chunker when file extension is missing or unsupported by @blueOf in https://github.com/infiniflow/ragflow/pull/19007
* chore(deepdoc): source native testdata from infiniflow/ragflow-testdata by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19136
* feat(nats): add shared NatsKVStore helper for cache namespaces by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19148
* fix: align wiki alteration provenance by @buua436 in https://github.com/infiniflow/ragflow/pull/19140
* fix(mcp): read total_datasets so the fetch-all early-exit works by @xu-jia-ming in https://github.com/infiniflow/ragflow/pull/19020
* Fix: restrict tenant updates to the current user's own tenant by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/19155
* Refactor: delete not used code by @wangq8 in https://github.com/infiniflow/ragflow/pull/19164
* Fix: check required dataset_id/memory_id on save by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/19125
* Fix: Remove the mode from the compiler operator. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19150
* fix(dify): return the custom document metadata the handler already fetches by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/19123
* docs: update documentation to align with current Python API implementation by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/19163
* fix(deepdoc): raise TextDetector limit_side_len default from 960 to 2048 (#18509) by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/18888
* refactor(pptx): simplify buildPPTXJSONSections + drop Python-compat wording (Follow-ups 1+2 of #19076) by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/19098
* fix(parser): prefer structured IR over flatter views for .doc by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19147
* docs(examples): add document lifecycle API examples by @6ba3i in https://github.com/infiniflow/ragflow/pull/19153
* Fix: get rid of graphrag raptor in parser_config in REST API by @wangq8 in https://github.com/infiniflow/ragflow/pull/19161
* build(deps-dev): bump browserslist from 4.28.1 to 4.28.8 in /web by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/19170
* fix(file): classify ancestry authorization failures as data errors by @6ba3i in https://github.com/infiniflow/ragflow/pull/19157
* fix(web): let the editable description textarea scroll when clamped by @dcc123456 in https://github.com/infiniflow/ragflow/pull/19167
* Fix: Set the rerank model for the search page as a required field. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19154
* Fix: The select-all option in the dataset file list and file management now only applies to the current page; switching pages will clear the previous selection. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19158
* Fix: invalidate user when change password or set user as inactive by @wangq8 in https://github.com/infiniflow/ragflow/pull/19186
* build(deps): bump pypdf from 6.15.0 to 6.16.1 by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/19171
* Stop splitting resume documents into per-page parsing tasks by @devYRPauli in https://github.com/infiniflow/ragflow/pull/18713
* Adjust navigation tools for agentic search by @yingfeng in https://github.com/infiniflow/ragflow/pull/19172
* fix(parser): stop the .msg date test depending on the host timezone by @devYRPauli in https://github.com/infiniflow/ragflow/pull/19182
* fix(searchbots): enforce KB authorization before retrieval by @6ba3i in https://github.com/infiniflow/ragflow/pull/19165
* build(deps): bump qs from 6.14.0 to 6.16.0 in /web by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/19192
* build(deps): bump fast-uri from 3.1.5 to 3.1.7 in /web by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/19191
* Refactor: get rid of graphrag and raptor during task creation by @wangq8 in https://github.com/infiniflow/ragflow/pull/19194
* Fix: The backend API did not return the default blueprint template from the wiki. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19131
* build(deps): bump mistune from 3.3.0 to 3.3.3 by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/19193
* Require exactly two cells for a CSV QA pair by @devYRPauli in https://github.com/infiniflow/ragflow/pull/19008
* fix(py-go-connector): enforce kb authorization in rebuild by @mkaaad in https://github.com/infiniflow/ragflow/pull/19190
* feat(ingestion): surface queued document task status by @jay77721 in https://github.com/infiniflow/ragflow/pull/19137
* fix(security): generate random UUIDv4 identifiers by @6ba3i in https://github.com/infiniflow/ragflow/pull/19159
* refactor(ingestion): unify memory task execution with heartbeat leases by @jay77721 in https://github.com/infiniflow/ragflow/pull/19189
* fix(pdf): make _table_transformer_job honor TABLE_AUTO_ROTATE by default by @helloxjade in https://github.com/infiniflow/ragflow/pull/16079
* fix(storage): make bucket deletion work on the AWS_S3 backend by @Huang-404-Q in https://github.com/infiniflow/ragflow/pull/19162
* Fix OAuth redirect URI examples by @zz80900 in https://github.com/infiniflow/ragflow/pull/15683
* docs: add macOS vm.max_map_count setup guidance by @helloxjade in https://github.com/infiniflow/ragflow/pull/19177
* Refactor: go default template no more _0 by @wangq8 in https://github.com/infiniflow/ragflow/pull/19204
* Fix/final answer streaming phase is not interrupted by the research budget by @Caobaining1 in https://github.com/infiniflow/ragflow/pull/19209
* Dev: launch_backend_service.sh to support --debug by @wangq8 in https://github.com/infiniflow/ragflow/pull/19215
* Fix: Hide Skills Entry by @cike8899 in https://github.com/infiniflow/ragflow/pull/19205
* Fix: Install only oxlint and oxfmt to ensure CI checks for web files. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19197
* refactor(parser): collapse docElementText into docxElementText by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19135
* fix(storage): handle versioned S3 bucket deletion by @6ba3i in https://github.com/infiniflow/ragflow/pull/19199
* fix(rag): unify parser_config delimiter defaults on a single constant by @euvre in https://github.com/infiniflow/ragflow/pull/19058
* fix(dataset): fail closed on unknown permissions by @6ba3i in https://github.com/infiniflow/ragflow/pull/19213
* [Go] Fix switch embeding report error by @wangq8 in https://github.com/infiniflow/ragflow/pull/19201
* fix(dynamic-form): allow non-string values in Segmented fields (#15106) by @dcc123456 in https://github.com/infiniflow/ragflow/pull/19212
* fix(storage): scope configured single-bucket S3 removals correctly by @6ba3i in https://github.com/infiniflow/ragflow/pull/19217
* feat: add llmman as a model provider by @ericcurtin in https://github.com/infiniflow/ragflow/pull/19030
* Fix: The filter data did not update after deleting the agent's item. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19220
* fix(preview): handle non-UTF-8 encodings in CSV/TXT preview by @dcc123456 in https://github.com/infiniflow/ragflow/pull/19222
* fix: normalize reasoning stream markers by @buua436 in https://github.com/infiniflow/ragflow/pull/19216
* refactor deepdoc backend register by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19224
* refactor(go): merge messagefit into internal/tokenizer by @jay77721 in https://github.com/infiniflow/ragflow/pull/19225
* fix(agent): accept user_id node param on the Retrieval agent tool by @euvre in https://github.com/infiniflow/ragflow/pull/19090
* Docs: update indexer by @wangq8 in https://github.com/infiniflow/ragflow/pull/19227
* fix(model_meta): discover TEI reranker models by @dawNotPoi in https://github.com/infiniflow/ragflow/pull/19210
* fix(agent): wire document service so dataflow rerun works instead of 500ing by @euvre in https://github.com/infiniflow/ragflow/pull/19094
* feat: adapt knowledge compilation concurrency by @buua436 in https://github.com/infiniflow/ragflow/pull/19156
* fix(ingestion): route xlsx QA JSON table items to extractQATable by @leilei3167 in https://github.com/infiniflow/ragflow/pull/19198
* fix ci unit test not found in installed package 'wordnet' by @myf-bee in https://github.com/infiniflow/ragflow/pull/19251
* fix(parser): support non-UTF-8 decoding across text, csv, and epub parsers by @jay77721 in https://github.com/infiniflow/ragflow/pull/19243
* Fix missing content_ltks when rerank by @wangq8 in https://github.com/infiniflow/ragflow/pull/19230
* fix(chunker): align canvas TokenChunker default delimiters with General parser by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19226
* chore(deps): depend on org mirror infiniflow/onnxruntime_go by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19169
* test(web): cover decodeBlobText across all five decoder branches by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/19240
* fix(parser): decode non-UTF-8 document text by @6ba3i in https://github.com/infiniflow/ragflow/pull/19253
* fix(token_utils): build the tiktoken encoder on first use, not at import by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/18986
* Fix: upload image to model in chat by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/19257
* fix(ingestion-logs): normalize dataset status filters by @6ba3i in https://github.com/infiniflow/ragflow/pull/19261
* fix(ingestion): show data pipeline on failed parse log entries by @euvre in https://github.com/infiniflow/ragflow/pull/19231
* fix(web): sanitize worksheet names that crash the excel previewer by @dcc123456 in https://github.com/infiniflow/ragflow/pull/19260
* Fix: check required fields when use template by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/19228
* Fix: After clearing data from pages other than the first page, the data in the filters and search box should also be cleared. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19255
* feat(preview): add EPUB document preview with encoding normalization by @dcc123456 in https://github.com/infiniflow/ragflow/pull/19242
* feat: configure knowledge compilation runtime settings by @buua436 in https://github.com/infiniflow/ragflow/pull/19254
* fix: exclude empty documents from structure alteration by @buua436 in https://github.com/infiniflow/ragflow/pull/19246
* fix(web): default Textarea resize to vertical by @dcc123456 in https://github.com/infiniflow/ragflow/pull/19263
* Fix: apply dia.llm_id overrides by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/19214
* Fix: bound model response reads by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/19211
* fix(agent): await MCP transport cleanup before stopping event loop by @Lem0nTea2002 in https://github.com/infiniflow/ragflow/pull/19093
* fix(dataset): surface Go ingestion QUEUED status and honor terminal run state by @dcc123456 in https://github.com/infiniflow/ragflow/pull/19249
* fix(parser): recover invalid XLSX sheet names by @jay77721 in https://github.com/infiniflow/ragflow/pull/19264
* CI: add Dockerfile_go build and api test  by @myf-bee in https://github.com/infiniflow/ragflow/pull/19232
* fix(web): make tr locale capitalisation consistent for expanded labels by @bakiburakogun in https://github.com/infiniflow/ragflow/pull/19273
* feat(task_executor): add MAX_TASKS_PER_WORKER to recycle long-running workers by @HamsterPark in https://github.com/infiniflow/ragflow/pull/14501
* fix(task): refresh stale embedding model config by @ump45nose in https://github.com/infiniflow/ragflow/pull/18089
* fix(parser): handle MinerU chart blocks instead of silently dropping them by @yaoper in https://github.com/infiniflow/ragflow/pull/19096
* fix(chunker): prevent chained over-carry of overlap-head PDF positions by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19068
* Perf: link onnxruntime without --whole-archive to cut binary size by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19277
* docs(api): use the memory update field names the route reads by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/19279
* fix(api): return the full error tuple when both id and ids are given to list documents by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/19280
* fix(cli): pass search number as file limit by @helloxjade in https://github.com/infiniflow/ragflow/pull/19285
* Fix: Delete icons that have been placed in the assets directory of iconfont.js. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19300
* chore: remove the DeepDoc Go alignment report by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19311
* fix(web): disallow folder upload in chunk creating modal by @dcc123456 in https://github.com/infiniflow/ragflow/pull/19309
* Go: refactor by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/19312
* Refactor: update dataset API should not have ext by @wangq8 in https://github.com/infiniflow/ragflow/pull/19272
* docs: clarify user_default_llm deprecation by @liwu96 in https://github.com/infiniflow/ragflow/pull/19321
* Fix: Click to create an agent; if the name already exists, an error will be displayed in the name input field. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19324
* fix(agent): hold back a node whose upstream runs in the same batch by @ebarkhordar in https://github.com/infiniflow/ragflow/pull/19282
* fix(memory): restore Infinity FIFO eviction and maintenance queries by @AnnaSuSu in https://github.com/infiniflow/ragflow/pull/19290
* fix(storage): honor client region in Python S3 bucket creation by @AnnaSuSu in https://github.com/infiniflow/ragflow/pull/19291
* fix(web): load chunk method example images from remote repo by @dcc123456 in https://github.com/infiniflow/ragflow/pull/19328
* feat(llm): forward OpenAI user on embedding and parse requests by @ondery in https://github.com/infiniflow/ragflow/pull/19065
* fix(mcp): bound the document-metadata cache like the dataset cache by @xu-jia-ming in https://github.com/infiniflow/ragflow/pull/19022
* fix(exesql): serialize DATE/TIME columns for canvas SSE JSON by @leilei3167 in https://github.com/infiniflow/ragflow/pull/19266
* fix(mcp): terminate Go Streamable HTTP sessions by @Lem0nTea2002 in https://github.com/infiniflow/ragflow/pull/19151
* docs: update API references to match implementation by @Yannnnnnny in https://github.com/infiniflow/ragflow/pull/19334
* feat(parser): add MonkeyOCRv2-Parsing support by @zenosai in https://github.com/infiniflow/ragflow/pull/18887
* fix(web): block chunk save and show error when tag is not selected by @dcc123456 in https://github.com/infiniflow/ragflow/pull/19337
* fix: report wiki map timeout errors by @buua436 in https://github.com/infiniflow/ragflow/pull/19329
* Fix: After clearing the data in the agent list, the corresponding filter data must also be cleared. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19336
* fix(excel): drop the "None" label for a blank spreadsheet header cell by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/19175
* build: use a stable dynamic-list path for OrtGetApiBase export by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19302
* fix(api): allow setting language on dataset creation (#15703) by @manan-tech in https://github.com/infiniflow/ragflow/pull/16242
* fix(agent/tools): run a DuckDuckGo news search when the channel is news by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/19176
* Fix the remaining rag/app chunkers treating an empty upload as a missing binary by @JessYanCoding in https://github.com/infiniflow/ragflow/pull/19256
* test(rag/nlp): cover the BOM and LookupError branches of decode_text by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/19292
* fix: report knowledge compilation LLM failures by @buua436 in https://github.com/infiniflow/ragflow/pull/19313
* Fix: update GiteeAI base_url and some model_name by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/19338
* fix(native): build 0-origin raster in FromImage/Decode for cropped sub-images by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19308
* fix: support agent input mapping and converged edges by @buua436 in https://github.com/infiniflow/ragflow/pull/19317
* fix(ingestion): keep Q&A/Tag chunks from collapsing into one indexed chunk by @euvre in https://github.com/infiniflow/ragflow/pull/18480
* Refactor: combine 3 retrieval/search API as one by @wangq8 in https://github.com/infiniflow/ragflow/pull/19303
* fix(api): accept repeated memory_type and tenant_id filters when listing memories by @marmar9615-cloud in https://github.com/infiniflow/ragflow/pull/19281
* feat(agent): add Sofya search tool by @yusufgurdogan in https://github.com/infiniflow/ragflow/pull/19323
* fix(parser): recover text_box and nested table/list text in office IR by @jay77721 in https://github.com/infiniflow/ragflow/pull/19319
* fix(memory): align extracted message document id with message_id by @jay77721 in https://github.com/infiniflow/ragflow/pull/19326
* feat(deepdoc): switch in-process Go backend from .onnx to FlatBuffer (.ort) models by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19318
* fix: filter structure alteration by document products by @buua436 in https://github.com/infiniflow/ragflow/pull/19346
* fix(web): disable textarea resizing in agent note node by @dcc123456 in https://github.com/infiniflow/ragflow/pull/19349
* Fix: show skills folder by @wangq8 in https://github.com/infiniflow/ragflow/pull/19351
* fix(agent): flatten scalar-list values in DataOperations combine by @WOLIKIMCHENG in https://github.com/infiniflow/ragflow/pull/19111
* fix(web): hide sign up until registration is enabled by @shixy96 in https://github.com/infiniflow/ragflow/pull/19343
* fix(docs): document dataset language create and update behavior by @6ba3i in https://github.com/infiniflow/ragflow/pull/19372
* feat(connector): add Sitemap data source for sitemap.xml-based web ingestion by @vincentlambert in https://github.com/infiniflow/ragflow/pull/19344
* fix(llm): raise a clear error for unsupported Bedrock embedding models by @kimnamu in https://github.com/infiniflow/ragflow/pull/16044
* feat(channels): allow chat channels to connect to agents by @Gonghan-Princess in https://github.com/infiniflow/ragflow/pull/19307
* fix(paper): bound title-pivot merge by chunk_token_num (#12109) by @deadtrickster in https://github.com/infiniflow/ragflow/pull/16959
* Dockerfile_go optimize by @myf-bee in https://github.com/infiniflow/ragflow/pull/19385
* fix(web): align parse status badge colors with list dots and rename table header by @dcc123456 in https://github.com/infiniflow/ragflow/pull/19400
* fix(web): move artifact delete button into the toolbar row by @dcc123456 in https://github.com/infiniflow/ragflow/pull/19381
* Fix: By default, the wiki page does not display the wiki content on the right. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19388
* fix(agent): clear stale template dataset references by @6ba3i in https://github.com/infiniflow/ragflow/pull/19399
* Refactor: Add RERANK_TOKEN_LIMIT_MODE by @wangq8 in https://github.com/infiniflow/ragflow/pull/19404
* fix(agent): preserve sandbox artifacts through streaming by @6ba3i in https://github.com/infiniflow/ragflow/pull/19355
* fix: resolve Go structure graph template names by @buua436 in https://github.com/infiniflow/ragflow/pull/19373
* fix: filter chunks by requested IDs by @buua436 in https://github.com/infiniflow/ragflow/pull/19377
* fix(api): return "search not found" instead of IndexError when updating a missing search by @euvre in https://github.com/infiniflow/ragflow/pull/19380
* fix(api): enforce readonly access to team-shared chat and agent sessions by @euvre in https://github.com/infiniflow/ragflow/pull/19340
* fix(sdk): preserve JSON document downloads by @AnnaSuSu in https://github.com/infiniflow/ragflow/pull/19367
* fix(syncer): anchor sitemap PDF-pass checkpoints and declare regex dependency by @mkaaad in https://github.com/infiniflow/ragflow/pull/19383
* fix(api): authorize dataset and workspace commit routes by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/19357
* fix(agent): treat missing List Operations input as empty list by @euvre in https://github.com/infiniflow/ragflow/pull/19275
* fix(dataset): honor keywords filter in Go wiki artifact list APIs by @euvre in https://github.com/infiniflow/ragflow/pull/19310
* fix(compilation): make graph search Enter on an entity name highlight the node instead of rendering the whole graph by @euvre in https://github.com/infiniflow/ragflow/pull/19320
* feat(ingestion): consolidate checkpoint to Parser + per-chunk result cache by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19386
* fix: avoid KeyError when database config has no password (#11051) by @RykerFeng in https://github.com/infiniflow/ragflow/pull/16064
* fix(mineru): align backend names with current MinerU API by @huang-aoqin in https://github.com/infiniflow/ragflow/pull/19055
* Fix: check sql component required fields by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/19418
* fix(embedding): use Replicate run API for query embeddings by @LostSnowfluff in https://github.com/infiniflow/ragflow/pull/19405
* refactor(ingestion): use worker-driven task pull dispatcher by @jay77721 in https://github.com/infiniflow/ragflow/pull/19314
* fix(agentic_rag): reject prose fan-outs, keep research loop alive on SCA timeout, and widen slot-table retry budget by @Caobaining1 in https://github.com/infiniflow/ragflow/pull/19424
* Fix: The newly added group name for the VariableAggregator operator cannot be found. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19440
* fix: prevent IndexError in PUT /api/v1/searches/<id> when search not found by @MKP999 in https://github.com/infiniflow/ragflow/pull/16027
* fix: report incremental wiki map errors by @buua436 in https://github.com/infiniflow/ragflow/pull/19422
* chore(deps): let download_go_deps.py fetch Go DeepDoc .ort weights by @xugangqiang in https://github.com/infiniflow/ragflow/pull/19376
* fix(compiler): resolve global built-in template scope by @6ba3i in https://github.com/infiniflow/ragflow/pull/19426
* Refactor: Follow #19404 to add RERANK_TOKEN_LIMIT_MODE=truncate|passthrough|raise_error by @wangq8 in https://github.com/infiniflow/ragflow/pull/19421
* Fix: table column auto parse missing metadata by @wangq8 in https://github.com/infiniflow/ragflow/pull/19439
* fix(chunk): enforce document scope on updates by @WOLIKIMCHENG in https://github.com/infiniflow/ragflow/pull/19221
* feat: add Hubris as a model provider by @Aimagine-life in https://github.com/infiniflow/ragflow/pull/19341
* fix(agent): template retrieval binding at creation + false "no dataset selected" save warning by @euvre in https://github.com/infiniflow/ragflow/pull/19316
* feat: highlight search matches in Team settings tables by @carlh7777 in https://github.com/infiniflow/ragflow/pull/15985
* Fix: run ensure_db_init before start server by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/19423
* CI: Optimize api test cases failed by @myf-bee in https://github.com/infiniflow/ragflow/pull/19450
* Go: update build.sh and development.md by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/19448
* Correct parser_config examples in API docs by @AlightSoulmate in https://github.com/infiniflow/ragflow/pull/16002
* Doc: remove space by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/19462
* fix(llm): implement async chat methods for GoogleChat (Vertex AI Gemini) by @glu000 in https://github.com/infiniflow/ragflow/pull/15994
* add pytest-durations to the test workflow by @myf-bee in https://github.com/infiniflow/ragflow/pull/19443
* feat(agentic_rag): add tool playbook, clarify tool specs, stop wasted… by @Caobaining1 in https://github.com/infiniflow/ragflow/pull/19459
* fix(storage): overwrite existing Azure SAS objects by @AnnaSuSu in https://github.com/infiniflow/ragflow/pull/19458
* fix(storage): accept tenant arguments in encrypted Azure calls by @AnnaSuSu in https://github.com/infiniflow/ragflow/pull/19457
* Test: Adjust the priority of some test cases from P1/P2 to P3. by @asiroliu in https://github.com/infiniflow/ragflow/pull/19461
* build(deps): bump github.com/buger/jsonparser from 1.1.1 to 1.1.2 by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/19463
* fix(restful-tests): align Go parser config contract by @6ba3i in https://github.com/infiniflow/ragflow/pull/19442
* fix(agent): preserve Starter values beside query inputs by @6ba3i in https://github.com/infiniflow/ragflow/pull/19420
* Decode a single-part email body by its Content-Transfer-Encoding by @devYRPauli in https://github.com/infiniflow/ragflow/pull/19178
* fix(embedding): preserve zero filename embedding weight by @LostSnowfluff in https://github.com/infiniflow/ragflow/pull/19397
* feat(ingestion): polish image dispatch with bmp/tiff decoders and zero-alloc RuneCount (fix #18794) by @Jaymr1031-Z in https://github.com/infiniflow/ragflow/pull/18988
* Fix: NOT generate graph all entities/relations as a graph chunk by @wangq8 in https://github.com/infiniflow/ragflow/pull/19474
* Fix: The default name of the operator does not include a numeric suffix. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19451
* docs: Update tooltip url by @wangq8 in https://github.com/infiniflow/ragflow/pull/19484
* fix(llm): drop Claude sampling params rejected by Bedrock and Anthropic by @vincentlambert in https://github.com/infiniflow/ragflow/pull/19295
* Fix: Enabling the opening message switch for the 'begin' operator will cause previously sent messages to be overwritten. by @cike8899 in https://github.com/infiniflow/ragflow/pull/19492
* fix(ingestion): allow re-parsing a document whose parse was canceled at progress 0 by @euvre in https://github.com/infiniflow/ragflow/pull/19258
* [Refactor] Use regex to do hightlight by @wangq8 in https://github.com/infiniflow/ragflow/pull/19488
* fix(go): stop masking document preview failures as "document not found" and add tenant access check by @euvre in https://github.com/infiniflow/ragflow/pull/19348
* fix: route navigation API through tree search by @buua436 in https://github.com/infiniflow/ragflow/pull/19493
* fix: support keyword search for dataset structure graphs by @buua436 in https://github.com/infiniflow/ragflow/pull/19473
* Fix: num bind datasets in template by components by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/19454
* Fix: num token usage by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/19495
* Docs: Update version references to v0.27.2 in READMEs and docs by @asiroliu in https://github.com/infiniflow/ragflow/pull/19501
* Docs: v0.27.2 release notes by @wangq8 in https://github.com/infiniflow/ragflow/pull/19504

## New Contributors
* @chakshu-dhannawat made their first contribution in https://github.com/infiniflow/ragflow/pull/18927
* @noron12234 made their first contribution in https://github.com/infiniflow/ragflow/pull/17682
* @chyroc made their first contribution in https://github.com/infiniflow/ragflow/pull/18973
* @avikumart made their first contribution in https://github.com/infiniflow/ragflow/pull/18829
* @maxiaolong03 made their first contribution in https://github.com/infiniflow/ragflow/pull/19011
* @Anai-Guo made their first contribution in https://github.com/infiniflow/ragflow/pull/17611
* @FJH886 made their first contribution in https://github.com/infiniflow/ragflow/pull/17592
* @georgelichen made their first contribution in https://github.com/infiniflow/ragflow/pull/18983
* @uczltw6 made their first contribution in https://github.com/infiniflow/ragflow/pull/18505
* @BaptisteJosh made their first contribution in https://github.com/infiniflow/ragflow/pull/15964
* @martincivan made their first contribution in https://github.com/infiniflow/ragflow/pull/19016
* @yiheng-kkk made their first contribution in https://github.com/infiniflow/ragflow/pull/19069
* @alaningtrump made their first contribution in https://github.com/infiniflow/ragflow/pull/19023
* @LuckTerence made their first contribution in https://github.com/infiniflow/ragflow/pull/19079
* @Caobaining1 made their first contribution in https://github.com/infiniflow/ragflow/pull/19112
* @dynnfa made their first contribution in https://github.com/infiniflow/ragflow/pull/19126
* @OmarFaig made their first contribution in https://github.com/infiniflow/ragflow/pull/18460
* @blueOf made their first contribution in https://github.com/infiniflow/ragflow/pull/19007
* @xu-jia-ming made their first contribution in https://github.com/infiniflow/ragflow/pull/19020
* @Huang-404-Q made their first contribution in https://github.com/infiniflow/ragflow/pull/19162
* @zz80900 made their first contribution in https://github.com/infiniflow/ragflow/pull/15683
* @ericcurtin made their first contribution in https://github.com/infiniflow/ragflow/pull/19030
* @dawNotPoi made their first contribution in https://github.com/infiniflow/ragflow/pull/19210
* @leilei3167 made their first contribution in https://github.com/infiniflow/ragflow/pull/19198
* @HamsterPark made their first contribution in https://github.com/infiniflow/ragflow/pull/14501
* @liwu96 made their first contribution in https://github.com/infiniflow/ragflow/pull/19321
* @zenosai made their first contribution in https://github.com/infiniflow/ragflow/pull/18887
* @JessYanCoding made their first contribution in https://github.com/infiniflow/ragflow/pull/19256
* @yusufgurdogan made their first contribution in https://github.com/infiniflow/ragflow/pull/19323
* @shixy96 made their first contribution in https://github.com/infiniflow/ragflow/pull/19343
* @kimnamu made their first contribution in https://github.com/infiniflow/ragflow/pull/16044
* @Gonghan-Princess made their first contribution in https://github.com/infiniflow/ragflow/pull/19307
* @RykerFeng made their first contribution in https://github.com/infiniflow/ragflow/pull/16064
* @LostSnowfluff made their first contribution in https://github.com/infiniflow/ragflow/pull/19405
* @MKP999 made their first contribution in https://github.com/infiniflow/ragflow/pull/16027
* @Aimagine-life made their first contribution in https://github.com/infiniflow/ragflow/pull/19341
* @AlightSoulmate made their first contribution in https://github.com/infiniflow/ragflow/pull/16002
* @Jaymr1031-Z made their first contribution in https://github.com/infiniflow/ragflow/pull/18988

**Full Changelog**: https://github.com/infiniflow/ragflow/compare/v0.27.1...v0.27.2

---

> **Source** [infiniflow/ragflow](https://github.com/infiniflow/ragflow) · `v0.27.2` · 2026-09-10 · [upstream release](https://github.com/infiniflow/ragflow/releases/tag/v0.27.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
