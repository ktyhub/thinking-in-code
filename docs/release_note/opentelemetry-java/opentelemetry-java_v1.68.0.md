---
title: "opentelemetry-java v1.68.0"
project: "opentelemetry-java"
repo: "open-telemetry/opentelemetry-java"
tag: "v1.68.0"
published: "2026-11-06"
type: "minor"
lang: "en"
summary: "Add null guards and API usage logging for tracing, metrics, propagation, and context APIs (#8913, #8968) · Add stable io.opentelemetry.api.impl.Base16EncodingUtils and TemporaryBuffers utilities (#8929, #8955)"
---

# opentelemetry-java v1.68.0

### API

* Add null guards and API usage logging for tracing, metrics, propagation, and context APIs ([#8913](https://github.com/open-telemetry/opentelemetry-java/pull/8913), [#8968](https://github.com/open-telemetry/opentelemetry-java/pull/8968))
* Add stable `io.opentelemetry.api.impl.Base16EncodingUtils` and `TemporaryBuffers` utilities ([#8929](https://github.com/open-telemetry/opentelemetry-java/pull/8929), [#8955](https://github.com/open-telemetry/opentelemetry-java/pull/8955))
* Fix uncompilable Javadoc examples in context APIs ([#8934](https://github.com/open-telemetry/opentelemetry-java/pull/8934))

#### Incubating

* Avoid false type warnings in `DeclarativeConfigProperties.toMap()` ([#8921](https://github.com/open-telemetry/opentelemetry-java/pull/8921))

#### Extensions

* Trace propagators: Handle malformed URL escapes in Jaeger headers ([#8912](https://github.com/open-telemetry/opentelemetry-java/pull/8912))
* Trace propagators: Include the B3 debug header in multi-header propagation fields ([#8930](https://github.com/open-telemetry/opentelemetry-java/pull/8930))
* Trace propagators: Fix hexadecimal flag parsing in Jaeger headers ([#8975](https://github.com/open-telemetry/opentelemetry-java/pull/8975))

### SDK

* Remove cross-module internal utility dependencies from resource and retry code ([#8916](https://github.com/open-telemetry/opentelemetry-java/pull/8916))
* Add experimental `SdkResourceProvider` support shared by tracer, meter, and logger providers ([#8865](https://github.com/open-telemetry/opentelemetry-java/pull/8865))

#### Traces

* Retain invalid span links with attributes or trace state ([#8917](https://github.com/open-telemetry/opentelemetry-java/pull/8917))

#### Metrics

* Use a dedicated export worker in `PeriodicMetricReader`, queue concurrent flushes, and add `setExporterTimeout()` with a default equal to the export interval ([#8827](https://github.com/open-telemetry/opentelemetry-java/pull/8827))

#### Exporters

* Logging: Fall back to the observed timestamp in `SystemOutLogRecordExporter` when the timestamp is unset ([#8944](https://github.com/open-telemetry/opentelemetry-java/pull/8944))
* OTLP: Close the JDK HTTP response body on unsupported `Content-Encoding` ([#8962](https://github.com/open-telemetry/opentelemetry-java/pull/8962))
* OTLP: Match the `Host` header case-insensitively in the managed-channel gRPC sender ([#8957](https://github.com/open-telemetry/opentelemetry-java/pull/8957))
* OTLP: Fix exporter metric server attributes for hosts that `java.net.URI` cannot parse ([#8941](https://github.com/open-telemetry/opentelemetry-java/pull/8941))
* OTLP: Pass the original exception to the JDK HTTP sender's error callback ([#8963](https://github.com/open-telemetry/opentelemetry-java/pull/8963))
* OTLP: Retry OkHttp gRPC exports on the current thread to avoid rejection by bounded executors ([#8965](https://github.com/open-telemetry/opentelemetry-java/pull/8965))
* OTLP: Restore per-attempt retry logging in the OkHttp gRPC sender ([#8967](https://github.com/open-telemetry/opentelemetry-java/pull/8967))
* OTLP: Correct exporter builder Javadoc ([#8996](https://github.com/open-telemetry/opentelemetry-java/pull/8996))
* OTLP: Accept `0` as no limit for maximum request body and message sizes ([#8945](https://github.com/open-telemetry/opentelemetry-java/pull/8945))
* OTLP: gRPC exporter internal telemetry uses `rpc.status_code` instead of `rpc.response.status.code` when `InternalTelemetryVersion` is set to `LATEST` ([#9007](https://github.com/open-telemetry/opentelemetry-java/pull/9007))
* Prometheus: Give exemplar `trace_id` and `span_id` precedence over filtered attributes ([#8959](https://github.com/open-telemetry/opentelemetry-java/pull/8959))

#### Extensions

* **BREAKING** Incubator: Change `SamplingIntent.create()` and `getTraceStateUpdater()` from `Function` to `BiFunction` accepting the final `SamplingDecision`, and fix consistent sampling corner cases ([#8952](https://github.com/open-telemetry/opentelemetry-java/pull/8952))
* Autoconfigure: Match environment variables for configuration keys containing underscores ([#8933](https://github.com/open-telemetry/opentelemetry-java/pull/8933), [#8951](https://github.com/open-telemetry/opentelemetry-java/pull/8951))
* Autoconfigure: Support `PeriodicMetricReader` batch sizes through `otel.metric.export.max.batch.size` ([#8935](https://github.com/open-telemetry/opentelemetry-java/pull/8935))
* Autoconfigure: Correct SPI Javadoc ([#8900](https://github.com/open-telemetry/opentelemetry-java/pull/8900))

#### Testing

* Add fluent metric point assertions to `MetricAssert` ([#8994](https://github.com/open-telemetry/opentelemetry-java/pull/8994))
* Add a builder supporting aggregation temporality selectors to `InMemoryMetricExporter` ([#8993](https://github.com/open-telemetry/opentelemetry-java/pull/8993))


### 🙇 Thank you
This release was possible thanks to the following contributors who shared their brilliant ideas and awesome pull requests:

@anuraaga
@bogdandrutu
@breedx-splk
@dashpole
@jack-berg
@jameyg42
@jaydeluca
@jkwatson
@jsuereth
@kamikazeayoup
@nbiswal1
@NithinU2802
@opentelemetry-pr-dashboard
@psx95
@Rajkaran-122
@rooks-ns
@thswlsqls
@trask
@zeitlinger

---

> **Source** [open-telemetry/opentelemetry-java](https://github.com/open-telemetry/opentelemetry-java) · `v1.68.0` · 2026-11-06 · [upstream release](https://github.com/open-telemetry/opentelemetry-java/releases/tag/v1.68.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
