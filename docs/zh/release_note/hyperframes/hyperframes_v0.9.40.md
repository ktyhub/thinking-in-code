---
title: "hyperframes v0.9.40"
project: "hyperframes"
repo: "heygen-com/hyperframes"
tag: "v0.9.40"
version: "v0.9.40"
published: "2026-11-12"
type: "patch"
lang: "zh"
---

# hyperframes v0.9.40

# 超帧 v0.9.40

发布于 2026 年 11 月 12 日。

本地渲染现在以大约显示的大小提取每个视频，因此在 1080p 电影中导出较长的 4K 素材不再会填满磁盘。帧的像素不再依赖于在其之前绘制的帧，渲染工作的大小取决于进程可能使用的 CPU，并且检查会听到一个 WAV，其标头错误地说明了其字节率。

## 特点

- **核心：** 编辑通道的运行时元素句柄（[e1ddb2e16](https://github.com/heygen-com/hyperframes/commit/e1ddb2e162388fcef4b6496ceb81d02fe22fe3d3)、[#7603](https://github.com/heygen-com/hyperframes/pull/7603)）。

## 修复

- **CLI：** 检查听到一个 WAV，其标头错误地描述了其字节率，因为渲染器播放它（[97df93fb0]（https://github.com/heygen-com/hyperframes/commit/97df93fb07dc0e1c66aba8eafbb10c2692dbe7db），[#7618]（https://github.com/heygen-com/hyperframes/pull/7618））。
- **Docker：** 2026 年 11 月安全版本的节点 22.23.5（[5bf361f52](https://github.com/heygen-com/hyperframes/commit/5bf361f5247a677b7360b01a255a7db797296086)、[#7611](https://github.com/heygen-com/hyperframes/pull/7611)）。
- **引擎：** 帧的像素不再依赖于在其之前绘制的帧（[b4fc4736d](https://github.com/heygen-com/hyperframes/commit/b4fc4736d7934b1d783fe8aefc6799b1828e4e6b)、[#7181](https://github.com/heygen-com/hyperframes/pull/7181)）。
- **CLI:** 添加 --dir 为丢失的文件夹命名确切的 init 命令（[bfd3fe644](https://github.com/heygen-com/hyperframes/commit/bfd3fe644bbbf1df2d059059b7c5b311f6b80601)、[#7615](https://github.com/heygen-com/hyperframes/pull/7615)）。
- **制作人：** 本地渲染以大约显示的大小提取每个视频（[54bcdc616](https://github.com/heygen-com/hyperframes/commit/54bcdc616fd59fb324367615684c915480a9c634)、[#7609](https://github.com/heygen-com/hyperframes/pull/7609)）。
- **引擎：** 渲染工作的大小取决于进程可能使用的 CPU（[395c845cd](https://github.com/heygen-com/hyperframes/commit/395c845cd3131aaf7bb5a0181818c377a81f4def)、[#7612](https://github.com/heygen-com/hyperframes/pull/7612)）。
- **引擎：** 以一半大小显示的视频以一半大小提取（[cc47f7ea7](https://github.com/heygen-com/hyperframes/commit/cc47f7ea74e530003326655d1ba012e2b9c908d8)、[#7607](https://github.com/heygen-com/hyperframes/pull/7607)）。

## 目录

- **CLI：**“超框架注册表搜索”运行目录（[83b34cbe4]（https://github.com/heygen-com/hyperframes/commit/83b34cbe49d5a44335875c44a2b95cef75211dc4），[#7610]（https://github.com/heygen-com/hyperframes/pull/7610））。

## 内部

- **技能：** 将 Python 编码防护移出技能根（[33304cff0]（https://github.com/heygen-com/hyperframes/commit/33304cff04a601f19128111f77f6538af340f306），[#7606]（https://github.com/heygen-com/hyperframes/pull/7606））。
- **制作人：** 在停顿和帧窗口测试之前支付第一次渲染的启动成本（[d1a366b42]（https://github.com/heygen-com/hyperframes/commit/d1a366b42f7e05af82ab38ef637b97673241a943），[#7503]（https://github.com/heygen-com/hyperframes/pull/7503））。

## 完整 changelog

https://github.com/heygen-com/hyperframes/compare/v0.9.39...v0.9.40

---

> 📦 仓库：[heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) · 🏷️ 版本：`v0.9.40` · 📅 发布：2026-11-12 · [查看英文原版 Release](https://github.com/heygen-com/hyperframes/releases/tag/v0.9.40)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
