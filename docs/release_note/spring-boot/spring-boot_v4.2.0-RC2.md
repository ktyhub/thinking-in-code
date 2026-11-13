---
title: "spring-boot v4.2.0-RC2"
project: "spring-boot"
repo: "spring-projects/spring-boot"
tag: "v4.2.0-RC2"
published: "2026-11-05"
type: "minor"
lang: "en"
summary: "Thank you to all the contributors who worked on this release:"
---

# spring-boot v4.2.0-RC2

## :star: New Features

- Remove LDAP SSL reload support [#52365](https://github.com/spring-projects/spring-boot/issues/52365)
- Add support for X-Forwarded-Prefix with Reactor Netty [#52316](https://github.com/spring-projects/spring-boot/issues/52316)

## :lady_beetle: Bug Fixes

- Setting management.observations.conventions to open-telemetry enables neither semantic convention [#52619](https://github.com/spring-projects/spring-boot/pull/52619)
- PushGatewayTaskScheduler does not correctly shutdown task scheduler when context is closed  [#52591](https://github.com/spring-projects/spring-boot/issues/52591)
- ClearCachesApplicationListener does not find inherited clearCache() methods [#52589](https://github.com/spring-projects/spring-boot/issues/52589)
- MongoTransactionManager created by BatchDataMongoAutoConfiguration is not customized by TransactionManagerCustomizers [#52572](https://github.com/spring-projects/spring-boot/issues/52572)
- Configuration processor does not handle known types when they are fully-qualified [#52571](https://github.com/spring-projects/spring-boot/issues/52571)
- Invalid AMQP Rabbit host is reported with the wrong value [#52568](https://github.com/spring-projects/spring-boot/pull/52568)
- Avoid premature overflow when converting durations to microseconds [#52561](https://github.com/spring-projects/spring-boot/issues/52561)
- Binding a value from a config tree fails after a collection of the same element type has been bound from the same config tree [#52559](https://github.com/spring-projects/spring-boot/issues/52559)
- JsonWriter writes invalid JSON when usingPairs is used with a named member [#52549](https://github.com/spring-projects/spring-boot/issues/52549)
- Logback GELF structured logging writes a null short\_message when the log message is null [#52547](https://github.com/spring-projects/spring-boot/issues/52547)
- Auto-configured KafkaTransactionManager is not customized by TransactionManagerCustomizers [#52542](https://github.com/spring-projects/spring-boot/issues/52542)
- Custom layers in the Gradle plugin include excluded content instead of excluding it [#52540](https://github.com/spring-projects/spring-boot/issues/52540)
- RabbitMQ addresses without a port use the AMQP port when SSL is enabled [#52538](https://github.com/spring-projects/spring-boot/issues/52538)
- BasicJsonParser does not decode \b, \f, \n, \r, \t and \uXXXX escape sequences [#52534](https://github.com/spring-projects/spring-boot/issues/52534)
- NestedJarFile.getComment() fails with an EOFException when the jar has no comment [#52513](https://github.com/spring-projects/spring-boot/issues/52513)
- Plain text thread dump reports threads in Object.wait() as parking on Java 19+ [#52511](https://github.com/spring-projects/spring-boot/issues/52511)
- When using both spring-boot-amqp-rabbitmq and spring-boot-rabbitmq health information from the latter is lost [#52506](https://github.com/spring-projects/spring-boot/issues/52506)
-  JSON parse failures no longer produce DockerOutputParseExceptions [#52500](https://github.com/spring-projects/spring-boot/issues/52500)
- ECS structured logging writes empty service and service.node objects [#52497](https://github.com/spring-projects/spring-boot/issues/52497)
- ConfigurationMetadataAnnotationProcessor produces non-repeatable output if multiple endpoints share the same ID [#52494](https://github.com/spring-projects/spring-boot/issues/52494)
- Graceful shutdown does not wait for active requests after a restart of Tomcat or Jetty [#52490](https://github.com/spring-projects/spring-boot/issues/52490)
- RabbitMQ uses the wrong port by default when an SSL bundle is configured [#52488](https://github.com/spring-projects/spring-boot/issues/52488)
- Auto-configured R2dbcTransactionManager is not customized by TransactionManagerCustomizers [#52485](https://github.com/spring-projects/spring-boot/issues/52485)
- JsonWriter writes NaN and infinite values as invalid JSON [#52483](https://github.com/spring-projects/spring-boot/issues/52483)
- ZipEndOfCentralDirectoryRecord finds the record signature inside the zip comment [#52481](https://github.com/spring-projects/spring-boot/issues/52481)
- LLdap Docker Compose support fails to connect when LLDAP\_LDAP\_USER\_DN is configured [#52475](https://github.com/spring-projects/spring-boot/issues/52475)
- ZipContent.Entry hasNameStartingWith ignores the offset of virtualized nested directory names [#52464](https://github.com/spring-projects/spring-boot/issues/52464)
- ZipContent cannot open a zip with data after the end of central directory record [#52461](https://github.com/spring-projects/spring-boot/issues/52461)
- ZipContent reads the zip comment from the wrong position when the archive has prefixed data [#52459](https://github.com/spring-projects/spring-boot/issues/52459)
- Root logger configuration cannot be retrieved and has no configured level with Log4j2 [#52455](https://github.com/spring-projects/spring-boot/issues/52455)
- Docker Compose OTLP integration requires gRPC and HTTP ports to be exposed when only HTTP is used [#52451](https://github.com/spring-projects/spring-boot/issues/52451)
- Spring Batch JDBC auto-configuration connects to the database on startup to detect its type, with no way to configure it [#52449](https://github.com/spring-projects/spring-boot/issues/52449)
- OnAvailableEndpointCondition caches retain closed application contexts through their Environment [#52447](https://github.com/spring-projects/spring-boot/issues/52447)
- DataSourceTransactionManagerAutoConfiguration uses an old and no-longer-supported property to control exception translation [#52445](https://github.com/spring-projects/spring-boot/issues/52445)
- Tomcat's new 'maxLocaleCount' property cannot be easily configured [#52443](https://github.com/spring-projects/spring-boot/issues/52443)
- DevTools leaks a File Watcher thread for every failed restart [#52441](https://github.com/spring-projects/spring-boot/issues/52441)
- SSL bundle ciphers and enabled protocols are sometimes silently ignored when the underlying component does not support their configuration [#52438](https://github.com/spring-projects/spring-boot/pull/52438)
- AMQP 1.0 should not set any credential to use ANONYMOUS by default [#52435](https://github.com/spring-projects/spring-boot/issues/52435)
- Default RabbitMQ AMQP 1.0 port to 5671 when an SSL bundle is configured [#52432](https://github.com/spring-projects/spring-boot/pull/52432)
- Hikari does not register its own MBeans when lazy connection fetching is used with JMX enabled [#52426](https://github.com/spring-projects/spring-boot/issues/52426)
- SSL bundle ciphers and enabled protocols are ignored by RabbitMQ clients [#52416](https://github.com/spring-projects/spring-boot/issues/52416)
- SSL bundle ciphers and enabled protocols are ignored by Kafka clients [#52413](https://github.com/spring-projects/spring-boot/issues/52413)
- Health endpoint fails with an internal error for a path with an unknown intermediate segment [#52411](https://github.com/spring-projects/spring-boot/issues/52411)
- Servlet application fails to start when both JWT and opaque token resource server properties are configured [#52409](https://github.com/spring-projects/spring-boot/issues/52409)
- Runners can be invoked after the application context has closed during startup [#52408](https://github.com/spring-projects/spring-boot/issues/52408)
- Binding `@ConfigurationProperties` beans concurrently can corrupt BoundConfigurationProperties and fail the bind [#52406](https://github.com/spring-projects/spring-boot/issues/52406)
- Auto-configured JavaMailSender does not apply SSL bundle ciphers or enabled protocols [#52404](https://github.com/spring-projects/spring-boot/issues/52404)
- Class path root cannot be resolved in executable jars after #52246 [#52402](https://github.com/spring-projects/spring-boot/pull/52402)
- Kotlin Serialization does not back off when JSON-B is the only JSON converter [#52389](https://github.com/spring-projects/spring-boot/issues/52389)
- Matrix parameters distort the values passed to a match all remaining selector when using WebMvc or WebFlux [#52378](https://github.com/spring-projects/spring-boot/issues/52378)
- Server name SSL bundles with upper-case server names are not used with Netty [#52364](https://github.com/spring-projects/spring-boot/issues/52364)
- Config data locations with brackets in their path are not loaded correctly [#52360](https://github.com/spring-projects/spring-boot/issues/52360)
- Closing the context can hang when Hikari pool suspension is enabled [#52359](https://github.com/spring-projects/spring-boot/issues/52359)
- OriginTrackedPropertiesLoader drops the line following a comment that ends with a backslash [#52357](https://github.com/spring-projects/spring-boot/issues/52357)
- Closing a child context stops the keep-alive thread [#52344](https://github.com/spring-projects/spring-boot/issues/52344)
- MimeMappings copies of DEFAULT are empty and equals is asymmetric [#52342](https://github.com/spring-projects/spring-boot/issues/52342)
- StringHttpMessageConverter cannot be overridden with an HTTP message converters customizer [#52336](https://github.com/spring-projects/spring-boot/issues/52336)
- ConfigurationPropertyName incorrectly accepts an opening square bracket at the end of a name [#52334](https://github.com/spring-projects/spring-boot/issues/52334)
- Directories created by jarmode tools extract make Docker layers non-reproducible [#52330](https://github.com/spring-projects/spring-boot/issues/52330)
- Lettuce cluster refresh properties are ignored when the cluster is not configured using spring.data.redis.cluster properties [#52328](https://github.com/spring-projects/spring-boot/issues/52328)
- BasicJsonParser mishandles braces within string values [#52326](https://github.com/spring-projects/spring-boot/issues/52326)
- MessageSourceMessageInterpolator mishandles unbalanced closing braces [#52324](https://github.com/spring-projects/spring-boot/issues/52324)
- BasicJsonParser does not ignore whitespace around the elements of a list [#52318](https://github.com/spring-projects/spring-boot/issues/52318)
- ZipContent does not handle nested directory names with multi-byte characters [#52315](https://github.com/spring-projects/spring-boot/issues/52315)
- RabbitMQ AMQP 1.0 should not set an empty exchange by default [#52305](https://github.com/spring-projects/spring-boot/pull/52305)
- spring.data.redis.database is ignored when configuring master/replica nodes [#52189](https://github.com/spring-projects/spring-boot/pull/52189)

## :notebook_with_decorative_cover: Documentation

- Document how to customize the starter parent's repackage execution and main class [#52556](https://github.com/spring-projects/spring-boot/issues/52556)
- Fix typos and broken references in gRPC documentation [#52543](https://github.com/spring-projects/spring-boot/issues/52543)
- Table of auto-configured ReactiveHealthIndicators does not list the R2DBC indicator [#52424](https://github.com/spring-projects/spring-boot/issues/52424)
- Metadata for some health indicator enabled properties is missing [#52422](https://github.com/spring-projects/spring-boot/issues/52422)
- Document that test clients are not observed [#52418](https://github.com/spring-projects/spring-boot/issues/52418)
- Fix stale configuration metadata hints [#52386](https://github.com/spring-projects/spring-boot/issues/52386)
- Fix broken xref in testing documentation [#52384](https://github.com/spring-projects/spring-boot/issues/52384)

## :hammer: Dependency Upgrades

- Upgrade to [ActiveMQ 6.3.3](https://activemq.apache.org/components/classic/download/classic-06-03-03) [#52594](https://github.com/spring-projects/spring-boot/issues/52594)
- Upgrade to [AspectJ 1.9.27](https://github.com/eclipse-aspectj/aspectj/blob/master/docs/release/README-1.9.27.adoc) [#52595](https://github.com/spring-projects/spring-boot/issues/52595)
- Upgrade to [Byte Buddy 1.18.17](https://github.com/raphw/byte-buddy/releases/tag/byte-buddy-1.18.17) [#52596](https://github.com/spring-projects/spring-boot/issues/52596)
- Upgrade to [Hibernate 7.4.14.Final](https://github.com/hibernate/hibernate-orm/releases/tag/7.4.14) [#52597](https://github.com/spring-projects/spring-boot/issues/52597)
- Upgrade to Hibernate Validator 9.1.6.Final [#52598](https://github.com/spring-projects/spring-boot/issues/52598)
- Upgrade to [Infinispan 16.3.1](https://github.com/infinispan/infinispan/releases/tag/16.3.1) [#52599](https://github.com/spring-projects/spring-boot/issues/52599)
- Upgrade to [Jackson 2 Bom 2.21.8](https://github.com/FasterXML/jackson/wiki/Jackson-Release-2.21.8) [#52600](https://github.com/spring-projects/spring-boot/issues/52600)
- Upgrade to [Jackson Bom 3.1.8](https://github.com/FasterXML/jackson/wiki/Jackson-Release-3.1.8) [#52601](https://github.com/spring-projects/spring-boot/issues/52601)
- Upgrade to [Json-smart 2.6.1](https://github.com/netplex/json-smart-v2/releases/tag/v2.6.1) [#52602](https://github.com/spring-projects/spring-boot/issues/52602)
- Upgrade to Logback 1.6.6 [#52603](https://github.com/spring-projects/spring-boot/issues/52603)
- Upgrade to [MariaDB 3.5.11](https://mariadb.com/kb/en/mariadb-connector-j-3-5-11-release-notes) [#52604](https://github.com/spring-projects/spring-boot/issues/52604)
- Upgrade to [Maven Failsafe Plugin 3.6.1](https://github.com/apache/maven-surefire/releases/tag/surefire-3.6.1) [#52605](https://github.com/spring-projects/spring-boot/issues/52605)
- Upgrade to [Maven Surefire Plugin 3.6.1](https://github.com/apache/maven-surefire/releases/tag/surefire-3.6.1) [#52606](https://github.com/spring-projects/spring-boot/issues/52606)
- Upgrade to [Micrometer 1.18.0-RC2](https://github.com/micrometer-metrics/micrometer/releases/tag/v1.18.0-RC2) [#52501](https://github.com/spring-projects/spring-boot/issues/52501)
- Upgrade to [Micrometer Tracing 1.8.0-RC2](https://github.com/micrometer-metrics/tracing/releases/tag/v1.8.0-RC2) [#52502](https://github.com/spring-projects/spring-boot/issues/52502)
- Upgrade to [MSSQL JDBC 13.6.2.jre11](https://github.com/microsoft/mssql-jdbc/releases/tag/v13.6.2) [#52607](https://github.com/spring-projects/spring-boot/issues/52607)
- Upgrade to [MySQL 26.10.0](https://dev.mysql.com/doc/relnotes/connector-j/en/news-26-10-0.html) [#52608](https://github.com/spring-projects/spring-boot/issues/52608)
- Upgrade to [Native Build Tools Plugin 1.1.18](https://github.com/graalvm/native-build-tools/releases/tag/1.1.18) [#52609](https://github.com/spring-projects/spring-boot/issues/52609)
- Upgrade to [Netty 4.2.20.Final](https://github.com/netty/netty/releases/tag/netty-4.2.20.Final) [#52610](https://github.com/spring-projects/spring-boot/issues/52610)
- Upgrade to Oracle Database 23.26.4.0.0 [#52611](https://github.com/spring-projects/spring-boot/issues/52611)
- Upgrade to Pooled JMS 3.2.6 [#52613](https://github.com/spring-projects/spring-boot/issues/52613)
- Upgrade to [Protobuf Maven Plugin 5.1.12](https://github.com/ascopes/protobuf-maven-plugin/releases/tag/v5.1.12) [#52612](https://github.com/spring-projects/spring-boot/issues/52612)
- Upgrade to [Spring Framework 7.1.0-RC2](https://github.com/spring-projects/spring-framework/releases/tag/v7.1.0-RC2) [#52503](https://github.com/spring-projects/spring-boot/issues/52503)
- Upgrade to [UnboundID LDAPSDK 7.0.6](https://github.com/pingidentity/ldapsdk/releases/tag/7.0.6) [#52614](https://github.com/spring-projects/spring-boot/issues/52614)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@CCCLL, @Moaziz667, @RamiDarras, @Ridzzz0Alam, @ShakilUrRehman21, @Tanishq-Choudhary, @b84330808, @beyondwin, @challa, @dalerazimov, @noojung, @quaff, @raunakpandey1, and @zhoubiao188

---

> **Source** [spring-projects/spring-boot](https://github.com/spring-projects/spring-boot) · `v4.2.0-RC2` · 2026-11-05 · [upstream release](https://github.com/spring-projects/spring-boot/releases/tag/v4.2.0-RC2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
