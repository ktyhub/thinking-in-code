# iotdb Apache IoTDB 1.2.1
```markdown
## 功能与改进

- [IOTDB-5557](https://issues.apache.org/jira/browse/IOTDB-5557) 元数据查询结果不一致
- [IOTDB-5997](https://issues.apache.org/jira/browse/IOTDB-5997) 提高ConfigNode PartitionInfo加载快照的效率
- [IOTDB-6019](https://issues.apache.org/jira/browse/IOTDB-6019) 修复最后查询的并发更新问题
- [IOTDB-6036](https://issues.apache.org/jira/browse/IOTDB-6036) mods文件过大，导致查询非常慢甚至出现OOM问题
- [IOTDB-6055](https://issues.apache.org/jira/browse/IOTDB-6055) 启用因严重异常而被ConfigNode停止的管道自动重启
- [IOTDB-6066](https://issues.apache.org/jira/browse/IOTDB-6066) 添加ConfigNode时间槽指标
- [IOTDB-6073](https://issues.apache.org/jira/browse/IOTDB-6073) 添加ClientManager指标
- [IOTDB-6077](https://issues.apache.org/jira/browse/IOTDB-6077) 添加强制停止功能
- [IOTDB-6079](https://issues.apache.org/jira/browse/IOTDB-6079) 集群计算资源平衡
- [IOTDB-6082](https://issues.apache.org/jira/browse/IOTDB-6082) 改进磁盘空间指标
- [IOTDB-6087](https://issues.apache.org/jira/browse/IOTDB-6087) 实现Mods读取的流接口
- [IOTDB-6090](https://issues.apache.org/jira/browse/IOTDB-6090) 在内部空间压缩中添加内存估算器
- [IOTDB-6092](https://issues.apache.org/jira/browse/IOTDB-6092) 将mods文件纳入跨空间压缩任务的内存估算
- [IOTDB-6093](https://issues.apache.org/jira/browse/IOTDB-6093) 添加多种压缩后的验证方法
- [IOTDB-6106](https://issues.apache.org/jira/browse/IOTDB-6106) 修复thrift asyncClient中的超时参数无效问题
- [IOTDB-6108](https://issues.apache.org/jira/browse/IOTDB-6108) AlignedTVList内存计算不准确

## Bug修复

- [IOTDB-5855](https://issues.apache.org/jira/browse/IOTDB-5855) DataRegion领导者分布与DataRegion分布相同
- [IOTDB-5860](https://issues.apache.org/jira/browse/IOTDB-5860) 文件总数错误
- [IOTDB-5996](https://issues.apache.org/jira/browse/IOTDB-5996) 显示查询的时间显示不正确
- [IOTDB-6057](https://issues.apache.org/jira/browse/IOTDB-6057) 解决从1.1.x到1.2.0的兼容性问题
- [IOTDB-6065](https://issues.apache.org/jira/browse/IOTDB-6065) 在SchemaCacheEntry的内存估算中考虑LastCacheContainer
- [IOTDB-6074](https://issues.apache.org/jira/browse/IOTDB-6074) 在TagManager创建快照时忽略错误消息
- [IOTDB-6075](https://issues.apache.org/jira/browse/IOTDB-6075) 管道：不同tsfile加载操作同时修改同一tsfile时的文件资源竞争
- [IOTDB-6076](https://issues.apache.org/jira/browse/IOTDB-6076) 添加重复检查功能
- [IOTDB-6078](https://issues.apache.org/jira/browse/IOTDB-6078) 修复timeChunk默认压缩类型
- [IOTDB-6089](https://issues.apache.org/jira/browse/IOTDB-6089) 改进管道心跳的锁行为
- [IOTDB-6091](https://issues.apache.org/jira/browse/IOTDB-6091) 为FastCompactionPerformer添加压缩和编码类型检查
- [IOTDB-6094](https://issues.apache.org/jira/browse/IOTDB-6094) 加载：修复构建tsFileResource的bug
- [IOTDB-6095](https://issues.apache.org/jira/browse/IOTDB-6095) 序列空间中的tsfiles可能由于LastFlushTime bug而相互重叠
- [IOTDB-6096](https://issues.apache.org/jira/browse/IOTDB-6096) M4遇到null时将输出零
- [IOTDB-6097](https://issues.apache.org/jira/browse/IOTDB-6097) 管道订阅运行模式可能导致OOM
- [IOTDB-6098](https://issues.apache.org/jira/browse/IOTDB-6098) 写入对齐时间序列时的刷新错误
- [IOTDB-6100](https://issues.apache.org/jira/browse/IOTDB-6100) 管道：修复在混合模式下运行会导致wal无法删除和一些管道数据丢失的问题
- [IOTDB-6105](https://issues.apache.org/jira/browse/IOTDB-6105) 加载：分析tsfile时的NPE

## 新贡献者

- [ZhangChaoming](https://github.com/ZhangChaoming) 在[#10152](https://github.com/apache/iotdb/pull/10152)中做出了他们的首次贡献
- [qiuyluo](https://github.com/qiuyluo) 在[#10422](https://github.com/apache/iotdb/pull/10422)中做出了他们的首次贡献

**完整变更日志**: [v1.2.0...v1.2.1](https://github.com/apache/iotdb/compare/v1.2.0...v1.2.1)
```