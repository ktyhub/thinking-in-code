---
title: "opentelemetry-java-instrumentation v2.29.0"
project: "opentelemetry-java-instrumentation"
repo: "open-telemetry/opentelemetry-java-instrumentation"
tag: "v2.29.0"
published: "2026-06-19"
type: "minor"
lang: "en"
summary: "This release targets the OpenTelemetry SDK 1.63.0."
---

# opentelemetry-java-instrumentation v2.29.0

This release targets the OpenTelemetry SDK 1.63.0.

Note that many artifacts have the `-alpha` suffix attached to their version number, reflecting that they will continue to have breaking changes. Please see [VERSIONING.md](https://github.com/open-telemetry/opentelemetry-java-instrumentation/blob/main/VERSIONING.md#opentelemetry-java-instrumentation-versioning) for more details.

### ⚠️ Breaking changes to non-stable APIs

- Change the return type for `JmxTelemetry.start(...)` APIs. ([#18782](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18782))
- Experimental runtime package telemetry now emits `package.checksum_algorithm=SHA-256` and 64-character `package.checksum` values instead of SHA1 checksums. ([#18846](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18846))

### 🚫 Deprecations

- Rename the common logging context keys to `otel.instrumentation.common.logging.trace-id-key`, `otel.instrumentation.common.logging.span-id-key`, and `otel.instrumentation.common.logging.trace-flags-key`, while keeping the old property names deprecated. ([#18851](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18851))
- Rename the `kafka-broker` and `kafka-connect` JMX target systems to `experimental-kafka-broker` and `experimental-kafka-connect`; the old names still work for now and log a warning. ([#18971](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18971))

### 🌟 New javaagent instrumentation

- Add SOFARPC 5.4 instrumentation that emits RPC client and server spans and metrics. ([#15589](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/15589))
- Add Javaagent instrumentation for HBase client 2.0.0 through 2.5.0. ([#18253](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18253))

### 📈 Enhancements

- Add opt-in support for emitting HTTP request exceptions as log signals with `otel.semconv.exception.signal.preview=logs`. ([#16259](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16259))
- Add `opentelemetry-api-1.63` Javaagent instrumentation for OpenTelemetry API 1.63 and `opentelemetry-api-incubator` 1.63. ([#18911](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18911))
- Add `otel.semconv-stability.v3-preview` as a fallback for the declarative `v3_preview` semconv stability setting. ([#18936](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18936))
- Update the experimental stable database semantic-convention opt-in (`otel.semconv-stability.opt-in=database`) across database instrumentations, including span names and `db.*` attributes. ([#18808](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18808), [#18853](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18853), [#18920](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18920), [#18922](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18922), [#18926](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18926), [#18930](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18930), [#18970](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18970), [#18979](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18979), [#18980](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18980), [#18984](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18984), [#18985](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18985), [#18986](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18986), [#18987](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18987), [#18989](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18989), [#18990](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18990), [#18992](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18992), [#18993](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18993), [#19004](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19004), [#19005](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19005))
- Capture query text and parameterization for Cassandra batch statements. ([#18964](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18964))
- Keep `opentelemetry-api` and `opentelemetry-instrumentation-annotations` enabled under `otel.instrumentation.common.v3-preview` even when `default-enabled=false`. ([#18792](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18792))
- When `otel.instrumentation.common.v3-preview` is enabled, affected instrumentations emit `user.*` identity attributes instead of `enduser.*` ones. ([#18795](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18795))
- Disable Kafka client metrics by default when `otel.instrumentation.common.v3-preview=true`. ([#18828](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18828))
- Recognize Amazon Aurora DSQL and AWS wrapper JDBC URL prefixes when parsing JDBC connection metadata. ([#18831](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18831))
- Set instrumentation versions on emitted Meter scopes. ([#18866](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18866))
- Run `@WithSpan` instrumentation after other instrumentations so other advice can attach attributes to the active span. ([#18874](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18874))
- Emit database client failures as `db.client.operation.exception` logs when `otel.semconv.exception.signal.preview` is enabled. ([#18889](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18889))
- Emit RPC exceptions as log records when `otel.semconv.exception.signal.preview=logs` is enabled. ([#18890](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18890))
- Emit messaging exceptions as log records under `otel.semconv.exception.signal.preview`. ([#18891](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18891))
- Emit `faas.invocation.exception` log records for FaaS exceptions when `otel.semconv.exception.signal.preview=logs` is enabled. ([#18892](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18892))
- Emit `gen_ai.client.operation.exception` logs for OpenAI chat and embeddings failures when `otel.semconv.exception.signal.preview=logs` is enabled. ([#18893](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18893))
- Emit AWS SDK request failures as `rpc.client.call.exception` log records when `otel.semconv.exception.signal.preview=logs` is enabled. ([#18894](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18894))
- Declarative configuration now supports per-domain semantic-convention selection using `semconv.version`, `semconv.experimental`, and `semconv.dual_emit` settings. ([#18908](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18908))
- When `otel.instrumentation.common.v3-preview` is enabled, use `otel.semconv-stability.preview` instead of `otel.semconv-stability.opt-in` to opt in to the nonstable `service.peer` and `rpc` semantic conventions. ([#18914](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18914))
- Disable Kotlin coroutines `@WithSpan` instrumentation by default when `otel.instrumentation.common.v3-preview=true`. ([#18919](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18919))
- Use the summary-aware path in `SqlQueryAnalyzer.analyze()` when `otel.instrumentation.common.v3-preview` is enabled. ([#18921](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18921))
- When `otel.instrumentation.common.v3-preview` is enabled, deprecated JDBC/db sanitization config names are ignored in favor of `db.query_sanitization.enabled`. ([#18934](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18934))
- Include `jvm.gc.cause` on GC duration metrics when `otel.instrumentation.common.v3-preview` is enabled. ([#18967](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18967))
- Emit duration metrics for JDBC transaction operations `COMMIT` and `ROLLBACK`. ([#19003](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19003))
- Use a generated `InstrumentationVersion` class in OkHttp 3.0 instead of reading embedded version properties, avoiding Android StrictMode disk-read violations. ([#19006](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19006))
- Add thread details span attributes for declarative Spring starter configuration when `distribution.spring_starter.thread_details_enabled` is set. ([#19008](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19008))

### 🛠️ Bug fixes

- Preserve the current context for Redisson command execution futures so async operations continue the active trace. ([#18701](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18701))
- Stop the Pulsar agent from creating duplicate receive spans for multi-topic consumers. ([#18771](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18771))
- Fix a hang in Ktor client streaming requests so spans end promptly with Ktor 3.5.0. ([#18781](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18781))
- Fix a `Bedrock` `converseStream` `NullPointerException` when a tool call has empty arguments. ([#18783](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18783))
- Capture the Pulsar message ID earlier so producer spans can record it reliably. ([#18803](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18803))
- Fix SQLite JDBC statement and prepared-statement instrumentation so SQLite connections produce SQL spans and parameter capture. ([#18885](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18885))
- Fix Logback MDC declarative configuration keys so `otel.instrumentation/development.java.*` settings apply correctly. ([#18924](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18924))
- Fix SQL password sanitization for mixed-case DDL targets like `create table` and `alter table`. ([#18927](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18927))
- Logs emitted through async Log4j loggers now keep the application thread's OpenTelemetry `Context` instead of falling back to span-only recovery. ([#18937](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18937))
- Avoid instrumentation errors when loading `redis.clients.jedis.Jedis`, `BinaryJedis`, and `UnifiedJedis`. ([#19000](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19000))
- Run OpenSearch async callbacks with the request's parent context. ([#19027](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19027))

### 🙇 Thank you

This release was possible thanks to the following contributors who shared their brilliant ideas and awesome pull requests:

@amccague
@anuraaga
@breedx-splk
@chlos
@Cirilla-zmh
@Deafaibrahim
@dengliming
@fangxiu-wf
@iblancasa
@jack-berg
@jakob-o
@jaydeluca
@jkoronaAtCisco
@laurit
@somiljain2006
@stefanopace
@steverao
@SylvainJuge
@tejasae-afk
@trask
@typat
@vikinghawk
@YaoYingLong
@zeitlinger

---

> **Source** [open-telemetry/opentelemetry-java-instrumentation](https://github.com/open-telemetry/opentelemetry-java-instrumentation) · `v2.29.0` · 2026-06-19 · [upstream release](https://github.com/open-telemetry/opentelemetry-java-instrumentation/releases/tag/v2.29.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
