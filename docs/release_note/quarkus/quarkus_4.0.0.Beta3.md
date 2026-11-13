---
title: "quarkus 4.0.0.Beta3"
project: "quarkus"
repo: "quarkusio/quarkus"
tag: "4.0.0.Beta3"
published: "2026-11-04"
type: "major"
lang: "en"
---

# quarkus 4.0.0.Beta3

### Major changes

  * [#57851](https://github.com/quarkusio/quarkus/pull/57851) - Bump Hibernate ORM to 8.0.0.Beta4, Reactive to 5.1.0.Beta1, rework Quarkus Data Annotation Processor

### Complete changelog

  * [#34393](https://github.com/quarkusio/quarkus/issues/34393) - Vertx Reactive routes not working with HTTP2 and POST methods
  * [#46696](https://github.com/quarkusio/quarkus/issues/46696) - Provide clearer error message for encrypted PEM(PKCS#8) Keys in FIPS-enable environments
  * [#53309](https://github.com/quarkusio/quarkus/issues/53309) - [4.0] Rework Cleanup bytecode transformation from NettyProcessor for Netty 4.2
  * [#53525](https://github.com/quarkusio/quarkus/issues/53525) - Add support for Valkey URIs in quarkus-redis-client
  * [#55934](https://github.com/quarkusio/quarkus/pull/55934) - OIDC: drop no-args constructors and field setters and getters in OidcTenantConfig classes
  * [#56547](https://github.com/quarkusio/quarkus/issues/56547) - brotli4j compile dependency in quarkus-vertx-http leaks onto classpath and breaks Apache HttpClient 5
  * [#56595](https://github.com/quarkusio/quarkus/pull/56595) - Do not pause or resume an HTTP/2 request that has already been read
  * [#56601](https://github.com/quarkusio/quarkus/pull/56601) - Explain why an encrypted PEM key could not be decrypted
  * [#56780](https://github.com/quarkusio/quarkus/pull/56780) - Add native SQL queries tutorial for Quarkus Data Hibernate
  * [#56962](https://github.com/quarkusio/quarkus/pull/56962) - Bump Gradle from 9.7.0 to 9.8.0
  * [#57001](https://github.com/quarkusio/quarkus/pull/57001) - Fix Gradle 9.8 conditional dependency resolution
  * [#57028](https://github.com/quarkusio/quarkus/pull/57028) - Recommend mise as well as SDKman
  * [#57107](https://github.com/quarkusio/quarkus/issues/57107) - OpenTelemetry OTLP exporter sends a batch twice when the read idle timeout fires during an export
  * [#57137](https://github.com/quarkusio/quarkus/issues/57137) - Quarkus native forces the SharedArenaSupport flag which makes the build crash if VectorAPISupport is enabled
  * [#57184](https://github.com/quarkusio/quarkus/pull/57184) - Run JDBC driver deregistration twice to catch lazy-initialized drivers
  * [#57238](https://github.com/quarkusio/quarkus/issues/57238) - Testing infinite SSE endpoints hang
  * [#57364](https://github.com/quarkusio/quarkus/pull/57364) - Initialize the Dev UI JSON-RPC router before serving its endpoints
  * [#57374](https://github.com/quarkusio/quarkus/issues/57374) - Netty allocator docs still describe the pooled allocator as the default
  * [#57623](https://github.com/quarkusio/quarkus/issues/57623) - TLS CLI Let's Encrypt commands build wrong management URLs for custom root paths and trailing slashes
  * [#57676](https://github.com/quarkusio/quarkus/issues/57676) - Remove bytecode recorders from: `extensions/smallrye-context-propagation`
  * [#57677](https://github.com/quarkusio/quarkus/issues/57677) - Remove bytecode recorders from: `extensions/smallrye-reactive-messaging-rabbitmq`
  * [#57681](https://github.com/quarkusio/quarkus/pull/57681) - [#57122] Create the RabbitMQ credentials provider link in a service
  * [#57686](https://github.com/quarkusio/quarkus/pull/57686) - [#57122] Set up the context manager in services and create the executors with bean creators
  * [#57702](https://github.com/quarkusio/quarkus/pull/57702) - Fixes Infinispan cache state not cleaned up when a cached method throws
  * [#57725](https://github.com/quarkusio/quarkus/pull/57725) - [#57122] Create the Agroal datasource support and metrics without recorders
  * [#57742](https://github.com/quarkusio/quarkus/issues/57742) - Agent skills do not say which bytecode libraries to use
  * [#57743](https://github.com/quarkusio/quarkus/pull/57743) - Document the bytecode libraries to use in the agent skills
  * [#57757](https://github.com/quarkusio/quarkus/issues/57757) - Remove bytecode recorders from: `extensions/resteasy-reactive/rest-client`
  * [#57781](https://github.com/quarkusio/quarkus/pull/57781) - Add `@TemplateParam` annotation to support CheckedTemplate without -parameters flag
  * [#57794](https://github.com/quarkusio/quarkus/pull/57794) - Revert "Enable reflection-free Jackson serializers by default"
  * [#57823](https://github.com/quarkusio/quarkus/issues/57823) - Malformed JSON request body results in 500 instead of 400 for Vert.x JsonObject/JsonArray, JSON-B and JSON-P bodies
  * [#57825](https://github.com/quarkusio/quarkus/pull/57825) - Return 400 for malformed JSON bound to Vert.x JSON, JSON-B and JSON-P bodies
  * [#57838](https://github.com/quarkusio/quarkus/issues/57838) - REST Client: generated $$CDIWrapper for a generic `@RegisterRestClient` interface keeps undeclared type variables in its method signatures, breaking Hibernate Validator at boot
  * [#57840](https://github.com/quarkusio/quarkus/pull/57840) - Document Netty allocator settings as pooled-only since Netty 4.2
  * [#57851](https://github.com/quarkusio/quarkus/pull/57851) - Bump Hibernate ORM to 8.0.0.Beta4, Reactive to 5.1.0.Beta1, rework Quarkus Data Annotation Processor
  * [#57873](https://github.com/quarkusio/quarkus/issues/57873) - Native container build fails as root with rootful Podman since 3.37 (conflicting --uidmap)
  * [#57876](https://github.com/quarkusio/quarkus/issues/57876) - Guides still load sample data with import.sql, which is now the default schema init script
  * [#57877](https://github.com/quarkusio/quarkus/pull/57877) - Use data.sql instead of import.sql to load sample data in guides
  * [#57884](https://github.com/quarkusio/quarkus/issues/57884) - Tone down Maven Settings parser warnings
  * [#57885](https://github.com/quarkusio/quarkus/issues/57885) - `@TestTransaction` never flushes Hibernate ORM before rolling back
  * [#57889](https://github.com/quarkusio/quarkus/pull/57889) - Avoid `NPE` when generics used on `@RegisterRestClient` interfaces
  * [#57890](https://github.com/quarkusio/quarkus/issues/57890) - Agent skills miss the review rules for recorder conversions and HTTP/2 tests
  * [#57891](https://github.com/quarkusio/quarkus/pull/57891) - Add the review rules for recorder conversions and HTTP/2 tests to the agent skills
  * [#57892](https://github.com/quarkusio/quarkus/pull/57892) - Introduce exempt path to load-shedding
  * [#57895](https://github.com/quarkusio/quarkus/pull/57895) - Use optimized AnnotationLiteral equals when we can
  * [#57899](https://github.com/quarkusio/quarkus/pull/57899) - Bump org.eclipse.microprofile.config:microprofile-config-tck from 3.1.2 to 3.1.3
  * [#57901](https://github.com/quarkusio/quarkus/pull/57901) - Bump flyway.version from 13.10.3 to 13.11.1
  * [#57904](https://github.com/quarkusio/quarkus/issues/57904) - OTLP metrics exporter stalls forever when the connection stays alive (keep-alive) but the Export never responds - not fixed by #47245
  * [#57905](https://github.com/quarkusio/quarkus/pull/57905) - Tree-shaking: keep classes loaded through method type and handle constants, module descriptor provides
  * [#57906](https://github.com/quarkusio/quarkus/issues/57906) - Caffeine 3.3 stops counting puts of completed values in cache_puts_total
  * [#57907](https://github.com/quarkusio/quarkus/pull/57907) - Bump Caffeine to 3.3.1 and count a put of a completed value in the cache stats
  * [#57909](https://github.com/quarkusio/quarkus/pull/57909) - Escape << in javadoc before generating config asciidoc 
  * [#57916](https://github.com/quarkusio/quarkus/pull/57916) - Fix native container build as root with rootful Podman
  * [#57917](https://github.com/quarkusio/quarkus/pull/57917) - OIDC: drop remaining tenant config setters
  * [#57920](https://github.com/quarkusio/quarkus/issues/57920) - `quarkus-loadshedding` does not work without `quarkus-micrometer`
  * [#57921](https://github.com/quarkusio/quarkus/issues/57921) - Quarkus 4 Regression on reflection-free jackson-serializer merge-patch
  * [#57922](https://github.com/quarkusio/quarkus/pull/57922) - Bump GraalVM MINIMUM/CURRENT/MINIMUM_SUPPORTED to 25.0.4 and clean up conditionals
  * [#57926](https://github.com/quarkusio/quarkus/pull/57926) - Bump jacoco.version from 0.8.15 to 0.8.16
  * [#57928](https://github.com/quarkusio/quarkus/pull/57928) - Load Shedding: remove the hard dependency on Micrometer
  * [#57929](https://github.com/quarkusio/quarkus/pull/57929) - Flush all persistence units before rolling back a `@TestTransaction`
  * [#57932](https://github.com/quarkusio/quarkus/pull/57932) - Prevent reflection-free Jackson deserializer to create a new instance on a patch call
  * [#57934](https://github.com/quarkusio/quarkus/pull/57934) - Make sure SharedArchivePathTree has at most one open instance at a time
  * [#57936](https://github.com/quarkusio/quarkus/pull/57936) - Bound each OTLP export attempt with the exporter timeout
  * [#57939](https://github.com/quarkusio/quarkus/issues/57939) - ClassNotFoundException: io.netty.channel.kqueue.KQueueEventLoop stack trace printed during native build on main (Netty 4.2 removed the class)
  * [#57940](https://github.com/quarkusio/quarkus/pull/57940) - Register KQueueIoHandler for runtime init instead of removed KQueueEventLoop
  * [#57948](https://github.com/quarkusio/quarkus/pull/57948) - OIDC: avoid unnecessary copies of config instances
  * [#57950](https://github.com/quarkusio/quarkus/issues/57950) - Native build guides and config reference say the default builder image is `jdk-21`, the code uses `jdk-25`
  * [#57951](https://github.com/quarkusio/quarkus/pull/57951) - Fix Let's Encrypt management URL with custom root path
  * [#57953](https://github.com/quarkusio/quarkus/pull/57953) - Document GraalVM 25 and the jdk-25 builder image tag that the code requires
  * [#57956](https://github.com/quarkusio/quarkus/pull/57956) - Exclude banned jcl-over-slf4j transitive from managed org.apache.sshd:sshd-sftp
  * [#57958](https://github.com/quarkusio/quarkus/pull/57958) - Bump io.micrometer:micrometer-bom from 1.17.1 to 1.17.2
  * [#57960](https://github.com/quarkusio/quarkus/pull/57960) - AOT - Preinitialize a bit more elements
  * [#57961](https://github.com/quarkusio/quarkus/pull/57961) - Quarkus REST - Do not ask ArC for providers that are not beans
  * [#57962](https://github.com/quarkusio/quarkus/pull/57962) - Fix the FT.SEARCH arguments built by QueryArgs
  * [#57963](https://github.com/quarkusio/quarkus/pull/57963) - Move the programmatic setup links to the security overview
  * [#57966](https://github.com/quarkusio/quarkus/pull/57966) - Fix the geo radius arguments when no ordering is set
  * [#57968](https://github.com/quarkusio/quarkus/pull/57968) - Pass the start index to JSON.ARRTRIM from the blocking transactional JSON commands
  * [#57970](https://github.com/quarkusio/quarkus/pull/57970) - Replace sdkman with mise in the GraalVM installation options
  * [#57971](https://github.com/quarkusio/quarkus/pull/57971) - Update SmallRye Config to 4.2.0
  * [#57979](https://github.com/quarkusio/quarkus/pull/57979) - Log Maven settings warnings without a stack trace
  * [#57980](https://github.com/quarkusio/quarkus/pull/57980) - Add support for Valkey URIs in Redis client
  * [#57982](https://github.com/quarkusio/quarkus/issues/57982) - Reactive Routes: valid JSON of the wrong type in a `@Body` parameter results in 500 instead of 400
  * [#57983](https://github.com/quarkusio/quarkus/pull/57983) - Return 400 for JSON of the wrong type in reactive route `@Body` parameters
  * [#57986](https://github.com/quarkusio/quarkus/issues/57986) - Invalid If-Modified-Since or If-Unmodified-Since header results in 500 with Request.evaluatePreconditions()
  * [#57987](https://github.com/quarkusio/quarkus/pull/57987) - Ignore invalid `If-Modified-Since` and `If-Unmodified-Since` headers
  * [#57988](https://github.com/quarkusio/quarkus/issues/57988) - JDBC Dev Services ignore quarkus.devservices.timeout: MySQL container always gives up after 120 s (and retries 3 times)
  * [#57990](https://github.com/quarkusio/quarkus/pull/57990) - Apply quarkus.devservices.timeout to the JDBC wait of MySQL, MariaDB and MSSQL Dev Services
  * [#57991](https://github.com/quarkusio/quarkus/pull/57991) - Fix OIDC token subject check in the local verificaton case
  * [#57992](https://github.com/quarkusio/quarkus/pull/57992) - Correct `@Transactional` execution model documentation for 3.35+
  * [#57995](https://github.com/quarkusio/quarkus/pull/57995) - Upgrade mariadb-java-client to 3.5.11
  * [#57997](https://github.com/quarkusio/quarkus/issues/57997) - Redis pub/sub subscription leaks its connection when UNSUBSCRIBE fails
  * [#57998](https://github.com/quarkusio/quarkus/pull/57998) - Release the Redis pub/sub connection when UNSUBSCRIBE fails
  * [#58000](https://github.com/quarkusio/quarkus/pull/58000) - Bump Microsoft SQL Server JDBC driver to 13.6.2
  * [#58006](https://github.com/quarkusio/quarkus/pull/58006) - Update .sdkmanrc Java version to patched release
  * [#58008](https://github.com/quarkusio/quarkus/pull/58008) - Bump Keycloak version to 26.8.1
  * [#58010](https://github.com/quarkusio/quarkus/pull/58010) - Make Brotli4j an explicit opt-in dependency
  * [#58011](https://github.com/quarkusio/quarkus/pull/58011) - Core - Size the dependents list of a service node from the count it is given
  * [#58012](https://github.com/quarkusio/quarkus/issues/58012) - Restore JPA XML attribute converter test coverage
  * [#58013](https://github.com/quarkusio/quarkus/pull/58013) - Restore JPA XML attribute converter test coverage
  * [#58014](https://github.com/quarkusio/quarkus/pull/58014) - Netty - Read the max direct memory with VM.maxDirectMemory() instead of reflection
  * [#58016](https://github.com/quarkusio/quarkus/issues/58016) - Dead link: http://host.testcontainers.internal:18443/bundle
  * [#58021](https://github.com/quarkusio/quarkus/issues/58021) - Dead link: https://github.com/quarkusio/quarkus-quickstarts/tree/development/stork-programmatic-custom-registration-quickstart
  * [#58023](https://github.com/quarkusio/quarkus/issues/58023) - Dead link: https://infinispan.org/tutorials/simple/simple_tutorials.html
  * [#58024](https://github.com/quarkusio/quarkus/issues/58024) - Dead link: https://jakarta.ee/specifications/cdi/4.1/jakarta-cdi-spec-4.1
  * [#58025](https://github.com/quarkusio/quarkus/issues/58025) - Dead link: https://jakarta.ee/specifications/data/1.0/apidocs/jakarta.data/jakarta/data/repository/repository
  * [#58026](https://github.com/quarkusio/quarkus/issues/58026) - Dead link: https://jakarta.ee/specifications/data/1.0/jakarta-data-1.0
  * [#58027](https://github.com/quarkusio/quarkus/issues/58027) - Dead link: https://jakarta.ee/specifications/data/1.1/jakarta-data-1.1
  * [#58028](https://github.com/quarkusio/quarkus/issues/58028) - Dead link: https://jakarta.ee/specifications/persistence/4.0/apidocs/jakarta.persistence//jakarta/persistence/entity
  * [#58029](https://github.com/quarkusio/quarkus/issues/58029) - Dead link: https://jakarta.ee/specifications/persistence/4.0/jakarta-persistence-spec-4.0
  * [#58031](https://github.com/quarkusio/quarkus/issues/58031) - Dead link: https://smallrye.io/docs/smallrye-fault-tolerance/7.0.0/index.html
  * [#58032](https://github.com/quarkusio/quarkus/issues/58032) - Dead link: https://smallrye.io/docs/smallrye-fault-tolerance/7.0.0/reference/programmatic-api.html
  * [#58034](https://github.com/quarkusio/quarkus/pull/58034) - Correct and update CDI links in the project; update TCK runner to CDI 5.0
  * [#58036](https://github.com/quarkusio/quarkus/pull/58036) - Fix OIDC MemoryCache clearing all entries when it is full
  * [#58037](https://github.com/quarkusio/quarkus/pull/58037) - Fix SmallRye Fault Tolerance documentation links
  * [#58038](https://github.com/quarkusio/quarkus/pull/58038) - Fixes Infinispan dead link to tutorial
  * [#58048](https://github.com/quarkusio/quarkus/pull/58048) - Document that the REST Assured logging on failure blocks tests of endless responses
  * [#58057](https://github.com/quarkusio/quarkus/issues/58057) - Jakarta Data repositories generated by Hibernate leave EntityAgent uninjected
  * [#58058](https://github.com/quarkusio/quarkus/pull/58058) - Support PersistenceAgent resource injection for Hibernate Jakarta Data
  * [#58061](https://github.com/quarkusio/quarkus/pull/58061) - Bump to Vert.x 5.2.3 and Netty 4.2.20.Final
  * [#58068](https://github.com/quarkusio/quarkus/issues/58068) - `kafka-oauth-keycloak` native integration test fails with `--future-defaults=all`
  * [#58071](https://github.com/quarkusio/quarkus/pull/58071) - Service conversion: `rest-client`
  * [#58072](https://github.com/quarkusio/quarkus/pull/58072) - Fix Jakarta specification and Javadoc links
  * [#58077](https://github.com/quarkusio/quarkus/pull/58077) - Remove nonexistent Stork custom registration quickstart link
  * [#58080](https://github.com/quarkusio/quarkus/issues/58080) - [qmain] Kafka native integration tests fail since #58014
  * [#58081](https://github.com/quarkusio/quarkus/pull/58081) - Runtime init Kafka SASL providers when security providers are runtime initialized
  * [#58082](https://github.com/quarkusio/quarkus/pull/58082) - Avoid linking the SPIFFE test bundle endpoint
  * [#58086](https://github.com/quarkusio/quarkus/issues/58086) - PoolCreator.Input exposes only static connect options, breaking credentials-provider refresh for custom pool creators
  * [#58092](https://github.com/quarkusio/quarkus/pull/58092) - Support dynamic credentials in reactive SQL clients
  * [#58093](https://github.com/quarkusio/quarkus/pull/58093) - Fix Netty native configuration when Maven runs on JDK 21
  * [#58095](https://github.com/quarkusio/quarkus/pull/58095) - Use native allocation APIs for the Netty linker cleaner
  * [#58101](https://github.com/quarkusio/quarkus/pull/58101) - Add Javadoc and documentation for PoolCreator.Input dynamic connect options

---

> **Source** [quarkusio/quarkus](https://github.com/quarkusio/quarkus) · `4.0.0.Beta3` · 2026-11-04 · [upstream release](https://github.com/quarkusio/quarkus/releases/tag/4.0.0.Beta3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
