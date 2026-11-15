---
title: "MinerU mineru-4.1.6-released"
project: "MinerU"
repo: "opendatalab/MinerU"
tag: "mineru-4.1.6-released"
version: "mineru-4.1.6-released"
published: "2026-11-03"
type: "release"
lang: "zh"
---

# MinerU mineru-4.1.6-released

MinerU 4.1.6 改进了 PDF 脚注公式并删除了重复的嵌套文本区域。

- 将公式和公式编号保留在脚注内，以便它们能够实现公式识别并以正确的身份进行本机文本填充。
- 删除具有相同类别的完全包含的文本框，同时保留外部区域和阅读顺序。
- 在 ONNX 和 Torch 后端之间共享布局后处理，包括公式保护和文本重复数据删除。
- 将 DocVortex 依赖项升级到 `>=0.6.12,<0.7`。
- 中英文文档主页添加项目徽章。

使用 `pip install -U "mineru==4.1.6"` 升级。

完整改动：https://github.com/opendatalab/MinerU/compare/mineru-4.1.5-released...mineru-4.1.6-released

---

> 📦 仓库：[opendatalab/MinerU](https://github.com/opendatalab/MinerU) · 🏷️ 版本：`mineru-4.1.6-released` · 📅 发布：2026-11-03 · [查看英文原版 Release](https://github.com/opendatalab/MinerU/releases/tag/mineru-4.1.6-released)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
