---
title: "WeKnora v0.6.2"
project: "WeKnora"
repo: "Tencent/WeKnora"
tag: "v0.6.2"
version: "v0.6.2"
published: "2026-06-10"
type: "patch"
lang: "en"
summary: "fix(auth): allow anonymous access to share-link endpoints (#1617) · refactor(chat): improve model name sanitization and path validation"
---

# WeKnora v0.6.2

## What's Changed
* fix(auth): allow anonymous access to share-link endpoints (#1617) by @lyingbug in https://github.com/Tencent/WeKnora/pull/1618
* refactor(chat): improve model name sanitization and path validation by @lyingbug in https://github.com/Tencent/WeKnora/pull/1619
* fix(knowledge): update doc-scroll-container class binding to account for loading state by @lyingbug in https://github.com/Tencent/WeKnora/pull/1623
* fix(frontend): KB list renders empty with ≥2 knowledge bases (#795) by @draix in https://github.com/Tencent/WeKnora/pull/1620
* feat(migrations): HNSW index for 1024-dim embeddings (bge-m3) by @toy0116 in https://github.com/Tencent/WeKnora/pull/1609
* fix(migrations): update migration comments for HNSW index by @lyingbug in https://github.com/Tencent/WeKnora/pull/1624
* fix(duckdb): avoid extension install during startup by @langcaiye in https://github.com/Tencent/WeKnora/pull/1615
* fix: support custom jieba dictionary directory by @langcaiye in https://github.com/Tencent/WeKnora/pull/1627
* fix: refresh wiki status after document polling completes by @shifang0511 in https://github.com/Tencent/WeKnora/pull/1622
* feat(cli)!: v0.9 agent-first CLI — contract harmonization, auth/profile consolidation, bundled Agent Skills by @voidkey in https://github.com/Tencent/WeKnora/pull/1551
* refactor(tracing): remove Jaeger integration and related components by @lyingbug in https://github.com/Tencent/WeKnora/pull/1629
* fix:langfuse init failed by @MaoMengww in https://github.com/Tencent/WeKnora/pull/1634
* refactor(frontend): streamline knowledge base and agent handling with chat resources store by @lyingbug in https://github.com/Tencent/WeKnora/pull/1630
* feat(frontend): inject commit ID into frontend build for version tracking by @lyingbug in https://github.com/Tencent/WeKnora/pull/1635
* feat(client): enhance knowledge file upload with process configuration support by @lyingbug in https://github.com/Tencent/WeKnora/pull/1636
* fix(chat): preserve provider tool-call metadata by @ziwon in https://github.com/Tencent/WeKnora/pull/1625
* feat(frontend): enhance dark mode syntax highlighting for code previews by @lyingbug in https://github.com/Tencent/WeKnora/pull/1637
* feat(frontend): implement marquee selection for knowledge base by @lyingbug in https://github.com/Tencent/WeKnora/pull/1639
* refactor(get_document_info): update schema definition and input parameters by @lyingbug in https://github.com/Tencent/WeKnora/pull/1640
* feat(release): update to version 0.6.2 with new features and improvements by @lyingbug in https://github.com/Tencent/WeKnora/pull/1641

## New Contributors
* @shifang0511 made their first contribution in https://github.com/Tencent/WeKnora/pull/1622

**Full Changelog**: https://github.com/Tencent/WeKnora/compare/v0.6.1...v0.6.2

---

> **Source** [Tencent/WeKnora](https://github.com/Tencent/WeKnora) · `v0.6.2` · 2026-06-10 · [upstream release](https://github.com/Tencent/WeKnora/releases/tag/v0.6.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
