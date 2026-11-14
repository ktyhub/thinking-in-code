---
title: "micrometer tracing v1.7.2"
project: "micrometer tracing"
repo: "micrometer-metrics/tracing"
tag: "v1.7.2"
published: "2026-10-23"
type: "patch"
lang: "en"
summary: "OtelTracer.nextSpan(parent) makes a stale context current while starting the child span #1605 · Baggage Tags are not propagated unless explicit getBaggage call to Tracer #933"
---

# micrometer tracing v1.7.2

## :lady_beetle: Bug Fixes

- OtelTracer.nextSpan(parent) makes a stale context current while starting the child span [#1605](https://github.com/micrometer-metrics/tracing/issues/1605)
- Baggage Tags are not propagated unless explicit getBaggage call to Tracer [#933](https://github.com/micrometer-metrics/tracing/issues/933)

## :notebook_with_decorative_cover: Documentation

- Remove warning about zipkin dependency in docs [#509](https://github.com/micrometer-metrics/tracing/issues/509)

## :hammer: Dependency Upgrades

- Bump io.micrometer:micrometer-bom from 1.17.1 to 1.17.2 #1587

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@AzazelSensei and @o-shevchenko

---

> **Source** [micrometer-metrics/tracing](https://github.com/micrometer-metrics/tracing) · `v1.7.2` · 2026-10-23 · [upstream release](https://github.com/micrometer-metrics/tracing/releases/tag/v1.7.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
