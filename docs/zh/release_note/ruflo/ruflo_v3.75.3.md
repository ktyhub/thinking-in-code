---
title: "ruflo v3.75.3"
project: "ruflo"
repo: "ruvnet/ruflo"
tag: "v3.75.3"
version: "v3.75.3"
published: "2026-11-10"
type: "patch"
lang: "zh"
---

# ruflo v3.75.3

安全和修复发布。

## 安全

- **`@claude-flow/shared` 3.0.8 在 zod 4** (#4905)。修复了新安装的 `ruflo` 上的 4 个高严重性 `npm audit` 问题 (GHSA-mrhx-c7xc-m3w5)。
- **模式下载的固定密钥验证** (#4936)。当 `requireVerification` 打开时，下载的模式必须根据固定密钥进行验证。默认关闭。
- **帮助文件的编写没有遵循符号链接** (#4934)。如果 `.claude` 本身是符号链接，则将跳过帮助程序。

## 修复

- **按键进行洞察查找**（#4942，修复#4911；`@claude-flow/memory` 3.3.1）。 `onInsightAccessed` 现在通过键查找见解，而不仅仅是通过行 ID。
- **重新打开的任务清除 `completedAt`** (#4935)。
- **Raft 投票**（#4938，关闭#4937；`@claude-flow/swarm` 3.0.6）。旧版 `requestVote()` 现在强制每个学期投一票并进行日志最新检查。
- **医生测试隔离** (#4943)。

## 与此列车一起发布的软件包

`@claude-flow/memory` 3.3.1、`@claude-flow/swarm` 3.0.6（独立发布；CLI 不依赖于 swarm）。 `@claude-flow/shared` 3.0.8 已经在 npm 上。

`alpha` 和 `v3alpha` 保留在 3.75.2 上。

---

> 📦 仓库：[ruvnet/ruflo](https://github.com/ruvnet/ruflo) · 🏷️ 版本：`v3.75.3` · 📅 发布：2026-11-10 · [查看英文原版 Release](https://github.com/ruvnet/ruflo/releases/tag/v3.75.3)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
