# incubator-seata v1.7.0
```markdown
# Seata 1.7.0 发布

Seata 是一个易于使用、高性能的开源分布式事务解决方案。

本次版本更新如下：

### 新特性

- [#5476](https://github.com/seata/seata/pull/5476) 首次支持 `seata-client` 的 `native-image`
- [#5495](https://github.com/seata/seata/pull/5495) 控制台集成 saga-statemachine-designer
- [#5668](https://github.com/seata/seata/pull/5668) 兼容 1.4.2 及以下版本的 file.conf 和 registry.conf 配置

### Bug 修复

- [#5682](https://github.com/seata/seata/pull/5682) 修复 saga 模式下重放上下文丢失 startParams
- [#5671](https://github.com/seata/seata/pull/5671) 修复 saga 模式下 serviceTask inputParams json autoType 转换异常
- [#5194](https://github.com/seata/seata/pull/5194) 修复创建表时 Oracle 关键字顺序错误
- [#5201](https://github.com/seata/seata/pull/5201) 修复 JDK17 中 Spring 原始代理失败的 JDK 反射问题
- [#5203](https://github.com/seata/seata/pull/5203) 修复 `seata-dubbo` 中 `seata-core` 依赖传递冲突
- [#5224](https://github.com/seata/seata/pull/5224) 修复 Oracle 初始化脚本 index_name 重复
- [#5233](https://github.com/seata/seata/pull/5233) 修复与 LoadBalance 相关的配置项名称不一致
- [#5265](https://github.com/seata/seata/pull/5265) 修复服务器控制台查询已释放的锁
- [#5245](https://github.com/seata/seata/pull/5245) 修复分发模块依赖不完整
- [#5239](https://github.com/seata/seata/pull/5239) 修复使用 JDK 代理时 `getConfig` 抛出 `ClassCastException`
- [#5281](https://github.com/seata/seata/pull/5281) 并行请求处理抛出 IndexOutOfBoundsException
- [#5288](https://github.com/seata/seata/pull/5288) 修复 Oracle AT 模式下 pk 列的自增
- [#5287](https://github.com/seata/seata/pull/5287) 修复 PostgreSQL AT 模式下 pk 列的自增
- [#5299](https://github.com/seata/seata/pull/5299) 修复重试回滚或重试提交超时时 GlobalSession 删除问题
- [#5307](https://github.com/seata/seata/pull/5307) 修复关键字未添加转义字符
- [#5311](https://github.com/seata/seata/pull/5311) 在文件存储恢复期间移除 RollbackRetryTimeout 会话
- [#4734](https://github.com/seata/seata/pull/4734) 检查 AT 模式下表元数据缓存是否需要刷新
- [#5316](https://github.com/seata/seata/pull/5316) 修复 jdk8 中 G1 jvm 参数
- [#5321](https://github.com/seata/seata/pull/5321) 修复 TC 端回滚逻辑返回 RollbackFailed 时未执行自定义 FailureHandler
- [#5332](https://github.com/seata/seata/pull/5332) 修复单元测试中发现的错误
- [#5145](https://github.com/seata/seata/pull/5145) 修复 saga 模式下 global session 始终开始
- [#5413](https://github.com/seata/seata/pull/5413) 修复服务配置文件和编译失败
- [#5415](https://github.com/seata/seata/pull/5415) 修复客户端事务超时未执行 hook 和 failureHandler
- [#5447](https://github.com/seata/seata/pull/5447) 修复 Oracle xa 模式无法使用同一数据库
- [#5472](https://github.com/seata/seata/pull/5472) 修复在 RM 中使用 `@GlobalTransactional` 时抛出 `ShouldNeverHappenException`
- [#5535](https://github.com/seata/seata/pull/5535) 修复日志文件路径加载错误
- [#5538](https://github.com/seata/seata/pull/5538) 修复提交时已完成事务吞没异常
- [#5539](https://github.com/seata/seata/pull/5539) 修复 Oracle 10g 中 'setDate' 条件的全表扫描问题
- [#5540](https://github.com/seata/seata/pull/5540) 修复 DB 存储模式下 GlobalStatus=9 无法清除
- [#5552](https://github.com/seata/seata/pull/5552) 修复 mariadb 回滚失败
- [#5583](https://github.com/seata/seata/pull/5583) 修复 grpc 拦截器 xid 解绑问题
- [#5602](https://github.com/seata/seata/pull/5602) 修复参与者事务角色的日志
- [#5645](https://github.com/seata/seata/pull/5645) 修复 Oracle 插入 undolog 失败
- [#5659](https://github.com/seata/seata/pull/5659) 修复添加转义字符后数据库大小写敏感问题
- [#5663](https://github.com/seata/seata/pull/5663) 修复 connectionProxyXA 连接重用时超时为空
- [#5675](https://github.com/seata/seata/pull/5675) 修复 xxx.grouplist 和 grouplist.xxx 配置项之间的兼容性
- [#5690](https://github.com/seata/seata/pull/5690) 修复控制台打印 `unauthorized error`
- [#5711](https://github.com/seata/seata/pull/5711) 修复获取带下划线的配置项错误

### 优化

- [#5208](https://github.com/seata/seata/pull/5208) 优化 throwable getCause 一次
- [#5212](https://github.com/seata/seata/pull/5212) 优化日志消息级别
- [#5237](https://github.com/seata/seata/pull/5237) 优化异常日志消息打印 (EnhancedServiceLoader.loadFile#cahtch)
- [#5089](https://github.com/seata/seata/pull/5089) 优化 TCC 栅栏日志清理任务的延迟值检查
- [#5243](https://github.com/seata/seata/pull/5243) 优化 kryo 5.4.0 与 jdk17 的兼容性
- [#5153](https://github.com/seata/seata/pull/5153) 仅 AT 模式尝试与其他应用获取通道
- [#5177](https://github.com/seata/seata/pull/5177) 如果 `server.session.enable-branch-async-remove` 为 true，则异步删除分支并同步解锁
- [#5273](https://github.com/seata/seata/pull/5273) 优化 `protobuf-maven-plugin` 插件的编译配置，以解决高版本中命令行过长的问题
- [#5303](https://github.com/seata/seata/pull/5303) 移除启动脚本中的 -Xmn 配置
- [#5325](https://github.com/seata/seata/pull/5325) 添加存储模式、配置类型和注册类型的日志信息
- [#5315](https://github.com/seata/seata/pull/5315) 优化 SPI 的日志
- [#5323](https://github.com/seata/seata/pull/5323) 为全局事务超时日志添加时间信息
- [#5414](https://github.com/seata/seata/pull/5414) 优化事务失败处理程序
- [#5537](https://github.com/seata/seata/pull/5537) 优化客户端事务日志
- [#5541](https://github.com/seata/seata/pull/5541) 优化服务器日志输出
- [#5548](https://github.com/seata/seata/pull/5548) 更新过期的 gpg 密钥和发布工作流
- [#5638](https://github.com/seata/seata/pull/5638) 优化：将服务器的事务级别设置为 READ_COMMITTED
- [#5646](https://github.com/seata/seata/pull/5646) 重构 ColumnUtils 和 EscapeHandler
- [#5648](https