---
title: "iotdb v1.3.5"
project: "iotdb"
repo: "apache/iotdb"
tag: "v1.3.5"
published: "2025-09-11"
type: "patch"
lang: "zh"
---

# iotdb v1.3.5

## 改进
- 存储模块：优化用户密码加密，算法改为SHA-256
- ... 

## 错误
- 修复跨Region聚合查询设备对齐时数组越界异常
- 修复了跨区域的单个或多个设备使用 `order by time + align by device` 进行聚合查询时的错误
- 修复了大型 TEXT 对象查询中的“内存不足”错误 + 按设备对齐 + 按时间排序
- 修复最后一次查询 where time > X 且 time < X 未应用于分区表抓取，导致无法命中 PartitionCache 的问题
- 修复了单个设备数据跨多个Region时使用change_point函数+按设备对齐的错误
- 修复了pipeTransferFile异步提交队列导致的OOM（Out of Memory）问题
- 修复了管道密码检测中的内存泄漏问题
- 对于管道接收器和加载期间，将“清除架构缓存”的行为更改为“更新最后的缓存”
- 优化当测点较多且mods文件包含大量测点删除时TsFile的加载速度
- ...

**完整 Changelog**：https://github.com/apache/iotdb/compare/v1.3.4-1...v1.3.5

---

> 📦 仓库：[apache/iotdb](https://github.com/apache/iotdb) · 🏷️ 版本：`v1.3.5` · 📅 发布：2025-09-11 · [查看英文原版 Release](https://github.com/apache/iotdb/releases/tag/v1.3.5)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
