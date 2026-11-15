---
title: "ollama v0.35.0"
project: "ollama"
repo: "ollama/ollama"
tag: "v0.35.0"
version: "v0.35.0"
published: "2026-09-28"
type: "minor"
lang: "en"
summary: "Ollama now supports decision models through /v1/systemone, based on TypeSafe’s Jev API."
---

# ollama v0.35.0

## Decision models

Ollama now supports decision models through `/v1/systemone`, based on [TypeSafe’s Jev API](https://typesafe.ai).

Decision models return choices, probabilities, and scores instead of text. Use them for tasks such as ticket triage, model routing, and content classification.

Available models:
- [**Nimble**](https://ollama.com/library/nimble) from Bespoke Labs
- [**Tev1**](https://ollama.com/library/tev1) from Together AI

```sh
ollama pull nimble
```

Send context and one or more questions:

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

The API supports three question types:
- `choice`: Select an option and return probabilities for each.
- `noul`: Return the probability that a condition is true.
- `score`: Return a score across an ordered set of criteria

## What's Changed

- Settings now opens without waiting for model discovery.
- Fixed the macOS update menu and icon not reflecting an available update at startup.
- Fixed stalled MLX model downloads hanging indefinitely.
- Requests containing the deprecated `typical_p` parameter now log a warning instead of failing.

**Full Changelog:** https://github.com/ollama/ollama/compare/v0.34.4...v0.35.0

---

> **Source** [ollama/ollama](https://github.com/ollama/ollama) · `v0.35.0` · 2026-09-28 · [upstream release](https://github.com/ollama/ollama/releases/tag/v0.35.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
