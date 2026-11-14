---
title: "hindsight v1.2.1"
project: "hindsight"
repo: "vectorize-io/hindsight"
tag: "v1.2.1"
version: "v1.2.1"
published: "2026-11-10"
type: "patch"
lang: "en"
---

# hindsight v1.2.1

## What's Changed
* docs drop 0.9 by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6284
* docs: reading progress bar under the navbar by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6285
* fix(admin): hindsight-admin cloud is listed in --help by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6286
* fix(api): one id rule for banks, aliases and mental models; bound page max_tokens by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6282
* fix(coding-agents): survey starts from every host again; keep terminal-manager env and color codes out by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6287
* docs(changelog): describe the coding-agents 0.8.5 fixes accurately by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6288
* fix(hermes): accept 1.x hindsight-client and hindsight-embed by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6290
* fix(hermes): don't rewrite a session's memories on every append by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6291
* fix(hermes): report the provider unavailable when hindsight_client can't import by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6292
* fix(hermes): find the server version behind a control-plane proxy by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6296
* fix(memories): a fact's entities come back sorted by name in both the list and the single read by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6294
* fix(hermes): retry a recall on a stale keep-alive connection by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6297
* fix(hermes): tell the launched daemon where the user's database is by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6299
* docs: changelog and blog post for v1.2.0 by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6281
* fix(retain): a store-owned bank with store_document_text off keeps no chunk text by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6301
* fix(banks): clone, transfer import and rename-bank can no longer take over an alias (#6280) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6318
* ci: run CI's LLM on Gemma 4 (Hindsight Inference Dev), with prompt fixes so it passes by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6289
* perf(db): run every pool connection with JIT off, so recall stops compiling its observation lookup (#6306) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6317
* fix(worker): stop a deleted bank's running jobs from recreating it (#6344) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6346
* fix(retain): an append chunks its body the way the next append re-chunks it (#6293) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6354
* docs(models): explain OpenRouter host routing by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6363
* docs: how to run Hindsight on Intel Macs by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6364
* fix(local-models): return freed heap pages to the OS on Windows too (#5478) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6365
* fix(migrations): migrate the base schema at startup when a tenant extension does not list it by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6366
* docs: reflect_default_options does not reach mental-model refreshes by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6367
* fix(knowledge-base): cut search snippets in Python so SQL_ASCII databases don't 500 by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6368
* chore(engine): remove unreachable merge_bank_mission by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6369
* fix(recall): build the VectorChord BM25 query once per search, not once per row by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6373
* fix(consolidation): re-ask once with the errors when a reply misses the schema by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6374
* fix(coding-agents): run the codebase survey only under the host's own CLI by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6378
* docs(changelog): describe the coding-agents 0.8.6 fix accurately by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6383
* fix(mental-models): temporary failures and LLM-slot waits no longer pause automatic refresh (#6140) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6385
* fix(retain): skip the LLM pass when the embeddings backend is known down by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6370
* feat(db): HINDSIGHT_API_DATABASE_CONNECT_HOOK so pools pick up rotated credentials by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6376
* fix(scripts): set a relative core.hooksPath so worktrees don't share one by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6381
* feat(extensions): let an operation validator refuse a refreshed mental-model page by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6386
* feat(stats): count mental models whose automatic refresh is paused (#6077) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6375
* fix: flaky tests and CI flakes (9 issues) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6371
* feat(cli): ship a native Windows x64 binary with each release by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6382
* fix(worker): SIGTERM stops claiming at once and the drain fits the grace period (#6021) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6377
* feat(llm): custom LLM providers by class path, with a typed batch contract by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6384
* fix(mcp): send each multi-bank tool result once, not twice by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6392
* feat(admin): re-embed a schema with a new embedding model while servers keep running by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6372
* feat(recall): opt-in fallback to the reranker when the decision model fails by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6389
* perf(knowledge): delete a folder without re-scanning the bank per node by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6398
* fix(banks): a recreated bank no longer shows the deleted bank's cached stats by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6333
* fix(llm): write an optional tool argument as anyOf, not a type list (#6321, #6305) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6401
* perf(retain): read existing documents' tags in one go for a scoped retain by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6402
* perf(observations): count identical tag lists before sorting scopes (#6328) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6404
* perf(consolidation): check for pending work without counting the bank by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6403
* feat(embeddings): separate query and passage embedders by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6380
* feat(extensions): review extracted memories and consolidation writes before they are stored by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6400
* perf(consolidation): look up recalled observations by id by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6406
* fix(consolidation): keep only the newest 3 earlier-state notes on an observation by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6399
* perf(staleness): ask pages that share a filter once, not once per page (#6325) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6407
* chore(deps): bump pyasn1 to 0.6.5 in system-evals by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6311
* chore(deps): bump pypdf to 6.21.4 in superagent by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6310
* chore(deps): bump joserfc to 1.7.7 and pyasn1 to 0.6.5 in google-adk by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6309
* chore(deps): bump pyasn1 to 0.6.5 by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6308
* chore(deps): bump follow-redirects to 1.16.2 and joi to 17.13.9 by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6307
* perf(entities): a scoped name search or detail reads only the entities it asks for (#6330) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6410
* fix(transfer): a restore racing another into the same fresh bank refuses instead of merging by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6408
* fix(transfer): keep whole-bank export and import archives under the bank's storage prefix by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6409
* perf(recall): count each source fact's tokens once per recall (#6329) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6405
* fix(retain): two concurrent retains of the same content store each fact once (#6337) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6433
* feat(api): add_tags / remove_tags on the document PATCH (#6339) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6411
* feat(http): identify aiohttp-based requests as hindsight/<version> by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6414
* feat(control-plane): bank toggles for recall prune and dedup by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6312
* fix(mental-models): report read and refresh sizes as token counts by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6304
* fix(llm): read only the final-answer message from Responses replies (#6347) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6459
* fix(recall): support dateparser 1.5.0 temporal search (#6359) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6464
* refactor(recall): typed SearchRequest and typed hydration in the search pipeline by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6463
* fix(retain): keep label-derived tags after their label group leaves the config (#6336) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6465
* fix: flaky tests, and the production bugs behind four of them (11 issues) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6460
* fix(oracle): a link to a memory deleted mid-retain no longer fails the batch (#6440) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6467
* fix(retain): reject duplicate and unexpected custom_ids in batch extraction by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6462
* fix(consolidation): count pending memories through the unconsolidated index by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6466
* fix(stats): total_links counts every unit's entity links, not one per entity (#6430) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6470
* fix(mental-models): let the delta step return no edits for off-topic facts by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6473
* chore(deps): bump oauthlib to 4.0.1 in crewai integration lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6479
* fix(graph-maintenance): stop queue-row locks from convoying same-bank writers (#6417) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6472
* fix(llm): check a tool call's reply against its function, correct it once (#6420, #6302) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6469
* fix(llm): reflect tool turns and vision retain never send two user turns in a row (#6349) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6468
* fix(retain): save a large update in batches so an interrupted one keeps its progress (#6394) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6484
* refactor!: rename Knowledge Pages to Pages (old names deprecated until 2.x) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6477
* fix(coding-agents): strip host-injected tags from the prompt before recall/reflect by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6491
* fix(attachments): a daily sweep deletes the attachments of retains that failed (#6350) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6474
* fix(decision-model): don't split requests client-side for the hindsight provider by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6490
* docs(integrations): list hindsight-php, LiveKit and Hindsight Desktop; give community integrations their own section by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6493
* docs: keep old knowledge-pages links working through the 1.2.1 docs bump by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6495


**Full Changelog**: https://github.com/vectorize-io/hindsight/compare/v1.2.0...v1.2.1

---

> **Source** [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) · `v1.2.1` · 2026-11-10 · [upstream release](https://github.com/vectorize-io/hindsight/releases/tag/v1.2.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
