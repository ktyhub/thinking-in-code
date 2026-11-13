---
title: "iotdb v2.0.11"
description: "Apache物联网数据库"
---

# iotdb v2.0.11

### iotdb 是什么

Apache物联网数据库

### iotdb v2.0.11 版本更新了什么

## 中断更改
- 此版本将所需的最低 JDK 版本提高到 17。

## 功能和改进

- 元数据：SHOW TIMESERIES 支持按测量名称排序。
- 查询：支持仅包含 SELECT 子句的 SQL 语句。
- Region：支持使用SQL手动修复分区表。
- 视图：支持逻辑视图。
- 元数据：为表模型添加 COUNT DATABASE 语句。
- IoTConsensus：IoTConsensus 接收快照时支持多个目录。
- Region：EXTEND REGION和REMOVE REGION语法支持regionId列表，允许同时处理多个区域。
- 查询：EXPLAIN ANALYZE 支持 JSON 输出格式。
- Mods：加强对涉及mods的查询的内存控制。对于单个大型 GB 级 mods2 文件，内存使用情况也必须是可控的。
- 数据注入：删除数据时，仅向当前表所属的区域组发送请求。
- 协议层：在协议层添加内存控制。
- UDF：向UDF API 添加InternalSession 接口。
- Pipe：修改实时数据定义逻辑。
- 功能：支持后续值填充。
- SQL 子句：GROUP BY 和 ORDER BY 支持在 SELECT 子句中使用 AS 定义的别名。
- 参数配置：支持集群运行时配置热重载。
- 通信加密：支持加密客户端通信的相互验证。
- 查询：支持使用SQL将查询结果写入指定路径的TsFile。
- 高可用性：支持表管理、设备管理、可写视图管理、TTL管理、数据库管理和用户权限的高可用性。
- 客户端：支持 Node.js 客户端。仅支持 2.x 版本。
- Edge Edition：为了方便在内存有限的边缘设备上使用，引入了 Edge Edition，将 ConfigNode 和 DataNode 的总内存使用量限制为 512 MB。对于读取和写入工作负载，目标工作负载约为 10,000 个以 1 Hz 运行的测量值。第一个版本将主要调整某些JVM和默认配置参数；未来的版本可能会继续向更加集成的 DataNode-ConfigNode 架构发展。

## 错误
- 查询：在树和表模型中，查询过滤条件中整数和浮点值之间的比较行为不一致。
- 扩缩容：在缩容验证过程中，监控仪表板上 IoTConsensus 已用内存下的 IoTConsensusQueue 显示负值。
- Load TsFile：当接收端有写权限时，LOAD TSFILE失败，没有该操作的权限，请添加权限SYSTEM，数据不同步。
- SSL：修复 NullPointerException：无法调用“String.contains(java.lang.CharSequence)”，因为“java.lang.Throwable.getMessage()”的返回值为 null。
- SSL：改进了在安全包中启用 SSL 但 CLI 在未指定 SSL 的情况下连接到集群时显示的错误消息，使消息更加明确。
- 集群管理：在Issue 0228验证过程中，遇到一个新问题：集群重启后，有一个节点一直处于Unknown状态，没有产生enjoy日志，说明主线程被阻塞。但该节点仍然可以正常执行压缩。
- 缩放：在缩小过程中，处于添加状态的 DataRegion 的 CompressionRatio 字段在 SHOW REGIONS 中显示负值。
- 区域：为 SHOW REGIONS 结果中的 CompressionRatio 字段保留两位小数。
- 缩放：在缩容期间，重新启动集群后，SHOW REGIONS 中大多数 DataRegion 的 CompressionRatio 字段为 NaN，即使它在重新启动之前有一个值。
- ConfigNode：修复 ConfigNode 线程泄漏。在具有三个副本的 IoTV2 3C3D 部署中，运行覆盖树模型测试用例的 SQL 导致 ConfigNodeRPC-Processor 线程数达到 3,000。集群无法再连接，ConfigNode/DataNode 报告 NullPointerExceptions。
- 查询：修复 CAST(1.1 AS FLOAT) 中的错误：java.lang.UnsupportedOperationException：org.apache.tsfile.read.common.block.column.DoubleColumn。预计手术会成功。
- DataNode：PipeTsFileEpochProgressIndexKeeper 保留了超过 50,000 个 TsFileResource，导致 DataNode 内存不足。在具有两个副本的 IoTV2 3C3D 部署中，在一个 DataNode 停止时执行并发读取、写入和删除；经过 54 小时的测试，一个 DataNode 内存不足，并生成了一个 23 GB OOM 转储，其中 ON_HEAP_MEMORY="20G"。
- 用户管理：并发执行 LIST USER、CREATE USER 和 DROP USER 可能会导致 301：Ratis 请求失败未知。 ConfigNode 日志显示 Caused by: java.util.ConcurrentModificationException: null。
- IoTConsensus：在具有两个副本的 3C3D 部署中，在 DataNode 停止时执行并发读取、写入和删除。一个 DataNode 进程退出并生成一个 25 GB 的转储文件。
- 元数据：禁止在模板测量及其子路径上创建设备。
- 区域：帧大小错误，帧大小 (69670459) 大于保护最大大小 (67108864)，可能会导致查询挂起。系统应该返回适​​当的错误消息。

## 新贡献者
* @potiuk 在 https://github.com/apache/iotdb/pull/17823 中做出了第一个贡献
* @MileaRobertStefan 在 https://github.com/apache/iotdb/pull/17765 中做出了第一个贡献

**完整变更日志**：https://github.com/apache/iotdb/compare/v2.0.10...v2.0.11

---

> 📦 仓库：[apache/iotdb](https://github.com/apache/iotdb) · 🏷️ 版本：`v2.0.11` · 📅 发布：2026-09-11 · [查看英文原版 Release](https://github.com/apache/iotdb/releases/tag/v2.0.11)

*本文由 NextStack 自动化流水线采集并翻译，内容以官方英文原文为准。*
