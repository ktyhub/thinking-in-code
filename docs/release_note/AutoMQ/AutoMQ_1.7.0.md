---
title: "AutoMQ 1.7.0"
project: "AutoMQ"
repo: "AutoMQ/automq"
tag: "1.7.0"
published: "2026-06-04"
type: "minor"
lang: "en"
summary: "Full Changelog: https://github.com/AutoMQ/automq/compare/1.6.5...1.7.0"
---

# AutoMQ 1.7.0

## What's Changed
* build: align opensource dependency versions by @Gezi-lzq in https://github.com/AutoMQ/automq/pull/3275
* feat(devkit): add namespace support for multi-instance isolation (#3295) by @Gezi-lzq in https://github.com/AutoMQ/automq/pull/3298
* build: avoid forcing SnakeYAML for swagger doc generation by @Gezi-lzq in https://github.com/AutoMQ/automq/pull/3308
* fix: replace sender-okhttp with sender-grpc-managed-channel for Strimzi compatibility (#3268) by @Gezi-lzq in https://github.com/AutoMQ/automq/pull/3309
* fix(s3stream): fix double-release race in LogCache.tryMerge by @superhx in https://github.com/AutoMQ/automq/pull/3307
* fix(s3): fix concurrent write exception for oci (#3310) by @allenzhu in https://github.com/AutoMQ/automq/pull/3314
* feat(kv): add namespace support for KV store by @superhx in https://github.com/AutoMQ/automq/pull/3306
* fix(namespace_kv): update response valid version 0-1 by @superhx in https://github.com/AutoMQ/automq/pull/3317
* fix: add AutomqUpdateGroup request/response to RequestConvertToJson by @1sonofqiu in https://github.com/AutoMQ/automq/pull/3319
* fix: force jaxb-api to 2.3.1 to avoid duplicate versions in release packaging by @Gezi-lzq in https://github.com/AutoMQ/automq/pull/3322
* feat: add cluster events framework with protobuf-based event publishing by @superhx in https://github.com/AutoMQ/automq/pull/3312
* refactor: encapsulate KVImage/KVDelta map access to enforce KVKey type safety by @superhx in https://github.com/AutoMQ/automq/pull/3324
* refactor: move flush scheduler into ClusterEventPublisher with ClusterEventEmitter interface by @superhx in https://github.com/AutoMQ/automq/pull/3326
* feat(maven): publish maven snapshot package (#3328) by @allenzhu in https://github.com/AutoMQ/automq/pull/3330
* fix: exclude transitive kafka-clients from cloudevents-kafka by @superhx in https://github.com/AutoMQ/automq/pull/3334
* feat(core): add fetch listener callbacks and async inter-broker requests by @Gezi-lzq in https://github.com/AutoMQ/automq/pull/3248
* feat: add activate/deactivate lifecycle hooks to QuorumControllerExtension by @superhx in https://github.com/AutoMQ/automq/pull/3337
* fix: prevent data loss caused by DataBlockIndex.endOffsetDelta int overflow during compaction by @superhx in https://github.com/AutoMQ/automq/pull/3336
* fix: buffer over-allocation in AutoBalancerMetrics.bodySize() (#3323) by @Gezi-lzq in https://github.com/AutoMQ/automq/pull/3340
* feat(routerchannel): support api for querying RouterChannelEpoch (#3331) by @allenzhu in https://github.com/AutoMQ/automq/pull/3342
* fix: handle empty read-committed elastic log fetch (#3346) by @1sonofqiu in https://github.com/AutoMQ/automq/pull/3348
* feat(zerozone): add async partition snapshot long polling by @superhx in https://github.com/AutoMQ/automq/pull/3344
* fix(s3stream): avoid aliasing LogCache merge sources (#3349) by @superhx in https://github.com/AutoMQ/automq/pull/3352
* docs(devkit): document broker log location (#3355) by @superhx in https://github.com/AutoMQ/automq/pull/3357
* fix: harden inter-broker async sender validation by @Gezi-lzq in https://github.com/AutoMQ/automq/pull/3359
* feat: expose broker resource stats for autoscaling by @superhx in https://github.com/AutoMQ/automq/pull/3367
* fix(zerozone): add response size validation in RouterOut.handleRouter by @superhx in https://github.com/AutoMQ/automq/pull/3371
* fix: pass table topic schema registry client config by @Gezi-lzq in https://github.com/AutoMQ/automq/pull/3375
* fix(s3stream): reduce CPU overhead in AsyncNetworkBandwidthLimiter when traffic hits limit  by @superhx in https://github.com/AutoMQ/automq/pull/3377
* fix: dedupe S3 metadata after snapshot replay (#3370) by @Gezi-lzq in https://github.com/AutoMQ/automq/pull/3378
* fix: stabilize enterprise E2E dependencies and quota test by @Gezi-lzq in https://github.com/AutoMQ/automq/pull/3382
* fix: e2e test discovery issues for 1.7 by @Gezi-lzq in https://github.com/AutoMQ/automq/pull/3384
* fix: retry delete objects per key by @superhx in https://github.com/AutoMQ/automq/pull/3392
* fix: isolate 1.7 MirrorMaker KRaft cluster IDs by @Gezi-lzq in https://github.com/AutoMQ/automq/pull/3390
* fix: stabilize 1.7 nightly E2E reporting by @Gezi-lzq in https://github.com/AutoMQ/automq/pull/3389
* test: stabilize 1.7 connect e2e by @Gezi-lzq in https://github.com/AutoMQ/automq/pull/3396
* test: run 1.7 compatibility e2e on x86 by @Gezi-lzq in https://github.com/AutoMQ/automq/pull/3397
* test: backport static consumer fencing fix by @Gezi-lzq in https://github.com/AutoMQ/automq/pull/3400
* test: fix connect sink coordinator matrix by @Gezi-lzq in https://github.com/AutoMQ/automq/pull/3401
* test: align streams system test dev version by @Gezi-lzq in https://github.com/AutoMQ/automq/pull/3402
* feat(release): release 1.7.0 by @Gezi-lzq in https://github.com/AutoMQ/automq/pull/3404


**Full Changelog**: https://github.com/AutoMQ/automq/compare/1.6.5...1.7.0

---

> **Source** [AutoMQ/automq](https://github.com/AutoMQ/automq) · `1.7.0` · 2026-06-04 · [upstream release](https://github.com/AutoMQ/automq/releases/tag/1.7.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
