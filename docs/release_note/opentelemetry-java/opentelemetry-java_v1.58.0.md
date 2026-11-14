---
title: "opentelemetry-java v1.58.0"
project: "opentelemetry-java"
repo: "open-telemetry/opentelemetry-java"
tag: "v1.58.0"
published: "2026-01-09"
type: "minor"
lang: "en"
summary: "Delete GlobalConfigProvider in favor of access via ExtendedOpenTelemetry (#7914) · Add DeclarativeConfigProperties#get method (#7923) · Update ConfigProvider#getInstrumentationConfig response to be non-null (#7954)"
---

# opentelemetry-java v1.58.0

### API

#### Incubator

* Delete GlobalConfigProvider in favor of access via ExtendedOpenTelemetry ([#7914](https://github.com/open-telemetry/opentelemetry-java/pull/7914))
* Add DeclarativeConfigProperties#get method ([#7923](https://github.com/open-telemetry/opentelemetry-java/pull/7923))
* Update ConfigProvider#getInstrumentationConfig response to be non-null ([#7954](https://github.com/open-telemetry/opentelemetry-java/pull/7954))
* Add declarative config utility methods for common operations ([#7927](https://github.com/open-telemetry/opentelemetry-java/pull/7927))

### SDK

#### Traces

* Implement SDK metrics for trace ([#7895](https://github.com/open-telemetry/opentelemetry-java/pull/7895), [#7930](https://github.com/open-telemetry/opentelemetry-java/pull/7930))
* Emit warning when TraceIdRatioBasedSampler is used as child sampler ([#7937](https://github.com/open-telemetry/opentelemetry-java/pull/7937))

#### Logs

* Implement SDK metrics for logs ([#7931](https://github.com/open-telemetry/opentelemetry-java/pull/7931))

#### Exporters

* Prom exporter update ([#7934](https://github.com/open-telemetry/opentelemetry-java/pull/7934))

#### Extensions

* Declarative config: update to opentelemetry-configuration 1.0.0-rc.3 ([#7861](https://github.com/open-telemetry/opentelemetry-java/pull/7861))
* Declarative config: update jaeger remote sampler to require endpoint, initial_sampler ([#7943](https://github.com/open-telemetry/opentelemetry-java/pull/7943))
* Declarative config: add support for view unit ([#7942](https://github.com/open-telemetry/opentelemetry-java/pull/7942))
* Declarative config: add support for new logger config minimum_severity and trace_based properties ([#7940](https://github.com/open-telemetry/opentelemetry-java/pull/7940))
* Declarative config: add support for composable parent threshold sampler ([#7941](https://github.com/open-telemetry/opentelemetry-java/pull/7941))
* Declarative config: improve pattern for validating and loading SDK extension plugins ([#7947](https://github.com/open-telemetry/opentelemetry-java/pull/7947))

### Project tooling

* Use develocity build cache in PRs and local builds ([#7906](https://github.com/open-telemetry/opentelemetry-java/pull/7906))
* Configure japicmp classpath to avoid false positives ([#7945](https://github.com/open-telemetry/opentelemetry-java/pull/7945))


### 🙇 Thank you
This release was possible thanks to the following contributors who shared their brilliant ideas and awesome pull requests:

@anuraaga
@breedx-splk
@Gosling-dude
@jack-berg
@jkwatson
@JonasKunz
@SylvainJuge
@trask
@zeitlinger

---

> **Source** [open-telemetry/opentelemetry-java](https://github.com/open-telemetry/opentelemetry-java) · `v1.58.0` · 2026-01-09 · [upstream release](https://github.com/open-telemetry/opentelemetry-java/releases/tag/v1.58.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
