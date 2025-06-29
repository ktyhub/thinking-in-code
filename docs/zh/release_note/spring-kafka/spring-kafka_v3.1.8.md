# spring-kafka v3.1.8
```markdown
## 🐞 Bug 修复

- 当启用可观测性且未设置引导供应商时，KafkaAdmin 的 clusterId 配置被忽略 [#3447](https://github.com/spring-projects/spring-kafka/issues/3447)
- AnnotationEnhancer 总是返回旧的属性 [#3445](https://github.com/spring-projects/spring-kafka/issues/3445)
- KafkaMessageHeaderAccessor.getBlockingRetryDeliveryAttempt() 的 JavaDoc 错误 [#3420](https://github.com/spring-projects/spring-kafka/issues/3420)
- 在 ConcurrentMessageListenerContainer 停止后重新启动 MessageListenerContainer [#3399](https://github.com/spring-projects/spring-kafka/issues/3399)

## 🔨 依赖升级

- 将 org.springframework.data:spring-data-bom 从 2023.1.8 升级到 2023.1.9 [#3443](https://github.com/spring-projects/spring-kafka/pull/3443)
- 将 io.micrometer:micrometer-tracing-bom 从 1.2.8 升级到 1.2.9 [#3442](https://github.com/spring-projects/spring-kafka/pull/3442)
- 将 io.micrometer:micrometer-bom 从 1.12.8 升级到 1.12.9 [#3441](https://github.com/spring-projects/spring-kafka/pull/3441)
- 将 org.springframework:spring-framework-bom 从 6.1.11 升级到 6.1.12 [#3440](https://github.com/spring-projects/spring-kafka/pull/3440)
- 将 io.projectreactor:reactor-bom 从 2023.0.8 升级到 2023.0.9 [#3439](https://github.com/spring-projects/spring-kafka/pull/3439)
- 将 org.springframework.retry:spring-retry 从 2.0.7 升级到 2.0.8 [#3438](https://github.com/spring-projects/spring-kafka/pull/3438)
- 将 kotlinVersion 从 1.9.24 升级到 1.9.25 [#3387](https://github.com/spring-projects/spring-kafka/pull/3387)
```

这篇文章展示了最近的错误修复和依赖升级。希望你喜欢这些改进！如果有任何问题或建议，欢迎在 GitHub 上提出！