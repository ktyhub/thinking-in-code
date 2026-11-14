---
title: "TradingAgents v0.3.0"
project: "TradingAgents"
repo: "TauricResearch/TradingAgents"
tag: "v0.3.0"
version: "v0.3.0"
published: "2026-06-22"
type: "minor"
lang: "en"
summary: "TradingAgents v0.3.0 is a stabilization and extensibility release: a verified data-access contract, an expanded provider and data-vendor registry, a current-generation model catalog, and a CI gate."
---

# TradingAgents v0.3.0

## Summary

TradingAgents v0.3.0 is a stabilization and extensibility release: a verified data-access contract, an expanded provider and data-vendor registry, a current-generation model catalog, and a CI gate.

## Verified Data-Access Contract

Symbol normalization now runs on every vendor path (identity, returns, CLI, news). The configured vendor list is the exact resolution chain (no silent fallback to unselected vendors), and failures surface through a typed `VendorError` taxonomy. News windows are look-ahead-safe, stale OHLCV is rejected instead of reported as current, and yfinance fetches include the requested end date. A verified market-data snapshot grounds price and indicator claims, and deterministic ticker-to-company resolution stops the wrong-company hallucination.

## Provider Registry

OpenAI-compatible providers register behind a single spec, and a generic `openai_compatible` endpoint covers vLLM, LM Studio, and relays. Adds NVIDIA NIM, Kimi (Moonshot), Groq, and Mistral, plus a native Amazon Bedrock client.

## Data Vendors

FRED macro indicators and Polymarket event probabilities are surfaced to the news and macro analysts. Optional vendors degrade to a no-data sentinel instead of aborting a run.

## Model Catalog

Refreshed to current-generation lineups across providers; retired `gpt-4.1`, Claude Sonnet 4.5, and the Gemini 2.5 line. Reasoning depth is configurable via `TRADINGAGENTS_OPENAI_REASONING_EFFORT`, `TRADINGAGENTS_GOOGLE_THINKING_LEVEL`, and `TRADINGAGENTS_ANTHROPIC_EFFORT`, each gated to the models that accept it.

## Configuration and CLI

An explicit `TRADINGAGENTS_*` value or CLI flag now wins over interactive defaults for debate and risk round counts, `--checkpoint / --no-checkpoint`, and the Docker provider profile; invalid boolean env values fail loudly. Analyst prompts lead with the current date so tool-call date ranges anchor to the run date.

## Tooling

GitHub Actions runs the pytest suite across Python 3.10-3.13, strict `ruff`, and a clean-install smoke that imports the package and CLI. `TradingAgentsGraph.save_reports()` writes the same report tree the CLI produces, for headless and API runs.

See [CHANGELOG.md](https://github.com/TauricResearch/TradingAgents/blob/main/CHANGELOG.md) for the full list, including contributor acknowledgments.

---

> **Source** [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) · `v0.3.0` · 2026-06-22 · [upstream release](https://github.com/TauricResearch/TradingAgents/releases/tag/v0.3.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
