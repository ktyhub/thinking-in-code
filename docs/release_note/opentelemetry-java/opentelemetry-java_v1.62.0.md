---
title: "opentelemetry-java v1.62.0"
project: "opentelemetry-java"
repo: "open-telemetry/opentelemetry-java"
tag: "v1.62.0"
published: "2026-05-08"
type: "minor"
lang: "en"
summary: "Fix GHSA-rcgg-9c38-7xpx: Apply limits to baggage entries for W3CBaggagePropagator, OtTracePropagator, JaegerPropagator"
---

# opentelemetry-java v1.62.0

### API

#### Context

* Fix [GHSA-rcgg-9c38-7xpx](https://github.com/open-telemetry/opentelemetry-java/security/advisories/GHSA-rcgg-9c38-7xpx): Apply limits to baggage entries for `W3CBaggagePropagator`, `OtTracePropagator`, `JaegerPropagator`
  ([#8378](https://github.com/open-telemetry/opentelemetry-java/pull/8378))

### SDK

#### Traces

* Avoid `parentContext` allocation on span start for the common case ([#8332](https://github.com/open-telemetry/opentelemetry-java/pull/8332))

#### Metrics

* Add `setMaxExportBatchSize` to `PeriodicMetricReaderBuilder` ([#8296](https://github.com/open-telemetry/opentelemetry-java/pull/8296))
* Fix `PeriodicMetricReader` shutdown race that could drop the final flush ([#8299](https://github.com/open-telemetry/opentelemetry-java/pull/8299))

#### Exporters

* **BREAKING** Prometheus: Change default server host from `0.0.0.0` to `localhost` ([#8298](https://github.com/open-telemetry/opentelemetry-java/pull/8298))
* **BREAKING** Prometheus: Stop converting unit `"1"` to `"ratio"` ([#8252](https://github.com/open-telemetry/opentelemetry-java/pull/8252))
* OTLP: Fix null input handling in `StringEncoder` ([#8312](https://github.com/open-telemetry/opentelemetry-java/pull/8312))
* OTLP: Align proto field types and wire tag names in marshalers ([#8293](https://github.com/open-telemetry/opentelemetry-java/pull/8293))
* OTLP: Fix `MarshalerUtil` `sizeRepeatedString` calculation ([#8284](https://github.com/open-telemetry/opentelemetry-java/pull/8284))
* OTLP: Bound `JdkHttpSender` thread pool size to prevent unbounded thread creation ([#8276](https://github.com/open-telemetry/opentelemetry-java/pull/8276))
* OTLP Profiles: Split profiles data model into separate `sdk-profiles` and JFR shim modules ([#8207](https://github.com/open-telemetry/opentelemetry-java/pull/8207))
* OTLP Profiles: Publish alpha release of `opentelemetry-sdk-profiles` and `opentelemetry-exporter-otlp-profiles` ([#8351](https://github.com/open-telemetry/opentelemetry-java/pull/8351))

#### Extensions

* **BREAKING** Declarative config: Extract to new `opentelemetry-sdk-extension-declarative-config` artifact with new package `io.opentelemetry.sdk.autoconfigure.declarativeconfig` ([#8265](https://github.com/open-telemetry/opentelemetry-java/pull/8265))
* Autoconfigure: Add file size validation in `OtlpConfigUtil` to avoid unsafe cast to `int` ([#8287](https://github.com/open-telemetry/opentelemetry-java/pull/8287))
* Declarative config: Fix collection fields to not be initialized to empty by default ([#8356](https://github.com/open-telemetry/opentelemetry-java/pull/8356))
* Incubator: Add `EventToSpanEventBridge` to bridge log-based events to span events ([#8372](https://github.com/open-telemetry/opentelemetry-java/pull/8372))

#### Testing

* Add `@Nullable` to `equalTo` value argument in `OpenTelemetryAssertions` ([#8301](https://github.com/open-telemetry/opentelemetry-java/pull/8301))
* Add `hasValueSatisfying` to `LongPointAssert` and `DoublePointAssert` for fuzzy value matching ([#8328](https://github.com/open-telemetry/opentelemetry-java/pull/8328))
* Add `containsPointsSatisfying` to metric data asserts for "each given assertion must be satisfied by at least one point, extras allowed" checks on sum, gauge, histogram, exponential histogram, and summary data ([#8329](https://github.com/open-telemetry/opentelemetry-java/pull/8329))

### Project tooling

* Add initial OSGi support ([#7964](https://github.com/open-telemetry/opentelemetry-java/pull/7964))
* Promote `ApiUsageLogger` to `opentelemetry-common` public API ([#8318](https://github.com/open-telemetry/opentelemetry-java/pull/8318))
* Establish exception logging guidelines and fix inconsistent patterns across exporters and SDK ([#8231](https://github.com/open-telemetry/opentelemetry-java/pull/8231))
* Add `*.impl.*` package naming convention for internal code with japicmp compatibility ([#8325](https://github.com/open-telemetry/opentelemetry-java/pull/8325))
* Add Sonatype dependency audit to build ([#8365](https://github.com/open-telemetry/opentelemetry-java/pull/8365))


### 🙇 Thank you
This release was possible thanks to the following contributors who shared their brilliant ideas and awesome pull requests:

@abdessattar23
@anuq
@breedx-splk
@cijothomas
@dashpole
@jack-berg
@jaydeluca
@jhalliday
@jkwatson
@jsuereth
@laeubi
@laurit
@maxiking203
@opentelemetrybot
@psx95
@robsunday
@royteeuwen
@Sandared
@stbischof
@SylvainJuge
@trask
@utafrali
@VamshikrishnaMonagari
@zeitlinger

---

> **Source** [open-telemetry/opentelemetry-java](https://github.com/open-telemetry/opentelemetry-java) · `v1.62.0` · 2026-05-08 · [upstream release](https://github.com/open-telemetry/opentelemetry-java/releases/tag/v1.62.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
