# incubator-seata v1.6.0(Not Apache release)
## Seata 1.6.0 发布

Seata 是一个易于使用、高性能的开源分布式事务解决方案。此次版本更新如下：

### 新特性：
- 支持 Oracle 和 PostgreSQL 多主键。
- Seata 服务器支持多注册中心。
- 支持 Apache Dubbo3。
- TCC 模式支持注解标注在接口和实现类。
- Seata 客户端支持 JDK17。
- 支持 MySQL 的 update join SQL。
- 支持 Oracle 的时间戳类型。
- 支持 Nacos contextPath。
- Dockerfile 支持 arm64。

### 修复问题：
- 修复无法在超时回滚成功后发送 TimeoutRollbacked 事件。
- 修复输出表达式错误抛出 NPE。
- 修复在高版本 SpringBoot 中属性不标准的问题。
- 修复使用 Statement.executeBatch() 无法生成撤销日志的问题。
- 修复回滚事件重复和部分事件状态不正确的问题。
- 修复 MySQL InsertOnDuplicateUpdate 列大小写不同无法匹配的问题。
- 修复支持 Oracle 的 NClob 类型。
- 修复无法获取服务器恢复属性的问题。
- 修复 XID 端口和地址为 null:0 的问题。
- 修复 rpcContext.getClientRMHolderMap 出现 NPE 的问题。
- 修复 InsertOnDuplicateUpdate 绕过主键修改的问题。
- 修复 kryo 支持循环引用问题。
- 修复使用 OpenJDK 11 启动失败的问题。
- 修复启动脚本中的加载路径问题。
- 修复 update join SQL 的重复图像行问题。
- 修复 MySQL InsertOnDuplicateUpdate SQL 查询错误的问题。
- 修复插入时空列异常的问题。

### 优化：
- 优化 Seata 服务器镜像中的 MySQL8 依赖。
- 添加发布 Seata 到 OSSRH 的 GitHub Action。
- 优化 TCC 锁检查。
- 使用 hget 替代 hmget。
- 移除 log4j 依赖。

完整变更日志可以在 GitHub 上查看。