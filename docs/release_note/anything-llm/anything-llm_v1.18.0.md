---
title: "anything-llm v1.18.0"
project: "anything-llm"
repo: "Mintplex-Labs/anything-llm"
tag: "v1.18.0"
published: "2026-10-13"
type: "minor"
lang: "en"
summary: "Full Changelog: https://github.com/Mintplex-Labs/anything-llm/compare/v1.17.0...v1.18.0"
---

# anything-llm v1.18.0

## What's Changed
* fix: point k8s probes at the server's /api/ping by @u00dxk2 in https://github.com/Mintplex-Labs/anything-llm/pull/6592
* fix: don't crash when removing a parsed file while an image is attached by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6585
* fix: open the clicked image when attachments share a file name by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6586
* fix: stop sending history attachments to providers that build prompts from raw chat history by @simonether in https://github.com/Mintplex-Labs/anything-llm/pull/6591
* fix: compare embed allowlist entries as browser origins by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6584
* add dismissal comment to prevent low-effort research claims by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6608
* fix: send agent tool required params on every provider path by @wenqiw777 in https://github.com/Mintplex-Labs/anything-llm/pull/6595
* fix: honor the SDK retry count when ANYTHINGLLM_MAX_RETRIES is set by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6597
* fix: save the Outlook account type so sign-in uses the right tenant by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6599
* fix: show an error when a system prompt variable change fails by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6604
* fix: apply TOOL_CALL_APPROVAL_TIMEOUT_MS to Telegram tool approvals by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6601
* fix: convert the hourly schedule minute to UTC in half-hour time zones by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6605
* fix: select entire folder after upload when picker is paginated by @YokoAC in https://github.com/Mintplex-Labs/anything-llm/pull/6610
* fix: keep numeric strings over 15 digits as text in created Excel files by @deepanshupal in https://github.com/Mintplex-Labs/anything-llm/pull/6613
* fix: restore dropped i18n placeholders in MCP and profile strings by @theluckystrike in https://github.com/Mintplex-Labs/anything-llm/pull/6614
* fix: scrape each page once when bulk links differ only by #fragment by @MohammadHijjawi97 in https://github.com/Mintplex-Labs/anything-llm/pull/6619
* fix: attach requested files to Outlook replies and reply drafts by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6623
* fix: return 404 for an unknown workspace on manage-users and update-pin by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6625
* fix: load the next page of documents from the server's offset in the picker by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6628
* fix: show an error when embedding attached files into the workspace fails by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6629
* fix: restore dropped i18n values in model router and model picker strings by @theluckystrike in https://github.com/Mintplex-Labs/anything-llm/pull/6631
* fix: preserve referenced MBOX chat attachments during orphan cleanup by @dakjdakd in https://github.com/Mintplex-Labs/anything-llm/pull/6633
* fix: isolate chat attachment state and uploads by conversation by @dakjdakd in https://github.com/Mintplex-Labs/anything-llm/pull/6635
* fix: finalize stopped scheduled job runs on Windows by @dakjdakd in https://github.com/Mintplex-Labs/anything-llm/pull/6637
* fix: don't treat YouTube channel URLs as video links in the collector by @theluckystrike in https://github.com/Mintplex-Labs/anything-llm/pull/6644
* fix: apply workspace similarity threshold to agent rag-memory search by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6648
* fix: write bulk scraped pages that share a file name to separate files by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6650
* fix: surface Confluence load failures instead of reporting no pages by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6652
* fix: restore document embedding for AstraDB by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6654
* fix: stop scheduled jobs after switching to multi-user mode by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6656
* fix(server): keep $$ and $& intact when expanding prompt variables by @rome-xi in https://github.com/Mintplex-Labs/anything-llm/pull/6676
* fix(collector): stop treating binary types with no converter as text by @moneebullah25 in https://github.com/Mintplex-Labs/anything-llm/pull/6670
* fix: use response.send instead of response.text in repo provider check by @Saadanjum0 in https://github.com/Mintplex-Labs/anything-llm/pull/6677
* fix: use a realistic fallback divisor for collector token estimates by @moneebullah25 in https://github.com/Mintplex-Labs/anything-llm/pull/6672
* fix: return after resolve in wipeCollectorStorage guards by @moneebullah25 in https://github.com/Mintplex-Labs/anything-llm/pull/6671
* Fix raw think blocks in scheduled job responses after tool calls by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/6663
* fix: keep unsent prompt text when attaching a file creates a new thread by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6704
* fix: retry watched documents when re-embedding fails by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6701
* fix: report a failed first Paperless-ngx request instead of no documents found by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6699
* fix: keep the configured Paperless-ngx URL when following page links by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6698
* fix: pass transcription and OCR settings to linked files by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6697
* fix: give the same login error for an unknown username and a wrong password by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6693
* fix: render nested and repeated lists correctly in created Word documents by @wenqiw777 in https://github.com/Mintplex-Labs/anything-llm/pull/6688
* fix: request serial tool use for Anthropic agent providers by @dakjdakd in https://github.com/Mintplex-Labs/anything-llm/pull/6708
* fix: propagate PGVector transaction failures without losing the original error by @dakjdakd in https://github.com/Mintplex-Labs/anything-llm/pull/6706
* fix: cancel queued scheduled-job runs when a job is disabled or resynced by @dakjdakd in https://github.com/Mintplex-Labs/anything-llm/pull/6710
* v1.18.0 tags by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6711

## New Contributors
* @u00dxk2 made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6592
* @YokoAC made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6610
* @deepanshupal made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6613
* @theluckystrike made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6614
* @dakjdakd made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6633
* @rome-xi made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6676
* @moneebullah25 made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6670
* @Saadanjum0 made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6677

**Full Changelog**: https://github.com/Mintplex-Labs/anything-llm/compare/v1.17.0...v1.18.0

---

> **Source** [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) · `v1.18.0` · 2026-10-13 · [upstream release](https://github.com/Mintplex-Labs/anything-llm/releases/tag/v1.18.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
