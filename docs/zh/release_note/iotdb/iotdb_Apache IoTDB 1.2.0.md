# iotdb Apache IoTDB 1.2.0

## 新功能

- [IOTDB-5567](https://issues.apache.org/jira/browse/IOTDB-5567) 添加查询seriesslotid和timeslotid的SQL
- [IOTDB-5631](https://issues.apache.org/jira/browse/IOTDB-5631) 添加内置聚合函数time_duration
- [IOTDB-5636](https://issues.apache.org/jira/browse/IOTDB-5636) 添加内置标量函数round
- [IOTDB-5637](https://issues.apache.org/jira/browse/IOTDB-5637) 添加内置标量函数substr
- [IOTDB-5638](https://issues.apache.org/jira/browse/IOTDB-5638) 支持IoTDB中的case when语法
- [IOTDB-5643](https://issues.apache.org/jira/browse/IOTDB-5643) 添加内置标量函数REPLACE
- [IOTDB-5683](https://issues.apache.org/jira/browse/IOTDB-5683) 支持查询的聚合函数Mode
- [IOTDB-5711](https://issues.apache.org/jira/browse/IOTDB-5711) Python API应支持连接多个节点
- [IOTDB-5752](https://issues.apache.org/jira/browse/IOTDB-5752) Python客户端支持写重定向
- [IOTDB-5765](https://issues.apache.org/jira/browse/IOTDB-5765) 支持Order By Expression
- [IOTDB-5771](https://issues.apache.org/jira/browse/IOTDB-5771) 添加SPRINTZ和RLBE编码器以及LZMA2压缩器
- [IOTDB-5924](https://issues.apache.org/jira/browse/IOTDB-5924) 添加SessionPool删除API
- [IOTDB-5950](https://issues.apache.org/jira/browse/IOTDB-5950) 支持动态模式模板
- [IOTDB-5951](https://issues.apache.org/jira/browse/IOTDB-5951) 支持在路径中包含特定字符串的timeseries/device显示
- [IOTDB-5955](https://issues.apache.org/jira/browse/IOTDB-5955) 支持在Session API中使用模式模板创建timeseries

## 改进

- [IOTDB-5630](https://issues.apache.org/jira/browse/IOTDB-5630) 将函数cast设为内置函数
- [IOTDB-5689](https://issues.apache.org/jira/browse/IOTDB-5689) 在ISourceHandle关闭时关闭Isink
- [IOTDB-5715](https://issues.apache.org/jira/browse/IOTDB-5715) 提高按时间降序查询的性能
- [IOTDB-5763](https://issues.apache.org/jira/browse/IOTDB-5763) 优化INTO操作的内存估算
- [IOTDB-5887](https://issues.apache.org/jira/browse/IOTDB-5887) 优化无通配符的PathPatternTree构建性能
- [IOTDB-5888](https://issues.apache.org/jira/browse/IOTDB-5888) TTL日志未考虑时间戳精度
- [IOTDB-5896](https://issues.apache.org/jira/browse/IOTDB-5896) 执行删除语句失败
- [IOTDB-5908](https://issues.apache.org/jira/browse/IOTDB-5908) 添加更多查询指标
- [IOTDB-5911](https://issues.apache.org/jira/browse/IOTDB-5911) print-iotdb-data-dir工具无法工作
- [IOTDB-5914](https://issues.apache.org/jira/browse/IOTDB-5914) 移除Session中的冗余调试日志
- [IOTDB-5919](https://issues.apache.org/jira/browse/IOTDB-5919) show variables添加变量timestamp_precision
- [IOTDB-5926](https://issues.apache.org/jira/browse/IOTDB-5926) 优化指标实现
- [IOTDB-5929](https://issues.apache.org/jira/browse/IOTDB-5929) 启用DataPartition继承策略
- [IOTDB-5943](https://issues.apache.org/jira/browse/IOTDB-5943) 避免SimpleQueryTerminator在端点为本地地址时进行rpc调用
- [IOTDB-5944](https://issues.apache.org/jira/browse/IOTDB-5944) 使用IoT_consensus时，Follower不需要更新最后的缓存
- [IOTDB-5945](https://issues.apache.org/jira/browse/IOTDB-5945) 添加缓存以避免在写入过程中初始化重复的设备ID对象
- [IOTDB-5946](https://issues.apache.org/jira/browse/IOTDB-5946) 优化Go客户端中tablet的实现
- [IOTDB-5949](https://issues.apache.org/jira/browse/IOTDB-5949) 支持带数据类型过滤器的timeseries显示
- [IOTDB-5952](https://issues.apache.org/jira/browse/IOTDB-5952) 支持DataNodeSchemaCache中的FIFO策略
- [IOTDB-6022](https://issues.apache.org/jira/browse/IOTDB-6022) 在高并发写入多副本iotconsensus时，WAL堆积

## Bug修复

- [IOTDB-5604](https://issues.apache.org/jira/browse/IOTDB-5604) 执行Agg + align by device查询时未分配DataRegion时出现NPE
- [IOTDB-5619](https://issues.apache.org/jira/browse/IOTDB-5619) 按标签分组查询时出现NPE
- [IOTDB-5644](https://issues.apache.org/jira/browse/IOTDB-5644) 查询分析后没有选择表达式时出现意外结果
- [IOTDB-5657](https://issues.apache.org/jira/browse/IOTDB-5657) 在最后查询中Limit不起作用
- [IOTDB-5700](https://issues.apache.org/jira/browse/IOTDB-5700) UDF查询在查询结束后未清理临时文件
- [IOTDB-5716](https://issues.apache.org/jira/browse/IOTDB-5716) pipeline consumeOneByOneOperator时依赖错误
- [IOTDB-5717](https://issues.apache.org/jira/browse/IOTDB-5717) 在查询时使用limit push-down和按时间降序时结果不正确
- [IOTDB-5722](https://issues.apache.org/jira/browse/IOTDB-5722) PlanVisitor中的默认执行分支错误
- [IOTDB-5735](https://issues.apache.org/jira/browse/IOTDB-5735) 在align by device中添加distinct函数的结果不正确
- [IOTDB-5755](https://issues.apache.org/jira/browse/IOTDB-5755) 修复123w不能用作标识符的问题
- [IOTDB-5756](https://issues.apache.org/jira/browse/IOTDB-5756) where谓词为NotEqualExpression且其中一个子表达式不存在时出现NPE
- [IOTDB-5757](https://issues.apache.org/jira/browse/IOTDB-5757) 在where中使用like 's3 || false'时不支持异常，即使s3的类型为Boolean
- [IOTDB-5760](https://issues.apache.org/jira/browse/IOTDB-5760) 查询因无内存而被阻塞
- [IOTDB-5764](https://issues.apache.org/jira/browse/IOTDB-5764) 当FROM子句包含多个路径后缀时无法成功指定别名
- [IOTDB-5769](https://issues.apache.org/jira/browse/IOTDB-5769) 在某些特殊情况下Offset不起作用
- [IOTDB-5774](https://issues.apache.org/jira/browse/IOTDB-5774) 不支持路径节点以通配符开头或结尾进行模糊匹配的语法
- [IOTDB-5784](https://issues.apache.org/jira/browse/IOTDB-5784) 在查询时使用offset push-down和时间过滤器时结果不正确
- [IOTDB-5815](https://issues.apache.org/jira/browse/IOTDB-5815) 使用UDF查询时出现NPE
- [IOTDB-5837](https://issues.apache.org/jira/browse/IOTDB-5837) 使用占位符进行select into时出现异常
- [IOTDB-5851](https://issues.apache.org/jira/browse/IOTDB-5851) 在show devices查询中使用limit子句会抛出NPE
- [IOTDB-585