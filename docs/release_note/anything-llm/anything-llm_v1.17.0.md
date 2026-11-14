---
title: "anything-llm v1.17.0"
project: "anything-llm"
repo: "Mintplex-Labs/anything-llm"
tag: "v1.17.0"
version: "v1.17.0"
published: "2026-10-01"
type: "minor"
lang: "en"
---

# anything-llm v1.17.0

## What's Changed
* fix(collector): read spreadsheet dates as dates, not serial numbers by @L4XB in https://github.com/Mintplex-Labs/anything-llm/pull/6478
* Drop temp param for Anthropic models by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/6472
* Allow Generic OpenAI max tokens of 0 to omit max_tokens from request by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/6470
* fix: support SearchApi engines in agent web browsing by @evilive3000 in https://github.com/Mintplex-Labs/anything-llm/pull/6465
* fix: ignore malformed agent WebSocket frames instead of crashing the server by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6493
* fix(collector): read an HTML-only mbox message instead of skipping it by @L4XB in https://github.com/Mintplex-Labs/anything-llm/pull/6484
* fix(collector): read text uploads in the encoding they were written in by @L4XB in https://github.com/Mintplex-Labs/anything-llm/pull/6486
* fix(weaviate, astra): score chunks by cosine similarity like the other providers by @L4XB in https://github.com/Mintplex-Labs/anything-llm/pull/6488
* fix(bedrock): support OpenAI models on AWS by @hahahahahayesyeseys in https://github.com/Mintplex-Labs/anything-llm/pull/6473
* fix: fetch Kokoro voices from the same base path speech uses by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6459
* feat(togetherai): allow configuring max_tokens to prevent response truncation by @imanecdoche in https://github.com/Mintplex-Labs/anything-llm/pull/6463
* fix: reset vectors and warn when the Azure embedding deployment changes by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6461
* fix: keep manually set env settings when a settings save rewrites .env by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6457
* fix: use the workspace refusal text when an embed has no documents by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6454
* fix: export only the chats the chat window shows by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6452
* fix: keep every sheet of a multi-sheet XLSX upload by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6450
* Include generated images in chat exports by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/6482
* feat: add Firecrawl agent web-search provider by @JuampiHernandez in https://github.com/Mintplex-Labs/anything-llm/pull/6480
* Autosave workspace settings on edit by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/6343
* Add keyboard navigation and autofocus to provider search menus by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/6483
* Read Anthropic replies from text blocks, not the first block by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6496
* fix: keep Telegram link URLs intact when they contain markdown characters by @MohammadHijjawi97 in https://github.com/Mintplex-Labs/anything-llm/pull/6524
* feat: add Gemini as an image generation provider by @petre in https://github.com/Mintplex-Labs/anything-llm/pull/6520
* fix(ui): use dynamic viewport height for mobile sidebar drawers by @albiea in https://github.com/Mintplex-Labs/anything-llm/pull/6518
* fix: keep compressed RAG context when the prompt or a chunk says "Context:" by @breken-ai in https://github.com/Mintplex-Labs/anything-llm/pull/6503
* fix: skip emoji when reading a message aloud by @SulimanAbdulrazzaq in https://github.com/Mintplex-Labs/anything-llm/pull/6500
* fix: clear the workspace router when switching back to the system default by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6506
* fix: skip saving an embed chat when the reply came back empty by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6508
* fix: let users and admins clear a bio by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6510
* fix: resolve relative links against the page they appear on when crawling deeper by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6512
* fix: keep each mbox message's own title when an upload supplies one by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6514
* Add llmman image generation provider by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/6497
* fix: let Milvus and Zilliz embed into workspaces whose slug starts with a digit by @wenqiw777 in https://github.com/Mintplex-Labs/anything-llm/pull/6527
* fix: filter Google Calendar skill in multi-user mode and apply its disabled sub-skills by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6539
* fix: keep Confluence code blocks whose macro does not list ac:name first by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6530
* fix: embed every document an API upload returns into addToWorkspaces by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6532
* fix: keep IPs, versions and decimal commas as text in created Excel files by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6534
* fix: only run Telegram bot commands at the start of a message by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6536
* fix: send the Keep Alive setting on agent requests to Ollama and llmman by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6538
* fix(mobile): reject unknown threadSlug on reset-chat and stream-chat by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6540
* fix: render c++, ~~~ and nested fenced code as code in Telegram replies by @huiq777 in https://github.com/Mintplex-Labs/anything-llm/pull/6547
* fix: decode DuckDuckGo result links once and strip HTML from titles by @simonether in https://github.com/Mintplex-Labs/anything-llm/pull/6544
* Clean up TTS text for cloud voices and Telegram voice replies by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/6552
* fix: use each workspace's prompt and id in JSONL and Alpaca chat exports by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6551
* Rotate empty chat greetings by time of day by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6567
* fix: mask the saved LiteLLM API key and save changes to it by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6556
* fix: shift the weekday and day of month of scheduled jobs across UTC midnight by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6558
* fix: load Fireworks models and Kokoro voices with the saved API key by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6557
* fix: give each new agent flow block its own id by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6560
* fix: save turning password protection off so it survives a restart by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6562
* fix: save links whose URL path cannot be percent-decoded by @MohammadHijjawi97 in https://github.com/Mintplex-Labs/anything-llm/pull/6565
* fix: use the embed's message history limit when the model router is on by @MohammadHijjawi97 in https://github.com/Mintplex-Labs/anything-llm/pull/6566
* fix: stop filesystem-edit-file expanding $ patterns in newText by @wenqiw777 in https://github.com/Mintplex-Labs/anything-llm/pull/6569
* fix: parse developer API document attachments for agent chats by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6573
* fix: keep uploaded images when switching from chat to @agent mid-session by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6572
* Apply workspace temperature to agents and omit the parameter when unset by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/6285
* Reasoning effort controls by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/6269

## New Contributors
* @evilive3000 made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6465
* @hahahahahayesyeseys made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6473
* @imanecdoche made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6463
* @JuampiHernandez made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6480
* @MohammadHijjawi97 made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6524
* @albiea made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6518
* @breken-ai made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6503
* @SulimanAbdulrazzaq made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6500
* @wenqiw777 made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6527
* @huiq777 made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6547
* @simonether made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6544

**Full Changelog**: https://github.com/Mintplex-Labs/anything-llm/compare/v1.16.2...v1.17.0

---

> **Source** [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) · `v1.17.0` · 2026-10-01 · [upstream release](https://github.com/Mintplex-Labs/anything-llm/releases/tag/v1.17.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
