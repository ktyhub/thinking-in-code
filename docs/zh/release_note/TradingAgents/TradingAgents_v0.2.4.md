---
title: "TradingAgents v0.2.4"
project: "TradingAgents"
repo: "TauricResearch/TradingAgents"
tag: "v0.2.4"
version: "v0.2.4"
published: "2026-04-25"
type: "patch"
lang: "zh"
---

# TradingAgents v0.2.4

## 总结

TradingAgents v0.2.4 ships structured-output decision agents, opt-in checkpoint resume, a persistent decision log with outcome-grounded reflections, four new LLM providers, and a Docker image.

## Structured-Output Decision Agents

- 研究经理、交易员和投资组合经理在其主要调用和返回类型化 Pydantic 实例上使用 `llm.with_structured_output(Schema)`。
- Each provider's native structured-output mode is selected automatically (json_schema for OpenAI / xAI, response_schema for Gemini, tool-use for Anthropic, function-calling for OpenAI-compatible providers).
- 渲染助手保留现有的降价形状，因此内存日志、CLI 显示和保存的报告保持不变。
- Five-tier rating scale (Buy / Overweight / Hold / Underweight / Sell) used consistently across Research Manager, Portfolio Manager, signal processor, and the memory log.

## Persistence & Recovery

- LangGraph checkpoint resume via `--checkpoint`. State is saved after each node so crashed or interrupted runs resume from the last successful step. Per-ticker SQLite databases under `~/.tradingagents/cache/checkpoints/`.
- 持久决策日志取代了每个代理的 BM25 内存。每次分析结束时都会自动存储决策； the next same-ticker run resolves prior pending entries with realised return, alpha vs SPY, and a one-paragraph reflection.
- Optional `memory_log_max_entries` config caps resolved entries; pending entries are never pruned.

## 提供商覆盖范围

- DeepSeek, Qwen (Alibaba DashScope), GLM (Zhipu), and Azure OpenAI providers added.
- Dynamic OpenRouter model selection.
- Default `backend_url` is now `None` so each provider client falls back to its native endpoint instead of leaking the OpenAI URL into Gemini and other clients.

## Cross-Platform & Deployment

- Docker support with multi-stage build for cross-platform deployment.
- Cache and log directories moved to `~/.tradingagents/` to resolve Docker permission issues.
- All file I/O passes explicit `encoding="utf-8"`, so Windows users no longer hit `UnicodeEncodeError`.

## 稳定性

- Empty memory no longer triggers fabricated past-lessons; the redesigned memory layer makes this structurally impossible.
- `SignalProcessor` reads the rating from the rendered Portfolio Manager markdown via a deterministic heuristic, eliminating an extra LLM call per analysis.
- OpenAI structured-output calls default to `method="function_calling"` to avoid noisy Pydantic serialization warnings from langchain-openai's Responses-API parse path.
- Tool-call logging processes every chunk message; memory score normalization handles empty arrays.
- Pytest fixtures (lazy LLM client imports plus placeholder API keys) so the test suite runs cleanly without credentials.

## 致谢

We thank the community contributors who shaped this release. The full list is in the [CHANGELOG](https://github.com/TauricResearch/TradingAgents/blob/main/CHANGELOG.md#024--2026-04-25).

---

> 📦 仓库：[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) · 🏷️ 版本：`v0.2.4` · 📅 发布：2026-04-25 · [查看英文原版 Release](https://github.com/TauricResearch/TradingAgents/releases/tag/v0.2.4)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
