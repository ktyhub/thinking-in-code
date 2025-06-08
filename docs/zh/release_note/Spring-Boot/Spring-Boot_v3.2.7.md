# Spring-Boot v3.2.7
## 🐞 Bug 修复

- 在添加 org.springframework.boot.jdbc.parameters 标签后，SQL Server JDBC URL 格式错误 [#41146](https://github.com/spring-projects/spring-boot/issues/41146)
- 在升级 git-commit-id Maven 插件后，无法强制 Git 即时属性 [#41109](https://github.com/spring-projects/spring-boot/issues/41109)
- MongoHealthIndicator 在严格设置下不符合 Mongo 稳定 API [#41101](https://github.com/spring-projects/spring-boot/issues/41101)
- 如果未包含 java.sql 模块，DataSourceProperties 无法绑定 [#41082](https://github.com/spring-projects/spring-boot/issues/41082)
- 构建镜像需要构建器指定堆栈 [#41046](https://github.com/spring-projects/spring-boot/issues/41046)
- 尝试使用 Spring Boot 配置的 SSL 与 Tomcat 的 HttpNio2Protocol 时出现 IllegalArgumentException [#41007](https://github.com/spring-projects/spring-boot/issues/41007)
- 当 Uber jar 包含具有 Multi-Release: true 的依赖项，并在 META-INF/versions 中有意外的文件条目时，无法启动 [#41001](https://github.com/spring-projects/spring-boot/issues/41001)
- 当启用配置缓存时，Gradle 8.7 或更高版本下的 buildInfo 不起作用 [#40911](https://github.com/spring-projects/spring-boot/issues/40911)
- 自动配置的 reactiveNeo4jTransactionManager 可能会因为有多个 TransactionManager beans 而导致失败 [#40895](https://github.com/spring-projects/spring-boot/issues/40895)
- 当使用 GraalVM 时，Flyway 自动配置不支持 Flyway 10 [#40821](https://github.com/spring-projects/spring-boot/pull/40821)
- 当配置了构建器和构建包时，构建镜像会挂起 [#40697](https://github.com/spring-projects/spring-boot/issues/40697)
- 使用 'java -jar' 运行时，Spring Boot 远程重启与 devtools 一起使用会导致 Tomcat 报 'factory already defined' 错误 [#39733](https://github.com/spring-projects/spring-boot/issues/39733)
- 当使用 Jetty 时，可能无法在可执行的 war 文件中找到 JSP 相关的资源 [#39472](https://github.com/spring-projects/spring-boot/issues/39472)
- 从 DefaultErrorAttributes 中排除状态码会抛出 NPE [#30011](https://github.com/spring-projects/spring-boot/issues/30011)

## 📔 文档

- 更精确地记录如何使用 Container 的 Docker 镜像名称来查找匹配的服务连接 [#41111](https://github.com/spring-projects/spring-boot/issues/41111)
- 修复 MockServerRestClientCustomizer 和 MockServerRestTemplateCustomizer javadoc 中的拼写错误 [#41052](https://github.com/spring-projects/spring-boot/pull/41052)
- 列出可观察性的三大支柱时，提高可读性 [#41051](https://github.com/spring-projects/spring-boot/pull/41051)
- 修复方法名称和 javadoc 中的拼写错误 [#40971](https://github.com/spring-projects/spring-boot/pull/40971)
- 在文档中警告，spring.profiles.group 只能在非特定配置文件中使用 [#40918](https://github.com/spring-projects/spring-boot/pull/40918)
- 为 `@Testcontainers` 添加 Kotlin 示例 [#40905](https://github.com/spring-projects/spring-boot/pull/40905)
- 修复文档的各种小不一致 [#40900](https://github.com/spring-projects/spring-boot/pull/40900)

## 🔨 依赖升级

- 升级到 Byte Buddy 1.14.17 [#41054](https://github.com/spring-projects/spring-boot/issues/41054)
- 升级到 Dropwizard Metrics 4.2.26 [#41055](https://github.com/spring-projects/spring-boot/issues/41055)
- 升级到 FreeMarker 2.3.33 [#41056](https://github.com/spring-projects/spring-boot/issues/41056)
- 升级到 Hibernate 6.4.9.Final [#41095](https://github.com/spring-projects/spring-boot/issues/41095)
- 升级到 HSQLDB 2.7.3 [#41057](https://github.com/spring-projects/spring-boot/issues/41057)
- 升级到 Infinispan 14.0.29.Final [#41096](https://github.com/spring-projects/spring-boot/issues/41096)
- 升级到 Jaybird 5.0.5.java11 [#41127](https://github.com/spring-projects/spring-boot/issues/41127)
- 升级到 Jersey 3.1.7 [#41058](https://github.com/spring-projects/spring-boot/issues/41058)
- 升级到 Jetty 12.0.10 [#41060](https://github.com/spring-projects/spring-boot/issues/41060)
- 升级到 Jetty Reactive HTTPClient 4.0.5 [#41059](https://github.com/spring-projects/spring-boot/issues/41059)
- 升级到 jOOQ 3.18.17 [#41128](https://github.com/spring-projects/spring-boot/issues/41128)
- 升级到 Maven Help Plugin 3.4.1 [#41062](https://github.com/spring-projects/spring-boot/issues/41062)
- 升级到 Micrometer 1.12.7 [#41015](https://github.com/spring-projects/spring-boot/issues/41015)
- 升级到 Micrometer Tracing 1.2.7 [#41027](https://github.com/spring-projects/spring-boot/issues/41027)
- 升级到 Neo4j Java Driver 5.21.0 [#41028](https://github.com/spring-projects/spring-boot/issues/41028)
- 升级到 Netty 4.1.111.Final [#41063](https://github.com/spring-projects/spring-boot/issues/41063)
- 升级到 Pulsar Reactive 0.5.6 [#41129](https://github.com/spring-projects/spring-boot/issues/41129)
- 升级到 Reactor Bom 2023.0.7 [#41016](https://github.com/spring-projects/spring-boot/issues/41016)
- 升级到 Spring AMQP 3.1.6 [#41143](https://github.com/spring-projects/spring-boot/issues/41143)
- 升级到 Spring Authorization Server 1.2.5 [#41017](https://github.com/spring-projects/spring-boot/issues/41017)
- 升级到 Spring Data Bom 2023.1.7 [#41018](https://github.com/spring-projects/spring-boot/issues/41018)
- 升级到 Spring Framework 6.1.10 [#41149](https://github.com/spring-projects/spring-boot/issues/41149)
- 升级到 Spring GraphQL 1.2.7 [#41020](https://github.com/spring-projects/spring-boot/issues/41020)
- 升级到 Spring Integration 6.2.6 [#41021](https://github.com/spring-projects/spring-boot/issues/41021)
- 升级到 Spring Kafka 3.1.6 [#41022](https://github.com/spring-projects/spring-boot/issues/41022)
- 升级到 Spring LDAP 3.2.4 [#41023](https://github.com/spring-projects/spring-boot/issues/41023)
- 升级到 Spring Pulsar 1.0.7 [#41024](https://github.com/spring-projects/spring-boot/issues/41024)
- 升级到 Spring Security 6.2.5 [#41025](https://github.com/spring-projects/spring-boot/issues/41025)
- 升级到 Spring Session 3.2.4 [#41026](https://github.com/spring-projects/spring-boot/issues/41026)
- 升级到 Tomcat 10.1.25 [#41158](https://github.com/spring-projects/spring-boot/issues/41158)

## ❤️ 贡献者

感谢所有参与此次发布的贡献者：

[@MazizEsa](https://github.com/MazizEsa), [@PiyalAhmed](https://github.com/PiyalAhmed), [@asashour](https://github.com/asashour), [@cmabdullah](https://github.com/cmabdullah), [@donghoony](https://github.com/donghoony), [@erie0210](https://github.com/erie0210), [@mateusscheper](https://github.com/mateusscheper), [@quaff](https://github.com/quaff), [@vsanna](https://github.com/vsanna)