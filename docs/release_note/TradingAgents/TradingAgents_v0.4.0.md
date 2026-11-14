---
title: "TradingAgents v0.4.0"
project: "TradingAgents"
repo: "TauricResearch/TradingAgents"
tag: "v0.4.0"
version: "v0.4.0"
published: "2026-08-31"
type: "minor"
lang: "en"
summary: "Look-ahead and point-in-time fixes across the data and memory layers, clearer decision signals, working CLI checkpoint resume, and the GPT-5.6 / GLM-5.3 models."
---

# TradingAgents v0.4.0

## Summary

Look-ahead and point-in-time fixes across the data and memory layers, clearer decision signals, working CLI checkpoint resume, and the GPT-5.6 / GLM-5.3 models.

## Point-in-time / look-ahead integrity

- **FRED macro** requests now pin the data vintage to the as-of date, so a backtest no longer sees later revisions (#1275).
- **Social sentiment** (StockTwits, Reddit) is trimmed to the analysis window instead of showing today's chatter, via one shared UTC window rule reused by news (#1220).
- **Decision-log memory** records when each outcome became known and only injects lessons resolved by the trade date (#1251); a decision is no longer settled before its holding window fully trades (#1169).
- **The latest OHLCV bar** is no longer silently dropped when its close is NaN, and dates are normalized DST- and non-US-market safe (#1201).

## More honest decision signals

- An unparseable Portfolio Manager rating surfaces a **REVIEW** sentinel instead of a tradeable Hold (#1170).
- Debate openers no longer **fabricate** the opponent's argument when none has been made (#1176).
- The **Trader** now receives the technical market report, so entry/stop levels anchor to real price structure (#1167).

## Execution robustness

- `--checkpoint` **actually resumes** on the CLI path, and a resume no longer duplicates messages (#1249).
- A configurable **output-token cap** (`TRADINGAGENTS_MAX_TOKENS`) bounds a model that emits unbounded reasoning (#1204).
- DeepSeek routed through OpenRouter (`deepseek/<id>`) now reuses the native DeepSeek capabilities (#1199).

## Models

- Added the **GPT-5.6** family (`gpt-5.6` / `gpt-5.6-terra` / `gpt-5.6-luna`) and **GLM-5.3** (`glm-5.3`, `glm-5.3-flash`); the defaults are now `gpt-5.6` (deep) / `gpt-5.6-luna` (quick).

See [CHANGELOG.md](https://github.com/TauricResearch/TradingAgents/blob/main/CHANGELOG.md) for the full list, including contributor acknowledgments.

---

> **Source** [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) · `v0.4.0` · 2026-08-31 · [upstream release](https://github.com/TauricResearch/TradingAgents/releases/tag/v0.4.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
