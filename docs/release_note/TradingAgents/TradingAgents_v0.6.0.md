---
title: "TradingAgents v0.6.0"
project: "TradingAgents"
repo: "TauricResearch/TradingAgents"
tag: "v0.6.0"
version: "v0.6.0"
published: "2026-10-03"
type: "minor"
lang: "en"
summary: "HTML reports, a provider per model tier, past decisions settled for every ticker while the analysts work, and company news read while Yahoo's news feed is down."
---

# TradingAgents v0.6.0

HTML reports, a provider per model tier, past decisions settled for every ticker while the analysts work, and company news read while Yahoo's news feed is down.

## Added

- **HTML report.** A saved report also includes `complete_report.html`, the report as one page with its sections listed beside the text, that reads well in a browser, on a phone and in print. Answering the save question at the prompt also asks about the page and can open it in your browser; `--no-html` or `save_reports(..., html=False)` skips it. The page is self-contained: it loads nothing and runs nothing. (#1419)
- **A provider per model tier.** The quick and deep models can run on different providers, for example the managers on Claude while the analysts run on OpenAI: set `deep_think_provider` or `quick_think_provider` (`TRADINGAGENTS_DEEP_THINK_PROVIDER`, `TRADINGAGENTS_QUICK_THINK_PROVIDER`) with the tier's model. The report header names each tier's provider. (#1440)
- **Past decisions settle alongside the analysts.** While a run's analysts work, every logged decision whose holding period has passed is settled, for any ticker, not only the one being analyzed. If settling fails, the run goes on and the report header says so. (#1428, #1445)
- **Crypto on Reddit.** For a crypto ticker the Sentiment Analyst reads r/CryptoCurrency and r/CryptoMarkets, plus r/Bitcoin, r/ethereum or r/solana for those coins, instead of the stock subreddits. (#1461)
- `settle_all_pending()` settles every due decision without running an analysis, for a scheduled job; it and `settle_pending()` return the decisions settled and any that could not be. (#1445)
- The report header names the run's rating.
- Euro-area macro series by name: `ecb_deposit_rate`, `ecb_main_refi_rate`, `euro_hicp`, `euro_core_hicp`, `euro_real_gdp`, `germany_10y`, `france_10y` and `eur_usd`. (#1465)

## Models

- A Gemini call times out after 600 seconds, as OpenAI and Anthropic calls do, so a stalled call no longer hangs the run. (#1417)

## Upgrading from 0.5.2

- markdown-it-py 4.0 or later is installed.
- A saved report also writes `complete_report.html`; pass `--no-html`, or `html=False` to `save_reports()`, to keep only the Markdown.
- A run no longer settles its ticker's decisions before it starts; the Memory Log step settles every ticker's during the run.
- `settle_pending()` returns a `Settlement` with `settled` and `failed` (was `None`).
- Checkpoints from 0.5.2 are not resumed.

## Fixed

- Company news is read from Yahoo search while Yahoo's news feed returns nothing. When Yahoo has no article about the symbol, its news is reported unavailable, not absent, and a configured next news vendor is tried. (#1467, #1469)
- A rating quoted from someone else, such as "Consensus rating: Buy", no longer replaces the Portfolio Manager's own. (#1466)
- A Yahoo news article with a null field no longer loses the ticker's news. (#1458)
- A start date a model writes with stray characters is sent back to it to correct, instead of failing the news or price request. (#1476)
- A request Alpha Vantage rejects is reported as unavailable, not served as data; the API key is kept out of every Alpha Vantage error. (#1442)
- Yahoo fundamentals print each money figure in its own currency: London prices in GBp, market cap and per-share figures in GBP, and an ADR's income figures in its reporting currency, such as TWD for TSMC. (#1456)
- Jev screening uses the endpoint `TYPESAFE_BASE_URL` names, so it can run through OpenRouter. (#1416)
- Runs sharing a memory log settle each decision once, and an interrupted settlement keeps the outcomes it finished.
- The report header names the sentiment analyst `sentiment`, as the CLI does.
- `requirements.txt` says the dependencies are declared in `pyproject.toml`.

## Contributors

[@amitbhansali](https://github.com/amitbhansali), [@AyushJain-601](https://github.com/AyushJain-601), [@BichengWang](https://github.com/BichengWang), [@byte7m](https://github.com/byte7m), [@Dangerboi](https://github.com/Dangerboi), [@davidalmeida90](https://github.com/davidalmeida90), [@Jackzigen](https://github.com/Jackzigen), [@jhill-cmd](https://github.com/jhill-cmd), [@Recnelis0](https://github.com/Recnelis0), [@seaaxe](https://github.com/seaaxe), [@vaegev](https://github.com/vaegev).

---

> **Source** [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) · `v0.6.0` · 2026-10-03 · [upstream release](https://github.com/TauricResearch/TradingAgents/releases/tag/v0.6.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
