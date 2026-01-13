# spring-cloud-dataflow Spring Cloud Data Flow 2.10.2

# 重要变更

## 库更新
- Spring Boot 2.7.9
- Spring Cloud 2021.0.6

# 依赖项目及兼容性

| 组件 | 版本 |
| --- | --- |
| Spring Cloud Dataflow Build | 2.10.2 |
| Spring Cloud Dataflow Common | 2.10.2 |
| Spring Cloud Deployer | 2.8.2 |
| Spring Cloud Deployer Local | 2.8.2 |
| Spring Cloud Deployer CF | 2.8.2 |
| Spring Cloud Deployer K8S | 2.8.2 |
| Spring Cloud Common Security Config | 1.8.2 |
| Spring Cloud Skipper | 2.9.2 |
| Spring Cloud Dataflow UI | 3.3.2 |
| Spring Cloud Dataflow | 2.10.2 |

# 问题

[#5232](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5232) 将默认的 `repo.spring.io/snapshot` 改为 `repo.spring.io/libs-snapshot`  
[#5207](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5207) 移除了 `StepExecutionHistory.getReadCount` 上的无效弃用警告  
[#5246](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5246) 通过 [#5232](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5232) 修复
```