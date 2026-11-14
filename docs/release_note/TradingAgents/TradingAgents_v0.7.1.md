---
title: "TradingAgents v0.7.1"
project: "TradingAgents"
repo: "TauricResearch/TradingAgents"
tag: "v0.7.1"
version: "v0.7.1"
published: "2026-10-27"
type: "patch"
lang: "en"
summary: "Decisions are scored only on final closes and settle across long market holidays, a model's unpadded date no longer reads filings made after the run date, and fixes to portfolios, prices, SEC statements, reports, Azure…"
---

# TradingAgents v0.7.1

Decisions are scored only on final closes and settle across long market holidays, a model's unpadded date no longer reads filings made after the run date, and fixes to portfolios, prices, SEC statements, reports, Azure and Claude settings.

## Upgrading from 0.7.0

- Docker images no longer include `.env.enterprise`. For Azure OpenAI in Docker, put its keys in `.env`.

## Fixed

- A date a model passes without zero padding, such as `2024-7-5`, is read as that date. It could compare as later than a filing made after the run date, and SEC EDGAR then served that filing. (#1488)
- A decision is no longer scored on the bar of a session still trading, and one made before a market closure longer than a week, such as a national holiday, settles once trading resumes instead of staying pending. (#1548, #1539)
- A backtest reports the failures of its last settlement pass, and two started in the same second no longer share one run. (#1557, #1549)
- A holding listed under a broker's spelling (`BTCUSDT`, `700.HK`) is matched to the instrument analyzed, and a portfolio number that is not finite is refused when the file loads. (#1556, #1509)
- Prices keep their significant digits: a sub-cent close no longer prints as 0.00, and a currency pair keeps its pips. (#1567)
- SEC EDGAR statements list one row per period, so a model no longer reads a figure against the wrong quarter across a long history, and a figure under one million no longer prints as 0. (#1517, #1589)
- Saving a report to a folder used before removes the earlier run's sections. (#1566)
- A date window that ends before it starts is sent back to the model instead of returning no data. (#1595)
- A statement frequency other than annual or quarterly is sent back to the model instead of being served annual figures under that word. (#1593)
- The memory's most recent lessons, and the entries rotation keeps, follow decision dates, so a backfill of older dates no longer displaces them. (#1603)
- Prediction-market odds near 0% or 100% show their distance from it to two significant digits. (#1598)
- Azure OpenAI receives `max_tokens` and a configured endpoint. (#1584, #1600)
- Claude's effort setting is decided correctly for dated model IDs such as `claude-sonnet-4-20250514`. (#1585)
- The CLI checks a ticker with the same rule as the run, so `XAUUSD+` is accepted and `..` is refused at the prompt. (#1604)
- Docker images no longer include `.env` files from any folder.
- Tests that failed on Windows and macOS for platform reasons are fixed. (#1506, #1485, #1541)

## Contributors

[@alanfate3](https://github.com/alanfate3), [@aranlucas](https://github.com/aranlucas), [@BichengWang](https://github.com/BichengWang), [@Bortlesboat](https://github.com/Bortlesboat), [@hoffman988](https://github.com/hoffman988), [@jhill-cmd](https://github.com/jhill-cmd), [@muhib-karim](https://github.com/muhib-karim), [@pei711](https://github.com/pei711), [@peiji1981](https://github.com/peiji1981), [@rudycelekli](https://github.com/rudycelekli), [@Shubham-Padkonde](https://github.com/Shubham-Padkonde), [@stevexyz2003](https://github.com/stevexyz2003), [@SuperMarioYL](https://github.com/SuperMarioYL), [@sytfly](https://github.com/sytfly), [@yuv009](https://github.com/yuv009).

---

> **Source** [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) · `v0.7.1` · 2026-10-27 · [upstream release](https://github.com/TauricResearch/TradingAgents/releases/tag/v0.7.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
