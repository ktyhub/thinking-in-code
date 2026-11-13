---
title: "quarkus 4.0.0.Beta1"
project: "quarkus"
repo: "quarkusio/quarkus"
tag: "4.0.0.Beta1"
published: "2026-10-01"
type: "major"
lang: "en"
---

# quarkus 4.0.0.Beta1

### Major changes

  * [#55117](https://github.com/quarkusio/quarkus/pull/55117) - Prepare for UBI 10
  * [#55145](https://github.com/quarkusio/quarkus/pull/55145) - Micrometer Observation API Support
  * [#55147](https://github.com/quarkusio/quarkus/pull/55147) - Set the minimum Java version to Java 21
  * [#55180](https://github.com/quarkusio/quarkus/pull/55180) - Introduce SPIFFE client extension
  * [#55215](https://github.com/quarkusio/quarkus/pull/55215) - Rework native transport
  * [#55297](https://github.com/quarkusio/quarkus/pull/55297) - Port Jackson to  version 3
  * [#55356](https://github.com/quarkusio/quarkus/pull/55356) - Rest Client - Add support for Unix domain socket connections
  * [#55433](https://github.com/quarkusio/quarkus/pull/55433) - Use prometheus client v1 on Micrometer
  * [#55515](https://github.com/quarkusio/quarkus/pull/55515) - Support Jakarta REST 4
  * [#55542](https://github.com/quarkusio/quarkus/pull/55542) - Support Kotlin suspend functions with `@CacheResult`
  * [#55624](https://github.com/quarkusio/quarkus/pull/55624) - [4.x] Wire post-quantum (PQC) key exchange through the TLS registry
  * [#55723](https://github.com/quarkusio/quarkus/pull/55723) - Detect datasource and persistence unit needs from configuration, extension requests, and extension-specific metadata (entities, ...)
  * [#55736](https://github.com/quarkusio/quarkus/pull/55736) - Support for OAuth Client ID Metadata Document
  * [#55765](https://github.com/quarkusio/quarkus/pull/55765) - Integrate Hibernate 8 into Quarkus
  * [#55768](https://github.com/quarkusio/quarkus/pull/55768) - Jakarta REST 4 EntityPart support for server and client
  * [#55838](https://github.com/quarkusio/quarkus/pull/55838) - Make OpenTelemetry Metrics and Logs Stable and ON by default
  * [#55926](https://github.com/quarkusio/quarkus/pull/55926) - ArC: implement CDI 5.0
  * [#56377](https://github.com/quarkusio/quarkus/pull/56377) - Dev UI observability
  * [#56475](https://github.com/quarkusio/quarkus/pull/56475) - Update SmallRye Config to 4.0.0
  * [#56856](https://github.com/quarkusio/quarkus/pull/56856) - WebSockets Next: add max-pending-messages back-pressure
  * [#56979](https://github.com/quarkusio/quarkus/pull/56979) - Enable quarkus-awt on macOS
  * [#56982](https://github.com/quarkusio/quarkus/pull/56982) - Update Kubernetes Client to 8.0.0 and Dekorate to 5.0.0

### Complete changelog

  * [#14051](https://github.com/quarkusio/quarkus/issues/14051) - Spring Web `@RequestHeader`(Map<String,String>) throws RuntimeException
  * [#21440](https://github.com/quarkusio/quarkus/issues/21440) - Allow large file download and upload using the Reactive REST Client.
  * [#22182](https://github.com/quarkusio/quarkus/pull/22182) - CLI: add support for RSA command
  * [#23407](https://github.com/quarkusio/quarkus/issues/23407) - Structured Access Logs
  * [#23746](https://github.com/quarkusio/quarkus/issues/23746) - Quarkus cache does not work with kotlin suspend functions
  * [#24019](https://github.com/quarkusio/quarkus/issues/24019) - In io.quarkus.jackson.ObjectMapperCustomizer, use JsonMapper instead of ObjectMapper 
  * [#28755](https://github.com/quarkusio/quarkus/issues/28755) - Using Caffeine cach with RequestScoped bean can lead to error
  * [#29911](https://github.com/quarkusio/quarkus/issues/29911) - Support for Micrometer's Observation API
  * [#31320](https://github.com/quarkusio/quarkus/issues/31320) - RESTEasy Reactive doesn't support `java.time.OffsetDateTime`
  * [#32606](https://github.com/quarkusio/quarkus/issues/32606) - Quarkus Caching - Allow per item expiry time.
  * [#33090](https://github.com/quarkusio/quarkus/issues/33090) - Test failure: quarkus-integration-test-logging-gelf fails with podman
  * [#33093](https://github.com/quarkusio/quarkus/issues/33093) - Test failure with podman: Quarkus - Micrometer - Deployment
  * [#33094](https://github.com/quarkusio/quarkus/issues/33094) - Test failure with podman: JDBC - Oracle - Deployment
  * [#33105](https://github.com/quarkusio/quarkus/issues/33105) - Test failure with Podman: Quarkus - Integration Tests - JPA - MySQL
  * [#33312](https://github.com/quarkusio/quarkus/issues/33312) - Port conflict undetected when having both http and lambda
  * [#33346](https://github.com/quarkusio/quarkus/issues/33346) - Quarkus Resteasy-reactive Client and InputStream as parameter causing a BlockingOperationNotAllowedException
  * [#33454](https://github.com/quarkusio/quarkus/issues/33454) - Postgres containers failing to start with docker maven plugin and then not being cleaned up in podman CI runs
  * [#33461](https://github.com/quarkusio/quarkus/issues/33461) - Warn in case the code uses old `javax.ws` annotations
  * [#34429](https://github.com/quarkusio/quarkus/issues/34429) - Enable only JSON export for Micrometer without changing the prometheus metrics doesn't work
  * [#35028](https://github.com/quarkusio/quarkus/issues/35028) - Dev UI v2 does not use custom pages when changing deployment module path location
  * [#35234](https://github.com/quarkusio/quarkus/issues/35234) - Include message when throwing InvalidKeySpecException in BcryptUtil.matches()
  * [#35799](https://github.com/quarkusio/quarkus/issues/35799) - Support native transports in native executables 
  * [#35972](https://github.com/quarkusio/quarkus/issues/35972) - NPE when testing POST APIGatewayV2HTTPEvent to lambda
  * [#36782](https://github.com/quarkusio/quarkus/issues/36782) - CORS guide should cover debugging tips
  * [#36880](https://github.com/quarkusio/quarkus/issues/36880) - TransactionScoped beans are destroyed after the JTA transaction is commited/rolled back
  * [#38343](https://github.com/quarkusio/quarkus/issues/38343) - quarkus-amazon-lambda-http extension can fail to identify content-type value and thus fails to adjust isBase64Encoded in the final response
  * [#39710](https://github.com/quarkusio/quarkus/issues/39710) - Need to integrate with the new Vert.x Local Data SPI
  * [#41016](https://github.com/quarkusio/quarkus/issues/41016) - Move GraalVM config from current *.json config files to reachability-metadata.json starting with GraalVM / Mandrel for JDK 25
  * [#41499](https://github.com/quarkusio/quarkus/issues/41499) - Dev UI clash with any other WebJarUtilBuildItem when in the same artifact
  * [#41522](https://github.com/quarkusio/quarkus/issues/41522) - Change default OpenTelemetry protocol to `http/protobuf`
  * [#41883](https://github.com/quarkusio/quarkus/issues/41883) - Configproperty value containing '$$' will be '$' as string
  * [#42226](https://github.com/quarkusio/quarkus/issues/42226) - [Resteasy] rely also on AnnotationStore when processing BeanParam
  * [#42807](https://github.com/quarkusio/quarkus/issues/42807) - Resteasy Reactive doesn't fully recognize the bean param when it's in generic interface
  * [#42987](https://github.com/quarkusio/quarkus/issues/42987) - Property quarkus.http.limits.max-form-attribute-size behaviour
  * [#43127](https://github.com/quarkusio/quarkus/issues/43127) - Support to list all multipart uploads but without storing them locally
  * [#43705](https://github.com/quarkusio/quarkus/issues/43705) - RequestParam Map<String, String> not supported by quarkus-spring
  * [#43760](https://github.com/quarkusio/quarkus/pull/43760) - Allow to populate Spring `@RestQuery` Map<String, String> with request parameter values
  * [#43998](https://github.com/quarkusio/quarkus/issues/43998) - RESTEasy Reactive shouldn't forcefully append a `charset` attribute when media-type is application/json
  * [#44340](https://github.com/quarkusio/quarkus/issues/44340) - document on https://quarkus.io/guides/cli-tooling ability to use non central repos
  * [#44832](https://github.com/quarkusio/quarkus/issues/44832) - Lack of devservice license acceptance should suggests adding container-license-acceptance.txt to the right place in dev mode
  * [#45005](https://github.com/quarkusio/quarkus/issues/45005) - Support the selection of X-Forwarded-For value
  * [#45855](https://github.com/quarkusio/quarkus/issues/45855) - Full support for gRPC server metrics
  * [#45922](https://github.com/quarkusio/quarkus/issues/45922) - CLI error messages are confusing when there is an error in the command
  * [#46345](https://github.com/quarkusio/quarkus/issues/46345) - control over proxy protocol
  * [#46498](https://github.com/quarkusio/quarkus/issues/46498) - HTTP compression min size
  * [#46629](https://github.com/quarkusio/quarkus/issues/46629) - Validate that the management port is distinct
  * [#46645](https://github.com/quarkusio/quarkus/issues/46645) - CLI - incorrect project folder name
  * [#47005](https://github.com/quarkusio/quarkus/issues/47005) - Cancelling a request with a chunked response results in IllegalStateException: UT000127: Response has already been sent
  * [#47211](https://github.com/quarkusio/quarkus/issues/47211) - Add support for `@MeterTags` : Allow multiple MeterTag annotations for multiple tags from same target
  * [#47405](https://github.com/quarkusio/quarkus/issues/47405) - quarkus-container-image-openshift doesn't respect quarkus.container-image.insecure property
  * [#47431](https://github.com/quarkusio/quarkus/issues/47431) - GET endpoint QueryParam truncated to 1024 elements
  * [#47531](https://github.com/quarkusio/quarkus/issues/47531) - Add the ability to specify http and https hosts independently
  * [#47674](https://github.com/quarkusio/quarkus/issues/47674) - devui list installed trying to resolve -redhat artifacts in a project with no -redhat dependency
  * [#47796](https://github.com/quarkusio/quarkus/issues/47796) - Use `Session`/`StatelessSession` "delegates"/"proxies" from the upstream Hibernate project
  * [#48925](https://github.com/quarkusio/quarkus/issues/48925) - Quarkus redis support for ACL by adding username variable
  * [#49026](https://github.com/quarkusio/quarkus/pull/49026) - Enforce dependency on devservices runtime module
  * [#49068](https://github.com/quarkusio/quarkus/issues/49068) - Take advantage of `AggregatedDataSourceBuildTimeConfigBuildItem` for reactive datasources
  * [#49353](https://github.com/quarkusio/quarkus/issues/49353) - QuarkusTestExtension fails to run `@AfterAll` with multiple levels of nested test classes and per-class test instance lifecycle
  * [#49502](https://github.com/quarkusio/quarkus/issues/49502) - AWS Lambda Extension no longer supports containerized .jvm builds
  * [#49530](https://github.com/quarkusio/quarkus/issues/49530) - Add `username` option to `RedisClientConfig`
  * [#49686](https://github.com/quarkusio/quarkus/issues/49686) - Document quarkusIntTest
  * [#49962](https://github.com/quarkusio/quarkus/issues/49962) - java.net.SocketException in SHUTDOWN phase while AWS Lambda (Quarkus + GraalVM) is connected with AwsAppConfigExtension
  * [#50303](https://github.com/quarkusio/quarkus/issues/50303) - feat: improve secrets role in quarkus-kubernetes-config
  * [#50414](https://github.com/quarkusio/quarkus/issues/50414) - Port AWT Extension to MacOS
  * [#50850](https://github.com/quarkusio/quarkus/issues/50850) - Quarkus update does not update <surefire-plugin.version> in pom.xml
  * [#51198](https://github.com/quarkusio/quarkus/issues/51198) - Better detection of when a persistence unit is needed and better reporting of when a non-existing PU is referenced
  * [#51268](https://github.com/quarkusio/quarkus/issues/51268) - Better error message when using ORM/HR with no DB driver
  * [#51364](https://github.com/quarkusio/quarkus/issues/51364) - `@QuarkusTest` with quarkus-amazon-lambda-rest does not map REST resources paths and throws 404 for any call.
  * [#51435](https://github.com/quarkusio/quarkus/issues/51435) - Introduce a ModuleExportBuildItem to let extensions control --add-exports needs for the runtime
  * [#51630](https://github.com/quarkusio/quarkus/issues/51630) - [REST Client] `@Url` is ignored and Quarkus requires a static configuration instead.
  * [#51872](https://github.com/quarkusio/quarkus/issues/51872) - `io.quarkus.oidc.client.filter` is split across multiple modules
  * [#51894](https://github.com/quarkusio/quarkus/issues/51894) - Implement better hashCode/equals for standard AnnotationLiteral
  * [#52036](https://github.com/quarkusio/quarkus/issues/52036) - Update to Jackson 3
  * [#52101](https://github.com/quarkusio/quarkus/pull/52101) - Reduce number of created ReflectiveClassBuildItem instances
  * [#52649](https://github.com/quarkusio/quarkus/issues/52649) - quarkus-micrometer-opentelemetry metrics duration must use seconds
  * [#52712](https://github.com/quarkusio/quarkus/issues/52712) - Solve deprecation in quarkus-smallrye-openapi
  * [#52791](https://github.com/quarkusio/quarkus/pull/52791) - docs: ConsoleCommandBuildItem
  * [#52945](https://github.com/quarkusio/quarkus/pull/52945) - Kafka Streams extension improvements and bug fixes
  * [#53075](https://github.com/quarkusio/quarkus/issues/53075) - Set OTel trace sampling to 10% by default
  * [#53277](https://github.com/quarkusio/quarkus/issues/53277) - Provide (reasonable) defaults for `quarkus.datasource.db-version`
  * [#53291](https://github.com/quarkusio/quarkus/issues/53291) - Move io.quarkus.arc.deployment.OpenTelemetrySdkBuildItem out of the ArC extension into the core
  * [#53293](https://github.com/quarkusio/quarkus/issues/53293) - Panache Next projection failing with Kotlin's value class
  * [#53546](https://github.com/quarkusio/quarkus/pull/53546) - native-image: New reachability-metadata.json
  * [#53606](https://github.com/quarkusio/quarkus/pull/53606) - Auto-configure GCP Error Reporting compatibility when using json logging GCP log format
  * [#53862](https://github.com/quarkusio/quarkus/issues/53862) - Quarkus 4 should use the Netty pooled allocator on VirtualThread(s) too
  * [#54011](https://github.com/quarkusio/quarkus/issues/54011) - Netty 4.2 and shared Arenas performance issues
  * [#54078](https://github.com/quarkusio/quarkus/issues/54078) - Add AI skill for quarkus-oidc-client
  * [#54101](https://github.com/quarkusio/quarkus/pull/54101) - Add AI skill for quarkus-oidc-client
  * [#54226](https://github.com/quarkusio/quarkus/pull/54226) - Introduce a better way of testing prometheus metrics
  * [#54261](https://github.com/quarkusio/quarkus/pull/54261) - Improve secret access scoping in quarkus-kubernetes-config
  * [#54272](https://github.com/quarkusio/quarkus/issues/54272) - Add success-only option to quarkus.http.filter
  * [#54279](https://github.com/quarkusio/quarkus/pull/54279) - Default database versions `quarkus.datasource.db-version` to a recent stable version
  * [#54283](https://github.com/quarkusio/quarkus/issues/54283) - No way to read the application name from configuration
  * [#54394](https://github.com/quarkusio/quarkus/pull/54394) - Correct SupplierMap `putAll`
  * [#54435](https://github.com/quarkusio/quarkus/issues/54435) - Testcontainers still start even when QuarkusTests are disabled via JUnit tags
  * [#54440](https://github.com/quarkusio/quarkus/pull/54440) - Use JFR events to trace the shutdown sequence
  * [#54464](https://github.com/quarkusio/quarkus/pull/54464) - Rework the native image guide.
  * [#54477](https://github.com/quarkusio/quarkus/issues/54477) - Provide a working example for quarkus.native.additional-build-args build parameter to access several environment variables
  * [#54486](https://github.com/quarkusio/quarkus/issues/54486) - Documentation issues with Hibernate guides
  * [#54653](https://github.com/quarkusio/quarkus/pull/54653) - Bump de.flapdoodle.embed:de.flapdoodle.embed.mongo from 4.24.0 to 4.33.0
  * [#54666](https://github.com/quarkusio/quarkus/pull/54666) - Allow extensions to provide multiple codestarts via extra-names
  * [#54670](https://github.com/quarkusio/quarkus/issues/54670) - Bump OpenTelemetry to 1.62.0 (CVE-2026-45292)
  * [#54676](https://github.com/quarkusio/quarkus/issues/54676) - Signals - propagate security identity to receivers
  * [#54677](https://github.com/quarkusio/quarkus/issues/54677) - Signals - propagate OTel trace context to receivers
  * [#54693](https://github.com/quarkusio/quarkus/pull/54693) - Fix Panache DTO projection and Jackson serialization for Kotlin value classes
  * [#54696](https://github.com/quarkusio/quarkus/issues/54696) - Wrong JDBC URL for devservices/testcontainers with IPv6 enabled in Container runtime
  * [#54718](https://github.com/quarkusio/quarkus/pull/54718) - Fix Dev Services connection URLs when when dev container  reports IPv6 container hosts
  * [#54722](https://github.com/quarkusio/quarkus/pull/54722) - Add structured access log fields to the JSON log formatter
  * [#54741](https://github.com/quarkusio/quarkus/pull/54741) - Introduce ExactlyOnce annotation to simplify Kafka exactly-once processing
  * [#54779](https://github.com/quarkusio/quarkus/issues/54779) - Align extension metadata schema and docs (in an automated way)
  * [#54782](https://github.com/quarkusio/quarkus/pull/54782) - Gradle plugin: Avoid resolving deployment classpaths during task graph calculation
  * [#54803](https://github.com/quarkusio/quarkus/pull/54803) - Fix dead quickstart links in stork-registration.adoc
  * [#54842](https://github.com/quarkusio/quarkus/pull/54842) - Bump com.unboundid:unboundid-ldapsdk from 7.0.4 to 7.0.5
  * [#54856](https://github.com/quarkusio/quarkus/pull/54856) - Preserve Maven artifact type in the resolver
  * [#54862](https://github.com/quarkusio/quarkus/issues/54862) - [4.0] HttpServerOptions.setUseSemicolonAsQueryParamDelimiter missing in Vert.x 5.1.2
  * [#54877](https://github.com/quarkusio/quarkus/pull/54877) - Provide an index of guides and scripts to make sure it's complete
  * [#54879](https://github.com/quarkusio/quarkus/pull/54879) - Bump io.strimzi:strimzi-test-container from 0.115.0 to 0.116.0
  * [#54895](https://github.com/quarkusio/quarkus/pull/54895) - Add nightly scheduled CI workflow to run reproducibility tests
  * [#54937](https://github.com/quarkusio/quarkus/pull/54937) - Remove config proxy mechanism required for old `@ConfigRoot` classes from ExtensionLoader
  * [#54947](https://github.com/quarkusio/quarkus/issues/54947) - Reverse filter proprities when using readBody/withFormRead
  * [#54953](https://github.com/quarkusio/quarkus/issues/54953) - LGTM devservice overrides explicitly-configured OTLP endpoint in dev mode
  * [#54976](https://github.com/quarkusio/quarkus/pull/54976) - Picocli: remove Gizmo 1 dependency
  * [#54977](https://github.com/quarkusio/quarkus/pull/54977) - Narayana JTA: migrate from Gizmo 1 to Gizmo 2
  * [#54978](https://github.com/quarkusio/quarkus/pull/54978) - JSON-B: migrate from Gizmo 1 to Gizmo 2
  * [#54979](https://github.com/quarkusio/quarkus/pull/54979) - gRPC DevUI: migrate from Gizmo 1 to Gizmo 2
  * [#54980](https://github.com/quarkusio/quarkus/pull/54980) - OIDC client: migrate from Gizmo 1 to Gizmo 2
  * [#54983](https://github.com/quarkusio/quarkus/pull/54983) - REST client config: migrate from Gizmo 1 to Gizmo 2
  * [#54984](https://github.com/quarkusio/quarkus/pull/54984) - SmallRye Reactive Messaging: migrate from Gizmo 1 to Gizmo 2
  * [#54985](https://github.com/quarkusio/quarkus/pull/54985) - Security: migrate from Gizmo 1 to Gizmo 2
  * [#54986](https://github.com/quarkusio/quarkus/pull/54986) - Security JPA: migrate from Gizmo 1 to Gizmo 2
  * [#54995](https://github.com/quarkusio/quarkus/pull/54995) - Bump org.htmlunit:htmlunit from 5.1.0 to 5.2.0
  * [#54996](https://github.com/quarkusio/quarkus/pull/54996) - Bump com.gradle:develocity-maven-extension from 2.4.1 to 2.4.2
  * [#54998](https://github.com/quarkusio/quarkus/pull/54998) - Bump org.commonmark:commonmark from 0.28.0 to 0.29.0
  * [#55002](https://github.com/quarkusio/quarkus/pull/55002) - Add `@Timed` service level objective support
  * [#55033](https://github.com/quarkusio/quarkus/pull/55033) - Explicitly disable LGTM Dev Services with any of the OTel endpoint user-provided configuration
  * [#55036](https://github.com/quarkusio/quarkus/pull/55036) - [4.0] Improve Vert.x SQL client options coverage in reactive datasource config
  * [#55047](https://github.com/quarkusio/quarkus/issues/55047) - RoutingUtils.assumeCdiRequestContext logs "CDI request context owner has changed" at DEBUG even when the owner is unchanged
  * [#55054](https://github.com/quarkusio/quarkus/issues/55054) - ArC: make SuppressConditionGeneratorBuildItem public
  * [#55060](https://github.com/quarkusio/quarkus/pull/55060) - ArC: make SuppressConditionGeneratorBuildItem public
  * [#55074](https://github.com/quarkusio/quarkus/pull/55074) - Avoid "owner has changed" logging when owner is unchanged
  * [#55089](https://github.com/quarkusio/quarkus/pull/55089) - Split `@ConfigMapping` and `@ConfigProperties` processing, and the generation of config classes from runtime aspects
  * [#55094](https://github.com/quarkusio/quarkus/pull/55094) - Remove the deprecated Scala Extension
  * [#55097](https://github.com/quarkusio/quarkus/pull/55097) - Bump io.quarkus:quarkus-documentation-rag-maven-plugin from 0.0.5 to 0.0.7
  * [#55117](https://github.com/quarkusio/quarkus/pull/55117) - Prepare for UBI 10
  * [#55124](https://github.com/quarkusio/quarkus/pull/55124) - Bump org.eclipse.sisu:sisu-maven-plugin from 1.0.0 to 1.0.1
  * [#55125](https://github.com/quarkusio/quarkus/pull/55125) - Bump eu.maveniverse.maven.scalpel:extension3 from 0.3.4 to 0.3.7
  * [#55129](https://github.com/quarkusio/quarkus/issues/55129) - [quarkus-confluent-registry-avro] 3.37.0 regression: startup fails with apicurio.registry.url required even when devservices disabled
  * [#55130](https://github.com/quarkusio/quarkus/issues/55130) - [main only] Client authentication is not required after first TLS config reload
  * [#55136](https://github.com/quarkusio/quarkus/issues/55136) - Introduce Spiffe Client extension
  * [#55139](https://github.com/quarkusio/quarkus/pull/55139) - Quarkus Mailer: support for rotating credentials
  * [#55144](https://github.com/quarkusio/quarkus/issues/55144) - [Mandrel 25.0 --future-defaults=all] All quarkus native integration tests fail since Jun 27, 2026
  * [#55145](https://github.com/quarkusio/quarkus/pull/55145) - Micrometer Observation API Support
  * [#55147](https://github.com/quarkusio/quarkus/pull/55147) - Set the minimum Java version to Java 21
  * [#55150](https://github.com/quarkusio/quarkus/pull/55150) - Reactive Pg Client: add direct SSL support
  * [#55152](https://github.com/quarkusio/quarkus/pull/55152) - Fix dead link in smallrye graphql Javadoc
  * [#55153](https://github.com/quarkusio/quarkus/pull/55153) - Fix dev mode startup when only Confluent schema registry URL is set
  * [#55154](https://github.com/quarkusio/quarkus/pull/55154) - Drop the gRPC xDS documentation
  * [#55155](https://github.com/quarkusio/quarkus/pull/55155) - Reactive MSSQL Client: add TDS 8.0 protocol support
  * [#55156](https://github.com/quarkusio/quarkus/pull/55156) - Reenable the doc build for main
  * [#55170](https://github.com/quarkusio/quarkus/pull/55170) - Bump SmallRye GraphQL to 3.0.0.Beta4
  * [#55180](https://github.com/quarkusio/quarkus/pull/55180) - Introduce SPIFFE client extension
  * [#55190](https://github.com/quarkusio/quarkus/issues/55190) - Update Hibernate ORM docs to use `Session` instead of `EntityManager`
  * [#55202](https://github.com/quarkusio/quarkus/pull/55202) - Upgrade OTel SDk to 1.62.0
  * [#55203](https://github.com/quarkusio/quarkus/pull/55203) - Bump com.gradle:develocity-maven-extension from 2.4.2 to 2.5.0
  * [#55209](https://github.com/quarkusio/quarkus/pull/55209) - Bump com.gradle.develocity from 4.4.3 to 4.5.0 in /devtools/gradle
  * [#55211](https://github.com/quarkusio/quarkus/pull/55211) - Fix client-auth reset to NONE after TLS config reload
  * [#55213](https://github.com/quarkusio/quarkus/pull/55213) - Break up Dev UI into standalone devjsonrpc, devmcp, and devui modules
  * [#55215](https://github.com/quarkusio/quarkus/pull/55215) - Rework native transport
  * [#55224](https://github.com/quarkusio/quarkus/pull/55224) - Bump elasticsearch-opensource-components.version from 9.4.1 to 9.4.3
  * [#55228](https://github.com/quarkusio/quarkus/issues/55228) - Malformed Accept header causes unguarded IllegalArgumentException (500) when no route has been matched
  * [#55230](https://github.com/quarkusio/quarkus/pull/55230) - Add `Flow.Publisher` to GraphQL auto-transactional reactive type detection
  * [#55233](https://github.com/quarkusio/quarkus/pull/55233) - Gradle: Declare local state for cacheable Quarkus app parts
  * [#55237](https://github.com/quarkusio/quarkus/pull/55237) - Gradle: Declare extension descriptor task inputs
  * [#55240](https://github.com/quarkusio/quarkus/pull/55240) - Update Spring extensions for Spring Framework 7 / Spring Data 4 compa…
  * [#55244](https://github.com/quarkusio/quarkus/pull/55244) - Add official Jakarta REST TCK 4.0.1 runner
  * [#55245](https://github.com/quarkusio/quarkus/pull/55245) - Bump org.checkerframework:checker-qual from 4.2.0 to 4.2.1
  * [#55246](https://github.com/quarkusio/quarkus/pull/55246) - Bump org.mvnpm:linkify-it from 5.0.1 to 5.0.2
  * [#55247](https://github.com/quarkusio/quarkus/pull/55247) - Bump org.apache.logging.log4j:log4j-api from 2.26.0 to 2.26.1
  * [#55248](https://github.com/quarkusio/quarkus/pull/55248) - Bump org.mvnpm:markdown-it from 14.2.0 to 14.3.0
  * [#55249](https://github.com/quarkusio/quarkus/pull/55249) - Bump org.mvnpm.at.hpcc-js:wasm from 2.34.2 to 2.34.4
  * [#55251](https://github.com/quarkusio/quarkus/issues/55251) - devcontainer fails to load
  * [#55252](https://github.com/quarkusio/quarkus/pull/55252) - fix(devcontainer): modernize devcontainer to supported baseline
  * [#55253](https://github.com/quarkusio/quarkus/pull/55253) - Add Gradle component variant regression tests
  * [#55265](https://github.com/quarkusio/quarkus/pull/55265) - Fix malformed Accept header causing 500 when no route is matched
  * [#55268](https://github.com/quarkusio/quarkus/pull/55268) - Add apply-on-success option to quarkus.http.filter
  * [#55273](https://github.com/quarkusio/quarkus/issues/55273) - Enhance SPIFFE client to fetch X509 workload certificate identifiers
  * [#55290](https://github.com/quarkusio/quarkus/pull/55290) - Gradle IT: Fix `quarkus-junit` module reference
  * [#55291](https://github.com/quarkusio/quarkus/pull/55291) - Add quarkus.http.ssl-host to bind HTTPS independently from HTTP
  * [#55293](https://github.com/quarkusio/quarkus/pull/55293) - Bump org.mvnpm.at.mvnpm:vaadin-webcomponents from 25.2.0 to 25.2.1
  * [#55296](https://github.com/quarkusio/quarkus/pull/55296) - Bump org.mvnpm.at.hpcc-js:wasm from 2.34.4 to 2.34.5
  * [#55297](https://github.com/quarkusio/quarkus/pull/55297) - Port Jackson to  version 3
  * [#55300](https://github.com/quarkusio/quarkus/pull/55300) - Remove the custom wiring for the object mappers into Hibernate ORM (and let (ORM) create things on its own)
  * [#55313](https://github.com/quarkusio/quarkus/pull/55313) - Validate management port differs from main HTTP/HTTPS
  * [#55325](https://github.com/quarkusio/quarkus/pull/55325) - Bump org.mvnpm:es-module-shims from 2.8.1 to 2.8.2
  * [#55330](https://github.com/quarkusio/quarkus/pull/55330) - Bump org.mvnpm:type-fest from 5.4.4 to 5.8.0
  * [#55333](https://github.com/quarkusio/quarkus/pull/55333) - Disable automatic workflow approval after 10 PRs
  * [#55337](https://github.com/quarkusio/quarkus/pull/55337) - Change OpenTelemetry default sampling ration to 10%
  * [#55344](https://github.com/quarkusio/quarkus/pull/55344) - Fix false missing plugin error for quarkus create <project>
  * [#55349](https://github.com/quarkusio/quarkus/pull/55349) - Use Stork latest 3.0.0
  * [#55350](https://github.com/quarkusio/quarkus/pull/55350) - gRPC - Add Unix domain socket support for server and client
  * [#55354](https://github.com/quarkusio/quarkus/pull/55354) - Bump com.google.api.grpc:proto-google-common-protos from 2.71.0 to 2.73.0
  * [#55356](https://github.com/quarkusio/quarkus/pull/55356) - Rest Client - Add support for Unix domain socket connections
  * [#55364](https://github.com/quarkusio/quarkus/pull/55364) - Polish `JsonUtil`
  * [#55372](https://github.com/quarkusio/quarkus/pull/55372) - Update SmallRye Config to 3.18.1
  * [#55377](https://github.com/quarkusio/quarkus/pull/55377) - Vert.x - Upgrade to Vert.x 5.1.5 and Netty 4.1.16.Final
  * [#55383](https://github.com/quarkusio/quarkus/pull/55383) - Nit: Tidy up grammar and drop stale 'coming soon'
  * [#55384](https://github.com/quarkusio/quarkus/pull/55384) - Fix remote dev file deletion handling
  * [#55392](https://github.com/quarkusio/quarkus/pull/55392) - Enable previously disabled test
  * [#55419](https://github.com/quarkusio/quarkus/issues/55419) - Deflake DrainTest
  * [#55420](https://github.com/quarkusio/quarkus/pull/55420) - Record output-directory metadata for native container images
  * [#55429](https://github.com/quarkusio/quarkus/pull/55429) - Disable flaky test
  * [#55432](https://github.com/quarkusio/quarkus/issues/55432) - Mark OTel Metrics and Logs as Stable
  * [#55433](https://github.com/quarkusio/quarkus/pull/55433) - Use prometheus client v1 on Micrometer
  * [#55442](https://github.com/quarkusio/quarkus/pull/55442) - Update images of MySQL, MariaDB, MongoDB and Redis
  * [#55447](https://github.com/quarkusio/quarkus/pull/55447) - Remove redundant check in MicroProfileRestClientEnricher
  * [#55449](https://github.com/quarkusio/quarkus/pull/55449) -  Qute: add bean property tests for property-not-found-strategy
  * [#55453](https://github.com/quarkusio/quarkus/pull/55453) - SPIFFE client: support fetching of X509-SVID
  * [#55472](https://github.com/quarkusio/quarkus/pull/55472) - Complete quarkus-extension.yaml JSON schema and generate docs from it
  * [#55474](https://github.com/quarkusio/quarkus/issues/55474) - Unable to determine the status of the running process in integration test due to missing dev-service dependency
  * [#55477](https://github.com/quarkusio/quarkus/pull/55477) - Avoid Lambda mock event server port conflict with Vert.x HTTP in Dev Mode
  * [#55479](https://github.com/quarkusio/quarkus/pull/55479) - Bump org.mvnpm.at.mvnpm:vaadin-webcomponents from 25.2.1 to 25.2.4
  * [#55481](https://github.com/quarkusio/quarkus/pull/55481) - Deprecate `H2DatabaseTestResource` in favor of DevServices and update most ITs to avoid it
  * [#55488](https://github.com/quarkusio/quarkus/pull/55488) - Update Redpanda devservice version to v26.1.12
  * [#55490](https://github.com/quarkusio/quarkus/pull/55490) - Add opt-in histogram buckets for gRPC Micrometer metrics
  * [#55491](https://github.com/quarkusio/quarkus/issues/55491) - QuarkusErrorHandler logs benign HTTP/2 client stream resets (IAE: Stream no longer exists) at ERROR
  * [#55492](https://github.com/quarkusio/quarkus/pull/55492) - Improve logging in QuarkusErrorHandler
  * [#55493](https://github.com/quarkusio/quarkus/pull/55493) - Fix Lambda poll loop shutdown SocketException logging
  * [#55495](https://github.com/quarkusio/quarkus/pull/55495) - Fix `@QuarkusIntegrationTest` Dev Services result handling
  * [#55496](https://github.com/quarkusio/quarkus/pull/55496) - Require Gradle 9.6 for Quarkus Gradle plugins
  * [#55499](https://github.com/quarkusio/quarkus/pull/55499) - Allow fast-jar packaging for Amazon Lambda JVM container builds
  * [#55504](https://github.com/quarkusio/quarkus/pull/55504) - Fix broken WebSockets Next tests
  * [#55506](https://github.com/quarkusio/quarkus/pull/55506) - HTTP: Document and test compression configuration
  * [#55515](https://github.com/quarkusio/quarkus/pull/55515) - Support Jakarta REST 4
  * [#55517](https://github.com/quarkusio/quarkus/issues/55517) - Improve OidcClient TokenProvider interface
  * [#55518](https://github.com/quarkusio/quarkus/issues/55518) - Support named OidcClient TokenProvider injections
  * [#55523](https://github.com/quarkusio/quarkus/issues/55523) - Observability for Dev UI
  * [#55526](https://github.com/quarkusio/quarkus/pull/55526) - HTTP/3 - Fix altSvc for HTTP/1 and HTTP/1.1
  * [#55527](https://github.com/quarkusio/quarkus/pull/55527) - Fix exemplars after span sampling set to 10%
  * [#55533](https://github.com/quarkusio/quarkus/pull/55533) - Minor improvements to OIDC client authentication docs
  * [#55534](https://github.com/quarkusio/quarkus/pull/55534) - Update OpenTelemetry instrumentation to 1.63
  * [#55535](https://github.com/quarkusio/quarkus/pull/55535) - Allow to inject TokenProvider for named OIDC clients
  * [#55542](https://github.com/quarkusio/quarkus/pull/55542) - Support Kotlin suspend functions with `@CacheResult`
  * [#55543](https://github.com/quarkusio/quarkus/pull/55543) - Ban the use of dynamic proxies
  * [#55544](https://github.com/quarkusio/quarkus/issues/55544) - DEVUI: HealthCheck panels not displaying correctly
  * [#55547](https://github.com/quarkusio/quarkus/pull/55547) - Improve OIDC client token provider
  * [#55550](https://github.com/quarkusio/quarkus/pull/55550) - Fix text overflow in DevUI health check panels
  * [#55562](https://github.com/quarkusio/quarkus/pull/55562) - Fix flaky DrainTest
  * [#55565](https://github.com/quarkusio/quarkus/pull/55565) - Bump io.smallrye.common:smallrye-common-bom from 2.19.0 to 2.20.0
  * [#55570](https://github.com/quarkusio/quarkus/pull/55570) - Share Gradle TestKit fixtures across plugin tests
  * [#55572](https://github.com/quarkusio/quarkus/pull/55572) - Register all Config components for native image
  * [#55574](https://github.com/quarkusio/quarkus/pull/55574) - Add an example for forwarding environment variables to the native-image build
  * [#55579](https://github.com/quarkusio/quarkus/pull/55579) - ArC: `isKotlinSuspendMethod()` should throw on suspend methods with raw `Continuation`
  * [#55582](https://github.com/quarkusio/quarkus/issues/55582) - [Quarkus main] Native integration test oidc-wiremock-providers fails due to config value conversion issues
  * [#55583](https://github.com/quarkusio/quarkus/pull/55583) - Use Vert.x pooled allocator for virtual threads in AppendBuffer
  * [#55585](https://github.com/quarkusio/quarkus/pull/55585) - Test for max depth of GraphQL queries
  * [#55604](https://github.com/quarkusio/quarkus/pull/55604) - Add defaults to PackageConfig outputName, outputDirectory and outputTimestamp
  * [#55605](https://github.com/quarkusio/quarkus/issues/55605) - Dev services remain running after tests and rely on ryuk for cleanup
  * [#55608](https://github.com/quarkusio/quarkus/issues/55608) - Upgrade Oracle Setup Test Pilot GitHub Action to v1.0.27
  * [#55609](https://github.com/quarkusio/quarkus/pull/55609) - 55608 - Upgrade Oracle Setup Test Pilot GitHub Action to v1.0.27
  * [#55615](https://github.com/quarkusio/quarkus/issues/55615) - Support OIDC `iss` (issuer) query param in the redirect URL
  * [#55616](https://github.com/quarkusio/quarkus/issues/55616) - Support OAuth Client Id Metadata Document registration
  * [#55617](https://github.com/quarkusio/quarkus/pull/55617) - Verify OIDC iss (issuer) query param in the redirect URL
  * [#55624](https://github.com/quarkusio/quarkus/pull/55624) - [4.x] Wire post-quantum (PQC) key exchange through the TLS registry
  * [#55625](https://github.com/quarkusio/quarkus/pull/55625) - Prevent `CodeGenerator.readConfig` from mutating an immutable list
  * [#55634](https://github.com/quarkusio/quarkus/issues/55634) - Shared quarkus.log breaks concurrent `@QuarkusIntegrationTest` forks (wrong port, false readiness)
  * [#55637](https://github.com/quarkusio/quarkus/pull/55637) - Update to the SmallRye Certificate Generator 1.1.1
  * [#55639](https://github.com/quarkusio/quarkus/pull/55639) - Use a unique log file per integration-test launcher to fix concurrent fork log sharing
  * [#55641](https://github.com/quarkusio/quarkus/pull/55641) - Resolve deprecations in smallrye-openapi extension
  * [#55642](https://github.com/quarkusio/quarkus/issues/55642) - No way to overwrite RunStage of mp.openapi.filter
  * [#55646](https://github.com/quarkusio/quarkus/pull/55646) - OIDC and Keycloak Dev Services: remove XOR trap workaround for a config mapping workaround
  * [#55654](https://github.com/quarkusio/quarkus/pull/55654) - In reflection-free Jackson serializers skip deserialization of a JsonAlias having the same name of the field
  * [#55655](https://github.com/quarkusio/quarkus/pull/55655) - Remove value registry, not used
  * [#55658](https://github.com/quarkusio/quarkus/pull/55658) - Add Quarkus Data Hibernate getting started tutorial
  * [#55660](https://github.com/quarkusio/quarkus/issues/55660) - Validation of Content-type header for sub-resources may be omited
  * [#55661](https://github.com/quarkusio/quarkus/pull/55661) - Fix Netty 4.2 substitutions and support Snappy compression
  * [#55666](https://github.com/quarkusio/quarkus/pull/55666) - Fire SSE close listeners once when closing the broadcaster
  * [#55670](https://github.com/quarkusio/quarkus/pull/55670) - Centralize Container Image Names
  * [#55673](https://github.com/quarkusio/quarkus/pull/55673) - Integrate SPIFFE client and Keycloak dev services
  * [#55676](https://github.com/quarkusio/quarkus/pull/55676) - Validate `@Consumes` and `@Produces` for sub-resources
  * [#55682](https://github.com/quarkusio/quarkus/pull/55682) - Fix serialization of formatted date in reflection-free Jackson serializers
  * [#55685](https://github.com/quarkusio/quarkus/pull/55685) - Jakarta rest 4 progress
  * [#55696](https://github.com/quarkusio/quarkus/pull/55696) - Address small issues in the Jackson 3 migration
  * [#55698](https://github.com/quarkusio/quarkus/pull/55698) - Align Hibernate Reactive guide examples with session injection
  * [#55699](https://github.com/quarkusio/quarkus/pull/55699) - Add StatelessSession sections to the Hibernate guides
  * [#55700](https://github.com/quarkusio/quarkus/pull/55700) - Use most suitable constructor for deserialization in reflection-free Jackson serializers
  * [#55705](https://github.com/quarkusio/quarkus/pull/55705) - Fix flaky DrainTest OOM by streaming response bodies instead of buffering
  * [#55708](https://github.com/quarkusio/quarkus/pull/55708) - Enable Netty's FFM malloc/free path and set ignoreExpensiveClean
  * [#55709](https://github.com/quarkusio/quarkus/pull/55709) - Change the default http.(client|server).request.duration to s…
  * [#55712](https://github.com/quarkusio/quarkus/pull/55712) - Add reproducibility check for integration tests
  * [#55715](https://github.com/quarkusio/quarkus/pull/55715) - Remove unnecessary static init in `QuarkusJacksonJsonCodec`
  * [#55718](https://github.com/quarkusio/quarkus/pull/55718) - Projects Classic API is gone so getting rid of this config
  * [#55722](https://github.com/quarkusio/quarkus/pull/55722) - Fix `VertxOutputStream` thundering herd on HTTP/2 by using per-stream lock
  * [#55723](https://github.com/quarkusio/quarkus/pull/55723) - Detect datasource and persistence unit needs from configuration, extension requests, and extension-specific metadata (entities, ...)
  * [#55724](https://github.com/quarkusio/quarkus/pull/55724) - Add `quarkus.devservices.license-acceptance` config property
  * [#55727](https://github.com/quarkusio/quarkus/pull/55727) - Bump org.hibernate.reactive:hibernate-reactive-core from 4.5.1.Final to 4.5.2.Final in the hibernate group across 1 directory
  * [#55729](https://github.com/quarkusio/quarkus/pull/55729) - Unable to import in IDEA: fix unresolvable ${aesh.version} property
  * [#55733](https://github.com/quarkusio/quarkus/pull/55733) - Use `orderKey` in `VertxBootstrapConsumerBuildItem` for reproducibility
  * [#55736](https://github.com/quarkusio/quarkus/pull/55736) - Support for OAuth Client ID Metadata Document
  * [#55740](https://github.com/quarkusio/quarkus/issues/55740) - Add a single tenant-neutral OIDC runtime property to control optional routes
  * [#55741](https://github.com/quarkusio/quarkus/pull/55741) - Replace synchronized with ReentrantLock in VertxOutputStream for VT friendliness
  * [#55743](https://github.com/quarkusio/quarkus/pull/55743) - Fix db-version used for Oracle in native tests on Test Pilot
  * [#55747](https://github.com/quarkusio/quarkus/pull/55747) - cache openSsl35Available to avoid UnsatisfiedLinkError
  * [#55750](https://github.com/quarkusio/quarkus/pull/55750) - Set default HTTP/2 MAX_CONCURRENT_STREAMS to 128
  * [#55752](https://github.com/quarkusio/quarkus/pull/55752) - Fix compilation error in Vert.x HTTP test due to merging an old PR
  * [#55754](https://github.com/quarkusio/quarkus/pull/55754) - Fix invocation of the Arquillian lifecycle callbacks
  * [#55758](https://github.com/quarkusio/quarkus/pull/55758) - Bump org.mvnpm.at.mvnpm:vaadin-webcomponents from 25.2.4 to 25.2.6
  * [#55761](https://github.com/quarkusio/quarkus/issues/55761) - Enforce the `requires-quarkus-core` extension metadata at build time
  * [#55762](https://github.com/quarkusio/quarkus/pull/55762) - Compatibility validation for extensions based on Quarkus core version
  * [#55764](https://github.com/quarkusio/quarkus/pull/55764) - Fix flaky HibernateOrmNoWarningsTest on Oracle 19/21
  * [#55765](https://github.com/quarkusio/quarkus/pull/55765) - Integrate Hibernate 8 into Quarkus
  * [#55767](https://github.com/quarkusio/quarkus/pull/55767) - Move OpenTelemetrySdkBuildItem to core deployment module
  * [#55768](https://github.com/quarkusio/quarkus/pull/55768) - Jakarta REST 4 EntityPart support for server and client
  * [#55772](https://github.com/quarkusio/quarkus/pull/55772) - Bump org.eclipse.jgit:org.eclipse.jgit from 7.7.0.202606012155-r to 7.7.1.202607240634-r
  * [#55773](https://github.com/quarkusio/quarkus/pull/55773) - Bump org.json:json from 20260522 to 20260719
  * [#55776](https://github.com/quarkusio/quarkus/issues/55776) - OOM regression with Netty 4.2.16 under idle-after-burst load
  * [#55781](https://github.com/quarkusio/quarkus/issues/55781) - Dev Mode - Continuous Testing - Improve reporting for `@ParameterizedTest`
  * [#55782](https://github.com/quarkusio/quarkus/issues/55782) - Dev Mode - Continuous Testing - Issue with mockStatic
  * [#55784](https://github.com/quarkusio/quarkus/pull/55784) - Fix static Mockito mocks in continuous testing
  * [#55785](https://github.com/quarkusio/quarkus/pull/55785) - Include method names in parameterized test results
  * [#55786](https://github.com/quarkusio/quarkus/pull/55786) - Update reproducibility check for Jakarta REST TCK
  * [#55787](https://github.com/quarkusio/quarkus/pull/55787) - Update Artemis dependencies to relocated org.apache.artemis groupId
  * [#55788](https://github.com/quarkusio/quarkus/issues/55788) - NettyProcessor: need to carefully review the addRuntimeInitializedClass definitions
  * [#55790](https://github.com/quarkusio/quarkus/pull/55790) - Quarkus REST - Fix unbounded multipart part-header accumulation
  * [#55796](https://github.com/quarkusio/quarkus/pull/55796) - Fix path normalization
  * [#55801](https://github.com/quarkusio/quarkus/pull/55801) - Do not run license acceptance on Windows CI
  * [#55802](https://github.com/quarkusio/quarkus/pull/55802) - Do not trigger CI when adjusting reproducibility checks
  * [#55807](https://github.com/quarkusio/quarkus/pull/55807) - Bump org.mvnpm.at.hpcc-js:wasm from 2.34.5 to 2.35.0
  * [#55810](https://github.com/quarkusio/quarkus/pull/55810) - Bump org.mvnpm:es-module-shims from 2.8.2 to 2.8.4
  * [#55811](https://github.com/quarkusio/quarkus/pull/55811) - Bump org.apache.groovy:groovy from 5.0.6 to 5.0.8
  * [#55813](https://github.com/quarkusio/quarkus/pull/55813) - Bump com.mysql:mysql-connector-j from 9.7.0 to 26.7.0
  * [#55816](https://github.com/quarkusio/quarkus/issues/55816) - Remove deprecated fields and methods from OTel
  * [#55823](https://github.com/quarkusio/quarkus/pull/55823) - Polish `MvnProjectBuilder`
  * [#55824](https://github.com/quarkusio/quarkus/pull/55824) - Polish `JpaJandexScavenger`
  * [#55825](https://github.com/quarkusio/quarkus/pull/55825) - Polish `LambdaHttpHandler`
  * [#55826](https://github.com/quarkusio/quarkus/pull/55826) - Polish `ResteasyReactiveProcessor`
  * [#55833](https://github.com/quarkusio/quarkus/pull/55833) - Report reproducibility checks status to issues
  * [#55837](https://github.com/quarkusio/quarkus/pull/55837) - Optimize native images when the HTTP/3 extension is not present
  * [#55838](https://github.com/quarkusio/quarkus/pull/55838) - Make OpenTelemetry Metrics and Logs Stable and ON by default
  * [#55839](https://github.com/quarkusio/quarkus/issues/55839) - Warn if multiple redundant metrics systems are active
  * [#55845](https://github.com/quarkusio/quarkus/pull/55845) - Bump com.gradle:common-custom-user-data-maven-extension from 2.2.0 to 2.4.0
  * [#55847](https://github.com/quarkusio/quarkus/pull/55847) - `@OpenApiFilter` overrides mp.openapi.filter
  * [#55851](https://github.com/quarkusio/quarkus/pull/55851) - Allow listing all public methods of a class for reflection
  * [#55853](https://github.com/quarkusio/quarkus/pull/55853) - Use JDK 21 in `.sdkmanrc`
  * [#55854](https://github.com/quarkusio/quarkus/issues/55854) - Jackson reflection-free serializers output warnings for `jakarta.persistence.Column`
  * [#55855](https://github.com/quarkusio/quarkus/issues/55855) - Quarkus 3.38 and `OpenTelemetry API usage issue detected` warning in the log
  * [#55857](https://github.com/quarkusio/quarkus/pull/55857) - Reduce config converter reflection metadata generated by MicroProfile Config
  * [#55862](https://github.com/quarkusio/quarkus/pull/55862) - Bump org.apache.qpid:proton-j from 0.34.1 to 0.35.0
  * [#55863](https://github.com/quarkusio/quarkus/pull/55863) - Bump org.mvnpm:dompurify from 3.4.11 to 3.4.12
  * [#55874](https://github.com/quarkusio/quarkus/pull/55874) - Fix 3 stale native image substitutions
  * [#55876](https://github.com/quarkusio/quarkus/pull/55876) - OIDC Client: drop deprecated RESTEasy request filter
  * [#55878](https://github.com/quarkusio/quarkus/pull/55878) - Bump to Vert.x 5.1.6
  * [#55880](https://github.com/quarkusio/quarkus/pull/55880) - Fix exclusion of netty-codecs' `reflect-config.json` files
  * [#55882](https://github.com/quarkusio/quarkus/pull/55882) - Add Martin to be notified of Kubernetes issues
  * [#55884](https://github.com/quarkusio/quarkus/pull/55884) - Improve test coverage in dev services project
  * [#55886](https://github.com/quarkusio/quarkus/pull/55886) - Remove deprecated OTel code
  * [#55888](https://github.com/quarkusio/quarkus/pull/55888) - Migrate the default OpenTelemetry protocol from grpc to http/protobuf.
  * [#55889](https://github.com/quarkusio/quarkus/issues/55889) - [Quarkus 3.20.5 / Hibernate ORM 6.6.40.Final] quarkus.otel.logs.enabled=true fails SessionFactory build for TABLE_PER_CLASS collections
  * [#55890](https://github.com/quarkusio/quarkus/pull/55890) - Bump CycloneDX to `13.0.0`
  * [#55892](https://github.com/quarkusio/quarkus/pull/55892) - Fix the noreuse test to point to the appropriate project
  * [#55896](https://github.com/quarkusio/quarkus/pull/55896) - Bump com.google.cloud.functions:functions-framework-api from 2.0.1 to 2.0.2
  * [#55897](https://github.com/quarkusio/quarkus/pull/55897) - Bump com.google.api.grpc:proto-google-common-protos from 2.73.0 to 2.74.0
  * [#55904](https://github.com/quarkusio/quarkus/pull/55904) - Fix Docker Compose files for Podman
  * [#55917](https://github.com/quarkusio/quarkus/issues/55917) - Allow to enforce DPoP proof token age
  * [#55920](https://github.com/quarkusio/quarkus/pull/55920) - Add container identity tracking tests to strengthen devservices coverage
  * [#55922](https://github.com/quarkusio/quarkus/pull/55922) - Bump org.mvnpm:dompurify from 3.4.12 to 3.4.13
  * [#55923](https://github.com/quarkusio/quarkus/pull/55923) - Bump eu.maveniverse.maven.nisse:extension3 from 0.9.3 to 0.9.4
  * [#55925](https://github.com/quarkusio/quarkus/pull/55925) - Port Gradle extension plugin tests to Jackson 3
  * [#55926](https://github.com/quarkusio/quarkus/pull/55926) - ArC: implement CDI 5.0
  * [#55928](https://github.com/quarkusio/quarkus/pull/55928) - Add test to verify containers are reused by databases, in no-profile case
  * [#55931](https://github.com/quarkusio/quarkus/pull/55931) - OIDC Client: drop deprecated OidcClientConfig class
  * [#55932](https://github.com/quarkusio/quarkus/pull/55932) - OIDC extension: add property to control optional OIDC routes
  * [#55936](https://github.com/quarkusio/quarkus/issues/55936) - Quarkus app fails to start from Windows mapped/network drives (drive letter stripped from jar:file: URL)
  * [#55939](https://github.com/quarkusio/quarkus/pull/55939) - Fix fast-jar resource URLs on Windows network drives
  * [#55943](https://github.com/quarkusio/quarkus/issues/55943) - HTTPS server configured via TLS registry doesn't allow to enable SNI when a single alias even though legacy option allowed it
  * [#55946](https://github.com/quarkusio/quarkus/issues/55946) - NullPointerException in OTLP exporter shutdown when the Vert.x client is already closed (flaky LgtmResourcesTest.testTracing)
  * [#55949](https://github.com/quarkusio/quarkus/pull/55949) - Bump org.commonmark:commonmark from 0.29.0 to 0.30.0
  * [#55956](https://github.com/quarkusio/quarkus/pull/55956) - Add quarkus-extension.json and deprecate quarkus-extension.yaml
  * [#55957](https://github.com/quarkusio/quarkus/pull/55957) - Guard against a null Future from client close in OTLP exporter shutdown
  * [#55965](https://github.com/quarkusio/quarkus/issues/55965) - Potential Vulnerabilities Due To Hidden Dependencies
  * [#55966](https://github.com/quarkusio/quarkus/pull/55966) - Bump smallrye-reactive-messaging.version from 5.0.0-beta4 to 5.0.0-beta5
  * [#55968](https://github.com/quarkusio/quarkus/pull/55968) - Add dependencies with shaded vulnerabilities to Dependabot
  * [#55971](https://github.com/quarkusio/quarkus/pull/55971) - Bump org.htmlunit:htmlunit from 5.2.0 to 5.4.0
  * [#55972](https://github.com/quarkusio/quarkus/pull/55972) - Bump org.mvnpm.at.mvnpm:vaadin-webcomponents from 25.2.6 to 25.2.7
  * [#55973](https://github.com/quarkusio/quarkus/pull/55973) - Bump eu.maveniverse.maven.scalpel:extension3 from 0.3.7 to 0.3.10
  * [#55975](https://github.com/quarkusio/quarkus/pull/55975) - Bump dekorate to 4.1.11
  * [#55976](https://github.com/quarkusio/quarkus/pull/55976) - Bump org.checkerframework:checker-qual from 4.2.1 to 4.2.2
  * [#55977](https://github.com/quarkusio/quarkus/pull/55977) - Bump com.google.cloud.functions.invoker:java-function-invoker from 2.0.0 to 2.0.2
  * [#55979](https://github.com/quarkusio/quarkus/pull/55979) - Genkey: write JWT config to application.properties and update docs
  * [#55986](https://github.com/quarkusio/quarkus/pull/55986) - Tests: cache ApplicationModel in QuarkusExtensionTest
  * [#55987](https://github.com/quarkusio/quarkus/pull/55987) - Fix `.github/list-deployment-modules.sh` silently failing
  * [#55993](https://github.com/quarkusio/quarkus/pull/55993) - Bump azure.toolkit-lib.version from 0.53.0 to 0.56.0
  * [#55994](https://github.com/quarkusio/quarkus/pull/55994) - Bump org.cyclonedx:cyclonedx-core-java from 13.0.0 to 13.1.0
  * [#56000](https://github.com/quarkusio/quarkus/pull/56000) - Install the OpenTelemetry log handler without waiting for the SDK
  * [#56003](https://github.com/quarkusio/quarkus/pull/56003) - Reenable the quickstarts build in main
  * [#56004](https://github.com/quarkusio/quarkus/issues/56004) - Unspecific NPE on application start when using RestHeader with a MultivaluedMap in a RestClient (unless parameter names are included in compiled classes)
  * [#56005](https://github.com/quarkusio/quarkus/issues/56005) - Native image build fails on aarch64: BC FIPS 'AESWorkingBuffer' found in image heap (runtime-init type)
  * [#56006](https://github.com/quarkusio/quarkus/pull/56006) - Allow class-level `@NameBinding` on constructor-injected RESTEasy resources
  * [#56007](https://github.com/quarkusio/quarkus/pull/56007) - Follow sentence case for the category titles
  * [#56012](https://github.com/quarkusio/quarkus/pull/56012) - Bump io.fabric8:docker-maven-plugin from 0.48.1 to 0.49.0
  * [#56014](https://github.com/quarkusio/quarkus/pull/56014) - Use sentence case in guide titles
  * [#56015](https://github.com/quarkusio/quarkus/issues/56015) - RestEasy client custom parameter types
  * [#56017](https://github.com/quarkusio/quarkus/pull/56017) - Handle string JSON-RPC ids and always respond on the Dev MCP endpoint
  * [#56022](https://github.com/quarkusio/quarkus/pull/56022) - Upgrade google-http-client-bom to 2.2.0 to match Google SDK
  * [#56025](https://github.com/quarkusio/quarkus/pull/56025) - Bump eu.maveniverse.maven.nisse:extension3 from 0.9.4 to 0.9.5
  * [#56026](https://github.com/quarkusio/quarkus/pull/56026) - Bump io.quarkus:quarkus-platform-bom-maven-plugin from 0.0.132 to 0.0.134
  * [#56027](https://github.com/quarkusio/quarkus/issues/56027) - quarkus-panache-mock does not mock enitities that have a superclass extending PanacheEntity or PanacheEntityBase
  * [#56028](https://github.com/quarkusio/quarkus/pull/56028) - Fix: Entities with MappedSuperclass not being mocked
  * [#56031](https://github.com/quarkusio/quarkus/pull/56031) - Fix native image build failure on aarch64 when using BC FIPS Poly1305-AES
  * [#56032](https://github.com/quarkusio/quarkus/pull/56032) - Inherit the parent context MDC in Vert.x contexts created for nested operations
  * [#56034](https://github.com/quarkusio/quarkus/pull/56034) - Avoid OpenTelemetry API usage warning from the Prometheus exemplar sampler
  * [#56035](https://github.com/quarkusio/quarkus/pull/56035) - Allow NotBody on annotation types
  * [#56039](https://github.com/quarkusio/quarkus/pull/56039) - Update Hibernate ORM examples to use Session instead of EntityManager
  * [#56040](https://github.com/quarkusio/quarkus/pull/56040) - Report the missing parameter name instead of failing with an NPE
  * [#56044](https://github.com/quarkusio/quarkus/pull/56044) - Make the generated CycloneDX SBOM reproducible
  * [#56045](https://github.com/quarkusio/quarkus/pull/56045) - Explain integration test container start failures caused by a missing Dev Services network
  * [#56046](https://github.com/quarkusio/quarkus/pull/56046) - Do not build a Quarkus application for tests JUnit excludes through tags
  * [#56048](https://github.com/quarkusio/quarkus/pull/56048) - Update to Java 21 in CONTRIBUTING.md
  * [#56049](https://github.com/quarkusio/quarkus/pull/56049) - Support `org.jboss.resteasy.reactive.Separator` for REST Client query parameters
  * [#56059](https://github.com/quarkusio/quarkus/pull/56059) - Bump org.mvnpm.at.mvnpm:vaadin-webcomponents from 25.2.7 to 25.2.8
  * [#56060](https://github.com/quarkusio/quarkus/pull/56060) - Bump io.smallrye.reactive:mutiny-zero-flow-adapters from 1.2.1 to 1.3.0
  * [#56061](https://github.com/quarkusio/quarkus/pull/56061) - Bump org.apache.groovy:groovy from 5.0.8 to 5.1.0
  * [#56073](https://github.com/quarkusio/quarkus/pull/56073) - Start the IT reproducibility checks a bit earlier
  * [#56078](https://github.com/quarkusio/quarkus/pull/56078) - Bump smallrye-certificate-generator to 1.1.2
  * [#56082](https://github.com/quarkusio/quarkus/pull/56082) - Bump org.json:json from 20260719 to 20260814
  * [#56089](https://github.com/quarkusio/quarkus/pull/56089) - Re-enable Develocity build scan publishing for pull requests
  * [#56094](https://github.com/quarkusio/quarkus/pull/56094) - Do not throw errors on missing categories given we inject them now
  * [#56095](https://github.com/quarkusio/quarkus/pull/56095) - Reenable workflows disabled for Vert.x 5
  * [#56098](https://github.com/quarkusio/quarkus/pull/56098) - SmallRye GraphQL 3.0.0.Beta6 and graphql-java 26
  * [#56100](https://github.com/quarkusio/quarkus/pull/56100) - Rerun more builds on RunsOn
  * [#56107](https://github.com/quarkusio/quarkus/pull/56107) - Keycloak admin clients: correct who owns Keycloak Dev Service when used without OIDC extension
  * [#56108](https://github.com/quarkusio/quarkus/pull/56108) - Docs: document JaCoCo support for QuarkusComponentTest
  * [#56109](https://github.com/quarkusio/quarkus/pull/56109) - Drop SecurityTransformerUtils
  * [#56110](https://github.com/quarkusio/quarkus/pull/56110) - Drop deprecated methods on BasicAuthenticationMechanism and FormAuthenticationMechanism
  * [#56115](https://github.com/quarkusio/quarkus/issues/56115) - MongoDB authSource from connection string is ignored when credentials are configured separately
  * [#56116](https://github.com/quarkusio/quarkus/issues/56116) - Allow MongoDB Panache to use the database from the connection string as its default
  * [#56118](https://github.com/quarkusio/quarkus/pull/56118) - Make sure iteration over `OidcBuildTimeConfig#allowedRoutes()` is stable in `OidcBuildStep`
  * [#56125](https://github.com/quarkusio/quarkus/pull/56125) - Centralize UserContextInternal cast into QuarkusHttpUser.setUser()
  * [#56128](https://github.com/quarkusio/quarkus/pull/56128) - Removed deprecations from test-framework modules
  * [#56133](https://github.com/quarkusio/quarkus/issues/56133) - Composed/meta-annotated `@QuarkusTest` is not registered as a CDI bean, breaking `@Inject` on the test class
  * [#56135](https://github.com/quarkusio/quarkus/pull/56135) - Remove deprecated .enable for Swagger, GraphQL, and Health UI
  * [#56136](https://github.com/quarkusio/quarkus/pull/56136) - Tweak Gradle plugin build properties
  * [#56137](https://github.com/quarkusio/quarkus/pull/56137) - Make remote-dev session updates consistent
  * [#56138](https://github.com/quarkusio/quarkus/pull/56138) - Report the image produced by OpenShift builds
  * [#56143](https://github.com/quarkusio/quarkus/pull/56143) - Add strict Javadoc verification for Gradle modules
  * [#56146](https://github.com/quarkusio/quarkus/pull/56146) - Register test class as bean for `@QuarkusTest` meta-annotation in a jar
  * [#56150](https://github.com/quarkusio/quarkus/pull/56150) - Bump com.google.guava:guava from 33.6.0-jre to 33.7.1-jre
  * [#56154](https://github.com/quarkusio/quarkus/issues/56154) - Qute `@MessageBundle` resolution are not `Accept-Language` header aware for regular REST apps
  * [#56157](https://github.com/quarkusio/quarkus/pull/56157) - Read an InputStream entity on a worker thread when writer interceptors prevent streaming it
  * [#56162](https://github.com/quarkusio/quarkus/pull/56162) - Allow keeping small multipart file parts in memory
  * [#56164](https://github.com/quarkusio/quarkus/pull/56164) - TLS registry: Allow keystore alias when SNI enabled
  * [#56168](https://github.com/quarkusio/quarkus/pull/56168) - Qute: introduce injectable locale aware message bundles
  * [#56169](https://github.com/quarkusio/quarkus/pull/56169) - Fix some anchors in security-webauthn.adoc
  * [#56172](https://github.com/quarkusio/quarkus/pull/56172) - Clean up long-deprecated code in core deployment build items
  * [#56174](https://github.com/quarkusio/quarkus/pull/56174) - Add deprecation-cleanup skill
  * [#56178](https://github.com/quarkusio/quarkus/pull/56178) - Bump smallrye-config.version from 3.18.1 to 3.18.2
  * [#56179](https://github.com/quarkusio/quarkus/pull/56179) - Bump eu.maveniverse.maven.nisse:extension3 from 0.9.5 to 0.9.7
  * [#56180](https://github.com/quarkusio/quarkus/pull/56180) - Bump org.mvnpm:dompurify from 3.4.13 to 3.4.14
  * [#56188](https://github.com/quarkusio/quarkus/pull/56188) - Bump io.smallrye.config:smallrye-config-source-yaml from 3.18.1 to 3.18.2 in /devtools/gradle
  * [#56190](https://github.com/quarkusio/quarkus/pull/56190) - Register the Lambda test base URI with the HTTP root path
  * [#56193](https://github.com/quarkusio/quarkus/pull/56193) - Run the JPA MySQL integration tests with Podman again
  * [#56194](https://github.com/quarkusio/quarkus/pull/56194) - Run the JDBC PostgreSQL and Micrometer deployment tests with Podman again
  * [#56196](https://github.com/quarkusio/quarkus/pull/56196) - Polish RuntimeResourceDeployment
  * [#56198](https://github.com/quarkusio/quarkus/pull/56198) - Remove deprecated configuration properties prior to Quarkus 3.33
  * [#56199](https://github.com/quarkusio/quarkus/pull/56199) - Support reflection-free json serialization of a Map subtype
  * [#56200](https://github.com/quarkusio/quarkus/pull/56200) - Use Vert.x ContextLocal instead of SmallRye ContextLocals data maps
  * [#56201](https://github.com/quarkusio/quarkus/pull/56201) - Update LGTM to 0.31.0, expose Prometheus endpoint
  * [#56207](https://github.com/quarkusio/quarkus/pull/56207) - Warn when both the Micrometer and OpenTelemetry metrics are active
  * [#56210](https://github.com/quarkusio/quarkus/pull/56210) - Fix annoying `null` at end of toString when there are no paths
  * [#56212](https://github.com/quarkusio/quarkus/pull/56212) - Explain native-image build failures by exit code
  * [#56213](https://github.com/quarkusio/quarkus/pull/56213) - Hint at a missing C compiler in native-image build failures
  * [#56218](https://github.com/quarkusio/quarkus/pull/56218) - Add quarkus.smallrye-openapi.store-schemas-directory
  * [#56219](https://github.com/quarkusio/quarkus/pull/56219) - Make protobuf-java a compile dependency for Pulsar extension
  * [#56221](https://github.com/quarkusio/quarkus/pull/56221) - Deprecate `quarkus.native.enable-fallback-images`
  * [#56225](https://github.com/quarkusio/quarkus/pull/56225) - Polish AbstractQuarkusExtensionTest
  * [#56230](https://github.com/quarkusio/quarkus/pull/56230) - Prevent dependabot for updating Jakarta Data
  * [#56235](https://github.com/quarkusio/quarkus/pull/56235) - Bump eu.maveniverse.maven.nisse:extension3 from 0.9.7 to 0.9.8
  * [#56236](https://github.com/quarkusio/quarkus/pull/56236) - Upgrade Jackson to 3.1.4 in BOM
  * [#56238](https://github.com/quarkusio/quarkus/pull/56238) - Decouple types discovery and generation of reflection-free Jackson serializers
  * [#56247](https://github.com/quarkusio/quarkus/pull/56247) - Test container reuse/replacement across profile changes 
  * [#56248](https://github.com/quarkusio/quarkus/pull/56248) - Support selecting the client address from the `X-Forwarded-For` header
  * [#56249](https://github.com/quarkusio/quarkus/pull/56249) - Try to prevent unnecessary release-notes in PRs
  * [#56253](https://github.com/quarkusio/quarkus/pull/56253) - Fix bad mapping for Spring `@RequestHeader`
  * [#56256](https://github.com/quarkusio/quarkus/pull/56256) - Bump org.apache.groovy:groovy from 5.1.0 to 5.1.1
  * [#56258](https://github.com/quarkusio/quarkus/pull/56258) - Reject REST Client Response/RestResponse returned from server endpoints
  * [#56259](https://github.com/quarkusio/quarkus/pull/56259) - Remove deprecated code from `core/processor`
  * [#56260](https://github.com/quarkusio/quarkus/pull/56260) - Remove deprecated code from `core/runtime` and `core/devmode-spi`
  * [#56261](https://github.com/quarkusio/quarkus/pull/56261) - Remove deprecated code from `core/deployment`
  * [#56266](https://github.com/quarkusio/quarkus/pull/56266) - Bound remote-dev request body processing
  * [#56269](https://github.com/quarkusio/quarkus/pull/56269) - Honor MongoDB authSource when credentials are configured separately
  * [#56272](https://github.com/quarkusio/quarkus/pull/56272) - Remove deprecated code from `devtools`
  * [#56273](https://github.com/quarkusio/quarkus/pull/56273) - Remove deprecated code from `independent-projects`
  * [#56274](https://github.com/quarkusio/quarkus/issues/56274) - NoClassDefFoundError Jdk8Module for app with oidc-restclient, native build
  * [#56276](https://github.com/quarkusio/quarkus/issues/56276) - Native binary start fails with "BulkOfPropertiesConfiguration class is not a ConfigMapping", JVM mode works fine
  * [#56284](https://github.com/quarkusio/quarkus/pull/56284) - Bump org.cyclonedx:cyclonedx-core-java from 13.1.0 to 13.2.0
  * [#56288](https://github.com/quarkusio/quarkus/pull/56288) - Register `@ConfigProperties` classes for reflection
  * [#56290](https://github.com/quarkusio/quarkus/pull/56290) - Use MongoDB connection string database as the Panache default
  * [#56297](https://github.com/quarkusio/quarkus/pull/56297) - Keycloak Admin Client: use Jackson 2 modules until we get client based on Jackson 3
  * [#56307](https://github.com/quarkusio/quarkus/pull/56307) - Fix reading headers in Spring Web - Quarkus REST
  * [#56312](https://github.com/quarkusio/quarkus/pull/56312) - Bump apicurio-registry.version from 3.3.1 to 3.3.2
  * [#56316](https://github.com/quarkusio/quarkus/pull/56316) - Bump eu.maveniverse.maven.nisse:extension3 from 0.9.8 to 0.9.10
  * [#56317](https://github.com/quarkusio/quarkus/pull/56317) - Bump jakarta.json.bind:jakarta.json.bind-api from 3.0.2 to 3.0.3
  * [#56318](https://github.com/quarkusio/quarkus/pull/56318) - Bump org.mvnpm.at.mvnpm:vaadin-webcomponents from 25.2.8 to 25.2.9
  * [#56319](https://github.com/quarkusio/quarkus/pull/56319) - Use composite key for token introspection and userinfo cache
  * [#56325](https://github.com/quarkusio/quarkus/pull/56325) - SPIFFE client: move runtime API classes and introduce SVID specific classes
  * [#56326](https://github.com/quarkusio/quarkus/issues/56326) - Refresh token expiry resolution fails silently, no log when refreshTokenExpiresAt cannot be determined
  * [#56327](https://github.com/quarkusio/quarkus/pull/56327) - Hibernate session delegates
  * [#56328](https://github.com/quarkusio/quarkus/pull/56328) - Remove preview-era reflection for virtual threads now that JDK 21 is the baseline
  * [#56329](https://github.com/quarkusio/quarkus/pull/56329) - Include ConfigSource name when reporting unknown or deprecated configurations
  * [#56335](https://github.com/quarkusio/quarkus/pull/56335) -  Server-Side Template Injection (SSTI) vulnerability in ReflectionValueResolver of the Quarkus Qute template engine
  * [#56341](https://github.com/quarkusio/quarkus/pull/56341) - Upgrade SmallRye GraphQL to 3.0.0.Beta7
  * [#56344](https://github.com/quarkusio/quarkus/pull/56344) - Improve example code for pausable channels
  * [#56347](https://github.com/quarkusio/quarkus/issues/56347) - `CleanerJava24Linker#<clinit>` taking 20% of startup CPU time
  * [#56351](https://github.com/quarkusio/quarkus/pull/56351) - Bump to Vert.x 5.1.7
  * [#56352](https://github.com/quarkusio/quarkus/pull/56352) - OTel: Wrap the shared executor so that OTel shutdown does not take an extra 5 seconds to terminate
  * [#56355](https://github.com/quarkusio/quarkus/pull/56355) - Improve docs for PQC
  * [#56356](https://github.com/quarkusio/quarkus/issues/56356) - Upgrade Oracle JDBC driver to latest version 23.26.3.0.0
  * [#56360](https://github.com/quarkusio/quarkus/pull/56360) - Keep WithFormRead request filter order when moving them after the body handler
  * [#56361](https://github.com/quarkusio/quarkus/pull/56361) - Upgrade RESTEasy to 7.0.4.Final
  * [#56373](https://github.com/quarkusio/quarkus/pull/56373) - Upgrade Oracle JDBC driver to latest version 23.26.3.0.0
  * [#56375](https://github.com/quarkusio/quarkus/issues/56375) - Rest client: add parameter-style configuration paramter for `@FormParam`/`@RestForm`
  * [#56376](https://github.com/quarkusio/quarkus/pull/56376) - Fix TOCTOU race in setChunked() causing flaky SSE TCK closeTest
  * [#56377](https://github.com/quarkusio/quarkus/pull/56377) - Dev UI observability
  * [#56382](https://github.com/quarkusio/quarkus/pull/56382) - Log when refresh token expiry cannot be resolved
  * [#56384](https://github.com/quarkusio/quarkus/pull/56384) - Bump org.htmlunit:htmlunit from 5.4.0 to 5.5.0
  * [#56401](https://github.com/quarkusio/quarkus/issues/56401) - rest-jackson: class-level `@CustomSerialization` ObjectWriter cached by return type, dropping the resource class from the key
  * [#56410](https://github.com/quarkusio/quarkus/pull/56410) - Add xstefank to quarkus lottery
  * [#56417](https://github.com/quarkusio/quarkus/pull/56417) - Further Netty startup optimizations
  * [#56418](https://github.com/quarkusio/quarkus/pull/56418) - Optimize removed beans resolution
  * [#56419](https://github.com/quarkusio/quarkus/pull/56419) - Use ReentrantLock instead of Vert.x connection as monitor in HTTP I/O classes
  * [#56421](https://github.com/quarkusio/quarkus/pull/56421) - Bump org.apache.maven.plugins:maven-compiler-plugin from 3.15.0 to 3.16.0
  * [#56422](https://github.com/quarkusio/quarkus/pull/56422) - Bump org.yaml:snakeyaml from 2.6 to 2.7
  * [#56426](https://github.com/quarkusio/quarkus/pull/56426) - docs: document JBang run.repos for non-Central artifacts
  * [#56427](https://github.com/quarkusio/quarkus/pull/56427) - docs: document Gradle quarkusIntTest layout
  * [#56433](https://github.com/quarkusio/quarkus/pull/56433) - Ensure `@CustomSerialization` / `@CustomDeserialization` are properly cached
  * [#56436](https://github.com/quarkusio/quarkus/pull/56436) - Signals: propagate OpenTelemetry trace context to receivers
  * [#56438](https://github.com/quarkusio/quarkus/pull/56438) - Bump org.apache.maven.plugins:maven-surefire-plugin from 3.5.4 to 3.6.0
  * [#56440](https://github.com/quarkusio/quarkus/pull/56440) - Bump org.jboss.threads:jboss-threads from 3.9.2 to 3.10.1
  * [#56443](https://github.com/quarkusio/quarkus/pull/56443) - Avoid unnecessary reloads due to using array based values in meta-annotations for QuarkusTestResource
  * [#56445](https://github.com/quarkusio/quarkus/pull/56445) - Remove the old Dev Services infrastructure
  * [#56446](https://github.com/quarkusio/quarkus/issues/56446) - Build issue with DB2 extension on Mac OS + Podman
  * [#56451](https://github.com/quarkusio/quarkus/pull/56451) - Update the build plugin version properties with quarkus update
  * [#56452](https://github.com/quarkusio/quarkus/pull/56452) - Fix unrecognized global REST Client response decompression configuration key
  * [#56454](https://github.com/quarkusio/quarkus/pull/56454) - Run the Oracle tests with Podman again
  * [#56458](https://github.com/quarkusio/quarkus/pull/56458) - Do not report a client going away during a chunked servlet response as an error
  * [#56460](https://github.com/quarkusio/quarkus/pull/56460) - Qute: require the index parameter for list get/take/takeLast
  * [#56461](https://github.com/quarkusio/quarkus/pull/56461) - Stop non-reusable dev services when the JVM shuts down after tests
  * [#56462](https://github.com/quarkusio/quarkus/pull/56462) - Read a REST Client response received as a Multi according to the subscriber's demand
  * [#56464](https://github.com/quarkusio/quarkus/pull/56464) - Run the logging-gelf and Hibernate Reactive with Panache tests with Podman again
  * [#56465](https://github.com/quarkusio/quarkus/pull/56465) - Support `Multi<byte[]>` as a streamed REST Client request body
  * [#56466](https://github.com/quarkusio/quarkus/pull/56466) - Make the maximum number of decoded query parameters configurable
  * [#56468](https://github.com/quarkusio/quarkus/pull/56468) - Skip the DB2 Dev Services tests on arm64
  * [#56472](https://github.com/quarkusio/quarkus/pull/56472) - Add ways to configure form param separator in REST Client
  * [#56473](https://github.com/quarkusio/quarkus/pull/56473) - Remove unnecessary quarkus-extension-processor from SPI modules
  * [#56474](https://github.com/quarkusio/quarkus/pull/56474) - Fix some modularity config for Vert.x
  * [#56475](https://github.com/quarkusio/quarkus/pull/56475) - Update SmallRye Config to 4.0.0
  * [#56476](https://github.com/quarkusio/quarkus/pull/56476) - Bump mutiny-zero.version from 1.3.0 to 1.3.1
  * [#56478](https://github.com/quarkusio/quarkus/pull/56478) - Bump com.dajudge.kindcontainer:kindcontainer from 2.0.0 to 2.1.0
  * [#56479](https://github.com/quarkusio/quarkus/pull/56479) - Bump org.mvnpm.at.mvnpm:vaadin-webcomponents from 25.2.9 to 25.2.10
  * [#56481](https://github.com/quarkusio/quarkus/pull/56481) - Bump org.apache.groovy:groovy from 5.1.1 to 5.1.2
  * [#56482](https://github.com/quarkusio/quarkus/pull/56482) - Bump org.checkerframework:checker-qual from 4.2.2 to 4.2.3
  * [#56483](https://github.com/quarkusio/quarkus/pull/56483) - Polish MultipartParser
  * [#56484](https://github.com/quarkusio/quarkus/pull/56484) - Bump org.slf4j:slf4j-api from 2.0.18 to 2.0.19
  * [#56488](https://github.com/quarkusio/quarkus/pull/56488) - Use streaming parsing in generated Jackson deserializers
  * [#56490](https://github.com/quarkusio/quarkus/pull/56490) - Re-order and condense extension metadata docs
  * [#56492](https://github.com/quarkusio/quarkus/issues/56492) - `QuarkusContextStorage.attach()` leaves the OpenTelemetry context in thread-local storage on Vert.x event-loop threads
  * [#56495](https://github.com/quarkusio/quarkus/issues/56495) - Signals - collect metrics for messages, errors and bytes transferred
  * [#56496](https://github.com/quarkusio/quarkus/pull/56496) - Improve `ServerRestHandler` invocation
  * [#56499](https://github.com/quarkusio/quarkus/pull/56499) - Bump org.mvnpm.at.hpcc-js:wasm from 2.35.0 to 2.35.1
  * [#56501](https://github.com/quarkusio/quarkus/pull/56501) - Bump eu.maveniverse.maven.nisse:extension3 from 0.9.10 to 0.9.11
  * [#56505](https://github.com/quarkusio/quarkus/pull/56505) - Add AutoUUIDv7 class for UUID generation for Hibernate Data
  * [#56510](https://github.com/quarkusio/quarkus/pull/56510) - Drop the 3.x artifact relocations in Quarkus 4.0
  * [#56516](https://github.com/quarkusio/quarkus/pull/56516) - Add a callout list to the Publisher listing in the Quarkus Data tutorial
  * [#56520](https://github.com/quarkusio/quarkus/pull/56520) - native-image: New reachability-metadata.json, GraalVM/Mandrel 25+
  * [#56525](https://github.com/quarkusio/quarkus/pull/56525) - Fix Javadoc of `quarkus.otel.traces.sampler.arg`
  * [#56528](https://github.com/quarkusio/quarkus/pull/56528) - Signals: collect Micrometer metrics for emissions, executions and errors
  * [#56530](https://github.com/quarkusio/quarkus/pull/56530) - Reinstate MemorySize*
  * [#56531](https://github.com/quarkusio/quarkus/pull/56531) - Fix find-deprecated.sh to use committer date, not author date
  * [#56533](https://github.com/quarkusio/quarkus/pull/56533) - Bump to Vert.x 5.1.8
  * [#56538](https://github.com/quarkusio/quarkus/pull/56538) - Unify Dev Services around StartableContainer
  * [#56546](https://github.com/quarkusio/quarkus/pull/56546) - PQC tests - Downgrade setup-java
  * [#56550](https://github.com/quarkusio/quarkus/pull/56550) - SBOM entry for Quarkus Bot
  * [#56554](https://github.com/quarkusio/quarkus/pull/56554) - Bump com.gradle.plugin-publish from 2.1.1 to 2.2.0 in /devtools/gradle
  * [#56557](https://github.com/quarkusio/quarkus/pull/56557) - Polish observation extension
  * [#56564](https://github.com/quarkusio/quarkus/pull/56564) - Avoid storing CuratedApplication-dependent instances in static fields
  * [#56565](https://github.com/quarkusio/quarkus/pull/56565) - Rename some variables in QuarkusTestExtension for clarity
  * [#56574](https://github.com/quarkusio/quarkus/pull/56574) - Track active runtime classloaders to manage CuratedApplication lifecycle
  * [#56578](https://github.com/quarkusio/quarkus/pull/56578) - Convert OffsetDateTime values sent by the REST Client
  * [#56579](https://github.com/quarkusio/quarkus/pull/56579) - Bump Microsoft SQL Server JDBC driver to 13.6.0
  * [#56581](https://github.com/quarkusio/quarkus/pull/56581) - Resolve the actual type of bean parameters declared with a type variable
  * [#56582](https://github.com/quarkusio/quarkus/pull/56582) - Signals: provide initial security integration
  * [#56589](https://github.com/quarkusio/quarkus/pull/56589) - Restore the correct outer instance after nested test classes with a per-class lifecycle
  * [#56591](https://github.com/quarkusio/quarkus/pull/56591) - Support repeated `@MeterTag` annotations on a method parameter
  * [#56598](https://github.com/quarkusio/quarkus/pull/56598) - OIDC: enforce DPoP proof `iat` and `exp` claims
  * [#56606](https://github.com/quarkusio/quarkus/pull/56606) - Take annotation transformations into account for bean parameters
  * [#56607](https://github.com/quarkusio/quarkus/pull/56607) - Serve the JSON metrics endpoint when its path is below the Prometheus path
  * [#56608](https://github.com/quarkusio/quarkus/issues/56608) - ArC: `@Decorator` applied to a self-invocation of a decorated interface method (`StackOverflowError` regression since 3.35.0)
  * [#56611](https://github.com/quarkusio/quarkus/pull/56611) - Read the response content type case-insensitively in the Lambda HTTP handler
  * [#56612](https://github.com/quarkusio/quarkus/pull/56612) - Explain a missing HTTP method in the event received by the Lambda REST handler
  * [#56615](https://github.com/quarkusio/quarkus/pull/56615) - Report an invalid bcrypt hash passed to BcryptUtil.matches with a clear message
  * [#56618](https://github.com/quarkusio/quarkus/pull/56618) - Add a size limit for the individual file parts of a multipart request
  * [#56621](https://github.com/quarkusio/quarkus/pull/56621) - Warn about resources that still use the legacy javax.ws.rs annotations
  * [#56629](https://github.com/quarkusio/quarkus/pull/56629) - Polish quarkus-rest extension
  * [#56634](https://github.com/quarkusio/quarkus/pull/56634) - Do not cache when there is a bootstrap customizer
  * [#56658](https://github.com/quarkusio/quarkus/issues/56658) - Flaky test: io.quarkus.maven.it.DevMojoIT.testResourcesFromClasspath
  * [#56661](https://github.com/quarkusio/quarkus/pull/56661) - Explain how to find out why the CORS filter rejected a request
  * [#56662](https://github.com/quarkusio/quarkus/pull/56662) - Fix the PKCS#11 keystore factory example of the TLS registry reference
  * [#56674](https://github.com/quarkusio/quarkus/issues/56674) - Infinispan test routinely fails on MacOS
  * [#56690](https://github.com/quarkusio/quarkus/pull/56690) - Add a connection status attribute to the access log
  * [#56691](https://github.com/quarkusio/quarkus/pull/56691) - Allow a CDI REST Client with an `@Url` parameter to have no configured base URL
  * [#56696](https://github.com/quarkusio/quarkus/pull/56696) - Reject client proxies of non application-scoped beans as cache keys
  * [#56697](https://github.com/quarkusio/quarkus/pull/56697) - Document when `@PreDestroy` runs for a `@TransactionScoped` bean
  * [#56701](https://github.com/quarkusio/quarkus/pull/56701) - Keep the Kafka Streams health checks up when there is no Topology
  * [#56707](https://github.com/quarkusio/quarkus/pull/56707) - Allow enabling the PROXY protocol per HTTP listener
  * [#56715](https://github.com/quarkusio/quarkus/pull/56715) - Stop adding a charset to JSON response content types
  * [#56723](https://github.com/quarkusio/quarkus/pull/56723) - Add the username option to the Redis client configuration
  * [#56734](https://github.com/quarkusio/quarkus/pull/56734) - Key web jar results by artifact and root
  * [#56735](https://github.com/quarkusio/quarkus/pull/56735) - Degrade the Dev UI extension actions gracefully when the catalog is unavailable
  * [#56741](https://github.com/quarkusio/quarkus/pull/56741) -  Fix StackOverflowError in ArC when a decorated method is declared by multiple interfaces
  * [#56744](https://github.com/quarkusio/quarkus/pull/56744) - Honour quarkus.container-image.insecure in the generated OpenShift image streams
  * [#56745](https://github.com/quarkusio/quarkus/pull/56745) - Resolve the Dev UI namespace of an extension from its extension descriptor
  * [#56755](https://github.com/quarkusio/quarkus/pull/56755) - Fix Infinispan tests failing on macOS with connection timeouts
  * [#56758](https://github.com/quarkusio/quarkus/pull/56758) - Fix CycloneDX SBOM format and pretty-print configuration
  * [#56764](https://github.com/quarkusio/quarkus/pull/56764) - Bump org.codehaus.mojo:properties-maven-plugin from 1.3.0 to 1.3.1
  * [#56766](https://github.com/quarkusio/quarkus/pull/56766) - Bump org.apache.maven.plugins:maven-deploy-plugin from 3.1.4 to 3.2.0
  * [#56767](https://github.com/quarkusio/quarkus/pull/56767) - Bump org.codehaus.mojo:exec-maven-plugin from 3.6.3 to 3.6.4
  * [#56772](https://github.com/quarkusio/quarkus/pull/56772) - Bump io.smallrye.config:smallrye-config-source-yaml from 3.18.2 to 3.18.3 in /devtools/gradle
  * [#56775](https://github.com/quarkusio/quarkus/pull/56775) - Separate OIDC Dev Services IT module from Signals Security and WebSockets Next Security IT tests
  * [#56776](https://github.com/quarkusio/quarkus/issues/56776) - The writing-extension-devui skill points at the pre-split Dev UI JSON-RPC coordinates
  * [#56777](https://github.com/quarkusio/quarkus/issues/56777) - flyway is migrating sql files in sibling directories
  * [#56778](https://github.com/quarkusio/quarkus/pull/56778) - Point the Dev UI extension skill at the current JSON-RPC SPI coordinates
  * [#56779](https://github.com/quarkusio/quarkus/pull/56779) - Fix Flyway filesystem location filtering for multiple datasources
  * [#56781](https://github.com/quarkusio/quarkus/pull/56781) - Revert MongoDB image to `mongo:7.0`
  * [#56789](https://github.com/quarkusio/quarkus/pull/56789) - Replace javaparser with text manipulation in gRPC post-processing
  * [#56790](https://github.com/quarkusio/quarkus/pull/56790) - Do not use pr id file for previews
  * [#56801](https://github.com/quarkusio/quarkus/pull/56801) - Gizmo: bump to 2.3.0
  * [#56803](https://github.com/quarkusio/quarkus/pull/56803) - Bump smallrye-config.version from 3.18.2 to 3.18.3
  * [#56804](https://github.com/quarkusio/quarkus/pull/56804) - SmallRye Fault Tolerance: bump to 7.0.0
  * [#56805](https://github.com/quarkusio/quarkus/pull/56805) - Fix clearedContext in OpenTelemetryMpContextPropagationProvider
  * [#56806](https://github.com/quarkusio/quarkus/pull/56806) - Add per-item expiration API to the cache extension
  * [#56812](https://github.com/quarkusio/quarkus/pull/56812) - Fix docs preview for pull requests opened from forks
  * [#56814](https://github.com/quarkusio/quarkus/issues/56814) - getOuterInstances() keeps a stale entry when a nested class has both a test and a deeper nested class
  * [#56815](https://github.com/quarkusio/quarkus/pull/56815) - Reuse the enclosing instance when a nested test class is initialized twice
  * [#56818](https://github.com/quarkusio/quarkus/pull/56818) - Hibernate ORM processor refactoring
  * [#56827](https://github.com/quarkusio/quarkus/pull/56827) - Break up `quarkus-devui-deployment` into multiple runs
  * [#56828](https://github.com/quarkusio/quarkus/pull/56828) - Update to Scalpel 0.4.2
  * [#56830](https://github.com/quarkusio/quarkus/pull/56830) - Qute: EvalSectionHelper and StrEvalNamespaceResolver fixes
  * [#56835](https://github.com/quarkusio/quarkus/pull/56835) - Bump org.codehaus.mojo:versions-maven-plugin from 2.21.0 to 2.22.0
  * [#56836](https://github.com/quarkusio/quarkus/pull/56836) - Re-enable Brotli compression level configuration
  * [#56840](https://github.com/quarkusio/quarkus/pull/56840) - Update various bad links in javadoc and bad references to javadoc
  * [#56843](https://github.com/quarkusio/quarkus/issues/56843) - Add 'Command Line" category
  * [#56844](https://github.com/quarkusio/quarkus/pull/56844) - Add command-line category
  * [#56846](https://github.com/quarkusio/quarkus/pull/56846) - Upgrade RESTEasy to 7.0.5.Final
  * [#56850](https://github.com/quarkusio/quarkus/issues/56850) - Quarkus forgets config properties in ITs with "Instance per class"
  * [#56851](https://github.com/quarkusio/quarkus/pull/56851) - Break up `quarkus-integration-test-aesh` into multiple runs
  * [#56852](https://github.com/quarkusio/quarkus/pull/56852) - Upgrade to Hibernate 7.4.9.Final
  * [#56856](https://github.com/quarkusio/quarkus/pull/56856) - WebSockets Next: add max-pending-messages back-pressure
  * [#56860](https://github.com/quarkusio/quarkus/pull/56860) - Fix path normalization bypass on wildcard routes (matrix-param + dot-segment)
  * [#56864](https://github.com/quarkusio/quarkus/pull/56864) - Bump smallrye-jwt version to 4.6.4
  * [#56870](https://github.com/quarkusio/quarkus/pull/56870) - Do not call unrecognised non-platform categories 'uncategorized'
  * [#56871](https://github.com/quarkusio/quarkus/pull/56871) - Deprecated jms-spi build items, moved to Quarkiverse Quarkus JMS extension
  * [#56872](https://github.com/quarkusio/quarkus/pull/56872) - Add `ModuleExportBuildItem` to complement `ModuleOpenBuildItem`
  * [#56874](https://github.com/quarkusio/quarkus/pull/56874) - Update Artemis version to 2.57.0
  * [#56875](https://github.com/quarkusio/quarkus/pull/56875) - Fix the guide links in the metadata of 13 extensions
  * [#56882](https://github.com/quarkusio/quarkus/pull/56882) - Fix the stale config prefixes in the metadata of 17 extensions
  * [#56886](https://github.com/quarkusio/quarkus/pull/56886) - QuarkusIntegrationTestExtension: remove postProcessTestInstance and add injection in beforeEach
  * [#56887](https://github.com/quarkusio/quarkus/issues/56887) - `UriBuilder#path` re-resolves the target method via reflection on every call, even though the result is invariant
  * [#56889](https://github.com/quarkusio/quarkus/pull/56889) - Improve performance of `UriBuilder#path`
  * [#56890](https://github.com/quarkusio/quarkus/issues/56890) - CDI changes require changes in SmallRye Context Propagation
  * [#56893](https://github.com/quarkusio/quarkus/pull/56893) - Improve testing skill with proper config method
  * [#56896](https://github.com/quarkusio/quarkus/issues/56896) - amazon-lambda: dev mode fails with "Key already registered quarkus.http.local-base-uri" since 3.38.0
  * [#56897](https://github.com/quarkusio/quarkus/pull/56897) - Reset RuntimeUpdatesProcessor#lastStartIndex on close
  * [#56898](https://github.com/quarkusio/quarkus/pull/56898) - Reset tasks on QuarkusClassLoader#close()
  * [#56901](https://github.com/quarkusio/quarkus/pull/56901) - Bump org.codehaus.mojo:build-helper-maven-plugin from 3.6.1 to 3.6.2
  * [#56904](https://github.com/quarkusio/quarkus/pull/56904) - Add char[] overloads to BcryptUtil and deprecate the String ones
  * [#56909](https://github.com/quarkusio/quarkus/pull/56909) - Fix the wrong RSA key size and two editorial issues in the JWT guide
  * [#56916](https://github.com/quarkusio/quarkus/pull/56916) - Break up tests in `quarkus-opentelemetry-deployment` into multiple runs
  * [#56917](https://github.com/quarkusio/quarkus/issues/56917) - Add support for keyed pages for Quarkus Data reactive
  * [#56919](https://github.com/quarkusio/quarkus/pull/56919) - Improve handling of Vertx servers in REST Client tests
  * [#56923](https://github.com/quarkusio/quarkus/pull/56923) - Do not use non-existent url for schema
  * [#56926](https://github.com/quarkusio/quarkus/pull/56926) - Fix wording of doc preview comment so we know it is a doc preview
  * [#56928](https://github.com/quarkusio/quarkus/pull/56928) - Improve alt text and link labels in the security architecture guide
  * [#56933](https://github.com/quarkusio/quarkus/issues/56933) - REST Client: Multi response over application/x-ndjson ignores subscriber demand
  * [#56936](https://github.com/quarkusio/quarkus/pull/56936) - Adjust DevServicesResultBuildItem#configProvider() API
  * [#56941](https://github.com/quarkusio/quarkus/pull/56941) - Add option for Jackson to ignore `transient`
  * [#56947](https://github.com/quarkusio/quarkus/pull/56947) - Separate ValueRegistry names when registering Vertx HTTP and Amazon Lambda local base uri
  * [#56954](https://github.com/quarkusio/quarkus/pull/56954) - Rename deprecation-cleanup skill to manage-deprecations and expand it
  * [#56955](https://github.com/quarkusio/quarkus/pull/56955) - Prevent `ExternalSelfSignedTestCase` flakiness
  * [#56957](https://github.com/quarkusio/quarkus/pull/56957) - Bump SmallRye Context Propagation to 2.4.0. This version uses new CDI 5.0 coordinates
  * [#56960](https://github.com/quarkusio/quarkus/pull/56960) - Deprecate Hibernate ORM 5.6 database compatibility setting
  * [#56969](https://github.com/quarkusio/quarkus/pull/56969) - Fix dependabot config for jackson - use both groupIds, allow only micro updates
  * [#56971](https://github.com/quarkusio/quarkus/pull/56971) - Bump to latest Stork 3.0.3
  * [#56975](https://github.com/quarkusio/quarkus/pull/56975) - Bump elasticsearch-opensource-components.version from 9.4.3 to 9.4.7
  * [#56977](https://github.com/quarkusio/quarkus/pull/56977) - Read newline-delimited REST Client Multi responses on demand
  * [#56978](https://github.com/quarkusio/quarkus/pull/56978) - Update to SmallRye OpenAPI 4.4.0-alpha3 for Jackson 3 support
  * [#56979](https://github.com/quarkusio/quarkus/pull/56979) - Enable quarkus-awt on macOS
  * [#56982](https://github.com/quarkusio/quarkus/pull/56982) - Update Kubernetes Client to 8.0.0 and Dekorate to 5.0.0
  * [#56983](https://github.com/quarkusio/quarkus/issues/56983) - Dev UI buttons not clickable
  * [#56990](https://github.com/quarkusio/quarkus/pull/56990) - Do not use semicolon as query param delimiter by default
  * [#56993](https://github.com/quarkusio/quarkus/pull/56993) - Bump quarkus-documentation-rag-maven-plugin to 0.0.8
  * [#56994](https://github.com/quarkusio/quarkus/pull/56994) - Navigate when a Dev UI sub-menu tab is selected outside its link
  * [#56996](https://github.com/quarkusio/quarkus/pull/56996) - Ensure that HttpClient is closed in tests
  * [#56997](https://github.com/quarkusio/quarkus/pull/56997) - Use `StaticInit` and `RuntimeInit` in Quarkus REST recorders
  * [#56999](https://github.com/quarkusio/quarkus/pull/56999) - Drop deprecated ExchangeAttributeParser constructor
  * [#57002](https://github.com/quarkusio/quarkus/pull/57002) - Reintroduce legacy JsonRPCProvidersBuildItem
  * [#57005](https://github.com/quarkusio/quarkus/pull/57005) - Bump org.mvnpm:dompurify from 3.4.14 to 3.4.16
  * [#57007](https://github.com/quarkusio/quarkus/pull/57007) - Reintroduce the quarkus-junit5 relocation for a few betas
  * [#57013](https://github.com/quarkusio/quarkus/pull/57013) - Bump smallrye-reactive-messaging.version from 5.0.0-beta5 to 5.0.0-RC1
  * [#57016](https://github.com/quarkusio/quarkus/pull/57016) - Deprecate OutputFilter
  * [#57018](https://github.com/quarkusio/quarkus/pull/57018) - Further improve tests that use Vert.x HttpClient
  * [#57019](https://github.com/quarkusio/quarkus/pull/57019) - Follow-up fixes on top of the Hibernate 8 integration
  * [#57027](https://github.com/quarkusio/quarkus/pull/57027) - Add cursor-based (keyed) pagination support to Quarkus Data
  * [#57029](https://github.com/quarkusio/quarkus/pull/57029) - Improve clarity of javadoc for RunMojo
  * [#57033](https://github.com/quarkusio/quarkus/pull/57033) - Update CORSFilter to warn about wildcard origins in prod and allowing access to credentials
  * [#57042](https://github.com/quarkusio/quarkus/pull/57042) - Make preferred Instant JDBC type override test effective
  * [#57043](https://github.com/quarkusio/quarkus/pull/57043) - Fix version check for preview releases
  * [#57044](https://github.com/quarkusio/quarkus/pull/57044) - Don't require URL in REST Client when domain sockets are used
  * [#57048](https://github.com/quarkusio/quarkus/pull/57048) - Revert `Bump org.mvnpm.at.hpcc-js:wasm from 2.35.0 to 2.35.1`
  * [#57049](https://github.com/quarkusio/quarkus/pull/57049) - Add 3.40 LTS to guarded branches
  * [#57051](https://github.com/quarkusio/quarkus/pull/57051) - Implement a merge gate workflow for CI

---

> **Source** [quarkusio/quarkus](https://github.com/quarkusio/quarkus) · `4.0.0.Beta1` · 2026-10-01 · [upstream release](https://github.com/quarkusio/quarkus/releases/tag/4.0.0.Beta1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
