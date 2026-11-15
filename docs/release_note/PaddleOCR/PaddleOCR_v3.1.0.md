---
title: "PaddleOCR v3.1.0"
project: "PaddleOCR"
repo: "PaddlePaddle/PaddleOCR"
tag: "v3.1.0"
version: "v3.1.0"
published: "2025-06-29"
type: "minor"
lang: "en"
summary: "Key Models and Pipelines"
---

# PaddleOCR v3.1.0

## 2025.6.29 v3.1.0 released

- **Key Models and Pipelines:**
  - **Added PP-OCRv5 Multilingual Text Recognition Model**, which supports the training and inference process for text recognition models in 37 languages, including French, Spanish, Portuguese, Russian, Korean, etc. **Average accuracy improved by over 30%.** [Details](https://paddlepaddle.github.io/PaddleOCR/latest/en/version3.x/algorithm/PP-OCRv5/PP-OCRv5_multi_languages.html)
  - Upgraded the **PP-Chart2Table model** in PP-StructureV3, further enhancing the capability of converting charts to tables. On internal custom evaluation sets, the metric (RMS-F1) **increased by 9.36 percentage points (71.24% -> 80.60%).**
  - Newly launched **document translation pipeline, PP-DocTranslation, based on PP-StructureV3 and ERNIE 4.5 Turbo**, which supports the translation of Markdown format documents, various complex-layout PDF documents, and document images, with the results saved as Markdown format documents. [Details](https://paddlepaddle.github.io/PaddleOCR/latest/en/version3.x/pipeline_usage/PP-DocTranslation.html)


- **New MCP server:** [Details](https://paddlepaddle.github.io/PaddleOCR/latest/en/version3.x/deployment/mcp_server.html)
  - **Supports both OCR and PP-StructureV3 pipelines.**
  - Supports three working modes: local Python library, AIStudio Community Cloud Service, and self-hosted service.
  - Supports invoking local services via stdio and remote services via Streamable HTTP.

- **Documentation Optimization:** Improved the descriptions in some user guides for a smoother reading experience.

## 2025.6.29 v3.1.0 发布

- **重要模型和产线：**
  - **新增 PP-OCRv5 多语种文本识别模型**，支持法语、西班牙语、葡萄牙语、俄语、韩语等 37 种语言的文字识别模型的训推流程。**平均精度涨幅超30%。**[详情](https://paddlepaddle.github.io/PaddleOCR/latest/version3.x/algorithm/PP-OCRv5/PP-OCRv5_multi_languages.html)
  - 升级 PP-StructureV3 中的 **PP-Chart2Table 模型**，图表转表能力进一步升级，在内部自建测评集合上指标（RMS-F1）**提升 9.36 个百分点（71.24% -> 80.60%）。**
  - 新增基于 PP-StructureV3 和 ERNIE 4.5 Turbo 的**文档翻译产线 PP-DocTranslation，支持翻译 Markdown 格式文档、各种复杂版式的 PDF 文档和文档图像，结果保存为 Markdown 格式文档。**[详情](https://paddlepaddle.github.io/PaddleOCR/latest/version3.x/pipeline_usage/PP-DocTranslation.html)

- **新增MCP server：**[详情](https://paddlepaddle.github.io/PaddleOCR/latest/version3.x/deployment/mcp_server.html)
  - **支持 OCR 和 PP-StructureV3 两种工具；**
  - 支持本地Python库、星河社区云服务、自托管服务三种工作模式；
  - 支持通过 stdio 调用本地服务，通过 Streamable HTTP 调用远程服务。

- **文档优化：** 优化了部分使用文档描述，提升阅读体验。

---

> **Source** [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) · `v3.1.0` · 2025-06-29 · [upstream release](https://github.com/PaddlePaddle/PaddleOCR/releases/tag/v3.1.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
