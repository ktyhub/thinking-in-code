# spring-kafka v3.3.0-M1

## ⭐ 新功能

- 应用接收 `ContainerStoppedEvent` 即使 `active MessageListenerContainer` 实例正在处理消息。[#3340](https://github.com/spring-projects/spring-kafka/issues/3340)
- 更新 `ConsumerPartitionPausedEvent` 和 `features.adoc` 中误导性的内容。[#3293](https://github.com/spring-projects/spring-kafka/pull/3293)
- DLT 主题命名规范可能不一致。[#3291](https://github.com/spring-projects/spring-kafka/issues/3291)
- 添加跟踪头以映射到字符串。[#3286](https://github.com/spring-projects/spring-kafka/pull/3286)
- 在使用 `RecordFilterStrategy` 处理批量消息时接收到一个空列表。[#2806](https://github.com/spring-projects/spring-kafka/issues/2806)
- 针对 `AbstractConsumerSeekAware` 的消费者组特定偏移量查找。[#2302](https://github.com/spring-projects/spring-kafka/issues/2302)

## 🐞 Bug 修复

- 在 `ConcurrentContainer` 停止后重置错误原因。[#3372](https://github.com/spring-projects/spring-kafka/pull/3372)
- 在多组监听器情况下，已注册和找到的回调函数不匹配。[#3328](https://github.com/spring-projects/spring-kafka/issues/3328)
- `getUnregisteredListenerContainer` 返回空值。[#3319](https://github.com/spring-projects/spring-kafka/issues/3319)
- 在 Kotlin 应用中，Spring Kafka 3.2.0 不适用消息转换逻辑，因为在 `MessagingMessageListenerAdapter` 上错误地检测到协程。[#3277](https://github.com/spring-projects/spring-kafka/issues/3277)

## 🔨 依赖升级

- 将 `io.projectreactor:reactor-bom` 从 2023.0.7 升级到 2023.0.8。[#3363](https://github.com/spring-projects/spring-kafka/pull/3363)
- 将 `io.micrometer:micrometer-bom` 从 1.13.1 升级到 1.13.2。[#3362](https://github.com/spring-projects/spring-kafka/pull/3362)
- 将 `org.springframework.data:spring-data-bom` 从 2024.0.1 升级到 2024.0.2。[#3361](https://github.com/spring-projects/spring-kafka/pull/3361)
- 将 `org.springframework.retry:spring-retry` 从 2.0.6 升级到 2.0.7。[#3360](https://github.com/spring-projects/spring-kafka/pull/3360)
- 将 `io.micrometer:micrometer-tracing-bom` 从 1.3.1 升级到 1.3.2。[#3359](https://github.com/spring-projects/spring-kafka/pull/3359)
- 将 `kafkaVersion` 从 3.7.0 升级到 3.7.1。[#3343](https://github.com/spring-projects/spring-kafka/pull/3343)
- 将 `com.fasterxml.jackson:jackson-bom` 从 2.17.1 升级到 2.17.2。[#3342](https://github.com/spring-projects/spring-kafka/pull/3342)
- 将 `org.junit:junit-bom` 从 5.10.2 升级到 5.10.3。[#3334](https://github.com/spring-projects/spring-kafka/pull/3334)
- 将 `io.micrometer:micrometer-tracing-bom` 从 1.3.0 升级到 1.3.1。[#3303](https://github.com/spring-projects/spring-kafka/pull/3303)
- 将 `io.micrometer:micrometer-bom` 从 1.13.0 升级到 1.13.1。[#3301](https://github.com/spring-projects/spring-kafka/pull/3301)
- 将 `org.springframework.data:spring-data-bom` 从 2024.0.0 升级到 2024.0.1。[#3300](https://github.com/spring-projects/spring-kafka/pull/3300)
- 将 `io.projectreactor:reactor-bom` 从 2023.0.6 升级到 2023.0.7。[#3299](https://github.com/spring-projects/spring-kafka/pull/3299)

## ❤️ 贡献者

感谢所有为此次发布工作作出贡献的贡献者：

- LokeshAlamuri
- artembilian
- bky373
```