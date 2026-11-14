---
title: "brpc 1.11.0"
project: "brpc"
repo: "apache/brpc"
tag: "1.11.0"
published: "2024-10-27"
type: "minor"
lang: "en"
summary: "Support pthread mutex deadlock detection (#2692 #2727) · Support bzlmod (#2670) · Support multiple RPCs parsing in wireshark dissector for baidu_std protocol (#2710), @xulei25"
---

# brpc 1.11.0

#### Feature:
- Support pthread mutex deadlock detection (#2692 #2727) by @chenBright
- Support bzlmod (#2670) by @oathdruid
- Support multiple RPCs parsing in wireshark dissector for baidu_std protocol (#2710) by @AnDiXL, @xulei25
- Support jemalloc profiler and stats print (#2737) by @GreateCode
- Support rpc protobuf message factory interface (#2718) by @chenBright
- Support arena rpc pb message factory (#2751) by @chenBright
- Support backup request policy (#2734) by @chenBright
- Support semaphore and rwlock for bthread (#2752 #2773) by @chenBright
- Support batch create and accept stream (#2754) by @jenrryyou
- Support timedlock of fast/hook pthread and bthread::Mutex (#2760) by @chenBright

#### Bugfix:
- Fix malloc deadlock caused by contention profiler (#2684) by @chenBright
- Fix rdma complie error (#2707 #2720) by @chenBright
- Fix baidu master service leak (#2717) by @chenBright
- Fix tcp connect interrupt (#2664) by @chenBright
- Fix a memleak in butil::ObjectPoolAllocator (#2725) by @live4thee
- Fix compilation errors of SerializedResponse (#2722) by @chenBright
- Fix gflags bthread_concurrency_by_tag validate error #2730 by @MJY-HUST
- Fix example/rdma_performance compilation error (#2741) by @ivanallen
- Fix mpsc queue cur enqueue node to atomic exhange (#2739) by @yanglimingcn
- Fix missing extern of tls_task_group (#2759) by @chenBright
- Fix unittest on cmake (#2771) by @zhooooong and @zhong
- Fix Socket check failed with invalid fd of Stream (#2776) by @chenBright
- Wrap the class name in single quotes (#2732) by @ehds and @Dongsheng He

#### Enhancement:
- Add openSSL_ROOT_DIR check on macos (#2716) by @lqxhub
- Active Spinning and queue old bthread at the head for bthread mutex (#2749) by @chenBright
- Make periodic_task.h a self-contained header file (#2758) by @chuandew
- Support noncopyable sync objects (#2766) by @chenBright
- Use ManualConstructor(AlignedMemory) instead of std::aligned_storage which has been deprecated in C++23 (#2719) by @chenBright
- Send unauthorized response to client when authentication fails (#2744) by @chenBright
- Optimize keytablelist implementation (#2768) by @MJY-HUST
- Add a method option to disable check eovercrowded on server side (#2774) @superhail, @lianxuechao
- Only support batch butex wake with the same tag (#2778) by @yanglimingcn
- Add check for bthread_setconcurrency_by_tag (#2784) by @yanglimingcn
- Add required headers to fix unittest compilation (#2787) by @wasphin
- Switch boost dependency in bzlmod to bcr (#2789) by @oathdruid

#### Other:
- Doc improvements @chenBright, @GreateCode

---

> **Source** [apache/brpc](https://github.com/apache/brpc) · `1.11.0` · 2024-10-27 · [upstream release](https://github.com/apache/brpc/releases/tag/1.11.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
