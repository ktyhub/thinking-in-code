---
title: "qdrant v1.19.0"
project: "qdrant"
repo: "qdrant/qdrant"
tag: "v1.19.0"
version: "v1.19.0"
published: "2026-08-05"
type: "minor"
lang: "zh"
---

# qdrant v1.19.0

# 更改日志

## 特点：point_up：

* https://github.com/qdrant/qdrant/milestone/50 - TurboQuant 4 位作为主要向量存储的数据类型。仅存储 4 位量化向量并在原始向量上存储备用磁盘空间。 [[文档](https://qdrant.tech/documentation/manage-data/vectors/#turbo4)]
* https://github.com/qdrant/qdrant/pull/9669, https://github.com/qdrant/qdrant/pull/9684, https://github.com/qdrant/qdrant/pull/9950 - 统一定义集合组件的内存使用策略。使用 `"memory": "cold" / "cached" / "pinned"` 定义每个单独集合组件的内存行为。允许对内存使用和性能进行更细粒度的控制。 [[文档](https://qdrant.tech/documentation/ops-configuration/memory-tiers/)]
* https://github.com/qdrant/qdrant/pull/9683 - 允许 `filter` 中的 `"match": {"prefix": "..."}` 按前缀匹配关键字，必须在关键字索引中启用。 [[文档](https://qdrant.tech/documentation/search/filtering/#prefix-match)]
* https://github.com/qdrant/qdrant/pull/9661 - 用于稀疏向量搜索的每查询 IDF 语料库 [[文档](https://qdrant.tech/documentation/search/text-search/full-text-search/#per-tenant-idf-statistics)]
* https://github.com/qdrant/qdrant/pull/9899 - 切片过滤条件：切片滚动/确定性采样 [[docs](https://qdrant.tech/documentation/search/filtering/#slice)]
* https://github.com/qdrant/qdrant/pull/10035 - 全局配额 API [[文档](https://qdrant.tech/documentation/ops-configuration/quotas/)]
* https://github.com/qdrant/qdrant/pull/9338 - 为确定性读取路由添加路由令牌 [[docs](https://qdrant.tech/documentation/scaling/consistency-guarantees/#read-affinity)]

## 改进：point_left：

* https://github.com/qdrant/qdrant/pull/9113 - 在向量和有效负载存储中使用批量读取
* https://github.com/qdrant/qdrant/pull/9409 - 利用 `io_uring` 进行有效负载存储
* https://github.com/qdrant/qdrant/pull/9448 - 降低默认更新队列长度，从 1M 减少到 200
* https://github.com/qdrant/qdrant/pull/9500 - 使用 Entry API 避免冗余映射双重查找，提高性能
* https://github.com/qdrant/qdrant/pull/9332 - 默认情况下为不可变段启用单文件 mmap 向量存储
* https://github.com/qdrant/qdrant/pull/9376 - 添加选项以显式禁用 BM25 词干分析器；弃用“无”黑客
* https://github.com/qdrant/qdrant/pull/9457 - 方面的性能改进
* https://github.com/qdrant/qdrant/pull/9431 - 在独立模式下响应集群端点上的 HTTP 405
* https://github.com/qdrant/qdrant/pull/9662 - 失败时重新启动共识线程而不是永久停止
* https://github.com/qdrant/qdrant/pull/9663 - 跟踪日志“缺少请求消息”内部 gRPC 错误
* https://github.com/qdrant/qdrant/pull/9678 - 在写入 WAL 之前解决对点 ID 的基于过滤器的更新操作
* https://github.com/qdrant/qdrant/pull/9732 - 支持流段的快照恢复，无需嵌套 `files/` 目录
* https://github.com/qdrant/qdrant/pull/9726 - 减少慢速请求日志记录的内存使用量
* https://github.com/qdrant/qdrant/pull/9733 - 在 gRPC 响应中添加时间
* https://github.com/qdrant/qdrant/pull/9644 - 在快照上传上设置 S3 用户代理
* https://github.com/qdrant/qdrant/pull/9749 - 惰性咆哮标志位图和布尔索引计数
* https://github.com/qdrant/qdrant/pull/9778 - 在不可变索引中使用 AHashSet 删除子哈希，提高性能
* https://github.com/qdrant/qdrant/pull/9784 - 标记点删除一次，而不是不可变索引中的每个值，提高性能
* https://github.com/qdrant/qdrant/pull/9660 - 将 TurboQuant Hadamard 旋转速度加快约 3 倍
* https://github.com/qdrant/qdrant/pull/9835 - TurboQuant 对称 L1 评分中的单反向旋转
* https://github.com/qdrant/qdrant/pull/9811 - 将标量 f16 指标精度与 SIMD 阈值对齐
* https://github.com/qdrant/qdrant/pull/9847 - 改进过滤条件中非字符串 `key` 的错误消息
* https://github.com/qdrant/qdrant/pull/9871 - 磁盘上字段索引删除掩码的压缩存储位掩码
* https://github.com/qdrant/qdrant/pull/9740, https://github.com/qdrant/qdrant/pull/9845 - 在过滤器条件检查器中使用批处理
* https://github.com/qdrant/qdrant/pull/9984 - 逐出映射两次的文件的页面缓存
* https://github.com/qdrant/qdrant/pull/10026 - 序列化同一分片的快照恢复
* https://github.com/qdrant/qdrant/pull/9891 - 在遥测中报告有效（cgroup）CPU、RAM 和磁盘
* https://github.com/qdrant/qdrant/pull/9721 - 使用 jemalloc 5.3.1 在 aarch64 系统上支持大于 4KB 的页面大小

## 错误修复：facepunch：

* https://github.com/qdrant/qdrant/pull/9395 - 修复了重新分片中止逻辑一致性
* https://github.com/qdrant/qdrant/pull/9377 - 在写时复制移动中读取延迟源点
* https://github.com/qdrant/qdrant/pull/9424 - 修复有效负载索引下降与后台段刷新竞争时的数据丢失问题
* https://github.com/qdrant/qdrant/pull/7849 - 修复中止重新分片活锁
* https://github.com/qdrant/qdrant/pull/9501 - 缓冲区多密集偏移存储以防止重新加载损坏
* https://github.com/qdrant/qdrant/pull/9401 - 修复空的 `min_should` 与匹配所有内容的非零 `min_count`
* https://github.com/qdrant/qdrant/pull/9536 - 修复优化器数据竞争，推迟源段破坏直到持久
* https://github.com/qdrant/qdrant/pull/9518 - 修复标量 L2 量化分数偏移
* https://github.com/qdrant/qdrant/pull/9537 - 修复快照 WAL 时钟数据争用
* https://github.com/qdrant/qdrant/pull/9604, https://github.com/qdrant/qdrant/pull/9637 - 避免分配器在随机搜索/样本/滚动的巨大限制下中止
* https://github.com/qdrant/qdrant/pull/9610 - 修复了具有较大限制或组大小的点组搜索查询导致恐慌的问题
* https://github.com/qdrant/qdrant/pull/9654 - 修复重新初始化失败并在已删除的对等点上“删除所有投票者”的问题
* https://github.com/qdrant/qdrant/pull/9671 - 修复优化器重新创建时删除同级分片的错误重新启动
* https://github.com/qdrant/qdrant/pull/9641 - 删除命名向量后解锁优化器
* https://github.com/qdrant/qdrant/pull/9686 - 修复取消快照恢复脏标记留下的问题
* https://github.com/qdrant/qdrant/pull/9688 - 修复重新初始化的对等点等待外部共识的 `/readyz`
* https://github.com/qdrant/qdrant/pull/9677 - 为零限制批次保留空结果形状
* https://github.com/qdrant/qdrant/pull/9723 - 修复 Windows 快照映射中的驱动器号解析
* https://github.com/qdrant/qdrant/pull/9774 - 修复新引导的对等点上的 `/readyz` 误报
* https://github.com/qdrant/qdrant/pull/9767 - 修复重启后有效负载索引不一致的问题：flush-before-build
* https://github.com/qdrant/qdrant/pull/9806 - 仅附加克隆路径上的标记有效负载存储版本
* https://github.com/qdrant/qdrant/pull/9801 - 修复拥有存储上的 u8 量化向量读取中的释放后使用问题
* https://github.com/qdrant/qdrant/pull/9638 - 查询 API 中缺少点 ID 时返回错误建议
* https://github.com/qdrant/qdrant/pull/9785 - 重置 `first_voter` 并修剪第一个对等 `--reinit` 上的地址簿
* https://github.com/qdrant/qdrant/pull/9759 - 为负载上的 WAL 重播尾部提供最新时钟
* https://github.com/qdrant/qdrant/pull/9660 - 计算 mmap 稀疏重新加载时尾随删除的偏移量
* https://github.com/qdrant/qdrant/pull/9851 - 将 WAL 重放目标钳位到分片加载时截断的前缀
* https://github.com/qdrant/qdrant/pull/9882 - 修复重新分片，在所有分片选择器上查询过滤分片
* https://github.com/qdrant/qdrant/pull/9868 - 修复 WAL 数据争用，使用 `Segment::copy_to_path` 复制后刷新
* https://github.com/qdrant/qdrant/pull/9928 - 应用共识快照时清理陈旧的分片传输
* https://github.com/qdrant/qdrant/pull/9930 - 仅在prevent_unoptimized下在WAL重放期间尊重apply_seq
* https://github.com/qdrant/qdrant/pull/10005 - 修复 TurboQuant 量化矢量布局对齐
* https://github.com/qdrant/qdrant/pull/9992 - 预填充删除的向量后刷新
* https://github.com/qdrant/qdrant/pull/10059 - 明确第一个对等点重新初始化的联合共识字段
* https://github.com/qdrant/qdrant/pull/9105, https://github.com/qdrant/qdrant/pull/9410, https://github.com/qdrant/qdrant/pull/9317 - 修复了处理命名向量的创建和删除的问题
* https://github.com/qdrant/qdrant/pull/10085 - 修复基于 S3 的快照中的路径遍历漏洞

## 弃用：point_down：

* https://github.com/qdrant/qdrant/pull/9982 - 从 OpenAPI 中删除已弃用的搜索端点，在 gRPC 中弃用它们
* https://github.com/qdrant/qdrant/pull/10020 - 在 REST 模式中使已弃用的 `on_disk_payload` 成为可选
* https://github.com/qdrant/qdrant/pull/10035 - 弃用严格模式的 `max_resident_memory_percent`，转而使用全局配额 API

## 网页用户界面：open_hands：

* https://github.com/qdrant/qdrant-web-ui/milestone/1 - 使用 UMAP 和 WebGL 渲染的 WASM 实现，显着提高矢量可视化和降维性能
* https://github.com/qdrant/qdrant-web-ui/releases/tag/v0.2.15 - 用于管理有效负载索引及其配置的 UI
* https://github.com/qdrant/qdrant-web-ui/pull/428 - 用于管理全局资源配额的 UI
* https://github.com/qdrant/qdrant-web-ui/pull/425 - 显示重新分片进度
* https://github.com/qdrant/qdrant-web-ui/pull/400 - 集合的多重删除功能
* https://github.com/qdrant/qdrant-web-ui/pull/424 - 集合元数据的显示和编辑

---

> 📦 仓库：[qdrant/qdrant](https://github.com/qdrant/qdrant) · 🏷️ 版本：`v1.19.0` · 📅 发布：2026-08-05 · [查看英文原版 Release](https://github.com/qdrant/qdrant/releases/tag/v1.19.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
