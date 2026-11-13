---
title: "spring-boot v4.0.9"
project: "spring-boot"
repo: "spring-projects/spring-boot"
tag: "v4.0.9"
published: "2026-10-22"
type: "patch"
lang: "en"
summary: "Thank you to all the contributors who worked on this release:"
---

# spring-boot v4.0.9

## :star: New Features

- Add TWENTY\_SEVEN to JavaVersion enum [#51422](https://github.com/spring-projects/spring-boot/issues/51422)

## :lady_beetle: Bug Fixes

- JWTs are rejected when issuer-uri is empty and jwk-set-uri is set [#52249](https://github.com/spring-projects/spring-boot/pull/52249)
- Package manifest attributes are missing for nested jars without directory entries [#52244](https://github.com/spring-projects/spring-boot/pull/52244)
- OriginTrackedPropertiesLoader drops properties whose name starts with # or ! [#52207](https://github.com/spring-projects/spring-boot/pull/52207)
- OriginTrackedResource does not implement equals correctly [#52205](https://github.com/spring-projects/spring-boot/pull/52205)
- Graceful shutdown of Tomcat or Jetty may call back with REQUESTS\_ACTIVE when stop is called immediately after shutDownGracefully on an idle server [#52195](https://github.com/spring-projects/spring-boot/issues/52195)
- Empty system property in TestPropertyValues is cleared instead of being restored to its empty value [#52125](https://github.com/spring-projects/spring-boot/pull/52125)
- MongoDB fails to connect when credentials contain a space [#52121](https://github.com/spring-projects/spring-boot/pull/52121)
- NettyWebServer stop may hang when called immediately after shutDownGracefully [#52119](https://github.com/spring-projects/spring-boot/issues/52119)
- Authentication fails when password configured in spring.elasticsearch.uris contains a colon [#52047](https://github.com/spring-projects/spring-boot/pull/52047)
- Logging can be lost when a context is paused by the test context framework [#51959](https://github.com/spring-projects/spring-boot/pull/51959)
- Docker Compose support for MongoDB fails to connect when credentials contain a character that requires URL encoding [#51939](https://github.com/spring-projects/spring-boot/pull/51939)
- Jersey does not use the endpoint ObjectMapper when Actuator is running on a separate port [#51937](https://github.com/spring-projects/spring-boot/pull/51937)
- BasicJsonParser mishandles escaped characters in nested lists and maps [#51907](https://github.com/spring-projects/spring-boot/issues/51907)
- Zero week value conversion fails with 'intValue cannot be extracted from WEEKS' exception [#51892](https://github.com/spring-projects/spring-boot/pull/51892)
- App fails to start when using DevTools and manually configuring JDBC or R2DBC without spring-boot-jdbc or spring-boot-r2dbc [#51872](https://github.com/spring-projects/spring-boot/pull/51872)
- Docker Compose support incorrectly recognizes MARIADB\_ALLOW\_EMPTY\_PASSWORD instead of MARIADB\_ALLOW\_EMPTY\_ROOT\_PASSWORD [#51870](https://github.com/spring-projects/spring-boot/pull/51870)
- Auto-configured Kotlinx Serialization JSON codec customization is not applied [#51842](https://github.com/spring-projects/spring-boot/pull/51842)
- NullPointerException can be thrown when using uber jars due to a race condition in NestedJarFileResources  [#51744](https://github.com/spring-projects/spring-boot/pull/51744)
- DevTools does not detect a reactive web environment [#51708](https://github.com/spring-projects/spring-boot/pull/51708)
- Connection fails when rabbitmq Docker Compose service is configured to use SSL [#51666](https://github.com/spring-projects/spring-boot/pull/51666)
- When server.reactive.session.cookie.same-site is not set, session cookies have no SameSite attribute [#51636](https://github.com/spring-projects/spring-boot/issues/51636)
- OAuth2 resource server ignores authorities-claim-delimiter when set on its own [#51619](https://github.com/spring-projects/spring-boot/pull/51619)
- In a reactive web application, Cloud Foundry security integration returns a 500 rather than a 503 when the cloud controller URL is unavailable [#51613](https://github.com/spring-projects/spring-boot/issues/51613)
- Some assertion messages name the wrong parameter [#51568](https://github.com/spring-projects/spring-boot/pull/51568)
- SBOM-related manifest attributes are missing from Maven-packaged wars [#51551](https://github.com/spring-projects/spring-boot/pull/51551)
- Docker Compose integration for RabbitMQ skips credential fallbacks when an environment variable has no value [#51546](https://github.com/spring-projects/spring-boot/pull/51546)
- jarmode tools commands print stacktrace instead of an error message [#51540](https://github.com/spring-projects/spring-boot/pull/51540)
- Layer temp file is not deleted when layer creation fails [#51519](https://github.com/spring-projects/spring-boot/pull/51519)
- NestedByteChannel.read(ByteBuffer) incorrectly returns 0 when buffer could not be filled [#51515](https://github.com/spring-projects/spring-boot/issues/51515)
- Customizer null checks in HTTP client builders assert the wrong attribute [#51509](https://github.com/spring-projects/spring-boot/pull/51509)
- developmentOnly and testAndDevelopmentOnly configurations do not specify any attributes causing potential resolution problems [#51492](https://github.com/spring-projects/spring-boot/issues/51492)
- SQL Server Docker Compose integration may duplicate the JDBC URL's encrypt parameter [#51467](https://github.com/spring-projects/spring-boot/pull/51467)
- SSL host config customizations may be lost during Tomcat initialization [#51466](https://github.com/spring-projects/spring-boot/pull/51466)
- OAuth2ClientProperties are not available when a user-defined ClientRegistrationRepository bean is provided [#51447](https://github.com/spring-projects/spring-boot/issues/51447)
- Source is not closed consistently by all JSON marshal testers [#51417](https://github.com/spring-projects/spring-boot/issues/51417)
- JmsHealthIndicator leaks watchdog threads if start fails immediately [#51412](https://github.com/spring-projects/spring-boot/pull/51412)
- File handle in SpringBootJoranConfigurator should be closed [#51398](https://github.com/spring-projects/spring-boot/pull/51398)
- Validation of deprecated io.buildpacks.stack.id is too aggressive [#51390](https://github.com/spring-projects/spring-boot/pull/51390)
- SSL host config customizations are lost when reloading SSL bundles [#51290](https://github.com/spring-projects/spring-boot/pull/51290)
- Docker Compose ProcessRunner can hang or leave orphan processes [#50963](https://github.com/spring-projects/spring-boot/pull/50963)
- Configuration property descriptions may be lost when building incrementally with Gradle [#50489](https://github.com/spring-projects/spring-boot/pull/50489)

## :notebook_with_decorative_cover: Documentation

- Fix actuator endpoint property names in Javadoc [#51869](https://github.com/spring-projects/spring-boot/pull/51869)
- Fix broken links from reference documentation to external Javadoc [#51815](https://github.com/spring-projects/spring-boot/pull/51815)
- Remove reference to AppOptics in the reference guide as it has retired [#51807](https://github.com/spring-projects/spring-boot/issues/51807)
- Fix broken links [#51791](https://github.com/spring-projects/spring-boot/issues/51791)
- Update Spring Framework reference links [#51750](https://github.com/spring-projects/spring-boot/pull/51750)
- Maven plugin documentation incorrectly references remote restart property [#51743](https://github.com/spring-projects/spring-boot/issues/51743)
- Update testcontainers javadoc links [#51739](https://github.com/spring-projects/spring-boot/pull/51739)
- Fix documented default of spring.test.database.replace [#51709](https://github.com/spring-projects/spring-boot/pull/51709)
- Correct Jackson 3 Javadoc links [#51660](https://github.com/spring-projects/spring-boot/pull/51660)
- Fix typo in deprecated Pushgateway base-url property metadata [#51627](https://github.com/spring-projects/spring-boot/pull/51627)
- Remove references to Spring Data Geode [#51563](https://github.com/spring-projects/spring-boot/issues/51563)
- Fix typos in service containers javadoc and reference documentation [#51431](https://github.com/spring-projects/spring-boot/pull/51431)
- Document support for Java 27 [#51424](https://github.com/spring-projects/spring-boot/issues/51424)
- Document SAML2 back-off in WebFlux security documentation [#51421](https://github.com/spring-projects/spring-boot/pull/51421)
- Remove reference to removed SpringBootWebSecurityConfiguration [#51411](https://github.com/spring-projects/spring-boot/pull/51411)

## :hammer: Dependency Upgrades

- Upgrade to [Build Helper Maven Plugin 3.6.2](https://github.com/mojohaus/build-helper-maven-plugin/releases/tag/3.6.2) [#51984](https://github.com/spring-projects/spring-boot/issues/51984)
- Upgrade to Cassandra Driver 4.19.4 [#52273](https://github.com/spring-projects/spring-boot/issues/52273)
- Upgrade to [Couchbase Client 3.9.3](https://docs.couchbase.com/java-sdk/current/project-docs/sdk-release-notes.html) [#51985](https://github.com/spring-projects/spring-boot/issues/51985)
- Upgrade to [FreeMarker 2.3.35](https://freemarker.apache.org/docs/versions\_2\_3\_35.html) [#51986](https://github.com/spring-projects/spring-boot/issues/51986)
- Upgrade to [GraphQL Java 25.1](https://github.com/graphql-java/graphql-java/releases/tag/v25.1) [#52106](https://github.com/spring-projects/spring-boot/issues/52106)
- Upgrade to [Hibernate 7.2.25.Final](https://github.com/hibernate/hibernate-orm/releases/tag/7.2.25) [#51987](https://github.com/spring-projects/spring-boot/issues/51987)
- Upgrade to Hibernate Validator 9.0.2.Final [#52212](https://github.com/spring-projects/spring-boot/issues/52212)
- Upgrade to [Jackson 2 Bom 2.21.7](https://github.com/FasterXML/jackson/wiki/Jackson-Release-2.21.7) [#51988](https://github.com/spring-projects/spring-boot/issues/51988)
- Upgrade to [Jackson Bom 3.1.7](https://github.com/FasterXML/jackson/wiki/Jackson-Release-3.1.7) [#51989](https://github.com/spring-projects/spring-boot/issues/51989)
- Upgrade to Jakarta Json Bind 3.0.4 [#52213](https://github.com/spring-projects/spring-boot/issues/52213)
- Upgrade to Jaybird 6.0.7 [#52155](https://github.com/spring-projects/spring-boot/issues/52155)
- Upgrade to Jersey 4.0.3 [#51992](https://github.com/spring-projects/spring-boot/issues/51992)
- Upgrade to [Jetty 12.1.14](https://github.com/jetty/jetty.project/releases/tag/jetty-12.1.14) [#51993](https://github.com/spring-projects/spring-boot/issues/51993)
- Upgrade to [jOOQ 3.19.39](https://github.com/jOOQ/jOOQ/releases/tag/version-3.19.39) [#51994](https://github.com/spring-projects/spring-boot/issues/51994)
- Upgrade to [Liquibase 5.0.4](https://github.com/liquibase/liquibase/releases/tag/v5.0.4) [#51995](https://github.com/spring-projects/spring-boot/issues/51995)
- Upgrade to Lombok 1.18.48 [#51996](https://github.com/spring-projects/spring-boot/issues/51996)
- Upgrade to [Micrometer 1.16.8](https://github.com/micrometer-metrics/micrometer/releases/tag/v1.16.8) [#52093](https://github.com/spring-projects/spring-boot/issues/52093)
- Upgrade to [Micrometer Tracing 1.6.8](https://github.com/micrometer-metrics/tracing/releases/tag/v1.6.8) [#52130](https://github.com/spring-projects/spring-boot/issues/52130)
- Upgrade to [Netty 4.2.19.Final](https://github.com/netty/netty/releases/tag/netty-4.2.19.Final) [#51997](https://github.com/spring-projects/spring-boot/issues/51997)
- Upgrade to [Postgresql 42.7.14](https://github.com/pgjdbc/pgjdbc/releases/tag/REL42.7.14) [#52107](https://github.com/spring-projects/spring-boot/issues/52107)
- Upgrade to [R2DBC MariaDB 1.3.2](https://github.com/mariadb-corporation/mariadb-connector-r2dbc/releases/tag/1.3.2) [#51998](https://github.com/spring-projects/spring-boot/issues/51998)
- Upgrade to [R2DBC MSSQL 1.0.7.RELEASE](https://github.com/r2dbc/r2dbc-mssql/releases/tag/v1.0.7.RELEASE) [#51999](https://github.com/spring-projects/spring-boot/issues/51999)
- Upgrade to [R2DBC Postgresql 1.1.3.RELEASE](https://github.com/pgjdbc/r2dbc-postgresql/releases/tag/v1.1.3.RELEASE) [#52000](https://github.com/spring-projects/spring-boot/issues/52000)
- Upgrade to [R2DBC Proxy 1.1.7.RELEASE](https://github.com/r2dbc/r2dbc-proxy/releases/tag/v1.1.7.RELEASE) [#52214](https://github.com/spring-projects/spring-boot/issues/52214)
- Upgrade to [Reactor Bom 2025.0.8](https://github.com/reactor/reactor/releases/tag/2025.0.8) [#51949](https://github.com/spring-projects/spring-boot/issues/51949)
- Upgrade to SLF4J 2.0.20 [#52001](https://github.com/spring-projects/spring-boot/issues/52001)
- Upgrade to [Spring AMQP 4.0.6](https://github.com/spring-projects/spring-amqp/releases/tag/v4.0.6) [#51950](https://github.com/spring-projects/spring-boot/issues/51950)
- Upgrade to [Spring Batch 6.0.6](https://github.com/spring-projects/spring-batch/releases/tag/v6.0.6) [#52131](https://github.com/spring-projects/spring-boot/issues/52131)
- Upgrade to [Spring Data Bom 2025.1.8](https://github.com/spring-projects/spring-data-bom/releases/tag/2025.1.8) [#51955](https://github.com/spring-projects/spring-boot/issues/51955)
- Upgrade to [Spring Framework 7.0.10](https://github.com/spring-projects/spring-framework/releases/tag/v7.0.10) [#51951](https://github.com/spring-projects/spring-boot/issues/51951)
- Upgrade to [Spring GraphQL 2.0.6](https://github.com/spring-projects/spring-graphql/releases/tag/v2.0.6) [#52094](https://github.com/spring-projects/spring-boot/issues/52094)
- Upgrade to [Spring HATEOAS 3.0.6](https://github.com/spring-projects/spring-hateoas/releases/tag/3.0.6) [#52132](https://github.com/spring-projects/spring-boot/issues/52132)
- Upgrade to [Spring Integration 7.0.7](https://github.com/spring-projects/spring-integration/releases/tag/v7.0.7) [#52095](https://github.com/spring-projects/spring-boot/issues/52095)
- Upgrade to [Spring Kafka 4.0.8](https://github.com/spring-projects/spring-kafka/releases/tag/v4.0.8) [#51952](https://github.com/spring-projects/spring-boot/issues/51952)
- Upgrade to [Spring LDAP 4.0.6](https://docs.spring.io/spring-ldap/reference/4.0.6/api/java) [#52210](https://github.com/spring-projects/spring-boot/issues/52210)
- Upgrade to [Spring Pulsar 2.0.8](https://github.com/spring-projects/spring-pulsar/releases/tag/v2.0.8) [#52096](https://github.com/spring-projects/spring-boot/issues/52096)
- Upgrade to [Spring RESTDocs 4.0.2](https://github.com/spring-projects/spring-restdocs/releases/tag/v4.0.2) [#51953](https://github.com/spring-projects/spring-boot/issues/51953)
- Upgrade to [Spring Security 7.0.8](https://github.com/spring-projects/spring-security/releases/tag/7.0.8) [#52133](https://github.com/spring-projects/spring-boot/issues/52133)
- Upgrade to [Spring WS 5.0.3](https://github.com/spring-projects/spring-ws/releases/tag/v5.0.3) [#51954](https://github.com/spring-projects/spring-boot/issues/51954)
- Upgrade to Tomcat 11.0.27 [#52183](https://github.com/spring-projects/spring-boot/issues/52183)
- Upgrade to WebJars Locator Lite 1.1.5 [#52003](https://github.com/spring-projects/spring-boot/issues/52003)
- Upgrade to [XML Maven Plugin 1.2.2](https://github.com/mojohaus/xml-maven-plugin/releases/tag/xml-maven-plugin-1.2.2) [#52004](https://github.com/spring-projects/spring-boot/issues/52004)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@2heunxun, @CCCLL, @CHISANW, @COBI-98, @DevJunz, @JunggiKim, @LindseyZ1205, @MacAlsandair, @SebTardif, @dlwldn30, @dmitrysulman, @fabio-grassi, @galenzo17, @icikle, @janwaleed09, @kdomo, @khopland, @ksky8864, @lavinhoque33, @msridhar, @ngocnhan-tran1996, @noojung, @ohchanKyu, @padosol, @piyushrajyadav, @rvullriede, @ryujungkyun, @scordio, @scottfrederick, @timtebeek, @vlsi, @xoruddl, @xxxxxxjun, @yyuneu, and @zhoubiao188

---

> **Source** [spring-projects/spring-boot](https://github.com/spring-projects/spring-boot) · `v4.0.9` · 2026-10-22 · [upstream release](https://github.com/spring-projects/spring-boot/releases/tag/v4.0.9)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
