---
title: "ollama v0.35.0"
project: "ollama"
repo: "ollama/ollama"
tag: "v0.35.0"
version: "v0.35.0"
published: "2026-09-28"
type: "minor"
lang: "zh"
---

# ollama v0.35.0

## Decision models

Ollama 现在通过基于 [TypeSafe 的 Jev API](https://typesafe.ai) 的 `/v1/systemone` 支持决策模型。

决策模型返回选择、概率和分数而不是文本。将它们用于工单分类、模型路由和内容分类等任务。

可用型号：
- 来自 Bespoke Labs 的 [**Nimble**](https://ollama.com/library/nimble)
- [**Tev1**](https://ollama.com/library/tev1) 来自 Together AI

```sh
ollama pull nimble
```

发送上下文和一个或多个问题：

```sh
curl http://localhost:11434/v1/systemone \
  -H 'Content-Type: application/json' \
  -d '{
    "model": "nimble",
    "state": "Our checkout has returned 500 errors since 9am.",
    "questions": {
      "label": {
        "type": "choice",
        "instructions": "Which label fits this ticket?",
        "criteria": {
          "billing": "Payments and refunds",
          "bug": "Software errors",
          "account": "Login and account access"
        }
      }
    }
  }'
```

Example response:

```json
{
  "model": "nimble",
  "answers": {
    "label": {
      "type": "choice",
      "choice": "bug",
      "probabilities": {
        "billing": 0.0125,
        "bug": 0.9781,
        "account": 0.0093
      },
      "confidence": 0.8906
    }
  },
  "usage": {
    "input_tokens": 174,
    "output_tokens": 1
  }
}
```

API 支持三种问题类型：
- `choice`：选择一个选项并返回每个选项的概率。
- `noul`：返回条件为真的概率。
- `score`：返回一组有序标准的分数

## 发生了什么变化

- 设置现在无需等待模型发现即可打开。
- 修复了 macOS 更新菜单和图标在启动时不反映可用更新的问题。
- 修复了无限期挂起的 MLX 模型下载停滞问题。
- 包含已弃用的 `typical_p` 参数的请求现在会记录警告而不是失败。

**完整 Changelog:** https://github.com/ollama/ollama/compare/v0.34.4...v0.35.0

---

> 📦 仓库：[ollama/ollama](https://github.com/ollama/ollama) · 🏷️ 版本：`v0.35.0` · 📅 发布：2026-09-28 · [查看英文原版 Release](https://github.com/ollama/ollama/releases/tag/v0.35.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
