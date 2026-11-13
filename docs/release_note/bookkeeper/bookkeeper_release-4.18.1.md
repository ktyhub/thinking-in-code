---
title: "bookkeeper release-4.18.1"
project: "bookkeeper"
repo: "apache/bookkeeper"
tag: "release-4.18.1"
published: "2026-09-16"
type: "release"
lang: "en"
summary: "Release 4.18.1 includes a few new client APIs, several performance improvements, bug fixes and dependency updates."
---

# bookkeeper release-4.18.1

## 4.18.1

Release 4.18.1 includes a few new client APIs, several performance improvements, bug fixes and dependency updates.

Apache BookKeeper users are encouraged to upgrade to 4.18.1 if you are using 4.18.x.
The technical details of this release are summarized below.

### Features

* Pin a ledger's callbacks to a caller-chosen worker thread via `withOrderingKey` [PR #4881](https://github.com/apache/bookkeeper/pull/4881)
* Add `OpenBuilder.withKeepUpdateMetadata` and `DeleteBuilder.withLoggerContext` to the builder API [PR #4834](https://github.com/apache/bookkeeper/pull/4834)

### Improvements

* Add `SingleThreadExecutor.executeOrRun` and issue reads inline from the ledger's own thread [PR #4883](https://github.com/apache/bookkeeper/pull/4883)
* Avoid per-checksum boxing in Java9IntHash by using MethodHandle.invokeExact [PR #4876](https://github.com/apache/bookkeeper/pull/4876)
* Use batch-draining queues in SingleThreadExecutor [PR #4836](https://github.com/apache/bookkeeper/pull/4836)
* Skip journal flush-trace loop when debug logging is disabled [PR #4835](https://github.com/apache/bookkeeper/pull/4835)
* Write journal entry length prefix and payload in a single BufferedChannel write [PR #4833](https://github.com/apache/bookkeeper/pull/4833)
* Use ThreadLocalRandom for thread selection in OrderedExecutor [PR #4832](https://github.com/apache/bookkeeper/pull/4832)
* Add spin-wait hint to BlockingMpscQueue producer-side busy loops [PR #4831](https://github.com/apache/bookkeeper/pull/4831)

### Bugs

* Revert "Fix read thread blocking in sendResponseAndWait causing READ_ENTRY_REQUEST p99 latency spike (#4730)" [PR #4830](https://github.com/apache/bookkeeper/pull/4830)
* Prevent thread leak when BookKeeper client constructor fails [PR #4798](https://github.com/apache/bookkeeper/pull/4798)

### Dependency updates

* Bump Jetty to 12.1.10 and fix binary license metadata [PR #4871](https://github.com/apache/bookkeeper/pull/4871)
* Bump org.apache.thrift:libthrift from 0.23.0 to 0.24.0 [PR #4874](https://github.com/apache/bookkeeper/pull/4874)
* Bump at.yawk.lz4:lz4-java from 1.10.2 to 1.11.1 [PR #4869](https://github.com/apache/bookkeeper/pull/4869)
* Bump bytes from 1.5.0 to 1.11.1 in native-io Rust module [PR #4747](https://github.com/apache/bookkeeper/pull/4747)

---

> **Source** [apache/bookkeeper](https://github.com/apache/bookkeeper) · `release-4.18.1` · 2026-09-16 · [upstream release](https://github.com/apache/bookkeeper/releases/tag/release-4.18.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
