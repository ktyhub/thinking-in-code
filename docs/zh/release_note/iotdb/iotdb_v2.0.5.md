---
title: "iotdb v2.0.5"
project: "iotdb"
repo: "apache/iotdb"
tag: "v2.0.5"
published: "2025-08-21"
type: "patch"
lang: "zh"
---

# iotdb v2.0.5

## 功能和改进
- 数据查询：支持手动创建树形到表格的视图
- 数据查询：表格模型增加窗口函数
- 数据查询：表模型增加聚合函数approx_most_frequent
- 数据查询：表模型JOIN功能扩展，支持LEFT & RIGHT JOIN、ASOF LEFT JOIN
- 数据查询：表格模型支持行模式识别，能够捕获连续数据进行分析计算
- 存储管理：表模型增加多个系统表，如：VIEWS（表视图信息）、MODELS（模型信息）等。
- AI管理：AINode添加两个内置模型：Timer-XL和Timer-Sundial
- AI管理：AINode支持树模型和表模型的推理功能
- ...

## 错误
- 修复了上次查询中的where time > X 和 time < X 未应用于分区表抓取，无法命中PartitionCache的问题
- 修复单设备跨地域按时间排序+按设备对齐聚合查询错误的问题
- 修复跨地域多设备按时间排序+按设备对齐聚合查询错误的问题
- 数据同步批处理支持sink.batch.max-delay-ms，提供更细粒度的缓存时间控制
- 修复了sink format=tsfile数据同步过程中tablet包含空值时潜在的NPE问题
- 修复了写入具有重复时间戳的空值的tablet时管道处理器的处理结果不正确的问题
- 修复了树模型加载更新表模型模式缓存的问题
- 修复了 Disruptor 队列关闭无法完成，可能导致 DN 停止脚本卡住的问题
- 修复了正常场景、重启场景、删除场景下数据同步的多个问题
- 修复了将表模型导出为 csv 时的时间格式问题
- ...

## 新贡献者
* @jtmer 在 https://github.com/apache/iotdb/pull/15468 中做出了第一个贡献
* @Young-Leo 在 https://github.com/apache/iotdb/pull/14423 中做出了第一个贡献

**完整 Changelog**：https://github.com/apache/iotdb/compare/v2.0.4...v2.0.5

---

> 📦 仓库：[apache/iotdb](https://github.com/apache/iotdb) · 🏷️ 版本：`v2.0.5` · 📅 发布：2025-08-21 · [查看英文原版 Release](https://github.com/apache/iotdb/releases/tag/v2.0.5)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
