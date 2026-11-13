---
title: "logging-log4j2 rel/2.25.2"
project: "logging-log4j2"
repo: "apache/logging-log4j2"
tag: "rel/2.25.2"
published: "2025-09-22"
type: "release"
lang: "en"
summary: "This patch release addresses certain minor issues detailed in the changelog."
---

# logging-log4j2 rel/2.25.2

This patch release addresses certain minor issues detailed in the changelog.

### Fixed

* Fix potential memory leak involving `LogBuilder` in Log4j API to Logback bridge (#3819, #3824)
* Prevent unnecessary warnings in `AbstractDriverManagerConnectionSource` (#3828, #3831)
* Fix missing newlines in default logging configuration for `log4j-core` (#3835, #3851)
* Fix missing default `Target` value in Console Appender (#3852)
* Discard the sub-second part while obtaining the initial time (i.e., creation time) of a file in `RollingFileManager` (#3068, #3872)
* Fix Pattern Layout exception stack trace converters to no longer prepend newlines based on context (#3873, #3919)
* Fix the `com.google.errorprone:error_prone_annotations` dependency whose version property gets erased due to flattening (#3779, #3785, #3822, #3905)
* Fix detection of `Throwable` converters inside nested Pattern Layout patterns when applying `alwaysWriteExceptions` (#3920)
* Fix parsing and merging of literals in `InstantPatternDynamicFormatter` (#3930, #3932)

---

> **Source** [apache/logging-log4j2](https://github.com/apache/logging-log4j2) · `rel/2.25.2` · 2025-09-22 · [upstream release](https://github.com/apache/logging-log4j2/releases/tag/rel/2.25.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
