# iotdb Apache IoTDB 1.3.1

## 功能与改进

- 添加集群脚本，实现一键启动和停止（start-all/stop-all.sh 和 start-all/stop-all.bat）
- 添加一键实例信息收集脚本（collect-info.sh 和 collect-info.bat）
- 新增统计聚合器，包括标准差和方差
- 添加修复 tsfile 数据命令
- 支持为 Fill 子句设置超时阈值，当时间超过阈值时，不填充值
- 简化数据同步的时间范围指定，直接设置开始和结束时间
- 改进系统可观测性（增加集群节点的离散度监控，分布式任务调度框架的可观测性）
- 优化默认日志输出策略
- 增强 Load TsFile 的内存控制，覆盖整个过程
- Rest API（版本 2）增加列类型返回
- 改进查询执行过程
- 会话自动获取所有可用的 DataNodes

## Bug 修复

- 修复按月分组时时间精度不是毫秒时的异常行为
- 修复按月分组时持续时间包含多个单位的异常行为
- 修复在存在 order by 子句时 limit 和 offset 无法下推的 bug
- 修复按月分组 + 按设备对齐 + limit 组合场景下的异常行为
- 修复 IoT 协议同步期间的反序列化错误
- 修复删除时间序列时的并发异常
- 修复在视图序列中按级别分组无法正确执行的问题
- 修复增加选举超时时元数据创建失败的潜在问题

## 新贡献者

- Jgj1006 在 [#11730](https://github.com/apache/iotdb/pull/11730) 做出了他们的首次贡献

**完整变更日志**: [v1.3.0...v1.3.1](https://github.com/apache/iotdb/compare/v1.3.0...v1.3.1)
```