# spring-batch v4.3.10

**重要**❗: 这是 Spring Batch 4 的最后一个开源版本（OSS）。有关我们的支持政策的更多详情，请参阅[支持政策页面](https://spring.io/projects/spring-batch#support)。

# 🐞 Bug 修复

- 当 `unwrapIfRethrown()` 返回 null 而 DEBUG 级别日志记录时，在 `RepeatTemplate#doHandle()` 中抛出 `NullPointerException`，请参看 [#1123](https://github.com/spring-projects/spring-batch/issues/1123)
- 在单元测试中，Job 范围的 bean 未清理，请参看 [#1288](https://github.com/spring-projects/spring-batch/issues/1288)

# 📔 文档

- 更新关于执行上下文中可序列化键的文档，请参看 [#4457](https://github.com/spring-projects/spring-batch/issues/4457)
- 修正 `JobBuilder` 中返回 `JobFlowBuilder` 方法的 JavaDoc，不正确的描述请参看 [#4415](https://github.com/spring-projects/spring-batch/issues/4415)
- 修正 `DefaultFieldSet` 和 `DefaultFieldSetFactory` 中的 JavaDoc 不准确的描述，请参看 [#4494](https://github.com/spring-projects/spring-batch/issues/4494)
- 修正 4.3.x 参考文档中 CSS 样式和 JS 切换的回归问题，请参看 [#4437](https://github.com/spring-projects/spring-batch/issues/4437)

# 🔨 任务

- 升级到 Gradle 6.9.4
- 切换到 `spring-asciidoctor-backends` 用于文档

# 🔨 依赖项升级

- Spring Framework: 5.3.31
- Spring Retry: 1.3.4
- Spring AMQP: 2.3.16
- Spring Data: 2.7.18
- Spring Integration: 5.5.20
- Spring Kafka: 2.9.13
- Spring LDAP: 2.4.1
- Micrometer: 1.9.17

# ❤️ 贡献者

我们要感谢所有帮助发布此版本的贡献者！
```