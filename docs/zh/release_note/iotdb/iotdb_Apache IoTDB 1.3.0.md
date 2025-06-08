# iotdb Apache IoTDB 1.3.0
```markdown
## 功能与改进

- 优化权限模块，支持时间序列权限控制
- 优化启动脚本中的堆内存和堆外内存配置
- 计算类型视图时间序列支持 LAST 查询
- 添加管道相关的监控指标
- 将管道中的 'Extractor' 重命名为 'Source'，'Connector' 重命名为 'Sink'
- 支持负时间戳
- 配置文件加载失败时拒绝节点启动
- 将 target_config_node_list 重命名为 seed_config_node
- 将模式模板更改为设备模板
- 为加载功能添加写点指标
- 通过断开的 Thrift 管道进行节点错误检测
- 当时间序列数量达到上限时，提示信息应优先使用设备模板
- 将 storage_query_schema_consensus_free_memory_proportion 重命名为 datanode_memory_proportion
- 修复解释显示问题，打印结果未对齐
- 管道：添加检查逻辑以避免自传输
- 优化 Python 客户端性能
- 在 datanode-env.sh 中添加 HEAPDUMP 配置
- SchemaCache 支持精确驱逐
- 为 dn_rpc_port 添加 SSL 功能

## Bug 修复

- 在目标路径中使用 ` 时，select into 会抛出错误
- 当获取系统配置抛出 NPE 时，DataNode 无法注册到集群
- ConfigNode 注册重试逻辑无效
- 打开调试时打印 FI 会抛出 NPE
- 合并排序完成一个迭代器时间过长
- 修复按年分组时未考虑闰年的问题
- 修复 GC 监控检测在开始时不准确并调整警报阈值的问题
- 显示区域时显示错误的创建时间

## 新贡献者

- [clayburn](https://github.com/clayburn) 在 [#11243](https://github.com/apache/iotdb/pull/11243) 中做出了他们的首次贡献
- [chunshao90](https://github.com/chunshao90) 在 [#11385](https://github.com/apache/iotdb/pull/11385) 中做出了他们的首次贡献

**完整变更日志**: [v1.2.2...v1.3.0](https://github.com/apache/iotdb/compare/v1.2.2...v1.3.0)
```