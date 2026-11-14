---
title: "TradingAgents v0.5.0"
project: "TradingAgents"
repo: "TauricResearch/TradingAgents"
tag: "v0.5.0"
version: "v0.5.0"
published: "2026-09-18"
type: "minor"
lang: "en"
summary: "Point-in-time integrity across every dated path, decisions recorded as they were made, backtesting over a grid of tickers and dates, the caller's portfolio as run input, and SEC EDGAR fundamentals served as filed."
---

# TradingAgents v0.5.0

## Summary

Point-in-time integrity across every dated path, decisions recorded as they were made, backtesting over a grid of tickers and dates, the caller's portfolio as run input, and SEC EDGAR fundamentals served as filed.

## Fundamentals as filed

- **SEC EDGAR** serves US company statements as they stood on the run's date: a period that has ended but has not been filed is not served, and a figure restated later still reads as first reported. Keyless, opt-in via the vendor chain.
- A **historical run** is no longer served a present-day company profile by either fundamentals vendor (#1300).

## Point-in-time and honest attribution

- **Dated tools** take the run's date from graph state, so an omitted or later date cannot reach a vendor (#1331, #1319, #1118).
- **Insider filings and prediction-market odds** are bounded by the run date, and insider rows state that a trade becomes public when its Form 4 is filed.
- **A vendor failure is reported as a vendor failure**: yfinance raises instead of returning its errors as text, an outage is not reported as a company with no data, and a chain where every vendor is unavailable says so instead of ending the run.
- **A feed that never observed a window** reports it as unavailable rather than as an absence, across news, Reddit and StockTwits.

## Decisions and evaluation

- **Backtesting**: `run_backtest` runs the pipeline over a ticker and date grid into its own decision log, and `summarize` scores the settled cells (#1234).
- **Portfolio context**: `propagate(..., portfolio=...)` and `--portfolio` let the trader, risk and portfolio agents size against real holdings; a run without one is never treated as a flat book.
- **Decisions are recorded as made**: an unreadable decision is flagged for review instead of becoming a tradeable Hold, and a rating argued against is no longer read as the call.
- **Scoring reads the direction each rating claimed**, and the outcome window is configurable (`holding_period_days`).

## CLI

- `tradingagents backtest`, with `--run-id` to continue an interrupted sweep (#1234).
- The previous run's selections come back as prompt defaults (#1236, #920).
- A run with no readable rating says so, and the live view no longer scrolls (#649, #784).

## Models

- Current lineups for every provider: GPT-6 Astra and the GPT-5.6 family, Gemini 3.8 Flash, Claude Opus 5 and Fable 5.1, Grok 4.6, DeepSeek Flash, Qwen 3.8, GLM-5.3, MiniMax M3, Kimi K3 and the current Mistral snapshots.
- Every provider accepts a model ID the picker does not list.
- GLM traffic goes to the platform its key belongs to, and Ollama structured output no longer sends a tool_choice it rejects (#1062).

See [CHANGELOG.md](https://github.com/TauricResearch/TradingAgents/blob/main/CHANGELOG.md) for the full list, including contributor acknowledgments.

---

> **Source** [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) · `v0.5.0` · 2026-09-18 · [upstream release](https://github.com/TauricResearch/TradingAgents/releases/tag/v0.5.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
