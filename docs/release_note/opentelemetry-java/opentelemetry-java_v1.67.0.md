---
title: "opentelemetry-java v1.67.0"
project: "opentelemetry-java"
repo: "open-telemetry/opentelemetry-java"
tag: "v1.67.0"
published: "2026-10-09"
type: "minor"
lang: "en"
summary: "This release was possible thanks to the following contributors who shared their brilliant ideas and awesome pull requests:"
---

# opentelemetry-java v1.67.0

### API

* Deprecate `TextMapGetter.keys()` and make `TextMapGetter` a functional interface ([#8531](https://github.com/open-telemetry/opentelemetry-java/pull/8531))
* Add null guards and API usage logging for tracing, baggage, attributes, logging, and metrics ([#8803](https://github.com/open-telemetry/opentelemetry-java/pull/8803), [#8863](https://github.com/open-telemetry/opentelemetry-java/pull/8863), [#8864](https://github.com/open-telemetry/opentelemetry-java/pull/8864))
* Bound allocations and avoid regex backtracking when parsing W3C `tracestate` ([#8817](https://github.com/open-telemetry/opentelemetry-java/pull/8817), [#8914](https://github.com/open-telemetry/opentelemetry-java/pull/8914))

#### Incubating

* Add type introspection methods to `DeclarativeConfigProperties` ([#8883](https://github.com/open-telemetry/opentelemetry-java/pull/8883))

#### Extensions

* Trace propagators: Bound allocations when parsing Jaeger baggage and B3 single-header propagation ([#8817](https://github.com/open-telemetry/opentelemetry-java/pull/8817))

### SDK

* Run `CompletableResultCode` completion actions outside internal locks to avoid deadlocks ([#8773](https://github.com/open-telemetry/opentelemetry-java/pull/8773))
* Do not count attribute overwrites as dropped attributes ([#8833](https://github.com/open-telemetry/opentelemetry-java/pull/8833))
* Avoid regex backtracking in glob matching ([#8909](https://github.com/open-telemetry/opentelemetry-java/pull/8909))
* Add experimental resource entity support, OTLP export, and configuration through `otel.entities` and declarative resource detectors ([#8464](https://github.com/open-telemetry/opentelemetry-java/pull/8464))

#### Traces

* Return noop tracers when no span processors are configured ([#8815](https://github.com/open-telemetry/opentelemetry-java/pull/8815))
* Catch `Throwable` in `SimpleSpanProcessor` and `MultiSpanExporter` ([#8848](https://github.com/open-telemetry/opentelemetry-java/pull/8848))
* Use `{span}` units for span processor self-observability metrics ([#8873](https://github.com/open-telemetry/opentelemetry-java/pull/8873))

#### Metrics

* Stabilize `PeriodicMetricReaderBuilder.setMaxExportBatchSize(int)` ([#8829](https://github.com/open-telemetry/opentelemetry-java/pull/8829))
* Delete experimental metric attribute / baggage processing ([#8818](https://github.com/open-telemetry/opentelemetry-java/pull/8818))
* Fix: Reset exemplar span context when a reservoir cell is overwritten outside a span ([#8871](https://github.com/open-telemetry/opentelemetry-java/pull/8871))

#### Logs

* Return noop loggers from `SdkLoggerProvider.get()` when no log record processors are configured ([#8838](https://github.com/open-telemetry/opentelemetry-java/pull/8838))
* Catch `Throwable` in `SimpleLogRecordProcessor` and `MultiLogRecordExporter` ([#8848](https://github.com/open-telemetry/opentelemetry-java/pull/8848))

#### Profiles

* Fix `KeyValueAndUnitData.create()` to return the public `KeyValueAndUnitData` interface ([#8875](https://github.com/open-telemetry/opentelemetry-java/pull/8875))

#### Exporters

* OTLP: Fix missing request size limits, defaulting to 64 MiB, configurable through `setMaxRequestBodySize(long)` and `setMaxRequestMessageSize(long)` and through declarative config `OtlpGrpcExporter`, `OtlpHttpExporter` (see full schema docs [here](https://opentelemetry.io/docs/specs/otel-config/types/#type-otlpgrpcexporter)) ([#8446](https://github.com/open-telemetry/opentelemetry-java/pull/8446))
* OTLP: Reduce failure logs to `FINE` after shutdown ([#8819](https://github.com/open-telemetry/opentelemetry-java/pull/8819))
* OTLP: retry gRPC based on response status codes in trailer headers ([#8854](https://github.com/open-telemetry/opentelemetry-java/pull/8854))
* Prometheus: Avoid regex backtracking when removing unit annotations ([#8910](https://github.com/open-telemetry/opentelemetry-java/pull/8910))

#### Extensions

* Autoconfigure: Stabilize `ServiceInstanceIdResourceProvider` and generate `service.instance.id` by default ([#8770](https://github.com/open-telemetry/opentelemetry-java/pull/8770))
* Autoconfigure: Preserve unencoded non-ASCII characters when decoding resource attributes ([#8893](https://github.com/open-telemetry/opentelemetry-java/pull/8893))
* Autoconfigure: Add missing artifact hints for `experimental-otlp/stdout` span and metric exporters ([#8897](https://github.com/open-telemetry/opentelemetry-java/pull/8897))
* Declarative config: Update to schema v1.2.0 and support the `always_record` sampler ([#8801](https://github.com/open-telemetry/opentelemetry-java/pull/8801))
* Declarative config: Ignore resource attributes with null values ([#8889](https://github.com/open-telemetry/opentelemetry-java/pull/8889))
* Declarative config: Match array attributes element-wise in the `rule_based` sampler ([#8895](https://github.com/open-telemetry/opentelemetry-java/pull/8895))
* Jaeger remote sampler: Reduce failure logs to `FINE` after shutdown ([#8819](https://github.com/open-telemetry/opentelemetry-java/pull/8819))
* Jaeger remote sampler: Preserve per-operation sampling strategies when the rate limit is zero ([#8888](https://github.com/open-telemetry/opentelemetry-java/pull/8888))
* Incubator: Make `OnEndSpanProcessor.create()` public ([#8892](https://github.com/open-telemetry/opentelemetry-java/pull/8892))
* Incubator: Fix the class name in `ComposableProbabilitySampler` descriptions ([#8891](https://github.com/open-telemetry/opentelemetry-java/pull/8891))

#### Testing

* Fix assertion failure messages reporting the wrong value or type ([#8872](https://github.com/open-telemetry/opentelemetry-java/pull/8872))

### Shims

* OpenCensus: Skip W3C multi-tenant `tracestate` keys when converting spans ([#8810](https://github.com/open-telemetry/opentelemetry-java/pull/8810))
* OpenTracing: Propagate baggage to the parent context in `SpanBuilderShim` ([#8812](https://github.com/open-telemetry/opentelemetry-java/pull/8812))

### Project tooling

* Kotlin extension: Raise the minimum Kotlin version to 2.2 ([#8804](https://github.com/open-telemetry/opentelemetry-java/pull/8804))


### 🙇 Thank you
This release was possible thanks to the following contributors who shared their brilliant ideas and awesome pull requests:

@adhamahmad
@ADITYA-CODE-SOURCE
@amit306
@AndresBena19
@anjeongkyun
@arnabnandy7
@cfredri4
@codedbyadiiii
@colamong
@dashpole
@efegokdemir
@EvgeniiR
@gfelbing
@jack-berg
@jaydeluca
@jkwatson
@JnRouvignac
@johnbley
@jsuereth
@kevinburkesegment
@Oberon00
@opentelemetry-pr-dashboard
@opentelemetrybot
@psx95
@Rajkaran-122
@rooks-ns
@rotscher
@saivarun1410
@thswlsqls
@trask
@Vicky677
@zeitlinger

---

> **Source** [open-telemetry/opentelemetry-java](https://github.com/open-telemetry/opentelemetry-java) · `v1.67.0` · 2026-10-09 · [upstream release](https://github.com/open-telemetry/opentelemetry-java/releases/tag/v1.67.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
