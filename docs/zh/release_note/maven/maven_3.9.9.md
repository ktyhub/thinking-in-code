# maven 3.9.9

# [发布说明 - Maven - 版本 3.9.9](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12316922&version=12354823)

## Bug 修复

- [MNG-8159](https://issues.apache.org/jira/browse/MNG-8159) - 修复在使用 -f / --file 时搜索 topDirectory 的问题
- [MNG-8165](https://issues.apache.org/jira/browse/MNG-8165) - 当当前目录为根目录时，Maven 无法找到 -f 的扩展
- [MNG-8177](https://issues.apache.org/jira/browse/MNG-8177) - 警告 "'dependencyManagement.dependencies.dependency.systemPath' 指向不存在的文件 C:\Temp\jdk-11.0.23\..\lib\tools.jar"
- [MNG-8178](https://issues.apache.org/jira/browse/MNG-8178) - 基于操作系统属性的配置文件激活在 "mvn site" 中失效
- [MNG-8180](https://issues.apache.org/jira/browse/MNG-8180) - 解析器会盲目地假设它正在部署一个插件，只要 JAR 中存在 META-INF/maven/plugins.xml
- [MNG-8182](https://issues.apache.org/jira/browse/MNG-8182) - 某些工件缺失或不匹配的受信校验和未正确报告
- [MNG-8188](https://issues.apache.org/jira/browse/MNG-8188) - [回归] 属性在配置文件插件管理中未解析

## 任务

- [MNG-8206](https://issues.apache.org/jira/browse/MNG-8206) - 移除 Maven 2.1 (v 2.0) 兼容性代码

## 依赖升级

- [MNG-8175](https://issues.apache.org/jira/browse/MNG-8175) - 升级解析器到 1.9.21
- [MNG-8179](https://issues.apache.org/jira/browse/MNG-8179) - 升级 Parent 到 43
- [MNG-8193](https://issues.apache.org/jira/browse/MNG-8193) - 升级解析器到 1.9.22
- [MNG-8198](https://issues.apache.org/jira/browse/MNG-8198) - (构建) Animal Sniffer 1.24
- [MNG-8199](https://issues.apache.org/jira/browse/MNG-8199) - Hamcrest 3.0

## 变更内容

- [MNG-8159](https://issues.apache.org/jira/browse/MNG-8159) 修复在使用 -f / --file 时搜索 topDirectory 的问题
- [MNG-7194](https://issues.apache.org/jira/browse/MNG-7194) 测试缺失的属性评估
- [3.9.x] [MNG-8175](https://issues.apache.org/jira/browse/MNG-8175) 更新解析器到 1.9.21
- [MNG-8178](https://issues.apache.org/jira/browse/MNG-8178) 在缺失的配置文件激活上下文属性时回退到系统属性
- [MNG-8179](https://issues.apache.org/jira/browse/MNG-8179) 升级 Parent 到 43
- [MNG-8180](https://issues.apache.org/jira/browse/MNG-8180) 如果发现流氓 Maven 插件元数据则安装/部署失败
- [3.9.x][MNG-8193](https://issues.apache.org/jira/browse/MNG-8193) 更新解析器到 1.9.22
- [MNG-8199](https://issues.apache.org/jira/browse/MNG-8199) Hamcrest 3.0
- [MNG-8182](https://issues.apache.org/jira/browse/MNG-8182) 解决基于收集异常创建的错误
- [MNG-8180](https://issues.apache.org/jira/browse/MNG-8180) 处理由于不存在的标签引起的 NPE
- [MNG-8180](https://issues.apache.org/jira/browse/MNG-8180) 从构建失败中撤出
- [MNG-8206](https://issues.apache.org/jira/browse/MNG-8206) 从 maven-compat 中移除错误的 plugin.xml
- [MNG-8177](https://issues.apache.org/jira/browse/MNG-8177) 为模型警告添加上下文信息
- [MNG-8188](https://issues.apache.org/jira/browse/MNG-8188) 配置文件属性未插值
- [MNG-8165](https://issues.apache.org/jira/browse/MNG-8165) 使 mvn.sh 脚本与 mvn.cmd 对齐
- [MNG-8165](https://issues.apache.org/jira/browse/MNG-8165) 消除潜入的 bashism

## 新贡献者

- [gzm55](https://github.com/gzm55) 在 [#1589](https://github.com/apache/maven/pull/1589) 中做出了他们的首次贡献
- [kohlschuetter](https://github.com/kohlschuetter) 在 [#1603](https://github.com/apache/maven/pull/1603) 中做出了他们的首次贡献

**完整变更日志**: [maven-3.9.8...maven-3.9.9](https://github.com/apache/maven/compare/maven-3.9.8...maven-3.9.9)
```