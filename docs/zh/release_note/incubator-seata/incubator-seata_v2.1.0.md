---
title: "incubator-seata v2.1.0"
project: "incubator-seata"
repo: "apache/seata"
tag: "v2.1.0"
published: "2024-08-05"
type: "minor"
lang: "zh"
---

# incubator-seata v2.1.0

Apache Seata（孵化中）2.1.0 发布。

Apache Seata(incubating)是一个易于使用、高性能、开源的分布式事务解决方案。

### 下载
https://seata.apache.org/download/seata-server

版本更新如下：

### 特点：
- [[#6230](https://github.com/apache/incubator-seata/pull/6230)]支持RocketMQ事务消息
- [[#6370](https://github.com/seata/seata/pull/6370)] saga 与 Spring 依赖关系解耦
- [[#6205](https://github.com/apache/incubator-seata/pull/6205)] 支持模拟服务器
- [[#6169](https://github.com/apache/incubator-seata/pull/6169)] 完全支持重构状态机设计器中的状态
- [[#6326](https://github.com/apache/incubator-seata/pull/6326)] 支持 raft 节点元数据同步
- [[#6415](https://github.com/apache/incubator-seata/pull/6415)] 支持 Seata-statemachine-designer 中的自动布局

### 错误修复：
- [[#6090](https://github.com/apache/incubator-seata/pull/6090)] 修复TCC方面异常处理流程，不包装内部调用异常
- [[#6075](https://github.com/apache/incubator-seata/pull/6075)] 修复图像 SQL 更新列缺失的表别名
- [[#6086](https://github.com/apache/incubator-seata/pull/6086)] 修复 oracle 列别名找不到
- [[#6085](https://github.com/apache/incubator-seata/pull/6085)]修复jdk9+编译错误
- [[#6101](https://github.com/apache/incubator-seata/pull/6101)]修复dubbo 3.x版本consumer无法生成tcc代理的问题
- [[#6077](https://github.com/apache/incubator-seata/pull/6077)] 修复当表具有多个主表时无法回滚的问题
- [[#6121](https://github.com/apache/incubator-seata/pull/6121)]修复回滚时分支事务顺序错误
- [[#6182](https://github.com/apache/incubator-seata/pull/6182)] 修复 ci 中 guava-32.0.0-jre.jar zip 文件为空的问题
- [[#6196](https://github.com/apache/incubator-seata/pull/6196)] 修复 asf 配置文件格式错误
- [[#6143](https://github.com/apache/incubator-seata/pull/6143)] 优雅地关闭服务器
- [[#6204](https://github.com/apache/incubator-seata/pull/6204)]修复了需要修复错误配置的问题
- [[#6248](https://github.com/apache/incubator-seata/pull/6248)] 修复 JDBC 结果集、语句、连接关闭顺序
- [[#6261](https://github.com/apache/incubator-seata/pull/6261)] AT 模式支持 PGSQL 集群的 URL
- [[#6256](https://github.com/apache/incubator-seata/pull/6256)] 修复 raft-discovery 无法读取 Seata-all sdk 的注册表配置
- [[#6232](https://github.com/apache/incubator-seata/pull/6232)] 如果 mysql 列是 json 类型，则转换为 utf8mb4
- [[#6278](https://github.com/apache/incubator-seata/pull/6278)] 修复 ProtocolV1SerializerTest 失败
- [[#6324](https://github.com/apache/incubator-seata/pull/6324)] 修复解析协议文件失败的问题
- [[#6331](https://github.com/apache/incubator-seata/pull/6331)]修复了TCC嵌套事务无法同时添加TwoPhaseBusinessAction和GlobalTransactional注解的问题
- [[#6354](https://github.com/apache/incubator-seata/pull/6354)] 修复动态降级无法正常工作的问题
- [[#6363](https://github.com/apache/incubator-seata/pull/6363)] 修复 docker 图像的已知问题
- [[#6372](https://github.com/apache/incubator-seata/pull/6372)] 修复初始化 sql 文件 postgresql.sql 索引名称冲突
- [[#6380](https://github.com/apache/incubator-seata/pull/6380)] 修复检查 SQL Server 上是否存在 UNDO_LOG 表时的 sql 异常
- [[#6385](https://github.com/apache/incubator-seata/pull/6385)] 修复了 Role.participant 不执行钩子但清除它们的错误。
- [[#6465](https://github.com/apache/incubator-seata/pull/6465)] 修复(6257)：修复 2.x 中 saga 模式重播上下文丢失的开始
- [[#6469](https://github.com/apache/incubator-seata/pull/6469)]修复[lock_table]数据表的sql插入sqlserver数据库时出错
- [[#6496](https://github.com/apache/incubator-seata/pull/6496)] 修复执行长时间运行的 SQL（或死锁 SQL）时 XA 没有回滚而是关闭的问题
- [[#6493](https://github.com/apache/incubator-seata/pull/6493)] 修复使用 SQLServer 数据库时 Seata 服务器中与 SQLServer 相关的 SQL 错误
- [[#6497](https://github.com/apache/incubator-seata/pull/6497)] 修复自动配置时的 tcc 属性类
- [[#6554](https://github.com/apache/incubator-seata/pull/6554)] 修复未修复的序列化器
- [[#6555](https://github.com/apache/incubator-seata/pull/6555)]businessActionContext 与 io Seata 兼容
- [[#6553](https://github.com/apache/incubator-seata/pull/6553)] 修复传奇“无法匹配状态”
- [[#6575](https://github.com/apache/incubator-seata/pull/6575)] 修复 io.seata ActionInterceptorHandler 使用 org.apache.seata BusinessActionContextParameter
- [[#6675](https://github.com/apache/incubator-seata/pull/6675)] 修复阿里巴巴 Dubbo 转换错误
- [[#6676](https://github.com/apache/incubator-seata/pull/6676)] 修复 hsf ConsumerModel 转换错误

### 优化：
- [[#6031](https://github.com/apache/incubator-seata/pull/6031)] 添加对撤消日志表是否存在的检查
- [[#6089](https://github.com/apache/incubator-seata/pull/6089)]修改RaftServerFactory的语义并删除不必要的单例
- [[#4473](https://github.com/apache/incubator-seata/pull/4473)] rm 应用程序数据大小限制
- [[#6071](https://github.com/apache/incubator-seata/pull/6071)] 将 git 信息添加到 jar 中
- [[#6042](https://github.com/apache/incubator-seata/pull/6042)] 向 ClusterController 中的接口添加安全身份验证
- [[#6091](https://github.com/apache/incubator-seata/pull/6091)]优化raft认证时获取tc地址的方法
- [[#6098](https://github.com/apache/incubator-seata/pull/6098)] 优化 acquireMetadata 方法中的重试逻辑
- [[#6034](https://github.com/apache/incubator-seata/pull/6034)] 使用 helm 图表部署时从命令行使用命名空间
- [[#6116](https://github.com/apache/incubator-seata/pull/6034)] 删除lgtm.com 内容
- [[#6148](https://github.com/apache/incubator-seata/pull/6148)]支持Nacos ram角色认证
- [[#6145](https://github.com/apache/incubator-seata/pull/6145)]升级抛弃至1.5.4
- [[#6164](https://github.com/apache/incubator-seata/pull/6164)] redis注册表推送清空保护优化
- [[#6174](https://github.com/apache/incubator-seata/pull/6174)] 添加 ASF 基本配置
- [[#6181](https://github.com/apache/incubator-seata/pull/6181)] 更新贡献文档
- [[#6179](https://github.com/apache/incubator-seata/pull/6179)] 删除@作者信息
- [[#6176](https://github.com/apache/incubator-seata/pull/6176)] 更新源头
- [[#6178](https://github.com/apache/incubator-seata/pull/6178)] 更新 Apache 许可证的标头
- [[#6186](https://github.com/apache/incubator-seata/pull/6186)] 更新 README.md（更新邮件列表和存储库 URL）
- [[#6184](https://github.com/apache/incubator-seata/pull/6184)]更新通知文件
- [[#6192](https://github.com/apache/incubator-seata/pull/6192)] 删除无用文件
- [[#6194](https://github.com/apache/incubator-seata/pull/6194)] 修复 asf.yaml 解析错误
- [[#5399](https://github.com/apache/incubator-seata/pull/5399)] 仅在 RM 服务器端优化分支寄存器资源
- [[#6154](https://github.com/apache/incubator-seata/pull/6154)] 控制台日志针对“kubectl logs -f”进行优化
- [[#6116](https://github.com/apache/incubator-seata/pull/6116)] 重写 NettyPoolKey 的哈希码并等于修复通道对象池的重复构造
- [[#6195](https://github.com/apache/incubator-seata/pull/6195)] 将变更日志中的 url 更新为 apache/incubator-seata
- [[#6200](https://github.com/apache/incubator-seata/pull/6200)] 取消 required_status_checks
- [[#6201](https://github.com/apache/incubator-seata/pull/6201)] 恢复保留的 required_status_checks 以删除上下文验证
- [[#6218](https://github.com/apache/incubator-seata/pull/6218)] 删除 Seata-Docker 链接
- [[#6227](https://github.com/apache/incubator-seata/pull/6227)] 验证主键不包含非法字符
- [[#6004](https://github.com/apache/incubator-seata/pull/6004)]优化RM TM启动连接服务器快速失败
- [[#6243](https://github.com/apache/incubator-seata/pull/6243)] 优化控制台标题中的链接
- [[#6238](https://github.com/apache/incubator-seata/pull/6238)] 优化一些文件
- [[#6239](https://github.com/apache/incubator-seata/pull/6239)]更新安全政策、免责声明和通知
- [[#6245](https://github.com/apache/incubator-seata/pull/6245)]文件模式下，应用程序中的配置生效，当配置中心的spring配置改变时
- [[#6247](https://github.com/apache/incubator-seata/pull/6247)] 优化 asf.yml
- [[#6259](https://github.com/apache/incubator-seata/pull/6259)] 修改全局会话大小超过配置的错误消息
- [[#6264](https://github.com/apache/incubator-seata/pull/6264)] 修复 jib-maven-plugin 构建失败
- [[#6246](https://github.com/apache/incubator-seata/pull/6246)] 在 Maven 构建的同时构建前端
- [[#6268](https://github.com/apache/incubator-seata/pull/6268)] 优化控制台中过时的 npmjs 依赖项
- [[#6271](https://github.com/apache/incubator-seata/pull/6271)]统一git信息
- [[#6265](https://github.com/apache/incubator-seata/pull/6265)] 优化无法在arm64上构建前端
- [[#6267](https://github.com/apache/incubator-seata/pull/6267)] 添加服务器反序列化验证
- [[#6275](https://github.com/apache/incubator-seata/pull/6275)] 优化 .asf.yaml 中的标签格式
- [[#6291](https://github.com/apache/incubator-seata/pull/6291)] Seata-server 采用idea开发，控制台支持输出日志
- [[#6283](https://github.com/apache/incubator-seata/pull/6283)] 添加兼容模块以支持 io.seata APIs
- [[#6294](https://github.com/apache/incubator-seata/pull/6294)] 将前端资源构建过程拆分为单独的配置文件
- [[#6285](https://github.com/apache/incubator-seata/pull/6285)]优化控制台时间查询条件
- [[#6297](https://github.com/apache/incubator-seata/pull/6297)]修复`maven-pmd-plugin`的问题
- [[#6298](https://github.com/apache/incubator-seata/pull/6298)] 将名称重新打包为 org.apache.seata
- [[#6302](https://github.com/apache/incubator-seata/pull/6302)] 添加 io.seata 包阴影
- [[#6306](https://github.com/apache/incubator-seata/pull/6306)] 将一些 URL 替换为 org/apache/seata
- [[#6304](https://github.com/apache/incubator-seata/pull/6304)] 禁用发布 OSSRH 工作流程
- [[#6310](https://github.com/apache/incubator-seata/pull/6310)] Seata 服务器兼容 io.seata 包
- [[#6301](https://github.com/apache/incubator-seata/pull/6301)] 升级控制台前端依赖项和支持的 Nodejs 版本
- [[#6301](https://github.com/apache/incubator-seata/pull/6312)] 添加 saga 相关 io.seata 兼容 api
- [[#6313](https://github.com/apache/incubator-seata/pull/6313)]控制台显示版本号
- [[#6315](https://github.com/apache/incubator-seata/pull/6315)] 与较低版本的 SPI 兼容
- [[#6327](https://github.com/apache/incubator-seata/pull/6327)] 与integration.http 和integration.http.Jakarta 兼容
- [[#6328](https://github.com/apache/incubator-seata/pull/6328)] 与集成兼容。grpc
- [[#6330](https://github.com/apache/incubator-seata/pull/6330)] 删除 mariadb API
- [[#6329](https://github.com/apache/incubator-seata/pull/6312)] 添加 saga 子组件级 io.seata 兼容 api
- [[#6254](https://github.com/apache/incubator-seata/pull/6254)] 优化 Hessian 序列化
- [[#6332](https://github.com/apache/incubator-seata/pull/6332)] 从分发包中删除 mysql 依赖项
- [[#6343](https://github.com/apache/incubator-seata/pull/6343)] 与 tm 模块和 rm-datasource 模块兼容
- [[#6357](https://github.com/apache/incubator-seata/pull/6357)] 优化协议编解码器的序列化/反序列化
- [[#6345](https://github.com/apache/incubator-seata/pull/6345)] 与 tcc 模块兼容
- [[#6356](https://github.com/apache/incubator-seata/pull/6356)] 从健康检查页面删除身份验证
- [[#6360](https://github.com/apache/incubator-seata/pull/6360)]优化部分链接的401问题
- [[#6366](https://github.com/apache/incubator-seata/pull/6366)]优化了全局事务兼容性问题
- [[#6369](https://github.com/apache/incubator-seata/pull/6369)] 优化arm64 ci
- [[#6386](https://github.com/apache/incubator-seata/pull/6386)] 将 `byte-buddy` 替换为 JDK 代理
  在 `ConfigurationCache`
- [[#6391](https://github.com/apache/incubator-seata/pull/6091)]禁止重复注册TCC资源
- [[#6393](https://github.com/apache/incubator-seata/pull/6393)] 在同步元数据并添加之前确定版本
  重试机制
- [[#6387](https://github.com/apache/incubator-seata/pull/6387)] 优化 tcc 使用兼容
- [[#6402](https://github.com/apache/incubator-seata/pull/6402)] 优化 rm-datasource 使用兼容
- [[#6403](https://github.com/apache/incubator-seata/pull/6403)]优化配置兼容模块
- [[#6419](https://github.com/apache/incubator-seata/pull/6419)] 优化集成-tx-api 兼容
- [[#6427](https://github.com/apache/incubator-seata/pull/6427)]支持spi、saga、spring模块兼容
- [[#6442](https://github.com/apache/incubator-seata/pull/6442)] 澄清条件
- [[#6487](https://github.com/apache/incubator-seata/pull/6487)] 修复拼写错误和包名称
- [[#6442](https://github.com/apache/incubator-seata/pull/6442)] 澄清条件
- [[#6405](https://github.com/apache/incubator-seata/pull/6405)] 修复 kotlin 编译失败问题
- [[#6412](https://github.com/apache/incubator-seata/pull/6412)]优化核心兼容模块
- [[#6429](https://github.com/apache/incubator-seata/pull/6429)]删除重复的单词
- [[#6518](https://github.com/apache/incubator-seata/pull/6518)]优化ConfigurationCache代理方法
- [[#6458](https://github.com/apache/incubator-seata/pull/6458)] 添加 MAC 地址空值检查
- [[#6516](https://github.com/apache/incubator-seata/pull/6516)]优化代码格式
- [[#6529](https://github.com/apache/incubator-seata/pull/6529)] 优化发布maven插件
- [[#6539](https://github.com/apache/incubator-seata/pull/6539)] 添加子组件许可证
- [[#6540](https://github.com/apache/incubator-seata/pull/6540)] 排除 com.google.guava:listenablefuture
- [[#6541](https://github.com/apache/incubator-seata/pull/6541)] 将版本更改为 `2.1.0`
- [[#6548](https://github.com/apache/incubator-seata/pull/6548)]将byte-buddy版本升级到1.14.15
- [[#6549](https://github.com/apache/incubator-seata/pull/6549)] macos 工作流程支持arm测试
- [[#6558](https://github.com/apache/incubator-seata/pull/6558)] 从 pom.xml 中删除 mysql-connector-java
- [[#6570](https://github.com/apache/incubator-seata/pull/6570)] 将通知文件添加到二进制文件
- [[#6576](https://github.com/apache/incubator-seata/pull/6576)] 删除 oracle 数据类型解析器
- [[#6578](https://github.com/apache/incubator-seata/pull/6578)]registry.conf 补充了 raft 配置
- [[#6583](https://github.com/apache/incubator-seata/pull/6583)] 优化默认编译以独立于 Git Env
- [[#6585](https://github.com/apache/incubator-seata/pull/6585)]优化兼容模块pom.xml
- [[#6597](https://github.com/apache/incubator-seata/pull/6597)] 从源代码中删除二进制文件
- [[#6605](https://github.com/apache/incubator-seata/pull/6605)] 修改了许可证和通知
- [[#6609](https://github.com/apache/incubator-seata/pull/6609)]修改了通知文件
- [[#6610](https://github.com/apache/incubator-seata/pull/6610)]修改了通知文件
- [[#6649](https://github.com/apache/incubator-seata/pull/6649)] 添加许可证头
- [[#6688](https://github.com/apache/incubator-seata/pull/6688)] 删除前端构建的静态代码
- [[#6670](https://github.com/apache/incubator-seata/pull/6670)] 为原始文件添加许可证头
- [[#6671](https://github.com/apache/incubator-seata/pull/6671)] 优化多个许可证并删除许可证 URL
- [[#6672](https://github.com/apache/incubator-seata/pull/6672)] 更新前端许可证
- [[#6673](https://github.com/apache/incubator-seata/pull/6673)] 为 spring 配置文件添加许可证头
- [[#6674](https://github.com/apache/incubator-seata/pull/6674)] 更新源许可证
- [[#6677](https://github.com/apache/incubator-seata/pull/6677)] 为 SPI 文件添加许可证头
- [[#6692](https://github.com/apache/incubator-seata/pull/6692)]修复arm64和macos上的node-gyp构建错误
- [[#6704](https://github.com/apache/incubator-seata/pull/6704)] 修复 javadoc 版本不兼容问题


### 安全：
- [[#6069](https://github.com/apache/incubator-seata/pull/6069)] 升级 Guava 依赖项以修复安全漏洞
- [[#6145](https://github.com/apache/incubator-seata/pull/6145)]升级抛弃至1.5.4
- [[#6144](https://github.com/apache/incubator-seata/pull/6144)] 将 nacos client 升级为 1.4.6
- [[#6147](https://github.com/apache/incubator-seata/pull/6147)] 将 kafka-clients 升级为 3.6.1
- [[#6339](https://github.com/apache/incubator-seata/pull/6339)] 升级 spring mvc 和 tomcat.embed
- [[#6340](https://github.com/apache/incubator-seata/pull/6340)] 升级并整理一些依赖项
- [[#6350](https://github.com/apache/incubator-seata/pull/6350)] 删除enableDegrade属性
- [[#6349](https://github.com/apache/incubator-seata/pull/6349)] 转移 dockerhub 仓库
- [[#6362](https://github.com/apache/incubator-seata/pull/6362)]升级Spring相关依赖
- [[#6375](https://github.com/apache/incubator-seata/pull/6375)] 覆盖控制台嵌套依赖项

###测试：
- [[#6081](https://github.com/apache/incubator-seata/pull/6081)] 添加 `test-os.yml` 用于测试操作系统
- [[#6125](https://github.com/apache/incubator-seata/pull/6125)] 在 TransactionTemplateTest 中取消绑定 xid
- [[#6157](https://github.com/apache/incubator-seata/pull/6157)] 增加公共模块单元测试覆盖率
- [[#6250](https://github.com/apache/incubator-seata/pull/6250)] 增加 Seata-Core 模块单元测试覆盖率
- [[#6325](https://github.com/apache/incubator-seata/pull/6325)]修复mockServerTest失败原因与seata-server使用相同的端口
- [[#6430](https://github.com/apache/incubator-seata/pull/6430)] 增加公共模块单元测试覆盖率
- [[#6456](https://github.com/apache/incubator-seata/pull/6456)]调整与动态配置相关的测试用例
- [[#6466](https://github.com/apache/incubator-seata/pull/6466)] 支持 redis 集成测试
- [[#6484](https://github.com/apache/incubator-seata/pull/6484)] 修复 FileConfigurationTest 和 MockServerTest 失败
- [[#6545](https://github.com/apache/incubator-seata/pull/6545)] 修复 TestConfigCustomSPI 兼容性测试失败的问题
- [[#6560](https://github.com/apache/incubator-seata/pull/6560)] 修复模拟服务器测试，不要在 Runtime.getRuntime().addShutdownHook 中关闭
- [[#6565](https://github.com/apache/incubator-seata/pull/6565)] 修复 testCompensationStateMachine 失败

### 重构：
- [[#6280](https://github.com/apache/incubator-seata/pull/6280)]使用diagram-js重构Saga设计器
- [[#6269](https://github.com/apache/incubator-seata/pull/6269)] 标准化 Seata 异常
- [[#6420](https://github.com/apache/incubator-seata/pull/6420)] 重构配置缓存

感谢这些贡献者提交的代码。请报告无意的遗漏。

<!-- 请确保您的 Github ID 在下面的列表中 -->
- [slievrly](https://github.com/slievrly)
- [ptyin](https://github.com/ptyin)
- [雷文](https://github.com/laywin)
- [imcmai](https://github.com/imcmai)
- [DroidEye2ONGU](https://github.com/DroidEye2ONGU)
- [时髦的眼睛](https://github.com/funky-eyes)
- [布休](https://github.com/Bughue)
- [王亮181230](https://github.com/wangliang181230)
- [ggbocoder](https://github.com/ggbocoder)
- [李宗杰](https://github.com/leezongjie)
- [l81893521](https://github.com/l81893521)
- [baiyangtx](https://github.com/baiyangtx)
- [lightClouds917](https://github.com/lightClouds917)
- [幸福的使](https://github.com/xingfudeshi)
- [请给我可乐](https://github.com/PleaseGiveMeTheCoke)
- [sunrui1225](https://github.com/sunrui1225)
- [小猪佩奇](https://github.com/PeppaO)
- [专辑J](https://github.com/AlbumenJ)
- [梦幻天空](https://github.com/dreamskyvision)
- [jsbxyyx](https://github.com/jsbxyyx)
- [流秋风](https://github.com/liuqiufeng)
- [saberyjs](https://github.com/SABERYJS)
- [gggyd123](https://github.com/gggyd123)
- [乔纳斯·汉汉](https://github.com/jonasHanhan)
- [密码破译者1998](https://github.com/Code-breaker1998)
- [一夏](https://github.com/wt-better)
- [米哈伊尔·纳维茨基](https://github.com/MikhailNavitski)
- [deung](https://github.com/deung)
- [谭耀飞](https://github.com/tanyaofei)
- [xjgod](https://github.com/xjlgod)
- [TakeActionNow2019](https://github.com/TakeActionNow2019)
- [孙寻乐](https://github.com/sunxunle)
- [八哥洋](https://github.com/bageyang)

此外，我们还收到来自社区的许多有价值的问题、疑问和建议。谢谢大家。

---

> 📦 仓库：[apache/seata](https://github.com/apache/seata) · 🏷️ 版本：`v2.1.0` · 📅 发布：2024-08-05 · [查看英文原版 Release](https://github.com/apache/incubator-seata/releases/tag/v2.1.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
