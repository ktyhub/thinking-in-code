---
title: "LightRAG v1.5.6"
project: "LightRAG"
repo: "HKUDS/LightRAG"
tag: "v1.5.6"
version: "v1.5.6"
published: "2026-08-06"
type: "patch"
lang: "en"
summary: "Introducing PGTableGraphStorage, a new graph storage backend built on native PostgreSQL tables. By eliminating the dependency on Apache AGE, it not only simplifies deployment but also delivers significantly higher graph…"
---

# LightRAG v1.5.6

## Important Notes

Introducing **PGTableGraphStorage**, a new graph storage backend built on native PostgreSQL tables. By eliminating the dependency on Apache AGE, it not only simplifies deployment but also delivers significantly higher graph storage performance with reduced storage footprint. It will replace the AGE-based `PGGraphStorage` as the preferred graph storage solution for PostgreSQL. This makes **PostgreSQL** the go-to **all-in-one backend database** for LightRAG, enabling a single database to cover all four storage types.

## What's New

* feat(kg): add PGTableGraphStorage — PostgreSQL-native graph backend (no AGE dependency) by @ysys143 in https://github.com/HKUDS/LightRAG/pull/3103
* docs(pipeline): rewrite the dedup and concurrency chapters from a user's view by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3583

## What's Changed

* Implement fail-closed recovery proof for whole-document purge by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3535
* docs: fix broken links and correct VLM gating semantics by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3539
* docs: extract parser service deployment runbooks by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3540
* docs: restructure FileProcessingPipeline into a usable guide by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3541
* docs: fix documentation typos, grammar errors, and incorrect warning messages by @Rythamo8055 in https://github.com/HKUDS/LightRAG/pull/3538
* feat(utils): bound thread-pool submission and pin the tokenizer contract by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3543
* fix(deps): sync uv.lock with the tiktoken floor and correct the restore rationale by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3546
* fix(api): bound request bodies and take token counting off the event loop by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3544
* fix(pipeline): take chunking off the event loop and bound the separator cascade by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3547
* build(deps): bump actions/stale from 10 to 11 in the github-actions group by @dependabot[bot] in https://github.com/HKUDS/LightRAG/pull/3549
* fix(chunker): cache separator normalization warnings by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3550
* fix(utils): strip whitespace before bool env conversion by @santhreal in https://github.com/HKUDS/LightRAG/pull/3554
* fix(kg): set is_truncated when get_knowledge_graph hits max_nodes by @santhreal in https://github.com/HKUDS/LightRAG/pull/3558
* fix(utils): return 0.0 from cosine_similarity on non-finite vectors by @santhreal in https://github.com/HKUDS/LightRAG/pull/3553
* fix(kg): report is_truncated correctly in mongo/neo4j/opensearch BFS fallbacks by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3564
* feat(tokenizer): safe encode-verified split/truncate contract, replacing #3559 by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3565
* fix(milvus): escape quotes and backslashes in filter ids by @santhreal in https://github.com/HKUDS/LightRAG/pull/3555
* fix(graph): normalize manually managed entity names by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3566
* fix(kg): return copies from JsonDocStatusStorage reads by @santhreal in https://github.com/HKUDS/LightRAG/pull/3556
* fix(kg): deep-copy JsonKVStorage read results to prevent aliasing by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3567
* fix(operate): return [] when extract_entities gets no chunks by @santhreal in https://github.com/HKUDS/LightRAG/pull/3557
* fix(kg): address PGTableGraphStorage review findings — startup scans, read fan-out, docs, CI reach by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3568
* Reject unsafe upload filenames and use secure opener to prevent traversal/symlink attacks by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3570
* fix(docker): install libcairo2 so native md SVG rasterization works by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3572
* fix(api): clean up startup dependency warnings (SVG rasterizer + smart_heading) by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3573
* Port graph storage contract tests to pg_smoke suite by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3575
* test(kg): non-interactive CLI for test_graph_storage.py, fix swallowed failures, drop redundant pg-smoke step by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3578
* fix(rerank): validate results at query boundary by @pengpengyi92 in https://github.com/HKUDS/LightRAG/pull/3574
* refactor(tools): make tiktoken and spaCy cache downloads independent by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3580
* fix(rerank): Rank isolated entities in get_popular_labels, stop dropping edges, unify the graph read contract by @danielaskdd in https://github.com/HKUDS/LightRAG/pull/3581
* fix(parser): preserve skipped Markdown heading hierarchy by @Iams4kura in https://github.com/HKUDS/LightRAG/pull/3582

## New Contributors

* @Rythamo8055 made their first contribution in https://github.com/HKUDS/LightRAG/pull/3538
* @pengpengyi92 made their first contribution in https://github.com/HKUDS/LightRAG/pull/3574
* @Iams4kura made their first contribution in https://github.com/HKUDS/LightRAG/pull/3582

**Full Changelog**: https://github.com/HKUDS/LightRAG/compare/v1.5.5...v1.5.6

---

> **Source** [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) · `v1.5.6` · 2026-08-06 · [upstream release](https://github.com/HKUDS/LightRAG/releases/tag/v1.5.6)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
