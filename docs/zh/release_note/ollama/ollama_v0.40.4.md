---
title: "ollama v0.40.4"
project: "ollama"
repo: "ollama/ollama"
tag: "v0.40.4"
version: "v0.40.4"
published: "2026-10-12"
type: "patch"
lang: "zh"
---

# ollama v0.40.4

## CLI 中的决策模型
现在可以通过 `ollama run` 直接从终端使用决策模型 — 提出是/否问题、将文本分类为标签或根据评分标准进行评分：
`ollama run nimble --ask "Is a refund being requested?" < ticket.txt`

 ## 发生了什么变化
  * Apple 芯片上的 MLX 运行程序现在支持 Kev 决策模型
  * `ollama launch` 现在可以与使用积分一起使用，而无需升级到付费计划
  * `ollama launch codex` 现在在其模型选择器中包括本地安装的 Ollama 模型。使用 Codex CLI 中的 `/model` 来交换模型。
  * 通过重用经过验证的清单和已加载的模型来提高推理性能
  * 通过 llama-server 添加了对多模式嵌入的支持
  * 修复了加载具有小上下文窗口的多模式嵌入模型
  * 使用 MLX 运行程序改进了 NVIDIA GPU 上的 Gemma 4 预填充性能
  * MLX 跑步者现在 clips 长 Laya 状态而不是拒绝它们
  * 改进了 MLX 运行程序中的推测解码可靠性，包括回滚后的循环状态处理
   * 更新了 llama.cpp，提供原生决策模型支持
  * 更新了自述文件和文档，具有更清晰的隐私和云服务措辞

  
  **完整 Changelog**：https://github.com/ollama/ollama/compare/v0.40.3...v0.40.4

---

> 📦 仓库：[ollama/ollama](https://github.com/ollama/ollama) · 🏷️ 版本：`v0.40.4` · 📅 发布：2026-10-12 · [查看英文原版 Release](https://github.com/ollama/ollama/releases/tag/v0.40.4)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
