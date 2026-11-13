---
title: "spring-integration v7.0.6"
project: "spring-integration"
repo: "spring-projects/spring-integration"
tag: "v7.0.6"
published: "2026-08-20"
type: "patch"
lang: "en"
summary: "Thank you to all the contributors who worked on this release:"
---

# spring-integration v7.0.6

## :star: New Features

- Do not convert wrong message in the `JmsOutboundGateway.onMessageSync()` just for debug logging [#11212](https://github.com/spring-projects/spring-integration/issues/11212)

## :lady_beetle: Bug Fixes

- CVE-2026-47856: JsonToObjectTransformer resolves the json\_\_TypeId\_\_ message header to an arbitrary class without an allow-list [#11337](https://github.com/spring-projects/spring-integration/issues/11337)
- CVE-2026-47859: Unbounded memory allocation in RFC6587SyslogDeserializer (octet-counted framing) — remote DoS [#11335](https://github.com/spring-projects/spring-integration/issues/11335)
- CVE-2026-47862: ZipTransformer uses file\_name header to build workDirectory path without sanitization [#11333](https://github.com/spring-projects/spring-integration/issues/11333)
- CVE-2026-47864: Unsafe Java deserialization in SerializingHttpMessageConverter — remote code execution [#11330](https://github.com/spring-projects/spring-integration/issues/11330)
- CVE-2026-59324: Fix cross-message header leakage in fluxTransform() under concurrency [#11327](https://github.com/spring-projects/spring-integration/issues/11327)
- CVE-2026-59321: Fix AbstractScriptExecutor for not thread-safe engines [#11325](https://github.com/spring-projects/spring-integration/issues/11325)
- CVE-2026-59322: Change EmbeddedHeadersJsonMessageMapper default to no headers [#11322](https://github.com/spring-projects/spring-integration/issues/11322)
- CVE-2026-59311: Prevent zip transformers from writing temp files to symlink [#11319](https://github.com/spring-projects/spring-integration/issues/11319)
- CVE-2026-59292: Add metadata store file permissions control [#11318](https://github.com/spring-projects/spring-integration/issues/11318)
- CVE-2026-59307: JdbcMessageStore: new `mapper` on `setBeanClassLoader` [#11315](https://github.com/spring-projects/spring-integration/issues/11315)
- CVE-2026-59293: Set SMB default version to SMB202 [#11312](https://github.com/spring-projects/spring-integration/issues/11312)
- CVE-2026-59274: Add size constraint options to UnzipTransformer [#11309](https://github.com/spring-projects/spring-integration/issues/11309)
- CVE-2026-47880: Skip properties by default in toHeaders [#11306](https://github.com/spring-projects/spring-integration/issues/11306)
- CVE-2026-47861: UDP adapter sends ack to attacker-supplied host:port parsed from packet body, even when acknowledge=false [#11304](https://github.com/spring-projects/spring-integration/issues/11304)
- `FileWritingMessageHandler`: concurrent auto-creation of the same destination directory fails with "Destination directory [...] could not be created." [#11258](https://github.com/spring-projects/spring-integration/issues/11258)
- JdbcMetadataStore putIfAbsent may stuck in while loop on MySQL database. [#11256](https://github.com/spring-projects/spring-integration/issues/11256)
- Fix ZookeeperLockRegistry test isolation and interrupt handling [#11246](https://github.com/spring-projects/spring-integration/issues/11246)
- Dynamic IntegrationFlow registration skips dependency injection for additional and internal components [#11216](https://github.com/spring-projects/spring-integration/issues/11216)
- Concurrency race condition in the `AcceptOnceFileListFilter` [#11195](https://github.com/spring-projects/spring-integration/issues/11195)
- KafkaMessageDrivenChannelAdapter in batch mode doesn't generate message ID, causing splitter to fail [#11186](https://github.com/spring-projects/spring-integration/issues/11186)
- Redis locks are not not unique [#11182](https://github.com/spring-projects/spring-integration/issues/11182)
- Adjust cache capacity in the `JdbcLockRegistry` [#11173](https://github.com/spring-projects/spring-integration/issues/11173)
- JDBC locks not unique [#11171](https://github.com/spring-projects/spring-integration/issues/11171)
- Mark function return type `@Nullable` for lockKey & waitLockDuration [#11169](https://github.com/spring-projects/spring-integration/issues/11169)
- JdbcLockRegistry & RedisLockRegistry - Shared ReentrantLock from DefaultLockRegistry causes APP\_LOCK entry not deleted on unlock when two different lock keys map to the same bucket [#11155](https://github.com/spring-projects/spring-integration/issues/11155)
- Throw a generic error from the `AbstractWebServiceInboundGateway` back to the client [#11148](https://github.com/spring-projects/spring-integration/issues/11148)
- Prevent eviction of held locks from ZooKeeper registry [#11135](https://github.com/spring-projects/spring-integration/issues/11135)
- The `BaseIntegrationFlowDefinition.REFERENCED_REPLY_PRODUCERS` can be accessed concurrently [#11129](https://github.com/spring-projects/spring-integration/issues/11129)
- Specifying channel name for inbound JMS components in Java DSL causes startup failure due to no BeanFactory [#11125](https://github.com/spring-projects/spring-integration/issues/11125)
- Fix multibyte ack-header offset in `DatagramPacketMessageMapper` [#11119](https://github.com/spring-projects/spring-integration/issues/11119)
- The `PartitionedDispatcher.dispatch()` fails with the `IndexOutOfBoundsException` when hash code is the `Integer.MIN_VALUE` [#11117](https://github.com/spring-projects/spring-integration/issues/11117)
- Fix `FileReadingMessageSource` to deal with canonical files [#11104](https://github.com/spring-projects/spring-integration/issues/11104)

## :notebook_with_decorative_cover: Documentation

- Document `FileHeaders.ORIGINAL_FILE` as a Sensitive Metadata [#11218](https://github.com/spring-projects/spring-integration/issues/11218)
- Document security implications for the `storedProcedureNameExpression` [#11217](https://github.com/spring-projects/spring-integration/issues/11217)
- Include `RedisHeaders.COMMAND` into Sensitive Metadata [#11211](https://github.com/spring-projects/spring-integration/issues/11211)
- Mention a security concern for Control Bus Controller [#11208](https://github.com/spring-projects/spring-integration/issues/11208)
- The `FileWritingMessageHandler.trigger()` Javadoc should mention ReDoS [#11133](https://github.com/spring-projects/spring-integration/issues/11133)
- Add AGENTS.md & CLAUDE.md for AI assistance [#11102](https://github.com/spring-projects/spring-integration/issues/11102)

## :hammer: Dependency Upgrades

- Upgrade micrometer-tracing to 1.6.7 [#11301](https://github.com/spring-projects/spring-integration/issues/11301)
- Upgrade micrometer to 1.16.7 [#11298](https://github.com/spring-projects/spring-integration/issues/11298)
- Upgrade reactor to 2025.0.7 [#11296](https://github.com/spring-projects/spring-integration/issues/11296)
- Upgrade spring-amqp to 4.0.5 [#11293](https://github.com/spring-projects/spring-integration/issues/11293)
- Upgrade spring-graphql to 2.0.5 [#11291](https://github.com/spring-projects/spring-integration/issues/11291)
- Upgrade spring-kafka to 4.0.7 [#11289](https://github.com/spring-projects/spring-integration/issues/11289)
- Upgrade spring-security to 7.0.7 [#11287](https://github.com/spring-projects/spring-integration/issues/11287)
- Upgrade spring-framework to 7.0.9 [#11285](https://github.com/spring-projects/spring-integration/issues/11285)
- Upgrade spring-data-bom to 2025.1.7 [#11283](https://github.com/spring-projects/spring-integration/issues/11283)
- Bump org.apache.groovy:groovy-bom from 5.0.7 to 5.0.8 [#11237](https://github.com/spring-projects/spring-integration/pull/11237)
- Bump graalvmVersion from 25.0.3 to 25.0.4 [#11202](https://github.com/spring-projects/spring-integration/pull/11202)
- Bump org.apache.logging.log4j:log4j-bom from 2.25.4 to 2.25.5 [#11177](https://github.com/spring-projects/spring-integration/pull/11177)
- Bump org.apache.groovy:groovy-bom from 5.0.6 to 5.0.7 [#11162](https://github.com/spring-projects/spring-integration/pull/11162)
- Bump org.jruby:jruby-complete from 10.0.5.0 to 10.0.6.0 [#11110](https://github.com/spring-projects/spring-integration/pull/11110)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@cppwfs

---

> **Source** [spring-projects/spring-integration](https://github.com/spring-projects/spring-integration) · `v7.0.6` · 2026-08-20 · [upstream release](https://github.com/spring-projects/spring-integration/releases/tag/v7.0.6)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
