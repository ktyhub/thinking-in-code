---
title: "spring-boot v4.2.0-RC1"
project: "spring-boot"
repo: "spring-projects/spring-boot"
tag: "v4.2.0-RC1"
published: "2026-10-22"
type: "minor"
lang: "en"
summary: "Apply the readAllBytes() optimization to deflated nested jar entries #52285 · Improve uber jar performance by looking up classes and resources directly in nested jars #52246"
---

# spring-boot v4.2.0-RC1

## :star: New Features

- Apply the readAllBytes() optimization to deflated nested jar entries [#52285](https://github.com/spring-projects/spring-boot/pull/52285)
- Improve uber jar performance by looking up classes and resources directly in nested jars [#52246](https://github.com/spring-projects/spring-boot/pull/52246)
- Support RABBITMQ\_DEFAULT\_VHOST in Docker Compose RabbitMQ integration [#51940](https://github.com/spring-projects/spring-boot/pull/51940)
- Support random root passwords in MariaDB and MySQL Docker Compose integration [#51938](https://github.com/spring-projects/spring-boot/pull/51938)
- Improve auto-configuration sorting performance [#51867](https://github.com/spring-projects/spring-boot/pull/51867)
- Allow properties migrator to fail application startup [#51855](https://github.com/spring-projects/spring-boot/pull/51855)
- Add property to enable Caffeine async cache mode [#51844](https://github.com/spring-projects/spring-boot/pull/51844)
- Check resource existence once when looking for deleted files [#51841](https://github.com/spring-projects/spring-boot/pull/51841)
- Avoid parsing nested jar URLs for cached resource lookups [#51827](https://github.com/spring-projects/spring-boot/pull/51827)
- Support provided-scope libraries when extracting an executable war [#51372](https://github.com/spring-projects/spring-boot/pull/51372)
- Switch to ubuntu-resolute-builder as the default builder [#51249](https://github.com/spring-projects/spring-boot/pull/51249)
- Provide a callback for customizing Tomcat's Server [#50259](https://github.com/spring-projects/spring-boot/issues/50259)

## :lady_beetle: Bug Fixes

- JarUrlClassLoader rejects valid class names since #52271 [#52284](https://github.com/spring-projects/spring-boot/pull/52284)
- Resources containing spaces cannot be read from executable jars after #52246 [#52280](https://github.com/spring-projects/spring-boot/pull/52280)
- gRPC client 'grpc' load balancing fails to bind with a NullPointerException when no child policies are configured [#52269](https://github.com/spring-projects/spring-boot/issues/52269)
- OriginTrackedResource does not implement equals correctly [#52268](https://github.com/spring-projects/spring-boot/issues/52268)
- OriginTrackedPropertiesLoader drops properties whose name starts with # or ! [#52266](https://github.com/spring-projects/spring-boot/issues/52266)
- Logback ColorConverter unnecessarily parses its options for every log event [#52262](https://github.com/spring-projects/spring-boot/issues/52262)
- JWTs are rejected when issuer-uri is empty and jwk-set-uri is set [#52261](https://github.com/spring-projects/spring-boot/issues/52261)
- Package manifest attributes are missing for nested jars without directory entries [#52259](https://github.com/spring-projects/spring-boot/issues/52259)
- Empty system property in TestPropertyValues is cleared instead of being restored to its empty value [#52209](https://github.com/spring-projects/spring-boot/issues/52209)
- Graceful shutdown of Tomcat or Jetty may call back with REQUESTS\_ACTIVE when stop is called immediately after shutDownGracefully on an idle server [#52199](https://github.com/spring-projects/spring-boot/issues/52199)
- NettyWebServer stop may hang when called immediately after shutDownGracefully [#52198](https://github.com/spring-projects/spring-boot/issues/52198)
- Prevent gRPC client properties from overriding user customizations [#52194](https://github.com/spring-projects/spring-boot/issues/52194)
- MongoDB fails to connect when credentials contain a space [#52169](https://github.com/spring-projects/spring-boot/issues/52169)
- Authentication fails when password configured in spring.elasticsearch.uris contains a colon [#52167](https://github.com/spring-projects/spring-boot/issues/52167)
- Logging can be lost when a context is paused by the test context framework [#52089](https://github.com/spring-projects/spring-boot/issues/52089)
- Fractions of a second are handled incorrectly when configuring gRPC service config durations [#52087](https://github.com/spring-projects/spring-boot/issues/52087)
- Docker Compose support for MongoDB fails to connect when credentials contain a character that requires URL encoding [#52085](https://github.com/spring-projects/spring-boot/issues/52085)
- Jersey does not use the endpoint ObjectMapper when Actuator is running on a separate port [#51983](https://github.com/spring-projects/spring-boot/issues/51983)
- Configuration property descriptions may be lost when building incrementally with Gradle [#51926](https://github.com/spring-projects/spring-boot/issues/51926)
- BasicJsonParser mishandles escaped characters in nested lists and maps [#51909](https://github.com/spring-projects/spring-boot/issues/51909)
- Zero week value conversion fails with 'intValue cannot be extracted from WEEKS' exception [#51895](https://github.com/spring-projects/spring-boot/issues/51895)
- App fails to start when using DevTools and manually configuring JDBC or R2DBC without spring-boot-jdbc or spring-boot-r2dbc [#51891](https://github.com/spring-projects/spring-boot/issues/51891)
- Docker Compose support incorrectly recognizes MARIADB\_ALLOW\_EMPTY\_PASSWORD instead of MARIADB\_ALLOW\_EMPTY\_ROOT\_PASSWORD [#51889](https://github.com/spring-projects/spring-boot/issues/51889)
- Auto-configured Kotlinx Serialization JSON codec customization is not applied [#51878](https://github.com/spring-projects/spring-boot/issues/51878)
- Unavoidable warning when using ubuntu-resolute-builder with tiny run image [#51851](https://github.com/spring-projects/spring-boot/issues/51851)

## :notebook_with_decorative_cover: Documentation

- Fix typo in gRPC testing documentation [#52188](https://github.com/spring-projects/spring-boot/issues/52188)
- Fix Gradle example for servlet-based gRPC servers [#52086](https://github.com/spring-projects/spring-boot/issues/52086)
- Fix actuator endpoint property names in Javadoc [#51887](https://github.com/spring-projects/spring-boot/issues/51887)
- Document InetAddressFilter limitations with respect to proxy servers [#51864](https://github.com/spring-projects/spring-boot/issues/51864)

## :hammer: Dependency Upgrades

- Upgrade to [Byte Buddy 1.18.15](https://github.com/raphw/byte-buddy/releases/tag/byte-buddy-1.18.15) [#52215](https://github.com/spring-projects/spring-boot/issues/52215)
- Upgrade to Caffeine 3.3.1 [#52185](https://github.com/spring-projects/spring-boot/issues/52185)
- Upgrade to Cassandra Driver 4.19.4 [#52263](https://github.com/spring-projects/spring-boot/issues/52263)
- Upgrade to Classmate 1.8.0 [#52186](https://github.com/spring-projects/spring-boot/issues/52186)
- Upgrade to [Commons Lang3 3.21.0](https://commons.apache.org/proper/commons-lang/changes.html#a3.21.0) [#52058](https://github.com/spring-projects/spring-boot/issues/52058)
- Upgrade to [Couchbase Client 3.13.0](https://docs.couchbase.com/java-sdk/current/project-docs/sdk-release-notes.html) [#52216](https://github.com/spring-projects/spring-boot/issues/52216)
- Upgrade to [Elasticsearch Client 9.5.5](https://www.elastic.co/docs/release-notes/elasticsearch/clients/java/9-5-0) [#52217](https://github.com/spring-projects/spring-boot/issues/52217)
- Upgrade to Groovy 5.1.3 [#52059](https://github.com/spring-projects/spring-boot/issues/52059)
- Upgrade to [Grpc Java 1.84.1](https://github.com/grpc/grpc-java/releases/tag/v1.84.1) [#52176](https://github.com/spring-projects/spring-boot/issues/52176)
- Upgrade to [H2 2.5.252](https://github.com/h2database/h2database/releases/tag/version-2.5.252) [#52060](https://github.com/spring-projects/spring-boot/issues/52060)
- Upgrade to Hibernate 7.4.13.Final [#52144](https://github.com/spring-projects/spring-boot/issues/52144)
- Upgrade to Hibernate Validator 9.1.5.Final [#52218](https://github.com/spring-projects/spring-boot/issues/52218)
- Upgrade to [HtmlUnit 5.6.0](https://github.com/HtmlUnit/htmlunit/releases/tag/5.6.0) [#52145](https://github.com/spring-projects/spring-boot/issues/52145)
- Upgrade to HttpClient5 5.6.5 [#52146](https://github.com/spring-projects/spring-boot/issues/52146)
- Upgrade to HttpCore5 5.4.4 [#52063](https://github.com/spring-projects/spring-boot/issues/52063)
- Upgrade to [Infinispan 16.3.0](https://github.com/infinispan/infinispan/releases/tag/16.3.0) [#52064](https://github.com/spring-projects/spring-boot/issues/52064)
- Upgrade to [Jackson 2 Bom 2.21.7](https://github.com/FasterXML/jackson/wiki/Jackson-Release-2.21.7) [#52065](https://github.com/spring-projects/spring-boot/issues/52065)
- Upgrade to [Jackson Bom 3.1.7](https://github.com/FasterXML/jackson/wiki/Jackson-Release-3.1.7) [#52066](https://github.com/spring-projects/spring-boot/issues/52066)
- Upgrade to Jakarta Json Bind 3.0.4 [#52220](https://github.com/spring-projects/spring-boot/issues/52220)
- Upgrade to [Jaybird 6.0.7](https://github.com/FirebirdSQL/jaybird/releases/tag/v6.0.7) [#52147](https://github.com/spring-projects/spring-boot/issues/52147)
- Upgrade to [Jedis 8.0.2](https://github.com/redis/jedis/releases/tag/v8.0.2) [#52221](https://github.com/spring-projects/spring-boot/issues/52221)
- Upgrade to Jersey 4.0.3 [#52067](https://github.com/spring-projects/spring-boot/issues/52067)
- Upgrade to [Jetty 12.1.14](https://github.com/jetty/jetty.project/releases/tag/jetty-12.1.14) [#52068](https://github.com/spring-projects/spring-boot/issues/52068)
- Upgrade to [jOOQ 3.21.9](https://github.com/jOOQ/jOOQ/releases/tag/version-3.21.9) [#52069](https://github.com/spring-projects/spring-boot/issues/52069)
- Upgrade to [Kafka 4.4.0](https://downloads.apache.org/kafka/4.4.0/RELEASE\_NOTES.html) [#52247](https://github.com/spring-projects/spring-boot/issues/52247)
- Upgrade to [Kotlin 2.4.21](https://github.com/JetBrains/kotlin/releases/tag/v2.4.21) [#52231](https://github.com/spring-projects/spring-boot/issues/52231)
- Upgrade to [Lettuce 7.8.0.RELEASE](https://github.com/redis/lettuce/releases/tag/7.8.0.RELEASE) [#52104](https://github.com/spring-projects/spring-boot/issues/52104)
- Upgrade to Logback 1.6.5 [#52070](https://github.com/spring-projects/spring-boot/issues/52070)
- Upgrade to [Micrometer 1.18.0-RC1](https://github.com/micrometer-metrics/micrometer/releases/tag/v1.18.0-RC1) [#52100](https://github.com/spring-projects/spring-boot/issues/52100)
- Upgrade to [Micrometer Tracing 1.8.0-RC1](https://github.com/micrometer-metrics/tracing/releases/tag/v1.8.0-RC1) [#52138](https://github.com/spring-projects/spring-boot/issues/52138)
- Upgrade to [Mockito 5.24.0](https://github.com/mockito/mockito/releases/tag/v5.24.0) [#52071](https://github.com/spring-projects/spring-boot/issues/52071)
- Upgrade to [MongoDB 5.13.0](https://github.com/mongodb/mongo-java-driver/releases/tag/r5.13.0) [#52200](https://github.com/spring-projects/spring-boot/issues/52200)
- Upgrade to [MSSQL JDBC 13.6.1.jre11](https://github.com/microsoft/mssql-jdbc/releases/tag/v13.6.1) [#52232](https://github.com/spring-projects/spring-boot/issues/52232)
- Upgrade to [MySQL 26.7.0](https://dev.mysql.com/doc/relnotes/connector-j/en/news-26-7-0.html) [#52230](https://github.com/spring-projects/spring-boot/issues/52230)
- Upgrade to [Neo4j Java Driver 6.3.0](https://github.com/neo4j/neo4j-java-driver/releases/tag/6.3.0) [#52105](https://github.com/spring-projects/spring-boot/issues/52105)
- Upgrade to [Netty 4.2.19.Final](https://github.com/netty/netty/releases/tag/netty-4.2.19.Final) [#52072](https://github.com/spring-projects/spring-boot/issues/52072)
- Upgrade to OpenTelemetry 1.67.0 [#52248](https://github.com/spring-projects/spring-boot/issues/52248)
- Upgrade to [Postgresql 42.7.14](https://github.com/pgjdbc/pgjdbc/releases/tag/REL42.7.14) [#52110](https://github.com/spring-projects/spring-boot/issues/52110)
- Upgrade to [Prometheus Client 1.10.0](https://github.com/prometheus/client\_java/releases/tag/v1.10.0) [#52264](https://github.com/spring-projects/spring-boot/issues/52264)
- Upgrade to [Protobuf Java 4.36.2](https://github.com/protocolbuffers/protobuf/releases/tag/v4.36.2) [#52177](https://github.com/spring-projects/spring-boot/issues/52177)
- Upgrade to [Protobuf Maven Plugin 5.1.11](https://github.com/ascopes/protobuf-maven-plugin/releases/tag/v5.1.11) [#52073](https://github.com/spring-projects/spring-boot/issues/52073)
- Upgrade to [Pulsar 4.2.5](https://pulsar.apache.org/release-notes/versioned/pulsar-4.2.5) [#52074](https://github.com/spring-projects/spring-boot/issues/52074)
- Upgrade to [Qpid ProtonJ2 1.4.0](https://qpid.apache.org/releases/qpid-protonj2-1.4.0/release-notes.html) [#52149](https://github.com/spring-projects/spring-boot/issues/52149)
- Upgrade to [R2DBC MSSQL 1.0.7.RELEASE](https://github.com/r2dbc/r2dbc-mssql/releases/tag/v1.0.7.RELEASE) [#52075](https://github.com/spring-projects/spring-boot/issues/52075)
- Upgrade to [R2DBC Postgresql 1.1.3.RELEASE](https://github.com/pgjdbc/r2dbc-postgresql/releases/tag/v1.1.3.RELEASE) [#52076](https://github.com/spring-projects/spring-boot/issues/52076)
- Upgrade to [R2DBC Proxy 1.1.7.RELEASE](https://github.com/r2dbc/r2dbc-proxy/releases/tag/v1.1.7.RELEASE) [#52223](https://github.com/spring-projects/spring-boot/issues/52223)
- Upgrade to [RabbitMQ AMQP Client 1.6.0](https://github.com/rabbitmq/rabbitmq-amqp-java-client/releases/tag/v1.6.0) [#52150](https://github.com/spring-projects/spring-boot/issues/52150)
- Upgrade to [RabbitMQ Client 5.37.0](https://github.com/rabbitmq/rabbitmq-java-client/releases/tag/v5.37.0) [#52077](https://github.com/spring-projects/spring-boot/issues/52077)
- Upgrade to [RabbitMQ Stream Client 1.12.0](https://github.com/rabbitmq/rabbitmq-stream-java-client/releases/tag/v1.12.0) [#52151](https://github.com/spring-projects/spring-boot/issues/52151)
- Upgrade to [Reactor Bom 2026.0.0-RC1](https://github.com/reactor/reactor/releases/tag/2026.0.0-RC1) [#51973](https://github.com/spring-projects/spring-boot/issues/51973)
- Upgrade to Selenium 4.51.0 [#52152](https://github.com/spring-projects/spring-boot/issues/52152)
- Upgrade to [Selenium HtmlUnit 4.51.0](https://github.com/SeleniumHQ/htmlunit-driver/releases/tag/4.51.0) [#52153](https://github.com/spring-projects/spring-boot/issues/52153)
- Upgrade to SLF4J 2.0.20 [#52079](https://github.com/spring-projects/spring-boot/issues/52079)
- Upgrade to [Spring AMQP 4.2.0-RC1](https://github.com/spring-projects/spring-amqp/releases/tag/v4.2.0-RC1) [#51974](https://github.com/spring-projects/spring-boot/issues/51974)
- Upgrade to [Spring Batch 6.1.0-RC1](https://github.com/spring-projects/spring-batch/releases/tag/v6.1.0-RC1) [#52139](https://github.com/spring-projects/spring-boot/issues/52139)
- Upgrade to [Spring Data Bom 2026.1.0-RC1](https://github.com/spring-projects/spring-data-bom/releases/tag/2026.1.0-RC1) [#51981](https://github.com/spring-projects/spring-boot/issues/51981)
- Upgrade to [Spring Framework 7.1.0-RC1](https://github.com/spring-projects/spring-framework/releases/tag/v7.1.0-RC1) [#51975](https://github.com/spring-projects/spring-boot/issues/51975)
- Upgrade to [Spring GraphQL 2.1.0-RC1](https://github.com/spring-projects/spring-graphql/releases/tag/v2.1.0-RC1) [#52101](https://github.com/spring-projects/spring-boot/issues/52101)
- Upgrade to [Spring gRPC 1.1.2](https://github.com/spring-projects/spring-grpc/releases/tag/v1.1.2) [#51976](https://github.com/spring-projects/spring-boot/issues/51976)
- Upgrade to [Spring HATEOAS 3.2.0-RC1](https://github.com/spring-projects/spring-hateoas/releases/tag/3.2.0-RC1) [#52102](https://github.com/spring-projects/spring-boot/issues/52102)
- Upgrade to [Spring Integration 7.2.0-RC1](https://github.com/spring-projects/spring-integration/releases/tag/v7.2.0-RC1) [#51977](https://github.com/spring-projects/spring-boot/issues/51977)
- Upgrade to [Spring Kafka 4.2.0-RC1](https://github.com/spring-projects/spring-kafka/releases/tag/v4.2.0-RC1) [#51978](https://github.com/spring-projects/spring-boot/issues/51978)
- Upgrade to [Spring LDAP 4.2.0-RC1](https://docs.spring.io/spring-ldap/reference/4.2.0-RC1/api/java) [#52140](https://github.com/spring-projects/spring-boot/issues/52140)
- Upgrade to [Spring Pulsar 2.0.8](https://github.com/spring-projects/spring-pulsar/releases/tag/v2.0.8) [#52103](https://github.com/spring-projects/spring-boot/issues/52103)
- Upgrade to [Spring RESTDocs 4.1.0-RC1](https://github.com/spring-projects/spring-restdocs/releases/tag/v4.1.0-RC1) [#51979](https://github.com/spring-projects/spring-boot/issues/51979)
- Upgrade to [Spring Security 7.2.0-RC1](https://github.com/spring-projects/spring-security/releases/tag/7.2.0-RC1) [#52141](https://github.com/spring-projects/spring-boot/issues/52141)
- Upgrade to [Spring Session 4.2.0-RC1](https://github.com/spring-projects/spring-session/releases/tag/4.2.0-RC1) [#52142](https://github.com/spring-projects/spring-boot/issues/52142)
- Upgrade to [Spring WS 5.1.0-RC1](https://github.com/spring-projects/spring-ws/releases/tag/v5.1.0-RC1) [#51980](https://github.com/spring-projects/spring-boot/issues/51980)
- Upgrade to [Tomcat 11.0.27](https://tomcat.apache.org/tomcat-11.0-doc/changelog.html) [#52187](https://github.com/spring-projects/spring-boot/issues/52187)
- Upgrade to [Versions Maven Plugin 2.23.0](https://github.com/mojohaus/versions/releases/tag/2.23.0) [#52154](https://github.com/spring-projects/spring-boot/issues/52154)
- Upgrade to WebJars Locator Lite 1.1.5 [#52080](https://github.com/spring-projects/spring-boot/issues/52080)
- Upgrade to [XmlUnit2 2.14.0](https://github.com/xmlunit/xmlunit/releases/tag/v2.14.0) [#52081](https://github.com/spring-projects/spring-boot/issues/52081)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@CCCLL, @LindseyZ1205, @MycroCosmo, @NotAFlightRisk, @aalsanie, @anthonydahanne, @challa, @crapxxi, @dmitrysulman, @galenzo17, @geonheeryu, @hunseonglee, @janwaleed09, @khopland, @ksky8864, @lavinhoque33, @move-hoon, @ngocnhan-tran1996, @noojung, @ohchanKyu, @padosol, @rvullriede, @ryujungkyun, @scordio, @sharanrenukeshbharmshetty, @skdas20, @timtebeek, @xoruddl, and @zhoubiao188

---

> **Source** [spring-projects/spring-boot](https://github.com/spring-projects/spring-boot) · `v4.2.0-RC1` · 2026-10-22 · [upstream release](https://github.com/spring-projects/spring-boot/releases/tag/v4.2.0-RC1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
