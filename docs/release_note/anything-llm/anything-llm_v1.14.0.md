---
title: "anything-llm v1.14.0"
project: "anything-llm"
repo: "Mintplex-Labs/anything-llm"
tag: "v1.14.0"
published: "2026-06-09"
type: "minor"
lang: "en"
summary: "Full Changelog: https://github.com/Mintplex-Labs/anything-llm/compare/v1.13.0...v1.14.0"
---

# anything-llm v1.14.0

## Improvements

- [x] Cerebres provider
- [x] The default chat thread is now killed when you create a new thread. If you have chats on the default thread, it will be available still. New workspaces or workspaces with no chats on default will no longer show it.
- [x] All model providers are now *opt-out* of tool calling by default. Everything will call tools by default unless you opt-out offering better performance for agents everywhere
- [x] STT Support for Deepgram, GenericOAI, Lemonade, & OpenAI
- [x] TTS Support for KokoroTTS
- [x] Web-scraping now will convert to markdown for better parsing and chat followup tasks with minimal context bloat
- [x] Summary tool was overhauled. Now it will so better summaries with transparency as well as ask before continuing for longer summaries
- [x] Improvements to the GenericOAI provider
- [x] 24hour system variable formats
- [x] Better LaTex rendering support

## Bug Fixes

- [x] Context limit detection issue for agents: https://github.com/Mintplex-Labs/anything-llm/pull/5716
- [x] SEARXNG double encoding: https://github.com/Mintplex-Labs/anything-llm/pull/5723
- [x] Timeouts for all fetch requests https://github.com/Mintplex-Labs/anything-llm/pull/5721
- [x] Escape illegal XML in word docs, etc https://github.com/Mintplex-Labs/anything-llm/pull/5760
- [x] (Windows) On unisntall, checkbox to remove **all** AnythingLLM data is now present
- [x] Tray Fixes when app starts in background or Desktop Assistant feature is toggled.

## What's Changed
* docs: list all cloud embedding providers by @narutamaaurum in https://github.com/Mintplex-Labs/anything-llm/pull/5701
* feat: add Cerebras as an LLM provider by @officialasishkumar in https://github.com/Mintplex-Labs/anything-llm/pull/5699
* fix provider override in agents by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/5716
* docs: fix self-hosted terms wording by @Zhao73 in https://github.com/Mintplex-Labs/anything-llm/pull/5737
* fix: avoid double-encoding SearXNG search queries by @trick77 in https://github.com/Mintplex-Labs/anything-llm/pull/5723
* Kill `default` thread by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/5739
* feat: add server-side speech-to-text with OpenAI provider by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/5596
* Kokoro TTS provider by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/5679
* add windows paths to isWithin by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/5685
* apply universal sdk timeout by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/5721
* fix: support Azure & Dell Pro AI Studio providers in agent summarization fallback by @sanidhyasin in https://github.com/Mintplex-Labs/anything-llm/pull/5738
* Turn HTML scraped sites to Markdown for better research by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/5742
* Improve agent summarizer tool by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/5719
* Generic OpenAI improvements by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/5746
* feat: make document sync stale-after interval configurable by @sanidhyasin in https://github.com/Mintplex-Labs/anything-llm/pull/5747
* fix: strip XML-illegal control characters from generated documents by @sanidhyasin in https://github.com/Mintplex-Labs/anything-llm/pull/5760
* feat(embed): opt-in deny-by-default for embeds with no allowlist by @dmitrymaranik in https://github.com/Mintplex-Labs/anything-llm/pull/5759
* add 24 hours date and time formats to SystemVariables by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/5778
* Make native tool calling opt-out instead of opt-in by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/5783
* better LaTex support by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/5779

## New Contributors
* @narutamaaurum made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/5701
* @Zhao73 made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/5737
* @trick77 made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/5723
* @sanidhyasin made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/5738
* @dmitrymaranik made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/5759

**Full Changelog**: https://github.com/Mintplex-Labs/anything-llm/compare/v1.13.0...v1.14.0

---

> **Source** [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) · `v1.14.0` · 2026-06-09 · [upstream release](https://github.com/Mintplex-Labs/anything-llm/releases/tag/v1.14.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
