# maven 4.0.0-alpha-13
```markdown
# 发布说明 - Maven - 版本 4.0.0-alpha-13

## Bug 修复

- [MNG-8005](https://issues.apache.org/jira/browse/MNG-8005) - 在 Maven 4 中忽略了 IDE WorkspaceReader
- [MNG-8014](https://issues.apache.org/jira/browse/MNG-8014) - Maven 并发模型构建器死锁
- [MNG-8017](https://issues.apache.org/jira/browse/MNG-8017) - Maven 启动失败，错误信息为 "Cannot run program "infocmp": error=2, No such file or directory"
- [MNG-8021](https://issues.apache.org/jira/browse/MNG-8021) - 会话中的用户属性和系统属性应为不可变
- [MNG-8022](https://issues.apache.org/jira/browse/MNG-8022) - 'mvn -version' 导致 NullPointerException
- [MNG-8024](https://issues.apache.org/jira/browse/MNG-8024) - 尽管标记为可序列化，但 Maven 3 模型不可序列化
- [MNG-8039](https://issues.apache.org/jira/browse/MNG-8039) - DefaultProjectBuilder 不应更改给定的工件

## 新特性

- [MNG-5726](https://issues.apache.org/jira/browse/MNG-5726) - 更新操作系统激活以允许在操作系统版本中使用通配符
- [MNG-7954](https://issues.apache.org/jira/browse/MNG-7954) - 提供更清晰的 DI API
- [MNG-8006](https://issues.apache.org/jira/browse/MNG-8006) - 提供 SPI 以便扩展在会话创建时与用户属性交互

## 改进

- [MNG-7854](https://issues.apache.org/jira/browse/MNG-7854) - 非直接管理的导入和冲突的 depMgt 条目应发出警告
- [MNG-8012](https://issues.apache.org/jira/browse/MNG-8012) - 在同一反应堆内导入 BOM 时发出警告
- [MNG-8015](https://issues.apache.org/jira/browse/MNG-8015) - 控制每个依赖项可以放置的路径类型
- [MNG-8029](https://issues.apache.org/jira/browse/MNG-8029) - 改进 settings 中镜像的文档
- [MNG-8037](https://issues.apache.org/jira/browse/MNG-8037) - 将项目限制为正在构建的实体并使其不可变
- [MNG-8045](https://issues.apache.org/jira/browse/MNG-8045) - 使用 DependencyGraphDumper 代替自己的实现
- [MNG-8053](https://issues.apache.org/jira/browse/MNG-8053) - 在 POM 中按打包激活配置文件

## 任务

- [MNG-7976](https://issues.apache.org/jira/browse/MNG-7976) - 调查 [MNG-6127](https://issues.apache.org/jira/browse/MNG-6127) IT 不稳定性
- [MNG-8013](https://issues.apache.org/jira/browse/MNG-8013) - 集成测试过程日志可以输出 GitHub 工件
- [MNG-8016](https://issues.apache.org/jira/browse/MNG-8016) - 简化 ModelCache
- [MNG-8023](https://issues.apache.org/jira/browse/MNG-8023) - 项目工件的新方法
- [MNG-8026](https://issues.apache.org/jira/browse/MNG-8026) - Maven 应定义从头开始使用 Resolver 的范围
- [MNG-8043](https://issues.apache.org/jira/browse/MNG-8043) - 依赖属性应由 Resolver 消费者提供
- [MNG-8046](https://issues.apache.org/jira/browse/MNG-8046) - 将 GitHub Action 版本从 v3 升级到 v4
- [MNG-8054](https://issues.apache.org/jira/browse/MNG-8054) - 调查部署时构建号差异的可能解决方案
- [MNG-8059](https://issues.apache.org/jira/browse/MNG-8059) - 将 Resolver 从 java.io.File 移动到 NIO2 路径
- [MNG-8060](https://issues.apache.org/jira/browse/MNG-8060) - 使用 String#isEmpty 代替 length
- [MNG-8061](https://issues.apache.org/jira/browse/MNG-8061) - 将 Maven 运行时要求升级到 Java 17
- [MNG-8067](https://issues.apache.org/jira/browse/MNG-8067) - 参考最新的 extensions.xml 架构

## 依赖升级

- [MNG-8035](https://issues.apache.org/jira/browse/MNG-8035) - 将 Resolver 版本升级到 2.0.0-alpha-7
- [MNG-8036](https://issues.apache.org/jira/browse/MNG-8036) - 升级到 JLine 3.25.1
- [MNG-8057](https://issues.apache.org/jira/browse/MNG-8057) - 将 Modello 升级到 2.3.0

---

## 变更内容

- [MNG-8016](https://issues.apache.org/jira/browse/MNG-8016) 通过 [gnodet](https://github.com/gnodet) 简化 ModelCache 在 [#1377](https://github.com/apache/maven/pull/1377)
- [MNG-8014](https://issues.apache.org/jira/browse/MNG-8014) 通过 [gnodet](https://github.com/gnodet) 在 [#1376](https://github.com/apache/maven/pull/1376) 解决模型构建中的死锁问题
- 通过 [gnodet](https://github.com/gnodet) 简化图形在 [#1380](https://github.com/apache/maven/pull/1380)
- [MNG-8005](https://issues.apache.org/jira/browse/MNG-8005) 通过 [cstamas](https://github.com/cstamas) 修复工作区读取器丢失 bug 在 [#1385](https://github.com/apache/maven/pull/1385)
- [MNG-8006](https://issues.apache.org/jira/browse/MNG-8006) 通过 [cstamas](https://github.com/cstamas) 在 [#1384](https://github.com/apache/maven/pull/1384) 提供 SPI 以贡献有效属性和更多
- [MNG-8014](https://issues.apache.org/jira/browse/MNG-8014) 通过 [gnodet](https://github.com/gnodet) 修复多线程构建器在 [#1386](https://github.com/apache/maven/pull/1386)
- [MNG-8023](https://issues.apache.org/jira/browse/MNG-8023) 通过 [cstamas](https://github.com/cstamas) 在 [#1387](https://github.com/apache/maven/pull/1387) 项目上的新方法和 javadoc
- [MNG-8026](https://issues.apache.org/jira/browse/MNG-8026) 通过 [cstamas](https://github.com/cstamas) 在 [#1392](https://github.com/apache/maven/pull/1392) Maven 驱动范围
- [MNG-8035](https://issues.apache.org/jira/browse/MNG-8035) 通过 [cstamas](https://github.com/cstamas) 在 [#1394](https://github.com/apache/maven/pull/1394) 更新到 Resolver 2.0.0-alpha-7
- [MNG-8036](https://issues.apache.org/jira/browse/MNG-8036) [MNG-8017](https://issues.apache.org/jira/browse/MNG-8017) [MNG-8022](https://issues.apache.org/jira/browse/MNG-8022) 通过 [gnodet](https://github.com/gnodet) 在 [#1390](https://github.com/apache/maven/pull/1390) 升级 JLine 到 3.25.1
- [MNG-8037](https://issues.apache.org/jira/browse/MNG-8037) 通过 [gnodet](https://github.com/gnodet) 在 [#1389](https://github.com/apache/maven/pull/1389) 将项目限制为正在构建的实体并使其不可变
- [MNG-7854](https://issues.apache.org/jira/b