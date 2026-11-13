---
title: "logging-log4j2 rel/2.25.3"
project: "logging-log4j2"
repo: "apache/logging-log4j2"
tag: "rel/2.25.3"
published: "2025-12-16"
type: "release"
lang: "en"
summary: "This patch release addresses issues detailed in the changelog below. In particular, it includes an important fix for the host name verification in SSL/TLS configuration. This is used by Socket Appender."
---

# logging-log4j2 rel/2.25.3

This patch release addresses issues detailed in the changelog below. In particular, it includes an important fix for the host name verification in SSL/TLS configuration. This is used by Socket Appender.

### Changed

* Optimize `DefaultThreadContextMap.getCopy()` performance by avoiding megamorphic calls in `HashMap` constructor (#3935, #3939)

### Fixed

* Fix GraalVM metadata for nested classes to use binary names instead of canonical names (#3871, #3996)
* Fix failures caused by null `SslConfiguration` (#3947, #3953)
* Fix incorrect handling of the host name verification in SSL/TLS configuration, which is used by Socket Appender when SSL/TLS is enabled (#4002)

### Removed

* Remove the `com.github.spotbugs:spotbugs-annotations` dependency (#3984, #3985)

---

> **Source** [apache/logging-log4j2](https://github.com/apache/logging-log4j2) · `rel/2.25.3` · 2025-12-16 · [upstream release](https://github.com/apache/logging-log4j2/releases/tag/rel/2.25.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
