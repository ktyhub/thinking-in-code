---
title: "TradingAgents v0.2.5"
project: "TradingAgents"
repo: "TauricResearch/TradingAgents"
tag: "v0.2.5"
version: "v0.2.5"
published: "2026-05-11"
type: "patch"
lang: "en"
summary: "TradingAgents v0.2.5 ships the grounded Sentiment Analyst, Qwen/GLM/MiniMax dual-region support, \\TRADINGAGENTS\\ env-var configurability with API-key auto-detection, remote Ollama support, configurable alpha benchmarks…"
---

# TradingAgents v0.2.5

## Summary

TradingAgents v0.2.5 ships the grounded Sentiment Analyst, Qwen/GLM/MiniMax dual-region support, \`TRADINGAGENTS_*\` env-var configurability with API-key auto-detection, remote Ollama support, configurable alpha benchmarks for non-US tickers, and a ticker path-traversal fix.

## Sentiment Analyst

The renamed Sentiment Analyst now reads real Yahoo News, StockTwits, and Reddit data before generating its report, replacing the prior flow that could fabricate social posts under prompt pressure. The new name flows through the CLI dropdown, status panel, and final reports; \`AnalystType.SOCIAL = \"social\"\` is kept for saved-config back-compat.

## Provider Coverage

- **MiniMax** with the full M2.x catalog (204K context), plus dual-region Global (\`MINIMAX_API_KEY\`) and China (\`MINIMAX_CN_API_KEY\`).
- **Dual-region Qwen and GLM** with separate keys per region (\`DASHSCOPE_*\`, \`ZHIPU_*\`), chosen via a secondary region prompt so the main provider dropdown stays clean.
- **Catalog refresh** across every provider: GPT-5.5 frontier, Claude Opus 4.7, Gemini 3.1 Flash-Lite GA, Grok 4.20, Qwen 3.6 line. Versioned IDs only; auto-shifting aliases moved to a \"Custom model ID\" option.
- **Structured output now works on DeepSeek V4 / reasoner and MiniMax M2.x** — those providers reject \`tool_choice\`; the binding flow now skips it automatically.

## Configuration via Environment

\`TRADINGAGENTS_*\` env vars override \`DEFAULT_CONFIG\` keys with type-aware coercion (string / int / bool) — \`llm_provider\`, deep/quick model IDs, \`backend_url\`, \`output_language\`, debate-round counts, the checkpoint flag, and the benchmark ticker. When a selected provider's API key is missing, the CLI prompts for it and persists the value to \`.env\` so the run continues without restart.

## Ollama

\`OLLAMA_BASE_URL\` makes remote \`ollama-serve\` first-class for both the CLI and programmatic users. The CLI prints the resolved endpoint after selecting Ollama and warns on common malformed inputs. A new \"Custom model ID\" option lets users pick any model they have pulled via \`ollama pull\`.

## Reflection

Alpha is now computed against a regional benchmark for non-US tickers — \`.NS\` (^NSEI), \`.T\` (^N225), \`.HK\` (^HSI), \`.L\` (^FTSE), \`.TO\` (^GSPTSE), \`.AX\` (^AXJO), \`.BO\` (^BSESN), SPY for US listings. Eliminates FX drift dominating the alpha figure for non-USD listings. \`benchmark_ticker\` overrides the suffix map when set explicitly.

News-fetch parameters (per-ticker article limit, macro headline limit, lookback window, macro search queries) are now exposed via \`DEFAULT_CONFIG\` for strategy-specific tuning.

## Multi-language

\`output_language\` now propagates to every user-facing agent — researchers, risk debators, research manager, and trader — ending the previous partial-localization reports where only analysts and the portfolio manager respected the setting.

## Fixes

- **Security**: ticker path-traversal validation at every filesystem-path site.
- **\`pip install .\` installations now pick up the project \`.env\`** when running the CLI as a console script.
- **Reports save end-to-end** — streamed chunks were previously dropped from \`complete_report.md\`.
- **Ticker prompt preserves exchange suffixes** (\`.SH\`, \`.SZ\`, \`.SS\`, \`.HK\`, \`.T\`, etc.).
- **Docker permission errors** no longer block first-run write to \`~/.tradingagents/\`.
- **Config state no longer leaks between runs** when sub-dicts are mutated.
- **\`max_recur_limit\` config actually applies** to the propagator.
- **Missing-API-key error** names the exact env var to set.
- **Quieter startup** — suppressed the noisy upstream langgraph-checkpoint deprecation warning.

See [CHANGELOG.md](https://github.com/TauricResearch/TradingAgents/blob/v0.2.5/CHANGELOG.md) for the full per-item list with PR / issue references.

---

> **Source** [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) · `v0.2.5` · 2026-05-11 · [upstream release](https://github.com/TauricResearch/TradingAgents/releases/tag/v0.2.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
