---
title: "spring-cloud-stream v5.0.0"
project: "spring-cloud-stream"
repo: "spring-cloud/spring-cloud-stream"
tag: "v5.0.0"
published: "2025-11-24"
type: "major"
lang: "en"
summary: "Add consumer priority #3147 · Add caching and logging control options for KTable materialization #3136"
---

# spring-cloud-stream v5.0.0

## :star: New Features

- Add consumer priority [#3147](https://github.com/spring-cloud/spring-cloud-stream/pull/3147)
- Add caching and logging control options for KTable materialization [#3136](https://github.com/spring-cloud/spring-cloud-stream/pull/3136)
- KafkaMessageChannelBinder should switch to use setKafkaAwareTransactionManager in ContainerProperties as setTransactionManager has been long deprecated and marked for removal [#3130](https://github.com/spring-cloud/spring-cloud-stream/issues/3130)
- Add CacheEnabled and LoggingEnabled properties to Kafka Streams binder for enhanced KTable control [#3094](https://github.com/spring-cloud/spring-cloud-stream/issues/3094)

## :lady_beetle: Bug Fixes

- Dependencies are not wired into custom KafkaMessageChannelBinder with non-empty properties [#3148](https://github.com/spring-cloud/spring-cloud-stream/issues/3148)
- Container settings are not propagated to individual listeners [#3124](https://github.com/spring-cloud/spring-cloud-stream/issues/3124)
- Target Protocol header is incorrect for non-Kafka or Rabbit binders [#2222](https://github.com/spring-cloud/spring-cloud-stream/issues/2222)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@belljun3395, @ferblaca, and @gihong-park

---

> **Source** [spring-cloud/spring-cloud-stream](https://github.com/spring-cloud/spring-cloud-stream) · `v5.0.0` · 2025-11-24 · [upstream release](https://github.com/spring-cloud/spring-cloud-stream/releases/tag/v5.0.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
