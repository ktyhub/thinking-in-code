---
title: "weaviate v1.39.16"
project: "weaviate"
repo: "weaviate/weaviate"
tag: "v1.39.16"
version: "v1.39.16"
published: "2026-11-10"
type: "patch"
lang: "en"
summary: "none"
---

# weaviate v1.39.16

## Breaking Changes 
*none*

## New Features
*none*

## Fixes
* schema: return the class version when AddClassProperty adds nothing by @rlmanrique in https://github.com/weaviate/weaviate/pull/13761
* fix: entrypoint accepts nodes under maintenance if needed by @trengrj in https://github.com/weaviate/weaviate/pull/13748
* Require every verb of a manage permission before assigning its role by @dirkkul in https://github.com/weaviate/weaviate/pull/13775
* perf(lsmkv): stripe the segment read-bytes metric across cache lines by @aliszka in https://github.com/weaviate/weaviate/pull/13658
* test(reindex): make the merged-barrier restart test deterministic by @etiennedi in https://github.com/weaviate/weaviate/pull/13743
* chore(tools): enforce golangci-lint version in gen-code-from-swagger.sh by @antas-marcin in https://github.com/weaviate/weaviate/pull/13791
* Drop the nil error from the read repair conflict message by @dirkkul in https://github.com/weaviate/weaviate/pull/13781
* Require every verb of a manage permission to see or edit a role by @dirkkul in https://github.com/weaviate/weaviate/pull/13790
* test(reindex): wait for each node's /indexes before asserting per-node state by @etiennedi in https://github.com/weaviate/weaviate/pull/13742
* perf(slow-log): stop filter leaves paying for entries that are never logged by @aliszka in https://github.com/weaviate/weaviate/pull/13769
* Reject backup class and shard names that would escape the data dir by @dirkkul in https://github.com/weaviate/weaviate/pull/13788
* security(deps): bump golang.org/x/net to v0.62.0 by @antas-marcin in https://github.com/weaviate/weaviate/pull/13806
* reindex: fix two schema-guard godocs that described the wrong race by @etiennedi in https://github.com/weaviate/weaviate/pull/13719
* reindex: fix two godocs that stated a contract the code doesn't keep by @etiennedi in https://github.com/weaviate/weaviate/pull/13720
* reindex: agree on an unreadable record set whether the shard is loaded or not by @etiennedi in https://github.com/weaviate/weaviate/pull/13718
* test(reindex): backup, restore and replica movement after a finished reindex by @etiennedi in https://github.com/weaviate/weaviate/pull/13724
* Filter GET /v1/tasks by collection and tenant read by @etiennedi in https://github.com/weaviate/weaviate/pull/13709
* fix: flaky test delete entrypoint by @trengrj in https://github.com/weaviate/weaviate/pull/13822
* cluster: register schema guards before RAFT replay by @etiennedi in https://github.com/weaviate/weaviate/pull/13819
* Require a wildcard to grant a role pattern that uses regex syntax by @dirkkul in https://github.com/weaviate/weaviate/pull/13823
* fix: narrow down base URL usage for Weaviate Embeddings modules by @augustas1 in https://github.com/weaviate/weaviate/pull/13795


**Full Changelog**: https://github.com/weaviate/weaviate/compare/v1.39.15...v1.39.16

---

> **Source** [weaviate/weaviate](https://github.com/weaviate/weaviate) · `v1.39.16` · 2026-11-10 · [upstream release](https://github.com/weaviate/weaviate/releases/tag/v1.39.16)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
