---
title: "weaviate v1.38.24"
project: "weaviate"
repo: "weaviate/weaviate"
tag: "v1.38.24"
version: "v1.38.24"
published: "2026-11-03"
type: "patch"
lang: "zh"
---

# weaviate v1.38.24

## 重大变更
无

## 新功能
无

## 修复
* 当https://github.com/weaviate/weaviate/pull/13620中的@tsmith023操作模式为只读时，白名单grpc健康检查会读取
* 测试（authz）：在 https://github.com/weaviate/weaviate/pull/13629 中测量 @antas-marcin 的批次引用之前，等待待处理的 authz 日志
* 安全性：通过 @antas-marcin 在 https://github.com/weaviate/weaviate/pull/13632 中将 github.com/go-jose/go-jose/v4 提升至 v4.1.6
* deps：将 parquet-go/parquet-go 碰撞到 v0.32.0，将 andybalholm/brotli 碰撞到 v1.2.7，作者为 https://github.com/weaviate/weaviate/pull/13647 中的@antas-marcin
* deps: 将 weaviate/mockoidc 提升至 v0.0.2，由 @antas-marcin 在 https://github.com/weaviate/weaviate/pull/13652 中
* 当 https://github.com/weaviate/weaviate/pull/13650 中的 @rlmanrique 从存储中丢失对象时（反向移植 v1.37），保持矢量搜索距离对齐
* 当 https://github.com/weaviate/weaviate/pull/13645 中的 @rlmanrique 从存储中丢失对象时（反向移植 v1.38），保持矢量搜索距离对齐
* 修复：https://github.com/weaviate/weaviate/pull/13649 中 @trengrj 的 gse 分词器


**完整 Changelog**：https://github.com/weaviate/weaviate/compare/v1.38.23...v1.38.24

---

> 📦 仓库：[weaviate/weaviate](https://github.com/weaviate/weaviate) · 🏷️ 版本：`v1.38.24` · 📅 发布：2026-11-03 · [查看英文原版 Release](https://github.com/weaviate/weaviate/releases/tag/v1.38.24)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
