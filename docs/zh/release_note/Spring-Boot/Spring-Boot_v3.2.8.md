# Spring-Boot v3.2.8
```markdown
## 🐞 Bug 修复

- 在 `OnClassCondition.resolveOutcomesThreaded` 的自动配置期间出现 NPE，因为 `firstHalf` 为 null [#41492](https://github.com/spring-projects/spring-boot/issues/41492)
- Spring Integration 6.2 引入的 `defaultTimeout` 设置没有配置属性 [#41477](https://github.com/spring-projects/spring-boot/issues/41477)
- 使用 `spring-boot-starter-activemq` 在原生镜像中出现 `org.apache.activemq.ActiveMQConnectionFactory.<init>` 的 `NoSuchMethodException` [#41212](https://github.com/spring-projects/spring-boot/issues/41212)
- Docker Desktop 更新后 `build-image` 失败，错误信息为 'Illegal char <:> at index 5: npipe:////' [#41199](https://github.com/spring-projects/spring-boot/issues/41199)
- 使用 `DirtiesContext` 与 Webflux、随机端口和多个上下文时，导致多个上下文行为异常 [#38199](https://github.com/spring-projects/spring-boot/issues/38199)
- 使用 Jetty 时，过滤器、监听器和 servlet 没有使用相同的线程上下文类加载器进行初始化 [#37649](https://github.com/spring-projects/spring-boot/issues/37649)
- 如果 `spring.config.import` 解析失败，错误信息可能会误导 [#36243](https://github.com/spring-projects/spring-boot/issues/36243)
- `TestcontainersLifecycleBeanPostProcessor` 在处理作用域 bean 时工作不正常 [#35786](https://github.com/spring-projects/spring-boot/issues/35786)
- `PropertiesMigrationListener` 错误地报告属性已弃用 [#35774](https://github.com/spring-projects/spring-boot/issues/35774)

## 📔 文档

- 修复 README 中的文档链接 [#41547](https://github.com/spring-projects/spring-boot/issues/41547)
- 记录每个 `spring.mvc.format` 和 `spring.webflux.format` 属性适用的类型 [#41482](https://github.com/spring-projects/spring-boot/issues/41482)
- 修复 `BootstrapContext` 的 javadoc 中的拼写错误 [#41443](https://github.com/spring-projects/spring-boot/pull/41443)
- 记录 `logging.file.name` 和 `logging.file.path` 不能一起使用 [#41351](https://github.com/spring-projects/spring-boot/issues/41351)
- 记录 `RestClient` 的追踪支持 [#41182](https://github.com/spring-projects/spring-boot/issues/41182)
- 更新配置 `bootBuildImage` 环境的 Kotlin DSL 示例，使其具有附加性 [#41173](https://github.com/spring-projects/spring-boot/pull/41173)

## 🔨 依赖升级

- 升级到 AspectJ 1.9.22.1 [#41470](https://github.com/spring-projects/spring-boot/issues/41470)
- 升级到 Byte Buddy 1.14.18 [#41361](https://github.com/spring-projects/spring-boot/issues/41361)
- 升级到 Dependency Management Plugin 1.1.6 [#41362](https://github.com/spring-projects/spring-boot/issues/41362)
- 升级到 GraphQL Java 21.5 [#41340](https://github.com/spring-projects/spring-boot/issues/41340)
- 升级到 Groovy 4.0.22 [#41363](https://github.com/spring-projects/spring-boot/issues/41363)
- 升级到 HttpCore5 5.2.5 [#41364](https://github.com/spring-projects/spring-boot/issues/41364)
- 升级到 Jetty 12.0.11 [#41365](https://github.com/spring-projects/spring-boot/issues/41365)
- 升级到 JsonAssert 1.5.3 [#41366](https://github.com/spring-projects/spring-boot/issues/41366)
- 升级到 JUnit Jupiter 5.10.3 [#41367](https://github.com/spring-projects/spring-boot/issues/41367)
- 升级到 Lombok 1.18.34 [#41368](https://github.com/spring-projects/spring-boot/issues/41368)
- 升级到 Micrometer 1.12.8 [#41292](https://github.com/spring-projects/spring-boot/issues/41292)
- 升级到 Micrometer Tracing 1.2.8 [#41293](https://github.com/spring-projects/spring-boot/issues/41293)
- 升级到 Neo4j Java Driver 5.22.0 [#41370](https://github.com/spring-projects/spring-boot/issues/41370)
- 升级到 Reactor Bom 2023.0.8 [#41436](https://github.com/spring-projects/spring-boot/issues/41436)
- 升级到 Spring Data Bom 2023.1.8 [#41294](https://github.com/spring-projects/spring-boot/issues/41294)
- 升级到 Spring Framework 6.1.11 [#41295](https://github.com/spring-projects/spring-boot/issues/41295)
- 升级到 Spring GraphQL 1.2.8 [#41523](https://github.com/spring-projects/spring-boot/issues/41523)
- 升级到 Spring HATEOAS 2.2.3 [#41493](https://github.com/spring-projects/spring-boot/issues/41493)
- 升级到 Spring Integration 6.2.7 [#41296](https://github.com/spring-projects/spring-boot/issues/41296)
- 升级到 Spring Kafka 3.1.7 [#41297](https://github.com/spring-projects/spring-boot/issues/41297)
- 升级到 Spring Pulsar 1.0.8 [#41532](https://github.com/spring-projects/spring-boot/issues/41532)
- 升级到 Spring Retry 2.0.7 [#41484](https://github.com/spring-projects/spring-boot/issues/41484)
- 升级到 SQLite JDBC 3.43.2.2 [#41495](https://github.com/spring-projects/spring-boot/issues/41495)
- 升级到 Tomcat 10.1.26 [#41496](https://github.com/spring-projects/spring-boot/issues/41496)

## ❤️ 贡献者

感谢所有为此版本工作过的贡献者：

[jxblum](https://github.com/jxblum), [mateusscheper](https://github.com/mateusscheper), [sdeleuze](https://github.com/sdeleuze)
```