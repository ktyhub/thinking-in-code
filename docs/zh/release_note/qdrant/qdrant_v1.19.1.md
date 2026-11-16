---
title: "qdrant v1.19.1"
project: "qdrant"
repo: "qdrant/qdrant"
tag: "v1.19.1"
version: "v1.19.1"
published: "2026-09-04"
type: "patch"
lang: "zh"
---

# qdrant v1.19.1

# 更改日志

## 改进

* https://github.com/qdrant/qdrant/pull/10342, https://github.com/qdrant/qdrant/pull/10420 - 通过预取在量化评分中加速并饱和内存带宽
* https://github.com/qdrant/qdrant/pull/10391, https://github.com/qdrant/qdrant/pull/10392, https://github.com/qdrant/qdrant/pull/10362, https://github.com/qdrant/qdrant/pull/10437, https://github.com/qdrant/qdrant/pull/10439, https://github.com/qdrant/qdrant/pull/10381 - 返工和批量 4 位 TurboQuant SIMD 实施以获得更好的性能
* https://github.com/qdrant/qdrant/pull/10441 - 限制查询平面分配以获得更好的搜索性能
* https://github.com/qdrant/qdrant/pull/8650 - 提高 AVX 上的 L2 余弦预处理性能
* https://github.com/qdrant/qdrant/pull/10042 - 批量删除检查以实现更快的全面扫描
* https://github.com/qdrant/qdrant/pull/10054, https://github.com/qdrant/qdrant/pull/10010, https://github.com/qdrant/qdrant/pull/10194 - 在 HNSW 中批量搜索以加快搜索速度
* https://github.com/qdrant/qdrant/pull/10099 - 在推入 HNSW 优先级队列之前跳过坏项目
* https://github.com/qdrant/qdrant/pull/10312, https://github.com/qdrant/qdrant/pull/10333 - 在搜索后处理中跳过点 ID 解析以提高搜索性能
* https://github.com/qdrant/qdrant/pull/10040, https://github.com/qdrant/qdrant/pull/10066 - 在分片传输中使用原始有效负载，使有效负载繁重的分片传输速度提高 1.5 倍
* https://github.com/qdrant/qdrant/pull/9760 - 使设置副本状态和中止传输/重新分片崩溃安全，以防止共识不同步
* https://github.com/qdrant/qdrant/pull/9786 - 使重启传输操作崩溃安全，以防止共识不同步
* https://github.com/qdrant/qdrant/pull/10345 - 更有效地查询分片状态，不构建完整的分片信息
* https://github.com/qdrant/qdrant/pull/10455 - 使用 cachestat 在 Linux 上更快地报告内存
* https://github.com/qdrant/qdrant/pull/10457 - 读取锁之外的探测段内存利用率
* https://github.com/qdrant/qdrant/pull/10027 - 荣誉 `max_segment_size` 基于过滤器的更新
* https://github.com/qdrant/qdrant/pull/10426 - 支持快速 HNSW 修复取消，以防止分片掉落时阻塞共识
* https://github.com/qdrant/qdrant/pull/10306 - 提高 gRPC API 上的 HTTP2 最大挂起重置以允许更高的连接并发性
* https://github.com/qdrant/qdrant/pull/10243 - 公开 `/metrics` (`cpu_cores_used`) 中使用的 CPU 内核
* https://github.com/qdrant/qdrant/pull/10132 - 扩展容器运行时检测，包括Kubernetes和其他运行时

## 错误修复

* https://github.com/qdrant/qdrant/pull/10201 - 修复数据一致性，在构建有效负载索引之前刷新 CoW 段
* https://github.com/qdrant/qdrant/pull/10399 - 修复不安全关闭后新页面上的 Gridstore 恐慌，修复先前存在的故障
* https://github.com/qdrant/qdrant/pull/10205 - 在中止重新分片时，不要长时间阻止与延迟点的共识
* https://github.com/qdrant/qdrant/pull/10324 - 拒绝向量大小大于 65536
* https://github.com/qdrant/qdrant/pull/10143 - 拒绝空密集向量
* https://github.com/qdrant/qdrant/pull/10374 - 拒绝推荐平均值 API 的正/负示例中不匹配的维度计数
* https://github.com/qdrant/qdrant/pull/10382 - 不指定滚动 `limit` 将绕过 `max_query_limit`
* https://github.com/qdrant/qdrant/pull/10128 - 防止低估 `is_empty` 和 `is_null` 基数
* https://github.com/qdrant/qdrant/pull/10101 - 修复未索引有效负载字段的 `is_null` 过滤器
* https://github.com/qdrant/qdrant/pull/10341 - 修复未索引有效负载字段上的短语匹配，不考虑令牌定位
* https://github.com/qdrant/qdrant/pull/10181 - 将 mmap 读取错误传播回用户而不是恐慌
* https://github.com/qdrant/qdrant/pull/10338 - 修复并发共识操作等待者互相丢弃的问题
* https://github.com/qdrant/qdrant/pull/9957 - 将跟踪 ID 限制为 256 个字节，而不是字符
* https://github.com/qdrant/qdrant/pull/9959 - 将拾取随机 HNSW 层钳位到零的下限

## 安全

* https://github.com/qdrant/qdrant/pull/10242 - 拒绝集合名称中的 `.` 和 `..`

---

> 📦 仓库：[qdrant/qdrant](https://github.com/qdrant/qdrant) · 🏷️ 版本：`v1.19.1` · 📅 发布：2026-09-04 · [查看英文原版 Release](https://github.com/qdrant/qdrant/releases/tag/v1.19.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
