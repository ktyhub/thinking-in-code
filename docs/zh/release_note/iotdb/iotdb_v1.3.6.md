---
title: "iotdb v1.3.6"
project: "iotdb"
repo: "apache/iotdb"
tag: "v1.3.6"
published: "2026-01-07"
type: "patch"
lang: "zh"
summary: "数据查询：优化多种场景的查询性能，包括多系列Last查询。；数据查询：Java SDK 新增 FastLastQuery 接口，支持更高效的 Last 查询操作。；数据查询：调整树形模型的fetchSchema以分段流式方式返回数据，提高大数据量场景下的响应速度。；存储管理：优化内存管理，避免内存泄漏风险，保证系统长期稳定运行。"
---

# iotdb v1.3.6

## 功能和改进
- 数据查询：优化多种场景的查询性能，包括多系列Last查询。
- 数据查询：Java SDK 新增 FastLastQuery 接口，支持更高效的 Last 查询操作。
- 数据查询：调整树形模型的fetchSchema以分段流式方式返回数据，提高大数据量场景下的响应速度。
- 存储管理：优化内存管理，避免内存泄漏风险，保证系统长期稳定运行。
- 存储管理：优化文件压缩机制，提高压缩效率，减少系统存储资源消耗。
- 数据同步：优化Pipe SQL参数配置，支持指定异步加载方式。
- 数据同步：新增语法糖功能，自动将全卷Pipe创建SQL拆分为实时同步和历史同步。
- 系统管理：新增数据类型压缩方式全局配置项，支持按需调整存储压缩策略。
- 其他：修复了安全漏洞 CVE-2025-12183、CVE-2025-66566 和 CVE-2025-11226。
- ...

## 错误
- 修复了从设备级 TTL 下的序列区域选择不连续的序列文件进行结算任务会在执行过程中触发重叠错误的问题。
- 修复了在树模型 SQL（3C3D 部署）中运行pattern_match 自定义函数会抛出错误，指示“tsDataType”为空的问题。
- 修复了快速压缩模式下 TTL 会不断将数据写入修改缓存，导致压缩速度慢的问题。
- 修复了在不添加align by device子句的情况下对大量设备执行值过滤查询时出现的堆栈溢出问题。
- 修复了跨时间分区加载具有空值块的 TsFiles 会生成块未对齐的 TsFiles 的问题。
- 修复了 TransformOperator 对空 TsBlock 的错误处理逻辑。
- 修复了在会话中使用没有 MAINTAIN 权限的用户时服务器连接数不断增加的问题。
- 修复了在某些特殊情况下（例如，不匹配的对齐类型或不一致的表模式）加载会忽略 mods 导入的问题。
- 修复了配置管道模式时如果存在 mod 文件，已删除的数据将重新同步到接收器的问题。
- 修复了即使未配置 TTL，在压缩调度期间仍会打印与 TTL 检查相关的信息日志的问题。
- ...

**完整 Changelog**：https://github.com/apache/iotdb/compare/v1.3.5...v1.3.6

---

> 📦 仓库：[apache/iotdb](https://github.com/apache/iotdb) · 🏷️ 版本：`v1.3.6` · 📅 发布：2026-01-07 · [查看英文原版 Release](https://github.com/apache/iotdb/releases/tag/v1.3.6)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
