# iotdb Apache IoTDB 1.1.0

## 新特性

- [IOTDB-4572](https://issues.apache.org/jira/browse/IOTDB-4572) 支持按设备对齐时按时间排序
- [IOTDB-4816](https://issues.apache.org/jira/browse/IOTDB-4816) 支持显示查询命令
- [IOTDB-4817](https://issues.apache.org/jira/browse/IOTDB-4817) 支持终止查询命令
- [IOTDB-5077](https://issues.apache.org/jira/browse/IOTDB-5077) 支持在SHOW REGIONS中使用新命令格式
- [IOTDB-5108](https://issues.apache.org/jira/browse/IOTDB-5108) 支持区域迁移
- [IOTDB-5202](https://issues.apache.org/jira/browse/IOTDB-5202) 支持显示特定数据库的区域
- [IOTDB-5282](https://issues.apache.org/jira/browse/IOTDB-5282) 添加SQL显示变量，可以显示当前集群变量
- [IOTDB-5341](https://issues.apache.org/jira/browse/IOTDB-5341) 支持在聚合查询中按变化分组
- [IOTDB-5372](https://issues.apache.org/jira/browse/IOTDB-5372) 支持在SELECT INTO中进行数据类型转换
- [IOTDB-5382](https://issues.apache.org/jira/browse/IOTDB-5382) 支持在IoTDB中作为内置标量函数的DIFF
- [IOTDB-5393](https://issues.apache.org/jira/browse/IOTDB-5393) 在执行SHOW REGIONS时显示区域创建时间
- [IOTDB-5456](https://issues.apache.org/jira/browse/IOTDB-5456) 实现内置聚合函数COUNT_IF
- [IOTDB-5515](https://issues.apache.org/jira/browse/IOTDB-5515) 支持在聚合查询中按条件分组
- [IOTDB-5555](https://issues.apache.org/jira/browse/IOTDB-5555) 允许在datanode-engine.properties中修改dn_rpc_port和dn_rpc_address
- 支持Docker部署
- 在SHOW REGIONS中将SeriesSlotId重命名为SeriesSlotNum

## 改进

- [IOTDB-4497](https://issues.apache.org/jira/browse/IOTDB-4497) 改进NodeStatus定义
- [IOTDB-5066](https://issues.apache.org/jira/browse/IOTDB-5066) 升级GetSlots SQL
- [IOTDB-5161](https://issues.apache.org/jira/browse/IOTDB-5161) 添加WHERE和HAVING子句的输出类型检查，并拒绝返回类型不是布尔值的表达式出现在WHERE和HAVING子句中
- [IOTDB-5185](https://issues.apache.org/jira/browse/IOTDB-5185) 修复了在IoTConsensus中未删除旧快照的问题
- [IOTDB-5287](https://issues.apache.org/jira/browse/IOTDB-5287) 向RegionGroup添加“Discouraged”状态
- [IOTDB-5449](https://issues.apache.org/jira/browse/IOTDB-5449) 在查询队列已满时等待查询资源，而不是直接抛出异常
- 将STARTUP_RETRY_INTERVAL_IN_MS从30秒改为3秒

## Bug修复

- [IOTDB-4684](https://issues.apache.org/jira/browse/IOTDB-4684) 修复了具有相同名称但不同对齐属性的设备被压缩到错误的对齐属性中的问题
- [IOTDB-5061](https://issues.apache.org/jira/browse/IOTDB-5061) 添加在创建快照时的初始化状态检查
- [IOTDB-5090](https://issues.apache.org/jira/browse/IOTDB-5090) 修复了执行stop-datanode.sh时的NPE问题
- [IOTDB-5112](https://issues.apache.org/jira/browse/IOTDB-5112) 修复了在低负载或重启期间IoTConsensus同步卡住的问题
- [IOTDB-5126](https://issues.apache.org/jira/browse/IOTDB-5126) 修复了在注册时使用主机名但SHOW REGIONS显示IP的问题
- [IOTDB-5165](https://issues.apache.org/jira/browse/IOTDB-5165) 修复了资源降级到FileTimeIndex时无法通过压缩验证的问题
- [IOTDB-5170](https://issues.apache.org/jira/browse/IOTDB-5170) 修复了在Windows平台上执行stop-confignode.bat时数据节点关闭的问题
- [IOTDB-5199](https://issues.apache.org/jira/browse/IOTDB-5199) 修复了StorageExector在加载过程中出现的NPE问题
- [IOTDB-5216](https://issues.apache.org/jira/browse/IOTDB-5216) 修复了在对齐的最后查询中按时间序列排序无效的问题
- [IOTDB-5228](https://issues.apache.org/jira/browse/IOTDB-5228) 修复了在创建TsFileSequenceReader实例时文件不存在的NPE问题
- [IOTDB-5240](https://issues.apache.org/jira/browse/IOTDB-5240) 修复了重启后模式模板时间序列读写错误的问题
- [IOTDB-5245](https://issues.apache.org/jira/browse/IOTDB-5245) 修复了最后查询中数据不完整的问题
- [IOTDB-5277](https://issues.apache.org/jira/browse/IOTDB-5277) 修复了SchemaRegion加载快照时数据节点重启失败的问题
- [IOTDB-5278](https://issues.apache.org/jira/browse/IOTDB-5278) 修复了JDBC驱动程序无法连接到dbeaver的问题
- [IOTDB-5285](https://issues.apache.org/jira/browse/IOTDB-5285) 修复了在使用不同时间分区配置重启时的TimePartition错误
- [IOTDB-5269](https://issues.apache.org/jira/browse/IOTDB-5269) 修复了执行`delete from` SQL后应删除的设备数据错误的问题
- [IOTDB-5324](https://issues.apache.org/jira/browse/IOTDB-5324) 修复了在数据复制因子为1的情况下区域迁移后目标数据节点中的WAL无法删除的问题
- [IOTDB-5389](https://issues.apache.org/jira/browse/IOTDB-5389) 修复了在IoTConsensus中禁用WAL模式时导致数据节点启动失败的问题
- [IOTDB-5414](https://issues.apache.org/jira/browse/IOTDB-5414) 修复了带有别名的时间序列删除成功但仍可通过别名查询的问题
- [IOTDB-5426](https://issues.apache.org/jira/browse/IOTDB-5426) 修复了在启用定时刷新时无法触发顺序文件刷新的问题
- [IOTDB-5441](https://issues.apache.org/jira/browse/IOTDB-5441) 修复了获取不在模板中的模式时出现的NPE问题
- [IOTDB-5469](https://issues.apache.org/jira/browse/IOTDB-5469) 修复了成功创建带有反引号字符的模板后获取模式信息失败的问题
- [IOTDB-5474](https://issues.apache.org/jira/browse/IOTDB-5474) 修复了使用级别计数节点的错误
- [IOTDB-5480](https://issues.apache.org/jira/browse/IOTDB-5480) 修复了在单副本下IoTConsensus同步滞后可能为负的问题
- [IOTDB-5488](https://issues.apache.org/jira/browse/IOTDB-5488) 支持将系统设置为本地只读
- [IOTDB-5492](https://issues.apache.org/jira/browse/IOTDB-5492) 在恢复系统时跳过损坏的tsfile
- [IOTDB-5512](https://issues.apache.org/jira/browse/IOTDB-5512) 修复了在重启时IoTConsensus可能重复发送某些日志的问题
- [IOTDB-5516](https://issues.apache.org/jira/browse/IOTDB-5516) 修复了在删除所有数据库后创建时间序列失败的问题
- [IOTDB-5526](https://issues.apache.org/jira/browse/IOTDB-5526) 修复了属于激活模板的设备删除时间序列失败的问题
- [IOTDB-5548](https://issues.apache.org