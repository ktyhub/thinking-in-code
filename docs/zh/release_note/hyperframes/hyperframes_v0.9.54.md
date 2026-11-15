---
title: "hyperframes v0.9.54"
project: "hyperframes"
repo: "heygen-com/hyperframes"
tag: "v0.9.54"
version: "v0.9.54"
published: "2026-11-15"
type: "patch"
lang: "zh"
---

# hyperframes v0.9.54

# HyperFrames v0.9.54

Released on 2026-11-15.

Studio 主机现在可以使用 sandboxOrigin 选项或 VITE_STUDIO_OPAQUE_PREVIEW_ENABLED 在其自己的密封源上运行预览，默认情况下关闭。密封后，预览的图像、媒体、获取的文件、控制台错误面板以及 GSAP 关键帧和 3D 预览将继续工作。渲染、捕获和捆绑还忽略了应用程序自己的 .hyperframes 记录。

## 特点

- **Studio：** 主机可以共享预览的编辑端口 client ([3a4f57252](https://github.com/heygen-com/hyperframes/commit/3a4f57252377051f6602bd0149e84f8ead0845b2)、[#7811](https://github.com/heygen-com/hyperframes/pull/7811))。
- **Studio：** 主持人可以密封 NLEPreview 绘制的预览帧（[a73ecff2b](https://github.com/heygen-com/hyperframes/commit/a73ecff2bef2168c47625e781bc1de13c7ca23ce)、[#7817](https://github.com/heygen-com/hyperframes/pull/7817)）。
- **Studio：** 控制台错误面板通过其编辑端口读取密封预览（[5341d7255](https://github.com/heygen-com/hyperframes/commit/5341d7255c4795a9dda676cb21409a4655b2e429)、[#7824](https://github.com/heygen-com/hyperframes/pull/7824)）。
- **Studio Server：** 不透明预览加载其图像、媒体和获取的文件（[88ffe087c](https://github.com/heygen-com/hyperframes/commit/88ffe087cae5d005fdc3d7b9567283c72a9ba5d7)、[#7806](https://github.com/heygen-com/hyperframes/pull/7806)）。

## 修复

- **制作人：** 根据项目文件夹检查带有方案前缀的媒体源（[d8e36aa9d](https://github.com/heygen-com/hyperframes/commit/d8e36aa9dc7b4c007cbcb6bc0be0dcb21c1205bc)、[#7851](https://github.com/heygen-com/hyperframes/pull/7851)）。
- **文档：** v0.9.53 注释列出了进入核心的关键规则（[c46143dd7](https://github.com/heygen-com/hyperframes/commit/c46143dd7904204c6dc0a2e574607d8dab238496)、[#7855](https://github.com/heygen-com/hyperframes/pull/7855)）。
- 仅应答渲染和捕获文件服务器上的环回主机（[f891a3058](https://github.com/heygen-com/hyperframes/commit/f891a305812e9046777e32ff49eef83afe9bf7f5)、[#7853](https://github.com/heygen-com/hyperframes/pull/7853)）。
- **引擎：** 远程下载有绝对期限并在磁盘填满之前停止（[e1043659d](https://github.com/heygen-com/hyperframes/commit/e1043659d4490fde8458063a9585c30478464c8d)、[#7827](https://github.com/heygen-com/hyperframes/pull/7827)）。
- **CLI：** 音频缓存永远不会通过 .hyperframes 中的链接进行写入或读取（[9701f0639](https://github.com/heygen-com/hyperframes/commit/9701f0639c3614f4fb33f2a83973adafd179ef08)、[#7825](https://github.com/heygen-com/hyperframes/pull/7825)）。
- **解析器：**帮助程序永远不会来自子文件夹所在的项目（[96cc8cb85]（https://github.com/heygen-com/hyperframes/commit/96cc8cb85242fc72bb2e1371048d733cb4993c68），[#7845]（https://github.com/heygen-com/hyperframes/pull/7845））。
- **CLI：** 仅当未保存任何内容时才使用项目 .env 密钥（[de1ce6898](https://github.com/heygen-com/hyperframes/commit/de1ce68988a6cce48a73a67a8d2c2b7fb4603bad)、[#7848](https://github.com/heygen-com/hyperframes/pull/7848)）。
- **CLI：** 将项目文本和其他计算机的共享保留在渲染和上传通知之外（[70d60ce03](https://github.com/heygen-com/hyperframes/commit/70d60ce03719030bda362d6c7107a9fa350c6090)、[#7849](https://github.com/heygen-com/hyperframes/pull/7849)）。
- **Studio：** GSAP 关键帧和 3D 预览不再出现密封预览（[39dc1e232](https://github.com/heygen-com/hyperframes/commit/39dc1e232d242cdecf9ad782483587b288cc1392)、[#7833](https://github.com/heygen-com/hyperframes/pull/7833)）。
- 快照在其输出中转义合成文本；剧照扫描转码缓存（[a2f926708](https://github.com/heygen-com/hyperframes/commit/a2f926708901f1fc52c18888db103cd768537824)、[#7832](https://github.com/heygen-com/hyperframes/pull/7832)）。
- 渲染、捕获和捆绑拒绝应用程序的 .hyperframes 记录（[962ddb7c5](https://github.com/heygen-com/hyperframes/commit/962ddb7c543519be17f6085a9c105d29d5886ecc)、[#7828](https://github.com/heygen-com/hyperframes/pull/7828)）。

## Full changelog

https://github.com/heygen-com/hyperframes/compare/v0.9.53...v0.9.54

---

> 📦 仓库：[heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) · 🏷️ 版本：`v0.9.54` · 📅 发布：2026-11-15 · [查看英文原版 Release](https://github.com/heygen-com/hyperframes/releases/tag/v0.9.54)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
