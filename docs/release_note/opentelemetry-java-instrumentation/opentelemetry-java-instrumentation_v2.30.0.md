---
title: "opentelemetry-java-instrumentation v2.30.0"
project: "opentelemetry-java-instrumentation"
repo: "open-telemetry/opentelemetry-java-instrumentation"
tag: "v2.30.0"
published: "2026-07-22"
type: "minor"
lang: "en"
summary: "This release targets the OpenTelemetry SDK 1.64.0."
---

# opentelemetry-java-instrumentation v2.30.0

This release targets the OpenTelemetry SDK 1.64.0.

Note that many artifacts have the `-alpha` suffix attached to their version number, reflecting that they will continue to have breaking changes. Please see [VERSIONING.md](https://github.com/open-telemetry/opentelemetry-java-instrumentation/blob/main/VERSIONING.md#opentelemetry-java-instrumentation-versioning) for more details.

### ⚠️ Breaking changes to non-stable APIs

- Remove `ExperimentalInstrumentationModule#getModuleGroup()`. Built-in invokedynamic modules now share a single `InstrumentationModuleClassLoader`, and each extension is isolated in its own. ([#18859](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18859))
- Remove the deprecated `InstrumentationModule.isIndyModule()`; whether a module uses invokedynamic is now determined by the agent rather than declared per module. ([#19140](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19140))
- Remove deprecated query-related APIs from `SqlClientAttributesGetter`, `CassandraRequest`, and `Experimental`. ([#19165](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19165))
- Remove the deprecated `Enduser*` attribute-capturing APIs from the Spring Security 6.0 library; use the `User*` replacements instead. ([#19168](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19168))

### 🚫 Deprecations

- Deprecate only the Spring Boot starter `ConfigProperties` compatibility bean used with experimental declarative configuration, in favor of the new `ConfigProvider` bean; it will be removed in 3.0. The `ConfigProperties` bean remains supported for non-declarative configuration. ([#19175](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19175))
- Deprecate `DeclarativeConfigPropertiesBridge` and `DeclarativeConfigPropertiesBridgeBuilder`. Use `DeclarativeConfigProperties` directly or `DeclarativeConfigBridge` instead. Will be removed in 3.0. ([#19202](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19202))
- Deprecate `ConfigPropertiesBackedConfigProvider` in favor of `DeclarativeConfigBridge`. It will be removed in 2.31.0. ([#19220](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19220))

### 🌟 New javaagent instrumentation

- Add Javaagent instrumentation for HBase client 1.4. ([#19087](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19087))

### 🌟 New library instrumentation

- Add library instrumentation (`ThriftTelemetry`) for the Apache Thrift 0.13 async server. ([#19062](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19062))

### 📈 Enhancements

- Add async server tracing to the Apache Thrift 0.13 javaagent instrumentation; async server handlers were previously uninstrumented. ([#18994](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18994))
- Support `database=` as an alias for `databaseName` when extracting `db.name` from MSSQL JDBC URLs. ([#19029](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19029))
- Add batch-operation support to the experimental stable database semantic-convention opt-in (`otel.semconv-stability.opt-in=database`) across database instrumentations, including batch span names, `db.operation.batch.size` (including empty batches), and `db.query.summary`. ([#19034](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19034), [#19037](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19037), [#19054](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19054), [#19055](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19055), [#19056](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19056), [#19057](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19057), [#19143](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19143), [#19147](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19147), [#19161](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19161), [#19162](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19162), [#19164](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19164), [#19172](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19172), [#19189](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19189), [#19199](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19199))
- Add tracing for Lettuce 4.0 reactive commands, including exceptional completion and cancellation. ([#19071](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19071))
- Add the experimental Cassandra JMX metrics target system. ([#19080](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19080))
- Add experimental JFR-based `jvm.thread.virtual.pinned` and `jvm.thread.virtual.submit_failed` metrics for Java 19+ virtual threads; enable with `otel.instrumentation.runtime-telemetry.emit-experimental-jfr-metrics=true`. ([#19092](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19092))
- Capture custom object values passed to `PreparedStatement.setObject()` in query parameter attributes. ([#19093](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19093))
- `InstrumentationModule` now exposes `injectedClassNames()` and `exposedClassNames()` for indy instrumentations, so module authors no longer need `ExperimentalInstrumentationModule` for those helper-class declarations. ([#19142](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19142))
- Add `captureTemplate` and `captureArguments` options to the log4j, java-util-logging, and jboss-logmanager logging instrumentations, capturing the log message template and arguments as separate `log.body.template` / `log.body.parameters` attributes; logback already supported these options ([#15423](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/15423)). ([#19154](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19154))
- Add `server.address` and `server.port` attributes to Redisson client spans. ([#19191](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19191))
- Add `server.address` and `server.port` attributes to Lettuce Redis client spans. ([#19192](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19192))
- Add `server.address` and `server.port` attributes to Rediscala client spans. ([#19193](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19193))
- Set `server.address` on registry-backed Dubbo client spans to the registry address plus the service target (`registry://host:port/interface:version:group`) and leave `server.port` unset, gated behind the stable rpc semconv opt-in (`otel.semconv-stability.opt-in=rpc`); the resolved provider host and port are kept under the default semconv. ([#17244](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/17244), [#19285](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19285))

### 🛠️ Bug fixes

- Fix a spurious duplicate warning when the application logger bridge is installed multiple times during startup. ([#19088](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19088))
- Fix MySQL and MariaDB `db.connection_string` values so IPv6 hosts stay bracketed instead of becoming ambiguous. ([#19078](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19078))
- Fix multi-topic Pulsar consumers so the internal background receive no longer creates a spurious extra receive span. ([#19095](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19095))
- `SpringConfigProperties.getMap()` no longer evaluates map property values as SpEL expressions; non-special-cased map properties now parse as comma-delimited `key=value` pairs via the SDK's `DefaultConfigProperties`, so settings like `otel.instrumentation.common.peer-service-mapping` work without SpEL syntax. ([#19113](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19113))
- Fix JMS destination extraction so an unreadable destination now leaves `messaging.destination.name` unset instead of reporting it as `unknown`. ([#19115](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19115))
- Fix the JMX Metric Insight `jvm.class.loaded` and `jvm.class.unloaded` metrics to use counter instruments. ([#19141](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19141))

### 🙇 Thank you

This release was possible thanks to the following contributors who shared their brilliant ideas and awesome pull requests:

@alokmajumder
@bhuvan-somisetty
@breedx-splk
@carlosalberto
@CodingFabian
@FrankSpitulski
@heyams
@hwxy233
@imavroukakis
@inssein
@ishg
@jaydeluca
@jkoronaAtCisco
@johnbley
@JonasKunz
@laurit
@maryliag
@maxxedev
@mmanciop
@opentelemetry-pr-dashboard
@opentelemetrybot
@pavolloffay
@philsttr
@robsunday
@ryanrupp
@steverao
@SylvainJuge
@trask
@tsawada
@xiangtianyu
@YaoYingLong
@zeitlinger

---

> **Source** [open-telemetry/opentelemetry-java-instrumentation](https://github.com/open-telemetry/opentelemetry-java-instrumentation) · `v2.30.0` · 2026-07-22 · [upstream release](https://github.com/open-telemetry/opentelemetry-java-instrumentation/releases/tag/v2.30.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
