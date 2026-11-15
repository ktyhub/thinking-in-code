---
title: "ollama v0.35.1"
project: "ollama"
repo: "ollama/ollama"
tag: "v0.35.1"
version: "v0.35.1"
published: "2026-09-29"
type: "patch"
lang: "zh"
---

# ollama v0.35.1

## 谱号决策模型

Ollama now supports [Clef](https://ollama.com/library/clef) and [Clef Flash](https://ollama.com/library/clef), Cloudflare's new open-source decision models, through `/v1/systemone`.

Clef (27B) and Clef Flash (9B) are multimodal: requests can now include images alongside the text state, shared by all questions and scored jointly with it.

```sh
curl http://localhost:11434/v1/systemone -d '{
  "model": "clef-flash",
  "state": "The user took this screenshot.",
  "images": ["<base64-encoded image>"],
  "questions": {
    "has_ollama": {"type": "noul", "instructions": "Does this image contain Ollama?"}
  }
}'
```

```
{
  "model": "clef-flash",
  "answers": {
    "has_ollama": {
      "type": "noul",
      "noul": 0.958
    }
  },
  "usage": {
    "input_tokens": 548,
    "output_tokens": 0
  }
}
```
## 发生了什么变化
* Models using web search can now perform up to ten searches per response, up from three
* Modelfiles now support `CAPABILITY` declarations, so model creators can explicitly declare what a model can do. Declarations are preserved when creating from GGUF or safetensors, through model inheritance, and on Modelfile export
* `ollama show` and the model list now report only `decision` as the capability for decision models, so clients no longer offer them for general chat, tools, or thinking
* 更新了 llama.cpp 和 MLX 引擎

**完整 Changelog**：https://github.com/ollama/ollama/compare/v0.35.0...v0.35.1

---

> 📦 仓库：[ollama/ollama](https://github.com/ollama/ollama) · 🏷️ 版本：`v0.35.1` · 📅 发布：2026-09-29 · [查看英文原版 Release](https://github.com/ollama/ollama/releases/tag/v0.35.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
