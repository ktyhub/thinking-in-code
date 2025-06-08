# spring-kafka v3.2.3
```markdown
## 🐞 Bug 修复

- 当启用了可观测性且未设置引导供应商时，KafkaAdmin 集群 ID 配置被忽略 [#3446](https://github.com/spring-projects/spring-kafka/issues/3446)
- AnnotationEnhancer 总是返回旧的属性 [#3444](https://github.com/spring-projects/spring-kafka/issues/3444)
- KafkaMessageHeaderAccessor.getBlockingRetryDeliveryAttempt() 的 JavaDoc 不正确 [#3419](https://github.com/spring-projects/spring-kafka/issues/3419)
- 一旦 ConcurrentMessageListenerContainer 被停止，阻止 MessageListenerContainer 重启 [#3398](https://github.com/spring-projects/spring-kafka/issues/3398)
- KafkaConsumer.close() 不再触发 DefaultKafkaConsumerFactory.listener.removeConsumer() [#3390](https://github.com/spring-projects/spring-kafka/issues/3390)

## 🔨 依赖升级

- 将 io.micrometer:micrometer-bom 从 1.13.2 升级到 1.13.3 [#3434](https://github.com/spring-projects/spring-kafka/pull/3434)
- 将 org.springframework:spring-framework-bom 从 6.1.11 升级到 6.1.12 [#3433](https://github.com/spring-projects/spring-kafka/pull/3433)
- 将 io.projectreactor:reactor-bom 从 2023.0.8 升级到 2023.0.9 [#3432](https://github.com/spring-projects/spring-kafka/pull/3432)
- 将 io.micrometer:micrometer-tracing-bom 从 1.3.2 升级到 1.3.3 [#3431](https://github.com/spring-projects/spring-kafka/pull/3431)
- 将 org.springframework.retry:spring-retry 从 2.0.7 升级到 2.0.8 [#3430](https://github.com/spring-projects/spring-kafka/pull/3430)
- 将 org.springframework.data:spring-data-bom 从 2024.0.2 升级到 2024.0.3 [#3429](https://github.com/spring-projects/spring-kafka/pull/3429)
- 将 kotlinVersion 从 1.9.24 升级到 1.9.25 [#3379](https://github.com/spring-projects/spring-kafka/pull/3379)
```