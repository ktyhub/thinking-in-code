# spring-cloud-dataflow Spring Cloud Data Flow 2.11.2
```markdown
# 相关项目及兼容性

| 组件                                    | 版本         |
|-----------------------------------------|--------------|
| Spring Cloud Dataflow Build             | `2.11.2`     |
| Spring Cloud Dataflow Common            | `2.11.2`     |
| Spring Cloud Deployer                   | `2.9.2`      |
| Spring Cloud Deployer Local             | `2.9.2`      |
| Spring Cloud Deployer CF                | `2.9.2`      |
| Spring Cloud Deployer K8S               | `2.9.2`      |
| Spring Cloud Common Security Config     | `2.11.2`     |
| Spring Cloud Skipper                    | `2.11.2`     |
| Spring Cloud Dataflow UI                | `3.4.2`      |
| Spring Cloud Dataflow                   | `2.11.2`     |

# 问题

[#5593](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5593) 更新 logback 以处理 [CVE-2023-6378](https://github.com/advisories/GHSA-vmq6-5m68-f53m)

[spring-cloud/spring-cloud-deployer#407](https://github.com/spring-cloud/spring-cloud-deployer/issues/407) CF Deployer 需要使用 LogCacheClient 来检索日志

[spring-cloud/spring-cloud-dataflow-ui#1974](https://github.com/spring-cloud/spring-cloud-dataflow-ui/issues/1974) 创建任务计划时阻止版本属性

[spring-cloud/spring-cloud-dataflow-ui#1944](https://github.com/spring-cloud/spring-cloud-dataflow-ui/issues/1944) 任务执行日志无法水平滚动

[#5615](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5615) 无法按 Schema Target 对任务进行排序

[#5611](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5611) 更新到 Spring Cloud 2021.0.9

[#5609](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5609) 移除 JOB_CONFIGURATION_LOCATION 破坏了一些查询

[#5591](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5591) BOOT3 批处理 schema 在表格中有旧的列

[#5576](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5576) Mariadb Schema 需要将 BOOT3 序列表更改为序列

[#5568](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5568) 带有参数和属性的任务计划不工作

[#5564](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5564) 检查 Spring Boot 2.7.18 的依赖关系

[#5561](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5561) 更新 Spring Boot 2.7.18

[#5522](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5522) 更新到 Spring Boot 2.7.17

[#5557](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5557) Step Context 部分在 UI 上没有填充

[#5555](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5555) BOOT3_BATCH_JOB_EXECUTION 不应包含 JOB_CONFIGURATION_LOCATION

[#5551](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5551) Batch Remote Partitioning 不将 Boot3 信息传递给分区

[#5549](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5549) JdbcSearchableJobExecutionDao 中的 getJobExecutionsWithStepCountFilteredByTaskExecutionId 不支持任务前缀

[#5548](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5548) 无法配置 Harbor 作为容器注册表

[#5539](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5539) 作为开发者，我需要在我的 Mac ARM64 上本地运行 Oracle

[#5534](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5534) 使用 BOOT3 和 Oracle 重新启动任务失败

[#5533](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5533) 为 SimpleJobService 添加 Boot3 支持

[#5531](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5531) 无法浏览任务执行页

[#5524](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5524) Controller /jobs/thinexecutions 在有大量任务执行时非常慢，且在 Oracle DB 上无法导航

[#5520](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5520) 使用 Spring Boot 3/Spring Batch 5 停止批处理工作不正常

[#5518](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5518) 重新启动 Spring Boot 3/Spring Batch 5 批处理任务不正常

[#5507](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5507) 将提交信息添加到关于控制器

[#5496](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5496) spring.cloud.dataflow.task.platform.kubernetes.accounts.[platformid].initContainer 不再注入 initContainer

[#5484](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5484) 查询任务/实例时数据不一致

[#5464](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5464) 为启动多个版本的任务添加文档

[#5408](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5408) “清理所有任务/作业执行”期间出错

# 更新

[Kubernetes 部署脚本](https://github.com/spring-cloud/spring-cloud-dataflow/releases/download/v2.11.2/spring-cloud-dataflow-oss-install-2.11.2-rp1.zip) 已更新。
```