---
title: "xerj v1.0.0-rc.102"
project: "xerj"
repo: "xerj-org/xerj"
tag: "v1.0.0-rc.102"
version: "v1.0.0-rc.102"
published: "2026-11-07"
type: "pre"
lang: "en"
summary: "Linux-only release. This release ships Linux binaries (x86_64 and aarch64, glibc and musl, plus .deb for both glibc targets) and the XERJ Query-1 model bundle."
---

# xerj v1.0.0-rc.102

**Linux-only release.** This release ships Linux binaries (x86_64 and aarch64, glibc and musl, plus .deb for both glibc targets) and the XERJ Query-1 model bundle. macOS and Windows builds follow in an update of this release. Until then the installer and `releases/latest` keep serving v1.0.0-rc.101 on every platform; install rc.102 on Linux by downloading the assets below.

## [1.0.0-rc.102] - 2026-11-06


**rc.102: the XERJ Query-1 serve rule R8, a guard against counts the counting
path cannot express, and the rc.102 public window.** The model bundle that
ships with this release, `candidate_a_s47_r8`, holds the same weights as
rc.101's `candidate_a_s47` (every weight file has the same sha256) and changes
only how answers are served: rule R8 (details under Changed). On XERJ Score v2
(credit measured against Opus 5.5 = 100), on the four development families
`teacher_dev`, `bench_select`, `s1b_dev` and `d1_select` (400 items each,
1,600 in all), seed 47 moves from **90.29 to 94.69** (+4.40, 95% interval
+3.32 to +5.64, paired world-cluster bootstrap); seeds 11 and 29 move +3.95
and +4.17. These are development items, and R8 was chosen from a diagnosis of
those same items, so 94.69 is an in-sample number, not a held-out one. Wrong
answers rise on every seed: 9 to 10 of 1,600 on seed 47, 12 to 15 on seed 11.
The one held-out read is the fresh_v1 set, read once on 2026-11-04 and
re-scored under R8 without a second read: Net 0.3333 to 0.3481, right 112 to
118, wrong 11 to 12. Robustness to new wordings and fresh-set counting are not
separately measured. The engine serves the evaluated rule exactly: on the
merged rc.102 tree the engine's rows for all 1,600 development items give the
same served outcome as the evaluation's Python rows (1,600 of 1,600; 284 rows
differ only in the raw status, `UNKNOWN` versus `UNSUPPORTED`, and both are
declines). Without `--facts-model-dir` a node is the node rc.101 was.

### Upgrade notes

- **The rc.102 bundle needs an rc.102 binary.** rc.101 refuses its
  `bundle.json` (unknown rule `decline_v2_r8`, model state `unavailable`).
  The rc.102 binary still loads the rc.101 bundle and serves it under
  `decline_v2` with partner agreement, byte for byte as before.
- **Counting no longer waits for a partner under R8.** With the rc.102
  bundle a count is served when the question routes to counting, the hard
  checks pass and the engine answers; the partner model does not run, and
  `partner_agreement` is `null` instead of `true`. Read `final_status` and
  `final_answer` as before.
- **Data directories.** rc.102 keeps rc.101's storage defaults (ZPS4
  postings, row-dictionary stored text, on-disk format 4), so an rc.101 data
  directory opens unchanged. The one-way upgrade from rc.100 described under
  rc.101 still applies to a directory rc.100 last wrote. Not done in this
  window, and carried forward: rc.101 said its storage and ingest lanes would
  reach public `main` before rc.102. They have not; they are in the private
  build tree only, and a build from public `main` still writes format 3 and
  refuses a format-4 directory.
- **Provenance.** The rc.102 binaries are built from a private tree: public
  `main` at `34a2f244` (this window's merges) plus the XERJ-Query engine lanes
  plus the model crates `xerj-infer`, `xerj-serve` and `xerj-exec`, which are
  licensed **Proprietary** and ship as binary + model bundle only. Those
  crates are not Apache-2.0 and are not in the public repository; the
  Apache-2.0 LICENSE covers the engine source on `main`.
- **XERJ-Query stays opt-in.** The flag is `--facts-model-dir <DIR>` (or
  `XERJ_FACTS_MODEL_DIR`); without it every `/_facts` path answers 404
  `xerj_query_not_enabled`.

### Added

- `xerj autoindex <path> --facts <namespace>` writes table rows as XERJ Query-1
  facts: SQLite files, SQL dumps, CSV/TSV and XLSX (#2988). Each row is one subject
  whose `subject_id` is the key column (`id`, `<table>_id`, … or `--key`), each
  other column one typed fact quoting the row, so counting questions engage
  without hand-written facts. Re-runs write only changed rows (withdraw the old
  version, write the new one) and withdraw removed rows; unchanged rows are a
  no-op. Measured on rc.101: 1,000 rows → 6,000 facts in 0.36 s; "How many
  people have office Berlin?" → 366 via `path: counting` with partner
  agreement (gold 366). The mapping is a per-row-change function
  (`facts_rows::RowFactMapper::map_change`) so streamed sources can reuse it.
- Live Postgres sources inside the node (#2984): `xerj connect
  postgres://…` snapshots the chosen tables in a consistent snapshot, then
  applies every insert, update, delete and truncate through logical
  replication, survives restarts and resumes from its acknowledged LSN.
  HTTP `GET /_xerj/sources`, `GET|PUT|DELETE /_xerj/sources/{name}`; MCP tool
  `xerj_sources` (the MCP lists 21 tools without the hub key, 24 with it).
  Measured in that PR on an x86_64 laptop (32 threads) against Postgres 16 on
  the same host: a 1,000,000-row table snapshotted at 54,776 rows/s;
  commit-to-readable p50 16.9 ms, p95 26.6 ms over 6,000 samples at 991
  commits/s; after a `kill -9` mid-stream, 27,696 rows = 27,696 docs with 0
  missing, extra, stale or duplicate. See `docs/LIVE_SOURCES.md`.
- `xerj autoindex` indexes zip, tar, tar.gz/tgz and tar.zst archives, one
  level deep, refusing absolute and `..` member paths, links and special
  files, with byte, member and expansion-ratio caps (#2982). `xerj sources
  [--json]` and `docs/SOURCES.md` list every way to get data in.
- Cohere Rerank as a second `_search` reranking provider, `"rerank":
  {"provider": "cohere"}`, off until an operator sets a key; the endpoint is
  configurable so document text can stay on a private Cohere deployment
  (#2985). See `docs/RERANK.md`.
- Cohere examples (#2983): an embedder config for Cohere's OpenAI-compatible
  route, a stdlib Command RAG example whose citations resolve to file and
  page, and the XERJ tools as a Cohere Chat v2 tool schema. Replay-tested
  against a mock Cohere API; no live Cohere run yet.
- The rc.101 documentation set and `/get --with-model` (#2969): the
  `/_facts` API, model bundle and quickstart pages, and an installer flag that
  fetches the model bundle with the binary and checks its sha256.

### Changed

- **Serve rule R8 (opt-in per bundle; the rc.102 bundle opts in).**
  `bundle.json` may name `facts.rule = "decline_v2_r8"` and
  `counting.signal = "H"`. Under `decline_v2_r8` the facts path serves the
  raw program's answer where `decline_v2` would have declined it with policy
  code `D2C_COUNT_COMPARISON` or `D2D_TYPE_DATE`; every other code declines as
  before. Under signal `H` a count is served on its own hard checks, without
  the partner model. A bundle that names neither keeps `decline_v2` and
  signal `A`. The rule and its numbers are summarised at the top of this
  section.
- XERJ Query-1 launch claims corrected across the site, README and docs after
  a review of 1,370 statements on 13 surfaces (#3023): latency is answer time
  against Messages API time, never CLI start-up; the accuracy headline names
  its scope (each question's own records given, development-set questions);
  corpora are named next to numbers.
- The `/_facts` wait loop in `landing/llms.txt` and `docs/MODEL_QUICKSTART.md`
  stops on `unavailable` and `xerj_query_not_enabled` instead of polling
  forever (#3028). This is the docs half of issue #3021; the start-up half
  stays open.

### Fixed

- A count the counting op-set cannot express is no longer served (partial
  fix of issue [#3015](https://github.com/xerj-org/xerj/issues/3015)). rc.101
  served "How many people are in Berlin or Munich?" (Berlin x2, Munich x1) as
  a verified count of 1, because both models dropped the `or` and agreed on
  the program for Munich alone. When the serve rule would serve a count and
  the question joins alternatives with `or` (`either … or`, `nor`) or asks
  for a sum or a total of a quantity ("total height"), the answer is now a
  decline on the counting path: `final_status: "UNKNOWN"`, `reason_code:
  "COUNT_CONNECTIVE_UNSUPPORTED"`, a reason naming the connective, and the
  withheld program's sha as `withheld_program_sha256`. An `or` that only makes
  a threshold inclusive ("12 lines or more", "on or after 1990-01-01") is a
  count the op-set expresses and is still served. The guard matters more
  under R8, which drops the partner check: on the rc.102 release binary with
  the rc.102 bundle, both "How many people are in Berlin or Munich?" and "How
  many people have office Berlin or Munich?" reached the serve point with a
  one-city program (the withheld shas are those of "office Munich" and
  "office Berlin") and are declined; "How many people have office Berlin?"
  is still served as 2. Regression tests: the three Berlin-or-Munich probes
  (`xerj-serve` unit tests, and an HTTP test over the real models). What
  stays open on #3015: returning the counted member ids.
- `_search` with `profile: true` reports measured phase timings, in
  nanoseconds, instead of 0/1 ns placeholders (#3029, issue #3005). Only
  phases are measured: a non-zero breakdown timer is its phase total (an
  upper bound), `*_count` fields are not measured, and the new field
  `profile.xerj_timing` says so.
- Tied kNN neighbours are ranked by score, then `seq_no`, then `_id` on every
  executor (#3030, issue #3017), so a kNN or hybrid ranking with ties is the
  same in the indexing process and after a restart. On a synthetic 5,000-doc
  set with 2,500 distinct 384-d vectors and 160 queries, indexing process
  versus restart went from 234 of 320 identical rankings to 320 of 320.
- The proxy embedder accepts embedding responses without a per-item `index`
  (Cohere's OpenAI-compatible route omits it), so `semantic_text` writes
  through such a route no longer fail with `response parse` (#2983).
- The aarch64 Linux release assets are built with a 64 KiB jemalloc page
  again (`JEMALLOC_SYS_WITH_LG_PAGE=16`, issue #1663). The rc.101
  aarch64-unknown-linux-gnu, aarch64-unknown-linux-musl and arm64 `.deb`
  assets were built natively without it (4 KiB page), so they abort at start
  on 16 KiB- and 64 KiB-page aarch64 kernels.

### Known limitations of counting on rc.102

Unchanged from rc.101 except where stated. Counting engages only when every
fact of the counted subjects carries a stable `subject_id`. The op-set is set
counts ("how many X have Y", optionally "distinct <field>", with inclusive
thresholds); a disjunction, a sum or a total of a quantity is now declined
with a reason (above) instead of served narrower. A served count still tallies
the members of the matched set and does not check the noun of the question:
"How many devices do the Berlin offices have in total?" over `office = Berlin`
facts with no `devices` relation is served as a count of people. Counting
answers carry no evidence ids and name the program only by its sha.

### Provenance and verification of these assets

- **Binaries come from the private build tree, not from public `main`.** Tree
  `xerj-org/xerj-ai-private` at `46dae017` (tag `v1.0.0-rc.102` there): public
  `main` `34a2f244` + the XERJ-Query engine lanes + the model crates
  `xerj-infer`, `xerj-serve`, `xerj-exec` (**Proprietary**: shipped as binary
  + model bundle only, source not public) + serve rule R8 + the #3015 guard.
  This public tag marks the commit whose notes describe the release.
- The aarch64-unknown-linux-gnu, aarch64-unknown-linux-musl and arm64 `.deb`
  assets were built natively on an aarch64 build host with
  `JEMALLOC_SYS_WITH_LG_PAGE=16`, `cargo 1.97.1 --release --locked`. The
  x86_64-unknown-linux-gnu, x86_64-unknown-linux-musl and amd64 `.deb` assets
  were built natively on an x86_64 build host from the same tree (`46dae017`)
  with `cargo 1.97.1 --release --locked` and the release workflow's musl
  linker settings. The private release workflow could not run for this
  release, so macOS and Windows assets are not attached yet.
- `xerj-model-bundle-v1-v1.0.0-rc.102.tar.gz` is the directory
  `candidate_a_s47_r8_2026-11-06` (`bundle.json`, `facts/`,
  `counting/served/`, `counting/partner/`), FP16 weights identical to the
  rc.101 bundle file for file. Use it with `xerj --facts-model-dir <DIR>`.
- Gate on the aarch64-gnu release binary (`xerj v1.0.0-rc.102`, tree
  `46dae017`, private ports, throwaway data directories): ES-YAML
  conformance **1452 passed, 0 failed, 10 skipped**. Workspace tests with
  CI's command (`cargo test --profile ci-test --workspace -- --test-threads=2`,
  tree `593c353f`): 7251 passed, 2 failed, 43 ignored; the two were
  `object_storage_e2e::an_s3_index_round_trips_to_a_fresh_node` (passes on
  its own; the known load flake) and an MCP tool-count assertion the merge
  missed (fixed in `46dae017`, xerj-mcp lib 182 passed). Facts smoke with
  the rc.102 bundle: model loaded, "What is Bo Chen height?" → 170 cm,
  "How many people have office Berlin?" → 2 on the counting path, the three
  Berlin-or-Munich probes declined with `COUNT_CONNECTIVE_UNSUPPORTED`;
  with the rc.101 bundle the same, under partner agreement; without the
  flag every `/_facts` path answers 404 `xerj_query_not_enabled`.
- Every asset has a `.sha256` beside it; the installer and
  `scripts/verify-release.sh` check them fail-closed.

---

> **Source** [xerj-org/xerj](https://github.com/xerj-org/xerj) · `v1.0.0-rc.102` · 2026-11-07 · [upstream release](https://github.com/xerj-org/xerj/releases/tag/v1.0.0-rc.102)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
