---
title: "spring-cloud-stream v4.2.1"
project: "spring-cloud-stream"
repo: "spring-cloud/spring-cloud-stream"
tag: "v4.2.1"
published: "2025-03-18"
type: "patch"
lang: "en"
summary: "Thank you to all the contributors who worked on this release:"
---

# spring-cloud-stream v4.2.1

## :star: New Features

- Enabling lazy initialization breaks Kafka Streams [#3065](https://github.com/spring-cloud/spring-cloud-stream/issues/3065)
- Clarify that having a custom error handler disables auto send to DLQ [#3063](https://github.com/spring-cloud/spring-cloud-stream/pull/3063)
- Add `spring.cloud.stream.function.autodetect` to `additional-spring-configuration-metadata.json` [#3052](https://github.com/spring-cloud/spring-cloud-stream/issues/3052)
- fix(observability): register ObservationRegistry for dynamic MessageChannels in StreamBridge (#3033) [#3036](https://github.com/spring-cloud/spring-cloud-stream/pull/3036)
- Batch-Capable Producer Bindings [#2969](https://github.com/spring-cloud/spring-cloud-stream/issues/2969)

## :lady_beetle: Bug Fixes

- Can't create CRaC checkpoint, fails with the error message "CheckpointOpenSocketException: ... kafka/172.18.0.3:9092" [#3062](https://github.com/spring-cloud/spring-cloud-stream/issues/3062)
- Kafka Binder's partitionCount (auto-discovered from the broker) gets reset after environment refresh [#3054](https://github.com/spring-cloud/spring-cloud-stream/issues/3054)
- No converter found capable of converting from type [java.lang.String] to type [org.springframework.expression.Expression] [#3053](https://github.com/spring-cloud/spring-cloud-stream/issues/3053)
- CloudEventMessageBuilder creates URI with surrounding quotes [#3055](https://github.com/spring-cloud/spring-cloud-stream/issues/3055)
- Default-retryable setting is ignored  [#3066](https://github.com/spring-cloud/spring-cloud-stream/issues/3066)


## :heart: Contributors

Thank you to all the contributors who worked on this release:

@agustino-lim and @destan

---

> **Source** [spring-cloud/spring-cloud-stream](https://github.com/spring-cloud/spring-cloud-stream) · `v4.2.1` · 2025-03-18 · [upstream release](https://github.com/spring-cloud/spring-cloud-stream/releases/tag/v4.2.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
