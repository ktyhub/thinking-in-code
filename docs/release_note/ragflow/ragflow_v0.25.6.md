---
title: "ragflow v0.25.6"
project: "ragflow"
repo: "infiniflow/ragflow"
tag: "v0.25.6"
version: "v0.25.6"
published: "2026-05-27"
type: "patch"
lang: "en"
summary: "Released on May 26, 2026."
---

# ragflow v0.25.6

## Summary

Released on May 26, 2026.

### New features

- Agent: Adds a **Browser** component that enables AI to autonomously navigate and interact with web pages. [#14888](https://github.com/infiniflow/ragflow/pull/14888)

### Improvements

- RAG: RAPTOR construction now introduces AHC mode (Ψ-RAG), which expands semantics from the document level to the dataset level. Not only is index construction performance significantly higher than the previous RAPTOR, but it also outperforms the old RAPTOR on Recall@5 and average F1. Users can switch between AHC and GMM modes. This feature was introduced in v0.25.3, and this release fixes several bugs. [#14674](https://github.com/infiniflow/ragflow/issues/14674)[#14679](https://github.com/infiniflow/ragflow/pull/14679)
- Agent: Introduces lightweight `@tool` decorator to streamline Python function registration process for chat models. [#15047](https://github.com/infiniflow/ragflow/pull/15047)
- Agent: Enables agent messages to display base64-encoded images. [#15212](https://github.com/infiniflow/ragflow/pull/15212)
- Agent: Exposes **Doc Generator** component's file metadata as discrete variables. [#15080](https://github.com/infiniflow/ragflow/pull/15080)
- Agent: Allows developers to pass `chat_template_kwargs` to agent chat completion endpoint. [#14182](https://github.com/infiniflow/ragflow/issues/14182)[#14542](https://github.com/infiniflow/ragflow/pull/14542)

### Bug fixes

- Fixes `/chat/completions` to allow sending only latest message in API payload and removes requirement to transmit full conversation history. [#15197](https://github.com/infiniflow/ragflow/pull/15197) See also [Converse with chat assistant](./references/http_api_reference.md#converse-with-chat-assistant).
- Weight assigned to vector similarity was not applied during the retrieval phase. [#15108](https://github.com/infiniflow/ragflow/pull/15108)
- Fixes parser configs not saving on dataset configuration page.
- Logs wer not fully displayed on data source details page.
- Fixes document status filtering failure.
- Fixes crash guard for empty LLM choices responses.
- RAG: RAPTOR construction process halted when using the [Infinity](https://github.com/infiniflow/infinity) document engine. [#14998](https://github.com/infiniflow/ragflow/pull/14998)
- Fixes streaming response parsing for Mistral/Upstage reasoning models.
- Fixes HTML tags in ingestion pipeline parser output.
- Fixes table parser metadata.
- Fixes asyncio event loop nesting and fire-and-forget task issues.
- Fixes asyncio.Semaphore bound to different event loop error.
- Agent: Fixes **Agent** component prompt variable disappearing and search vector_similarity_weight issues.

## What's Changed
* Update chunk/metadata cli by @qinling0210 in https://github.com/infiniflow/ragflow/pull/15055
* Fix: The logs on the data source details page are not fully displayed. by @dcc123456 in https://github.com/infiniflow/ragflow/pull/15056
* Go: implement Embed (embeddings) in TogetherAI driver by @jack-stormentswe in https://github.com/infiniflow/ragflow/pull/15017
* Go: implement provider: n1n.ai by @sxxtony in https://github.com/infiniflow/ragflow/pull/15010
* Go: implement Rerank in Xinference driver by @RenzoMXD in https://github.com/infiniflow/ragflow/pull/15032
* Go: implement Rerank in Novita driver by @RenzoMXD in https://github.com/infiniflow/ragflow/pull/15014
* Go: implement Embed in Xinference driver by @RenzoMXD in https://github.com/infiniflow/ragflow/pull/14932
* Go: implement provider: GPUStack (chat) by @RenzoMXD in https://github.com/infiniflow/ragflow/pull/15024
* feat(go-models): add Azure OpenAI model driver by @web-dev0521 in https://github.com/infiniflow/ragflow/pull/15022
* fix: prevent session user_id spoofing via request body by @enjoyandlove in https://github.com/infiniflow/ragflow/pull/15077
* fix(api): check kb ownership in /dify/retrieval by @dripsmvcp in https://github.com/infiniflow/ragflow/pull/15028
* Go: implement ASR and TTS for Xinference by @Haruko386 in https://github.com/infiniflow/ragflow/pull/15096
* Docs: update python version to 3.13 by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/15103
* Fix: <asyncio.locks.Semaphore object at 0xabcd [locked]> is bound to a different event loop by @wangq8 in https://github.com/infiniflow/ragflow/pull/15100
* Go: implement rerank, asr, tts for TogetherAI by @Haruko386 in https://github.com/infiniflow/ragflow/pull/15107
* Docs: Updated v0.25.5 release notes by @writinwaters in https://github.com/infiniflow/ragflow/pull/15109
* Docs: Fixed a deployment issue by @writinwaters in https://github.com/infiniflow/ragflow/pull/15114
* Revert "fix(api): infer /documents/{id}/download Content-Type from filename when ext is omitted (#15052)" by @buua436 in https://github.com/infiniflow/ragflow/pull/15138
* Fix: guard missing task language by @buua436 in https://github.com/infiniflow/ragflow/pull/15136
* feat(go-models): add PPIO provider driver by @JSONbored in https://github.com/infiniflow/ragflow/pull/15099
* Go: implement ASR in ZhipuAI driver by @jakearmstrong59 in https://github.com/infiniflow/ragflow/pull/15134
* fix: block SSRF in misc_utils.download_img for OAuth avatars by @dale053 in https://github.com/infiniflow/ragflow/pull/14868
* feat: Add SDK and cURL examples for chunk management, chat assistant, and retrieval (#4310) by @bhongong in https://github.com/infiniflow/ragflow/pull/14208
* Refactor: enahnce retry and timeout by @wangq8 in https://github.com/infiniflow/ragflow/pull/14983
* Refactor: enahnce CI by @wangq8 in https://github.com/infiniflow/ragflow/pull/15147
* fix: prevent sensitive fields from leaking in user API responses by @dale053 in https://github.com/infiniflow/ragflow/pull/14792
* feat: pass chat_template_kwargs through agent chat completion by @jsdevninja in https://github.com/infiniflow/ragflow/pull/14542
* Go: implement ASR in OpenRouter driver by @jakearmstrong59 in https://github.com/infiniflow/ragflow/pull/15067
* feat(evaluation): track token usage in evaluation results by @kiannidev in https://github.com/infiniflow/ragflow/pull/13487
* Go: implement provider: TokenPony by @dripsmvcp in https://github.com/infiniflow/ragflow/pull/15091
* fix: move agent attachment download api by @buua436 in https://github.com/infiniflow/ragflow/pull/15146
* Fix: add model_type into llm_setting by @Lynn-Inf in https://github.com/infiniflow/ragflow/pull/15141
* feat(go-models): add Groq provider driver by @JSONbored in https://github.com/infiniflow/ragflow/pull/15097
* Fix search vector_similarity_weight by @wangq8 in https://github.com/infiniflow/ragflow/pull/15108
* Refactor: Move API files by @wangq8 in https://github.com/infiniflow/ragflow/pull/15151
* Docs: Added a guide on integrating Discord. by @writinwaters in https://github.com/infiniflow/ragflow/pull/15156
* Go: implement embed, rerank, tts for AstraFlow by @Haruko386 in https://github.com/infiniflow/ragflow/pull/15135
* Go: implement reasoning_chat, TTS, ASR for Groq by @Ltohka in https://github.com/infiniflow/ragflow/pull/15153
* Fix: /openai/<chat_id>/chat/completions not aware of session_id by @wangq8 in https://github.com/infiniflow/ragflow/pull/15155
* fix(go): support OpenAI audio endpoints by @bitloi in https://github.com/infiniflow/ragflow/pull/15104
* feat(i18n): complete French translation — add ~1400 missing keys by @vincentlambert in https://github.com/infiniflow/ragflow/pull/15192
* Fix: /chat/completions not aware of conversation_id by @wangq8 in https://github.com/infiniflow/ragflow/pull/15162
* Go: implement provider: Tencent Hunyuan by @dripsmvcp in https://github.com/infiniflow/ragflow/pull/15092
* Go: implement provider: PaddleOCR_Local by @Haruko386 in https://github.com/infiniflow/ragflow/pull/15158
* Go: add ingestion server by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/15094
* Revert "Fix: /openai/<chat_id>/chat/completions not aware of session_id" by @wangq8 in https://github.com/infiniflow/ragflow/pull/15205
* Fix /chat/completions to allow send only the latest message by @wangq8 in https://github.com/infiniflow/ragflow/pull/15197
* feat[go]: implement provider: TokenHub by @Dimon0000000 in https://github.com/infiniflow/ragflow/pull/15159
* Go: implement embed for Tencent Hunyuan by @Haruko386 in https://github.com/infiniflow/ragflow/pull/15207
* Feat: Expose Doc Generator file metadata as discrete outputs by @nickmopen in https://github.com/infiniflow/ragflow/pull/15080
* Fix: table parser metadata by @ahmadintisar in https://github.com/infiniflow/ragflow/pull/15127
* fix: The output of the parser in the ingestion pipeline contains HTML tags by @jonathanchang31 in https://github.com/infiniflow/ragflow/pull/14920
* Fix: Correct the API path by @wangq8 in https://github.com/infiniflow/ragflow/pull/15204
* Fix: Replace the red highlight at the top of the PDF document with yellow. by @cike8899 in https://github.com/infiniflow/ragflow/pull/15203
* fix(Go): rewrite chat, listmodels, embed for Ollama by @Haruko386 in https://github.com/infiniflow/ragflow/pull/15213
* Fix #15170 cannot filter document status by @wangq8 in https://github.com/infiniflow/ragflow/pull/15216
* Feat: Enable agent messages to display base64 images by @cike8899 in https://github.com/infiniflow/ragflow/pull/15212
* Feat: add new tests and tescases for restful api suite by @6ba3i in https://github.com/infiniflow/ragflow/pull/15208
* Implement Elasticsearch functions in GO by @qinling0210 in https://github.com/infiniflow/ragflow/pull/15160
* Docs: Minimum required Python version increased to 3.13. by @writinwaters in https://github.com/infiniflow/ragflow/pull/15219
* Fix: The prompt variable for the agent operator disappears after input. by @cike8899 in https://github.com/infiniflow/ragflow/pull/15218
* fix: resolve asyncio correctness issues (fire-and-forget tasks, event loop nesting) by @wdeveloper16 in https://github.com/infiniflow/ragflow/pull/14761
* Fix [Bug]: Save parser configs in dataset configuration page is not working #15175 by @mustangxu in https://github.com/infiniflow/ragflow/pull/15177
* Feat: add new tests and tescases for restful api suite by @6ba3i in https://github.com/infiniflow/ragflow/pull/15223
* Go: implement OCR in ZhipuAI driver by @jakearmstrong59 in https://github.com/infiniflow/ragflow/pull/15143
* Go: validate Baidu OCR inputs by @RenzoMXD in https://github.com/infiniflow/ragflow/pull/15168
* Go: implement provider: FuturMix by @sxxtony in https://github.com/infiniflow/ragflow/pull/15013
* Go: implement Rerank in DeepInfra driver by @glorydavid03023 in https://github.com/infiniflow/ragflow/pull/15185
* fix(api): allow canvas_type in agent create and update APIs by @huang-aoqin in https://github.com/infiniflow/ragflow/pull/15201
* Fix: empty file with better message by @wangq8 in https://github.com/infiniflow/ragflow/pull/15232
* Fix: Fixed metadata issue by @dcc123456 in https://github.com/infiniflow/ragflow/pull/15226
* Feat: add new tests and tescases for restful api suite by @6ba3i in https://github.com/infiniflow/ragflow/pull/15230
* feat(go-models): add AWS Bedrock provider driver by @jakearmstrong59 in https://github.com/infiniflow/ragflow/pull/15166
* fix(tokenhub): wire Go driver and harden requests by @JSONbored in https://github.com/infiniflow/ragflow/pull/15224
* Add HuaweiCloud model provider by @Hz-186 in https://github.com/infiniflow/ragflow/pull/15237
* Go: implement provider: ModelScope by @dripsmvcp in https://github.com/infiniflow/ragflow/pull/15041
* Go: implement provider: OrcaRouter by @Haruko386 in https://github.com/infiniflow/ragflow/pull/15235
* Docs: Update version references to v0.25.6 in READMEs and docs by @asiroliu in https://github.com/infiniflow/ragflow/pull/15248
* Docs: Initial draft for v0.25.6 release notes. by @writinwaters in https://github.com/infiniflow/ragflow/pull/15250
* fix(go-models): add xAI model listing suffix by @oktofeesh1 in https://github.com/infiniflow/ragflow/pull/15236
* feat(go-models): list LongCat models by @oktofeesh1 in https://github.com/infiniflow/ragflow/pull/15241
* Fix: show tag list for chunk by @wangq8 in https://github.com/infiniflow/ragflow/pull/15251
* fix(go-models): route hosted OCR providers through drivers by @oktofeesh1 in https://github.com/infiniflow/ragflow/pull/15233
* Docs: v0.25.6 release notes draft by @writinwaters in https://github.com/infiniflow/ragflow/pull/15255

## New Contributors
* @enjoyandlove made their first contribution in https://github.com/infiniflow/ragflow/pull/15077
* @JSONbored made their first contribution in https://github.com/infiniflow/ragflow/pull/15099
* @bhongong made their first contribution in https://github.com/infiniflow/ragflow/pull/14208
* @jsdevninja made their first contribution in https://github.com/infiniflow/ragflow/pull/14542
* @Ltohka made their first contribution in https://github.com/infiniflow/ragflow/pull/15153
* @Dimon0000000 made their first contribution in https://github.com/infiniflow/ragflow/pull/15159
* @nickmopen made their first contribution in https://github.com/infiniflow/ragflow/pull/15080
* @jonathanchang31 made their first contribution in https://github.com/infiniflow/ragflow/pull/14920
* @glorydavid03023 made their first contribution in https://github.com/infiniflow/ragflow/pull/15185
* @Hz-186 made their first contribution in https://github.com/infiniflow/ragflow/pull/15237
* @oktofeesh1 made their first contribution in https://github.com/infiniflow/ragflow/pull/15236

**Full Changelog**: https://github.com/infiniflow/ragflow/compare/v0.25.5...v0.25.6

---

> **Source** [infiniflow/ragflow](https://github.com/infiniflow/ragflow) · `v0.25.6` · 2026-05-27 · [upstream release](https://github.com/infiniflow/ragflow/releases/tag/v0.25.6)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
