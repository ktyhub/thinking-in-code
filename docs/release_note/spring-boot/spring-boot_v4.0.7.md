---
title: "spring-boot v4.0.7"
project: "spring-boot"
repo: "spring-projects/spring-boot"
tag: "v4.0.7"
published: "2026-06-10"
type: "patch"
lang: "en"
summary: "MailSender auto-configuration does not enable hostname verification #50746 · Artemis auto-configuration uses a predictable default location for the embedded broker's data #50744"
---

# spring-boot v4.0.7

## :lady_beetle: Bug Fixes

- MailSender auto-configuration does not enable hostname verification [#50746](https://github.com/spring-projects/spring-boot/issues/50746)
- Artemis auto-configuration uses a predictable default location for the embedded broker's data [#50744](https://github.com/spring-projects/spring-boot/issues/50744)
- NullPointerException in reactor-netty SniProvider and unmapped SSL bundle with RSocket [#50640](https://github.com/spring-projects/spring-boot/pull/50640)
- SSL should not be enabled when a SSL bundle is overridden to an empty string [#50634](https://github.com/spring-projects/spring-boot/issues/50634)
- Docker Compose support does not restore thread interrupt flag when catching InterruptedException [#50617](https://github.com/spring-projects/spring-boot/issues/50617)
- RabbitProperties enables SSL even when spring.rabbitmq.ssl.bundle is overridden to an empty string [#50611](https://github.com/spring-projects/spring-boot/issues/50611)
- NullPointerException in reactor-netty SniProvider when SSL bundle uses client-auth or server truststore without server-name-bundles [#50609](https://github.com/spring-projects/spring-boot/issues/50609)
- Test auto-configuration no longer integrates Spring Security with HtmlUnitDriver [#50602](https://github.com/spring-projects/spring-boot/pull/50602)
- Layer written outside the output location of '//' exception is thrown when using extract layers in root directory [#50509](https://github.com/spring-projects/spring-boot/issues/50509)
- ConfigurationPropertiesReportEndpoint exposes AOP proxy internals [#50416](https://github.com/spring-projects/spring-boot/issues/50416)
- Created StackTracePrinter instances have no access to the Environment [#50413](https://github.com/spring-projects/spring-boot/issues/50413)
- MappingsEndpoint reports the context's own ID as parentId when a parent exists [#50411](https://github.com/spring-projects/spring-boot/issues/50411)
- Buildpack module does not validate long-to-int casts [#50409](https://github.com/spring-projects/spring-boot/issues/50409)
- GraphQL WebSocket support does not configure allowed origins [#50393](https://github.com/spring-projects/spring-boot/issues/50393)
- Configuration property metadata includes incorrect class references [#50375](https://github.com/spring-projects/spring-boot/pull/50375)
- Spring Boot Loader Does Not Support RSA and EC Signed Jars [#50297](https://github.com/spring-projects/spring-boot/issues/50297)
- Meter registries are not removed from the global registry when the context is closed [#50286](https://github.com/spring-projects/spring-boot/issues/50286)
- Nullable annotations from AbstractErrorController.getErrorAttributes are not aligned with implementation [#50265](https://github.com/spring-projects/spring-boot/pull/50265)
- EndpointRequest links matcher unnecessarily matches HTTP methods other than GET  [#50260](https://github.com/spring-projects/spring-boot/issues/50260)
- Actuator's '/cloudfoundryapplication' endpoint does not work if restrictive CORS configuration is provided using a bean named corsConfigurationSource [#50257](https://github.com/spring-projects/spring-boot/issues/50257)
- ThreadPoolTaskScheduleBuilder unnecessarily loses precision when configuring await termination time [#50233](https://github.com/spring-projects/spring-boot/issues/50233)
- NimbusJwtDecoder silently accepts unknown values for spring.security.oauth2.resourceserver.jwt.jws-algorithms [#50227](https://github.com/spring-projects/spring-boot/issues/50227)
- Apply HTML escaping to timestamp attribute in Whitelabel error page [#50215](https://github.com/spring-projects/spring-boot/issues/50215)
- Setting server.servlet.session.cookie.partitioned=true has no effect when using Tomcat [#50201](https://github.com/spring-projects/spring-boot/issues/50201)

## :notebook_with_decorative_cover: Documentation

- Fix reference to Gradle documentation for module replacement [#50646](https://github.com/spring-projects/spring-boot/issues/50646)
- Document SSL reloading with Let's Encrypt [#50629](https://github.com/spring-projects/spring-boot/issues/50629)
- Remove the use of Optional from Data Neo4j repository examples [#50621](https://github.com/spring-projects/spring-boot/issues/50621)
- Fix typos in documentation [#50619](https://github.com/spring-projects/spring-boot/issues/50619)
- Clarify dependency requirement for Bean Validation support [#50613](https://github.com/spring-projects/spring-boot/issues/50613)
- Document Java 25 requirement for AOT cache [#50484](https://github.com/spring-projects/spring-boot/issues/50484)
- Add links for Java CAS Client Spring Boot Starter [#50281](https://github.com/spring-projects/spring-boot/pull/50281)
- Document known testcontainers lifecycle issues  [#50219](https://github.com/spring-projects/spring-boot/issues/50219)
- Document adding multiple connectors for Jetty [#50217](https://github.com/spring-projects/spring-boot/issues/50217)
- Polish InvalidConfigurationPropertyValueException constructor javadoc [#50213](https://github.com/spring-projects/spring-boot/issues/50213)
- Fix typo in Spring Security OAuth2 client registration documentation [#50198](https://github.com/spring-projects/spring-boot/issues/50198)

## :hammer: Dependency Upgrades

- Upgrade to [Caffeine 3.2.4](https://github.com/ben-manes/caffeine/releases/tag/v3.2.4) [#50322](https://github.com/spring-projects/spring-boot/issues/50322)
- Upgrade to Cassandra Driver 4.19.3 [#50681](https://github.com/spring-projects/spring-boot/issues/50681)
- Upgrade to Glassfish JAXB 4.0.9 [#50682](https://github.com/spring-projects/spring-boot/issues/50682)
- Upgrade to Groovy 5.0.6 [#50324](https://github.com/spring-projects/spring-boot/issues/50324)
- Upgrade to Hibernate 7.2.19.Final [#50733](https://github.com/spring-projects/spring-boot/issues/50733)
- Upgrade to Jackson 2 Bom 2.21.4 [#50684](https://github.com/spring-projects/spring-boot/issues/50684)
- Upgrade to Jackson Bom 3.1.4 [#50685](https://github.com/spring-projects/spring-boot/issues/50685)
- Upgrade to Jakarta Json Bind 3.0.2 [#50686](https://github.com/spring-projects/spring-boot/issues/50686)
- Upgrade to [Jakarta XML Bind 4.0.5](https://github.com/jakartaee/jaxb-api/releases/tag/4.0.5) [#50328](https://github.com/spring-projects/spring-boot/issues/50328)
- Upgrade to Jaxen 2.0.6 [#50717](https://github.com/spring-projects/spring-boot/issues/50717)
- Upgrade to [Jetty 12.1.10](https://github.com/jetty/jetty.project/releases/tag/jetty-12.1.10) [#50688](https://github.com/spring-projects/spring-boot/issues/50688)
- Upgrade to Jetty Reactive HTTPClient 4.1.5 [#50718](https://github.com/spring-projects/spring-boot/issues/50718)
- Upgrade to jOOQ 3.19.35 [#50719](https://github.com/spring-projects/spring-boot/issues/50719)
- Upgrade to [Liquibase 5.0.3](https://github.com/liquibase/liquibase/releases/tag/v5.0.3) [#50554](https://github.com/spring-projects/spring-boot/issues/50554)
- Upgrade to Logback 1.5.34 [#50689](https://github.com/spring-projects/spring-boot/issues/50689)
- Upgrade to [Maven Enforcer Plugin 3.6.3](https://github.com/apache/maven-enforcer/releases/tag/enforcer-3.6.3) [#50555](https://github.com/spring-projects/spring-boot/issues/50555)
- Upgrade to [Maven Failsafe Plugin 3.5.6](https://github.com/apache/maven-surefire/releases/tag/surefire-3.5.6) [#50690](https://github.com/spring-projects/spring-boot/issues/50690)
- Upgrade to [Maven Surefire Plugin 3.5.6](https://github.com/apache/maven-surefire/releases/tag/surefire-3.5.6) [#50691](https://github.com/spring-projects/spring-boot/issues/50691)
- Upgrade to [Micrometer 1.16.6](https://github.com/micrometer-metrics/micrometer/releases/tag/v1.16.6) [#50535](https://github.com/spring-projects/spring-boot/issues/50535)
- Upgrade to [Micrometer Tracing 1.6.6](https://github.com/micrometer-metrics/tracing/releases/tag/v1.6.6) [#50536](https://github.com/spring-projects/spring-boot/issues/50536)
- Upgrade to [Neo4j Java Driver 6.1.0](https://github.com/neo4j/neo4j-java-driver/releases/tag/6.1.0) [#50556](https://github.com/spring-projects/spring-boot/issues/50556)
- Upgrade to Netty 4.2.15.Final [#50692](https://github.com/spring-projects/spring-boot/issues/50692)
- Upgrade to [Postgresql 42.7.11](https://github.com/pgjdbc/pgjdbc/releases/tag/REL42.7.11) [#50332](https://github.com/spring-projects/spring-boot/issues/50332)
- Upgrade to [R2DBC MySQL 1.4.2](https://github.com/asyncer-io/r2dbc-mysql/releases/tag/r2dbc-mysql-1.4.2) [#50333](https://github.com/spring-projects/spring-boot/issues/50333)
- Upgrade to [Reactor Bom 2025.0.6](https://github.com/reactor/reactor/releases/tag/2025.0.6) [#50537](https://github.com/spring-projects/spring-boot/issues/50537)
- Upgrade to SAAJ Impl 3.0.6 [#50720](https://github.com/spring-projects/spring-boot/issues/50720)
- Upgrade to SLF4J 2.0.18 [#50558](https://github.com/spring-projects/spring-boot/issues/50558)
- Upgrade to [Spring AMQP 4.0.4](https://github.com/spring-projects/spring-amqp/releases/tag/v4.0.4) [#50538](https://github.com/spring-projects/spring-boot/issues/50538)
- Upgrade to [Spring Batch 6.0.4](https://github.com/spring-projects/spring-batch/releases/tag/v6.0.4) [#50539](https://github.com/spring-projects/spring-boot/issues/50539)
- Upgrade to [Spring Data Bom 2025.1.6](https://github.com/spring-projects/spring-data-bom/releases/tag/2025.1.6) [#50540](https://github.com/spring-projects/spring-boot/issues/50540)
- Upgrade to [Spring Framework 7.0.8](https://github.com/spring-projects/spring-framework/releases/tag/v7.0.8) [#50541](https://github.com/spring-projects/spring-boot/issues/50541)
- Upgrade to [Spring GraphQL 2.0.4](https://github.com/spring-projects/spring-graphql/releases/tag/v2.0.4) [#50740](https://github.com/spring-projects/spring-boot/issues/50740)
- Upgrade to [Spring HATEOAS 3.0.4](https://github.com/spring-projects/spring-hateoas/releases/tag/3.0.4) [#50542](https://github.com/spring-projects/spring-boot/issues/50542)
- Upgrade to [Spring Integration 7.0.5](https://github.com/spring-projects/spring-integration/releases/tag/v7.0.5) [#50543](https://github.com/spring-projects/spring-boot/issues/50543)
- Upgrade to [Spring Kafka 4.0.6](https://github.com/spring-projects/spring-kafka/releases/tag/v4.0.6) [#50544](https://github.com/spring-projects/spring-boot/issues/50544)
- Upgrade to [Spring LDAP 4.0.4](https://github.com/spring-projects/spring-ldap/releases/tag/4.0.4) [#50545](https://github.com/spring-projects/spring-boot/issues/50545)
- Upgrade to [Spring Pulsar 2.0.6](https://github.com/spring-projects/spring-pulsar/releases/tag/v2.0.6) [#50546](https://github.com/spring-projects/spring-boot/issues/50546)
- Upgrade to [Spring RESTDocs 4.0.1](https://github.com/spring-projects/spring-restdocs/releases/tag/v4.0.1) [#50547](https://github.com/spring-projects/spring-boot/issues/50547)
- Upgrade to [Spring Security 7.0.6](https://github.com/spring-projects/spring-security/releases/tag/7.0.6) [#50548](https://github.com/spring-projects/spring-boot/issues/50548)
- Upgrade to [Spring Session 4.0.4](https://github.com/spring-projects/spring-session/releases/tag/4.0.4) [#50549](https://github.com/spring-projects/spring-boot/issues/50549)
- Upgrade to [Spring WS 5.0.2](https://github.com/spring-projects/spring-ws/releases/tag/v5.0.2) [#50550](https://github.com/spring-projects/spring-boot/issues/50550)
- Upgrade to [Tomcat 11.0.22](https://tomcat.apache.org/tomcat-11.0-doc/changelog.html) [#50335](https://github.com/spring-projects/spring-boot/issues/50335)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@Abdlatif-nabgha, @DragonFSKY, @Kapil-chn7, @Kimgyuilli, @SJvaca30, @SebTardif, @ares333, @codingkiddo, @dlwldnjs1009, @henriquejsza, @igormukhin, @johnnypwong, @kwondh5217, @leestana01, @mheath, @mmoayyed, @msridhar, @ngocnhan-tran1996, @nosan, @quaff, @scordio, @vinhhieu21, @won-seoop, and @zxuhan

---

> **Source** [spring-projects/spring-boot](https://github.com/spring-projects/spring-boot) · `v4.0.7` · 2026-06-10 · [upstream release](https://github.com/spring-projects/spring-boot/releases/tag/v4.0.7)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
