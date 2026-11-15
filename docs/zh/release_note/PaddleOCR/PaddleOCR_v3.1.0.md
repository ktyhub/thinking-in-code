---
title: "PaddleOCR v3.1.0"
project: "PaddleOCR"
repo: "PaddlePaddle/PaddleOCR"
tag: "v3.1.0"
version: "v3.1.0"
published: "2025-06-29"
type: "minor"
lang: "zh"
---

# PaddleOCR v3.1.0

## 2025.6.29 v3.1.0 发布

- **关键模型和管道：**
  - **新增PP-OCRv5多语言文本识别模型**，支持法语、西班牙语、葡萄牙语、俄语、韩语等37种语言的文本识别模型的训练和推理过程。 **平均准确率提升30%以上。** [详情](https://paddlepaddle.github.io/PaddleOCR/latest/en/version3.x/algorithm/PP-OCRv5/PP-OCRv5_multi_languages.html)
  - 升级了PP-StructureV3中的**PP-Chart2Table模型**，进一步增强图表转表格的能力。在内部自定义评估集上，指标 (RMS-F1) **增加了 9.36 个百分点 (71.24% -> 80.60%)。**
  - 全新推出**文档翻译管道PP-DocTranslation，基于PP-StructureV3和ERNIE 4.5 Turbo**，支持Markdown格式文档、各种复杂版式PDF文档、文档图片的翻译，并将结果保存为Markdown格式文档。 [详情](https://paddlepaddle.github.io/PaddleOCR/latest/en/version3.x/pipeline_usage/PP-DocTranslation.html)


- **新MCP服务器：** [详情](https://paddlepaddle.github.io/PaddleOCR/latest/en/version3.x/deployment/mcp_server.html)
  - **支持 OCR 和 PP-StructureV3 管道。**
  - 支持三种工作模式：本地Python库、AIStudio社区云服务、自托管服务。
  - 支持通过 stdio 调用本地服务和通过 Streamable HTTP 调用远程服务。

- **文档优化：**改进了部分用户指南中的描述，以获得更流畅的阅读体验。

## 2025.6.29 v3.1.0 发布

- ** 重要模型及生产线：**
  - **新增PP-OCRv5多语种文本识别模型**，支持法语、西班牙语、葡萄牙语、马来语、韩语等37种语言的文字识别模型的训令推流程。**平均准确率提升超过30%。**[详情](https://paddlepaddle.github.io/PaddleOCR/latest/version3.x/algorithm/PP-OCRv5/PP-OCRv5_multi_languages.html)
  - 升级PP-StructureV3中的**PP-Chart2Table模型**，图表转表能力进一步升级，在内部自建测评集合上指标（RMS-F1）**提升9.36个百分点（71.24% -> 80.60%）。**
  - 新增基于 PP-StructureV3 和 ERNIE 4.5 Turbo 的**文档翻译产线 PP-DocTranslation，支持翻译 Markdown 格式文档、各种复杂版本式的 PDF 文档和文档图片，结果保存为 Markdown 格式文档。**[详情](https://paddlepaddle.github.io/PaddleOCR/latest/version3.x/pipeline_usage/PP-DocTranslation.html)

- **新增MCP服务器：**[详情](https://paddlepaddle.github.io/PaddleOCR/latest/version3.x/deployment/mcp_server.html)
  - **支持OCR和PP-StructureV3两种工具；**
  - 支持本地Python库、星河社区云服务、自助托管服务透明工作模式；
  - 支持通过stdio调用本地服务，通过Streamable HTTP调用远程服务。

- **文档优化：**优化了部分使用文档描述，提升阅读体验。

---

> 📦 仓库：[PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) · 🏷️ 版本：`v3.1.0` · 📅 发布：2025-06-29 · [查看英文原版 Release](https://github.com/PaddlePaddle/PaddleOCR/releases/tag/v3.1.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
