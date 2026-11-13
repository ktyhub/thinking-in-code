---
title: "bookkeeper release-4.16.4"
project: "bookkeeper"
repo: "apache/bookkeeper"
tag: "release-4.16.4"
published: "2024-01-29"
type: "release"
lang: "en"
summary: "Release 4.16.4 includes multiple bug fixes and improvements, also we have a few dependency updates."
---

# bookkeeper release-4.16.4

Release 4.16.4 includes multiple bug fixes and improvements, also we have a few dependency updates.

Apache BookKeeper users are encouraged to upgrade to 4.16.4 if you are using 4.16.x.
The technical details of this release are summarized below.

### Highlights

#### Bugs
* Fix calculate checkSum when using Java9IntHash [PR #4140](https://github.com/apache/bookkeeper/pull/4140)
* Fix the autorecovery failed replicate by add entry fenced error [PR #4163](https://github.com/apache/bookkeeper/pull/4163)
* Fixing memory leak error when using DirectEntryLogger [PR #4135](https://github.com/apache/bookkeeper/pull/4135)
* Fix bug of negative JournalQueueSize [PR #4077](https://github.com/apache/bookkeeper/pull/4077)
* Fix NoSuchElementException when rereplicate empty ledgers [PR #4039](https://github.com/apache/bookkeeper/pull/4039)
* Change the method getUnderreplicatedFragments to the package private [PR #4174](https://github.com/apache/bookkeeper/pull/4174)
* Fix auditor elector executor block problem. [PR #4165](https://github.com/apache/bookkeeper/pull/4165)
* Fix auditor thread leak problem. [PR #4162](https://github.com/apache/bookkeeper/pull/4162)
* Use Flaky flag to skip testBookieServerZKSessionExpireBehaviour test [PR #4144](https://github.com/apache/bookkeeper/pull/4144)
* Add ledgersCount.incrementAndGet in setExplicitLac function [PR #4138](https://github.com/apache/bookkeeper/pull/4138)
* Fix no known bookies after reset racks for all BKs [PR #4128](https://github.com/apache/bookkeeper/pull/4128)
* Fix a slow gc thread shutdown when compacting [PR #4127](https://github.com/apache/bookkeeper/pull/4127)
* Remove the unused logs in the CleanupLedgerManager.recordPromise [PR #4121](https://github.com/apache/bookkeeper/pull/4121)
* Fix Flaky-test: HandleFailuresTest.testHandleFailureBookieNotInWriteSet [PR #4110](https://github.com/apache/bookkeeper/pull/4110)
* Ignore the empty `perRegionPlacement` when RegionAwareEnsemblePlacementPolicy#newEnsemble [PR #4106](https://github.com/apache/bookkeeper/pull/4106)
* Fix LedgerHandle `ensembleChangeCounter` not used. [PR #4103](https://github.com/apache/bookkeeper/pull/4103)
* Tune the TestReplicationWorker test. [PR #4093](https://github.com/apache/bookkeeper/pull/4093)
* Make AuditorBookieTest#waitForNewAuditor stronger. [PR #4078](https://github.com/apache/bookkeeper/pull/4078)
* Print compaction progress [PR #4071](https://github.com/apache/bookkeeper/pull/4071)
* Fix readEntry parameter order [PR #4059](https://github.com/apache/bookkeeper/pull/4059)
* Skip sync the RocksDB when no changes [PR #3904](https://github.com/apache/bookkeeper/pull/3904)
* Try to use jdk api to create hardlink when rename file when compaction. [PR #3876](https://github.com/apache/bookkeeper/pull/3876)

#### Dependency updates
* Upgrade Zookeeper to 3.8.3 to address CVE-2023-44981 [PR #4112](https://github.com/apache/bookkeeper/pull/4112)
* Update Jetty dependency [PR #4141](https://github.com/apache/bookkeeper/pull/4141)
* Upgrade bc-fips to 1.0.2.4 to fix CVE-2022-45146 [PR #3915](https://github.com/apache/bookkeeper/pull/3915)

#### Details

https://github.com/apache/bookkeeper/pulls?q=is%3Apr+label%3Arelease%2F4.16.4+is%3Amerged+

---

> **Source** [apache/bookkeeper](https://github.com/apache/bookkeeper) · `release-4.16.4` · 2024-01-29 · [upstream release](https://github.com/apache/bookkeeper/releases/tag/release-4.16.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
