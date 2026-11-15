---
title: "ragflow v0.26.1"
project: "ragflow"
repo: "infiniflow/ragflow"
tag: "v0.26.1"
version: "v0.26.1"
published: "2026-06-17"
type: "patch"
lang: "en"
summary: "Model provider: Allows users to modify the model type of existing model configurations. #16029"
---

# ragflow v0.26.1

## Summary

### New features

- **Model provider**: Allows users to modify the model type of existing model configurations. [#16029](https://github.com/infiniflow/ragflow/pull/16029)
- **Chat channel**: Enables users to deploy RAGFlow assistants as chatbots within external messaging platforms like Discord and Feishu. [#15850](https://github.com/infiniflow/ragflow/pull/15850)
- **Observability**: Groups multi-turn chat traces by session within Langfuse to facilitate conversation debugging and replay. [#15679](https://github.com/infiniflow/ragflow/pull/15679)

### i18n

- Adds ~70 missing translation keys for the French UI. [#15983](https://github.com/infiniflow/ragflow/pull/15983)

### Bug fixes

- **Model provider**: Fixes inaccurate token billing, corrects embedding truncation limits to prevent indexing failures, and refactors error handling to surface root error causes. [#15424](https://github.com/infiniflow/ragflow/pull/15424)
- **API**: Adds a legacy mode to the `/chat/completions` endpoint to restore the v0.23.0 style `<think>` output for backward compatibility. [#16014](https://github.com/infiniflow/ragflow/pull/16014) See also [Converse with chat assistant](./references/http_api_reference.md#converse-with-chat-assistant).

## What's Changed
* Go: add dimensions for list models and fix some embed-bug in providers by @Haruko386 in https://github.com/infiniflow/ragflow/pull/15940
* feat(models): add shared HTTP client, SSE parser, and stub helpers for Go model drivers by @JPette1783 in https://github.com/infiniflow/ragflow/pull/15821
* fix(user-settings): collapse sidebar to icon-only rail on mobile by @carlh7777 in https://github.com/infiniflow/ragflow/pull/15678
* fix(llm): correct error handling, token accounting, and truncation in embedding providers by @Dexterity104 in https://github.com/infiniflow/ragflow/pull/15424
* Improve docx preview by @yingfeng in https://github.com/infiniflow/ragflow/pull/15907
* fix: keep max pagerank for repeated n-hop edges by @he-yufeng in https://github.com/infiniflow/ragflow/pull/15696
* feat: Langfuse session grouping for multi-turn chat traces by @jonathanchang31 in https://github.com/infiniflow/ragflow/pull/15679
* fix(profile): enforce profile name validation and input constraints by @carlh7777 in https://github.com/infiniflow/ragflow/pull/15694
* Json: add some models by @Haruko386 in https://github.com/infiniflow/ragflow/pull/15947
* feat(go): Add Z.ai model entries to all_models.json Add missing Qwen commercial models and provider aliases by @Hz-186 in https://github.com/infiniflow/ragflow/pull/15929
* Go: use NATS as the message queue by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/15327
* fix(go): redact internal handler errors by @bitloi in https://github.com/infiniflow/ragflow/pull/15746
* Fix: chat/agent -- Default avatar is not displaying correctly. by @cike8899 in https://github.com/infiniflow/ragflow/pull/15948
* Go: parse ingestion DSL by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/15938
* Decouple skill space from Python API by @yingfeng in https://github.com/infiniflow/ragflow/pull/15971
* Feat: chat channels — connect assistants to external messaging bots by @KevinHuSh in https://github.com/infiniflow/ragflow/pull/15850
* fix(Go-models): preserve model name lookup when aliases exist by @Haruko386 in https://github.com/infiniflow/ragflow/pull/15969
* Json[model-provider] add nvidia, moonshot, minimax, claude, GPT models by @Haruko386 in https://github.com/infiniflow/ragflow/pull/15970
* Go: add office_oxide and parse docx file. by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/15976
* fix: SSE write timeout by @bitloi in https://github.com/infiniflow/ragflow/pull/15852
* feat(agent): Go port — canvas engine, 22 components, DSL v2, 13 endpoints by @yuzhichang in https://github.com/infiniflow/ragflow/pull/15952
* Go: add more file parser by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/15979
* i18n(fr): add ~70 missing French translation keys by @vincentlambert in https://github.com/infiniflow/ragflow/pull/15983
* Go: file parser config by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/15989
* Fix last login time by @wangq8 in https://github.com/infiniflow/ragflow/pull/16004
* Go: refactor model API to accept model id by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/15999
* fix: use /api/tags endpoint for Ollama model listing (#16000) by @zaviermeekz-cpu in https://github.com/infiniflow/ragflow/pull/16003
* Add git-like file commit API by @yingfeng in https://github.com/infiniflow/ragflow/pull/15978
* feat(go-models): Add google models to all_models.json by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16007
* feat: add custom value support for s3 region by @buua436 in https://github.com/infiniflow/ragflow/pull/15968
* refactor(go): replace GenerateUUID1 with GenerateToken for entity IDs by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16010
* Move REDIS to engine dir by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16006
* Go: add Markdown parser by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16016
* Json: add many models to all_models.json by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16013
* fix: output 2 lines when list-supported models by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16015
* fix(api): return 4xx not 500 when attachment blob is missing by @dripsmvcp in https://github.com/infiniflow/ragflow/pull/15509
* Go: parse HTML file by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16018
* Go: add API mode check in file system command by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16022
* Fix: Adjust chat line height. by @cike8899 in https://github.com/infiniflow/ragflow/pull/16021
* Fix one data source can be synced to multiple dataset by @wangq8 in https://github.com/infiniflow/ragflow/pull/16023
* Feat: Move less important chat settings into a collapsible panel. by @cike8899 in https://github.com/infiniflow/ragflow/pull/16024
* Feat: model provider by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/16028
* Feat: Add edit model type function by @dcc123456 in https://github.com/infiniflow/ragflow/pull/16029
* Feat: add harness-go framework —— graph engine by @yingfeng in https://github.com/infiniflow/ragflow/pull/16039
* feat[Go] add max_dimension and dimensions for ModelRequest by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16019
* fix: add legacy chat/completions mode by @buua436 in https://github.com/infiniflow/ragflow/pull/16014
* fix: sandbox config api method mismatch by @buua436 in https://github.com/infiniflow/ragflow/pull/16031
* Feat: add harness-go framework —— agent core by @yingfeng in https://github.com/infiniflow/ragflow/pull/16045
* Dev: consoldiate dev script by @wangq8 in https://github.com/infiniflow/ragflow/pull/16066
* Refactor: Change table chat_channel status data type. by @KevinHuSh in https://github.com/infiniflow/ragflow/pull/16061
* feat(go-api): support setting tenant default models by model_id by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16030
* feat(go-cli): support add models with embedding type by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16020
* feat(go-models): add more providers by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16017
* fix: improve remember me checkbox UX in login form by @BasilFoubert in https://github.com/infiniflow/ragflow/pull/16051
* Fix: filter unsupported model_type by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/16062
* fix: add toc field to extractor output by @buua436 in https://github.com/infiniflow/ragflow/pull/16059
* Go: fix register user by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16058
* Document: github release for RAGFlow Go CLI by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16036
* fix(go): all_models.json by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16075
* Fix: v0.26.1 model provider by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/16073
* fix: resolve the error caused by office_oxide by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16078
* Fix auto migration issue by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16081
* fix: update localization keys for image2text and add ocr option by @dcc123456 in https://github.com/infiniflow/ragflow/pull/16076
* fix: update channelTemplates to filter for Discord and Lark only by @dcc123456 in https://github.com/infiniflow/ragflow/pull/16065
* fix: remove unnecessary div in profile page layout by @dcc123456 in https://github.com/infiniflow/ragflow/pull/16091
* fix workflow ss not found by @myf-bee in https://github.com/infiniflow/ragflow/pull/16085
* fix: remove unnecessary 'asChild' prop from FilterButton component by @dcc123456 in https://github.com/infiniflow/ragflow/pull/16094
* Docs: Added v0.26.1 release notes by @writinwaters in https://github.com/infiniflow/ragflow/pull/16087
* Fix: SSRF in markdown parser remote image fetch by @galuis116 in https://github.com/infiniflow/ragflow/pull/15438
* fix: rename dialog_id to chat_id in chat_channel (backend + frontend) by @KevinHuSh in https://github.com/infiniflow/ragflow/pull/16096
* Refactor: rename /chat_channels to /chat-channels by @wangq8 in https://github.com/infiniflow/ragflow/pull/16099
* build(deps): bump starlette from 0.51.0 to 1.3.1 by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/16089
* Go refactor: merge similar functions by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16098
* refactor(paddleocr): migrate from sync API to async Job API by @Rander7 in https://github.com/infiniflow/ragflow/pull/15967
* feat(paddleocr): add image parsing support with async Job API by @Rander7 in https://github.com/infiniflow/ragflow/pull/16086
* fix: paginate non-DeepDOC PDF parsing tasks to prevent OOM by @euvre in https://github.com/infiniflow/ragflow/pull/15951
* build(deps): bump aiohttp from 3.13.3 to 3.14.1 by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/16090
* Docs: update chat completions docs by @buua436 in https://github.com/infiniflow/ragflow/pull/16100
* Revert "fix: paginate non-DeepDOC PDF parsing tasks to prevent OOM" by @wangq8 in https://github.com/infiniflow/ragflow/pull/16104
* Go: add more start server parameters by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/16093
* fix: paginate non-DeepDOC PDF parsing tasks to prevent OOM by @euvre in https://github.com/infiniflow/ragflow/pull/16106
* Fix: Importing the MCP dialog causes duplicate submissions. by @cike8899 in https://github.com/infiniflow/ragflow/pull/16037
* feat(go/dao): migrate chat channel database entity and DAO to Go by @Hz-186 in https://github.com/infiniflow/ragflow/pull/16055
* Fix RAGFlow cannot start by @wangq8 in https://github.com/infiniflow/ragflow/pull/16116
* Docs: Updated Converse with chat assistant by @writinwaters in https://github.com/infiniflow/ragflow/pull/16117
* feat(go-models): harden ListModels for FishAudio (#15853) by @hunnyboy1217 in https://github.com/infiniflow/ragflow/pull/15957
* fix: return full record in get_ingestion_log by @euvre in https://github.com/infiniflow/ragflow/pull/16120
* Fix MinerU table option sanitization by @wangq8 in https://github.com/infiniflow/ragflow/pull/16118
* feat(agent): ship the Go agent canvas port — eino interrupt/resume + Redis check-pointing by @yuzhichang in https://github.com/infiniflow/ragflow/pull/16035
* fix: tighten embedding truncation threshold by @buua436 in https://github.com/infiniflow/ragflow/pull/16123
* fix: show telegram chat channel by @buua436 in https://github.com/infiniflow/ragflow/pull/16125
* Set default Paddle OCR URL by @wangq8 in https://github.com/infiniflow/ragflow/pull/16128
* Enhancement: optimize ci by @6ba3i in https://github.com/infiniflow/ragflow/pull/16130
* fix: chat channel runtime by @buua436 in https://github.com/infiniflow/ragflow/pull/16129
* Update doc rerank_id from int to string by @wangq8 in https://github.com/infiniflow/ragflow/pull/16142
* Dev: add go starter by @wangq8 in https://github.com/infiniflow/ragflow/pull/16138
* Fix: The .docx file is not displaying fully; the hierarchy of the pipeline created from the template is missing. by @cike8899 in https://github.com/infiniflow/ragflow/pull/16134
* fix: misc frontend fixes for agent log, login, search settings        by @dcc123456 in https://github.com/infiniflow/ragflow/pull/16137
* Fix: The pipeline created from the template fails immediately upon execution. by @cike8899 in https://github.com/infiniflow/ragflow/pull/16149
* refactor(go-models): harden Ollama ListModels and route through ParseListModel (#15853) by @hunnyboy1217 in https://github.com/infiniflow/ragflow/pull/15955
* feat: add qqbot chat channel by @buua436 in https://github.com/infiniflow/ragflow/pull/16140
* Docs: Updated v0.26.1 release date. by @writinwaters in https://github.com/infiniflow/ragflow/pull/16154
* Fix: add mimo by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/16136
* Fix: A pipeline created from a template fails immediately upon execution with a "hierarchy does not exist" error. by @cike8899 in https://github.com/infiniflow/ragflow/pull/16151
* fix(go): correct OpenRouter streaming URL routing and reasoning parameter by @bittoby in https://github.com/infiniflow/ragflow/pull/16111
* Enhancement: update ci for parallel test execution by @6ba3i in https://github.com/infiniflow/ragflow/pull/16133
* Docs: Update version references to v0.26.1 in READMEs and docs by @asiroliu in https://github.com/infiniflow/ragflow/pull/16158
* build(deps): bump python-multipart from 0.0.21 to 0.0.31 by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/16088
* fix back release.yml to old version by @Haruko386 in https://github.com/infiniflow/ragflow/pull/16160

## New Contributors
* @carlh7777 made their first contribution in https://github.com/infiniflow/ragflow/pull/15678
* @BasilFoubert made their first contribution in https://github.com/infiniflow/ragflow/pull/16051
* @myf-bee made their first contribution in https://github.com/infiniflow/ragflow/pull/16085
* @Rander7 made their first contribution in https://github.com/infiniflow/ragflow/pull/15967

**Full Changelog**: https://github.com/infiniflow/ragflow/compare/v0.26.0...v0.26.1

---

> **Source** [infiniflow/ragflow](https://github.com/infiniflow/ragflow) · `v0.26.1` · 2026-06-17 · [upstream release](https://github.com/infiniflow/ragflow/releases/tag/v0.26.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
