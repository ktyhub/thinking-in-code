---
title: "spring-cloud-stream v4.3.0"
project: "spring-cloud-stream"
repo: "spring-cloud/spring-cloud-stream"
tag: "v4.3.0"
published: "2025-05-29"
type: "minor"
lang: "en"
summary: "Removes deprecated DescribeTopicsResult method #3111 · StreamBridge does not add dynamic Bindings to Output/Input binding lifecycle #3106 · Retain Binder in AbstractExtendedBindingProperties to improve performance #3101"
---

# spring-cloud-stream v4.3.0

## :star: New Features

- Removes deprecated DescribeTopicsResult method [#3111](https://github.com/spring-cloud/spring-cloud-stream/pull/3111)
- StreamBridge does not add dynamic Bindings to Output/Input binding lifecycle [#3106](https://github.com/spring-cloud/spring-cloud-stream/issues/3106)
- Retain Binder in AbstractExtendedBindingProperties to improve performance [#3101](https://github.com/spring-cloud/spring-cloud-stream/issues/3101)
- Double micrometer-tracing-bridge since last Spring Cloud Stream [#3100](https://github.com/spring-cloud/spring-cloud-stream/issues/3100)
- Replaced ReentrantLock with ConcurrentHashMap.computeIfAbsent() [#3098](https://github.com/spring-cloud/spring-cloud-stream/pull/3098)
- Ability to create new bindings at runtime via the BindingLifecycleController [#3086](https://github.com/spring-cloud/spring-cloud-stream/issues/3086)
- Error retrieving state store during graceful shutdown [#3067](https://github.com/spring-cloud/spring-cloud-stream/issues/3067)
- Default-retryable setting is ignored  [#3066](https://github.com/spring-cloud/spring-cloud-stream/issues/3066)
- Inconsistent behavior of Environment binding properties in SCS parent-child contexts [#3039](https://github.com/spring-cloud/spring-cloud-stream/issues/3039)

## :lady_beetle: Bug Fixes

- output-bindings property does not work for bindings definition [#3109](https://github.com/spring-cloud/spring-cloud-stream/issues/3109)
- StreamBridge Function cache does not return the good value [#3105](https://github.com/spring-cloud/spring-cloud-stream/issues/3105)
- Bindings endpoint doesn't works when SpEL expression is configured [#3104](https://github.com/spring-cloud/spring-cloud-stream/issues/3104)
- ConfluentSchemaRegistryClient picks wrong subject version when using SpecificRecord types [#3103](https://github.com/spring-cloud/spring-cloud-stream/issues/3103)
- fix(kafka-topic-provisioner): Prevent resource leak [#3093](https://github.com/spring-cloud/spring-cloud-stream/pull/3093)
- Problems with applying clientFactoryCustomizer when using a transaction producer [#3090](https://github.com/spring-cloud/spring-cloud-stream/issues/3090)
- (Reactive) Bindings do not recover from application restart [#3083](https://github.com/spring-cloud/spring-cloud-stream/issues/3083)
- Longer Startup Times Post Spring-Boot 3.4.0 Upgrade [#3076](https://github.com/spring-cloud/spring-cloud-stream/issues/3076)

## :notebook_with_decorative_cover: Documentation

- Fix a couple typos [#3110](https://github.com/spring-cloud/spring-cloud-stream/pull/3110)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@2tsumo-hitori, @StevenPG, @akenra, @nhajratw, and @xDeyan

---

> **Source** [spring-cloud/spring-cloud-stream](https://github.com/spring-cloud/spring-cloud-stream) · `v4.3.0` · 2025-05-29 · [upstream release](https://github.com/spring-cloud/spring-cloud-stream/releases/tag/v4.3.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
