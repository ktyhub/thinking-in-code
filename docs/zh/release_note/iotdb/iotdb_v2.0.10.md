---
title: "iotdb v2.0.10"
description: "Apache物联网数据库"
---

# iotdb v2.0.10

### iotdb 是什么

Apache物联网数据库

### iotdb v2.0.10 版本更新了什么

## 功能和改进

- 数据查询：支持schema级和表级存储空间统计
- 数据查询：增加DEBUG SQL能力，优化Explain Analyze结果集
- 数据查询：支持表模型中的集合运算（UNION/INTERSECT/EXCEPT）和公共表表达式（CTE）
- 数据查询：为表模型添加IF标量函数、二元函数和APPROX_PERCENTILE聚合函数
- 数据查询：优化showquery命令的显示字段，新增三个列：发起查询的客户端IP、超时阈值、总请求等待延迟
- 存储管理：提供C语言驱动SDK接口，包括参数绑定、多节点切换自动故障转移等容错能力
- 系统管理：增加手动触发节点负载均衡的功能
- 系统管理：添加删除datanode操作的进度查询功能
- 系统管理：引入show configuration语句查看集群配置信息
- 系统管理：添加慢写请求数量统计
- AI管理：添加两个内置模型：Moirai2和Toto
- AI管理：允许AINode管理同一model_type下的多个模型
- AI管理：支持加载内置模型进行CPU推理，推理过程隔离

## 错误

- 修复单节点 ConfigNode 发生 Leader 切换时分区表丢失的问题
- 修复通过设置配置传递到单个 DataNode 的配置意外地在所有其他 DataNode 上生效的错误
- 修复了树模型中跨多个设备的仅限超时查询时，reservedSize 偶尔会连续累积，从而在达到最大容量限制后触发查询错误的问题
- 修复树路径完全由数字字符组成时树模型到表转换逻辑中的解析错误
- 修正root.db本身是设备时show devices root.db.**的异常输出，使其正确显示root.db
- 修复客户端保持连接打开但未完全消耗所有结果集时终止查询和查询超时机制失败的问题
- 修复接收端属性字段为空导致数组索引越界错误，阻塞数据同步管道
- 修复C#客户端连接池泄漏异常
- 修复在 DataNode 服务器上 dn_rpc_address 配置为 0.0.0.0 时启用写重定向时 C++ 客户端中发生的异常
- 修复加载操作期间删除标记（Deletions）异常重复广播的问题
- 修复实时数据同步场景下插入空字段的行无法同步到接收方的问题
- 修复同步接收方TTL过期数据乱序的幂等性逻辑不正确，导致重复同步过期数据
- 修复全数据Pipe任务拆分历史Pipe无法手动配置enable-send-tsfile-limit参数的问题
- 修复同步作业中单个子任务内存不足触发Pipe临时停止的问题
- 修复回写接收器模型中修改源或接收器的用户名/密码会生成错误日志并阻止接收器端接收数据的问题
- 修复阻止非 root 用户停止 AINode 进程的权限问题
- 缓解在 CPU 上运行的模型长时间连续推理期间容易发生的内存泄漏


**完整变更日志**：https://github.com/apache/iotdb/compare/v2.0.8...v2.0.10

---

> 📦 仓库：[apache/iotdb](https://github.com/apache/iotdb) · 🏷️ 版本：`v2.0.10` · 📅 发布：2026-07-04 · [查看英文原版 Release](https://github.com/apache/iotdb/releases/tag/v2.0.10)

*本文由 NextStack 自动化流水线采集并翻译，内容以官方英文原文为准。*
