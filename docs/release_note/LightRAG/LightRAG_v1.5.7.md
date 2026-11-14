---
title: "LightRAG v1.5.7"
project: "LightRAG"
repo: "HKUDS/LightRAG"
tag: "v1.5.7"
version: "v1.5.7"
published: "2026-09-02"
type: "patch"
lang: "en"
summary: "New Feature: Add end-user-facing entry point to WebUI"
---

# LightRAG v1.5.7

## Important Notes

**New Feature: Add end-user-facing entry point to WebUI** 

v1.5.7 adds a second, end-user-facing entry — `/workspace` — together with the **branding** and **prompt controls** a deployment needs before it can be handed to real users.

* A query-only entry for end users: `/workspace`
* Customizable welcome, login and empty-state pages
* A global `USER_PROMPT_PREFIX`

`/workspace` UI shows the chat surface and nothing else — no document management, no knowledge graph, no API-docs links — and is built for mobile use. Point `UI_TEMPLATES_DIR` at a small directory of Markdown files plus a `manifest.json`, and LightRAG serves **your** welcome page, login-page blurb, query empty state, brand logo and copyright line — in several languages, without rebuilding the WebUI. A locale that declares both a login blurb and an agreement document also switches on a login consent checkbox. A ready-to-copy bundle ships in `docs/ui_templates_example/`.

`USER_PROMPT_PREFIX` (or `USER_PROMPT_PREFIX_FILE` for long, multi-paragraph text) prepends deployment-wide instructions to every request's `user_prompt`. It gives the operator one place to set the LLM's role, tone and output format — Mermaid diagrams, LaTeX delimiters, citation style — for both UI entries and the API alike. Requests can never read or replace it; only the API field `disable_user_prompt_prefix` opts out.

For more information, please refer to:

- [`docs/LightRAG-API-Server.md`](https://github.com/HKUDS/LightRAG/blob/main/docs/LightRAG-API-Server.md) — § *The `/workspace` Query Entry*
- [`docs/UserDefinedUI.md`](https://github.com/HKUDS/LightRAG/blob/main/docs/UserDefinedUI.md) — the complete UI customization guide, plus [`docs/ui_templates_example/`](https://github.com/HKUDS/LightRAG/tree/main/docs/ui_templates_example)
- [`README.md`](https://github.com/HKUDS/LightRAG/blob/main/README.md) — `USER_PROMPT_PREFIX` / `USER_PROMPT_PREFIX_FILE`

## What's New

* Add an offline tool to migrate a graph from Apache AGE to PostgreSQL tables by @ysys143 in https://github.com/HKUDS/LightRAG/pull/3620
* feat: support graph-first ingestion with deferred vector indexing by @letsgetai in https://github.com/HKUDS/LightRAG/pull/3473
* feat: add explicit custom chunking selector by @er-s-an in https://github.com/HKUDS/LightRAG/pull/3665
* feat(api): add ENABLE_API_DOCS switch for API documentation exposure by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3672
* perf(nano): defer vector deletes to flush time by @0xPabloxx in https://github.com/HKUDS/LightRAG/pull/3680
* perf(faiss): defer vector deletes to flush time by @yzxcj797 in https://github.com/HKUDS/LightRAG/pull/3693
* feat(Bedrock): Allow Bedrock default credential providers by @a-bruhn in https://github.com/HKUDS/LightRAG/pull/3726
* feat(ollama): report token usage through the TokenTracker contract by @YashvantHange in https://github.com/HKUDS/LightRAG/pull/3747
* feat(webui): standalone /workspace query entry for end users (dual-entry WebUI) by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3729
* feat(webui): add a login-page consent gate driven by the UI bundle by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3755
* feat(webui): use WEBUI_TITLE as the browser tab title by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3763
* Add user-defined UI customization bundle support (UI_TEMPLATES_DIR) by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3765
* Use custom logo and deployment title on login page by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3768
* feat(webui): customer-defined copyright line at the foot of the pre-login pages by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3773
* feat(query): Add global user prompt prefix feature with cache partitioning by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3781
* refactor: remove the deprecated GET /documents listing and get_docs_by_status by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3788

## What's Changed

* fix(kg): return copies from NetworkXStorage get_node and get_edge by @santhreal in https://github.com/HKUDS/LightRAG/pull/3588
* fix(operate): compute most common entity type and normalize keywords on rebuild by @santhreal in https://github.com/HKUDS/LightRAG/pull/3589
* fix(kg): return boolean values from get_all_update_flags_status by @santhreal in https://github.com/HKUDS/LightRAG/pull/3590
* fix(utils): split GRAPH_FIELD_SEP in merge_source_ids by @santhreal in https://github.com/HKUDS/LightRAG/pull/3592
* fix(utils): correct docstring example and harden compute_incremental_chunk_ids by @santhreal in https://github.com/HKUDS/LightRAG/pull/3591
* fix(parser): bound native markdown image downloads per document (GHSA-25c3-j78v-83qx) by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3605
* fix(kg): hydrate track docs via shared row helper and catch TypeError by @santhreal in https://github.com/HKUDS/LightRAG/pull/3595
* fix(kg): make get_knowledge_graph truncation deterministic across graph backends by @santhreal in https://github.com/HKUDS/LightRAG/pull/3593
* fix(security): bound DOCX decompression and contain sidecar image paths by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3614
* fix(rebuild_vdb): drop lossy agtype quote-strip that corrupts quote-bearing entity_ids by @ysys143 in https://github.com/HKUDS/LightRAG/pull/3587
* fix(extraction): surface token-limit truncation and fail on empty truncated responses by @pengpengyi92 in https://github.com/HKUDS/LightRAG/pull/3607
* build(deps): bump the github-actions group with 2 updates by @dependabot[bot] in https://github.com/HKUDS/LightRAG/pull/3616
* fix(parser): enforce OOXML member and DOCX image budgets by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3619
* fix(graph): validate attributes on the manual entity/relation APIs (GHSA-c922-pw4m-4wcv) by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3623
* fix(kg): enforce the graph-attribute contract in the backends that need it by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3624
* fix(api): reject unstorable characters in a document source by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3626
* fix(graph): preserve self-loops on entity rename by @pengpengyi92 in https://github.com/HKUDS/LightRAG/pull/3622
* fix(graph): reject self-loop relations at the manual write paths by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3625
* perf(kg): drop the seed-degree round trip from PGTable traversal by @ysys143 in https://github.com/HKUDS/LightRAG/pull/3618
* fix(milvus): page vector/id lookups to respect the gRPC response ceiling #3584 by @El-Tatane in https://github.com/HKUDS/LightRAG/pull/3629
* fix: forward embedding_dim to Ollama's embed API by @Vishwamitra in https://github.com/HKUDS/LightRAG/pull/3604
* fix: disable thinking for Ollama extract/keyword roles by default by @Vishwamitra in https://github.com/HKUDS/LightRAG/pull/3599
* fix(base): tolerate undeclared fields when rehydrating DocProcessingStatus by @qianheng-aws in https://github.com/HKUDS/LightRAG/pull/3633
* fix(llm): close OpenAI stream/client when GeneratorExit interrupts a mid-COT close by @AmirF194 in https://github.com/HKUDS/LightRAG/pull/3635
* fix(api): fail fast for custom Ollama embedding dimensions by @pengpengyi92 in https://github.com/HKUDS/LightRAG/pull/3636
* build(deps-dev): bump the build-tools group in /lightrag_webui with 5 updates by @dependabot[bot] in https://github.com/HKUDS/LightRAG/pull/3641
* build(deps): bump the react group across 1 directory with 3 updates by @dependabot[bot] in https://github.com/HKUDS/LightRAG/pull/3639
* build(deps): bump lucide-react from 1.26.0 to 1.29.0 in /lightrag_webui in the ui-components group by @dependabot[bot] in https://github.com/HKUDS/LightRAG/pull/3640
* build(deps): bump the content-rendering group across 1 directory with 2 updates by @dependabot[bot] in https://github.com/HKUDS/LightRAG/pull/3642
* build(deps): bump the frontend-minor-patch group across 1 directory with 4 updates by @dependabot[bot] in https://github.com/HKUDS/LightRAG/pull/3643
* fix(kg): refuse PGGraphStorage on Apache AGE >= 1.8.0, which crashes the backend by @ysys143 in https://github.com/HKUDS/LightRAG/pull/3621
* Refactor/parser cancellation exception rename by @MasaSN in https://github.com/HKUDS/LightRAG/pull/3637
* refactor(neo4j): clarify batch edge read contract by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3648
* Add an offline tool to migrate a graph from Apache AGE to PostgreSQL tables by @ysys143 in https://github.com/HKUDS/LightRAG/pull/3620
* fix(api): preserve source files when deleting duplicate markers by @pengpengyi92 in https://github.com/HKUDS/LightRAG/pull/3632
* docs: fix broken example links in programming guide by @Shizoqua in https://github.com/HKUDS/LightRAG/pull/3649
* docs: fix outdated defaults and env var names by @Shizoqua in https://github.com/HKUDS/LightRAG/pull/3653
* fix(parser): bound external result downloads for MinerU and Docling by @Shizoqua in https://github.com/HKUDS/LightRAG/pull/3638
* fix(webui): harden graph type color resolution against reserved property names by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3655
* docs(env.example): add the missing EXTRACT role variables by @torvalstrom in https://github.com/HKUDS/LightRAG/pull/3651
* fix(lmdeploy): preserve do_sample setting by @Shizoqua in https://github.com/HKUDS/LightRAG/pull/3654
* fix(parser): prevent quadratic Markdown image parsing by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3656
* feat: support graph-first ingestion with deferred vector indexing by @letsgetai in https://github.com/HKUDS/LightRAG/pull/3473
* fix(api): generalize EMBEDDING_DIM startup guard to all embedding bindings by @ClaireXi99 in https://github.com/HKUDS/LightRAG/pull/3646
* docs: document OrcaRouter as an OpenAI-compatible LLM binding by @Marc-oss-hub in https://github.com/HKUDS/LightRAG/pull/3650
* fix: warn when selectors bypass custom chunking by @er-s-an in https://github.com/HKUDS/LightRAG/pull/3662
* fix(chunker): reject negative token overlap by @Shizoqua in https://github.com/HKUDS/LightRAG/pull/3663
* fix(rerank): reject negative chunk overlap by @Shizoqua in https://github.com/HKUDS/LightRAG/pull/3667
* fix(lollms): honour configured binding host by @Shizoqua in https://github.com/HKUDS/LightRAG/pull/3668
* feat: add explicit custom chunking selector by @er-s-an in https://github.com/HKUDS/LightRAG/pull/3665
* build(deps): update openai requirement from <3.0.0,>=2.0.0 to >=2.0.0,<4.0.0 by @dependabot[bot] in https://github.com/HKUDS/LightRAG/pull/3670
* feat(api): add ENABLE_API_DOCS switch for API documentation exposure by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3672
* fix(merge): amerge_entities relation weight must track distinct-source count, not max by @AmirF194 in https://github.com/HKUDS/LightRAG/pull/3674
* fix(postgres): make AGE graph initialization idempotent by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3677
* fix(hf): exclude padding tokens from embedding pooling by @Shizoqua in https://github.com/HKUDS/LightRAG/pull/3675
* fix(kg): rank BFS levels by degree then label on mongo and opensearch by @Dhruv-kys in https://github.com/HKUDS/LightRAG/pull/3652
* Fix chunk-tracking reseed: distinguish absent row from present-but-empty row (#3609) by @jaideeppyne in https://github.com/HKUDS/LightRAG/pull/3660
* fix(graph): enforce relation evidence weight floor by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3676
* fix(hf): place generation inputs on model device by @Shizoqua in https://github.com/HKUDS/LightRAG/pull/3678
* fix(hf): honor generation token limits by @Shizoqua in https://github.com/HKUDS/LightRAG/pull/3687
* fix(lmdeploy): honor native max_new_tokens by @Shizoqua in https://github.com/HKUDS/LightRAG/pull/3689
* fix(ollama): map max_tokens to num_predict by @Shizoqua in https://github.com/HKUDS/LightRAG/pull/3690
* build(deps): bump lucide-react from 1.29.0 to 1.31.0 in /lightrag_webui in the ui-components group by @dependabot[bot] in https://github.com/HKUDS/LightRAG/pull/3682
* build(deps-dev): bump the build-tools group in /lightrag_webui with 2 updates by @dependabot[bot] in https://github.com/HKUDS/LightRAG/pull/3683
* build(deps): bump the frontend-minor-patch group in /lightrag_webui with 4 updates by @dependabot[bot] in https://github.com/HKUDS/LightRAG/pull/3684
* build(deps): bump react-dropzone from 15.0.0 to 19.1.1 in /lightrag_webui by @dependabot[bot] in https://github.com/HKUDS/LightRAG/pull/3685
* fix(gemini): map max_tokens to max_output_tokens by @AmirF194 in https://github.com/HKUDS/LightRAG/pull/3696
* fix(lollms): map max_tokens to n_predict by @Shizoqua in https://github.com/HKUDS/LightRAG/pull/3692
* test(utils): cover validate_file_path_security and subtract_source_ids by @YashvantHange in https://github.com/HKUDS/LightRAG/pull/3702
* fix(faiss): materialize an overwrite in one atomic rebuild by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3705
* fix(kg): keep unsaved upserts as a redo log and replay them after a reload by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3709
* fix(llm): close OpenAI stream on GeneratorExit during error-path COT close by @JessYanCoding in https://github.com/HKUDS/LightRAG/pull/3713
* fix(openai): encode embedding input with disallowed_special=() by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3718
* fix(embeddings): keep provider API keys request-local by @pengpengyi92 in https://github.com/HKUDS/LightRAG/pull/3717
* chore(deps): allow pandas 3.x by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3719
* fix(tokenizer): bisect the prefix bracket instead of clamping to one char by @JessYanCoding in https://github.com/HKUDS/LightRAG/pull/3722
* fix(pipeline): keep generated failure summary within varchar(255) by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3735
* fix(llm): stop retrying permanent spend-stop 429s (LiteLLM budget_exceeded / OpenAI insufficient_quota) by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3736
* fix(extraction): stop dumping full chunk id list in KEEP skip log by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3737
* build(deps-dev): bump @types/react-dom from 19.2.4 to 19.2.5 in /lightrag_webui in the react group by @dependabot[bot] in https://github.com/HKUDS/LightRAG/pull/3730
* build(deps): bump lucide-react from 1.31.0 to 1.33.0 in /lightrag_webui in the ui-components group by @dependabot[bot] in https://github.com/HKUDS/LightRAG/pull/3731
* build(deps-dev): bump the build-tools group in /lightrag_webui with 2 updates by @dependabot[bot] in https://github.com/HKUDS/LightRAG/pull/3732
* build(deps): bump mermaid from 11.16.1 to 11.17.0 in /lightrag_webui in the content-rendering group across 1 directory by @dependabot[bot] in https://github.com/HKUDS/LightRAG/pull/3733
* build(deps): bump the frontend-minor-patch group across 1 directory with 4 updates by @dependabot[bot] in https://github.com/HKUDS/LightRAG/pull/3734
* fix(kg): save FaissVectorDBStorage off the event loop by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3742
* fix: move file-backend persistence off the event loop by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3740
* fix: keep LoLLMs stream session alive by @gry67673905 in https://github.com/HKUDS/LightRAG/pull/3741
* fix(webui): keep the document list refreshing when the backend stalls by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3743
* fix: accept valid empty JSON extraction results in cache rebuild by @AmirF194 in https://github.com/HKUDS/LightRAG/pull/3745
* fix(extraction): report an unparseable rebuild payload once, not twice by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3749
* 🐛 fix(webui): stop the conversation area from scrolling horizontally on phones by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3750
* Fix WebUI document refresh after BFCache restore by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3751
* fix(webui): show workspace description in tooltip by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3769
* fix(setup): enable UI templates in compose by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3770
* fix(setup): close the lightrag service at any top-level compose key by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3772
* refact(webui): Let the bundle name and render the login consent document by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3771
* fix(query): enforce meaningful RAG query length by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3776
* fix(query): refuse empty prompts and stop walking whole queries by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3780
* fix(reproduce): batch_eval.py always exits with TypeError — give it a CLI by @Anai-Guo in https://github.com/HKUDS/LightRAG/pull/3779
* refact(test): add React component tests and test harness isolation checks by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3783
* fix: read evaluation datasets as UTF-8 by @zjn20030811 in https://github.com/HKUDS/LightRAG/pull/3782
* Fail legibly when bun test runs without the DOM preload by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3784
* perf(chunker): defer whole-document encode to the fixed-window path by @hata33 in https://github.com/HKUDS/LightRAG/pull/3758
* refac(test): convert five source-text WebUI tests to real renders by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3786
* refactor(webui): drop the buildLegacyDocs compatibility layer left over from GET /documents by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3791
* test(webui): stop replacing the window global in the workspace entry test by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3793
* fix(export): stop aexport_data crashing on backends without client_storage by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3785
* perf(operate): encode chunk-invariant extraction prompts once per run by @hata33 in https://github.com/HKUDS/LightRAG/pull/3760
* test(extraction): pin the gleaning guard arithmetic and lazy invariant precompute by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3787
* docs: clarify file processing concurrency limits by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3794
* test(webui): finish converting source-text tests to real renders by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3792
* chore(deps): update anthropic requirement from <1.0.0,>=0.18.0 to >=0.18.0,<2.0.0 by @dependabot[bot] in https://github.com/HKUDS/LightRAG/pull/3795
* chore(deps): widen spacy ceiling to &lt;3.8.17, lock to 3.8.16 by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3797
* docs(workspace): document the query entry, and show its parameter scope in the WebUI by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3798

## New Contributors

* @El-Tatane made their first contribution in https://github.com/HKUDS/LightRAG/pull/3629
* @Vishwamitra made their first contribution in https://github.com/HKUDS/LightRAG/pull/3604
* @qianheng-aws made their first contribution in https://github.com/HKUDS/LightRAG/pull/3633
* @AmirF194 made their first contribution in https://github.com/HKUDS/LightRAG/pull/3635
* @MasaSN made their first contribution in https://github.com/HKUDS/LightRAG/pull/3637
* @Shizoqua made their first contribution in https://github.com/HKUDS/LightRAG/pull/3649
* @torvalstrom made their first contribution in https://github.com/HKUDS/LightRAG/pull/3651
* @letsgetai made their first contribution in https://github.com/HKUDS/LightRAG/pull/3473
* @ClaireXi99 made their first contribution in https://github.com/HKUDS/LightRAG/pull/3646
* @Marc-oss-hub made their first contribution in https://github.com/HKUDS/LightRAG/pull/3650
* @er-s-an made their first contribution in https://github.com/HKUDS/LightRAG/pull/3662
* @Dhruv-kys made their first contribution in https://github.com/HKUDS/LightRAG/pull/3652
* @jaideeppyne made their first contribution in https://github.com/HKUDS/LightRAG/pull/3660
* @YashvantHange made their first contribution in https://github.com/HKUDS/LightRAG/pull/3702
* @0xPabloxx made their first contribution in https://github.com/HKUDS/LightRAG/pull/3680
* @yzxcj797 made their first contribution in https://github.com/HKUDS/LightRAG/pull/3693
* @JessYanCoding made their first contribution in https://github.com/HKUDS/LightRAG/pull/3713
* @gry67673905 made their first contribution in https://github.com/HKUDS/LightRAG/pull/3741
* @Anai-Guo made their first contribution in https://github.com/HKUDS/LightRAG/pull/3779
* @zjn20030811 made their first contribution in https://github.com/HKUDS/LightRAG/pull/3782

**Full Changelog**: https://github.com/HKUDS/LightRAG/compare/v1.5.6...v1.5.7

---

> **Source** [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) · `v1.5.7` · 2026-09-02 · [upstream release](https://github.com/HKUDS/LightRAG/releases/tag/v1.5.7)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
