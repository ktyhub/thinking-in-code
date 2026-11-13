---
title: "logging-log4j2 rel/2.26.0"
project: "logging-log4j2"
repo: "apache/logging-log4j2"
tag: "rel/2.26.0"
published: "2026-05-07"
type: "release"
lang: "en"
summary: "This minor release delivers all the fixes in the [2.25.0, 2.25.4] version range, plus some new fixes, and several other improvements and features."
---

# logging-log4j2 rel/2.26.0

This minor release delivers all the fixes in the `[2.25.0, 2.25.4]` version range, plus some new fixes, and several other improvements and features.

### Added

* Add a new `ConfigurationFactory::getConfiguration` method accepting multiple `URI`s (#3775, #3921)
* Add and export `org.apache.logging.log4j.core.pattern.NamedInstantPattern` enabling users to programmatically access named date & time patterns supported by Pattern Layout (#3789)
* Add `log4j.plugin.processor.minAllowedMessageKind` annotation processor option to `PluginProcessor` to filter diagnostic messages by severity. This allows builds that treat compiler notes as errors (e.g. Maven with `-Werror`) to suppress informational notes emitted during normal plugin processing. (https://github.com/apache/logging-log4j2/discussions/3380[#3380], #4063)
* Add missing setters to `Rfc5424LayoutBuilder`

### Changed

* Ensure scripts in the global `Scripts` element have explicit names by throwing a `ConfigurationException` for unnamed ones. (#3176)
* Simplify file manager registry factory methods (#3968)

### Deprecated

* Deprecated withers in builder classes in favor of setters. This change improves API consistency with Log4j Core 3 and helps users adapt to the upcoming changes. (#3750)

### Fixed

* Fix script resolution failure when the `Scripts` element is placed after a `ScriptRef` in the configuration. (#3336)
* Fix `ArrayIndexOutOfBoundsException` thrown by `ThrowableStackTraceRenderer` when the stack trace is modified concurrently (#3940, #3955)
* Fix `SLF4JLogger.atFatal()` returning `atLevel(Level.TRACE)` instead of `atLevel(Level.FATAL)`. This was causing `FATAL`-level log events to be silently discarded when using the fluent API through the `log4j-to-slf4j` bridge. (#4068, #4089)
* Fix Javadoc references across module boundaries (i.e., cross-references) (#4099, #4100)
* Fix header write in `RollingRandomAccessFileManager` that was being incorrectly skipped if `append=true` and the file didn't exist before
* Fix a properties file configuration regression caused by not referenced loggers, appenders, and filters (#4036, #4069)

### Removed

* Remove the `jvmrunargs` lookup. (#3874)

### Updated

* Update `org.junit:junit-bom` to version `5.13.4` (#3850)
* Update `org.mongodb:bson` to version `5.6.1` (#3961)
* Update `org.xerial.snappy:snappy-java` to version `1.1.10.8` (#3841)

---

> **Source** [apache/logging-log4j2](https://github.com/apache/logging-log4j2) · `rel/2.26.0` · 2026-05-07 · [upstream release](https://github.com/apache/logging-log4j2/releases/tag/rel/2.26.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
