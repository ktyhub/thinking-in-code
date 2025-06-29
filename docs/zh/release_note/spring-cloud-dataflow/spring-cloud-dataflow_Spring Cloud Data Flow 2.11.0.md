# spring-cloud-dataflow Spring Cloud Data Flow 2.11.0
```markdown
# 值得注意

## Spring Boot 3 应用

- 添加对基于 Spring Boot 3.x 的流应用的支持。
- 添加对基于 Spring Cloud Task 3.x 的任务应用的支持。
- 添加对基于 Spring Batch 5.x 的批处理应用的支持。

更多信息可以在 [Boot 3 附录](https://docs.spring.io/spring-cloud-dataflow/docs/2.11.0/reference/htmlsingle/#appendix-boot3) 中找到。

## 库更新

- Spring Boot 2.7.15
- Spring Cloud 2021.0.8

## Kubernetes 更新

- 长期期待的 Kubernetes cronjobs 从 batch/v1beta 更新到 batch/v1，允许用户运行 Kubernetes >= 1.25.0。

# 依赖项目和兼容性

| 组件                          | 版本     |
|-------------------------------|----------|
| Spring Cloud Dataflow Build   | `2.11.0` |
| Spring Cloud Dataflow Common  | `2.11.0` |
| Spring Cloud Deployer         | `2.9.0`  |
| Spring Cloud Deployer Local   | `2.9.0`  |
| Spring Cloud Deployer CF      | `2.9.0`  |
| Spring Cloud Deployer K8S     | `2.9.0`  |
| Spring Cloud Common Security Config | `2.11.0` |
| Spring Cloud Skipper          | `2.11.0` |
| Spring Cloud Dataflow UI      | `3.4.0`  |
| Spring Cloud Dataflow         | `2.11.0` |

# 问题

- [spring-cloud/spring-cloud-deployer#399](https://github.com/spring-cloud/spring-cloud-deployer/issues/399) 同时启动任务时 Kubernetes pod ids 重复
- [spring-cloud/spring-cloud-dataflow-ui#1947](https://github.com/spring-cloud/spring-cloud-dataflow-ui/issues/1947) 切换 boot版本时应用注册详情面板未更新
- [spring-cloud/spring-cloud-dataflow-ui#1946](https://github.com/spring-cloud/spring-cloud-dataflow-ui/issues/1946) Spring Boot 3 / Batch 5：作业执行为空，尽管在数据库中显示
- [#5467](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5467) 默认版本总是用于选择表前缀
- [#5459](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5459) 作为 boot2 应用配置的任务无法在 `SCDF 2.11.0 RC1` 中执行
- [#5456](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5456) 错误：列 "AUDIT_DATA CHARACTER VARYING(4000)" 的值太长
- [#5452](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5452) 审计仪表板中仍显示敏感数据
- [#5450](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5450) 作为用户，我可以轻松知道这个代码库不再活动，现在位于 mono repo 中
- [#5446](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5446) 添加测试到 spring-cloud-dataflow-aggregate-task 模块
- [#5443](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5443) [文档] 参考指南中缺少 task 3.x 坐标
- [#5442](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5442) 添加 num days 选项到任务清理
- [#5441](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5441) SCDF 2.11.0-RC1 组合任务运行程序文档
- [#5439](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5439) LOB-Elements 迁移到 PostgreSQLTextToOID 后损坏
```