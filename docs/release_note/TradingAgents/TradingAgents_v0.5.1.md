---
title: "TradingAgents v0.5.1"
project: "TradingAgents"
repo: "TauricResearch/TradingAgents"
tag: "v0.5.1"
version: "v0.5.1"
published: "2026-09-24"
type: "patch"
lang: "en"
summary: "A package layout organised by what each module holds, social posts screened by TypeSafe's Jev when a key is set, GPT-6 Sol and Luna as the default models, and fixes to run isolation, SEC EDGAR statements and historical…"
---

# TradingAgents v0.5.1

A package layout organised by what each module holds, social posts screened by
TypeSafe's Jev when a key is set, GPT-6 Sol and Luna as the default models, and
fixes to run isolation, SEC EDGAR statements and historical runs.

### Upgrading from 0.5.0

Some modules moved, and the old import paths are gone. Update imports as follows:

- `tradingagents.dataflows.interface` is `tradingagents.dataflows.router`, and `dataflows.symbol_utils` is `dataflows.symbols`. `dataflows.utils` is gone: `get_current_date` is in `dataflows.date_window`, `safe_ticker_component` in `dataflows.symbols`.
- Vendor modules live under `tradingagents.dataflows.vendors`: `yahoo` (`ohlcv`, `market`, `fundamentals`, `news`, `snapshot`, from the former `stockstats_utils`, `y_finance`, `yfinance_news` and `market_data_validator`), `alpha_vantage` (a package, from the `alpha_vantage_*` modules), and `sec_edgar`, `fred`, `polymarket`, `reddit`, `stocktwits`.
- `tradingagents.agents.utils` is gone: the agent tools are in `agents.tools`, and `agent_utils`, `agent_states`, `rating` and `structured` are `agents.context`, `agents.state`, `agents.rating` and `agents.structured`.
- The decision log is `tradingagents.decision_log` (was `agents.utils.memory`), and `cli.utils` is `cli.prompts`.
- `backtest.summarize` takes a `run_backtest` result or the path of a decision log, in place of a `TradingMemoryLog`.
- Removed: `SignalProcessor` (the rating is parsed by `process_signal`), the `create_social_media_analyst` alias (use `create_sentiment_analyst`), the unused `project_dir` config key, and the graph attributes `curr_state`, `ticker` and `log_states_dict`, which held the previous run's state.

### Added

- **Jev post screening.** With `TYPESAFE_API_KEY` set, TypeSafe's Jev reads each StockTwits and Reddit post the Sentiment Analyst fetches: posts that are not about the company are dropped, and each source opens with a count of the rest by stance. Without the key nothing changes. (#1376)
- B3 tickers (`.SA`) are benchmarked against the Ibovespa. (#1366)

### Models

- GPT-6 Sol and GPT-6 Luna are the default deep and quick models, and Claude Opus 5.5 replaces Opus 5 in the picker. Opus 5 and GPT-5.4 Mini remain valid model IDs.

### Fixed

- Several graphs in one process each read their own data vendors. (#1369)
- SEC EDGAR cash flow statements find capital expenditure for filers that moved it to purchases of productive assets (NVIDIA since fiscal 2022, Amazon since 2016), whose recent periods read as empty. (#1370)
- SEC EDGAR annual statements list fiscal years only.
- A historical run is no longer told today's date, or a date after the run, in coverage notices and the instrument context.
- The Fundamentals Analyst can call the insider transactions tool.
- An unreachable Yahoo on insider transactions is reported as unavailable, not as a symbol without data.
- A graph reused across runs, as in a backtest, no longer keeps every run's full state.
- A checkpointed CLI run says whether it resumed or started fresh.
- A blank path variable (`TRADINGAGENTS_RESULTS_DIR` and the like) keeps the default path.
- StockTwits messages reach the prompt as plain text rather than HTML-escaped.
- The test suite is independent of the developer's `.env`, time zone and network. (#1368, #1372)

### Contributors

Thanks to everyone who reported these or sent a fix:

[@codify88](https://github.com/codify88), [@davidalmeida90](https://github.com/davidalmeida90), [@duongylinh](https://github.com/duongylinh), [@jccl2](https://github.com/jccl2), [@yuina368](https://github.com/yuina368).

---

> **Source** [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) · `v0.5.1` · 2026-09-24 · [upstream release](https://github.com/TauricResearch/TradingAgents/releases/tag/v0.5.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
