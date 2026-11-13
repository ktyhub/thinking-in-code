---
title: "opentelemetry-java-instrumentation v2.33.0"
project: "opentelemetry-java-instrumentation"
repo: "open-telemetry/opentelemetry-java-instrumentation"
tag: "v2.33.0"
published: "2026-10-23"
type: "minor"
lang: "en"
summary: "This release targets the OpenTelemetry SDK 1.67.0."
---

# opentelemetry-java-instrumentation v2.33.0

This release targets the OpenTelemetry SDK 1.67.0.

Note that many artifacts have the `-alpha` suffix attached to their version number, reflecting that they will continue to have breaking changes. Please see [VERSIONING.md](https://github.com/open-telemetry/opentelemetry-java-instrumentation/blob/main/VERSIONING.md#opentelemetry-java-instrumentation-versioning) for more details.

### 📈 Enhancements

- Update the OpenTelemetry SDK version to 1.67.0. ([#20598](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20598))

### 🛠️ Bug fixes

- Preserve repeated baggage header values when extracting context through the Java agent's OpenTelemetry API bridge. ([#20598](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20598))
- Avoid converting lists and maps to strings in Spring Boot declarative configuration. ([#20598](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20598))
- Improve SQL parsing. ([#20864](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20864))

### 🙇 Thank you

This release was possible thanks to the following contributors who shared their brilliant ideas and awesome pull requests:

@ishg
@jack-berg
@jamesylgan
@laurit
@opentelemetry-pr-dashboard
@safris
@steverao
@trask

---

> **Source** [open-telemetry/opentelemetry-java-instrumentation](https://github.com/open-telemetry/opentelemetry-java-instrumentation) · `v2.33.0` · 2026-10-23 · [upstream release](https://github.com/open-telemetry/opentelemetry-java-instrumentation/releases/tag/v2.33.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
