---
title: "hyperframes v0.9.38"
project: "hyperframes"
repo: "heygen-com/hyperframes"
tag: "v0.9.38"
version: "v0.9.38"
published: "2026-11-12"
type: "patch"
lang: "zh"
---

# hyperframes v0.9.38

# 超帧 v0.9.38

发布于 2026 年 11 月 12 日。

Studio 中的音量控制现在可以更改整个 clip，暂停的视频显示与 Mac 上播放的视频相同的颜色，并编辑每次编辑所触及的图层的历史记录。发布还可以将库文件保留在云驱动器上的项目中，并且渲染服务器仅从项目内部加载资源。

## 特点

- **Studio：** 记录每个历史条目目标上的图层名称（[4fad43db2](https://github.com/heygen-com/hyperframes/commit/4fad43db2010d61002cc9f9296f3c5f8bf2d4210)、[#7586](https://github.com/heygen-com/hyperframes/pull/7586)）。
- **CLI：** Heygen 生成默认图像为 nano-banana-2.1 ([fc7cb1aad](https://github.com/heygen-com/hyperframes/commit/fc7cb1aad8d5f01361343d004de1ee7b8143ed20)、[#7591](https://github.com/heygen-com/hyperframes/pull/7591))。
- **CLI：** 以 1.5 倍定价并验证 minimax-h3-image 和图像模型（[88e74e088](https://github.com/heygen-com/hyperframes/commit/88e74e088fef82e3dba1f2972e7292e28eab137d)、[#7589](https://github.com/heygen-com/hyperframes/pull/7589)）。

## 修复

- **脚本：** Release:prepare 拒绝跳过此克隆缺少标签的版本的基线 ([f3626e97c](https://github.com/heygen-com/hyperframes/commit/f3626e97c34f18412a089d79a027bd126d8d4dbc))。
- **Studio：** 预览重新加载在其窗格卸载中间加载后仍然存在（[5a3e46235]（https://github.com/heygen-com/hyperframes/commit/5a3e46235fe1f749006af6bacae01c684f2866ca），[#7590]（https://github.com/heygen-com/hyperframes/pull/7590））。
- **核心：** 以与 Mac 上正在播放的视频相同的颜色显示暂停的视频帧（[303a4c477](https://github.com/heygen-com/hyperframes/commit/303a4c47710a90876e788e47e0fb68615302d12c)、[#7584](https://github.com/heygen-com/hyperframes/pull/7584)）。
- **Studio：** 音量控制可更改整个 clip，包括淡入淡出（[245904d55](https://github.com/heygen-com/hyperframes/commit/245904d55a916d5dc6b186dd90790c6e10a74c13)、[#7587](https://github.com/heygen-com/hyperframes/pull/7587)）。
- **CLI：** Publish 将库文件保留在云驱动器上的项目中（[f7bf5f0c4](https://github.com/heygen-com/hyperframes/commit/f7bf5f0c423565325eb4afea137d629894351d53)、[#7582](https://github.com/heygen-com/hyperframes/pull/7582)）。
- **制作人：** 渲染服务器仅从项目内部加载资源（[03ddfb189](https://github.com/heygen-com/hyperframes/commit/03ddfb189f612a733ea37b7d6e907ef9eb7c089c)、[#7579](https://github.com/heygen-com/hyperframes/pull/7579)）。

## 性能

- **Lint：** 每个 lint 解析每个样式块一次，而不是每个规则解析一次（[32cacab74](https://github.com/heygen-com/hyperframes/commit/32cacab74bb52076efb9e84258f382200b56b19e)、[#7593](https://github.com/heygen-com/hyperframes/pull/7593)）。

## 文档和示例

- **技能：** 在每个媒体使用图像价格旁边命名模型（[748bfe3b2]（https://github.com/heygen-com/hyperframes/commit/748bfe3b2beef424c289dd12cc146b8dfcfa019c），[#7592]（https://github.com/heygen-com/hyperframes/pull/7592））。
- hyperframes.studio 的每个链接都包含访问开始的位置，与主页共享（[6b602495d](https://github.com/heygen-com/hyperframes/commit/6b602495db862ce60c07aa5d68155c4d2e62dfc6)、[#7580](https://github.com/heygen-com/hyperframes/pull/7580)）。

## 完整 changelog

https://github.com/heygen-com/hyperframes/compare/v0.9.37...v0.9.38

---

> 📦 仓库：[heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) · 🏷️ 版本：`v0.9.38` · 📅 发布：2026-11-12 · [查看英文原版 Release](https://github.com/heygen-com/hyperframes/releases/tag/v0.9.38)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
