---
title: "MinerU mineru-4.1.5-released"
project: "MinerU"
repo: "opendatalab/MinerU"
tag: "mineru-4.1.5-released"
version: "mineru-4.1.5-released"
published: "2026-11-03"
type: "release"
lang: "zh"
---

# MinerU mineru-4.1.5-released

MinerU 4.1.5 修复了解析路径规范化并改进了 CLI 和任务 API 中的文件名处理。

- 相对路径、隐藏目录和 Windows 样式路径现在使用相同的扩展和层验证。本机 CSV 输入无法再绕过 `mineru-kit parse` 质量层验证。参考文献#5711。
- 任务 API 文件名被验证为基本名称；有效的隐藏名称、Unicode 名称和文字百分比编码名称通过 API 和路由器执行保留其身份。
- `file_parse` 保留文件名后缀并一致地处理重复名称。
- `mineru-kit hardware info` 现在以英文显示其报告。

使用 `pip install -U "mineru==4.1.5"` 升级。

完整改动：https://github.com/opendatalab/MinerU/compare/mineru-4.1.4-released...mineru-4.1.5-released

---

> 📦 仓库：[opendatalab/MinerU](https://github.com/opendatalab/MinerU) · 🏷️ 版本：`mineru-4.1.5-released` · 📅 发布：2026-11-03 · [查看英文原版 Release](https://github.com/opendatalab/MinerU/releases/tag/mineru-4.1.5-released)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
