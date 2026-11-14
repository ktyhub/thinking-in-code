---
title: "spring-boot v4.0.8"
project: "spring-boot"
repo: "spring-projects/spring-boot"
tag: "v4.0.8"
version: "v4.0.8"
published: "2026-08-21"
type: "patch"
lang: "en"
summary: "Kafka consumer-specific security protocol is not taken into account #51365 · Temporary file is not deleted when ExportedImageTar construction fails #51117"
---

# spring-boot v4.0.8

## :lady_beetle: Bug Fixes

- Kafka consumer-specific security protocol is not taken into account [#51365](https://github.com/spring-projects/spring-boot/issues/51365)
- Temporary file is not deleted when ExportedImageTar construction fails [#51117](https://github.com/spring-projects/spring-boot/pull/51117)
- spring-boot-h2-console pulls servlet-api as transitive dependency [#51094](https://github.com/spring-projects/spring-boot/issues/51094)
- Methods that return the result of Map#remove are not declared with a `@Nullable` return type [#50972](https://github.com/spring-projects/spring-boot/pull/50972)
- PropertiesLauncher does not log nested archive paths [#50968](https://github.com/spring-projects/spring-boot/pull/50968)
- JarFile is not closed when finding main class from archive [#50949](https://github.com/spring-projects/spring-boot/pull/50949)
- CloudFoundry reactive auto-configuration should not require a WebClient.Builder bean to be defined [#50928](https://github.com/spring-projects/spring-boot/issues/50928)
- Resources are not cleaned up when resolving an image that is not yet present in the builder [#50919](https://github.com/spring-projects/spring-boot/pull/50919)
- Context refresh fails on reactive Cloud Foundry when using Actuator without spring-boot-health [#50916](https://github.com/spring-projects/spring-boot/pull/50916)
- GraphQlWebMvcAutoConfiguration should apply customizers in order [#50908](https://github.com/spring-projects/spring-boot/pull/50908)
- Micrometer registries pin the application context [#50886](https://github.com/spring-projects/spring-boot/pull/50886)
- Context refresh fails when using Actuator on Jersey without spring-boot-health [#50858](https://github.com/spring-projects/spring-boot/pull/50858)
- Context refresh fails on Cloud Foundry when using Actuator without spring-boot-health [#50857](https://github.com/spring-projects/spring-boot/pull/50857)
- IllegalStateException when binding properties to a `@Validated` class that contains a map whose value type is a wildcard [#50798](https://github.com/spring-projects/spring-boot/pull/50798)
- Setting 'server.servlet.session.cookie.partitioned' to false still emits the 'Partitioned' cookie attribute [#50781](https://github.com/spring-projects/spring-boot/pull/50781)
- Application-managed JUL bridge handler should only be removed if installed [#50779](https://github.com/spring-projects/spring-boot/pull/50779)
- Inconsistent handling of empty string values of spring.security.oauth2.resourceserver.jwt issuer-uri and jwk-set-uri [#50755](https://github.com/spring-projects/spring-boot/pull/50755)
- PropertiesWebClientHttpServiceGroupConfigurer has highest precedence, preventing other configurers from being ordered ahead of it [#50737](https://github.com/spring-projects/spring-boot/pull/50737)
- High number of connections due to Mongo health indicator [#50734](https://github.com/spring-projects/spring-boot/pull/50734)
- Return type nullability of ApplicationContextAssert's getBean methods does not indicate that bean may be null [#50701](https://github.com/spring-projects/spring-boot/pull/50701)
- NativeImageResourceProvider flattens Flyway migration paths in subdirectories [#50433](https://github.com/spring-projects/spring-boot/pull/50433)
- Fix ordering of Kotlinx Serialization CodecCustomizer [#50428](https://github.com/spring-projects/spring-boot/pull/50428)
- Metadata annotation processor ignores getter-level `@NestedConfigurationProperty` for records [#50096](https://github.com/spring-projects/spring-boot/issues/50096)

## :notebook_with_decorative_cover: Documentation

- spring.profiles.group should have a 'spring-profile-name' hint provider [#51273](https://github.com/spring-projects/spring-boot/issues/51273)
- Remove reference to removed InfluxDB auto-configuration [#51172](https://github.com/spring-projects/spring-boot/pull/51172)
- Use JacksonJsonSerde in Kafka Streams documentation [#51152](https://github.com/spring-projects/spring-boot/pull/51152)
- Document alternatives to HttpMessageConverters [#51124](https://github.com/spring-projects/spring-boot/pull/51124)
- Caching documentation refers to AutoConfigureCache by its pre-4.0 package [#51111](https://github.com/spring-projects/spring-boot/pull/51111)
- Metadata for spring.test.mockmvc.htmlunit.url declares the wrong type [#51110](https://github.com/spring-projects/spring-boot/pull/51110)
- Fix examples in Metadata Format documentation chapter [#51097](https://github.com/spring-projects/spring-boot/pull/51097)
- Improve discoverability of the AOT Cache How-to guides [#50996](https://github.com/spring-projects/spring-boot/issues/50996)
- Table of auto-configured HealthIndicators lists the wrong key for MongoHealthIndicator [#50931](https://github.com/spring-projects/spring-boot/pull/50931)
- Update OpenTelemetryResourceAttributes documentation [#50867](https://github.com/spring-projects/spring-boot/pull/50867)
- Fix `@Value` placeholder syntax in external config docs [#50859](https://github.com/spring-projects/spring-boot/pull/50859)
- Refer to spring-boot-starter-webmvc, not deprecated spring-boot-starter-web [#50842](https://github.com/spring-projects/spring-boot/pull/50842)
- Fix forwarded headers property in cloud deployment docs [#50841](https://github.com/spring-projects/spring-boot/pull/50841)
- Fix duplicate word typos in documentation [#50738](https://github.com/spring-projects/spring-boot/pull/50738)

## :hammer: Dependency Upgrades

- Upgrade to CycloneDX Maven Plugin 2.9.3 [#51178](https://github.com/spring-projects/spring-boot/issues/51178)
- Upgrade to DB2 JDBC 12.1.5.0 [#50977](https://github.com/spring-projects/spring-boot/issues/50977)
- Upgrade to [Elasticsearch Client 9.2.9](https://www.elastic.co/docs/release-notes/elasticsearch/clients/java/9-2-9) [#51366](https://github.com/spring-projects/spring-boot/issues/51366)
- Upgrade to Groovy 5.0.8 [#51179](https://github.com/spring-projects/spring-boot/issues/51179)
- Upgrade to Hibernate 7.2.24.Final [#51180](https://github.com/spring-projects/spring-boot/issues/51180)
- Upgrade to [Jackson 2 Bom 2.21.5](https://github.com/FasterXML/jackson/wiki/Jackson-Release-2.21.5) [#50980](https://github.com/spring-projects/spring-boot/issues/50980)
- Upgrade to [Jackson Bom 3.1.5](https://github.com/FasterXML/jackson/wiki/Jackson-Release-3.1.5) [#50981](https://github.com/spring-projects/spring-boot/issues/50981)
- Upgrade to Jetty 12.1.12 [#51298](https://github.com/spring-projects/spring-boot/issues/51298)
- Upgrade to jOOQ 3.19.37 [#51299](https://github.com/spring-projects/spring-boot/issues/51299)
- Upgrade to [JSpecify 1.0.1](https://github.com/jspecify/jspecify/releases/tag/v1.0.1) [#51181](https://github.com/spring-projects/spring-boot/issues/51181)
- Upgrade to [Log4j2 2.25.5](https://github.com/apache/logging-log4j2/releases/tag/rel%2F2.25.5) [#50984](https://github.com/spring-projects/spring-boot/issues/50984)
- Upgrade to Logback 1.5.38 [#50985](https://github.com/spring-projects/spring-boot/issues/50985)
- Upgrade to MariaDB 3.5.10 [#51182](https://github.com/spring-projects/spring-boot/issues/51182)
- Upgrade to Maven Help Plugin 3.5.2 [#50987](https://github.com/spring-projects/spring-boot/issues/50987)
- Upgrade to [Micrometer 1.16.7](https://github.com/micrometer-metrics/micrometer/releases/tag/v1.16.7) [#51235](https://github.com/spring-projects/spring-boot/issues/51235)
- Upgrade to [Micrometer Tracing 1.6.7](https://github.com/micrometer-metrics/tracing/releases/tag/v1.6.7) [#51236](https://github.com/spring-projects/spring-boot/issues/51236)
- Upgrade to Netty 4.2.17.Final [#51300](https://github.com/spring-projects/spring-boot/issues/51300)
- Upgrade to [Postgresql 42.7.13](https://github.com/pgjdbc/pgjdbc/releases/tag/REL42.7.13) [#50989](https://github.com/spring-projects/spring-boot/issues/50989)
- Upgrade to [R2DBC MariaDB 1.3.1](https://github.com/mariadb-corporation/mariadb-connector-r2dbc/releases/tag/1.3.1) [#50990](https://github.com/spring-projects/spring-boot/issues/50990)
- Upgrade to [R2DBC MSSQL 1.0.5.RELEASE](https://github.com/r2dbc/r2dbc-mssql/releases/tag/v1.0.5.RELEASE) [#50991](https://github.com/spring-projects/spring-boot/issues/50991)
- Upgrade to [R2DBC MySQL 1.4.3](https://github.com/asyncer-io/r2dbc-mysql/releases/tag/r2dbc-mysql-1.4.3) [#51183](https://github.com/spring-projects/spring-boot/issues/51183)
- Upgrade to [R2DBC Postgresql 1.1.2.RELEASE](https://github.com/pgjdbc/r2dbc-postgresql/releases/tag/v1.1.2.RELEASE) [#50992](https://github.com/spring-projects/spring-boot/issues/50992)
- Upgrade to [Reactor Bom 2025.0.7](https://github.com/reactor/reactor/releases/tag/2025.0.7) [#51237](https://github.com/spring-projects/spring-boot/issues/51237)
- Upgrade to [Spring AMQP 4.0.5](https://github.com/spring-projects/spring-amqp/releases/tag/v4.0.5) [#51238](https://github.com/spring-projects/spring-boot/issues/51238)
- Upgrade to [Spring Batch 6.0.5](https://github.com/spring-projects/spring-batch/releases/tag/v6.0.5) [#51239](https://github.com/spring-projects/spring-boot/issues/51239)
- Upgrade to [Spring Data Bom 2025.1.7](https://github.com/spring-projects/spring-data-bom/releases/tag/2025.1.7) [#51355](https://github.com/spring-projects/spring-boot/issues/51355)
- Upgrade to [Spring Framework 7.0.9](https://github.com/spring-projects/spring-framework/releases/tag/v7.0.9) [#51240](https://github.com/spring-projects/spring-boot/issues/51240)
- Upgrade to [Spring GraphQL 2.0.5](https://github.com/spring-projects/spring-graphql/releases/tag/v2.0.5) [#51241](https://github.com/spring-projects/spring-boot/issues/51241)
- Upgrade to [Spring HATEOAS 3.0.5](https://github.com/spring-projects/spring-hateoas/releases/tag/3.0.5) [#51356](https://github.com/spring-projects/spring-boot/issues/51356)
- Upgrade to [Spring Integration 7.0.6](https://github.com/spring-projects/spring-integration/releases/tag/v7.0.6) [#51242](https://github.com/spring-projects/spring-boot/issues/51242)
- Upgrade to [Spring Kafka 4.0.7](https://github.com/spring-projects/spring-kafka/releases/tag/v4.0.7) [#51243](https://github.com/spring-projects/spring-boot/issues/51243)
- Upgrade to [Spring LDAP 4.0.5](https://github.com/spring-projects/spring-ldap/releases/tag/4.0.5) [#51244](https://github.com/spring-projects/spring-boot/issues/51244)
- Upgrade to [Spring Pulsar 2.0.7](https://github.com/spring-projects/spring-pulsar/releases/tag/v2.0.7) [#51327](https://github.com/spring-projects/spring-boot/issues/51327)
- Upgrade to [Spring Security 7.0.7](https://github.com/spring-projects/spring-security/releases/tag/7.0.7) [#51245](https://github.com/spring-projects/spring-boot/issues/51245)
- Upgrade to [Spring Session 4.0.5](https://github.com/spring-projects/spring-session/releases/tag/4.0.5) [#51246](https://github.com/spring-projects/spring-boot/issues/51246)
- Upgrade to [Tomcat 11.0.24](https://tomcat.apache.org/tomcat-11.0-doc/changelog.html) [#50993](https://github.com/spring-projects/spring-boot/issues/50993)
- Upgrade to [UnboundID LDAPSDK 7.0.5](https://github.com/pingidentity/ldapsdk/releases/tag/7.0.5) [#50994](https://github.com/spring-projects/spring-boot/issues/50994)
- Upgrade to WebJars Locator Lite 1.1.4 [#50995](https://github.com/spring-projects/spring-boot/issues/50995)
- Upgrade to [Yasson 3.0.5](https://github.com/eclipse-ee4j/yasson/releases/tag/3.0.5) [#51301](https://github.com/spring-projects/spring-boot/issues/51301)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@DragonFSKY, @LordKay-sudo, @MacAlsandair, @SJvaca30, @SebTardif, @codingkiddo, @dhruv-15-03, @dlwldnjs1009, @dmitrysulman, @doehyunbaek, @filiphr, @msridhar, @ngocnhan-tran1996, @nosan, @quaff, @scordio, @seonwooj0810, @vipi-n, @vvzvvv, @wantaekchoi, @xfocus3, and @yamamoto-ehhMH

---

> **Source** [spring-projects/spring-boot](https://github.com/spring-projects/spring-boot) · `v4.0.8` · 2026-08-21 · [upstream release](https://github.com/spring-projects/spring-boot/releases/tag/v4.0.8)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
