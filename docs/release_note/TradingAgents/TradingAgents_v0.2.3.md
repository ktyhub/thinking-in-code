---
title: "TradingAgents v0.2.3"
project: "TradingAgents"
repo: "TauricResearch/TradingAgents"
tag: "v0.2.3"
version: "v0.2.3"
published: "2026-03-29"
type: "patch"
lang: "en"
summary: "TradingAgents v0.2.3 adds multi-language output, GPT-5.4 family models, and improved backtesting fidelity."
---

# TradingAgents v0.2.3

## Summary

TradingAgents v0.2.3 adds multi-language output, GPT-5.4 family models, and improved backtesting fidelity.

### Multi-Language Support
- Output language selection in CLI (Step 3) with 11 languages and custom input
- Analyst reports and final decision rendered in the selected language
- Internal agent debate remains in English for reasoning quality

### Model Coverage
- GPT-5.4 Mini and GPT-5.4 Nano support
- Unified model catalog as single source of truth for CLI and validation
- Model validation warnings for unrecognized model names

### Backtesting Fidelity
- Date-aware data fetching across all OHLCV, fundamentals, and news endpoints
- Shared caching per symbol for efficient batch backtesting

### Provider Integration
- Unified `api_key` parameter across all providers (Google, Anthropic, OpenAI)
- Proxy and custom base URL support for Google and Anthropic clients
- Graceful handling of invalid indicator names in tool calls

### Stability
- Rate limit retry coverage for yfinance news endpoints
- CLI step reordering for improved user flow

---

> **Source** [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) · `v0.2.3` · 2026-03-29 · [upstream release](https://github.com/TauricResearch/TradingAgents/releases/tag/v0.2.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
