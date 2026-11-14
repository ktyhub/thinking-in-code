---
title: "spring-integration v7.2.0-M1"
project: "spring-integration"
repo: "spring-projects/spring-integration"
tag: "v7.2.0-M1"
published: "2026-08-20"
type: "pre"
lang: "en"
summary: "JdbcMetadataStore.putIfAbsent() returns null for an existing row with a null METADATA_VALUE #11248 · Fix RestTemplate-related deprecations in the HTTP module #11234"
---

# spring-integration v7.2.0-M1

## :star: New Features

- `JdbcMetadataStore.putIfAbsent()` returns `null` for an existing row with a null `METADATA_VALUE` [#11248](https://github.com/spring-projects/spring-integration/issues/11248)
- Fix `RestTemplate`-related deprecations in the HTTP module [#11234](https://github.com/spring-projects/spring-integration/issues/11234)
- Options to use simple publisher confirms in AMQP outbound endpoints [#11194](https://github.com/spring-projects/spring-integration/issues/11194)
- Preserve original headers in `DefaultErrorMessageStrategy` [#11160](https://github.com/spring-projects/spring-integration/pull/11160)

## :lady_beetle: Bug Fixes

- CVE-2026-47856: JsonToObjectTransformer resolves the json\_\_TypeId\_\_ message header to an arbitrary class without an allow-list [#11350](https://github.com/spring-projects/spring-integration/issues/11350)
- CVE-2026-47859: Unbounded memory allocation in RFC6587SyslogDeserializer (octet-counted framing) — remote DoS [#11349](https://github.com/spring-projects/spring-integration/issues/11349)
- CVE-2026-47862: ZipTransformer uses file\_name header to build workDirectory path without sanitization [#11348](https://github.com/spring-projects/spring-integration/issues/11348)
- CVE-2026-47864: Unsafe Java deserialization in SerializingHttpMessageConverter — remote code execution [#11347](https://github.com/spring-projects/spring-integration/issues/11347)
- CVE-2026-59324: Fix cross-message header leakage in fluxTransform() under concurrency [#11346](https://github.com/spring-projects/spring-integration/issues/11346)
- CVE-2026-59321: Fix AbstractScriptExecutor for not thread-safe engines [#11345](https://github.com/spring-projects/spring-integration/issues/11345)
- CVE-2026-59322: Change EmbeddedHeadersJsonMessageMapper default to no headers [#11344](https://github.com/spring-projects/spring-integration/issues/11344)
- CVE-2026-59311: Prevent zip transformers from writing temp files to symlink [#11343](https://github.com/spring-projects/spring-integration/issues/11343)
- CVE-2026-59292: Add metadata store file permissions control [#11342](https://github.com/spring-projects/spring-integration/issues/11342)
- CVE-2026-59307: JdbcMessageStore: new `mapper` on `setBeanClassLoader` [#11341](https://github.com/spring-projects/spring-integration/issues/11341)
- CVE-2026-59293: Set SMB default version to SMB202 [#11339](https://github.com/spring-projects/spring-integration/issues/11339)
- CVE-2026-59274: Add size constraint options to UnzipTransformer [#11336](https://github.com/spring-projects/spring-integration/issues/11336)
- CVE-2026-47880: Skip properties by default in toHeaders [#11331](https://github.com/spring-projects/spring-integration/issues/11331)
- CVE-2026-47861: UDP adapter sends ack to attacker-supplied host:port parsed from packet body, even when acknowledge=false [#11328](https://github.com/spring-projects/spring-integration/issues/11328)
- `FileWritingMessageHandler`: concurrent auto-creation of the same destination directory fails with "Destination directory [...] could not be created." [#11253](https://github.com/spring-projects/spring-integration/issues/11253)
- Fix ZookeeperLockRegistry test isolation and interrupt handling [#11244](https://github.com/spring-projects/spring-integration/pull/11244)
- JdbcMetadataStore putIfAbsent may stuck in while loop on MySQL database. [#10847](https://github.com/spring-projects/spring-integration/issues/10847)

## :hammer: Dependency Upgrades

- Upgrade micrometer-tracing to 1.8.0-M1 [#11324](https://github.com/spring-projects/spring-integration/issues/11324)
- Upgrade micrometer to 1.18.0-M1 [#11321](https://github.com/spring-projects/spring-integration/issues/11321)
- Upgrade reactor to 2026.0.0-M1 [#11316](https://github.com/spring-projects/spring-integration/issues/11316)
- Upgrade spring-amqp to 4.2.0-M1 [#11314](https://github.com/spring-projects/spring-integration/issues/11314)
- Upgrade spring-data-bom to 2026.1.0-M1 [#11311](https://github.com/spring-projects/spring-integration/issues/11311)
- Upgrade spring-graphql to 2.0.5 [#11307](https://github.com/spring-projects/spring-integration/issues/11307)
- Upgrade spring-security to 7.1.1 [#11303](https://github.com/spring-projects/spring-integration/issues/11303)
- Upgrade spring-framework to 7.1.0-M1 [#11299](https://github.com/spring-projects/spring-integration/issues/11299)
- Upgrade spring-kafka to 4.2.0-M1 [#11295](https://github.com/spring-projects/spring-integration/issues/11295)
- Bump org.junit:junit-bom from 6.1.2 to 6.1.3 [#11265](https://github.com/spring-projects/spring-integration/pull/11265)
- Bump org.checkerframework:checker-qual from 4.2.1 to 4.2.2 [#11264](https://github.com/spring-projects/spring-integration/pull/11264)
- Bump debeziumVersion from 3.6.0.Final to 3.6.1.Final [#11252](https://github.com/spring-projects/spring-integration/pull/11252)
- Bump org.apache.groovy:groovy-bom from 5.0.7 to 5.0.8 [#11239](https://github.com/spring-projects/spring-integration/pull/11239)
- Upgrade `com.mysql:mysql-connector-j` to `26.7.0` [#11231](https://github.com/spring-projects/spring-integration/issues/11231)
- Upgrade `io.cloudevents:cloudevents-bom` to `5.0.0` [#11230](https://github.com/spring-projects/spring-integration/issues/11230)
- Upgrade `org.graalvm.sdk:graal-sdk` to `25.2.4` [#11229](https://github.com/spring-projects/spring-integration/issues/11229)
- Upgrade `org.zeroturnaround:zt-zip` to `1.18.2` [#11228](https://github.com/spring-projects/spring-integration/issues/11228)
- Upgrade `org.xmlunit:xmlunit-assertj3` to `2.13.0` [#11227](https://github.com/spring-projects/spring-integration/issues/11227)
- Upgrade `com.oracle.database.jdbc:ojdbc11` to `23.26.3.0.0` [#11226](https://github.com/spring-projects/spring-integration/issues/11226)
- Upgrade `org.mongodb:mongodb-driver-bom` to `5.9.1` [#11225](https://github.com/spring-projects/spring-integration/issues/11225)
- Upgrade `tools.jackson:jackson-bom` to `3.2.1` [#11224](https://github.com/spring-projects/spring-integration/issues/11224)
- Upgrade `io.grpc:grpc-bom` to `1.83.1` [#11223](https://github.com/spring-projects/spring-integration/issues/11223)
- Upgrade `io.debezium:debezium-embedded` to `3.6.0.Final` [#11222](https://github.com/spring-projects/spring-integration/issues/11222)
- Upgrade `org.apache.camel:camel-bom` to `4.21.0` [#11221](https://github.com/spring-projects/spring-integration/issues/11221)
- Upgrade `org.apache.artemis:artemis-bom` to `2.55.0` [#11220](https://github.com/spring-projects/spring-integration/issues/11220)
- Upgrade `org.apache.sshd:sshd-sftp` to `2.19.0` [#11219](https://github.com/spring-projects/spring-integration/issues/11219)

## :warning: Attention Required

- `JdbcMetadataStore.putIfAbsent()` returns `null` for an existing row with a null `METADATA_VALUE` [#11248](https://github.com/spring-projects/spring-integration/issues/11248)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@cppwfs and @mjd507

---

> **Source** [spring-projects/spring-integration](https://github.com/spring-projects/spring-integration) · `v7.2.0-M1` · 2026-08-20 · [upstream release](https://github.com/spring-projects/spring-integration/releases/tag/v7.2.0-M1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
