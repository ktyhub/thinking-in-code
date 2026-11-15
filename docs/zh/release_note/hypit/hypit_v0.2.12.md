---
title: "hypit v0.2.12"
project: "hypit"
repo: "hypit-ai/hypit"
tag: "v0.2.12"
version: "v0.2.12"
published: "2026-09-21"
type: "patch"
lang: "zh"
---

# hypit v0.2.12

## 发生了什么变化
* 修复（端点套件）：在 https://github.com/hypit-ai/hypit/pull/337. 中的异步提供程序之间共享轮询错误决策进度轮询现在使 HTTP 429 以及 5xx 和传输错误上的作业处于待处理状态，等待服务在提供 `Retry-After` 时请求的 `Retry-After`。配置错误（例如缺少 API 密钥或刷新令牌）会立即使作业失败，而不是等待操作截止时间。适用于 HypiHub、BeatAPI、HiAPI、Pollo、Monid 和 TokenDance。


**完整 Changelog**：https://github.com/hypit-ai/hypit/compare/v0.2.11...v0.2.12

---

> 📦 仓库：[hypit-ai/hypit](https://github.com/hypit-ai/hypit) · 🏷️ 版本：`v0.2.12` · 📅 发布：2026-09-21 · [查看英文原版 Release](https://github.com/hypit-ai/hypit/releases/tag/v0.2.12)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
