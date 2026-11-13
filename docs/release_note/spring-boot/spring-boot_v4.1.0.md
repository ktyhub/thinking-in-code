---
title: "spring-boot v4.1.0"
project: "spring-boot"
repo: "spring-projects/spring-boot"
tag: "v4.1.0"
published: "2026-06-10"
type: "minor"
lang: "en"
summary: "Full release notes for Spring Boot 4.1 are available on the wiki."
---

# spring-boot v4.1.0

Full [release notes for Spring Boot 4.1](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.1-Release-Notes) are available on the wiki.

## :star: New Features

- Add public constructor to InvalidConfigurationPropertyValueException that accepts a cause [#50211](https://github.com/spring-projects/spring-boot/issues/50211)
- Reduce memory consumption when repeatedly calling WritableJson.toByteArray [#49428](https://github.com/spring-projects/spring-boot/issues/49428)

## :lady_beetle: Bug Fixes

- MailSender auto-configuration does not enable hostname verification [#50747](https://github.com/spring-projects/spring-boot/issues/50747)
- Artemis auto-configuration uses a predictable default location for the embedded broker's data [#50745](https://github.com/spring-projects/spring-boot/issues/50745)
- Embedded LDAP SSL should not be enabled when its bundle is empty [#50700](https://github.com/spring-projects/spring-boot/pull/50700)
- InetAddressFilter.externalAddresses does not exclude special purpose addresses from RFC 6890 [#50668](https://github.com/spring-projects/spring-boot/issues/50668)
- NullPointerException in reactor-netty SniProvider and unmapped SSL bundle with RSocket [#50645](https://github.com/spring-projects/spring-boot/issues/50645)
- SSL should not be enabled when a SSL bundle is overridden to an empty string [#50635](https://github.com/spring-projects/spring-boot/issues/50635)
- Test auto-configuration no longer integrates Spring Security with HtmlUnitDriver [#50633](https://github.com/spring-projects/spring-boot/issues/50633)
- Configuration property metadata includes incorrect class references [#50632](https://github.com/spring-projects/spring-boot/issues/50632)
- Docker Compose support does not restore thread interrupt flag when catching InterruptedException [#50618](https://github.com/spring-projects/spring-boot/issues/50618)
- RabbitProperties enables SSL even when spring.rabbitmq.ssl.bundle is overridden to an empty string [#50612](https://github.com/spring-projects/spring-boot/issues/50612)
- NullPointerException in reactor-netty SniProvider when SSL bundle uses client-auth or server truststore without server-name-bundles [#50610](https://github.com/spring-projects/spring-boot/issues/50610)
- SpringJtaPlatform should have been deprecated since 4.1.0-M3 [#50592](https://github.com/spring-projects/spring-boot/issues/50592)
- Layer written outside the output location of '//' exception is thrown when using extract layers in root directory [#50510](https://github.com/spring-projects/spring-boot/issues/50510)
- ConfigurationPropertiesReportEndpoint exposes AOP proxy internals [#50417](https://github.com/spring-projects/spring-boot/issues/50417)
- Created StackTracePrinter instances have no access to the Environment [#50414](https://github.com/spring-projects/spring-boot/issues/50414)
- MappingsEndpoint reports the context's own ID as parentId when a parent exists [#50412](https://github.com/spring-projects/spring-boot/issues/50412)
- Buildpack module does not validate long-to-int casts [#50410](https://github.com/spring-projects/spring-boot/issues/50410)
- Gradle gRPC support fails if protobuf-java dependency is used instead of protobuf-java-util [#50405](https://github.com/spring-projects/spring-boot/pull/50405)
- GraphQL WebSocket support does not configure allowed origins [#50394](https://github.com/spring-projects/spring-boot/issues/50394)
- Spring Boot Loader Does Not Support RSA and EC Signed Jars [#50298](https://github.com/spring-projects/spring-boot/issues/50298)
- Meter registries are not removed from the global registry when the context is closed [#50287](https://github.com/spring-projects/spring-boot/issues/50287)
-  DataSourceBuilder cannot derive a DataSource from a lazy connection proxy [#50271](https://github.com/spring-projects/spring-boot/pull/50271)
- Nullable annotations from AbstractErrorController.getErrorAttributes are not aligned with implementation [#50266](https://github.com/spring-projects/spring-boot/issues/50266)
- Bean definitions can be added with an initializer before setAllowBeanDefinitionOverriding is called [#50264](https://github.com/spring-projects/spring-boot/issues/50264)
- EndpointRequest links matcher unnecessarily matches HTTP methods other than GET  [#50261](https://github.com/spring-projects/spring-boot/issues/50261)
- Actuator's '/cloudfoundryapplication' endpoint does not work if restrictive CORS configuration is provided using a bean named corsConfigurationSource [#50258](https://github.com/spring-projects/spring-boot/issues/50258)
- ThreadPoolTaskScheduleBuilder unnecessarily loses precision when configuring await termination time [#50234](https://github.com/spring-projects/spring-boot/issues/50234)
- NimbusJwtDecoder silently accepts unknown values for spring.security.oauth2.resourceserver.jwt.jws-algorithms [#50228](https://github.com/spring-projects/spring-boot/issues/50228)
- Missing dependency management for spring-boot-web-server-test [#50224](https://github.com/spring-projects/spring-boot/issues/50224)
- Spring Batch support for MongoDB modules are not included in dependency management [#50223](https://github.com/spring-projects/spring-boot/pull/50223)
- Apply HTML escaping to timestamp attribute in Whitelabel error page [#50216](https://github.com/spring-projects/spring-boot/issues/50216)
- GrpcServerHealthScheduler is not started in servlet environments [#50209](https://github.com/spring-projects/spring-boot/issues/50209)
- Setting server.servlet.session.cookie.partitioned=true has no effect when using Tomcat [#50204](https://github.com/spring-projects/spring-boot/issues/50204)

## :notebook_with_decorative_cover: Documentation

- Fix reference to Gradle documentation for module replacement [#50647](https://github.com/spring-projects/spring-boot/issues/50647)
- Document SSL reloading with Let's Encrypt [#50630](https://github.com/spring-projects/spring-boot/issues/50630)
- Remove the use of Optional from Data Neo4j repository examples [#50622](https://github.com/spring-projects/spring-boot/issues/50622)
- Fix typos in documentation [#50620](https://github.com/spring-projects/spring-boot/issues/50620)
- Clarify dependency requirement for Bean Validation support [#50614](https://github.com/spring-projects/spring-boot/issues/50614)
- Document Java 25 requirement for AOT cache [#50485](https://github.com/spring-projects/spring-boot/issues/50485)
- Add links for Java CAS Client Spring Boot Starter [#50285](https://github.com/spring-projects/spring-boot/issues/50285)
- Document known testcontainers lifecycle issues  [#50220](https://github.com/spring-projects/spring-boot/issues/50220)
- Document adding multiple connectors for Jetty [#50218](https://github.com/spring-projects/spring-boot/issues/50218)
- Polish InvalidConfigurationPropertyValueException constructor javadoc [#50214](https://github.com/spring-projects/spring-boot/issues/50214)
- Fix typo in Spring Security OAuth2 client registration documentation [#50199](https://github.com/spring-projects/spring-boot/issues/50199)

## :hammer: Dependency Upgrades

- Upgrade to ActiveMQ 6.2.6 [#50652](https://github.com/spring-projects/spring-boot/issues/50652)
- Upgrade to Byte Buddy 1.18.10 [#50693](https://github.com/spring-projects/spring-boot/issues/50693)
- Upgrade to [Caffeine 3.2.4](https://github.com/ben-manes/caffeine/releases/tag/v3.2.4) [#50338](https://github.com/spring-projects/spring-boot/issues/50338)
- Upgrade to Cassandra Driver 4.19.3 [#50654](https://github.com/spring-projects/spring-boot/issues/50654)
- Upgrade to [Couchbase Client 3.11.3](https://docs.couchbase.com/java-sdk/current/project-docs/sdk-release-notes.html) [#50576](https://github.com/spring-projects/spring-boot/issues/50576)
- Upgrade to Elasticsearch Client 9.4.2 [#50655](https://github.com/spring-projects/spring-boot/issues/50655)
- Upgrade to Glassfish JAXB 4.0.9 [#50656](https://github.com/spring-projects/spring-boot/issues/50656)
- Upgrade to Groovy 5.0.6 [#50340](https://github.com/spring-projects/spring-boot/issues/50340)
- Upgrade to Hibernate 7.4.1.Final [#50732](https://github.com/spring-projects/spring-boot/issues/50732)
- Upgrade to [Infinispan 16.1.4](https://github.com/infinispan/infinispan/releases/tag/16.1.4) [#50342](https://github.com/spring-projects/spring-boot/issues/50342)
- Upgrade to Jackson 2 Bom 2.21.4 [#50657](https://github.com/spring-projects/spring-boot/issues/50657)
- Upgrade to Jackson Bom 3.1.4 [#50658](https://github.com/spring-projects/spring-boot/issues/50658)
- Upgrade to Jakarta Json Bind 3.0.2 [#50659](https://github.com/spring-projects/spring-boot/issues/50659)
- Upgrade to [Jakarta XML Bind 4.0.5](https://github.com/jakartaee/jaxb-api/releases/tag/4.0.5) [#50345](https://github.com/spring-projects/spring-boot/issues/50345)
- Upgrade to Jaxen 2.0.6 [#50710](https://github.com/spring-projects/spring-boot/issues/50710)
- Upgrade to [Jetty 12.1.10](https://github.com/jetty/jetty.project/releases/tag/jetty-12.1.10) [#50661](https://github.com/spring-projects/spring-boot/issues/50661)
- Upgrade to Jetty Reactive HTTPClient 4.1.5 [#50711](https://github.com/spring-projects/spring-boot/issues/50711)
- Upgrade to jOOQ 3.21.5 [#50712](https://github.com/spring-projects/spring-boot/issues/50712)
- Upgrade to [Kafka 4.2.1](https://downloads.apache.org/kafka/4.2.1/RELEASE\_NOTES.html) [#50662](https://github.com/spring-projects/spring-boot/issues/50662)
- Upgrade to [Kotlin 2.3.21](https://github.com/JetBrains/kotlin/releases/tag/v2.3.21) [#50347](https://github.com/spring-projects/spring-boot/issues/50347)
- Upgrade to [Lettuce 7.5.2.RELEASE](https://github.com/redis/lettuce/releases/tag/7.5.2.RELEASE) [#50581](https://github.com/spring-projects/spring-boot/issues/50581)
- Upgrade to [Liquibase 5.0.3](https://github.com/liquibase/liquibase/releases/tag/v5.0.3) [#50582](https://github.com/spring-projects/spring-boot/issues/50582)
- Upgrade to Logback 1.5.34 [#50663](https://github.com/spring-projects/spring-boot/issues/50663)
- Upgrade to [Maven Enforcer Plugin 3.6.3](https://github.com/apache/maven-enforcer/releases/tag/enforcer-3.6.3) [#50583](https://github.com/spring-projects/spring-boot/issues/50583)
- Upgrade to [Maven Failsafe Plugin 3.5.6](https://github.com/apache/maven-surefire/releases/tag/surefire-3.5.6) [#50664](https://github.com/spring-projects/spring-boot/issues/50664)
- Upgrade to [Maven Surefire Plugin 3.5.6](https://github.com/apache/maven-surefire/releases/tag/surefire-3.5.6) [#50665](https://github.com/spring-projects/spring-boot/issues/50665)
- Upgrade to [Micrometer 1.17.0](https://github.com/micrometer-metrics/micrometer/releases/tag/v1.17.0) [#50559](https://github.com/spring-projects/spring-boot/issues/50559)
- Upgrade to [Micrometer Tracing 1.7.0](https://github.com/micrometer-metrics/tracing/releases/tag/v1.7.0) [#50560](https://github.com/spring-projects/spring-boot/issues/50560)
- Upgrade to MongoDB 5.8.0 [#50608](https://github.com/spring-projects/spring-boot/issues/50608)
- Upgrade to [Native Build Tools Plugin 1.1.1](https://github.com/graalvm/native-build-tools/releases/tag/1.1.1) [#50585](https://github.com/spring-projects/spring-boot/issues/50585)
- Upgrade to [Neo4j Java Driver 6.1.0](https://github.com/neo4j/neo4j-java-driver/releases/tag/6.1.0) [#50586](https://github.com/spring-projects/spring-boot/issues/50586)
- Upgrade to Netty 4.2.15.Final [#50666](https://github.com/spring-projects/spring-boot/issues/50666)
- Upgrade to [OpenTelemetry 1.62.0](https://github.com/open-telemetry/opentelemetry-java/releases/tag/v1.62.0) [#50588](https://github.com/spring-projects/spring-boot/issues/50588)
- Upgrade to Oracle Database 23.26.2.0.0 [#50667](https://github.com/spring-projects/spring-boot/issues/50667)
- Upgrade to [Postgresql 42.7.11](https://github.com/pgjdbc/pgjdbc/releases/tag/REL42.7.11) [#50349](https://github.com/spring-projects/spring-boot/issues/50349)
- Upgrade to [Protobuf Java 4.34.2](https://github.com/protocolbuffers/protobuf/releases/tag/v4.34.2) [#50590](https://github.com/spring-projects/spring-boot/issues/50590)
- Upgrade to [Protobuf Maven Plugin 5.1.4](https://github.com/ascopes/protobuf-maven-plugin/releases/tag/v5.1.4) [#50589](https://github.com/spring-projects/spring-boot/issues/50589)
- Upgrade to Pulsar 4.2.2 [#50713](https://github.com/spring-projects/spring-boot/issues/50713)
- Upgrade to [R2DBC MySQL 1.4.2](https://github.com/asyncer-io/r2dbc-mysql/releases/tag/r2dbc-mysql-1.4.2) [#50351](https://github.com/spring-projects/spring-boot/issues/50351)
- Upgrade to [Reactor Bom 2025.0.6](https://github.com/reactor/reactor/releases/tag/2025.0.6) [#50561](https://github.com/spring-projects/spring-boot/issues/50561)
- Upgrade to SAAJ Impl 3.0.6 [#50714](https://github.com/spring-projects/spring-boot/issues/50714)
- Upgrade to SLF4J 2.0.18 [#50591](https://github.com/spring-projects/spring-boot/issues/50591)
- Upgrade to [Spring AMQP 4.1.0](https://github.com/spring-projects/spring-amqp/releases/tag/v4.1.0) [#50562](https://github.com/spring-projects/spring-boot/issues/50562)
- Upgrade to [Spring Batch 6.0.4](https://github.com/spring-projects/spring-batch/releases/tag/v6.0.4) [#50563](https://github.com/spring-projects/spring-boot/issues/50563)
- Upgrade to [Spring Data Bom 2026.0.0](https://github.com/spring-projects/spring-data-bom/releases/tag/2026.0.0) [#50564](https://github.com/spring-projects/spring-boot/issues/50564)
- Upgrade to [Spring Framework 7.0.8](https://github.com/spring-projects/spring-framework/releases/tag/v7.0.8) [#50565](https://github.com/spring-projects/spring-boot/issues/50565)
- Upgrade to [Spring GraphQL 2.0.4](https://github.com/spring-projects/spring-graphql/releases/tag/v2.0.4) [#50741](https://github.com/spring-projects/spring-boot/issues/50741)
- Upgrade to [Spring gRPC 1.1.0](https://github.com/spring-projects/spring-grpc/releases/tag/v1.1.0) [#50566](https://github.com/spring-projects/spring-boot/issues/50566)
- Upgrade to [Spring HATEOAS 3.1.1](https://github.com/spring-projects/spring-hateoas/releases/tag/3.1.1) [#50567](https://github.com/spring-projects/spring-boot/issues/50567)
- Upgrade to [Spring Integration 7.1.0](https://github.com/spring-projects/spring-integration/releases/tag/v7.1.0) [#50568](https://github.com/spring-projects/spring-boot/issues/50568)
- Upgrade to [Spring Kafka 4.1.0](https://github.com/spring-projects/spring-kafka/releases/tag/v4.1.0) [#50569](https://github.com/spring-projects/spring-boot/issues/50569)
- Upgrade to [Spring LDAP 4.1.0](https://github.com/spring-projects/spring-ldap/releases/tag/4.1.0) [#50570](https://github.com/spring-projects/spring-boot/issues/50570)
- Upgrade to [Spring Pulsar 2.0.6](https://github.com/spring-projects/spring-pulsar/releases/tag/v2.0.6) [#50571](https://github.com/spring-projects/spring-boot/issues/50571)
- Upgrade to [Spring RESTDocs 4.0.1](https://github.com/spring-projects/spring-restdocs/releases/tag/v4.0.1) [#50572](https://github.com/spring-projects/spring-boot/issues/50572)
- Upgrade to [Spring Security 7.1.0](https://github.com/spring-projects/spring-security/releases/tag/7.1.0) [#50573](https://github.com/spring-projects/spring-boot/issues/50573)
- Upgrade to [Spring Session 4.1.0](https://github.com/spring-projects/spring-session/releases/tag/4.1.0) [#50574](https://github.com/spring-projects/spring-boot/issues/50574)
- Upgrade to [Spring WS 5.0.2](https://github.com/spring-projects/spring-ws/releases/tag/v5.0.2) [#50575](https://github.com/spring-projects/spring-boot/issues/50575)
- Upgrade to SQLite JDBC 3.53.2.0 [#50715](https://github.com/spring-projects/spring-boot/issues/50715)
- Upgrade to [Tomcat 11.0.22](https://tomcat.apache.org/tomcat-11.0-doc/changelog.html) [#50354](https://github.com/spring-projects/spring-boot/issues/50354)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@Abdlatif-nabgha, @DragonFSKY, @Kapil-chn7, @Kimgyuilli, @SJvaca30, @SebTardif, @ares333, @codingkiddo, @dlwldnjs1009, @eddumelendez, @henriquejsza, @igormukhin, @johnnypwong, @kwondh5217, @leestana01, @mheath, @mmoayyed, @msridhar, @ngocnhan-tran1996, @nosan, @quaff, @scordio, @vinhhieu21, @vpavic, @won-seoop, and @zxuhan

---

> **Source** [spring-projects/spring-boot](https://github.com/spring-projects/spring-boot) · `v4.1.0` · 2026-06-10 · [upstream release](https://github.com/spring-projects/spring-boot/releases/tag/v4.1.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
