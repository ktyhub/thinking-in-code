---
title: "iotdb v2.0.8"
description: "Apache物联网数据库"
summary: "数据查询：新增可用DataNode节点列表显示；数据查询：表模型中新增系统表，用于统计查询延迟；数据查询：Python SessionDataset支持将TsBlock转换为DataFrame并批量返回DataFrame；存储管理：支持 TIME 列的自定义列名称"
---

# iotdb v2.0.8

### iotdb 是什么

Apache物联网数据库

### iotdb v2.0.8 版本更新了什么

## 功能和改进
- 数据查询：新增可用DataNode节点列表显示
- 数据查询：表模型中新增系统表，用于统计查询延迟
- 数据查询：Python SessionDataset支持将TsBlock转换为DataFrame并批量返回DataFrame
- 存储管理：支持 TIME 列的自定义列名称
- 存储管理：支持通过SQL查看创建的表/视图的完整定义语句
- 系统管理：在表模型中添加了DataNode节点连接状态的系统表
- 流处理：支持管道同步，不包括指定设备/测量点
- 流处理：支持在树模型数据同步管道语句的路径参数中指定多个精确路径
- 流处理：过滤 Pipe 中的路径时支持以逗号分隔混合使用 source.pattern 和 source.path 参数
- AI管理：内置Chronos-2模型支持预测功能。
- AI管理：内置Timer-XL和Sundial模型支持并发推理
- 其他：修复了安全漏洞 CVE-2025-12183、CVE-2025-66566 和 CVE-2025-11226
- ...


## 错误
- 修复了上次缓存命中后查询返回的结果集为空的问题。
- 修复了当 memtable 中的序列包含 TVList 中的点超过 200,000 个点时，使用时间过滤条件反向查询可能会丢失部分数据的问题。
- 修复canSkip未能过滤掉firstTimeseriesMetadata导致对齐时间序列查询超时的问题。
- 修复了带别名的 LAST 查询返回的结果应调整为测量别名的问题。
- 修复特定情况下时间过滤条件错误过滤最新点查询有效数据的问题。
- 修复了写入失败后立即删除会失败的问题。
- 修复了使用主动加载功能加载使用非默认时间列的 TsFile 时潜在的 NPE 问题。
- ...


## 新贡献者
* @Adam- Chengzhuo 在 https://github.com/apache/iotdb/pull/16913 中做出了第一个贡献
* @ZhaoShuai-Buyi 在https://github.com/apache/iotdb/pull/17013 中做出了第一个贡献

**完整变更日志**：https://github.com/apache/iotdb/compare/v2.0.7...v2.0.8

---

> 📦 仓库：[apache/iotdb](https://github.com/apache/iotdb) · 🏷️ 版本：`v2.0.8` · 📅 发布：2026-04-13 · [查看英文原版 Release](https://github.com/apache/iotdb/releases/tag/v2.0.8)

*本文由 NextStack 自动化流水线采集并翻译，内容以官方英文原文为准。*
