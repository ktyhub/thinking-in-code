# pulsar v3.2.1

### Broker

- 持续为 REST API 添加细粒度授权 [#22202](https://github.com/apache/pulsar/pull/22202)
- 为保留管理 API 添加细粒度授权 [#22163](https://github.com/apache/pulsar/pull/22163)
- 删除分区主题失败时打印非日志信息 [#22153](https://github.com/apache/pulsar/pull/22153)
- 修复在启用事务和可扩展负载管理器时代理无法启动的问题 [#22139](https://github.com/apache/pulsar/pull/22139)
- 在分配和释放时不等待源代理返回 getOwnerAsync，并在角色初始化期间处理角色变更 [#22112](https://github.com/apache/pulsar/pull/22112)
- 发送到系统主题时缓存内部写入器 [#22099](https://github.com/apache/pulsar/pull/22099)
- 启用批处理导致由于确认和交付并发而出现负未确认消息 [#22090](https://github.com/apache/pulsar/pull/22090)
- 支持运行 gid != 0 的 Docker 容器 [#22081](https://github.com/apache/pulsar/pull/22081)
- 添加错误日志以排查启动代理注册表失败的问题 [#22065](https://github.com/apache/pulsar/pull/22065)
- 显式设置 ServiceUnitStateChannel 主题压缩阈值，改进 getOwnerAsync，并修复其他错误 [#22064](https://github.com/apache/pulsar/pull/22064)
- 修复使用以数字结尾的消费者名称时的哈希冲突 [#22053](https://github.com/apache/pulsar/pull/22053)
- 在 apply-config-from-env.py 脚本中记录日志前清理值 [#22044](https://github.com/apache/pulsar/pull/22044)
- 修复无法使用后缀匹配正则表达式订阅分区主题的问题 [#22025](https://github.com/apache/pulsar/pull/22025)
- 不保留系统主题中的数据 [#22022](https://github.com/apache/pulsar/pull/22022)
- 订阅卡住是由于调用 Admin API analyzeSubscriptionBacklog [#22019](https://github.com/apache/pulsar/pull/22019)
- 当主题元数据不存在且不期望创建新元数据时，不尝试打开 ML [#22004](https://github.com/apache/pulsar/pull/22004)
- 在调用 Admin API 并且主题不存在时响应 HTTP-404 时不打印错误日志 [#21995](https://github.com/apache/pulsar/pull/21995)
- 如果由于 LockBusyException 导致查找失败，不关闭套接字 [#21993](https://github.com/apache/pulsar/pull/21993)
- 支持在 PersistentMessageExpiryMonitor 中动态设置 autoSkipNonRecoverableData [#21991](https://github.com/apache/pulsar/pull/21991)
- 为健康检查读取添加超时 [#21990](https://github.com/apache/pulsar/pull/21990)
- 修复删除具有多个分区和模式的分区主题时的模式删除错误 [#21977](https://github.com/apache/pulsar/pull/21977)
- 如果所有者不活动（ExtensibleLoadManager），则推迟所有权检查 [#21811](https://github.com/apache/pulsar/pull/21811)
- 修复在过期消息时压缩/复制数据丢失的问题 [#21865](https://github.com/apache/pulsar/pull/21865)
- 如果未配置，则跳过加载 NAR 包 [#21867](https://github.com/apache/pulsar/pull/21867)
- 改进 NamespaceUnloadStrategy 错误消息 [#21880](https://github.com/apache/pulsar/pull/21880)
- 不基于不活动时间滚动空的账本 [#21893](https://github.com/apache/pulsar/pull/21893)
- 根据账本关闭时间过期消息以避免客户端时钟偏差 [#21940](https://github.com/apache/pulsar/pull/21940)
- 修复在读取禁用读取压缩模式的压缩主题时读者卡住的问题 [#21969](https://github.com/apache/pulsar/pull/21969)

### Client

- 修复多主题消费者在 seek 后可能接收旧消息的问题 [#21945](https://github.com/apache/pulsar/pull/21945)
- 修复在使用 pulsar-client:3.0.x 和 jackson-annotations 2.12.0 之前版本时 ConsumerBuilderImpl#subscribe 静默卡住的问题 [#21985](https://github.com/apache/pulsar/pull/21985)

### Pulsar IO 和 Pulsar Functions

- [FN] 为连接器和函数包 URL 源添加配置 [#22184](https://github.com/apache/pulsar/pull/22184)
- [FN] 为一些 log.error 添加缺失的 "exception" 参数 [#22140](https://github.com/apache/pulsar/pull/22140)
- [FN] 防止 putstate 使用空值 [#22127](https://github.com/apache/pulsar/pull/22127)
- [FN] 通过延迟加载和直接 zip/字节码访问优化函数工作器启动 [#22122](https://github.com/apache/pulsar/pull/22122)
- [FN] 防止通过 API 调用为不存在的实例创建状态表 [#22107](https://github.com/apache/pulsar/pull/22107)
- [FN] 使用统一的 PackageManagement 服务下载包 [#21955](https://github.com/apache/pulsar/pull/21955)

### CLI

- [Admin] 向管理员公开卸载阈值（以秒为单位） [#22101](https://github.com/apache/pulsar/pull/22101)
- [CLI] 修复在使用 -T 指定大小时 set-retention 的错误 [#22150](https://github.com/apache/pulsar/pull/22150)
- [CLI] 当 --bundle 为空时，设置 --destinationBroker 时出错 [#21879](https://github.com/apache/pulsar/pull/21879)

### 其他

- [MISC] 添加输入时间值检查 [#22023](https://github.com/apache/pulsar/pull/22023)
- [Proxy] 添加对不支持多 URI 的 brokerServiceURL 的检查 [#21972](https://github.com/apache/pulsar/pull/21972)
- [TX] 通过托管账本获取先前位置 [#22024](https://github.com/apache/pulsar/pull/22024)
- [ML] 修复删除账本以使其失效的重试机制 [#21869](https://github.com/apache/pulsar/pull/21869)
- [ML] 在从账本读取条目之前过滤掉已删除的条目 [#21739](https://github.com/apache/pulsar/pull/21739)

### 库更新

- 升级 Jetty 到 9.4.54.v20240208 以解决 [CVE-2024-22201](https://github.com/advisories/GHSA-rggv-cv7r-mw98) [#22144](https://github.com/apache/pulsar/pull/22144)
- 升级 commons-compress 到 1.26.0 [#22086](https://github.com/apache/pulsar/pull/22086)
- 升级 BookKeeper 依赖到 4.16.4 [#21983](https://github.com/apache/pulsar/pull/21983)

> 特别感谢以下贡献者对 Pulsar 3.2.1 的贡献：mattisonchao, lhotari, poorbarcode, Technoboy-, jiangpengcheng, dragosvictor, freeznet, liangyepianzhou, heesung-sn, zymap, massakam, thetumbled, BewareMyPower, chenhongSZ, Shawyeok, hangc0276, 315157973, coderzc, dao-jun。
```