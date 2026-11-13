---
title: "brpc 1.10.0"
project: "brpc"
repo: "apache/brpc"
tag: "1.10.0"
published: "2024-07-17"
type: "minor"
lang: "en"
summary: "(#2625) by @chenBright"
---

# brpc 1.10.0

#### Feature:
- Support connect on socket create (#2574) by @chenBright
- Support more meta for ServerNode (#2603) by @chenBright
- Support proxy and generic call of baidu protocol (#2629) by @chenBright
- Support thread local object iteration (#2632) by @chenBright
- Support half open state in circuit breaker (#2634) @jiangyt-git

#### Bugfix:
- Fix IOBuf profiler rate (#2601) by @chenBright
- Fix incorrect core file found in run_tests.sh (#2614) by @chenBright
- Fix FlatMap assign operator bug (#2622) by @chenBright
- Fix GetProgramName not contains absolute path from cmdline (#2644) by @ehds
- Fix invalid headers of multiple cookie and set-cookie (#2577) by @chenBright
- Fix max concurrency of thrift protocol and nshead protocol (#2613) by @chenBright
- fixbug: there is a ',' before 'quantile=' when labels is empty (#2659) @renzhong
- fix h2 rpc_dump mem leak bug (#2661) by @GreateCode 
- socket: fix potential double close (#2663) by @BusyJay
- Fix uninitialized local side of Socket (#2672) by @chenBright
- Fix bug: switch between stream_rpc and baidu_std (#2678) by @howarle
- Fix multi FlatMap scale and size (#2669) by @chenBright

#### Enhancement:
- add check for tag range (#2607) by @yanglimingcn
- bthread set concurrency by tag (#2628) by @yanglimingcn
- Support SCOPE_EXIT macro (#2643) by @chenBright
- Opt performance of async log (#2602) by @chenBright
- Restrict BRPC_VALIDATE_GFLAG to global scope and namespace scope only
(#2625) by @chenBright
- Fix comparison warning in http2_rpc_protocol.cpp (#2626) by @imdouyu
- Add virtual destructors to MongoServiceAdaptor and SpanFilter (#2651) by @yozhao
- EventDispatcher supports various IO types (#2560) by @chenBright
- Support FastPthreadMutex contention profiler && expose FastPthreadMutex to user (#2589) by @chenBright
- Reject http request without host (#2600) by @chenBright
- Support remove old rpcz directory before open (#2610) by @yanglimingcn
- Add latency scale factor (#2655) by @superhail
- Add debug log for Socket health check (#2673) by @chenBright
- Use butil::ThreadLocal to store keytable (#2645) by @MJY-HUST

#### Others:
- Fix ci (#2611) by @chenBright
- Update protobuf version in doc (#2618) by @chenBright

---

> **Source** [apache/brpc](https://github.com/apache/brpc) · `1.10.0` · 2024-07-17 · [upstream release](https://github.com/apache/brpc/releases/tag/1.10.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
