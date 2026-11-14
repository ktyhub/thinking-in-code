---
title: "brpc 1.15.0"
project: "brpc"
repo: "apache/brpc"
tag: "1.15.0"
published: "2025-10-27"
type: "minor"
lang: "en"
summary: "Fix socket versioned_ref can not recover && remove hc_started flag (#3060) · Fix symbol conflict with glog by marking InstallSymbolizeOpenObjectFileCallback as BAIDU_WEAK (#3064) and @ruru"
---

# brpc 1.15.0

Bug Fix:
- Fix socket _versioned_ref can not recover && remove _hc_started flag (#3060) by @howzi
- Fix symbol conflict with glog by marking InstallSymbolizeOpenObjectFileCallback as BAIDU_WEAK (#3064) by @wangrufeng and @ruru
- Bugfix: _combiner is not initialized in IntRecorder constructor (#3066) by @chenBright
- Fix infinite loop in flatmap resizing when bucket count is a power of two (#3071) by @gitccl
- Bugfix: MultiDimension::set_max_stats_count should be public (#3074) by @chenBright
- Bugfix: Signal Trace mode may send SIGURG to wrong thread (#3039) by @CodeZHXS
- Fix macos ci (#3080) by @chenBright
- fix: fix bthread_id_unlock failed in aarch64 cpu(#3084) by @zhoukangsheng
- Fix macos ci compatibility with CMake < 3.5 (#3093) by @chenBright
- bthread: fix simd memory align issue (#3092) by @icexin
- Bugfix: WeightedRandomizedLoadBalancer returns 0 without server (#3108) by @chenBright
- bazel: fix with_bthread_tracer config setting (#3111) by @icexin

Enhancement:
- add declare of brpc::rdma::GlobalRdmaInitializeOrDie without define BRPC_WITH_RDMA(#3047) by @yanglimingcn
- Support custom ParkingLot number (#3033) by @chenBright
- Expose the received_us of RPC to users (#3073) by @liupengs
- Refactor: Use static_cast for safer downcasting in brpc::Span (#3075) by @zhangqiongyu and @xulei25
- Add flag for bthread priority queue, the default is false (#3078) by @chenBright
- Add flag for parking lot no signal when no waiter, the default is false (#3079) by @chenBright
- Use int64_t instead of google::protobuf::int64 (#3081) by @chenBright
- rdma rumtime extend block restriction and rdma polling mode process message in new bthread (#3076) by @yanglimingcn
- bazel: add config setting for NO_PTHREAD_MUTEX_HOOK (#3090) by @icexin
- Remove BIO for SSL (#3105) by @jiangrujie
- Add pb2json depth limit (#3099) by @wwbmmm
- Limit the extra options of jemalloc profiler (#3101) by @chenBright
- Add flag for brpc timer buckets count (#3112) by @yanglimingcn

---

> **Source** [apache/brpc](https://github.com/apache/brpc) · `1.15.0` · 2025-10-27 · [upstream release](https://github.com/apache/brpc/releases/tag/1.15.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
