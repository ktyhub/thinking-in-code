# incubator-seata v2.1.0

## Apache Seata(incubating) 2.1.0 发布

Apache Seata(incubating) 是一个易于使用、高性能的开源分布式事务解决方案。

### 版本更新如下：

#### 新特性：

- [#6230](https://github.com/apache/incubator-seata/pull/6230) 支持 RocketMQ 事务消息
- [#6370](https://github.com/apache/incubator-seata/pull/6370) Saga 与 Spring 依赖解耦
- [#6205](https://github.com/apache/incubator-seata/pull/6205) 支持模拟服务器
- [#6169](https://github.com/apache/incubator-seata/pull/6169) 完全支持重构状态机设计器中的状态
- [#6326](https://github.com/apache/incubator-seata/pull/6326) 支持 Raft 节点元数据同步
- [#6415](https://github.com/apache/incubator-seata/pull/6415) 支持 seata-statemachine-designer 中的自动布局

#### Bug 修复：

- [#6090](https://github.com/apache/incubator-seata/pull/6090) 修复 TCC 切面异常处理过程，不包装内部调用异常
- [#6075](https://github.com/apache/incubator-seata/pull/6075) 修复 image SQL 中更新列缺少表别名的问题
- [#6086](https://github.com/apache/incubator-seata/pull/6086) 修复找不到 Oracle 列别名的问题
- [#6085](https://github.com/apache/incubator-seata/pull/6085) 修复 JDK9+ 编译错误
- [#6101](https://github.com/apache/incubator-seata/pull/6101) 修复 Dubbo 3.x 版本中消费者无法生成 TCC 代理的问题
- [#6077](https://github.com/apache/incubator-seata/pull/6077) 修复表有多个主键时无法回滚的问题
- [#6121](https://github.com/apache/incubator-seata/pull/6121) 修复回滚时分支事务顺序错误的问题
- [#6182](https://github.com/apache/incubator-seata/pull/6182) 修复 CI 中 guava-32.0.0-jre.jar 文件为空的问题
- [#6196](https://github.com/apache/incubator-seata/pull/6196) 修复 ASF 配置文件格式错误
- [#6143](https://github.com/apache/incubator-seata/pull/6143) 优雅地关闭服务器
- [#6204](https://github.com/apache/incubator-seata/pull/6204) 修复错误配置的问题
- [#6248](https://github.com/apache/incubator-seata/pull/6248) 修复 JDBC resultSet、statement、connection 关闭顺序
- [#6261](https://github.com/apache/incubator-seata/pull/6261) AT 模式支持 PGSQL 集群的 URL
- [#6256](https://github.com/apache/incubator-seata/pull/6256) 修复 raft-discovery 无法读取 seata-all SDK 的注册配置
- [#6232](https://github.com/apache/incubator-seata/pull/6232) 如果 MySQL 列为 JSON 类型，则转换为 utf8mb4
- [#6278](https://github.com/apache/incubator-seata/pull/6278) 修复 ProtocolV1SerializerTest 失败
- [#6324](https://github.com/apache/incubator-seata/pull/6324) 修复解析协议文件失败
- [#6331](https://github.com/apache/incubator-seata/pull/6331) 修复 TCC 嵌套事务无法同时添加 TwoPhaseBusinessAction 和 GlobalTransactional 注解的问题
- [#6354](https://github.com/apache/incubator-seata/pull/6354) 修复动态降级不正常工作的问题
- [#6363](https://github.com/apache/incubator-seata/pull/6363) 修复 Docker 镜像的已知问题
- [#6372](https://github.com/apache/incubator-seata/pull/6372) 修复初始化 postgresql.sql 文件索引名称冲突
- [#6380](https://github.com/apache/incubator-seata/pull/6380) 修复在 SQL Server 上检查 UNDO_LOG 表存在时的 SQL 异常
- [#6385](https://github.com/apache/incubator-seata/pull/6385) 修复 Role.participant 不执行 hooks 但清除它们的错误
- [#6465](https://github.com/apache/incubator-seata/pull/6465) 修复 saga 模式重放上下文丢失问题
- [#6469](https://github.com/apache/incubator-seata/pull/6469) 修复插入 [lock_table] 数据表到 SQL Server 数据库时的错误
- [#6496](https://github.com/apache/incubator-seata/pull/6496) 修复 XA 在执行长时间运行的 SQL（或死锁 SQL）时未回滚但关闭的问题
- [#6493](https://github.com/apache/incubator-seata/pull/6493) 修复在使用 SQL Server 数据库时 Seata 服务器的 SQLServer 相关 SQL 错误
- [#6497](https://github.com/apache/incubator-seata/pull/6497) 修复 TCC 属性类自动配置时的问题
- [#6554](https://github.com/apache/incubator-seata/pull/6554) 修复未修复的序列化器
- [#6555](https://github.com/apache/incubator-seata/pull/6555) businessActionContext 兼容 io seata
- [#6553](https://github.com/apache/incubator-seata/pull/6553) 修复 saga "无法匹配状态" 的问题
- [#6575](https://github.com/apache/incubator-seata/pull/6575) 修复 io.seata ActionInterceptorHandler 使用 org.apache.seata BusinessActionContextParameter
- [#6675](https://github.com/apache/incubator-seata/pull/6675) 修复 Alibaba Dubbo 转换错误
- [#6676](https://github.com/apache/incubator-seata/pull/6676) 修复 HSF ConsumerModel 转换错误

#### 优化：

- [#6031](https://github.com/apache/incubator-seata/pull/6031) 添加 undolog 表存在性检查
- [#6089](https://github.com/apache/incubator-seata/pull/6089) 修改 RaftServerFactory 的语义并移除不必要的单例
- [#4473](https://github.com/apache/incubator-seata/pull/4473) 移除 appdata 大小限制
- [#6071](https://github.com/apache/incubator-seata/pull/6071) 添加 git 信息到 jars
- [#6042](https://github.com/apache/incubator-seata/pull/6042) 为 ClusterController 中的接口添加安全认证
- [#6091](https://github.com/apache/incubator-seata/pull/6091) 优化 Raft 认证期间获取 tc 地址的方法
- [#6098](https://github.com/apache/incubator-seata/pull/6098) 优化 acquireMetadata 方法中的重试逻辑
- [#6034](https://github.com/apache/incubator-seata/pull/6034) 部署时使用命令行中的 namespace
- [#6116](https://github.com/apache/incubator-seata/pull/6116) 移除 lgtm.com 相关内容
- [#6148](https://github.com/apache/incubator-seata/pull/6148) 支持 Nacos ram 角色认证
- [#6145](https://github.com/apache/incubator-seata/pull/6145) 升级 jettison 到 1.5.4
- [#6164](https://github.com/apache/incubator-seata/pull/6164) 优化 redis 注册表推送空保护
- [#6174](https://github.com/apache/incubator-seata/pull/6174) 添加 ASF 基本配置
- [#6181](https://github.com/apache/incubator-seata/pull/6181) 更新贡献文档
- [#6179](https://github.com/apache/incubator-seata/pull/6179) 移除 @author 信息
- [#6176](https://github.com/apache/incubator-seata/pull/6176) 更新源头文件头部
- [#6178](https://github.com/apache/incubator-seata/pull/6178) 更新 Apache 许可证头部
- [#6186](https://github.com/apache/incubator-seata/pull/6186) 更新 README.md（更新邮件列表和仓库 URL）
- [#6184](https://github.com/apache/incubator-seata/pull/6184) 更新 NOTICE 文件
- [#6192](https://github.com/apache/incubator-seata/pull/6192) 移除无用文件
- [#6194](https://github.com/apache/incubator-seata/pull