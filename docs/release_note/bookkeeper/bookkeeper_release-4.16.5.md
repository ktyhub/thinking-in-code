---
title: "bookkeeper release-4.16.5"
project: "bookkeeper"
repo: "apache/bookkeeper"
tag: "release-4.16.5"
published: "2024-04-11"
type: "release"
lang: "en"
summary: "Release 4.16.5 includes multiple bug fixes and few dependency updates."
---

# bookkeeper release-4.16.5

Release 4.16.5 includes multiple bug fixes and few dependency updates.

Apache BookKeeper users are encouraged to upgrade to 4.16.5 if you are using 4.16.x.
The technical details of this release are summarized below.

### Highlights

#### Bugs
* Fixed creation of temporary dir in NativeUtils [PR #4262](https://github.com/apache/bookkeeper/pull/4262) 
* Fix error stack track may expose to external user [PR #4223](https://github.com/apache/bookkeeper/pull/4223)
* Add filename check for unTar [PR #4222](https://github.com/apache/bookkeeper/pull/4222)
* Fix uncontrolled data used in path expression [PR #4221](https://github.com/apache/bookkeeper/pull/4221)
* Set metrics endpoint content-type [PR #4208](https://github.com/apache/bookkeeper/pull/4208)
* Fix checksum calculation bug when the payload is a CompositeByteBuf with readerIndex > 0 [PR #4205](https://github.com/apache/bookkeeper/pull/4205)
* Fix yaml and dockerfile [PR #4186](https://github.com/apache/bookkeeper/pull/4186)

#### Dependency updates
* Bump org.apache.commons:commons-compress from 1.21 to 1.26.0 [PR #4214](https://github.com/apache/bookkeeper/pull/4214)

#### Details

https://github.com/apache/bookkeeper/pulls?q=is%3Apr+label%3Arelease%2F4.16.5+is%3Amerged+

---

> **Source** [apache/bookkeeper](https://github.com/apache/bookkeeper) · `release-4.16.5` · 2024-04-11 · [upstream release](https://github.com/apache/bookkeeper/releases/tag/release-4.16.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
