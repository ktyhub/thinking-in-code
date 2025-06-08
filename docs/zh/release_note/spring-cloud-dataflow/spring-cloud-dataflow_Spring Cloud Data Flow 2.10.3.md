# spring-cloud-dataflow Spring Cloud Data Flow 2.10.3
# 重要变更

## 库更新

- Spring Boot 2.7.11

# 依赖项目和兼容性

| 组件                               | 版本    |
|------------------------------------|---------|
| Spring Cloud Dataflow Build        | 2.10.3  |
| Spring Cloud Dataflow Common       | 2.10.3  |
| Spring Cloud Deployer              | 2.8.3   |
| Spring Cloud Deployer Local        | 2.8.3   |
| Spring Cloud Deployer CF           | 2.8.3   |
| Spring Cloud Deployer K8S          | 2.8.3   |
| Spring Cloud Common Security Config | 1.8.3   |
| Spring Cloud Skipper               | 2.9.3   |
| Spring Cloud Dataflow UI           | 3.3.3   |
| Spring Cloud Dataflow              | 2.10.3  |

# CVE 修复

- [修复代码扫描警报 - 构造器反序列化远程代码执行](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5329)
- [spring-security-oauth2-client-5.4.2 的传递依赖中的安全问题](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5303)
- [spring-expression-5.2.11 的传递依赖中的安全问题](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5302)
- [spring-webmvc-5.3.25 的传递依赖中的安全问题](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5301)
- [json-smart-2.3 的传递依赖中的安全问题](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5300)
- [jettison-1.51 的传递依赖中的安全问题](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5299)
- [spring-security-oauth2-client 版本不一致问题](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5248)

# 问题

- [将 maven 仓库切换出 libs-xyz 变体](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5325)
- [本地 scdf 默认的 spring 仓库不可用](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5321)
- [注销多个应用时不起作用而注销单个应用时正常](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5317)
- [[2.10.x] 文档清理](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5297)
- [简化 Carvel 包（第一部分）](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5252)
- [即使应用了相应配置也未暴露 Hibernate 统计](https://github.com/spring-cloud/spring-cloud-dataflow/issues/4791)
- [(Backport) 尊重全局属性中的 initContainer](https://github.com/spring-cloud/spring-cloud-deployer/pull/381)
- [(Backport) 添加pod级别的 'terminationGracePeriodSeconds'](https://github.com/spring-cloud/spring-cloud-deployer/issues/386)