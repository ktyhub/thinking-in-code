---
title: "spring-boot v4.2.0-M1"
project: "spring-boot"
repo: "spring-projects/spring-boot"
tag: "v4.2.0-M1"
published: "2026-08-20"
type: "pre"
lang: "en"
summary: "Thank you to all the contributors who worked on this release:"
---

# spring-boot v4.2.0-M1

## :star: New Features

- Refine Forwarded headers configuration for Jetty servers [#51148](https://github.com/spring-projects/spring-boot/issues/51148)
- Disable Micrometer global registry in tests by default [#51142](https://github.com/spring-projects/spring-boot/pull/51142)
- Use GracefulHandler rather than StatisticsHandler to coordinate graceful shutdown of Jetty [#51128](https://github.com/spring-projects/spring-boot/pull/51128)
- Deprecate RestTemplate support [#51118](https://github.com/spring-projects/spring-boot/issues/51118)
- Update properties for forwarded headers to adapt to Reactor Netty changes [#51031](https://github.com/spring-projects/spring-boot/issues/51031)
- Update properties for forwarded headers to adapt to Spring Framework changes [#51030](https://github.com/spring-projects/spring-boot/issues/51030)
- Remove APIs that were deprecated for removal in 4.2 [#50955](https://github.com/spring-projects/spring-boot/issues/50955)
- Add support for image-based build caches [#50899](https://github.com/spring-projects/spring-boot/pull/50899)
- Provide plugin management for hibernate-maven-plugin [#50892](https://github.com/spring-projects/spring-boot/pull/50892)
- Support timeout option in RetryPolicySettings [#50891](https://github.com/spring-projects/spring-boot/pull/50891)
- Add self-reference to ApplicationContextAssertProvider [#50500](https://github.com/spring-projects/spring-boot/pull/50500)
- Add configuration property for leaveGroupOnClose in Kafka Streams [#50432](https://github.com/spring-projects/spring-boot/pull/50432)
- Expose Path getters on ApplicationHome and ApplicationTemp [#50194](https://github.com/spring-projects/spring-boot/pull/50194)
- Introduce RabbitMQ AMQP 1.0 client support [#49857](https://github.com/spring-projects/spring-boot/issues/49857)
- Introduce Generic AMQP 1.0 client support [#49678](https://github.com/spring-projects/spring-boot/issues/49678)
- Rename spring-boot-amqp to spring-boot-rabbitmq [#49677](https://github.com/spring-projects/spring-boot/issues/49677)
- Add support for AMQP 1.0 [#49619](https://github.com/spring-projects/spring-boot/issues/49619)
- Deprecate TestRestTemplate in favor of RestTestClient [#46632](https://github.com/spring-projects/spring-boot/issues/46632)
- Take target/test-classes into account when spring-boot.run.useTestClasspath is in effect [#36115](https://github.com/spring-projects/spring-boot/issues/36115)

## :lady_beetle: Bug Fixes

- Structured logging: a failed JSON encode corrupts the next log event written on the same thread [#51371](https://github.com/spring-projects/spring-boot/issues/51371)
- Kafka consumer-specific security protocol is not taken into account [#51370](https://github.com/spring-projects/spring-boot/issues/51370)
- Exposing gRPC test server port should backoff if gRPC is not present [#51291](https://github.com/spring-projects/spring-boot/issues/51291)
- Micrometer registries pin the application context [#51136](https://github.com/spring-projects/spring-boot/issues/51136)
- Temporary file is not deleted when ExportedImageTar construction fails [#51133](https://github.com/spring-projects/spring-boot/issues/51133)
- spring.grpc.server.health.include-overall-health is not taken into account [#51106](https://github.com/spring-projects/spring-boot/issues/51106)
- Metadata annotation processor ignores getter-level `@NestedConfigurationProperty` for records [#51099](https://github.com/spring-projects/spring-boot/issues/51099)
- spring-boot-h2-console pulls servlet-api as transitive dependency [#51096](https://github.com/spring-projects/spring-boot/issues/51096)
- PropertiesLauncher does not log nested archive paths [#51090](https://github.com/spring-projects/spring-boot/issues/51090)
- Methods that return the result of Map#remove are not declared with a `@Nullable` return type [#51088](https://github.com/spring-projects/spring-boot/issues/51088)
- NativeImageResourceProvider flattens Flyway migration paths in subdirectories [#50965](https://github.com/spring-projects/spring-boot/issues/50965)
- Fix ordering of Kotlinx Serialization CodecCustomizer [#50962](https://github.com/spring-projects/spring-boot/issues/50962)
- JarFile is not closed when finding main class from archive [#50960](https://github.com/spring-projects/spring-boot/issues/50960)

## :notebook_with_decorative_cover: Documentation

- Description of spring.graphql.websocket.connection-init-timeout does not render correctly in the reference guide [#51364](https://github.com/spring-projects/spring-boot/issues/51364)
- spring.profiles.group should have a 'spring-profile-name' hint provider [#51285](https://github.com/spring-projects/spring-boot/issues/51285)
- Remove reference to removed InfluxDB auto-configuration [#51177](https://github.com/spring-projects/spring-boot/issues/51177)
- Use JacksonJsonSerde in Kafka Streams documentation [#51162](https://github.com/spring-projects/spring-boot/issues/51162)
- Document alternatives to HttpMessageConverters [#51130](https://github.com/spring-projects/spring-boot/issues/51130)
- Fix stale type reference for OTLP logging transport metadata [#51126](https://github.com/spring-projects/spring-boot/issues/51126)
- Metadata for spring.test.mockmvc.htmlunit.url declares the wrong type [#51116](https://github.com/spring-projects/spring-boot/issues/51116)
- Caching documentation refers to AutoConfigureCache by its pre-4.0 package [#51114](https://github.com/spring-projects/spring-boot/issues/51114)
- Fix examples in Metadata Format documentation chapter [#51103](https://github.com/spring-projects/spring-boot/issues/51103)
- Improve discoverability of the AOT Cache How-to guides [#51001](https://github.com/spring-projects/spring-boot/issues/51001)

## :hammer: Dependency Upgrades

- Upgrade to ActiveMQ 6.3.1 [#51334](https://github.com/spring-projects/spring-boot/issues/51334)
- Upgrade to [Artemis 2.55.0](https://activemq.apache.org/components/artemis/download/release-notes-2.55.0) [#51034](https://github.com/spring-projects/spring-boot/issues/51034)
- Upgrade to [Byte Buddy 1.18.11](https://github.com/raphw/byte-buddy/releases/tag/byte-buddy-1.18.11) [#51035](https://github.com/spring-projects/spring-boot/issues/51035)
- Upgrade to Commons Codec 1.22.1 [#51198](https://github.com/spring-projects/spring-boot/issues/51198)
- Upgrade to [Commons Logging 1.4.0](https://commons.apache.org/proper/commons-logging/changes-report.html#a1.4.0) [#51037](https://github.com/spring-projects/spring-boot/issues/51037)
- Upgrade to Couchbase Client 3.12.2 [#51295](https://github.com/spring-projects/spring-boot/issues/51295)
- Upgrade to CycloneDX Maven Plugin 2.9.3 [#51199](https://github.com/spring-projects/spring-boot/issues/51199)
- Upgrade to DB2 JDBC 12.1.5.0 [#51039](https://github.com/spring-projects/spring-boot/issues/51039)
- Upgrade to Elasticsearch Client 9.5.0 [#51335](https://github.com/spring-projects/spring-boot/issues/51335)
- Upgrade to [Flyway 12.11.0](https://documentation.red-gate.com/flyway/release-notes-and-older-versions/release-notes-for-flyway-engine) [#51040](https://github.com/spring-projects/spring-boot/issues/51040)
- Upgrade to Groovy 5.0.8 [#51200](https://github.com/spring-projects/spring-boot/issues/51200)
- Upgrade to [Grpc Java 1.81.1](https://github.com/grpc/grpc-java/releases/tag/v1.81.1) [#51229](https://github.com/spring-projects/spring-boot/issues/51229)
- Upgrade to Grpc Java 1.83.1 [#51362](https://github.com/spring-projects/spring-boot/issues/51362)
- Upgrade to [Gson 2.14.0](https://github.com/google/gson/releases/tag/gson-parent-2.14.0) [#51042](https://github.com/spring-projects/spring-boot/issues/51042)
- Upgrade to Hazelcast 5.7.0 [#51309](https://github.com/spring-projects/spring-boot/issues/51309)
- Upgrade to [Hibernate 7.4.5.Final](https://github.com/hibernate/hibernate-orm/releases/tag/7.4.5) [#51043](https://github.com/spring-projects/spring-boot/issues/51043)
- Upgrade to Hibernate Validator 9.1.3.Final [#51201](https://github.com/spring-projects/spring-boot/issues/51201)
- Upgrade to HikariCP 7.1.0 [#51045](https://github.com/spring-projects/spring-boot/issues/51045)
- Upgrade to HtmlUnit 5.4.0 [#51313](https://github.com/spring-projects/spring-boot/issues/51313)
- Upgrade to HttpClient5 5.6.4 [#51336](https://github.com/spring-projects/spring-boot/issues/51336)
- Upgrade to HttpCore5 5.4.3 [#51047](https://github.com/spring-projects/spring-boot/issues/51047)
- Upgrade to Infinispan 16.2.2 [#51203](https://github.com/spring-projects/spring-boot/issues/51203)
- Upgrade to [Jackson 2 Bom 2.21.5](https://github.com/FasterXML/jackson/wiki/Jackson-Release-2.21.5) [#51078](https://github.com/spring-projects/spring-boot/issues/51078)
- Upgrade to [Jackson Bom 3.1.5](https://github.com/FasterXML/jackson/wiki/Jackson-Release-3.1.5) [#51050](https://github.com/spring-projects/spring-boot/issues/51050)
- Upgrade to [Jedis 8.0.0](https://github.com/redis/jedis/releases/tag/v8.0.0) [#51337](https://github.com/spring-projects/spring-boot/issues/51337)
- Upgrade to Jetty 12.1.12 [#51297](https://github.com/spring-projects/spring-boot/issues/51297)
- Upgrade to jOOQ 3.21.7 [#51314](https://github.com/spring-projects/spring-boot/issues/51314)
- Upgrade to Json Path 3.0.0 [#50786](https://github.com/spring-projects/spring-boot/issues/50786)
- Upgrade to [JSpecify 1.0.1](https://github.com/jspecify/jspecify/releases/tag/v1.0.1) [#51204](https://github.com/spring-projects/spring-boot/issues/51204)
- Upgrade to JUnit Jupiter 6.1.3 [#51315](https://github.com/spring-projects/spring-boot/issues/51315)
- Upgrade to [Kafka 4.3.1](https://downloads.apache.org/kafka/4.3.1/RELEASE\_NOTES.html) [#51054](https://github.com/spring-projects/spring-boot/issues/51054)
- Upgrade to [Kotlin 2.4.10](https://github.com/JetBrains/kotlin/releases/tag/v2.4.10) [#51205](https://github.com/spring-projects/spring-boot/issues/51205)
- Upgrade to [Kotlin Coroutines 1.11.0](https://github.com/Kotlin/kotlinx.coroutines/releases/tag/1.11.0) [#51206](https://github.com/spring-projects/spring-boot/issues/51206)
- Upgrade to [Lettuce 7.6.0.RELEASE](https://github.com/redis/lettuce/releases/tag/7.6.0.RELEASE) [#51338](https://github.com/spring-projects/spring-boot/issues/51338)
- Upgrade to [Log4j2 2.26.1](https://github.com/apache/logging-log4j2/releases/tag/rel%2F2.26.1) [#51055](https://github.com/spring-projects/spring-boot/issues/51055)
- Upgrade to Logback 1.6.1 [#51207](https://github.com/spring-projects/spring-boot/issues/51207)
- Upgrade to MariaDB 3.5.10 [#51208](https://github.com/spring-projects/spring-boot/issues/51208)
- Upgrade to [Maven Dependency Plugin 3.11.0](https://github.com/apache/maven-dependency-plugin/releases/tag/maven-dependency-plugin-3.11.0) [#51058](https://github.com/spring-projects/spring-boot/issues/51058)
- Upgrade to Maven Help Plugin 3.5.2 [#51059](https://github.com/spring-projects/spring-boot/issues/51059)
- Upgrade to [Maven Invoker Plugin 3.10.1](https://github.com/apache/maven-invoker-plugin/releases/tag/maven-invoker-plugin-3.10.1) [#51060](https://github.com/spring-projects/spring-boot/issues/51060)
- Upgrade to [Maven Jar Plugin 3.5.1](https://github.com/apache/maven-jar-plugin/releases/tag/maven-jar-plugin-3.5.1) [#51209](https://github.com/spring-projects/spring-boot/issues/51209)
- Upgrade to [Micrometer 1.18.0-M1](https://github.com/micrometer-metrics/micrometer/releases/tag/v1.18.0-M1) [#51219](https://github.com/spring-projects/spring-boot/issues/51219)
- Upgrade to [Micrometer Tracing 1.8.0-M1](https://github.com/micrometer-metrics/tracing/releases/tag/v1.8.0-M1) [#51220](https://github.com/spring-projects/spring-boot/issues/51220)
- Upgrade to MongoDB 5.9.2 [#51380](https://github.com/spring-projects/spring-boot/issues/51380)
- Upgrade to Native Build Tools Plugin 1.1.8 [#51316](https://github.com/spring-projects/spring-boot/issues/51316)
- Upgrade to [Neo4j Java Driver 6.2.1](https://github.com/neo4j/neo4j-java-driver/releases/tag/6.2.1) [#51340](https://github.com/spring-projects/spring-boot/issues/51340)
- Upgrade to Netty 4.2.17.Final [#51296](https://github.com/spring-projects/spring-boot/issues/51296)
- Upgrade to [OpenTelemetry 1.64.0](https://github.com/open-telemetry/opentelemetry-java/releases/tag/v1.64.0) [#51231](https://github.com/spring-projects/spring-boot/issues/51231)
- Upgrade to Oracle Database 23.26.3.0.0 [#51211](https://github.com/spring-projects/spring-boot/issues/51211)
- Upgrade to Pooled JMS 3.2.3 [#51212](https://github.com/spring-projects/spring-boot/issues/51212)
- Upgrade to [Postgresql 42.7.13](https://github.com/pgjdbc/pgjdbc/releases/tag/REL42.7.13) [#51064](https://github.com/spring-projects/spring-boot/issues/51064)
- Upgrade to [Prometheus Client 1.8.0](https://github.com/prometheus/client\_java/releases/tag/v1.8.0) [#51232](https://github.com/spring-projects/spring-boot/issues/51232)
- Upgrade to [Protobuf Java 4.35.1](https://github.com/protocolbuffers/protobuf/releases/tag/v4.35.1) [#51233](https://github.com/spring-projects/spring-boot/issues/51233)
- Upgrade to Protobuf Maven Plugin 5.1.8 [#51341](https://github.com/spring-projects/spring-boot/issues/51341)
- Upgrade to Pulsar 4.2.4 [#51213](https://github.com/spring-projects/spring-boot/issues/51213)
- Upgrade to [Qpid ProtonJ2 1.2.0](https://qpid.apache.org/releases/qpid-protonj2-1.2.0/release-notes.html) [#51317](https://github.com/spring-projects/spring-boot/issues/51317)
- Upgrade to [R2DBC MariaDB 1.4.1](https://github.com/mariadb-corporation/mariadb-connector-r2dbc/releases/tag/1.4.1) [#51066](https://github.com/spring-projects/spring-boot/issues/51066)
- Upgrade to [R2DBC MSSQL 1.0.5.RELEASE](https://github.com/r2dbc/r2dbc-mssql/releases/tag/v1.0.5.RELEASE) [#51067](https://github.com/spring-projects/spring-boot/issues/51067)
- Upgrade to [R2DBC MySQL 1.4.3](https://github.com/asyncer-io/r2dbc-mysql/releases/tag/r2dbc-mysql-1.4.3) [#51214](https://github.com/spring-projects/spring-boot/issues/51214)
- Upgrade to [R2DBC Postgresql 1.1.2.RELEASE](https://github.com/pgjdbc/r2dbc-postgresql/releases/tag/v1.1.2.RELEASE) [#51068](https://github.com/spring-projects/spring-boot/issues/51068)
- Upgrade to RabbitMQ AMQP Client 1.4.0 [#51318](https://github.com/spring-projects/spring-boot/issues/51318)
- Upgrade to [RabbitMQ Client 5.34.0](https://github.com/rabbitmq/rabbitmq-java-client/releases/tag/v5.34.0) [#51069](https://github.com/spring-projects/spring-boot/issues/51069)
- Upgrade to RabbitMQ Stream Client 1.9.0 [#51319](https://github.com/spring-projects/spring-boot/issues/51319)
- Upgrade to Reactor 2026.0.0-M1 [#51167](https://github.com/spring-projects/spring-boot/issues/51167)
- Upgrade to [Selenium 4.46.0](https://github.com/SeleniumHQ/selenium/releases/tag/selenium-4.46.0) [#51071](https://github.com/spring-projects/spring-boot/issues/51071)
- Upgrade to [Selenium HtmlUnit 4.46.0](https://github.com/SeleniumHQ/htmlunit-driver/releases/tag/4.46.0) [#51072](https://github.com/spring-projects/spring-boot/issues/51072)
- Upgrade to [Spring AMQP 4.2.0-M1](https://github.com/spring-projects/spring-amqp/releases/tag/v4.2.0-M1) [#51221](https://github.com/spring-projects/spring-boot/issues/51221)
- Upgrade to [Spring Batch 6.1.0-M1](https://github.com/spring-projects/spring-batch/releases/tag/v6.1.0-M1) [#51269](https://github.com/spring-projects/spring-boot/issues/51269)
- Upgrade to [Spring Data Bom 2026.1.0-M1](https://github.com/spring-projects/spring-data-bom/releases/tag/2026.1.0-M1) [#51222](https://github.com/spring-projects/spring-boot/issues/51222)
- Upgrade to [Spring Framework 7.1.0-M1](https://github.com/spring-projects/spring-framework/releases/tag/v7.1.0-M1) [#51123](https://github.com/spring-projects/spring-boot/issues/51123)
- Upgrade to [Spring GraphQL 2.0.5](https://github.com/spring-projects/spring-graphql/releases/tag/v2.0.5) [#51225](https://github.com/spring-projects/spring-boot/issues/51225)
- Upgrade to [Spring gRPC 1.1.1](https://github.com/spring-projects/spring-grpc/releases/tag/v1.1.1) [#51226](https://github.com/spring-projects/spring-boot/issues/51226)
- Upgrade to [Spring HATEOAS 3.2.0-M1](https://github.com/spring-projects/spring-hateoas/releases/tag/3.2.0-M1) [#51332](https://github.com/spring-projects/spring-boot/issues/51332)
- Upgrade to [Spring Integration 7.2.0-M1](https://github.com/spring-projects/spring-integration/releases/tag/v7.2.0-M1) [#51223](https://github.com/spring-projects/spring-boot/issues/51223)
- Upgrade to [Spring Kafka 4.2.0-M1](https://github.com/spring-projects/spring-kafka/releases/tag/v4.2.0-M1) [#51224](https://github.com/spring-projects/spring-boot/issues/51224)
- Upgrade to [Spring LDAP 4.1.1](https://github.com/spring-projects/spring-ldap/releases/tag/4.1.1) [#51270](https://github.com/spring-projects/spring-boot/issues/51270)
- Upgrade to [Spring Pulsar 2.0.7](https://github.com/spring-projects/spring-pulsar/releases/tag/v2.0.7) [#51333](https://github.com/spring-projects/spring-boot/issues/51333)
- Upgrade to [Spring Security 7.2.0-M1](https://github.com/spring-projects/spring-security/releases/tag/7.2.0-M1) [#51271](https://github.com/spring-projects/spring-boot/issues/51271)
- Upgrade to [Spring Session 4.1.1](https://github.com/spring-projects/spring-session/releases/tag/4.1.1) [#51272](https://github.com/spring-projects/spring-boot/issues/51272)
- Upgrade to [SQLite JDBC 3.53.2.1](https://github.com/xerial/sqlite-jdbc/releases/tag/3.53.2.1) [#51216](https://github.com/spring-projects/spring-boot/issues/51216)
- Upgrade to [Tomcat 11.0.24](https://tomcat.apache.org/tomcat-11.0-doc/changelog.html) [#51073](https://github.com/spring-projects/spring-boot/issues/51073)
- Upgrade to [UnboundID LDAPSDK 7.0.5](https://github.com/pingidentity/ldapsdk/releases/tag/7.0.5) [#51074](https://github.com/spring-projects/spring-boot/issues/51074)
- Upgrade to WebJars Locator Lite 1.1.4 [#51075](https://github.com/spring-projects/spring-boot/issues/51075)
- Upgrade to XmlUnit2 2.13.0 [#51217](https://github.com/spring-projects/spring-boot/issues/51217)
- Upgrade to [Yasson 3.0.5](https://github.com/eclipse-ee4j/yasson/releases/tag/3.0.5) [#51320](https://github.com/spring-projects/spring-boot/issues/51320)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@Chrisg2000, @DragonFSKY, @LordKay-sudo, @MacAlsandair, @SebTardif, @TYsewyn, @dmitrysulman, @eddumelendez, @filiphr, @ghost, @msridhar, @ngocnhan-tran1996, @scordio, @skdas20, @sourabh-bhattacharjee, @taasjord, @vvzvvv, @wantaekchoi, @xfocus3, and @zxuhan

---

> **Source** [spring-projects/spring-boot](https://github.com/spring-projects/spring-boot) · `v4.2.0-M1` · 2026-08-20 · [upstream release](https://github.com/spring-projects/spring-boot/releases/tag/v4.2.0-M1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
