# spring-cloud-dataflow Spring Cloud Data Flow 2.10.1

# 重要更新

## 库更新

- Spring Boot `2.7.8`
- Spring Framework `5.3.25`
- Spring Shell `2.1.5`

## Kubernetes

- 增加了完全配置 pod 和容器安全上下文的能力。
- 容器安全上下文被传播到 init 容器和其他附加容器。

# 依赖项目和兼容性

| 组件                          | 版本    |
|-----------------------------|-------|
| Spring Cloud Dataflow Build | 2.10.1|
| Spring Cloud Dataflow Common| 2.10.1|
| Spring Cloud Deployer       | 2.8.1 |
| Spring Cloud Deployer Local | 2.8.1 |
| Spring Cloud Deployer CF    | 2.8.1 |
| Spring Cloud Deployer K8S   | 2.8.1 |
| Spring Cloud Common Security Config | 1.8.1 |
| Spring Cloud Skipper        | 2.9.1 |
| Spring Cloud Dataflow UI    | 3.3.1 |
| Spring Cloud Dataflow       | 2.10.1|

# 问题

[spring-cloud/spring-cloud-dataflow-build#95](https://github.com/spring-cloud/spring-cloud-dataflow-build/issues/95) 更新 spring-shell 2.1.5<br> 
[spring-cloud/spring-cloud-deployer-local#219](https://github.com/spring-cloud/spring-cloud-deployer-local/issues/219) maxConcurrentExecutionsReached() 存在一个竞争条件，多个实例可能在返回结果之前启动<br> 
[spring-cloud/spring-cloud-deployer-kubernetes#512](https://github.com/spring-cloud/spring-cloud-deployer-kubernetes/issues/512) 添加对配置安全上下文和允许特权升级的支持<br> 
[spring-cloud/spring-cloud-dataflow-ui#1904](https://github.com/spring-cloud/spring-cloud-dataflow-ui/issues/1904) 任务执行状态标签<br> 
[#5200](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5200) 说明如何扩展 classpath<br> 
[#5194](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5194) 移除缺少 pivotal-cloudfoundry-client-reactor 的解决方法<br> 
[#5193](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5193) 移除所有 repo.spring.io/release 的使用（main）<br> 
[#5191](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5191) 更新到 Spring Boot 2.7.8<br> 
[#5188](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5188) 从 SCDF 2.9.5 到 2.10.0 迁移期间发生 Flyway 错误<br> 
[#5187](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5187) AppRegistryCommands 缺少 ApplicationType 完成<br> 
[#5184](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5184) 用户希望在 podSecurityContext 中设置 runAsGroup 属性<br> 
[#5183](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5183) 任务执行视图报告错误状态<br> 
[#5174](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5174) dataflow.spring.io 与批处理相关的文档问题<br> 
[#5172](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5172) spring-cloud-dataflow-shell 解析 kebab-case 参数失败<br> 
[#5171](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5171) spring-security-oauth2-client 版本在 spring-cloud-dataflow-server 模块中未对齐<br> 
[#5170](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5170) SCDF 中运行在 K8S pod 中的 Spring Batch 无法加载 MariaDB 驱动类<br> 
[#5164](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5164) 当使用配置服务器时，MySQL 5.7 无法与 SCDF 2.10 一起工作<br> 
[#5163](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5163) SCDF 2.10.0 本地环境文档仍指向 2.10.0-SNAPSHOT 手动下载页面<br> 
[#4971](https://github.com/spring-cloud/spring-cloud-dataflow/issues/4971) 弃用 Step History 中的 Count 属性
```