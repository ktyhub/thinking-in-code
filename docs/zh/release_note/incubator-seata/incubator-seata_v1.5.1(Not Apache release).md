# incubator-seata v1.5.1(Not Apache release)
```markdown
Seata 1.5.1 (修复 1.5.0 版本问题) 已发布。

由于 1.5.0 版本中的插件冲突导致版本号替换问题，`seata-all-1.5.0.jar` 已被发布到 Maven 中央仓库。我们紧急发布了 1.5.1 版本，其代码功能与 1.5.0 完全相同。对此带来的困扰和不便，我们深表歉意。

Seata 是一个易于使用、高性能的开源分布式事务解决方案。

### 版本更新内容如下：

#### 功能：
- 支持控制台管理
- 添加 Redis 锁的 Lua 模式
- 支持锁和会话的不同存储混合使用
- 为 `INSERT ON DUPLICATE KEY UPDATE` 添加执行器
- 提供一个 API 共享 TCC 阶段 1 的参数到阶段 2
- 支持配置 TM 和 TCC 拦截器的顺序
- 支持为 GlobalTransactionScanner 配置扫描目标
- 支持 Redis 分布式锁，防止多个 TC 竞争
- TCC 模式支持幂等性和防悬挂机制
- 支持通过 SpringBoot 启动服务器并使用 `application.yaml` 配置
- 支持 SkyWalking 的 APM 监控
- TCC 模式支持自定义阶段二方法的参数列表
- TCC 模式的 try 方法支持隐式传递 `BusinessActionContext`
- 支持 edas-hsf RPC 框架
- 支持中文的贡献者文档
- 支持 GlobalTransactionInterceptor 表达式
- 支持注册中心网络偏好配置
- 支持从环境获取配置
- 支持 SPI 卸载
- 支持 Kotlin 协程
- 支持 brpc-java RPC 框架
- 初始化控制台基础代码
- 文件模式下查询全局会话
- Redis 模式下查询全局会话和全局锁
- 文件模式下获取全局锁
- 实现配置中心上传配置交互脚本 (nacos, etcd3)
- 实现配置中心上传配置交互脚本 (apollo, consul, zk)
- 实现控制台接口：数据库模式下获取全局会话和全局锁
- 控制台前端页面实现
- 实现 DefaultAuthSigner
- 实现 Seata BOM (Bill-Of-Material)
- 添加数据库分布式锁的实现
- 注册中心添加心跳功能
- 支持 Zstd 压缩器
- Saga 模式支持在 Spring Boot 项目中的自动配置

#### Bug 修复：
- 修复 TCC 阶段二响应超时异常
- 修复 Apollo 的 NPE 和错误的集群名称
- 修复一些注释问题
- 修复 findTargetClass 方法中的问题
- 修复间隔拼写错误
- 修复 Consul 未找到 TC 集群问题
- 修复 MariaDB 无法创建 XA 连接的问题
- 修复存储模式未生效的问题
- 修复 Saga 事务结束时未清除 `LocalThread` 的问题
- 修复服务器无法找到 Redis 主机属性的问题
- 修复 `StringUtils` 的 StackOverflowError
- 修复 TC SkyWalking 拓扑调用节点未收集问题
- 修复 `ReflectionUtil` 抛出未预期异常的问题
- 修复 PostgreSQL 多模式抛出找不到通道异常
- 修复不同默认值的 `getConfig` 返回相同问题
- 修复 FastjsonUndoLogParser 中 `LocalDateTime` 类型无法回滚的问题
- 修复 `seataio/seata-server` 中的 `servlet-api` 冲突
- 修复导出 JVM 内存分析时路径和文件名错误
- 修复超时引发的 NPE
- 修复 Oracle 中修改行数超过 1000 时注册分支和释放锁失败的问题
- 修复 `nacos-config.py` 未跳过空白选项的问题
- 修复 Nacos 在密码包含特殊字符时找不到用户的问题
- 修复 Jedis `multi.exec` 的 NPE
- 修复 SpringBoot 中无法获取分布式锁表属性的问题
- 修复潜在的数据库资源泄露
- 修复部分场景中 Dubbo 没有清除 XID 的问题
- 修复本地事务抛出异常后 RM 未清除 XID 的问题
```