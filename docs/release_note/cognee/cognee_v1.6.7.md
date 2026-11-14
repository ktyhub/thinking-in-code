---
title: "cognee v1.6.7"
project: "cognee"
repo: "topoteretes/cognee"
tag: "v1.6.7"
version: "v1.6.7"
published: "2026-11-06"
type: "patch"
lang: "en"
summary: "Release Date: 2026-11-06 Changes: v1.6.6rc1 → v1.6.7"
---

# cognee v1.6.7

# v1.6.7

**Release Date:** 2026-11-06
**Changes:** v1.6.6rc1 → v1.6.7

**Pull Requests:** #6266, #6337, #6338, #6339, #6340, #6342, #6392, #6404, #6493, #6512, #6540, #6546, #6550, #6564

---

## Summary

This release tightens ingestion safety and improves how search and retrieval behave and perform. You’ll see stricter safeguards when giving the system file or database connection info, more correct scoped searches (queries that target a specific document type or namespace), and faster, more efficient scoring for vector searches.

## Highlights

- Safer ingestion: raw database connection strings and unsafe server/file paths are refused by default, reducing risk of accidental credential or server exposure.
- Search and recall correctness: typed/scoped queries (queries targeted at a specific document type or scope) now return correct, LLM-safe results and "feeling lucky" picks ignore disabled data types.
- Retrieval performance: query scoring is much faster for PGVector, Turso and LanceDB backends by batching and parallelizing scoring work.
- Various robustness fixes: fixes for LanceDB compaction/migration, graph upserts, session/forget operations, and export headers for SDK users.

## Breaking Changes

- Stricter ingestion defaults for databases and remote paths: raw database connection strings and server file paths over HTTP are refused by default. Impact: workflows or connectors that previously ingested such connection strings will start failing ingestion. Action: review your ingestion configuration and explicit opt-in controls in the docs to allow these sources if you intentionally use them.
- ACCEPT_LOCAL_FILE_PATH now also gates s3:// inputs: if you relied on previously permissive behavior for s3:// URIs, you may need to set ACCEPT_LOCAL_FILE_PATH or follow the documented opt-in to re-enable those inputs. Check the ingestion API docs for details.

## New Features

- Column graph anchors (DLT): Adds a new column to the ledger/graph storage that stores "graph anchors" (small pointers that help link table rows back into the graph). What it does: records anchor information on column writes so graph queries and downstream processes can reference those rows more reliably. Why it matters: improves correctness and traceability for workflows that rely on graph-backed columns and ledger reconciliation.

## Improvements

- Stricter and clearer ingestion handling: the ingestion messaging was simplified, and the system now has a single refusal rule for unsafe network or database connection inputs so it’s easier to understand why a file or connection was rejected. Why it matters: fewer accidental ingestions of sensitive connection strings or remote paths.
- Separated routing constraints for scopes and LLMs: the code that decides which documents to route to a language model (LLM) and which to route by scope (document type or namespace) was refactored into distinct rules. What it does: makes scoped searches and LLM routing behavior clearer and more predictable. Why it matters: improves correctness when you target only specific document types or want to keep some searches LLM-free.
- Search and recall scope handling: typed scopes (queries that say "only search documents of type X") are now honored consistently in chunk searches and quoted/scoped queries, and those same quoted phrases avoid unnecessary LLM routing. Why it matters: scoped queries return more accurate, expected results and avoid extra LLM calls.
- Correct error codes for file ingestion: requests that are forbidden now return 403 with a helpful message instead of 415. Why it matters: clearer error handling helps operators diagnose permission and gating problems faster.
- Keep OMP headers on SDK exports: when exporting SDK artifacts (used by Cognee X / SDK flows) OpenMP-style headers are preserved. Why it matters: avoids losing configuration/metadata during SDK export workflows.

## Performance

- Batch scoring across backends: PGVector and Turso now score a whole batch of queries in a single database statement, reducing round trips and latency for multi-query requests (practical impact: lower latency for multi-query retrievals).
- LanceDB scoring optimizations: a batch of queries can be scored with a single id scan on LanceDB, and scoring of multiple queries is parallelized by id. Practical impact: faster batch retrievals when using LanceDB as the vector store.
- Skip missing vector collections in one lookup for PGVector: reduces wasted work when a collection is not present. Practical impact: faster retrieval paths and fewer lookups in some failure cases.
- Batch deletes for forget/session cache: session-related deletes are batched to reduce overhead. Practical impact: faster and more efficient large-scale forget operations.

## Security

- Default refusal of database connection strings: raw database connection strings are refused by default to prevent accidental ingestion of credentials. If you intentionally ingest database sources, you must explicitly opt in (see docs). Why it matters: reduces the risk of credential leakage via ingestion.
- Refuse connection strings containing Cognee credentials: the server will now refuse ingestion attempts that include the product’s own credentials. Why it matters: prevents accidental self-referential connections and credential reuse.
- Refuse server file paths over HTTP by default: inputs that look like server file paths over plain HTTP are refused unless explicitly allowed. Why it matters: protects against accidental remote-file ingestion from untrusted servers.
- ACCEPT_LOCAL_FILE_PATH also gates s3:// inputs: the existing environment toggle that controls whether local filesystem paths are accepted now also controls s3:// style inputs in ingestion APIs. Why it matters: makes file-path gating consistent across local and S3-style sources.
- Correct permission errors: the API now returns 403 (Forbidden) for blocked file ingestion attempts with helpful info. Why it matters: clearer, more appropriate error signaling for permission problems.

## Bug Fixes

- Exclude disabled types from "feeling lucky": the one-shot "feeling lucky" chunk selection now ignores document types that are disabled, preventing irrelevant hits.
- Refuse unscorable chunk scopes: chunk searches with scopes that cannot be scored are now refused early, avoiding confusing or misleading results.
- Keep typed scope when no vector matches: when your typed scope returns no vector similarities, the typed scope is still preserved so downstream logic knows what was requested.
- Scope chunk search by document name: chunk-level searches that specify a document name now limit the search appropriately to that document.
- LanceDB fixes: several fixes to keep window rows during compaction and to repair rows written during migrations, improving data integrity after schema changes or maintenance operations.
- Graph and upsert fixes: upsert_edges will accept string node IDs and other graph fixes improve robustness of graph writes.
- Session/forget fixes: session-owner scoping and session-delete matching were hardened so forgetting workflows survive deleted or missing session owners.
- Index copy and stored rows: index rows are now copied as stored, avoiding mismatches between index metadata and stored data.

## Technical Changes

- Refactor: split scope routing and LLM routing constraints into separate components to simplify routing logic and make future changes easier to test.
- Refactor and message cleanup for ingestion refusal: unified the refusal message format so there’s a single place deciding why an ingestion is rejected.
- Retrieval scoring rework: redesigned scoring paths so backends can score query batches in fewer statements, and added mocks/tests for collection-aware engines. Practical effect: clearer, better-tested retrieval code with measurable perf gains.
- CI and tests: added and updated many tests (unit, integration, e2e) and CI workflows to increase coverage and reliability; also added more connector test fixtures and adapter mocks.

## Dependency Updates

**Updated:**
- fastembed: <=0.8.0 → >=0.9.1,<0.10
- filelock: >=3.12.0,<4.0.0 → >=3.12.0
- onnxruntime: >=1.24.1 → >=1.17
- pydantic: >=2.10.5 → >=2.13

**Removed:**
- diskcache >=5.6.3
- instructor >=1.9.1,<1.15.3

## Compatibility

| Component | Supported / Required |
| --- | --- |
| Python | `>=3.10,<3.15` |
| pydantic | `>=2.13` |
| litellm | `>=1.102.2,<2.0.0` |
| fastapi | `>=0.116.2,<1.0.0` |
| sqlalchemy | `>=2.0.39,<3.0.0` |
| lancedb | `>=0.39.0,<0.40.0` |
| ladybug | `==0.19.0` |

---

*— The Cognee Team · 2026-11-06*

---

> **Source** [topoteretes/cognee](https://github.com/topoteretes/cognee) · `v1.6.7` · 2026-11-06 · [upstream release](https://github.com/topoteretes/cognee/releases/tag/v1.6.7)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
