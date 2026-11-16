---
title: "hyperframes v0.9.55"
project: "hyperframes"
repo: "heygen-com/hyperframes"
tag: "v0.9.55"
version: "v0.9.55"
published: "2026-11-15"
type: "patch"
lang: "zh"
---

# hyperframes v0.9.55

# 超帧 v0.9.55

发布于 2026 年 11 月 15 日。

密封的 Studio 预览现在可以播放视频的代理副本，并在一个当前帧令牌下重新加载。云渲染会在适合时发送一个 zip，并仅上传最大的媒体。文件服务器检查它们所询问的主机，并发布和云渲染暂存跳过其他计算机的网络共享。

## 修复

- **Studio Server：** 子组合头和根标签扫描需要线性时间（[ceb969dba](https://github.com/heygen-com/hyperframes/commit/ceb969dbacff281ec1fdddf9fe22c0fcd34fb663)、[#7866](https://github.com/heygen-com/hyperframes/pull/7866)）。
- **CLI：** 引擎和 CLI 共享一个 trusted PATH 规则，跳过的项目副本说明了原因（[e2430edec](https://github.com/heygen-com/hyperframes/commit/e2430edecf5492a02a363eaa5c30ad2708af5aee)、[#7801](https://github.com/heygen-com/hyperframes/pull/7801)）。
- **CLI：** 云渲染在适合时发送一个 zip，并仅上传最大的媒体（[9bc2b231d](https://github.com/heygen-com/hyperframes/commit/9bc2b231d339609a3f2f48b63f80b162a3d97a4d)、[#7859](https://github.com/heygen-com/hyperframes/pull/7859)）。
- **文档：** 引擎文档说下载限制适用于每次尝试和每个进程（[4c09c8b79]（https://github.com/heygen-com/hyperframes/commit/4c09c8b7937eb8972b947df06dd187608ff02345），[#7867]（https://github.com/heygen-com/hyperframes/pull/7867））。
- **CLI：** 上传档案绝不包含凭证或代理状态文件（[52d43f33a](https://github.com/heygen-com/hyperframes/commit/52d43f33a3102e3fadfbe3d6d24f18c9f2ea689e)、[#7830](https://github.com/heygen-com/hyperframes/pull/7830)）。
- 静态、生产者和引擎文件服务器检查主机并标记运行时页面（[490199cef](https://github.com/heygen-com/hyperframes/commit/490199cef8475e65eaa166b23bbf1f3034d272a9)、[#7852](https://github.com/heygen-com/hyperframes/pull/7852)）。
- **Studio：** 密封预览的重新加载要求在一个当前帧标记下（[1f17b3dfe](https://github.com/heygen-com/hyperframes/commit/1f17b3dfebf9cc1bfd20107c089151e0e8b07910)、[#7862](https://github.com/heygen-com/hyperframes/pull/7862)）。
- **CLI：** 发布和云渲染暂存跳过其他计算机的网络共享（[c030e3193]（https://github.com/heygen-com/hyperframes/commit/c030e3193d0d5e910d0d03d0a881848b35cdc44d），[#7858]（https://github.com/heygen-com/hyperframes/pull/7858））。
- **Studio Server：** 密封预览等待视频的代理副本通过其预检（[ae5​​829db7](https://github.com/heygen-com/hyperframes/commit/ae5829db7e96675060eb810ac03139d60156b10e)、[#7856](https://github.com/heygen-com/hyperframes/pull/7856)）。
- **CLI：** 子文件夹呈现读取祖先的记录，无论其存储或拼写如何（[fe21bee3c]（https://github.com/heygen-com/hyperframes/commit/fe21bee3cf40007c23e7a3ad7dc7a2cf08f5df20），[#7847]（https://github.com/heygen-com/hyperframes/pull/7847））。

## 完整 changelog

https://github.com/heygen-com/hyperframes/compare/v0.9.54...v0.9.55

---

> 📦 仓库：[heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) · 🏷️ 版本：`v0.9.55` · 📅 发布：2026-11-15 · [查看英文原版 Release](https://github.com/heygen-com/hyperframes/releases/tag/v0.9.55)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
