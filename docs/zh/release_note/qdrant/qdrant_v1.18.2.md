---
title: "qdrant v1.18.2"
project: "qdrant"
repo: "qdrant/qdrant"
tag: "v1.18.2"
version: "v1.18.2"
published: "2026-06-04"
type: "patch"
lang: "zh"
---

# qdrant v1.18.2

# 更改日志

## 改进

* https://github.com/qdrant/qdrant/pull/9282 - 记录分片 WAL 恢复期间的慢速操作
* https://github.com/qdrant/qdrant/pull/9137 - 构建段后清除 ID 跟踪器的缓存
* https://github.com/qdrant/qdrant/pull/9138 - 如果更改 `on_disk` 标志，则不重建有效负载索引

## 错误修复

* https://github.com/qdrant/qdrant/pull/9285 - 修复在 `prevent_unoptimized` 中使用多向量时优化器中潜在的无限循环
* https://github.com/qdrant/qdrant/pull/9217 - 取消时清理未完成的段优化，重启时不要加载它们
* https://github.com/qdrant/qdrant/pull/9260 - 修复空列表在整数索引上被拒绝的 MatchAny
* https://github.com/qdrant/qdrant/pull/9239 - 为分片快照流端点添加超时，删除未主动读取的连接
* https://github.com/qdrant/qdrant/pull/9215 - 修复中止传输，重新分片不是幂等的
* https://github.com/qdrant/qdrant/pull/9237 - 修复了新快照传输中报告旧进度的问题
* https://github.com/qdrant/qdrant/pull/9226 - 修复 Android 平台上的 WAL 锁定错误

## 安全

* https://github.com/qdrant/qdrant/pull/9254 - 修复特制路径上的 REST 身份验证白名单绕过问题，在授权之前解析路由
* https://github.com/qdrant/qdrant/pull/9268 - 通过拒绝不正确的长度来修复恶意快照的越界堆读取

---

> 📦 仓库：[qdrant/qdrant](https://github.com/qdrant/qdrant) · 🏷️ 版本：`v1.18.2` · 📅 发布：2026-06-04 · [查看英文原版 Release](https://github.com/qdrant/qdrant/releases/tag/v1.18.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
