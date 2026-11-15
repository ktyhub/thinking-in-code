---
title: "ragflow v0.26.4"
project: "ragflow"
repo: "infiniflow/ragflow"
tag: "v0.26.4"
version: "v0.26.4"
published: "2026-07-07"
type: "patch"
lang: "en"
summary: "Released on July 7, 2026."
---

# ragflow v0.26.4

## Summary

Released on July 7, 2026.

### New features

- NLP/Tokenization: Adds a language-aware Snowball stemmer supporting 16 languages, integrates the dataset `language` parameter across the tokenization pipeline, and adds Dutch to the frontend. [#14140](https://github.com/infiniflow/ragflow/pull/14140)

### Bug fixes

- The system crashed with a `ValueError` when parsing LM-Studio model names containing an '@' symbol. [#16467](https://github.com/infiniflow/ragflow/pull/16467)
- The MCP server crashed because the list_chats function expected a list from the `/chats` API but received a paginated dictionary instead. [#16639](https://github.com/infiniflow/ragflow/pull/16639)
- The Docling parser silently dropped mathematical formulas from documents instead of extracting them. [#16645](https://github.com/infiniflow/ragflow/pull/16645)
- The system failed to persist inline edits made to metadata values to the backend. [#16655](https://github.com/infiniflow/ragflow/pull/16655)
- The system removed existing links when bulk-linking files to datasets. [#16587](https://github.com/infiniflow/ragflow/pull/16587)
- The filter failed to use Chinese. [#16673](https://github.com/infiniflow/ragflow/pull/16673)
- The system failed to enforce that tag weights must be greater than zero. [#16657](https://github.com/infiniflow/ragflow/pull/16657)
- The layout of the agent prompt dropdown menu rendered incorrectly. [#16653](https://github.com/infiniflow/ragflow/pull/16653)
- The Laws chunker incorrectly classified dotted-number cross-references as headings. [#16626](https://github.com/infiniflow/ragflow/pull/16626)
- The system failed to prevent users from saving duplicate MCP server names during the editing process. [#16588](https://github.com/infiniflow/ragflow/pull/16588)
- The system allowed users to export an empty MCP server selection. [#16589](https://github.com/infiniflow/ragflow/pull/16589)

## What's Changed
* Go: unify three services into one binary by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16462
* Feat: Add knowledge compilation workflows by @KevinHuSh in https://github.com/infiniflow/ragflow/pull/16515
* Go: file syncer service framework by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16579
* fix(agent/tools): port AkShare to ToolBase so it works as an Agent tool by @immuhammadfurqan in https://github.com/infiniflow/ragflow/pull/16417
* fix: prevent duplicate 'skills' and '.knowledgebase' folders caused by race conditions by @euvre in https://github.com/infiniflow/ragflow/pull/16568
* Fix harness DAG slow-branch test cased by nil initialization of pregel engine  by @yingfeng in https://github.com/infiniflow/ragflow/pull/16591
* Refactor: reformat all code for lefthook using ruff and gofmt by @wangq8 in https://github.com/infiniflow/ragflow/pull/16585
* fix: preserve existing links when bulk linking files to knowledge bases by @euvre in https://github.com/infiniflow/ragflow/pull/16587
* fix: agent chat completions can not use by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16570
* fix: unable to import mcp from local by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16590
* fix: unable to fetch tools for MCP by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16583
* fix(go-file): KB counter drift when deleting files with linked documents by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16584
* fix: prevent exporting empty MCP server selection by @euvre in https://github.com/infiniflow/ragflow/pull/16589
* fix: prevent duplicate MCP server name when editing by @euvre in https://github.com/infiniflow/ragflow/pull/16588
* Go: fix 'list services' by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16598
* i18n: localize visual input file label in agent form by @euvre in https://github.com/infiniflow/ragflow/pull/16594
* Fix: optimize folder data handling in MoveDialog component by @dcc123456 in https://github.com/infiniflow/ragflow/pull/16580
* Go: refactor by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16602
* fix(agent/tools): port Crawler to ToolBase so it can load and run by @immuhammadfurqan in https://github.com/infiniflow/ragflow/pull/16415
* Refactor(harness): remove naive inline graph engine , unify graph execution under single pregel engine by @yingfeng in https://github.com/infiniflow/ragflow/pull/16608
* Port agent PRs to GO - 3 by @qinling0210 in https://github.com/infiniflow/ragflow/pull/16596
* Feat: add gbrain compile template for session/memory data by @yingfeng in https://github.com/infiniflow/ragflow/pull/16613
* fix: get all memory in team with permission=me by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16593
* fix: get team merber's chat by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16597
* fix: get team's search in own search-list by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16599
* Fix Go: list providers order issue. by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16616
* fix: cannot get query in agent-log by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16610
* fix(agent): defend against `@` in var names at all template-split sites by @skbs-eng in https://github.com/infiniflow/ragflow/pull/16469
* Go: Update error info by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16619
* Go:cli  move _order _columns  sort group by @myf-bee in https://github.com/infiniflow/ragflow/pull/16615
* fix(agent): enable MCP file preview via doc_id by @monsterdavidliu-ux in https://github.com/infiniflow/ragflow/pull/15399
* docs: update Docker build instructions for deps image by @asiroliu in https://github.com/infiniflow/ragflow/pull/16620
* Update development script by @wangq8 in https://github.com/infiniflow/ragflow/pull/16623
* Feat: Put some wiki templates. by @KevinHuSh in https://github.com/infiniflow/ragflow/pull/16617
* Delete canvas_app.py and evaluation_service.py by @wangq8 in https://github.com/infiniflow/ragflow/pull/16614
* Cap RAPTOR UMAP n_neighbors to prevent OOM on large datasets by @afrozenpeach in https://github.com/infiniflow/ragflow/pull/16627
* Align Go ingestion boundaries with Python by @yuzhichang in https://github.com/infiniflow/ragflow/pull/16647
* Refactor: pdf parser  by @xugangqiang in https://github.com/infiniflow/ragflow/pull/16625
* fix(agent): collect CodeExec artifacts from ReAct tool responses by @euvre in https://github.com/infiniflow/ragflow/pull/16609
* fix(agent): enable single-component debug for Agent in Go backend by @euvre in https://github.com/infiniflow/ragflow/pull/16606
* fix(go-skill): Elasticsearch skill search field mapping by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16611
* fix(go-document): add document and file access checks by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16592
* feat(agent): expose thinking mode control per LLM node in Agent canvas by @AI-Mart in https://github.com/infiniflow/ragflow/pull/16640
* Switch the default minio image in the helm chart as well by @carlobeltrame in https://github.com/infiniflow/ragflow/pull/16322
* Port agent PRs to GO - 4 by @qinling0210 in https://github.com/infiniflow/ragflow/pull/16652
* fix: Docling parser extracts mathematical formulas by @Sohaib9920 in https://github.com/infiniflow/ragflow/pull/16645
* fix(api): cap memory message limit and top_n at REST_API_MAX_PAGE_SIZE by @jony376 in https://github.com/infiniflow/ragflow/pull/15376
* Dev: Fix nats host by @wangq8 in https://github.com/infiniflow/ragflow/pull/16656
* fix(nlp): prevent dotted-number cross-references from being classified as headings in Laws chunker by @OSHA-B in https://github.com/infiniflow/ragflow/pull/16626
* fix(metadata): inline value edits not persisted to backend by @dcc123456 in https://github.com/infiniflow/ragflow/pull/16655
* fix(go-agent): align agent debug input form with Python by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16654
* feat(go): add length split strategy with overlap to chunk pipeline by @Crystora in https://github.com/infiniflow/ragflow/pull/16047
* feat(go): drop empty and duplicate chunks in postprocess filter by @Crystora in https://github.com/infiniflow/ragflow/pull/16049
* Fix OpenAI response created timestamp by @Harsh23Kashyap in https://github.com/infiniflow/ragflow/pull/16401
* Fix: Layout of the agent prompt dropdown menu is messed up. by @cike8899 in https://github.com/infiniflow/ragflow/pull/16653
* Fix Tag weight should be greater than 0 by @wangq8 in https://github.com/infiniflow/ragflow/pull/16657
* Fix Agent session lost <think></think> tag by @wangq8 in https://github.com/infiniflow/ragflow/pull/16670
* Go: merge functions by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16622
* Fix filter to use Chinese by @wangq8 in https://github.com/infiniflow/ragflow/pull/16673
* fix(go): uploaded documents should be enabled by default by @euvre in https://github.com/infiniflow/ragflow/pull/16674
* Refactor: Remove redundant functions - and fix run_raptor to do_raptor by @KevinHuSh in https://github.com/infiniflow/ragflow/pull/16671
* fix(go-agent): Yahoofinance input and run by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16658
* fix(go-agent): missing input form for ExeSQL and Browser agent nodes by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16675
* fix(go-document): keep upload partial success data as array by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16661
* fix(go): add missing 'resume' chunk method for new tenants by @euvre in https://github.com/infiniflow/ragflow/pull/16660
* Align Go parser backends and PDF pipeline with Python by @yuzhichang in https://github.com/infiniflow/ragflow/pull/16676
* fix(graphrag): filter negative-judgment and misattributed relationship edges by @afrozenpeach in https://github.com/infiniflow/ragflow/pull/16541
* fix: handle missing ES/OpenSearch index in check_embedding (HTTP 500 on empty dataset) by @OSHA-B in https://github.com/infiniflow/ragflow/pull/16650
* Collapse small RAPTOR layers in one step instead of one node per layer by @afrozenpeach in https://github.com/infiniflow/ragflow/pull/16633
* fix(mcp): handle dict response in list_chats when /chats API returns paginated envelope by @BAIGUANGMEI in https://github.com/infiniflow/ragflow/pull/16639
* Make RAPTOR GMM robust on small reduced clusters by @afrozenpeach in https://github.com/infiniflow/ragflow/pull/16632
* [Bug]: Workflow agent completions default stream=True when stream is omitted by @glorysr1209-png in https://github.com/infiniflow/ragflow/pull/15484
* fix: upgrade crawl4ai to 0.9.0 (GHSA-r253-r9jw-qg44) by @orbisai0security in https://github.com/infiniflow/ragflow/pull/16426
* Feat: add event sourcing and replay to harness by @yingfeng in https://github.com/infiniflow/ragflow/pull/16326
* feat: add native Dutch language support for BM25 tokenization by @rwb-truelime in https://github.com/infiniflow/ragflow/pull/14140
* Fix: ValueError: too many values to unpack in list_tenant_added_models for model IDs containing '@' (#16467) by @skbs-eng in https://github.com/infiniflow/ragflow/pull/16468
* fix: encapsulate terminal color output and add cross-platform color detection by @Ricardo-shuo-liu in https://github.com/infiniflow/ragflow/pull/16672
* fix(go-agent-web): correct BGPT canvas form watcher usage by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16682
* refactor: use slices.Contains to simplify code by @weifanglab in https://github.com/infiniflow/ragflow/pull/16680
* fix(go-agent): add BGPT component and input form by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16684
* fix(go): seed built-in agent templates for Go backend by @euvre in https://github.com/infiniflow/ragflow/pull/16666
* feat(agent): support JSON object input on begin node by @huang-aoqin in https://github.com/infiniflow/ragflow/pull/16685
* Fix Agent Chat not working by @wangq8 in https://github.com/infiniflow/ragflow/pull/16688
* fix: strip reasoning model thinking tags from document exports by @wangq8 in https://github.com/infiniflow/ragflow/pull/16687
* fix: remove duplicate error toast on memory update failure by @dcc123456 in https://github.com/infiniflow/ragflow/pull/16690
* Fix: Prevent text overflow in confirm delete dialog by @dcc123456 in https://github.com/infiniflow/ragflow/pull/16689
* Go: fix development guide by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16678
* fix: Restrict the agent to using memory compatible with the embedding model. by @dcc123456 in https://github.com/infiniflow/ragflow/pull/16699
* Fix: Referenced files not displaying. by @dcc123456 in https://github.com/infiniflow/ragflow/pull/16696
* fix(agent): save draft version on agent update by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16691
* fix(go-pipline): list agents incorrectly filtering out ingestion pipelines by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16698
* Fix: ValueError: Operation on closed image by @wangq8 in https://github.com/infiniflow/ragflow/pull/16697
* Fix cannot run raptor by @wangq8 in https://github.com/infiniflow/ragflow/pull/16694
* fix: update similarity threshold fallback to use nullish coalescing by @dcc123456 in https://github.com/infiniflow/ragflow/pull/16700
* Go: refactor UUID functions by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16695
* Fix docker pulls badge  by @yingfeng in https://github.com/infiniflow/ragflow/pull/16702
* Fix broken cache for release badge by @yingfeng in https://github.com/infiniflow/ragflow/pull/16705
* Fix broken camo cache for french by @yingfeng in https://github.com/infiniflow/ragflow/pull/16706
* Fix PageIndex is not working by @wangq8 in https://github.com/infiniflow/ragflow/pull/16704
* Fix broken logo for gitee mirrors by @yingfeng in https://github.com/infiniflow/ragflow/pull/16709
* fix(task_executor): fix Langfuse flush/shutdown deadlock that freezes document parsing by @ondery in https://github.com/infiniflow/ragflow/pull/16502
* fix: prevent memory name from auto-appending (1) on description update by @euvre in https://github.com/infiniflow/ragflow/pull/16714
* Docs: Update version references to v0.26.4 in READMEs and docs by @asiroliu in https://github.com/infiniflow/ragflow/pull/16716
* Go: add migrate database flag by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16719
* Docs: Added v0.26.4 release notes. by @writinwaters in https://github.com/infiniflow/ragflow/pull/16720
* Go: fix ragflow-cli building by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16721
* Go: fix release by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16722
* Go: remove cgo when build cli by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16723
* Go: fix cgo build by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16724

## New Contributors
* @skbs-eng made their first contribution in https://github.com/infiniflow/ragflow/pull/16469
* @afrozenpeach made their first contribution in https://github.com/infiniflow/ragflow/pull/16627
* @AI-Mart made their first contribution in https://github.com/infiniflow/ragflow/pull/16640
* @carlobeltrame made their first contribution in https://github.com/infiniflow/ragflow/pull/16322
* @Sohaib9920 made their first contribution in https://github.com/infiniflow/ragflow/pull/16645
* @BAIGUANGMEI made their first contribution in https://github.com/infiniflow/ragflow/pull/16639
* @rwb-truelime made their first contribution in https://github.com/infiniflow/ragflow/pull/14140
* @Ricardo-shuo-liu made their first contribution in https://github.com/infiniflow/ragflow/pull/16672
* @weifanglab made their first contribution in https://github.com/infiniflow/ragflow/pull/16680

**Full Changelog**: https://github.com/infiniflow/ragflow/compare/v0.26.3...v0.26.4

---

> **Source** [infiniflow/ragflow](https://github.com/infiniflow/ragflow) · `v0.26.4` · 2026-07-07 · [upstream release](https://github.com/infiniflow/ragflow/releases/tag/v0.26.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
