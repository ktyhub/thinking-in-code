---
title: "TradingAgents v0.5.2"
project: "TradingAgents"
repo: "TauricResearch/TradingAgents"
tag: "v0.5.2"
version: "v0.5.2"
published: "2026-09-29"
type: "patch"
lang: "en"
summary: "Parallel analysts, unattended CLI runs, reports that record what produced them, and past runs served only what was known on their date."
---

# TradingAgents v0.5.2

Parallel analysts, unattended CLI runs, reports that record what produced them,
and past runs served only what was known on their date.

## Added

- **Parallel analysts.** The selected analysts run at the same time, so the analyst phase takes about as long as the slowest one; the CLI shows each analyst's progress and time as it finishes, and the debate starts when all reports are in. (#1255, #433)
- **Unattended CLI runs.** Flags answer the per-run questions, and `TRADINGAGENTS_*` variables the rest, so a scheduled job or script asks nothing: `tradingagents --ticker NVDA --date 2026-09-26 --analysts market,news --save --no-show`. Without a terminal, a missing answer stops the run before it starts and names what to set. (#1127, #1133)
- **Reports record what produced them.** Each report opens with the analysis date, version, provider, models, analysts, rounds and data vendors; the state log keeps them as `run_settings`. (#752, #1197)
- **Docker data folder.** `TRADINGAGENTS_DATA_DIR` keeps results, reports and the memory log in a host folder. (#865)
- **A cap on an analyst's tool calls.** After `max_tool_rounds` rounds (default 20, `TRADINGAGENTS_MAX_TOOL_ROUNDS`) the analyst writes its report from what it has. (#1420)
- `tradingagents backtest` shows each cell as it starts and the `--run-id` to continue; `--analysts` accepts `sentiment`.
- Benchmarks for Taiwan, Korea, Singapore and the main European exchanges. (#1392)
- Python 3.14 support; the Docker image runs Python 3.13.

## Models

- `deepseek-flash` is treated as a thinking model, so structured output works. (#1388)

## Upgrading from 0.5.1

- Python 3.11 or later is required; pandas 3 is installed.
- Minimum versions: yfinance 1.7.0, langchain-core 1.6.5, langchain-openai 1.6.6, langchain-anthropic 1.7.4, langchain-google-genai 4.4.0, langgraph 1.2.12, langgraph-checkpoint-sqlite 3.1.1, langchain-aws 1.7.9 (`bedrock` extra).
- Statements default to SEC EDGAR, then Yahoo (`fundamental_data = "sec_edgar,yfinance"`).
- A past-dated run gets no Yahoo or Alpha Vantage statements or insider trades, which carry no filing date, and only the company's current name, marked as such.
- The memory log is the `tradingagents.memory` package (was `tradingagents.decision_log`); settlement and reflection moved there from `tradingagents.graph`, and `Reflector` is no longer exported from `tradingagents.graph`.
- `process_signal` is removed; the rating is `propagate()`'s second value or `final_state["final_rating"]`.
- A rating is read only from its `Rating:` label; a free-text decision without one is `REVIEW`.
- Data-layer functions take `as_of_date=` (was `curr_date=`); `build_instrument_context` and `resolve_instrument_context` take `trade_date=`.
- `VendorRateLimitError` is `VendorUnavailableError`.
- Data tools take the instrument from the run's state; tool calls no longer carry `symbol` or `ticker`.
- State log: `trader_investment_plan` (was `trader_investment_decision`), `judge_decision` removed, `final_rating` and `run_settings` added.
- Checkpoints from 0.5.1, or saved under different settings, are not resumed.

## Fixed

- Data tools serve the run's instrument, even when the model passes another symbol.
- A failed vendor request is reported as unavailable, not as a missing or delisted symbol; one vendor's "no data" no longer speaks for a chain in which another failed. (#1386)
- The rating is the Portfolio Manager's own, not one its thesis quotes (#1383); its line keeps an English label in other output languages (#1435).
- Backtest cells given twice run once (#1415), and settlement compares a decision with its benchmark over the same dates.
- A snapshot for a symbol with no prices no longer ends the run.
- Concurrent runs no longer drop memory log entries.
- SEC EDGAR quarterly figures filed only year to date are served, labelled with their span.
- Yahoo dividend yield and debt-to-equity print as percentages. (#1414)
- The FRED change line names the dates it spans. (#1397)
- `stream_run` serves the graph's own config to its tools.
- The test suite stays off the network and out of the user's files, and passes in any order; integration tests run with `-m integration`. (#1395)

## Contributors

[@1Wizzy](https://github.com/1Wizzy), [@BichengWang](https://github.com/BichengWang), [@Chaoqi31](https://github.com/Chaoqi31), [@davidalmeida90](https://github.com/davidalmeida90), [@djconnexion77](https://github.com/djconnexion77), [@fuzing](https://github.com/fuzing), [@hailampy123](https://github.com/hailampy123), [@hesam-shams](https://github.com/hesam-shams), [@HEYALT](https://github.com/HEYALT), [@Jackzigen](https://github.com/Jackzigen), [@kagura-agent](https://github.com/kagura-agent), [@loulanyue](https://github.com/loulanyue), [@mannubaveja007](https://github.com/mannubaveja007), [@olivergpt](https://github.com/olivergpt), [@rita112025-cpu](https://github.com/rita112025-cpu), [@shuyan-code](https://github.com/shuyan-code), [@SingTheCode](https://github.com/SingTheCode), [@sjq597](https://github.com/sjq597), [@xiaodu55](https://github.com/xiaodu55), [@Youholdme](https://github.com/Youholdme).

---

> **Source** [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) · `v0.5.2` · 2026-09-29 · [upstream release](https://github.com/TauricResearch/TradingAgents/releases/tag/v0.5.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
