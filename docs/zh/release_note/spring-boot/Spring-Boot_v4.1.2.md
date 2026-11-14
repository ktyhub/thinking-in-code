---
title: "spring-boot v4.1.2"
description: "Spring Boot 可帮助您轻松创建由 Spring 驱动的生产级应用程序和服务。"
summary: "Spring Boot 可帮助您轻松创建由 Spring 驱动的生产级应用程序和服务。"
---

# spring-boot v4.1.2

### spring-boot 是什么

Spring Boot 可帮助您轻松创建由 Spring 驱动的生产级应用程序和服务。

### spring-boot v4.1.2 版本更新了什么

## :star: 新功能

- 将 20\_SEVEN 添加到 JavaVersion 枚举中 [#51426](https://github.com/spring-projects/spring-boot/issues/51426)

## :lady_beetle: 错误修复

- OriginTrackedResource 未正确实现 equals [#52267](https://github.com/spring-projects/spring-boot/issues/52267)
- OriginTrackedPropertiesLoader 会删除名称以 # 或 ! 开头的属性[#52265](https://github.com/spring-projects/spring-boot/issues/52265)
- 当颁发者 uri 为空且设置了 jwk-set-uri 时，JWT 将被拒绝 [#52260](https://github.com/spring-projects/spring-boot/issues/52260)
- 没有目录条目的嵌套 jar 缺少包清单属性 [#52258](https://github.com/spring-projects/spring-boot/issues/52258)
- Logback ColorConverter 不必要地解析每个日志事件的选项 [#52228](https://github.com/spring-projects/spring-boot/pull/52228)
- TestPropertyValues 中的空系统属性被清除，而不是恢复为空值 [#52208](https://github.com/spring-projects/spring-boot/issues/52208)
- 当在空闲服务器上 shutdownGraceously 后立即调用 stop 时，Tomcat 或 Jetty 的正常关闭可能会以 REQUESTS\_ACTIVE 回调 [#52197](https://github.com/spring-projects/spring-boot/issues/52197)
- 在 shutdownGracely 之后立即调用 NettyWebServer 停止可能会挂起 [#52196](https://github.com/spring-projects/spring-boot/issues/52196)
- 未配置子策略时，gRPC 客户端“grpc”负载平衡无法与 NullPointerException 绑定 [#52193](https://github.com/spring-projects/spring-boot/pull/52193)
- 防止 gRPC 客户端属性覆盖用户自定义设置 [#52175](https://github.com/spring-projects/spring-boot/pull/52175)
- 当凭据包含空格时 MongoDB 无法连接 [#52168](https://github.com/spring-projects/spring-boot/issues/52168)
- 当 spring.elasticsearch.uris 中配置的密码包含冒号时，身份验证失败 [#52166](https://github.com/spring-projects/spring-boot/issues/52166)
- 当测试上下文框架暂停上下文时，日志记录可能会丢失 [#52088](https://github.com/spring-projects/spring-boot/issues/52088)
- 当凭据包含需要 URL 编码的字符时，Docker Compose 对 MongoDB 的支持无法连接 [#52084](https://github.com/spring-projects/spring-boot/issues/52084)
- 当 Actuator 在单独的端口上运行时，Jersey 不使用端点 ObjectMapper [#51982](https://github.com/spring-projects/spring-boot/issues/51982)
- 配置 gRPC 服务配置持续时间时，秒的一小部分处理不正确 [#51957](https://github.com/spring-projects/spring-boot/pull/51957)
- 使用 Gradle 增量构建时，配置属性描述可能会丢失 [#51925](https://github.com/spring-projects/spring-boot/issues/51925)
- BasicJsonParser 错误处理嵌套列表和映射中的转义字符 [#51908](https://github.com/spring-projects/spring-boot/issues/51908)
- 零周值转换失败，并出现“无法从 WEEKS 中提取 intValue”异常 [#51894](https://github.com/spring-projects/spring-boot/issues/51894)
- 使用 DevTools 并在没有 spring-boot-jdbc 或 spring-boot-r2dbc 的情况下手动配置 JDBC 或 R2DBC 时，应用程序无法启动 [#51890](https://github.com/spring-projects/spring-boot/issues/51890)
- Docker Compose 支持错误地识别 MARIADB\_ALLOW\_EMPTY\_PASSWORD 而不是 MARIADB\_ALLOW\_EMPTY\_ROOT\_PASSWORD [#51888](https://github.com/spring-projects/spring-boot/issues/51888)
- 不应用自动配置的 Kotlinx 序列化 JSON 编解码器自定义 [#51877](https://github.com/spring-projects/spring-boot/issues/51877)
- 由于 NestedJarFileResources 中的竞争条件，使用 uber jar 时可能会引发 NullPointerException [#51745](https://github.com/spring-projects/spring-boot/issues/51745)
- DevTools 未检测到反应式 Web 环境 [#51730](https://github.com/spring-projects/spring-boot/issues/51730)
- spring.http.clients.cookie-handling 在使用由 HttpComponents 连接器支持的反应式客户端时无效 [#51724](https://github.com/spring-projects/spring-boot/pull/51724)
- 当rabbitmq Docker Compose服务配置为使用SSL时连接失败 [#51667](https://github.com/spring-projects/spring-boot/issues/51667)
- Maven 打包的战争中缺少 SBOM 相关的清单属性 [#51651](https://github.com/spring-projects/spring-boot/issues/51651)
- 当 server.reactive.session.cookie.same-site 未设置时，会话 cookie 没有 SameSite 属性 [#51639](https://github.com/spring-projects/spring-boot/issues/51639)
- OAuth2 资源服务器在自行设置时会忽略权限声明分隔符 [#51630](https://github.com/spring-projects/spring-boot/issues/51630)
-developmentOnly 和 testAndDevelopmentOnly 配置未指定任何导致潜在解析问题的属性 [#51623](https://github.com/spring-projects/spring-boot/issues/51623)
- 在反应式 Web 应用程序中，当云控制器 URL 不可用时，Cloud Foundry 安全集成返回 500 而不是 503 [#51614](https://github.com/spring-projects/spring-boot/issues/51614)
- 图层创建失败时，图层临时文件不会被删除 [#51581](https://github.com/spring-projects/spring-boot/issues/51581)
- 当环境变量没有值时，RabbitMQ 的 Docker Compose 集成会跳过凭证回退 [#51578](https://github.com/spring-projects/spring-boot/issues/51578)
- 一些断言消息命名了错误的参数 [#51574](https://github.com/spring-projects/spring-boot/issues/51574)
- OAuth2ResourceServerProperties.Jwt 的 setter 与其 getter 不匹配 [#51562](https://github.com/spring-projects/spring-boot/issues/51562)
- jarmode 工具命令打印堆栈跟踪而不是错误消息 [#51547](https://github.com/spring-projects/spring-boot/issues/51547)
- Docker Compose ProcessRunner 可以挂起或留下孤立进程 [#51538](https://github.com/spring-projects/spring-boot/issues/51538)
- 当缓冲区无法填充时，NestedByteChannel.read(ByteBuffer) 错误地返回 0 [#51520](https://github.com/spring-projects/spring-boot/issues/51520)
- HTTP 客户端构建器中的定制器空检查断言错误的属性 [#51513](https://github.com/spring-projects/spring-boot/issues/51513)
- Tomcat 初始化期间 SSL 主机配置自定义可能会丢失 [#51511](https://github.com/spring-projects/spring-boot/issues/51511)
- SQL Server Docker Compose 集成可能会重复 JDBC URL 的加密参数 [#51481](https://github.com/spring-projects/spring-boot/issues/51481)
- WritableJson.toByteArray() 可能会损坏增补字符 [#51464](https://github.com/spring-projects/spring-boot/pull/51464)
- 重新加载 SSL 捆绑包时 SSL 主机配置自定义会丢失 [#51457](https://github.com/spring-projects/spring-boot/issues/51457)
- 当提供用户定义的 ClientRegistrationRepository bean 时，OAuth2ClientProperties 不可用 [#51450](https://github.com/spring-projects/spring-boot/issues/51450)
- 当 LDAP 服务器未公开协议版本时，LdapHealthIndicator 报告 UNKNOWN 而不是 UP [#51441](https://github.com/spring-projects/spring-boot/pull/51441)
- 如果启动立即失败，JmsHealthIndicator 会泄漏看门狗线程 [#51433](https://github.com/spring-projects/spring-boot/issues/51433)
- 所有 JSON marshal 测试人员都没有一致地关闭源 [#51418](https://github.com/spring-projects/spring-boot/issues/51418)
- SpringBootJoranConfigurator 中的文件句柄应该关闭 [#51415](https://github.com/spring-projects/spring-boot/issues/51415)
- 解析根数据源时尊重包装器的展开 [#51410](https://github.com/spring-projects/spring-boot/pull/51410)
- 已弃用的 io.buildpacks.stack.id 的验证过于激进 [#51400](https://github.com/spring-projects/spring-boot/issues/51400)
- ReactiveOAuth2ResourceServerWebSecurityAutoConfiguration 注释有错误条件 [#50778](https://github.com/spring-projects/spring-boot/issues/50778)

## :notebook_with_decorative_cover: 文档

- 修复 gRPC 测试文档中的拼写错误 [#52181](https://github.com/spring-projects/spring-boot/pull/52181)
- 修复基于 servlet 的 gRPC 服务器的 Gradle 示例 [#51956](https://github.com/spring-projects/spring-boot/pull/51956)
- 修复 Javadoc 中的执行器端点属性名称 [#51886](https://github.com/spring-projects/spring-boot/issues/51886)
- 记录有关代理服务器的 InetAddressFilter 限制 [#51863](https://github.com/spring-projects/spring-boot/issues/51863)
- Java 27 的文档支持 [#51825](https://github.com/spring-projects/spring-boot/issues/51825)
- 修复从参考文档到外部 Javadoc 的断开链接 [#51820](https://github.com/spring-projects/spring-boot/issues/51820)
- 删除参考指南中对 AppOptics 的引用，因为它已停用 [#51808](https://github.com/spring-projects/spring-boot/issues/51808)
- 修复损坏的链接 [#51802](https://github.com/spring-projects/spring-boot/issues/51802)
- 更新 Spring 框架参考链接 [#51771](https://github.com/spring-projects/spring-boot/issues/51771)
- 更新 testcontainers javadoc 链接 [#51765](https://github.com/spring-projects/spring-boot/issues/51765)
- Maven 插件文档错误地引用了远程重启属性 [#51747](https://github.com/spring-projects/spring-boot/issues/51747)
- 修复 spring.test.database.replace 的记录默认值 [#51728](https://github.com/spring-projects/spring-boot/issues/51728)
- 正确的 Jackson 3 Javadoc 链接 [#51663](https://github.com/spring-projects/spring-boot/issues/51663)
- 修复已弃用的 Pushgateway base-url 属性元数据中的拼写错误 [#51632](https://github.com/spring-projects/spring-boot/issues/51632)
- 通过 gRPC 记录行李传播 [#51597](https://github.com/spring-projects/spring-boot/pull/51597)
- 删除对 Spring Data Geode 的引用 [#51564](https://github.com/spring-projects/spring-boot/issues/51564)
- 修复服务容器 javadoc 和参考文档中的拼写错误 [#51445](https://github.com/spring-projects/spring-boot/issues/51445)
- 在 WebFlux 安全文档中记录 SAML2 退避 [#51435](https://github.com/spring-projects/spring-boot/issues/51435)
- 删除对已删除的 SpringBootWebSecurityConfiguration 的引用 [#51413](https://github.com/spring-projects/spring-boot/issues/51413)

## :hammer: 依赖升级

- 升级到 [ActiveMQ 6.2.10](https://activemq.apache.org/components/classic/download/classic-06-02-10) [#52005](https://github.com/spring-projects/spring-boot/issues/52005)
- 升级到 [Build Helper Maven 插件 3.6.2](https://github.com/mojohaus/build-helper-maven-plugin/releases/tag/3.6.2) [#52006](https://github.com/spring-projects/spring-boot/issues/52006)
- 升级到 Byte Buddy 1.18.15 [#52219](https://github.com/spring-projects/spring-boot/issues/52219)
- 升级到 Cassandra 驱动程序 4.19.4 [#52274](https://github.com/spring-projects/spring-boot/issues/52274)
- 升级到 Elasticsearch 客户端 9.4.8 [#52222](https://github.com/spring-projects/spring-boot/issues/52222)
- 升级到 [FreeMarker 2.3.35](https://freemarker.apache.org/docs/versions\_2\_3\_35.html) [#52008](https://github.com/spring-projects/spring-boot/issues/52008)
- 升级到 [GraphQL Java 25.1](https://github.com/graphql-java/graphql-java/releases/tag/v25.1) [#52108](https://github.com/spring-projects/spring-boot/issues/52108)
- 升级到 [Grpc Java 1.84.1](https://github.com/grpc/grpc-java/releases/tag/v1.84.1) [#52173](https://github.com/spring-projects/spring-boot/issues/52173)
- 升级到 Hibernate 7.4.13.Final [#52156](https://github.com/spring-projects/spring-boot/issues/52156)
- 升级到 Hibernate Validator 9.1.5.Final [#52224](https://github.com/spring-projects/spring-boot/issues/52224)
- 升级到 HttpClient5 5.6.5 [#52157](https://github.com/spring-projects/spring-boot/issues/52157)
- 升级到 HttpCore5 5.4.4 [#52011](https://github.com/spring-projects/spring-boot/issues/52011)
- 升级到 [Jackson 2 Bom 2.21.7](https://github.com/FasterXML/jackson/wiki/Jackson-Release-2.21.7) [#52012](https://github.com/spring-projects/spring-boot/issues/52012)
- 升级到 [Jackson Bom 3.1.7](https://github.com/FasterXML/jackson/wiki/Jackson-Release-3.1.7) [#52013](https://github.com/spring-projects/spring-boot/issues/52013)
- 升级到 Jakarta Json Bind 3.0.4 [#52225](https://github.com/spring-projects/spring-boot/issues/52225)
- 升级到 Jaybird 6.0.7 [#52158](https://github.com/spring-projects/spring-boot/issues/52158)
- 升级到 Jersey 4.0.3 [#52016](https://github.com/spring-projects/spring-boot/issues/52016)
- 升级到 [Jetty 12.1.14](https://github.com/jetty/jetty.project/releases/tag/jetty-12.1.14) [#52017](https://github.com/spring-projects/spring-boot/issues/52017)
- 升级到 [jOOQ 3.21.9](https://github.com/jOOQ/jOOQ/releases/tag/version-3.21.9) [#52018](https://github.com/spring-projects/spring-boot/issues/52018)
- 升级到 [Kafka 4.2.2](https://downloads.apache.org/kafka/4.2.2/RELEASE\_NOTES.html) [#52019](https://github.com/spring-projects/spring-boot/issues/52019)
- 升级到 [Liquibase 5.0.4](https://github.com/liquibase/liquibase/releases/tag/v5.0.4) [#52020](https://github.com/spring-projects/spring-boot/issues/52020)
- 升级到 Lombok 1.18.48 [#52021](https://github.com/spring-projects/spring-boot/issues/52021)
- 升级到[千分尺1.17.2](https://github.com/micrometer-metrics/micrometer/releases/tag/v1.17.2)[#52097](https://github.com/spring-projects/spring-boot/issues/52097)
- 升级到[测微计追踪1.7.2](https://github.com/micrometer-metrics/tracing/releases/tag/v1.7.2) [#52134](https://github.com/spring-projects/spring-boot/issues/52134)
- 升级到 [本机构建工具插件 1.1.14](https://github.com/graalvm/native-build-tools/releases/tag/1.1.14) [#52022](https://github.com/spring-projects/spring-boot/issues/52022)
- 升级到 Netty 4.2.19.Final [#52023](https://github.com/spring-projects/spring-boot/issues/52023)
- 升级到池化 JMS 3.2.5 [#52025](https://github.com/spring-projects/spring-boot/issues/52025)
- 升级到 [Postgresql 42.7.14](https://github.com/pgjdbc/pgjdbc/releases/tag/REL42.7.14) [#52109](https://github.com/spring-projects/spring-boot/issues/52109)
- 升级到 [Protobuf Java 4.36.2](https://github.com/protocolbuffers/protobuf/releases/tag/v4.36.2) [#52174](https://github.com/spring-projects/spring-boot/issues/52174)
- 升级到 [Protobuf Maven 插件 5.1.11](https://github.com/ascopes/protobuf-maven-plugin/releases/tag/v5.1.11) [#52024](https://github.com/spring-projects/spring-boot/issues/52024)
- 升级到 [Pulsar 4.2.5](https://pulsar.apache.org/release-notes/versioned/pulsar-4.2.5) [#52026](https://github.com/spring-projects/spring-boot/issues/52026)
- 升级到 [R2DBC MariaDB 1.4.2](https://github.com/mariadb-corporation/mariadb-connector-r2dbc/releases/tag/1.4.2) [#52027](https://github.com/spring-projects/spring-boot/issues/52027)
- 升级到 [R2DBC MSSQL 1.0.7.RELEASE](https://github.com/r2dbc/r2dbc-mssql/releases/tag/v1.0.7.RELEASE) [#52028](https://github.com/spring-projects/spring-boot/issues/52028)
- 升级到 [R2DBC Postgresql 1.1.3.RELEASE](https://github.com/pgjdbc/r2dbc-postgresql/releases/tag/v1.1.3.RELEASE) [#52029](https://github.com/spring-projects/spring-boot/issues/52029)
- 升级到 [R2DBC 代理 1.1.7.RELEASE](https://github.com/r2dbc/r2dbc-proxy/releases/tag/v1.1.7.RELEASE) [#52226](https://github.com/spring-projects/spring-boot/issues/52226)
- 升级至 [Reactor Bom 2025.0.8](https://github.com/reactor/reactor/releases/tag/2025.0.8) [#51960](https://github.com/spring-projects/spring-boot/issues/51960)
- 升级到 SLF4J 2.0.20 [#52030](https://github.com/spring-projects/spring-boot/issues/52030)
- 升级到 [Spring AMQP 4.1.2](https://github.com/spring-projects/spring-amqp/releases/tag/v4.1.2) [#51961](https://github.com/spring-projects/spring-boot/issues/51961)
- 升级到 [Spring Batch 6.0.6](https://github.com/spring-projects/spring-batch/releases/tag/v6.0.6) [#52135](https://github.com/spring-projects/spring-boot/issues/52135)
- 升级到 [Spring Data Bom 2026.0.2](https://github.com/spring-projects/spring-data-bom/releases/tag/2026.0.2) [#51971](https://github.com/spring-projects/spring-boot/issues/51971)
- 升级到 [Spring Framework 7.0.10](https://github.com/spring-projects/spring-framework/releases/tag/v7.0.10) [#51962](https://github.com/spring-projects/spring-boot/issues/51962)
- 升级到 [Spring GraphQL 2.0.6](https://github.com/spring-projects/spring-graphql/releases/tag/v2.0.6) [#52098](https://github.com/spring-projects/spring-boot/issues/52098)
- 升级到 [Spring gRPC 1.1.2](https://github.com/spring-projects/spring-grpc/releases/tag/v1.1.2) [#51963](https://github.com/spring-projects/spring-boot/issues/51963)
- 升级到 [Spring HATEOAS 3.1.3](https://github.com/spring-projects/spring-hateoas/releases/tag/3.1.3) [#52136](https://github.com/spring-projects/spring-boot/issues/52136)
- 升级到 [Spring Integration 7.1.2](https://github.com/spring-projects/spring-integration/releases/tag/v7.1.2) [#51964](https://github.com/spring-projects/spring-boot/issues/51964)
- 升级到 [Spring Kafka 4.1.2](https://github.com/spring-projects/spring-kafka/releases/tag/v4.1.2) [#51965](https://github.com/spring-projects/spring-boot/issues/51965)
- 升级到 [Spring LDAP 4.1.2](https://docs.spring.io/spring-ldap/reference/4.1.2/api/java) [#52211](https://github.com/spring-projects/spring-boot/issues/52211)
- 升级到 [Spring Pulsar 2.0.8](https://github.com/spring-projects/spring-pulsar/releases/tag/v2.0.8) [#52099](https://github.com/spring-projects/spring-boot/issues/52099)
- 升级到 [Spring RESTDocs 4.0.2](https://github.com/spring-projects/spring-restdocs/releases/tag/v4.0.2) [#51966](https://github.com/spring-projects/spring-boot/issues/51966)
- 升级到 [Spring Security 7.1.2](https://github.com/spring-projects/spring-security/releases/tag/7.1.2) [#52137](https://github.com/spring-projects/spring-boot/issues/52137)
- 升级到 [Spring WS 5.0.3](https://github.com/spring-projects/spring-ws/releases/tag/v5.0.3) [#51967](https://github.com/spring-projects/spring-boot/issues/51967)
- 升级到 [SQLite JDBC 3.53.4.0](https://github.com/xerial/sqlite-jdbc/releases/tag/3.53.4.0) [#52031](https://github.com/spring-projects/spring-boot/issues/52031)
- 升级到 Tomcat 11.0.27 [#52184](https://github.com/spring-projects/spring-boot/issues/52184)
- 升级到 WebJars Locator Lite 1.1.5 [#52033](https://github.com/spring-projects/spring-boot/issues/52033)
- 升级到 [XML Maven 插件 1.2.2](https://github.com/mojohaus/xml-maven-plugin/releases/tag/xml-maven-plugin-1.2.2) [#52034](https://github.com/spring-projects/spring-boot/issues/52034)

## :heart: 贡献者

感谢所有参与此版本发布的贡献者：

@2heunxun、@CCCLL、@CHISANW、@COBI-98、@DevJunz、@JunggiKim、@LindseyZ1205、@MacAlsandair、@MycroCosmo、@NotAFlightRisk、@SebTardif、@dlwhdgus0810、@dlwldn30、@dmitrysulman、@fabio-grassi、@galenzo17、 @geonheeryu、@hjm12223、@icikle、@janwaleed09、@jjh75607、@kdomo、@khopland、@ksky8864、@lavinhoque33、@msridhar、@ngocnhan-tran1996、@noojung、@o-shevchenko、@ohchanKyu、@padosol、@piyushrajyadav、 @rvullriede、@ryujungkyun、@scordio、@scottfrederick、@timtebeek、@vlsi、@xoruddl、@xxxxxxjun、@yyuneu 和 @zhoubiao188

---

> 📦 仓库：[spring-projects/spring-boot](https://github.com/spring-projects/spring-boot) · 🏷️ 版本：`v4.1.2` · 📅 发布：2026-10-22 · [查看英文原版 Release](https://github.com/spring-projects/spring-boot/releases/tag/v4.1.2)

*本文由 NextStack 自动化流水线采集并翻译，内容以官方英文原文为准。*
