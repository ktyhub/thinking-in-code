---
title: "hyperframes v0.9.51"
project: "hyperframes"
repo: "heygen-com/hyperframes"
tag: "v0.9.51"
version: "v0.9.51"
published: "2026-11-15"
type: "patch"
lang: "zh"
---

# hyperframes v0.9.51

# 超帧 v0.9.51

发布于 2026 年 11 月 15 日。

渲染服务可以命名其渲染必须视为非公共的额外网络，并且映射或 NAT64 地址根据它们携带的 IPv4 地址进行判断。网站捕获将 Chrome 的沙箱保留在主机支持的地方，并且帮助程序仅从 trusted 文件夹启动。

## 特点

- **引擎：** 操作员可以添加渲染必须视为非公开的网络（[b54f2079e](https://github.com/heygen-com/hyperframes/commit/b54f2079ed715e69b10c6be54909030f64827a7a)、[#7790](https://github.com/heygen-com/hyperframes/pull/7790)）。

## 修复

- **引擎：** 通过映射和NAT64地址携带的IPv4来判断它们；生产者导出规则（[54e4a2be3]（https://github.com/heygen-com/hyperframes/commit/54e4a2be3e7a9fcf69b8b215ce0563f3900d2dd0），[#7789]（https://github.com/heygen-com/hyperframes/pull/7789））。
- 文档图像上传仅发布常规文件，CI 拒绝新的符号链接（[9320c44e1](https://github.com/heygen-com/hyperframes/commit/9320c44e130ab2fbd073599f576d0f42aa7e346d)、[#7776](https://github.com/heygen-com/hyperframes/pull/7776)）。
- **CLI 和 Studio 服务器：** 接收文件防护涵盖子文件夹和拼写；命名为 media 的播放列表永远不会到达 ffmpeg（[870b1fa4d](https://github.com/heygen-com/hyperframes/commit/870b1fa4dc35436df9a3c1a3c902549e66565add)、[#7771](https://github.com/heygen-com/hyperframes/pull/7771)）。
- **CLI：** 在主机支持的情况下，保持 Chrome 沙盒处于打开状态以进行网站捕获（[27b195feb](https://github.com/heygen-com/hyperframes/commit/27b195febcdfebe742b8eaaba51dcfadc27c5c45)、[#7774](https://github.com/heygen-com/hyperframes/pull/7774)）。
- **CLI：** 将捕获的页面文本保留在生成的代理指令文件之外（[e4e93d6ed](https://github.com/heygen-com/hyperframes/commit/e4e93d6ed9dfcd7e0e8a36fdd06ade64e196b729)、[#7772](https://github.com/heygen-com/hyperframes/pull/7772)）。
- **引擎：** 仅从 trusted 文件夹启动 nvidia-smi、vm_stat、ps 和任务列表（[e3ff9c803](https://github.com/heygen-com/hyperframes/commit/e3ff9c803cd3bccdf39cf84f5bc36e52a61e1345)、[#7788](https://github.com/heygen-com/hyperframes/pull/7788)）。
- **制作人：** 每个视频的尺寸样本共享一个网格（[1d83e2520](https://github.com/heygen-com/hyperframes/commit/1d83e2520a27a445c8278237417cd90f0e002aea)、[#7782](https://github.com/heygen-com/hyperframes/pull/7782)）。

## 完整 changelog

https://github.com/heygen-com/hyperframes/compare/v0.9.50...v0.9.51

---

> 📦 仓库：[heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) · 🏷️ 版本：`v0.9.51` · 📅 发布：2026-11-15 · [查看英文原版 Release](https://github.com/heygen-com/hyperframes/releases/tag/v0.9.51)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
