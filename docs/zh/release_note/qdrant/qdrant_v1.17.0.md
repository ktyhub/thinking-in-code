---
title: "qdrant v1.17.0"
project: "qdrant"
repo: "qdrant/qdrant"
tag: "v1.17.0"
version: "v1.17.0"
published: "2026-02-20"
type: "minor"
lang: "zh"
---

# qdrant v1.17.0

# 更改日志

## 特点🏋️

* [里程碑#38](https://github.com/qdrant/qdrant/milestone/38?closed=1) - 相关性反馈（[文档](https://qdrant.tech/documentation/concepts/search-relevance/#relevance-feedback)）
* [里程碑#44](https://github.com/qdrant/qdrant/milestone/44?closed=1) - API 有关优化进度和阶段的详细报告 ([文档](https://qdrant.tech/documentation/concepts/optimizer/#optimization-monitoring))
* [milestone#40](https://github.com/qdrant/qdrant/milestone/40?closed=1) - API 用于整个集群的聚合遥测 ([docs](https://qdrant.tech/documentation/guides/monitoring/#cluster-wide-telemetry))
* [milestone#43](https://github.com/qdrant/qdrant/milestone/43?closed=1) - 无限制的更新队列，以优雅地平滑更新峰值 ([docs](https://qdrant.tech/documentation/guides/low-latency-search/))
* https://github.com/qdrant/qdrant/pull/8071 - 添加审核访问日志记录（[文档](https://qdrant.tech/documentation/guides/security/#audit-logging)）
* https://github.com/qdrant/qdrant/pull/8063 - 添加加权 RRF ([文档](https://qdrant.tech/documentation/concepts/hybrid-queries/#reciprocal-rank-fusion-rrf))
* https://github.com/qdrant/qdrant/pull/7643 - 添加配置选项来控制更新吞吐量并防止未优化的搜索（[文档]（https://qdrant.tech/documentation/guides/low-latency-search/））
* https://github.com/qdrant/qdrant/pull/7929 - 添加可配置的读取扇出延迟以处理分布式集群中的尾部延迟（[文档](https://qdrant.tech/documentation/guides/low-latency-search/#use-delayed-fan-outs)）
* https://github.com/qdrant/qdrant/pull/7963 - 对于更新插入，将 `update_mode` 参数添加到 `upsert`、`update` 或 `insert` ([文档](https://qdrant.tech/documentation/concepts/points/#update-mode))
* https://github.com/qdrant/qdrant/pull/7835 - 添加辅助 API 密钥配置，以实现分布式集群中的零停机密钥轮换
* https://github.com/qdrant/qdrant/pull/7838 - 为 `/metrics` 端点添加专用 HTTP 端口以进行内部监控
* https://github.com/qdrant/qdrant/pull/7615 - 添加 API 来列出分片键 ([docs](https://qdrant.tech/documentation/guides/distributed_deployment/#user-defined-sharding))

## 改进🤸

* https://github.com/qdrant/qdrant/pull/7802 - 改进读取操作的超时处理
* https://github.com/qdrant/qdrant/pull/7750 - 改进更新操作中的超时处理，防止 WAL 后更新超时时出现分片故障
* https://github.com/qdrant/qdrant/pull/8025 - 恢复快照而不创建中间文件，大大提高了恢复时间和磁盘使用率
* https://github.com/qdrant/qdrant/pull/8059 - 将快照直接恢复到目标文件系统以避免昂贵的文件移动
* https://github.com/qdrant/qdrant/pull/7883 - 使用 `syncfs` 进行快照解压后刷新，以更有效地保存大量文件
* https://github.com/qdrant/qdrant/pull/8072 - 在创建快照期间不要锁定分片持有者结构，之前会阻止分片级别操作
* https://github.com/qdrant/qdrant/pull/8166 - 为快照下载添加超时，如果连接卡住超过一分钟则中止
* https://github.com/qdrant/qdrant/pull/8007, https://github.com/qdrant/qdrant/pull/8056 - 改进段锁定方法以最大限度地减少锁争用
* https://github.com/qdrant/qdrant/pull/8105 - 将分片上的并行更新数量限制为 64，以防止订单跟踪开销
* https://github.com/qdrant/qdrant/pull/8169 - 减少 Gridstore 中的锁定以降低搜索尾部延迟
* https://github.com/qdrant/qdrant/pull/8164 - 主动释放关闭的WAL段的缓存内存以减少内存压力
* https://github.com/qdrant/qdrant/pull/7952 - 禁用未索引字段上的就地有效负载更新，提高索引段的不变性保证，从而改进部分快照
* https://github.com/qdrant/qdrant/pull/7887 - 添加禁用特定有效负载索引的额外 HNSW 链接构造的功能（[文档](https://qdrant.tech/documentation/concepts/indexing/#disable-the-creation-of-extra-edges-for-payload-fields)）
* https://github.com/qdrant/qdrant/pull/7971 - 启用矢量存储缺失的选项来填充单文件 mmap
* https://github.com/qdrant/qdrant/pull/7928 - 读取批量向量时启用 `io_uring`
* https://github.com/qdrant/qdrant/pull/7919 - 改进日期时间解析失败的错误消息
* https://github.com/qdrant/qdrant/pull/8053 - 允许配置集合、分片和段的加载并发性
* https://github.com/qdrant/qdrant/pull/7809 - 添加更方便的方式为外部推理提供者提供 API 密钥（[文档](https://qdrant.tech/documentation/concepts/inference/#external-embedding-model-providers)）
* https://github.com/qdrant/qdrant/pull/8093 - 在新更新的序列化期间不要锁定 WAL，这对于大型操作来说成本高昂
* https://github.com/qdrant/qdrant/pull/7834 - 当副本失效时延长 WAL 保留，防止在对等故障的情况下进行完整分片传输
* https://github.com/qdrant/qdrant/pull/7565 - 禁用 1.15.0 中已弃用的旧片键格式
* https://github.com/qdrant/qdrant/pull/8125 - 跳过为删除的向量构建额外的 HNSW 链接
* https://github.com/qdrant/qdrant/pull/8163 - 改进搜索结果处理，以使用更少的 CPU 并具有较高的搜索限制
* https://github.com/qdrant/qdrant/pull/8175 - 对 HNSW 普通过滤搜索使用较少的分配

## 错误修复🤹

* https://github.com/qdrant/qdrant/pull/7850 - 修复刷新顺序以遵循段依赖性，防止 CoW 在刷新中断时丢失数据
* https://github.com/qdrant/qdrant/pull/8103 - 修复流记录传输中的数据竞争，可能会丢失正在进行的更新
* https://github.com/qdrant/qdrant/pull/7983 - 修复创建有效负载索引时的互锁问题
* https://github.com/qdrant/qdrant/pull/7999 - 修复集合级别更新操作的互锁问题
* https://github.com/qdrant/qdrant/pull/8131 - 修复并发更新快照期间的死锁
* https://github.com/qdrant/qdrant/pull/8128 - 修复由于我们内部取消正在进行的请求而导致的 gRPC/HTTP2 `too_many_internal_resets` 错误
* https://github.com/qdrant/qdrant/pull/8019 - 改进对连接池中关闭的 HTTP2 通道的处理
* https://github.com/qdrant/qdrant/pull/8104 - 修复 WAL 和分片时钟快照中的数据竞争，确保它们保持一致
* https://github.com/qdrant/qdrant/pull/7961 - 修复在部分快照清单构建中使用不正确的版本
* https://github.com/qdrant/qdrant/pull/8095 - 修复分片快照传输的内部协议使用不正确的问题
* https://github.com/qdrant/qdrant/pull/7950 - 修复使用上限时查询批处理中的整数溢出
* https://github.com/qdrant/qdrant/pull/7972 - 修复搜索聚合器恐慌，限制为 0
* https://github.com/qdrant/qdrant/pull/8100 - 修复整数索引中未使用的圆形浮点数，JSON 不区分整数和浮点数
* https://github.com/qdrant/qdrant/pull/8097 - 修复 `score_threshold` 未在分数提升查询中使用的问题
* https://github.com/qdrant/qdrant/pull/7877 - 修复磁盘已满时的 `Corrupted ID tracker mapping storage` 错误
* https://github.com/qdrant/qdrant/pull/7944 - 修复遥测和指标中的 gRPC API 响应状态计数
* https://github.com/qdrant/qdrant/pull/7857 - 修复带有过滤器的复制点的进度跟踪器总计数
* https://github.com/qdrant/qdrant/pull/7856 - 修复使用用户定义的分片在空集合中创建有效负载索引的问题
* https://github.com/qdrant/qdrant/pull/8099 - 修复忽略内部请求的 CA 证书（如果已配置）的问题
* https://github.com/qdrant/qdrant/pull/8176 - 向某些端点添加缺少的超时参数

## 网页用户界面：便当： 

* https://github.com/qdrant/qdrant-web-ui/pull/345 - 优化进度的详细可视化
* https://github.com/qdrant/qdrant-web-ui/pull/334 - 创建集合对话框现在可以预览确切的命令
* https://github.com/qdrant/qdrant-web-ui/pull/341 - 重新分片控制按钮
* https://github.com/qdrant/qdrant-web-ui/pull/344 - 点过滤器和搜索栏恢复和改进

## Qdrant 边缘 :hocho: 

Qdrant Edge 是 Qdrant 的进程内版本，它与服务器版本具有相同的内部结构、存储格式和点 API，但设计为本地工作。 Qdrant Edge 与服务器版本兼容，可以读取服务器版本 Qdrant 创建的分片快照。更多文档可用[此处](https://qdrant.tech/documentation/edge/)。

## 弃用：警告：

* 从 v1.17.0 开始，Qdrant 更改了 gRPC 接口中矢量场的响应格式。所有官方 Qdrant client 都应该已采用此更改，因此请确保升级您的 client 库并检查您是否没有使用已弃用的字段。更多信息：https://github.com/qdrant/qdrant/pull/7183

* 即将弃用：
  * 在 Qdrant v1.18.x 中，所有已弃用的搜索方法将被完全删除，甚至在旧的 client 库中也将不可用。
  * 在 Qdrant v1.17.x 中，我们将完全删除 RocksDB 支持，转而使用 [gridstore](https://qdrant.tech/articles/gridstore-key-value-storage/)，这意味着无法从 v1.15.x 直接升级到 v1.17.x。请按照[升级说明](https://qdrant.tech/documentation/faq/qdrant-fundamentals/#how-do-i-avoid-issues-when-updating-to-the-latest-version)一次升级一个小版本，以避免出现不支持的存储错误。请注意，Qdrant Cloud 基础架构会自动生成适当的升级步骤，因此您不必担心这一点。

---

> 📦 仓库：[qdrant/qdrant](https://github.com/qdrant/qdrant) · 🏷️ 版本：`v1.17.0` · 📅 发布：2026-02-20 · [查看英文原版 Release](https://github.com/qdrant/qdrant/releases/tag/v1.17.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
