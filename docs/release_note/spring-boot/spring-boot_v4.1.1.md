---
title: "spring-boot v4.1.1"
project: "spring-boot"
repo: "spring-projects/spring-boot"
tag: "v4.1.1"
version: "v4.1.1"
published: "2026-08-20"
type: "patch"
lang: "en"
summary: "Thank you to all the contributors who worked on this release:"
---

# spring-boot v4.1.1

## :warning: Attention Required

- Spring Boot's Gradle plugin no longer automatically configures gRPC when the Protobuf plugin is applied. This behavior caused problems for those using Protobuf without gRPC. To opt in to the configuration of gRPC, configure the `protobuf` extension with the `grpc` plugin using an empty block. The Spring Boot Gradle plugin will then automatically configure the use of `protoc-gen-grpc-java` as before. [#50822](https://github.com/spring-projects/spring-boot/issues/50822)

## :lady_beetle: Bug Fixes

- Kafka consumer-specific security protocol is not taken into account [#51369](https://github.com/spring-projects/spring-boot/issues/51369)
- Structured logging: a failed JSON encode corrupts the next log event written on the same thread [#51156](https://github.com/spring-projects/spring-boot/pull/51156)
- Micrometer registries pin the application context [#51135](https://github.com/spring-projects/spring-boot/issues/51135)
- Temporary file is not deleted when ExportedImageTar construction fails [#51132](https://github.com/spring-projects/spring-boot/issues/51132)
- Metadata annotation processor ignores getter-level `@NestedConfigurationProperty` for records [#51098](https://github.com/spring-projects/spring-boot/issues/51098)
- spring-boot-h2-console pulls servlet-api as transitive dependency [#51095](https://github.com/spring-projects/spring-boot/issues/51095)
- PropertiesLauncher does not log nested archive paths [#51089](https://github.com/spring-projects/spring-boot/issues/51089)
- Methods that return the result of Map#remove are not declared with a `@Nullable` return type [#51087](https://github.com/spring-projects/spring-boot/issues/51087)
- NativeImageResourceProvider flattens Flyway migration paths in subdirectories [#50964](https://github.com/spring-projects/spring-boot/issues/50964)
- Fix ordering of Kotlinx Serialization CodecCustomizer [#50961](https://github.com/spring-projects/spring-boot/issues/50961)
- JarFile is not closed when finding main class from archive [#50959](https://github.com/spring-projects/spring-boot/issues/50959)
- Application-managed JUL bridge handler should only be removed if installed [#50950](https://github.com/spring-projects/spring-boot/issues/50950)
- CloudFoundry reactive auto-configuration should not require a WebClient.Builder bean to be defined [#50944](https://github.com/spring-projects/spring-boot/issues/50944)
- Context refresh fails on reactive Cloud Foundry when using Actuator without spring-boot-health [#50942](https://github.com/spring-projects/spring-boot/issues/50942)
- Resources are not cleaned up when resolving an image that is not yet present in the builder [#50941](https://github.com/spring-projects/spring-boot/issues/50941)
- GraphQlWebMvcAutoConfiguration should apply customizers in order [#50914](https://github.com/spring-projects/spring-boot/issues/50914)
- Auto-configured RedisMessageListenerContainer does not use virtual threads when spring.threads.virtual.enabled is true [#50884](https://github.com/spring-projects/spring-boot/issues/50884)
- Context refresh fails when using Actuator on Jersey without spring-boot-health [#50872](https://github.com/spring-projects/spring-boot/issues/50872)
- Context refresh fails on Cloud Foundry when using Actuator without spring-boot-health [#50871](https://github.com/spring-projects/spring-boot/issues/50871)
- IllegalStateException when binding properties to a `@Validated` class that contains a map whose value type is a wildcard [#50856](https://github.com/spring-projects/spring-boot/issues/50856)
- High number of connections due to Mongo health indicator [#50852](https://github.com/spring-projects/spring-boot/issues/50852)
- Inconsistent handling of empty string values of spring.security.oauth2.resourceserver.jwt issuer-uri and jwk-set-uri [#50849](https://github.com/spring-projects/spring-boot/issues/50849)
- Return type nullability of ApplicationContextAssert's getBean methods does not indicate that bean may be null [#50845](https://github.com/spring-projects/spring-boot/issues/50845)
- PropertiesWebClientHttpServiceGroupConfigurer has highest precedence, preventing other configurers from being ordered ahead of it [#50843](https://github.com/spring-projects/spring-boot/issues/50843)
- Exposing gRPC test server port should backoff if gRPC is not present [#50825](https://github.com/spring-projects/spring-boot/issues/50825)
- JpaBaseConfiguration#entityManagerConfiguration can cause a dependency loop on beans declaring AsyncTaskExecutor [#50801](https://github.com/spring-projects/spring-boot/pull/50801)
- spring.grpc.server.health.include-overall-health is not taken into account [#50799](https://github.com/spring-projects/spring-boot/pull/50799)
- Setting 'server.servlet.session.cookie.partitioned' to false still emits the 'Partitioned' cookie attribute [#50790](https://github.com/spring-projects/spring-boot/issues/50790)
- Managed version of Prometheus Client is not aligned with Micrometer's micrometer-registry-prometheus [#50780](https://github.com/spring-projects/spring-boot/issues/50780)
- Map properties bound from empty strings fail with ConverterNotFoundException [#50773](https://github.com/spring-projects/spring-boot/pull/50773)
- Protobuf Common Protos should not be a managed dependency [#50772](https://github.com/spring-projects/spring-boot/issues/50772)
- An application that depends on spring-boot-security-oauth2-resource-server may fail to start with a ClassNotFoundException when Reactor is on the classpath but WebFlux is not [#50764](https://github.com/spring-projects/spring-boot/issues/50764)
- W3CHeaderParser's decoding is not compliant with RFC 3986 [#50650](https://github.com/spring-projects/spring-boot/pull/50650)

## :notebook_with_decorative_cover: Documentation

- Description of spring.graphql.websocket.connection-init-timeout does not render correctly in the reference guide [#51348](https://github.com/spring-projects/spring-boot/pull/51348)
- spring.profiles.group should have a 'spring-profile-name' hint provider [#51284](https://github.com/spring-projects/spring-boot/issues/51284)
- Remove reference to removed InfluxDB auto-configuration [#51176](https://github.com/spring-projects/spring-boot/issues/51176)
- Use JacksonJsonSerde in Kafka Streams documentation [#51161](https://github.com/spring-projects/spring-boot/issues/51161)
- Document alternatives to HttpMessageConverters [#51129](https://github.com/spring-projects/spring-boot/issues/51129)
- Fix stale type reference for OTLP logging transport metadata [#51119](https://github.com/spring-projects/spring-boot/pull/51119)
- Metadata for spring.test.mockmvc.htmlunit.url declares the wrong type [#51115](https://github.com/spring-projects/spring-boot/issues/51115)
- Caching documentation refers to AutoConfigureCache by its pre-4.0 package [#51113](https://github.com/spring-projects/spring-boot/issues/51113)
- Fix examples in Metadata Format documentation chapter [#51102](https://github.com/spring-projects/spring-boot/issues/51102)
- Improve discoverability of the AOT Cache How-to guides [#51000](https://github.com/spring-projects/spring-boot/issues/51000)
- Table of auto-configured HealthIndicators lists the wrong key for MongoHealthIndicator [#50940](https://github.com/spring-projects/spring-boot/issues/50940)
- Update OpenTelemetryResourceAttributes documentation [#50874](https://github.com/spring-projects/spring-boot/issues/50874)
- Fix `@Value` placeholder syntax in external config docs [#50873](https://github.com/spring-projects/spring-boot/issues/50873)
- Polish gRPC documentation [#50863](https://github.com/spring-projects/spring-boot/pull/50863)
- Fix duplicate word typos in documentation [#50850](https://github.com/spring-projects/spring-boot/issues/50850)
- Fix forwarded headers property in cloud deployment docs [#50848](https://github.com/spring-projects/spring-boot/issues/50848)
- Refer to spring-boot-starter-webmvc, not deprecated spring-boot-starter-web [#50847](https://github.com/spring-projects/spring-boot/issues/50847)
- Fix documentation inconsistencies [#50800](https://github.com/spring-projects/spring-boot/pull/50800)
- Add Spring gRPC properties to Common Application Properties referrence [#50789](https://github.com/spring-projects/spring-boot/pull/50789)
- Document OTLP SSL service connections [#50782](https://github.com/spring-projects/spring-boot/pull/50782)
- Update docs for changes to optional property binding and JPA repositories bootstrap mode [#50759](https://github.com/spring-projects/spring-boot/pull/50759)

## :hammer: Dependency Upgrades

- Upgrade to ActiveMQ 6.2.9 [#51329](https://github.com/spring-projects/spring-boot/issues/51329)
- Upgrade to [Byte Buddy 1.18.11](https://github.com/raphw/byte-buddy/releases/tag/byte-buddy-1.18.11) [#51003](https://github.com/spring-projects/spring-boot/issues/51003)
- Upgrade to CycloneDX Maven Plugin 2.9.3 [#51185](https://github.com/spring-projects/spring-boot/issues/51185)
- Upgrade to DB2 JDBC 12.1.5.0 [#51005](https://github.com/spring-projects/spring-boot/issues/51005)
- Upgrade to Elasticsearch Client 9.4.5 [#51368](https://github.com/spring-projects/spring-boot/issues/51368)
- Upgrade to Groovy 5.0.8 [#51186](https://github.com/spring-projects/spring-boot/issues/51186)
- Upgrade to Grpc Java 1.81.1 [#51263](https://github.com/spring-projects/spring-boot/issues/51263)
- Upgrade to [Grpc Java 1.83.1](https://github.com/grpc/grpc-java/releases/tag/v1.83.1) [#51361](https://github.com/spring-projects/spring-boot/issues/51361)
- Upgrade to [Hibernate 7.4.5.Final](https://github.com/hibernate/hibernate-orm/releases/tag/7.4.5) [#51007](https://github.com/spring-projects/spring-boot/issues/51007)
- Upgrade to Hibernate Validator 9.1.3.Final [#51187](https://github.com/spring-projects/spring-boot/issues/51187)
- Upgrade to HttpClient5 5.6.4 [#51330](https://github.com/spring-projects/spring-boot/issues/51330)
- Upgrade to HttpCore5 5.4.3 [#51010](https://github.com/spring-projects/spring-boot/issues/51010)
- Upgrade to [Jackson 2 Bom 2.21.5](https://github.com/FasterXML/jackson/wiki/Jackson-Release-2.21.5) [#51011](https://github.com/spring-projects/spring-boot/issues/51011)
- Upgrade to [Jackson Bom 3.1.5](https://github.com/FasterXML/jackson/wiki/Jackson-Release-3.1.5) [#51012](https://github.com/spring-projects/spring-boot/issues/51012)
- Upgrade to Jetty 12.1.12 [#51302](https://github.com/spring-projects/spring-boot/issues/51302)
- Upgrade to jOOQ 3.21.7 [#51303](https://github.com/spring-projects/spring-boot/issues/51303)
- Upgrade to [JSpecify 1.0.1](https://github.com/jspecify/jspecify/releases/tag/v1.0.1) [#51189](https://github.com/spring-projects/spring-boot/issues/51189)
- Upgrade to [Log4j2 2.25.5](https://github.com/apache/logging-log4j2/releases/tag/rel%2F2.25.5) [#51015](https://github.com/spring-projects/spring-boot/issues/51015)
- Upgrade to Logback 1.5.38 [#51016](https://github.com/spring-projects/spring-boot/issues/51016)
- Upgrade to MariaDB 3.5.10 [#51190](https://github.com/spring-projects/spring-boot/issues/51190)
- Upgrade to Maven Help Plugin 3.5.2 [#51018](https://github.com/spring-projects/spring-boot/issues/51018)
- Upgrade to [Maven Jar Plugin 3.5.1](https://github.com/apache/maven-jar-plugin/releases/tag/maven-jar-plugin-3.5.1) [#51191](https://github.com/spring-projects/spring-boot/issues/51191)
- Upgrade to [Micrometer 1.17.1](https://github.com/micrometer-metrics/micrometer/releases/tag/v1.17.1) [#51251](https://github.com/spring-projects/spring-boot/issues/51251)
- Upgrade to [Micrometer Tracing 1.7.1](https://github.com/micrometer-metrics/tracing/releases/tag/v1.7.1) [#51252](https://github.com/spring-projects/spring-boot/issues/51252)
- Upgrade to [MongoDB 5.8.1](https://github.com/mongodb/mongo-java-driver/releases/tag/r5.8.1) [#51360](https://github.com/spring-projects/spring-boot/issues/51360)
- Upgrade to Native Build Tools Plugin 1.1.4 [#50947](https://github.com/spring-projects/spring-boot/issues/50947)
- Upgrade to Native Build Tools Plugin 1.1.8 [#51304](https://github.com/spring-projects/spring-boot/issues/51304)
- Upgrade to Netty 4.2.17.Final [#51305](https://github.com/spring-projects/spring-boot/issues/51305)
- Upgrade to Oracle Database 23.26.3.0.0 [#51193](https://github.com/spring-projects/spring-boot/issues/51193)
- Upgrade to Pooled JMS 3.2.3 [#51196](https://github.com/spring-projects/spring-boot/issues/51196)
- Upgrade to [Postgresql 42.7.13](https://github.com/pgjdbc/pgjdbc/releases/tag/REL42.7.13) [#51022](https://github.com/spring-projects/spring-boot/issues/51022)
- Upgrade to Protobuf Java 4.35.1 [#51264](https://github.com/spring-projects/spring-boot/issues/51264)
- Upgrade to Protobuf Maven Plugin 5.1.8 [#51331](https://github.com/spring-projects/spring-boot/issues/51331)
- Upgrade to Pulsar 4.2.4 [#51306](https://github.com/spring-projects/spring-boot/issues/51306)
- Upgrade to [R2DBC MariaDB 1.4.1](https://github.com/mariadb-corporation/mariadb-connector-r2dbc/releases/tag/1.4.1) [#51024](https://github.com/spring-projects/spring-boot/issues/51024)
- Upgrade to [R2DBC MSSQL 1.0.5.RELEASE](https://github.com/r2dbc/r2dbc-mssql/releases/tag/v1.0.5.RELEASE) [#51025](https://github.com/spring-projects/spring-boot/issues/51025)
- Upgrade to [R2DBC MySQL 1.4.3](https://github.com/asyncer-io/r2dbc-mysql/releases/tag/r2dbc-mysql-1.4.3) [#51194](https://github.com/spring-projects/spring-boot/issues/51194)
- Upgrade to [R2DBC Postgresql 1.1.2.RELEASE](https://github.com/pgjdbc/r2dbc-postgresql/releases/tag/v1.1.2.RELEASE) [#51026](https://github.com/spring-projects/spring-boot/issues/51026)
- Upgrade to [Reactor Bom 2025.0.7](https://github.com/reactor/reactor/releases/tag/2025.0.7) [#51253](https://github.com/spring-projects/spring-boot/issues/51253)
- Upgrade to [Spring AMQP 4.1.1](https://github.com/spring-projects/spring-amqp/releases/tag/v4.1.1) [#51254](https://github.com/spring-projects/spring-boot/issues/51254)
- Upgrade to [Spring Batch 6.0.5](https://github.com/spring-projects/spring-batch/releases/tag/v6.0.5) [#51255](https://github.com/spring-projects/spring-boot/issues/51255)
- Upgrade to [Spring Data Bom 2026.0.1](https://github.com/spring-projects/spring-data-bom/releases/tag/2026.0.1) [#51357](https://github.com/spring-projects/spring-boot/issues/51357)
- Upgrade to [Spring Framework 7.0.9](https://github.com/spring-projects/spring-framework/releases/tag/v7.0.9) [#51256](https://github.com/spring-projects/spring-boot/issues/51256)
- Upgrade to [Spring GraphQL 2.0.5](https://github.com/spring-projects/spring-graphql/releases/tag/v2.0.5) [#51257](https://github.com/spring-projects/spring-boot/issues/51257)
- Upgrade to [Spring gRPC 1.1.1](https://github.com/spring-projects/spring-grpc/releases/tag/v1.1.1) [#51171](https://github.com/spring-projects/spring-boot/issues/51171)
- Upgrade to [Spring HATEOAS 3.1.2](https://github.com/spring-projects/spring-hateoas/releases/tag/3.1.2) [#51358](https://github.com/spring-projects/spring-boot/issues/51358)
- Upgrade to [Spring Integration 7.1.1](https://github.com/spring-projects/spring-integration/releases/tag/v7.1.1) [#51258](https://github.com/spring-projects/spring-boot/issues/51258)
- Upgrade to [Spring Kafka 4.1.1](https://github.com/spring-projects/spring-kafka/releases/tag/v4.1.1) [#51259](https://github.com/spring-projects/spring-boot/issues/51259)
- Upgrade to [Spring LDAP 4.1.1](https://github.com/spring-projects/spring-ldap/releases/tag/4.1.1) [#51260](https://github.com/spring-projects/spring-boot/issues/51260)
- Upgrade to [Spring Pulsar 2.0.7](https://github.com/spring-projects/spring-pulsar/releases/tag/v2.0.7) [#51328](https://github.com/spring-projects/spring-boot/issues/51328)
- Upgrade to [Spring Security 7.1.1](https://github.com/spring-projects/spring-security/releases/tag/7.1.1) [#51261](https://github.com/spring-projects/spring-boot/issues/51261)
- Upgrade to [Spring Session 4.1.1](https://github.com/spring-projects/spring-session/releases/tag/4.1.1) [#51262](https://github.com/spring-projects/spring-boot/issues/51262)
- Upgrade to [SQLite JDBC 3.53.2.1](https://github.com/xerial/sqlite-jdbc/releases/tag/3.53.2.1) [#51195](https://github.com/spring-projects/spring-boot/issues/51195)
- Upgrade to [Tomcat 11.0.24](https://tomcat.apache.org/tomcat-11.0-doc/changelog.html) [#51027](https://github.com/spring-projects/spring-boot/issues/51027)
- Upgrade to [UnboundID LDAPSDK 7.0.5](https://github.com/pingidentity/ldapsdk/releases/tag/7.0.5) [#51028](https://github.com/spring-projects/spring-boot/issues/51028)
- Upgrade to WebJars Locator Lite 1.1.4 [#51029](https://github.com/spring-projects/spring-boot/issues/51029)
- Upgrade to [Yasson 3.0.5](https://github.com/eclipse-ee4j/yasson/releases/tag/3.0.5) [#51307](https://github.com/spring-projects/spring-boot/issues/51307)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@DragonFSKY, @LordKay-sudo, @MacAlsandair, @SJvaca30, @SebTardif, @SimonVerhoeven, @codingkiddo, @dhruv-15-03, @dlwldnjs1009, @dmitrysulman, @doehyunbaek, @filiphr, @msridhar, @ngocnhan-tran1996, @nosan, @ns3154, @quaff, @scordio, @seonwooj0810, @skdas20, @vipi-n, @vvzvvv, @wantaekchoi, @xfocus3, and @yamamoto-ehhMH

---

> **Source** [spring-projects/spring-boot](https://github.com/spring-projects/spring-boot) · `v4.1.1` · 2026-08-20 · [upstream release](https://github.com/spring-projects/spring-boot/releases/tag/v4.1.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
