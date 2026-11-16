---
title: "qdrant v1.17.1"
project: "qdrant"
repo: "qdrant/qdrant"
tag: "v1.17.1"
version: "v1.17.1"
published: "2026-03-27"
type: "patch"
lang: "zh"
---

# qdrant v1.17.1

# 更改日志

## 改进

* [里程碑#46](https://github.com/qdrant/qdrant/milestone/46?closed=1) - 推迟积分更新，使用 `prevent_unoptimized=true` 有效应用和优化积分
* https://github.com/qdrant/qdrant/pull/8188 - 使 Gridstore 刷新非阻塞以减少搜索尾部延迟
* https://github.com/qdrant/qdrant/pull/8235 - 在单一有效负载值的情况下提高过滤搜索的性能
* https://github.com/qdrant/qdrant/pull/8402 - 将请求跟踪 ID 添加到审核日志中
* https://github.com/qdrant/qdrant/pull/8460 - 传播 WAL 错误，而不是在加载分片期间出现恐慌
* https://github.com/qdrant/qdrant/pull/8301 - 如果为空，则允许对等方使用使用的 URI 进行引导

## 错误修复

* https://github.com/qdrant/qdrant/pull/8177 - GPU：修复原始 Vulkan 名称指针类型
* https://github.com/qdrant/qdrant/pull/8193 - 修复复制因子 > 1 的未初始化分片键的创建，修复分层多租户工作流程
* https://github.com/qdrant/qdrant/pull/8217 - 防止 `min_should` 在大量条件下出现恐慌
* https://github.com/qdrant/qdrant/pull/8179 - 修复了集群快照的恢复，该快照会在部分状态下创建不必要的副本
* https://github.com/qdrant/qdrant/pull/8220 - 修复服务器在执行并发摄取时断开连接而不发送响应错误
* https://github.com/qdrant/qdrant/pull/8341 - 仅从快照目录强制快照恢复的安全补丁
* https://github.com/qdrant/qdrant/pull/8373 - 修复分片传输期间集合级操作的锁定
* https://github.com/qdrant/qdrant/pull/8438 - 使用虚拟分片的集合级操作不会失败
* https://github.com/qdrant/qdrant/pull/8455 - 修复 1.17.0 中引入的 WAL 读取问题
* https://github.com/qdrant/qdrant/pull/8454 - 修复 WAL 重放中的另一个恐慌
* https://github.com/qdrant/qdrant/pull/8475 - 修复 WAL 增量传输：在等剪枝之前拒绝截断的恢复点
* https://github.com/qdrant/qdrant/pull/8514 - 修复地理索引中的错误警告
* https://github.com/qdrant/qdrant/pull/8374 - 防止在慢流记录传输中长时间锁定分片持有者
* https://github.com/qdrant/qdrant/pull/8480 - 修复优化器日志记录中的恐慌
* https://github.com/qdrant/qdrant/pull/8449 - 修复分块向量存储中的恐慌

## 预览

该功能尚未正式发布，但在构建中可用：

* https://github.com/qdrant/qdrant/pull/8214 - Prometheus 中的每个集合指标
* https://github.com/qdrant/qdrant/pull/8498 - API 用于读取审核日志条目
* https://github.com/qdrant/qdrant/pull/8469 - 严格模式下的最大批量大小配置

## 边缘

* Rust Qdrant Edge v0.6.0 - https://crates.io/crates/qdrant-edge 的板条箱
* Python 适用于 Qdrant Edge v0.6.0 - https://pypi.org/project/qdrant-edge-py/ 的封装

---

> 📦 仓库：[qdrant/qdrant](https://github.com/qdrant/qdrant) · 🏷️ 版本：`v1.17.1` · 📅 发布：2026-03-27 · [查看英文原版 Release](https://github.com/qdrant/qdrant/releases/tag/v1.17.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
