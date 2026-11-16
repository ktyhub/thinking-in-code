---
title: "weaviate v1.36.24"
project: "weaviate"
repo: "weaviate/weaviate"
tag: "v1.36.24"
version: "v1.36.24"
published: "2026-10-23"
type: "patch"
lang: "en"
summary: "Key the auth singleflight on the key, not just the user · Fix RBAC regexp · feat(monitoring): unified background-process activity + duration metrics"
---

# weaviate v1.36.24

## Breaking Changes
none

## New Features
none

## Fixes
* Key the auth singleflight on the key, not just the user by @dirkkul in https://github.com/weaviate/weaviate/pull/12270
* Fix RBAC regexp by @dirkkul in https://github.com/weaviate/weaviate/pull/12251
* feat(monitoring): unified background-process activity + duration metrics by @moogacs in https://github.com/weaviate/weaviate/pull/12275
* fix(db): shut down vector index when its queue creation fails to avoid orphaning it by @antas-marcin in https://github.com/weaviate/weaviate/pull/12192
* Update GRPC dependency by @dirkkul in https://github.com/weaviate/weaviate/pull/12311
* feat(telemetry): persistent cluster and node identity for correlatable telemetry by @moogacs in https://github.com/weaviate/weaviate/pull/12296
* AddMultiVector idempotence fix by @trengrj in https://github.com/weaviate/weaviate/pull/12170
* refact(telemetry) gate cluster-id commit on telemetry being enabled by @moogacs in https://github.com/weaviate/weaviate/pull/12326
* Remove support for restoring old backup formats by @dirkkul in https://github.com/weaviate/weaviate/pull/12338
* Allocate per-tenant vector cache memory lazily and proportionally to tenant size by @asdine in https://github.com/weaviate/weaviate/pull/12116
* chore(deps): bump x/net and x/text in all three modules (CVE-2026-46600, CVE-2026-56852) by @etiennedi in https://github.com/weaviate/weaviate/pull/12371
* fix(cyclemanager): roll back shouldAbort when ctx expires while callback runs by @etiennedi in https://github.com/weaviate/weaviate/pull/12265
* perf(hnsw): slab-allocate visited sparse-set segments by @abdelr in https://github.com/weaviate/weaviate/pull/12374
* fix(tools): adapt qa_pr.sh log fetch to gh >= 2.97 escape-sequence guard by @antas-marcin in https://github.com/weaviate/weaviate/pull/12462
* chore(deps): switch to Go 1.26 and bump x/net, x/crypto, x/text and grpc to fix CVEs by @antas-marcin in https://github.com/weaviate/weaviate/pull/13587
* Security patch for 8 eMudhra intermediate certificates leak


**Full Changelog**: https://github.com/weaviate/weaviate/compare/v1.36.23...v1.36.24

---

> **Source** [weaviate/weaviate](https://github.com/weaviate/weaviate) · `v1.36.24` · 2026-10-23 · [upstream release](https://github.com/weaviate/weaviate/releases/tag/v1.36.24)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
