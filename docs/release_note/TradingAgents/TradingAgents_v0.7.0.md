---
title: "TradingAgents v0.7.0"
project: "TradingAgents"
repo: "TauricResearch/TradingAgents"
tag: "v0.7.0"
version: "v0.7.0"
published: "2026-10-16"
type: "minor"
lang: "en"
summary: "Runs on your ChatGPT plan, backtests scored from the first close after each decision, a note at start-up when a newer release is out, and a wheel attached to each GitHub release."
---

# TradingAgents v0.7.0

Runs on your ChatGPT plan, backtests scored from the first close after each decision, a note at start-up when a newer release is out, and a wheel attached to each GitHub release.

## Added

- **Your ChatGPT plan.** The `chatgpt` provider runs TradingAgents on a ChatGPT Plus or Pro plan instead of an API key, through OpenAI's sign-in for open-source apps. Choose "Subscription" in the CLI's provider menu; for unattended runs, Docker and Python (`llm_provider="chatgpt"`), sign in once with `tradingagents login chatgpt`. `tradingagents logout chatgpt` revokes the sign-in. The CLI lists the plan's models, and reasoning effort applies as it does for OpenAI. (#1194, #1475)
- **What's new at start-up.** The interactive CLI mentions a newer release, with the command that upgrades this install when it can tell how TradingAgents was installed, and notices from Tauric Research for the running version. It checks at most once a day in the background, so a run never waits on it; runs without a terminal never check, and `TRADINGAGENTS_NO_UPDATE_CHECK=1` turns it off.
- **Release downloads.** Each GitHub release carries the source archive and a wheel, so a version installs with `pip install` from its release page without cloning.

## Upgrading from 0.6.0

- `cryptography` 42 and `packaging` 24 or later are installed.
- Decisions are now scored from the first close after their date. Outcomes already settled in a memory log keep the earlier entry, the close of the decision date, so a backtest resumed with `run_id` mixes the two; start a new run to compare like with like.

## Fixed

- A decision is no longer scored against news it could not have traded on: a run dated *d* reads news published after the close on *d*, so the memory log and backtests enter it at the first close after *d*, not the close of *d*. (#1518)
- A run without a terminal, such as a scheduled job or CI, no longer contacts the announcements server before it starts.
- A model tier on another provider keeps its configured reasoning effort, thinking level or Claude effort when the main provider has none. (#1440)

## Contributors

[@LeonWTW](https://github.com/LeonWTW), [@OleksanderSS](https://github.com/OleksanderSS), [@sovorn-c](https://github.com/sovorn-c).

---

> **Source** [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) · `v0.7.0` · 2026-10-16 · [upstream release](https://github.com/TauricResearch/TradingAgents/releases/tag/v0.7.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
