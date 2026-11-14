---
title: "incubator-seata v2.3.0"
project: "incubator-seata"
repo: "apache/seata"
tag: "v2.3.0"
published: "2025-03-03"
type: "minor"
lang: "zh"
summary: "Apache Seata（孵化中）2.3.0 发布。"
---

# incubator-seata v2.3.0

Apache Seata（孵化中）2.3.0 发布。

Apache Seata(incubating)是一个易于使用、高性能、开源的分布式事务解决方案。

版本更新如下：

### 特点：

- [[#6904](https://github.com/apache/incubator-seata/pull/6904)] 添加 fastjson2 串行器支持
- [[#6876](https://github.com/apache/incubator-seata/pull/6876)] 支持kingbase
- [[#6881](https://github.com/apache/incubator-seata/pull/6881)] 支持 grpc
- [[#6864](https://github.com/apache/incubator-seata/pull/6864)]支持神通数据库
- [[#6974](https://github.com/apache/incubator-seata/pull/6974)] 支持 fastjson2 撤消日志解析器
- [[#6992](https://github.com/apache/incubator-seata/pull/6992)] 支持 grpc 串行器
- [[#6973](https://github.com/apache/incubator-seata/pull/6973)] 支持 saga 注释
- [[#6926](https://github.com/apache/incubator-seata/pull/6926)] 支持 raft 节点的 ssl 通信

### 错误修复：

- [[#6899](https://github.com/apache/incubator-seata/pull/6899)] 修复打包后 file.conf 读取失败的问题
- [[#6890](https://github.com/apache/incubator-seata/pull/6890)] 将 DesignerJson 修复为 standardJson：subStateMachine
  无法识别补偿状态
- [[#6907](https://github.com/apache/incubator-seata/pull/6907)]修复Codecov不生成报告的问题
- [[#6923](https://github.com/apache/incubator-seata/pull/6923)] 通过刷新令牌增强 401 错误处理
- [[#6925](https://github.com/apache/incubator-seata/pull/6925)] 修复 Raft 模型中跟随者崩溃可能导致的问题
  继续使用过期的令牌
- [[#6932](https://github.com/apache/incubator-seata/pull/6932)]启用本地事务时，锁争用
  文件&筏模式失败不退出，导致延迟锁
- [[#6940](https://github.com/apache/incubator-seata/pull/6940)] 修复 NacosRegistry 查找行为
  transactionServiceGroup 为空导致 NPE 错误
- [[#6943](https://github.com/apache/incubator-seata/pull/6943)] 修复了 `convertBranchSession` 的转换错误
  并发环境。
- [[#6948](https://github.com/apache/incubator-seata/pull/6948)] 修复 ARM64 平台上的 CI 构建问题
- [[#6947](https://github.com/apache/incubator-seata/pull/6947)] 修复 nacos 注册表查找地址时的 npe
- [[#6984](https://github.com/apache/incubator-seata/pull/6984)] 支持在 openjdk23 上构建 docker 映像
- [[#6994](https://github.com/apache/incubator-seata/pull/6994)] 修复构建 undoLog 异常的问题
  更新连接不更新数据
- [[#7005](https://github.com/apache/incubator-seata/pull/7005)]修复两阶段并发导致的Raft NPE问题
- [[#7010](https://github.com/apache/incubator-seata/pull/7010)] 修复了 DM8 中“context”为关键字时出现的错误
  删除撤消日志
- [[#7022](https://github.com/apache/incubator-seata/pull/7022)] 修复 `store.mode` 属性
  在 `application.raft.example.yml`
- [[#7025](https://github.com/apache/incubator-seata/pull/7025)] 修复 vGroupMappingManager 未初始化
- [[#7044](https://github.com/apache/incubator-seata/pull/7044)] 修复关闭后 tableMeta 刷新问题
- [[#7117](https://github.com/apache/incubator-seata/pull/7117)] 修复前缀：seata.server.raft.ssl 不应为空
- [[#7127](https://github.com/apache/incubator-seata/pull/7127)] 修复branchType服务器解码错误


### 优化：

- [[#6826](https://github.com/apache/incubator-seata/pull/6826)]删除XA的分支注册操作
  只读事务
- [[#6874](https://github.com/apache/incubator-seata/pull/6874)]修改版本为2.3.0-SNAPSHOT
- [[#6892](https://github.com/apache/incubator-seata/pull/6892)] 升级控制台模块中的 npmjs 版本
- [[#6883](https://github.com/apache/incubator-seata/pull/6874)] 删除只写对象
- [[#6892](https://github.com/apache/incubator-seata/pull/6892)]升级npmjs版本
- [[#6889](https://github.com/apache/incubator-seata/pull/6889)] 纠正单词拼写错误
- [[#6898](https://github.com/apache/incubator-seata/pull/6898)] 升级 saga 模块中的 npmjs 版本
- [[#6879](https://github.com/apache/incubator-seata/pull/6879)] 修复日志参数不匹配问题
- [[#6902](https://github.com/apache/incubator-seata/pull/6900)] 优化自述文件
- [[#6807](https://github.com/apache/incubator-seata/pull/6807)] 拆分 MergedWarpMessage 增强了服务器
  并行处理能力
- [[#6905](https://github.com/apache/incubator-seata/pull/6905)] 在构建时删除不兼容的许可证
- [[#6906](https://github.com/apache/incubator-seata/pull/6906)] h2 依赖项增加了测试范围
- [[#6911](https://github.com/apache/incubator-seata/pull/6911)] 修复项目中的一些拼写错误
- [[#6918](https://github.com/apache/incubator-seata/pull/6918)] 使用 eclipse-temurin 的 openjdk 映像作为基础
  图像
- [[#6938](https://github.com/apache/incubator-seata/pull/6938)] 更新 README.md 中的在线聊天信息
- [[#6950](https://github.com/apache/incubator-seata/pull/6950)] 删除 JVM 参数 app.id
- [[#6959](https://github.com/apache/incubator-seata/pull/6959)] 更新了命名和描述
  `seata-http-jakarta`模块
- [[#6991](https://github.com/apache/incubator-seata/pull/6991)] gRPC 序列化默认为 Protobuf
- [[#6993](https://github.com/apache/incubator-seata/pull/6993)] 优化交易指标
- [[#6995](https://github.com/apache/incubator-seata/pull/6995)] 升级过时的 npmjs 依赖项
- [[#6996](https://github.com/apache/incubator-seata/pull/6996)]优化AT事务模式下的锁释放逻辑
- [[#7023](https://github.com/apache/incubator-seata/pull/7023)] 当所有服务器不可用时，优化快速失败
- [[#7027](https://github.com/apache/incubator-seata/pull/7027)] raft 模式保持重新加载逻辑与
  文件
- [[#6891](https://github.com/apache/incubator-seata/pull/6891)] 添加 StateType 枚举
- [[#7040](https://github.com/apache/incubator-seata/pull/7040)]优化ConfigurationFactory中的打印信息
- [[#7046](https://github.com/apache/incubator-seata/pull/7046)] 删除 spring-webmvc 的依赖冲突
- [[#7043](https://github.com/apache/incubator-seata/pull/7043)] 如果未找到 sendResult/msg 则完成回滚
- [[#7051](https://github.com/apache/incubator-seata/pull/7051)] 添加命名服务器 jib
- [[#7054](https://github.com/apache/incubator-seata/pull/7054)] 在文件模式下无法获取锁定时的输出
  持有者的xid
- [[#7154](https://github.com/apache/incubator-seata/pull/7154)] 删除未使用的依赖项
- [[#7153](https://github.com/apache/incubator-seata/pull/7153)] 将 tomcat-embed 升级到 9.0.98
- [[#7152](https://github.com/apache/incubator-seata/pull/7152)] 删除 org.eclipse.jetty 依赖项
- [[#7151](https://github.com/apache/incubator-seata/pull/7151)] 将 xstream 升级到 1.4.21

### 重构：

- [[#7017](https://github.com/apache/incubator-seata/pull/7017)] 删除对 Seata-server 模块的依赖
- [[#7155](https://github.com/apache/incubator-seata/pull/7155)]重构不符合许可要求的代码

###测试：

- [[#6869](https://github.com/apache/incubator-seata/pull/6869)] 添加 `seata-core` 模块的单元测试
- [[#6927](https://github.com/apache/incubator-seata/pull/6927)] 添加 `seata-rocketmq` 模块的单元测试
- [[#7018](https://github.com/apache/incubator-seata/pull/7018)] 添加 `seata-tm` 模块的单元测试
- [[#7030](https://github.com/apache/incubator-seata/pull/7030)] 为 `seata-common` 模块添加单元测试

感谢这些贡献者提交的代码。请报告无意的遗漏。

<!-- 请确保您的 Github ID 在下面的列表中 -->

- [slievrly](https://github.com/slievrly)
- [GoodBoyCoder](https://github.com/GoodBoyCoder)
- [时髦的眼睛](https://github.com/funky-eyes)
- [dk2k](https://github.com/dk2k)
- [毛毛和蜗牛](https://github.com/MaoMaoandSnail)
- [yougecn](https://github.com/yougecn)
- [arrrnold17](https://github.com/arrrnold17)
- [xjgod](https://github.com/xjlgod)
- [请给我可乐](https://github.com/PleaseGiveMeTheCoke)
- [dsomehan](https://github.com/dsomehan)
- [psxjoy](https://github.com/psxjoy)
- [幸福的事](https://github.com/xingfudeshi)
- [o-jimin](https://github.com/o-jimin)
- [lixingjia77](https://github.com/lixingjia77)
- [哇](https://github.com/whaon)
- [YvCeung](https://github.com/YvCeung)
- [jsbxyyx](https://github.com/jsbxyyx)
- [lightClouds917](https://github.com/lightClouds917)
- [木洛青色](https://github.com/Muluo-cyan)
- [一夏](https://github.com/wt-better)
- [中国JeckXu](https://github.com/ChinaJeckXu)

此外，我们还收到来自社区的许多有价值的问题、疑问和建议。谢谢大家。

---

> 📦 仓库：[apache/seata](https://github.com/apache/seata) · 🏷️ 版本：`v2.3.0` · 📅 发布：2025-03-03 · [查看英文原版 Release](https://github.com/apache/incubator-seata/releases/tag/v2.3.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
