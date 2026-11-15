---
title: "ragflow v0.25.3"
project: "ragflow"
repo: "infiniflow/ragflow"
tag: "v0.25.3"
version: "v0.25.3"
published: "2026-05-13"
type: "patch"
lang: "en"
summary: "Data source and parsing: Added column-level semantic/metadata control for the spreadsheet file parser; introduced ETag optimization for incremental synchronization of S3 data sources to avoid unnecessary file transfers."
---

# ragflow v0.25.3

# Summary

## New features

-  Data source and parsing: Added column-level semantic/metadata control for the spreadsheet file parser; introduced ETag optimization for incremental synchronization of S3 data sources to avoid unnecessary file transfers.
- Enables assigning specific roles like content, metadata, and primary key, to table columns. [#13710](https://github.com/infiniflow/ragflow/pull/13710)

## Improvements

- API refactoring and security
  - Continues the transition of web APIs to RESTful conventions, ensuring backward compatibility for all legacy endpoints.
  - Binds the `user_id` in `POST /api/v1/messages` to the authenticated JWT principal. [#14745](https://github.com/infiniflow/ragflow/pull/14745)
  - Secures the sandbox executor against dynamic and indirect code execution bypasses. [#14690](https://github.com/infiniflow/ragflow/pull/14690)
  - LLM request timeout control
  - High concurrency blocking call thread pool
- Reduces ingestion server boot time. [#14894](https://github.com/infiniflow/ragflow/pull/14894)

## Bug fixes

- Images in multi-sheet Excel workbooks were not scoped by sheet, causing images to be incorrectly attributed across different worksheets. [#14120](https://github.com/infiniflow/ragflow/pull/14120)
- Iteration item alias passing
- Tool parameter template parsing
- Code execution attachment output
- Volcano model addition fix

## What's Changed
* Go: implement provider: Baidu by @Haruko386 in https://github.com/infiniflow/ragflow/pull/14741
* feat(connectors): ETag-based bypass for incremental S3 ingestion (#14628) by @hunnyboy1217 in https://github.com/infiniflow/ragflow/pull/14677
* Go: fix Baidu rerank issue by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/14742
* Go: fix siliconflow rerank issue by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/14743
* Go: implement Encode (embeddings) in OpenAI driver by @pandadev66 in https://github.com/infiniflow/ragflow/pull/14630
* Fix: Radio.Group cloneElement crashes on non-element children by @JimZhang-lab in https://github.com/infiniflow/ragflow/pull/14407
* fix(auth): fall back to session-based auth in _load_user by @mhtkarakose in https://github.com/infiniflow/ragflow/pull/14569
* Fix: resolve template strings in tool component parameters by @wanghualoong in https://github.com/infiniflow/ragflow/pull/14601
* fix base_url handling in HuggingfaceRerank by @Qwerrty574 in https://github.com/infiniflow/ragflow/pull/14555
* Feature/table parser column roles by @ahmadintisar in https://github.com/infiniflow/ragflow/pull/13710
* Feat: add BedrockCV for vision/image2text inference via LiteLLM by @vincentlambert in https://github.com/infiniflow/ragflow/pull/14705
* Go: implement ListModels in Volcengine driver by @bittoby in https://github.com/infiniflow/ragflow/pull/14702
* feat: make sandbox Dockerfile mirrors optional with ARG by @ParasSondhi in https://github.com/infiniflow/ragflow/pull/14553
* fix(llm): add timeout to HTTP requests in LLM integration layer by @Ricardo-M-L in https://github.com/infiniflow/ragflow/pull/14313
* Go: implement Encode (embeddings) in Google Gemini driver by @Joseff531 in https://github.com/infiniflow/ragflow/pull/14682
* fix(go): wire Google CheckConnection to ListModels by @zeus1959 in https://github.com/infiniflow/ragflow/pull/14660
* Fix(Go): correct Name() and region URL fallback in Aliyun driver by @Joseff531 in https://github.com/infiniflow/ragflow/pull/14673
* fix: close two security analyzer bypass paths in sandbox executor by @Sp1kyss in https://github.com/infiniflow/ragflow/pull/14690
* fix: handle missing parent chunk in retrieval_by_children by @vincentlambert in https://github.com/infiniflow/ragflow/pull/14556
* Go: implement Encode (embeddings) in Gitee AI driver by @bittoby in https://github.com/infiniflow/ragflow/pull/14698
* fix(keyword_extraction): accept Chinese commas/semicolons/newlines as keyword delimiters by @Qinsanz in https://github.com/infiniflow/ragflow/pull/14540
* Go: implement Encode (embeddings) in vLLM driver by @pandadev66 in https://github.com/infiniflow/ragflow/pull/14688
* fix: complete robustness fixes for rerank module addressing all review comments by @07heco in https://github.com/infiniflow/ragflow/pull/14265
* fix(prompt): reserve system budget in message_fit_in by @hyl64 in https://github.com/infiniflow/ragflow/pull/14164
* Go: implement Encode (embeddings) in Ollama driver by @jack-stormentswe in https://github.com/infiniflow/ragflow/pull/14664
* Go: implement Encode (embeddings) in NVIDIA driver by @bittoby in https://github.com/infiniflow/ragflow/pull/14700
* Perf(Go): batch SiliconFlow Encode requests with 32-item chunking by @Joseff531 in https://github.com/infiniflow/ragflow/pull/14719
* Go: implement Encode (embeddings) in LM Studio driver by @pandadev66 in https://github.com/infiniflow/ragflow/pull/14694
* Fix(Go): make OpenRouter Encode fail loudly on malformed responses by @Joseff531 in https://github.com/infiniflow/ragflow/pull/14717
* Refactor: tidy up ThreadPoolExecutor lifecycle in file_service and task executor by @web-dev0521 in https://github.com/infiniflow/ragflow/pull/14668
* GraphRAG feature - Part 1 - add spacy to extract entity and relation by @wangq8 in https://github.com/infiniflow/ragflow/pull/14670
* fix: scope pending_cell_images by sheet in excel parser by @fplust in https://github.com/infiniflow/ragflow/pull/14120
* fix(dify): guard retrieval argument error behavior by @Achieve3318 in https://github.com/infiniflow/ragflow/pull/14169
* Fix: bind memory message `user_id` to authenticated user for JWT auth by @jony376 in https://github.com/infiniflow/ragflow/pull/14745
* Fix: dataset search rerank id type by @buua436 in https://github.com/infiniflow/ragflow/pull/14759
* Fix: shared dataset chunk index lookup by @buua436 in https://github.com/infiniflow/ragflow/pull/14764
* fix: use context manager for ThreadPoolExecutor in file_service.py by @Ricardo-M-L in https://github.com/infiniflow/ragflow/pull/14144
* Go: refactor embedding interface by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/14757
* Fix: safe argument guard and remove redundant redis call by @paulhuiseismic in https://github.com/infiniflow/ragflow/pull/14060
* fix: offload blocking DB/Redis calls to thread pool for high-concurrency support (#13825) by @tmimmanuel in https://github.com/infiniflow/ragflow/pull/13941
* Refact: Added a private helper _visibility_and_status_filter by @Sank-WoT in https://github.com/infiniflow/ragflow/pull/13627
* Fix: Document parse status set to DONE before chunks are retrievable by @as-ondewo in https://github.com/infiniflow/ragflow/pull/13352
* fix(web): fix incomplete Docx preview in citation reference by @yshchm in https://github.com/infiniflow/ragflow/pull/14122
* fix: OCR.detect() returns truthy None-tuple causing NoneType subscript crash by @octo-patch in https://github.com/infiniflow/ragflow/pull/13951
* chore: fix some comments to improve readability by @box4wangjing in https://github.com/infiniflow/ragflow/pull/14756
* fix(opensearch): implement doc-meta dispatch surface on OSConnection by @tmimmanuel in https://github.com/infiniflow/ragflow/pull/14577
* Go: add development guide document by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/14785
* Go: implement Rerank in NVIDIA driver by @RenzoMXD in https://github.com/infiniflow/ragflow/pull/14778
* Fix: add codeexec attachments output by @buua436 in https://github.com/infiniflow/ragflow/pull/14787
* Go: implement provider: CoHere and FishAudio by @Haruko386 in https://github.com/infiniflow/ragflow/pull/14790
* Go: fix retrieval test error by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/14794
* [Bug]: REDIS error #12870 by @raminmardani in https://github.com/infiniflow/ragflow/pull/13875
* fix(dify): add GET method support to /dify/retrieval for health check by @Lntanohuang in https://github.com/infiniflow/ragflow/pull/13837
* feat(raptor): add Psi tree builder with original-space ranking and safe migration by @CaptainTimon in https://github.com/infiniflow/ragflow/pull/14679
* Chore(deps): Bump urllib3 from 2.6.3 to 2.7.0 in /agent/sandbox by @dependabot[bot] in https://github.com/infiniflow/ragflow/pull/14824
* Refactor(Go): remove hardcode in huggingface provider by @Haruko386 in https://github.com/infiniflow/ragflow/pull/14822
* fix(agent): support iteration item aliases in child nodes by @hyl64 in https://github.com/infiniflow/ragflow/pull/14146
* Go: implement provider: StepFun by @tmimmanuel in https://github.com/infiniflow/ragflow/pull/14815
* fix(docs): correct broken knowledge graph construction link by @majiayu000 in https://github.com/infiniflow/ragflow/pull/13838
* Fix: some agent bug by @buua436 in https://github.com/infiniflow/ragflow/pull/14829
* Refact: sandbox quickstart.md & add tutorial for code exec component by @Magicbook1108 in https://github.com/infiniflow/ragflow/pull/14786
* Test : aggregation edge cases for list and scalar values by @Achieve3318 in https://github.com/infiniflow/ragflow/pull/14170
* Go: implement provider: Baichuan by @Haruko386 in https://github.com/infiniflow/ragflow/pull/14832
* Go: implement Embed (embeddings) in Upstage driver by @tmimmanuel in https://github.com/infiniflow/ragflow/pull/14819
* Speed up start time by @wangq8 in https://github.com/infiniflow/ragflow/pull/14833
* GO: implement GET /api/v1/datasets/:dataset_id by @buua436 in https://github.com/infiniflow/ragflow/pull/14834
* Go: add ASR, TTS, OCR command by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/14836
* Go: fix dataset time unit by @buua436 in https://github.com/infiniflow/ragflow/pull/14837
* Go: implement Embed (embeddings) in Mistral driver by @tmimmanuel in https://github.com/infiniflow/ragflow/pull/14807
* Go: implement provider: Jina by @Haruko386 in https://github.com/infiniflow/ragflow/pull/14838
* fix: expose gpt-5.5 and gpt-5.4 in OpenAI model list by @oxtensor in https://github.com/infiniflow/ragflow/pull/14828
* Feat: When a Wait Node precedes a Message Node within a Loop Node, the outgoing message is split into two separate messages. by @cike8899 in https://github.com/infiniflow/ragflow/pull/14839
* Fix #14801 to allow search dataset list when add by @wangq8 in https://github.com/infiniflow/ragflow/pull/14841
* Go: fix model type check when use the model by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/14843
* Docs: How to add Bitbucket as data source. by @writinwaters in https://github.com/infiniflow/ragflow/pull/14846
* fix: remove duplicate .wav and .aac in audio supported extensions list by @yaoper in https://github.com/infiniflow/ragflow/pull/14791
* fix(api): authorize owner_ids for list chats and search apps by @dale053 in https://github.com/infiniflow/ragflow/pull/14775
* Add REST API backward compatibility by @wangq8 in https://github.com/infiniflow/ragflow/pull/14872
* fix: guard whitespace-only chunks before embedding by @shawnxiao105-afk in https://github.com/infiniflow/ragflow/pull/13938
* Fix(Go): make Baidu Encode fail loudly on malformed responses by @Joseff531 in https://github.com/infiniflow/ragflow/pull/14721
* Fix delete graphrag not take effect in UI by @wangq8 in https://github.com/infiniflow/ragflow/pull/14879
* Fix: The text field resizing function in the knowledge block creation… by @stardyun in https://github.com/infiniflow/ragflow/pull/14212
* Go: implement provider: Novita.ai by @tmimmanuel in https://github.com/infiniflow/ragflow/pull/14850
* Chore: migrate tests to restful api by @6ba3i in https://github.com/infiniflow/ragflow/pull/14871
* Delete duplicate route by @wangq8 in https://github.com/infiniflow/ragflow/pull/14883
* Go: implement provider: LongCat by @tmimmanuel in https://github.com/infiniflow/ragflow/pull/14809
* Fix: Set embedded models during form initialization. by @dcc123456 in https://github.com/infiniflow/ragflow/pull/14889
* Go: implement ListModels in ZhipuAI driver by @pandadev66 in https://github.com/infiniflow/ragflow/pull/14886
* Fix: llm add api key overridden by @buua436 in https://github.com/infiniflow/ragflow/pull/14885
* Go: fix OCR command by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/14891
* Speed up ragflow server by @wangq8 in https://github.com/infiniflow/ragflow/pull/14894
* Docs: Update version references to v0.25.3 in READMEs and docs by @asiroliu in https://github.com/infiniflow/ragflow/pull/14896
* Go: implement Rerank in LocalAI driver by @tmimmanuel in https://github.com/infiniflow/ragflow/pull/14813
* Docs: Draft 0.25.3 release notes by @writinwaters in https://github.com/infiniflow/ragflow/pull/14898
* Bump to infinity v0.7.0-dev7 by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/14897
* Docs: Updated v0.25.3 release notes draft by @writinwaters in https://github.com/infiniflow/ragflow/pull/14899
* Fix: enforce tenant authorization for `tenant_rerank_id` in retrieval flows by @jony376 in https://github.com/infiniflow/ragflow/pull/14782
* Fix go compilation by @JinHai-CN in https://github.com/infiniflow/ragflow/pull/14900

## New Contributors
* @hunnyboy1217 made their first contribution in https://github.com/infiniflow/ragflow/pull/14677
* @JimZhang-lab made their first contribution in https://github.com/infiniflow/ragflow/pull/14407
* @mhtkarakose made their first contribution in https://github.com/infiniflow/ragflow/pull/14569
* @Qwerrty574 made their first contribution in https://github.com/infiniflow/ragflow/pull/14555
* @zeus1959 made their first contribution in https://github.com/infiniflow/ragflow/pull/14660
* @Sp1kyss made their first contribution in https://github.com/infiniflow/ragflow/pull/14690
* @Qinsanz made their first contribution in https://github.com/infiniflow/ragflow/pull/14540
* @07heco made their first contribution in https://github.com/infiniflow/ragflow/pull/14265
* @fplust made their first contribution in https://github.com/infiniflow/ragflow/pull/14120
* @yshchm made their first contribution in https://github.com/infiniflow/ragflow/pull/14122
* @box4wangjing made their first contribution in https://github.com/infiniflow/ragflow/pull/14756
* @CaptainTimon made their first contribution in https://github.com/infiniflow/ragflow/pull/14679
* @oxtensor made their first contribution in https://github.com/infiniflow/ragflow/pull/14828
* @yaoper made their first contribution in https://github.com/infiniflow/ragflow/pull/14791
* @shawnxiao105-afk made their first contribution in https://github.com/infiniflow/ragflow/pull/13938
* @stardyun made their first contribution in https://github.com/infiniflow/ragflow/pull/14212

**Full Changelog**: https://github.com/infiniflow/ragflow/compare/v0.25.2...v0.25.3

---

> **Source** [infiniflow/ragflow](https://github.com/infiniflow/ragflow) · `v0.25.3` · 2026-05-13 · [upstream release](https://github.com/infiniflow/ragflow/releases/tag/v0.25.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
