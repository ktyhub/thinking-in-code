---
title: "quarkus 4.0.0.Beta2"
project: "quarkus"
repo: "quarkusio/quarkus"
tag: "4.0.0.Beta2"
published: "2026-10-28"
type: "major"
lang: "en"
summary: "#54900 - Add OIDC Client attestation authentication · #57391 - Introduce JFR events to REST Client"
---

# quarkus 4.0.0.Beta2

### Major changes

  * [#54900](https://github.com/quarkusio/quarkus/pull/54900) - Add OIDC Client attestation authentication
  * [#57391](https://github.com/quarkusio/quarkus/pull/57391) - Introduce JFR events to REST Client

### Complete changelog

  * [#2003](https://github.com/quarkusio/quarkus/issues/2003) - Document how to create a multi-module Maven project
  * [#21866](https://github.com/quarkusio/quarkus/issues/21866) - Support import.sql or similar facility for data population when not using Hibernate to create the schema
  * [#29462](https://github.com/quarkusio/quarkus/issues/29462) - DevUI CORS - hostname dns reverse lookup use-case
  * [#32850](https://github.com/quarkusio/quarkus/issues/32850) - be able to set root log level via dev ui
  * [#33564](https://github.com/quarkusio/quarkus/issues/33564) - Allow the FastBootEntityManagerFactoryBuilder to use a custom SessionFactoryBuilder that can decorate the Hibernate SessionFactory
  * [#39300](https://github.com/quarkusio/quarkus/issues/39300) - Remove kubernetes client split package check
  * [#40490](https://github.com/quarkusio/quarkus/issues/40490) - OIDC and OIDC-CLIENT extensions should consider JVM  HTTP proxy configuration
  * [#40882](https://github.com/quarkusio/quarkus/issues/40882) - Transaction-Scoped observer on transaction end sometimes fails if the transaction is aborted
  * [#41668](https://github.com/quarkusio/quarkus/issues/41668) - Quarkus recorder serialization
  * [#42315](https://github.com/quarkusio/quarkus/issues/42315) - reactive-messaging extension fails to lookup generic payload converter
  * [#44726](https://github.com/quarkusio/quarkus/issues/44726) - `io.quarkus.gradle.extension` is split across multiple modules
  * [#47761](https://github.com/quarkusio/quarkus/issues/47761) - Metrics for the quarkus-load-shedding extension
  * [#48763](https://github.com/quarkusio/quarkus/issues/48763) - Gradle testLogging.showStandardStreams = false ignored by Quarkus tests with JBoss LogManager
  * [#49108](https://github.com/quarkusio/quarkus/issues/49108) - Quarkus OpenTelemetry Metrics must have JFR monitoring option enabled
  * [#51207](https://github.com/quarkusio/quarkus/issues/51207) - Use parametrised tests for Hibernate ORM/Reactive interoperability
  * [#52349](https://github.com/quarkusio/quarkus/issues/52349) - Test classes with `@Nested` classes fail in dev-mode (again)
  * [#52682](https://github.com/quarkusio/quarkus/issues/52682) - Consider supporting OAuth2 Attestation-based Client Authentication
  * [#52872](https://github.com/quarkusio/quarkus/issues/52872) - Allow assigning entities to persistence units on a per-class basis
  * [#53042](https://github.com/quarkusio/quarkus/issues/53042) - Dependency-based service startup/shutdown actions
  * [#53368](https://github.com/quarkusio/quarkus/issues/53368) - Panache Next: detect and prevent being used with Panache 1
  * [#53378](https://github.com/quarkusio/quarkus/pull/53378) - GraalVM dynamic bootstraps registration
  * [#53610](https://github.com/quarkusio/quarkus/pull/53610) - Fix Gradle `testLogging.showStandardStreams` being ignored by Quarkus tests
  * [#54252](https://github.com/quarkusio/quarkus/issues/54252) - Hibernate Validator programmatic cascading constraint does not register class for Validation
  * [#54323](https://github.com/quarkusio/quarkus/pull/54323) - Add types of programmatic constraint mappings to validator config
  * [#54602](https://github.com/quarkusio/quarkus/pull/54602) - Continuous testing - Handle nested classes better
  * [#54900](https://github.com/quarkusio/quarkus/pull/54900) - Add OIDC Client attestation authentication
  * [#55135](https://github.com/quarkusio/quarkus/pull/55135) - Refactor Hibernate Reactive compatibility tests to use `@ParameterizedClass`
  * [#55264](https://github.com/quarkusio/quarkus/pull/55264) - Service start/stop infrastructure
  * [#55548](https://github.com/quarkusio/quarkus/pull/55548) - Module tree shaking for JLink
  * [#55650](https://github.com/quarkusio/quarkus/issues/55650) - XML parsers are always included in native images when using Jackson 3
  * [#55726](https://github.com/quarkusio/quarkus/issues/55726) - Netty's MXBean reflective access at startup to obtain the max direct memory
  * [#55780](https://github.com/quarkusio/quarkus/pull/55780) - Read the compareAndExchange witness correctly in ArC CurrentContextState.set
  * [#55998](https://github.com/quarkusio/quarkus/pull/55998) - Include the Jackson 3 DOM handlers in native images only when a DOM type is reachable
  * [#56189](https://github.com/quarkusio/quarkus/issues/56189) - Cache API Library
  * [#56243](https://github.com/quarkusio/quarkus/pull/56243) - Run Roq tests on PRs that change docs
  * [#56264](https://github.com/quarkusio/quarkus/pull/56264) - TLS registry: fail fast when the OpenSSL engine is requested in a native executable
  * [#56323](https://github.com/quarkusio/quarkus/issues/56323) - Dev container deep dependencies
  * [#56350](https://github.com/quarkusio/quarkus/pull/56350) - Work around transient dev services connection to podman
  * [#56450](https://github.com/quarkusio/quarkus/pull/56450) - Fail the build when classic Panache is used with Quarkus Data
  * [#56543](https://github.com/quarkusio/quarkus/pull/56543) - Split quarkus-cache into extension and API library
  * [#56545](https://github.com/quarkusio/quarkus/pull/56545) - Bump org.apache.maven.plugins:maven-plugin-plugin from 3.15.2 to 3.16.0
  * [#56555](https://github.com/quarkusio/quarkus/pull/56555) - Resolve dev service config dependency chains deeper than one level
  * [#56567](https://github.com/quarkusio/quarkus/pull/56567) - Bump org.eclipse.jgit:org.eclipse.jgit from 7.7.1.202607240634-r to 7.8.0.202609011348-r
  * [#56624](https://github.com/quarkusio/quarkus/pull/56624) - Do not register a synchronization on a transaction that is completing
  * [#56636](https://github.com/quarkusio/quarkus/pull/56636) - Bump io.quarkus:quarkus-platform-bom-maven-plugin from 0.0.134 to 0.0.135
  * [#56640](https://github.com/quarkusio/quarkus/pull/56640) - Bump apicurio-registry.version from 3.3.2 to 3.3.3
  * [#56643](https://github.com/quarkusio/quarkus/pull/56643) - Bump io.strimzi:strimzi-test-container from 0.116.0 to 0.117.0
  * [#56655](https://github.com/quarkusio/quarkus/issues/56655) - Flaky test: io.quarkus.load.shedding.NaiveLoadSheddingTest.test
  * [#56670](https://github.com/quarkusio/quarkus/pull/56670) - Document dev mode in multi-module Maven projects
  * [#56672](https://github.com/quarkusio/quarkus/pull/56672) - Bump com.gradle.plugin-publish from 2.2.0 to 2.2.1 in /devtools/gradle
  * [#56673](https://github.com/quarkusio/quarkus/pull/56673) - Bump com.gradle.develocity from 4.5.0 to 4.5.1 in /devtools/gradle
  * [#56698](https://github.com/quarkusio/quarkus/pull/56698) - Honor non-proxy-hosts and the none proxy name in the OIDC extensions
  * [#56710](https://github.com/quarkusio/quarkus/pull/56710) - Document how to open Dev UI through another host name
  * [#56720](https://github.com/quarkusio/quarkus/pull/56720) - Add Hibernate ORM data init scripts and deprecate sql-load-script
  * [#56742](https://github.com/quarkusio/quarkus/pull/56742) - Keep the type arguments of the ingested payload type of messaging methods
  * [#56808](https://github.com/quarkusio/quarkus/issues/56808) - Flaky test:  io.quarkus.test.QuarkusProdModeTestConfusingLogTest.shouldWaitForAppActuallyStarted
  * [#56813](https://github.com/quarkusio/quarkus/issues/56813) - amazon-lambda dev mode: the hot-replacement requeue always 404s and stops the freshly restarted application
  * [#56826](https://github.com/quarkusio/quarkus/pull/56826) - Fix Amazon Lambda dev mode hot reload causing application shutdown
  * [#56839](https://github.com/quarkusio/quarkus/pull/56839) - Bump org.asynchttpclient:async-http-client from 2.16.0 to 2.16.1 in /bom/application
  * [#56879](https://github.com/quarkusio/quarkus/issues/56879) - Docs: the REST Client guide never names the REST Client JSON-B extension
  * [#56880](https://github.com/quarkusio/quarkus/pull/56880) - Add the missing guide links to the metadata of 19 extensions
  * [#56921](https://github.com/quarkusio/quarkus/pull/56921) - quarkus-data-hibernate.doc is now a reference guide
  * [#56929](https://github.com/quarkusio/quarkus/issues/56929) - Deprecate JPMSExportBuildItem
  * [#56935](https://github.com/quarkusio/quarkus/issues/56935) - `@QuarkusTest` restarts leave stale `SessionFactory` in static `OpenedSessionsState` cache → UnknownServiceException: ReactiveConnectionPool
  * [#56939](https://github.com/quarkusio/quarkus/issues/56939) - Swagger UI generates absolute spec URL (`url: '/openapi'`) — broken behind a reverse proxy in K8s
  * [#56948](https://github.com/quarkusio/quarkus/pull/56948) - Add contribution guidelines for reproducible builds in Quarkus
  * [#56951](https://github.com/quarkusio/quarkus/pull/56951) - Export the Dev UI observability dashboard to Grafana
  * [#56953](https://github.com/quarkusio/quarkus/pull/56953) - Fix Swagger UI URL behind reverse proxies
  * [#56963](https://github.com/quarkusio/quarkus/issues/56963) - `@TestHTTPEndpoint` and `@TestHTTPResource` ignore custom port when using quarkus-amazon-lambda-http
  * [#56984](https://github.com/quarkusio/quarkus/issues/56984) - Support `@RestHeader` with `MultivaluedMap<String, String>`
  * [#56985](https://github.com/quarkusio/quarkus/pull/56985) - Support  MultivaluedMap<String, String> to collect HTTP headers
  * [#56988](https://github.com/quarkusio/quarkus/pull/56988) - Lock on the transaction key when registering the first interposed synchronization
  * [#56995](https://github.com/quarkusio/quarkus/pull/56995) - Fix the Dev UI routes page failing when a sub-router is mounted
  * [#57000](https://github.com/quarkusio/quarkus/issues/57000) - Use ECS field names for structured access log fields when `log-format=ECS`
  * [#57009](https://github.com/quarkusio/quarkus/pull/57009) - Warn about static resource shadowing of JAX-RS resources
  * [#57024](https://github.com/quarkusio/quarkus/pull/57024) - Bump org.codehaus.mojo:templating-maven-plugin from 3.1.0 to 3.1.1
  * [#57025](https://github.com/quarkusio/quarkus/pull/57025) - Bump com.nimbusds:nimbus-jose-jwt from 10.9.1 to 10.10
  * [#57026](https://github.com/quarkusio/quarkus/pull/57026) - Add dedicated section for using the OpenSSL engine on classical TLS paths
  * [#57031](https://github.com/quarkusio/quarkus/pull/57031) - Stop sharing packages between the Gradle model and the Gradle plugin
  * [#57035](https://github.com/quarkusio/quarkus/pull/57035) - reachability-metadata.json stable order of elements
  * [#57038](https://github.com/quarkusio/quarkus/pull/57038) - Finish the Dev UI package split
  * [#57045](https://github.com/quarkusio/quarkus/issues/57045) - Occasional CI failure: testContainerReusedAcrossRuns
  * [#57050](https://github.com/quarkusio/quarkus/issues/57050) - Native: config validation fails at startup with MissingReflectionRegistrationError on GraalVM 25.1 and later
  * [#57052](https://github.com/quarkusio/quarkus/pull/57052) - Bump tools.jackson:jackson-bom from 3.1.4 to 3.1.7
  * [#57053](https://github.com/quarkusio/quarkus/pull/57053) - Bump org.slf4j:slf4j-api from 2.0.19 to 2.0.20
  * [#57054](https://github.com/quarkusio/quarkus/pull/57054) - Bump org.codejive:java-properties from 0.0.7 to 0.0.8
  * [#57055](https://github.com/quarkusio/quarkus/pull/57055) - Bump kafka.version from 4.2.1 to 4.2.2
  * [#57056](https://github.com/quarkusio/quarkus/pull/57056) - Bump com.h2database:h2 from 2.4.240 to 2.5.252
  * [#57061](https://github.com/quarkusio/quarkus/pull/57061) - Add IBM Bob to Dev MCP settings 
  * [#57062](https://github.com/quarkusio/quarkus/pull/57062) - Create Semeru SCC when `quarkus.package.jar.aot.phase` is `auto` or absent and the JVM is Semeru
  * [#57063](https://github.com/quarkusio/quarkus/issues/57063) - Redis client: `<default>` client is created twice when `RedisDataSource` is injected ("Gauge redis.pool.queue.size has been already registered")
  * [#57064](https://github.com/quarkusio/quarkus/pull/57064) - WebSockets Next: fix NPE during security identity update
  * [#57066](https://github.com/quarkusio/quarkus/pull/57066) - Use the module names that dependencies now provide
  * [#57069](https://github.com/quarkusio/quarkus/pull/57069) - Let quarkus-vertx-utils use Vert.x internals in a jlink image
  * [#57072](https://github.com/quarkusio/quarkus/pull/57072) - Create the Redis client only once per client name
  * [#57073](https://github.com/quarkusio/quarkus/pull/57073) - Add JSON-B alternatives to the REST client guide
  * [#57080](https://github.com/quarkusio/quarkus/issues/57080) - WebSockets Next: client onClose not called when the close handshake times out ("Invalid status code: 1006")
  * [#57081](https://github.com/quarkusio/quarkus/issues/57081) - WebSockets Next: BasicWebSocketConnector adds a '/' to the base URI path when no path is set
  * [#57085](https://github.com/quarkusio/quarkus/pull/57085) - Do not try running validation on unconstrained configs
  * [#57088](https://github.com/quarkusio/quarkus/pull/57088) - Upgrade OTel SDK to 1.65.0
  * [#57089](https://github.com/quarkusio/quarkus/issues/57089) - OIDC protected resource metadata response has no Content-Type
  * [#57094](https://github.com/quarkusio/quarkus/pull/57094) - Set Content-Type on OIDC protected resource metadata response
  * [#57099](https://github.com/quarkusio/quarkus/pull/57099) - WebSockets Next: Do not append a trailing slash to the BasicWebSocketConnector base URI
  * [#57103](https://github.com/quarkusio/quarkus/pull/57103) - Fix incorrect references and typos in documentation
  * [#57109](https://github.com/quarkusio/quarkus/issues/57109) - Config doc uses the default prefix when compiled with the Eclipse compiler (ECJ)
  * [#57110](https://github.com/quarkusio/quarkus/pull/57110) - Config doc: identify annotation members by simple name
  * [#57111](https://github.com/quarkusio/quarkus/pull/57111) - Update Jackson customization documentation
  * [#57113](https://github.com/quarkusio/quarkus/pull/57113) - WebSockets Next: correct close reason when connection is closed abruptly
  * [#57118](https://github.com/quarkusio/quarkus/pull/57118) - Clear Hibernate Reactive session caches on shutdown
  * [#57119](https://github.com/quarkusio/quarkus/pull/57119) - Disable Semeru on CI
  * [#57131](https://github.com/quarkusio/quarkus/issues/57131) - REST Client NPEs when invoked from a duplicated Vert.x context with no context locals set
  * [#57132](https://github.com/quarkusio/quarkus/pull/57132) - Avoid NPE when the REST Client is invoked from a bare duplicated context
  * [#57135](https://github.com/quarkusio/quarkus/pull/57135) - Keycloak Authorization: validate non-proxy-hosts not used during application startup
  * [#57136](https://github.com/quarkusio/quarkus/pull/57136) - Keycloak Authorization: move build time config to build module and address deprecations in Keycloak Admin
  * [#57139](https://github.com/quarkusio/quarkus/pull/57139) - Use ECS field names for structured access log fields in ECS format
  * [#57140](https://github.com/quarkusio/quarkus/pull/57140) - Remove the unclosed Gradle conditional from the update guide
  * [#57141](https://github.com/quarkusio/quarkus/pull/57141) - Prevent duplicate HTTP security policy checks across normalization forms
  * [#57144](https://github.com/quarkusio/quarkus/pull/57144) - Add TLS registry capability for extensions relying on its SPI
  * [#57145](https://github.com/quarkusio/quarkus/pull/57145) - Document how JVM options that add modules affect the AOT cache
  * [#57148](https://github.com/quarkusio/quarkus/pull/57148) - Bump SmallRye Certificate Generator to version 1.1.3
  * [#57149](https://github.com/quarkusio/quarkus/pull/57149) - Move to ubuntu-slim for small, administrative tasks
  * [#57151](https://github.com/quarkusio/quarkus/pull/57151) - Switch Develocity URL to develocity.quarkus.io and use DEVELOCITY_ACCESS_KEY
  * [#57154](https://github.com/quarkusio/quarkus/pull/57154) - Register Vert.x ClientMultipartFormUpload for runtime initialization
  * [#57156](https://github.com/quarkusio/quarkus/pull/57156) - Remove stale Apicurio Registry GraalVM substitutions
  * [#57159](https://github.com/quarkusio/quarkus/pull/57159) - Allow assigning entities to persistence units on a per-class basis
  * [#57161](https://github.com/quarkusio/quarkus/pull/57161) - Bump org.mockito:mockito-bom from 5.21.0 to 5.24.0
  * [#57162](https://github.com/quarkusio/quarkus/pull/57162) - Netty: Open package `sun.nio.ch` from `java.base` module
  * [#57164](https://github.com/quarkusio/quarkus/pull/57164) - Update Kotlin to 2.4.20
  * [#57166](https://github.com/quarkusio/quarkus/pull/57166) - Update Narayana LRA to 2.0.1.Final
  * [#57171](https://github.com/quarkusio/quarkus/pull/57171) - Bug fixes found when developing parallel start
  * [#57174](https://github.com/quarkusio/quarkus/issues/57174) - Service start/stop is breaking build reproducibility
  * [#57179](https://github.com/quarkusio/quarkus/pull/57179) - Migrate hibernate-orm deployment tests from RESTEasy Classic to Quarkus REST
  * [#57180](https://github.com/quarkusio/quarkus/pull/57180) - Unwatch Redis cache keys when value loading fails
  * [#57181](https://github.com/quarkusio/quarkus/pull/57181) - OTel tracing set to 100% in tests
  * [#57185](https://github.com/quarkusio/quarkus/pull/57185) - Build(deps): Bump org.mvnpm:type-fest from 5.8.0 to 5.10.0
  * [#57186](https://github.com/quarkusio/quarkus/pull/57186) - Bump org.eclipse.microprofile.openapi:microprofile-openapi-api from 4.2-RC4 to 4.2-RC5
  * [#57187](https://github.com/quarkusio/quarkus/pull/57187) - Bump org.eclipse.microprofile.health:microprofile-health-tck from 4.0.1 to 4.0.2
  * [#57189](https://github.com/quarkusio/quarkus/pull/57189) - Build(deps-dev): Bump com.google.guava:guava from 33.7.1-jre to 33.7.2-jre
  * [#57191](https://github.com/quarkusio/quarkus/pull/57191) - Bump org.apache.maven.plugins:maven-install-plugin from 3.1.4 to 3.2.0
  * [#57192](https://github.com/quarkusio/quarkus/pull/57192) - Use Maven wrapper in preview workflow
  * [#57194](https://github.com/quarkusio/quarkus/pull/57194) - Bump and migrate to Vert.x 5.2.2 and Netty 4.2.19
  * [#57199](https://github.com/quarkusio/quarkus/pull/57199) - Update system-stubs-jupiter to 2.1.8
  * [#57202](https://github.com/quarkusio/quarkus/issues/57202) - `@ConfigMapping` from a dependency is ignored when an extension config root is indexed before it (regression in 4.0.0.Beta1)
  * [#57203](https://github.com/quarkusio/quarkus/pull/57203) - Keep discovering config mappings after an indexed extension config root
  * [#57204](https://github.com/quarkusio/quarkus/pull/57204) - Extract quarkus-flyway-common and add MongoClientSchemaReadyBuildItem
  * [#57205](https://github.com/quarkusio/quarkus/pull/57205) - Create the OIDC Redis token state manager bean without a recorder
  * [#57206](https://github.com/quarkusio/quarkus/pull/57206) - Register the SmallRye Health startup work as services
  * [#57209](https://github.com/quarkusio/quarkus/pull/57209) - Fix argument order in SortedNullSafeMap two-entry factory method
  * [#57210](https://github.com/quarkusio/quarkus/pull/57210) - Update Develocity extension to 1.4.0
  * [#57211](https://github.com/quarkusio/quarkus/pull/57211) - Update Elytron to 2.9.4
  * [#57220](https://github.com/quarkusio/quarkus/issues/57220) - Remove bytecode recorders from: `extensions/smallrye-health`
  * [#57224](https://github.com/quarkusio/quarkus/issues/57224) - Remove bytecode recorders from: `extensions/keycloak-admin-resteasy-client`
  * [#57225](https://github.com/quarkusio/quarkus/pull/57225) - Drop stale patch code to fix docs CI
  * [#57226](https://github.com/quarkusio/quarkus/pull/57226) - Bump org.apache.commons:commons-lang3 from 3.20.0 to 3.21.0
  * [#57229](https://github.com/quarkusio/quarkus/pull/57229) - Bump org.eclipse.microprofile.config:microprofile-config-tck from 3.1.1 to 3.1.2
  * [#57231](https://github.com/quarkusio/quarkus/issues/57231) - OidcClient cache ignores changes in additional params
  * [#57234](https://github.com/quarkusio/quarkus/pull/57234) - Bring back preview.yml to ubuntu-latest
  * [#57236](https://github.com/quarkusio/quarkus/pull/57236) - Set up a JDK before publishing Develocity build scans
  * [#57240](https://github.com/quarkusio/quarkus/issues/57240) - JAR tree-shaking removes classes referenced only from an invokedynamic call site type (NoClassDefFoundError with vertx-core LoadBalancer)
  * [#57241](https://github.com/quarkusio/quarkus/pull/57241) - Tree-shaking: keep classes referenced from invokedynamic call site descriptors
  * [#57245](https://github.com/quarkusio/quarkus/issues/57245) - Hibernate ORM: a zipped `sql-load-script` makes packaged applications fail to start
  * [#57246](https://github.com/quarkusio/quarkus/pull/57246) - Support zipped Hibernate ORM SQL load scripts in packaged applications
  * [#57247](https://github.com/quarkusio/quarkus/pull/57247) - Bug fix: Any unknown class loader should be considered the run time class loader
  * [#57250](https://github.com/quarkusio/quarkus/pull/57250) - Bump at.yawk.lz4:lz4-java from 1.11.1 to 1.11.4 in /bom/application
  * [#57252](https://github.com/quarkusio/quarkus/pull/57252) - Upgrade snappy-java to 1.1.10.11
  * [#57253](https://github.com/quarkusio/quarkus/issues/57253) - Quarkus 4.0.0.Beta1: Dev UI resources stay pending over HTTP/2 (TLS)
  * [#57255](https://github.com/quarkusio/quarkus/issues/57255) - Reproducibility issue - BuildStep#getId() included in bytecode
  * [#57257](https://github.com/quarkusio/quarkus/issues/57257) - MongoDB with Panache: multi-field PanacheQL update (`a = ?1 and b = ?2`) fails since 3.37 because `and` is bound as `$and` inside `$set`
  * [#57262](https://github.com/quarkusio/quarkus/pull/57262) - Fix multi-field PanacheQL updates in MongoDB with Panache
  * [#57269](https://github.com/quarkusio/quarkus/pull/57269) - Fix incorrect references and typos in kafka guide
  * [#57273](https://github.com/quarkusio/quarkus/issues/57273) - Remove bytecode recorders from: `extensions/mailer`
  * [#57274](https://github.com/quarkusio/quarkus/pull/57274) - Go back to ubuntu-latest for develocity-publish-build-scans.yml
  * [#57277](https://github.com/quarkusio/quarkus/issues/57277) - DevUI errors
  * [#57279](https://github.com/quarkusio/quarkus/pull/57279) - Bump com.gradle:develocity-maven-extension from 2.5.0 to 2.6.0
  * [#57282](https://github.com/quarkusio/quarkus/pull/57282) - Bump org.bouncycastle:bctls-fips from 2.1.24 to 2.1.25
  * [#57288](https://github.com/quarkusio/quarkus/pull/57288) - Reproducibility: use the class name for default step ID
  * [#57293](https://github.com/quarkusio/quarkus/issues/57293) - Remove bytecode recorders from: `extensions/kubernetes-config`
  * [#57294](https://github.com/quarkusio/quarkus/issues/57294) - Remove bytecode recorders from: `extensions/kubernetes-client`
  * [#57295](https://github.com/quarkusio/quarkus/issues/57295) - Remove bytecode recorders from: `extensions/kafka-client`
  * [#57296](https://github.com/quarkusio/quarkus/issues/57296) - Remove bytecode recorders from: `extensions/jaxb`
  * [#57297](https://github.com/quarkusio/quarkus/issues/57297) - Remove bytecode recorders from: `extensions/narayana-lra`
  * [#57298](https://github.com/quarkusio/quarkus/issues/57298) - Remove bytecode recorders from: `extensions/kafka-streams`
  * [#57299](https://github.com/quarkusio/quarkus/issues/57299) - Remove bytecode recorders from: `extensions/avro`
  * [#57300](https://github.com/quarkusio/quarkus/issues/57300) - Remove bytecode recorders from: `extensions/micrometer-opentelemetry`
  * [#57301](https://github.com/quarkusio/quarkus/issues/57301) - Remove bytecode recorders from: `extensions/observation`
  * [#57302](https://github.com/quarkusio/quarkus/pull/57302) - Create the mailer beans without a recorder
  * [#57305](https://github.com/quarkusio/quarkus/pull/57305) - Correct the SPIFFE JWT source value in the OIDC client reference
  * [#57306](https://github.com/quarkusio/quarkus/pull/57306) - Fix a bug and a race with service-to-recorder bridging
  * [#57307](https://github.com/quarkusio/quarkus/pull/57307) - Register the Kafka client startup work as services
  * [#57308](https://github.com/quarkusio/quarkus/pull/57308) - Bind the JAXB classes through a service
  * [#57309](https://github.com/quarkusio/quarkus/pull/57309) - Register the Narayana LRA startup work as services
  * [#57310](https://github.com/quarkusio/quarkus/pull/57310) - Create the Kafka Streams support bean without a recorder
  * [#57313](https://github.com/quarkusio/quarkus/pull/57313) - Fix Dev UI websocket NPE when the JSON-RPC codec is not initialized yet
  * [#57320](https://github.com/quarkusio/quarkus/issues/57320) - Services: captured inaccessible classes produce an error
  * [#57321](https://github.com/quarkusio/quarkus/pull/57321) - Dynamically load classes when necessary
  * [#57323](https://github.com/quarkusio/quarkus/pull/57323) - Bump com.fasterxml.jackson:jackson-bom from 2.22.2 to 2.22.3
  * [#57324](https://github.com/quarkusio/quarkus/pull/57324) - Bump org.eclipse.microprofile.health:microprofile-health-api from 4.0.1 to 4.0.2
  * [#57326](https://github.com/quarkusio/quarkus/pull/57326) - Bump asm.version from 9.10.1 to 9.11
  * [#57327](https://github.com/quarkusio/quarkus/pull/57327) - Bump eu.maveniverse.maven.scalpel:extension3 from 0.4.2 to 0.4.3
  * [#57333](https://github.com/quarkusio/quarkus/pull/57333) - Bump elasticsearch-opensource-components.version from 9.4.7 to 9.4.8
  * [#57335](https://github.com/quarkusio/quarkus/pull/57335) - Bump to Vert.x 5.1.10 and Netty 4.2.19.Final
  * [#57336](https://github.com/quarkusio/quarkus/issues/57336) - Remove bytecode recorders from: `extensions/keycloak-admin-rest-client`
  * [#57340](https://github.com/quarkusio/quarkus/pull/57340) - Use branch instead of commit to identify PR
  * [#57344](https://github.com/quarkusio/quarkus/issues/57344) - ArC can create two client proxies for one bean during start-up, and `QuarkusMock` then reaches only one of them
  * [#57345](https://github.com/quarkusio/quarkus/pull/57345) - Stop ignoring split packages in the Kubernetes client
  * [#57346](https://github.com/quarkusio/quarkus/issues/57346) - RESTEasy Reactive multipart parser: malformed body throws message-less RuntimeException (500 instead of 400); boundary state machine AIOOBE in ParseState.entity
  * [#57347](https://github.com/quarkusio/quarkus/pull/57347) - Register the Keycloak admin RESTEasy client startup work as services
  * [#57348](https://github.com/quarkusio/quarkus/pull/57348) - Prevent concurrent creation of multiple client proxies in ArC
  * [#57354](https://github.com/quarkusio/quarkus/pull/57354) - Migrate Micrometer OpenTelemetry from recorders to services
  * [#57355](https://github.com/quarkusio/quarkus/pull/57355) - Fix flaky dev services container reuse tests by choosing a free port at runtime
  * [#57356](https://github.com/quarkusio/quarkus/pull/57356) - Fix NPE in Undertow exception handling when a 500 error page is mapped
  * [#57357](https://github.com/quarkusio/quarkus/pull/57357) - Register the Avro startup work as services
  * [#57358](https://github.com/quarkusio/quarkus/pull/57358) - Register the Kubernetes Config secrets warning as a service
  * [#57360](https://github.com/quarkusio/quarkus/pull/57360) - Create the Kubernetes resource classes bean with a bean creator
  * [#57361](https://github.com/quarkusio/quarkus/pull/57361) - Create the ObservationRegistry bean without a recorder
  * [#57363](https://github.com/quarkusio/quarkus/pull/57363) - Return 400 for malformed multipart body instead of 500 (RESTEasy Reactive)
  * [#57368](https://github.com/quarkusio/quarkus/issues/57368) - security-jpa-reactive native test fails despite LambdaStrategy.ANONYMOUS_CLASS
  * [#57369](https://github.com/quarkusio/quarkus/pull/57369) - Notify area/panache and area/data owners on pull requests
  * [#57371](https://github.com/quarkusio/quarkus/issues/57371) - [graal/master] Generated Quarkus Feature throws NoSuchMethodError: registerBuildTimeIndyIncludeList
  * [#57372](https://github.com/quarkusio/quarkus/pull/57372) - Add focused Hibernate ORM processor tests
  * [#57373](https://github.com/quarkusio/quarkus/issues/57373) - RESTEasy Classic allocates response buffers from a second Netty allocator
  * [#57376](https://github.com/quarkusio/quarkus/pull/57376) - Remove deprecated QuarkusUnitTest and flatten hierarchy
  * [#57377](https://github.com/quarkusio/quarkus/pull/57377) - Prevent ResteasyReactiveRecorder from capturing TCCL in anonymous lambda
  * [#57378](https://github.com/quarkusio/quarkus/pull/57378) - Use the public GraalVM bootstrap registration API in GraalVM 25.4
  * [#57379](https://github.com/quarkusio/quarkus/pull/57379) - Correct three errors in the SmallRye Health guide
  * [#57381](https://github.com/quarkusio/quarkus/issues/57381) - Maven 3.10.0 breaks workspace bootstrap when the platform version is supplied on the command line
  * [#57385](https://github.com/quarkusio/quarkus/pull/57385) - Correct the Ansible JDK default and the Jib working directory note
  * [#57386](https://github.com/quarkusio/quarkus/pull/57386) - Register the Keycloak admin REST client startup work as services
  * [#57391](https://github.com/quarkusio/quarkus/pull/57391) - Introduce JFR events to REST Client
  * [#57392](https://github.com/quarkusio/quarkus/pull/57392) - Update to Flyway 13
  * [#57393](https://github.com/quarkusio/quarkus/issues/57393) - Deprecate or remove the ignored Hibernate ORM log-session-metrics configuration
  * [#57394](https://github.com/quarkusio/quarkus/pull/57394) - Manage guava in application BOM
  * [#57395](https://github.com/quarkusio/quarkus/pull/57395) - Allow setting the root log level in the Dev UI
  * [#57396](https://github.com/quarkusio/quarkus/issues/57396) - Hibernate Reactive Panache: since 3.38, `@WithSession` / `@WithTransaction` / Panache.withSession() open the session (and BEGIN) at method invocation instead of at Uni subscription
  * [#57397](https://github.com/quarkusio/quarkus/pull/57397) - Use Netty's default allocator for RESTEasy Classic response buffers
  * [#57400](https://github.com/quarkusio/quarkus/pull/57400) - Deprecate `JPMSExportBuildItem` and unify native-image exports
  * [#57401](https://github.com/quarkusio/quarkus/pull/57401) - Remove Jackson Databind from Vertx
  * [#57402](https://github.com/quarkusio/quarkus/pull/57402) - Deprecate quarkus.hibernate-orm.log-session-metrics property
  * [#57403](https://github.com/quarkusio/quarkus/pull/57403) - Upgrade protoc & protobuf-java to 4.35.1
  * [#57406](https://github.com/quarkusio/quarkus/pull/57406) - Build(deps): Bump commons-codec:commons-codec from 1.22.1 to 1.23.0
  * [#57407](https://github.com/quarkusio/quarkus/pull/57407) - Build(deps): Bump rest-assured.version from 6.0.1 to 6.1.0
  * [#57409](https://github.com/quarkusio/quarkus/pull/57409) - Build(deps): Bump de.thetaphi:forbiddenapis from 3.10 to 3.11
  * [#57410](https://github.com/quarkusio/quarkus/pull/57410) - Build(deps): Bump org.mvnpm.at.mvnpm:vaadin-webcomponents from 25.2.10 to 25.3.2
  * [#57411](https://github.com/quarkusio/quarkus/pull/57411) - Build(deps): Bump org.checkerframework:checker-qual from 4.2.3 to 4.3.1
  * [#57415](https://github.com/quarkusio/quarkus/pull/57415) - Build(deps): Bump org.commonmark:commonmark from 0.30.0 to 0.30.1
  * [#57422](https://github.com/quarkusio/quarkus/pull/57422) - Security JPA Reactive: restore the anonymous class lambda strategy
  * [#57426](https://github.com/quarkusio/quarkus/pull/57426) - Fix jlink image startup after the service graph and client proxy changes
  * [#57427](https://github.com/quarkusio/quarkus/pull/57427) - Let Quarkus REST build responses in a jlink image
  * [#57428](https://github.com/quarkusio/quarkus/pull/57428) - Let WebSockets Next use Mutiny and Vert.x internals in a jlink image
  * [#57429](https://github.com/quarkusio/quarkus/issues/57429) - Applications packaged with quarkus-jlink fail to start on main
  * [#57430](https://github.com/quarkusio/quarkus/issues/57430) - Quarkus REST cannot build responses in a jlink image
  * [#57431](https://github.com/quarkusio/quarkus/issues/57431) - WebSockets Next endpoints fail to instantiate in a jlink image
  * [#57438](https://github.com/quarkusio/quarkus/pull/57438) - Add mdc.key-overrides to rename MDC entries in JSON logs
  * [#57439](https://github.com/quarkusio/quarkus/pull/57439) - Open the Panache session when the Uni is subscribed
  * [#57441](https://github.com/quarkusio/quarkus/issues/57441) - Quarkus 3.40 - QuarkusTestProfile - disableApplicationLifecycleObservers is ignored
  * [#57442](https://github.com/quarkusio/quarkus/issues/57442) - Polish Observability in Dev UI
  * [#57445](https://github.com/quarkusio/quarkus/pull/57445) - Update the guides for the Java 21 minimum
  * [#57447](https://github.com/quarkusio/quarkus/issues/57447) - Remove bytecode recorders from: `extensions/amazon-lambda-http`
  * [#57449](https://github.com/quarkusio/quarkus/issues/57449) - Remove bytecode recorders from: `extensions/observability-devservices`
  * [#57450](https://github.com/quarkusio/quarkus/issues/57450) - Remove bytecode recorders from: `extensions/jdbc/jdbc-oracle`
  * [#57451](https://github.com/quarkusio/quarkus/issues/57451) - Remove bytecode recorders from: `extensions/jackson`
  * [#57453](https://github.com/quarkusio/quarkus/pull/57453) - Replace recorders in Jackson with service registration
  * [#57454](https://github.com/quarkusio/quarkus/pull/57454) - Update recorder-to-services skills to be more succinct and complete
  * [#57455](https://github.com/quarkusio/quarkus/pull/57455) - Honor custom test port for `@TestHTTPResource` with Amazon Lambda HTTP
  * [#57458](https://github.com/quarkusio/quarkus/pull/57458) - Service conversion: `redis-client`
  * [#57460](https://github.com/quarkusio/quarkus/pull/57460) - Remove bytecode recorder from extensions/jdbc/jdbc-oracle
  * [#57461](https://github.com/quarkusio/quarkus/pull/57461) - Remove bytecode recorder from extensions/observability-devservices
  * [#57463](https://github.com/quarkusio/quarkus/pull/57463) - Honor QuarkusTestProfile#disableApplicationLifecycleObservers
  * [#57464](https://github.com/quarkusio/quarkus/issues/57464) - Classloader Leak: Array-valued test resource meta-annotations create a separate application/classloader per test class
  * [#57465](https://github.com/quarkusio/quarkus/pull/57465) - Classloader Leak: Fix reload group identifier for array-valued test resource annotations
  * [#57472](https://github.com/quarkusio/quarkus/issues/57472) - Remove bytecode recorders from: `extensions/keycloak-authorization`
  * [#57473](https://github.com/quarkusio/quarkus/pull/57473) - Build(deps): Bump org.htmlunit:htmlunit from 5.5.0 to 5.6.0
  * [#57474](https://github.com/quarkusio/quarkus/pull/57474) - Build(deps-dev): Bump org.codehaus.mojo:versions-maven-plugin from 2.22.0 to 2.23.0
  * [#57476](https://github.com/quarkusio/quarkus/pull/57476) - Build(deps): Bump com.fasterxml:classmate from 1.7.1 to 1.8.0
  * [#57477](https://github.com/quarkusio/quarkus/pull/57477) - Keycloak Authorization: remove bytecode recorder
  * [#57479](https://github.com/quarkusio/quarkus/issues/57479) - REST Client calls fail in a jlink image: io.quarkus.rest.client does not link org.jboss.resteasy.reactive.client.impl
  * [#57482](https://github.com/quarkusio/quarkus/issues/57482) - Qute applications cannot be packaged with quarkus-jlink: duplicate module name io.quarkus.qute
  * [#57483](https://github.com/quarkusio/quarkus/pull/57483) - Document that disabling native monitoring stops the JFR-based JVM metrics
  * [#57484](https://github.com/quarkusio/quarkus/issues/57484) - Basic authentication with embedded users rejects valid credentials in a jlink image
  * [#57485](https://github.com/quarkusio/quarkus/pull/57485) - Give quarkus-qute its own module name
  * [#57486](https://github.com/quarkusio/quarkus/issues/57486) - Applications with Hibernate Validator cannot be packaged with quarkus-jlink: Module java.money not found
  * [#57487](https://github.com/quarkusio/quarkus/pull/57487) - Only pass JDK modules to jlink as JDK modules
  * [#57488](https://github.com/quarkusio/quarkus/pull/57488) - [#57122] Set the Amazon Lambda HTTP configuration from a service
  * [#57491](https://github.com/quarkusio/quarkus/pull/57491) - Let REST Client calls work in a jlink image
  * [#57492](https://github.com/quarkusio/quarkus/pull/57492) - Let the Elytron password provider find its implementations in a jlink image
  * [#57494](https://github.com/quarkusio/quarkus/pull/57494) - Update the security and vulnerability disclosure policies
  * [#57495](https://github.com/quarkusio/quarkus/issues/57495) - Service start/stop: reproducibility issue
  * [#57496](https://github.com/quarkusio/quarkus/pull/57496) - Polish the Dev UI observability dashboard
  * [#57497](https://github.com/quarkusio/quarkus/pull/57497) - Fix Javadoc of `LambdaTransliterator`
  * [#57502](https://github.com/quarkusio/quarkus/issues/57502) - Deprecate `LastShutdownTasks`
  * [#57503](https://github.com/quarkusio/quarkus/pull/57503) - Make sure retained service values are reproducible
  * [#57504](https://github.com/quarkusio/quarkus/pull/57504) - Fix typo in OIDC logout URL parameter name
  * [#57505](https://github.com/quarkusio/quarkus/issues/57505) - Remove bytecode recorders from: `extensions/logging-gelf`
  * [#57506](https://github.com/quarkusio/quarkus/issues/57506) - Remove bytecode recorders from: `extensions/logging-json`
  * [#57508](https://github.com/quarkusio/quarkus/issues/57508) - Remove bytecode recorders from: `extensions/signals`
  * [#57510](https://github.com/quarkusio/quarkus/issues/57510) - Remove bytecode recorders from: `extensions/quartz`
  * [#57511](https://github.com/quarkusio/quarkus/issues/57511) - Remove bytecode recorders from: `extensions/google-cloud-functions`
  * [#57512](https://github.com/quarkusio/quarkus/issues/57512) - Remove bytecode recorders from: `extensions/funqy/funqy-server-common`
  * [#57516](https://github.com/quarkusio/quarkus/pull/57516) - Documentation improvements relating to services
  * [#57517](https://github.com/quarkusio/quarkus/pull/57517) - Fix capabilities section in writing-extensions guide
  * [#57518](https://github.com/quarkusio/quarkus/pull/57518) - Move OpenTelemetry ITs to Quarkus REST
  * [#57519](https://github.com/quarkusio/quarkus/pull/57519) - Bump org.mvnpm:dompurify from 3.4.16 to 3.4.17
  * [#57520](https://github.com/quarkusio/quarkus/pull/57520) - Add Hibernate ORM extension unit tests
  * [#57522](https://github.com/quarkusio/quarkus/pull/57522) - Another wave of service fixes
  * [#57527](https://github.com/quarkusio/quarkus/pull/57527) - Modularize `value-registry`
  * [#57528](https://github.com/quarkusio/quarkus/pull/57528) - Services: add support for capturing date/time/tz and related types
  * [#57531](https://github.com/quarkusio/quarkus/pull/57531) - [#57122] Provide the GELF log handler as a logging service
  * [#57532](https://github.com/quarkusio/quarkus/pull/57532) - [#57122] Provide the JSON log formatters as logging services
  * [#57534](https://github.com/quarkusio/quarkus/pull/57534) - [#57122] Create the signals context bean from a service
  * [#57535](https://github.com/quarkusio/quarkus/pull/57535) - [#57122] Select the Google Cloud Functions delegates from a service
  * [#57536](https://github.com/quarkusio/quarkus/pull/57536) - [#57122] Build the Funqy function registry from a service
  * [#57537](https://github.com/quarkusio/quarkus/pull/57537) - Fix dev-mode error page stack trace overflowing on default load
  * [#57538](https://github.com/quarkusio/quarkus/pull/57538) - OIDC Client: cache token requests based on additional params
  * [#57541](https://github.com/quarkusio/quarkus/pull/57541) - Security fixes
  * [#57554](https://github.com/quarkusio/quarkus/pull/57554) - Bump jakarta.json.bind:jakarta.json.bind-api from 3.0.3 to 3.0.4
  * [#57555](https://github.com/quarkusio/quarkus/pull/57555) - Bump org.mvnpm:marked from 17.0.5 to 18.1.1
  * [#57559](https://github.com/quarkusio/quarkus/pull/57559) - Make sure interpolation of user and system properties is enabled for local POMs
  * [#57563](https://github.com/quarkusio/quarkus/pull/57563) - Use a native Dev MCP URL for Zed
  * [#57566](https://github.com/quarkusio/quarkus/pull/57566) - Give QuarkusProdModeTestConfusingLogTest a realistic connect timeout
  * [#57572](https://github.com/quarkusio/quarkus/issues/57572) - OIDC web-app: an empty session cookie counts as a session, and deleted cookies get `Expires=<now>`, so a quick re-sign-in loops in Linux WebKit
  * [#57573](https://github.com/quarkusio/quarkus/issues/57573) - Make OIDC token propagation filters use TokenHelper to exchange tokens
  * [#57575](https://github.com/quarkusio/quarkus/pull/57575) - Fix `JsonReader` accepting malformed Unicode escapes
  * [#57576](https://github.com/quarkusio/quarkus/pull/57576) - Remove bytecode recorder from extensions/quartz
  * [#57578](https://github.com/quarkusio/quarkus/pull/57578) - OIDC: treat empty session cookies as missing cookies
  * [#57581](https://github.com/quarkusio/quarkus/pull/57581) - [Gizmo] Security JPA Reactive: use Gizmo's optimized lambda strategy
  * [#57583](https://github.com/quarkusio/quarkus/issues/57583) - Use Gizmo's optimized lambda strategy for the generated main class?
  * [#57584](https://github.com/quarkusio/quarkus/pull/57584) - Use Gizmo's optimized lambda strategy for the generated main class
  * [#57586](https://github.com/quarkusio/quarkus/pull/57586) - OIDC Token Propagation: cache exchange tokens
  * [#57588](https://github.com/quarkusio/quarkus/issues/57588) - jlink image is written relative to the working directory and the launcher is always named my-app
  * [#57589](https://github.com/quarkusio/quarkus/pull/57589) - [Code TODO] Derive the jlink launcher name from the build
  * [#57590](https://github.com/quarkusio/quarkus/issues/57590) - Remove the obsolete http2Disable workaround in OpenShiftClientProducer
  * [#57591](https://github.com/quarkusio/quarkus/pull/57591) - Remove the obsolete http2Disable workaround from OpenShiftClientProducer
  * [#57592](https://github.com/quarkusio/quarkus/issues/57592) - Enable the commented-out OpenAPI test for RESTEasy param annotations on resource fields
  * [#57593](https://github.com/quarkusio/quarkus/pull/57593) - Test RESTEasy param annotations on resource fields and properties in OpenAPI
  * [#57597](https://github.com/quarkusio/quarkus/issues/57597) - Security JPA fails the build when `@Username`, `@Password` or `@Roles` are inherited from a generic superclass
  * [#57598](https://github.com/quarkusio/quarkus/pull/57598) - Resolve the type of Security JPA identity fields inherited from a generic superclass
  * [#57599](https://github.com/quarkusio/quarkus/issues/57599) - REST Client: allow setting the read timeout for a single request
  * [#57601](https://github.com/quarkusio/quarkus/issues/57601) - Quarkus Maven packages are without licenses
  * [#57602](https://github.com/quarkusio/quarkus/issues/57602) - NullPointerException in WebXmlParsingBuildStep when web-fragment.xml conflicts with existing mime mapping
  * [#57603](https://github.com/quarkusio/quarkus/pull/57603) - Fix NPE in Undertow when a web-fragment.xml conflicts with existing web metadata
  * [#57605](https://github.com/quarkusio/quarkus/pull/57605) - Update to SmallRye GraphQL 3.0.0.Beta9
  * [#57606](https://github.com/quarkusio/quarkus/pull/57606) - Add `@dmlloyd` to `area/core`
  * [#57607](https://github.com/quarkusio/quarkus/pull/57607) - Align manifest entries between jar and source jar
  * [#57608](https://github.com/quarkusio/quarkus/pull/57608) - Bump org.jboss.threads:jboss-threads from 3.10.1 to 3.11.0
  * [#57609](https://github.com/quarkusio/quarkus/pull/57609) - Bump rest-assured.version from 6.1.0 to 6.2.0
  * [#57610](https://github.com/quarkusio/quarkus/pull/57610) - Bump flyway.version from 13.10.0 to 13.10.3
  * [#57612](https://github.com/quarkusio/quarkus/pull/57612) - Bump org.mvnpm.at.mvnpm:vaadin-webcomponents from 25.3.2 to 25.3.3
  * [#57614](https://github.com/quarkusio/quarkus/issues/57614) - Remove bytecode recorders from: `extensions/amazon-lambda/common-deployment`
  * [#57615](https://github.com/quarkusio/quarkus/issues/57615) - Remove bytecode recorders from: `extensions/amazon-lambda/deployment`
  * [#57616](https://github.com/quarkusio/quarkus/issues/57616) - Remove bytecode recorders from: `extensions/cache/kotlin`
  * [#57617](https://github.com/quarkusio/quarkus/issues/57617) - Remove bytecode recorders from: `extensions/virtual-threads`
  * [#57618](https://github.com/quarkusio/quarkus/issues/57618) - Remove bytecode recorders from: `extensions/narayana-jta`
  * [#57619](https://github.com/quarkusio/quarkus/issues/57619) - Remove bytecode recorders from: `extensions/smallrye-reactive-messaging-pulsar`
  * [#57620](https://github.com/quarkusio/quarkus/issues/57620) - Remove bytecode recorders from: `extensions/resteasy-classic/resteasy-common`
  * [#57635](https://github.com/quarkusio/quarkus/pull/57635) - [#57122] Register the Kotlin cache method handler as a service
  * [#57636](https://github.com/quarkusio/quarkus/pull/57636) - [#57122] Create the RESTEasy injector factory in a service
  * [#57637](https://github.com/quarkusio/quarkus/pull/57637) - [#57122] Initialize the Lambda object mapper and context readers in services
  * [#57638](https://github.com/quarkusio/quarkus/pull/57638) - [#57122] Set up Narayana JTA and the recovery manager in services
  * [#57639](https://github.com/quarkusio/quarkus/pull/57639) - [#57122] Set up the virtual thread executor in a service
  * [#57640](https://github.com/quarkusio/quarkus/pull/57640) - [#57122] Create the Pulsar schema beans without a recorder
  * [#57641](https://github.com/quarkusio/quarkus/pull/57641) - [#57122] Register the Amazon Lambda handlers and poll loop as services
  * [#57642](https://github.com/quarkusio/quarkus/pull/57642) - Allow overriding REST Client timeouts and redirects for a single request
  * [#57643](https://github.com/quarkusio/quarkus/pull/57643) - Explain pull request review prioritization in CONTRIBUTING.md
  * [#57645](https://github.com/quarkusio/quarkus/issues/57645) - Vert.x 5 gRPC migration leftovers:
  * [#57646](https://github.com/quarkusio/quarkus/issues/57646) - Qute: An empty CDATA section `{||}` used to parse and now fails in 3.40
  * [#57647](https://github.com/quarkusio/quarkus/pull/57647) - Update WorkloadJsonWebToken to get the issuer
  * [#57648](https://github.com/quarkusio/quarkus/pull/57648) - Qute: fix parsing of empty unparsed character data {||}
  * [#57654](https://github.com/quarkusio/quarkus/pull/57654) - Bump org.mvnpm:flag-icons from 7.5.0 to 7.6.0
  * [#57661](https://github.com/quarkusio/quarkus/pull/57661) - Fail the OpenShift container image build if the upload failed
  * [#57663](https://github.com/quarkusio/quarkus/pull/57663) - Ensure async gRPC client callbacks always run on a duplicated Vert.x context when on event-loop
  * [#57668](https://github.com/quarkusio/quarkus/issues/57668) - Remove bytecode recorders from: `extensions/aesh/deployment`
  * [#57672](https://github.com/quarkusio/quarkus/issues/57672) - Remove bytecode recorders from: `extensions/datasource`
  * [#57673](https://github.com/quarkusio/quarkus/issues/57673) - Remove bytecode recorders from: `extensions/netty`
  * [#57674](https://github.com/quarkusio/quarkus/issues/57674) - Remove bytecode recorders from: `extensions/resteasy-classic/resteasy-client`
  * [#57675](https://github.com/quarkusio/quarkus/issues/57675) - Remove bytecode recorders from: `extensions/resteasy-reactive/rest-common`
  * [#57679](https://github.com/quarkusio/quarkus/pull/57679) - [#57122] Set up the RESTEasy Reactive blocking operation support in a service
  * [#57680](https://github.com/quarkusio/quarkus/pull/57680) - [#57122] Create the DataSourceSupport bean from a service
  * [#57682](https://github.com/quarkusio/quarkus/pull/57682) - [#57122] Create the Aesh context from a service
  * [#57683](https://github.com/quarkusio/quarkus/pull/57683) - [#57122] Create the Netty event loop groups in services
  * [#57684](https://github.com/quarkusio/quarkus/pull/57684) - [#57122] Set up the RESTEasy client builder resolver and provider factory in services
  * [#57688](https://github.com/quarkusio/quarkus/pull/57688) - A couple minor OpenTelemetry improvements
  * [#57689](https://github.com/quarkusio/quarkus/issues/57689) - Jar tree shaking removes classes that are only referenced by dynamic constants
  * [#57690](https://github.com/quarkusio/quarkus/issues/57690) - Service class captures always go through Bootstraps.loadClass because the accessibility check uses the simple class name
  * [#57691](https://github.com/quarkusio/quarkus/pull/57691) - Follow dynamic constants when tree shaking jars
  * [#57692](https://github.com/quarkusio/quarkus/pull/57692) - Emit public class captures as class constants
  * [#57698](https://github.com/quarkusio/quarkus/pull/57698) - Set Jackson versions to 3.1.8 and 2.21.8
  * [#57699](https://github.com/quarkusio/quarkus/pull/57699) - Update webauthn4j to 0.31.11.RELEASE for Jackson 3 update
  * [#57703](https://github.com/quarkusio/quarkus/pull/57703) - Allow the FastBootEntityManagerFactoryBuilder to use a custom SessionFactoryBuilder that can decorate the Hibernate SessionFactory
  * [#57710](https://github.com/quarkusio/quarkus/issues/57710) - Remove bytecode recorders from: `extensions/resteasy-reactive/rest-servlet`
  * [#57711](https://github.com/quarkusio/quarkus/issues/57711) - Remove bytecode recorders from: `extensions/resteasy-reactive/rest-links`
  * [#57713](https://github.com/quarkusio/quarkus/issues/57713) - Remove bytecode recorders from: `extensions/liquibase/liquibase`
  * [#57717](https://github.com/quarkusio/quarkus/pull/57717) - Drop the product qualifier from the datasource guide title
  * [#57721](https://github.com/quarkusio/quarkus/pull/57721) - Fix Quarkus banner being displayed twice at startup
  * [#57723](https://github.com/quarkusio/quarkus/pull/57723) - [#57122] Run the Liquibase migrations from a service
  * [#57724](https://github.com/quarkusio/quarkus/pull/57724) - [#57122] Initialize the REST links provider from a service
  * [#57729](https://github.com/quarkusio/quarkus/pull/57729) - [#57122] Instantiate the RESTEasy Reactive servlet and filter without a recorder
  * [#57731](https://github.com/quarkusio/quarkus/issues/57731) - `JaxrsProvidersToRegisterBuildItem` is gratuitously mutated after publication
  * [#57732](https://github.com/quarkusio/quarkus/pull/57732) - Drop the trailing "in Quarkus" from two guide titles
  * [#57733](https://github.com/quarkusio/quarkus/pull/57733) - Avoid mutating `JaxrsProvidersToRegisterBuildItem`
  * [#57734](https://github.com/quarkusio/quarkus/pull/57734) - Fix `main` regression about injecting BARTF configs
  * [#57736](https://github.com/quarkusio/quarkus/pull/57736) - Strip -emergency from branch names before using them as version folder
  * [#57738](https://github.com/quarkusio/quarkus/pull/57738) - Fix LoggingJsonProcessor build failure over injecting a runtime config inside a build step
  * [#57745](https://github.com/quarkusio/quarkus/pull/57745) - Replace deprecated `destroyer` call
  * [#57762](https://github.com/quarkusio/quarkus/issues/57762) - Start/stop infra way of consuming config triggers annotation lookups at runtime
  * [#57765](https://github.com/quarkusio/quarkus/issues/57765) - Quarkus 4 Jackson reflection-free-serializer null-for-primitives
  * [#57766](https://github.com/quarkusio/quarkus/pull/57766) - Fix JDK 25 PQC test faiures
  * [#57778](https://github.com/quarkusio/quarkus/pull/57778) - Fix errors in the web endpoint authorization guide
  * [#57782](https://github.com/quarkusio/quarkus/pull/57782) - Update RESTEasy Jackson Provider to 1.0.1.Final
  * [#57785](https://github.com/quarkusio/quarkus/issues/57785) - Closing a REST Client twice logs "Error running RestClientClosingTask"
  * [#57786](https://github.com/quarkusio/quarkus/pull/57786) - Skip the REST Client closing tasks when the client is already closed
  * [#57787](https://github.com/quarkusio/quarkus/pull/57787) - Bump smallrye-reactive-messaging.version from 5.0.0-RC1 to 5.0.0-RC2
  * [#57790](https://github.com/quarkusio/quarkus/pull/57790) - Fix REST Jackson deserialization to honor FAIL_ON_NULL_FOR_PRIMITIVES
  * [#57803](https://github.com/quarkusio/quarkus/pull/57803) - Bump com.mysql:mysql-connector-j from 26.7.0 to 26.10.0
  * [#57805](https://github.com/quarkusio/quarkus/pull/57805) - Bump io.fabric8:maven-model-helper from 41 to 42
  * [#57806](https://github.com/quarkusio/quarkus/pull/57806) - Fix NPEs in GCF extension
  * [#57817](https://github.com/quarkusio/quarkus/pull/57817) - Bump com.gradle:develocity-maven-extension from 2.6.0 to 2.6.1
  * [#57822](https://github.com/quarkusio/quarkus/issues/57822) - Agent skills miss the eager-service, build-cache, QuarkusUnitTest and review-update rules
  * [#57824](https://github.com/quarkusio/quarkus/issues/57824) - Reactive Routes: malformed JSON in a `@Body` parameter results in 500 instead of 400
  * [#57826](https://github.com/quarkusio/quarkus/pull/57826) - Return 400 for malformed JSON in reactive route `@Body` parameters
  * [#57827](https://github.com/quarkusio/quarkus/issues/57827) - Malformed application/x-www-form-urlencoded and multipart/form-data request bodies result in 500 instead of 400
  * [#57828](https://github.com/quarkusio/quarkus/issues/57828) - Reactive Routes: invalid value for a converted `@Param` results in 500 instead of 400
  * [#57829](https://github.com/quarkusio/quarkus/pull/57829) - Return 400 for malformed form-urlencoded and multipart bodies
  * [#57830](https://github.com/quarkusio/quarkus/pull/57830) - Return 400 for invalid reactive route parameter values
  * [#57832](https://github.com/quarkusio/quarkus/pull/57832) - Document the eager-service, build-cache, QuarkusUnitTest and PR update rules in the agent skills
  * [#57836](https://github.com/quarkusio/quarkus/issues/57836) - Deprecated API in test code and Maven sample projects produces warnings on every CI run
  * [#57837](https://github.com/quarkusio/quarkus/pull/57837) - Replace deprecated API in the REST Client tests and the Maven sample projects
  * [#57841](https://github.com/quarkusio/quarkus/pull/57841) - Prefer SmallRyeConfig APIs instead of MP Config
  * [#57847](https://github.com/quarkusio/quarkus/pull/57847) - Load Shedding: many improvements
  * [#57849](https://github.com/quarkusio/quarkus/pull/57849) - Bump io.rest-assured:rest-assured from 6.0.1 to 6.3.0
  * [#57855](https://github.com/quarkusio/quarkus/pull/57855) - Include the prefix in ConfigLookup to avoid reflection lookup
  * [#57856](https://github.com/quarkusio/quarkus/pull/57856) - Update SmallRye Config to 4.1.0
  * [#57861](https://github.com/quarkusio/quarkus/pull/57861) - Respect run-time CPUs, heap and Netty properties in native for the adaptive allocator and event loops
  * [#57867](https://github.com/quarkusio/quarkus/pull/57867) - Add hibernate-orm-tenancy/discriminator to native test run
  * [#57869](https://github.com/quarkusio/quarkus/pull/57869) - Register missing Envers entities for reflection
  * [#57893](https://github.com/quarkusio/quarkus/issues/57893) - Dev mode error page fails to render with SRCFG00015 when the application fails to start
  * [#57894](https://github.com/quarkusio/quarkus/pull/57894) - Fix config lookups that run when no config is registered for the class loader

---

> **Source** [quarkusio/quarkus](https://github.com/quarkusio/quarkus) · `4.0.0.Beta2` · 2026-10-28 · [upstream release](https://github.com/quarkusio/quarkus/releases/tag/4.0.0.Beta2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
