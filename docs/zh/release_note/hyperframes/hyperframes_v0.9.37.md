---
title: "hyperframes v0.9.37"
project: "hyperframes"
repo: "heygen-com/hyperframes"
tag: "v0.9.37"
version: "v0.9.37"
published: "2026-11-12"
type: "patch"
lang: "zh"
---

# hyperframes v0.9.37

# 超帧 v0.9.37

发布于 2026 年 11 月 12 日。

当共享无法读取 `.hyperframesignore` 时，共享将拒绝构建存档，因此被忽略的文件将被排除在外。 `templates pull` 还拒绝包含链接的档案。

## 修复

- **CLI:** `hyperframes templates pull` 拒绝包含普通文件和文件夹以外的任何内容的存档，例如符号链接、硬链接或设备条目。没有任何内容被解压，也没有留下任何部分文件夹。否则，拉取模板内的链接可以让您预览、渲染和发布到达计算机上其他位置的文件（[ab66e5bd7](https://github.com/heygen-com/hyperframes/commit/ab66e5bd72ad16b36a37dd1ee50d23cc21b41bb0)、[#7576](https://github.com/heygen-com/hyperframes/pull/7576)）。
- **分享：** 当`.hyperframesignore`无法读取时，`snapshotProject`和`snapshotFiles`再次抛出`invalid_source_ignore`。在 0.9.35 中，他们跳过了不可读的文件，因此从快照构建的存档可能包含忽略文件打算忽略的文件。仅使用这些函数进行更改检测的主机应传递 `{ lenientIgnore: true }` 以保持 0.9.35 行为。 `projectFingerprint` 已经这样做了（[35cf03cab]（https://github.com/heygen-com/hyperframes/commit/35cf03cab9e75a4f21fc90cf0dac8a08310ab6ad），[#7573]（https://github.com/heygen-com/hyperframes/pull/7573））。

## 完整 changelog

https://github.com/heygen-com/hyperframes/compare/v0.9.36...v0.9.37

---

> 📦 仓库：[heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) · 🏷️ 版本：`v0.9.37` · 📅 发布：2026-11-12 · [查看英文原版 Release](https://github.com/heygen-com/hyperframes/releases/tag/v0.9.37)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
