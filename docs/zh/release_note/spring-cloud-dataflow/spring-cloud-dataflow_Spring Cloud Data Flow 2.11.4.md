# spring-cloud-dataflow Spring Cloud Data Flow 2.11.4

# 依赖项目和兼容性

| 组件                     | 版本    |
|------------------------|--------|
| Spring Cloud Dataflow  | 2.11.4 |
| Spring Cloud Skipper   | 2.11.4 |
| Spring Cloud Deployer  | 2.9.4  |
| Spring Cloud Dataflow UI | 3.4.5  |

# 问题

- [#5848](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5848) Spring Boot 3 任务应用的BadSqlGrammarException
- [#5825](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5825) xmlunit-core-2.9.1.jar的传递依赖中的安全问题
- [#5705](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5705) 任务计划未使用属性文件中定义的版本

## 🔨 依赖升级

- Spring Framework 升级至 5.3.37
- Jackson 升级至 2.17.2
- Reactor 升级至 2020.0.45
- Netty 升级至 4.1.111.Final
- Tomcat 升级至 9.0.90
- nimbus-jose-jwt 升级至 9.37.3
- testcontainers 升级至 1.19.8

## Spring Cloud Dataflow 和 Skipper 从 `v2.11.3` 到 `v2.11.4` 的更新内容

- 更新 spring-boot-starter-test 的范围：[#5826](https://github.com/spring-cloud/spring-cloud-dataflow/pull/5826)
- 添加 spring-cloud-dataflow-server 到版本信息：[#5822](https://github.com/spring-cloud/spring-cloud-dataflow/pull/5822)
- 更新所有 src/deploy 脚本到 2.11.4 版本：[#5827](https://github.com/spring-cloud/spring-cloud-dataflow/pull/5827)
- 移除未使用的标签器工作流：[#5840](https://github.com/spring-cloud/spring-cloud-dataflow/pull/5840)
- 提升最后任务执行的性能：[#5843](https://github.com/spring-cloud/spring-cloud-dataflow/pull/5843)
- 移除冗余的 Bouncycastle 依赖管理：[#5855](https://github.com/spring-cloud/spring-cloud-dataflow/pull/5855)
- 创建 uaa-test 容器的工作流：[#5861](https://github.com/spring-cloud/spring-cloud-dataflow/pull/5861)
- 更新 Spring Framework 至 5.3.37：[#5863](https://github.com/spring-cloud/spring-cloud-dataflow/pull/5863)
- 修复容器的 build-image 名称：[#5864](https://github.com/spring-cloud/spring-cloud-dataflow/pull/5864)
- 更新 Tomcat 至 9.0.90：[#5865](https://github.com/spring-cloud/spring-cloud-dataflow/pull/5865)
- 更新多个库的依赖补丁版本：[#5868](https://github.com/spring-cloud/spring-cloud-dataflow/pull/5868)
- 移除 H2 依赖管理并依赖 Boot Bom：[#5870](https://github.com/spring-cloud/spring-cloud-dataflow/pull/5870)
- 确保 PackageMetadata 使用 SafeConstructor 创建：[#5871](https://github.com/spring-cloud/spring-cloud-dataflow/pull/5871)

**完整更新日志**: [v2.11.3...v2.11.4](https://github.com/spring-cloud/spring-cloud-dataflow/compare/v2.11.3...v2.11.4)

## Spring Cloud Deployer 从 `v2.9.3` 到 `v2.9.4` 的更新内容

- 更新 Spring Framework 至 5.3.34：[spring-cloud-deployer#449](https://github.com/spring-cloud/spring-cloud-deployer/pull/449)
- 添加 commons-io 和 commons-compress 的依赖管理：[spring-cloud-deployer#452](https://github.com/spring-cloud/spring-cloud-deployer/pull/452)
- 移除未使用的标签器工作流文件：[spring-cloud-deployer#456](https://github.com/spring-cloud/spring-cloud-deployer/pull/456)
- 更新 Jackson 至 2.17.1：[spring-cloud-deployer#457](https://github.com/spring-cloud/spring-cloud-deployer/pull/457)
- 更新 hashids 至 1.0.3：[spring-cloud-deployer#458](https://github.com/spring-cloud/spring-cloud-deployer/pull/458)
- 修复 cfenv 检测：[spring-cloud-deployer#461](https://github.com/spring-cloud/spring-cloud-deployer/pull/461)
- 将依赖版本放入属性：[spring-cloud-deployer#467](https://github.com/spring-cloud/spring-cloud-deployer/pull/467)

**完整更新日志**: [spring-cloud/spring-cloud-deployer@v2.9.3...v2.9.4](https://github.com/spring-cloud/spring-cloud-deployer/compare/v2.9.3...v2.9.4)
```