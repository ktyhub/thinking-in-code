# Spring-Boot v3.3.2
```markdown
## 🐞 Bug 修复

- Spring Integration 6.2 中引入的 defaultTimeout 设置没有配置属性 [#41521](https://github.com/spring-projects/spring-boot/issues/41521)
- 在 OnClassCondition.resolveOutcomesThreaded 中自动配置时出现 NPE，因为 firstHalf 为 null [#41504](https://github.com/spring-projects/spring-boot/issues/41504)
- Spring Authorization Server 现在默认将 multipleIssuersAllowed 设置为 false，且无法轻易重新启用 [#41355](https://github.com/spring-projects/spring-boot/pull/41355)
- ServiceConnection 无法与 `@DataLdapTest` 一起使用 [#41325](https://github.com/spring-projects/spring-boot/pull/41325)
- PropertiesMigrationListener 错误地报告属性已弃用 [#41252](https://github.com/spring-projects/spring-boot/issues/41252)
- `@NestedConfigurationProperty` 在 records 上不起作用 [#41251](https://github.com/spring-projects/spring-boot/pull/41251)
- TestcontainersLifecycleBeanPostProcessor 无法正确处理 scoped beans [#41238](https://github.com/spring-projects/spring-boot/issues/41238)
- 如果 spring.config.import 解析失败，错误信息可能会误导 [#41236](https://github.com/spring-projects/spring-boot/issues/41236)
- 在 Docker Desktop 更新后，build-image 失败并显示 'Illegal char <:> at index 5: npipe:////' [#41234](https://github.com/spring-projects/spring-boot/issues/41234)
- 使用 Jetty 时，filters、listeners 和 servlets 未使用相同的线程上下文类加载器初始化 [#41225](https://github.com/spring-projects/spring-boot/issues/41225)
- DirtiesContext 与 Webflux、随机端口和多个上下文一起使用时导致多个上下文行为异常 [#41221](https://github.com/spring-projects/spring-boot/issues/41221)
- 在使用 spring-boot-starter-activemq 的本地镜像中，org.apache.activemq.ActiveMQConnectionFactory.<init> 出现 NoSuchMethodException [#41214](https://github.com/spring-projects/spring-boot/issues/41214)

## 📔 文档

- 修复 README 中的文档链接 [#41531](https://github.com/spring-projects/spring-boot/pull/41531)
- 记录每个 spring.mvc.format 和 spring.webflux.format 属性适用的类型 [#41518](https://github.com/spring-projects/spring-boot/issues/41518)
- 记录 logging.file.name 和 logging.file.path 不能一起使用 [#41516](https://github.com/spring-projects/spring-boot/issues/41516)
- 改进 CDS 指南 [#41464](https://github.com/spring-projects/spring-boot/pull/41464)
- 修复 BootstrapContext 的 javadoc 中的拼写错误 [#41448](https://github.com/spring-projects/spring-boot/issues/41448)
- "Efficient Deployments" 文档中的 CDS 链接已损坏 [#41321](https://github.com/spring-projects/spring-boot/issues/41321)
- 更新配置 bootBuildImage 环境的 Kotlin DSL 示例，使其具有附加性 [#41270](https://github.com/spring-projects/spring-boot/issues/41270)
- 记录 RestClient 的跟踪支持 [#41192](https://github.com/spring-projects/spring-boot/issues/41192)
- 文档错误地指出需要 zipkin-sender-urlconnection [#41181](https://github.com/spring-projects/spring-boot/issues/41181)

## 🔨 依赖升级

- 升级到 AspectJ 1.9.22.1 [#41474](https://github.com/spring-projects/spring-boot/issues/41474)
- 升级到 Byte Buddy 1.14.18 [#41371](https://github.com/spring-projects/spring-boot/issues/41371)
- 升级到 Dependency Management Plugin 1.1.6 [#41372](https://github.com/spring-projects/spring-boot/issues/41372)
- 升级到 GraphQL Java 22.1 [#41219](https://github.com/spring-projects/spring-boot/issues/41219)
- 升级到 Groovy 4.0.22 [#41373](https://github.com/spring-projects/spring-boot/issues/41373)
- 升级到 HttpCore5 5.2.5 [#41374](https://github.com/spring-projects/spring-boot/issues/41374)
- 升级到 Jackson Bom 2.17.2 [#41375](https://github.com/spring-projects/spring-boot/issues/41375)
- 升级到 Jetty 12.0.11 [#41376](https://github.com/spring-projects/spring-boot/issues/41376)
- 升级到 JsonAssert 1.5.3 [#41377](https://github.com/spring-projects/spring-boot/issues/41377)
- 升级到 JUnit Jupiter 5.10.3 [#41378](https://github.com/spring-projects/spring-boot/issues/41378)
- 升级到 Kafka 3.7.1 [#41379](https://github.com/spring-projects/spring-boot/issues/41379)
- 升级到 Lombok 1.18.34 [#41380](https://github.com/spring-projects/spring-boot/issues/41380)
- 升级到 Micrometer 1.13.2 [#41298](https://github.com/spring-projects/spring-boot/issues/41298)
- 升级到 Micrometer Tracing 1.3.2 [#41299](https://github.com/spring-projects/spring-boot/issues/41299)
- 升级到 MSSQL JDBC 12.6.3.jre11 [#41381](https://github.com/spring-projects/spring-boot/issues/41381)
- 升级到 Neo4j Java Driver 5.22.0 [#41382](https://github.com/spring-projects/spring-boot/issues/41382)
- 升级到 R2DBC MariaDB 1.2.1 [#41383](https://github.com/spring-projects/spring-boot/issues/41383)
- 升级到 Reactor Bom 2023.0.8 [#41384](https://github.com/spring-projects/spring-boot/issues/41384)
- 升级到 Spring Data Bom 2024.0.2 [#41300](https://github.com/spring-projects/spring-boot/issues/41300)
- 升级到 Spring Framework 6.1.11 [#41301](https://github.com/spring-projects/spring-boot/issues/41301)
- 升级到 Spring GraphQL 1.3.2 [#41527](https://github.com/spring-projects/spring-boot/issues/41527)
- 升级到 Spring HATEOAS 2.3.1 [#41497](https://github.com/spring-projects/spring-boot/issues/41497)
- 升级到 Spring Integration 6.3.2 [#41302](https://github.com/spring-projects/spring-boot/issues/41302)
- 升级到 Spring Kafka 3.2.2 [#41303](https://github.com/spring-projects/spring-boot/issues/41303)
- 升级到 Spring Pulsar 1.1.2 [#41536](https://github.com/spring-projects/spring-boot/issues/41536)
- 升级到 Spring Retry 2.0.7 [#41485](https://github.com/spring-projects/spring-boot/issues/41485)
- 升级到 Tomcat 10.1.26 [#41498](https://github.com/spring-projects/spring-boot/issues/41498)

## ❤️ 贡献者

感谢所有为此版本工作过的贡献者：
```