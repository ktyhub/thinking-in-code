---
title: "brpc 1.14.0"
project: "brpc"
repo: "apache/brpc"
tag: "1.14.0"
published: "2025-07-28"
type: "minor"
lang: "en"
summary: "Support generics for MultiDimension APIs (#3026) · Support rpc checksum (#2967) · Support RDMA polling mode (#2920) · Support epoll bthread deal first (#2819)"
---

# brpc 1.14.0

Features:

- Support generics for MultiDimension APIs (#3026), by @chenBright
- Support rpc checksum (#2967), by @yanglimingcn
- Support RDMA polling mode (#2920), by @yanglimingcn
- Support epoll bthread deal first (#2819), by @zhengJade

Bug Fix:

- Bugfix: runtime extend block pool (#2965), by @yanglimingcn
- Bugfix: bthread_worker_usage could exceed bthread_worker_count (#3009), by @chenBright
- Bugfix: SignalTrace mode has memory and deadlock issues (#3019), by @chenBright
- Bugfix: Butex returned to ObjectPool triggers use-after-poison (#3012), by @chenBright
- Bugfix: LatencyRecorder::expose CHECK fails when save_series flag is false (#3022), by @chenBright
- Fix the bug that the grpc protocol is incompatible with authentication(issue:#3001) (#3002), by @Paragrf
- Bugfix: Socket without health check would be abnormally recycled (#3010), by @chenBright
- Fix: Specifying the global namespace for bind and connect (#3007), by @zhoukangsheng
- Fix race condition that causes TimerThread to hang during shutdown (#2986), by @gitccl
- Fix potential invalid memory access in StringSplitter (#2996), by @gitccl
- Fix bthread task tracer deadlock bug (#2988), by @CodeZHXS
- Fix incorrect seq id setting in thrift message begin (#2984), by @chenBright
- Fix UT compilation errors with GCC 13 due to missing <cstdint> includes (#2979), by @XueSongTap
- Fix invalid url of thrift (#2975), by @chenBright
- Fix libunwind linked by default on x86_64 cpu when building via bazel (#2973), by @tongke6

Enhancement:

- Optimize the fallback code for loading libibverbs (#3008), by @zhangqiongyu
- Add redis allocation size limit (#3035), by @wwbmmm
- Opt log function name (#3017), by @chenBright
- Make unit tests runnable on macOS (#3018), by @gitccl
- Add include guard in rwlock.h (#3005), by @xiongjiwei
- Consistent hashing support server tag (#2994), by @egolearner
- Support macro to disable move (#2989), by @chenBright
- Optimize shared_ptr assignment in DoublyBufferedData (#2981), by @gitccl

---

> **Source** [apache/brpc](https://github.com/apache/brpc) · `1.14.0` · 2025-07-28 · [upstream release](https://github.com/apache/brpc/releases/tag/1.14.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
