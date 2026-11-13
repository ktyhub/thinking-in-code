---
title: "quarkus 3.39.2"
project: "quarkus"
repo: "quarkusio/quarkus"
tag: "3.39.2"
published: "2026-09-03"
type: "patch"
lang: "en"
---

# quarkus 3.39.2

### Complete changelog

  * [#55234](https://github.com/quarkusio/quarkus/issues/55234) - `quarkus` cli is missing the `classname` option
  * [#55239](https://github.com/quarkusio/quarkus/pull/55239) - Add resource class name to CreateApp
  * [#55355](https://github.com/quarkusio/quarkus/pull/55355) - Bump com.fasterxml.jackson:jackson-bom from 2.22.0 to 2.22.1
  * [#55360](https://github.com/quarkusio/quarkus/issues/55360) - quarkus-container-image-buildpack fails on Windows with UnsupportedOperationException when building container image
  * [#55545](https://github.com/quarkusio/quarkus/issues/55545) - Support multiple colons in `@PermissionsAllowed` value
  * [#55665](https://github.com/quarkusio/quarkus/pull/55665) - Update buildpack lib to 0.0.17
  * [#55907](https://github.com/quarkusio/quarkus/issues/55907) - Quarkus 3.38 Date serialization issue
  * [#56016](https://github.com/quarkusio/quarkus/pull/56016) - Bump org.apache.httpcomponents.client5:httpclient5 from 5.6.1 to 5.6.3 in /bom/application
  * [#56030](https://github.com/quarkusio/quarkus/issues/56030) - WriterInterceptor not called for response mapped from exception
  * [#56064](https://github.com/quarkusio/quarkus/issues/56064) - `quarkus-rest-jackson`: reflection-free (de)serializers treat a `Map` subclass as a bean and drop every map entry
  * [#56126](https://github.com/quarkusio/quarkus/pull/56126) - Bump com.fasterxml.jackson:jackson-bom from 2.22.1 to 2.22.2
  * [#56152](https://github.com/quarkusio/quarkus/pull/56152) - Run writer interceptors for responses mapped from exceptions thrown before the interceptor handler
  * [#56161](https://github.com/quarkusio/quarkus/pull/56161) - Allow multiple colons in `@PermissionsAllowed`
  * [#56165](https://github.com/quarkusio/quarkus/issues/56165) - OIDC Redis TokenStateManager returns null instead of failing when the token state is missing, leading to an NPE and HTTP 500
  * [#56173](https://github.com/quarkusio/quarkus/issues/56173) - JarResource: cached toExternalForm() breaks relative URL resolution against CodeSource.getLocation()
  * [#56176](https://github.com/quarkusio/quarkus/pull/56176) - Fix resolving sibling URL in JarResource
  * [#56182](https://github.com/quarkusio/quarkus/issues/56182) - Issue using both Caffeine and Redis for caching
  * [#56206](https://github.com/quarkusio/quarkus/pull/56206) - Fix dead link
  * [#56209](https://github.com/quarkusio/quarkus/pull/56209) - Update preview workflow for Roq
  * [#56216](https://github.com/quarkusio/quarkus/pull/56216) - Avoid early token acquisition for DeferredOidcClient
  * [#56223](https://github.com/quarkusio/quarkus/pull/56223) - [3.39] Fix serialization of string-shaped dates without a pattern in reflection-free Jackson serializers
  * [#56224](https://github.com/quarkusio/quarkus/pull/56224) - [3.39] Support reflection-free json serialization of a Map subtype
  * [#56234](https://github.com/quarkusio/quarkus/pull/56234) - Force re-authentication when the OIDC session token state is no longer available
  * [#56237](https://github.com/quarkusio/quarkus/pull/56237) - Bump org.asynchttpclient:async-http-client from 2.15.0 to 2.16.0 in /bom/application
  * [#56242](https://github.com/quarkusio/quarkus/pull/56242) - Fix Redis cache backend type resolution
  * [#56244](https://github.com/quarkusio/quarkus/pull/56244) - Fix docs preview: Drop invalid condition and unused mtime
  * [#56257](https://github.com/quarkusio/quarkus/pull/56257) - Signals: docs - add comparison with CDI events and Vert.x EventBus
  * [#56278](https://github.com/quarkusio/quarkus/pull/56278) - security-getting-started-tutorial guide style review (3.40)
  * [#56280](https://github.com/quarkusio/quarkus/pull/56280) - security-authorize-web-endpoints-reference guide style review (3.40)
  * [#56281](https://github.com/quarkusio/quarkus/pull/56281) - security-keycloak-authorization guide style review (3.40)
  * [#56282](https://github.com/quarkusio/quarkus/pull/56282) - security-architecture guide style review (3.40)
  * [#56292](https://github.com/quarkusio/quarkus/pull/56292) - Fix typo sytem -> system in the dev services databases guide
  * [#56293](https://github.com/quarkusio/quarkus/pull/56293) - docs: fix typo exisits -> exists
  * [#56300](https://github.com/quarkusio/quarkus/pull/56300) - Allow --path parameter on quarkus create app cli for parity with maven creation
  * [#56306](https://github.com/quarkusio/quarkus/pull/56306) - Typo fixes in deploying-to-abc guides
  * [#56308](https://github.com/quarkusio/quarkus/pull/56308) - [3.39] Fix reading headers in Spring Web - Quarkus REST
  * [#56320](https://github.com/quarkusio/quarkus/pull/56320) - [3.39] Use composite key for token introspection and userinfo cache
  * [#56333](https://github.com/quarkusio/quarkus/pull/56333) - [3.39] Upgrade SmallRye GraphQL to 2.18.5

---

> **Source** [quarkusio/quarkus](https://github.com/quarkusio/quarkus) · `3.39.2` · 2026-09-03 · [upstream release](https://github.com/quarkusio/quarkus/releases/tag/3.39.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
