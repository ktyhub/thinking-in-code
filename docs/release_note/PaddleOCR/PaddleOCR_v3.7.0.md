---
title: "PaddleOCR v3.7.0"
project: "PaddleOCR"
repo: "PaddlePaddle/PaddleOCR"
tag: "v3.7.0"
version: "v3.7.0"
published: "2026-06-11"
type: "minor"
lang: "en"
---

# PaddleOCR v3.7.0

## 2026.6.11 v3.7.0 released

* **Release PP-OCRv6**

    - **Accuracy boost**: Medium tier achieves +4.6% detection and +5.1% recognition over PP-OCRv5_server, surpassing mainstream VLMs (Qwen3-VL-235B, GPT-5.5) with only 34.5M parameters.
    - **50 languages unified**: Single model covers Chinese, English, Japanese, and 46 Latin-script languages — no model switching needed.
    - **Specialized scenarios**: Major improvements in digital displays, dot-matrix characters, tire prints, and industrial text recognition.
    - **Faster inference**: 5.2× CPU speedup (OpenVINO), 6.1× on Apple M4 (tiny), 0.13s on A100 GPU.
    - **Three tiers for all scenarios**: tiny (1.5M) / small (7.7M) / medium (34.5M) for edge, mobile, and server deployment.

## 2026.6.11 v3.7.0 发布

* **发布 PP-OCRv6**

    - **精度全面提升**：medium 档相比 PP-OCRv5_server 检测精度提升 4.6%、识别精度提升 5.1%，以仅 34.5M 参数超越 Qwen3-VL-235B、GPT-5.5 等主流视觉语言大模型。
    - **50 种语言统一支持**：单一模型覆盖中文、英文、日文及 46 种拉丁语系语言，无需为不同语种切换模型。
    - **专业场景增强**：数码显示屏、点阵字符、轮胎印字、工业字符等传统 VLM 难以覆盖的场景识别能力大幅提升。
    - **推理速度更快**：medium 档 CPU OpenVINO 推理加速 5.2×，tiny 档 Apple M4 加速 6.1×，A100 上仅需 0.13s。
    - **三档模型覆盖全场景**：tiny（1.5M）/ small（7.7M）/ medium（34.5M）分别面向端侧/移动端/服务端部署。

**Full Changelog**: https://github.com/PaddlePaddle/PaddleOCR/compare/v3.6.0...v3.7.0

---

> **Source** [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) · `v3.7.0` · 2026-06-11 · [upstream release](https://github.com/PaddlePaddle/PaddleOCR/releases/tag/v3.7.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
