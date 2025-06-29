# spring-kafka v3.3.0-M2

## ⭐ 新特性

- 升级到 Spring Kafka `3.8.0` [#3416](https://github.com/spring-projects/spring-kafka/issues/3416)
- 错误处理器在阻塞重试时抛出异常 [#3409](https://github.com/spring-projects/spring-kafka/issues/3409)
- Spring Kafka Listener 中 Acknowledgement 的反序列化错误 [#3400](https://github.com/spring-projects/spring-kafka/issues/3400)
- 使用 ReplyingKafkaTemplate 和 SendTo 时在回复消息中使用原始密钥  [#3395](https://github.com/spring-projects/spring-kafka/issues/3395)

## 🐞 错误修复

- AnnotationEnhancer 始终返回旧属性 [#3425](https://github.com/spring-projects/spring-kafka/issues/3425)
- KafkaMessageHeaderAccessor.getBlockingRetryDeliveryAttempt() 的 JavaDoc 错误 [#3408](https://github.com/spring-projects/spring-kafka/issues/3408)
- 当启用可观测性且未设置 bootstrap supplier 时，KafkaAdmin clusterId 配置被忽略 [#3402](https://github.com/spring-projects/spring-kafka/issues/3402)
- KafkaConsumer.close() 不再触发 DefaultKafkaConsumerFactory.listener.removeConsumer() [#3375](https://github.com/spring-projects/spring-kafka/issues/3375)
- 修订 AbstractConsumerSeekAware.onPartitionsAssigned() 的并发性 [#3373](https://github.com/spring-projects/spring-kafka/issues/3373)
- 一旦 ConcurrentMessageListenerContainer 停止，则禁止 MessageLisnterContainer 重启 [#3371](https://github.com/spring-projects/spring-kafka/issues/3371)
- ConcurrentMessageListenerContainer.isChildRunning API 即使有活跃的 MessageListenerContainer 实例在处理消息时仍返回 false [#3338](https://github.com/spring-projects/spring-kafka/issues/3338)

## 📔 文档

- 修复 `EnableKafka` 和 `tips.adoc` 中的拼写错误 [#3412](https://github.com/spring-projects/spring-kafka/pull/3412)
- 修复类级配置的重试主题文档 [#3396](https://github.com/spring-projects/spring-kafka/issues/3396)

## 🔨 依赖升级

- 将 org.springframework.retry:spring-retry 从 2.0.7 升级到 2.0.8 [#3437](https://github.com/spring-projects/spring-kafka/pull/3437)
- 将 org.junit:junit-bom 从 5.11.0-RC1 升级到 5.11.0 [#3436](https://github.com/spring-projects/spring-kafka/pull/3436)
- 将 org.springframework.data:spring-data-bom 从 2024.0.2 升级到 2024.0.3 [#3435](https://github.com/spring-projects/spring-kafka/pull/3435)
- 将 org.junit:junit-bom 从 5.11.0-M2 升级到 5.11.0-RC1 [#3405](https://github.com/spring-projects/spring-kafka/pull/3405)
- 将 kotlinVersion 从 1.9.24 升级到 1.9.25 [#3383](https://github.com/spring-projects/spring-kafka/pull/3383)

## ❤️ 贡献者

感谢所有参与此版本发布的贡献者：

[bky373](https://github.com/bky373) 和 [chickenchickenlove](https://github.com/chickenchickenlove)
```