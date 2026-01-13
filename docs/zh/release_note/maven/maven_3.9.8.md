# maven 3.9.8

# [发布说明 - Maven - 版本 3.9.8](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12316922&version=12354748)

## Bug 修复

- [MNG-7758](https://issues.apache.org/jira/browse/MNG-7758) - 当涉及多个仓库时，o.e.aether.resolution.ArtifactResolutionException 被错误地检查
- [MNG-8066](https://issues.apache.org/jira/browse/MNG-8066) - Maven 在自引用异常时挂起
- [MNG-8116](https://issues.apache.org/jira/browse/MNG-8116) - 插件配置在方法重载的情况下可能随机失败，因为它没有考虑实现属性
- [MNG-8131](https://issues.apache.org/jira/browse/MNG-8131) - 依赖 pom 中的属性替换不再有效
- [MNG-8135](https://issues.apache.org/jira/browse/MNG-8135) - 基于操作系统属性的配置文件激活不再区分大小写
- [MNG-8142](https://issues.apache.org/jira/browse/MNG-8142) - 如果 JDK 配置文件激活器因任何原因获得“无效”的 JDK 版本，它会卡住但不会说明原因
- [MNG-8147](https://issues.apache.org/jira/browse/MNG-8147) - 配置文件插值在存在重复 ID 的情况下中断其评估

## 改进

- [MNG-7902](https://issues.apache.org/jira/browse/MNG-7902) - 在验证报告中排序插件
- [MNG-8140](https://issues.apache.org/jira/browse/MNG-8140) - 当模型被丢弃（由模型构建器）时，显示原因
- [MNG-8141](https://issues.apache.org/jira/browse/MNG-8141) - 模型构建器应报告是否不确定“完全正确”的结果
- [MNG-8150](https://issues.apache.org/jira/browse/MNG-8150) - 使 SimplexTransferListener 处理缺失的源/目标文件

## 任务

- [MNG-8146](https://issues.apache.org/jira/browse/MNG-8146) - 放弃使用 commons-lang

## 依赖升级

- [MNG-8136](https://issues.apache.org/jira/browse/MNG-8136) - 更新到 Eclipse Sisu 0.9.0.M3
- [MNG-8143](https://issues.apache.org/jira/browse/MNG-8143) - 更新到 commons-cli 1.8.0
- [MNG-8144](https://issues.apache.org/jira/browse/MNG-8144) - 更新到 Guava 32.2.1-jre
- [MNG-8154](https://issues.apache.org/jira/browse/MNG-8154) - 升级默认插件绑定

---

## 变更内容

- 使用 Maven Wrapper 构建 [#1553](https://github.com/apache/maven/pull/1553)
- [3.9.x] [MNG-8136](https://issues.apache.org/jira/browse/MNG-8136) 更新 Eclipse Sisu 到 0.9.0.M3 [#1547](https://github.com/apache/maven/pull/1547)
- [MNG-8135](https://issues.apache.org/jira/browse/MNG-8135) 基于操作系统属性的配置文件激活不再区分大小写 [#1561](https://github.com/apache/maven/pull/1561)
- [3.9.x] 依赖更新 [#1560](https://github.com/apache/maven/pull/1560)
- [MNG-7902](https://issues.apache.org/jira/browse/MNG-7902) 在验证报告中排序插件 [#1510](https://github.com/apache/maven/pull/1510) [#1562](https://github.com/apache/maven/pull/1562)
- [MNG-8066](https://issues.apache.org/jira/browse/MNG-8066) 默认异常处理程序不处理递归 [#1558](https://github.com/apache/maven/pull/1558)
- [MNG-8142](https://issues.apache.org/jira/browse/MNG-8142) 隐藏的 bug：JDK 配置文件激活器抛出 NumberFormatEx [#1557](https://github.com/apache/maven/pull/1557)
- [MNG-8146](https://issues.apache.org/jira/browse/MNG-8146) 放弃 commons-lang [#1564](https://github.com/apache/maven/pull/1564)
- [MNG-8140](https://issues.apache.org/jira/browse/MNG-8140) 始终说明模型为何被丢弃为“无效” [#1555](https://github.com/apache/maven/pull/1555)
- [MNG-8141](https://issues.apache.org/jira/browse/MNG-8141) 模型构建器应报告构建过程中发现的问题 [#1556](https://github.com/apache/maven/pull/1556)
- [MNG-8141](https://issues.apache.org/jira/browse/MNG-8141) [MNG-8147](https://issues.apache.org/jira/browse/MNG-8147) 恢复配置文件 ID 不变性，但在存在重复 ID 时发出警告 [#1568](https://github.com/apache/maven/pull/1568)
- [MNG-8141](https://issues.apache.org/jira/browse/MNG-8141) 善后和整理 [#1572](https://github.com/apache/maven/pull/1572)
- [MNG-8150](https://issues.apache.org/jira/browse/MNG-8150) 为 Maven 3.9.x 回移 TransferListener 改进 [#1576](https://github.com/apache/maven/pull/1576)
- [MNG-7758](https://issues.apache.org/jira/browse/MNG-7758) 报告所有仓库的依赖问题 [#1584](https://github.com/apache/maven/pull/1584)
- [MNG-8154](https://issues.apache.org/jira/browse/MNG-8154) 升级默认插件绑定 [#1586](https://github.com/apache/maven/pull/1586)

**完整变更日志**: [maven-3.9.7...maven-3.9.8](https://github.com/apache/maven/compare/maven-3.9.7...maven-3.9.8)
```