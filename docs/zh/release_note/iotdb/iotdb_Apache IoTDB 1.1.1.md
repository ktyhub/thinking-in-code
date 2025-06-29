# iotdb Apache IoTDB 1.1.1

## 新功能

- [IOTDB-2569](https://issues.apache.org/jira/browse/IOTDB-2569) ZSTD 压缩

## 改进/修复

- [IOTDB-5781](https://issues.apache.org/jira/browse/IOTDB-5781) 将默认策略更改为 SequenceStrategy
- [IOTDB-5780](https://issues.apache.org/jira/browse/IOTDB-5780) 通知用户节点成功移除并且数据已恢复
- [IOTDB-5735](https://issues.apache.org/jira/browse/IOTDB-5735) 添加 distinct 函数到 align by device 的结果不正确
- [IOTDB-5777](https://issues.apache.org/jira/browse/IOTDB-5777) 使用非 root 用户写入数据时，权限认证模块耗时过长
- [IOTDB-5835](https://issues.apache.org/jira/browse/IOTDB-5835) 修复 datanode 重启导致的 wal 累积问题
- [IOTDB-5828](https://issues.apache.org/jira/browse/IOTDB-5828) 优化 metric 模块中某些指标项的实现，防止 Prometheus 拉取超时
- [IOTDB-5813](https://issues.apache.org/jira/browse/IOTDB-5813) ConfigNode 重启错误，因 installSnapshot 失败
- [IOTDB-5657](https://issues.apache.org/jira/browse/IOTDB-5657) last 查询中的 limit 不生效
- [IOTDB-5717](https://issues.apache.org/jira/browse/IOTDB-5717) 使用 limit push-down 和按时间降序查询时结果不正确
- [IOTDB-5722](https://issues.apache.org/jira/browse/IOTDB-5722) PlanVisitor 中默认执行分支错误
- [IOTDB-5784](https://issues.apache.org/jira/browse/IOTDB-5784) 使用 offset push-down 和时间过滤器查询时结果不正确
- [IOTDB-5815](https://issues.apache.org/jira/browse/IOTDB-5815) 使用 UDF 查询时出现 NPE
- [IOTDB-5829](https://issues.apache.org/jira/browse/IOTDB-5829) 带 limit 子句的查询会导致其他并发查询中断
- [IOTDB-5824](https://issues.apache.org/jira/browse/IOTDB-5824) 使用 * 显示设备时无法显示满足条件的设备
- [IOTDB-5831](https://issues.apache.org/jira/browse/IOTDB-5831) 删除数据库不会完全删除磁盘上的文件
- [IOTDB-5818](https://issues.apache.org/jira/browse/IOTDB-5818) Aligned timeseries 的跨空间压缩卡住
- [IOTDB-5859](https://issues.apache.org/jira/browse/IOTDB-5859) 使用 Version 作为第一个排序维度时压缩错误
- [IOTDB-5869](https://issues.apache.org/jira/browse/IOTDB-5869) 修复加载重叠的序列 TsFile
```