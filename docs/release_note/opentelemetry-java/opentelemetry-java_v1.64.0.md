---
title: "opentelemetry-java v1.64.0"
project: "opentelemetry-java"
repo: "open-telemetry/opentelemetry-java"
tag: "v1.64.0"
published: "2026-07-10"
type: "minor"
lang: "en"
summary: "This release was possible thanks to the following contributors who shared their brilliant ideas and awesome pull requests:"
---

# opentelemetry-java v1.64.0

### API

* Fix `W3CBaggagePropagator` to allow empty baggage values per W3C spec ([#8468](https://github.com/open-telemetry/opentelemetry-java/pull/8468))
* Fix baggage parsing for invalid percent-encoded members ([#8480](https://github.com/open-telemetry/opentelemetry-java/pull/8480))

#### Incubating

* **BREAKING** Remove deprecated `InstrumentationConfigUtil.peerServiceMapping` ([#8542](https://github.com/open-telemetry/opentelemetry-java/pull/8542))
* Fix `EnvironmentGetter`/`EnvironmentSetter` to not enumerate or normalize carrier entries, and normalize empty names consistently ([#8474](https://github.com/open-telemetry/opentelemetry-java/pull/8474), [#8481](https://github.com/open-telemetry/opentelemetry-java/pull/8481))

### SDK

#### Traces

* Add `BatchSpanProcessor.create(SpanExporter)` convenience factory to mirror `SimpleSpanProcessor.create(SpanExporter)` ([#8564](https://github.com/open-telemetry/opentelemetry-java/pull/8564))
* Fix `BatchSpanProcessor` benchmark aux counters (`exportedSpans`/`droppedSpans`) always reporting zero ([#8539](https://github.com/open-telemetry/opentelemetry-java/pull/8539))

#### Metrics

* Fix `PooledHashMap` dropping live entries when an entry is removed during `forEach` ([#8499](https://github.com/open-telemetry/opentelemetry-java/pull/8499))
* Safely initialize exemplar reservoir storage in `FixedSizeExemplarReservoir` ([#8524](https://github.com/open-telemetry/opentelemetry-java/pull/8524))
* Use `failExceptionally` in `PeriodicMetricReader` when the exporter is busy ([#8525](https://github.com/open-telemetry/opentelemetry-java/pull/8525))
* Only set `valuesRecorded` in `AggregatorHandle` when false ([#8559](https://github.com/open-telemetry/opentelemetry-java/pull/8559))
* Use `volatile` instead of atomics in `Double`/`LongLastValueAggregator` ([#8560](https://github.com/open-telemetry/opentelemetry-java/pull/8560))
* Randomize per-thread recording order in metric benchmarks to avoid concurrency hotspots ([#8550](https://github.com/open-telemetry/opentelemetry-java/pull/8550))

#### Logs

* Fix `BatchLogRecordProcessor` worker thread being killed by non-runtime exceptions ([#8529](https://github.com/open-telemetry/opentelemetry-java/pull/8529))

#### Exporters

* **BREAKING** Prometheus: Drop deprecated `PrometheusMetricReader` constructors ([#8541](https://github.com/open-telemetry/opentelemetry-java/pull/8541))
* OTLP: Reject host-less endpoints in `EndpointUtil.validateEndpoint` ([#8489](https://github.com/open-telemetry/opentelemetry-java/pull/8489))
* OTLP: Replace Jackson OTLP JSON serialization with a hand-rolled implementation ([#8545](https://github.com/open-telemetry/opentelemetry-java/pull/8545))
* OTLP Profiles: Fix `OtlpGrpcProfileExporter` `toString` class name ([#8492](https://github.com/open-telemetry/opentelemetry-java/pull/8492))
* Prometheus: Add translation strategy support ([#8346](https://github.com/open-telemetry/opentelemetry-java/pull/8346))
* Prometheus: Fix serialization of array-valued scope and resource attributes to JSON strings ([#8497](https://github.com/open-telemetry/opentelemetry-java/pull/8497))

#### Extensions

* **BREAKING** Declarative config: Move experimental types to internal package ([#8530](https://github.com/open-telemetry/opentelemetry-java/pull/8530))
* Declarative config: Commit generated schema POJOs to git ([#8408](https://github.com/open-telemetry/opentelemetry-java/pull/8408))
* Declarative config: Update to `opentelemetry-configuration` v1.1.0 ([#8451](https://github.com/open-telemetry/opentelemetry-java/pull/8451))
* Declarative config: Adjust POJO `toString`/`hashCode`/`equals` to match AutoValue semantics ([#8526](https://github.com/open-telemetry/opentelemetry-java/pull/8526))
* Declarative config: Add ref descriptions to generated model classes ([#8540](https://github.com/open-telemetry/opentelemetry-java/pull/8540))
* Declarative config: Emit consistent `@JsonProperty` annotations on generated models ([#8563](https://github.com/open-telemetry/opentelemetry-java/pull/8563))
* Declarative config: Remove duplicate resolver in `DeclarativeConfigPropertyUtil` ([#8579](https://github.com/open-telemetry/opentelemetry-java/pull/8579))

### Project tooling

* Add configuration policy guidance ([#8429](https://github.com/open-telemetry/opentelemetry-java/pull/8429))
* Exclude certain GitHub Actions from running on forks ([#8466](https://github.com/open-telemetry/opentelemetry-java/pull/8466))
* Add guidance to prefer parameterized tests ([#8469](https://github.com/open-telemetry/opentelemetry-java/pull/8469))
* Make benchmark path configurable ([#8557](https://github.com/open-telemetry/opentelemetry-java/pull/8557))


### 🙇 Thank you
This release was possible thanks to the following contributors who shared their brilliant ideas and awesome pull requests:

@abdessattar23
@ADITYA-CODE-SOURCE
@atoulme
@breedx-splk
@brunobat
@carlosalberto
@dahyvuun
@Develop-KIM
@EvgeniiR
@gfelbing
@jack-berg
@jaydeluca
@jimbobbennett
@jkwatson
@Kielek
@kropptrevor
@opentelemetry-pr-dashboard
@pellared
@psx95
@seongjun-rpls
@thswlsqls
@trask
@Vcode2407
@vivekp14
@zeitlinger

---

> **Source** [open-telemetry/opentelemetry-java](https://github.com/open-telemetry/opentelemetry-java) · `v1.64.0` · 2026-07-10 · [upstream release](https://github.com/open-telemetry/opentelemetry-java/releases/tag/v1.64.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
