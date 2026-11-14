---
title: "logging-log4j2 rel/2.25.1"
project: "logging-log4j2"
repo: "apache/logging-log4j2"
tag: "rel/2.25.1"
published: "2025-07-11"
type: "release"
lang: "en"
summary: "This patch release addresses a dozen bugs in version 2.25.0, in particular"
---

# logging-log4j2 rel/2.25.1

This patch release addresses a dozen bugs in version `2.25.0`, in particular:

* Resolves a concurrency issue in the new unified datetime formatter.
* Fixes build failures affecting Gradle users.
* Restores backward compatibility with Spring Boot’s common logging configuration.
* Improves handling of edge cases in GraalVM support.

### Fixed

* Fix detection of the Disruptor major version in environments with non-standard thread context classloader. (#3706)
* Downgrade `spotbugs-annotations` to resolve Gradle build failures. (#3754)
* Fix incorrect version resolution of `jspecify` and `error_prone_annotations` dependencies in published POM files. (#3758, #3779)
* Restore compatibility with Spring Boot by allowing reconfiguration using the `LoggerContext.start` method. (#3770)
* Allow omission of the `-Alog4j.graalvm.groupId` and `-Alog4j.graalvm.artifactId` arguments when building Log4j plugins. (#3771)
* Broaden the OSGi manifest's `Import-Package` constraints to support Jakarta Servlet API up to version 6. (#3787)
* Enable the `resource:` protocol for configuration files by default when running on GraalVM. (#3790)
* Fix timestamp formatting concurrency issue, when `log4j2.enabledThreadlocals` is `true`. (#3792)
* Fix GraalVM reachability metadata generation for methods with annotated array type parameters, such as `@Nullable String[]`. (#3796)
* Resolve `PropertiesConfiguration` compatibility issues with GraalVM and address additional minor reflection-related problems. (#3800)

---

> **Source** [apache/logging-log4j2](https://github.com/apache/logging-log4j2) · `rel/2.25.1` · 2025-07-11 · [upstream release](https://github.com/apache/logging-log4j2/releases/tag/rel/2.25.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
