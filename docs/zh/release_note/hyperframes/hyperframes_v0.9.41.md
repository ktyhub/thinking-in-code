---
title: "hyperframes v0.9.41"
project: "hyperframes"
repo: "heygen-com/hyperframes"
tag: "v0.9.41"
version: "v0.9.41"
published: "2026-11-13"
type: "patch"
lang: "zh"
---

# hyperframes v0.9.41

# 超帧 v0.9.41

发布于 2026 年 11 月 13 日。

快速捕获在 Chrome 157 及更高版本上再次运行，修复了在绘制元素图像时失败的 Windows 导出。本地渲染将 Chrome 的沙箱保留在主机支持的地方，并仅使用它需要的环境启动 Chrome，并用它所拥有的环境解释启动失败的情况，云渲染 --json 列出上传遗漏的文件，发布仅复制来自项目外部的媒体、字体、CSS 和 JS 文件，并遗漏导入时传入的其余文件，作为链接给出的视频变量现在播放一次声音，仅因大小写不同的媒体 id 获取单独的文件夹，以便渲染不再因丢失文件而失败，以及Studio 时间轴和叠加层在其通道上读取不透明预览。

## 特点

- **CLI:** 云渲染 --json 列出上传遗漏的文件（[2591abfbf](https://github.com/heygen-com/hyperframes/commit/2591abfbf014c2f70fdc48ac315fd8acbd704e3d)、[#7631](https://github.com/heygen-com/hyperframes/pull/7631)）。
- **Studio：** 从其通道上的不透明预览中读取叠加几何体（[faff4e16a](https://github.com/heygen-com/hyperframes/commit/faff4e16a8719c63234ac7a02fc3006ddf3cc375)、[#7628](https://github.com/heygen-com/hyperframes/pull/7628)）。
- **Studio：** 时间线选择和选择刷新通过其通道读取不透明预览（[aed4c18fe](https://github.com/heygen-com/hyperframes/commit/aed4c18feb6b9d57aa91307306b0299a46b30974)、[#7613](https://github.com/heygen-com/hyperframes/pull/7613)）。

## 修复

- **CLI:** 仅复制项目外部的媒体、字体、CSS 和 JS 文件（[89a7aa300](https://github.com/heygen-com/hyperframes/commit/89a7aa30042e34eb2643205e1dca6a18b642cf0e)、[#7636](https://github.com/heygen-com/hyperframes/pull/7636)）。
- **引擎：** 将仅大小写不同的媒体 ID 保留在单独的文件夹中（[b54e4981f](https://github.com/heygen-com/hyperframes/commit/b54e4981f2f710e928215e3138e1fa075b1d1108)、[#7635](https://github.com/heygen-com/hyperframes/pull/7635)）。
- **制作人：** 作为链接给出的视频变量播放一次声音（[2760fa119]（https://github.com/heygen-com/hyperframes/commit/2760fa11916d37a512044f6243fcbbaba43fad3a），[#7633]（https://github.com/heygen-com/hyperframes/pull/7633））。
- **引擎：** 使用其所拥有的环境诊断 Chrome 启动失败（[9701f4bbf](https://github.com/heygen-com/hyperframes/commit/9701f4bbf3d1ef41753dcf5613fead937e1edf2c)、[#7634](https://github.com/heygen-com/hyperframes/pull/7634)）。
- **引擎：** 仅使用所需的环境启动 Chrome ([24d56e681](https://github.com/heygen-com/hyperframes/commit/24d56e6813c776ede08a7ebb2a7f963ac31b5526)、[#7629](https://github.com/heygen-com/hyperframes/pull/7629))。
- **引擎：** 诊断出现错误的启动尝试（[43722355a](https://github.com/heygen-com/hyperframes/commit/43722355a3efa42c2675ce7c95d69b4fd51aa9bb)、[#7630](https://github.com/heygen-com/hyperframes/pull/7630)）。
- **CLI：** 发布会忽略导入项目中附带的外部文件（[a810a8b00]（https://github.com/heygen-com/hyperframes/commit/a810a8b002113534e6c2219818f4f0d5010862d1），[#7598]（https://github.com/heygen-com/hyperframes/pull/7598））。
- **引擎：** 在主机支持的情况下，保持 Chrome 的沙盒处于打开状态以进行本地渲染（[400a4e228](https://github.com/heygen-com/hyperframes/commit/400a4e22853906e531ab76d1b45792e70cb79ace)、[#7625](https://github.com/heygen-com/hyperframes/pull/7625)）。
- **引擎：** 快速捕获适用于 Chrome 157+，它需要 content=drawable ([9c3258ccb](https://github.com/heygen-com/hyperframes/commit/9c3258ccbf8f88e0f6656cd358e95f926a09160c)、[#7626](https://github.com/heygen-com/hyperframes/pull/7626))。
- **制作人，文档：** 运动模糊的编译提示和预览声明说明了测量的内容（[e09fe6e50]（https://github.com/heygen-com/hyperframes/commit/e09fe6e505d7d355c7daa15389b6b9dbe0d74248），[#7581]（https://github.com/heygen-com/hyperframes/pull/7581））。

## 内部

- **测试：** 将 gen-os-static 资源链接移至 static.heygen.ai（[aadd5bd6f](https://github.com/heygen-com/hyperframes/commit/aadd5bd6f28bbf7c66bd96b1fda429d16eed5623)、[#7536](https://github.com/heygen-com/hyperframes/pull/7536)）。
- 给予测试（运行时）15 分钟（[d30f1f4ce](https://github.com/heygen-com/hyperframes/commit/d30f1f4ce42406d7e5cb2c6b70426abf0ef7afa3)、[#7627](https://github.com/heygen-com/hyperframes/pull/7627)）。
- **引擎：** 模糊轨迹遮罩覆盖了快门的扫描，而不仅仅是整个帧（[2df837be9]（https://github.com/heygen-com/hyperframes/commit/2df837be9efbe1d4346ee7f19be806dd51c56f16），[#7624]（https://github.com/heygen-com/hyperframes/pull/7624））。

## 完整 changelog

https://github.com/heygen-com/hyperframes/compare/v0.9.40...v0.9.41

---

> 📦 仓库：[heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) · 🏷️ 版本：`v0.9.41` · 📅 发布：2026-11-13 · [查看英文原版 Release](https://github.com/heygen-com/hyperframes/releases/tag/v0.9.41)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
