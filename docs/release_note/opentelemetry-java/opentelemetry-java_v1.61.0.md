---
title: "opentelemetry-java v1.61.0"
project: "opentelemetry-java"
repo: "open-telemetry/opentelemetry-java"
tag: "v1.61.0"
published: "2026-04-10"
type: "minor"
lang: "en"
summary: "This release was possible thanks to the following contributors who shared their brilliant ideas and awesome pull requests:"
---

# opentelemetry-java v1.61.0

### API

* Stabilize `isEnabled()` on `Tracer`, `Logger`, and metric instruments ([#8200](https://github.com/open-telemetry/opentelemetry-java/pull/8200))

#### Incubating

* **BREAKING** Update `EnvironmentGetter` and `EnvironmentSetter` key normalization to reflect spec changes ([#8233](https://github.com/open-telemetry/opentelemetry-java/pull/8233))

### SDK

#### Traces

* Retain propagated context when generating random trace IDs ([#8263](https://github.com/open-telemetry/opentelemetry-java/pull/8263))
* Add rate-limited warning log when `BatchSpanProcessor` drops spans ([#8167](https://github.com/open-telemetry/opentelemetry-java/pull/8167))

#### Metrics

* Track series start time per aggregator rather than at `SdkMeterProvider` creation time ([#8180](https://github.com/open-telemetry/opentelemetry-java/pull/8180))
* Capture context class loader during async callback registration ([#8091](https://github.com/open-telemetry/opentelemetry-java/pull/8091))
* Make include/exclude work correctly with empty (but non-null) lists ([#8185](https://github.com/open-telemetry/opentelemetry-java/pull/8185))

#### Logs

* Fix condition for recording successful log processing metrics ([#8226](https://github.com/open-telemetry/opentelemetry-java/pull/8226))

#### Exporters

* OTLP: add configurable bounds to response body reading ([#8224](https://github.com/open-telemetry/opentelemetry-java/pull/8224), [#8277](https://github.com/open-telemetry/opentelemetry-java/pull/8277))
* OTLP: only throw invalid response exception when gRPC response size < 5 bytes ([#8194](https://github.com/open-telemetry/opentelemetry-java/pull/8194))
* OTLP: remove duplicate FINEST-level error logging in gRPC exporter ([#8216](https://github.com/open-telemetry/opentelemetry-java/pull/8216))
* OTLP Profiles: clean up profile signal exporters for consistency ([#8172](https://github.com/open-telemetry/opentelemetry-java/pull/8172))

#### Extensions

* **BREAKING** Autoconfigure: remove deprecated `ComponentLoader` class (use `io.opentelemetry.common.ComponentLoader` instead) ([#8243](https://github.com/open-telemetry/opentelemetry-java/pull/8243))
* Declarative config: fix `DeclarativeConfigProperties` javadoc to not throw exceptions ([#8079](https://github.com/open-telemetry/opentelemetry-java/pull/8079))
* Declarative config: resource attribute filtering should include attributes by default ([#8177](https://github.com/open-telemetry/opentelemetry-java/pull/8177))
* Declarative config: enforce IncludedExcludeModel .included and .excluded are not empty ([#8266](https://github.com/open-telemetry/opentelemetry-java/pull/8266))
* Autoconfigure: restructure SDK incubator to not depend on autoconfigure internals ([#8242](https://github.com/open-telemetry/opentelemetry-java/pull/8242))

### Project tooling

* Disable Gradle build cache on releases to mitigate supply chain risk ([#8254](https://github.com/open-telemetry/opentelemetry-java/pull/8254))


### 🙇 Thank you
This release was possible thanks to the following contributors who shared their brilliant ideas and awesome pull requests:

@adp2201
@anuraaga
@arun-annamalai
@Bhagirath00
@breedx-splk
@brunobat
@cleverchuk
@dashpole
@eamonn-kearns-ibm
@filipetrovic
@jack-berg
@jackshirazi
@jaydeluca
@jhalliday
@jkwatson
@laurit
@martincostello
@maryliag
@MikeGoldsmith
@opensourcevk
@pellared
@robsunday
@SylvainJuge
@trask
@TruongNguyen1305
@Tusharika725
@VamshikrishnaMonagari
@zeitlinger

---

> **Source** [open-telemetry/opentelemetry-java](https://github.com/open-telemetry/opentelemetry-java) · `v1.61.0` · 2026-04-10 · [upstream release](https://github.com/open-telemetry/opentelemetry-java/releases/tag/v1.61.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
