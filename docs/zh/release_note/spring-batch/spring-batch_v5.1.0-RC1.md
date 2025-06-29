# spring-batch v5.1.0-RC1

## 🚀 增强

- 创建使用 Java 配置的示例版本 [#3663](https://github.com/spring-projects/spring-batch/issues/3663)
- 改进问题报告流程 [#4329](https://github.com/spring-projects/spring-batch/issues/4329)
- 替换已弃用的 RetryListenerSupport [#4453](https://github.com/spring-projects/spring-batch/pull/4453)
- 在测试中使用更多的 SynchronizedItemReader [#4452](https://github.com/spring-projects/spring-batch/pull/4452)
- 处理一些弃用问题 [#4454](https://github.com/spring-projects/spring-batch/pull/4454)

## 🐞 Bug 修复

- DefaultJobParametersExtractor 不再从 JobParameters 中复制未包含在 ExecutionContext 中的键 [#4458](https://github.com/spring-projects/spring-batch/issues/4458)

## 📔 文档

- 在 README 中添加两分钟教程 [#4329](https://github.com/spring-projects/spring-batch/issues/4329)
- 更新入门指南 [#4329](https://github.com/spring-projects/spring-batch/issues/4329)

## 🆙 依赖升级

- Spring Framework 6.1.0-RC1
- Spring Integration 6.2.0-RC1
- Spring Data 3.2.0-RC1
- Spring LDAP 3.2.0-RC1
- Spring AMQP 3.1.0-RC1
- Spring Kafka 3.1.0-RC1
- Micrometer 1.12.0-RC1
- Spring Retry 2.0.4
- Jackson 2.15.3
- Hibernate 6.3.1.Final
- Avro 1.11.3

## ❤️ 贡献者

感谢所有为这一版本工作过的贡献者：

[hpoettker](https://github.com/hpoettker) [cppwfs](https://github.com/cppwfs) [jwillebrands](https://github.com/jwillebrands)
```