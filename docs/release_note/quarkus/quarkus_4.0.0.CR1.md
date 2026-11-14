---
title: "quarkus 4.0.0.CR1"
project: "quarkus"
repo: "quarkusio/quarkus"
tag: "4.0.0.CR1"
published: "2026-11-11"
type: "major"
lang: "en"
summary: "#16031 - cli should support remote-dev · #31648 - Fix and reenable AddExtensionToModuleInMultiModuleKtsProjectTest · #41166 - Option quarkus.log.syslog.max-length ignores text of the message"
---

# quarkus 4.0.0.CR1

### Complete changelog

  * [#16031](https://github.com/quarkusio/quarkus/issues/16031) - cli should support remote-dev
  * [#31648](https://github.com/quarkusio/quarkus/issues/31648) - Fix and reenable AddExtensionToModuleInMultiModuleKtsProjectTest
  * [#41166](https://github.com/quarkusio/quarkus/issues/41166) - Option `quarkus.log.syslog.max-length` ignores text of the message
  * [#43692](https://github.com/quarkusio/quarkus/issues/43692) - Hibernate ORM extension should save reflection to create/access fields of entities
  * [#44720](https://github.com/quarkusio/quarkus/issues/44720) - Multiple packages are split in the `schema-registry` (apicurio) extension
  * [#56797](https://github.com/quarkusio/quarkus/issues/56797) - Build-time vs. runtime quarkus.package.jar.crac.enabled
  * [#56873](https://github.com/quarkusio/quarkus/pull/56873) - Use SmallRye Config to support Spring `@ConfigurationProperties`
  * [#57015](https://github.com/quarkusio/quarkus/issues/57015) - Expose independent controls for Hibernate ORM validation callbacks and DDL constraints
  * [#57030](https://github.com/quarkusio/quarkus/pull/57030) - Move the Apicurio Registry service binding build step to its own package
  * [#57047](https://github.com/quarkusio/quarkus/issues/57047) - Subject-wide back-channel OIDC logout to support logging out the user from multiple browsers
  * [#57070](https://github.com/quarkusio/quarkus/pull/57070) - Add a --remote option to quarkus dev
  * [#57084](https://github.com/quarkusio/quarkus/issues/57084) - Unit test failure with maven-surefire-plugin 3.6.0
  * [#57123](https://github.com/quarkusio/quarkus/issues/57123) - Integrate Graceful Shutdown operations into service start context
  * [#57127](https://github.com/quarkusio/quarkus/issues/57127) - io.quarkus.runtime.NativeImageRuntimePropertiesRecorder appears unused
  * [#57150](https://github.com/quarkusio/quarkus/issues/57150) - Oidc not working when longer cookie suffix selected
  * [#57167](https://github.com/quarkusio/quarkus/pull/57167) - OIDC cookie chunking enhanced
  * [#57197](https://github.com/quarkusio/quarkus/pull/57197) - Remove unused `NativeImageRuntimePropertiesRecorder`
  * [#57201](https://github.com/quarkusio/quarkus/pull/57201) - New Graceful Shutdown API and implementation
  * [#57213](https://github.com/quarkusio/quarkus/pull/57213) - OTel sampler javadoc
  * [#57235](https://github.com/quarkusio/quarkus/pull/57235) - Hibernate Accessor ("reflection free" state access for Hibernate extensions) + Hibernate Validator 9.2.0.Beta1 upgrade
  * [#57304](https://github.com/quarkusio/quarkus/pull/57304) - Independent controls for Hibernate ORM validation callbacks and DDL constraints
  * [#57448](https://github.com/quarkusio/quarkus/issues/57448) - Remove bytecode recorders from: `extensions/amazon-lambda-rest`
  * [#57509](https://github.com/quarkusio/quarkus/issues/57509) - Remove bytecode recorders from: `extensions/scheduler`
  * [#57515](https://github.com/quarkusio/quarkus/pull/57515) - Revert "Manage guava in application BOM"
  * [#57530](https://github.com/quarkusio/quarkus/pull/57530) - Explain Surefire runOrder overriding the Quarkus class orderer
  * [#57577](https://github.com/quarkusio/quarkus/pull/57577) - Make `RemoteSyncHandler#constantTimeEquals` stricter
  * [#57627](https://github.com/quarkusio/quarkus/issues/57627) - REST Client encodes String bodies as UTF-8 even when the Content-Type declares another charset
  * [#57633](https://github.com/quarkusio/quarkus/issues/57633) - Proto files from dependencies are not processed when using quarkus:dev
  * [#57666](https://github.com/quarkusio/quarkus/issues/57666) - MongoDB: both MongoClient and ReactiveMongoClient are created at startup when only one of them is injected
  * [#57669](https://github.com/quarkusio/quarkus/issues/57669) - Remove bytecode recorders from: `extensions/cache`
  * [#57670](https://github.com/quarkusio/quarkus/issues/57670) - Remove bytecode recorders from: `extensions/infinispan-cache`
  * [#57671](https://github.com/quarkusio/quarkus/issues/57671) - Remove bytecode recorders from: `extensions/redis-cache`
  * [#57687](https://github.com/quarkusio/quarkus/pull/57687) - [#57122] Register the cache backends as services
  * [#57705](https://github.com/quarkusio/quarkus/issues/57705) - Remove bytecode recorders from: `extensions/reactive-datasource`
  * [#57706](https://github.com/quarkusio/quarkus/issues/57706) - Remove bytecode recorders from: `extensions/reactive-pg-client`
  * [#57707](https://github.com/quarkusio/quarkus/issues/57707) - Remove bytecode recorders from: `extensions/reactive-mysql-client`
  * [#57708](https://github.com/quarkusio/quarkus/issues/57708) - Remove bytecode recorders from: `extensions/reactive-oracle-client`
  * [#57728](https://github.com/quarkusio/quarkus/pull/57728) - [#57122] Create the reactive SQL client pools in services
  * [#57744](https://github.com/quarkusio/quarkus/pull/57744) - Migrate Scheduler from recorders to services
  * [#57748](https://github.com/quarkusio/quarkus/pull/57748) - Register only the injected Mongo client types
  * [#57764](https://github.com/quarkusio/quarkus/pull/57764) - Bump io.smallrye.reactive:mutiny-bom from 3.3.0 to 3.3.1
  * [#57776](https://github.com/quarkusio/quarkus/issues/57776) - Dev mode console status line sometimes stays on screen after quitting with `q`
  * [#57780](https://github.com/quarkusio/quarkus/pull/57780) - Clear the dev console status area when the console closes
  * [#57783](https://github.com/quarkusio/quarkus/pull/57783) - Improve AWS Lambda documentation, native CPU architecture note, and snippets
  * [#57804](https://github.com/quarkusio/quarkus/pull/57804) - Bump org.jetbrains.kotlinx:kotlinx-serialization-json from 1.11.0 to 1.12.0
  * [#57811](https://github.com/quarkusio/quarkus/pull/57811) - Bump com.gradle.develocity from 4.5.1 to 4.6.1 in /devtools/gradle
  * [#57831](https://github.com/quarkusio/quarkus/pull/57831) - Update all imported platform BOMs in the generated update recipe
  * [#57857](https://github.com/quarkusio/quarkus/issues/57857) - Remove bytecode recorders from: `extensions/reactive-db2-client`
  * [#57858](https://github.com/quarkusio/quarkus/issues/57858) - Remove bytecode recorders from: `extensions/reactive-mssql-client`
  * [#57866](https://github.com/quarkusio/quarkus/pull/57866) - Run goals bound to the same phase in priority order in dev mode
  * [#57871](https://github.com/quarkusio/quarkus/pull/57871) - Re-enable AddExtensionToModuleInMultiModuleKtsProjectTest
  * [#57880](https://github.com/quarkusio/quarkus/pull/57880) - Bump org.eclipse.microprofile.config:microprofile-config-api from 3.1.1 to 3.1.3
  * [#57881](https://github.com/quarkusio/quarkus/pull/57881) - Bump com.google.errorprone:error_prone_annotations from 2.49.0 to 2.51.0
  * [#57902](https://github.com/quarkusio/quarkus/pull/57902) - Bump gradle/develocity-actions to v2.6
  * [#57913](https://github.com/quarkusio/quarkus/issues/57913) - quarkus-spring-web: `@RestController` on an interface returns 500 (this.factory is null) since 3.21.3
  * [#57914](https://github.com/quarkusio/quarkus/pull/57914) - Set the Amazon Lambda REST configuration from a service
  * [#57915](https://github.com/quarkusio/quarkus/pull/57915) - Fix Spring Web interface controllers failing with NullPointerException
  * [#57925](https://github.com/quarkusio/quarkus/issues/57925) - Reflection-free Jackson serializer generation fails with LimitExceededException: Too many operations for DTOs with 78+ properties (ASM 9.11)
  * [#57931](https://github.com/quarkusio/quarkus/pull/57931) - Add deep links in docs preview and correct link checker scope
  * [#57938](https://github.com/quarkusio/quarkus/pull/57938) - Use the Java version attributes in the guides instead of hard-coded versions
  * [#57949](https://github.com/quarkusio/quarkus/pull/57949) - Remove TransactionSessions indirection, extract ReactiveTransactionScoped session classes
  * [#57957](https://github.com/quarkusio/quarkus/pull/57957) - Bump rest-assured.version from 6.2.0 to 6.3.0
  * [#57964](https://github.com/quarkusio/quarkus/pull/57964) - Fix REST Client charset encoding for String/char[] bodies
  * [#57965](https://github.com/quarkusio/quarkus/pull/57965) - Drop business automation category, add automation category
  * [#57981](https://github.com/quarkusio/quarkus/pull/57981) - Support OIDC back-channel logout for users logged in from multiple browsers
  * [#58002](https://github.com/quarkusio/quarkus/pull/58002) - Upgrade OTel instrumentation to to 2.33.1-alpha. Uses OTel SDK 1.67.0.
  * [#58003](https://github.com/quarkusio/quarkus/issues/58003) - Guard the documentation GraalVM and builder-image properties against drift from ContainerImages
  * [#58004](https://github.com/quarkusio/quarkus/pull/58004) - Guard the documentation GraalVM and builder-image properties against drift
  * [#58007](https://github.com/quarkusio/quarkus/pull/58007) - Replace hand-written config mapping implementations with ConfigInstanceBuilder
  * [#58009](https://github.com/quarkusio/quarkus/pull/58009) - Bump flyway.version from 13.11.1 to 13.12.0
  * [#58020](https://github.com/quarkusio/quarkus/issues/58020) - Dead link: https://github.com/grafana/docker-otel-lgtm/blob/main/docs/mcp-integration.md
  * [#58041](https://github.com/quarkusio/quarkus/pull/58041) - Tree shake native build breakers
  * [#58042](https://github.com/quarkusio/quarkus/issues/58042) - FormAuthenticationMechanism.logout does not expire a session cookie that has a domain
  * [#58045](https://github.com/quarkusio/quarkus/pull/58045) - Bump SR OpenAPI from 4.4.0-alpha3 to 4.4.0 (MP OpenAPI 4.2-RC5 to 4.2)
  * [#58046](https://github.com/quarkusio/quarkus/issues/58046) - Agent skills miss the AssertJ dependency, test coverage, change scope and logging rules
  * [#58047](https://github.com/quarkusio/quarkus/pull/58047) - Add the review rules for tests, docs and config keys to the agent skills
  * [#58052](https://github.com/quarkusio/quarkus/pull/58052) - Expire form authentication cookies with their configured domain and path
  * [#58060](https://github.com/quarkusio/quarkus/issues/58060) - follow-up: Array Support Gap in JsonLogGenerator
  * [#58063](https://github.com/quarkusio/quarkus/issues/58063) - Vert.x 5 migration dropped the native-image substitution that kept the Netty DNS resolver out of the image
  * [#58066](https://github.com/quarkusio/quarkus/pull/58066) - Redis - Align command groups to follow the same inheritance convention
  * [#58076](https://github.com/quarkusio/quarkus/pull/58076) - Fix LGTM MCP integration documentation link
  * [#58089](https://github.com/quarkusio/quarkus/issues/58089) - Qute: an application with tens of thousands of templates fails with ClassTooLargeException
  * [#58090](https://github.com/quarkusio/quarkus/pull/58090) - Write the Qute template data to a generated resource instead of recording it
  * [#58105](https://github.com/quarkusio/quarkus/pull/58105) - Enforcer: add allowNewer option to dependency alignment rule
  * [#58113](https://github.com/quarkusio/quarkus/pull/58113) - Update SmallRye Config to 4.2.1
  * [#58118](https://github.com/quarkusio/quarkus/pull/58118) - Align extension categories with the docs categories
  * [#58120](https://github.com/quarkusio/quarkus/pull/58120) - Support keyless array elements in JsonLogGenerator
  * [#58122](https://github.com/quarkusio/quarkus/pull/58122) - Fix the behavior of Scalpel
  * [#58126](https://github.com/quarkusio/quarkus/issues/58126) - Context loss (RequestScoped entities) after asynchronous Bulkhead queueing
  * [#58133](https://github.com/quarkusio/quarkus/pull/58133) - Shared archive fixes
  * [#58134](https://github.com/quarkusio/quarkus/pull/58134) - Make the Vert.x async DNS resolver a build-time choice
  * [#58137](https://github.com/quarkusio/quarkus/pull/58137) - Convert rest-jackson ResteasyReactiveJacksonProcessor recorders to services
  * [#58140](https://github.com/quarkusio/quarkus/pull/58140) - Validate REST Client URIs without JDK URL protocol handlers
  * [#58141](https://github.com/quarkusio/quarkus/issues/58141) - Support channel binding configuration in the Reactive PostgreSQL client
  * [#58142](https://github.com/quarkusio/quarkus/pull/58142) - Add channel binding configuration to the Reactive PostgreSQL client
  * [#58143](https://github.com/quarkusio/quarkus/pull/58143) - Fix PostgreSQL and DB2 detection when starting Hibernate ORM offline
  * [#58144](https://github.com/quarkusio/quarkus/pull/58144) - Deprecate quarkus.netty.allocator-max-order
  * [#58147](https://github.com/quarkusio/quarkus/pull/58147) - Update SmallRye Config to 4.2.2
  * [#58149](https://github.com/quarkusio/quarkus/pull/58149) - Metrics should track Netty's real default allocator instead of the old one, no longer user
  * [#58156](https://github.com/quarkusio/quarkus/pull/58156) - Fix REST Data Panache field/getter annotation handling
  * [#58161](https://github.com/quarkusio/quarkus/pull/58161) - Bump com.google.errorprone:error_prone_annotations from 2.51.0 to 2.52.0
  * [#58163](https://github.com/quarkusio/quarkus/pull/58163) - Bump mongo-client.version from 5.6.5 to 5.14.0
  * [#58165](https://github.com/quarkusio/quarkus/pull/58165) - Bump com.google.code.gson:gson from 2.14.0 to 2.15.0
  * [#58168](https://github.com/quarkusio/quarkus/pull/58168) - Depend on netty-codec-base instead of the netty-codec aggregator
  * [#58170](https://github.com/quarkusio/quarkus/pull/58170) - Document the minimum value of `quarkus.log.syslog.max-length`
  * [#58171](https://github.com/quarkusio/quarkus/pull/58171) - Fallback to reflection serialization/deserialization for classes with many properties
  * [#58177](https://github.com/quarkusio/quarkus/pull/58177) - Disable direct JDBC `java.time` handling in Hibernate ORM by default, add opt-in setting
  * [#58184](https://github.com/quarkusio/quarkus/pull/58184) - Assorted class loader leak fixes for dev mode tests
  * [#58187](https://github.com/quarkusio/quarkus/pull/58187) - Link Jakarta REST spec references in Stork docs
  * [#58190](https://github.com/quarkusio/quarkus/pull/58190) - Mention the Quarkus Almanac in the update guide
  * [#58191](https://github.com/quarkusio/quarkus/pull/58191) - Update ImmutablePathMatcher to have the root path always end with forward slash
  * [#58195](https://github.com/quarkusio/quarkus/pull/58195) - Stabilize DevServicesContainerNoReuseTest by choosing the port at runtime
  * [#58196](https://github.com/quarkusio/quarkus/issues/58196) - Inherited `Throwable` getters become queryable but not invocable with generated reachability metadata in native mode
  * [#58197](https://github.com/quarkusio/quarkus/issues/58197) - Qute message bundles: localized bundle class not recognized as an application class when _<locale> also occurs in the package name (NoClassDefFoundError in dev mode / `@QuarkusTest`
  * [#58199](https://github.com/quarkusio/quarkus/pull/58199) - Qute: fix message bundle class lookup when the package name contains the locale suffix
  * [#58200](https://github.com/quarkusio/quarkus/pull/58200) - Fix Jackson exception serialization in native mode
  * [#58201](https://github.com/quarkusio/quarkus/pull/58201) - Remove the hard-coded jdk21 Dynamic Proxy link from the native tips guide
  * [#58202](https://github.com/quarkusio/quarkus/pull/58202) - Use {graalvm-docs-version} for the SBOM link in the CycloneDX guide
  * [#58206](https://github.com/quarkusio/quarkus/pull/58206) - Bump org.codejive:java-properties from 0.0.8 to 0.1.1
  * [#58209](https://github.com/quarkusio/quarkus/pull/58209) - Migrate Hibernate Accessor initialisation to services
  * [#58210](https://github.com/quarkusio/quarkus/pull/58210) - Bump org.mvnpm:marked from 18.1.1 to 18.1.3
  * [#58211](https://github.com/quarkusio/quarkus/pull/58211) - Bump eu.maveniverse.maven.njord:extension3 from 0.9.10 to 0.10.0
  * [#58213](https://github.com/quarkusio/quarkus/pull/58213) - Bump org.commonmark:commonmark from 0.30.1 to 0.32.0
  * [#58215](https://github.com/quarkusio/quarkus/pull/58215) - Bump eu.maveniverse.maven.scalpel:extension3 from 0.4.3 to 0.5.0
  * [#58216](https://github.com/quarkusio/quarkus/pull/58216) - Avoid retaining the combined index during ordinary test discovery
  * [#58219](https://github.com/quarkusio/quarkus/pull/58219) - Allow to use workload tokens as jwt bearer assertions
  * [#58224](https://github.com/quarkusio/quarkus/pull/58224) - Bump Gradle from 9.8.0 to 9.9.0
  * [#58228](https://github.com/quarkusio/quarkus/issues/58228) - REST Client silently drops a List<EntityPart> body parameter
  * [#58229](https://github.com/quarkusio/quarkus/pull/58229) - Fix invalid format specifier in TestRegistryClient.clearCache
  * [#58230](https://github.com/quarkusio/quarkus/pull/58230) - Send List<EntityPart> REST Client parameters as the request body
  * [#58231](https://github.com/quarkusio/quarkus/issues/58231) - ArC: Reflections field cache keeps the classes of a container that failed to initialize, dev mode leaks two class loaders per failed restart
  * [#58232](https://github.com/quarkusio/quarkus/pull/58232) - Clear ArC's static caches when the container fails to initialize
  * [#58234](https://github.com/quarkusio/quarkus/issues/58234) - Kubernetes guide: ConfigMap env prefix example uses `quarkus.kubernetes.prefixes`, which has no effect
  * [#58235](https://github.com/quarkusio/quarkus/pull/58235) - Mask JWT bearer grant assertion and token exchange subject token in debug logs
  * [#58242](https://github.com/quarkusio/quarkus/issues/58242) - ArC: cast the CreationalContext unconditionally in DependentContext, CDI TCK 5.0.0 allows it
  * [#58250](https://github.com/quarkusio/quarkus/pull/58250) - SmallRye Fault Tolerance: update to 7.1.1
  * [#58251](https://github.com/quarkusio/quarkus/pull/58251) - ArC: remove superfluous `instanceof` check
  * [#58254](https://github.com/quarkusio/quarkus/pull/58254) - Fix Elytron properties file digest algorithm DIGEST_SHA_512_256
  * [#58255](https://github.com/quarkusio/quarkus/pull/58255) - Fix BufferOutputStream.write(int) data corruption
  * [#58265](https://github.com/quarkusio/quarkus/pull/58265) - Use default lambda strategy in main class
  * [#58266](https://github.com/quarkusio/quarkus/pull/58266) - Fix ConfigMap env prefix property key in Kubernetes guide
  * [#58274](https://github.com/quarkusio/quarkus/pull/58274) - Discover Hibernate Search accessor types through mapping meta-annotations
  * [#58281](https://github.com/quarkusio/quarkus/pull/58281) - Hibernate Validator: avoid DotName comparisons in the method transformer
  * [#58283](https://github.com/quarkusio/quarkus/issues/58283) - Blocking GraphQL resolver runs on the event loop after a gRPC client call subscribed on a worker thread
  * [#58290](https://github.com/quarkusio/quarkus/pull/58290) - Run blocking GraphQL resolvers off the event loop when the Vert.x context is missing
  * [#58291](https://github.com/quarkusio/quarkus/pull/58291) - Jandex: update to 3.6.1
  * [#58292](https://github.com/quarkusio/quarkus/pull/58292) - Apply the build time value of quarkus.package.jar.crac.enabled at run time
  * [#58304](https://github.com/quarkusio/quarkus/pull/58304) - Share AWS Lambda native march note and add it to Funqy guide
  * [#58309](https://github.com/quarkusio/quarkus/pull/58309) - Signals: remove experimental status
  * [#58313](https://github.com/quarkusio/quarkus/pull/58313) - Only crawl /main guides, not older versions, and do not crawl blogs
  * [#58324](https://github.com/quarkusio/quarkus/pull/58324) - Upgrade to Mime4j 0.8.15

---

> **Source** [quarkusio/quarkus](https://github.com/quarkusio/quarkus) · `4.0.0.CR1` · 2026-11-11 · [upstream release](https://github.com/quarkusio/quarkus/releases/tag/4.0.0.CR1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
