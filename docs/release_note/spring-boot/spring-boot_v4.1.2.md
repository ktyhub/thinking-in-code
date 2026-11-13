---
title: "spring-boot v4.1.2"
project: "spring-boot"
repo: "spring-projects/spring-boot"
tag: "v4.1.2"
published: "2026-10-22"
type: "patch"
lang: "en"
summary: "Thank you to all the contributors who worked on this release:"
---

# spring-boot v4.1.2

## :star: New Features

- Add TWENTY\_SEVEN to JavaVersion enum [#51426](https://github.com/spring-projects/spring-boot/issues/51426)

## :lady_beetle: Bug Fixes

- OriginTrackedResource does not implement equals correctly [#52267](https://github.com/spring-projects/spring-boot/issues/52267)
- OriginTrackedPropertiesLoader drops properties whose name starts with # or ! [#52265](https://github.com/spring-projects/spring-boot/issues/52265)
- JWTs are rejected when issuer-uri is empty and jwk-set-uri is set [#52260](https://github.com/spring-projects/spring-boot/issues/52260)
- Package manifest attributes are missing for nested jars without directory entries [#52258](https://github.com/spring-projects/spring-boot/issues/52258)
- Logback ColorConverter unnecessarily parses its options for every log event [#52228](https://github.com/spring-projects/spring-boot/pull/52228)
- Empty system property in TestPropertyValues is cleared instead of being restored to its empty value [#52208](https://github.com/spring-projects/spring-boot/issues/52208)
- Graceful shutdown of Tomcat or Jetty may call back with REQUESTS\_ACTIVE when stop is called immediately after shutDownGracefully on an idle server [#52197](https://github.com/spring-projects/spring-boot/issues/52197)
- NettyWebServer stop may hang when called immediately after shutDownGracefully [#52196](https://github.com/spring-projects/spring-boot/issues/52196)
- gRPC client 'grpc' load balancing fails to bind with a NullPointerException when no child policies are configured [#52193](https://github.com/spring-projects/spring-boot/pull/52193)
- Prevent gRPC client properties from overriding user customizations [#52175](https://github.com/spring-projects/spring-boot/pull/52175)
- MongoDB fails to connect when credentials contain a space [#52168](https://github.com/spring-projects/spring-boot/issues/52168)
- Authentication fails when password configured in spring.elasticsearch.uris contains a colon [#52166](https://github.com/spring-projects/spring-boot/issues/52166)
- Logging can be lost when a context is paused by the test context framework [#52088](https://github.com/spring-projects/spring-boot/issues/52088)
- Docker Compose support for MongoDB fails to connect when credentials contain a character that requires URL encoding [#52084](https://github.com/spring-projects/spring-boot/issues/52084)
- Jersey does not use the endpoint ObjectMapper when Actuator is running on a separate port [#51982](https://github.com/spring-projects/spring-boot/issues/51982)
- Fractions of a second are handled incorrectly when configuring gRPC service config durations [#51957](https://github.com/spring-projects/spring-boot/pull/51957)
- Configuration property descriptions may be lost when building incrementally with Gradle [#51925](https://github.com/spring-projects/spring-boot/issues/51925)
- BasicJsonParser mishandles escaped characters in nested lists and maps [#51908](https://github.com/spring-projects/spring-boot/issues/51908)
- Zero week value conversion fails with 'intValue cannot be extracted from WEEKS' exception [#51894](https://github.com/spring-projects/spring-boot/issues/51894)
- App fails to start when using DevTools and manually configuring JDBC or R2DBC without spring-boot-jdbc or spring-boot-r2dbc [#51890](https://github.com/spring-projects/spring-boot/issues/51890)
- Docker Compose support incorrectly recognizes MARIADB\_ALLOW\_EMPTY\_PASSWORD instead of MARIADB\_ALLOW\_EMPTY\_ROOT\_PASSWORD [#51888](https://github.com/spring-projects/spring-boot/issues/51888)
- Auto-configured Kotlinx Serialization JSON codec customization is not applied [#51877](https://github.com/spring-projects/spring-boot/issues/51877)
- NullPointerException can be thrown when using uber jars due to a race condition in NestedJarFileResources  [#51745](https://github.com/spring-projects/spring-boot/issues/51745)
- DevTools does not detect a reactive web environment [#51730](https://github.com/spring-projects/spring-boot/issues/51730)
- spring.http.clients.cookie-handling has no effect when using a reactive client backed by an HttpComponents connector [#51724](https://github.com/spring-projects/spring-boot/pull/51724)
- Connection fails when rabbitmq Docker Compose service is configured to use SSL [#51667](https://github.com/spring-projects/spring-boot/issues/51667)
- SBOM-related manifest attributes are missing from Maven-packaged wars [#51651](https://github.com/spring-projects/spring-boot/issues/51651)
- When server.reactive.session.cookie.same-site is not set, session cookies have no SameSite attribute [#51639](https://github.com/spring-projects/spring-boot/issues/51639)
- OAuth2 resource server ignores authorities-claim-delimiter when set on its own [#51630](https://github.com/spring-projects/spring-boot/issues/51630)
- developmentOnly and testAndDevelopmentOnly configurations do not specify any attributes causing potential resolution problems [#51623](https://github.com/spring-projects/spring-boot/issues/51623)
- In a reactive web application, Cloud Foundry security integration returns a 500 rather than a 503 when the cloud controller URL is unavailable [#51614](https://github.com/spring-projects/spring-boot/issues/51614)
- Layer temp file is not deleted when layer creation fails [#51581](https://github.com/spring-projects/spring-boot/issues/51581)
- Docker Compose integration for RabbitMQ skips credential fallbacks when an environment variable has no value [#51578](https://github.com/spring-projects/spring-boot/issues/51578)
- Some assertion messages name the wrong parameter [#51574](https://github.com/spring-projects/spring-boot/issues/51574)
- OAuth2ResourceServerProperties.Jwt has a setter that does not match its getter [#51562](https://github.com/spring-projects/spring-boot/issues/51562)
- jarmode tools commands print stacktrace instead of an error message [#51547](https://github.com/spring-projects/spring-boot/issues/51547)
- Docker Compose ProcessRunner can hang or leave orphan processes [#51538](https://github.com/spring-projects/spring-boot/issues/51538)
- NestedByteChannel.read(ByteBuffer) incorrectly returns 0 when buffer could not be filled [#51520](https://github.com/spring-projects/spring-boot/issues/51520)
- Customizer null checks in HTTP client builders assert the wrong attribute [#51513](https://github.com/spring-projects/spring-boot/issues/51513)
- SSL host config customizations may be lost during Tomcat initialization [#51511](https://github.com/spring-projects/spring-boot/issues/51511)
- SQL Server Docker Compose integration may duplicate the JDBC URL's encrypt parameter [#51481](https://github.com/spring-projects/spring-boot/issues/51481)
- WritableJson.toByteArray() may corrupt supplementary characters [#51464](https://github.com/spring-projects/spring-boot/pull/51464)
- SSL host config customizations are lost when reloading SSL bundles [#51457](https://github.com/spring-projects/spring-boot/issues/51457)
- OAuth2ClientProperties are not available when a user-defined ClientRegistrationRepository bean is provided [#51450](https://github.com/spring-projects/spring-boot/issues/51450)
- LdapHealthIndicator reports UNKNOWN instead of UP when LDAP server doesn't expose a protocol version [#51441](https://github.com/spring-projects/spring-boot/pull/51441)
- JmsHealthIndicator leaks watchdog threads if start fails immediately [#51433](https://github.com/spring-projects/spring-boot/issues/51433)
- Source is not closed consistently by all JSON marshal testers [#51418](https://github.com/spring-projects/spring-boot/issues/51418)
- File handle in SpringBootJoranConfigurator should be closed [#51415](https://github.com/spring-projects/spring-boot/issues/51415)
- Honour a wrapper's unwrap when resolving the root DataSource [#51410](https://github.com/spring-projects/spring-boot/pull/51410)
- Validation of deprecated io.buildpacks.stack.id is too aggressive [#51400](https://github.com/spring-projects/spring-boot/issues/51400)
- ReactiveOAuth2ResourceServerWebSecurityAutoConfiguration annotated with wrong condition [#50778](https://github.com/spring-projects/spring-boot/issues/50778)

## :notebook_with_decorative_cover: Documentation

- Fix typo in gRPC testing documentation [#52181](https://github.com/spring-projects/spring-boot/pull/52181)
- Fix Gradle example for servlet-based gRPC servers [#51956](https://github.com/spring-projects/spring-boot/pull/51956)
- Fix actuator endpoint property names in Javadoc [#51886](https://github.com/spring-projects/spring-boot/issues/51886)
- Document InetAddressFilter limitations with respect to proxy servers [#51863](https://github.com/spring-projects/spring-boot/issues/51863)
- Document support for Java 27 [#51825](https://github.com/spring-projects/spring-boot/issues/51825)
- Fix broken links from reference documentation to external Javadoc [#51820](https://github.com/spring-projects/spring-boot/issues/51820)
- Remove reference to AppOptics in the reference guide as it has retired [#51808](https://github.com/spring-projects/spring-boot/issues/51808)
- Fix broken links [#51802](https://github.com/spring-projects/spring-boot/issues/51802)
- Update Spring Framework reference links [#51771](https://github.com/spring-projects/spring-boot/issues/51771)
- Update testcontainers javadoc links [#51765](https://github.com/spring-projects/spring-boot/issues/51765)
- Maven plugin documentation incorrectly references remote restart property [#51747](https://github.com/spring-projects/spring-boot/issues/51747)
- Fix documented default of spring.test.database.replace [#51728](https://github.com/spring-projects/spring-boot/issues/51728)
- Correct Jackson 3 Javadoc links [#51663](https://github.com/spring-projects/spring-boot/issues/51663)
- Fix typo in deprecated Pushgateway base-url property metadata [#51632](https://github.com/spring-projects/spring-boot/issues/51632)
- Document baggage propagation over gRPC [#51597](https://github.com/spring-projects/spring-boot/pull/51597)
- Remove references to Spring Data Geode [#51564](https://github.com/spring-projects/spring-boot/issues/51564)
- Fix typos in service containers javadoc and reference documentation [#51445](https://github.com/spring-projects/spring-boot/issues/51445)
- Document SAML2 back-off in WebFlux security documentation [#51435](https://github.com/spring-projects/spring-boot/issues/51435)
- Remove reference to removed SpringBootWebSecurityConfiguration [#51413](https://github.com/spring-projects/spring-boot/issues/51413)

## :hammer: Dependency Upgrades

- Upgrade to [ActiveMQ 6.2.10](https://activemq.apache.org/components/classic/download/classic-06-02-10) [#52005](https://github.com/spring-projects/spring-boot/issues/52005)
- Upgrade to [Build Helper Maven Plugin 3.6.2](https://github.com/mojohaus/build-helper-maven-plugin/releases/tag/3.6.2) [#52006](https://github.com/spring-projects/spring-boot/issues/52006)
- Upgrade to Byte Buddy 1.18.15 [#52219](https://github.com/spring-projects/spring-boot/issues/52219)
- Upgrade to Cassandra Driver 4.19.4 [#52274](https://github.com/spring-projects/spring-boot/issues/52274)
- Upgrade to Elasticsearch Client 9.4.8 [#52222](https://github.com/spring-projects/spring-boot/issues/52222)
- Upgrade to [FreeMarker 2.3.35](https://freemarker.apache.org/docs/versions\_2\_3\_35.html) [#52008](https://github.com/spring-projects/spring-boot/issues/52008)
- Upgrade to [GraphQL Java 25.1](https://github.com/graphql-java/graphql-java/releases/tag/v25.1) [#52108](https://github.com/spring-projects/spring-boot/issues/52108)
- Upgrade to [Grpc Java 1.84.1](https://github.com/grpc/grpc-java/releases/tag/v1.84.1) [#52173](https://github.com/spring-projects/spring-boot/issues/52173)
- Upgrade to Hibernate 7.4.13.Final [#52156](https://github.com/spring-projects/spring-boot/issues/52156)
- Upgrade to Hibernate Validator 9.1.5.Final [#52224](https://github.com/spring-projects/spring-boot/issues/52224)
- Upgrade to HttpClient5 5.6.5 [#52157](https://github.com/spring-projects/spring-boot/issues/52157)
- Upgrade to HttpCore5 5.4.4 [#52011](https://github.com/spring-projects/spring-boot/issues/52011)
- Upgrade to [Jackson 2 Bom 2.21.7](https://github.com/FasterXML/jackson/wiki/Jackson-Release-2.21.7) [#52012](https://github.com/spring-projects/spring-boot/issues/52012)
- Upgrade to [Jackson Bom 3.1.7](https://github.com/FasterXML/jackson/wiki/Jackson-Release-3.1.7) [#52013](https://github.com/spring-projects/spring-boot/issues/52013)
- Upgrade to Jakarta Json Bind 3.0.4 [#52225](https://github.com/spring-projects/spring-boot/issues/52225)
- Upgrade to Jaybird 6.0.7 [#52158](https://github.com/spring-projects/spring-boot/issues/52158)
- Upgrade to Jersey 4.0.3 [#52016](https://github.com/spring-projects/spring-boot/issues/52016)
- Upgrade to [Jetty 12.1.14](https://github.com/jetty/jetty.project/releases/tag/jetty-12.1.14) [#52017](https://github.com/spring-projects/spring-boot/issues/52017)
- Upgrade to [jOOQ 3.21.9](https://github.com/jOOQ/jOOQ/releases/tag/version-3.21.9) [#52018](https://github.com/spring-projects/spring-boot/issues/52018)
- Upgrade to [Kafka 4.2.2](https://downloads.apache.org/kafka/4.2.2/RELEASE\_NOTES.html) [#52019](https://github.com/spring-projects/spring-boot/issues/52019)
- Upgrade to [Liquibase 5.0.4](https://github.com/liquibase/liquibase/releases/tag/v5.0.4) [#52020](https://github.com/spring-projects/spring-boot/issues/52020)
- Upgrade to Lombok 1.18.48 [#52021](https://github.com/spring-projects/spring-boot/issues/52021)
- Upgrade to [Micrometer 1.17.2](https://github.com/micrometer-metrics/micrometer/releases/tag/v1.17.2) [#52097](https://github.com/spring-projects/spring-boot/issues/52097)
- Upgrade to [Micrometer Tracing 1.7.2](https://github.com/micrometer-metrics/tracing/releases/tag/v1.7.2) [#52134](https://github.com/spring-projects/spring-boot/issues/52134)
- Upgrade to [Native Build Tools Plugin 1.1.14](https://github.com/graalvm/native-build-tools/releases/tag/1.1.14) [#52022](https://github.com/spring-projects/spring-boot/issues/52022)
- Upgrade to Netty 4.2.19.Final [#52023](https://github.com/spring-projects/spring-boot/issues/52023)
- Upgrade to Pooled JMS 3.2.5 [#52025](https://github.com/spring-projects/spring-boot/issues/52025)
- Upgrade to [Postgresql 42.7.14](https://github.com/pgjdbc/pgjdbc/releases/tag/REL42.7.14) [#52109](https://github.com/spring-projects/spring-boot/issues/52109)
- Upgrade to [Protobuf Java 4.36.2](https://github.com/protocolbuffers/protobuf/releases/tag/v4.36.2) [#52174](https://github.com/spring-projects/spring-boot/issues/52174)
- Upgrade to [Protobuf Maven Plugin 5.1.11](https://github.com/ascopes/protobuf-maven-plugin/releases/tag/v5.1.11) [#52024](https://github.com/spring-projects/spring-boot/issues/52024)
- Upgrade to [Pulsar 4.2.5](https://pulsar.apache.org/release-notes/versioned/pulsar-4.2.5) [#52026](https://github.com/spring-projects/spring-boot/issues/52026)
- Upgrade to [R2DBC MariaDB 1.4.2](https://github.com/mariadb-corporation/mariadb-connector-r2dbc/releases/tag/1.4.2) [#52027](https://github.com/spring-projects/spring-boot/issues/52027)
- Upgrade to [R2DBC MSSQL 1.0.7.RELEASE](https://github.com/r2dbc/r2dbc-mssql/releases/tag/v1.0.7.RELEASE) [#52028](https://github.com/spring-projects/spring-boot/issues/52028)
- Upgrade to [R2DBC Postgresql 1.1.3.RELEASE](https://github.com/pgjdbc/r2dbc-postgresql/releases/tag/v1.1.3.RELEASE) [#52029](https://github.com/spring-projects/spring-boot/issues/52029)
- Upgrade to [R2DBC Proxy 1.1.7.RELEASE](https://github.com/r2dbc/r2dbc-proxy/releases/tag/v1.1.7.RELEASE) [#52226](https://github.com/spring-projects/spring-boot/issues/52226)
- Upgrade to [Reactor Bom 2025.0.8](https://github.com/reactor/reactor/releases/tag/2025.0.8) [#51960](https://github.com/spring-projects/spring-boot/issues/51960)
- Upgrade to SLF4J 2.0.20 [#52030](https://github.com/spring-projects/spring-boot/issues/52030)
- Upgrade to [Spring AMQP 4.1.2](https://github.com/spring-projects/spring-amqp/releases/tag/v4.1.2) [#51961](https://github.com/spring-projects/spring-boot/issues/51961)
- Upgrade to [Spring Batch 6.0.6](https://github.com/spring-projects/spring-batch/releases/tag/v6.0.6) [#52135](https://github.com/spring-projects/spring-boot/issues/52135)
- Upgrade to [Spring Data Bom 2026.0.2](https://github.com/spring-projects/spring-data-bom/releases/tag/2026.0.2) [#51971](https://github.com/spring-projects/spring-boot/issues/51971)
- Upgrade to [Spring Framework 7.0.10](https://github.com/spring-projects/spring-framework/releases/tag/v7.0.10) [#51962](https://github.com/spring-projects/spring-boot/issues/51962)
- Upgrade to [Spring GraphQL 2.0.6](https://github.com/spring-projects/spring-graphql/releases/tag/v2.0.6) [#52098](https://github.com/spring-projects/spring-boot/issues/52098)
- Upgrade to [Spring gRPC 1.1.2](https://github.com/spring-projects/spring-grpc/releases/tag/v1.1.2) [#51963](https://github.com/spring-projects/spring-boot/issues/51963)
- Upgrade to [Spring HATEOAS 3.1.3](https://github.com/spring-projects/spring-hateoas/releases/tag/3.1.3) [#52136](https://github.com/spring-projects/spring-boot/issues/52136)
- Upgrade to [Spring Integration 7.1.2](https://github.com/spring-projects/spring-integration/releases/tag/v7.1.2) [#51964](https://github.com/spring-projects/spring-boot/issues/51964)
- Upgrade to [Spring Kafka 4.1.2](https://github.com/spring-projects/spring-kafka/releases/tag/v4.1.2) [#51965](https://github.com/spring-projects/spring-boot/issues/51965)
- Upgrade to [Spring LDAP 4.1.2](https://docs.spring.io/spring-ldap/reference/4.1.2/api/java) [#52211](https://github.com/spring-projects/spring-boot/issues/52211)
- Upgrade to [Spring Pulsar 2.0.8](https://github.com/spring-projects/spring-pulsar/releases/tag/v2.0.8) [#52099](https://github.com/spring-projects/spring-boot/issues/52099)
- Upgrade to [Spring RESTDocs 4.0.2](https://github.com/spring-projects/spring-restdocs/releases/tag/v4.0.2) [#51966](https://github.com/spring-projects/spring-boot/issues/51966)
- Upgrade to [Spring Security 7.1.2](https://github.com/spring-projects/spring-security/releases/tag/7.1.2) [#52137](https://github.com/spring-projects/spring-boot/issues/52137)
- Upgrade to [Spring WS 5.0.3](https://github.com/spring-projects/spring-ws/releases/tag/v5.0.3) [#51967](https://github.com/spring-projects/spring-boot/issues/51967)
- Upgrade to [SQLite JDBC 3.53.4.0](https://github.com/xerial/sqlite-jdbc/releases/tag/3.53.4.0) [#52031](https://github.com/spring-projects/spring-boot/issues/52031)
- Upgrade to Tomcat 11.0.27 [#52184](https://github.com/spring-projects/spring-boot/issues/52184)
- Upgrade to WebJars Locator Lite 1.1.5 [#52033](https://github.com/spring-projects/spring-boot/issues/52033)
- Upgrade to [XML Maven Plugin 1.2.2](https://github.com/mojohaus/xml-maven-plugin/releases/tag/xml-maven-plugin-1.2.2) [#52034](https://github.com/spring-projects/spring-boot/issues/52034)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@2heunxun, @CCCLL, @CHISANW, @COBI-98, @DevJunz, @JunggiKim, @LindseyZ1205, @MacAlsandair, @MycroCosmo, @NotAFlightRisk, @SebTardif, @dlwhdgus0810, @dlwldn30, @dmitrysulman, @fabio-grassi, @galenzo17, @geonheeryu, @hjm12223, @icikle, @janwaleed09, @jjh75607, @kdomo, @khopland, @ksky8864, @lavinhoque33, @msridhar, @ngocnhan-tran1996, @noojung, @o-shevchenko, @ohchanKyu, @padosol, @piyushrajyadav, @rvullriede, @ryujungkyun, @scordio, @scottfrederick, @timtebeek, @vlsi, @xoruddl, @xxxxxxjun, @yyuneu, and @zhoubiao188

---

> **Source** [spring-projects/spring-boot](https://github.com/spring-projects/spring-boot) · `v4.1.2` · 2026-10-22 · [upstream release](https://github.com/spring-projects/spring-boot/releases/tag/v4.1.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
