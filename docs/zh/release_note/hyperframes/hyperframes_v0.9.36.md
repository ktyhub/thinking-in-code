---
title: "hyperframes v0.9.36"
project: "hyperframes"
repo: "heygen-com/hyperframes"
tag: "v0.9.36"
version: "v0.9.36"
published: "2026-11-12"
type: "patch"
lang: "zh"
---

# hyperframes v0.9.36

# 超帧 v0.9.36

发布于 2026 年 11 月 11 日。

当您降低预览质量时，运动模糊预览会更加流畅。渲染仍然绘制全质量模糊。

## 特点

- **核心：** 降低预览质量现在也可以使运动模糊变得更轻。预览在 1/2 处绘制 16 个模糊副本，在 1/4 及以下绘制 8 个模糊副本，而不是 32 个。渲染始终绘制 32 个。在断断续续的播放时降低质量的主机现在可以对仅因模糊而减慢速度的影片执行此操作（[6cc734fd2](https://github.com/heygen-com/hyperframes/commit/6cc734fd24e25c09e28824b5543fa4f85612f02c)、[#7547](https://github.com/heygen-com/hyperframes/pull/7547)）。

## 修复

- **Lint：** 不要在另一台计算机的共享上查找音频（[7ba8f8507](https://github.com/heygen-com/hyperframes/commit/7ba8f8507545edb75f5b89d14c9727da667a3cb0)、[#7572](https://github.com/heygen-com/hyperframes/pull/7572)）。

## 完整 changelog

https://github.com/heygen-com/hyperframes/compare/v0.9.35...v0.9.36

---

> 📦 仓库：[heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) · 🏷️ 版本：`v0.9.36` · 📅 发布：2026-11-12 · [查看英文原版 Release](https://github.com/heygen-com/hyperframes/releases/tag/v0.9.36)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
