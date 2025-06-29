# spring-cloud-dataflow Spring Cloud Data Flow 2.10.0

# 重要更新

## 春季更新

### 版本更新：

- Spring Boot `2.7.6`
- Spring Framework `5.3.24`
- Spring Cloud `2021.0.5`

## Spring Shell

Spring Shell已更新到[2.1.4](https://github.com/spring-projects/spring-shell/releases/tag/v2.1.4)。

## 文档更新

### 支持ARM的容器镜像

Spring Cloud Data Flow和Skipper，以及Stream Application项目包含在ARM平台上运行时用于创建容器的脚本。参考指南有一节描述了这些脚本的使用方法，[查看详细](https://docs.spring.io/spring-cloud-dataflow/docs/current/reference/htmlsingle/#create-containers)。

### 本地Kubernetes开发的脚本

我们在Spring Cloud Data Flow中增加了一套脚本，便于在本地启动Kubernetes集群并安装包含MariaDB和RabbitMQ或Kafka的SCDF。详见参考指南，[查看详细](https://docs.spring.io/spring-cloud-dataflow/docs/current/reference/htmlsingle/#local-k8s-development)。

# 依赖项目和兼容性

| 组件                            | 版本     |
|-------------------------------|--------|
| Spring Cloud Dataflow Build   | 2.10.0 |
| Spring Cloud Dataflow Common  | 2.10.0 |
| Spring Cloud Deployer         | 2.8.0  |
| Spring Cloud Deployer Local   | 2.8.0  |
| Spring Cloud Deployer CF      | 2.8.0  |
| Spring Cloud Deployer K8S     | 2.8.0  |
| Spring Cloud Common Security Config | 1.8.0  |
| Spring Cloud Skipper          | 2.9.0  |
| Spring Cloud Dataflow UI      | 3.3.0  |
| Spring Cloud Dataflow         | 2.10.0 |

# 问题

- [spring-cloud/spring-cloud-dataflow-build#93](https://github.com/spring-cloud/spring-cloud-dataflow-build/issues/93) 更新spring-shell 2.1.4
- [spring-cloud/spring-cloud-deployer-kubernetes#503](https://github.com/spring-cloud/spring-cloud-deployer-kubernetes/issues/503) 改进Kubernetes部署属性文档
- [spring-cloud/spring-cloud-deployer-kubernetes#494](https://github.com/spring-cloud/spring-cloud-deployer-kubernetes/issues/494) 支持Job Schedule的并发策略
- [spring-cloud/spring-cloud-skipper#1068](https://github.com/spring-cloud/spring-cloud-skipper/issues/1068) 确保参考文档最新且有效
- [#5161](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5161) Shell在使用属性部署流时失败
- [#5151](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5151) 审查dataflow.spring.io的未解决问题
- [#5113](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5113) 获取SCDF PRO的OSM许可证
- [#5108](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5108) 支持TAS 3.0
- [#5083](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5083) 传达扩展Dataflow/Skipper类路径的最佳实践
- [#4946](https://github.com/spring-cloud/spring-cloud-dataflow/issues/4946) 重新审视shell变更
- [#4944](https://github.com/spring-cloud/spring-cloud-dataflow/issues/4944) Apple M1使用的Arm64 Docker镜像
- [#4830](https://github.com/spring-cloud/spring-cloud-dataflow/issues/4830) 在其他Kubernetes集群上启动任务
- [#4807](https://github.com/spring-cloud/spring-cloud-dataflow/issues/4807) 确保参考文档最新且有效
- [#4792](https://github.com/spring-cloud/spring-cloud-dataflow/issues/4792) 更新测试计划和文档中的K8s兼容性
- [#4780](https://github.com/spring-cloud/spring-cloud-dataflow/issues/4780) 在Docker-compose安装文档中添加环境变量和SSL的信息
- [#4779](https://github.com/spring-cloud/spring-cloud-dataflow/issues/4779) 使用skipper-deployment.yaml与MariaDB的问题
```