---
title: "MinerU mineru-4.1.4-released"
project: "MinerU"
repo: "opendatalab/MinerU"
tag: "mineru-4.1.4-released"
version: "mineru-4.1.4-released"
published: "2026-11-02"
type: "release"
lang: "zh"
---

# MinerU mineru-4.1.4-released

中文

- 标准/高级的PDF文本模式使用VLM识别表格外的行内公式切片，保留混合文本与公式；单个切片识别失败时局部回退MFR。
- 改进了公式定界符和文本转义处理，避免普通文本中的美元符号在公式生成时被误判或提示导出转义字符。
- 将 DocVortex 最低版本提升至 0.6.11，并在中英文 README 中补充解析档位指南入口。

英语

- 在标准/高级 PDF 文本模式下，使用 VLM 文本识别表格外的内联公式作物，通过按作物 MFR 回退保留混合文本和数学。
- 改进数学分隔符和文本转义处理，使普通美元符号保留文本，而没有多余的转义字符。
- 需要 0.6 系列中的 DocVortex 0.6.11 或更高版本，并链接两个自述文件中的解析层指南。

相关公关：https://github.com/opendatalab/MinerU/pull/5706

**完整 Changelog**：https://github.com/opendatalab/MinerU/compare/mineru-4.1.3-released...mineru-4.1.4-released

---

> 📦 仓库：[opendatalab/MinerU](https://github.com/opendatalab/MinerU) · 🏷️ 版本：`mineru-4.1.4-released` · 📅 发布：2026-11-02 · [查看英文原版 Release](https://github.com/opendatalab/MinerU/releases/tag/mineru-4.1.4-released)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
