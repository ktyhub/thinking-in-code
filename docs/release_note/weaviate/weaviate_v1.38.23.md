---
title: "weaviate v1.38.23"
project: "weaviate"
repo: "weaviate/weaviate"
tag: "v1.38.23"
version: "v1.38.23"
published: "2026-10-27"
type: "patch"
lang: "en"
summary: "fix(backups): add missing basic auth to remaining handlers · Skip uncomressed HNSW vector cache if compressor is present · fix(hybrid): run rerank and generate once for a nearText sub-search"
---

# weaviate v1.38.23

## Breaking Changes
none

## New Features
none

## Fixes
* fix(backups): add missing basic auth to remaining handlers by @tsmith023 in https://github.com/weaviate/weaviate/pull/13350
* Skip uncomressed HNSW vector cache if compressor is present by @dirkkul in https://github.com/weaviate/weaviate/pull/13508
* fix(hybrid): run rerank and generate once for a nearText sub-search by @jfrancoa in https://github.com/weaviate/weaviate/pull/13404
* ci(gcloud): use preinstalled gcloud and download latest only as fallback by @antas-marcin in https://github.com/weaviate/weaviate/pull/13535
* fix(schema): reject module setting changes for modules with migrate properties by @antas-marcin in https://github.com/weaviate/weaviate/pull/13530
* fix(hybrid): fetch up to the end of the page in both hybrid legs by @jfrancoa in https://github.com/weaviate/weaviate/pull/13405
* fix(google-modules): escape and validate projectId and model in Google request URLs by @antas-marcin in https://github.com/weaviate/weaviate/pull/13532
* fix(cluster-MT): keep tenant work off the serial RAFT apply path by @moogacs in https://github.com/weaviate/weaviate/pull/13490
* fix(cluster): stop reads waiting on replicas that cannot serve by @moogacs in https://github.com/weaviate/weaviate/pull/13491
* Stop memtable tree recursion from growing the heap profile by @dirkkul in https://github.com/weaviate/weaviate/pull/13522
* fix(modules): run rerank before the other additional properties by @jfrancoa in https://github.com/weaviate/weaviate/pull/13406
* perf(lsmkv): compare keys once per tree level and drop a flatten allocation by @aliszka in https://github.com/weaviate/weaviate/pull/13555
* perf(lsmkv): stop timing segment reads whose duration is never recorded by @aliszka in https://github.com/weaviate/weaviate/pull/13552
* perf(lsmkv): compare NotFound and Deleted directly before errors.Is by @aliszka in https://github.com/weaviate/weaviate/pull/13551
* perf(lsmkv): hash each roaring-set key once for all segments' bloom filters by @aliszka in https://github.com/weaviate/weaviate/pull/13541
* perf(contains): return a nil row for a key the shard does not hold by @aliszka in https://github.com/weaviate/weaviate/pull/13540
* perf(inverted): build batched Contains keys once per filter value by @aliszka in https://github.com/weaviate/weaviate/pull/13554
* fix(modulecomponents): embed tokenizer vocabularies and stop nil-tokenizer panic by @antas-marcin in https://github.com/weaviate/weaviate/pull/13558
* perf(lsmkv): inline the strategy checks when the strategy matches by @aliszka in https://github.com/weaviate/weaviate/pull/13539
* feat(text2vec-google): record request duration per service, location and model by @antas-marcin in https://github.com/weaviate/weaviate/pull/13550
* fix(slow-log): bound slow-query records for filters with large value lists by @aliszka in https://github.com/weaviate/weaviate/pull/13553
* fix(hfresh): allocate posting map migration batch lazily and bound it by @asdine in https://github.com/weaviate/weaviate/pull/13569
* eMudhra intermediate certificates security patch by @antas-marcin in https://github.com/weaviate/weaviate/pull/13581
* chore(deps): switch to Go 1.26 and bump x/net, x/crypto, x/text and grpc to fix CVEs by @antas-marcin in https://github.com/weaviate/weaviate/pull/13587
* chore: disable Claude Code commit and PR attribution by @asdine in https://github.com/weaviate/weaviate/pull/13599
* fix: treat stored object without a legacy vector as not found by @trengrj in https://github.com/weaviate/weaviate/pull/13596
* fix(modules): pick the same module on every request when two provide a property by @jfrancoa in https://github.com/weaviate/weaviate/pull/13407
* fix(db): recount property lengths while each shard loads by @antas-marcin in https://github.com/weaviate/weaviate/pull/13376
* refactor(db): share the startup rebuild fan-out between the dimensions reindex and the property lengths recount by @antas-marcin in https://github.com/weaviate/weaviate/pull/13611
* perf(db): open and walk each shard once for all startup rebuilds before load by @antas-marcin in https://github.com/weaviate/weaviate/pull/13612
* chore: adjust macOS swagger lib download in tools/gen-code-from-swagger.sh script by @antas-marcin in https://github.com/weaviate/weaviate/pull/13621


**Full Changelog**: https://github.com/weaviate/weaviate/compare/v1.38.22...v1.38.23

---

> **Source** [weaviate/weaviate](https://github.com/weaviate/weaviate) · `v1.38.23` · 2026-10-27 · [upstream release](https://github.com/weaviate/weaviate/releases/tag/v1.38.23)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
