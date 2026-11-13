---
title: "spring-boot v3.5.15"
project: "spring-boot"
repo: "spring-projects/spring-boot"
tag: "v3.5.15"
published: "2026-06-10"
type: "patch"
lang: "en"
summary: "Thank you to all the contributors who worked on this release:"
---

# spring-boot v3.5.15

## :lady_beetle: Bug Fixes

- Artemis auto-configuration uses a predictable default location for the embedded broker's data [#50743](https://github.com/spring-projects/spring-boot/issues/50743)
- MailSender auto-configuration does not enable hostname verification [#50742](https://github.com/spring-projects/spring-boot/issues/50742)
- SSL should not be enabled when a SSL bundle is overridden to an empty string [#50624](https://github.com/spring-projects/spring-boot/pull/50624)
- Layer written outside the output location of '//' exception is thrown when using extract layers in root directory [#50501](https://github.com/spring-projects/spring-boot/pull/50501)
- Docker Compose support does not restore thread interrupt flag when catching InterruptedException [#50451](https://github.com/spring-projects/spring-boot/pull/50451)
- RabbitProperties enables SSL even when spring.rabbitmq.ssl.bundle is overridden to an empty string [#50429](https://github.com/spring-projects/spring-boot/pull/50429)
- GraphQL WebSocket support does not configure allowed origins [#50391](https://github.com/spring-projects/spring-boot/issues/50391)
- Buildpack module does not validate long-to-int casts [#50382](https://github.com/spring-projects/spring-boot/pull/50382)
- MappingsEndpoint reports the context's own ID as parentId when a parent exists [#50373](https://github.com/spring-projects/spring-boot/pull/50373)
- Created StackTracePrinter instances have no access to the Environment [#50303](https://github.com/spring-projects/spring-boot/pull/50303)
- NullPointerException in reactor-netty SniProvider when SSL bundle uses client-auth or server truststore without server-name-bundles [#50301](https://github.com/spring-projects/spring-boot/pull/50301)
- Spring Boot Loader Does Not Support RSA and EC Signed Jars [#50292](https://github.com/spring-projects/spring-boot/issues/50292)
- ConfigurationPropertiesReportEndpoint exposes AOP proxy internals [#50273](https://github.com/spring-projects/spring-boot/pull/50273)
- Actuator's '/cloudfoundryapplication' endpoint does not work if restrictive CORS configuration is provided using a bean named corsConfigurationSource [#50254](https://github.com/spring-projects/spring-boot/issues/50254)
- Meter registries are not removed from the global registry when the context is closed [#50235](https://github.com/spring-projects/spring-boot/pull/50235)
- ThreadPoolTaskScheduleBuilder unnecessarily loses precision when configuring await termination time [#50225](https://github.com/spring-projects/spring-boot/pull/50225)
- Apply HTML escaping to timestamp attribute in Whitelabel error page [#50205](https://github.com/spring-projects/spring-boot/pull/50205)
- NimbusJwtDecoder silently accepts unknown values for spring.security.oauth2.resourceserver.jwt.jws-algorithms [#50118](https://github.com/spring-projects/spring-boot/pull/50118)
- EndpointRequest links matcher unnecessarily matches HTTP methods other than GET  [#50095](https://github.com/spring-projects/spring-boot/pull/50095)

## :notebook_with_decorative_cover: Documentation

- Fix reference to Gradle documentation for module replacement [#50641](https://github.com/spring-projects/spring-boot/pull/50641)
- Remove the use of Optional from Data Neo4j repository examples [#50600](https://github.com/spring-projects/spring-boot/pull/50600)
- Fix typos in documentation [#50593](https://github.com/spring-projects/spring-boot/pull/50593)
- Document Java 25 requirement for AOT cache [#50482](https://github.com/spring-projects/spring-boot/pull/50482)
- Clarify dependency requirement for Bean Validation support [#50290](https://github.com/spring-projects/spring-boot/pull/50290)
- Document SSL reloading with Let's Encrypt [#50222](https://github.com/spring-projects/spring-boot/pull/50222)
- Polish InvalidConfigurationPropertyValueException constructor javadoc [#50212](https://github.com/spring-projects/spring-boot/issues/50212)
- Document known testcontainers lifecycle issues  [#50210](https://github.com/spring-projects/spring-boot/pull/50210)
- Document configuring multiple connectors with Jetty [#50206](https://github.com/spring-projects/spring-boot/pull/50206)
- Fix typo in Spring Security OAuth2 client registration documentation [#50193](https://github.com/spring-projects/spring-boot/pull/50193)

## :hammer: Dependency Upgrades

- Upgrade to [Caffeine 3.2.4](https://github.com/ben-manes/caffeine/releases/tag/v3.2.4) [#50308](https://github.com/spring-projects/spring-boot/issues/50308)
- Upgrade to Cassandra Driver 4.19.3 [#50670](https://github.com/spring-projects/spring-boot/issues/50670)
- Upgrade to Glassfish JAXB 4.0.9 [#50671](https://github.com/spring-projects/spring-boot/issues/50671)
- Upgrade to Groovy 4.0.32 [#50310](https://github.com/spring-projects/spring-boot/issues/50310)
- Upgrade to Hibernate 6.6.53.Final [#50721](https://github.com/spring-projects/spring-boot/issues/50721)
- Upgrade to Jackson Bom 2.21.4 [#50673](https://github.com/spring-projects/spring-boot/issues/50673)
- Upgrade to Jakarta Json Bind 3.0.2 [#50674](https://github.com/spring-projects/spring-boot/issues/50674)
- Upgrade to [Jakarta XML Bind 4.0.5](https://github.com/jakartaee/jaxb-api/releases/tag/4.0.5) [#50313](https://github.com/spring-projects/spring-boot/issues/50313)
- Upgrade to Jaxen 2.0.6 [#50722](https://github.com/spring-projects/spring-boot/issues/50722)
- Upgrade to Jetty 12.0.36 [#50676](https://github.com/spring-projects/spring-boot/issues/50676)
- Upgrade to Jetty Reactive HTTPClient 4.0.14 [#50723](https://github.com/spring-projects/spring-boot/issues/50723)
- Upgrade to jOOQ 3.19.35 [#50724](https://github.com/spring-projects/spring-boot/issues/50724)
- Upgrade to Logback 1.5.34 [#50677](https://github.com/spring-projects/spring-boot/issues/50677)
- Upgrade to [Maven Failsafe Plugin 3.5.6](https://github.com/apache/maven-surefire/releases/tag/surefire-3.5.6) [#50678](https://github.com/spring-projects/spring-boot/issues/50678)
- Upgrade to [Maven Surefire Plugin 3.5.6](https://github.com/apache/maven-surefire/releases/tag/surefire-3.5.6) [#50679](https://github.com/spring-projects/spring-boot/issues/50679)
- Upgrade to [Micrometer 1.15.12](https://github.com/micrometer-metrics/micrometer/releases/tag/v1.15.12) [#50511](https://github.com/spring-projects/spring-boot/issues/50511)
- Upgrade to [Micrometer Tracing 1.5.12](https://github.com/micrometer-metrics/tracing/releases/tag/v1.5.12) [#50512](https://github.com/spring-projects/spring-boot/issues/50512)
- Upgrade to Netty 4.1.135.Final [#50680](https://github.com/spring-projects/spring-boot/issues/50680)
- Upgrade to [Postgresql 42.7.11](https://github.com/pgjdbc/pgjdbc/releases/tag/REL42.7.11) [#50317](https://github.com/spring-projects/spring-boot/issues/50317)
- Upgrade to Pulsar 4.0.11 [#50725](https://github.com/spring-projects/spring-boot/issues/50725)
- Upgrade to [R2DBC MySQL 1.4.2](https://github.com/asyncer-io/r2dbc-mysql/releases/tag/r2dbc-mysql-1.4.2) [#50319](https://github.com/spring-projects/spring-boot/issues/50319)
- Upgrade to [Reactor Bom 2024.0.18](https://github.com/reactor/reactor/releases/tag/2024.0.18) [#50513](https://github.com/spring-projects/spring-boot/issues/50513)
- Upgrade to SAAJ Impl 3.0.6 [#50726](https://github.com/spring-projects/spring-boot/issues/50726)
- Upgrade to SLF4J 2.0.18 [#50533](https://github.com/spring-projects/spring-boot/issues/50533)
- Upgrade to [Spring AMQP 3.2.11](https://github.com/spring-projects/spring-amqp/releases/tag/v3.2.11) [#50514](https://github.com/spring-projects/spring-boot/issues/50514)
- Upgrade to [Spring Authorization Server 1.5.8](https://github.com/spring-projects/spring-authorization-server/releases/tag/1.5.8) [#50515](https://github.com/spring-projects/spring-boot/issues/50515)
- Upgrade to [Spring Batch 5.2.6](https://github.com/spring-projects/spring-batch/releases/tag/v5.2.6) [#50516](https://github.com/spring-projects/spring-boot/issues/50516)
- Upgrade to [Spring Data Bom 2025.0.12](https://github.com/spring-projects/spring-data-bom/releases/tag/2025.0.12) [#50517](https://github.com/spring-projects/spring-boot/issues/50517)
- Upgrade to [Spring Framework 6.2.19](https://github.com/spring-projects/spring-framework/releases/tag/v6.2.19) [#50518](https://github.com/spring-projects/spring-boot/issues/50518)
- Upgrade to [Spring GraphQL 1.4.6](https://github.com/spring-projects/spring-graphql/releases/tag/v1.4.6) [#50739](https://github.com/spring-projects/spring-boot/issues/50739)
- Upgrade to [Spring HATEOAS 2.5.3](https://github.com/spring-projects/spring-hateoas/releases/tag/2.5.3) [#50519](https://github.com/spring-projects/spring-boot/issues/50519)
- Upgrade to [Spring Integration 6.5.9](https://github.com/spring-projects/spring-integration/releases/tag/v6.5.9) [#50520](https://github.com/spring-projects/spring-boot/issues/50520)
- Upgrade to [Spring Kafka 3.3.16](https://github.com/spring-projects/spring-kafka/releases/tag/v3.3.16) [#50521](https://github.com/spring-projects/spring-boot/issues/50521)
- Upgrade to [Spring LDAP 3.3.8](https://github.com/spring-projects/spring-ldap/releases/tag/3.3.8) [#50522](https://github.com/spring-projects/spring-boot/issues/50522)
- Upgrade to [Spring Pulsar 1.2.18](https://github.com/spring-projects/spring-pulsar/releases/tag/v1.2.18) [#50523](https://github.com/spring-projects/spring-boot/issues/50523)
- Upgrade to [Spring RESTDocs 3.0.6](https://github.com/spring-projects/spring-restdocs/releases/tag/v3.0.6) [#50524](https://github.com/spring-projects/spring-boot/issues/50524)
- Upgrade to [Spring Retry 2.0.13](https://github.com/spring-projects/spring-retry/releases/tag/v2.0.13) [#50525](https://github.com/spring-projects/spring-boot/issues/50525)
- Upgrade to [Spring Security 6.5.11](https://github.com/spring-projects/spring-security/releases/tag/6.5.11) [#50526](https://github.com/spring-projects/spring-boot/issues/50526)
- Upgrade to [Spring Session 3.5.7](https://github.com/spring-projects/spring-session/releases/tag/3.5.7) [#50527](https://github.com/spring-projects/spring-boot/issues/50527)
- Upgrade to [Spring WS 4.1.4](https://github.com/spring-projects/spring-ws/releases/tag/v4.1.4) [#50528](https://github.com/spring-projects/spring-boot/issues/50528)
- Upgrade to [Tomcat 10.1.55](https://tomcat.apache.org/tomcat-10.1-doc/changelog.html) [#50534](https://github.com/spring-projects/spring-boot/issues/50534)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@Abdlatif-nabgha, @DragonFSKY, @Kapil-chn7, @SJvaca30, @SebTardif, @ares333, @codingkiddo, @dlwldnjs1009, @henriquejsza, @igormukhin, @johnnypwong, @kwondh5217, @leestana01, @mheath, @ngocnhan-tran1996, @nosan, @quaff, @scordio, @vinhhieu21, @won-seoop, and @zxuhan

---

> **Source** [spring-projects/spring-boot](https://github.com/spring-projects/spring-boot) · `v3.5.15` · 2026-06-10 · [upstream release](https://github.com/spring-projects/spring-boot/releases/tag/v3.5.15)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
