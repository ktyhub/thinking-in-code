---
title: "TradingAgents v0.3.1"
project: "TradingAgents"
repo: "TauricResearch/TradingAgents"
tag: "v0.3.1"
version: "v0.3.1"
published: "2026-07-05"
type: "patch"
lang: "en"
summary: "TradingAgents v0.3.1 is a correctness and stability patch on top of v0.3.0."
---

# TradingAgents v0.3.1

## Summary

TradingAgents v0.3.1 is a correctness and stability patch on top of v0.3.0.

## Fixed

- **Alpha Vantage look-ahead filter now runs.** The fundamentals payload is a JSON string, so the dict-only guard silently skipped filtering and future-dated reports leaked into historical runs. (#1115, @zachthebird)
- **News analyst prompt matches the tool.** It advertised `get_news(query, ...)` while the tool takes a ticker, so the model hallucinated free-text query calls. (#1116, @shcheuk)
- **Shared debate/risk routers can't crash mid-run.** Both routers returned more targets than any one edge mapped; every edge now shares the complete path map. (#1088, @Fr3ya, @sa7an7, @Sushanth012)
- **Checkpoint resume respects graph shape.** The thread id folds in selected analysts, debate/risk depth, and asset mode, so a resume under different choices no longer continues the wrong graph. (#1089, @bossjoker1, @Ghraven)
- **Crypto sentiment sources resolve.** StockTwits lists crypto as `<BASE>.X` (Yahoo's `BTC-USD` 404s) and Reddit needs the base symbol; the social path now maps crypto for both. (#1113, @suremadoreai)

## Added

- **Configurable LLM retry budget.** `llm_max_retries` / `TRADINGAGENTS_LLM_MAX_RETRIES`, forwarded to every provider so a transient 429 burst doesn't abort a run. (#1091, @yanggaome)
- **Bedrock API-key auth.** `AWS_BEARER_TOKEN_BEDROCK` authenticates Amazon Bedrock without AWS access keys and takes precedence over an ambient `AWS_PROFILE`. (#1103, @praxstack)
- **Latest Claude models.** Added Claude Sonnet 5 (`claude-sonnet-5`) and Fable 5 (`claude-fable-5`); effort control now covers the Claude 5 line.

See [CHANGELOG.md](https://github.com/TauricResearch/TradingAgents/blob/main/CHANGELOG.md) for the full list.

---

> **Source** [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) · `v0.3.1` · 2026-07-05 · [upstream release](https://github.com/TauricResearch/TradingAgents/releases/tag/v0.3.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
