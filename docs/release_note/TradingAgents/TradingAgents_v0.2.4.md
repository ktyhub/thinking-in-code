---
title: "TradingAgents v0.2.4"
project: "TradingAgents"
repo: "TauricResearch/TradingAgents"
tag: "v0.2.4"
version: "v0.2.4"
published: "2026-04-25"
type: "patch"
lang: "en"
summary: "TradingAgents v0.2.4 ships structured-output decision agents, opt-in checkpoint resume, a persistent decision log with outcome-grounded reflections, four new LLM providers, and a Docker image."
---

# TradingAgents v0.2.4

## Summary

TradingAgents v0.2.4 ships structured-output decision agents, opt-in checkpoint resume, a persistent decision log with outcome-grounded reflections, four new LLM providers, and a Docker image.

## Structured-Output Decision Agents

- Research Manager, Trader, and Portfolio Manager use `llm.with_structured_output(Schema)` on their primary call and return typed Pydantic instances.
- Each provider's native structured-output mode is selected automatically (json_schema for OpenAI / xAI, response_schema for Gemini, tool-use for Anthropic, function-calling for OpenAI-compatible providers).
- Render helpers preserve the existing markdown shape, so memory log, CLI display, and saved reports keep working unchanged.
- Five-tier rating scale (Buy / Overweight / Hold / Underweight / Sell) used consistently across Research Manager, Portfolio Manager, signal processor, and the memory log.

## Persistence & Recovery

- LangGraph checkpoint resume via `--checkpoint`. State is saved after each node so crashed or interrupted runs resume from the last successful step. Per-ticker SQLite databases under `~/.tradingagents/cache/checkpoints/`.
- Persistent decision log replaces the per-agent BM25 memory. Decisions are stored automatically at the end of every analysis; the next same-ticker run resolves prior pending entries with realised return, alpha vs SPY, and a one-paragraph reflection.
- Optional `memory_log_max_entries` config caps resolved entries; pending entries are never pruned.

## Provider Coverage

- DeepSeek, Qwen (Alibaba DashScope), GLM (Zhipu), and Azure OpenAI providers added.
- Dynamic OpenRouter model selection.
- Default `backend_url` is now `None` so each provider client falls back to its native endpoint instead of leaking the OpenAI URL into Gemini and other clients.

## Cross-Platform & Deployment

- Docker support with multi-stage build for cross-platform deployment.
- Cache and log directories moved to `~/.tradingagents/` to resolve Docker permission issues.
- All file I/O passes explicit `encoding="utf-8"`, so Windows users no longer hit `UnicodeEncodeError`.

## Stability

- Empty memory no longer triggers fabricated past-lessons; the redesigned memory layer makes this structurally impossible.
- `SignalProcessor` reads the rating from the rendered Portfolio Manager markdown via a deterministic heuristic, eliminating an extra LLM call per analysis.
- OpenAI structured-output calls default to `method="function_calling"` to avoid noisy Pydantic serialization warnings from langchain-openai's Responses-API parse path.
- Tool-call logging processes every chunk message; memory score normalization handles empty arrays.
- Pytest fixtures (lazy LLM client imports plus placeholder API keys) so the test suite runs cleanly without credentials.

## Acknowledgments

We thank the community contributors who shaped this release. The full list is in the [CHANGELOG](https://github.com/TauricResearch/TradingAgents/blob/main/CHANGELOG.md#024--2026-04-25).

---

> **Source** [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) · `v0.2.4` · 2026-04-25 · [upstream release](https://github.com/TauricResearch/TradingAgents/releases/tag/v0.2.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
