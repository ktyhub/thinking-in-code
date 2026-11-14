---
title: "spring-cloud-gateway v5.0.3"
project: "spring-cloud-gateway"
repo: "spring-cloud/spring-cloud-gateway"
tag: "v5.0.3"
published: "2026-08-20"
type: "patch"
lang: "en"
summary: "CVE-2026-47879 — Spring Cloud Gateway SSRF and native file access with gRPC"
---

# spring-cloud-gateway v5.0.3

## Security

* [CVE-2026-47879](https://spring.io/security/cve-2026-47879) — Spring Cloud Gateway SSRF and native file access with gRPC

## What's Changed
* Fix WebMvc PerserveHostHeader so it matches Webflux by @ryanjbaxter in https://github.com/spring-cloud/spring-cloud-gateway/pull/4213
* GH-3791: Document AdaptCachedBody filter for Spring Cloud Gateway WebMVC by @won-seoop in https://github.com/spring-cloud/spring-cloud-gateway/pull/4197
* GH-3885: Document Spring Security integration for WebFlux and WebMVC gateways by @won-seoop in https://github.com/spring-cloud/spring-cloud-gateway/pull/4198
* GH-1949: Document that overriding discovery locator filters replaces defaults by @won-seoop in https://github.com/spring-cloud/spring-cloud-gateway/pull/4199
* GH-4024: Add documentation for the Version Route Predicate Factory by @won-seoop in https://github.com/spring-cloud/spring-cloud-gateway/pull/4205
* GH-3168: Document that @LoadBalanced RestClient must not be used in Gateway MVC by @won-seoop in https://github.com/spring-cloud/spring-cloud-gateway/pull/4200
* docs: update gateway grafana dashboard by @imanabr77 in https://github.com/spring-cloud/spring-cloud-gateway/pull/4215
* Bump actions/checkout from 6 to 7 by @dependabot[bot] in https://github.com/spring-cloud/spring-cloud-gateway/pull/4219
* Bump antora from 3.2.0-alpha.12 to 3.2.0-rc.2 in /docs by @dependabot[bot] in https://github.com/spring-cloud/spring-cloud-gateway/pull/4221
* Add MVC retry backoff support by @goutamadwant in https://github.com/spring-cloud/spring-cloud-gateway/pull/4225
* Bump actions/checkout from 7.0.0 to 7.0.1 by @dependabot[bot] in https://github.com/spring-cloud/spring-cloud-gateway/pull/4241
* Exclude release-train workflows from Dependabot updates by @ryanjbaxter in https://github.com/spring-cloud/spring-cloud-gateway/pull/4252
* Bump @springio/antora-extensions from 1.14.12 to 1.14.13 in /docs by @dependabot[bot] in https://github.com/spring-cloud/spring-cloud-gateway/pull/4253
* Fix ordering in test by @ryanjbaxter in https://github.com/spring-cloud/spring-cloud-gateway/pull/4255
* Add missing test scope to spring-boot-resttestclient by @timpeeters in https://github.com/spring-cloud/spring-cloud-gateway/pull/4257
* Add warn logging when WebSocket message receive fails by @fru1tworld in https://github.com/spring-cloud/spring-cloud-gateway/pull/4134
* Avoid draining failed streaming proxy responses by @goutamadwant in https://github.com/spring-cloud/spring-cloud-gateway/pull/4217

## New Contributors
* @won-seoop made their first contribution in https://github.com/spring-cloud/spring-cloud-gateway/pull/4197
* @imanabr77 made their first contribution in https://github.com/spring-cloud/spring-cloud-gateway/pull/4215
* @goutamadwant made their first contribution in https://github.com/spring-cloud/spring-cloud-gateway/pull/4225
* @timpeeters made their first contribution in https://github.com/spring-cloud/spring-cloud-gateway/pull/4257

**Full Changelog**: https://github.com/spring-cloud/spring-cloud-gateway/compare/v5.0.2...v5.0.3

---

> **Source** [spring-cloud/spring-cloud-gateway](https://github.com/spring-cloud/spring-cloud-gateway) · `v5.0.3` · 2026-08-20 · [upstream release](https://github.com/spring-cloud/spring-cloud-gateway/releases/tag/v5.0.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
