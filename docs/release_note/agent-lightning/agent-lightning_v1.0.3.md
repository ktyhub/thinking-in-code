---
title: "agent-lightning v1.0.3"
project: "agent-lightning"
repo: "microsoft/agent-lightning"
tag: "v1.0.3"
version: "v1.0.3"
published: "2026-11-03"
type: "patch"
lang: "en"
summary: "Score Centering for low-precision RL: Added Score Centering with top-K behavior-probability capture and a runnable Qwen3.5-9B math training example. (#651, #677)."
---

# agent-lightning v1.0.3

## Highlights

- **Score Centering for low-precision RL:** Added Score Centering with top-K behavior-probability capture and a runnable Qwen3.5-9B math training example. (#651, #677).
- **Lower-memory MoE routing replay:** Reduced peak host-memory usage when decoding routed experts by processing one rollout at a time, while preserving the resulting training tensors (#636).

## Features

- Added INT8 weight/activation rollouts with an INT4 Attention KV cache, weight synchronization, and model preparation and precision-verification tools for the math training example (#651).
- Added opt-in trajectory prefix-mismatch diagnostics to help identify possible retokenization mismatches without changing training tensors. Additional classification is disabled by default (#646).

## Bug Fixes

- Preserve fractional rewards during advantage computation and prevent precision loss or overflow during rollout normalization (#640, #662).
- Preserve source log probabilities during trajectory aggregation, avoiding input mutation and inconsistent results when converting a rollout more than once (#613).
- Correctly decode local image file URIs, including paths containing spaces, Unicode, or percent characters, so valid multimodal training rows are retained (#638).
- Load custom tool-parser plugins before starting VERL's embedded vLLM server (#665).
- Reject unknown top-level fields in rollout PATCH requests with HTTP 422 instead of silently ignoring them (#611).
- Handle overflowing log probabilities in triplet queries without failing the request, while preserving token IDs (#647).
- Report failed rollout-deletion requests instead of silently treating them as successful cleanup (#656).
- Mark rollouts as failed when Kubernetes Job templates cannot be rendered or parsed, rather than retrying indefinitely (#657).

## Contributors

Human contributors, listed alphabetically by GitHub username:

@feiiiiii5, @galleonli, @hzy46, @kiteretsu903, @ldemon2333, @lll-hhh, @lux-liang, @NaCr05, @ningyixi, @original4422.

---

> **Source** [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) · `v1.0.3` · 2026-11-03 · [upstream release](https://github.com/microsoft/agent-lightning/releases/tag/v1.0.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
