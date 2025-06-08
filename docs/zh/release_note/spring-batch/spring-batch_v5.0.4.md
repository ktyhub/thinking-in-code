# spring-batch v5.0.4
```markdown
## 🐞 Bug 修复

- 使用 `Flow#next` 启动流程时，第一个步骤会执行两次 [#4432](https://github.com/spring-projects/spring-batch/issues/4432)
- 当 `ExecutionContext` 中不包含 `JobParameters` 时，`DefaultJobParametersExtractor` 不再复制键 [#4458](https://github.com/spring-projects/spring-batch/issues/4458)
- 在单元测试中，job 范围的 bean 没有清理 [#1288](https://github.com/spring-projects/spring-batch/issues/1288)
- 当 `unwrapIfRethrown()` 返回 null 且日志级别为 DEBUG 时，`RepeatTemplate#doHandle()` 中出现 `NullPointerException` [#1123](https://github.com/spring-projects/spring-batch/issues/1123)

## 🚀 增强功能

- `SimpleJobRepository` 中的异常信息不准确 [#4025](https://github.com/spring-projects/spring-batch/issues/4025)
- 移除 `AsyncItemWriter` 中不必要的表达式 [#4009](https://github.com/spring-projects/spring-batch/pull/4009)

## 📔 文档

- 文档中关于如何替换已弃用的 `AbstractTaskletStepBuilder#throttleLimit` 的说明不清楚 [#4389](https://github.com/spring-projects/spring-batch/issues/4389)
- 过时的元数据 ERD [#4358](https://github.com/spring-projects/spring-batch/issues/4358)
- `JobBuilder` 中返回 `JobFlowBuilder` 的方法的 JavaDoc 不正确 [#4415](https://github.com/spring-projects/spring-batch/issues/4415)
- `DefaultFieldSet` 和 `DefaultFieldSetFactory` 中的 Javadoc 不正确 [#4494](https://github.com/spring-projects/spring-batch/issues/4494)
- 更新关于执行上下文中可序列化键的文档 [#4457](https://github.com/spring-projects/spring-batch/issues/4457)

# 🆙 依赖升级

- Spring Framework: 6.0.14
- Spring Retry: 2.0.4
- Spring AMQP: 3.0.10
- Spring Data: 3.0.12
- Spring Integration: 6.0.9
- Spring Kafka: 3.0.13
- Spring LDAP: 3.0.6
- Micrometer: 1.10.13

## ❤️ 贡献者

感谢所有为此版本工作过的贡献者！

---

完整的变更日志: [v5.0.3...v5.0.4](https://github.com/spring-projects/spring-batch/compare/v5.0.3...v5.0.4)
```