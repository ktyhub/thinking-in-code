---
title: "ragflow v0.27.0"
project: "ragflow"
repo: "infiniflow/ragflow"
tag: "v0.27.0"
version: "v0.27.0"
published: "2026-08-19"
type: "minor"
lang: "en"
summary: "Brand new document level and dataset level knowledge compilation, supporting Wiki, Graph, Tree, Page Index, Mind Map, Timeline, and To Skills (#16777, #17546, #16797, #16749, #16899, #17996)"
---

# ragflow v0.27.0

## New features
- Brand new document level and dataset level knowledge compilation, supporting Wiki, Graph, Tree, Page Index, Mind Map, Timeline, and To Skills (#16777, #17546, #16797, #16749, #16899, #17996)
   - The previous GraphRAG and RAPTOR features have been deprecated and are no longer available in the UI. Their replacements, Graph and Tree, are now integrated into Knowledge Compilation. Previously generated GraphRAG and RAPTOR content remains searchable.
- Brand new Agentic RAG with four thinking modes when answering - Low, Medium, High, and Ultra (#18303, #18138, #17342, #17444)

## Improvements
- Fully revamped model provider system for easier model configuration and management (#16604)

## Model Support
- Qwen 3.8 series (#18368)
- Kimi K3 (#17106)
- AIMLAPI (#17311)
- GreenPT models (#17447)
- AWS Bedrock Reranker (#16960)
- OpenRouter Embedding (#17213)
- FunASR/SenseVoice STT (#16473)
- Fun-ASR-Flash support for Tongyi-Qianwen (#16844)
- Mistral OCR document parser (#17057)

## Infrastructure
- New GaussDB database adapter (#17703)
- SereneDB document storage engine support (#17375)
- Tenki sandbox provider support (#17305)
- Upgraded Infinity integration to 0.7.3 (#18137)

## Tools
- New Querit web search tool (#17813)

## UI/UX
- Markdown typography improvements (#16752)
- Search/chat filters (#16707)

## Bug fixes
- Fixed server hang when parsing large files (#17936)
- Fixed document upload hanging the whole service (#17537)
- Fixed multi-model chat ignoring the passed model (#18439)
- Fixed rerank model switch failing to save on the chat page (#18357)
- Fixed preview failure for PDFs with Chinese filenames (#18422)
- Fixed CID-font PDF preview (#18249)
- Fixed invalid query strings breaking search (#18217)
- Fixed dataset/document deletion blocking other API requests (#17800)
- Fixed default delimiter stored as an escaped string instead of a real newline (#17591)
- Fixed shared page language affecting the original website (#18043)
- Fixed stale messages on session switch (#18140)
- Fixed new sessions carrying over previous session messages (#18078)
- Fixed SSE stream interruption when switching conversations (#18037)
- Fixed overlapping Chinese text lines in DOCX preview (#17693)
- Fixed admin password update crash for SSO users (#16914)
- Fixed QA DOCX table parser dropping cells (#17497)
- Fixed Q&A CSV parsing of fields starting with quotes (#16881)
- Fixed tag CSV parser ignoring TAB delimiters (#17496)
- Fixed incorrect task time display (#18453)
- Fixed duplicate logs on PDF parse cancel (#18435)

## What's Changed
* Feat: v0.27.0 model provider by @Lynn-Inf in #16604
* fix(service): allow updating memory_type when memory is empty by @euvre in #16668
* Go: clean release.yml by @JinHai-CN in #16725
* Dev: need set the stable version by @wangq8 in #16730
* build(deps): bump golang.org/x/crypto from 0.51.0 to 0.52.0 by @dependabot[bot] in #16736
* Feat: add filter in chat and search page by @dcc123456 in #16707
* fix: issue with memory error message display by @dcc123456 in #16738
* Fix skill search by @yingfeng in #16743
* Go: add more commands and GCS supports by @JinHai-CN in #16741
* Fix(go): adapt to new db columns by @Lynn-Inf in #16745
* fixed(go-agent): agent-publish by @Hz-186 in #16713
* Fix Build-in metadata not working (#788) by @wangq8 in #16748
* Feature: task executor migration to go by @xugangqiang in #16549
* fix: update nginx version. fix CVE-2026-9256 by @V1V1rus in #16732
* Port agent PRs to GO - 5 by @qinling0210 in #16667
* Feat: add wiki folder by @KevinHuSh in #16749
* fix(web): hide folder tab in agent JSON import uploader by @euvre in #16754
* Fix: prevent auto-incrementing memory name suffix when only permissions change by @euvre in #16750
* fix(web): show memory owner name in shared memory card by @euvre in #16751
* fix: Fixed the empty state styling on the home page. by @dcc123456 in #16755
* Feat: apply prose typography styling to markdown preview by @dcc123456 in #16752
* fix(web): prevent 'last saved at' label from vertical stacking in agent home card by @euvre in #16756
* Fix: Rapid clicking results in multiple message requests being sent. by @cike8899 in #16739
* Fix: provider name by @Lynn-Inf in #16733
* Handle searching dataset without embedding model by @qinling0210 in #16742
* Fix naive chunking for windows by @yingfeng in #16767
* Fix docs by @yingfeng in #16770
* refa: resolve tenant model refs consistently by @buua436 in #16744
* Fix: rm role_id in user.go by @Lynn-Inf in #16771
* Fix: get_by_id by @Lynn-Inf in #16765
* Fix: resolve shared embedding/LLM model selection errors by @dcc123456 in #16773
* Feat: optional url v1 by @Lynn-Inf in #16774
* Feat: add embedding support  by @xugangqiang in #16769
* fix(ao-agent): add Tavily input_form, wire real search component, and port TavilyExtract to Go by @Hz-186 in #16693
* Fix: delete tasklet by @xugangqiang in #16778
* Fix: delete unused tenant_llm testcase by @Lynn-Inf in #16786
* Feat: Add a data compilation layer. by @cike8899 in #16777
* fix(go-agent): add Google search wrapper component and tool registry by @Hz-186 in #16768
* fix: Show full text on hover when text overflows the cards on the list page. by @dcc123456 in #16787
* Fix: update LayoutRecognizeFormField to accept ownerTenantId and refactor model handling in LLM requests by @dcc123456 in #16781
* fix(go-agent): align Go DuckDuckGo component with canvas input form  by @Hz-186 in #16775
* fix: align model default handling by @buua436 in #16782
* feat(agent): Go ingestion pipeline progress mirroring and DeepDOC parser hardening by @yuzhichang in #16795
* Fix OpenAI agent stream chunk shape by @Harsh23Kashyap in #16402
* Go: merge duplicate codes by @JinHai-CN in #16783
* Go: set gin mode in admin server by @JinHai-CN in #16801
* build(deps): bump soupsieve from 2.8.1 to 2.8.4 by @dependabot[bot] in #16798
* build(deps): bump mistune from 3.2.0 to 3.3.0 by @dependabot[bot] in #16799
* fix: pass ownerTenantId to LLMLabel and related components for improved model fetching by @dcc123456 in #16800
* GO: improve model info parsing and add model_id/tenant context to list response by @buua436 in #16804
* feat(go-agent): merge Google Scholar node params with runtime inputs by @Hz-186 in #16802
* GO:Cli fix show user storage display truncation by @myf-bee in #16805
* Go: Update response message by @JinHai-CN in #16803
* Feature: user select pipeline support by @xugangqiang in #16788
* Feat: Rewrite wiki template with reui by @cike8899 in #16797
* Refactor: drop dead canvas runtime selector and tokenizer embedding wiring by @yuzhichang in #16809
* fix(go-agent): `unknown component "Wikipedia"` canvas error. by @Hz-186 in #16784
* Go: Fix error code by @JinHai-CN in #16807
* fix(docker): [URGENT] Docker build fails for all PRs - missing web/scripts/prepare.js during npm install by @ondery in #16821
* fix ci by @myf-bee in #16824
* Go: add show users plan quota by @JinHai-CN in #16818
* Go: format code by @JinHai-CN in #16813
* fix(prompt-editor): prevent premature variable path merge during typing by @dcc123456 in #16811
* Fix compilation workflow by @yingfeng in #16819
* fix: improve pipeline compilation, template updates, and document resets by @buua436 in #16815
* feat: make blob storage size threshold configurable by @taek105 in #16806
* Refactor: Refine ingestion task state transitions by @xugangqiang in #16814
* fix(agent): Await Response pauses on every Loop iteration by @ondery in #16794
* PY: fix admin error by @JinHai-CN in #16827
* [Fix] Rename StandardizeImag -> StandardizeImage to fix deepdoc OCR preprocessing (#7316) by @Taranum01 in #16785
* fix(agent): clear component inputs on canvas re-run by @Harsh23Kashyap in #16790
* fix(go-agent): Added PubMed component support by @Hz-186 in #16817
* Go: fix nats and go command by @JinHai-CN in #16828
* Go: add dummy admin functions by @JinHai-CN in #16830
* build(deps): bump github.com/xuri/excelize/v2 from 2.10.1 to 2.11.0 by @dependabot[bot] in #16839
* fix(go-agent): ArXiv component registration and request parity by @Hz-186 in #16808
* Refactor: refactor dataflow_service.go and guard nats message re-delivery by @xugangqiang in #16826
* Fix: Align part of Go provider APIs with Python APIs by @Lynn-Inf in #16823
* uv tool install lefthook by @yuzhichang in #16842
* Implement builtin chunk method as ingestion pipeline in GO by @qinling0210 in #16822
* Feat: Added support for session graph and session essence templates. by @cike8899 in #16851
* fix(setting-model): fix instance display and api_key loss after  auto-save     by @dcc123456 in #16853
* Go: more APIs by @JinHai-CN in #16850
* Fixed an issue where cited webpages could not be opened during online searches. by @dcc123456 in #16840
* fix(go-agent): align GitHub and Invoke Canvas components by @Hz-186 in #16849
* fix(agent): port QWeather to ToolBase so it works as an Agent tool by @boskodev790 in #16692
* Refactor: message processing by @xugangqiang in #16852
* fix: test drift on go specific proxy scheme by @6ba3i in #16796
* fix: correct model type mappings and improve system setting persistence by @euvre in #16501
* fix(go-agent): Align Go WenCai and SearXNG agent components with python by @Hz-186 in #16854
* fix: support component brwoser by @Haruko386 in #16848
* fix: ensure database model indexes by @buua436 in #16860
* Go: refactor and add version type by @JinHai-CN in #16863
* Feat: If the interval between two outputs exceeds 600ms, a loading state is displayed at the end. by @cike8899 in #16861
* Go and Python: fix IDOR issue of search completions by @JinHai-CN in #16864
* fix(agent): allow underscores in variable_ref_patt component_id (#16758) by @Taranum01 in #16792
* Fix: TokenChunker discards TitleChunker chunks when output_format is 'chunks' by @devYRPauli in #16825
* Go ports of workflow and chunker fixes by @yuzhichang in #16878
* Feat: Adjust the color and size of the graph based on the data. by @cike8899 in #16868
* build(deps): bump json-repair from 0.35.0 to 0.60.1 by @dependabot[bot] in #16887
* Update test framework by @JinHai-CN in #16875
* fix: support doc generator component by @Haruko386 in #16858
* Feat: Adjust the timeline style. by @cike8899 in #16894
* Feat: Add a three-level dropdown menu to the talk page message box. by @cike8899 in #16886
* fix: support keenable component by @Haruko386 in #16884
* fix: unable to send email for py backend by @Haruko386 in #16888
* fix(go-agent): align ExeSQL component inputs with Python by @Hz-186 in #16896
* Update knowledge base configuration instructions by @Letssharearow in #15345
* Feat: Use G6 to display mind map data. by @cike8899 in #16899
* fix(tree-select): avoid incorrect node selection when value is empty by @dcc123456 in #16898
* Update dockerfile by @JinHai-CN in #16893
* Fix: Search mind map not displaying by @euvre in #16866
* fix: resolve provider name case mismatch and 301 redirect in Go mode by @euvre in #16889
* Fix: Refine the git ignore file to exclude dependencies by @paulhuiseismic in #16882
* Go: refactor by @JinHai-CN in #16906
* fix(agent): preserve zero temperature setting by @taek105 in #16897
* Fix Agent bot 2 permission bugs (#818) by @wangq8 in #16909
* fix(setting-model): keep newly saved instance card expanded after name save by @dcc123456 in #16904
* Fix file link-to-datasets to suport both replace and add (#817) by @wangq8 in #16908
* Fix: align go provider apis with python apis by @Lynn-Inf in #16867
* Go: fix bugs by @JinHai-CN in #16911
* Go: add more frameworks by @JinHai-CN in #16915
* fix: remediate urllib3 CVEs by @rayhanest in #16907
* Fix: admin password update crashes for SSO users (500 'NoneType' object has no attribute 'split') by @vincentlambert in #16914
* fix(go-agent): add VariableAssigner input form by @Hz-186 in #16902
* fix: add GetInputForm for string_transform by @Haruko386 in #16900
* fix: support code_execute for go backend by @Haruko386 in #16903
* fix: support email send for go backend by @Haruko386 in #16895
* fix: unable to use agent in agent by @Haruko386 in #16910
* refactor: remove unused getInputElementsFromText function by @Haruko386 in #16927
* feat(dataflow-result): scroll to and highlight newly created chunk by @dcc123456 in #16937
* fix  ci : only run web ci  by @myf-bee in #16939
* Feat: nats message processing refactor and support built in DSL by @xugangqiang in #16873
* refactor: remove localStorage persistence for system model settings by @euvre in #16934
* Fix: sort memory by create_time desc by @Lynn-Inf in #16942
* Feat: Modify the Chinese translation file for the knowledge compilation template. by @cike8899 in #16941
* Json: add some aliyun models by @Haruko386 in #16926
* Fix: code-rabbit review comment by @Lynn-Inf in #16940
* refa: optimize knowledge compilation concurrency by @buua436 in #16933
* Fix agentbot cannot upload file (#828) by @wangq8 in #16946
* Remove unused /datasets/<id>/embedding endpoint by @euvre in #16936
* Revert frontend changes from PR #16873 and add Go/Python runtime detection by @xugangqiang in #16948
* Fix rename file only update the first linked dataset (#831) by @wangq8 in #16947
* Fix cancel ingest task, it will be stilling running and show internal server error (#836) by @wangq8 in #16945
* feat(stt): add FunASR / SenseVoice provider by @LauraGPT in #16473
* fix(agent): return DataOperations input form by @LauraGPT in #16930
* Updated RAGcon model provider (go) by @hauberj in #16950
* refactor(go-agent): unify tool-backed canvas components by @Hz-186 in #16912
* fix[go]: support retrieval kb in agent chat by @Haruko386 in #16944
* Go: align db schema to python by @JinHai-CN in #16935
* Feat: agentic search framework by @KevinHuSh in #16859
* Fix slow CI case by @yingfeng in #16955
* fix(docling): detect chunked response by shape, not request payload by @Harsh23Kashyap in #16921
* test: add regression coverage for metadata filter pagination beyond push-down cap by @RahilOp in #16932
* feat(stt): support Fun-ASR-Flash in Tongyi-Qianwen provider by @77zane in #16844
* fix: avoid duplicating video descriptions during parsing by @77zane in #16847
* Fix agent upload file permission by @wangq8 in #16963
* Fix: verify model by @Lynn-Inf in #16951
* fix: avoid resetting documents on non-parser updates by @buua436 in #16962
* Feat: ingestion cleanup by @xugangqiang in #16953
* feat(llm): add AWS Bedrock reranker connector by @vincentlambert in #16960
* Fix database data types by @JinHai-CN in #16965
* fix(mineru): thread page_from/page_to into MinerU API request by @Harsh23Kashyap in #16957
* fix: align CAJAL template node types by @buua436 in #16972
* fix: lefthook deps serialization by @dcc123456 in #16969
* fix: remove MySQL document.meta_fields mapping to match Python schema by @euvre in #16929
* fix: support categorize component in agent by @Haruko386 in #16966
* Fix Pipeline.Run callers and rename SetupOverrides by @yuzhichang in #16973
* fix(embedding): do not append /v1 to Ollama native embedding base_url by @iwasaki1112 in #16974
* Fix doc.MetaFields undefined by @wangq8 in #16976
* fix(metadata): discover ES fields after sparse table chunks by @chuenchen309 in #16949
* fix(metadata): meta_filter loses case-insensitive matches and leaks state across dict entries by @chuenchen309 in #16956
* Fix ci:   run ci port confict,pull network timeout by @myf-bee in #16979
* feat: add /api/v1/language endpoint for Go/Python runtime detection by @xugangqiang in #16952
* Revert "fix: remove MySQL document.meta_fields mapping to match Python schema" by @yingfeng in #16981
* Go: fix db alignment by @JinHai-CN in #16964
* Fix link file to dataset check the duplicate name (#846) by @wangq8 in #16975
* fix(go-agent): add input form of ListOperationsComponent and VariableAggregatorComponent by @Hz-186 in #16987
* fix: custom empty_response not shown in streaming chat (Go mode) by @euvre in #16989
* Fix: CI  tags cancel running workflow by @myf-bee in #17001
* Go: introduce clickhouse by @JinHai-CN in #16996
* Go: add tools for moonshot, baidu and minimax by @Haruko386 in #17000
* fix: support message content by @Haruko386 in #16980
* fix: update somark.tech to somark.cn/somark.ai with purchase URLs by @maybehokori in #16892
* Fix: add default models for some ocr providers by @Lynn-Inf in #16982
* Fix: sort instance by create_time desc by @Lynn-Inf in #16999
* Go: tracing framework by @JinHai-CN in #17004
* fix: scope compilation template names by group by @buua436 in #16998
* Feat: compilation result navigation in agentic search by @KevinHuSh in #17002
* fix: remove dangling MetaFields reference and skip affected Go backend tests by @euvre in #16983
* Feat: Visualize session graph data using ArtifactForceGraph. by @cike8899 in #16977
* Python: remove unused index by @JinHai-CN in #17008
* fix lefthook by @yuzhichang in #17023
* Feat: Enable the wiki's Markdown editor to navigate to a new Markdown file when a link is clicked. by @cike8899 in #17019
* fix: ASR/VLM/TTS models not selectable in default model settings by @euvre in #17024
* fix: make await response wait for user input by @buua436 in #16995
* Go: update server config by @JinHai-CN in #17027
* Fix cv model siliconflow and zhipu cannot describe video, capture 3 images from video and sent to llm (#852) by @wangq8 in #17007
* fix(model-provider): replace per-card auto-save with batch Save-all by @dcc123456 in #17025
* fix: render readable wiki artifact links by @buua436 in #17011
* Support pipeline DSL modification through dataset configuration (backend) by @qinling0210 in #16991
* Doc: fix doc by @wangq8 in #17033
* Fix: set Builtin models as default model by @Lynn-Inf in #17029
* fix(go-agent): preserve canvas system state across turns by @Hz-186 in #17010
* fix(go-agent): filter SSE done sentinel from model stream by @Hz-186 in #17034
* feat: support yahoo_finance search by @Haruko386 in #17022
* Fix: sample_rate in siliconflow tts model call by @Lynn-Inf in #17043
* fix: loop component usage issue by @Haruko386 in #17028
* Fix table parse: combined column by @wangq8 in #17039
* feat: add chat-level TTS and ASR endpoints for Go API server by @euvre in #17036
* fix(web): add missing provider homepage links in Available models panel by @euvre in #17040
* CI: modify testcase to p3 by @myf-bee in #17047
* Security fix: CVE-2025-21521 by @wangq8 in #17046
* Go: add LLM usage by @JinHai-CN in #17049
* fix(deepdoc): recover word boundaries for non-Latin scripts; skip OCR fallback the recogniser can't serve by @deadtrickster in #16958
* Fix centered PDF title reading order by @zcxGGmu in #17009
* Feat: add built in DSL file API by @xugangqiang in #17003
* fix: align pdf table structure coordinates by @zcxGGmu in #17016
* Fix: Q&A CSV parser splices wrong text when a field opens with a quote by @devYRPauli in #16881
* Go: add tools for xiaomi provider by @Haruko386 in #17054
* fix(go-agent): handle await response prompts correctly by @Hz-186 in #17044
* fix: forget to take reference/prompt in pipeline final by @Haruko386 in #17032
* fix(metadata): Infinity push-down must reject multi-valued-unsafe negative ops (≠, not in) by @chuenchen309 in #16943
* fix: preserve mineru cross-page table positions by @zcxGGmu in #17017
* fix(api): honor include_parsing_status in List Datasets endpoint by @Harsh23Kashyap in #16913
* Go: add stats by @JinHai-CN in #17061
* Go: refactor by @JinHai-CN in #17072
* Fix: right-anchored split in web parseModelValue / parseModelUuid by @skbs-eng in #16737
* fix: preserve chunks when updating compilation templates by @buua436 in #17035
* Refactor: dataset/document/file service by @xugangqiang in #17071
* Fix: OpenDataLoader parser by @Lynn-Inf in #17037
* Feat: Add dataset_navigate to agentic searhc by @KevinHuSh in #17052
* i18n: complete Japanese translation for ja.ts by @iwasaki1112 in #17042
* fix: unable to got SEE response when use tools by @Haruko386 in #17076
* refactor[go]: replace DSModel with ModelListItem by @Haruko386 in #17038
* Fix: display timeout error when checking model accessibility by @Lynn-Inf in #17080
* Remove redundant PatchDSL and consolidate component-param injection into override_params by @xugangqiang in #17079
* Remove selectUploadParser: documents now inherit parser_id from KB directly by @xugangqiang in #17083
* fix[go]: stop leaking [DONE] sentinel into streamed chat answers by @euvre in #17084
* fix: ci build apt install list  error by @myf-bee in #17086
* Fix: model provider save button label and light mode input background by @dcc123456 in #17081
* Go: refactor system stats by @JinHai-CN in #17089
* fix(web): unify required asterisk color in instance name section by @euvre in #17082
* Go CLI: add admin stats commands by @JinHai-CN in #17090
* Fix: regenerate chat message does not truncate history by @euvre in #17087
* Bump Infinity to v0.7.2 by @qinling0210 in #17075
* Go: refactor API route for EE by @JinHai-CN in #17093
* Go: fix missing route by @JinHai-CN in #17094
* fix[go]: skip LLM call for shared chatbot session handshake by @euvre in #17095
* fix: prevent share pages from overriding the user's theme preference by @euvre in #17098
* fix: unable to use multi model chat by @Haruko386 in #17097
* fix(go-agent): support Aliyun tool calls by @Hz-186 in #17099
* Feat: Configure the relevant pipeline parameters on the dataset configuration page. by @cike8899 in #17100
* fix: selected destination appears white in file move dialog in dark mode by @euvre in #17085
* fix(web): capitalize URL and drop exclamation mark in base URL locale strings by @euvre in #17110
* fix ci port allocated by @myf-bee in #17109
* fix(web): capitalize URL and drop exclamation marks in base URL locale strings by @euvre in #17113
* Fix missing info by @JinHai-CN in #17107
* fix(agent/tools): surface github search error responses by @Yurii214 in #17064
* Feat: Render the skills list using a tree view. by @cike8899 in #17115
* Fix: add new default moonshot model by @Lynn-Inf in #17106
* Fix: model selection format compat and provider api_key wrapping by @dcc123456 in #17112
* fix(web): avoid flashing empty state when returning to agent list by @euvre in #17118
* Go: add tools for gitee, volcengine and zhipuAI by @Haruko386 in #17091
* fix: one can edit team's memory by @Haruko386 in #17104
* fix(web): make raw memory type non-removable in multi-select by @euvre in #17119
* fix: soften ask_summary refusal for partially relevant knowledge by @euvre in #17121
* style(web): unify model provider parameter labels to uppercase across locales by @euvre in #17120
* Fix: add missing model provider icons by @euvre in #17122
* Feat(ingestion): align image to MinIO upload, unify chunk-id computation and add PPT parsing support by @xugangqiang in #17111
* Add Go service/handler tests for API contract parity by @euvre in #16905
* Go: add audit log framework by @JinHai-CN in #17129
* Fix(go): get VolcEngine model list by @Lynn-Inf in #17127
* Fix SharePoint connector not run after added by @wangq8 in #17058
* Fix: The form related to switching the dataset pipeline configuration was not rendered. by @cike8899 in #17124
* fix(web): regenerate in multi-model chat uses the card's own state and model by @euvre in #17126
* Fix: shared chatbot completion ignores knowledge base and empty response by @euvre in #17092
* fix(agent/tools): surface serpapi error responses in google search by @Yurii214 in #17062
* fix(go-agent): include conversation history in agent prompts by @Hz-186 in #17137
* fix: unify 'BASE URL' to 'Base URL' in locale files by @euvre in #17138
* Feat: Add a "None" option for reasoning intensity in the chat message box. by @cike8899 in #17006
* Go: refactor API route by @JinHai-CN in #17139
* Refactor: unify navbar icons through HomeIcon wrapper by @dcc123456 in #17143
* fix: preserve compilation template kinds and names by @buua436 in #17151
* fix: docx/email parsing, extractor LLM driver, and chunker alignment by @xugangqiang in #17144
* Fix stale references shown while streaming and empty final reply in Go mode by @euvre in #17146
* Go: disable thinking for search ask summary to fix truncated AI summary by @euvre in #17155
* fix(web): prevent search popover from flashing at top-left on checkbox toggle by @euvre in #17148
* Update from api_base to base_url by @wangq8 in #17158
* fix(web): use title case 'API Key' in UI labels across all locales by @euvre in #17164
* fix(web): hide folder upload tab for Gmail and Google Drive OAuth JSON upload by @euvre in #17162
* refactor: encapsulate the code related to tools by @Haruko386 in #17101
* Go cli: fix list users failed: invalid JSON (unexpected end of JSON ) by @myf-bee in #17153
* fix: add chunk_method field to document handler by @Haruko386 in #17154
* fix: Refactor ListConnectors to validate userID and simplify logic by @Haruko386 in #17152
* Feat: Highlight wiki force graph. by @cike8899 in #17160
* Port PR14140 and PR16881 to GO by @qinling0210 in #17102
* Implement Tagger in Extractor component in GO by @qinling0210 in #17128
* Go: refactor to avoid conflicts by @JinHai-CN in #17191
* Fix(go): check model availability by @Lynn-Inf in #17156
* fix(file2document): batch link should add to existing KBs, not replace them by @euvre in #17172
* Fix: verify model api by @Lynn-Inf in #17183
* Go: add funASR provider by @Haruko386 in #17171
* fix: add accessible check for datasets by @Haruko386 in #17116
* Enrich the ragflow_client.py by @wangq8 in #17189
* Py: ruff format by @JinHai-CN in #17193
* fix: remediate CVE-2025-69534, upgrade Markdown from 3.6 to >=3.8.1 by @rayhanest in #17198
* migrate: replace zhipuai with zai-sdk to unblock pyjwt CVE fix by @rayhanest in #17197
* Fix: enhance ragflow-client by @wangq8 in #17206
* feat(model): forward instance_id on per-model verify and auto-populate models by @dcc123456 in #17055
* fix(go-agent): support Tavily tool names by @Hz-186 in #17163
* fix: add create_date field to APIKeyResponse for token list display by @euvre in #17186
* fix(agent): restrict permission field edits to canvas owner only by @euvre in #17185
* fix: avoid duplicate document names when linking files to datasets by @euvre in #17181
* Go: only unlink file-manager files when deleting documents from a knowledge base by @euvre in #17175
* build(deps-dev): bump pillow from 12.2.0 to 12.3.0 by @dependabot[bot] in #17208
* Feat: openrouter embedding by @Lynn-Inf in #17213
* Fix CVE-2026-42533 by @wangq8 in #17218
* Fix punctuation in useKnowledgeGraphTip tooltip by @euvre in #17226
* fix(go): nil pointer dereference in ZhipuAI Embed method by @euvre in #17219
* CI update lefthook and gitee to github by @myf-bee in #17230
* fix(deepdoc): prevent figure and equation crops from merging on scientific PDFs by @Dexterity104 in #15873
* fix: prevent collapse button from overlapping expanded content in next-search by @euvre in #17157
* Fix flickering document count and total when toggling file filter on search page by @euvre in #17161
* fix(web): use outline-none instead of outline-0 on focusable controls by @euvre in #17165
* fix(agent): prevent double reply when Agent node is followed by Message node by @euvre in #17233
* fix(web): show builtin chunk methods in file pipeline dialog under Go backend by @euvre in #17169
* Feat: add open-in-new-tab button to search share embed dialog by @euvre in #17159
* fix(web): fix team member status badge hover text readability by @euvre in #17178
* fix: render documentation URLs as hyperlinks in model tooltips by @euvre in #17224
* fix: i18n for data source internal configuration fields by @euvre in #17217
* fix: MCP import now processes all files instead of only the first by @euvre in #17179
* docs: correct firecrawl README paths to tools/firecrawl by @muhzuhaib in #17239
* fix: Make MCP bulk-manage select-all checkbox reflect selection state by @euvre in #17174
* docs: fix invalid chunk_method value and NameError in Python SDK reference by @muhzuhaib in #17238
* docs: point begin/message component links at .md, not .mdx by @muhzuhaib in #17237
* Doc: fix typo and format by @JinHai-CN in #17249
* fix(web): preserve MCP authorization token across edits by @euvre in #17177
* fix(go-agent): route graph step errors through exception outputs by @Hz-186 in #17167
* fix: unable use agent as a tool in agent component by @Haruko386 in #17228
* Fix update 'Child chunk are used for retrieval' does not take effect (#900) by @wangq8 in #17251
* Fix: go restful api tests by @Lynn-Inf in #17247
* fix: eliminate one-frame flash of title without form content in data source pages by @euvre in #17214
* fix(ingestion): align laws DSL with Python — heading fallback, colon-title, short-line filter, remove_toc, and image extension mapping by @xugangqiang in #17200
* fix: Go backend builtin chunk method list not showing by @euvre in #17180
* fix: restore empty model warning in dataset creating dialog by @euvre in #17220
* fix: prevent empty-state flash on knowledge-base and chat list loading by @euvre in #17221
* fix: use FormLabel required prop for consistent asterisk color in search settings by @euvre in #17223
* fix: restore download button when file type is selected in agent message by @euvre in #17184
* fix: keep memory card position stable after rename or config update by @euvre in #17234
* fix: MinerU.Net and PaddleOCR.Net missing icons by @euvre in #17229
* fix: exclude TTS models from agent component model selector by @euvre in #17231
* fix(web): show completed label for think block after streaming ends by @euvre in #17149
* fix(go): resolve tenant model IDs in memory create/update without hard failure by @euvre in #17176
* Fix: search input cannot expand to show long queries by @euvre in #17166
* docs: add Russian translation of README (README_ru.md) by @deadtrickster in #17240
* fix: cannot not show embed ID in listMemories by @Haruko386 in #17211
* fix: unable to get owner in chat and search by @Haruko386 in #17244
* fix: can get duplicate agent-name when update agent by @Haruko386 in #17232
* feat(go-models): expand providers (SiliconFlow, Qiniu, Huawei Cloud, Jina) tool call support by @Hz-186 in #17241
* fix CI add gitee token temporarily by @myf-bee in #17263
* docs: fix markdownlint and command issues across READMEs by @deadtrickster in #17261
* Feat: Support pipeline-related configuration at the document level. by @cike8899 in #17212
* Go: add context to lots of interface by @JinHai-CN in #17253
* refa: optimize wiki compilation concurrency by @buua436 in #17192
* fix: prevent thinking content from leaking into visible answer in shared chat (Go mode) by @euvre in #17225
* fix: improve model merging logic in useModelsDerived for better instance-specific values by @dcc123456 in #17250
* fix: count distinct chunk IDs so doc.chunk_num matches actual indexed chunks by @euvre in #17182
* Feat: upgrade office_oxide from 0.1.2 to 0.1.8 by @xugangqiang in #17262
* fix(chunker): glue delimiter to preceding segment instead of emitting it as a standalone chunk by @euvre in #17168
* fix: improve page index descriptions by @buua436 in #17268
* fix: remediate CVE-2026-53533 by upgrading aiosmtplib to >=5.1.1 by @rayhanest in #17264
* Feat: Alter "Compilation" to "Operator" by @cike8899 in #17273
* fix: make qwen3-vl-plus usable as chat/vision model in Go mode by @euvre in #17254
* fix(agent): wire memory persistence in Message component (Go runtime) by @euvre in #17256
* Go: add context to DAO by @JinHai-CN in #17269
* fix(html_parser): keep text before the first block element by @chuenchen309 in #17073
* fix(deepdoc): keep pipe tables inside markdown code fences by @Yurii214 in #17201
* Feat: OpenAI-API-Compatible by @Lynn-Inf in #17276
* Feat: Add page rank to ParserForm by @cike8899 in #17267
* fix: optimize knowledge compilation LLM behavior and PageIndex ordering by @buua436 in #17270
* Fix: Xinference asr model call by @Lynn-Inf in #17283
* fix: fetch all knowledge bases via pagination in link-to-dataset dialog by @euvre in #17170
* fix: correct auto-parse switch thumb alignment in data source settings by @euvre in #17252
* refa: improve tree clustering by @buua436 in #17285
* Feat: refine the tree navigation during compilations by @KevinHuSh in #17140
* refactor: the request body build by @Haruko386 in #17286
* fix: unable to get prologue in agent bot by @Haruko386 in #17299
* fix: prevent summary countdown text from flickering in data source log table by @euvre in #17258
* Fix: update base_url and model list for provider tencent Hunyuan by @Lynn-Inf in #17304
* Fix  use  secrets gitee token by @myf-bee in #17297
* fix(go): resolve custom tenant model in LLM agent canvas component by @euvre in #17187
* feat: parser pages range and parse type validation for dataset/document by @xugangqiang in #17293
* fix: chat attachments not used in Go mode by @euvre in #17259
* fix(infinity): avoid hangs with pooled connections and bounded timeouts by @qinling0210 in #17287
* fix: support Infinity knowledge compilation by @buua436 in #17288
* Fix infinity for compilation by @yingfeng in #17313
* Go: fix context by @JinHai-CN in #17277
* feat: parser component param check and family mapping fixes by @xugangqiang in #17312
* remediate CVE's by upgrading mcp to >=1.28.1 by @rayhanest in #17315
* fix(web): prevent multi-select popover from closing on first selection by @dcc123456 in #17310
* fix: agent session round count not incremented in Go mode by @euvre in #17295
* fix(models): surface MiniMax rate-limit and API errors instead of generic messages by @euvre in #17292
* Only record and show the log in final state (#908) by @wangq8 in #17302
* fix(deepdoc): match table columns within the same page by @ebarkhordar in #17282
* refactor(go-models): share chat response handling by @Hz-186 in #17289
* fix(go-model): default Jina rerank top_n to document count by @Hz-186 in #17242
* fix(agent): return tavily tool errors as result instead of crashing the ReAct agent by @euvre in #17274
* fix: include full conversation details in agent log CSV export by @euvre in #17291
* fix: search chunk cannot get result by @Haruko386 in #17328
* fix(deepdoc): guard docling crop against missing page images by @Yurii214 in #17147
* fix(agent): set exp_user_id and name on session creation so exploration shows session titles by @euvre in #17327
* fix: strip YAML frontmatter and defer API reference markdown rendering by @euvre in #17272
* fix: respect REST API page_size limit in useFetchAllKnowledgeList by @euvre in #17336
* fix: unable to get pipeline category in list-agent filter by @Haruko386 in #17335
* fix: not sorted when list chunks by @Haruko386 in #17329
* Fix: tencent model in python conf by @Lynn-Inf in #17337
* fix: honor parser params and image VLM system_prompt in Go ingestion by @xugangqiang in #17334
* Feat: The PageRank value on the dataset settings page fails to display when the page is opened. by @cike8899 in #17309
* refactor: use the built-in max/min to simplify the code by @futurehua in #17059
* fix(parser): preserve loose body text in HTMLParser by @WOLIKIMCHENG in #17290
* Go: add context by @JinHai-CN in #17314
* Update document about how to retrieve document settting and metatdata by @wangq8 in #17356
* fix: stabilize knowledge compilation navigation updates by @buua436 in #17345
* docs: fix Title Case in Table of Contents entries in README.md by @amir-rezaei in #17350
* Feat: Add graph keyword search and fix dataset synthesizing issue. by @KevinHuSh in #17342
* Add cancel as final state (#918) by @wangq8 in #17352
* Fix: parse by somark in parser by @Lynn-Inf in #17355
* fix(ingestion): discard stale checkpoint when the DSL is edited before resume by @xugangqiang in #17351
* fix(go-agent): message double by @Hz-186 in #17353
* fix: unable to add metadata in dataset by @Haruko386 in #17359
* Go: add tools for a lot of providers by @Haruko386 in #17341
* enterprise tests.yml add gitee secret token by @myf-bee in #17368
* docs: fix grammar and missing articles in SECURITY.md by @amir-rezaei in #17360
* Go: add context by @JinHai-CN in #17354
* fix: remediate CVE's by upgrading lxml and lxml_html_clean by @rayhanest in #17366
* Fix(go): align ingestion pipeline with Python (parser/media dispatch + PDF coordinate chain + Chunker) by @xugangqiang in #17349
* feat: add  BASE_URL  to TencentHunYuan by @dcc123456 in #17367
* feat: add Mistral OCR (/v1/ocr) as a document parser; fix "Can't find model" mis-tag (#5782, #7075) by @Xavierando in #17057
* Go: add context, part3 by @JinHai-CN in #17369
* fix(script): fix lsb_release typo and missing verb in show_env.sh by @amir-rezaei in #17362
* feat: add AIMLAPI (aimlapi.com) as a model provider by @eugeneBackDev in #17311
* build(deps): bump pypdf from 6.13.1 to 6.14.2 by @dependabot[bot] in #17372
* docs: fix ToC anchor mismatch, heading case, and nav link text in README.md by @Gouravm1523 in #17379
* Go: add context, part4 by @JinHai-CN in #17381
* Fix: verify remote model when model_list in argument  and factory_llms is empty by @Lynn-Inf in #17364
* fix: disable select all option in MemoriesFormField component by @dcc123456 in #17363
* fix: allow local FunASR without API key by @LauraGPT in #17388
* Go: add context, part5 by @JinHai-CN in #17392
* Fix get datasets owner retrieve the whole dataset by @wangq8 in #17370
* Go: add context, part6 by @JinHai-CN in #17399
* Go: add context, part7 by @JinHai-CN in #17402
* Improve "Delimiter for text" UX: clearer tooltip + live parsed-delimiter preview by @skbs-eng in #17385
* Go: context, part8 by @JinHai-CN in #17405
* Fix: simplify verify go by @Lynn-Inf in #17397
* Fix: agent list owner filter not applied by @euvre in #17410
* fix(web): correct dataset configuration page title and description by @euvre in #17407
* fix: refresh memory sidebar avatar immediately after update by @euvre in #17401
* Chunker: port Python overlapped_percent normalization and BULLET_PATTERN title fallback by @xugangqiang in #17396
* Go: add context, part9 by @JinHai-CN in #17412
* Enhance: localhost:9385 -> sandbox-executor-manager:9385 by @wangq8 in #17414
* Go: add context, part10 by @JinHai-CN in #17417
* fix: persist pipeline tree graph rows by @buua436 in #17400
* fix(go-models): record provider token usage by @Hz-186 in #17423
* fix: add document name display in testing result cards by @dcc123456 in #17427
* fix: update delimiter form field layout for better alignment by @dcc123456 in #17432
* fix: improve model merging logic in useModelsDerived for better instance-specific values by @dcc123456 in #17422
* Introduced oxfmt by @yuzhichang in #17431
* Fix agentbot embedded chat streaming envelope by @euvre in #17420
* Go: add context, part11 by @JinHai-CN in #17426
* fix: updable to get update-time when forgot the message by @Haruko386 in #17395
* Go: add token usage for baidu, minimax, moonshot and mistral by @Haruko386 in #17413
* fix: show resolved embedding model display name in dataset list by @euvre in #17415
* fix: prevent child delimiter add from submitting form by @euvre in #17421
* fix: delete navigation subtrees correctly by @buua436 in #17434
* Go: add context, part12 by @JinHai-CN in #17435
* Feat: More APIs for compiler list and deletion of compilation result. by @KevinHuSh in #17425
* fix: remediate nltk CVEs by constraining to >=3.10.0 by @rayhanest in #17443
* Feat: Search for knowledge-base-level graph nodes. by @cike8899 in #17444
* Go: add context, part13 by @JinHai-CN in #17445
* Fix: use independent fixtures in ClampsOverlappedPct test by @xugangqiang in #17416
* fix: remediate litellm CVEs by upgrading from 1.82.5 to 1.84.0 by @rayhanest in #17448
* Fix: code review by @Lynn-Inf in #17442
* Add {date} replacement to chat by @wangq8 in #17430
* fix(web): identify provider instances by id and skip clean cards on save by @dcc123456 in #17424
* fix: Go ingestion migration batch 5 (Parser 1.1/1.7/2.11, Chunker 1.7/1.8/2.6/2.7, Tokenizer 6x fixes) by @xugangqiang in #17419
* Sandbox: bump rate limit from 5/second to 60/second (#928) by @wangq8 in #17469
* Fix: Unable to navigate from the agent list page to the compilation editing page. by @cike8899 in #17460
* fix(go-agent): use session IDs for cancellation and context flow by @Hz-186 in #17462
* fix(infinity): parent_kwd incorrectly split as keyword list causing orphaned clusters by @qinling0210 in #17475
* Feat: Delete dataset level graph. by @cike8899 in #17474
* Fix: rm tenant llm call by @Lynn-Inf in #17476
* Fix Markdown parser, the table should be inside chunk by @wangq8 in #17477
* Fix: RAGFlowJsonParser crashes with IndexError on top-level JSON scalars by @devYRPauli in #16877
* Fix tag CSV parser splicing wrong text after a multi-line quoted field by @devYRPauli in #17131
* fix: stabilize wiki planning and artifact graph rendering by @buua436 in #17473
* Fix: expose the real error when ingest error by @wangq8 in #17485
* Dev/enhance dev script by @wangq8 in #17487
* Go: add context, part14 by @JinHai-CN in #17446
* fix: failed to set right status in memory by @Haruko386 in #17472
* Fix: The documentation for setting page slicing methods in the Go version of a dataset is not displayed. by @cike8899 in #17478
* Go: add token usage for orcarouter, baichuan, cohere and novita by @Haruko386 in #17455
* Go: implement embed, rerank for PPIO provider by @Haruko386 in #17486
* fix: remediate CVE's by upgrading pdfplumber to 0.11.10 by @rayhanest in #17489
* fix(go-agent): return configured retrieval empty responses by @Hz-186 in #17484
* feat: add GreenPT model provider by @robertkeus in #17447
* fix(ingestion): improve Extractor/LLM robustness and Python->Go parity by @xugangqiang in #17470
* fix(admin): use POST for admin logout API by @euvre in #17482
* feat: add Tenki sandbox provider by @learnprogram2 in #17305
* fix: reset selected documents on new search in search page by @euvre in #17454
* Fix: go back to previous page when last card on the last page is deleted by @euvre in #17409
* Refactor(go-models)/llm token usage for longcat  by @jay77721 in #17480
* fix(go): implement Anthropic streaming (ChatStreamlyWithSender) by @abhayishere in #17380
* Fix parsing log display of infinity by @yingfeng in #17479
* fix(aimlapi): send attribution headers on every aimlapi.com request by @eugeneBackDev in #17491
* fix: remediate CVE's by bumping pyasn1 constraint to >=0.6.4 by @rayhanest in #17495
* Fix: resolve model_id to model before judge parse method by @Lynn-Inf in #17493
* Fix: search input controls styling and restore mind map modal overlay by @euvre in #17436
* Porting change from #17477 python to go, parse table into chunk for markdown file by @wangq8 in #17488
* fix: upgrade axios to 1.15.1, 0.31.1 (CVE-2026-42033) by @anupamme in #17498
* Feat: Optimize dataset-level wiki generation log display. by @cike8899 in #17492
* fix(admin,api): honor STORAGE_IMPL when surfacing file_store backend (closes #17294) by @Harsh23Kashyap in #17441
* Fix: no rate limit for sandbox run by @wangq8 in #17503
* Go: refactor ragflow_server.go by @JinHai-CN in #17494
* Fix filter dataset by owner_ids not working by @wangq8 in #17499
* fix: upgrade axios to 1.15.2 (CVE-2026-42264) by @anupamme in #17508
* fix: list model function for nvidia on python/go not returning current models by @6ba3i in #17501
* Fix: validate Mistral OCR model by @Lynn-Inf in #17515
* Fix: drop and add index for mysql by @wangq8 in #17513
* Refactor: delete llm_app.py by @wangq8 in #17517
* Fix: The multi-model comparison page cannot output messages. by @cike8899 in #17507
* Refactor: the tool usage in agent search progress by @KevinHuSh in #17490
* fix: support provider-specific verify payload for per-model verify by @dcc123456 in #17522
* Fix: On the multi-model comparison chat page, if there is more than one window, each window can be deleted. by @cike8899 in #17523
* Fix: remove unsupported get-rerank model by @Lynn-Inf in #17527
* Fix: Switching templates results in a few extra data entries in the entity specification. by @cike8899 in #17514
* Fix tag CSV parser ignoring the documented TAB delimiter by @devYRPauli in #17496
* fix(search): adapt input shape and button position to content line count by @dcc123456 in #17529
* fix: add tooltip to log button in AssistantGroupButton component by @dcc123456 in #17532
* Fix QA DOCX table parser dropping cells between repeated text by @devYRPauli in #17497
* Fix: replace unsupported default qwen rerank model by @Lynn-Inf in #17535
* Go: refactor by @JinHai-CN in #17511
* Refactor: merge dataset scope graph. by @KevinHuSh in #17526
* Feat: Store the dialogue reasoning level on the client side. by @cike8899 in #17530
* Fix dataset selector to continue scoll if still have data by @wangq8 in #17534
* feat(go-llm): align provider responses and streaming usage by @Hz-186 in #17509
* feat: make chat-channel and implement WhatsApp bot by @Haruko386 in #17518
* Fix: add StepFun china region base URL (api.stepfun.com) by @jay77721 in #17528
* Feat: Click the icon in the top-right corner to delete the note node. by @cike8899 in #17533
* fix: remediate CVE-2026-0994 by constraining protobuf to >=5.29.6 by @rayhanest in #17543
* docs: update user guide by @Yannnnnnny in #17358
* Go port: doc-level metadata extraction and knowledge compiler by @yuzhichang in #17536
* fix(ingestion): clamp unconfigured embedding limit; document chunker title parity (comment-only) by @xugangqiang in #17539
* Fix: Add list_models support for Hugging Face provider by @Lynn-Inf in #17542
* feat(agent): add Querit search tool by @ethan7zhanghx in #17548
* Fix: audio button can send message by @dcc123456 in #17541
* build(deps): bump axios from 1.15.2 to 1.18.0 in /agent/sandbox/sandbox_base_image/nodejs by @dependabot[bot] in #17549
* Fix: The compiler operator icon is not displaying on the pipeline log page. by @cike8899 in #17545
* Refact: Rename "artifact_" to "wiki_". by @KevinHuSh in #17553
* fix: restore provider-specific fields on form echo via echoTransform by @dcc123456 in #17550
* Fix: upload document might be hung the whole ragflow by @wangq8 in #17537
* Feat: batch verify models in provider instance card by @dcc123456 in #17552
* Fix: Avoid deepcopy crash for OpenAI‑API‑compatible chat models by @Lynn-Inf in #17556
* fix(i18n): add missing translation keys for model provider form fields by @dcc123456 in #17551
* Fix deepcopy the chat model by @wangq8 in #17560
* Fix multiple model chat, the content overwrite the current chat session by @wangq8 in #17566
* fix(setting-model): support field-level autoComplete to suppress browser autofill by @dcc123456 in #17559
* Fix internal/handler test failures, align response with Python contract, and re-enable handler/storage/agent tests in CI by @xugangqiang in #17554
* Fix parse image in excel as table, the image shows as one column by @wangq8 in #17569
* Feat: Compilation benefit naive rag. by @KevinHuSh in #17555
* Feat: Add an update button to the graph page of the dataset. by @cike8899 in #17571
* Fix: ci issue unit by @xugangqiang in #17577
* Fix: ci issue by @xugangqiang in #17580
* fix: propagate publish release flag through Go agent endpoints by @euvre in #17347
* Fix admin user list returning empty on first page by @euvre in #17483
* Align Go knowledge compiler RAPTOR with Python and drop guardrails by @yuzhichang in #17573
* Test: release Go-proxy RESTful contract tests verified passing in Go mode by @euvre in #17468
* docs: modify docs display & add images by @Yannnnnnny in #17575
* Fix: return model.extra for response display by @Lynn-Inf in #17583
* feat[Go]: add dingtalk chat bot for chat channel by @Haruko386 in #17565
* feat[Go]: add discord chat bot for chat channel by @Haruko386 in #17557
* feat(go-channels): add Telegram and WeCom channels by @Hz-186 in #17564
* feat(go-channels): register qqbot channel by @Hz-186 in #17598
* Fix: The save interface is continuously called without any operation being performed on the agent page. by @cike8899 in #17576
* feat(go): implement memory extraction task consumer by @euvre in #17404
* Fix: delete base url default value in FunASR by @dcc123456 in #17596
* Fix knowledge compiler Go port regressions (MySQL 1101 + Start deadlock) by @yuzhichang in #17599
* Fix: multiple model chat pass-in session_id, and do not save session. by @wangq8 in #17581
* refactor(setting-model): migrate SoMark to generic provider card withmodel-level extra fields by @dcc123456 in #17582
* Refactor(go-models): add token usage for groq by @jay77721 in #17574
* fix(go-models): align LongCat usage handling with DeepSeek and official docs by @jay77721 in #17558
* Refactor(go-models): add token usage for stepfun by @jay77721 in #17521
* feat[Go]: add feishu chat bot for chat channel by @Haruko386 in #17561
* fix(common,internal): round instead of truncate in normalize_overlapped_percent (closes #17418) by @Harsh23Kashyap in #17452
* chore(go): classify tests into unit/integration/e2e/manual tiers via build tags by @xugangqiang in #17586
* fix(channels): rename stringValue to anyToString in qqbot.go to resolve redeclaration by @jay77721 in #17610
* fix(parser): derive eng from content for DOCX/HTML TOC removal by @xugangqiang in #17585
* Feat(ingestion): add canvas pipeline debug (dry-run) mode with View result log by @xugangqiang in #17538
* Fix: force set enable_thinking to true for preview qwen3 model by @Lynn-Inf in #17604
* fix(i18n): update thinking status text and add thinking completed feedback by @dcc123456 in #17602
* fix(dataset): update error message for document deletion to use correct translation key by @dcc123456 in #17603
* fix(dataset): apply horizontal layout to auto-keywords and auto-questions form fields by @dcc123456 in #17608
* Feature: GET /datasets to support ids array by @wangq8 in #17606
* feat: add LLM-guided semantic rechunking for knowledge compilation by @buua436 in #17546
* refa: update LongCat model configuration by @buua436 in #17612
* Feat: Add a link to create a template to the operator parameter of the compiler operator. by @cike8899 in #17563
* Refactor: consolidate page and page_size by @wangq8 in #17597
* Fix: Cross-language dropdown menu options translation error. by @cike8899 in #17615
* Fix: The index textarea in the wiki template can be enlarged. by @cike8899 in #17613
* fix(dataset): echo back selected datasets not in the first page by @dcc123456 in #17616
* Fix: Blueprints cannot be displayed when selecting wiki. by @cike8899 in #17618
* Test(handler): fix failing TestSearchHandlerUpdateRejectsInvalidSearchID assertion by @xugangqiang in #17622
* test: release test_dataset_create_embedding_model_contract for Go proxy by @euvre in #17620
* fix(go-agent): align logs auth with Python and harden event data by @Hz-186 in #17617
* Fix: The wiki's claim card does not display the title. by @cike8899 in #17626
* Feat: Remove "page index" and "use kg"  from chat and retrieval form. by @cike8899 in #17627
* feat[Go]: add line chat bot for chat channel by @Haruko386 in #17594
* fix: write wrong type of metadata by @Haruko386 in #17605
* Fix: Add missing parameter key for LLM calls by @Lynn-Inf in #17628
* Refine knownledge compilation REST APIs by @wangq8 in #17624
* Go: refactor config by @JinHai-CN in #17544
* Go: refactor by @JinHai-CN in #17635
* fix(go-agent): fix Tavily tool array schemas by @Hz-186 in #17640
* refactor(knowledge_compiler): derive variant from template kind via single template id by @yuzhichang in #17630
* feat(go-models): unify OpenAI-compatible token usage extraction by @jay77721 in #17634
* fix(go): send Gemini system prompts via system_instruction instead of user turn by @abhayishere in #17449
* refactor: remove unused contentToText helper from Ollama driver by @iridescentWen in #17639
* fix: remediate CVE-2026-59939 by constraining httplib2 to >=0.32.0 by @rayhanest in #17636
* Fix: Enforce the 4 MB size limit for avatar image uploads by @euvre in #17642
* fix: don't persist ephemeral sessions in multi-model chat completions by @euvre in #17637
* Update wording for empty response to support only Naive by @wangq8 in #17651
* Go: fix SSRF by @JinHai-CN in #17641
* fix: team member can edit permission by @Haruko386 in #17631
* fix: team member can edit permission by @Haruko386 in #17633
* Go: fix migration by @JinHai-CN in #17659
* docs(api): use dataset_id in retrieval example by @lntutor in #17662
* fix(common/misc_utils): allow once decorator retries after failure by @Harsh23Kashyap in #16174
* feat(go): port knowledge compilation template/group + wiki artifact/nav/skill REST APIs from Python by @yuzhichang in #17656
* fix(nlp): drop dead `re.I` from delimiter finditer calls by @skbs-eng in #17386
* Go: fix list services by @JinHai-CN in #17664
* Go: refactor config by @JinHai-CN in #17678
* fix(chunker): enforce strict chunk_token_num cap on .txt / PDF / email paths by @skbs-eng in #17203
* Go: remove unused code by @JinHai-CN in #17680
* refactor(knowledge_compile): global compile pool, token-budget batching, and DocEngine-only deletion by @yuzhichang in #17679
* refactor(nlp): collapse 6 delimiter-parser implementations into one canonical helper (#17383) by @skbs-eng in #17387
* Go: refactor log and config by @JinHai-CN in #17684
* Go: add context to redis client by @JinHai-CN in #17689
* feat(go-models): migrate nvidia/siliconflow/groq/longcat to unified h… by @jay77721 in #17643
* Fix: handle html tags in empty_response by @Lynn-Inf in #17657
* Port Python agentic search to Go (nav service, harness, tools) by @yuzhichang in #17702
* fix: XunFei Spark provider API key verification and model listing by @euvre in #17652
* Fix: Deleting temporary chat resulted in an error. by @cike8899 in #17694
* feat(go-models): migrate batch 1 model drivers to unified handlers by @jay77721 in #17696
* Fix: Upload an image without filling in any text and press Enter; the image should not disappear. by @cike8899 in #17632
* Fix: add doc_type_kwd back by @wangq8 in #17658
* Fix: Accidentally deleted the previously selected chat. by @cike8899 in #17710
* Fix: Cache the SECRET_KEY, if it is not set, RAGFlow will auto gen one, but if Redis evict keys due to lack of memory, it will cause re-generate secret key, that cause all requests 401 by @wangq8 in #17707
* feat(go-models): migrate batch 2 model drivers to unified handlers by @jay77721 in #17697
* Go: support ids filter in list datasets API by @euvre in #17705
* fix(go-models): add StepFun Step Plan base URL by @euvre in #17704
* Dockerfile base part separate to base image by @myf-bee in #17701
* CI: change gitee token to env by @myf-bee in #17718
* Go: add context to storage by @JinHai-CN in #17690
* feat(go-models): migrate batch 3 model drivers to unified handlers by @jay77721 in #17698
* fix(chunker): honor configured delimiters as soft boundaries in TokenChunker by @xugangqiang in #17721
* REDIS: allkeys-lru -> volatile-lru to avoid got evict if lack of memory by @wangq8 in #17720
* Fix: false success toast when deleting non-existent Langfuse config by @euvre in #17719
* Fix: set chunk_num before set_progress, avoid race condition by @Lynn-Inf in #17724
* Refactor: refine wiki plan procedure. by @KevinHuSh in #17579
* Fix: In the model settings, setting the degree of freedom to 0 and then saving caused the DeepSeek model call to fail. by @cike8899 in #17725
* Fix: Every variable in the chat settings is required. by @cike8899 in #17727
* Fix: On the second page of agent version, switch the page size to empty. by @cike8899 in #17732
* fix: synchronize chat model configuration by @buua436 in #17717
* [go] Merged memory extractor with ingestion task handler by @yuzhichang in #17730
* Go: fix resource leak by @JinHai-CN in #17733
* refa: simplify RAPTOR tree clustering and configuration by @buua436 in #17614
* fix: align pipeline delimiter chunking by @buua436 in #17723
* fix(chunker): align splitOversizedUnitWith with Python running-sum flush by @xugangqiang in #17729
* feat(go-models): migrate batch 4 model drivers to unified handlers by @jay77721 in #17699
* fix: fix the filter error in dataset page by @dcc123456 in #17734
* Fix: The agent version page exported an incorrect DSL format. by @cike8899 in #17736
* fix(web): MCP edit dialog cancel/save buttons not closing by @euvre in #17713
* Fix overlapping CJK text lines in docx file preview by @euvre in #17693
* fix(provider): support editing fetched model types before save by @Haruko386 in #17728
* fix: jina’s incorrect return value: modelname by @Haruko386 in #17716
* fix: qwen can not get model list by @Haruko386 in #17709
* fix(tokenizer): load cl100k BPE table from disk instead of failing silently offline by @xugangqiang in #17712
* fix: optimize dataflow indexing and logs by @buua436 in #17737
* feat(go-models): migrate batch 5 model drivers to unified handlers by @jay77721 in #17700
* Go: fix warnings by @JinHai-CN in #17738
* test(chunker): self-contained guard for splitOversizedUnit running-sum flush by @xugangqiang in #17740
* fix(chunker): JSON path merges globally and keeps over-budget items whole by @xugangqiang in #17739
* GO CLI: add enterprise empty Dao files by @myf-bee in #17750
* Fix: handle llm_setting switch by @Lynn-Inf in #17745
* refactor(ingestion/task): extract index-doc mapping into task/indexdoc package by @xugangqiang in #17749
* Go: remove duplicated routes by @JinHai-CN in #17758
* Let agentic rag search honor metadata filter by @wangq8 in #17731
* Fix: Resolved issue where the default model could not be deleted. by @dcc123456 in #17755
* feat(message-input): add custom drag-to-resize handle at top border by @dcc123456 in #17746
* fix(go): accept empty/unknown model_type when adding provider models by @euvre in #17653
* fix: search sessions by id and conversation (#808) by @wangq8 in #17764
* fix(py-agent): remove unavailable model defaults from templates by @Hz-186 in #17762
* fix: preserve raptor tree titles by @buua436 in #17772
* fix(file-manager): strip folder path from upload filename to prevent extra folder creation by @dcc123456 in #17765
* Fix agent stop chat should not cancel the task by @wangq8 in #17769
* fix(go-agent): normalize canvas tool names by @Hz-186 in #17768
* fix: normalize legacy parser configuration by @buua436 in #17761
* fix(go-models): add stream_options.include_usage for DeepSeek and Azure OpenAI streaming by @jay77721 in #17756
* feat(go-models): migrate batch 6 model drivers to unified usage recording by @jay77721 in #17775
* feat(serenedb): add SereneDB doc-store engine (Go + Python connectors) by @deadtrickster in #17375
* Go: refactor dao and entity by @JinHai-CN in #17771
* Remove docs by @JinHai-CN in #17783
* fix(go-models): record Novita streaming usage without chatConfig by @jay77721 in #17778
* fix: agent log return zero total number by @Haruko386 in #17766
* fix: separate raptor node target from output limit by @buua436 in #17792
* fix(file-manager): resolve knowledge base names in link-to-dataset dialog for correct optimistic update by @dcc123456 in #17781
* Fix: The dataset for the retrieval operator of the agent created from the template cannot be selected. by @cike8899 in #17760
* fix: allow empty kb_ids when linking files to datasets by @euvre in #17777
* fix(go-api): reject duplicated MCP server name on update by @euvre in #17776
* fix(go-agent): preserve realtime stream deltas by @Hz-186 in #17791
* Fix: Increase the height of the system prompt text area in Memory. by @dcc123456 in #17793
* fix(api): default delimiter must be a real newline, not the r"\n" escape by @deadtrickster in #17591
* Let DELETE /datasets to a dedicated thread to avoid blocking other APIs by @wangq8 in #17796
* fix: implement Tongyi-Qianwen TTS via DashScope OpenAI-compatible endpoint by @euvre in #17770
* GO CLI: add empty enterprise dao functions by @myf-bee in #17795
* refactor(go-models): migrate remaining OpenAI-compatible drivers to shared HTTP pipeline by @jay77721 in #17787
* fix(go-ingestion): write last component output JSON as debug-log END message by @euvre in #17786
* Fix: The tool icon for the agent operator created from the template is not clickable. by @cike8899 in #17794
* fix: allow team members to update shared datasets by @buua436 in #17798
* fix: unable to control enable think in chat by @Haruko386 in #17785
* fix: can upload file larger than 10MB by @Haruko386 in #17801
* Refactor: Make wiki and web searchable. by @KevinHuSh in #17789
* Fix: Let delete dataset/document to a dedicated thread to avoid blocking othe APIs by @wangq8 in #17800
* Go: introduce content_length and max_output by @JinHai-CN in #17807
* build(deps): bump aiohttp from 3.14.1 to 3.14.3 by @dependabot[bot] in #17806
* refactor(ingestion/task): emit kb_id as a single string in ProcessChunksForPipeline by @xugangqiang in #17802
* fix(elasticsearch/test): make -tags integration tier compile by @xugangqiang in #17811
* GO CLI: modify enterprise dao functions by @myf-bee in #17812
* refactor(ingestion): own kb_id at the engine write boundary (drop producer stamp) by @xugangqiang in #17818
* fix: migrate mistralai to 2.x and remediate CVE-2025-67221 (orjson) by @rayhanest in #17810
* docs: remove retired Go Report Card badge by @yardenshoham in #17819
* feat(chat): add Querit web search provider by @ethan7zhanghx in #17813
* docs(api): correct retrieval missing dataset IDs error by @RerankerGuo in #17820
* Fix yahoo stock code extraction by @wangq8 in #17816
* fix(api): decrement knowledgebase counters on SDK re-parse / stop-parse by @deadtrickster in #17236
* fix(list-filter-bar): correct nested filter to prune non-matching children by @dcc123456 in #17814
* Feat: Remove the pageindex option from the extraction operator. by @cike8899 in #17826
* Fix: Switching back and forth between the wiki template's custom options caused the Instructions to disappear. by @cike8899 in #17805
* Fix: throw exception when switching ingestion pipeline by @yingfeng in #17833
* Fix: delimiter is chunk boundary, drop token_size atom-split (OVER_CAP default) by @xugangqiang in #17808
* Fix: SIGTERM not handle well in ragflow server chat channel by @wangq8 in #17828
* Go: add soft fingerprint framework by @JinHai-CN in #17837
* fix(chunker): align Go token merge with Python OVER_CAP and delimiter boundary by @xugangqiang in #17835
* Fix: graph explore bug. by @KevinHuSh in #17829
* Fix: display embedding model name in list dataset api response by @Lynn-Inf in #17832
* refactor(chunker): replace allowBoundaryOverflow bool with MergeStrategy enum by @xugangqiang in #17851
* feat: populate content_length and max_output from official docs by @jay77721 in #17836
* feat: update all_models.json to content_length + max_output by @jay77721 in #17839
* fix(go-agent): finish retrieval component by @Hz-186 in #17845
* Fix: dataset tag file setting cannot be saved by @euvre in #17428
* fix(knowledge-base): display embedding model friendly name in datasetlabel by @dcc123456 in #17842
* Fix: Add an icon to the tag on the agent card to distinguish it from the wiki card type. by @cike8899 in #17847
* fix: stream agentic reasoning and answers correctly by @buua436 in #17849
* Fix: Remove CompilationTemplateFormField from dataset setting page. by @cike8899 in #17852
* Go: add context for DB access by @JinHai-CN in #17861
* docs: change data source guide docs  by @Yannnnnnny in #17870
* CI: fix merge to main,cancel display fail by @myf-bee in #17869
* feat: add more file type preview support in document viewer by @dcc123456 in #17872
* Fix: The hover card referenced in the agent's floating dialog box is not fully displayed. by @cike8899 in #17867
* Fix: applying model config in one multi-chat card no longer overrides sibling cards by @dcc123456 in #17866
* fix(chunker): drop delimiter from chunk text on primary and children splits by @xugangqiang in #17868
* Fix go generated token expired in python - 2 (#906) by @wangq8 in #17875
* Go: align with EE by @JinHai-CN in #17882
* fix: honor dataset language across VisionFigureParser paths by @taek105 in #17227
* fix(deps): bump Werkzeug to 3.1.8 to fix intermittent multipart CRLF corruption by @hippozjs in #17884
* fix(chunker): keep oversize text/markdown unit whole (OVER_CAP alignment) by @xugangqiang in #17854
* test(task): expect 1 chunk after #17739 global merge by @xugangqiang in #17841
* Fix: The download button is displayed on the agent dialog page shared externally. by @cike8899 in #17880
* fix: enhance agent tags display with tooltip for better visibility by @dcc123456 in #17879
* fix: use updated RAPTOR options for skill generation by @buua436 in #17859
* fix: drop max_tokens from generic OpenAI-compatible request builder by @jay77721 in #17857
* feat(agent-list): support multi-select canvas category filtering by @dcc123456 in #17843
* fix(agent): make global variable form fields reactive to i18n language changes by @dcc123456 in #17883
* fix: filter wiki artifacts by keywords by @buua436 in #17871
* Fix: Adjust ExecutionStrategy of THINKING_MODES. by @KevinHuSh in #17862
* fix(chunker): drop dead atom-split path in mergeByTokenSizeFromJSON by @bigfish-emily in #17873
* feat: Go knowledge compiler with scheduler-driven dataset compilation by @yuzhichang in #17881
* fix: correct Tongyi-Qianwen international endpoint typo (compatible-model -> compatible-mode) by @midilandlu in #17887
* docs: fix broken sandbox link in quickstart by @richboyneedcash in #17898
* Revert "feat: Go knowledge compiler with scheduler-driven dataset compilation" by @JinHai-CN in #17897
* Go: fix heartbeat log by @JinHai-CN in #17899
* fix(models-section): defer auto-fetch catalog until base_url is set for self-hosted providers by @dcc123456 in #17804
* fix: split wiki template instruction and example by @buua436 in #17891
* fix: embedded/shared agent chat fails with retrieval query unmarshal error by @euvre in #17831
* Fix(parser): keep real line breaks when merging HTML fragments and PDF boxes by @xugangqiang in #17856
* fix: remediate CVE-2026-26209 by constraining cbor2 to >=5.9.0 by @rayhanest in #17903
* feat: add batch_size to all embedding model configs by @jay77721 in #17877
* feat: add batch_size to embedding models in all_models.json by @jay77721 in #17878
* Go: remove part of max_tokens by @JinHai-CN in #17908
* Fix attachments not take effect in agentic chat by @wangq8 in #17895
* fix(document-preview): strip WPS DISPIMG formula from xlsx before preview  by @dcc123456 in #17912
* Go: refactor by @JinHai-CN in #17917
* fix: allow recreating deleted template groups by @buua436 in #17915
* refa: unify wiki example naming by @buua436 in #17910
* fix(document-preview): make ExcelCsvPreviewer adapt to container resize by @dcc123456 in #17906
* Go: fix plenty of warnings by @JinHai-CN in #17918
* fix: keep agent chat history anchored when resizing the input box by @euvre in #17834
* Fix: dataflow log sheet shows the previous run's log in Go mode by @euvre in #17790
* fix(web): file list total count doesn't match displayed rows by @euvre in #17747
* fix: hide resume parser option by @buua436 in #17923
* Go: fix unused check by @JinHai-CN in #17922
* Fix: display embd_name in list memory api response by @Lynn-Inf in #17932
* test(chunker): lock non-text segments as standalone on merge (closes #17889) by @xugangqiang in #17896
* refactor(task): sink parser page-cap override into pipeline package by @xugangqiang in #17905
* refactor(go): remove dead atom-split helpers from TokenChunker by @xugangqiang in #17920
* fix(tokenizer): align important_kwd split to English comma (DSL parity, A2) by @xugangqiang in #17928
* Go knowledge compiler with scheduler-driven dataset compilation by @yuzhichang in #17913
* fix(go): unify children delimiter pattern with backtick-strip + rune order by @xugangqiang in #17926
* fix(go-models): validate embedding request limits by @Hz-186 in #17919
* fix(number-input): improve value handling for out-of-range inputs by @dcc123456 in #17921
* feat: add json file preview and icon by @dcc123456 in #17930
* fix(agent): hide log sheet when closing chat sheet by @dcc123456 in #17927
* fix(tree-select): allow collapsing parent nodes during search by @dcc123456 in #17934
* fix: record generated wiki page versions by @buua436 in #17931
* Fix ragflow server hung after parsing a big file by @wangq8 in #17936
* Refactor(task): collapse duplicated debug-result helpers  by @xugangqiang in #17937
* feat: add html file type icon by @dcc123456 in #17925
* Fix: recognize data type in parse method `table` by @Lynn-Inf in #17946
* fix(setting-model): saved instance api_key edits not triggering save by @dcc123456 in #17942
* Refine agentic search by @yingfeng in #17900
* feat[Go]: complete the base for data Syncer by @Haruko386 in #17890
* fix(memory): display embd_name with fallback to embd_id in form field by @dcc123456 in #17956
* refactor: extract TruncateRunes to internal/utility and fix integration build (#17938) by @xugangqiang in #17944
* fix(chunker): decide token merge on running sum, not re-tokenized join by @xugangqiang in #17948
* fix(parser/chunk): dedupe CompileDelimiterPatternList active entries by @xugangqiang in #17939
* refactor(go): clean up TokenChunker delimiter routing and children appliers by @xugangqiang in #17954
* refactor[Go]: remove chunker dead code & fix stale/false descriptors (L1/L2/L3) by @xugangqiang in #17960
* Fix: Start a new conversation; an additional conversation entry will appear once the chat ends. by @cike8899 in #17964
* Fix: Deduplication of wiki entity types by @cike8899 in #17965
* fix(nginx): use 127.0.0.1 in python conf to avoid ~1s IPv6 fallback latency by @attention-ai-yee in #17909
* fix: optimize timeline compilation template by @buua436 in #17972
* Fix: Remove leading and trailing whitespace from the `pageIndex` data returned by the backend. by @cike8899 in #17967
* feat[Go]: implement data source gmail and test prune by @Haruko386 in #17969
* fix: preserve page index chapter chunk provenance by @buua436 in #17963
* fix(markdown): open non-PDF document references in internal viewer by @dcc123456 in #17971
* Fix generate graph error by @wangq8 in #17966
* Fix: verification message by @Lynn-Inf in #17978
* Refactor: check the evidences while formalize answer. by @KevinHuSh in #17951
* fix(i18n): clarify selectAll label selects current page only by @dcc123456 in #17974
* Fix: Clicking the confirm button on the WikiCommitModal does not validate the form. by @cike8899 in #17981
* Fix: The height of the source code mode in the wiki template's Markdown editor is too small. by @cike8899 in #17982
* fix: reject duplicate chat parameter keys by @buua436 in #17977
* feat: add agent filter counts by @buua436 in #17984
* fix(go): drop content-less chunks and set chunk_order_int unconditionally in Tokenizer by @xugangqiang in #17970
* fix(model): simplify local LLM config and align model type values by @dcc123456 in #17986
* Fix: Hide the "Add Link" button in the Markdown editor. by @cike8899 in #17992
* Fix: Links to wiki content accessed via the version view are not clickable. by @cike8899 in #17987
* Append attachments content to last message by @wangq8 in #17993
* fix(document-preview): handle namespace-prefixed xlsx in ExcelCsvPreviewer by @dcc123456 in #17955
* Fix: handle unpaired <> in messages by @Lynn-Inf in #17983
* refactor(chunker): converge delimiter_mode to {delimiter, one}, drop token_size by @xugangqiang in #17979
* fix(rerank): set NvidiaRerank base_url for all models by @alex-makang in #17988
* fix: preserve selected row IDs without filtering by current list by @dcc123456 in #17994
* Feat: Search for timeline nodes. by @cike8899 in #17996
* fix: stream agent tts audio by sentence by @buua436 in #18000
* Fix answer in think by @wangq8 in #17998
* test(token_chunker): drop unsupported chunk_token_size=0 case from delimiter-mode test by @xugangqiang in #17997
* feat(knowledge_compile): materialize wiki page graph (wiki_entity/wiki_relation) by @yuzhichang in #17976
* fix: improve streaming agent tts by @buua436 in #18004
* fix: remediate CVE-2026-21226 by constraining azure-core to >=1.38.0 by @rayhanest in #18003
* fix: allow OpenAI-API-Compatible models as tenant default models by @euvre in #17968
* fix(chunk): render <img> tags as escaped text to prevent tracking by @dcc123456 in #18007
* Fix medium thinking chat failed in thinking by @wangq8 in #18008
* fix(chunker): unify TokenChunker merge and strip coord tags in Python JSON path by @xugangqiang in #18002
* fix(parser/email): align metadata/text_html emission with Python flow contract by @xugangqiang in #18005
* More stable sufficient check for agentic search by @yingfeng in #17962
* fix(ingestion): make document/KB counter application idempotent per run by @deadtrickster in #17995
* chore(rag/app): remove stray debug print() calls by @skbs-eng in #17943
* Fix: exclude unauthorized memory/dataset from list results by @Lynn-Inf in #18006
* Fix: add zhipu new model by @Lynn-Inf in #18029
* Fix naive ask report error by @wangq8 in #18030
* fix(api): map internal RetCode values to valid HTTP statuses in build_error_result by @anneheartrecord in #18009
* Refine sufficient check using LLM draft by @yingfeng in #18028
* Fix agentic chat not working in chatbot by @wangq8 in #18035
* fix(dataset): shrink table height when bulk operate bar is visible by @dcc123456 in #18031
* fix: handle disabled documents in dataset structures by @buua436 in #18033
* Go: fix env variables by @JinHai-CN in #18032
* Add OceanBase and SeekDB Go document engine by @hnwyllmm in #17780
* Update logic-hooks.ts by @wei5433575 in #15194
* test: extend /dify/retrieval unit test coverage by @zjm11902 in #17957
* fix: align LocalAI vision constructor arguments by @heimoshuiyu in #16920
* chore: remove PARSER_ALIGNMENT_HANDOFF.md by @xugangqiang in #18045
* fix(ingestion): split Extractor call() into callRaw/callText/callStructured by @jay77721 in #18038
* chore(deps): bump pypdf from 6.14.2 to 6.15.0 by @dependabot[bot] in #18048
* fix(share): The language of the shared page will cause the language of the original website to change. by @dcc123456 in #18043
* fix: prevent empty-model warning modal from staying open after OK by @dcc123456 in #18046
* fix(token-chunker-form): set minimum value for chunk token size slider by @dcc123456 in #18047
* fix(search-page): add overflow-x-auto and min-width to prevent layout issues by @dcc123456 in #18050
* fix(chat): preserve in-flight SSE stream when switching conversations by @dcc123456 in #18037
* fix: exclude disabled documents from dataset structures by @buua436 in #18041
* CI: Optimize per-install tools  by @myf-bee in #18039
* Go: fix go context by @JinHai-CN in #18052
* chore(wiki): remove stray debug print by @RerankerGuo in #18020
* Go: fix warning by @JinHai-CN in #18058
* Go: fix context by @JinHai-CN in #18060
* Fix: restrict keywords_similarity_weight [0,1] by @wangq8 in #18044
* Fix: restrict max_retries as non-negative integer by @wangq8 in #18051
* Fix: set column type priority by @Lynn-Inf in #18054
* Fix add agent update validation check by @wangq8 in #18056
* Go: fix context by @JinHai-CN in #18061
* Fix: update tree when delete skill node by @Lynn-Inf in #18063
* TS: fix comments by @JinHai-CN in #18067
* Fix(tokenizer): pin alignment guards  by @xugangqiang in #18011
* Fix(parser): don't collapse markdown doc into one item when a table is present by @xugangqiang in #18014
* Go: add context to test by @JinHai-CN in #18070
* TS: add apache license by @JinHai-CN in #18064
* fix: Remove unused constant files by @dcc123456 in #18069
* fix(search): pass selected pageSize when retrieving chunks on document change by @dcc123456 in #18072
* fix(ingestion): avoid duplicate chunk text injection in Extractor prompts by @jay77721 in #18034
* Go: fix context by @JinHai-CN in #18076
* Fix max chunk_ids = 100 by @wangq8 in #18080
* Fix: restrict xxx_ids to limit 100 by @wangq8 in #18074
* Fixed: Updated the text color style of the copy button. by @dcc123456 in #18062
* fix(floating-selection-toolbar): adjust dropdown direction based on available space by @dcc123456 in #18053
* Fix: New sessions will automatically carry over messages from the previous session by default. by @dcc123456 in #18078
* Refine agentic search & orchestration loop by @yingfeng in #18057
* Fix: After creating a wiki template and deleting the model instance, the default model appears empty, but it can still be edited and saved successfully. by @cike8899 in #18075
* Refactor splitByTokens and wire wiki incremental compile by @yuzhichang in #18083
* fix: improve structure keyword search by @buua436 in #18055
* fix(web): prevent column shift in data source log table by @euvre in #17940
* Fix: Move the content of the "Token Size" tab from the token chunker operator to the "Delimiter" tab.  #17888 by @cike8899 in #17975
* Fix: Click the blank area to prevent UpdateLogSheet from closing. by @cike8899 in #18085
* TS: more license declarations by @JinHai-CN in #18081
* feat[Go]: monitoring NATs and refactoring concurrency logic by @Haruko386 in #18049
* fix: wrap long log messages in agent pipeline log sheet by @euvre in #17782
* feat: rename agent log export button to export current page by @dcc123456 in #18090
* fix: show filtered session count in session list header by @dcc123456 in #18094
* Go: fix context and warnings by @JinHai-CN in #18097
* Fix to force logout user when set user as inactive (#893) by @wangq8 in #18104
* Fix: remove some deprecated model by @Lynn-Inf in #18105
* Fix: If a message contains multiple files, they need to be displayed with automatic line wrapping. by @cike8899 in #18109
* Fix: Retrieve the latest timeline data after cancelling the timeline task. by @cike8899 in #18102
* Fix: stabilize agent log handleSearch and preserve page_size on reset by @dcc123456 in #18087
* Test(chunker): add golden parity harness, fixtures, and live Go<->Python tool by @xugangqiang in #17735
* Generate navigation, navigation search by @qinling0210 in #18096
* chore(deps): bump fast-uri from 3.1.0 to 3.1.5 in /web by @dependabot[bot] in #18103
* test(parser): add shared golden-doc + alignment helpers by @xugangqiang in #18098
* Revert "Refine agentic search & orchestration loop" by @yingfeng in #18108
* Fix: xinference asr by @Lynn-Inf in #18110
* fix: sanitize img tags in markdown via shared SafeImg component by @dcc123456 in #18112
* refactor: use CopyToClipboard in embed-app-modal by @dcc123456 in #18115
* Integrate MWS model with API support and enhance chat functionality by @nikminer in #17959
* Go: fix context by @JinHai-CN in #18118
* fix: return error when chat-channel start has error by @Haruko386 in #18068
* refactor(parser): make markdown golden meta-driven, drop generator script by @xugangqiang in #18125
* Go: fix context, part2 by @JinHai-CN in #18133
* fix: improve incremental wiki compilation by @buua436 in #18130
* Fix: A dataset-level tree can also view file-level data. by @cike8899 in #18123
* Fix: Remove the model from the wiki template. by @cike8899 in #18119
* fix(sandbox): update Tenki SDKs and drop removed project_id by @camcalaquian in #18117
* fix(mistral): honor dataset language in figure prompts by @RerankerGuo in #18021
* fix: replace editdistance with rapidfuzz for python 3.13 wheel support by @anneheartrecord in #18132
* fix: remediate CVE-2026-33752 by constraining curl_cffi to >=0.15.0 by @rayhanest in #18134
* feat: wiki incremental Mode A/B with durable rewrite barrier by @yuzhichang in #18122
* fix(pdf/layout): replace KMeans-only column detection with gap + KMeans hybrid by @xugangqiang in #18023
* refactor(parser): preserve HTML <table> structure (inline + structured item) by @xugangqiang in #18129
* fix: honor dataset language in Go vision dispatch by @taek105 in #17892
* fix(data_source): scope table and link state to ancestors in format_document_soup by @AnnaSuSu in #17045
* fix: prevent stale loading state on previous agent chat reply by @dcc123456 in #18124
* Add doc_name for compilation generated chunk by @wangq8 in #18126
* fix: make txt file preview scrollable with mouse wheel by @euvre in #17911
* Update infinity json_extract_string usage by @qinling0210 in #18139
* Bump to infinity v0.7.3 and update go sdk version by @qinling0210 in #18137
* feat(component): add shared message-fit package by @jay77721 in #18091
* feat(dao): add shared ResolveModelContentLength helper by @jay77721 in #18106
* refactor(parser): align TextParser with Python _code delimiter split by @xugangqiang in #18128
* Honor explicit model URL overrides for NVIDIA endpoints by @mkaaad in #18152
* fix: clean up wiki blueprint default instruction text by @euvre in #17893
* fix: search files recursively within current folder subtree by @euvre in #17779
* fix(web): add missing 'general' chunk method description in locales by @euvre in #17773
* fix: drop static catalog check when resolving tenant default models by @euvre in #17714
* feat(web): submit retrieval testing form on Enter, newline on Shift+Enter by @euvre in #17741
* Fix(mcp): reset bulk selection after delete and mode switch by @euvre in #18073
* Fix embed dialog language label mistranslation by @euvre in #17827
* fix(web): align Go chunk method dropdown order with Python parser_ids by @euvre in #18127
* Go: implement ?type=filter branch for GET /agents by @euvre in #18111
* Go: clear stale task cancel flag so first re-parse after cancel runs by @euvre in #17708
* fix: prevent stale conversation messages during session switch by @dcc123456 in #18140
* Feat: The dataset-level tree view supports search. by @cike8899 in #18138
* Fix: Deleting a record from the knowledge base table should remove the corresponding selected record. by @cike8899 in #18142
* fix: skip built-in parser validation when pipeline mode is selected by @dcc123456 in #18158
* fix: enable preview for legacy .doc documents in Go server by @euvre in #17767
* refactor(agent): use shared message-fit in LLM component by @jay77721 in #18092
* fix(ingestion): fit extractor and tagger prompts to model content_length by @jay77721 in #18095
* Fix: Hide the reset button on the embedded page that is in conversation by @cike8899 in #18153
* fix: reorder user setting sidebar menu items and update default redirect path by @dcc123456 in #18155
* fix: persist page size across main page navigation by @euvre in #17439
* test: release test_documents_metadata_update_path for Go proxy by @euvre in #17646
* fix(agent): fit LLM prompts to model content_length by @jay77721 in #18093
* Port dataset-level knowledge compile to Go with variant dispatch by @yuzhichang in #18161
* docs(ingestion): correct stale parser-component scope comment by @xugangqiang in #18147
* fix(pdf/layout): recover title-bridged & gutter-less double columns (2D rescue + L3) by @xugangqiang in #18150
* fix(parser): emit a single structured table item in document order by @xugangqiang in #18168
* fix: keep loading indicator on streaming assistant message in agent chat by @dcc123456 in #18172
* Fix: Preserve the text format returned by the API. by @cike8899 in #18167
* fix(ingestion): remove broken built-in Resume pipeline by @euvre in #18173
* fix: improve incremental wiki compilation by @buua436 in #18164
* Feat: Adjust the agent list style. by @cike8899 in #18163
* fix(dao): honor tenant-configured context window override (D22/D23) by @jay77721 in #18171
* docs: remove unnecessary docs & adjust page layout by @Yannnnnnny in #18146
* Fix: Clicking the agent's code tool node is prohibited. by @cike8899 in #18165
* fix(ingestion): strip mid-text think blocks in extractor metadata path by @jay77721 in #18175
* docs: document the tenant_id parameter in resume parsing by @iridescentWen in #18169
* test(parser): pin figure-aware reading order in PDF post-process by @xugangqiang in #18178
* feat(agent): add Querit Contents tool by @ethan7zhanghx in #18156
* fix(chunker): honor bare (non-backtick) delimiters in TokenChunker (#17723) by @xugangqiang in #18182
* Port dataset nav and structure graph fixes to Go, merge agents list by @yuzhichang in #18183
* fix(web): keep single-chat SSE stream alive across route changes by @dcc123456 in #18180
* Fix: allow datasets sharing a base embedding model to be searched together by @euvre in #18166
* refactor: remove resume (CV) workflow DSL template and Go handling code by @jay77721 in #18177
* feat: Add per-model URL overrides for NVIDIA embed and rerank models by @mkaaad in #18154
* Fix: reduce model verify cost by @Lynn-Inf in #18191
* TS: fix label text by @JinHai-CN in #18199
* refactor(common): unify </think>-strip into shared StripThinkTrailing helper by @jay77721 in #18179
* Fix: The filenames in the parsing result log pages are not displayed. by @cike8899 in #18194
* fix(web): regenerate a single-chat answer as a new turn by @dcc123456 in #18202
* chore(web): drop unused somark purchaseUrl locale strings by @dcc123456 in #18204
* fix: align shared search result total by @buua436 in #18200
* fix(agent): accept 1D files wire shape in chat/completions by @euvre in #18197
* Fix agentic chat low/medium cannot answer the table content by @wangq8 in #18196
* Refactor: drop model IDs from tenant info in favor of default model dictionary (#966) by @wangq8 in #18209
* feat: add UCloud agent sandbox provider by @fioncat in #18088
* docs: fix broken PaddleOCR serving link in FAQ by @Apageoflove in #18207
* fix(mineru): honor dataset language in figure prompts by @ting-hong-shieh in #18188
* fix(tests): isolate token chunker imports by @RerankerGuo in #18018
* Fix: The operator field of the compiler operator is a required field. by @cike8899 in #18212
* Fix: Display the search page chunks in plain text format by @cike8899 in #18213
* fix(web): abort the stream when its in-flight question is deleted by @dcc123456 in #18214
* fix(web): seed new conversation from server prologue before appending question by @dcc123456 in #18206
* Fix invalid query string (e.g. ?) will error search by @wangq8 in #18217
* fix(book): preserve PDF coordinate tags in the naive merge branch by @xugangqiang in #18203
* perf(web): stop re-rendering the whole chat transcript on every stream flush by @dcc123456 in #18221
* Add dataset navigation search for agentic RAG by @qinling0210 in #18218
* fix: refine structure graph keyword search by @buua436 in #18181
* fix: unable to pass Temperature and MaxTokens in agent by @Haruko386 in #18223
* Port dataset-level structure merge for timeline/graph/mindmap by @yuzhichang in #18201
* feat[Go]: resuming transmission from the point of interruption during data source synchronisation by @Haruko386 in #18176
* feat(cli): add sync logs listing commands for the user CLI by @mkaaad in #18195
* Replace pgsty/minio image with pgsty/silo by @sarbojitrana in #18231
* Fix: restrict SiliconFlow models in CI to 4 free models by @Lynn-Inf in #18225
* fix(web): keep reasoning and internet options when regenerating an answer by @dcc123456 in #18226
* Fix: Remove the right anchor point of the tool node by @cike8899 in #18224
* feat: support entity and topic wiki modes by @buua436 in #18216
* Refine agentic RAG phase logging by @qinling0210 in #18228
* Add MySQL and PostgreSQL connectors to Go syncer by @mkaaad in #18162
* Go: add error logs when fail to init infinity by @JinHai-CN in #18235
* Go: refactor embed and rerank interface by @JinHai-CN in #18240
* fix(chunker): carry overlap-head PDF positions into new chunk (#18148) by @xugangqiang in #18227
* fix(web): enable client pagination in admin user detail tables by @dcc123456 in #18238
* Fix: reject move to current location request by @Lynn-Inf in #18234
* refactor(web): drop per-model checkbox selection from batch actions by @dcc123456 in #18233
* Port agentic search high/ultra research loop to Go by @yuzhichang in #18242
* fix(parser): support .msg parsing and make email attachments retrievable by @xugangqiang in #18198
* fix: exclude disabled documents from wiki compilation by @buua436 in #18261
* Fix: Editing a document slice requires showing the wiki's update button by @cike8899 in #18267
* fix: update Tongyi Qianwen API key URL to bailian console by @euvre in #18266
* fix(web): widen max_tokens number input in LLM settings popover by @euvre in #18265
* docs: add compilation docs & fix some issues by @Yannnnnnny in #18268
* Fix: Delete unused wiki template pages. by @cike8899 in #18275
* Fix DateTimeTzField crashing on driver-native datetimes and unparseable values by @euvre in #18264
* fix(web): render file-type icons for mp3/svg and fall back to a default file icon by @euvre in #18230
* fix(agent): keep think tags in persisted agent session messages by @euvre in #18222
* Fix: return error when no valid speech text in intranscription response by @Lynn-Inf in #18277
* feat(chunker): add ManualChunker for manual-layout PDFs by @xugangqiang in #18272
* fix: route TokenChunker delimiter_mode "one" to OneChunker in Go ingestion by @euvre in #18121
* fix(web): add tooltip to web search toggle in chat input box by @euvre in #18276
* fix(web): pass pdf.js cMap/standard font URLs so CID-font PDFs render in preview by @euvre in #18249
* fix: return total number of docs when sync has no update by @Haruko386 in #18255
* feat[syncer]: add checkpoint resume run for RSS by @Haruko386 in #18257
* feat[syncer]: add checkpoint resume run for Github by @Haruko386 in #18260
* fix: return total numbers of the search result by @Haruko386 in #18071
* Go: fix context by @JinHai-CN in #18291
* The tool operators that allow the agent to be collapsed and hidden by @cike8899 in #18288
* fix(web): scope answer loading placeholder to the last message by @dcc123456 in #18284
* fix(web): clarify batch model action labels by @dcc123456 in #18283
* fix(web): make the selected agent-explore session visually distinct by @euvre in #18253
* fix(agent): keep agent chat sidebar scroll container shrinkable by @euvre in #18252
* fix(go-agent): forward sys.files uploads to vision LLMs by @euvre in #18246
* deepdoc: send lossless PNG instead of JPEG to the DeepDoc inference service by @xugangqiang in #18282
* Fix: If the model is removed from the supplier list, an error should occur when accessing the search and memory pages. by @cike8899 in #18270
* fix: hide wiki mode on python backend by @buua436 in #18289
* Fix: Prevent the tool operator from being dragged and connected by other operators. by @cike8899 in #18290
* fix(web): preserve leading whitespace in chunk card content by @euvre in #18215
* Go: align cancel-parse error with Python for un-started documents by @euvre in #18245
* Go: fix context, part2 by @JinHai-CN in #18296
* fix(web): enlarge card '...' edit button hit area by @euvre in #18262
* fix: track wiki chunk changes incrementally by @buua436 in #18285
* Fix: hide top-k under the rerank model by @dcc123456 in #18302
* Fix:The dialog will display the referenced documentation even if the API does not return any documentation data. by @cike8899 in #18298
* fix(web): show queued memory extraction tasks as pending instead of failed by @euvre in #18297
* fix(search): show honest empty state when mind map has no content by @euvre in #18294
* Search in navigation tree & store graph content in nav_doc by @qinling0210 in #18303
* fix: stop three recurring errors on doc delete (#17685) by @skbs-eng in #17686
* feat(syncer): Add REST API connector by @mkaaad in #18256
* feat(web): pin the current user to the top of admin user list by @dcc123456 in #18345
* Fix _routed_docs leak across parallel claims in agentic research by @qinling0210 in #18348
* Feat: connector go discord by @mkaaad in #18349
* docs: fix dead internal links in FAQ and HTTP API reference by @yzxcj797 in #18312
* fix(tcadp): add timeout to HTTP GET request for document download by @Ricardo-M-L in #18336
* fix(ingestion): accumulate component progress lines into document.progress_msg by @euvre in #18356
* Fix: enhance form submission error handling and update rerank form field prefix by @dcc123456 in #18351
* Fix: Switching the rerank model on the chat page fails to save the configuration. by @cike8899 in #18357
* docs：fix compilation docs & change page layout by @Yannnnnnny in #18358
* feat(ingestion): end-to-end Auto metadata in Go (extractor merge, builtin UI, built-in fields) by @jay77721 in #18273
* fix(pdf): align DLA region handling with Python reference by @xugangqiang in #18295
* deepdoc(pdf): WarpCrop de-skew + score-based layer-2 rotation (Go OCR parity with Python) by @xugangqiang in #18299
* fix(parser): align Go spreadsheet HTML with Python and harden header detection by @xugangqiang in #18304
* fix(ingestion): unify extractor prompt placeholder rendering and per-chunk substitution by @jay77721 in #18355
* Refactor: do not include compliation chunks in retrieval testing by @wangq8 in #18364
* Feat: Move wiki-related translation resources to a namespace. by @cike8899 in #18359
* Feat: add qwen-3.8 series models. by @Lynn-Inf in #18368
* Fix: get memory size cache rightly by @Lynn-Inf in #18370
* fix: align Go ingestion progress and pipeline selection by @buua436 in #18366
* fix(web): exclude <think> reasoning blocks from copied answer by @dcc123456 in #18371
* fix(pdf): drop text boxes only when replaced by a table HTML by @xugangqiang in #18363
* Fix: The begin operator of the agent created from the template does not display a pattern. by @cike8899 in #18367
* fix(model_meta): Ollama._get_api_key handles JSON-dict api_key for the verify path by @Harsh23Kashyap in #18321
* fix(deepdoc): drop low-confidence garbage DLA regions to match Python by @xugangqiang in #18365
* fix: restore document query cache matching by @buua436 in #18376
* Fix cross-page merged tables dropping continuation rows by @xugangqiang in #18362
* fix: unable to search agent log by ID by @Haruko386 in #18373
* feat[syncer]: implement outlook data source by @Haruko386 in #18350
* fix[syncer]: cannot run prune task by @Haruko386 in #18344
* refactor: replace Split in loops with more efficient SplitSeq by @questfever in #18248
* fix(deepdoc): trim garbage-gate comments, fix subtest fact error, dedupe constants by @xugangqiang in #18377
* fix(deepdoc): apply 0.4 garbage gate in LayoutRecognizer.forward by @xugangqiang in #18372
* fix(ingestor): stop dropping tasks under burst parse backpressure by @xugangqiang in #18369
* docs: fix Docker installation link in Korean README by @Lem0nTea2002 in #18385
* fix(agent/tools): read Keenable result content from `snippet` by @ilya-bogin-keenable in #18341
* fix(harness): honor node and engine retry policies in Pregel by @Lem0nTea2002 in #18388
* Go: fix context, part3 by @JinHai-CN in #18390
* Feat: data source test connection with unified connector validation by @huang-aoqin in #14992
* fix: exclude compiled artifacts from chunk lists by @buua436 in #18382
* fix(web): hide verify button for OpenAI-API-Compatible provider by @dcc123456 in #18380
* fix(parser): check every grid row, not just the first, before cross-page rebuild by @xugangqiang in #18378
* feat: Gaussdb adaptation by @zws202606 in #17703
* fix(web): confirm before removing models from a provider instance by @dcc123456 in #18400
* fix: update ZHIPU-AI API key URL to the new BigModel console by @euvre in #18406
* feat[syncer]: add connection test with unified connector validation by @Haruko386 in #18281
* feat(ingestion,web): modularize extractor configuration with sub-tabs, independent prompts, and metadata integration by @jay77721 in #18383
* Fix: handle title and truncate document preview by sentence by @Lynn-Inf in #18407
* Fix: correct chunk order for non‑PDF documents by @Lynn-Inf in #18412
* fix(pdf): align TSR crop margin with Python (fixed 30px, not 3%) by @xugangqiang in #18387
* fix(agent): close MCP sessions wrapped in MCPToolBinding by @var4dev in #18399
* fix(deepdoc): align table orientation scoring with Python recognition confidence by @xugangqiang in #18401
* fix(deepdoc): add orphan-row cleanup to Go table construction (parity with Python) by @xugangqiang in #18402
* chore(table): remove stale manual parity-issues test by @xugangqiang in #18403
* Refactor: make page number readable by @wangq8 in #18409
* fix(deepdoc): drop per-cell OCR in Go table parser to align with Python by @xugangqiang in #18405
* Fix: set database version to v0.27.0 by @Lynn-Inf in #18424
* fix(web): remove duplicate tags for locales files by @Haruko386 in #18421
* Fix: some pdf with chinese name cannot preview by @wangq8 in #18422
* Feat: connector go webdav by @mkaaad in #18379
* fix(deepdoc): assign each PDF box to a single table cell matching Python by @xugangqiang in #18410
* fix(agent/tools): port DeepL to ToolBase so it works as an Agent tool by @immuhammadfurqan in #18395
* fix(web): prevent docx preview zoom from skipping a level by @tryeverything24 in #17323
* Fix parent chunk with extra newline by @wangq8 in #18426
* Feat: Remove `pageindex` from the dataset configuration page. by @cike8899 in #18429
* Fix: Incorrect translation of "search" on the chunk page. by @cike8899 in #18427
* fix(web): surface the validation error when a metadata value save is blocked by @dcc123456 in #18418
* chore(deepdoc): remove dead standalone DLA client, converge on inference.Client by @xugangqiang in #18384
* fix(deepdoc): preserve cross-page continuation rows on column-count mismatch by @xugangqiang in #18416
* Fix: Edit wiki-style text by @cike8899 in #18419
* fix: isolate extract html request headers by @ump45nose in #18322
* Fix: verification error msg by @Lynn-Inf in #18437
* fix(agent): make tag metadata searchable and sortable in agent list by @peewee92 in #18313
* document[syncer]: add development document for syncer by @Haruko386 in #18431
* fix(deepdoc): align Go table header detection with Python (parity #4) by @xugangqiang in #18404
* Fix multiple model chat always use the chat model, not using the passing model by @wangq8 in #18439
* Fix: use Infinity connPool.get_conn() in metadata filter push-down by @qinling0210 in #18438
* fix(web): show introduction for built-in pipelines audio/email/knowledge compiler by @euvre in #18411
* fix(web): strip think sections from floating chat widget copy by @dcc123456 in #18436
* feat[syncer]: implement notion data source by @Haruko386 in #18423
* feat[Syncer]: implement Google Cloud Storage data source by @Haruko386 in #18420
* feat(go-syncer): add GitLab datasource connector with checkpoint resume by @mkaaad in #18425
* CLI: fix check license by @JinHai-CN in #18451
* Fix: Initiate a request to check for file changes two seconds after compilation completes. by @cike8899 in #18440
* Fix: set enable_thinking to True for qwen3.8-2.4t-a95b by @Lynn-Inf in #18442
* Fix pdf cancel at task level not document level, multiple record logs by @wangq8 in #18435
* Fix task time is incorrect by @wangq8 in #18453
* fix(agentic-rag): raise max_parallel_agents for high/ultra to 4, use web search after locate fails repeatedly by @qinling0210 in #18430
* fix(model_meta): LocalAI._get_api_key handles JSON-dict api_key for the verify path by @Harsh23Kashyap in #18314
* fix(model_meta): Base._get_api_key handles JSON-dict api_key for the model-list verify path by @Harsh23Kashyap in #18386
* feat(title-chunker): configurable token-count cap with sentence-boundary re-split by @xugangqiang in #18455
* fix: honor minimum_should_match in GaussDB search by @Sevenzuo in #18456
* test: add text&code parser-to-chunker parity golden by @ming1523 in #18311
* Remove noocr/SkipOCR dead code path and text-layer-only parity test by @xugangqiang in #18443
* fix(deepdoc): score table orientation by per-line detect+recognize by @xugangqiang in #18452
* Fix reasoning not working in multiple model chat by @wangq8 in #18457
* feat(MinerU):Add support for MinerU table and image chunk classification by @Aeovy in #16703
* fix: make ScheduledTask lifecycle concurrency-safe by @zloglevel in #18469
* fix(title-chunker): lossless hard-split on multibyte + re-split logging by @xugangqiang in #18476
* fix(deepdoc): align table header detection with Python (follow-up to #18404) by @xugangqiang in #18454
* Fix: Retrieve the frontend code of the extractor operator for the Python version. by @cike8899 in #18481
* feat: improve Go wiki compilation by @buua436 in #18479
* docs(harness): fix AgentCore import aliases in examples by @Lem0nTea2002 in #18434
* docs(harness): fix package documentation link by @Lem0nTea2002 in #18428
* test: cover stale conversation switching by @01JohnMa in #18211
* Fix: Deleting a large language model selected on the memory page from the model vendor should result in an error message when accessing the memory page. by @cike8899 in #18486
* refa: remove document graph snapshot payload by @buua436 in #18488
* fix(web): preserve caller onBlur in NumberInput by @dcc123456 in #18491
* Fix ingestion pipeline child delimiter extra newline by @wangq8 in #18490
* fix(llm): disable DeepSeek V4 thinking by default via extra_body by @D819 in #18241
* feat(syncer): add Bitbucket connector with checkpoint resume by @mkaaad in #18487
* Fix: connector validation error by @mkaaad in #18489
* Fix search with [+-] crash the search by @wangq8 in #18497
* refactor(extractor): unify 5-in-1 modular schema across dataset and pipeline, drop legacy field_name and custom prompt by @jay77721 in #18432
* fix: allow .bmp uploads in filename type whitelist by @hippozjs in #17830
* Fix: not use connect check result as model verify result by @Lynn-Inf in #18492
* fix(deepdoc): collapse overlapping OCR boxes before Go table cell-fill by @pangwangshu in #18507
* fix(harness): enforce concurrency limits for retried Pregel tasks by @Lem0nTea2002 in #18496
* Fix empty Markdown document parsing by @guominjia in #18503
* Fix: Clearing the files of the dataset selected in the chat should result in an error message appearing on the chat page. by @cike8899 in #18510
* Docs: 0.27.0 release notes by @wangq8 in #18493
* Docs: Update version references to v0.27.0 in READMEs and docs by @asiroliu in #18500

## New Contributors
* @V1V1rus made their first contribution in #16732
* @taek105 made their first contribution in #16806
* @boskodev790 made their first contribution in #16692
* @rayhanest made their first contribution in #16907
* @LauraGPT made their first contribution in #16473
* @RahilOp made their first contribution in #16932
* @77zane made their first contribution in #16844
* @iwasaki1112 made their first contribution in #16974
* @chuenchen309 made their first contribution in #16949
* @maybehokori made their first contribution in #16892
* @deadtrickster made their first contribution in #16958
* @zcxGGmu made their first contribution in #17009
* @Yurii214 made their first contribution in #17064
* @muhzuhaib made their first contribution in #17239
* @ebarkhordar made their first contribution in #17282
* @futurehua made their first contribution in #17059
* @WOLIKIMCHENG made their first contribution in #17290
* @amir-rezaei made their first contribution in #17350
* @Xavierando made their first contribution in #17057
* @eugeneBackDev made their first contribution in #17311
* @Gouravm1523 made their first contribution in #17379
* @robertkeus made their first contribution in #17447
* @learnprogram2 made their first contribution in #17305
* @jay77721 made their first contribution in #17480
* @abhayishere made their first contribution in #17380
* @anupamme made their first contribution in #17498
* @Yannnnnnny made their first contribution in #17358
* @ethan7zhanghx made their first contribution in #17548
* @iridescentWen made their first contribution in #17639
* @lntutor made their first contribution in #17662
* @yardenshoham made their first contribution in #17819
* @RerankerGuo made their first contribution in #17820
* @hippozjs made their first contribution in #17884
* @bigfish-emily made their first contribution in #17873
* @richboyneedcash made their first contribution in #17898
* @attention-ai-yee made their first contribution in #17909
* @alex-makang made their first contribution in #17988
* @anneheartrecord made their first contribution in #18009
* @hnwyllmm made their first contribution in #17780
* @wei5433575 made their first contribution in #15194
* @zjm11902 made their first contribution in #17957
* @heimoshuiyu made their first contribution in #16920
* @nikminer made their first contribution in #17959
* @camcalaquian made their first contribution in #18117
* @AnnaSuSu made their first contribution in #17045
* @mkaaad made their first contribution in #18152
* @fioncat made their first contribution in #18088
* @Apageoflove made their first contribution in #18207
* @ting-hong-shieh made their first contribution in #18188
* @sarbojitrana made their first contribution in #18231
* @yzxcj797 made their first contribution in #18312
* @questfever made their first contribution in #18248
* @Lem0nTea2002 made their first contribution in #18385
* @zws202606 made their first contribution in #17703
* @var4dev made their first contribution in #18399
* @tryeverything24 made their first contribution in #17323
* @ump45nose made their first contribution in #18322
* @peewee92 made their first contribution in #18313
* @Sevenzuo made their first contribution in #18456
* @ming1523 made their first contribution in #18311
* @zloglevel made their first contribution in #18469
* @01JohnMa made their first contribution in #18211
* @D819 made their first contribution in #18241
* @pangwangshu made their first contribution in #18507
* @guominjia made their first contribution in #18503

**Full Changelog**: https://github.com/infiniflow/ragflow/compare/v0.26.4...v0.27.0

---

> **Source** [infiniflow/ragflow](https://github.com/infiniflow/ragflow) · `v0.27.0` · 2026-08-19 · [upstream release](https://github.com/infiniflow/ragflow/releases/tag/v0.27.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
