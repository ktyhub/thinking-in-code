# spring-batch v5.1.0

## ⭐ 新特性

- 增加对虚拟线程的支持 [#4399](https://github.com/spring-projects/spring-batch/issues/4399)
- 为非流式项目添加同步装饰器 [#4368](https://github.com/spring-projects/spring-batch/issues/4368)
- 在 `JpaItemWriter` 中添加清理持久性上下文的选项 [#804](https://github.com/spring-projects/spring-batch/issues/804)
- 为 MongoDB 增加基于游标的 `ItemReader` [#4323](https://github.com/spring-projects/spring-batch/pull/4323)
- 在 `MongoItemWriter` 中添加批量插入支持 [#4149](https://github.com/spring-projects/spring-batch/issues/4149)
- 在 `MongoItemWriter` 中提供访问扩展的访问器 [#3973](https://github.com/spring-projects/spring-batch/issues/3973)
- 添加 Redis 的项目读取器 [#4446](https://github.com/spring-projects/spring-batch/issues/4446)
- 添加 Redis 的项目写入器 [#3957](https://github.com/spring-projects/spring-batch/issues/3957)
- 添加使用决策器启动任务流定义的能力 [#4411](https://github.com/spring-projects/spring-batch/issues/4411)
- 通过 `EnableBatchProcessing` 指定数据库类型的支持 [#4320](https://github.com/spring-projects/spring-batch/issues/4320)
- 与 `EnableBatchProcessing` 和 `DefaultBatchConfiguration` 共同自动配置 `JobRegistryBeanPostProcessor` [#4245](https://github.com/spring-projects/spring-batch/issues/4245)
- `Jackson2ExecutionContextStringSerializer` 支持 Java 日期和时间 API 类型的序列化 [#3952](https://github.com/spring-projects/spring-batch/issues/3952)
- 在 `JdbcJobInstanceDao` 中提供自定义 `JobKeyGenerator` 的选项 [#3926](https://github.com/spring-projects/spring-batch/issues/3926)
- 在 `JdbcBatchItemWriter` 中访问更新计数 [#3829](https://github.com/spring-projects/spring-batch/issues/3829)
- 在 `StepBuilder` 和 `JobBuilder` 中增加 `ObservationConvention` 的设置器 [#4401](https://github.com/spring-projects/spring-batch/issues/4401)

## 🚀 增强功能

- `AbstractItemCountingItemStreamItemReader.getCurrentItemCount` 公开访问 [#1639](https://github.com/spring-projects/spring-batch/issues/1639)
- 将 `java.util.concurrent.ConcurrentHashMap` 添加到 `Jackson2ExecutionContextStringSerializer` 的可信类列表中 [#4407](https://github.com/spring-projects/spring-batch/issues/4407)
- 将 `java.sql.Date` 添加到 `Jackson2ExecutionContextStringSerializer` 的可信类列表中 [#4407](https://github.com/spring-projects/spring-batch/issues/4407)
- 自动检测要模拟的类/接口 [#4426](https://github.com/spring-projects/spring-batch/pull/4426)
- `SimpleJobRepository` 中的错误异常消息 [#4025](https://github.com/spring-projects/spring-batch/issues/4025)
- 将 `ExecutionContext` 内部 map 公开为只读 [#4004](https://github.com/spring-projects/spring-batch/issues/4004)
- `DelimitedLineAggregator` 支持引号 [#1139](https://github.com/spring-projects/spring-batch/issues/1139)
- 在 `StaxEventItemReader` 中提供更好的错误消息，如果 `Resource` 不存在 [#1171](https://github.com/spring-projects/spring-batch/issues/1171)
- `SimpleJobExplorer` 中的 DAO 获取器 [#1598](https://github.com/spring-projects/spring-batch/issues/1598)
- 为短上下文长度和退出消息长度使用单独的参数 [#1617](https://github.com/spring-projects/spring-batch/issues/1617)
- 在 `AbstractMethodInvokingDelegator` 中公开 `targetObject` 和 `targetMethod` [#1786](https://github.com/spring-projects/spring-batch/issues/1786)
- 使用 Java 配置创建样本版本 [#3663](https://github.com/spring-projects/spring-batch/issues/3663)
- 改进问题报告流程 [#4329](https://github.com/spring-projects/spring-batch/issues/4329)
- 替换已弃用的 `RetryListenerSupport` [#4453](https://github.com/spring-projects/spring-batch/pull/4453)
- 在测试中使用更多的 `SynchronizedItemReader` [#4452](https://github.com/spring-projects/spring-batch/pull/4452)
- 处理一些弃用问题 [#4454](https://github.com/spring-projects/spring-batch/pull/4454)

## 🐞 Bug 修复

- H2 的无效迁移脚本 [#4390](https://github.com/spring-projects/spring-batch/issues/4390)
- SQLServer DDL 脚本中不正确的删除语句 [#4373](https://github.com/spring-projects/spring-batch/issues/4373)
- 在某些情况下，`SplitBuilder.add(Flow)` 导致挂起执行 [#3857](https://github.com/spring-projects/spring-batch/issues/3857)
- `SynchronizedItemStreamReaderTests` 中的不正确线程使用 [#837](https://github.com/spring-projects/spring-batch/issues/837)
- 并发执行 `FlowJob` 可能导致 `FlowExecutionException` [#4092](https://github.com/spring-projects/spring-batch/issues/4092)
- 切换增量器导致作业具有旧的作业参数 [#4073](https://github.com/spring-projects/spring-batch/issues/4073)
- `DelimitedBuilder` 中缺少严格字段的设置器 [#809](https://github.com/spring-projects/spring-batch/issues/809)
- 当 `JobParameters` 不包含在 `ExecutionContext` 中时，`DefaultJobParametersExtractor` 不再复制密钥 [#4458](https://github.com/spring-projects/spring-batch/issues/4458)
- 单元测试中作业范围的 bean 未清理 [#1288](https://github.com/spring-projects/spring-batch/issues/1288)
- `RepeatTemplate#doHandle()` 中的 `NullPointerException`，当 `unwrapIfRethrown()` 返回 null 时，如果在 DEBUG 中记录日志 [#1123](https://github.com/spring-projects/spring-batch/issues/1123)
- 使用 `Flow#next` 启动流程会使第一个步骤执行两次 [#4432](https://github.com/spring-projects/spring-batch/issues/4432)

## 📔 文档

- `SimpleStepBuilder` 中不正确的 Javadoc [#4402](https://github.com/spring-projects/spring-batch/issues/4402)
- 在 `JobLauncherTestUtils#launchStep` 中记录周围作业的类型和名称 [#3825](https://github.com/spring-projects/spring-batch/issues/3825)
- 修复 `SimpleMailMessageItemWriter` Javadoc 中的拼写错误 [#4381](https://github.com/spring-projects/spring-batch/pull/4381)
- 修复 javadoc 错误和警告 [#1624](https://github.com/spring-projects/spring-batch/issues/1624)
- 将文档迁移到 Antora [#4422](https://github.com/spring-projects/spring-batch/pull/4422)
- "配置 JobRepository" 的描述不明确 [#4333](https://github.com/spring-projects/spring-batch/issues/4333)
- 在 `README` 中添加两分钟教程 [#4329](https://github.com/spring-projects/spring-batch/issues/4329)
- 更新入门指南 [#4329](https://github.com/spring-projects/spring-batch/issues/4329)
- 使用 v5 API 的文档参考中断代码示例 [#4406](https://github.com/spring-projects/spring-batch/issues/4406)
- 改进条件流的开发者体验 [#4460](https://github.com/spring-projects/spring-batch/issues/4460)
- `DefaultFieldSet` 和 `DefaultFieldSetFactory` 中不正确的 Javadoc [#4494](https://github.com/spring-projects/spring-batch/issues/4494)
- `JobBuilder` 中返回 `JobFlowBuilder` 的方法的 JavaDoc 不正确 [#4415](https://github.com/spring-projects/spring-batch/issues/4415)
- 更新有关执行上下文中可序列化密钥的文档 [#4457](https://github.com/spring-projects/spring-batch/issues/4457)
- 改进文档中的配置样式切换 [#4357](https://github.com/spring-projects/spring-batch/issues/4357)
- 改善使用 Spring Batch 入门的体验 [#4329](https://github.com/spring-projects/spring-batch/issues/4329)
- 恢复并更新 FAQ 页面 [#3878](https://github.com/spring-projects/spring-batch/issues/3878)
- 过时的元数据 ERD [#4358](https://github.com/spring-projects/spring-batch/issues/4358)
- `AbstractTaskletStepBuilder#throttleLimit` 的替换文档不明确 [#4389](https://github.com/spring-projects/spring-batch/issues/4389)

## 🔨 任务

- JVM 的默认字符集不是 UTF-8 时构建失败 [#4417](https://github.com/spring-projects/spring-batch/issues/4417)
- 重命名 `MongoItemReader` 为 `MongoPagingItemReader` [#4341](https://github.com/spring-projects/spring-batch/issues/4341)
- 在 `JobBuilderHelper` 和 `StepBuilderHelper` 中弃用 `jobRepository` 方法 [#4326](https://github.com/spring-projects/spring-batch/issues/4326)
- 在所有组件中添加 Automatic-Module-Name 到 `MANIFEST.MF` [#867](https://github.com/spring-projects/spring-batch/issues/867)
- 弃用 `StepBuilderHelper#repository` 的覆盖以待移除 [#4495](https://github.com/spring-projects/spring-batch/pull/4495)

## 🔨 依赖升级

- Spring Framework 6.1.0
- Spring Integration 6.2.0
- Spring Data 3.2.0
- Spring LDAP 3.2.0
- Spring AMQP 3.1.0
- Spring Kafka 3.1.0
- Micrometer 1.12.0

## ❤️ 贡献者

感谢为此发布工作过的所有贡献者！

<hr>

完整的变更日志： [查看变更日志](https://github.com/spring-projects/spring-batch/compare/v5.0.3...v5.1.0)
```

