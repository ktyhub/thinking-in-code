# spring-batch v5.1.1

## ⭐ 新功能

- 添加 `JobRegistrySmartInitializingSingleton` [#4521](https://github.com/spring-projects/spring-batch/pull/4521)

## 🐞 Bug 修复

- `JobOperatorFactoryBean` 中的错误消息不正确 [#4528](https://github.com/spring-projects/spring-batch/pull/4528)
- 如果输入为空字符串，`DefaultJobParametersConverter` 抛出 `java.lang.ArrayIndexOutOfBoundsException` [#4505](https://github.com/spring-projects/spring-batch/issues/4505)
- `JobRepository.deleteJobInstance()` 如果作业执行包含步骤执行，则失败并违反外键约束 [#4382](https://github.com/spring-projects/spring-batch/issues/4382)
- 在 `faultTolerant()` 之前设置 `taskExecutor` 时步骤配置错误 [#4438](https://github.com/spring-projects/spring-batch/issues/4438)
- `MongoPagingItemReader` 中的错误弃用声明 [#4552](https://github.com/spring-projects/spring-batch/issues/4552)

## 🚀 增强

- 在内部循环更新之前检查步骤执行上下文的脏标志 [#4503](https://github.com/spring-projects/spring-batch/pull/4503)

## 📔 文档

- 文档中 `JobParameters#getDouble` 的 getter 类型不正确 [#4526](https://github.com/spring-projects/spring-batch/issues/4526)
- Spring Batch 文档链接损坏 [#4498](https://github.com/spring-projects/spring-batch/issues/4498)
- 文档中 Spring Batch 版本号的 UI 对齐问题 [#4534](https://github.com/spring-projects/spring-batch/issues/4534)

# 🆙 依赖升级

- Spring Framework: 6.1.4
- Spring Retry: 2.0.5
- Spring Integration: 6.2.2
- Spring Data: 3.2.3
- Spring AMQP: 3.1.2
- Spring Kafka: 3.1.2
- Micrometer: 1.12.3

## ❤️ 贡献者

感谢所有为此次发布工作的人！

---

完整变更日志：[v5.1.0...v5.1.1](https://github.com/spring-projects/spring-batch/compare/v5.1.0...v5.1.1)
```