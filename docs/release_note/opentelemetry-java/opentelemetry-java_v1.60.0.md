---
title: "opentelemetry-java v1.60.0"
project: "opentelemetry-java"
repo: "open-telemetry/opentelemetry-java"
tag: "v1.60.0"
published: "2026-03-06"
type: "minor"
lang: "en"
summary: "This release was possible thanks to the following contributors who shared their brilliant ideas and awesome pull requests:"
---

# opentelemetry-java v1.60.0

### API

* Support W3C trace context random flag ([#8012](https://github.com/open-telemetry/opentelemetry-java/pull/8012))
* Clarify that `SpanBuilder.setAttribute` allows null values ([#8072](https://github.com/open-telemetry/opentelemetry-java/pull/8072))

#### Incubating

* Implement environment variable context propagation carriers ([#8074](https://github.com/open-telemetry/opentelemetry-java/pull/8074))
* Deprecate `ExtendedAttributes`, `ExtendedAttributeKey`, `ExtendedAttributeType`, `ExtendedAttributesBuilder` ([#8060](https://github.com/open-telemetry/opentelemetry-java/pull/8060))
* Deprecate `peerServiceMapping` accessor from `InstrumentationConfigUtil` ([#8088](https://github.com/open-telemetry/opentelemetry-java/pull/8088))

### SDK

#### Traces

* Disable warning when using `TraceIdRatioBasedSampler` as root sampler ([#8065](https://github.com/open-telemetry/opentelemetry-java/pull/8065))
* User-supplied attributes take precedence over exception-derived attributes ([#7993](https://github.com/open-telemetry/opentelemetry-java/pull/7993))
* Exclude META-INF/maven from traces SDK shaded dependencies ([#8096](https://github.com/open-telemetry/opentelemetry-java/pull/8096))
* Fix inverted condition in LegacySpanProcessorInstrumentation#finishSpans ([#8145](https://github.com/open-telemetry/opentelemetry-java/pull/8145))

#### Metrics

* Split out cumulative vs. delta storage ([#8015](https://github.com/open-telemetry/opentelemetry-java/pull/8015))
* Add metrics for `PeriodicMetricReader` ([#8038](https://github.com/open-telemetry/opentelemetry-java/pull/8038))
* Allow configuring min/max in histograms ([#8095](https://github.com/open-telemetry/opentelemetry-java/pull/8095))
* Remove deprecated `otel.experimental.metrics.cardinality.limit` property ([#8124](https://github.com/open-telemetry/opentelemetry-java/pull/8124))
* **BREAKING** bug fix: `GlobUtil` and `IncludePatternMatching`, used in views and declarative config matching, previously were inconsistent in case sensitivity. If a glob char (* or ?) was present, it was evaluated with case sensitivity. If no glob chars were present, it was evaluated with case insensitivity. Now, all are consistently evaluated with case sensitivity. ([#8152](https://github.com/open-telemetry/opentelemetry-java/pull/8152))

#### Logs

* Stabilize `LogRecordBuilder.setException` ([#8089](https://github.com/open-telemetry/opentelemetry-java/pull/8089))
* Clarify `setTimestamp` javadoc for event timestamp behavior ([#8104](https://github.com/open-telemetry/opentelemetry-java/pull/8104))

#### Exporters

* OTLP: Fix marshaling for empty string attributes ([#8014](https://github.com/open-telemetry/opentelemetry-java/pull/8014))
* Prometheus: Update Prometheus client to 1.5.0 ([#8080](https://github.com/open-telemetry/opentelemetry-java/pull/8080))
* OTLP: Serialize exponential histogram sum as optional double ([#8107](https://github.com/open-telemetry/opentelemetry-java/pull/8107))
* OTLP: Use `KeyManagerFactory.getDefaultAlgorithm()` in `TlsUtil.keyManager()` ([#8122](https://github.com/open-telemetry/opentelemetry-java/pull/8122))
* OTLP: Ensure proto serializer idCache is cleared when exception is thrown ([#8147](https://github.com/open-telemetry/opentelemetry-java/pull/8147))

#### Extensions

* Autoconfigure: Decode plus sign in resource attributes ([#8059](https://github.com/open-telemetry/opentelemetry-java/pull/8059))
* Declarative config: update to 1.0 schema ([#8123](https://github.com/open-telemetry/opentelemetry-java/pull/8123))
* Declarative config: add support for setting schema URL ([#8028](https://github.com/open-telemetry/opentelemetry-java/pull/8028))
* Declarative config: add version mismatch warning ([#8069](https://github.com/open-telemetry/opentelemetry-java/pull/8069))
* Declarative config: cache component providers in `DeclarativeConfigContext` ([#8070](https://github.com/open-telemetry/opentelemetry-java/pull/8070))
* Declarative config: add system property substitution ([#8073](https://github.com/open-telemetry/opentelemetry-java/pull/8073))
* Declarative config: add exporter customizers ([#8081](https://github.com/open-telemetry/opentelemetry-java/pull/8081))
* Declarative config: add support for setting internal telemetry version ([#8045](https://github.com/open-telemetry/opentelemetry-java/pull/8045))
* Deprecate View File Configuration mechanism ([#8133](https://github.com/open-telemetry/opentelemetry-java/pull/8133))
* Autoconfigure: add property to allow autoconfiguration of SDK telemetry version ([#8037](https://github.com/open-telemetry/opentelemetry-java/pull/8037))
* Jaeger remote sampler: refactor to leverage senders ([#8046](https://github.com/open-telemetry/opentelemetry-java/pull/8046))
* Declarative config: document ObjectMapper config ([#8075](https://github.com/open-telemetry/opentelemetry-java/pull/8075))
* Declarative config: Remove unchecked warning ([#8090](https://github.com/open-telemetry/opentelemetry-java/pull/8090))

### Project tooling

* Add architecture test to detect usage of shared internal code ([#6978](https://github.com/open-telemetry/opentelemetry-java/pull/6978))
* Replace Xlint deprecation check with custom error-prone check ([#8061](https://github.com/open-telemetry/opentelemetry-java/pull/8061))
* Enable error-prone's UnnecessarilyFullyQualified check ([#8078](https://github.com/open-telemetry/opentelemetry-java/pull/8078))
* Small refactoring to make safety clearer ([#8083](https://github.com/open-telemetry/opentelemetry-java/pull/8083))
* Rework span record benchmark and publish results ([#8031](https://github.com/open-telemetry/opentelemetry-java/pull/8031))
* Add `LogRecordBenchmark` ([#8106](https://github.com/open-telemetry/opentelemetry-java/pull/8106), [#8117](https://github.com/open-telemetry/opentelemetry-java/pull/8117))


### 🙇 Thank you
This release was possible thanks to the following contributors who shared their brilliant ideas and awesome pull requests:

@adrielp
@andrzejressel
@antonio-mazzini
@anuraaga
@arnav-dasgupta
@Bhagirath00
@blakeli0
@breedx-splk
@carlosalberto
@dashpole
@GerardoGR
@jack-berg
@jaydeluca
@jkwatson
@jmacd
@laurit
@lbarrios
@marcingrzejszczak
@MikeGoldsmith
@mosesn
@PeterF778
@Quaffel
@ruturajjadhav07
@trask
@wglad
@zeitlinger

---

> **Source** [open-telemetry/opentelemetry-java](https://github.com/open-telemetry/opentelemetry-java) · `v1.60.0` · 2026-03-06 · [upstream release](https://github.com/open-telemetry/opentelemetry-java/releases/tag/v1.60.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
