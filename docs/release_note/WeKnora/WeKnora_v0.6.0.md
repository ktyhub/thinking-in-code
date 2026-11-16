---
title: "WeKnora v0.6.0"
project: "WeKnora"
repo: "Tencent/WeKnora"
tag: "v0.6.0"
version: "v0.6.0"
published: "2026-05-21"
type: "minor"
lang: "en"
summary: "fix(compose): stop publishing docreader gRPC port to the host · feat(frontend): show UI build version on system info page · fix(org): searchable join bypasses invite code expiry"
---

# WeKnora v0.6.0

## What's Changed
* fix(compose): stop publishing docreader gRPC port to the host by @lyingbug in https://github.com/Tencent/WeKnora/pull/1308
* feat(frontend): show UI build version on system info page by @lyingbug in https://github.com/Tencent/WeKnora/pull/1313
* fix(org): searchable join bypasses invite code expiry by @tsukiga-kirei in https://github.com/Tencent/WeKnora/pull/1324
* fix(frontend): make rerank model optional in agent editor save by @guangyang1206 in https://github.com/Tencent/WeKnora/pull/1317
* feat(cli): v0.3 — extended management surface and session subtree by @voidkey in https://github.com/Tencent/WeKnora/pull/1315
* refactor(retriever): introduce factory for KB-scoped retrieve engine resolution by @ochanism in https://github.com/Tencent/WeKnora/pull/1310
* fix(session): scope session access by user by @wolfkill in https://github.com/Tencent/WeKnora/pull/1309
* feat(system-info): surface DB migration errors with troubleshooting links by @lyingbug in https://github.com/Tencent/WeKnora/pull/1335
* fix(session): map ErrSessionNotFound to 404 across all handlers (#1309 follow-up) by @lyingbug in https://github.com/Tencent/WeKnora/pull/1336
* fix(migration): ensure pg_trgm is created before trigram index in 000041 by @lyingbug in https://github.com/Tencent/WeKnora/pull/1334
* fix(kb): map ErrKnowledgeBaseNotFound to 404 across handler helpers by @lyingbug in https://github.com/Tencent/WeKnora/pull/1339
* feat(cli): v0.4 - output contract hardening and mainstream alignment by @voidkey in https://github.com/Tencent/WeKnora/pull/1342
* feat: modify the skills registration directory by @1141520944 in https://github.com/Tencent/WeKnora/pull/1344
* fix: extend document processing timeout for large files by @HelloWeit in https://github.com/Tencent/WeKnora/pull/1346
* fix(model): hide Ollama tip for remote models by @wolfkill in https://github.com/Tencent/WeKnora/pull/1330
* fix(knowledge): prevent infinite scroll race condition causing missing documents by @caiyuze-cpu in https://github.com/Tencent/WeKnora/pull/1356
* feat(cli): v0.5 — agent CRUD + chunk subtree + audit-driven cleanup by @voidkey in https://github.com/Tencent/WeKnora/pull/1354
* feat(auth): 连接docreader支持auth by @CodeMarker0 in https://github.com/Tencent/WeKnora/pull/1359
* fix(docreader/auth): harden gRPC TLS/Token rollout from #1359 by @lyingbug in https://github.com/Tencent/WeKnora/pull/1361
* fix: redact sensitive fields and prevent credential loss on edit by @ochanism in https://github.com/Tencent/WeKnora/pull/990
* fix(docreader): bump grpcio floor to 1.78.0 to match generated proto by @toy0116 in https://github.com/Tencent/WeKnora/pull/1363
* refactor(credentials): /credentials subresource, at-rest encryption, and test-connection UX by @lyingbug in https://github.com/Tencent/WeKnora/pull/1364
* feat(embedding): add Zhipu AI embedder implementation by @Wellbek in https://github.com/Tencent/WeKnora/pull/1365
* fix(embedding): repair broken comment in Zhipu embedder by @lyingbug in https://github.com/Tencent/WeKnora/pull/1366
* test(repo): add wiki_config + indexing_strategy to sqlite test DDL by @toy0116 in https://github.com/Tencent/WeKnora/pull/1362
* fix: guard against empty choices and message=None in LLM response by @qizwiz in https://github.com/Tencent/WeKnora/pull/1369
* feat(cli): v0.6 — output contract, doc wait, status, multi-id delete by @voidkey in https://github.com/Tencent/WeKnora/pull/1368
* feat(knowledge-base): validate vector store bindings on create, copy, and delete by @ochanism in https://github.com/Tencent/WeKnora/pull/1372
* fix(agent): exclude processing docs from prompt by @wolfkill in https://github.com/Tencent/WeKnora/pull/1370
* feat(rbac): multi-tenant RBAC — schema, enforcement, member management, ownership, audit log (#1303) by @lyingbug in https://github.com/Tencent/WeKnora/pull/1367
* fix(session): update AgentQA to conditionally disable title based on request by @lyingbug in https://github.com/Tencent/WeKnora/pull/1375
* feat(frontend): redesign knowledge document tag selector by @lyingbug in https://github.com/Tencent/WeKnora/pull/1376
* feat(obs): 支持华为云obs存储 by @CodeMarker0 in https://github.com/Tencent/WeKnora/pull/1377
* feat(url): 支持docreader不上传替换白名单url的图片 by @CodeMarker0 in https://github.com/Tencent/WeKnora/pull/1378
* feat(tenant): richer workspace-switch toast that survives the post-switch reload by @lyingbug in https://github.com/Tencent/WeKnora/pull/1379
* feat(tenant): remember user's last-active workspace across logins by @lyingbug in https://github.com/Tencent/WeKnora/pull/1381
* fix(auth): unify DISABLE_REGISTRATION and auth.registration_mode by @lyingbug in https://github.com/Tencent/WeKnora/pull/1384
* chore(env): expose tenant RBAC + per-user tenant cap as env knobs by @lyingbug in https://github.com/Tencent/WeKnora/pull/1385
* fix(docparser): unescape MinerU markdown image syntax by @nixidexiangjiao in https://github.com/Tencent/WeKnora/pull/1382
* fix(moonshot): pin temperature=1 for models that reject other values by @nixidexiangjiao in https://github.com/Tencent/WeKnora/pull/1383
* style(menu): tighten session list density in sidebar by @lyingbug in https://github.com/Tencent/WeKnora/pull/1387
* fix(menu): avoid refreshing session list when opening an existing chat by @lyingbug in https://github.com/Tencent/WeKnora/pull/1388
* fix(menu): stop truncating session titles when extra space is available by @lyingbug in https://github.com/Tencent/WeKnora/pull/1389
* feat(session): persist last request state for UI restoration by @lyingbug in https://github.com/Tencent/WeKnora/pull/1390
* revert: drop colored role chip styling on tenant members page by @lyingbug in https://github.com/Tencent/WeKnora/pull/1391
* fix(i18n): escape '@' in invite email placeholder by @lyingbug in https://github.com/Tencent/WeKnora/pull/1392
* fix(chunker): keep top-level heading chunks separate by @wolfkill in https://github.com/Tencent/WeKnora/pull/1396
* doris: add configurable compatibility modes and guard mode switches by @SilentMil in https://github.com/Tencent/WeKnora/pull/1395
* feat: add vLLM server URL configuration for MinerU by @xdgu0275 in https://github.com/Tencent/WeKnora/pull/1405
* chore: update Go version to 1.26.0 in go.mod by @lyingbug in https://github.com/Tencent/WeKnora/pull/1407
* fix(frontend): mirror cross-tenant superuser Admin role in UI gates by @lyingbug in https://github.com/Tencent/WeKnora/pull/1406
* refactor(agent): simplify grep_chunks tool to a single regex query by @lyingbug in https://github.com/Tencent/WeKnora/pull/1410
* feat(frontend): make Vite dev proxy target configurable by @lyingbug in https://github.com/Tencent/WeKnora/pull/1412
* fix(chat): stabilize history pagination and keep message order by @lyingbug in https://github.com/Tencent/WeKnora/pull/1409
* feat(search): fan-out KB retrieval across bound vector stores by @ochanism in https://github.com/Tencent/WeKnora/pull/1386
* fix(knowledge): complete indexed documents immediately by @wolfkill in https://github.com/Tencent/WeKnora/pull/1408
* fix(client): align UpdateAgent request types with internal API by @HQF2017 in https://github.com/Tencent/WeKnora/pull/1398
* fix(session): scope wiki fixer to shared KB tenant by @wolfkill in https://github.com/Tencent/WeKnora/pull/1413
* fix(chat): improve history rendering stability by @lyingbug in https://github.com/Tencent/WeKnora/pull/1419
* fix(docparser): preserve MinerU markdown and persist relative images by @M1dnightSUN in https://github.com/Tencent/WeKnora/pull/1404
* fix(docparser): address review feedback on #1404 (MinerU markdown & image persistence) by @lyingbug in https://github.com/Tencent/WeKnora/pull/1420
* docs: add Chinese RBAC guide and link with shared space docs by @lyingbug in https://github.com/Tencent/WeKnora/pull/1421
* fix(frontend): guard knowledge list against stale updates by @iceloon in https://github.com/Tencent/WeKnora/pull/1424
* fix(chat): adjust user message container to support pre-wrapped text by @ThinhTT84 in https://github.com/Tencent/WeKnora/pull/1425
* fix(repository): correct query syntax to get correctly built-in models #1373 by @ThinhTT84 in https://github.com/Tencent/WeKnora/pull/1428
* chore(release): v0.6.0 by @lyingbug in https://github.com/Tencent/WeKnora/pull/1422
* docs(readme): flatten Latest Updates into single-line per-version list by @lyingbug in https://github.com/Tencent/WeKnora/pull/1430

## New Contributors
* @HelloWeit made their first contribution in https://github.com/Tencent/WeKnora/pull/1346
* @caiyuze-cpu made their first contribution in https://github.com/Tencent/WeKnora/pull/1356
* @Wellbek made their first contribution in https://github.com/Tencent/WeKnora/pull/1365
* @qizwiz made their first contribution in https://github.com/Tencent/WeKnora/pull/1369
* @nixidexiangjiao made their first contribution in https://github.com/Tencent/WeKnora/pull/1382
* @SilentMil made their first contribution in https://github.com/Tencent/WeKnora/pull/1395
* @xdgu0275 made their first contribution in https://github.com/Tencent/WeKnora/pull/1405
* @M1dnightSUN made their first contribution in https://github.com/Tencent/WeKnora/pull/1404
* @iceloon made their first contribution in https://github.com/Tencent/WeKnora/pull/1424
* @ThinhTT84 made their first contribution in https://github.com/Tencent/WeKnora/pull/1425

**Full Changelog**: https://github.com/Tencent/WeKnora/compare/v0.5.2...v0.6.0

---

> **Source** [Tencent/WeKnora](https://github.com/Tencent/WeKnora) · `v0.6.0` · 2026-05-21 · [upstream release](https://github.com/Tencent/WeKnora/releases/tag/v0.6.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
