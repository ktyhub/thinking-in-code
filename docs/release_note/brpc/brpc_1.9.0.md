---
title: "brpc 1.9.0"
project: "brpc"
repo: "apache/brpc"
tag: "1.9.0"
published: "2024-04-26"
type: "minor"
lang: "en"
summary: "Feature:"
---

# brpc 1.9.0

Feature:
- Support gc for ListOfABAFreeId (#2479) by @stdpain
- Support timed connect for both bthread and pthread (#2524) by @chenBright
- Support bthread_once and bthread singleton (#2520) by @chenBright
- Support span for new bthread (#2519) by @yanglimingcn
- Support Protobuf 22 (#2546) by @wasphin
- Support compatible with cmake < 3.7 by @wasphin
- Support bthread primitive cross different worker pools (#2551) by @yanglimingcn
- Support on_failed callback for streaming rpc (#2565) by @chenBright

Bugfix:
- Fix gflags bthread_concurrency_by_tag validate failed (#2543) by @yanbinyang
- Fix test/iobuf mismatch deallocation by @BusyJay
- Fix MPSCQueue memory not released with DefaultAllocator (#2553) by @legionxiong
- Fix using butex in return keytable (#2558) by @MJY-HUST
- Fix cancel callback may be called twice (#2557) by @chenBright
- Fix random value of CachedReader at first time (#2556) by @chenBright
- Fix ELEMENTS_PER_BLOCK may be incorrect (#2562) by @shanhe72101
- Fix compile with protobuf 22-25. (#2576) by @ketor
- Fix rpc_channel_connection_count by @yyweii

Enhancement:
- Support ignore eovercrowded for streaming control frame by @chenBright
- Support bthread id for log (#2570) by @chenBright
- Support IOBuf Profiler (#2497) by @chenBright
- Support shutdown write and notify for success write (#2547)  by @chenBright
- Add UT of ScopeGuard (#2569) by @chenBright
- Get gcc version by script to support cross-compile (#2567) by @wasphin
- Use sync log for crash fatal log by @chenBright
- Install gdb for linux ci (#2587) by @chenBright
- Do not link abseil interface targets (#2592) by @wasphin

Other:
- Update documents and comments by @omahs, @Divyansh200102, @YinZheng-Sun

---

> **Source** [apache/brpc](https://github.com/apache/brpc) · `1.9.0` · 2024-04-26 · [upstream release](https://github.com/apache/brpc/releases/tag/1.9.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
