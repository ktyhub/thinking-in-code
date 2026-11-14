---
title: "anything-llm v1.16.2"
project: "anything-llm"
repo: "Mintplex-Labs/anything-llm"
tag: "v1.16.2"
version: "v1.16.2"
published: "2026-09-22"
type: "patch"
lang: "en"
---

# anything-llm v1.16.2

## New Features

- [x] [LLMman - OSS](https://github.com/llmmanorg/llmman) is now available as a local LLM provider, replacing Docker Model Runner
- [x] [Google Vertex AI](https://cloud.google.com/products/gemini-enterprise-agent-platform) is now available as an LLM provider
- [x] New `generate-image` agent skill for creating images from chat
- [x] You.com is now the default web search provider for richer web-searches with Zero Data Retention
- [x] Agent flow variables now support optional arguments
- [x] Hindi, Bulgarian, and Swedish language support added
- [x] GenieX on Windows on ARM now lists models found in your local model directory and lets you pull models directly from Hugging Face in the UI
- [x] Click the version tag in the top of the window to jump to your logs and storage directory more easily

## Improvements

- [x] Web browsing is now enabled by default for agents
- [x] Local providers now report model loading status in chat so you know why the first response is slow
- [x] Ollama runtime bumped to 0.33.3 with an updated bundled model list
- [x] Removed the borders around the main content area for a cleaner desktop layout
- [x] Redesigned the "new feature" modal layout
- [x] Dates in tables are now shown in a human-readable format
- [x] Scraped web pages now preserve tables, ordered lists, and code blocks instead of flattening them
- [x] PDF pages are now joined with newlines so words don't fuse across page boundaries
- [x] Mistral embeddings are now batched, making large document embedding significantly faster
- [x] Document search now matches your terms literally instead of as a regular expression
- [x] Watched documents now clear stale vectors on sync
- [x] AnySearch as a web-search provider
- [x] KoboldCPP provider overhauled and modernized to match the rest of our providers
- [x] Keenable added as a web search provider
- [x] OpenRouter service tier selection for controlling routing cost and priority
- [x] LocalAI image editing via reference images
-----

## All Changes
* bump to patched @mintplex-labs/mdpdf pkg by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6216
* Identify AnythingLLM Perplexity requests by @qirh in https://github.com/Mintplex-Labs/anything-llm/pull/6206
* Add `X-Client-Info` to You.com attribution by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6221
* Google Vertex LLM Provider support by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6218
* fix: stop fillSourceWindow reversing the caller's chat history array by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6231
* fix: keep workspace prompt and temperature when an embed sends no override by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6232
* pass include status on sessionID chat getter by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6237
* fix: stop $ sequences corrupting restored Telegram code blocks by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6235
* Add Swedish frontend locale by @yeager in https://github.com/Mintplex-Labs/anything-llm/pull/6227
* fix: keep thread and user on the query-mode refusal row by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6236
* feat: replace the Docker Model Runner provider with llmman by @ericcurtin in https://github.com/Mintplex-Labs/anything-llm/pull/6226
* fix: return the API Call block's response body instead of a parse message by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6240
* fix: report a failed password update instead of always answering success by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6245
* fix: mobile reset-chat clears the whole workspace instead of the named thread by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6241
* fix: Only block explicit matches for built-in slash commands by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6243
* 6246 pw restrictions by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6250
* Pretty dates on tables by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6251
* Implement LocalAI image editing via ref_images by @TheGoodMorty in https://github.com/Mintplex-Labs/anything-llm/pull/6222
* fix: score Lance chunks at or past orthogonal as 0, not a perfect match by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6253
* Migrate threads on MuM migration by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6259
* fix: stop citation cleanup mangling scraped code and numbered links by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6252
* fix: scope website-depth crawling by origin and path segment by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6258
* docs: fix dead links in README by @1t1sCooL in https://github.com/Mintplex-Labs/anything-llm/pull/6193
* Add variable categories to agent flow variables by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/6249
* Add generate-image agent skill by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/6140
* fix: four server-side bugs (privatemode provider, prompt-history delete, success flag, event log) by @simpleqt in https://github.com/Mintplex-Labs/anything-llm/pull/6165
* feat: support batch URL uploads by @Max-Reisinger in https://github.com/Mintplex-Labs/anything-llm/pull/6175
* fix: restrict workspace prompt-history read to admin/manager by @IdanMit in https://github.com/Mintplex-Labs/anything-llm/pull/6137
* fix: match document search terms literally instead of as regular expressions by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6268
* fix: store DrupalWiki page attachments instead of skipping every one by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6266
* fix: separate PDF page boundaries instead of fusing the adjoining words by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6264
* fix(i18n): correct six Italian UI translations by @Carleoinserra in https://github.com/Mintplex-Labs/anything-llm/pull/6317
* feat(i18n): add Hindi (hi) language support by @tejasashinde in https://github.com/Mintplex-Labs/anything-llm/pull/6319
* fix: clear stale document_vectors rows during watched document sync by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6323
* fix path resolution double slash on fastCRW by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6324
* fix(collector): treat a blank published value as absent, not as the epoch by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6275
* fix: keep chat-history attachments for TogetherAI, SambaNova, Z.ai and Cerebras by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6296
* fix: keep the GitLab repo scheme so http self-hosted instances can re-sync by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6294
* fix: pin @qdrant/js-client-rest to 1.18.0 so lockfile-less builds keep search() by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6326
* fix: honor captureAs html on the scraper's fetch fallback by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6292
* fix: preserve Unicode characters in imported skill names by @dawNotPoi in https://github.com/Mintplex-Labs/anything-llm/pull/6286
* fix: require sql_query, not table_name by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6329
* fix: update workspace chat lastUpdatedAt by @AbarnaaSree in https://github.com/Mintplex-Labs/anything-llm/pull/6288
* fix(collector): keep upload-link metadata when the link resolves to a file by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6277
* fix(generic-openai): honor max tokens in Tooled/UnTooled agent streams by @Jkand in https://github.com/Mintplex-Labs/anything-llm/pull/6331
* Make web search use You.com as the default provider by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/6280
* Enable web-browsing by default by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6335
* Add Keenable web search provider by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6336
* Add `TOOL_CALL_APPROVAL_TIMEOUT_MS` to admin env config by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6339
* Add Bulgarian (bg) translation by @axander44 in https://github.com/Mintplex-Labs/anything-llm/pull/6344
* docs: add Easypanel to self-hosting deploy table by @Ahson-Shaikh in https://github.com/Mintplex-Labs/anything-llm/pull/6360
* patch GHSA-8wh8-3v68-whwj by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6361
* fix: accept the documented allowlist_domains array in the embed API by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6358
* fix: drop a GitLab access token the instance rejects instead of reusing it by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6356
* fix: set Simple SSO temporary auth token expiry to 10 minutes by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6362
* fix: paperless-ngx resync returned empty for every existing document by @auyua9 in https://github.com/Mintplex-Labs/anything-llm/pull/6348
* Add `deepseek-flash` to IncludeReasoning array due to deprecation/upgrade of alias by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6379
* fix(mistral): batch embedding requests and declare the engine's limits by @L4XB in https://github.com/Mintplex-Labs/anything-llm/pull/6378
* fix: stop section and cite cleanup mangling scraped code and links by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6371
* fix: keep the Confluence page scheme so http self-hosted instances re-sync by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6372
* fix: linked mbox scraping returned only the first message by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6374
* fix: decode GitHub file content as UTF-8 when re-syncing a watched document by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6373
* fix: llmman model discovery ignored the token entered in settings by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6376
* KoboldCPP overhaul by @L4XB in https://github.com/Mintplex-Labs/anything-llm/pull/6380
* fix(xlsx): escape spreadsheet cells the way CSV requires by @L4XB in https://github.com/Mintplex-Labs/anything-llm/pull/6381
* fix: log chunk header exceeding chunk size by @L4XB in https://github.com/Mintplex-Labs/anything-llm/pull/6386
* fix: convert a scraped table into a table, not into loose paragraphs by @L4XB in https://github.com/Mintplex-Labs/anything-llm/pull/6387
* Add OpenRouter service tier selection by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/6337
* Bump embed submodule by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/6389
* Report model loading status for local agent providers by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/6392
* fix: give a merged table cell the columns it covers by @L4XB in https://github.com/Mintplex-Labs/anything-llm/pull/6388
* Fix JSON body corruption when agent flow variables contain quotes by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/6402
* fix(localai): pass API key when fetching generated image URL by @leilei3167 in https://github.com/Mintplex-Labs/anything-llm/pull/6425
* fix: read a system message's content parts in the OpenAI-compatible chat endpoint by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6424
* fix: return 404 from thread stream-chat for a missing workspace or thread by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6423
* fix: accept a GitLab clone URL, trailing slash or view URL the way the siblings do by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6420
* fix: return the TogetherAI context window as a number instead of a promise by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6418
* fix: carry the Confluence personal access token through the re-sync payload by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6414
* Resolve GHSA-3f4c-xj8r-h4cr by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6427
* fix: stop the open-computer scraper deleting brackets from code and labels from links by @shoemoney in https://github.com/Mintplex-Labs/anything-llm/pull/6408
* fix: add static promptWindowLimit to MoonshotAI and PPIO by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6438
* fix: reject an empty message list with the existing 400 in the OpenAI-compatible chat endpoint by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6431
* fix: let Groq's current vision model receive image attachments by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6429
* fix: re-sync watched GitLab issues and wiki pages by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6433
* feat: add AnySearch agent web-search provider by @tbontb-iaq in https://github.com/Mintplex-Labs/anything-llm/pull/6439

## New Contributors
* @qirh made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6206
* @yeager made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6227
* @ericcurtin made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6226
* @TheGoodMorty made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6222
* @1t1sCooL made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6193
* @Max-Reisinger made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6175
* @IdanMit made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6137
* @Carleoinserra made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6317
* @tejasashinde made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6319
* @dawNotPoi made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6286
* @AbarnaaSree made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6288
* @Jkand made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6331
* @axander44 made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6344
* @Ahson-Shaikh made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6360
* @auyua9 made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6348
* @L4XB made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6378
* @leilei3167 made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6425
* @shoemoney made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6408
* @tbontb-iaq made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6439

**Full Changelog**: https://github.com/Mintplex-Labs/anything-llm/compare/v1.16.1...v1.16.2

---

> **Source** [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) · `v1.16.2` · 2026-09-22 · [upstream release](https://github.com/Mintplex-Labs/anything-llm/releases/tag/v1.16.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
