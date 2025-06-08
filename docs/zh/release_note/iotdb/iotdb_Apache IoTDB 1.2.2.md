# iotdb Apache IoTDB 1.2.2
```markdown
## 功能与改进

- [IOTDB-6029](https://issues.apache.org/jira/browse/IOTDB-6029) 实现 flink-sql-iotdb-connector
- [IOTDB-6084](https://issues.apache.org/jira/browse/IOTDB-6084) Pipe: 支持 connector-v1 中的 node-urls
- [IOTDB-6103](https://issues.apache.org/jira/browse/IOTDB-6103) 添加 count_time 聚合功能
- [IOTDB-6112](https://issues.apache.org/jira/browse/IOTDB-6112) Limit & Offset 下推在存在时间过滤器时不起作用
- [IOTDB-6115](https://issues.apache.org/jira/browse/IOTDB-6115) Limit & Offset 下推在存在空值时不起作用
- [IOTDB-6120](https://issues.apache.org/jira/browse/IOTDB-6120) 在按时间分组的查询中下推 limit/offset
- [IOTDB-6129](https://issues.apache.org/jira/browse/IOTDB-6129) ConfigNode 重启时无需依赖 Seed-ConfigNode
- [IOTDB-6131](https://issues.apache.org/jira/browse/IOTDB-6131) Iotdb rest 服务支持 insertRecords 功能
- [IOTDB-6151](https://issues.apache.org/jira/browse/IOTDB-6151) 将 DataNode 的 system.properties 移动到上级目录
- [IOTDB-6173](https://issues.apache.org/jira/browse/IOTDB-6173) 将 INT32 和 INT64 的默认编码器从 RLE 改为 TS_2DIFF
- 调整默认的 thrift 超时参数为 60 秒
- 加速删除执行

## Bug 修复

- [IOTDB-6064](https://issues.apache.org/jira/browse/IOTDB-6064) Pipe: 修复在并发回滚过程中出现的死锁问题
- [IOTDB-6081](https://issues.apache.org/jira/browse/IOTDB-6081) Pipe: 在实时模式设置为 log 时使用 HybridExtractor 代替 LogExtractor，以避免在高插入负载下出现 OOM
- [IOTDB-6145](https://issues.apache.org/jira/browse/IOTDB-6145) Pipe: 在 pipe 被删除后无法释放 TsFile 或 WAL 资源
- [IOTDB-6146](https://issues.apache.org/jira/browse/IOTDB-6146) Pipe: 在创建和删除 1000+ pipes 后无法传输数据
- [IOTDB-6082](https://issues.apache.org/jira/browse/IOTDB-6082) 改进磁盘空间指标
- [IOTDB-6104](https://issues.apache.org/jira/browse/IOTDB-6104) udf 查询结束后 tmp 目录不会被清理
- [IOTDB-6119](https://issues.apache.org/jira/browse/IOTDB-6119) 添加 ConfigNode 领导服务检查
- [IOTDB-6125](https://issues.apache.org/jira/browse/IOTDB-6125) 修复在插入大批量数据时 DataPartition 分配的 bug
- [IOTDB-6127](https://issues.apache.org/jira/browse/IOTDB-6127) Pipe: 处理器阶段的缓冲事件无法被连接器消费
- [IOTDB-6132](https://issues.apache.org/jira/browse/IOTDB-6132) CrossSpaceCompaction: 跨空间压缩任务的估计内存大小过大
- [IOTDB-6133](https://issues.apache.org/jira/browse/IOTDB-6133) 在无序 InnerSpaceCompactionTask 中出现 NullPointerException
- [IOTDB-6148](https://issues.apache.org/jira/browse/IOTDB-6148) Pipe: 修复一些未提交进度可能被报告的 bug
- [IOTDB-6156](https://issues.apache.org/jira/browse/IOTDB-6156) 修复 IoTConsensus 中 Thrift AsyncServer 的 TConfiguration 无效问题
- [IOTDB-6164](https://issues.apache.org/jira/browse/IOTDB-6164) 可以通过 rest api 创建非法路径
- 修复由于磁盘已满导致的 datanode 状态为只读的问题
- 修复在插入大批量数据时 DataPartition 分配的 bug
- 修复刷新点统计
- 修复找不到 SchemaFileSketchTool 的问题
- 重构 WalNode 中的 DeleteOutdatedFileTask
- 为 FastCompactionPerformer 添加压缩和编码类型检查
- 为对齐的页面读取器添加惰性页面读取器，以避免在读取对齐时间序列的行时消耗大量内存
- Pipe: 使用 PipeTaskCoordinatorLock 代替 ReentrantLock 进行多线程同步
- Pipe: 修复由于数据节点异步请求永远等待响应导致的管道过程卡住问题
- Pipe: 修复系统重启后 HybridProgressIndex.updateToMinimumIsAfterProgressIndex 出现的 NPE
- Pipe: 修复管道协调器死锁导致的 CN 选举超时
- Pipe: 提高 10000+ pipes 的性能
- RATIS-1873. 移除不成立的 RetryCache 断言

**完整更新日志**: [v1.2.1...v1.2.2](https://github.com/apache/iotdb/compare/v1.2.1...v1.2.2)
```