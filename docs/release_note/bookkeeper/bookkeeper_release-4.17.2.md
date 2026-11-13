---
title: "bookkeeper release-4.17.2"
project: "bookkeeper"
repo: "apache/bookkeeper"
tag: "release-4.17.2"
published: "2025-07-05"
type: "release"
lang: "en"
summary: "Release 4.17.2 includes multiple bug fixes and few dependency updates."
---

# bookkeeper release-4.17.2

Release 4.17.2 includes multiple bug fixes and few dependency updates.

Apache BookKeeper users are encouraged to upgrade to 4.17.2 if you are using 4.17.x.
The technical details of this release are summarized below.

### Highlights

#### Bugs

* Fix a NPE bug after refactor recycler of BookieClient [PR #4610](https://github.com/apache/bookkeeper/pull/4610)
* Fix Memory Leak In Netty Recycler of Bookie Client [PR #4609](https://github.com/apache/bookkeeper/pull/4609)
* Fix the data loss issue that caused by the wrong entry log header [PR #4607](https://github.com/apache/bookkeeper/pull/4607)
* Fix the coredump that occurs when calling KeyValueStorageRocksDB.count after rocksdb has been closed [PR #4581](https://github.com/apache/bookkeeper/pull/4581)
* Fix and improve locating RocksDB config files [PR #4560](https://github.com/apache/bookkeeper/pull/4560)
* [fix] Write stuck due to pending add callback by multiple threads [PR #4557](https://github.com/apache/bookkeeper/pull/4557)
* Fix SST files not being cleaned up in the locations folder [PR #4555](https://github.com/apache/bookkeeper/pull/4555)
* Fix tune-runner-vm action to run correctly on `ubuntu-24.04` image [PR #4536](https://github.com/apache/bookkeeper/pull/4536)
* [cli] Fix: recover command doesn't accept rate limit parameter [PR #4535](https://github.com/apache/bookkeeper/pull/4535)
* fix pendingDeletedLedgers do not remove ledger error [PR #4525](https://github.com/apache/bookkeeper/pull/4525)
* Fix region aware placement policy disk weight dose not update. [PR #4522](https://github.com/apache/bookkeeper/pull/4522)
* Fix check read failed entry memory leak issue. [PR #4513](https://github.com/apache/bookkeeper/pull/4513)
* [fix] remove in address2Region while bookie left to get correct rack info [PR #4504](https://github.com/apache/bookkeeper/pull/4504)
* fix: install netcat-openbsd instead of netcat in test image build [PR #4476](https://github.com/apache/bookkeeper/pull/4476)
* [fix][ci] Fix OWASP Dependency Check download by using NVD API key [PR #4473](https://github.com/apache/bookkeeper/pull/4473)
* Fix ReadOnlyLedgerHandle leak issue when checkAllLedgers. [PR #4468](https://github.com/apache/bookkeeper/pull/4468)
* fix[rocksdb]: fix error rocksdb default config for CFOptions [PR #4466](https://github.com/apache/bookkeeper/pull/4466)
* [fix] Fix data lost after when writing ledger and deleting legder execute concurrency [PR #4462](https://github.com/apache/bookkeeper/pull/4462)
* [BugFix] Fix to prevent resource leaks in 3 classes  [PR #4449](https://github.com/apache/bookkeeper/pull/4449)
* Correct RackawareEnsemblePlacementPolicyImpl defaultRack when the bookie is not available. [PR #4439](https://github.com/apache/bookkeeper/pull/4439)
* Fix the completionObjects leak problem. [PR #4285](https://github.com/apache/bookkeeper/pull/4285)
* Issue 2161: set metrics endpoint content-type [PR #4208](https://github.com/apache/bookkeeper/pull/4208)

#### Improvements

* Adjust DNS cache expiration in tests to reduce test timeout failures [PR #4586](https://github.com/apache/bookkeeper/pull/4586)
* Change the new ensemble log to info level [PR #4566](https://github.com/apache/bookkeeper/pull/4566)
* Add documentation to bk_server.conf about RocksDB config [PR #4561](https://github.com/apache/bookkeeper/pull/4561)
* Reduce metadataLock contention in LedgerHandle [PR #4549](https://github.com/apache/bookkeeper/pull/4549)
* [improve] when rackaware failed to choose a bookie, print out the list of ensemble. [PR #4482](https://github.com/apache/bookkeeper/pull/4482)
* Ensure that formatVersion is specified for all RocksDB databases [PR #4559](https://github.com/apache/bookkeeper/pull/4559)
* Set default format_version to 5 for RocksDB databases [PR #4480](https://github.com/apache/bookkeeper/pull/4480)
* [improve] Optimize reorderReadSequence to Check WriteSet [PR #4478](https://github.com/apache/bookkeeper/pull/4478)
* Update Release Script Instructions and Python Publishing Scripts [PR #4458](https://github.com/apache/bookkeeper/pull/4458)
* Enable ZooKeeper client to establish connection in read-only mode [PR #4244](https://github.com/apache/bookkeeper/pull/4244)
* Allocator support exitOnOutOfMemory config. [PR #3984](https://github.com/apache/bookkeeper/pull/3984)

#### Dependency updates

* Upgrade commons-beanutils to 1.11.0 to address CVE-2025-48734 [PR #4608](https://github.com/apache/bookkeeper/pull/4608)
* Migrate deprecated commons-configuration 1.x to commons-configuration 2.x [PR #4604](https://github.com/apache/bookkeeper/pull/4604)
* Upgrade Jetty to 9.4.57.v20241219 to mitigate CVE-2024-6763 [PR #4600](https://github.com/apache/bookkeeper/pull/4600)
* Upgrade Netty to 4.1.121.Final [PR #4597](https://github.com/apache/bookkeeper/pull/4597)
* Upgrade to grpc 1.72.0 [PR #4591](https://github.com/apache/bookkeeper/pull/4591)
* Upgrade OpenTelemetry version and align versions using BOMs [PR #4589](https://github.com/apache/bookkeeper/pull/4589)
* Upgrade Netty to 4.1.119, tcnative to 2.0.70 and io_uring to 0.0.26 [PR #4584](https://github.com/apache/bookkeeper/pull/4584)
* Upgrade Apache Commons libraries to compatible versions [PR #4582](https://github.com/apache/bookkeeper/pull/4582)
* Bump vertx.version from 4.5.7 to 4.5.11 to address CVE-2024-8391 [PR #4545](https://github.com/apache/bookkeeper/pull/4545)
* Upgrade to Netty 4.1.115.Final to address CVE-2024-47535 [PR #4524](https://github.com/apache/bookkeeper/pull/4524)
* Upgrade Zookeeper to 3.9.3 to address CVE-2024-51504 [PR #4523](https://github.com/apache/bookkeeper/pull/4523)
* Upgrade gRPC to 1.70.0 [PR #4512](https://github.com/apache/bookkeeper/pull/4512)
* Upgrade protobuf to 3.25.5 to address CVE-2024-7254 [PR #4508](https://github.com/apache/bookkeeper/pull/4508)
* Upgrade to Netty 4.1.113.Final and netty-tcnative 2.0.66.Final [PR #4502](https://github.com/apache/bookkeeper/pull/4502)
* Bump grpc from 1.56.0 to 1.64.0 to address CVE list [PR #4344](https://github.com/apache/bookkeeper/pull/4344)

#### Details

https://github.com/apache/bookkeeper/pulls?q=is%3Apr+label%3Arelease%2F4.17.2+is%3Amerged+

---

> **Source** [apache/bookkeeper](https://github.com/apache/bookkeeper) · `release-4.17.2` · 2025-07-05 · [upstream release](https://github.com/apache/bookkeeper/releases/tag/release-4.17.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
