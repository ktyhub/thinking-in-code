---
title: "opentelemetry-java-instrumentation v2.31.0"
project: "opentelemetry-java-instrumentation"
repo: "open-telemetry/opentelemetry-java-instrumentation"
tag: "v2.31.0"
published: "2026-08-20"
type: "minor"
lang: "en"
summary: "This release targets the OpenTelemetry SDK 1.65.0."
---

# opentelemetry-java-instrumentation v2.31.0

This release targets the OpenTelemetry SDK 1.65.0.

Note that many artifacts have the `-alpha` suffix attached to their version number, reflecting that they will continue to have breaking changes. Please see [VERSIONING.md](https://github.com/open-telemetry/opentelemetry-java-instrumentation/blob/main/VERSIONING.md#opentelemetry-java-instrumentation-versioning) for more details.

### ⚠️ Breaking changes to non-stable APIs

- Remove the deprecated `ConfigPropertiesBackedConfigProvider` and its `create(ConfigProperties)` compatibility API from the declarative config bridge. ([#19305](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19305))
- Stop exposing `opentelemetry-instrumentation-api-incubator` on library instrumentation compile classpaths. ([#19612](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19612))

### 🚫 Deprecations

- Deprecate `otel.instrumentation.experimental.span-suppression-strategy` in favor of `Experimental.setSpanSuppressionStrategy(...)`. ([#19180](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19180))
- Deprecate `HostIdResource.REGISTRY_QUERY` in favor of the absolute-path `reg.exe` lookup used by `HostIdResource`. ([#19293](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19293))
- Deprecate `MessageOperation` in favor of `MessagingOperationType`, and the `MessageOperation` overloads of `MessagingAttributesExtractor`, `MessagingConsumerMetrics`, `MessagingProducerMetrics`, `MessagingSpanKindExtractor`, and `MessagingSpanNameExtractor` in favor of the corresponding `MessagingOperationType` APIs. ([#19357](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19357))
- Deprecate `otel.traces.exporter=zipkin` in favor of `otel.traces.exporter=otlp`, and `otel.exporter.zipkin.endpoint` in favor of `otel.exporter.otlp.traces.endpoint`. ([#19400](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19400))
- Deprecate `OpenTelemetryMeterRegistryBuilder#setMicrometerHistogramGaugesEnabled(boolean)` in favor of `Experimental#setMicrometerHistogramGaugesEnabled(OpenTelemetryMeterRegistryBuilder, boolean)`. ([#19404](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19404))
- Deprecate legacy gRPC metadata, messaging header, and servlet request-parameter capture properties and APIs in favor of selector-based `.included` / `.excluded` configuration and `IncludeExclude` APIs. ([#19494](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19494), [#19522](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19522), [#19523](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19523), [#19638](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19638))
- Deprecate `otel.instrumentation.runtime-telemetry.experimental.prefer-jfr` in favor of `otel.instrumentation.runtime-telemetry.experimental.jfr-metrics.included`, and `setPreferJfrMetrics(...)` in favor of `setJfrMetrics(RuntimeTelemetryBuilder, IncludeExclude)`. ([#19495](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19495))
- Deprecate boolean and capture-list configuration for MDC/context data, map messages, key-value pairs, logger context, Logstash markers, and structured arguments in favor of `.included` / `.excluded` selectors and `IncludeExclude` APIs. ([#19519](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19519), [#19520](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19520), [#19521](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19521), [#19599](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19599), [#19600](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19600), [#19605](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19605), [#19609](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19609), [#19610](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19610))
- Deprecate the declarative configuration field `general.semconv_stability.opt_in` in favor of `general.stability_opt_in_list`, and `general.sanitization.url.sensitive_query_parameters/development` in favor of `general.sanitization.url.sensitive_query_parameters`. ([#19561](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19561))
- Deprecate `otel.instrumentation.graphql.add-operation-name-to-span-name.enabled` in favor of `otel.instrumentation.graphql.operation-name-in-span-name.enabled`, and `otel.instrumentation.runtime-telemetry.package-emitter.enabled` / `jars-per-second` in favor of `otel.instrumentation.runtime-telemetry.experimental.package-emitter.enabled` / `jars-per-second`. ([#19573](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19573))
- Deprecate captured request and response header builder methods across HTTP library instrumentations in favor of selector-based `requestHeaders(IncludeExclude)` and `responseHeaders(IncludeExclude)` APIs. ([#19598](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19598), [#19601](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19601), [#19602](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19602), [#19603](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19603), [#19604](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19604), [#19606](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19606), [#19607](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19607), [#19608](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19608))
- Deprecate `otel.instrumentation.micrometer.histogram-gauges.enabled` in favor of `otel.instrumentation.micrometer.experimental.histogram-gauges.enabled`. ([#19613](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19613))

### 🌟 New javaagent instrumentation

- Add Apache Commons Pool 2 instrumentation for object pool metrics. ([#19091](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19091))
- Add Apache HBase client 1.0 javaagent instrumentation. ([#19243](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19243))
- Add Redisson connection pool metrics for 3.26+. ([#19392](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19392))
- Add support for OpenTelemetry API 1.65 incubator metrics in the Java agent. ([#19456](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19456))
- Add Tomcat DBCP 8.0 javaagent instrumentation for database pool metrics. ([#19472](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19472))

### 📈 Enhancements

- Add opt-in OSGi bundle metadata for selected instrumentation, API, and SDK extension artifacts so they can be consumed directly in OSGi runtimes. ([#18995](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18995))
- Add `cassandra.compaction.progress.completed` and `cassandra.compaction.progress.size` gauges for in-flight Cassandra compactions. ([#19290](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19290))
- Preview the upcoming 3.0 messaging semantic conventions behind `otel.semconv-stability.opt-in=messaging` across AWS SQS and Lambda, JMS, Kafka, NATS, Pulsar, RabbitMQ, RocketMQ, Spring Integration, and Spring messaging instrumentations. ([#19347](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19347), [#19348](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19348), [#19349](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19349), [#19350](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19350), [#19351](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19351), [#19353](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19353), [#19354](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19354), [#19355](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19355), [#19356](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19356), [#19476](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19476), [#19477](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19477), [#19478](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19478), [#19479](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19479), [#19480](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19480), [#19481](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19481), [#19482](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19482), [#19486](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19486), [#19487](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19487), [#19499](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19499), [#19500](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19500), [#19504](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19504), [#19505](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19505), [#19507](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19507), [#19508](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19508), [#19535](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19535), [#19544](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19544), [#19565](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19565), [#19567](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19567), [#19639](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19639), [#19640](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19640))
- Under the upcoming 3.0 RPC semantic conventions behind `otel.semconv-stability.opt-in=rpc`, Dubbo requests to unknown services emit server spans even when decoding fails before `DubboProtocol.getInvoker()`, and record the original method in `rpc.method_original`. ([#16668](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16668))
- Log4j context data now includes `baggage.*` entries even when there is no current span. ([#19378](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19378))
- When `otel.instrumentation.common.v3-preview=true`, the Micrometer bridge no longer exports `.max` gauges for `Timer` and `DistributionSummary`. ([#19397](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19397))
- Add the `IncludeExclude` selector API to `opentelemetry-instrumentation-api` for matching strings against included and excluded glob patterns. ([#19451](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19451))
- Emit Cassandra driver 3 consistency, coordinator, page size, idempotence, and speculative execution attributes. ([#19629](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19629))
- Expand the upcoming 3.0 database semantic conventions behind `otel.semconv-stability.opt-in=database`, including operation names, namespaces, collection names, operation parameters, batch telemetry, and error types for Couchbase, Redis clients, Elasticsearch, R2DBC, JDBC, ClickHouse, MongoDB, and HBase. ([#19616](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19616), [#19623](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19623), [#19664](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19664), [#19665](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19665), [#19668](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19668), [#19670](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19670), [#19704](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19704), [#19705](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19705), [#19706](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19706), [#19707](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19707), [#19708](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19708))
- Add `otel.instrumentation.influxdb.query-sanitization.enabled` to control InfluxDB query sanitization, taking precedence over `otel.instrumentation.common.db.query-sanitization.enabled`. ([#19703](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19703))

### 🛠️ Bug fixes

- Use stable database-derived metric names for unnamed Alibaba Druid, c3p0, Tomcat JDBC, HikariCP, and Vibur connection pools. ([#19108](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19108), [#19159](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19159), [#19173](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19173), [#19470](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19470), [#19471](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19471))
- Apache DBCP 2.0 metrics now register when the pool starts even without JMX registration, and they unregister on `close()`. ([#19160](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19160))
- Skip instrumenting JDK tools launched from `$JAVA_HOME/bin` unless `otel.javaagent.enabled=true` is set. ([#19203](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19203))
- Fix Jetty JMX metrics to emit `jetty.select.count` instead of `jetty.io.select.count` for select-call counts. ([#19249](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19249))
- Fix Redisson connection pool permits leaking when a waiting async command is cancelled. ([#19340](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19340))
- Fix Spring WebFlux route detection so controller spans keep a readable route name on JDK 21+. ([#19365](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19365))
- Normalize IPv6 JDBC `server.address` values to bare addresses instead of bracketed literals. ([#19366](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19366))
- Fix Lettuce 5.1 instrumentation with indy by injecting `io.lettuce.core.protocol.OtelCommandArgsUtil` as a helper class. ([#19373](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19373))
- Add a 2-second timeout to `host.id` resource detection so slow lookup commands no longer block SDK startup. ([#19377](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19377))
- Fix azure-core instrumentation so applications that do not use the OpenTelemetry API still get Azure SDK tracing. ([#19387](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19387))
- MySQL JDBC URL parsing now handles hosts, ports, and query parameters in non-standard URL forms more reliably. ([#19394](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19394))
- Preload `MethodHandle$1` during agent startup to avoid `ClassCircularityError` on JDK 17 that can break invokedynamic call site linking. ([#19398](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19398))
- Redact sensitive data from AWS SigV4 query parameters, AWS Lambda API Gateway and Elasticsearch REST URLs, embedded URL credentials, and process command lines. ([#19422](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19422), [#19424](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19424), [#19425](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19425), [#19514](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19514))
- Fix Micrometer custom meter naming and prevent metric descriptions from leaking between related instruments or registries. ([#19463](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19463), [#19466](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19466), [#19467](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19467))
- Fix `activemq.destination.temp.utilization` to convert `%` values to a unitless fraction. ([#19512](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19512))
- Fix `jetty.thread.queue.size` to use the `{job}` unit instead of `{thread}`. ([#19513](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19513))
- Fix Spring Boot Actuator metric endpoints when the OpenTelemetry Micrometer registry is part of a composite registry or cannot return metric values. ([#19515](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19515), [#19541](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19541))
- IPv6 addresses in `Host` headers are now parsed correctly, including bracketed ports. ([#19540](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19540))
- Fix Pulsar receive spans under legacy messaging semantic conventions to evaluate suppression against the extracted producer context when receive telemetry is disabled. ([#19592](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19592))
- Preserve Dubbo's `ClusterInvoker` type when capturing the consumer registry address. ([#19568](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19568))
- Stop warning about deprecated selector-based capture settings when the corresponding `.included` or `.excluded` replacement is also configured. ([#19571](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19571))
- Preserve the configured database name's original case in legacy `db.name` and stable `db.namespace` for R2DBC spans. ([#19615](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19615))
- Capture spans for explicit prepared queries in Vert.x SQL client so `PreparedStatement.query()` execution keeps the correct `db.system` and connection options. ([#19619](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19619))
- Fix Cassandra 3 `SimpleStatement` sanitization so bound values are detected and hidden in `db.statement`. ([#19620](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19620))
- Emit exception events and logs for failed JDBC `commit` and `rollback` operations. ([#19621](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19621))
- Clear JDBC batch telemetry state after `executeBatch()` and `executeLargeBatch()` so subsequent batch spans no longer report stale batch contents. ([#19622](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19622))
- Keep `server.address` and `server.port` for failed Cassandra 3 operations by extracting the coordinator from `CoordinatorException`. ([#19627](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19627))
- SQL query text is now sanitized with `db.system.name`, so double-quoted identifiers stay intact for databases that treat them as identifiers. ([#19632](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19632))
- Fix AWS Lambda `RequestHandler` instrumentation so `void`-returning `handleRequest` methods are handled correctly. ([#19714](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19714))

### 🙇 Thank you

This release was possible thanks to the following contributors who shared their brilliant ideas and awesome pull requests:

@amirdeljouyi
@amit306
@anuraaga
@asarkar
@breedx-splk
@brunobat
@dangzitou
@gillesbergerp
@iNikem
@jack-berg
@jackshirazi
@jaydeluca
@jkoronaAtCisco
@johnbley
@juszczakn
@laurit
@lmolkova
@malafeev
@mateuszrzeszutek
@mvanhorn
@opentelemetry-pr-dashboard
@opentelemetrybot
@PapaPiya
@philippeLepage
@robe-schr-scacap
@royteeuwen
@safris
@Sebmaster
@steverao
@SylvainJuge
@szczeppan
@ThomasVitale
@trask
@tydhot
@ViliusS
@wl2027
@xiang17
@YaoYingLong
@zeitlinger

---

> **Source** [open-telemetry/opentelemetry-java-instrumentation](https://github.com/open-telemetry/opentelemetry-java-instrumentation) · `v2.31.0` · 2026-08-20 · [upstream release](https://github.com/open-telemetry/opentelemetry-java-instrumentation/releases/tag/v2.31.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
