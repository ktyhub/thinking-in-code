---
title: "brpc 1.12.0"
project: "brpc"
repo: "apache/brpc"
tag: "1.12.0"
published: "2025-01-15"
type: "minor"
lang: "en"
summary: "Support task tracer (#2851) · Add NonreflectableMessage and support Protobuf v5 (#2782 #2823 #2830) · Method level option to ignore server eovercrowded (#2820) · Add support for bthread cpu usage (#2852)"
---

# brpc 1.12.0

#### Feature:
- Support task tracer (#2851) by @chenBright
- Add NonreflectableMessage and support Protobuf v5 (#2782 #2823 #2830) by @wasphin
- Method level option to ignore server eovercrowded (#2820) by @superhail
- Add support for bthread cpu usage (#2852) by @icexin

#### Bugfix:
- Fix memory leak of ArenaRpcPBMessageFactory (#2798) by @chenBright
- Fix memory leak of keytable list (#2835) by @MJY-HUST
- Fix universal reference (#2862) by @chenBright
- Instruct LeakSanitizer to ignore designated memory leaks of Server and Singleton (#2858) by @chenBright
- Add missing #include <cstdint> (#2800) by @Menci
- Set tags workers unlimitedly (#2801) by @zhengJade
- Fix unused private field warning of FastPthreadMutex (#2839) by @chenBright
- Fix build failure with -std=c++17 option (#2844) by @tongke6
- Remove redundant const of ThreadLocal (#2855) by @chenBright
- Fix universal reference (#2862) by @chenBright

#### Enhancement:
- Support set_max_stats_count of MultiDimension (#2813) by @chenBright
- Support backtrace log (#2811) by @chenBright
- Support variable arguments for ResourcePool and ObjectPool (#2859) by @chenBright
- Support success limit of ParallelChannel (#2842) by @chenBright
- Support user specific CMAKE_MODULE_PATH (#2806) by @chenBright
- Change the default value of the bthread_tag in class ServerOptions to BTHREAD_TAG_DEFAULT (#2824) by @MJY-HUST
- Small FlatMap optimization with default initialization (#2620) by @chenBright

#### Other:
- Doc and other improvements @chenBright, @mapleFU, @Zzhiter, @wasphin, @ssk01, @wwbmmm

**Full Changelog**: https://github.com/apache/brpc/compare/1.11.0...1.12.0

Thanks to all contributors for the 1.12.0 version!

---

> **Source** [apache/brpc](https://github.com/apache/brpc) · `1.12.0` · 2025-01-15 · [upstream release](https://github.com/apache/brpc/releases/tag/1.12.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
