# spring-batch v5.0.6

## 🐞 Bug修复

- `ItemWriter`写方法实现中的Chunk属性值错误 [#4560](https://github.com/spring-projects/spring-batch/issues/4560)
- `SystemCommandTasklet`未传播错误 [#4483](https://github.com/spring-projects/spring-batch/issues/4483)
- 使用graalvm时远程分区不起作用 [#4564](https://github.com/spring-projects/spring-batch/issues/4564)
- `SimpleBinaryBufferedReaderFactory`缺少行结束符 [#811](https://github.com/spring-projects/spring-batch/issues/811)
- 数据库轮询时`MessageChannelPartitionHandler`内存泄漏 [#4598](https://github.com/spring-projects/spring-batch/issues/4598)

## 🚀 增强功能

- 改进`JobParametersBuilder`方法中的错误消息 [#4581](https://github.com/spring-projects/spring-batch/issues/4581)

## 📔 文档

- 参考文档使用了已弃用的类 `StepExecutionListenerSupport` [#4538](https://github.com/spring-projects/spring-batch/issues/4538)
- 文档中的代码示例错误 [#4550](https://github.com/spring-projects/spring-batch/pull/4550)
- `ItemWriteListener`文档具有误导性 [#4400](https://github.com/spring-projects/spring-batch/issues/4400)
- 代码示例使用了已弃用的 `StepBuilderFactory` [#4582](https://github.com/spring-projects/spring-batch/pull/4582)
- java-config.adoc 中的拼写错误 [#4591](https://github.com/spring-projects/spring-batch/pull/4591)

# 🆙 依赖升级

- Spring Framework: 6.0.20
- Spring Retry: 2.0.6
- Spring AMQP: 3.0.14
- Spring Kafka: 3.0.17

## ❤️ 贡献者

感谢所有为此版本工作过的贡献者！

---

完整变更日志： [v5.0.5...v5.0.6](https://github.com/spring-projects/spring-batch/compare/v5.0.5...v5.0.6)
```