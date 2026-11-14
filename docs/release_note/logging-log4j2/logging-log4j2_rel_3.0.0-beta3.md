---
title: "logging-log4j2 rel/3.0.0-beta3"
project: "logging-log4j2"
repo: "apache/logging-log4j2"
tag: "rel/3.0.0-beta3"
published: "2024-11-12"
type: "release"
lang: "en"
summary: "This release terminates the modularization process of Log4j Core, by moving all the code that uses optional log4j-core dependencies into new modules"
---

# logging-log4j2 rel/3.0.0-beta3

This release terminates the modularization process of Log4j Core, by moving all the code that uses optional `log4j-core` dependencies into new modules:

* Support for the JAnsi library has been removed since recent Windows OSes support ANSI escape sequences.
See [ANSI styling on Windows](https://logging.apache.org/log4j/3.x/manual/pattern-layout.html#ansi-windows) for more details.
* The [`DisruptorBlockinQueue` queue factory](https://logging.apache.org/log4j/3.x/manual/appenders/delegating.html#DisruptorBlockingQueueFactory) has been moved to a new [`log4j-conversant` artifact](https://logging.apache.org/log4j/3.x/components.html#log4j-conversant).
* Support for [advanced compression algorithms](https://logging.apache.org/log4j/3.x/manual/appenders/rolling-file.html#RolloverStrategy-compress) has been moved to a new [`log4j-compress` artifact](https://logging.apache.org/log4j/3.x/components.html#log4j-compress).
The Gzip and Zip formats are still supported out-of-the-box.

### Separate lifecycle

* The [Flume Appender](https://logging.apache.org/log4j/3.x/manual/appenders/message-queue.html#FlumeAppender) releases will follow their own lifecycle.
* All the [logging bridges](https://logging.apache.org/log4j/3.x/manual/installation.html#impl-core-bridges) from and to Log4j API have been removed from the Log4j Core 3.x release.
  Please manage your dependencies with [`log4j-bom`](https://logging.apache.org/log4j/3.x/components.html#log4j-bom) to always use the compatible version of the logging bridges.

### Added

* Add `useFqdn` configuration attribute to RFC5424 Layout. (#1740)
* Split off JNDI support of `log4j-jdbc` to a new `log4j-jdbc-jndi` module (#1914)
* Add _"Plugin Reference"_ to the website. It is a Javadoc-on-steroids focusing on Log4j plugins. (#1954)
* Split extended compression algorithm support to new `log4j-compress` module. (#2921)

### Changed

* Remove JAnsi library support, since Windows console supports ANSI escapes now. (#1736)
* Move `DisruptorBlockingQueue` plugin to new `log4j-conversant` module. (#2914)
* Rewrite `JAnsiTextRenderer` to work without JAnsi library. (#2916)

### Fixed

* Switch MongoDB tests to use Docker. (#2229)
* Fix custom thread-context data provider handling in lookups and filters. (#2331)
* Fix reloading of the configuration from an HTTP(S) source (#2937)
* Fix Android-related issues in Log4j Core. (#3056)
* Website is migrated to Antora with several formatting and link fixes (#2443)

### Removed

* Remove _named_ date & time formatting patterns in Pattern Layout, except for `UNIX` and `UNIX_MILLIS` (#3150)
* Move Flume Appender to its own release lifecycle. (#2902)
* Remove `ThrowableProxy` and its usages (#3047)
* Remove logging bridges from distribution and reference their 2.x equivalents in `log4j-bom`.
* Remove CLI tools to generate logger wrappers and convert configuration files.
  These tools will be available in the next release of [Log4j Transform](https://logging.apache.org/log4j/transform/index.html).
* Remove deprecated `org.apache.logging.log4j.core.appender.rolling.action.Duration` class.
* Remove `log4j-1.2-api` module (#2621)
* Remove `log4j-iostreams` module (#2630)

### Updated

* Update `apache/logging-parent` to version `` (#2598)
* Update `com.fasterxml.jackson:jackson-bom` to version `2.18.1` (#3136)
* Update `io.fabric8:docker-maven-plugin` to version `0.45.1` (#3036)
* Update `org.apache.commons:commons-compress` to version `1.27.1` (#2870)
* Update `org.apache.commons:commons-csv` to version `1.12.0` (#3020)
* Update `org.apache.commons:commons-dbcp2` to version `2.12.0` (#2342)
* Update `org.apache.logging.log4j:log4j-api` to version `2.24.1` (#3035)
* Update `org.jctools:jctools-core` to version `4.0.5` (#2638)
* Update `org.jspecify:jspecify` to version `1.0.0` (#2750)
* Update `org.mongodb:bson` to version `5.2.1` (#3179)
* Update `org.springframework.boot:spring-boot-autoconfigure` to version `3.3.5` (#3120)
* Update `org.springframework.cloud:spring-cloud-context` to version `4.1.4` (#2733)
* Update `org.springframework:spring-framework-bom` to version `6.1.14` (#3102)

---

> **Source** [apache/logging-log4j2](https://github.com/apache/logging-log4j2) · `rel/3.0.0-beta3` · 2024-11-12 · [upstream release](https://github.com/apache/logging-log4j2/releases/tag/rel/3.0.0-beta3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
