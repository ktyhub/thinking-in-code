---
title: "weaviate v1.40.4"
project: "weaviate"
repo: "weaviate/weaviate"
tag: "v1.40.4"
version: "v1.40.4"
published: "2026-11-05"
type: "patch"
lang: "en"
summary: "Make reads wait while this node is still creating a collection · fix(shutdown): re-order grpc shutdown to be before memberlist leave · Fixes missing propery length for empty arrays"
---

# weaviate v1.40.4

## Breaking Changes 
*none*

## New Features
*none*

## Fixes
* Make reads wait while this node is still creating a collection by @dirkkul in https://github.com/weaviate/weaviate/pull/13557
* fix(shutdown): re-order grpc shutdown to be before memberlist leave by @tsmith023 in https://github.com/weaviate/weaviate/pull/13627
* Fixes missing propery length for empty arrays by @dirkkul in https://github.com/weaviate/weaviate/pull/13634
* fix(add-class): read the collection cap's fail-fast count from the local schema by @tsmith023 in https://github.com/weaviate/weaviate/pull/13592
* deps: bump parquet-go/parquet-go to v0.32.0 and andybalholm/brotli to v1.2.7 by @antas-marcin in https://github.com/weaviate/weaviate/pull/13647
* Refuse aliases from operators that cross namespaces by @dirkkul in https://github.com/weaviate/weaviate/pull/13644
* deps: bump weaviate/mockoidc to v0.0.2 by @antas-marcin in https://github.com/weaviate/weaviate/pull/13652
* Keep vector search distances aligned when an object is missing from the store (backport v1.37) by @rlmanrique in https://github.com/weaviate/weaviate/pull/13650
* rest search: accept a caller-supplied vector on the hybrid endpoint by @g-despot in https://github.com/weaviate/weaviate/pull/13631
* Keep vector search distances aligned when an object is missing from the store (backport v1.38) by @rlmanrique in https://github.com/weaviate/weaviate/pull/13645
* fix: gse tokenizers by @trengrj in https://github.com/weaviate/weaviate/pull/13649
* Deny namespaced callers on RBAC paths with an unrecognized shape by @dirkkul in https://github.com/weaviate/weaviate/pull/13664
* Make runtime reindex and replica movement mutually exclusive by @etiennedi in https://github.com/weaviate/weaviate/pull/13049
* reindex: load the double-write state before analyzing a write by @etiennedi in https://github.com/weaviate/weaviate/pull/13675
* lsmkv: flush a bucket's unflushed writes before moving it by @etiennedi in https://github.com/weaviate/weaviate/pull/13676
* reindex: refuse a filterable-only tokenization change when a searchable index exists by @etiennedi in https://github.com/weaviate/weaviate/pull/13674
* distributedtask: hand callbacks the FAILED status a failed ack produced by @etiennedi in https://github.com/weaviate/weaviate/pull/13677
* Reindex: report a frozen tenant in ?tenants= as frozen, not missing by @etiennedi in https://github.com/weaviate/weaviate/pull/13680
* backup: tell operators how to get past a reindex refusal by @etiennedi in https://github.com/weaviate/weaviate/pull/13681
* reindex: log the group's unit count instead of every unit ID by @etiennedi in https://github.com/weaviate/weaviate/pull/13684
* dtm: cap the ack error a node writes for many failing units or groups by @etiennedi in https://github.com/weaviate/weaviate/pull/13689
* fix(reindex): limit the stale-state sweep to a task's tenants by @etiennedi in https://github.com/weaviate/weaviate/pull/13685
* Bound the task-list call in the backup reindex gate by @etiennedi in https://github.com/weaviate/weaviate/pull/13683
* backup: share one reindex-gate fetch across a backup instead of one per shard by @etiennedi in https://github.com/weaviate/weaviate/pull/13678
* cluster: refuse a reindex submit built against stale replicas by @etiennedi in https://github.com/weaviate/weaviate/pull/13699
* backup: report a reindex refusal once per class, not once per shard by @etiennedi in https://github.com/weaviate/weaviate/pull/13682
* Reindex: guard migration dir handles, clearer withheld range-index error by @etiennedi in https://github.com/weaviate/weaviate/pull/13692
* reindex: refuse submit while any target tenant is not HOT by @etiennedi in https://github.com/weaviate/weaviate/pull/13701
* reindex: keep a failed migration's task record until a newer run by @etiennedi in https://github.com/weaviate/weaviate/pull/13702
* test: fix two flaky tests (backup fake, overlay swap race check) by @etiennedi in https://github.com/weaviate/weaviate/pull/13708
* Bound the distributed task list query when the caller has no deadline by @etiennedi in https://github.com/weaviate/weaviate/pull/13706
* fix(rest): close HTTP servers still busy at the graceful timeout before teardown by @aliszka in https://github.com/weaviate/weaviate/pull/13646
* vector index update: drop fields a newer version added to mapping records at shard load by @asdine in https://github.com/weaviate/weaviate/pull/13711
* reindex: switch the engine to the record and delete markers (part 2/2) by @etiennedi in https://github.com/weaviate/weaviate/pull/12848
* fix(queue): flush index before removing processed chunk by @abdelr in https://github.com/weaviate/weaviate/pull/12879
* Call MkdirAll once per directory when hardlinking backup files by @dirkkul in https://github.com/weaviate/weaviate/pull/13726
* perf(queryadmission): hold each query to the budget its phases actually use by @aliszka in https://github.com/weaviate/weaviate/pull/13617
* fix(router): enforce consistency levels when replicas have left memberlist by @tsmith023 in https://github.com/weaviate/weaviate/pull/13456
* Add client-side license protocol packages (M4) by @etiennedi in https://github.com/weaviate/weaviate/pull/13383
* Stop a tenants-only grant from listing a lone collection's schema by @dirkkul in https://github.com/weaviate/weaviate/pull/13749
* Keep a role pattern like X|\Q from failing every later permission check by @dirkkul in https://github.com/weaviate/weaviate/pull/13651
* Authorize backup and restore status when the backup metadata is missing by @dirkkul in https://github.com/weaviate/weaviate/pull/13679
* chore(test): attempt fix of `TestReplicationReplicateMOVEDeletesSourceReplica` flakiness by @tsmith023 in https://github.com/weaviate/weaviate/pull/13765
* backup: tolerate the op unwinding before the cancel flag is read by @jfrancoa in https://github.com/weaviate/weaviate/pull/13757
* schema: return the class version when AddClassProperty adds nothing by @rlmanrique in https://github.com/weaviate/weaviate/pull/13761
* fix: entrypoint accepts nodes under maintenance if needed by @trengrj in https://github.com/weaviate/weaviate/pull/13748
* Answer an empty class in a batch with the per-object error by @dirkkul in https://github.com/weaviate/weaviate/pull/13767


**Full Changelog**: https://github.com/weaviate/weaviate/compare/v1.40.3...v1.40.4

---

> **Source** [weaviate/weaviate](https://github.com/weaviate/weaviate) · `v1.40.4` · 2026-11-05 · [upstream release](https://github.com/weaviate/weaviate/releases/tag/v1.40.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
