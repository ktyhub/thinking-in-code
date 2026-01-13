# spring-batch v5.1.2

## 🐞 Bug修复

- `ItemWriter`的`write`方法实现中，`Chunk`属性值不正确 [#4560](https://github.com/spring-projects/spring-batch/issues/4560)
- `SystemCommandTasklet`未传播错误 [#4483](https://github.com/spring-projects/spring-batch/issues/4483)
- 使用graalvm时，远程分区不可用 [#4564](https://github.com/spring-projects/spring-batch/issues/4564)
- `SimpleBinaryBufferedReaderFactory`丢失换行符 [#811](https://github.com/spring-projects/spring-batch/issues/811)
- 在轮询数据库时，`MessageChannelPartitionHandler`出现内存泄漏 [#4598](https://github.com/spring-projects/spring-batch/issues/4598)

## 🚀 增强功能

- 改进`JobParametersBuilder`方法中的错误信息 [#4581](https://github.com/spring-projects/spring-batch/issues/4581)

## 📔 文档

- 参考文档使用了已弃用的类`StepExecutionListenerSupport` [#4538](https://github.com/spring-projects/spring-batch/issues/4538)
- 文档中的代码示例不正确 [#4550](https://github.com/spring-projects/spring-batch/pull/4550)
- `ItemWriteListener`的文档具有误导性 [#4400](https://github.com/spring-projects/spring-batch/issues/4400)
- 代码示例使用了已弃用的`StepBuilderFactory` [#4582](https://github.com/spring-projects/spring-batch/pull/4582)
- `java-config.adoc`文档中的拼写错误 [#4591](https://github.com/spring-projects/spring-batch/pull/4591)
- 附录中的链接不正确 [#4595](https://github.com/spring-projects/spring-batch/pull/4595)

## 🆙 依赖升级

- Spring Framework: 6.1.7
- Spring Retry: 2.0.6
- Micrometer: 1.12.6
- Spring Integration: 6.2.5
- Spring AMQP: 3.1.5
- Spring Kafka: 3.1.5
- Spring Data: 3.2.6
- Spring Ldap: 3.2.3

## ❤️ 贡献者

感谢所有为此次发布做出贡献的开发者！

---

全文更新日志： [v5.1.1...v5.1.2](https://github.com/spring-projects/spring-batch/compare/v5.1.1...v5.1.2)
```