---
title: "incubator-seata v2.2.0"
project: "incubator-seata"
repo: "apache/seata"
tag: "v2.2.0"
published: "2024-09-20"
type: "minor"
lang: "zh"
---

# incubator-seata v2.2.0

Apache Seata（孵化中）2.2.0 发布。

Apache Seata(incubating)是一个易于使用、高性能、开源的分布式事务解决方案。

下载
https://seata.apache.org/download/seata-server

版本更新如下：

### 特点：
- [[#6536](https://github.com/apache/incubator-seata/pull/6536)] 支持命名服务器 client
- [[#6226](https://github.com/apache/incubator-seata/pull/6226)]多版本seata协议支持
- [[#6537](https://github.com/apache/incubator-seata/pull/6537)] 支持命名服务器
- [[#6538](https://github.com/apache/incubator-seata/pull/6538)] 在 Seata 服务器端集成命名服务器
- [[#6766](https://github.com/apache/incubator-seata/pull/6766)] 添加 TCC 三相挂钩

### 错误修复：
- [[#6592](https://github.com/apache/incubator-seata/pull/6592)] 修复 @Async 注释在 ClusterWatcherManager 中不起作用的问题
- [[#6624](https://github.com/apache/incubator-seata/pull/6624)] 修复阿里巴巴 Dubbo 转换错误
- [[#6627](https://github.com/apache/incubator-seata/pull/6627)]修复xaEnded未重置的问题
- [[#6626](https://github.com/apache/incubator-seata/pull/6626)] 修复 hsf ConsumerModel 转换错误
- [[#6816](https://github.com/apache/incubator-seata/pull/6816)]修复在非全局事务上下文中获取branchType时的NPE
- [[#6642](https://github.com/apache/incubator-seata/pull/6642)] codecov 令牌未找到
- [[#6661](https://github.com/apache/incubator-seata/pull/6661)] 修复 `tableMeta` 缓存计划刷新问题
- [[#6486](https://github.com/apache/incubator-seata/pull/6486)] 修复 mysql 撤消日志更新 sql 数据超过最大允许数据包
- 添加和删除实例时的[[#6668](https://github.com/apache/incubator-seata/pull/6668)]线程安全问题
- [[#6678](https://github.com/apache/incubator-seata/pull/6678)] 修复昨天由于表名大小写混合导致同一条记录有不同低调的问题
- [[#6697](https://github.com/apache/incubator-seata/pull/6697)] v0 ByteBuf 不应由超类解码
- [[#6707](https://github.com/apache/incubator-seata/pull/6707)] 修复 Oracle XA 事务中的只读分支提交错误
- [[#6711](https://github.com/apache/incubator-seata/pull/6711)] 修复 dameng 回滚信息解压缩失败的问题
- [[#6714](https://github.com/apache/incubator-seata/pull/6714)] 修复 dameng 删除撤消失败的问题
- [[#6511](https://github.com/apache/incubator-seata/pull/6511)]修复使用SQLServer时AT模式删除SQL回滚失败的问题
- [[#6701](https://github.com/apache/incubator-seata/pull/6728)] 修复 dm.jdbc.driver.DmdbTimestamp 支持序列化
- [[#6757](https://github.com/apache/incubator-seata/pull/6757)] 无法从命名服务器检索多个节点的错误
- [[#6769](https://github.com/apache/incubator-seata/pull/6769)] 修复 tcc 栅栏死锁
- [[#6778](https://github.com/apache/incubator-seata/pull/6778)] 修复命名服务器节点术语
- [[#6765](https://github.com/apache/incubator-seata/pull/6765)] 通过用系统类加载器替换自定义类加载器来修复 MySQL 驱动程序加载，以获得更好的兼容性和简化的过程
- [[#6781](https://github.com/apache/incubator-seata/pull/6781)] TC 偶尔无法从 NamingServer 下线的问题
- [[#6785](https://github.com/apache/incubator-seata/pull/6785)] 修复 prometheus 使用 Nacos 时无法返回 Seata 指标数据的问题
- [[#6797](https://github.com/apache/incubator-seata/pull/6797)] 当查询集群地址为空时回退到任何可用的集群地址
- [[#6800](https://github.com/apache/incubator-seata/pull/6800)] 使异常消息对所有数据库驱动程序通用
- [[#6759](https://github.com/apache/incubator-seata/pull/6759)]修复跨库表元数据主动刷新失败的错误
- [[#6812](https://github.com/apache/incubator-seata/pull/6812)] bug修复：更改组和节点离线状态未实时推送
- [[#6817](https://github.com/apache/incubator-seata/pull/6817)] 错误修复：修复命名服务器 changVgroup 失败
- [[#6820](https://github.com/apache/incubator-seata/pull/6820)] 修复 Docker 文件中的文件路径错误
- [[#6825](https://github.com/apache/incubator-seata/pull/6825)]修复Postgres中XA模式事务超时和无法回滚的问题
- [[#6833](https://github.com/apache/incubator-seata/pull/6833)] 插入全局锁时 SQLIntegrityConstraintViolationException 捕获不正确
- [[#6835](https://github.com/apache/incubator-seata/pull/6835)] 修复 HttpClientUtil 中 post 方法请求体缺失的问题
- [[#6845](https://github.com/apache/incubator-seata/pull/6845)] 修复 RocksDB 多次打开同一文件的问题
- [[#6840](https://github.com/apache/incubator-seata/pull/6840)]修复ProcessorYaml.java中反序列化不安全的问题
- [[#6843](https://github.com/apache/incubator-seata/pull/6843)] 修复从控制台发送 POST 请求时的 403 错误
- [[#6850](https://github.com/apache/incubator-seata/pull/6850)] raft 模式向后兼容版本 2.0
- [[#6855](https://github.com/apache/incubator-seata/pull/6855)] 缩减 Raft 集群后，元数据仍然包含已删除的节点
- [[#6859](https://github.com/apache/incubator-seata/pull/6859)] 删除 pom 中重复的依赖项


### 优化：
- [[#6499](https://github.com/apache/incubator-seata/pull/6499)] 拆分任务线程池以用于提交和回滚状态
- [[#6208](https://github.com/apache/incubator-seata/pull/6208)] 优化：按版本加载 SeataSerializer
- [[#6209](https://github.com/apache/incubator-seata/pull/6209)] 消除 RpcMessage 和编码器/解码器依赖性
- [[#6634](https://github.com/apache/incubator-seata/pull/6634)] 根据协议版本选择通道句柄
- [[#6523](https://github.com/apache/incubator-seata/pull/6523)]升级alibaba/druid版本至1.2.20
- [[#6566](https://github.com/apache/incubator-seata/pull/6566)] 添加对在GlobalTransactionScanner 中配置exposeProxy 的支持
- [[#6534](https://github.com/apache/incubator-seata/pull/6534)] 优化：发送异步响应
- [[#6640](https://github.com/apache/incubator-seata/pull/6640)] 修改 codecov 配置
- [[#6640](https://github.com/apache/incubator-seata/pull/6648)] 添加许可证头
- [[#6666](https://github.com/apache/incubator-seata/pull/6666)] 添加 ExceptionUtil 类以恢复错误消息
- [[#6654](https://github.com/apache/incubator-seata/pull/6654)] 添加 Namingserver 包模块
- [[#6667](https://github.com/apache/incubator-seata/pull/6667)] 优化 Namingserver 日志输出
- [[#6687](https://github.com/apache/incubator-seata/pull/6687)] 删除前端构建的静态代码
- [[#6700](https://github.com/apache/incubator-seata/pull/6700)] 删除 sdk 版本检查
- [[#6727](https://github.com/apache/incubator-seata/pull/6727)] 反序列化性能优化
- [[#6732](https://github.com/apache/incubator-seata/pull/6732)] 在 application.example.yml 和 application.raft.example.yml 上添加默认控制台和安全配置
- [[#6651](https://github.com/apache/incubator-seata/pull/6651)] 为原始文件添加许可证头
- [[#6653](https://github.com/apache/incubator-seata/pull/6653)] 优化多个许可证并删除许可证 URL
- [[#6655](https://github.com/apache/incubator-seata/pull/6655)]更新前端许可证
- [[#6652](https://github.com/apache/incubator-seata/pull/6673)] 为 spring 配置文件添加许可证头
- [[#6674](https://github.com/apache/incubator-seata/pull/6674)] 更新源许可证
- [[#6650](https://github.com/apache/incubator-seata/pull/6650)] 为 SPI 文件添加许可证头
- [[#6741](https://github.com/apache/incubator-seata/pull/6741)] 将 tomcat-embed-core 升级到 9.0.90
- [[#6742](https://github.com/apache/incubator-seata/pull/6742)] 在控制台中升级 npmjs 版本
- [[#6743](https://github.com/apache/incubator-seata/pull/6743)] 升级 saga 中的 npmjs 版本
- [[#6746](https://github.com/apache/incubator-seata/pull/6746)] 优化兼容依赖项
- [[#6745](https://github.com/apache/incubator-seata/pull/6745)]修复arm64和macos上的node-gyp构建错误
- [[#6749](https://github.com/apache/incubator-seata/pull/6749)] 优化 WebSecurityConfig csrf
- [[#6748](https://github.com/apache/incubator-seata/pull/6748)]优化ConstantHashLoadBalance算法
- [[#6747](https://github.com/apache/incubator-seata/pull/6747)] 优化 fastjson 反序列化
- [[#6755](https://github.com/apache/incubator-seata/pull/6755)] 优化命名服务器代码逻辑
- [[#6763](https://github.com/apache/incubator-seata/pull/6763)] 优化 NacosConfiguration 单例重载
- [[#6761](https://github.com/apache/incubator-seata/pull/6761)] 优化命名服务器代码以提高可读性
- [[#6768](https://github.com/apache/incubator-seata/pull/6768)] 报告 tcc 栅栏事务隔离级别
- [[#6770](https://github.com/apache/incubator-seata/pull/6770)]通过咖啡因映射自动删除命名服务器vgroup
- [[#6780](https://github.com/apache/incubator-seata/pull/6780)] 优化 `SerializerServiceLoader` 类中的反射操作
- [[#6784](https://github.com/apache/incubator-seata/pull/6784)] 将 axios 升级到 1.7.4
- [[#6787](https://github.com/apache/incubator-seata/pull/6787)] 将椭圆机升级到 6.5.7
- [[#6783](https://github.com/apache/incubator-seata/pull/6783)] 将服务器名称/v1 api 重命名为 vgroup/v1
- [[#6793](https://github.com/apache/incubator-seata/pull/6793)] 修复 npmjs 冲突
- [[#6793](https://github.com/apache/incubator-seata/pull/6795)] 优化服务器元的初始化逻辑
- [[#6794](https://github.com/apache/incubator-seata/pull/6794)]优化NacosMockTest UT案例
- [[#6806](https://github.com/apache/incubator-seata/pull/6806)]优化`tableMeta`缓存定时刷新问题
- [[#6808](https://github.com/apache/incubator-seata/pull/6808)] 将版本更改为 2.2.0-SNAPSHOT
- [[#6819](https://github.com/apache/incubator-seata/pull/6819)]合并namingserver和seata-server的打包过程
- [[#6827](https://github.com/apache/incubator-seata/pull/6827)] 重命名命名服务器注册表类型
- [[#6836](https://github.com/apache/incubator-seata/pull/6836)] 为 CI 进程添加独立的 nacos
- [[#6841](https://github.com/apache/incubator-seata/pull/6841)] 更新许可证和通知文件并标准化依赖版本
- [[#6823](https://github.com/apache/incubator-seata/pull/6823)] 修复拼写错误
- [[#6779](https://github.com/apache/incubator-seata/pull/6779)] 在配置模型中使用 curator 而不是 zkclient
- [[#6831](https://github.com/apache/incubator-seata/pull/6831)] 在注册表模型中使用 curator 而不是 zkclient
- [[#6852](https://github.com/apache/incubator-seata/pull/6852)] 优化 raft 元数据 api
- [[#6863](https://github.com/apache/incubator-seata/pull/6863)] 更新 NOTICE.md

### 重构：

### 安全：

###测试：
- [[#6533](https://github.com/apache/incubator-seata/pull/6533)] 增加集成-tx-api 模块单元测试覆盖率
- [[#6608](https://github.com/apache/incubator-seata/pull/6608)] 为 sql-parser-core 添加单元测试
- [[#6647](https://github.com/apache/incubator-seata/pull/6647)] 将 saga 模块的测试用例覆盖率提高到 70%
- [[#6695](https://github.com/apache/incubator-seata/pull/6695)]旧版本(< 0.7.1) client 多版本协议测试用例
- [[#6752](https://github.com/apache/incubator-seata/pull/6752)] 提高指标模块的测试用例覆盖率
- [[#6764](https://github.com/apache/incubator-seata/pull/6764)] 添加 Apollo 模拟测试用例
- [[#6750](https://github.com/apache/incubator-seata/pull/6750)]增加弹簧自动配置模块单元测试收敛性
- [[#6773](https://github.com/apache/incubator-seata/pull/6773)] 修复默认分支中 codecov 图标的错误代码覆盖率
- [[#6821](https://github.com/apache/incubator-seata/pull/6821)] 修复测试用例断言
- [[#6803](https://github.com/apache/incubator-seata/pull/6803)]优化：针对ARM64架构的编译和打包


感谢这些贡献者提交的代码。请报告无意的遗漏。

<!-- 请确保您的 Github ID 在下面的列表中 -->
- [slievrly](https://github.com/slievrly)
- [图文林](https://github.com/tuwenlin)
- [YeonCheolGit](https://github.com/YeonCheolGit)
- [流秋风](https://github.com/liuqiufeng)
- [神甘](https://github.com/God-Gan)
- [布休](https://github.com/Bughue)
- [时髦的眼睛](https://github.com/funky-eyes)
- [谭耀飞](https://github.com/tanyaofei)
- [特质](https://github.com/traitsisgiorgos)
- [网红洲](https://github.com/wanghongzhou)
- [ggbocoder](https://github.com/ggbocoder)
- [azatyamanaev](https://github.com/azatyamanaev)
- [xjgod](https://github.com/xjlgod)
- [幸福的使](https://github.com/xingfudeshi)
- [无文5](https://github.com/wuwen5)
- [jsbxyyx](https://github.com/jsbxyyx)
- [iAmClever](https://github.com/iAmClever)
- [GoodBoyCoder](https://github.com/GoodBoyCoder)
- [流秋风](https://github.com/liuqiufeng)
- [草格格](https://github.com/caohdgege)
- [TakeActionNow2019](https://github.com/TakeActionNow2019)
- [今岛麻吕](https://github.com/hmj776521114)
- [lyl2008dsg](https://github.com/lyl2008dsg)
- [lightClouds917](https://github.com/lightClouds917)
- [l81893521](https://github.com/l81893521)
- [雷文](https://github.com/laywin)
- [小香夜语0](https://github.com/xiaoxiangyeyu0)
- [腿加赛](https://github.com/LegGasai)
- [yangli-stu](https://github.com/yangli-stu)
- [和亮666s](https://github.com/heliang666s)


此外，我们还收到来自社区的许多有价值的问题、疑问和建议。谢谢大家。

---

> 📦 仓库：[apache/seata](https://github.com/apache/seata) · 🏷️ 版本：`v2.2.0` · 📅 发布：2024-09-20 · [查看英文原版 Release](https://github.com/apache/incubator-seata/releases/tag/v2.2.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
