# incubator-seata v1.6.0
```markdown
# Seata 1.6.0 发布

Seata 是一个易于使用、高性能的开源分布式事务解决方案。

该版本更新如下：

### 新功能：

- 支持 Oracle 和 PostgreSQL 多主键
- Seata 服务器支持多注册中心
- 支持 Apache Dubbo3
- TCC 模式支持在接口和实现类上标记 tcc 注解
- Seata 客户端支持 JDK17
- 支持 MySQL 更新连接 SQL
- 支持 Oracle 时间戳类型
- 支持 Nacos contextPath
- Dockerfile 支持 arm64

### Bug 修复：

- 修复在超时回滚成功后无法发布 TimeoutRollbacked 事件的问题
- 修复输出表达式错误地抛出 npe 的问题
- 修复高版本 SpringBoot 属性不标准的问题
- 修复使用 Statement.executeBatch() 时无法生成撤销日志的问题
- 修复回滚事件重复和某些事件状态不正确的问题
- 修复 MySQL InsertOnDuplicateUpdate 列大小写不同无法匹配的问题
- 修复支持 Oracle nclob 类型的问题
- 修复无法获取服务器恢复属性的问题
- 修复 XID 端口和地址在 coordinator.init 之前为 null:0 的问题
- 修复 rpcContext.getClientRMHolderMap NPE 的问题
- 修复 InsertOnDuplicateUpdate 绕过修改主键的问题
- 修复 Kryo 支持循环引用的问题
- 修复使用 OpenJDK 11 启动失败的问题
- 修复启动脚本中的 loader 路径问题
- 修复更新连接重复图像行的问题
- 修复 MySQL InsertOnDuplicateUpdate SQL 查询错误的问题
- 修复插入空列时发生的异常
- 移除 @EnableConfigurationProperties({SagaAsyncThreadPoolProperties.class})
- 修复全局会话在 Saga 模式下未更改为已提交状态的问题
- 修复更新连接条件占位符参数错误的问题
- 修复 MySQL InsertOnDuplicateUpdate 不应使用空索引值作为图像 SQL 查询条件的问题
- 修复 InsertOnDuplicateUpdateExecutor 无法拦截没有主键和唯一键的 SQL 的问题
- 修复服务器重启后访问密钥丢失的问题
- 修复 Seata 和 JPA 一起使用时，它们的自动配置顺序不正确的问题
- 修复 RM 端没有 @GlobalTransactional 注解时引发的 NPE 问题
- 禁用 Druid 的 Oracle 隐式缓存
- 修复 Seata 服务器端的指标标签覆盖问题
- 修复插入值为空时在 InsertOnDuplicate SQL 中解析为字符串的问题
- 修复无法拦截没有主键和唯一键的 SQL 的问题
- 修复服务器重启后访问密钥丢失的问题
- 修复 XA 连接活动状态回滚问题
- 修复 Hikari 数据源自动代理失败的问题
- 修复服务配置文件错误和编译失败的问题

### 优化：

- 优化 Seataio/Seata-Server 镜像的 MySQL8 依赖
- 添加 GitHub Action 发布 Seata 到 OSSRH
- MySQL 8.0.29 不应保持连接
- 优化 unBranchLock 移除 xid
- 优化 GitHub Actions
- 添加 Apache 许可证 V2 的 NOTICE
- 优化全局事务期间的锁检查
- 使用 hget 替换 hmget，因为只有一个字段
- 排除 log4j 依赖
- 优化 BaseTransactionalExecutor#buildLockKey(TableRecords rowsIncludingPK) 方法的可读性
- 修复 GGEditor 中的一些安全漏洞
- 自动降级启用动态配置
- TCCFence 日志表按索引删除
- 添加许可证检查工作流
- 升级 package-lock.json 修复漏洞
- 优化 pom 依赖
- 提取某些属性的默认值
- 优化 Java Doc 警告
- 修复控制台中的某些漏洞并升级 skywalking-eyes
- 优化存储配置的读取
- 获取锁时将 SQLException 传递给客户端
- 优化构建并修复基础镜像
- 优化 Redis 模式下全局状态查询数量限制
- 优化 TCC Fence 记录不存在的错误信息
- 修复 undo_log ID 重复的问题
- 修复 MySQL InsertOnDuplicateUpdate 在后置图像查询 SQL 中的重复主键条件问题
```