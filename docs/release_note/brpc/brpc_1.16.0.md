---
title: "brpc 1.16.0"
project: "brpc"
repo: "apache/brpc"
tag: "1.16.0"
published: "2026-01-25"
type: "minor"
lang: "en"
summary: "Apache bRPC 1.16.0 is a feature release that includes significant improvements in compatibility, performance, and functionality."
---

# brpc 1.16.0

Apache bRPC 1.16.0 is a feature release that includes significant improvements in compatibility, performance, and functionality. This release adds support for new architectures, enhances debugging capabilities, improves RDMA support, and fixes several critical bugs.

## Features

- Support protobuf v30+ compatibility (wrap absl::string_view as std::string) by @wasphin (#3187)
- Add RISC-V architecture support by @Dayuxiaoshui (#3125)
- Support tag for selective channel by @altman08 (#3189)
- Enable TLS key logging via SSLKEYLOGFILE environment variable by @koarz (#3173)
- Support more SSL verify modes by @koarz (#3141)
- Add Couchbase support for CRUD operations by @giriraj-singh-couchbase (#3138)
- Support naming bthread to help debug by @ZhengweiZhu (#3158)
- Support dynamic expansion of RDMA block pool by @chenBright (#3155)
- Make bthread stack trace signal number configurable by @ZhengweiZhu (#3124)
- Support shared mbvar by @chenBright (#3129)
- Add pthread CPU affinity support by @wenjiecn (#3122)
- RDMA polling mode enhancement (all messages run in new bthreads) by @yanglimingcn (#3117)
- Support higher performance bvar with babylon counter by @chenBright (#3116)
- Add support for checking all living bthreads by @ZhengweiZhu (#3096)

## Bugfixes

- Fix port parsing validation in str2endpoint by @AnantShukla-Git-Hub (#3193)
- Fix C++23 compilation issue by @liyinsg (#3180)
- Fix SIGSEGV in read_proc_io during static initialization by @jesson1 (#3184)
- Fix SQ overflow bug by @chenBright (#3145)
- Fix gdb_bthread_stack bthread_begin error by @Searion (#3176)
- Fix redundant BeforeAdditionalRefReleased call by @chenBright (#3174)
- Add missed definition of RegisterFlagValidatorOrDie for uint32_t by @kisuke95 (#3171)
- Fix NsheadService::_status null pointer by @chenBright (#3162)
- Fix OpenSSL dynamic library link order by @apocelipes (#3159)
- Fix bvar's bad return value by @songqing (#3151)
- Fix naming service unittest failure by @wwbmmm (#3153)
- Remove recursion in redis command parser by @howzi (#3136)
- Fix RDMA unit test by @chenBright (#3146)
- Fix deadlock in SetName (use SetNameSimple instead) by @chenBright (#3127)
- Fix SignalSyncs storage (only store failed ones) by @chenBright (#3128)
- Fix TaskTracer deadlocks due to ABA problem by @chenBright (#3115)

## Enhancements

- Fix undefined behaviors in butil library by @BusyJay (#3135)

## Contributors

We would like to thank all contributors who made this release possible:

@altman08, @AnantShukla-Git-Hub, @apocelipes, @BusyJay, @chenBright, @Dayuxiaoshui, @giriraj-singh-couchbase, @howzi, @jesson1, @kisuke95, @koarz, @liyinsg, @Searion, @serverglen, @songqing, @wasphin, @wenjiecn, @wwbmmm, @yanglimingcn, @ZhengweiZhu

---

> **Source** [apache/brpc](https://github.com/apache/brpc) · `1.16.0` · 2026-01-25 · [upstream release](https://github.com/apache/brpc/releases/tag/1.16.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
