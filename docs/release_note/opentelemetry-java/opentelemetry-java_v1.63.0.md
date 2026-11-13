---
title: "opentelemetry-java v1.63.0"
project: "opentelemetry-java"
repo: "open-telemetry/opentelemetry-java"
tag: "v1.63.0"
published: "2026-06-05"
type: "minor"
lang: "en"
summary: "This release was possible thanks to the following contributors who shared their brilliant ideas and awesome pull requests:"
---

# opentelemetry-java v1.63.0

### API

* Add missing `setAttribute` shortcuts to `Span` and `LogRecordBuilder` ([#8255](https://github.com/open-telemetry/opentelemetry-java/pull/8255))
* Promote `InstrumentationUtil` to public class in `io.opentelemetry.api.impl` package ([#8413](https://github.com/open-telemetry/opentelemetry-java/pull/8413))
* Fix index-out-of-bounds in `StrictContextStorage` ([#8294](https://github.com/open-telemetry/opentelemetry-java/pull/8294))

#### Incubating

* **BREAKING** Remove deprecated `ExtendedAttributes` and related code ([#8395](https://github.com/open-telemetry/opentelemetry-java/pull/8395))

### SDK

#### Metrics

* Collect async exemplars when exemplar filter is `always_on` ([#8363](https://github.com/open-telemetry/opentelemetry-java/pull/8363))
* Move delta record/collect coordination from instrument to series level ([#8313](https://github.com/open-telemetry/opentelemetry-java/pull/8313))

#### Exporters

* Add `noop()` factory method to `SpanExporter` and `LogRecordExporter` ([#8435](https://github.com/open-telemetry/opentelemetry-java/pull/8435))
* **BREAKING** OTLP: Remove support for deprecated `GrpcSenderProvider` and `HttpSenderProvider` SPI property names (use `io.opentelemetry.sdk.common.export.GrpcSenderProvider` / `io.opentelemetry.sdk.common.export.HttpSenderProvider` instead) ([#8392](https://github.com/open-telemetry/opentelemetry-java/pull/8392))
* OTLP: Bound OkHttp sender dispatchers and surface rejections ([#8422](https://github.com/open-telemetry/opentelemetry-java/pull/8422))
* Prometheus: Limit exemplar label characters to conform to Prometheus limits ([#8362](https://github.com/open-telemetry/opentelemetry-java/pull/8362))
* Logging: Fix `LoggingSpanExporter.flush()` to preserve flush failures ([#8361](https://github.com/open-telemetry/opentelemetry-java/pull/8361))
* Zipkin: Make exporter self-contained by removing shared internal code dependencies ([#8413](https://github.com/open-telemetry/opentelemetry-java/pull/8413))

#### Extensions

* **BREAKING** Autoconfigure: Remove deprecated `otel.experimental.config.file` property ([#8393](https://github.com/open-telemetry/opentelemetry-java/pull/8393))
* **BREAKING** Incubator: Remove deprecated `ViewConfig`/`ViewConfigCustomizer` view file config mechanism ([#8394](https://github.com/open-telemetry/opentelemetry-java/pull/8394))
* Declarative config: Fix model package ([#8403](https://github.com/open-telemetry/opentelemetry-java/pull/8403))
* Declarative config: Fix Java module name to `io.opentelemetry.sdk.autoconfigure.declarativeconfig` ([#8452](https://github.com/open-telemetry/opentelemetry-java/pull/8452))

### Shims

* Deprecate OpenTracing shim public API ([#8373](https://github.com/open-telemetry/opentelemetry-java/pull/8373))

### Project tooling

* Finish adding OSGi support across all modules ([#8401](https://github.com/open-telemetry/opentelemetry-java/pull/8401), [#8417](https://github.com/open-telemetry/opentelemetry-java/pull/8417))
* Force `io.zipkin.zipkin2:zipkin:3.6.1` to avoid problematic gson version ([#8430](https://github.com/open-telemetry/opentelemetry-java/pull/8430))


### 🙇 Thank you
This release was possible thanks to the following contributors who shared their brilliant ideas and awesome pull requests:

@ADITYA-CODE-SOURCE
@anuq
@bogdandrutu
@breedx-splk
@cijothomas
@jack-berg
@jaydeluca
@jkwatson
@khouari1
@kyyril
@laurit
@ps-mir
@psx95
@royteeuwen
@Sandared
@trask
@zeitlinger

---

> **Source** [open-telemetry/opentelemetry-java](https://github.com/open-telemetry/opentelemetry-java) · `v1.63.0` · 2026-06-05 · [upstream release](https://github.com/open-telemetry/opentelemetry-java/releases/tag/v1.63.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
