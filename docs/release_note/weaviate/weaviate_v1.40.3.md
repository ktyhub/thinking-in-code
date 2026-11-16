---
title: "weaviate v1.40.3"
project: "weaviate"
repo: "weaviate/weaviate"
tag: "v1.40.3"
version: "v1.40.3"
published: "2026-10-28"
type: "patch"
lang: "en"
summary: "fix(backups): add missing basic auth to remaining handlers · fix(telemetry): time out pushes so a hung consumer cannot block shutdown · fix(inverted): skip unchanged property length writes and fsync the file on close"
---

# weaviate v1.40.3

## Breaking Changes
none

## New Features
none

## Fixes
* fix(backups): add missing basic auth to remaining handlers by @tsmith023 in https://github.com/weaviate/weaviate/pull/13350
* fix(telemetry): time out pushes so a hung consumer cannot block shutdown by @aliszka in https://github.com/weaviate/weaviate/pull/13389
* fix(inverted): skip unchanged property length writes and fsync the file on close by @aliszka in https://github.com/weaviate/weaviate/pull/13400
* fix(shutdown): stop a collection's cycles before shutting down its shards by @aliszka in https://github.com/weaviate/weaviate/pull/13412
* test(text2vec-contextionary): skip GraphQL nearestNeighbors test case by @antas-marcin in https://github.com/weaviate/weaviate/pull/13531
* fix(db): batch delete never removed objects from geo index queues by @abdelr in https://github.com/weaviate/weaviate/pull/12889
* Skip uncomressed HNSW vector cache if compressor is present by @dirkkul in https://github.com/weaviate/weaviate/pull/13508
* fix(hybrid): run rerank and generate once for a nearText sub-search by @jfrancoa in https://github.com/weaviate/weaviate/pull/13404
* Guard the ACORN frontier buffer against overloaded vertices by @rlmanrique in https://github.com/weaviate/weaviate/pull/13533
* ci(gcloud): use preinstalled gcloud and download latest only as fallback by @antas-marcin in https://github.com/weaviate/weaviate/pull/13535
* fix(schema): reject module setting changes for modules with migrate properties by @antas-marcin in https://github.com/weaviate/weaviate/pull/13530
* compactv2: discard pre-v1.34 snapshots on load instead of failing by @asdine in https://github.com/weaviate/weaviate/pull/13545
* fix(hybrid): fetch up to the end of the page in both hybrid legs by @jfrancoa in https://github.com/weaviate/weaviate/pull/13405
* fix(google-modules): escape and validate projectId and model in Google request URLs by @antas-marcin in https://github.com/weaviate/weaviate/pull/13532
* Add time to ready, vector index restore and cache prefill metrics (minimal set) by @rlmanrique in https://github.com/weaviate/weaviate/pull/13474
* fix(aggregator): filtered meta count included deleted objects after restart by @abdelr in https://github.com/weaviate/weaviate/pull/12890
* Wait for the class version before auto-schema adds a property by @dirkkul in https://github.com/weaviate/weaviate/pull/13548
* fix(cluster-MT): keep tenant work off the serial RAFT apply path by @moogacs in https://github.com/weaviate/weaviate/pull/13490
* fix(cluster): stop reads waiting on replicas that cannot serve by @moogacs in https://github.com/weaviate/weaviate/pull/13491
* Stop memtable tree recursion from growing the heap profile by @dirkkul in https://github.com/weaviate/weaviate/pull/13522
* fix(modules): run rerank before the other additional properties by @jfrancoa in https://github.com/weaviate/weaviate/pull/13406
* Keep the vector_index_tombstones gauge equal to the tombstone count by @dirkkul in https://github.com/weaviate/weaviate/pull/13549
* Retry user creation on any 422 in the Python namespace test setup by @dirkkul in https://github.com/weaviate/weaviate/pull/13556
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
* eMudhra intermediate certificates security patch by @antas-marcin in https://github.com/weaviate/weaviate/pull/13579
* Update go to v1.26.10 and for 1.39 by @dirkkul in https://github.com/weaviate/weaviate/pull/13575
* eMudhra intermediate certificates security patch by @antas-marcin in https://github.com/weaviate/weaviate/pull/13580
* eMudhra intermediate certificates security patch by @antas-marcin in https://github.com/weaviate/weaviate/pull/13581
* chore(deps): switch to Go 1.26 and bump x/net, x/crypto, x/text and grpc to fix CVEs by @antas-marcin in https://github.com/weaviate/weaviate/pull/13587
* fix(add-class): enforce the collection cap at the raft apply path by @tsmith023 in https://github.com/weaviate/weaviate/pull/13590
* chore: disable Claude Code commit and PR attribution by @asdine in https://github.com/weaviate/weaviate/pull/13599
* fix: treat stored object without a legacy vector as not found by @trengrj in https://github.com/weaviate/weaviate/pull/13596
* fix(modules): pick the same module on every request when two provide a property by @jfrancoa in https://github.com/weaviate/weaviate/pull/13407
* Allow a minute for new DB user keys in namespace acceptance tests by @dirkkul in https://github.com/weaviate/weaviate/pull/13613
* ci(test): run license-key acceptance tests in a separate job skipped for forks and Dependabot by @antas-marcin in https://github.com/weaviate/weaviate/pull/13610
* hnsw/compact: pin the garbage-node-ID allocation in the raw commit log reader by @rlmanrique in https://github.com/weaviate/weaviate/pull/13341
* test(lazy-load): stop periodic flushes from counting warmup seed objects by @antas-marcin in https://github.com/weaviate/weaviate/pull/13615
* fix(db): recount property lengths while each shard loads by @antas-marcin in https://github.com/weaviate/weaviate/pull/13376
* refactor(db): share the startup rebuild fan-out between the dimensions reindex and the property lengths recount by @antas-marcin in https://github.com/weaviate/weaviate/pull/13611
* perf(db): open and walk each shard once for all startup rebuilds before load by @antas-marcin in https://github.com/weaviate/weaviate/pull/13612
* chore: adjust macOS swagger lib download in tools/gen-code-from-swagger.sh script by @antas-marcin in https://github.com/weaviate/weaviate/pull/13621
* Whitelist grpc health check reads when operational mode is ReadOnly by @tsmith023 in https://github.com/weaviate/weaviate/pull/13620
* test(authz): wait for pending authz logs before measuring batch refs by @antas-marcin in https://github.com/weaviate/weaviate/pull/13629
* security: bump github.com/go-jose/go-jose/v4 to v4.1.6 by @antas-marcin in https://github.com/weaviate/weaviate/pull/13632


**Full Changelog**: https://github.com/weaviate/weaviate/compare/v1.40.2...v1.40.3

---

> **Source** [weaviate/weaviate](https://github.com/weaviate/weaviate) · `v1.40.3` · 2026-10-28 · [upstream release](https://github.com/weaviate/weaviate/releases/tag/v1.40.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
