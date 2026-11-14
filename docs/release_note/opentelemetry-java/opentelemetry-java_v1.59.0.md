---
title: "opentelemetry-java v1.59.0"
project: "opentelemetry-java"
repo: "open-telemetry/opentelemetry-java"
tag: "v1.59.0"
published: "2026-02-06"
type: "minor"
lang: "en"
summary: "Stabilize complex attributes (#7973) · Limit init valid hex array to range that can be true (#7809)"
---

# opentelemetry-java v1.59.0

### API

* Stabilize complex attributes ([#7973](https://github.com/open-telemetry/opentelemetry-java/pull/7973))
* Limit init valid hex array to range that can be true ([#7809](https://github.com/open-telemetry/opentelemetry-java/pull/7809))

#### Extensions

* Trace propagators: Deprecate OtTracePropagator ([#8020](https://github.com/open-telemetry/opentelemetry-java/pull/8020))
* Trace propagators: Deprecate JaegerPropagator ([#8019](https://github.com/open-telemetry/opentelemetry-java/pull/8019))

### SDK

* Move io.opentelemetry.sdk.internal to io.opentelemetry.sdk.common.internal ([#8003](https://github.com/open-telemetry/opentelemetry-java/pull/8003))
* Always return ExtendedOpenTelemetry when incubator is available ([#7991](https://github.com/open-telemetry/opentelemetry-java/pull/7991))

#### Traces

* Fix memory leak in SdkSpan#spanEndingThread ([#7984](https://github.com/open-telemetry/opentelemetry-java/pull/7984))

#### Metrics

* Rework and publish metric benchmarks ([#8000](https://github.com/open-telemetry/opentelemetry-java/pull/8000))
* Update LongLastValueAggregator algo to avoid allocations ([#8017](https://github.com/open-telemetry/opentelemetry-java/pull/8017))

#### Testing

* Fix OTel JUnit5 Extension cleanup when using Nested test classes ([#7999](https://github.com/open-telemetry/opentelemetry-java/pull/7999))
* Add assertion support for Span hasException(null) ([#8033](https://github.com/open-telemetry/opentelemetry-java/pull/8033))

#### Exporters

* **DEPRECATION**: `opentelemetry-exporter-zipkin` is now deprecated with the last release planned for 1.65.0 (August 2026) ([#7974](https://github.com/open-telemetry/opentelemetry-java/pull/7974))
* Refactor http, grpc senders and promote to public API ([#7782](https://github.com/open-telemetry/opentelemetry-java/pull/7782))

#### Extensions

* Jaeger remote sampler: Remove unused code ([#7970](https://github.com/open-telemetry/opentelemetry-java/pull/7970))
* Incubator: Add AlwaysRecordSampler ([#7877](https://github.com/open-telemetry/opentelemetry-java/pull/7877))

### Project tooling

* Align generate release contributors ([#8023](https://github.com/open-telemetry/opentelemetry-java/pull/8023))


### 🙇 Thank you
This release was possible thanks to the following contributors who shared their brilliant ideas and awesome pull requests:

@austince
@baolongnt
@blueswhisper
@bogdandrutu
@breedx-splk
@brunobat
@gerolf-da
@jack-berg
@jaydeluca
@jkwatson
@laurit
@majanjua-amzn
@michaeljohnalbers
@ps-mir
@trask
@tylerbenson
@zeitlinger

---

> **Source** [open-telemetry/opentelemetry-java](https://github.com/open-telemetry/opentelemetry-java) · `v1.59.0` · 2026-02-06 · [upstream release](https://github.com/open-telemetry/opentelemetry-java/releases/tag/v1.59.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
