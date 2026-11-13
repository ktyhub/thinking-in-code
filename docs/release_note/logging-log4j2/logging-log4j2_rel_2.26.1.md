---
title: "logging-log4j2 rel/2.26.1"
project: "logging-log4j2"
repo: "apache/logging-log4j2"
tag: "rel/2.26.1"
published: "2026-07-02"
type: "release"
lang: "en"
summary: "This patch release delivers certain fixes on top of 2.26.0."
---

# logging-log4j2 rel/2.26.1

This patch release delivers certain fixes on top of `2.26.0`.

### Changed

* Improve logging for `LinkageError` scenarios involving the LMAX Disruptor library (#2250, #4124)

### Fixed

* Fix the `createOnDemand` behavior of `RollingFileAppender` to correctly defer file and directory creation until the first log event, while preserving eager creation when disabled. (#2006, #4072)
* Improve documentation for locale handling in the Pattern Layout date pattern converter (#4129, #4130)
* Fix handling of non-finite numbers while encoding `MapMessage` to JSON (#4163)
* Fix encoding of `MSGID` and `SD-ID` fields of `StructuredDataMessage` to XML (#4136)
* Fix stack trace rendering for exceptions with identity malfunction (e.g., colliding `equals()` and/or `hashCode()` implementations) (#3933, #4133)
* Fix resource leaks in `ConfigurationSource` when loading configuration via URL fails (#4127)
* Fix `KafkaAppender` reporting error to error handler even after a successful retry (#4125)

---

> **Source** [apache/logging-log4j2](https://github.com/apache/logging-log4j2) · `rel/2.26.1` · 2026-07-02 · [upstream release](https://github.com/apache/logging-log4j2/releases/tag/rel/2.26.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
