---
title: "agent-lightning v1.0.0"
project: "agent-lightning"
repo: "microsoft/agent-lightning"
tag: "v1.0.0"
version: "v1.0.0"
published: "2026-08-17"
type: "major"
lang: "en"
summary: "Agent Lightning v1.0.0 is released! In this release, we have completely refactored the codebase, making it lightweight while adding support for the latest models."
---

# agent-lightning v1.0.0

Agent Lightning v1.0.0 is released! In this release, we have completely refactored the codebase, making it lightweight while adding support for the latest models. Agent Lightning v1.0.0 is designed for RL training with the exact agent harness used in deployment and addresses several key challenges in this paradigm.

# Hightlights

- 🪶 **~3,500 lines of code:** We treat simplicity as the first principle.
- 🧩 **Train with real agent harnesses:** Agents interact with the model through the Agent Lightning v1.0 proxy with **ZERO changes**, while keeping tools, context, control flow, and environments in the loop.
- ☸️ **Native Kubernetes support:** Run agents directly as Kubernetes Jobs without relying on external sandbox services.
- 💻 **Full coding agent training example:** Using only **6K training samples**, an end-to-end Qwen3.5-9B workflow improves SWE-bench Verified from **41.8% to 56.4%**, a gain of **14.6 percentage points**. We release the full pipeline, including data cleaning, reward-hacking prevention, and training scripts.

---

> **Source** [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) · `v1.0.0` · 2026-08-17 · [upstream release](https://github.com/microsoft/agent-lightning/releases/tag/v1.0.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
