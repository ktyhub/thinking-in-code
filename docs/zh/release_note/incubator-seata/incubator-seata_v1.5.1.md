# incubator-seata v1.5.1
```markdown
Seata 1.5.1（针对 1.5.0 的修复版本）已发布。

`seata-all-1.5.0.jar` 因为 1.5.0 版本中的插件冲突导致版本号替换问题，已发布到中央 Maven 仓库。因此，我们紧急发布了 1.5.1 版本，代码功能与 1.5.0 完全相同。对于造成的困惑和不便，我们深表歉意。

Seata 是一个易用的、高性能的、开源的分布式事务解决方案。

版本更新如下：

### 功能：

- [#4115](https://github.com/seata/seata/pull/4115) 支持控制台管理
- [#3472](https://github.com/seata/seata/pull/3472) 添加 redisLocker 的 lua 模式
- [#3575](https://github.com/seata/seata/pull/3575) 支持锁和会话的不同存储混合使用
- [#3374](https://github.com/seata/seata/pull/3374) 为 INSERT ON DUPLICATE KEY UPDATE 添加执行器
- [#3642](https://github.com/seata/seata/pull/3642) 提供 API 以共享 TCC 第一阶段的参数到第二阶段
- [#3064](https://github.com/seata/seata/pull/3064) 支持配置 TM 和 TCC 拦截器的顺序
- [#2852](https://github.com/seata/seata/pull/2852) 支持配置 GlobalTransactionScanner 的扫描目标
- [#3683](https://github.com/seata/seata/pull/3683) 支持 redis 分布式锁以防止多个 TC 竞争
- [#3545](https://github.com/seata/seata/pull/3545) TCC 模式支持幂等和防悬挂
- [#3009](https://github.com/seata/seata/pull/3009) 支持使用 springboot 启动服务器并使用 application.yaml 进行配置
- [#3652](https://github.com/seata/seata/pull/3652) 支持与 SkyWalking 的 APM
- [#3823](https://github.com/seata/seata/pull/3823) TCC 模式支持自定义第二阶段方法的参数列表
- [#3642](https://github.com/seata/seata/pull/3642) TCC 模式的 try 方法支持隐式传递 `BusinessActionContext`
- [#3856](https://github.com/seata/seata/pull/3856) 支持 edas-hsf RPC 框架
- [#3880](https://github.com/seata/seata/pull/3880) 贡献 md 支持中文
- [#2568](https://github.com/seata/seata/pull/2568) 支持 GlobalTransactionInterceptor 表达式
- [#3886](https://github.com/seata/seata/pull/3886) 支持注册中心网络偏好设置
- [#3869](https://github.com/seata/seata/pull/3869) 支持从环境中获取配置
- [#3906](https://github.com/seata/seata/pull/3906) 支持 SPI 卸载
- [#3668](https://github.com/seata/seata/pull/3668) 支持 kotlin 协程
- [#3968](https://github.com/seata/seata/pull/3968) 支持 brpc-java RPC 框架
- [#4134](https://github.com/seata/seata/pull/4134) 初始化控制台基础代码
- [#4268](https://github.com/seata/seata/pull/4268) 在文件模式下查询全局会话
- [#4281](https://github.com/seata/seata/pull/4281) 在 redis 模式下查询全局会话和全局锁
- [#4293](https://github.com/seata/seata/pull/4293) 在文件模式下获取全局锁
- [#4335](https://github.com/seata/seata/pull/4335) 实现配置中心上传配置交互脚本（nacos,etcd3）
- [#4360](https://github.com/seata/seata/pull/4360) 实现配置中心上传配置交互脚本（apollo,consul,zk）
- [#4320](https://github.com/seata/seata/pull/4320) 实现控制台接口：在 db 模式下获取全局会话和全局锁
- [#4435](https://github.com/seata/seata/pull/4435) 控制台前端页面实现
- [#4480](https://github.com/seata/seata/pull/4480) 实现 DefaultAuthSigner
- [#3870](https://github.com/seata/seata/pull/3870) 使 seata-bom 成为真正的物料清单
- [#3487](https://github.com/seata/seata/pull/3487) 添加分布式锁的数据库实现
- [#3889](https://github.com/seata/seata/pull/3889) 注册中心添加心跳
- [#3951](https://github.com/seata/seata/pull/3951) 支持 zstd 压缩器
- [#2838](https://github.com/seata/seata/pull/2838) Saga 在 spring boot 项目中支持自动配置

### 修复：

- [#3497](https://github.com/seata/seata/pull/3497) 修复 TCC 第二阶段响应超时异常
- [#3686](https://github.com/seata/seata/pull/3686) 修复 Apollo 的 NPE 和错误的集群名称
- [#3702](https://github.com/seata/seata/pull/3702) 修复一些注释
- [#3716](https://github.com/seata/seata/pull/3716) 修复 findTargetClass 方法中的问题
- [#3717](https://github.com/seata/seata/pull/3717) 修复 interval 的拼写错误
- [#3773](https://github.com/seata/seata/pull/3773) 修复 consul 未找到 tc 集群
- [#3695](https://github.com/seata/seata/pull/3695) 修复 mariadb 无法创建 XA 连接
- [#3783](https://github.com/seata/seata/pull/3783) 修复存储模式不生效的问题
- [#3740](https://github.com/seata/seata/pull/3740) 修复 Saga 事务结束时 `LocalThread` 未清除
- [#3792](https://github.com/seata/seata/pull/3792) 修复服务器找不到 redis-host 属性
- [#3828](https://github.com/seata/seata/pull/3828) 修复 StringUtils StackOverflowError
- [#3817](https://github.com/seata/seata/pull/3817) 修复 TC SkyWalking 拓扑调用节点未收集
- [#3803](https://github.com/seata/seata/pull/3803) 修复 ReflectionUtil 抛出意外异常
- [#3879](https://github.com/seata/seata/pull/3879) 修复 postgresql 多 schema 抛出未找到通道异常
- [#3881](https://github.com/seata/seata/pull/3881) 修复不同默认值的 getConfig 返回第一个
- [#3897](https://github.com/seata/seata/pull/3897) 修复 FastjsonUndoLogParser 中 LocalDataTime 类型无法回滚
- [#3901](https://github.com/seata/seata/pull/3901) 修复 seataio/seata-server servlet-api 冲突
- [#3931](https://github.com/seata/seata/pull/3931) 修复转储 JVM 内存分析时的错误路径和文件名
- [#3978](https://github.com/seata/seata/pull/3978) 修复因超时导致的 NPE
- [#4266](https://github.com/seata/seata/pull/4266) 修复在 oracle 中修改的行数大于 1000 时注册分支和释放锁失败
- [#3949](https://github.com/seata/seata/pull/3949) 