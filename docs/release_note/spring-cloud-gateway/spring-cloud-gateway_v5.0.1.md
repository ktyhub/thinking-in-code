---
title: "spring-cloud-gateway v5.0.1"
project: "spring-cloud-gateway"
repo: "spring-cloud/spring-cloud-gateway"
tag: "v5.0.1"
published: "2026-01-28"
type: "patch"
lang: "en"
summary: "Support 'by' parameter in Forwarded header (RFC 7239) #4019 · Support epoch millisecond values for datetime predicates in WebMVC #4005"
---

# spring-cloud-gateway v5.0.1

## :star: New Features

- Support `'by'` parameter in `Forwarded` header (RFC 7239) [#4019](https://github.com/spring-cloud/spring-cloud-gateway/pull/4019)
- Support epoch millisecond values for datetime predicates in WebMVC [#4005](https://github.com/spring-cloud/spring-cloud-gateway/pull/4005)
- Enhance MVC CircuitBreaker: add support for 'not permitted' handling and resume-without-error behavior [#4000](https://github.com/spring-cloud/spring-cloud-gateway/pull/4000)

## :lady_beetle: Bug Fixes

- Adds support for ApiVersionHolder [#4044](https://github.com/spring-cloud/spring-cloud-gateway/pull/4044)
- Gateway metrics require optional spring-boot-micrometer-tracing dependency since 5.0.0 [#4006](https://github.com/spring-cloud/spring-cloud-gateway/issues/4006)
- Usage of Jackson 2 modules in Spring Cloud Gateway MVC [#4001](https://github.com/spring-cloud/spring-cloud-gateway/issues/4001)

## :notebook_with_decorative_cover: Documentation

- Documentation mentions deprecated Hystrix in Gateway features [#4041](https://github.com/spring-cloud/spring-cloud-gateway/issues/4041)
- Update document on retrieving a particular route [#2561](https://github.com/spring-cloud/spring-cloud-gateway/issues/2561)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@dependabot[bot], @raccoonback, @rjuare8, and @spencergibb

---

> **Source** [spring-cloud/spring-cloud-gateway](https://github.com/spring-cloud/spring-cloud-gateway) · `v5.0.1` · 2026-01-28 · [upstream release](https://github.com/spring-cloud/spring-cloud-gateway/releases/tag/v5.0.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
