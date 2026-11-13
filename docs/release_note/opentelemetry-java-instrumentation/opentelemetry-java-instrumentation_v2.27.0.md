---
title: "opentelemetry-java-instrumentation v2.27.0"
project: "opentelemetry-java-instrumentation"
repo: "open-telemetry/opentelemetry-java-instrumentation"
tag: "v2.27.0"
published: "2026-04-21"
type: "minor"
lang: "en"
summary: "This release targets the OpenTelemetry SDK 1.61.0."
---

# opentelemetry-java-instrumentation v2.27.0

This release targets the OpenTelemetry SDK 1.61.0.

Note that many artifacts have the `-alpha` suffix attached to their version number, reflecting that they will continue to have breaking changes. Please see [VERSIONING.md](https://github.com/open-telemetry/opentelemetry-java-instrumentation/blob/main/VERSIONING.md#opentelemetry-java-instrumentation-versioning) for more details.

### ⚠️ Breaking changes to non-stable APIs

- Make `AbstractKtorServerTelemetryBuilder.isOpenTelemetryInitialized()` protected (previously public). ([#17509](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/17509))
- Replace `ExperimentalInstrumentationModule.injectClasses(ClassInjector)` with `exposedClassNames()` for exposing helper classes to the application class loader. ([#17765](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/17765))
- Moved `WebApplicationContextInstrumentation` from the `spring-web` instrumentation module to `spring-webmvc`; users who disabled it via `otel.instrumentation.spring-web.enabled=false` must now use `otel.instrumentation.spring-webmvc.enabled=false`. ([#17856](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/17856))

### 🚫 Deprecations

- Deprecated `KafkaTelemetryBuilder.setMessagingReceiveInstrumentationEnabled(boolean)` in favor of `setMessagingReceiveTelemetryEnabled(boolean)`. ([#17092](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/17092))
- Deprecated GraphQL builder methods `setSanitizeQuery()` and `setAddOperationNameToSpanName()`, and deprecated config key `otel.instrumentation.graphql.add-operation-name-to-span-name.enabled` in favor of `setQuerySanitizationEnabled()`, `setOperationNameInSpanNameEnabled()`, and `otel.instrumentation.graphql.operation-name-in-span-name.enabled`. ([#17093](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/17093))
- Deprecate `Experimental.setEnableSqlCommenter()` in JDBC and R2DBC instrumentation in favor of `Experimental.setSqlCommenterEnabled()`. ([#17094](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/17094))
- Rename `otel.instrumentation.servlet.capture-request-parameters` to `otel.instrumentation.servlet.experimental.capture-request-parameters` and `otel.instrumentation.servlet.add-trace-id-request-attribute` to `otel.instrumentation.servlet.experimental.trace-id-request-attribute.enabled`; old property names are deprecated. ([#17113](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/17113))
- Deprecated the declarative config name `statement_sanitizer` in favor of `query_sanitization`, and the declarative config group `common.database` in favor of `common.db`. ([#17116](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/17116))
- Deprecated the GraphQL declarative config name `query_sanitizer` in favor of `query_sanitization`. ([#17455](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/17455))
- Deprecated the DB query sanitization system property names `otel.instrumentation.common.db-statement-sanitizer.enabled`, `otel.instrumentation.jdbc.statement-sanitizer.enabled`, `otel.instrumentation.mongo.statement-sanitizer.enabled`, and `otel.instrumentation.r2dbc.statement-sanitizer.enabled` in favor of the corresponding `*.query-sanitization.enabled` names, deprecated `otel.instrumentation.common.experimental.db-sqlcommenter.enabled` in favor of `otel.instrumentation.common.db.experimental.sqlcommenter.enabled`, and deprecated `otel.instrumentation.graphql.query-sanitizer.enabled` in favor of `otel.instrumentation.graphql.query-sanitization.enabled`. ([#17464](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/17464))
- Deprecate `InstrumentationModule.isIndyModule()`; indy mode is now determined by the agent distribution configuration instead of per-module overrides. ([#17713](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/17713))

### 📈 Enhancements

- Remove `log4j.map_message.` prefix from MapMessage attributes when `otel.instrumentation.common.v3-preview` is enabled. ([#13871](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/13871))
- Stop normalizing messaging header names (dash to underscore) when `otel.instrumentation.common.v3-preview` is enabled, so captured header attribute keys now preserve the original header name. ([#14554](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/14554))
- Add `db.system.name` attribute to Vertx SQL client instrumentation when stable database semantic conventions are enabled (`otel.semconv-stability.opt-in=database`). ([#16254](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16254))
- JDBC instrumentation now supports the `db.system.name` attribute with stable semantic convention values (e.g., `postgresql`, `oracle.db`, `ibm.db2`, `sap.hana`) when stable database semantic conventions are enabled (`otel.semconv-stability.opt-in=database`). ([#16277](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16277))
- Add `otel.instrumentation.common.v3-preview` flag that enables upcoming 3.0 breaking changes early. ([#16459](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16459))
- Optimized log event MDC attribute mapping in jboss-logmanager, log4j, and logback appenders by pre-computing attribute keys at initialization. ([#16765](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16765))
- Add `messaging.kafka.bootstrap.servers` attribute to Kafka producer spans when `otel.instrumentation.kafka.experimental-span-attributes` is enabled. ([#17065](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/17065))
- Disable servlet trace-id request attribute by default when `otel.instrumentation.common.v3-preview` is enabled. ([#17173](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/17173))
- Disable thread details span processor (`otel.javaagent.add-thread-details`) by default when `otel.instrumentation.common.v3-preview` is enabled. ([#17215](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/17215))
- Improved javaagent startup optimization by decomposing disjunction matchers, allowing more transformations to be skipped during class loading. ([#17227](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/17227))
- Add stable `messaging.kafka.offset` attribute to Kafka instrumentation, gated behind `otel.semconv-stability.preview=messaging`. ([#17785](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/17785))
- Preserve original casing of servlet request parameter names in attribute keys when `otel.instrumentation.common.v3-preview` is enabled. ([#17822](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/17822))
- Replace reflective mutation of Byte Buddy's `AgentBuilder.Default.transformations` with a `ClassFileTransformer` hook, avoiding a JDK 26 JEP 500 warning about writing to a final field via reflection. ([#17824](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/17824))
- Add javaagent bridging support for OpenTelemetry API 1.61 stable methods including `Tracer.isEnabled()`, metric instrument `isEnabled()`, and `Logger.setBody(Body)`. ([#17849](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/17849))

### 🛠️ Bug fixes

- Fix `WebClientBeanPostProcessor` and `RestClientBeanPostProcessor` to avoid replacing user-customized builder beans when the OpenTelemetry tracing filter/interceptor is already registered. ([#15546](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/15546))
- Fix memory leak where bridged observable metric callbacks were never closed when the application-side instrument was garbage collected. ([#16219](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16219))
- Fix Ktor server instrumentation leaking scope across requests due to `restoreThreadContext` not always being called by Ktor coroutine machinery. ([#16487](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16487))
- Add missing `schemaUrl` to servlet response instrumenter. ([#16560](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16560))
- Fix `OpenTelemetryContextDataProvider` calling `GlobalOpenTelemetry.get()` during class initialization, which could interfere with SDK setup ordering. ([#16638](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16638))
- Fix ZIO instrumentation destroying caller thread context on fiber suspend, which caused spans created after `unsafe.run` to lose their parent. ([#16647](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16647))
- Fix Spring Boot starter adding a duplicate OpenTelemetry logback appender when the appender is nested inside another appender. ([#16697](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16697))
- Fix bridging of `VALUE`-type attributes set via `AttributeKey.valueKey()` on spans and log records through the javaagent API bridge. ([#16750](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16750))
- Fix unsafe deserialization in RMI instrumentation that could lead to remote code execution ([CVE-2026-33701](https://github.com/open-telemetry/opentelemetry-java-instrumentation/security/advisories/GHSA-xw7x-h9fj-p2c7), [#16986](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16986), also released in 2.26.1)
- Fix boot loader class injection for `httpurlconnection`, `methods`, and `rmi` instrumentations to use `MethodHandles.Lookup` instead of unsafe fallback on JDK 23+. ([#17050](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/17050))
- Fix runtime-telemetry to fall back to JMX metrics when `preferJfr` is enabled but JFR is not available. ([#17058](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/17058))
- Fix `NullPointerException` in servlet instrumentation when response object is null during error handling. ([#17087](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/17087))
- Limit sanitized Redis command length to 32 KB to prevent excessive memory usage from very large commands. ([#17139](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/17139))
- Fix Apache Dubbo 2.7 instrumentation SPI resource path so that filters are properly discovered by Dubbo's extension loader. ([#17210](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/17210))
- Log suppressed failures from Netty HTTP server response customization instead of swallowing them. ([#17220](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/17220))
- Fix span leak on cancelled requests in Spring WebFlux server library instrumentation. ([#17222](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/17222))
- Fix Kafka wrapped producer to respect `setPropagationEnabled(false)` and not inject trace context into message headers when propagation is disabled. ([#17231](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/17231))
- Fix deadlock in `IgnoredClassLoadersMatcher` caused by `computeIfAbsent` holding a lock while calling `loadClass`. ([#17241](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/17241))
- Fix Pulsar consumer instrumentation failing to instrument message listeners in newer Pulsar client versions where `triggerListener` was refactored into a lambda. ([#17405](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/17405))
- Fix Kafka producer wrapper silently dropping context propagation when `ProducerRecord` headers are read-only (e.g. when a record is sent a second time). ([#17530](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/17530))
- Fix `NullPointerException` in Undertow instrumentation when the active-handlers context key is absent. ([#17559](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/17559))
- Fix `HttpServerResponseCustomizer` error isolation so that a failing customizer no longer prevents subsequent customizers from running. ([#17617](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/17617))
- Fix `rocketmq-client-4.8` instrumentation not recording spans for ONEWAY messages. ([#17656](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/17656))
- Fix internal application logger not activating when `otel.instrumentation.common.default-enabled` is set to `false`. ([#17657](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/17657))
- Fix floating-point precision issue when converting Micrometer timer histogram bucket boundaries from nanoseconds to the target time unit. ([#17715](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/17715))
- Fix `ClassNotFoundException` in `MicrometerBridgeAutoConfiguration` when Spring Boot Actuator metrics module is not on the classpath in Spring Boot 4. ([#17723](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/17723))
- Align RMI context propagation limits with Tomcat defaults, reducing max entries from 1000 to 100 and adding an 8 KB total size limit to prevent excessively large payloads. ([#17870](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/17870))
- Fix runtime-telemetry unconditionally enabling experimental JFR-based metrics when `otel.instrumentation.runtime-telemetry.emit-experimental-metrics=true`, which could impose unwanted JFR recording overhead on users who only wanted the JMX-based experimental metrics. JFR-based experimental metrics are now gated by a separate `otel.instrumentation.runtime-telemetry.emit-experimental-jfr-metrics` property. ([#18110](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18110))

### 🙇 Thank you

This release was possible thanks to the following contributors who shared their brilliant ideas and awesome pull requests:

@breedx-splk
@caglareker
@divitsinghall
@IswaryaIyapalam
@jaydeluca
@kchrusciel
@kriegaex
@laurit
@lenin-jaganathan
@lmolkova
@lucacavenaghi97
@maryliag
@mznet
@onurkybsi
@pepeshore
@sam-ov
@steverao
@SylvainJuge
@trask
@Tusharika725
@unalpolat
@utafrali
@wpessers
@xiangtianyu
@YaoYingLong
@zeitlinger
@zhenlin-pay2

---

> **Source** [open-telemetry/opentelemetry-java-instrumentation](https://github.com/open-telemetry/opentelemetry-java-instrumentation) · `v2.27.0` · 2026-04-21 · [upstream release](https://github.com/open-telemetry/opentelemetry-java-instrumentation/releases/tag/v2.27.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
