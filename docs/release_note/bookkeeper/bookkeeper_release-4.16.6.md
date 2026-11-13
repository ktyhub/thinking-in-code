---
title: "bookkeeper release-4.16.6"
project: "bookkeeper"
repo: "apache/bookkeeper"
tag: "release-4.16.6"
published: "2024-06-26"
type: "release"
lang: "en"
summary: "Release 4.16.6 includes multiple bug fixes and few dependency updates."
---

# bookkeeper release-4.16.6

Release 4.16.6 includes multiple bug fixes and few dependency updates.

Apache BookKeeper users are encouraged to upgrade to 4.16.6 if you are using 4.16.x.
The technical details of this release are summarized below.

### Highlights

#### Bugs

* Fix TimedRunnable log NPE [PR #4425](https://github.com/apache/bookkeeper/pull/4425)
* Fix Auditor ignoring bookies shut down before Auditor start [PR #4419](https://github.com/apache/bookkeeper/pull/4419)
* Fix lost prometheus metric in OrderedExecutor [PR #4374](https://github.com/apache/bookkeeper/pull/4374)
* Fix: resource leak when JournalChannel is not fully initialized [PR #4340](https://github.com/apache/bookkeeper/pull/4340)
* Fix: bookie http endpoint info always return 0.0.0.0 [PR #4325](https://github.com/apache/bookkeeper/pull/4325)
* Fix disk weight ensemble infinite loop bug [PR #4324](https://github.com/apache/bookkeeper/pull/4324)
* Fix guava shade error in distributedlog [PR #4319](https://github.com/apache/bookkeeper/pull/4319)
* Fix ThreadRegistry#register behavior to ensure correct Prom metrics [PR #4300](https://github.com/apache/bookkeeper/pull/4300)
* Fix: reference counting (retain/release) in PerChannelBookieClient [PR #4293](https://github.com/apache/bookkeeper/pull/4293)
* Fix ByteBuf release/retain in PerChannelBookClient [PR #4289](https://github.com/apache/bookkeeper/pull/4289)
* Tests: miss test log in prometheus-metrics-provider module [PR #4279](https://github.com/apache/bookkeeper/pull/4279)
* Fix ArrayIndexOutOfBoundsException caused by optimistic lock [PR #4066](https://github.com/apache/bookkeeper/pull/4066)
* Prevent bookie shutdown due to rest api when bookie prohibits readOnlyMode [PR #3972](https://github.com/apache/bookkeeper/pull/3972)
* Fix wrong implementation for percentile in bookkeeper-benchmark [PR #3864](https://github.com/apache/bookkeeper/pull/3864)

#### Improvements

* Adjust Log Level for LedgerFencedException in WriteEntryProcessor [PR #4327](https://github.com/apache/bookkeeper/pull/4327)
* Improve: change scheduleAtFixedRate to scheduleWithFixedDelay in GarbageCollectorThread [PR #4296](https://github.com/apache/bookkeeper/pull/4296)
* Remove unused code from ByteBufVisitor [PR #4383](https://github.com/apache/bookkeeper/pull/4383)
* Use vertx blockingHandlers to run Bookkeeper http handlers which could be blocking [PR #4266](https://github.com/apache/bookkeeper/pull/4266)

#### Dependency updates

* Bump jetcd from 0.5.0 to 0.7.7 [PR #3849](https://github.com/apache/bookkeeper/pull/3849)
* Bump netty from 4.1.94.Final to 4.1.108.Final to address CVE list [PR #4426](https://github.com/apache/bookkeeper/pull/4426)
* Bump jackson from 2.13.4.20221013 to 2.17.1 to address CVE list [PR #4345](https://github.com/apache/bookkeeper/pull/4345)
* Upgrade vertx-core to 4.5.7 to address CVE-2024-1300 [PR #4265](https://github.com/apache/bookkeeper/pull/4265)

#### Details

https://github.com/apache/bookkeeper/pulls?q=is%3Apr+label%3Arelease%2F4.16.6+is%3Amerged+

---

> **Source** [apache/bookkeeper](https://github.com/apache/bookkeeper) · `release-4.16.6` · 2024-06-26 · [upstream release](https://github.com/apache/bookkeeper/releases/tag/release-4.16.6)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
