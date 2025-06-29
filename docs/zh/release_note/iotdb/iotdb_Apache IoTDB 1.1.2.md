# iotdb Apache IoTDB 1.1.2

## 新功能

- [IOTDB-5919](https://issues.apache.org/jira/browse/IOTDB-5919) 显示变量添加变量 `timestamp_precision`
- 添加 Python `SessionPool`

## 改进/修复

- [IOTDB-5901](https://issues.apache.org/jira/browse/IOTDB-5901) 加载：加载没有数据的 tsfile 会抛出 NPE
- [IOTDB-5903](https://issues.apache.org/jira/browse/IOTDB-5903) 修复当只有无序数据时无法选择任何内部空间压缩任务的问题
- [IOTDB-5878](https://issues.apache.org/jira/browse/IOTDB-5878) 允许 ratis-client 在 gRPC IO 不可用时重试
- [IOTDB-5939](https://issues.apache.org/jira/browse/IOTDB-5939) 修正刷新任务超时检测线程
- [IOTDB-5905](https://issues.apache.org/jira/browse/IOTDB-5905) 修复某些场景下刷新后丢失对齐时间序列数据点的问题
- [IOTDB-5963](https://issues.apache.org/jira/browse/IOTDB-5963) 确保被内存阻塞的 TsBlock 在下一个由根操作符返回的 TsBlock 之前被加入队列
- [IOTDB-5819](https://issues.apache.org/jira/browse/IOTDB-5819) 修复启动网络指标时的 NPE 问题
- [IOTDB-6023](https://issues.apache.org/jira/browse/IOTDB-6023) 管道：修复处理空值块时加载 tsfile 错误
- [IOTDB-5971](https://issues.apache.org/jira/browse/IOTDB-5971) 修复 iotdb 报告中的潜在引号问题
- [IOTDB-5993](https://issues.apache.org/jira/browse/IOTDB-5993) ConfigNode 领导者变更导致 getOrCreateDataPartition 方法响应中缺少一些 DataPartition 分配结果
- [IOTDB-5910](https://issues.apache.org/jira/browse/IOTDB-5910) 修复在中止压缩时压缩调度线程池未关闭的问题
- [IOTDB-6056](https://issues.apache.org/jira/browse/IOTDB-6056) 管道：加载包含空页面的 tsfile 失败（加载时发生 NPE）
- [IOTDB-5916](https://issues.apache.org/jira/browse/IOTDB-5916) 修复在压缩选择期间删除文件时的异常
- [IOTDB-5896](https://issues.apache.org/jira/browse/IOTDB-5896) 修复在 WAL 与对齐二进制结合时拍摄快照的 NPE 问题
- [IOTDB-5929](https://issues.apache.org/jira/browse/IOTDB-5929) 启用 DataPartition 继承策略
- [IOTDB-5934](https://issues.apache.org/jira/browse/IOTDB-5934) 优化集群分区策略
- [IOTDB-5926](https://issues.apache.org/jira/browse/IOTDB-5926) 移除计时器中无用的 Rater
- [IOTDB-6030](https://issues.apache.org/jira/browse/IOTDB-6030) 提高 ConfigNode PartitionInfo 拍摄快照的效率
- [IOTDB-5997](https://issues.apache.org/jira/browse/IOTDB-5997) 提高 ConfigNode PartitionInfo 加载快照的效率
- 修复在 MemoryPool 中释放内存时的潜在死锁问题
- 在所有驱动程序关闭后释放 FI 资源
- 将默认并行度设置回 CPU 数量
- 允许在集群模式下使用 SequenceStrategy 和 MaxDiskUsableSpaceFirstStrategy
- 修复指标模块中无效时的 NPE 异常
- 修复 ns 时间精度下 CQ 不生效的问题
- 修复存储引擎内存配置初始化问题
- 修复与模板相关的模式查询
- 在 start-datanode.bat 中添加默认字符集设置并在启动时打印默认字符集
- 修复在顺序工作内存表中删除设备后 TsfileResource 错误
- 加载 TsFile 错误：在加载过程中未检查本地加载的 tsfile 数据是否在相同的时间分区内 & 加载包含空值块的 tsfile 时 LoadTsFilePieceNode 错误
- 修复重启 DataNode 后别名查询失败的问题
```