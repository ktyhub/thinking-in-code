# iotdb Apache IoTDB 1.3.2
```markdown
## 功能与改进

- 存储模块：提升 insertRecords 接口的写入性能
- 查询模块：新增 Explain Analyze 语句（监控单个 SQL 执行的每个阶段所花费的时间）
- 查询模块：新增 UDAF（用户自定义聚合函数）框架
- 查询模块：新增 MaxBy/MinBy 函数，支持检索最大/最小值及其对应的时间戳
- 查询模块：提升值过滤查询的性能
- 数据同步：路径匹配支持路径模式
- 数据同步：支持元数据同步（包括时间序列及相关属性、权限等）
- 流处理：新增 Alter Pipe 语句，支持 Pipe 任务插件的热更新
- 系统模块：系统数据点统计现在包括通过加载 TsFile 导入的数据统计
- 脚本和工具：新增本地升级备份工具（通过硬链接备份原始数据）
- 脚本和工具：新增导出数据/导入数据脚本，支持以 CSV、TsFile 格式或 SQL 语句导出数据
- 脚本和工具：Windows 环境现在支持通过窗口名称区分 ConfigNode、DataNode 和 Cli

## Bug 修复

- 优化因超时删除数据库时发生 NullPointerException（NPE）的错误信息
- 为 notifyLeaderReady、notifyLeaderChanged 和 procedure worker 添加日志
- 添加文件合并时对现有错误数据的兼容处理
- 修复查询过程中刷新空文件导致的死锁问题
- 修复 Ratis 在读、写和删除操作期间无响应的问题
- 修复加载和合并操作中的并发 Bug
- 修复系统在某些场景下压缩比记录为负数的问题
- 修复合并任务内存估算期间发生的 ConcurrentModificationException 问题
- 修复并发写入、自动创建和删除数据库时可能发生的潜在死锁问题

## 变更内容

- 删除写入内存控制参数
- Pipe：通过在 Pipe 重启后强制启动 PipeHistoricalDataRegionTsFileExtractor 确保至少一次语义
- 将 AbstractCompactionEstimator 文件信息缓存的同步块分离
- Pipe：使用 clusterId 判断目标集群是否为源集群
- 存储引擎：修复因多线程安全问题导致的 wal 删除线程异常
- PBTree：修复死锁并重构写入/更新接口
- 移除 SQL `merge`
- 加载：在成功加载后触发最后刷新时间映射和 tsfile 资源降级
- JDBC：getDouble 添加类型检查
- 移除副本不一致的无限重试逻辑以避免潜在问题
- Pipe：支持在接收器 IP 规范中使用 "sink.host" 和 "connector.host" 键
- 修复 DataNode 重启时 Ratis 查询不重试的问题
- Pipe：支持 alter pipe SQL 的替换和修改模式
- 存储引擎：将 DeviceCache 放入存储引擎的总内存中
- 提升 IT 框架支持重启集群
- 修复参数 dn_multi_dir_strategy 的拼写错误
- 升级 GitHub Action 版本以修复警告
- 引入 UDAF（用户定义聚合函数）
- Pipe：将解析事件逻辑移入 PipeProcessorSubtask 以分离 CPU 密集型和 IO 密集型任务
- DataNodeDevicePathCache 应使用 memtable 的空闲内存
- Pipe：恢复 "Pipe: stop pipe using restarting strategy to unpin the wal's reference count to avoid WAL stacking" 以避免子任务异常处理期间不必要的 pipe 删除
- Pipe：移除 stuck restart 逻辑中的 mayLinkedTsFileCountReachDangerousThreshold 判断
- Pipe：修复处理器在一段时间内遇到内存不足时崩溃的 Bug
- Pipe：减少 pipe 日志并控制日志打印频率
- 修复 MQTTService 中的内存泄漏
- Pipe：模式解析修剪：当模式在数据库以下级别时，如果 tsfiles / tablets 完全匹配模式，则可以跳过解析逻辑
- 升级 org.apache.commons:commons-compress 从 1.21 到 1.26.0
- 升级 ip 从 2.0.0 到 2.0.1 在 /iotdb-connector/grafana-plugin 中
- Pipe：修复因历史提取器取消刷新导致的潜在丢失点 Bug
- 修复使用 'merge' 命令的问题
- Pipe：修复 CN 无法感知 meta sync 中 drop pipe 失败并可能导致不断跳过 drop pipe 的 Bug
- 优化在 `aggregation with align by device` 情况下的分布式计划
- 修复 group by time interval 中的数字溢出问题
- 修复因过滤器和偏移下推导致的合并重叠数据处理中的 Bug
- 引入聚合函数 MinBy
- 添加 Procedure 的恢复 IT，并删除 ProcedureStore
- PBTree：实现用于 MNode 管理的双缓冲容器
- 优化刷新 memtable 检查
- 增强对 ISO_LOCAL_DATE_TIME 时间戳格式的支持
- IT：恢复一些重启 IT 中的更改，以便在重启失败时使错误日志更清晰
- 将 CI 更改为 GitHub CI
- feat(bat)：添加标题并设置格式
- 修复 PBTree.SchemaFile 中的死锁
- 修复 root 权限丢失和授予角色的问题
- 支持在 insert 语句中将时间列放置在任意列索引
- 使 Drop database 超时返回消息更详细
- 修复 VolatileSubtreeIterator 如果新缓冲区中的所有节点都不合格则缺少更新缓冲区的问题
- Pbtree：使用磁盘和缓冲区上的归并排序迭代 MNode
- 添加 FileUtils.moveFileSafe 函数
- 为数据分区分配添加日志
- 修复 IoTDBPreparedStatement 实现 addBatch 功能的问题
- 修正用户、角色和过程文件夹的默认路径
- 在 IoTDBConfig 中缓存 clusterId
- 实现新的计划优化器：PredicatePushDown
- 优化 ConfigNode ConsensusManager 初始化逻辑
- 当 configLeader 存在时不等待重试
- 更快地修复数据
- 升级 org.scala-lang:scala-library 从 2.12.18 到 2.12.19
- 升级 flink.version 从 1.17.0 到 1.17.2
- 添加 show current_timestamp 语句
```