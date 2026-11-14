---
title: "spring-integration v7.1.1"
project: "spring-integration"
repo: "spring-projects/spring-integration"
tag: "v7.1.1"
published: "2026-08-20"
type: "patch"
lang: "en"
summary: "Do not convert wrong message in the JmsOutboundGateway.onMessageSync() just for debug logging #11197 · Not warn that Redis 7 server does not support DELEX #11137"
---

# spring-integration v7.1.1

## :star: New Features

- Do not convert wrong message in the `JmsOutboundGateway.onMessageSync()` just for debug logging [#11197](https://github.com/spring-projects/spring-integration/issues/11197)
- Not warn that Redis 7 server does not support DELEX [#11137](https://github.com/spring-projects/spring-integration/pull/11137)

## :lady_beetle: Bug Fixes

- CVE-2026-47856: JsonToObjectTransformer resolves the json\_\_TypeId\_\_ message header to an arbitrary class without an allow-list [#11340](https://github.com/spring-projects/spring-integration/issues/11340)
- CVE-2026-47859: Unbounded memory allocation in RFC6587SyslogDeserializer (octet-counted framing) — remote DoS [#11338](https://github.com/spring-projects/spring-integration/issues/11338)
- CVE-2026-47862: ZipTransformer uses file\_name header to build workDirectory path without sanitization [#11334](https://github.com/spring-projects/spring-integration/issues/11334)
- CVE-2026-47864: Unsafe Java deserialization in SerializingHttpMessageConverter — remote code execution [#11332](https://github.com/spring-projects/spring-integration/issues/11332)
- CVE-2026-59324: Fix cross-message header leakage in fluxTransform() under concurrency [#11329](https://github.com/spring-projects/spring-integration/issues/11329)
- CVE-2026-59321: Fix AbstractScriptExecutor for not thread-safe engines [#11326](https://github.com/spring-projects/spring-integration/issues/11326)
- CVE-2026-59322: Change EmbeddedHeadersJsonMessageMapper default to no headers [#11323](https://github.com/spring-projects/spring-integration/issues/11323)
- CVE-2026-59311: Prevent zip transformers from writing temp files to symlink [#11320](https://github.com/spring-projects/spring-integration/issues/11320)
- CVE-2026-59292: Add metadata store file permissions control [#11317](https://github.com/spring-projects/spring-integration/issues/11317)
- CVE-2026-59307: JdbcMessageStore: new `mapper` on `setBeanClassLoader` [#11313](https://github.com/spring-projects/spring-integration/issues/11313)
- CVE-2026-59293: Set SMB default version to SMB202 [#11310](https://github.com/spring-projects/spring-integration/issues/11310)
- CVE-2026-59274: Add size constraint options to UnzipTransformer [#11308](https://github.com/spring-projects/spring-integration/issues/11308)
- CVE-2026-47880: Skip properties by default in toHeaders [#11305](https://github.com/spring-projects/spring-integration/issues/11305)
- CVE-2026-47861: UDP adapter sends ack to attacker-supplied host:port parsed from packet body, even when acknowledge=false [#11302](https://github.com/spring-projects/spring-integration/issues/11302)
- `FileWritingMessageHandler`: concurrent auto-creation of the same destination directory fails with "Destination directory [...] could not be created." [#11257](https://github.com/spring-projects/spring-integration/issues/11257)
- JdbcMetadataStore putIfAbsent may stuck in while loop on MySQL database. [#11255](https://github.com/spring-projects/spring-integration/issues/11255)
- Fix ZookeeperLockRegistry test isolation and interrupt handling [#11245](https://github.com/spring-projects/spring-integration/issues/11245)
- Dynamic IntegrationFlow registration skips dependency injection for additional and internal components [#11196](https://github.com/spring-projects/spring-integration/issues/11196)
- Concurrency race condition in the `AcceptOnceFileListFilter` [#11185](https://github.com/spring-projects/spring-integration/issues/11185)
- KafkaMessageDrivenChannelAdapter in batch mode doesn't generate message ID, causing splitter to fail [#11183](https://github.com/spring-projects/spring-integration/issues/11183)
- Redis locks are not not unique [#11180](https://github.com/spring-projects/spring-integration/issues/11180)
- Adjust cache capacity in the `JdbcLockRegistry` [#11172](https://github.com/spring-projects/spring-integration/pull/11172)
- Mark function return type `@Nullable` for lockKey & waitLockDuration [#11168](https://github.com/spring-projects/spring-integration/pull/11168)
- JDBC locks not unique [#11157](https://github.com/spring-projects/spring-integration/issues/11157)
- Throw a generic error from the `AbstractWebServiceInboundGateway` back to the client [#11147](https://github.com/spring-projects/spring-integration/issues/11147)
- JdbcLockRegistry & RedisLockRegistry - Shared ReentrantLock from DefaultLockRegistry causes APP\_LOCK entry not deleted on unlock when two different lock keys map to the same bucket [#11146](https://github.com/spring-projects/spring-integration/issues/11146)
- The `BaseIntegrationFlowDefinition.REFERENCED_REPLY_PRODUCERS` can be accessed concurrently [#11127](https://github.com/spring-projects/spring-integration/issues/11127)
- Fix multibyte ack-header offset in `DatagramPacketMessageMapper` [#11115](https://github.com/spring-projects/spring-integration/pull/11115)
- The `PartitionedDispatcher.dispatch()` fails with the `IndexOutOfBoundsException` when hash code is the `Integer.MIN_VALUE` [#11114](https://github.com/spring-projects/spring-integration/issues/11114)
- Prevent eviction of held locks from ZooKeeper registry [#11113](https://github.com/spring-projects/spring-integration/issues/11113)
- Specifying channel name for inbound JMS components in Java DSL causes startup failure due to no BeanFactory [#11107](https://github.com/spring-projects/spring-integration/issues/11107)
- Fix `FileReadingMessageSource` to deal with canonical files [#11103](https://github.com/spring-projects/spring-integration/issues/11103)

## :notebook_with_decorative_cover: Documentation

- Include `RedisHeaders.COMMAND` into Sensitive Metadata [#11201](https://github.com/spring-projects/spring-integration/issues/11201)
- Document security implications for the `storedProcedureNameExpression` [#11200](https://github.com/spring-projects/spring-integration/issues/11200)
- Document `FileHeaders.ORIGINAL_FILE` as a Sensitive Metadata [#11199](https://github.com/spring-projects/spring-integration/issues/11199)
- Mention a security concern for Control Bus Controller [#11198](https://github.com/spring-projects/spring-integration/issues/11198)
- The `FileWritingMessageHandler.trigger()` Javadoc should mention ReDoS [#11132](https://github.com/spring-projects/spring-integration/issues/11132)

## :hammer: Dependency Upgrades

- Upgrade micrometer-tracing to 1.7.1 [#11300](https://github.com/spring-projects/spring-integration/issues/11300)
- Upgrade micrometer to 1.17.1 [#11297](https://github.com/spring-projects/spring-integration/issues/11297)
- Upgrade reactor to 2025.0.7 [#11294](https://github.com/spring-projects/spring-integration/issues/11294)
- Upgrade spring-amqp to 4.1.1 [#11292](https://github.com/spring-projects/spring-integration/issues/11292)
- Upgrade spring-graphql to 2.0.5 [#11290](https://github.com/spring-projects/spring-integration/issues/11290)
- Upgrade spring-kafka to 4.1.1 [#11288](https://github.com/spring-projects/spring-integration/issues/11288)
- Upgrade spring-security to 7.1.1 [#11286](https://github.com/spring-projects/spring-integration/issues/11286)
- Upgrade spring-framework to 7.0.9 [#11284](https://github.com/spring-projects/spring-integration/issues/11284)
- Upgrade spring-data-bom to 2026.0.1 [#11282](https://github.com/spring-projects/spring-integration/issues/11282)
- Bump org.checkerframework:checker-qual from 4.2.1 to 4.2.2 [#11267](https://github.com/spring-projects/spring-integration/pull/11267)
- Bump org.junit:junit-bom from 6.1.2 to 6.1.3 [#11266](https://github.com/spring-projects/spring-integration/pull/11266)
- Bump org.apache.groovy:groovy-bom from 5.0.7 to 5.0.8 [#11238](https://github.com/spring-projects/spring-integration/pull/11238)
- Bump org.jruby:jruby-complete from 10.1.0.0 to 10.1.1.0 [#11204](https://github.com/spring-projects/spring-integration/pull/11204)
- Bump graalvmVersion from 25.0.3 to 25.0.4 [#11203](https://github.com/spring-projects/spring-integration/pull/11203)
- Bump org.junit:junit-bom from 6.1.1 to 6.1.2 [#11193](https://github.com/spring-projects/spring-integration/pull/11193)
- Bump org.mongodb:mongodb-driver-bom from 5.8.0 to 5.8.1 [#11192](https://github.com/spring-projects/spring-integration/pull/11192)
- Bump kotlinVersion from 2.4.0 to 2.4.10 [#11191](https://github.com/spring-projects/spring-integration/pull/11191)
- Bump tools.jackson:jackson-bom from 3.1.4 to 3.1.5 [#11179](https://github.com/spring-projects/spring-integration/pull/11179)
- Bump io.grpc:grpc-bom from 1.81.0 to 1.81.1 [#11178](https://github.com/spring-projects/spring-integration/pull/11178)
- Bump com.fasterxml.jackson:jackson-bom from 2.22.0 to 2.22.1 [#11176](https://github.com/spring-projects/spring-integration/pull/11176)
- Bump org.junit:junit-bom from 6.1.0 to 6.1.1 [#11167](https://github.com/spring-projects/spring-integration/pull/11167)
- Bump org.checkerframework:checker-qual from 4.2.0 to 4.2.1 [#11166](https://github.com/spring-projects/spring-integration/pull/11166)
- Bump org.apache.logging.log4j:log4j-bom from 2.26.0 to 2.26.1 [#11165](https://github.com/spring-projects/spring-integration/pull/11165)
- Bump org.apache.groovy:groovy-bom from 5.0.6 to 5.0.7 [#11164](https://github.com/spring-projects/spring-integration/pull/11164)
- Bump com.google.protobuf:protobuf-bom from 4.35.0 to 4.35.1 [#11111](https://github.com/spring-projects/spring-integration/pull/11111)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@bclozel, @michaldo, @mjd507, and @uwezkhan

---

> **Source** [spring-projects/spring-integration](https://github.com/spring-projects/spring-integration) · `v7.1.1` · 2026-08-20 · [upstream release](https://github.com/spring-projects/spring-integration/releases/tag/v7.1.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
