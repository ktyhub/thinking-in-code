# spring-batch v5.1.0-M3

## ⭐ 新功能

- 添加 Redis 的项读取器 [#4446](https://github.com/spring-projects/spring-batch/issues/4446)
- 添加 Redis 的项写入器 [#3957](https://github.com/spring-projects/spring-batch/issues/3957)
- 增加通过决策器开始作业流定义的功能 [#4411](https://github.com/spring-projects/spring-batch/issues/4411)
- 增加通过 `EnableBatchProcessing` 指定数据库类型的支持 [#4320](https://github.com/spring-projects/spring-batch/issues/4320)
- 使用 `EnableBatchProcessing` 和 `DefaultBatchConfiguration` 自动配置 `JobRegistryBeanPostProcessor` [#4245](https://github.com/spring-projects/spring-batch/issues/4245)
- 在 `Jackson2ExecutionContextStringSerializer` 中支持 Java 日期和时间 API 类型的序列化 [#3952](https://github.com/spring-projects/spring-batch/issues/3952)
- 在 `JdbcJobInstanceDao` 中提供自定义 `JobKeyGenerator` 的选项 [#3926](https://github.com/spring-projects/spring-batch/issues/3926)
- 在 `JdbcBatchItemWriter` 中访问更新计数 [#3829](https://github.com/spring-projects/spring-batch/issues/3829)

## 🚀 增强功能

- 修正 `SimpleJobRepository` 中不准确的异常消息 [#4025](https://github.com/spring-projects/spring-batch/issues/4025)
- 将 `ExecutionContext` 内部映射公开为只读 [#4004](https://github.com/spring-projects/spring-batch/issues/4004)
- 在 `DelimitedLineAggregator` 中增加对引号的支持 [#1139](https://github.com/spring-projects/spring-batch/issues/1139)
- 在 `StaxEventItemReader` 中提供资源不存在时的更好错误消息 [#1171](https://github.com/spring-projects/spring-batch/issues/1171)
- 在 `SimpleJobExplorer` 中增加对 DAOs 的 getter 方法 [#1598](https://github.com/spring-projects/spring-batch/issues/1598)
- 为 `short_context` 长度和 `exit_message` 长度使用不同的参数 [#1617](https://github.com/spring-projects/spring-batch/issues/1617)
- 在 `AbstractMethodInvokingDelegator` 中公开 `targetObject` 和 `targetMethod` [#1786](https://github.com/spring-projects/spring-batch/issues/1786)

## 🐞 Bug 修复

- 更改计数器导致作业具有旧的作业参数 [#4073](https://github.com/spring-projects/spring-batch/issues/4073)
- 在 `DelimitedBuilder` 中缺少严格字段的 setter 方法 [#809](https://github.com/spring-projects/spring-batch/issues/809)

## 📔 文档

- 将文档迁移到 Antora [#4422](https://github.com/spring-projects/spring-batch/pull/4422)
- 关于“配置 JobRepository”的描述不明确 [#4333](https://github.com/spring-projects/spring-batch/issues/4333)

## 🔨 任务

- 在所有组件的 `MANIFEST.MF` 中添加 Automatic-Module-Name [#867](https://github.com/spring-projects/spring-batch/issues/867)

## ❤️ 贡献者

感谢所有为此次发布做出贡献的人员：

IlyaNerd, ParadiseCHOI, benelog, rwinch, cppwfs 和 sjh836
```