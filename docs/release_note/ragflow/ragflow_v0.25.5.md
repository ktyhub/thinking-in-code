---
title: "ragflow v0.25.5"
project: "ragflow"
repo: "infiniflow/ragflow"
tag: "v0.25.5"
version: "v0.25.5"
published: "2026-05-20"
type: "patch"
lang: "en"
summary: "Released on May 20, 2026."
---

# ragflow v0.25.5

## Summary

Released on May 20, 2026.

### New features

- Adds local & SSH providers in admin panel. [#15039](https://github.com/infiniflow/ragflow/pull/15039)

### Improvements

- Accelerated dataset search path, reducing latency by 50–100% by removing expensive vector fetch and rerank similarity computation steps. [#14970](https://github.com/infiniflow/ragflow/pull/14970)
- Pushes metadata filters down to Infinity, significantly speeding up metadata filtering. [#14974](https://github.com/infiniflow/ragflow/pull/14974)
- added Redis caching for TTS. [#14851](https://github.com/infiniflow/ragflow/pull/14851)
- atomic document counter updates [#14867](https://github.com/infiniflow/ragflow/pull/14974)
- Improved server startup speed and memory usage [#14973](https://github.com/infiniflow/ragflow/pull/14973)
- Agent: structured output aggregation [#13384](https://github.com/infiniflow/ragflow/issues/13384) [#14848](https://github.com/infiniflow/ragflow/pull/14848)
- Agent: metadata filter reuse. [#14849](https://github.com/infiniflow/ragflow/pull/14849)
- Optimizes connector dashboard. [#14979](https://github.com/infiniflow/ragflow/pull/14979)
## What's Changed
* fix: optimize reranking module robustness and bug fixes by @07heco in https://github.com/infiniflow/ragflow/pull/14264
* fix: replace broken assert with raise ValueError in variable_assigner and loop by @Ricardo-M-L in https://github.com/infiniflow/ragflow/pull/13906
* Fix: send input and output token usage to Langfuse by @Br1an67 in https://github.com/infiniflow/ragflow/pull/13294
* Go: implement TTS for MiniMax provider and CLI testing for TTS by @Haruko386 in https://github.com/infiniflow/ragflow/pull/14911
* fix: correct nested path traversal in set_variable_param_value by @Ricardo-M-L in https://github.com/infiniflow/ragflow/pull/13986
* Fix WebDriver resource leak in HTML-to-PDF conversion by @Ricardo-M-L in https://github.com/infiniflow/ragflow/pull/14310
* Doc: code component output section by @buua436 in https://github.com/infiniflow/ragflow/pull/14915
* GO: align time units with Python and centralize timestamp injection in BaseModel by @buua436 in https://github.com/infiniflow/ragflow/pull/14875
* Fix: missing authentication on agent file upload and download endpoints by @dale053 in https://github.com/infiniflow/ragflow/pull/14854
* Go: fix LastLoginTime update by @buua436 in https://github.com/infiniflow/ragflow/pull/14917
* fix: replace mutable default arguments with None in LLM chat models by @gambletan in https://github.com/infiniflow/ragflow/pull/13513
* Go: update user settings fields by @buua436 in https://github.com/infiniflow/ragflow/pull/14918
* fix: atomic chunk/token counter updates for documents and knowledge b… by @dale053 in https://github.com/infiniflow/ragflow/pull/14867
* fix(agent): handle duplicate MCP tool names by @eviaaaaa in https://github.com/infiniflow/ragflow/pull/14217
* fix: close db connections reliably in test_db_connection by @wdeveloper16 in https://github.com/infiniflow/ragflow/pull/14777
* Go: implement TTS for fishaudio, openrouter and asr for fishaudio by @Haruko386 in https://github.com/infiniflow/ragflow/pull/14926
* Feat: This enables SelectWithSearch to search by label. by @cike8899 in https://github.com/infiniflow/ragflow/pull/14925
* Doc: Finalized v0.25.4 release notes by @writinwaters in https://github.com/infiniflow/ragflow/pull/14929
* fix: add document download endpoint and refactor existing download function by @buua436 in https://github.com/infiniflow/ragflow/pull/14927
* fix: preserve uploaded file attachments after subsequent assistant messages by @octo-patch in https://github.com/infiniflow/ragflow/pull/13993
* fix(llm): Tongyi-Qianwen embeddings use correct DashScope native API for intl URLs by @sham-sr in https://github.com/infiniflow/ragflow/pull/14784
* fix(agent): pass top_k and fix similarity weight slider behavior by @yingjianzh in https://github.com/infiniflow/ragflow/pull/14760
* security: always use RestrictedUnpickler in deserialize_b64 (CWE-502) by @sebastiondev in https://github.com/infiniflow/ragflow/pull/14803
* Go: add file parse command by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/14892
* fix(agentbot): aggregate structured output in non-streaming completions by @plind-junior in https://github.com/infiniflow/ragflow/pull/14848
* fix: enable GitHub connector to sync PRs and issues by default by @octo-patch in https://github.com/infiniflow/ragflow/pull/14062
* Go: implement Rerank in vLLM driver (#14878) by @hunnyboy1217 in https://github.com/infiniflow/ragflow/pull/14880
* docs: add FAQ entry for using Ollama with RAGFlow by @SnakeEye-sudo in https://github.com/infiniflow/ragflow/pull/14557
* Go: add cli command, list dataset documents by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/14948
* Go: implement TTS, ASR for Siliconflow and TTs for StepFun by @Haruko386 in https://github.com/infiniflow/ragflow/pull/14944
* fix: correct attribute name typo model_speciess to model_species by @Ricardo-M-L in https://github.com/infiniflow/ragflow/pull/13929
* feat: bump Python minimum from 3.12 to 3.13, drop strenum backport by @wdeveloper16 in https://github.com/infiniflow/ragflow/pull/14767
* Go: implement PaddleOCR provider and implement ASR for CoHere by @Haruko386 in https://github.com/infiniflow/ragflow/pull/14954
* Feat/web markdown UI updates by @xjq123456 in https://github.com/infiniflow/ragflow/pull/14214
* fix: correct literal_eval dispatch and bool isinstance ordering in agent components by @Ricardo-M-L in https://github.com/infiniflow/ragflow/pull/13988
* refactor: optimize BaseTitleChunker to improve RAG document chunk quality by @07heco in https://github.com/infiniflow/ragflow/pull/14247
* Bump to infinity v0.7.0 by @qinling0210 in https://github.com/infiniflow/ragflow/pull/14968
* Fix session deletion leaking chat-upload blobs by @6ba3i in https://github.com/infiniflow/ragflow/pull/14969
* Go: implement Embed (embeddings) in Novita driver by @pandadev66 in https://github.com/infiniflow/ragflow/pull/14895
* Go: add Jina chat completions support by @jakearmstrong59 in https://github.com/infiniflow/ragflow/pull/14935
* Add Anthropic Go model provider by @carlos4s in https://github.com/infiniflow/ragflow/pull/14940
* Fix: guard empty/whitespace embedding inputs in LLMBundle (#14428) by @Rene0422 in https://github.com/infiniflow/ragflow/pull/14924
* Refactor: Drop the vector fetch for ES by @KevinHuSh in https://github.com/infiniflow/ragflow/pull/14970
* Push metadata filters down to Infinity by @qinling0210 in https://github.com/infiniflow/ragflow/pull/14974
* Go: implement provider: CometAPI by @tmimmanuel in https://github.com/infiniflow/ragflow/pull/14930
* Fix: add SSRF guard for agent test_db_connection endpoint by @dale053 in https://github.com/infiniflow/ragflow/pull/14860
* Go: fix siliconflow embedding response by @buua436 in https://github.com/infiniflow/ragflow/pull/14975
* Refactor: speed up ragflow server, save startup memory by @wangq8 in https://github.com/infiniflow/ragflow/pull/14973
* fix(api): enforce tenant access for connector routes by @dev111-actor in https://github.com/infiniflow/ragflow/pull/14747
* Refactor: enhance graphrag - part 2 by @wangq8 in https://github.com/infiniflow/ragflow/pull/14972
* Go: add restful api route aliases by @buua436 in https://github.com/infiniflow/ragflow/pull/14977
* Go: implement provider: DeepInfra, XunFei by @Haruko386 in https://github.com/infiniflow/ragflow/pull/14978
* fix: metadata_condition returning all docs when filter matches nothing by @hak2979 in https://github.com/infiniflow/ragflow/pull/14967
* Bugfix: fix tag show by @wangq8 in https://github.com/infiniflow/ragflow/pull/14980
* Fix admin CLI system variable commands by @jakearmstrong59 in https://github.com/infiniflow/ragflow/pull/14956
* Go: fix forgetting policy validation and fix memory update diff checks by @buua436 in https://github.com/infiniflow/ragflow/pull/14976
* Go: align document list response by @buua436 in https://github.com/infiniflow/ragflow/pull/14982
* Go: add dataset graph api by @buua436 in https://github.com/infiniflow/ragflow/pull/14984
* Feat: full optimization on connector dashboard by @Magicbook1108 in https://github.com/infiniflow/ragflow/pull/14979
* Fix: validate memory tenant model IDs on update and enforce tenant scope in memory pipeline by @jony376 in https://github.com/infiniflow/ragflow/pull/14923
* Misc: fix some typos by @kingloon in https://github.com/infiniflow/ragflow/pull/14987
* Go: implement provider: MinerU by @Haruko386 in https://github.com/infiniflow/ragflow/pull/14990
* Add Replicate chat provider by @tmimmanuel in https://github.com/infiniflow/ragflow/pull/14958
* Fix: agent session log message by @buua436 in https://github.com/infiniflow/ragflow/pull/14991
* Fix: MinerU vlm-http-client backend output file detection by @lksr1201 in https://github.com/infiniflow/ragflow/pull/14240
* fix: the opencc c library uses fgets() to read dicti... in text.c by @orbisai0security in https://github.com/infiniflow/ragflow/pull/13970
* feat(tts): cache synthesized speech in Redis to avoid redundant calls by @plind-junior in https://github.com/infiniflow/ragflow/pull/14851
* fix(retrieval): keep manual metadata filter reusable inside Iteration by @plind-junior in https://github.com/infiniflow/ragflow/pull/14849
* Go: implement provider: Xinference by @tmimmanuel in https://github.com/infiniflow/ragflow/pull/14938
* Add TogetherAI chat provider by @tmimmanuel in https://github.com/infiniflow/ragflow/pull/14957
* Fix: restore saved api_key fallback in add_llm (#14921) by @Rene0422 in https://github.com/infiniflow/ragflow/pull/14941
* Feat: add new tests and tescases for restful api suite by @6ba3i in https://github.com/infiniflow/ragflow/pull/14993
* Feat: VLM image descriptions in MinerU parser (#14869) by @Rene0422 in https://github.com/infiniflow/ragflow/pull/14946
* feat(sdk): make Begin inputs discoverable on Session.ask by @plind-junior in https://github.com/infiniflow/ragflow/pull/14842
* Feat: add new tests and tescases for restful api suite by @6ba3i in https://github.com/infiniflow/ragflow/pull/14996
* Refact functions in engine in GO by @qinling0210 in https://github.com/infiniflow/ragflow/pull/14981
* Go: implement provider: 302.AI and JieKou-AI by @Haruko386 in https://github.com/infiniflow/ragflow/pull/15034
* Feat: add new tests and tescases for restful api suite by @6ba3i in https://github.com/infiniflow/ragflow/pull/15038
* fix(go): guard custom base URL driver creation by @bitloi in https://github.com/infiniflow/ragflow/pull/15030
* Fix: The folder tree menu for moving folders cannot be scrolled. by @cike8899 in https://github.com/infiniflow/ragflow/pull/15037
* fix: Langfuse chat observation by @bitloi in https://github.com/infiniflow/ragflow/pull/15026
* Feat: add local & ssh provider in admin panel by @Magicbook1108 in https://github.com/infiniflow/ragflow/pull/15039
* Fix discord async issue by @wangq8 in https://github.com/infiniflow/ragflow/pull/15054
* Go: implement provider: MinerU_Local by @Haruko386 in https://github.com/infiniflow/ragflow/pull/15051
* Docs: Initial draft of v0.25.5 release notes. by @writinwaters in https://github.com/infiniflow/ragflow/pull/15058
* Docs: Update version references to v0.25.5 in READMEs and docs  by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/15059

## New Contributors
* @Br1an67 made their first contribution in https://github.com/infiniflow/ragflow/pull/13294
* @sham-sr made their first contribution in https://github.com/infiniflow/ragflow/pull/14784
* @yingjianzh made their first contribution in https://github.com/infiniflow/ragflow/pull/14760
* @SnakeEye-sudo made their first contribution in https://github.com/infiniflow/ragflow/pull/14557
* @xjq123456 made their first contribution in https://github.com/infiniflow/ragflow/pull/14214
* @jakearmstrong59 made their first contribution in https://github.com/infiniflow/ragflow/pull/14935
* @carlos4s made their first contribution in https://github.com/infiniflow/ragflow/pull/14940
* @Rene0422 made their first contribution in https://github.com/infiniflow/ragflow/pull/14924
* @dev111-actor made their first contribution in https://github.com/infiniflow/ragflow/pull/14747
* @hak2979 made their first contribution in https://github.com/infiniflow/ragflow/pull/14967
* @kingloon made their first contribution in https://github.com/infiniflow/ragflow/pull/14987
* @lksr1201 made their first contribution in https://github.com/infiniflow/ragflow/pull/14240

**Full Changelog**: https://github.com/infiniflow/ragflow/compare/v0.25.4...v0.25.5

---

> **Source** [infiniflow/ragflow](https://github.com/infiniflow/ragflow) · `v0.25.5` · 2026-05-20 · [upstream release](https://github.com/infiniflow/ragflow/releases/tag/v0.25.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
