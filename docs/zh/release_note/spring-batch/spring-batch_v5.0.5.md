# spring-batch v5.0.5

## 🐞 Bug修复

- 在 `JobOperatorFactoryBean` 中的错误信息不正确 [#4528](https://github.com/spring-projects/spring-batch/pull/4528)
- 当输入为空字符串时，`DefaultJobParametersConverter` 抛出 `java.lang.ArrayIndexOutOfBoundsException` [#4505](https://github.com/spring-projects/spring-batch/issues/4505)
- 当作业执行中有步骤执行时，`JobRepository.deleteJobInstance()` 失败并出现外键约束冲突 [#4382](https://github.com/spring-projects/spring-batch/issues/4382)
- 在 `faultTolerant()` 之前设置 `taskExecutor` 时的步骤配置不正确 [#4438](https://github.com/spring-projects/spring-batch/issues/4438)

## 🚀 增强

- 在内部循环更新之前，检查步骤执行上下文的脏标志 [#4503](https://github.com/spring-projects/spring-batch/pull/4503)

## 📔 文档

- `JobParameters#getDouble` 的文档中 getter 类型不正确 [#4526](https://github.com/spring-projects/spring-batch/issues/4526)

# 🆙 依赖升级

- Spring Framework: 6.0.17
- Spring Retry: 2.0.5
- Spring AMQP: 3.0.11
- Spring Kafka: 3.0.14

## ❤️ 贡献者

感谢所有为此次发布做出贡献的人员！

---

完整变更日志：[v5.0.4...v5.0.5](https://github.com/spring-projects/spring-batch/compare/v5.0.4...v5.0.5)
```
