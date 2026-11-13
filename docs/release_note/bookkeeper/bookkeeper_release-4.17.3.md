---
title: "bookkeeper release-4.17.3"
project: "bookkeeper"
repo: "apache/bookkeeper"
tag: "release-4.17.3"
published: "2026-01-20"
type: "release"
lang: "en"
summary: "Release 4.17.3 includes multiple bug fixes and few dependency updates."
---

# bookkeeper release-4.17.3

## 4.17.3

Release 4.17.3 includes multiple bug fixes and few dependency updates.

Apache BookKeeper users are encouraged to upgrade to 4.17.3 if you are using 4.17.x.
The technical details of this release are summarized below.

#### Bugs

* Fix: Garbage collection stuck on corrupt entry log file [PR #4544](https://github.com/apache/bookkeeper/pull/4544)
* [fix] Failed read entries after multiple decommissioning [PR #4613](https://github.com/apache/bookkeeper/pull/4613)
* [fix]BK stays at read_only state even if the disk is empty [PR #4640](https://github.com/apache/bookkeeper/pull/4640)
* Bring back the old public method name which removed from #4640  [PR #4682](https://github.com/apache/bookkeeper/pull/4682)
* [fix]compile error of the file native_io_jni.c for the env jdk11 & windows [PR #4665](https://github.com/apache/bookkeeper/pull/4665)
* Only stop Gc for the fill disk for DbLedgerStorage [PR #4661](https://github.com/apache/bookkeeper/pull/4661)
* [fix]Wrong error code(-102) when opening a deleted ledger [PR #4657](https://github.com/apache/bookkeeper/pull/4657)
* Log all the error in the GarbageCollectorThread [PR #4649](https://github.com/apache/bookkeeper/pull/4649)

#### Improvements

* support `equalsAndHashcode` for BookieServerInfo [PR #4686](https://github.com/apache/bookkeeper/pull/4686)
* Supports configuring TCP Keepalive related parameters in Bookie Client. [PR #4683](https://github.com/apache/bookkeeper/pull/4683)
* add rate limit for zk read rate in gc. [PR #4645](https://github.com/apache/bookkeeper/pull/4645)

#### Dependency updates

* Upgrade netty to 4.1.130 Final [PR #4699](https://github.com/apache/bookkeeper/pull/4699)
* [security] Replace net.jpountz.lz4:lz4 with at.yawk.lz4:lz4-java [PR #4696](https://github.com/apache/bookkeeper/pull/4696)
* Upgrade OpenTelemetry to 1.56.0, Otel instrumentation to 2.21.0 and Otel semconv to 1.37.0 [PR #4690](https://github.com/apache/bookkeeper/pull/4690)
* Exclude commons-collections from dependencies [PR #4689](https://github.com/apache/bookkeeper/pull/4689)
* Remove commons-configuration2 and commons-beanutils from top level dependencies [PR #4648](https://github.com/apache/bookkeeper/pull/4648)


**Full Changelog**: https://github.com/apache/bookkeeper/compare/release-4.17.2...release-4.17.3

---

> **Source** [apache/bookkeeper](https://github.com/apache/bookkeeper) · `release-4.17.3` · 2026-01-20 · [upstream release](https://github.com/apache/bookkeeper/releases/tag/release-4.17.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
