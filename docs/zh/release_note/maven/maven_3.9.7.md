# maven 3.9.7

# [发布说明 - Maven - 版本 3.9.7](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12316922&version=12353964)

## Bug 修复

- [MNG-8106](https://issues.apache.org/jira/browse/MNG-8106) - 如果仓库目录角色重叠，Maven 元数据损坏
- [MNG-8121](https://issues.apache.org/jira/browse/MNG-8121) - 在 org.apache.maven.artifact.repository.metadata.Metadata.merge (Metadata.java:293) 处出现 NullPointerException

## 新特性

- [MNG-5726](https://issues.apache.org/jira/browse/MNG-5726) - 更新操作系统激活以允许操作系统版本中的通配符
- [MNG-8030](https://issues.apache.org/jira/browse/MNG-8030) - 回移：添加忽略依赖仓库的功能：mvn -itr

## 改进

- [MNG-8019](https://issues.apache.org/jira/browse/MNG-8019) - 简化 Super POM 中 Maven Central 的插件仓库/仓库的更新策略
- [MNG-8029](https://issues.apache.org/jira/browse/MNG-8029) - 改进镜像设置的文档
- [MNG-8031](https://issues.apache.org/jira/browse/MNG-8031) - 回移：使与 Resolver 一起使用的 Maven 传输监听器更友好于并发
- [MNG-8081](https://issues.apache.org/jira/browse/MNG-8081) - 默认配置激活应考虑可用的系统和用户属性
- [MNG-8085](https://issues.apache.org/jira/browse/MNG-8085) - 从 png+imagemap 切换到 svg
- [MNG-8117](https://issues.apache.org/jira/browse/MNG-8117) - 改进前提条件评估和插件版本选择日志记录

## 任务

- [MNG-7309](https://issues.apache.org/jira/browse/MNG-7309) - 移除冗余的 MojoDescriptor 参数映射
- [MNG-8011](https://issues.apache.org/jira/browse/MNG-8011) - 最小化并使 README.txt 通用
- [MNG-8055](https://issues.apache.org/jira/browse/MNG-8055) - 调查部署时构建号差异的可能解决方案

## 依赖升级

- [MNG-8094](https://issues.apache.org/jira/browse/MNG-8094) - Resolver 1.9.19
- [MNG-8100](https://issues.apache.org/jira/browse/MNG-8100) - 升级默认插件绑定
- [MNG-8101](https://issues.apache.org/jira/browse/MNG-8101) - 升级 Parent 到 42
- [MNG-8109](https://issues.apache.org/jira/browse/MNG-8109) - Resolver 1.9.20
- [MNG-8115](https://issues.apache.org/jira/browse/MNG-8115) - 升级最小依赖集
- [MNG-8125](https://issues.apache.org/jira/browse/MNG-8125) - (构建) 将 buildhelper-maven-plugin 升级到 3.6.0（之前是 3.4.0）
- [MNG-8126](https://issues.apache.org/jira/browse/MNG-8126) - 将 logback classic 升级到 1.2.13（之前是 1.2.12）
- [MNG-8127](https://issues.apache.org/jira/browse/MNG-8127) - 将 guava 升级到 33.2.0-jre

---

## 变更内容

- [MNG-6776](https://issues.apache.org/jira/browse/MNG-6776) MojoDescriptor 参数列表不一致 [#584](https://github.com/apache/maven/pull/584) [#1361](https://github.com/apache/maven/pull/1361)
- [MNG-8055](https://issues.apache.org/jira/browse/MNG-8055) 强制构建号 [#1415](https://github.com/apache/maven/pull/1415)
- [MNG-8029](https://issues.apache.org/jira/browse/MNG-8029) 改进镜像设置文档 [#1395](https://github.com/apache/maven/pull/1395)
- [MNG-8019](https://issues.apache.org/jira/browse/MNG-8019) 简化中央更新策略 [#1381](https://github.com/apache/maven/pull/1381)
- [MNG-5726](https://issues.apache.org/jira/browse/MNG-5726) (Maven 3.9 的回移) [#1431](https://github.com/apache/maven/pull/1431)
- [MNG-4840](https://issues.apache.org/jira/browse/MNG-4840) 在插件描述符中记录 requiredMavenVersion [#1444](https://github.com/apache/maven/pull/1444)
- [MNG-8085](https://issues.apache.org/jira/browse/MNG-8085) 将 png+imagemap 切换到 svg [#1452](https://github.com/apache/maven/pull/1452)
- [MNG-4840](https://issues.apache.org/jira/browse/MNG-4840) 修复 requiredMavenVersion 描述 [#1444](https://github.com/apache/maven/pull/1444) [#1456](https://github.com/apache/maven/pull/1456)
- [MNG-6399](https://issues.apache.org/jira/browse/MNG-6399) 将 JDK 最低版本提升到 JDK 8 [#1382](https://github.com/apache/maven/pull/1382)
- 更新 GitHub actions 到 v4 [#1472](https://github.com/apache/maven/pull/1472)
- [MNG-8101](https://issues.apache.org/jira/browse/MNG-8101) 升级 Parent 到 42 [#1473](https://github.com/apache/maven/pull/1473)
- [MNG-8100](https://issues.apache.org/jira/browse/MNG-8100) 升级默认插件绑定 [#1474](https://github.com/apache/maven/pull/1474)
- [MNG-8031](https://issues.apache.org/jira/browse/MNG-8031) 回移并发友好的传输监听器 [#1471](https://github.com/apache/maven/pull/1471)
- [MNG-8030](https://issues.apache.org/jira/browse/MNG-8030) 回移 itr：忽略传递依赖仓库 [#1469](https://github.com/apache/maven/pull/1469)
- [MNG-8011](https://issues.apache.org/jira/browse/MNG-8011) 简化 README [#1470](https://github.com/apache/maven/pull/1470)
- [MNG-8094](https://issues.apache.org/jira/browse/MNG-8094) Resolver 1.9.19 [#1468](https://github.com/apache/maven/pull/1468)
- [3.9.x][MNG-8106](https://issues.apache.org/jira/browse/MNG-8106) 修复元数据合并 [#1480](https://github.com/apache/maven/pull/1480)
- [3.9.x][MNG-8109](https://issues.apache.org/jira/browse/MNG-8109) Resolver 1.9.20 [#1490](https://github.com/apache/maven/pull/1490)
- [MNG-8081](https://issues.apache.org/jira/browse/MNG-8081) 在默认配置选择期间插值可用属性 (Maven 3.9.x) [#1447](https://github.com/apache/maven/pull/1447)
- [3.9.x][MNG-8117](https://issues.apache.org/jira/browse/MNG-8117) 回移到 Maven 3.9.x [#1505](https://github.com/apache/maven/pull/1505)
- [MNG-8115](https://issues.apache.org/jira/browse/MNG-8115) 升级依赖项 [#1496](https://github.com/apache/maven/pull/1496)
- [MNG-8121](https://issues.apache.org/jira/browse/MNG-8121) 修复元数据合并中的 NPE [#1508](https://github.com/apache/maven/pull/1508)
- [MNG-8126](https://issues.apache.org/jira/browse/MNG-8126) 轻微更新 [#1533](https://github.com/apache/maven/pull/