---
title: "quarkus 3.39.4"
project: "quarkus"
repo: "quarkusio/quarkus"
tag: "3.39.4"
published: "2026-09-17"
type: "patch"
lang: "en"
---

# quarkus 3.39.4

### Complete changelog

  * [#35814](https://github.com/quarkusio/quarkus/issues/35814) - `Quarkus Security with Jakarta Persistence` guide doesn't mention `security-jpa-reactive` extension
  * [#37745](https://github.com/quarkusio/quarkus/issues/37745) - Docs: security-oauth2 and security-oauth2-quickstart Guide
  * [#41734](https://github.com/quarkusio/quarkus/issues/41734) - Probable bug in  CognitoPrincipal lines 62 70
  * [#53739](https://github.com/quarkusio/quarkus/issues/53739) - ConfigDiagnostic.configFiles() crashes with AccessDeniedException on Windows when CWD is system32
  * [#54925](https://github.com/quarkusio/quarkus/issues/54925) - Formatting fails with a `NullPointerException` and the log record is dropped
  * [#54926](https://github.com/quarkusio/quarkus/pull/54926) - Fix JSON logging with null formatter keys
  * [#55111](https://github.com/quarkusio/quarkus/issues/55111) - [quarkus-info] Allow hiding the quarkus version
  * [#55763](https://github.com/quarkusio/quarkus/issues/55763) - Make the OIDC token JWE decryption algorithm configurable
  * [#55910](https://github.com/quarkusio/quarkus/pull/55910) - Remove unreachable duplicate Claims.groups branch in CognitoPrincipal
  * [#55916](https://github.com/quarkusio/quarkus/issues/55916) - DPoPNonceProvider should accept DPoP proof jti
  * [#56160](https://github.com/quarkusio/quarkus/issues/56160) - JBang integration fails on Java 24+ with IllegalAccessError: module java.base does not open java.lang
  * [#56287](https://github.com/quarkusio/quarkus/pull/56287) - Add forgotten extension-status includes – and remove extension status from guides for stable extensions
  * [#56303](https://github.com/quarkusio/quarkus/pull/56303) - OIDC: make `DPoPNonceProvider` accept DPoP proof `jti`
  * [#56453](https://github.com/quarkusio/quarkus/pull/56453) - Allow TEST_TO_MAIN_MAPPINGS to be set as a system property
  * [#56514](https://github.com/quarkusio/quarkus/pull/56514) - Restore the third callout entry in the Hibernate ORM interceptor example
  * [#56515](https://github.com/quarkusio/quarkus/pull/56515) - Add the missing callout entry in the Infinispan client Greeting example
  * [#56517](https://github.com/quarkusio/quarkus/pull/56517) - Keep the Keycloak Dev Services resource-mapping callout list together
  * [#56518](https://github.com/quarkusio/quarkus/pull/56518) - Use a callout list for the generated resources extension example
  * [#56519](https://github.com/quarkusio/quarkus/pull/56519) - Add the two missing callout entries in the Vert.x OIDC migration guide
  * [#56523](https://github.com/quarkusio/quarkus/issues/56523) - Bootstrap Maven command from Getting started guide fails
  * [#56527](https://github.com/quarkusio/quarkus/pull/56527) - Fix reproducibility issue in Avro
  * [#56529](https://github.com/quarkusio/quarkus/pull/56529) - Strip quotes from extension names in Maven create command
  * [#56537](https://github.com/quarkusio/quarkus/pull/56537) - Bump GraalVM SDK version to 25.0.4.1
  * [#56540](https://github.com/quarkusio/quarkus/issues/56540) - NPE in getEffectiveMapper when response entity is an anonymous class (e.g. Stream)
  * [#56541](https://github.com/quarkusio/quarkus/pull/56541) - Fix NPE in getEffectiveMapper when response entity is an anonymous class
  * [#56552](https://github.com/quarkusio/quarkus/issues/56552) - the --debug-port or -DdebugPort parameter doesn't seem to work properly, always binding to port 5005
  * [#56556](https://github.com/quarkusio/quarkus/pull/56556) - Upgrade Apache HttpClient5 to 5.6.4
  * [#56559](https://github.com/quarkusio/quarkus/pull/56559) - Fix custom debug port being ignored in dev mode
  * [#56560](https://github.com/quarkusio/quarkus/pull/56560) - [3.39] Bump to Vert.x 4.5.34
  * [#56561](https://github.com/quarkusio/quarkus/pull/56561) - Remove empty RemoveableLateBoundSpanProcessor and LateBoundSpanProcessor files
  * [#56562](https://github.com/quarkusio/quarkus/pull/56562) - Customize OIDC token decryption algorithm
  * [#56563](https://github.com/quarkusio/quarkus/issues/56563) - [Keycloak dev service] - Make dev service access token lifespan configurable
  * [#56583](https://github.com/quarkusio/quarkus/pull/56583) - Avoid an internal error when a bean parameter field is not a class type
  * [#56584](https://github.com/quarkusio/quarkus/pull/56584) - docs: remove duplicate 'the' in OpenTelemetry logging guide
  * [#56585](https://github.com/quarkusio/quarkus/pull/56585) - docs: remove duplicate 'the' in Dev UI Patterns note
  * [#56586](https://github.com/quarkusio/quarkus/pull/56586) - Fix 'allows to' grammar in Config programmatic access docs
  * [#56587](https://github.com/quarkusio/quarkus/pull/56587) - Fix 'allows to storage' grammar in MongoDB guide
  * [#56590](https://github.com/quarkusio/quarkus/pull/56590) - Skip configuration directories that cannot be read when looking for unknown config files
  * [#56593](https://github.com/quarkusio/quarkus/pull/56593) - docs: remove duplicate 'the' in OIDC application-type note
  * [#56604](https://github.com/quarkusio/quarkus/pull/56604) - Keycloak Dev Service: make default realm's token lifespan configurable
  * [#56613](https://github.com/quarkusio/quarkus/pull/56613) - Compare Cognito claim names with strings instead of Claims enum constants
  * [#56617](https://github.com/quarkusio/quarkus/pull/56617) - Run the effective command of quarkus:update, with the local repository property
  * [#56623](https://github.com/quarkusio/quarkus/pull/56623) - Pass the add-opens requirements to JBang
  * [#56626](https://github.com/quarkusio/quarkus/pull/56626) - Fix the imports of the resource examples in the OAuth2 guide
  * [#56627](https://github.com/quarkusio/quarkus/pull/56627) - Mention the reactive extension in the Jakarta Persistence security guide
  * [#56628](https://github.com/quarkusio/quarkus/pull/56628) - Cache generated Jackson deserializers
  * [#56630](https://github.com/quarkusio/quarkus/issues/56630) - cyclonedx guide doesn't list quarkus.cyclonedx.endpoint.* configuration options in reference section
  * [#56631](https://github.com/quarkusio/quarkus/pull/56631) - Additional test coverage for CycloneDX
  * [#56635](https://github.com/quarkusio/quarkus/pull/56635) - Info - Allow disabling Quarkus version
  * [#56637](https://github.com/quarkusio/quarkus/pull/56637) - Add missing CycloneDX endpoint configuration to guide
  * [#56654](https://github.com/quarkusio/quarkus/issues/56654) - Flaky test: io.quarkus.micrometer.deployment.binder.VertxTcpMetricsTest.testTcpMetrics
  * [#56656](https://github.com/quarkusio/quarkus/issues/56656) - Flaky test: io.quarkus.quartz.test.PausedSchedulerTest.testSchedulerPauseResume
  * [#56657](https://github.com/quarkusio/quarkus/issues/56657) - Flaky test: io.quarkus.redis.datasource.PubSubCommandsTest.subscribeToSingleWithMultiAsMessages
  * [#56667](https://github.com/quarkusio/quarkus/pull/56667) - Update outdated native SSL guide summary
  * [#56669](https://github.com/quarkusio/quarkus/pull/56669) - Fix flaky test DevMojoIT.testResourcesFromClasspath on Windows
  * [#56671](https://github.com/quarkusio/quarkus/pull/56671) - Fix flaky PubSubCommandsTest by awaiting reactive subscriptions
  * [#56708](https://github.com/quarkusio/quarkus/pull/56708) - Fix flaky PausedSchedulerTest
  * [#56749](https://github.com/quarkusio/quarkus/pull/56749) - Drop testEmbeddedSbomUncompressed as quarkus.cyclonedx.embedded.compress was repurposed for the SBOM endpoint
  * [#56754](https://github.com/quarkusio/quarkus/pull/56754) - Prevent leakage between Micrometer tests

---

> **Source** [quarkusio/quarkus](https://github.com/quarkusio/quarkus) · `3.39.4` · 2026-09-17 · [upstream release](https://github.com/quarkusio/quarkus/releases/tag/3.39.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
