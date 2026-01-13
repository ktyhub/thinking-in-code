# spring-cloud-dataflow Spring Cloud Data Flow 2.11.3

# 依赖项目和兼容性

| 组件                     | 版本   |
|--------------------------|--------|
| Spring Cloud Deployer    | 2.9.3  |
| Spring Cloud Skipper     | 2.11.3 |
| Spring Cloud Dataflow UI | 3.4.3  |
| Spring Cloud Dataflow    | 2.11.3 |

# 问题

- [spring-cloud/spring-cloud-deployer#444](https://github.com/spring-cloud/spring-cloud-deployer/issues/444) 更新 Kubernetes 支持矩阵到 2.9.x
- [spring-cloud/spring-cloud-dataflow-ui#1996](https://github.com/spring-cloud/spring-cloud-dataflow-ui/issues/1996) 更新任务执行列表以使用 tasks/thinexecutions
- [#5794](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5794) 修复代码扫描警报 - Spring-Kafka 在配置不当时存在 Java 反序列化漏洞
- [#5783](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5783) `--propertiesFile` 选项在 scdf shell 命令 `stream update` 中不可用
- [#5782](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5782) 修复轻量任务执行页面查询 CTR 状态的问题
- [#5780](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5780) 影响 Spring Cloud Dataflow 依赖的漏洞
- [#5778](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5778) 发布 Skipper 2.11.x 参考文档
- [#5718](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5718) 无法获取大量任务执行记录的任务执行列表
- [#5695](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5695) 针对作业执行的性能改进（适用于 Oracle，其他数据库可能有所不同）
- [#5643](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5643) 解决 json-path 漏洞 [CVE-2023-51074](https://github.com/advisories/GHSA-pfh2-hfmq-phg5)
- [#5640](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5640) 重新启用 SimpleJobServicePostgresTests
```
