---
title: "logging-log4j2 rel/2.24.1"
project: "logging-log4j2"
repo: "apache/logging-log4j2"
tag: "rel/2.24.1"
published: "2024-09-29"
type: "release"
lang: "en"
summary: "This release contains mainly bug fixes of problems encountered with the thread context map, logger registry and configuration reloading."
---

# logging-log4j2 rel/2.24.1

This release contains mainly bug fixes of problems encountered with the thread context map, logger registry and configuration reloading.

It also enhances integration tests to use Docker images of the most recent releases of MongoDB and Elastic Search.

### Changed

* Rework `LoggerRegistry` to make it `MessageFactory`-namespaced.
  This effectively allows loggers of same name, but different message factory. (#2936)
* Enable Docker-based tests in CI for JSON Template Layout (#2953)

### Fixed

* Switch MongoDB tests to use Docker. (#2229)
* Fix reloading of the configuration from an HTTP(S) source (#2937)
* Fix `putAll()` in the default thread context map implementation (#2942)

### Updated

* Update `org.apache.logging:logging-parent` to version `11.3.0`

---

> **Source** [apache/logging-log4j2](https://github.com/apache/logging-log4j2) · `rel/2.24.1` · 2024-09-29 · [upstream release](https://github.com/apache/logging-log4j2/releases/tag/rel/2.24.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
