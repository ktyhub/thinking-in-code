---
title: "goose v1.58.0"
project: "goose"
repo: "aaif-goose/goose"
tag: "v1.58.0"
version: "v1.58.0"
published: "2026-11-09"
type: "minor"
lang: "en"
summary: "Opt-in context relevance operation #12589 · Context window report and viewer #10462 · AIHubMix declarative provider #12997 · RouterPlex declarative provider #13068"
---

# goose v1.58.0

## ✨ Features

- Opt-in context relevance operation [#12589](https://github.com/aaif-goose/goose/pull/12589)
- Context window report and viewer [#10462](https://github.com/aaif-goose/goose/pull/10462)
- AIHubMix declarative provider [#12997](https://github.com/aaif-goose/goose/pull/12997)
- RouterPlex declarative provider [#13068](https://github.com/aaif-goose/goose/pull/13068)
- Lemonade provider [#12920](https://github.com/aaif-goose/goose/pull/12920)
- Collapse thinking by default with a setting to control it (desktop) [#12660](https://github.com/aaif-goose/goose/pull/12660)

## 🐛 Bug Fixes

- Replace retired Spark X2 with Spark X2.5 in iflytek_astron [#12772](https://github.com/aaif-goose/goose/pull/12772)
- Show current session ID in /status [#12607](https://github.com/aaif-goose/goose/pull/12607)
- Keep session load on its replay fast path when stopped (desktop) [#13190](https://github.com/aaif-goose/goose/pull/13190)
- Replay OpenAI Responses reasoning across tool turns [#13222](https://github.com/aaif-goose/goose/pull/13222)
- Route bare OpenAI GPT IDs to Mantle by ID shape (bedrock) [#13211](https://github.com/aaif-goose/goose/pull/13211)
- Use supports_vision from /model/info (litellm) [#13239](https://github.com/aaif-goose/goose/pull/13239)
- Honor Retry-After on 429s mapped outside handle_status [#12986](https://github.com/aaif-goose/goose/pull/12986)
- Classify typed context_length_exceeded errors as context overflow (openrouter) [#13154](https://github.com/aaif-goose/goose/pull/13154)
- Report failed manual compaction as an error (acp) [#13099](https://github.com/aaif-goose/goose/pull/13099)
- Fall back to default inference for Bedrock provider models without document block support [#12932](https://github.com/aaif-goose/goose/pull/12932)
- Bump zstd to 0.14.3 for RUSTSEC advisories [#13162](https://github.com/aaif-goose/goose/pull/13162)
- Restore Linux window icons (desktop) [#13120](https://github.com/aaif-goose/goose/pull/13120)
- Resolve variant suffixes like :free and :nitro to the base model (openrouter) [#12979](https://github.com/aaif-goose/goose/pull/12979)
- Use catalog_provider_id for vision lookup on custom providers [#12993](https://github.com/aaif-goose/goose/pull/12993)
- Start the agent only once after a fork (desktop) [#13139](https://github.com/aaif-goose/goose/pull/13139)
- Remove jsonwebtoken to avoid ignoring its cargo-deny advisories [#13141](https://github.com/aaif-goose/goose/pull/13141)
- Use recipe settings in scheduled runs (scheduler) [#13138](https://github.com/aaif-goose/goose/pull/13138)
- Use system trust for WebSockets (voice) [#13075](https://github.com/aaif-goose/goose/pull/13075)
- Stop telling the model a screenshot tool exists (computercontroller) [#13279](https://github.com/aaif-goose/goose/pull/13279)

## 🔧 Improvements

- Replace Agent and AgentManager with one StateMachineServices per process [#12880](https://github.com/aaif-goose/goose/pull/12880)
- Drop tool-specific tool call titles (desktop) [#13107](https://github.com/aaif-goose/goose/pull/13107)
- Remove ACP client-delegated developer tools [#13144](https://github.com/aaif-goose/goose/pull/13144)

## 📚 Documentation

- Say that code is not the only way to contribute [#13292](https://github.com/aaif-goose/goose/pull/13292)
- Feature GDK on the main website [#13245](https://github.com/aaif-goose/goose/pull/13245)
- Give GDK its own navigation and developer guides [#13165](https://github.com/aaif-goose/goose/pull/13165)
- Fikra API example for custom OpenAI endpoints [#13008](https://github.com/aaif-goose/goose/pull/13008)

---

> **Source** [aaif-goose/goose](https://github.com/aaif-goose/goose) · `v1.58.0` · 2026-11-09 · [upstream release](https://github.com/aaif-goose/goose/releases/tag/v1.58.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
