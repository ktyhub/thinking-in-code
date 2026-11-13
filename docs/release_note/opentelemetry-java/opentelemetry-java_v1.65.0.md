---
title: "opentelemetry-java v1.65.0"
project: "opentelemetry-java"
repo: "open-telemetry/opentelemetry-java"
tag: "v1.65.0"
published: "2026-08-07"
type: "minor"
lang: "en"
summary: "NOTE: The opentelemetry-exporter-zipkin artifact has stopped being published. It was deprecated in a prior release. Users should migrate to OTLP or use a Zipkin-compatible collector exporter."
---

# opentelemetry-java v1.65.0

**NOTE:** The `opentelemetry-exporter-zipkin` artifact has stopped being published. It was deprecated in a prior release. Users should migrate to OTLP or use a Zipkin-compatible collector exporter.

### API

* Ignore empty baggage keys in `ImmutableBaggage.put` ([#8658](https://github.com/open-telemetry/opentelemetry-java/pull/8658))
* Use `NumberFormatException` in baggage decoder ([#8593](https://github.com/open-telemetry/opentelemetry-java/pull/8593))
* Fix `TraceStateBuilder.remove` corrupting the builder when the same key is removed twice ([#8613](https://github.com/open-telemetry/opentelemetry-java/pull/8613))

#### Incubating

* Add bound instrument APIs (`BoundLongCounter`, `BoundDoubleCounter`, `BoundLongHistogram`, `BoundDoubleHistogram`, `BoundLongUpDownCounter`, `BoundDoubleUpDownCounter`, `BoundLongGauge`, `BoundDoubleGauge`) to the incubator metrics API ([#8527](https://github.com/open-telemetry/opentelemetry-java/pull/8527))

#### Extensions

* Trace propagators: Fix `JaegerPropagator` baggage header key case sensitivity ([#8496](https://github.com/open-telemetry/opentelemetry-java/pull/8496))
* Trace propagators: Do not overwrite existing baggage with empty baggage in `JaegerPropagator` ([#8632](https://github.com/open-telemetry/opentelemetry-java/pull/8632))
* Trace propagators: Skip empty baggage keys in `OtTracePropagator` extract ([#8631](https://github.com/open-telemetry/opentelemetry-java/pull/8631))
* Trace propagators: Stop parsing a `jaeger-baggage` header after 64 tokens, including malformed tokens ([#8702](https://github.com/open-telemetry/opentelemetry-java/pull/8702))

### SDK

* Update SDK attributes implementation (`AttributesMap`) to enforce last-value-win semantics based on string value of `AttributeKey.getKey()` ([#8548](https://github.com/open-telemetry/opentelemetry-java/pull/8548))

#### Traces

* Add `Sampler` shutdown lifecycle: `Sampler` now extends `Closeable` and exposes a default `shutdown()` invoked when the `SdkTracerProvider` is shut down; `JaegerRemoteSampler` implements it to stop its polling executor ([#8574](https://github.com/open-telemetry/opentelemetry-java/pull/8574))

#### Metrics

* Gate `PeriodicMetricReader` self-observability metrics by internal telemetry version ([#8597](https://github.com/open-telemetry/opentelemetry-java/pull/8597))
* Record `error.type` on failed collections in `PeriodicMetricReader` ([#8650](https://github.com/open-telemetry/opentelemetry-java/pull/8650))
* Testing: Fix `LongExemplarAssert.hasFilteredAttributesSatisfyingExactly` to enforce exact attribute matching ([#8518](https://github.com/open-telemetry/opentelemetry-java/pull/8518))

#### Logs

* Fix `ReadWriteLogRecord` default `getObservedTimestampEpochNanos` returning the record timestamp ([#8504](https://github.com/open-telemetry/opentelemetry-java/pull/8504))

#### Profiles

* Fix profiles data model attribute count parameter name and timestamp doc unit ([#8514](https://github.com/open-telemetry/opentelemetry-java/pull/8514))

#### Exporters

* **WARNING** Zipkin: Delete `opentelemetry-exporter-zipkin`; the artifact is no longer published ([#8677](https://github.com/open-telemetry/opentelemetry-java/pull/8677))
* OTLP: Use HTTP error response bodies in `HttpExporter` warning logs ([#8428](https://github.com/open-telemetry/opentelemetry-java/pull/8428))
* OTLP: Fix `OkHttpHttpSender` mTLS when using the platform default trust store ([#8565](https://github.com/open-telemetry/opentelemetry-java/pull/8565))
* OTLP: Fix sign extension on `LogRecord` flags in the low-allocation log marshaler ([#8493](https://github.com/open-telemetry/opentelemetry-java/pull/8493))
* OTLP: Standardize `OkHttpHttpSender`, `JdkHttpSender`, and `UpstreamGrpcSender` shutdown to await executor/channel termination ([#8495](https://github.com/open-telemetry/opentelemetry-java/pull/8495), [#8627](https://github.com/open-telemetry/opentelemetry-java/pull/8627), [#8624](https://github.com/open-telemetry/opentelemetry-java/pull/8624))
* OTLP: Log the underlying except/ion when a gRPC response frame is invalid ([#8626](https://github.com/open-telemetry/opentelemetry-java/pull/8626))
* OTLP: Avoid the unsafe string encoder on Android ([#8637](https://github.com/open-telemetry/opentelemetry-java/pull/8637))
* Prometheus: Merge colliding Prometheus label values ([#8364](https://github.com/open-telemetry/opentelemetry-java/pull/8364))
* Prometheus: Fix `PrometheusHttpServer.toBuilder()` dropping the configured default handler ([#8619](https://github.com/open-telemetry/opentelemetry-java/pull/8619))
* Logging: Output event name in `SystemOutLogRecordExporter` ([#8609](https://github.com/open-telemetry/opentelemetry-java/pull/8609))
* Logging: Include aggregation temporality in `LoggingMetricExporter` `toString` ([#8623](https://github.com/open-telemetry/opentelemetry-java/pull/8623))

#### Extensions

* Autoconfigure: Avoid exposing configuration values in error messages ([#8669](https://github.com/open-telemetry/opentelemetry-java/pull/8669))
* Declarative config: Fix Jaeger sampler polling interval configuration ([#8668](https://github.com/open-telemetry/opentelemetry-java/pull/8668))
* Declarative config: Remove duplicate `getStringList` resolver in `DeclarativeConfigPropertyUtil` ([#8572](https://github.com/open-telemetry/opentelemetry-java/pull/8572))
* Declarative config: Replace `jsonschema2pojo` with a hand-rolled POJO generator ([#8600](https://github.com/open-telemetry/opentelemetry-java/pull/8600))
* Incubator: Restore compliance between composite samplers code and the spec ([#8450](https://github.com/open-telemetry/opentelemetry-java/pull/8450))

### Shims

* **DEPRECATION** Deprecate the OpenCensus shim public API ([#8674](https://github.com/open-telemetry/opentelemetry-java/pull/8674))
* OpenCensus: Preserve OpenCensus status description when converting to OpenTelemetry ([#8511](https://github.com/open-telemetry/opentelemetry-java/pull/8511))
* OpenCensus: Add links to the OpenTelemetry span instead of logging a warning and dropping them ([#8635](https://github.com/open-telemetry/opentelemetry-java/pull/8635))
* OpenTracing: Return `null` from `TracerShim` extract when the carrier has no span context ([#8505](https://github.com/open-telemetry/opentelemetry-java/pull/8505))
* OpenTracing: Return the extracted `SpanContext` when it is sampled but invalid ([#8634](https://github.com/open-telemetry/opentelemetry-java/pull/8634))

### Project tooling

* Pin japicmp baseline in `version.gradle.kts` ([#8591](https://github.com/open-telemetry/opentelemetry-java/pull/8591))
* Update contributing guide in response to feedback ([#8655](https://github.com/open-telemetry/opentelemetry-java/pull/8655))


### 🙇 Thank you
This release was possible thanks to the following contributors who shared their brilliant ideas and awesome pull requests:

@abdessattar23
@ADITYA-CODE-SOURCE
@anoopjb
@breedx-splk
@calohmn
@ChenX1993
@cijothomas
@Dainerx
@Debashismitra01
@EvgeniiR
@fossadvocate86
@jack-berg
@jaydeluca
@jkwatson
@kevinburkesegment
@LarryHu0217
@LikeTheSalad
@maryliag
@NithinU2802
@opentelemetry-pr-dashboard
@PeterF778
@prasadw
@psx95
@Rajkaran-122
@Sabaev
@Teseus84
@thswlsqls
@TimurRakhmatullin86
@trask
@vadyanuch13-ai
@zeitlinger

---

> **Source** [open-telemetry/opentelemetry-java](https://github.com/open-telemetry/opentelemetry-java) · `v1.65.0` · 2026-08-07 · [upstream release](https://github.com/open-telemetry/opentelemetry-java/releases/tag/v1.65.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
