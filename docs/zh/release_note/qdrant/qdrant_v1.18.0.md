---
title: "qdrant v1.18.0"
project: "qdrant"
repo: "qdrant/qdrant"
tag: "v1.18.0"
version: "v1.18.0"
published: "2026-05-11"
type: "minor"
lang: "zh"
---

# qdrant v1.18.0

# 更改日志

## 特点🏎️

* [里程碑！48](https://github.com/qdrant/qdrant/milestone/48) - 添加 TurboQuant 量化变体，8 倍矢量压缩，无需召回税
* https://github.com/qdrant/qdrant/pull/8605 - 添加 API 以创建和删除现有集合中的命名向量
* https://github.com/qdrant/qdrant/pull/8606 - 深度内存报告，显示存储组件的内存使用情况细分
* https://github.com/qdrant/qdrant/pull/8714 - 添加低内存模式，强制打开磁盘上的所有内容，以最大程度地减少启动时内存不足崩溃的情况
* https://github.com/qdrant/qdrant/pull/8715 - 添加严格模式参数以在内存使用率较高时拒绝更新 (`max_resident_memory_percent`)

## 改进📏

* <https://github.com/qdrant/qdrant/pull/8790>, <https://github.com/qdrant/qdrant/pull/8769> - 对搜索工作者使用动态 CPU 池，在 IO 等待较高时提高搜索性能
* <https://github.com/qdrant/qdrant/pull/8526>、<https://github.com/qdrant/qdrant/pull/8656> - 在分片传输中使用基于操作大小的批处理来实现更高的吞吐量
* https://github.com/qdrant/qdrant/pull/8673 - 将不可变地理索引的内存使用量减少 7 倍
* https://github.com/qdrant/qdrant/pull/8529 - 完全删除 RocksDB 支持，简化存储处理
* https://github.com/qdrant/qdrant/pull/8768 - 等待延迟点时不要停止更新队列
* https://github.com/qdrant/qdrant/pull/8944 - 使用默认的 60 秒超时来更新请求，清理长时间运行的更新请求
* https://github.com/qdrant/qdrant/pull/8767 - 当集合更新触发优化器重新创建时，清除任何优化器错误以允许恢复而无需重新启动
* https://github.com/qdrant/qdrant/pull/8784 - 如果无法解决 WAL 增量，则使用基于快照的分片传输来实现更快的恢复
* https://github.com/qdrant/qdrant/pull/8782 - 在快照传输时，首先清除接收器上的分片数据以防止磁盘崩溃
* https://github.com/qdrant/qdrant/pull/8689 - 在加载集合之前清理临时目录，可以防止恢复时磁盘崩溃
* https://github.com/qdrant/qdrant/pull/8830 - 在搜索过程中不要持有分片持有者锁，以防止阻止各种其他操作
* <https://github.com/qdrant/qdrant/pull/8626>, <https://github.com/qdrant/qdrant/pull/8635> - 在审核日志事件中记录 API 方法路径
* https://github.com/qdrant/qdrant/pull/8402 - 报告审核日志事件中的跟踪 ID
* https://github.com/qdrant/qdrant/pull/8636 - 报告审计日志配置以及遥测和指标中的数据大小
* https://github.com/qdrant/qdrant/pull/8640 - 优化 ARM CPU 上的余弦归一化 (SIMD)
* https://github.com/qdrant/qdrant/pull/8571 - 跳过遥测端点上的审核日志记录
* https://github.com/qdrant/qdrant/pull/8693 - 使 HNSW 子图构建具有确定性
* <https://github.com/qdrant/qdrant/pull/8712>、<https://github.com/qdrant/qdrant/pull/8708>、<https://github.com/qdrant/qdrant/pull/8706> - 按确定性顺序报告各种结构
* https://github.com/qdrant/qdrant/pull/8932 - 启动消息中代理技能的链接

## 错误修复🪺

* https://github.com/qdrant/qdrant/pull/8728 - 修复停止词在 gRPC 上始终为小写的问题，即使已禁用
* https://github.com/qdrant/qdrant/pull/8719 - 修复 `YYYY-MM-DDTHH:MM` 格式的日期时间解析
* https://github.com/qdrant/qdrant/pull/8734 - 修复新重建的空索引上的 IsEmpty 条件
* https://github.com/qdrant/qdrant/pull/8939 - 修复不使用全文索引的嵌套 MatchTextAny
* https://github.com/qdrant/qdrant/pull/8646 - 修复地理圈哈希绑定检查
* https://github.com/qdrant/qdrant/pull/8938 - 修复跨越字符串数组元素边界的短语匹配
* https://github.com/qdrant/qdrant/pull/8762 - 修复出现多个验证错误时的严重恐慌
* https://github.com/qdrant/qdrant/pull/8194 - 不允许稀疏向量具有空名称
* https://github.com/qdrant/qdrant/pull/8832 - 修复没有主图的 HNSW 不使用 GPU 的问题
* https://github.com/qdrant/qdrant/pull/8691 - 修复 HNSW 子图构建中的无限循环
* https://github.com/qdrant/qdrant/pull/8577 - 修复快照路径包含非 UTF-8 字符时的恐慌
* https://github.com/qdrant/qdrant/pull/8293 - 修复损坏的集合别名文件上的严重恐慌，而是返回错误
* https://github.com/qdrant/qdrant/pull/8574 - 修复磁盘 IO 并不总是在映射索引中测量
* https://github.com/qdrant/qdrant/pull/8645 - 修复块容量预留以更有效地分配
* https://github.com/qdrant/qdrant/pull/8651 - 修复有效负载索引刷新器将取消吸收为错误
* https://github.com/qdrant/qdrant/pull/8474 - 修复快照恢复失败时未清理的快照文件
* https://github.com/qdrant/qdrant/pull/8654 - 修复清除页面缓存不可靠的问题，添加缺失的候选者
* https://github.com/qdrant/qdrant/pull/8542 - 修复地图索引，将修改后的文件列为不可变
* https://github.com/qdrant/qdrant/pull/8847 - 修复数据争用导致磁盘观察程序未被唤醒导致超时
* <https://github.com/qdrant/qdrant/pull/8789>、<https://github.com/qdrant/qdrant/pull/8917> - 使重新分片操作幂等，修复崩溃时集群状态损坏
* https://github.com/qdrant/qdrant/pull/8831 - 修复具有分片级别错误的读取操作的缓慢请求日志记录
* https://github.com/qdrant/qdrant/pull/8756 - 不要分配我们不使用的异步搜索工作线程，以减少线程数
* https://github.com/qdrant/qdrant/pull/8596 - 在写入哈希环提交后重新分片时不要写入旧分片，修复丢失分片错误
* https://github.com/qdrant/qdrant/pull/8543 - 修复分数后处理中的边缘稀疏向量搜索恐慌
* https://github.com/qdrant/qdrant/pull/8588 - 修复上游的各种 Raft 共识正确性错误

## 安全🕵️

* https://github.com/qdrant/qdrant/pull/8676 - 在内部 gRPC 端点上强制执行 API 密钥/JWT 身份验证
* https://github.com/qdrant/qdrant/pull/8628 - 添加配置选项以禁用从 URL 进行快照还原
* https://github.com/qdrant/qdrant/pull/8619 - 增强 TLS 依赖关系以解决安全漏洞

## 网页用户界面 🍱

* https://github.com/qdrant/qdrant-web-ui/pull/372 - 添加内存和磁盘检查器，查看每个存储组件的使用情况细分
* https://github.com/qdrant/qdrant-web-ui/pull/370 - 添加高对比度主题
* https://github.com/qdrant/qdrant-web-ui/pull/369 - 在集合信息面板中渲染内联文档
* https://github.com/qdrant/qdrant-web-ui/pull/362 - 向某些集合视图添加刷新按钮
* <https://github.com/qdrant/qdrant-web-ui/pull/373>、<https://github.com/qdrant/qdrant-web-ui/pull/377> - 修复搜索质量延迟测量并使用更好的命名

---

> 📦 仓库：[qdrant/qdrant](https://github.com/qdrant/qdrant) · 🏷️ 版本：`v1.18.0` · 📅 发布：2026-05-11 · [查看英文原版 Release](https://github.com/qdrant/qdrant/releases/tag/v1.18.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
