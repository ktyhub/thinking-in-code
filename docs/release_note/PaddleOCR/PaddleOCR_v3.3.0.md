---
title: "PaddleOCR v3.3.0"
project: "PaddleOCR"
repo: "PaddlePaddle/PaddleOCR"
tag: "v3.3.0"
version: "v3.3.0"
published: "2025-10-16"
type: "minor"
lang: "en"
summary: "Released PaddleOCR-VL · Model Introduction"
---

# PaddleOCR v3.3.0

## 2025.10.16 v3.3.0 released

- **Released PaddleOCR-VL:**
    - **Model Introduction:**
        - **PaddleOCR-VL** is a SOTA and resource-efficient model tailored for document parsing. Its core component is PaddleOCR-VL-0.9B, a compact yet powerful vision-language model (VLM) that integrates a NaViT-style dynamic resolution visual encoder with the ERNIE-4.5-0.3B language model to enable accurate element recognition. This innovative model efficiently supports 109 languages and excels in recognizing complex elements (e.g., text, tables, formulas, and charts), while maintaining minimal resource consumption. Through comprehensive evaluations on widely used public benchmarks and in-house benchmarks, PaddleOCR-VL achieves SOTA performance in both page-level document parsing and element-level recognition. It significantly outperforms existing solutions, exhibits strong competitiveness against top-tier VLMs, and delivers fast inference speeds. These strengths make it highly suitable for practical deployment in real-world scenarios. The model has been released on [HuggingFace](https://huggingface.co/PaddlePaddle/PaddleOCR-VL). Everyone is welcome to download and use it!

    - **Core Features**:
        - **Compact yet Powerful VLM Architecture**: We present a novel vision-language model that is specifically designed for resource-efficient inference, achieving outstanding performance in element recognition. By integrating a NaViT-style dynamic high-resolution visual encoder with the lightweight ERNIE-4.5-0.3B language model, we significantly enhance the model’s recognition capabilities and decoding efficiency. This integration maintains high accuracy while reducing computational demands, making it well-suited for efficient and practical document processing applications.
        - **SOTA Performance on Document Parsing**: PaddleOCR-VL achieves state-of-the-art performance in both page-level document parsing and element-level recognition. It significantly outperforms existing pipeline-based solutions and exhibiting strong competitiveness against leading vision-language models (VLMs) in document parsing. Moreover, it excels in recognizing complex document elements, such as text, tables, formulas, and charts, making it suitable for a wide range of challenging content types, including handwritten text and historical documents. This makes it highly versatile and suitable for a wide range of document types and scenarios.
        - **Multilingual Support**: PaddleOCR-VL Supports 109 languages, covering major global languages, including but not limited to Chinese, English, Japanese, Latin, and Korean, as well as languages with different scripts and structures, such as Russian (Cyrillic script), Arabic, Hindi (Devanagari script), and Thai. This broad language coverage substantially enhances the applicability of our system to multilingual and globalized document processing scenarios.

- **Released PP-OCRv5 Multilingual Recognition Model:**
    - Improved the accuracy and coverage of Latin script recognition; added support for Cyrillic, Arabic, Devanagari, Telugu, Tamil, and other language systems, covering recognition of 109 languages. The model has only 2M parameters, and the accuracy of some models has increased by over 40% compared to the previous generation.

## 2025.10.16 v3.3.0 发布

- **发布PaddleOCR-VL**：
    - **模型介绍：**
        - **PaddleOCR-VL** 是一款先进、高效的文档解析模型，专为文档中的元素识别设计。其核心组件为 PaddleOCR-VL-0.9B，这是一种紧凑而强大的视觉语言模型（VLM），它由 NaViT 风格的动态分辨率视觉编码器与 ERNIE-4.5-0.3B 语言模型组成，能够实现精准的元素识别。该模型支持 109 种语言，并在识别复杂元素（如文本、表格、公式和图表）方面表现出色，同时保持极低的资源消耗。通过在广泛使用的公开基准与内部基准上的全面评测，PaddleOCR-VL 在页级级文档解析与元素级识别均达到 SOTA 表现。它显著优于现有的基于Pipeline方案和文档解析多模态方案以及先进的通用多模态大模型，并具备更快的推理速度。这些优势使其非常适合在真实场景中落地部署。模型已发布至[HuggingFace](https://huggingface.co/PaddlePaddle/PaddleOCR-VL)，欢迎大家下载使用！

    - **特性：**
        - **紧凑而强大的视觉语言模型架构**：我们提出了一种新的视觉语言模型，专为资源高效的推理而设计，在元素识别方面表现出色。通过将NaViT风格的动态高分辨率视觉编码器与轻量级的ERNIE-4.5-0.3B语言模型结合，我们显著增强了模型的识别能力和解码效率。这种集成在保持高准确率的同时降低了计算需求，使其非常适合高效且实用的文档处理应用。
        - **文档解析的SOTA性能**：PaddleOCR-VL在页面级文档解析和元素级识别中达到了最先进的性能。它显著优于现有的基于流水线的解决方案，并在文档解析中展现出与领先的视觉语言模型（VLMs）竞争的强劲实力。此外，它在识别复杂的文档元素（如文本、表格、公式和图表）方面表现出色，使其适用于包括手写文本和历史文献在内的各种具有挑战性的内容类型。这使得它具有高度的多功能性，适用于广泛的文档类型和场景。
        - **多语言支持**：PaddleOCR-VL支持109种语言，覆盖了主要的全球语言，包括但不限于中文、英文、日文、拉丁文和韩文，以及使用不同文字和结构的语言，如俄语（西里尔字母）、阿拉伯语、印地语（天城文）和泰语。这种广泛的语言覆盖大大增强了我们系统在多语言和全球化文档处理场景中的适用性。

- **发布PP-OCRv5小语种识别模型**：
    - 优化拉丁文识别的准度和广度，新增西里尔文、阿拉伯文、天城文、泰卢固语、泰米尔语等语系，覆盖109种语言文字的识别。模型参数量仅为2M，部分模型精度较上一代提升40%以上。

---

> **Source** [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) · `v3.3.0` · 2025-10-16 · [upstream release](https://github.com/PaddlePaddle/PaddleOCR/releases/tag/v3.3.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
