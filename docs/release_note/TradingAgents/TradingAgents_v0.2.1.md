---
title: "TradingAgents v0.2.1"
project: "TradingAgents"
repo: "TauricResearch/TradingAgents"
tag: "v0.2.1"
version: "v0.2.1"
published: "2026-03-15"
type: "patch"
lang: "en"
summary: "TradingAgents v0.2.1 brings expanded model coverage, improved robustness, and security hardening."
---

# TradingAgents v0.2.1

## Summary

TradingAgents v0.2.1 brings expanded model coverage, improved robustness, and security hardening.

### Model Coverage
- OpenAI GPT-5.4 and GPT-5.4 Pro support with 1M token context
- Anthropic Claude Opus 4.6 and Sonnet 4.6 support
- Google Gemini 3.1 Pro and 3.1 Flash Lite support
- Streamlined model selection with intuitive ordering in CLI

### Robustness
- Resilient stock data parsing with automatic handling of malformed CSV and NaN values
- Robust indicator tool that gracefully handles comma-separated inputs from LLMs
- Complete debate state initialization preventing KeyError in edge-case configurations
- Configurable debate rounds now correctly passed through to ConditionalLogic
- Cross-platform UTF-8 file encoding for Windows compatibility

### Security
- Dependency vulnerability patched (CVE-2026-22218)

### Maintenance
- Triaged 93 open PRs, closing resolved and stale submissions
- Cleaned up deprecated model entries
- Fixed `pip install` package metadata

---

> **Source** [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) · `v0.2.1` · 2026-03-15 · [upstream release](https://github.com/TauricResearch/TradingAgents/releases/tag/v0.2.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
