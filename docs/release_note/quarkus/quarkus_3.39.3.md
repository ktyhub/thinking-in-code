---
title: "quarkus 3.39.3"
project: "quarkus"
repo: "quarkusio/quarkus"
tag: "3.39.3"
published: "2026-09-10"
type: "patch"
lang: "en"
---

# quarkus 3.39.3

### Complete changelog

  * [#42976](https://github.com/quarkusio/quarkus/issues/42976) -  Quarkus REST in NATIVE - abstract resources with `@Path` requires impl. to be CDI beans while RESTEasy does not
  * [#45257](https://github.com/quarkusio/quarkus/issues/45257) - update guide on writing extension regarding docs generation
  * [#45791](https://github.com/quarkusio/quarkus/issues/45791) - Range response status reset when using a `@ServerResponseFilter`
  * [#55119](https://github.com/quarkusio/quarkus/pull/55119) - Use branch instead of version to avoid dead link on main guides
  * [#55674](https://github.com/quarkusio/quarkus/issues/55674) - context propagation not working correctly
  * [#55739](https://github.com/quarkusio/quarkus/pull/55739) - Fix race in AeshLauncherImpl causing flaky test timeouts
  * [#55835](https://github.com/quarkusio/quarkus/issues/55835) - Quarkus 3.38 in dev mode - WARNING: java.lang.foreign.Linker::downcallHandle has been called by org.aesh.terminal.tty.impl.LibC in an unnamed module
  * [#55962](https://github.com/quarkusio/quarkus/pull/55962) - Enable WebSocket traffic logging in aesh websocket tests
  * [#55999](https://github.com/quarkusio/quarkus/pull/55999) - [Docs]: Lift and Shift review of Deploying to OpenShift guide 
  * [#56018](https://github.com/quarkusio/quarkus/pull/56018) - Aesh: fix flaky WebSocket tests on Semeru by closing WebSocketClient
  * [#56103](https://github.com/quarkusio/quarkus/pull/56103) - Mention the quarkus-config-doc-maven-plugin
  * [#56106](https://github.com/quarkusio/quarkus/pull/56106) - Add licenses for generic file components in SBOMs
  * [#56120](https://github.com/quarkusio/quarkus/pull/56120) - Move SSH enabled config to build time and gate all processor build steps
  * [#56129](https://github.com/quarkusio/quarkus/pull/56129) - Fix wrapWithSpan context propagation
  * [#56153](https://github.com/quarkusio/quarkus/pull/56153) - Keep the 206 status of Range responses when the JAX-RS response has been materialized
  * [#56222](https://github.com/quarkusio/quarkus/pull/56222) - Make sure the callouts follow the Asciidoc syntax
  * [#56240](https://github.com/quarkusio/quarkus/pull/56240) - Update redirect instructions for Roq
  * [#56279](https://github.com/quarkusio/quarkus/pull/56279) - Security overview guide style review (3.40)
  * [#56301](https://github.com/quarkusio/quarkus/pull/56301) - Upgrade aesh to 3.17.5 and improve AeshLauncher test framework
  * [#56336](https://github.com/quarkusio/quarkus/pull/56336) - [3.39] Server-Side Template Injection (SSTI) vulnerability in ReflectionValueResolver of the Quarkus Qute template engine
  * [#56340](https://github.com/quarkusio/quarkus/pull/56340) - Add a packaging overview guide
  * [#56346](https://github.com/quarkusio/quarkus/pull/56346) - Manage projectreactor in the bom, update to 3.8.7
  * [#56348](https://github.com/quarkusio/quarkus/pull/56348) - Update building-docs skill and docs-preview.sh for Roq migration
  * [#56354](https://github.com/quarkusio/quarkus/pull/56354) - Upgrade hibernate ORM from 7.4.5.Final to 7.4.7.Final
  * [#56357](https://github.com/quarkusio/quarkus/pull/56357) - [3.39] backport of doc improvement 
  * [#56359](https://github.com/quarkusio/quarkus/pull/56359) - Check Keycloak token type on the OIDC server-less verification path
  * [#56365](https://github.com/quarkusio/quarkus/pull/56365) - [3.39] Upgrade RESTEasy to 6.2.18.Final
  * [#56374](https://github.com/quarkusio/quarkus/issues/56374) - Remove warning from PeriodicMetricReader
  * [#56386](https://github.com/quarkusio/quarkus/issues/56386) - Style and syntax violations in docs callouts
  * [#56389](https://github.com/quarkusio/quarkus/pull/56389) - Do not use attributes in guide title to work around Roq/Yupiik limitation
  * [#56391](https://github.com/quarkusio/quarkus/pull/56391) - Fix numbered callout lists in documentation examples
  * [#56393](https://github.com/quarkusio/quarkus/issues/56393) - ReactiveRedisDataSource.withConnection leaks pool permit when cancelled before connection is acquired
  * [#56395](https://github.com/quarkusio/quarkus/pull/56395) - Suppress PeriodicMetricReader exporter warnings
  * [#56400](https://github.com/quarkusio/quarkus/issues/56400) - rest-jackson: ContextResolver<ObjectMapper> result cached by entity class, dropping the media type from the key
  * [#56402](https://github.com/quarkusio/quarkus/issues/56402) - rest-jackson: SecurityCustomSerialization caches its ObjectWriter in a JVM-wide static field, dropping the ObjectMapper from the key
  * [#56408](https://github.com/quarkusio/quarkus/pull/56408) - Update the logging guide for supported APIs
  * [#56413](https://github.com/quarkusio/quarkus/pull/56413) - Redis client: fix connection leaks caused by cancellation during acquisition
  * [#56424](https://github.com/quarkusio/quarkus/pull/56424) - Quarkus REST: fix native mode when abstract resource with path is extended by a subclass without paths
  * [#56425](https://github.com/quarkusio/quarkus/pull/56425) - Doc - place callout lists after source listings
  * [#56429](https://github.com/quarkusio/quarkus/pull/56429) - Typo fixes in websockets-next guides
  * [#56430](https://github.com/quarkusio/quarkus/pull/56430) - Ensure `FullyFeaturedServerJacksonMessageBodyWriter` uses media type properly
  * [#56431](https://github.com/quarkusio/quarkus/pull/56431) - Ensure `SecurityCustomSerialization` uses `ContextResolver`
  * [#56432](https://github.com/quarkusio/quarkus/pull/56432) - Remove orphaned callout markers with missing explanations
  * [#56444](https://github.com/quarkusio/quarkus/pull/56444) - Drop steps for discarded toc plugin in docs preview
  * [#56449](https://github.com/quarkusio/quarkus/pull/56449) - Fix remaining callout list placement issues in docs
  * [#56470](https://github.com/quarkusio/quarkus/pull/56470) - [3.39] Decouple types discovery and generation of reflection-free Jackson serializers
  * [#56480](https://github.com/quarkusio/quarkus/pull/56480) - fix: align docs-preview.sh default port to 8042
  * [#56487](https://github.com/quarkusio/quarkus/pull/56487) - Update to Avro 1.12.2, auto-trust Avro-generated classes, add properties to configure additional Avro-trusted classes
  * [#56489](https://github.com/quarkusio/quarkus/pull/56489) - SBOM component to product attribution
  * [#56493](https://github.com/quarkusio/quarkus/issues/56493) - Certificate reload skips restored certificates by comparing against startup snapshot
  * [#56497](https://github.com/quarkusio/quarkus/pull/56497) - [3.39] SBOM CPE attribution
  * [#56498](https://github.com/quarkusio/quarkus/pull/56498) - Ensure restoring certificate to original works

---

> **Source** [quarkusio/quarkus](https://github.com/quarkusio/quarkus) · `3.39.3` · 2026-09-10 · [upstream release](https://github.com/quarkusio/quarkus/releases/tag/3.39.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
