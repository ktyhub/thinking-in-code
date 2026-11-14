---
title: "brpc 1.13.0"
project: "brpc"
repo: "apache/brpc"
tag: "1.13.0"
published: "2025-05-18"
type: "minor"
lang: "en"
summary: "Support ProtoJson formatted http body (#2921) · support dynamic update method concurrency (#2923) · Support various payload of baidu-std: json, proto-json and proto-text (#2946) · Support AddressSanitizer (#2890)"
---

# brpc 1.13.0

### Feature:
- Support ProtoJson formatted http body (#2921) by @chenBright
- support dynamic update method concurrency (#2923) by @yanglimingcn
- Support various payload of baidu-std: json, proto-json and proto-text (#2946) by @chenBright
- Support AddressSanitizer (#2890) by @chenBright
- keep session info in RedisConnContext (#2902) by @lintanghui

### Bugfix:
- Fix memory leak issue #2871 (#2872) by @w-gc
- Fix build on macOS with Apple M1 chip (#2846) by @tongke6
- Fix description of VersionedRefWithId (#2895) by @chenBright
- Fix prometheus metric format (#2825) (#2899) by @ZhengweiZhu
- Fix ParkingLot::signal does not modify _pending_signal (#2916) by @chenBright
- Fix link error if with glog (#2914) by @ivanallen
- Fix double free messages in baidu-std (#2924) by @chenBright
- Fix some unstable UTs (#2928) by @chenBright
- Fix asan switch fiber with error stack info (#2931) by @chenBright
- Fix compiler optimize thread local variable access (#2918) by @zcfh
- Fix class data for protobuf v27+ (#2941) by @wasphin
- use BAIDU_VOLATILE_THREAD_LOCAL to avoid compiler optimization (#2934) by @BiteTheDDDDt
- Fix thread safety of AgentCombiner (#2949) by @chenBright
- Fix batch create stream and SetHostSocket thread safety (#2938) by @jenrryyou
- Fix thread safety of Wrapper (#2952) by @chenBright
- Fix compile errors of json2pb (#2956) by @chenBright
- Fix HttpResponseSenderAsDone Run with NULL messages (#2958) by @chenBright
- Make WeightedRandomizedLoadBalancer traverse server list (#2953) by @chenBright
- Remove incorrect log in RemoveServersInBatch (#2932) by @chenBright
- Make bthread tag defaut right (#2948) by @yanglimingcn

### Enhancement:
- Support segment large brpc stream messages automatically (#2889) by @jenrryyou
- Support bthread tracer with bazel (#2905) by @chenBright
- iobuf support reserve_aligned (#2942) by @yanglimingcn
- Support a more safe read function and variadic functions of DoublyBufferedData (#2898) by @chenBright
- Update CI from Ubuntu 20.04 to 22.04 (#2909) by @chenBright
- Reduce futex usage in ParkingLot (#2907) by @JimChengLin
- Record latency of EventDispatcher (#2897) by @chenBright
- Optimize server latency (#2886) by @chenBright
- Optimize zero copy of http body (#2915) by @chenBright
- Nit enhance code (#2911) by @SamYuan1990
- Update ubuntu-20.04 to ubuntu-22.04 in CI (#2909) by @chenBright

### Other:
- Enable GitHub Discussions (#2955) by @tisonkun
- Documentation and minor improvements by @chenBright, @tongke6, @cdjingit, @GreateCode, @zhangqiongyu, @beesflower and others

**Full Changelog**: https://github.com/apache/brpc/compare/1.12.1...1.13.0

Thanks to all contributors for the 1.13.0 version!

---

> **Source** [apache/brpc](https://github.com/apache/brpc) · `1.13.0` · 2025-05-18 · [upstream release](https://github.com/apache/brpc/releases/tag/1.13.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
