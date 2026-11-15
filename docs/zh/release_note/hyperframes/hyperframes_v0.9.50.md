---
title: "hyperframes v0.9.50"
project: "hyperframes"
repo: "heygen-com/hyperframes"
tag: "v0.9.50"
version: "v0.9.50"
published: "2026-11-15"
type: "patch"
lang: "zh"
---

# hyperframes v0.9.50

# 超帧 v0.9.50

发布于 2026 年 11 月 15 日。

渲染器现在仅读取属于它们的媒体和文件，包括每个播放列表的播放列表名称。与其他云渲染路径一样，Lambda 渲染默认仅到达公共地址，并且 lint 规则可以更快地检查大文件。

## 修复

- **AWS Lambda：** Lambda 仅渲染公共地址，除非该函数选择退出（[e8a59bf17](https://github.com/heygen-com/hyperframes/commit/e8a59bf1774f9880109bb7a426c55825725feb74)、[#7780](https://github.com/heygen-com/hyperframes/pull/7780)）。
- **引擎：** 媒体播放列表通过其命名的每个列表进行检查（[f4b6aad33](https://github.com/heygen-com/hyperframes/commit/f4b6aad33251715e803e3bb84c24a0b446a5e956)、[#7778](https://github.com/heygen-com/hyperframes/pull/7778)）。
- **引擎：** 拒绝在其文件夹之外命名文件的媒体播放列表（[06cf96464](https://github.com/heygen-com/hyperframes/commit/06cf9646463596167a5b7e41f33fa1acdc5ced0f)、[#7768](https://github.com/heygen-com/hyperframes/pull/7768)）。
- 渲染文件服务器拒绝 env 和 Git 文件；显示框采样保留在渲染内（[603395c89](https://github.com/heygen-com/hyperframes/commit/603395c89a680403f370be816331f1507dc9bd5c)、[#7765](https://github.com/heygen-com/hyperframes/pull/7765)）。
- **生产者：** 渲染服务媒体探针保留在公共 HTTPS 上（[0e767d620](https://github.com/heygen-com/hyperframes/commit/0e767d620f630c4993e9b12364ae6d1e11f24421)、[#7764](https://github.com/heygen-com/hyperframes/pull/7764)）。

## 性能

- **Lint：** 规则在线性时间内扫描脚本、样式和注释块（[12832e3a9](https://github.com/heygen-com/hyperframes/commit/12832e3a98138b45b94a376f9f324cb44667c5ba)、[#7770](https://github.com/heygen-com/hyperframes/pull/7770)）。

## 完整 changelog

https://github.com/heygen-com/hyperframes/compare/v0.9.49...v0.9.50

---

> 📦 仓库：[heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) · 🏷️ 版本：`v0.9.50` · 📅 发布：2026-11-15 · [查看英文原版 Release](https://github.com/heygen-com/hyperframes/releases/tag/v0.9.50)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
