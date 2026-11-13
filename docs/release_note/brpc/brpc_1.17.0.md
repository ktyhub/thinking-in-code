---
title: "brpc 1.17.0"
project: "brpc"
repo: "apache/brpc"
tag: "1.17.0"
published: "2026-05-28"
type: "minor"
lang: "en"
summary: "Apache bRPC 1.17.0 is a feature release centered around performance optimization, highlighted by the introduction of SingleIOBuf for efficient FlatBuffers serialization/deserialization. This release also expands…"
---

# brpc 1.17.0

Apache bRPC 1.17.0 is a feature release centered around performance optimization, highlighted by the introduction of SingleIOBuf for efficient FlatBuffers serialization/deserialization. This release also expands protocol and transport capabilities with native Redis Cluster channel support, a new transport layer for communication protocol extensions, and RDMA ECE support. Additional improvements include rate-limited backup request policies, error rate threshold for punishment attenuation, and bthread priority queue support. The release further delivers critical bugfixes for use-after-free issues, ARM memory visibility, and Protobuf compatibility, alongside multiple stability and fuzz testing enhancements.

## Features:
- Support rdma ece @randomkang #3255
- Support building with Protobuf v34+ @cho-m #3241
- Add tcp transport event dispatcher unsched flag & fix RDMA event dispatcher unsched flag @MalikHou #3238
- Add rate-limited backup request policy @feng-y #3229
- Add native Redis Cluster channel support @wayslog #3222
- Add error rate threshold for punishment attenuation @feng-y #3219
- Support custom modification of sub controllers @chenBright #3213
- Add transport to support more communication protocol extensions @zchuango #3199
- Support change ownship for SelectiveChannel @altman08 #3198
- Support wait with predicate in bthread's ConditionVariable @MJY-HUST #3195
- Add flag for bthread priority queue, the default is false @chenBright #3078
- Add SingleIOBuf for efficient flatbuffers serialization/deserialization @Q1ngbo #3062

## Bugfixes:
- Fix ASan stack range registration for main task @chenBright #3298
- Fix isolate backup responses and add race regreission test @altman08 #3294
- Fix protobuf version (< 3.4.0) compatibility for ByteSizeLong() and SpaceUsedLong() @chenBright #3292
- Fix to avoid SIGSEGV in read_proc_status during static initialization @gamezhoulei #3282
- Fix time source mismatch in client RPC path @hjwsm1989 #3283
- Fix bvar sampler interval after switch to cpuwide_time_ns @hjwsm1989 #3278
- Fix butil 'sucess' -> 'success' typos in process_util.h comments @SAY-5 #3272
- Fix rdma resource @chenBright #3269
- Fix use after free issue of EventDispatcher LatencyRecorder @chenBright #3267
- Fix add .previous after GNU-stack note for aarch64 @condy0919 #3266
- Fix heap-use-after-free in ~AgentCombiner @chenBright #3291
- Fix DoRead() returns error errno @chenBright #3248
- Fix attachment being overwritten when backuprequest is triggered @altman08 #3235
- Fix CI installation errors @chenBright #3233
- Fix remove references to non-existent tracked_objects.h in platform_thread_freebsd.cc @tuaris #3223
- Fix stream closed before response during batch stream creation @jenrryyou #3214
- Fix protobuf version check for descriptor->extension_range @yanglimingcn #3210
- Fix some issues with transport @chenBright #3206
- Fix build error caused by CMAKE_CXX_FLAGS @chenBright #3204
- Fix span lifecycle with smart pointers to prevent use-after-free in async RPC callbacks @lh2debug #3140
- Fix extend block pool runtime @yanglimingcn #2965

## Enhancements:
- Set up default rulesets for default and release branches @asf-gitbox-commits #3299
- Use compare_exchange_weak in steal loop for potential performance improvement @xin-ok #3285
- Remove unused comp channel @chenBright #3279
- Add acquire fence in bthread_join for ARM memory visibility @guoliushui #3276
- Use monotonic time instead of wall time @chenBright #3268
- Add progress output to config_brpc.sh @darion-yaphet #3262
- Fix fuzz harness blockers @DavidKorczynski #3257
- Extend fuzz harness suite and fix false positive @DavidKorczynski #3254
- Optimize IOBuf Profiler @chenBright #3251
- Skip return true if the end of the stream is reached @x1wan #3242
- Explicitly link utf8_validity for Protobuf v22+ @wasphin #3230
- Prevent indefinite defer-close by checking last_active_time @jenrryyou #3216
- Make batch create stream SendFeedback thread safe @jenrryyou #3215

## Others:
- Docs improvements @darion-yaphet

---

> **Source** [apache/brpc](https://github.com/apache/brpc) · `1.17.0` · 2026-05-28 · [upstream release](https://github.com/apache/brpc/releases/tag/1.17.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
