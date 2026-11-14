---
title: "weaviate v1.38.25"
project: "weaviate"
repo: "weaviate/weaviate"
tag: "v1.38.25"
version: "v1.38.25"
published: "2026-11-10"
type: "patch"
lang: "en"
summary: "none"
---

# weaviate v1.38.25

## Breaking Changes 
*none*

## New Features
*none*

## Fixes
* fix(router): enforce consistency levels when replicas have left memberlist by @tsmith023 in https://github.com/weaviate/weaviate/pull/13456
* Stop a tenants-only grant from listing a lone collection's schema by @dirkkul in https://github.com/weaviate/weaviate/pull/13749
* Keep a role pattern like X|\Q from failing every later permission check by @dirkkul in https://github.com/weaviate/weaviate/pull/13651
* chore(test): attempt fix of `TestReplicationReplicateMOVEDeletesSourceReplica` flakiness by @tsmith023 in https://github.com/weaviate/weaviate/pull/13765
* schema: return the class version when AddClassProperty adds nothing by @rlmanrique in https://github.com/weaviate/weaviate/pull/13761
* fix: entrypoint accepts nodes under maintenance if needed by @trengrj in https://github.com/weaviate/weaviate/pull/13748
* Require every verb of a manage permission before assigning its role by @dirkkul in https://github.com/weaviate/weaviate/pull/13775
* chore(tools): enforce golangci-lint version in gen-code-from-swagger.sh by @antas-marcin in https://github.com/weaviate/weaviate/pull/13791
* Require every verb of a manage permission to see or edit a role by @dirkkul in https://github.com/weaviate/weaviate/pull/13790
* Reject backup class and shard names that would escape the data dir by @dirkkul in https://github.com/weaviate/weaviate/pull/13788
* security(deps): bump golang.org/x/net to v0.62.0 by @antas-marcin in https://github.com/weaviate/weaviate/pull/13806
* fix: flaky test delete entrypoint by @trengrj in https://github.com/weaviate/weaviate/pull/13822
* Require a wildcard to grant a role pattern that uses regex syntax by @dirkkul in https://github.com/weaviate/weaviate/pull/13823
* fix: narrow down base URL usage for Weaviate Embeddings modules by @augustas1 in https://github.com/weaviate/weaviate/pull/13795


**Full Changelog**: https://github.com/weaviate/weaviate/compare/v1.38.24...v1.38.25

---

> **Source** [weaviate/weaviate](https://github.com/weaviate/weaviate) · `v1.38.25` · 2026-11-10 · [upstream release](https://github.com/weaviate/weaviate/releases/tag/v1.38.25)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
