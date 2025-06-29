# spring-kafka v3.2.0

## ⭐ 新特性

- 在 CommonDelegatingErrorHandler 中实现 CommonErrorHandler.handleOne() [#3227](https://github.com/spring-projects/spring-kafka/issues/3227)

## 🐞 Bug 修复

- 使用 Spring Boot 时配置自定义 `ConsumerFactory` 和 `ProducerFactory` beans 的文档不正确 [#3242](https://github.com/spring-projects/spring-kafka/issues/3242)
- 将 `EmbeddedKafka#kraft` 的默认值切换为 `false` [#3238](https://github.com/spring-projects/spring-kafka/issues/3238)
- 由于创建临时文件，在只读文件系统中创建 `kafkaJaasInitializer` bean 失败 [#3217](https://github.com/spring-projects/spring-kafka/issues/3217)
- KafkaTemplate 的 currentSpan 标签问题 [#3210](https://github.com/spring-projects/spring-kafka/issues/3210)

## 📔 文档

- 添加 kakfa-client 3.7.0 的更多新特性 [#3253](https://github.com/spring-projects/spring-kafka/pull/3253)
- 小幅文档清理 [#3245](https://github.com/spring-projects/spring-kafka/pull/3245)
- 更新文档中的 Boot 版本 [#3233](https://github.com/spring-projects/spring-kafka/pull/3233)
- Embedded Kafka 抛出 NoSuchFileException [#3225](https://github.com/spring-projects/spring-kafka/issues/3225)
- 修复 enforceRebalance [#3215](https://github.com/spring-projects/spring-kafka/pull/3215)
- 修复 ackDiscarded [#3212](https://github.com/spring-projects/spring-kafka/pull/3212)

## 🔨 依赖升级

- 将 org.springframework.data:spring-data-bom 从 2024.0.0-SNAPSHOT 升级到 2024.0.0 [#3273](https://github.com/spring-projects/spring-kafka/pull/3273)
- 将 org.springframework.retry:spring-retry 从 2.0.5 升级到 2.0.6 [#3272](https://github.com/spring-projects/spring-kafka/pull/3272)
- 将 io.projectreactor:reactor-bom 从 2023.0.5 升级到 2023.0.6 [#3270](https://github.com/spring-projects/spring-kafka/pull/3270)
- 将 org.springframework:spring-framework-bom 从 6.1.6 升级到 6.1.7 [#3269](https://github.com/spring-projects/spring-kafka/pull/3269)
- 将 com.fasterxml.jackson:jackson-bom 从 2.17.0 升级到 2.17.1 [#3249](https://github.com/spring-projects/spring-kafka/pull/3249)
- 将 kotlinVersion 从 1.9.23 升级到 1.9.24 [#3248](https://github.com/spring-projects/spring-kafka/pull/3248)
- 将 org.jetbrains.kotlinx:kotlinx-coroutines-reactor 从 1.8.0 升级到 1.8.1 [#3247](https://github.com/spring-projects/spring-kafka/pull/3247)

## ❤️ 贡献者

感谢所有为此版本做出贡献的人员：

[bky373](https://github.com/bky373), [chickenchickenlove](https://github.com/chickenchickenlove), [nachomdo](https://github.com/nachomdo), 和 [sobychacko](https://github.com/sobychacko)
```