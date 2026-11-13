---
title: "spring-integration v7.2.0-RC1"
project: "spring-integration"
repo: "spring-projects/spring-integration"
tag: "v7.2.0-RC1"
published: "2026-10-22"
type: "minor"
lang: "en"
summary: "Thank you to all the contributors who worked on this release:"
---

# spring-integration v7.2.0-RC1

## :star: New Features

- Add MQTT outbound channel adapter implementation [#11530](https://github.com/spring-projects/spring-integration/pull/11530)
- Make `SerializingHttpMessageConverter` to require `allowedPatterns` from its ctor [#11480](https://github.com/spring-projects/spring-integration/issues/11480)
- Add Inbound Channel Adapter for MQTT based on hivemq [#10989](https://github.com/spring-projects/spring-integration/pull/10989)
- Spring Integration JMS DefaultJmsHeaderMapper doesn't have feature to set the OutboundHeaderNames and InboundHeaderNames [INT-4412] [#8337](https://github.com/spring-projects/spring-integration/issues/8337)
- Provide a Bean Validation (JSR 303) filter [INT-4068] [#8009](https://github.com/spring-projects/spring-integration/issues/8009)
- Add Proxy support to DefaultFtpSessionFactory [INT-2505] [#6485](https://github.com/spring-projects/spring-integration/issues/6485)
- FeedEntryMessageSource fails if entry date fields are null [INT-1810] [#5797](https://github.com/spring-projects/spring-integration/issues/5797)

## :lady_beetle: Bug Fixes

- Remove broken stack trace from HttpRequestHandlingController errors [#11515](https://github.com/spring-projects/spring-integration/pull/11515)
- Reject unconvertible messages in AMQP 1.0 inbound endpoints [#11500](https://github.com/spring-projects/spring-integration/pull/11500)
- PropertiesPersistingMetadataStore does not retry flush after an IOException [#11495](https://github.com/spring-projects/spring-integration/issues/11495)

## :notebook_with_decorative_cover: Documentation

- Improve docs for security concerns of the `SerializingHttpMessageConverter` [#11455](https://github.com/spring-projects/spring-integration/issues/11455)
- Fix typos in the documentation and XSD [#11454](https://github.com/spring-projects/spring-integration/pull/11454)

## :hammer: Dependency Upgrades

- Upgrade micrometer-tracing to 1.8.0-RC1 [#11593](https://github.com/spring-projects/spring-integration/issues/11593)
- Upgrade micrometer to 1.18.0-RC1 [#11591](https://github.com/spring-projects/spring-integration/issues/11591)
- Upgrade reactor to 2026.0.0-RC1 [#11588](https://github.com/spring-projects/spring-integration/issues/11588)
- Upgrade spring-amqp to 4.2.0-RC1 [#11585](https://github.com/spring-projects/spring-integration/issues/11585)
- Upgrade spring-data-bom to 2026.1.0-RC1 [#11582](https://github.com/spring-projects/spring-integration/issues/11582)
- Upgrade spring-graphql to 2.1.0-RC1 [#11579](https://github.com/spring-projects/spring-integration/issues/11579)
- Upgrade spring-kafka to 4.2.0-RC1 [#11576](https://github.com/spring-projects/spring-integration/issues/11576)
- Upgrade spring-security to 7.2.0-RC1 [#11573](https://github.com/spring-projects/spring-integration/issues/11573)
- Upgrade spring-framework to 7.1.0-RC1 [#11570](https://github.com/spring-projects/spring-integration/issues/11570)
- Upgrade spring-ws to 5.1.0-RC1 [#11567](https://github.com/spring-projects/spring-integration/issues/11567)
- Bump cloudEventsVersion from 5.0.0 to 5.1.0 [#11552](https://github.com/spring-projects/spring-integration/pull/11552)
- Bump io.lettuce:lettuce-core from 7.8.0.RELEASE to 7.9.0.RELEASE [#11551](https://github.com/spring-projects/spring-integration/pull/11551)
- Bump com.github.spotbugs:spotbugs-annotations from 4.10.4 to 4.10.5 [#11550](https://github.com/spring-projects/spring-integration/pull/11550)
- Bump com.hivemq:hivemq-mqtt-client from 1.4.0 to 1.4.1 [#11549](https://github.com/spring-projects/spring-integration/pull/11549)
- Bump org.apache.camel:camel-bom from 4.22.1 to 4.23.0 [#11547](https://github.com/spring-projects/spring-integration/pull/11547)
- Bump io.grpc:grpc-bom from 1.84.2 to 1.85.0 [#11545](https://github.com/spring-projects/spring-integration/pull/11545)
- Bump io.freefair.aggregate-javadoc from 9.8.0 to 9.8.2 [#11544](https://github.com/spring-projects/spring-integration/pull/11544)
- Bump gradle-wrapper from 9.8.0 to 9.8.1 [#11529](https://github.com/spring-projects/spring-integration/pull/11529)
- Bump io.grpc:grpc-bom from 1.84.0 to 1.84.2 [#11528](https://github.com/spring-projects/spring-integration/pull/11528)
- Bump com.esotericsoftware:kryo from 5.7.0 to 5.7.1 [#11527](https://github.com/spring-projects/spring-integration/pull/11527)
- Bump kotlinVersion from 2.4.20 to 2.4.21 [#11526](https://github.com/spring-projects/spring-integration/pull/11526)
- Bump org.checkerframework:checker-qual from 4.3.0 to 4.3.1 [#11523](https://github.com/spring-projects/spring-integration/pull/11523)
- Bump io.freefair.aggregate-javadoc from 9.7.0 to 9.8.0 [#11514](https://github.com/spring-projects/spring-integration/pull/11514)
- Bump org.checkerframework:checker-qual from 4.2.3 to 4.3.0 [#11513](https://github.com/spring-projects/spring-integration/pull/11513)
- Bump org.codelibs:jcifs from 3.0.3 to 3.0.4 [#11511](https://github.com/spring-projects/spring-integration/pull/11511)
- Bump debeziumVersion from 3.6.3.Final to 3.7.0.Final [#11510](https://github.com/spring-projects/spring-integration/pull/11510)
- Bump com.esotericsoftware:kryo from 5.6.2 to 5.7.0 [#11508](https://github.com/spring-projects/spring-integration/pull/11508)
- Bump org.apache.sshd:sshd-sftp from 2.19.0 to 2.20.0 [#11507](https://github.com/spring-projects/spring-integration/pull/11507)
- Bump io.lettuce:lettuce-core from 7.7.0.RELEASE to 7.8.0.RELEASE [#11493](https://github.com/spring-projects/spring-integration/pull/11493)
- Bump org.mongodb:mongodb-driver-bom from 5.12.0 to 5.13.0 [#11492](https://github.com/spring-projects/spring-integration/pull/11492)
- Bump gradle-wrapper from 9.7.1 to 9.8.0 [#11491](https://github.com/spring-projects/spring-integration/pull/11491)
- Bump tools.jackson:jackson-bom from 3.2.2 to 3.2.3 [#11490](https://github.com/spring-projects/spring-integration/pull/11490)
- Bump org.mockito:mockito-core from 5.23.0 to 5.24.0 [#11488](https://github.com/spring-projects/spring-integration/pull/11488)
- Bump org.apache.groovy:groovy-bom from 5.1.2 to 6.0.0 [#11477](https://github.com/spring-projects/spring-integration/pull/11477)
- Bump io.freefair.aggregate-javadoc from 9.5.0 to 9.7.0 [#11468](https://github.com/spring-projects/spring-integration/pull/11468)
- Bump com.fasterxml.jackson:jackson-bom from 2.22.2 to 2.22.3 [#11467](https://github.com/spring-projects/spring-integration/pull/11467)
- Bump org.jruby:jruby-complete from 10.1.1.0 to 10.1.2.0 [#11466](https://github.com/spring-projects/spring-integration/pull/11466)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@Ashutosh-Panda2004, @janwaleed09, @mjd507, and @ngocnhan-tran1996

---

> **Source** [spring-projects/spring-integration](https://github.com/spring-projects/spring-integration) · `v7.2.0-RC1` · 2026-10-22 · [upstream release](https://github.com/spring-projects/spring-integration/releases/tag/v7.2.0-RC1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
