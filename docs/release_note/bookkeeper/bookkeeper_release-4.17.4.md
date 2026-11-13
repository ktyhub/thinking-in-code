---
title: "bookkeeper release-4.17.4"
project: "bookkeeper"
repo: "apache/bookkeeper"
tag: "release-4.17.4"
published: "2026-07-28"
type: "release"
lang: "en"
summary: "Release 4.17.4 includes multiple bug fixes and few dependency updates."
---

# bookkeeper release-4.17.4

## 4.17.4

Release 4.17.4 includes multiple bug fixes and few dependency updates.

Apache BookKeeper users are encouraged to upgrade to 4.17.4 if you are using 4.17.x.
The technical details of this release are summarized below.

#### Bugs

* Revert "Fix read thread blocking in sendResponseAndWait causing READ_ENTRY_REQUEST p99 latency spike (#4730)" [PR #4830](https://github.com/apache/bookkeeper/pull/4830)
* [Fix] Replace Java `record` with nested class in ConcurrentLongHashMap (branch-4.17) [PR #4778](https://github.com/apache/bookkeeper/pull/4778)
* [Fix] ConcurrentLongHashMap throw ArrayIndexOutOfBoundsException [PR #4771](https://github.com/apache/bookkeeper/pull/4771)
* Fix NPE in PendingAddOp.maybeTimeout() when clientCtx is null after recycling [PR #4760](https://github.com/apache/bookkeeper/pull/4760)
* Fix race condition NPE in V3 response handling during timeout check [PR #4737](https://github.com/apache/bookkeeper/pull/4737)
* [FIX] Fix IllegalThreadStateException in ComponentStarter shutdown hook [PR #4733](https://github.com/apache/bookkeeper/pull/4733)
* Issue 2422: Fix SyncLedgerIterator.hasNext() failing to iterate across ZK ledger ranges [PR #4731](https://github.com/apache/bookkeeper/pull/4731)
* Fix read thread blocking in sendResponseAndWait causing READ_ENTRY_REQUEST p99 latency spike [PR #4730](https://github.com/apache/bookkeeper/pull/4730)
* Count the connection failure as the condition of quarantine [PR #4727](https://github.com/apache/bookkeeper/pull/4727)
* [client] fix writeLac memory leak and thread safety issue [PR #4713](https://github.com/apache/bookkeeper/pull/4713)
* Fix the stream client python package name [PR #4703](https://github.com/apache/bookkeeper/pull/4703)
* [fix]Fix entry loss due to incorrect lock of LedgerHandle [PR #4701](https://github.com/apache/bookkeeper/pull/4701)
* [fix] Ledger Replication worker should throttle on verrification reads [PR #4678](https://github.com/apache/bookkeeper/pull/4678)
* FlakyTest:  BookieAutoRecoveryTest.testEmptyLedgerLosesQuorumEventually [PR #4672](https://github.com/apache/bookkeeper/pull/4672)

#### Improvements

* [improve] Update readledger command to read all the entries from a bookie when first entry and last entry ids are not provided [PR #4692](https://github.com/apache/bookkeeper/pull/4692)
* test: migrate client module api tests to junit 5 [PR #4377](https://github.com/apache/bookkeeper/pull/4377)
* test: migrate client module bookie tests to junit 5 [PR #4359](https://github.com/apache/bookkeeper/pull/4359)

#### Dependency updates

* Upgrade vertx to 4.5.27 to address CVE-2026-6860 [PR #4792](https://github.com/apache/bookkeeper/pull/4792)
* Upgrade thrift to 0.23.0 to address CVE-2026-43869 [PR #4791](https://github.com/apache/bookkeeper/pull/4791)
* build(deps): bump org.apache.commons:commons-lang3 from 3.17.0 to 3.20.0 [PR #4725](https://github.com/apache/bookkeeper/pull/4725)
* build(deps): bump io.vertx:vertx-core from 4.5.11 to 4.5.24 [PR #4702](https://github.com/apache/bookkeeper/pull/4702)

#### Details

https://github.com/apache/bookkeeper/pulls?q=is%3Apr+label%3Arelease%2F4.17.4+is%3Amerged+

---

> **Source** [apache/bookkeeper](https://github.com/apache/bookkeeper) · `release-4.17.4` · 2026-07-28 · [upstream release](https://github.com/apache/bookkeeper/releases/tag/release-4.17.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
