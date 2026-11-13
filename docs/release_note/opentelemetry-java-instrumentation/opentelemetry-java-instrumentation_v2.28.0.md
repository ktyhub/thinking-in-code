---
title: "opentelemetry-java-instrumentation v2.28.0"
project: "opentelemetry-java-instrumentation"
repo: "open-telemetry/opentelemetry-java-instrumentation"
tag: "v2.28.0"
published: "2026-05-19"
type: "minor"
lang: "en"
summary: "This release targets the OpenTelemetry SDK 1.62.0."
---

# opentelemetry-java-instrumentation v2.28.0

This release targets the OpenTelemetry SDK 1.62.0.

Note that many artifacts have the `-alpha` suffix attached to their version number, reflecting that they will continue to have breaking changes. Please see [VERSIONING.md](https://github.com/open-telemetry/opentelemetry-java-instrumentation/blob/main/VERSIONING.md#opentelemetry-java-instrumentation-versioning) for more details.

### ⚠️ Breaking changes to non-stable APIs

- Removed the obsolete internal `ClassInjector`/`ProxyInjectionBuilder` API used by the old `ExperimentalInstrumentationModule.injectClasses(ClassInjector)` path; use `ExperimentalInstrumentationModule.exposedClassNames()` instead. ([#18112](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18112))
- Removed previously deprecated non-stable API methods and the deprecated `opentelemetry-runtime-telemetry-java8` and `opentelemetry-runtime-telemetry-java17` library aliases. ([#18136](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18136))
- Removed the previously deprecated `captureEventName` library builder setting from the logback-appender-1.0 and log4j-appender-2.17 `OpenTelemetryAppender`, and the corresponding `otel.instrumentation.{logback-appender,log4j-appender,jboss-logmanager}.experimental.capture-event-name` javaagent properties. Use the `otel.event.name` key in MDC / context data / key-value pairs / Logstash markers / structured arguments instead. ([#18223](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18223))
- Removed previously deprecated experimental config properties `otel.instrumentation.http.client.experimental.redact-query-parameters` and `otel.instrumentation.common.experimental.db-sqlcommenter.enabled`; use `otel.instrumentation.sanitization.url.experimental.sensitive-query-parameters` and `otel.instrumentation.common.db.experimental.sqlcommenter.enabled` instead. ([#18229](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18229))
- Removed the deprecated `otel.instrumentation.servlet.experimental.add-trace-id-request-attribute` property; use `otel.instrumentation.servlet.experimental.trace-id-request-attribute.enabled` instead. ([#18237](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18237))
- Reshaped the ktor `Experimental` helper from a class with a `companion object` to a top-level `object`. Kotlin source callers (`Experimental.emitExperimentalTelemetry(...)`) are unaffected, but pre-compiled consumers must be recompiled against the new artifact. ([#18343](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18343))

### 🚫 Deprecations

- Deprecate `otel.instrumentation.jaxws-cxf-3.0.enabled` in favor of `otel.instrumentation.jaxws-2.0-cxf-3.0.enabled`, and `otel.instrumentation.jaxws-metro-2.2.enabled` in favor of `otel.instrumentation.jaxws-2.0-metro-2.2.enabled`. ([#18184](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18184))

### 🌟 New javaagent instrumentation

- Add Apache Thrift 0.13 instrumentation for RPC client and server spans and metrics. ([#18405](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18405))

### 🌟 New library instrumentation

- Add Apache Thrift 0.13 library instrumentation for RPC client and server spans and metrics. ([#18405](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18405))

### 📈 Enhancements

- Couchbase 3.1 javaagent instrumentation now emits the more conventional instrumentation scope name `io.opentelemetry.couchbase-3.1` instead of `io.opentelemetry.javaagent.couchbase-3.1` when `otel.instrumentation.common.v3-preview` is enabled. ([#18426](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18426))
- Wicket resource requests now use the resource reference class name in the server span name when `otel.instrumentation.common.v3-preview` is enabled. ([#18312](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18312), [#18775](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18775))
- Decide whether javaagent helper classes are injected into the application class loader or isolated based on the advice classes used by an instrumentation. ([#17815](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/17815))
- Improve cgroup v2 container ID detection for Podman by supporting additional `mountinfo` layouts and warning when multiple candidate IDs are found. ([#18272](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18272))

### 🛠️ Bug fixes

- Fix Pekko HTTP and Tapir server route tracking so server span names and `http.route` preserve the most specific matched route across nested directives, exceptions, and timeouts; this may change span names and `http.route` values for affected routes. ([#16390](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16390))
- Fix context loss in Finagle HTTP instrumentation across Netty-to-Finagle request conversion and `twitter-util` Future/Promise asynchronous boundaries. ([#17867](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/17867))
- Fix virtual-thread pinning caused by weak-map stale-entry cleanup running on virtual threads; cleanup now runs from the background thread instead. ([#18113](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18113))
- Avoid linking batch consumer spans to the ambient consumer span when records or messages have no propagation headers. ([#18154](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18154))
- Fix `resetOnEachOperator()` for Reactor 3.1 so it also removes the scheduler hook when instrumentation is disabled. ([#18258](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18258))
- End spans when RxJava 1.0 subscriptions throw synchronously. ([#18265](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18265))
- Fix Spring Boot service version auto-detection so `META-INF/build-info.properties` is read from the jar root instead of `BOOT-INF/classes/`. ([#18292](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18292))
- Clear the Netty `VirtualField` after finishing a response in the Netty 3.8 server instrumentation. ([#18358](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18358))
- Fix `JarDetails` to close `JarFile` handles while reading archives and embedded jars, preventing resource leaks during runtime telemetry collection. ([#18385](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18385))
- Fix a `NullPointerException` when converting an agent context without an associated application context to an application context. ([#18444](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18444))
- Fix Ktor server instrumentation to prevent OpenTelemetry context leaks caused by incomplete coroutine context restoration. ([#18456](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18456))
- Fix Vert.x sub-router `http.route` attributes by prepending the mount point to the relative route path; this may change server span names and `http.route` values for mounted sub-routes. ([#18462](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18462))
- Fix oshi metrics startup and RSS memory reporting with `oshi` 7.0.0. ([#18478](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18478))
- Fix Play MVC and Play WS instrumentation on Play 3.x applications. ([#18624](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18624))
- Record an error receive span when a wrapped Kafka consumer `poll()` fails. ([#18625](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18625))
- Fix weak-map cleanup during agent startup by starting `WeakConcurrentMapCleaner` before Byte Buddy installation. ([#18628](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18628))
- Fix indy instrumentation so it works with the security manager without recursive bootstrap failures. ([#18634](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18634))
- Avoid a deadlock in weak caches when stale entries are expunged during `computeIfAbsent`. ([#18635](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18635))
- Declarative config customizers now handle missing processor and detector lists without throwing `NullPointerException` during startup. ([#18641](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18641))
- Fix a race that could prevent HTTP server spans from ending correctly in Netty 3.8 and 4.0 instrumentation. ([#18645](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18645))
- Avoid `NumberFormatException` when a JDBC URL port is null. ([#18708](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18708))
- Fix Vert.x `TaskQueue` and `OrderedExecutorFactory` task execution so span context propagates to queued runnables. ([#18709](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18709))
- Limit Redisson batch query text length to avoid oversized `db.statement` values for large batches. ([#18744](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18744))
- Fix SQL query sanitization so password clauses in SAP HANA administrative statements are redacted without redacting `password` identifiers. ([#18754](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18754))

### 🙇 Thank you

This release was possible thanks to the following contributors who shared their brilliant ideas and awesome pull requests:

@anuraaga
@Ari4ka
@asvanberg
@breedx-splk
@Channyboy
@chatgpt-codex-connector
@deejay1
@dengliming
@dmarkwat
@dtaveras
@filipl
@jack-berg
@jaydeluca
@laurit
@michaelnimbs-ehex
@mznet
@otbe
@PeterF778
@rohitmohan96
@samwright
@stefanroeck
@steverao
@SylvainJuge
@trask
@wrobelma
@YaoYingLong
@zeitlinger

---

> **Source** [open-telemetry/opentelemetry-java-instrumentation](https://github.com/open-telemetry/opentelemetry-java-instrumentation) · `v2.28.0` · 2026-05-19 · [upstream release](https://github.com/open-telemetry/opentelemetry-java-instrumentation/releases/tag/v2.28.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
