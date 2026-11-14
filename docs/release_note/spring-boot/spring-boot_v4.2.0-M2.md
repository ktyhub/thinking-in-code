---
title: "spring-boot v4.2.0-M2"
project: "spring-boot"
repo: "spring-projects/spring-boot"
tag: "v4.2.0-M2"
published: "2026-09-24"
type: "pre"
lang: "en"
summary: "Deprecate AppOptics as it has retired #51810 · Improve classpath entry lookup performance during jar creation and extraction #51787 · Add spring.kafka.listener.await-async-results-on-stop property #51774"
---

# spring-boot v4.2.0-M2

## :star: New Features

- Deprecate AppOptics as it has retired [#51810](https://github.com/spring-projects/spring-boot/issues/51810)
- Improve classpath entry lookup performance during jar creation and extraction [#51787](https://github.com/spring-projects/spring-boot/pull/51787)
- Add spring.kafka.listener.await-async-results-on-stop property [#51774](https://github.com/spring-projects/spring-boot/pull/51774)
- Rationalize Kafka configuration outside of KafkaProperties [#51769](https://github.com/spring-projects/spring-boot/issues/51769)
- Make the active Observation LongTaskTimer on the auto-configured DefaultMeterObservationHandler opt-in [#51762](https://github.com/spring-projects/spring-boot/issues/51762)
- Configure allowed HTTP methods in GraphQL transports [#51732](https://github.com/spring-projects/spring-boot/issues/51732)
- Allow to use Mongo JobRepository with any PlatformTransactionManager [#51725](https://github.com/spring-projects/spring-boot/pull/51725)
- Resolve property placeholders in constructor binding default values [#51661](https://github.com/spring-projects/spring-boot/pull/51661)
- Add auto-configured BaggageTaggingSpanProcessor for OpenTelemetry tag fields [#51656](https://github.com/spring-projects/spring-boot/pull/51656)
- Improve the performance of layer index creation [#51654](https://github.com/spring-projects/spring-boot/pull/51654)
- Speed up layer lookups when extracting a layered jar [#51653](https://github.com/spring-projects/spring-boot/pull/51653)
- Move Tomcat's servlet-specific properties beneath server.tomcat.servlet [#51603](https://github.com/spring-projects/spring-boot/issues/51603)
- Align handling of null and empty values in SPRING\_APPLICATION\_JSON with YAML processing [#51583](https://github.com/spring-projects/spring-boot/issues/51583)
- Remove Dependency Management for Janino [#51567](https://github.com/spring-projects/spring-boot/issues/51567)
- Add jarmode tools command to print / export the SBOM [#51505](https://github.com/spring-projects/spring-boot/pull/51505)
- Pick up all `@TypeExcludeFilters` annotations on test classes [#51489](https://github.com/spring-projects/spring-boot/pull/51489)
- Make it easier to map MessageSourceProperties onto a user-provided AbstractResourceBasedMessageSource [#51484](https://github.com/spring-projects/spring-boot/pull/51484)
- Support multi-segment additional health endpoint paths [#51470](https://github.com/spring-projects/spring-boot/pull/51470)
- Honor spring.ldap.\* properties in the Embedded LDAP server [#51465](https://github.com/spring-projects/spring-boot/issues/51465)
- Add a configuration property for configuring embedded LDAP operation types that require authentication [#51461](https://github.com/spring-projects/spring-boot/pull/51461)
- Add TWENTY\_SEVEN to JavaVersion enum [#51427](https://github.com/spring-projects/spring-boot/issues/51427)
- Automatically filter additional configuration metadata from Spring Boot-built archives [#51386](https://github.com/spring-projects/spring-boot/pull/51386)
- Add SSL bundle support to LDAP auto-configuration [#51382](https://github.com/spring-projects/spring-boot/pull/51382)
- Align the default for server.tomcat.use-relative-redirects with Tomcat's default [#51173](https://github.com/spring-projects/spring-boot/pull/51173)
- Allow configuring Micrometer Tracing MDC keys [#50595](https://github.com/spring-projects/spring-boot/pull/50595)
- Add common OTLP configuration for endpoint, compression and headers [#50461](https://github.com/spring-projects/spring-boot/pull/50461)
- Retain probe defaults when configuring other properties on probe health groups [#50296](https://github.com/spring-projects/spring-boot/pull/50296)
- Include security error body in WebFlux Cloud Foundry endpoint responses [#50256](https://github.com/spring-projects/spring-boot/pull/50256)
- Provide a configuration property to switch from Micrometer to OpenTelemetry semantic conventions [#49241](https://github.com/spring-projects/spring-boot/pull/49241)
- Support listener and template specific Kafka Admin properties [#38830](https://github.com/spring-projects/spring-boot/issues/38830)

## :lady_beetle: Bug Fixes

- spring.http.clients.cookie-handling has no effect when using a reactive client backed by an HttpComponents connector [#51767](https://github.com/spring-projects/spring-boot/issues/51767)
- NullPointerException can be thrown when using uber jars due to a race condition in NestedJarFileResources  [#51746](https://github.com/spring-projects/spring-boot/issues/51746)
- Connection fails when rabbitmq Docker Compose service is configured to use SSL [#51668](https://github.com/spring-projects/spring-boot/issues/51668)
- SBOM-related manifest attributes are missing from Maven-packaged wars [#51652](https://github.com/spring-projects/spring-boot/issues/51652)
- When server.reactive.session.cookie.same-site is not set, session cookies have no SameSite attribute [#51640](https://github.com/spring-projects/spring-boot/issues/51640)
- OAuth2 resource server ignores authorities-claim-delimiter when set on its own [#51631](https://github.com/spring-projects/spring-boot/issues/51631)
- developmentOnly and testAndDevelopmentOnly configurations do not specify any attributes causing potential resolution problems [#51624](https://github.com/spring-projects/spring-boot/issues/51624)
- In a reactive web application, Cloud Foundry security integration returns a 500 rather than a 503 when the cloud controller URL is unavailable [#51615](https://github.com/spring-projects/spring-boot/issues/51615)
- ReactiveOAuth2ResourceServerWebSecurityAutoConfiguration annotated with wrong condition [#51588](https://github.com/spring-projects/spring-boot/issues/51588)
- WritableJson.toByteArray() may corrupt supplementary characters [#51586](https://github.com/spring-projects/spring-boot/issues/51586)
- Layer temp file is not deleted when layer creation fails [#51582](https://github.com/spring-projects/spring-boot/issues/51582)
- Docker Compose integration for RabbitMQ skips credential fallbacks when an environment variable has no value [#51579](https://github.com/spring-projects/spring-boot/issues/51579)
- Some assertion messages name the wrong parameter [#51575](https://github.com/spring-projects/spring-boot/issues/51575)
- OAuth2ResourceServerProperties.Jwt has a setter that does not match its getter [#51566](https://github.com/spring-projects/spring-boot/issues/51566)
- jarmode tools commands print stacktrace instead of an error message [#51548](https://github.com/spring-projects/spring-boot/issues/51548)
- Docker Compose ProcessRunner can hang or leave orphan processes [#51539](https://github.com/spring-projects/spring-boot/issues/51539)
- NestedByteChannel.read(ByteBuffer) incorrectly returns 0 when buffer could not be filled [#51521](https://github.com/spring-projects/spring-boot/issues/51521)
- Customizer null checks in HTTP client builders assert the wrong attribute [#51514](https://github.com/spring-projects/spring-boot/issues/51514)
- SSL host config customizations may be lost during Tomcat initialization [#51512](https://github.com/spring-projects/spring-boot/issues/51512)
- SQL Server Docker Compose integration may duplicate the JDBC URL's encrypt parameter [#51482](https://github.com/spring-projects/spring-boot/issues/51482)
- SSL host config customizations are lost when reloading SSL bundles [#51458](https://github.com/spring-projects/spring-boot/issues/51458)
- OAuth2ClientProperties are not available when a user-defined ClientRegistrationRepository bean is provided [#51451](https://github.com/spring-projects/spring-boot/issues/51451)
- LdapHealthIndicator reports UNKNOWN instead of UP when LDAP server doesn't expose a protocol version [#51442](https://github.com/spring-projects/spring-boot/issues/51442)
- JmsHealthIndicator leaks watchdog threads if start fails immediately [#51434](https://github.com/spring-projects/spring-boot/issues/51434)
- Honour a wrapper's unwrap when resolving the root DataSource [#51420](https://github.com/spring-projects/spring-boot/issues/51420)
- Source is not closed consistently by all JSON marshal testers [#51419](https://github.com/spring-projects/spring-boot/issues/51419)
- File handle in SpringBootJoranConfigurator should be closed [#51416](https://github.com/spring-projects/spring-boot/issues/51416)
- Validation of deprecated io.buildpacks.stack.id is too aggressive [#51401](https://github.com/spring-projects/spring-boot/issues/51401)

## :notebook_with_decorative_cover: Documentation

- Document support for Java 27 [#51826](https://github.com/spring-projects/spring-boot/issues/51826)
- Fix broken links from reference documentation to external Javadoc [#51821](https://github.com/spring-projects/spring-boot/issues/51821)
- Remove reference to AppOptics in the reference guide as it has retired [#51809](https://github.com/spring-projects/spring-boot/issues/51809)
- Fix broken links [#51803](https://github.com/spring-projects/spring-boot/issues/51803)
- Update Spring Framework reference links [#51772](https://github.com/spring-projects/spring-boot/issues/51772)
- Update testcontainers javadoc links [#51766](https://github.com/spring-projects/spring-boot/issues/51766)
- Maven plugin documentation incorrectly references remote restart property [#51748](https://github.com/spring-projects/spring-boot/issues/51748)
- Fix documented default of spring.test.database.replace [#51729](https://github.com/spring-projects/spring-boot/issues/51729)
- Fix ActiveMQContainer Javadoc link in Testcontainers documentation [#51723](https://github.com/spring-projects/spring-boot/pull/51723)
- Correct Jackson 3 Javadoc links [#51664](https://github.com/spring-projects/spring-boot/issues/51664)
- Document baggage propagation over gRPC [#51657](https://github.com/spring-projects/spring-boot/issues/51657)
- Fix typo in deprecated Pushgateway base-url property metadata [#51633](https://github.com/spring-projects/spring-boot/issues/51633)
- Remove references to Spring Data Geode [#51565](https://github.com/spring-projects/spring-boot/issues/51565)
- Fix typos in service containers javadoc and reference documentation [#51446](https://github.com/spring-projects/spring-boot/issues/51446)
- Document SAML2 back-off in WebFlux security documentation [#51436](https://github.com/spring-projects/spring-boot/issues/51436)
- Remove reference to removed SpringBootWebSecurityConfiguration [#51414](https://github.com/spring-projects/spring-boot/issues/51414)

## :hammer: Dependency Upgrades

- Upgrade to [ActiveMQ 6.3.2](https://activemq.apache.org/components/classic/download/classic-06-03-02) [#51669](https://github.com/spring-projects/spring-boot/issues/51669)
- Upgrade to [Artemis 2.57.0](https://activemq.apache.org/components/artemis/download/release-notes-2.57.0) [#51670](https://github.com/spring-projects/spring-boot/issues/51670)
- Upgrade to [Build Helper Maven Plugin 3.6.2](https://github.com/mojohaus/build-helper-maven-plugin/releases/tag/3.6.2) [#51734](https://github.com/spring-projects/spring-boot/issues/51734)
- Upgrade to Byte Buddy 1.18.14 [#51753](https://github.com/spring-projects/spring-boot/issues/51753)
- Upgrade to [Couchbase Client 3.12.3](https://docs.couchbase.com/java-sdk/current/project-docs/sdk-release-notes.html) [#51754](https://github.com/spring-projects/spring-boot/issues/51754)
- Upgrade to Elasticsearch Client 9.5.4 [#51831](https://github.com/spring-projects/spring-boot/issues/51831)
- Upgrade to [FreeMarker 2.3.35](https://freemarker.apache.org/docs/versions\_2\_3\_35.html) [#51672](https://github.com/spring-projects/spring-boot/issues/51672)
- Upgrade to [GraphQL Java 26.1](https://github.com/graphql-java/graphql-java/releases/tag/v26.1) [#51735](https://github.com/spring-projects/spring-boot/issues/51735)
- Upgrade to Groovy 5.1.2 [#51673](https://github.com/spring-projects/spring-boot/issues/51673)
- Upgrade to [H2 2.5.250](https://github.com/h2database/h2database/releases/tag/version-2.5.250) [#51674](https://github.com/spring-projects/spring-boot/issues/51674)
- Upgrade to Hibernate 7.4.9.Final [#51832](https://github.com/spring-projects/spring-boot/issues/51832)
- Upgrade to [HtmlUnit 5.5.0](https://github.com/HtmlUnit/htmlunit/releases/tag/5.5.0) [#51676](https://github.com/spring-projects/spring-boot/issues/51676)
- Upgrade to [Infinispan 16.2.3](https://github.com/infinispan/infinispan/releases/tag/16.2.3) [#51677](https://github.com/spring-projects/spring-boot/issues/51677)
- Upgrade to [Jackson 2 Bom 2.21.6](https://github.com/FasterXML/jackson/wiki/Jackson-Release-2.21.6) [#51678](https://github.com/spring-projects/spring-boot/issues/51678)
- Upgrade to [Jackson Bom 3.1.6](https://github.com/FasterXML/jackson/wiki/Jackson-Release-3.1.6) [#51679](https://github.com/spring-projects/spring-boot/issues/51679)
- Upgrade to Jakarta Json Bind 3.0.3 [#51680](https://github.com/spring-projects/spring-boot/issues/51680)
- Upgrade to [Jaybird 6.0.6](https://github.com/FirebirdSQL/jaybird/releases/tag/v6.0.6) [#51681](https://github.com/spring-projects/spring-boot/issues/51681)
- Upgrade to [Jedis 8.0.1](https://github.com/redis/jedis/releases/tag/v8.0.1) [#51756](https://github.com/spring-projects/spring-boot/issues/51756)
- Upgrade to [Jetty 12.1.13](https://github.com/jetty/jetty.project/releases/tag/jetty-12.1.13) [#51682](https://github.com/spring-projects/spring-boot/issues/51682)
- Upgrade to [jOOQ 3.21.8](https://github.com/jOOQ/jOOQ/releases/tag/version-3.21.8) [#51683](https://github.com/spring-projects/spring-boot/issues/51683)
- Upgrade to [Kotlin 2.4.20](https://github.com/JetBrains/kotlin/releases/tag/v2.4.20) [#51816](https://github.com/spring-projects/spring-boot/issues/51816)
- Upgrade to [Lettuce 7.7.0.RELEASE](https://github.com/redis/lettuce/releases/tag/7.7.0.RELEASE) [#51757](https://github.com/spring-projects/spring-boot/issues/51757)
- Upgrade to [Liquibase 5.0.4](https://github.com/liquibase/liquibase/releases/tag/v5.0.4) [#51684](https://github.com/spring-projects/spring-boot/issues/51684)
- Upgrade to Logback 1.6.3 [#51685](https://github.com/spring-projects/spring-boot/issues/51685)
- Upgrade to Lombok 1.18.48 [#51686](https://github.com/spring-projects/spring-boot/issues/51686)
- Upgrade to [Maven Compiler Plugin 3.16.0](https://github.com/apache/maven-compiler-plugin/releases/tag/maven-compiler-plugin-3.16.0) [#51687](https://github.com/spring-projects/spring-boot/issues/51687)
- Upgrade to [Maven Deploy Plugin 3.2.0](https://github.com/apache/maven-deploy-plugin/releases/tag/maven-deploy-plugin-3.2.0) [#51758](https://github.com/spring-projects/spring-boot/issues/51758)
- Upgrade to [Maven Failsafe Plugin 3.6.0](https://github.com/apache/maven-surefire/releases/tag/surefire-3.6.0) [#51688](https://github.com/spring-projects/spring-boot/issues/51688)
- Upgrade to [Maven Install Plugin 3.2.0](https://github.com/apache/maven-install-plugin/releases/tag/maven-install-plugin-3.2.0) [#51759](https://github.com/spring-projects/spring-boot/issues/51759)
- Upgrade to [Maven Surefire Plugin 3.6.0](https://github.com/apache/maven-surefire/releases/tag/surefire-3.6.0) [#51689](https://github.com/spring-projects/spring-boot/issues/51689)
- Upgrade to [Micrometer 1.18.0-M2](https://github.com/micrometer-metrics/micrometer/releases/tag/v1.18.0-M2) [#51776](https://github.com/spring-projects/spring-boot/issues/51776)
- Upgrade to [Micrometer Tracing 1.8.0-M2](https://github.com/micrometer-metrics/tracing/releases/tag/v1.8.0-M2) [#51777](https://github.com/spring-projects/spring-boot/issues/51777)
- Upgrade to [MongoDB 5.11.1](https://github.com/mongodb/mongo-java-driver/releases/tag/r5.11.1) [#51760](https://github.com/spring-projects/spring-boot/issues/51760)
- Upgrade to [MSSQL JDBC 13.6.0.jre11](https://github.com/microsoft/mssql-jdbc/releases/tag/v13.6.0) [#51690](https://github.com/spring-projects/spring-boot/issues/51690)
- Upgrade to Native Build Tools Plugin 1.1.14 [#51834](https://github.com/spring-projects/spring-boot/issues/51834)
- Upgrade to [Netty 4.2.18.Final](https://github.com/netty/netty/releases/tag/netty-4.2.18.Final) [#51692](https://github.com/spring-projects/spring-boot/issues/51692)
- Upgrade to [OpenTelemetry 1.65.0](https://github.com/open-telemetry/opentelemetry-java/releases/tag/v1.65.0) [#51779](https://github.com/spring-projects/spring-boot/issues/51779)
- Upgrade to Pooled JMS 3.2.5 [#51693](https://github.com/spring-projects/spring-boot/issues/51693)
- Upgrade to [Prometheus Client 1.9.0](https://github.com/prometheus/client\_java/releases/tag/v1.9.0) [#51811](https://github.com/spring-projects/spring-boot/issues/51811)
- Upgrade to [Protobuf Maven Plugin 5.1.9](https://github.com/ascopes/protobuf-maven-plugin/releases/tag/v5.1.9) [#51737](https://github.com/spring-projects/spring-boot/issues/51737)
- Upgrade to [Qpid ProtonJ2 1.3.0](https://qpid.apache.org/releases/qpid-protonj2-1.3.0/release-notes.html) [#51694](https://github.com/spring-projects/spring-boot/issues/51694)
- Upgrade to [R2DBC MariaDB 1.4.2](https://github.com/mariadb-corporation/mariadb-connector-r2dbc/releases/tag/1.4.2) [#51695](https://github.com/spring-projects/spring-boot/issues/51695)
- Upgrade to [R2DBC MSSQL 1.0.6.RELEASE](https://github.com/r2dbc/r2dbc-mssql/releases/tag/v1.0.6.RELEASE) [#51696](https://github.com/spring-projects/spring-boot/issues/51696)
- Upgrade to [RabbitMQ AMQP Client 1.5.0](https://github.com/rabbitmq/rabbitmq-amqp-java-client/releases/tag/v1.5.0) [#51698](https://github.com/spring-projects/spring-boot/issues/51698)
- Upgrade to RabbitMQ Client 5.36.0 [#51818](https://github.com/spring-projects/spring-boot/issues/51818)
- Upgrade to [RabbitMQ Stream Client 1.11.0](https://github.com/rabbitmq/rabbitmq-stream-java-client/releases/tag/v1.11.0) [#51699](https://github.com/spring-projects/spring-boot/issues/51699)
- Upgrade to [Reactor Bom 2026.0.0-M2](https://github.com/reactor/reactor/releases/tag/2026.0.0-M2) [#51710](https://github.com/spring-projects/spring-boot/issues/51710)
- Upgrade to [Selenium 4.49.0](https://github.com/SeleniumHQ/selenium/releases/tag/selenium-4.49.0) [#51700](https://github.com/spring-projects/spring-boot/issues/51700)
- Upgrade to [Selenium HtmlUnit 4.48.0](https://github.com/SeleniumHQ/htmlunit-driver/releases/tag/4.48.0) [#51701](https://github.com/spring-projects/spring-boot/issues/51701)
- Upgrade to SLF4J 2.0.19 [#51702](https://github.com/spring-projects/spring-boot/issues/51702)
- Upgrade to SnakeYAML 2.7 [#51703](https://github.com/spring-projects/spring-boot/issues/51703)
- Upgrade to [Spring AMQP 4.2.0-M2](https://github.com/spring-projects/spring-amqp/releases/tag/v4.2.0-M2) [#51711](https://github.com/spring-projects/spring-boot/issues/51711)
- Upgrade to [Spring Batch 6.1.0-M2](https://github.com/spring-projects/spring-batch/releases/tag/v6.1.0-M2) [#51778](https://github.com/spring-projects/spring-boot/issues/51778)
- Upgrade to [Spring Data Bom 2026.1.0-M2](https://github.com/spring-projects/spring-data-bom/releases/tag/2026.1.0-M2) [#51752](https://github.com/spring-projects/spring-boot/issues/51752)
- Upgrade to [Spring Framework 7.1.0-M2](https://github.com/spring-projects/spring-framework/releases/tag/v7.1.0-M2) [#51712](https://github.com/spring-projects/spring-boot/issues/51712)
- Upgrade to [Spring GraphQL 2.1.0-M1](https://github.com/spring-projects/spring-graphql/releases/tag/v2.1.0-M1) [#51713](https://github.com/spring-projects/spring-boot/issues/51713)
- Upgrade to [Spring HATEOAS 3.2.0-M2](https://github.com/spring-projects/spring-hateoas/releases/tag/3.2.0-M2) [#51789](https://github.com/spring-projects/spring-boot/issues/51789)
- Upgrade to [Spring Integration 7.2.0-M2](https://github.com/spring-projects/spring-integration/releases/tag/v7.2.0-M2) [#51714](https://github.com/spring-projects/spring-boot/issues/51714)
- Upgrade to [Spring Kafka 4.2.0-M2](https://github.com/spring-projects/spring-kafka/releases/tag/v4.2.0-M2) [#51715](https://github.com/spring-projects/spring-boot/issues/51715)
- Upgrade to [Spring LDAP 4.2.0-M1](https://github.com/spring-projects/spring-ldap/releases/tag/4.2.0-M1) [#51804](https://github.com/spring-projects/spring-boot/issues/51804)
- Upgrade to [Spring Security 7.2.0-M2](https://github.com/spring-projects/spring-security/releases/tag/7.2.0-M2) [#51805](https://github.com/spring-projects/spring-boot/issues/51805)
- Upgrade to [Spring Session 4.2.0-M1](https://github.com/spring-projects/spring-session/releases/tag/4.2.0-M1) [#51806](https://github.com/spring-projects/spring-boot/issues/51806)
- Upgrade to [Spring WS 5.1.0-M1](https://github.com/spring-projects/spring-ws/releases/tag/v5.1.0-M1) [#51716](https://github.com/spring-projects/spring-boot/issues/51716)
- Upgrade to [SQLite JDBC 3.53.4.0](https://github.com/xerial/sqlite-jdbc/releases/tag/3.53.4.0) [#51704](https://github.com/spring-projects/spring-boot/issues/51704)
- Upgrade to Tomcat 11.0.26 [#51819](https://github.com/spring-projects/spring-boot/issues/51819)
- Upgrade to [Versions Maven Plugin 2.22.0](https://github.com/mojohaus/versions/releases/tag/2.22.0) [#51761](https://github.com/spring-projects/spring-boot/issues/51761)
- Upgrade to [XML Maven Plugin 1.2.2](https://github.com/mojohaus/xml-maven-plugin/releases/tag/1.2.2) [#51738](https://github.com/spring-projects/spring-boot/issues/51738)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@2heunxun, @CHISANW, @COBI-98, @DevJunz, @JunggiKim, @MacAlsandair, @SebTardif, @Wanbinyu, @basteez, @dhruv9b, @dlwhdgus0810, @dlwldn30, @fabio-grassi, @henriquejsza, @hjm12223, @htjworld, @icikle, @jjh75607, @kdomo, @msridhar, @ngocnhan-tran1996, @nikita-kibitkin, @noojung, @nosan, @o-shevchenko, @ohchanKyu, @philsttr, @piyushrajyadav, @quaff, @scottfrederick, @seanxuu, @shakuzen, @somiljain2006, @vlsi, @xoruddl, @xxxxxxjun, and @yyuneu

---

> **Source** [spring-projects/spring-boot](https://github.com/spring-projects/spring-boot) · `v4.2.0-M2` · 2026-09-24 · [upstream release](https://github.com/spring-projects/spring-boot/releases/tag/v4.2.0-M2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
