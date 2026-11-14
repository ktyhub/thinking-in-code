---
title: "opentelemetry-java v1.66.0"
project: "opentelemetry-java"
repo: "open-telemetry/opentelemetry-java"
tag: "v1.66.0"
published: "2026-09-11"
type: "minor"
lang: "en"
summary: "Fix Baggage.fromContext() and Baggage.fromContextOrNull() to handle a null context (#8667) · Do not percent-encode W3C baggage metadata (#8682)"
---

# opentelemetry-java v1.66.0

### API

* Fix `Baggage.fromContext()` and `Baggage.fromContextOrNull()` to handle a `null` context ([#8667](https://github.com/open-telemetry/opentelemetry-java/pull/8667))
* Do not percent-encode W3C baggage metadata ([#8682](https://github.com/open-telemetry/opentelemetry-java/pull/8682))
* Fix `ArrayIndexOutOfBoundsException` in `OtelEncodingUtils` for invalid hex characters ([#8748](https://github.com/open-telemetry/opentelemetry-java/pull/8748))

### SDK

#### Traces

* Record processed spans before export completes and reject new spans on shutdown in `SpanProcessor` self-observability instrumentation ([#8735](https://github.com/open-telemetry/opentelemetry-java/pull/8735))

#### Metrics

* Improve explicit bucket histogram contention performance ([#8717](https://github.com/open-telemetry/opentelemetry-java/pull/8717))

#### Logs

* Record processed logs before export completes and reject new logs on shutdown in `LogRecordProcessor` self-observability instrumentation ([#8698](https://github.com/open-telemetry/opentelemetry-java/pull/8698))

#### Exporters

* OTLP: Respect `Retry-After` in OTLP HTTP senders ([#8633](https://github.com/open-telemetry/opentelemetry-java/pull/8633))
* OTLP: Add `setEnabledProtocols` option to OTLP HTTP exporter builders ([#8610](https://github.com/open-telemetry/opentelemetry-java/pull/8610))
* OTLP: Reject mixing `keyManager` and `sslContext` in `TlsConfigHelper` ([#8710](https://github.com/open-telemetry/opentelemetry-java/pull/8710))
* OTLP: Fix `OkHttpGrpcSender` mTLS when using the platform default trust store ([#8758](https://github.com/open-telemetry/opentelemetry-java/pull/8758))
* OTLP: Suppress instrumentation of exporter requests in `JdkHttpSender` ([#8757](https://github.com/open-telemetry/opentelemetry-java/pull/8757))
* OTLP: Accept RFC 1123 hostnames in `EndpointUtil.validateEndpoint` for OkHttp senders ([#8746](https://github.com/open-telemetry/opentelemetry-java/pull/8746))
* OTLP: Include the number of affected items in exporter error logging ([#8780](https://github.com/open-telemetry/opentelemetry-java/pull/8780))
* OTLP: Add `toString` to `OtlpJsonLogging{Span,Metric,LogRecord}Exporter` ([#8725](https://github.com/open-telemetry/opentelemetry-java/pull/8725))
* OTLP Profiles: Improve JFR export example and align `LinkData` null-element handling with the spec ([#8349](https://github.com/open-telemetry/opentelemetry-java/pull/8349))
* Prometheus: Remove default host log warning in `PrometheusHttpServerBuilder` ([#8679](https://github.com/open-telemetry/opentelemetry-java/pull/8679))
* Prometheus: Align UCUM byte unit conversions with the specification table ([#8752](https://github.com/open-telemetry/opentelemetry-java/pull/8752))

#### Extensions

* **BREAKING** Declarative config: Rename generated model POJO setters from `with<Prop>` to `set<Prop>` ([#8742](https://github.com/open-telemetry/opentelemetry-java/pull/8742))
* Declarative config: Resolve experimental properties on stable APIs in generated model POJOs ([#8654](https://github.com/open-telemetry/opentelemetry-java/pull/8654))
* Declarative config: Fix inverted `scope_info_enabled` and `target_info_enabled` flags in the Prometheus component provider ([#8750](https://github.com/open-telemetry/opentelemetry-java/pull/8750))
* Declarative config: Support `output_stream` in `otlp_file/development` ([#8676](https://github.com/open-telemetry/opentelemetry-java/pull/8676))
* Incubator: Add `toString` to `ComposableAnnotatingSampler` ([#8645](https://github.com/open-telemetry/opentelemetry-java/pull/8645))

### Project tooling

* Remediate `zizmor` findings in GitHub Actions workflows ([#8592](https://github.com/open-telemetry/opentelemetry-java/pull/8592))


### 🙇 Thank you
This release was possible thanks to the following contributors who shared their brilliant ideas and awesome pull requests:

@abdessattar23
@adhamahmad
@ADITYA-CODE-SOURCE
@anoopjb
@anuraaga
@arimu1
@basti1302
@bogdandrutu
@breedx-splk
@cdsap
@chatgpt-codex-connector
@gniadeck
@itsmehotpants
@ivamly
@jack-berg
@jameyg42
@jaydeluca
@jhalliday
@jkwatson
@kalayciburak
@LarryHu0217
@LikeTheSalad
@maryliag
@NithinU2802
@noor-ahmadi
@opentelemetry-pr-dashboard
@opentelemetrybot
@psx95
@Rajkaran-122
@rmannibucau
@robintra
@thswlsqls
@trask
@zeitlinger

---

> **Source** [open-telemetry/opentelemetry-java](https://github.com/open-telemetry/opentelemetry-java) · `v1.66.0` · 2026-09-11 · [upstream release](https://github.com/open-telemetry/opentelemetry-java/releases/tag/v1.66.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
