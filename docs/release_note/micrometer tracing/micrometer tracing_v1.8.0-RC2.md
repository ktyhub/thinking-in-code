---
title: "micrometer tracing v1.8.0-RC2"
project: "micrometer tracing"
repo: "micrometer-metrics/tracing"
tag: "v1.8.0-RC2"
published: "2026-11-05"
type: "minor"
lang: "en"
summary: "See the 1.8 migration guide."
---

# micrometer tracing v1.8.0-RC2

See the [1.8 migration guide](https://github.com/micrometer-metrics/tracing/wiki/1.8-Migration-Guide).

## :warning: Noteworthy

- Avoid tagging spans when retrieving OTel baggage and document behavior [#1639](https://github.com/micrometer-metrics/tracing/pull/1639)
- BaggageTextMapPropagator#inject should use the passed Context [#1617](https://github.com/micrometer-metrics/tracing/issues/1617)

## :star: New Features

- Reduce allocation in OTel baggage reads [#1647](https://github.com/micrometer-metrics/tracing/pull/1647)
- Reuse no-op scopes in the OTel bridge [#1646](https://github.com/micrometer-metrics/tracing/pull/1646)
- Stop automatically setting OpenTelemetry span status to OK [#1640](https://github.com/micrometer-metrics/tracing/pull/1640)
- Avoid tagging spans when retrieving OTel baggage and document behavior [#1639](https://github.com/micrometer-metrics/tracing/pull/1639)
- Reduce overhead when creating OTel baggage scopes [#1635](https://github.com/micrometer-metrics/tracing/pull/1635)
- Fix OTel context retention and simplify span scoping [#1599](https://github.com/micrometer-metrics/tracing/pull/1599)

## :lady_beetle: Bug Fixes

- Include tag-only fields in OTel Observation baggage [#1638](https://github.com/micrometer-metrics/tracing/pull/1638)
- BaggageTextMapPropagator#inject should use the passed Context [#1617](https://github.com/micrometer-metrics/tracing/issues/1617)
- Preserve OTel trace contexts when updating baggage [#1615](https://github.com/micrometer-metrics/tracing/pull/1615)
- Push a separate SpanAction when ObservationAwareSpanThreadLocalAccessor clears the span [#1614](https://github.com/micrometer-metrics/tracing/pull/1614)

## :notebook_with_decorative_cover: Documentation

- Document span and baggage scopes with shared bridge tests [#1633](https://github.com/micrometer-metrics/tracing/pull/1633)

## :hammer: Dependency Upgrades

- Upgrade to Micrometer 1.18.0-RC2 [#1645](https://github.com/micrometer-metrics/tracing/issues/1645)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@MateuszNaKodach

---

> **Source** [micrometer-metrics/tracing](https://github.com/micrometer-metrics/tracing) · `v1.8.0-RC2` · 2026-11-05 · [upstream release](https://github.com/micrometer-metrics/tracing/releases/tag/v1.8.0-RC2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
