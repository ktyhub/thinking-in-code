---
title: "hyperframes v0.9.47"
project: "hyperframes"
repo: "heygen-com/hyperframes"
tag: "v0.9.47"
version: "v0.9.47"
published: "2026-11-14"
type: "patch"
lang: "zh"
---

# hyperframes v0.9.47

# 超帧 v0.9.47

发布于 2026 年 11 月 14 日。

文件名中包含空格或重音符号的 clip 在导出时不会再听到两次。 HEVC 手机视频在 Studio 中保持其形状，并在没有硬链接的驱动器上检查、渲染和下载工作。

## 特点

- **核心：** 除了查找项目（[32f562bbd](https://github.com/heygen-com/hyperframes/commit/32f562bbd00de00b0aa68acd5621fd00a7b4e0de)、[#7734](https://github.com/heygen-com/hyperframes/pull/7734)）之外，包含index.html 的文件夹是一个步骤。

## 修复

- **引擎：** 渲染服务可以将渲染页面保持为资产下载地址规则（默认情况下关闭）（[29533f631](https://github.com/heygen-com/hyperframes/commit/29533f631fdfd3b5bd733319de49d2a97c1fbf3f)、[#7748](https://github.com/heygen-com/hyperframes/pull/7748)）。
- **生产者：** 文件名中包含空格或重音符号的 clip 会混合到导出中一次（[a3fa250b2](https://github.com/heygen-com/hyperframes/commit/a3fa250b25c7c42dedaf4b19b5df65d80260cc65)、[#7747](https://github.com/heygen-com/hyperframes/pull/7747)）。
- **Studio Server：** 保存 Windows 短暂保留的编辑，而不冻结应用程序（[a92498b90](https://github.com/heygen-com/hyperframes/commit/a92498b9033a069418940fe54360e172968381e4)、[#7744](https://github.com/heygen-com/hyperframes/pull/7744)）。
- **CLI：** 未知标志的错误遗漏了隐藏的重命名垫片（[cb52dcf64]（https://github.com/heygen-com/hyperframes/commit/cb52dcf646b8c0a413ce80c99fb6719ad452a2c1），[#7746]（https://github.com/heygen-com/hyperframes/pull/7746））。
- 在没有硬链接的驱动器上检查、渲染和下载工作（[b746a0ee1](https://github.com/heygen-com/hyperframes/commit/b746a0ee1389895b861b7177e226df3622d09bd4)、[#7737](https://github.com/heygen-com/hyperframes/pull/7737)）。
- **Studio：** 具有长期参考图片的 HEVC 保持其像素长宽比（[b72387446](https://github.com/heygen-com/hyperframes/commit/b7238744624b49fc2a54cb7cd5c9c73b6004f92e)、[#7739](https://github.com/heygen-com/hyperframes/pull/7739)）。
- **CLI：** 检查仍然报告电影的其他 GL 驱动程序注释（[d26ec2538]（https://github.com/heygen-com/hyperframes/commit/d26ec25385630f2427079c65bb300f0e12f26661），[#7745]（https://github.com/heygen-com/hyperframes/pull/7745））。
- **CLI：** 未知标志列出了命令的真实标志（[88beb282f]（https://github.com/heygen-com/hyperframes/commit/88beb282f26cd9c8eaa6381e477336e1a3971d65），[#7740]（https://github.com/heygen-com/hyperframes/pull/7740））。
- **CLI：** 检查不再将其自身像素读取的 GPU 停顿报告为电影警告（[35d145157](https://github.com/heygen-com/hyperframes/commit/35d145157b277ff9b6b2178736e6b03406678de9)、[#7736](https://github.com/heygen-com/hyperframes/pull/7736)）。
- **CLI：** 检查将穿过分割 clip 的线作为一次保持的时间（[c31e7dd08]（https://github.com/heygen-com/hyperframes/commit/c31e7dd08ce2046d304e7ac28639ce3154b97912），[#7733]（https://github.com/heygen-com/hyperframes/pull/7733））。

## 目录

- **注册表：** 标题突出显示会在单词结束时清除短单词的突出显示（[e21e64f6a](https://github.com/heygen-com/hyperframes/commit/e21e64f6ab51f9024f9c0fe0d1acb39553887c99)、[#7735](https://github.com/heygen-com/hyperframes/pull/7735)）。

## 完整 changelog

https://github.com/heygen-com/hyperframes/compare/v0.9.46...v0.9.47

---

> 📦 仓库：[heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) · 🏷️ 版本：`v0.9.47` · 📅 发布：2026-11-14 · [查看英文原版 Release](https://github.com/heygen-com/hyperframes/releases/tag/v0.9.47)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
