---
title: "logging-log4j2 rel/2.25.0"
project: "logging-log4j2"
repo: "apache/logging-log4j2"
tag: "rel/2.25.0"
published: "2025-06-16"
type: "release"
lang: "en"
summary: "This minor release introduces bug fixes, behavior improvements, and complete support for GraalVM native image generation."
---

# logging-log4j2 rel/2.25.0

This minor release introduces bug fixes, behavior improvements, and complete support for GraalVM native image generation.

## GraalVM Reachability Metadata

Log4j Core and all extension modules now include embedded  
[GraalVM reachability metadata](https://www.graalvm.org/latest/reference-manual/native-image/metadata/),  
enabling seamless generation of native images with GraalVM out of the box—no manual configuration required.  
For more information, refer to our [GraalVM guide](graalvm.adoc).

> [!NOTE]  
> When building third-party Log4j plugins, using the new `GraalVmProcessor`  
> introduced in version `2.25.0` will automatically generate the required reachability metadata for GraalVM native images.  
> However, the processor will fail the build if the required `log4j.graalvm.groupId` and `log4j.graalvm.artifactId` parameters are not provided.  
> For detailed instructions, see [Registering plugins](https://logging.apache.org/log4j/2.x/manual/plugins.adoc#plugin-registry).

## Exception Handling in Pattern Layout

Exception handling in [Pattern Layout](https://logging.apache.org/log4j/2.x/manual/pattern-layout.adoc) has undergone a significant rewrite.  
This update resolves several bugs and ensures consistent behavior across all exception converters.  
Key improvements include:

- Stack traces are now consistently prefixed with a newline instead of other whitespace.
- The default exception converter has changed from [extended](https://logging.apache.org/log4j/2.x/manual/pattern-layout.adoc#converter-exception-extended) to [plain](https://logging.apache.org/log4j/2.x/manual/pattern-layout.adoc#converter-exception), offering better performance.
- Support for the `{ansi}` option in exception converters has been removed.

## Date & Time Formatting

Log4j has historically provided custom date and time formatters for performance, such as [`FixedDateFormat`](https://logging.apache.org/log4j/2.x/javadoc/log4j-core/org/apache/logging/log4j/core/util/datetime/FixedDateFormat.html) and [`FastDateFormat`](https://logging.apache.org/log4j/2.x/javadoc/log4j-core/org/apache/logging/log4j/core/util/datetime/FastDateFormat.html).  
These are now deprecated in favor of Java’s standard [`DateTimeFormatter`](https://docs.oracle.com/javase/{java-target-version}/docs/api/java/time/format/DateTimeFormatter.html).

If you encounter formatting issues after upgrading—particularly with `n` or `x` directives—you can temporarily revert to the legacy formatters by setting the [`log4j2.instantFormatter`](https://logging.apache.org/log4j/2.x/manual/systemproperties.adoc#log4j2.instantFormatter) property to `legacy`.  
Please report any issues via our [issue tracker](https://logging.apache.org/support.html#issues).

## ANSI Support on Windows

Modern Windows versions (10 and newer) provide native ANSI escape sequence support.  
As a result, dependency on the outdated JAnsi 1.x library has been removed.  
For details, refer to [ANSI styling on Windows](https://logging.apache.org/log4j/2.x/manual/pattern-layout.adoc#jansi).

## Jakarta JMS Appender

A Jakarta-compatible version of the [JMS Appender](https://logging.apache.org/log4j/2.x/manual/appenders/message-queue.adoc#JmsAppender) is now included in the core distribution.

## Added

- Add Google OSS-Fuzz integration (#2949)
- Add a `GraalVmProcessor` annotation processor to generate GraalVM reachability metadata. (#3053)
- Add `MonitorResource` configuration option to support the monitoring of external files in addition to the configuration file itself. (#3074, #3501)
- Fixed typo in "LoggerConfig.RootLogger.Builder#withtFilter(...)" method. Created new corrected 'withFilter()' method and deprecated old method. (#3369)
- Add `collectionName` and `databaseName` arguments to the MongoDB appender (#3467)

## Changed

- Remove JAnsi library support. Windows 10 console has supported ANSI escapes since 2017. (#1736)
- Consolidate exception rendering logic and improve circular reference support in Pattern Layout (#2691, #3123)
- Rewrite `JAnsiTextRenderer` to work without JAnsi library. (#2916)
- Switch prefixing stack traces in Pattern Layout from whitespace to newline (#3045)
- Changes the layout used by the [default configuration](https://logging.apache.org/log4j/2.x/manual/configuration.html#automatic-configuration). (#3118)
- Switch to using Java's `DateTimeFormatter` for date & time formatting of log event instants (#3121, #2943)
- Switch the default exception converter from [the extended exception converter](https://logging.apache.org/log4j/2.x/manual/pattern-layout.adoc#converter-exception-extended) to [the plain exception converter](https://logging.apache.org/log4j/2.x/manual/pattern-layout.adoc#converter-exception) (#3123)
- Don't close StringReaders because of batching. (#3127)
- Switch prefixing stack traces in Status Logger from whitespace to newline (#3149)
- The MongoDb Appender shouldn't log a deprecation warning (#3149)
- Add improved validation to StringMatchFilter for null/empty text. (#3153)
- Improve sub-millisecond precision in Java 8 by overriding `SystemClock`. (#3217)
- Don't overwrite configured configuration name if config has no loggers/root logger. (#3431)
- Update `GcpLayout.json` to improve compatibility with Google Cloud Logging (#3586)
- Direct invocation of `java.util.Base64` in `Base64Util` instead of reflection (#3686)
- Improve `LogEvent.toImmutable()`, `ReusableMessage.memento()`, and remove `ThrowableProxy` usage

## Deprecated

- `ThrowableProxy` and all its usages (#2691, #3123)
- `AbstractLogger.checkMessageFactory()` (#2936)
- `FixedDateTime`, `FastDateTime`, and supporting classes (#3121)
- Use hard references to `Logger`s in `LoggerRegistry`. (#3143)

## Fixed

- Switch MongoDB tests to Docker (#2229)
- Add Jakarta-based JMS Appender and deprecate Javax version (#2995)
- Fix `RollingFileManager` to reopen file on unsuccessful rollover (#2592)
- Fix exception rendering in Pattern Layout ([LOG4J2-2170](https://issues.apache.org/jira/browse/LOG4J2-2170), [LOG4J2-3627](https://issues.apache.org/jira/browse/LOG4J2-3627), #1729, #2691)
- Reload key/trust stores in TLS config ([LOG4J2-2988](https://issues.apache.org/jira/browse/LOG4J2-2988), #2767)
- Simplify `SSLContext` instantiation for TLS (#2767)
- Add warning for Plugin Builder Attributes without public setter (#2769)
- Fix config reload from HTTP(S) source (#2937)
- Fix `putAll()` in thread context map (#2942)
- Improve HTTP Appender validation (#3011)
- Fix `getLogger()` compatibility in `log4j-1.2-api` (#3030)
- Fix root exception property extraction in Pattern Layout (#3045)
- Fix key removal in Thread Context (#3048)
- Android-specific fixes (#3056)
- Prevent non-Log4j dependency leak in `log4j-bom` (#3066, [logging-parent#265](https://github.com/apache/logging-parent/pull/265))
- Fix `o.a.l.Priority` to Log4j 2 Level conversion (#3085)
- Sync `Logger.getLevel()` and `Logger.setLevel()` (#3119)
- Improve `AsyncWaitStrategyFactoryConfig` validation (#3159)
- Fix NPE with `rootLogger = LEVEL` syntax (#3206)
- Fix `ArrayIndexOutOfBoundsException` in JSON Template Layout (#3212)
- Handle null `replacement` in `RegexReplacement` (#3215)
- Fix location requirement detection in `AsyncAppender` and `FailoverAppender` (#3257)
- Correct Javadoc return for `isFiltered()` (#3300)
- Fix `Level` converter documentation (#3359)
- Fix `RecyclerFactoryConverter` loading in JSON Layout (#3398)
- Minimize `InternalLoggerRegistry` locking and clean up stale entries (#3399, #3430, #3681)
- Improve compile-time visibility for annotation libraries (#3437)
- Fix `shutdownDisable` config (#2614)
- Fix `ArrayIndexOutOfBoundsException` in `StatusData#getFormattedStatus` (#3562)
- Deprecate/remove static hiding methods (#3601)
- Avoid stack poisoning on platforms without `SecurityManager` (#3639)
- Improve performance/memory use when logging primitive arrays (#3645)
- Fix `ArrayIndexOutOfBoundsException` in `Message.getFormattedMessage()` (#3655)
- StatusLogger now writes to `stderr` by default (fixes regression in 2.23.0) (#3665)
- Support `equals()` between `ReadOnlyStringMap` implementations (#3669)
- Accept Disruptor 4 in OSGi descriptor (#3706)
- Avoid surrogate handling in `JsonWriter`

## Removed

- Removed support for the `{ansi}` option in Pattern Layout exception converters (#3045)

## Updated

- Update `actions/stale` to `9.1.0` (#3625)
- Update `logback-core` to `1.3.15` (#3354)
- Update `jackson-bom` to `2.19.0` (#3708)
- Update `spotbugs-annotations` to `4.9.3` (#3545)
- Update `docker-maven-plugin` to `0.46.0` (#3592)
- Update `cassandra-all` to `3.11.19` (#3440)
- Update `commons-csv` to `1.14.0` (#3559)
- Update `commons-dbcp2` to `2.13.0` (#3271)
- Update `commons-pool2` to `2.12.1` (#3422)
- Update `kafka-clients` to `3.9.1` (#3678)
- Update `logging-parent` to `12.1.1`
- Update `tomcat-juli` to `10.1.30` (#2999)
- Update `jetty-util` to `9.4.57.v20241219` (#3377)
- Update `jmdns` to `3.6.1` (#3544)
- Update `bson` to `5.5.1` (#3722)
- Update `slf4j-api` to `2.0.17` (#3499)
- Update `spring-cloud-context` to `4.3.0` (#3700)

---

> **Source** [apache/logging-log4j2](https://github.com/apache/logging-log4j2) · `rel/2.25.0` · 2025-06-16 · [upstream release](https://github.com/apache/logging-log4j2/releases/tag/rel/2.25.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
