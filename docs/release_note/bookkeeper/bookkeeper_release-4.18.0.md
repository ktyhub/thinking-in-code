---
title: "bookkeeper release-4.18.0"
project: "bookkeeper"
repo: "apache/bookkeeper"
tag: "release-4.18.0"
published: "2026-06-10"
type: "release"
lang: "en"
summary: "Release 4.18.0 is a major feature release. It introduces structured logging across the whole code base (BP-69), migrates the wire protocol serialization to LightProto and the native I/O library to Rust, and raises the…"
---

# bookkeeper release-4.18.0

Release 4.18.0 is a major feature release. It introduces structured logging across the whole
code base (BP-69), migrates the wire protocol serialization to LightProto and the native I/O
library to Rust, and raises the minimum required Java version to 17. It also includes many
improvements, bug fixes and dependency/CVE updates.

Apache BookKeeper users are encouraged to upgrade to 4.18.0. Please review the
breaking changes and known issues below before upgrading.

## Highlights

* **Structured logging (BP-69)** — All BookKeeper logging has been converted from SLF4J
  format strings to `slog`, a structured logging API where each event carries typed key/value
  attributes (e.g. `ledgerId`, `entryId`). Logger context is propagated through client
  operations, so all events related to the same ledger are automatically tagged.
  Attributes are rendered by log4j2 in both plain-text and JSON output, with an example
  configuration for OpenTelemetry-compatible JSON logs.
  [PR #4751](https://github.com/apache/bookkeeper/pull/4751),
  [#4754](https://github.com/apache/bookkeeper/pull/4754),
  [#4755](https://github.com/apache/bookkeeper/pull/4755),
  [#4756](https://github.com/apache/bookkeeper/pull/4756),
  [#4757](https://github.com/apache/bookkeeper/pull/4757),
  [#4758](https://github.com/apache/bookkeeper/pull/4758),
  [#4765](https://github.com/apache/bookkeeper/pull/4765),
  [#4766](https://github.com/apache/bookkeeper/pull/4766),
  [#4767](https://github.com/apache/bookkeeper/pull/4767),
  [#4770](https://github.com/apache/bookkeeper/pull/4770)
* **LightProto serialization** — The BookKeeper wire protocol, metadata formats and stream
  storage protos have been migrated from protobuf-java to LightProto, which parses and
  serializes directly on Netty buffers with no intermediate allocations, reducing GC pressure
  on the hot path. [PR #4779](https://github.com/apache/bookkeeper/pull/4779),
  [#4780](https://github.com/apache/bookkeeper/pull/4780),
  [#4781](https://github.com/apache/bookkeeper/pull/4781),
  [#4783](https://github.com/apache/bookkeeper/pull/4783)
* **Native I/O library rewritten in Rust** — The `native-io` library used for direct I/O on
  the bookie has been migrated from C to Rust. [PR #4738](https://github.com/apache/bookkeeper/pull/4738)
* **Java 17 baseline** — Java 17 or later is now required to build and run BookKeeper.
  [PR #4446](https://github.com/apache/bookkeeper/pull/4446)
* **Bookie decommission cleans up the cookie (BP-68)** — The decommission admin API now
  deletes the bookie cookie from the metadata store, so a decommissioned bookie id can be
  reused without manual cleanup. [PR #4500](https://github.com/apache/bookkeeper/pull/4500),
  [#4592](https://github.com/apache/bookkeeper/pull/4592)
* **ZooKeeper read throttling during re-replication (BP-66)** — Re-replication can now
  throttle its ZooKeeper reads, protecting the metadata store from read storms when many
  ledgers are being recovered. [PR #4258](https://github.com/apache/bookkeeper/pull/4258)
* **Batch reads of unconfirmed entries (BP-62)** — `batchReadUnconfirmedAsync` is now
  exposed on `ReadHandle`. [PR #4739](https://github.com/apache/bookkeeper/pull/4739)

## Breaking Changes

* Java 17+ is required for building and running BookKeeper (previously Java 11)
  [PR #4446](https://github.com/apache/bookkeeper/pull/4446)
* The default value of `readOnlyModeOnAnyDiskFullEnabled` changed to `true`: a bookie now
  transitions to read-only as soon as any ledger disk is full, instead of only when all disks
  are full. Set it back to `false` to restore the previous behavior.
  [PR #4520](https://github.com/apache/bookkeeper/pull/4520)
* The `bookkeeper-slogger` module has been removed, superseded by the slog structured
  logging API (BP-69) [PR #4764](https://github.com/apache/bookkeeper/pull/4764)
* Removed the deprecated, misspelled method `setAllocatorPoolingConcurrenncy` — use
  `setAllocatorPoolingConcurrency` instead [PR #4431](https://github.com/apache/bookkeeper/pull/4431)
* Removed the deprecated class `MathUtils` [PR #4274](https://github.com/apache/bookkeeper/pull/4274)

## Known Issues

* [PR #4730](https://github.com/apache/bookkeeper/pull/4730) (read thread blocking fix in
  `sendResponseAndWait`), included in this release, was found to potentially cause a deadlock
  on the bookie read path. It has been reverted in
  [PR #4830](https://github.com/apache/bookkeeper/pull/4830), which will be part of 4.18.1.

## Features

* Support TCP keep-alive configuration for the bookie server [PR #4762](https://github.com/apache/bookkeeper/pull/4762)
* New client API to check whether the BookKeeper client is connected to the metadata service [PR #4342](https://github.com/apache/bookkeeper/pull/4342)
* Migrate from Yahoo DataSketches to Apache DataSketches 7.0.1 (KLL) [PR #4774](https://github.com/apache/bookkeeper/pull/4774)
* Allow configuring log4j2 `AsyncLogger` [PR #4269](https://github.com/apache/bookkeeper/pull/4269)

## Improvements

#### Bookie

* Add `total_entry_log_space_bytes` metric [PR #4507](https://github.com/apache/bookkeeper/pull/4507)
* Enrich GC metrics to better analyze GC behavior and the time spent in each phase [PR #4384](https://github.com/apache/bookkeeper/pull/4384)
* Add metric for RocksDB `getLastEntryInLedger` to help identify bottlenecks [PR #4529](https://github.com/apache/bookkeeper/pull/4529)
* Set ThreadFactory for the Executor in EntryLoggerAllocator [PR #4562](https://github.com/apache/bookkeeper/pull/4562)
* Add temp dir property for the native library [PR #4533](https://github.com/apache/bookkeeper/pull/4533)
* Apply the `WRITE_BUFFER_WATER_MARK` setting to child channels in the bookie Netty server [PR #4337](https://github.com/apache/bookkeeper/pull/4337)
* Skip wasted optimistic cache insertion in SingleDirectoryDbLedgerStorage when the write lock is held [PR #4306](https://github.com/apache/bookkeeper/pull/4306)
* Log only overridden configuration settings at BookieServer startup [PR #4768](https://github.com/apache/bookkeeper/pull/4768)
* Remove unused journal time tracking [PR #4006](https://github.com/apache/bookkeeper/pull/4006)

#### Client

* Eliminate unnecessary synchronization on `LedgerHandle.getLength()` [PR #4516](https://github.com/apache/bookkeeper/pull/4516)
* Optimize bounded batch reads by predicting the entry count [PR #4741](https://github.com/apache/bookkeeper/pull/4741)
* Improve host address resolution logic for bookie id [PR #4588](https://github.com/apache/bookkeeper/pull/4588)
* Rename the client high-priority thread pool [PR #4496](https://github.com/apache/bookkeeper/pull/4496)

#### Tools

* `readledger` command reads all entries from a bookie when first and last entry ids are not provided [PR #4692](https://github.com/apache/bookkeeper/pull/4692)
* Optimize ListActiveLedgersCommand [PR #4602](https://github.com/apache/bookkeeper/pull/4602)
* Improve bookie CLI usage information for the `--help` option [PR #4241](https://github.com/apache/bookkeeper/pull/4241)

## Bug Fixes

#### Bookie

* Fix bookie startup failure caused by `IOException: Recovery log <id> is missing` [PR #4740](https://github.com/apache/bookkeeper/pull/4740)
* Prevent double flush due to a race condition in SingleDirectoryDbLedgerStorage [PR #4305](https://github.com/apache/bookkeeper/pull/4305)
* Fix RocksDB configuration path handling on Windows [PR #4407](https://github.com/apache/bookkeeper/pull/4407)
* Fix endless loop in BufferedChannel read [PR #4506](https://github.com/apache/bookkeeper/pull/4506)
* Fix ArrayIndexOutOfBoundsException in ConcurrentLongHashMap [PR #4771](https://github.com/apache/bookkeeper/pull/4771)
* Add workaround for ZOOKEEPER-3825 (numeric IPs and DNS names resolving to multiple numeric IPs) with Java 17 support [PR #4719](https://github.com/apache/bookkeeper/pull/4719)
* Fix async log appender swallowing error logs when the bookie fails to start [PR #4475](https://github.com/apache/bookkeeper/pull/4475)
* Fix SingleThreadExecutor to reject new tasks while a `drainTo` is in progress and the queue is empty [PR #4488](https://github.com/apache/bookkeeper/pull/4488)

#### Client

* Fix batch reads hanging after digest mismatch retries are ignored [PR #4789](https://github.com/apache/bookkeeper/pull/4789)
* Fix WriteSet use-after-recycle in sequence reads [PR #4788](https://github.com/apache/bookkeeper/pull/4788)
* Fix NPE in `PendingAddOp.maybeTimeout()` when clientCtx is null after recycling [PR #4760](https://github.com/apache/bookkeeper/pull/4760)
* Fix race condition NPE in V3 response handling during timeout check [PR #4737](https://github.com/apache/bookkeeper/pull/4737)
* Fix bookie WatchTask getting stuck [PR #4481](https://github.com/apache/bookkeeper/pull/4481)
* Fix sanity check in `asyncBatchReadEntries` [PR #4579](https://github.com/apache/bookkeeper/pull/4579)
* Add strict hostname resolution and loopback check for the advertised address [PR #4595](https://github.com/apache/bookkeeper/pull/4595)
* Use the instance slog logger in `LedgerHandle.batchReadUnconfirmedAsync` [PR #4782](https://github.com/apache/bookkeeper/pull/4782)
* Change log level to debug for parameter checks in batch read [PR #4485](https://github.com/apache/bookkeeper/pull/4485)

#### Others

* Fix IllegalThreadStateException in ComponentStarter shutdown hook [PR #4733](https://github.com/apache/bookkeeper/pull/4733)
* Fix potential jetcd-core shading problem [PR #4526](https://github.com/apache/bookkeeper/pull/4526)
* Fix potential class conflict during the jetcd-core-shaded shading process [PR #4532](https://github.com/apache/bookkeeper/pull/4532)
* Fix wrong configuration key in `getHttpServerTrustStorePassword` [PR #4301](https://github.com/apache/bookkeeper/pull/4301)
* Fix exception message formatting in RocksdbKVStore [PR #4448](https://github.com/apache/bookkeeper/pull/4448)
* Fix permission denied error in the Docker image [PR #4464](https://github.com/apache/bookkeeper/pull/4464)
* Fix options for the sanity test command being ignored [PR #4691](https://github.com/apache/bookkeeper/pull/4691)
* Fix duplicated ZooKeeper call in DistributedLog `getLogSegmentNames` [PR #4050](https://github.com/apache/bookkeeper/pull/4050)
* Fix the pid check in `bookkeeper-daemon.sh` start/stop [PR #3113](https://github.com/apache/bookkeeper/pull/3113)

## Build, CI and Tests

* Introduce `/bkbot` command to control CI workflow runs via PR comments [PR #4673](https://github.com/apache/bookkeeper/pull/4673), [#4674](https://github.com/apache/bookkeeper/pull/4674), [#4746](https://github.com/apache/bookkeeper/pull/4746)
* Upgrade website to Docusaurus 3, built with Node 24 [PR #4723](https://github.com/apache/bookkeeper/pull/4723)
* Add Java 21 (LTS) compatibility check and Java 21/Windows daily builds [PR #4350](https://github.com/apache/bookkeeper/pull/4350), [#4292](https://github.com/apache/bookkeeper/pull/4292)
* Add typo check to CI and fix existing typos [PR #4375](https://github.com/apache/bookkeeper/pull/4375)
* Improve CI caching for old release downloads and Maven artifacts, improve error logs [PR #4722](https://github.com/apache/bookkeeper/pull/4722)
* Remove OWASP dependency check from CI [PR #4717](https://github.com/apache/bookkeeper/pull/4717)
* Add javadoc support for pom-only shaded modules [PR #4787](https://github.com/apache/bookkeeper/pull/4787)

## Dependency updates

* Upgrade Netty to 4.2.14.Final, addressing CVEs [PR #4744](https://github.com/apache/bookkeeper/pull/4744), [#4775](https://github.com/apache/bookkeeper/pull/4775), [#4799](https://github.com/apache/bookkeeper/pull/4799)
* Upgrade Vert.x to 4.5.25 to address CVE-2026-6860 [PR #4790](https://github.com/apache/bookkeeper/pull/4790)
* Upgrade Jetty from 9.4.57 to 12.1.7 [PR #4710](https://github.com/apache/bookkeeper/pull/4710)
* Upgrade RocksDB to 9.9.3 [PR #4580](https://github.com/apache/bookkeeper/pull/4580)
* Upgrade ZooKeeper from 3.9.3 to 3.9.5 [PR #4667](https://github.com/apache/bookkeeper/pull/4667), [#4721](https://github.com/apache/bookkeeper/pull/4721)
* Upgrade protobuf and gRPC to latest versions; scope gRPC dependencies via grpc-bom [PR #4716](https://github.com/apache/bookkeeper/pull/4716), [#4784](https://github.com/apache/bookkeeper/pull/4784)
* Upgrade OpenTelemetry libraries to 1.61.0 / 2.27.0 [PR #4773](https://github.com/apache/bookkeeper/pull/4773)
* Upgrade jctools to 4.0.6 (jctools-core-jdk11) [PR #4656](https://github.com/apache/bookkeeper/pull/4656), [#4776](https://github.com/apache/bookkeeper/pull/4776)
* Upgrade Lombok to 1.18.32 for Java 22 support [PR #4267](https://github.com/apache/bookkeeper/pull/4267)
* Upgrade BouncyCastle from 1.75 to 1.78, bc-fips from 1.0.2.4 to 1.0.2.5 [PR #4295](https://github.com/apache/bookkeeper/pull/4295), [#4366](https://github.com/apache/bookkeeper/pull/4366)
* Upgrade commons-io from 2.7 to 2.17.0 [PR #4509](https://github.com/apache/bookkeeper/pull/4509)
* Use slf4j-bom and log4j-bom in dependencyManagement [PR #4346](https://github.com/apache/bookkeeper/pull/4346)
* Remove unused commons-lang dependency [PR #4654](https://github.com/apache/bookkeeper/pull/4654)
* Upgrade os-maven-plugin to support RISC-V 64 [PR #4515](https://github.com/apache/bookkeeper/pull/4515)

## Details

Full list of changes: https://github.com/apache/bookkeeper/pulls?q=is%3Apr+milestone%3A4.18.0+is%3Aclosed

---

> **Source** [apache/bookkeeper](https://github.com/apache/bookkeeper) · `release-4.18.0` · 2026-06-10 · [upstream release](https://github.com/apache/bookkeeper/releases/tag/release-4.18.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
