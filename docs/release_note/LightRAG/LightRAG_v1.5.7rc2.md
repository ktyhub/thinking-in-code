---
title: "LightRAG v1.5.7rc2"
project: "LightRAG"
repo: "HKUDS/LightRAG"
tag: "v1.5.7rc2"
version: "v1.5.7rc2"
published: "2026-08-19"
type: "patch"
lang: "en"
---

# LightRAG v1.5.7rc2

## What's New
* Add an offline tool to migrate a graph from Apache AGE to PostgreSQL tables by @ysys143 in https://github.com/HKUDS/LightRAG/pull/3620
* feat: support graph-first ingestion with deferred vector indexing by @letsgetai in https://github.com/HKUDS/LightRAG/pull/3473
* feat: add explicit custom chunking selector by @er-s-an in https://github.com/HKUDS/LightRAG/pull/3665
* feat(api): add ENABLE_API_DOCS switch for API documentation exposure by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3672

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
* fix(api): preserve source files when deleting duplicate markers by @pengpengyi92 in https://github.com/HKUDS/LightRAG/pull/3632
* docs: fix broken example links in programming guide by @Shizoqua in https://github.com/HKUDS/LightRAG/pull/3649
* docs: fix outdated defaults and env var names by @Shizoqua in https://github.com/HKUDS/LightRAG/pull/3653
* fix(parser): bound external result downloads for MinerU and Docling by @Shizoqua in https://github.com/HKUDS/LightRAG/pull/3638
* fix(webui): harden graph type color resolution against reserved property names by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3655
* docs(env.example): add the missing EXTRACT role variables by @torvalstrom in https://github.com/HKUDS/LightRAG/pull/3651
* fix(lmdeploy): preserve do_sample setting by @Shizoqua in https://github.com/HKUDS/LightRAG/pull/3654
* fix(parser): prevent quadratic Markdown image parsing by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3656
* fix(api): generalize EMBEDDING_DIM startup guard to all embedding bindings by @ClaireXi99 in https://github.com/HKUDS/LightRAG/pull/3646
* docs: document OrcaRouter as an OpenAI-compatible LLM binding by @Marc-oss-hub in https://github.com/HKUDS/LightRAG/pull/3650
* fix: warn when selectors bypass custom chunking by @er-s-an in https://github.com/HKUDS/LightRAG/pull/3662
* fix(chunker): reject negative token overlap by @Shizoqua in https://github.com/HKUDS/LightRAG/pull/3663
* fix(rerank): reject negative chunk overlap by @Shizoqua in https://github.com/HKUDS/LightRAG/pull/3667
* fix(lollms): honour configured binding host by @Shizoqua in https://github.com/HKUDS/LightRAG/pull/3668
* build(deps): update openai requirement from <3.0.0,>=2.0.0 to >=2.0.0,<4.0.0 by @dependabot[bot] in https://github.com/HKUDS/LightRAG/pull/3670

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

**Full Changelog**: https://github.com/HKUDS/LightRAG/compare/v1.5.6...v1.5.7rc2

---

> **Source** [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) · `v1.5.7rc2` · 2026-08-19 · [upstream release](https://github.com/HKUDS/LightRAG/releases/tag/v1.5.7rc2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
