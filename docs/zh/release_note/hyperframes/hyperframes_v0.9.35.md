---
title: "hyperframes v0.9.35"
project: "hyperframes"
repo: "heygen-com/hyperframes"
tag: "v0.9.35"
version: "v0.9.35"
published: "2026-11-11"
type: "patch"
lang: "zh"
---

# hyperframes v0.9.35

# 超帧 v0.9.35

发布于 2026 年 11 月 11 日。

`.env` 和 git 数据等私有文件不包含在预览包中，本地共享仅适用于您自己的计算机。当 `.hyperframesignore` 使用 gitignore 模式时，共享也会持续跟踪更改。

## 修复

- **安全性：** 预览包永远不会包含 `.env` 文件或 git 数据，即使是通过链接也是如此。命名这些文件之一的渲染现在会停止并出现错误。本地共享仅响应此计算机，因此从容器中的 Studio 共享现在会收到 403（[a243169f8](https://github.com/heygen-com/hyperframes/commit/a243169f8a10fa26fe9e9d1d1623d68445e2a3c7)、[#7563](https://github.com/heygen-com/hyperframes/pull/7563)）。
- **安全性：** 通过直接遍历 trusted `PATH` 文件夹来找到帮助程序。在 Windows 上，永远不会搜索工作文件夹（[9a048ac01](https://github.com/heygen-com/hyperframes/commit/9a048ac019e919f9e9c37b1b764172676434511e)、[#7562](https://github.com/heygen-com/hyperframes/pull/7562)）。
- **分享：** 当 `.hyperframesignore` 使用 gitignore 模式（例如 `/exports/` 或 `**/*.mov`）时，更改检测继续工作。之前，这些模式因错误而停止（[c07468d6a]（https://github.com/heygen-com/hyperframes/commit/c07468d6a7155d28828eef1058896b7aa74114a1），[#7568]（https://github.com/heygen-com/hyperframes/pull/7568））。
- **CLI：** 四舍五入时，持续时间和大小会滚动到下一个单位，因此您会看到 `1m 0.0s` 和 `1.0 MB`，而不是 `60.0s` 和 `1024.0 KB` ([182608311](https://github.com/heygen-com/hyperframes/commit/182608311ad9781669b26288a944cc85f28ab1cd)、[#7565](https://github.com/heygen-com/hyperframes/pull/7565))。

## 文档和示例

- **Studio 应用程序：** 品牌套件页面显示套件仅与您的工作区共享（[c218b37a3](https://github.com/heygen-com/hyperframes/commit/c218b37a319661280f337a3304bb7a4f566bddf5)、[#7570](https://github.com/heygen-com/hyperframes/pull/7570)）。

## 内部

- **核心：** 预览运行时为其父级提供类型化消息端口。这为 Studio 准备了密封预览帧，并且尚未更改任何内容（[ef5cdeb0a](https://github.com/heygen-com/hyperframes/commit/ef5cdeb0a02afc993980809cc359dd68a1c4944d)、[#7556](https://github.com/heygen-com/hyperframes/pull/7556)）。
- **CLI：** Local Studio 的共享窗口计数按钮 click 和选项。仅记录固定类别，从不记录链接、路径或电子邮件地址（[2a70733c1](https://github.com/heygen-com/hyperframes/commit/2a70733c15798430e1fae817bc65f1bf90acbed6)、[#7566](https://github.com/heygen-com/hyperframes/pull/7566)）。

## 完整 changelog

https://github.com/heygen-com/hyperframes/compare/v0.9.34...v0.9.35

---

> 📦 仓库：[heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) · 🏷️ 版本：`v0.9.35` · 📅 发布：2026-11-11 · [查看英文原版 Release](https://github.com/heygen-com/hyperframes/releases/tag/v0.9.35)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
