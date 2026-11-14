---
title: "xerj v1.0.0-rc.101"
project: "xerj"
repo: "xerj-org/xerj"
tag: "v1.0.0-rc.101"
version: "v1.0.0-rc.101"
published: "2026-11-05"
type: "pre"
lang: "en"
summary: "rc.101: XERJ-Query — the engine answers facts and counting questions from a model that runs on CPU, off by default. This release ships XERJ-Query compiled into the binary and serves it over /facts on a node started with…"
---

# xerj v1.0.0-rc.101

## [1.0.0-rc.101] - 2026-11-05

**rc.101: XERJ-Query — the engine answers facts and counting questions from a
model that runs on CPU, off by default.** This release ships XERJ-Query compiled
into the binary and serves it over `/_facts` on a node started with
`--facts-model-dir <DIR>`: write facts to a namespace, ask a natural-language
question, and read a *verified* answer with its cited evidence and the exact
program that produced it. Counting questions ("how many … over …?") are answered
by an exact executor, served only when two independently-seeded models agree on
the program. The model ships as a separate release asset, a swappable
`xerj-model-bundle-v1` directory (FP16 weights, served on CPU with an int8-guard
encoding of the same weights — no GPU, nothing leaves the machine). On the honest
XERJ Score v2 (credit measured against Opus 5.5 = 100 on the facts + counting
evaluation) the shipped bundle, `candidate_a_s47`, scores **90.29** on the
standard eval — not the fresh/sealed set; robustness to new wordings and
fresh-set counting are not separately measured for this bundle. The engine serves
the evaluated bundle exactly: a byte-for-byte reproduction of its answers across
all 2,387 evaluation items. Without the flag a node is the node rc.100 was: no
`/_facts` route, no model load, the same MCP tool list.

### Upgrade notes — read before starting rc.101 on an existing data directory

- **ONE-WAY DATA-DIRECTORY UPGRADE.** rc.101 writes new segments as ZPS4 postings
  and stores text columns as row-dictionary blocks **by default**. The first
  flush moves the data directory to on-disk format **4**; rc.100 and every
  earlier build read only format 3 and refuse such a directory at open ("written
  by a newer xerj"). A data directory that rc.101 has written to **cannot be
  opened by rc.100 again** — take a backup or snapshot before the first start if
  you may need to roll back. To keep writing format 3 postings, set
  `XERJ_FTS_POST_CODEC=packed` before the first rc.101 start (and
  `XERJ_STORED_ROW_BLOCKS=0` to keep the old stored-text layout); the opt-in
  positions-off text fields (`index_options: docs|freqs`) move the directory to
  format 5. These defaults will be on public `main` before rc.102, so a later
  public release opens rc.101 directories.
- **Provenance.** The rc.101 binaries are built from a private tree: public
  `main` at `3f6aefa8` plus the XERJ-Query engine lanes (storage, ingest, facts
  wiring) plus the model crates `xerj-infer`, `xerj-serve` and `xerj-exec`,
  which are licensed **Proprietary** and ship as binary + model bundle only.
  Those three crates are not Apache-2.0 and are not in the public repository; the
  Apache-2.0 LICENSE covers the engine source on `main`. The engine lanes
  (non-proprietary) land on public `main` by pull request before rc.102.
- **XERJ-Query is opt-in.** Nothing changes for a node started as before. The
  flag is `--facts-model-dir <DIR>`; see the first entry under Added.


### Added

- XERJ-Query is opt-in. It ships compiled in and stays off until the server
  is started with `--facts-model-dir <DIR>` (or `XERJ_FACTS_MODEL_DIR`; the
  flag wins). Off, a node behaves as rc.100 did: every `/_facts` path answers
  404 `xerj_query_not_enabled` naming the flag, no model loads and no facts
  thread starts, the MCP tool list has no `xerj_facts_ask` (the published
  schema is that default list), and memory namespaces and brains ending in
  `-facts` are ordinary names again. On, everything below applies; `xerj mcp`
  lists `xerj_facts_ask` when the node it proxies answers `GET /_facts`
  (`XERJ_MCP_FACTS=on|off` decides instead).
- Facts in the default build: `/_facts`, the `xerj_facts_ask` MCP tool, and
  `_ask` with `decline_v2` as the default rule (`verify: served` remains).
  Read `final_status` and `final_answer`: under `decline_v2` the plain `status`
  and `answer` are the unchecked program's. Every `_ask` response now carries a
  `path` field, `facts` or `counting`, and a counting answer reports its
  `program_sha256` and whether the partner model agreed. The `/_facts` status
  no longer carries a `"spike": true` flag and reports the node's counting
  state. Without a model directory XERJ-Query is off (see the entry above).
- Exact counting answers in the default build. When the node is started with a
  model bundle that carries a counting role (see "Model bundles" below), a
  counting question is answered by an exact executor — the RC4 counting path
  (stack v6) in `xerj-infer` and `xerj_serve::counting` — and served only when
  the question routed to counting, its hard checks passed, and a partner model
  produced the same program; otherwise the fact path answers under `decline_v2`.
  The `xerj ask` CLI gains the matching count operation. `COUNTING_OFF` now
  applies only when the bundle has no counting role, or its counting model is
  absent or fails its load checks; in that case facts keeps serving and only
  counting questions decline.
  **Known limitations of counting on rc.101 (measured on user-written facts):**
  counting engages only when every fact of the counted subjects carries a
  stable `subject_id` (one per subject, on every fact about it); without it the
  count is `INCOMPLETE` and the answer is `UNKNOWN` with `path: "facts"`. The
  op-set is set counts ("how many X have Y", optionally "distinct <field>");
  sums, totals and numeric thresholds decline. A served count tallies the
  members of the matched set and does not check the noun of the question:
  "How many devices do the Berlin offices have in total?" over `office = Berlin`
  facts with no `devices` relation is served as a verified count of people
  (`path: "counting"`, `partner_agreement: true`, the same `program_sha256` as
  "how many people have office Berlin"). Counting answers carry no evidence ids
  by design, and the response names the program only by `program_sha256`. Ask
  for the member type you mean and read a count as a member count.
- Model bundles. `--facts-model-dir` (or `XERJ_FACTS_MODEL_DIR`) may point at a bundle directory
  (`bundle.json`, schema `xerj-model-bundle-v1`) that holds a `facts` role and
  optional `counting/served` and `counting/partner` roles, each a directory
  with its own `manifest.json` and weights. A directory with no `bundle.json`
  stays a plain facts export, as before. Replacing a single role is a directory
  rename while the node is stopped, with no change to `bundle.json` or code;
  load checks refuse a role whose weights or tokenizer hash does not match its
  manifest, a served/partner pair that disagree, or an unknown rule name.
  Serving precision is per role in `bundle.json` (`XERJ_FACTS_PRECISION` still
  overrides facts); weights may be stored F32 or F16 and both widen to f32 at
  load, so no serving path depends on how a model was trained. See
  [`docs/MODEL_BUNDLE.md`](docs/MODEL_BUNDLE.md).
- `xerj-pagedir`, page-pointer directories with self-checking reads. With
  `XERJ_AUTOINDEX_SOURCE_REF=1` and `XERJ_SOURCE_REF_DIR` set on client and
  server, long JSONL fields stay in the original file; an edited file gives an
  error, never wrong text. Off by default.
- Opt-in hub answer evidence receipts (Refs #1789, #1786): Rust callers can
  bind exact UTF-8 excerpts to pinned source bytes and export SHA-256/JCS
  trace reports. MCP ask/def accepts trace identities through `evidence`;
  unavailable source bytes or calibration explicitly abstain and escalate.
  Default answer and hit wire fields are unchanged.

- A pure Rust cyber scope guard (Refs #2767, #2769) with exact hostname/IP
  allowlists, normalized CIDRs, inclusive authorization windows, explicit
  repository-text taint refusal, and scope echoes. This is a shared planning
  primitive, not a network scanner or a   wired cyber recipe.
- Opt-in advisory Claude Code search hints with `xerj init --hooks` on macOS/Linux
  (Refs #2642): Grep/Glob and repeated Read can suggest a cited search scoped to
  the indexed folder and configured loopback node, with a per-session quota.
  `--hooks --remove` preserves other hooks and session memory.

- The same advisory search hints for Gemini CLI with `xerj init --hooks --host
  gemini` on macOS/Linux (Refs #2642). It writes an `AfterTool` group to
  `.gemini/settings.json`, because `BeforeTool` has no field that reaches the
  model, and a millisecond `timeout` as that host expects. Matched tools are
  `grep_search`, `search_file_content`, `glob` and `read_file`, anchored so MCP
  tool names are not caught. Setup is refused when the host has hooks disabled.
  Quotas, counters and backups are per host, and either host can be configured
  or removed without touching the other.

- Opt-in Claude Code session handoff with `xerj init --memory` on macOS/Linux
  (Refs #2645). SessionEnd queues a background redacting import and lexical
  autoindex; SessionStart returns bounded, cited historical excerpts from a
  project memory namespace, with an offline cache. `--memory --remove` removes
  only the owned hooks and retains data. Ordinary init and manual session
  import are unchanged; Codex lifecycle hooks are not included in this first version.
  Each queued delivery is isolated: terminal input refusals are retained in a
  private rejected queue with recovery reasons, while transient failures retry.
  Memory excerpts and displayed briefs filter Unicode controls and format marks.

- A second Claude plugin in the xerj marketplace, `xerj-knowledge`, for
  document search rather than code: a skill and `/xerj-knowledge:index` and
  `/xerj-knowledge:find` commands that search local folders, notes, PDFs,
  Office files and mail exports and cite the file and page. Same `xerj mcp`
  server; the existing `xerj` plugin is unchanged. Untested in Claude Cowork
  so far. (#2646)
- A Nix flake: `nix run github:xerj-org/xerj` builds and runs `xerj` from
  source, `nix build` produces it, and `nix develop` opens a shell with the
  Rust toolchain. The package builds the engine and embeds the Console assets
  with no network access during the build. (#2479)
- `xerj autoindex map --html <FILE>` and `--md <FILE>` export an offline
  report with datasets, format counts, top symbols, graph file hubs,
  catalog exclusions and suggested searches. `--redact-paths` hides file
  paths and skip reasons. Existing files are never overwritten; ordinary
  map and JSON output retain their behavior (#2643).

- `xerj autoindex --exclude <glob>` leaves matching paths out of the index
  without editing an ignore file or deleting anything. Repeatable, same glob
  syntax as `--stub` — a pattern without `/` matches a file name at any depth,
  one with `/` is anchored at the root. The run reports how many paths it left
  out (#2483).

- Offline `xerj sessions import --format claude-mem` exports a claude-mem
  store's prompts, observations and session summaries through the existing
  text redactor (#2874). It reads `claude-mem.db` read-only in one snapshot,
  including rows still in a running worker's WAL, joins each row to its Claude
  Code session UUID, and marks the model-written observations and summaries
  `is_summary: true`.

- Offline `xerj sessions import --format mempalace` exports a MemPalace
  palace's drawers verbatim, with their wing, room and hall, through the
  existing text redactor (#2874). It reads the `sqlite_exact` backend
  read-only in one snapshot without creating side files on a clean store,
  skips registry and sentinel rows and closets, decodes MemPalace's escaped
  text, and refuses a palace on the default Chroma backend.

- Offline `xerj sessions import --format codex` exports a documented subset
  of one archived Codex rollout through the existing text redactor. It skips
  tools and reasoning, retains physical source locations and archive event
  identities, and refuses unsupported formats without publishing output.

- Corpus Hub manifest `paths` entries may name regular files as well as
  directories (#2486). A file selection checks out that file without its
  siblings; symlinks and submodules are refused.

- MCP `xerj_status` reports node reachability, cluster health and visible
  indices before a search. It distinguishes a missing autoindex catalog from
  other indexed data and preserves failed or malformed probes as errors
  rather than reporting a successful empty node (#2515).

- Empty autoindex maps now explain that managed corpus slugs and autoindex
  dataset/index names belong to separate discovery surfaces. CLI diagnostics,
  MCP empty responses and the `xerj_map` description point to corpus discovery
  without claiming a corpus exists. Missing catalogs remain errors; auth
  refusals and successful dataset maps retain their behavior (#2412).

- Public Agent Skills Discovery v0.2.0 index and a documentation-routing skill
  at `/.well-known/agent-skills/`. The index is generated from the published
  skill's metadata and exact-byte SHA-256, with a CI drift check.

- `xerj autoindex` reads an agent skill's `SKILL.md` frontmatter: every
  passage of the file is titled with the skill's `name` and carries its
  `description` as a field of its own, whether the file is read as prose or
  as line windows. Before, a prose `SKILL.md` was titled by the first line
  after its frontmatter and a line-window one had no title at all. Only files named exactly
  `SKILL.md` change; the body, record ids and every other Markdown file index
  as before. A frontmatter block strict YAML refuses, such as one with an
  `argument-hint: [path] [--dry-run]` line, still gives its one-line `name`
  and `description`. Unchanged files are not re-extracted, so an
  existing index gains the fields as each skill changes, or all at once with
  `xerj autoindex --fresh`. Part of #2644.

- `xerj init` teaches agents to find an installed skill by task: index the
  skills folder once with `xerj autoindex <skills folder> --prefix skills`, then
  run `xerj search --prefix skills "<what you want to do>"`. The generated
  `SKILL.md` and the `AGENTS.md` section it writes both say so, and say the
  match is on words, not meaning. The init files version moves to 7, so a
  re-run upgrades a `SKILL.md` (and `.cursor/rules/xerj.mdc`) that an earlier
  init stamped and nobody edited. An existing `AGENTS.md` that already mentions
  `xerj search` or `xerj def`, which includes every one an earlier init wrote,
  is kept as it is, so only an `AGENTS.md` without XERJ text gets the new
  lines. A new recipe, `docs/recipes/find-a-skill.md`, walks the loop with
  measured output.
  Part of #2644.

- `xerj autoindex --skills` finds the folders agents keep installed skills
  in (`.claude/skills`, `.codex/skills` and `.agents/skills` in the home
  directory, and `.claude/skills` in the current folder), skips the ones that
  do not exist, and indexes each under its own prefix below one stem
  (`skills-claude`, `skills-codex`, `skills-agents`, `skills-project`; pick
  the stem with `--prefix`). `xerj search --prefix skills "<what you want to
  do>"` searches them all, and when the hits come from several folders each
  prints its full path. `--watch` watches every folder. One prefix still owns
  one folder. `xerj init` writes teaching files version 8, which name
  `--skills`, and the recipe `docs/recipes/find-a-skill.md` uses it. Part of
  #2644.

- `bash scripts/bench/skills-intent.sh` is the eval #2644 asks for: it installs
  388 skills from a pinned MIT library into a throwaway home, runs
  `xerj autoindex --skills`, and ranks the right skill for 26 labelled task
  queries written blind. On 2026-10-31 the right skill was first for 13 and in
  the top 3 for 22; every rank, misses included, is in
  `benchmarks/skills-intent/results/`. Part of #2644.

### Changed

- Stored text columns are 64 KiB row blocks with a per-column trained 112 KiB
  zstd dictionary (codec 8), level 3 on flush, 9 on merge, 19 on `_forcemerge`,
  and a page of results reads only its rows. Older builds refuse such segments.
  Opt out: `XERJ_STORED_ROW_BLOCKS=0`, `XERJ_STORED_BLOCK_DICT=0`,
  `XERJ_STORED_ROW_SELECT=0`.
- New segments write postings as ZPS4, with no per-posting position count. The
  data-directory format goes to 4 at the first such flush and older builds
  refuse the directory at open. Opt out: `XERJ_FTS_POST_CODEC=packed`.
- Text fields may be mapped `index_options: docs` or `freqs` to store no
  positions. Phrase, phrase-prefix, interval, span and `multi_match` phrase
  queries on such a field are refused with HTTP 400 ("indexed without position
  data"); term frequencies are still stored, so BM25 scores do not change. On a
  one-million-passage benchmark corpus the on-disk postings for such a field
  were about 53% smaller — positions are the largest posting class — with p95
  query latency within about 2% (paired, same cores). This is opt-in, never a
  default. The postings use a new codec family (ZPA); an index that uses it
  moves the data-directory format to 5, and older builds refuse such a
  directory at open. See [`docs/STORAGE_COMPACTION.md`](docs/STORAGE_COMPACTION.md).
- BM25 search walks block-max trees, shares a live floor across segments and
  opens segments in parallel by default; threads default to min(4, cores/2).
  Each switch remains an opt-out with identical results.
- Autoindex sends several bulks of one file at once, with a window that starts
  at 2, grows while clean and honours `Retry-After`; progress moves inside one
  large file.

### Fixed

- A newly elected cluster leader now commits an uncommitted log tail left by
  the previous term by appending an entry of its own term, so a metadata write
  interrupted by a leader election commits promptly instead of timing out after
  five seconds. This removes a cluster-metadata replication flake.
- Large autoindex builds fsync once for a batch of publication intents and
  group file-completion records, instead of one fsync per file; files stay
  crash-safe, because a lost completion is republished. Flushes start earlier
  and smaller under a small process memory cap, and the finalize-correlate
  phase and wide sparse-segment decodes are bounded, so a one-gigabyte build no
  longer trips the memory watermark.
- `_update` and `_update_by_query` re-embed changed `semantic_text`, so a stale
  vector no longer stays stored.
- Fields scored by passage no longer build an HNSW graph nobody can read.
- The autoindex semantic cap counts past the first 1,024 rows of a file, and a
  sender parked on a full wire no longer hangs the run.
- A plain debug `cargo test --workspace` no longer aborts on a stack overflow,
  and the `127.0.0.2` loopback test names the missing macOS alias (#2903). Five
  tests that run the ES-compat router on multi-thread workers overflowed tokio's
  2 MiB worker stack in a debug build, killing their whole test binary: one in
  `xerj-mcp`'s `local_def`, one in `xerj-api`'s
  `autoindex_changed_file_drops_stale_symbols`, and three in `hub_api`. They now
  use the server's 4 MiB, as the other in-process router tests do. On a host without `127.0.0.2`,
  `loopback_proxy` fails up front with
  `sudo ifconfig lo0 alias 127.0.0.2 up` instead of a bare connection error,
  through the new `xerj_common::loopback_test::require_loopback_alias`.
  CONTRIBUTING documents both, and that CI runs `--profile ci-test`.
- `_bulk` refuses a malformed action line the way Elasticsearch 8 does: the
  whole request is a 400 `illegal_argument_exception` naming the line
  (`Malformed action/metadata line [3], expected FIELD_NAME but found
  [END_OBJECT]`, `Action/metadata line [1] contains an unknown parameter
  [_type]`), and nothing in the body is written. XERJ answered 200 with a
  per-item error for that line and wrote every other action. An unknown
  parameter (`_type`, `_version`, `_routing`, a typo) used to be ignored and
  is now refused, as in ES 8; a client sending the 7.x REST compatibility
  header (`compatible-with=7`) may still send `_type`, as ES 8 allows. A line
  the check cannot read with confidence (JSON ES's own parser rejects, an
  escaped key, a byte order mark) stops the check there, and the rest of the
  body is answered as before.
- Data-stream `_rollover` honours `dry_run` and its `conditions` instead of
  ignoring the body: `max_docs`/`max_age` are ORed and reported in
  `conditions`, and a dry run or an unmet condition creates no backing index.
  The response names the real old/new backing indices, and the new backing is
  marked as the write index so writes through the stream continue after a
  rollover. Size-based conditions and alias-rollover body fields are refused
  rather than silently ignored.

- A hub catalogue already on disk is verified against its sibling signature
  before it is served, including a fresh cache and a `304 Not Modified`
  (#2904). Replacing `catalogue.json` used to be enough: `load_catalogue`
  parsed it with no signature check, and a future mtime kept that file
  fresh. A `304` then re-touched the replacement. The cache is dropped and
  refetched when the sibling signature does not verify.

- `xerj mcp` no longer answers a JSON-RPC notification, and runs every
  `tools/call` off the stdio read loop (#2898). A `tools/call` with no `id`, or
  with `id: null`, used to be awaited on the read loop, so a stalled search held
  up `ping` and every later request as in #2390; the id-less one was also
  answered with `id: null`. Now both run on their own task, the notification
  gets no reply, and `initialize`, `ping` and `tools/list` sent as
  notifications get none either.
- Tests name the cause when loopback networking is unavailable (#2886). Every
  test that binds an ephemeral 127.0.0.1 port, in all crates, goes through
  `xerj_common::loopback_test::expect_loopback`, so a sandbox that denies the
  bind fails with "this test starts a fake server on 127.0.0.1 and needs
  loopback networking" instead of hundreds of bare `PermissionDenied` panics.

- `/lead` rejects non-string email values with HTTP 400 before storage.
  Arrays no longer become accepted addresses through string coercion, and
  objects with a non-callable `toString` no longer cause HTTP 500.

- `xerj autoindex` now records Dart `extension` and `extension type`
  declarations as `class` definitions, so `xerj def <ExtensionName>` finds
  them. Methods inside an extension were already indexed; the extension's own
  name was not, because the Dart query adapted from tree-sitter-dart's
  `tags.scm` had dropped both forms.

- The field-report HTTP fallback now enforces its 16 KiB body limit on raw
  bytes before decoding or storage access. Multibyte JSON without a reliable
  `Content-Length` no longer bypasses the limit by having fewer characters.

- `xerj autoindex` no longer stalls near the end of a run at high
  `--workers`. When all 8 bulk slots were busy, a worker whose chunk crossed
  the flush size parked; if another worker then shipped the shared buffer,
  that chunk included, the first one woke to an empty buffer and parked again
  every 30 s for good, so the run never finished. It now returns once the
  bulk carrying its chunk has landed. The same loop could also return while
  that bulk was still on the wire, so a file could be journaled complete
  before, or even though, one of its bulks failed; it now waits. On a
  26-file, 28 MB scientific CSV folder, rc.100 stalled at 21 of 26 files with
  `--workers 32` and 19 of 26 with `--workers 16`; both now finish all 26
  files and 179,374 records (#2841).

- `weighted_avg` now executes field-based requests (`value` / `weight`, each
  with a `field` and optional numeric `missing`) instead of returning HTTP 200
  with an `unsupported aggregation type` error in the aggregations body. A
  `script` on either side, a malformed side, a missing `field`, and a
  non-numeric `missing` return a 400 naming the side. Multi-index searches
  recombine by weighted sum, not by averaging the per-index values. A
  multi-valued weight field is skipped rather than refused, because the
  aggregation evaluator has no error channel; that case stays in
  `catch-lenient.txt` (#204).

- Re-indexing the same doc ids no longer grows `hnsw/graph.bin` without
  bound. Each overwrite tombstoned the old graph node and nothing ever
  removed one, so the graph (on disk and in memory) kept every vector ever
  written: 87.7 MB for 1,000 live vectors. The graph save now compacts the
  graph once dead nodes reach the live count (and at least 1,024): it
  rebuilds from the live vectors off-lock, replays writes that land during
  the rebuild, and swaps the result in, so the graph stays within about
  twice the live set. (#2796)

- Code-extraction size skips now report exact file/limit byte counts and
  explain that `--max-file-gb` / `--max-file-mb` / `--max-file-bytes` do not
  raise the separate fixed 2 MiB AST source-file cap. The reason no longer
  assumes that an oversized file must be generated. Help and Perl boundary
  regressions cover this diagnostic follow-up to #2666 (Refs #2745); the cap
  and skipped-file outcomes are unchanged.

- The version map takes about 23% less memory per document (#2427). A
  32-character lowercase hex id (what `xerj autoindex` writes) or a lowercase
  UUID is now packed into 16 bytes inside its bucket instead of paying a
  separate 48 B heap allocation, other ids up to 24 bytes are stored inline,
  and the tombstone flag shares the version word. On the 2.46 M-entry perf-gate
  corpus the map drops from about 347 MB to 268 MB.
- A `_delete_by_query` whose matches fit in one scroll page no longer flushes
  the whole memtable before deleting. `autoindex --fresh` sends one such
  delete-before-replace per file, and each one used to cut a new tiny segment
  out of every other worker's pending bulks (about 1,050 segments on the
  #2640 corpus). Larger deletes keep the flush-then-page path (#2640).
- A search no longer hangs forever when a cold segment's stored fields are
  being warmed in the background. A search-pool thread that waited for the
  warm's decode could block the decode it waited for, so every later search
  of that segment timed out at 30 s after ingest stopped. Search-pool threads
  now wait at most 200 ms and then decode the segment themselves (#2427).
- A small merge write admitted after a run of merge yields is now checked
  against the memory watermark instead of the process limit, so it can no
  longer take a node from below the watermark into the parent breaker band and
  turn ingest into HTTP 429s. The relief for a search node resting between the
  merge-pool ceiling and the watermark is kept (#2427).
- The HNSW doc-id maps now share one allocation per graphed document between
  the forward and reverse maps, instead of storing every id as two `String`s,
  and their bucket arrays and id bytes count toward the `vector_graph` ingest
  memory category, so the breaker budget sees them. On the cap-2048 ingest
  run these maps held about 110 MB of live heap that no category reported
  (Refs #2427).
- `xerj autoindex` no longer stalls for up to 10 minutes per large dataset in
  `finalize-count`. The dataset time range was read with `min`/`max`
  aggregations, which make the node copy every document first; on a
  393 k-record dataset that priced at 768 MB against the 512 MB
  `limits.max_query_memory_mb` default and the client re-asked for its full
  600 s patience. The bounds now come from two sorted size-1 searches, and a
  429 from the per-query memory guard is no longer retried, since the same
  query is refused again (#2427).
- The `xerj-autoindex` corpus-lock tests no longer fail at random in CI
  (#2520, Refs #2427). One test put `-c core.fsmonitor=false` after the git
  subcommand, so git exited 129 at once and the test only passed by winning a
  race against that exit; and under the test harness a lock another test just
  released can stay held for 10-30 ms by a sibling test's forked child until it
  execs. Test builds now wait out a busy lock for up to 500 ms; a real
  `corpus add` still refuses at once.
- A search that decodes a segment's doc-values sidecar the segment cache has
  no room to keep now reserves the decoded size in the read transient budget
  before decoding, and holds it until the query drops the columns. Before,
  such decodes were neither cached nor reserved, so concurrent searches during
  heavy ingest could stack decoded sidecars (about 100 MB late in the
  cap-2048 run) that no memory budget counted (Refs #2427).
- **A memory-pressure drain no longer spikes RSS past the cap while it
  flushes** (#2427). The breaker drain and the cache-release path
  flushed each index with every non-empty memtable shard building its
  segment at once, and that working set (parsed documents, columns,
  postings, stored blocks) is not charged to the memtable budget. On a
  1,536 MB-capped node one drain took RSS from 1,460 MB to 2,323 MB in
  about a second. Memory-release flushes now build one shard at a time;
  ordinary flushes still run in parallel.

- The per-index document version map is smaller and now visible in the
  ingest memory trace. Its keys are `Box<str>` instead of `String`, which
  saves 8 of 64 bytes per hash bucket and drops any spare capacity carried
  in from the incoming id. The map's estimated heap (hash tables plus key
  bytes) is reported as the new `version_map` category. On the 1 GB gate's
  search node the map held ~0.5 GB that no budget saw. (#2427)
- `xerj autoindex`: Vue (`.vue`) and Svelte (`.svelte`) single-file components are indexed as code instead of being junk-filed as malformed XML. Their `<script>` blocks are parsed with the TypeScript or JavaScript grammar (by `lang`), so their declarations are symbols on the component's own lines, and the record's `language` is `vue` or `svelte`. (#2732)
- The alias APIs reject an update that would leave more than one
  `is_write_index: true` member (`POST /_aliases` and
  `PUT /{index}/_alias/{name}`), including a wildcard add that expands to
  several indices. The check is on the final state of a batch, so an atomic
  switch (add the new writer, clear the old one) still works; a rejected
  update changes nothing instead of leaving an alias whose every write
  answers 400.

- `_reindex` applies `source._source` field filtering to the documents it
  copies, so an excluded secret or large field no longer reaches the
  destination. `_source:false` is refused with ES's sentence, and a `script`
  body is refused before any work instead of silently copying the
  untransformed document (this build has no reindex script context).
- A document written through the per-document path (single-doc index and the
  `_bulk` per-document path) is now held once in memory until the next flush
  instead of twice: the storage memtable and the full-text memtable share one
  parsed `_source` rather than each keeping its own deep copy. On a 1 GB
  `_bulk` load a late heap profile had the two copies at ~470 MB of ~1.75 GB
  in use (#2427).

- Publishing a flushed or merged segment no longer decompresses its whole
  stored section when the result cannot be kept. The publish-time warm now
  sizes the stored slices from the section framing first and skips the warm
  when the segment hydration cache has no room for them, or when keeping them
  would carry the node to the memory watermark. Before, a merged segment's
  section (hundreds of MB on the 1 GB autoindex gate) was decoded and then
  refused, a transient spike that pushed ingesting nodes over the breaker.
  Queries hydrate such a segment on demand, as before (#2427).

- The in-memory HNSW graph no longer stores every vector in one contiguous
  buffer. That buffer doubled on growth, so near ~393K 384-dim vectors a
  single 384 MiB -> 768 MiB realloc kept both copies live (~1.15 GB
  transient) outside any memory accounting. Vectors now live in 4 MiB
  chunks (no realloc copy, at most one chunk of slack), and the graph's
  estimated heap is reported as the new `vector_graph` category in the
  ingest memory trace. (#2427)

- A node near its memory cap no longer warms flushed and merged segments into
  the segment-hydration cache. Publish-time warming used to stop only while
  the memory breaker was engaged. It now stops once RSS reaches the breaker's
  release level (85% of the watermark by default), so warming no longer
  spends the headroom the breaker has just won back. On the 1 GiB release
  gate (cap 3072 MB) the ingest node only received `_bulk`, yet it held
  200-580 MB of warmed stored slices between 40 breaker engages. Queries
  still hydrate a segment on first read. (Refs #2427)

- A cold full-text query no longer starts one background whole-section
  stored decode per cold segment at once (refs #2427). On the 1 GB gate's
  `pg-docs` (54 cold segments) one 5-hit query drove anon RSS from ~1.0 to
  ~4.7 GB after it had returned, with most decodes refused by the hydration
  budget at publish and thrown away. One background warm per index now runs
  at a time and the others are skipped. Query answers are unchanged.

- `simple_query_string` with `"fields": ["*"]` is answered from the inverted
  index instead of a stored-document scan of every segment (refs #2427). The
  bare `*` pattern lowered to a literal `"*"` field that has no index
  projection, so each query parsed every flushed document; on the 1 GB
  autoindex release gate a 5-hit query walked ~1.2M stored docs and ran into
  the 30 s request deadline (raw-surface p95 ≈ 30 s). `["*"]` now lowers like
  an absent `fields` list, which is what ES means by it: unquoted terms are
  matched over every mapped searchable text field. A boost on the bare
  pattern (`"*^2"`) is dropped, and quoted phrases are unchanged. On a
  flushed segment this also applies the searchable-field rule, so `["*"]` no
  longer matches through an `index: false` field. `query_string` with
  `["*"]` is unchanged.

- A restarted node that receives no writes no longer runs catch-up merges
  when its indexes open. Inherited merge debt is now paid at the first
  segment-set change (a flush, refresh or delete) or on `_forcemerge`. Before,
  a search-only node in the 1 GB gate started merging straight after the
  restart, while it was serving reads under the memory breaker. This
  supersedes the 120 s open quiet period in #2492, which only delayed the
  same merges (Refs #2427).

- Vector ingest no longer runs on one core per index: the HNSW construction
  search (greedy descent, `ef_construction` beam and neighbour selection) now
  runs under a shared lock, and only the link writes take the graph's write
  lock. A bulk batch plans its inserts in parallel on the ingest pool, and
  concurrent batches into one index no longer queue behind each other's
  inserts (#2427).

- `_bulk` requests of ordinary text and code are no longer refused with a
  429 while the node has memory to spare. Each raw bulk reserved 28 bytes
  per input byte for analysis, a rate sized for the densest text, so a bulk
  of prose reserved about 3x and a bulk of code about 4x what parsing and
  analyzing it allocates. The reservation now follows the estimated token
  count of each document, and dense text keeps the old rate (Refs #2427).
- `_bulk` admission no longer counts analysis memory twice. A held analyze reservation was added on top of live RSS even after its batch had allocated most of it, so a node with several bulks mid-analysis refused writes at about half its watermark. Held reservations are now counted from the RSS they were admitted at (Refs #2427).
- A node whose resting memory sits between the merge-pool ceiling and the
  memory watermark merges again. Every background merge's output write was
  refused there, so small batches were retried every 5 s without ever
  completing, and each retry decoded its inputs again. After three yields in
  a row with nothing merged, a batch of at most 64 MB now checks its write
  against the process memory limit instead of the merge-pool ceiling.
  (Refs #2427)
- `_bulk` throughput with explicit `_id`s: `index` actions that carry an `_id`
  (and prepared `semantic_text` documents) are now published as one batch per
  index instead of one `index_document` call each, which took the WAL lock,
  copied the source into the storage memtable and opened a publication bracket
  per document. Per-item results are unchanged: `created`/`updated`, `_version`,
  and per-item date and size errors that keep their `_id`. (Refs #2427)
- `xerj autoindex --fresh` over an already-indexed folder no longer pays one
  edges-index search, bulk and refresh per replaced file (and again per
  superseded anchor) to soft-invalidate prior relationship edges. The graph
  phase now invalidates them in batched, terms-sliced sweeps with one refresh
  per sweep. On a 1,050-file markdown corpus with 14,724 prior edges the
  `--fresh` run went from 152.0 s to 26.7 s (edges refreshes 1,052 → 3), with
  the same 14,724 edges invalidated (#2640).
- A background merge no longer starts alone when its own memory reservation
  would carry the node past the merge-pool ceiling. It waits (at most 30 s)
  while the next batches are planned small enough to fit, so merging still
  makes progress without the overshoot behind the 1 GB gate's 3.5 GB ingest
  peak on a 3,072 MB cap (Refs #2427).
- Search under a memory cap: when the segment hydration cache is full, a query that has to build a segment's stored slices or FTS reader outside the cache now reserves that memory from a separate read budget (`XERJ_READ_TRANSIENT_MB`, default a tenth of `XERJ_MAX_PROCESS_MEMORY_MB`). It waits up to `XERJ_READ_TRANSIENT_WAIT_MS` (default 5 s) for room instead of stacking whole decompressed sections on top of each other. Background cache warms that the full cache would refuse are skipped. While the memory breaker is engaged, its drain still flushes and purges on every tick but releases the read caches at most once per `XERJ_BREAKER_CACHE_RELEASE_SECS` (default 30 s), so queries no longer re-hydrate cold every two seconds. `GET /_nodes/stats` reports the budget under `indices.read_transient_budget`. (Refs #2427, #1122)
- Opt-in lexical `judge` now matches CJK characters and adjacent pairs inside
  uninterrupted Chinese/Japanese/Korean text instead of treating the whole
  run as one word (refs #2580). Single-character evidence is retained, pairs
  add adjacency evidence, and non-CJK word tokenization stays unchanged.
  This changes judged CJK scores/threshold outcomes; it does not change the
  first-stage analyzer or recover candidates absent from its result page.

- `xerj corpus --help`, `xerj autoindex --help` (`--watch`) and the XERJ.code README now say that corpora and folders do not follow their git remotes, and give the refresh recipe: `git pull` in each checkout, re-run `xerj corpus add` so `corpus.json` records the new commit, then `xerj corpus index`. (#2416)
- `xerj_batch_search` (and `xerj batch-search`): a batch whose combined `_msearch` response passes the 32 MiB cap no longer fails every item. The request is retried in halves, and only an item whose own response is over the cap fails, with `response_too_large`. (#2694)
- `xerj autoindex` and `xerj autoindex map`: when the node is unreachable at a `localhost` URL, the error now also suggests the same URL with `127.0.0.1`, since the node binds the IPv4 loopback by default and `localhost` can resolve to `::1` first (seen on Windows). (#2688)
- The node binds its ES-compat and REST listeners before it opens its
  indices, and on plain-HTTP ports answers every request with
  `503 node_starting_exception` (with `Retry-After: 1`) until the engine is
  up. `/health/live` answers 200 `{"status":"starting"}` and `/health/ready`
  answers 503, so a health check during a long startup no longer sees
  "connection refused" and takes the node for dead. TLS ports bind early and
  queue connections until the node is ready (#2575).

- A body sent without a JSON `Content-Type` (the `curl -d` default,
  `application/x-www-form-urlencoded`) is still refused with 415, as
  Elasticsearch 8 does, but the reason now names the fix:
  `-H 'Content-Type: application/json'`. The curl recipes that left the
  header out now send it (#2575).

- `xerj autoindex` now says why a source file over the 2 MiB code cap is
  skipped (#2483). Such a file (generated stubs, minified bundles) used to be
  reported as "no records extracted (code candidate family, 1 junk lines)",
  which read like a parse failure. The reason now names the cap, the file
  size, and `.xerjignore` as the way to leave it out of the plan.

- `_reindex` honours `dest.op_type: create`, `conflicts`, and `max_docs`
  instead of silently dropping them. `create` no longer overwrites an
  existing destination document: the default abort returns 409 with ES's
  version-conflict failure, and `conflicts: proceed` skips and counts it.
  `max_docs` caps successful writes (the query-parameter form is accepted
  too); invalid values are refused before any source or destination work.

- Boolean text queries with one `must` match now keep `filter` and `must_not`
  clauses non-scoring before a flush and on mixed memory/segment indices.
  Their retained hits use the same BM25 scores as the bare match (#2403).

- Reindex preflights every source alias member before creating or writing the
  destination. Aliases cannot hide a source/destination overlap; a missing
  source, invalid query or source flush failure leaves destination data intact.
  An alias with `is_write_index: false` refuses writes even with one member.

- TS/JS factory constants exported by a separate local export clause or
  default identifier now get definition records at their declaration lines
  (refs #2579). Inline `export const` stays supported; private constants,
  function-local bindings, type-only exports and remote re-exports stay out.
  Existing unchanged files need re-extraction to gain these definitions.

- Corpus cloning validates existing checkouts and serializes writers (#2453).
  New checkouts are staged before publication. Ambiguous existing directories
  are preserved for recovery rather than deleted or reset automatically.

- MCP `xerj_search` advertises plain text in `query` and structured clauses
  in `query_dsl`. Legacy object-valued `query` and omitted-query browsing
  remain supported; conflicting fields fail before HTTP requests (#2549).
- Search payloads and batch retrieval default to 8,000 UAX #29 words when
  `max_tokens` is absent or null (#2491). This is not a byte or model-token
  cap. Explicit larger budgets remain available; errors and mandatory
  search staleness hints stay outside the payload budget.
- GitHub field-report submission uses the supported explicit-repository
  `gh repo fork --clone=false` invocation and adds the fork remote itself
  (#2596). The rollback test now verifies that the report was committed
  before a failed push, rather than passing after an earlier fork failure.
- Local admin-key discovery reports the source of the selected key and warns
  when its directory is outside the working tree (#2578). Packaged installs
  have their own provenance, and MCP guidance names `XERJ_AUTH`. Discovery
  priority and explicit credential overrides are unchanged.

- `xerj autoindex` fails a run when one dataset index holds no documents
  although the journal says records were written to it, even when the other
  datasets are live (#2407, defect 2). The check summed live documents over
  every dataset, so a populated `-json` index let a re-run print `ok: indexed
  and searchable` over an empty `-docs` index. The error names each empty
  index and its contributing files; record totals are reported only when
  those files target that dataset alone. Unknown sibling counts do not hide
  independently confirmed missing data.
- SQL source extraction no longer slices statement heads inside a UTF-8
  character, so unrecognized CJK statement/comment heads do not panic (#2547).
- Short Markdown files with YAML frontmatter retain their prose body even
  when bullets or `Key: value` lines also parse as YAML (#2447). Existing
  frontmatter-title behavior and structured CSV/JSON body detection remain.
- Empty files keep separate inventory identities instead of being reported
  as content duplicates of unrelated paths (#2449). Non-empty byte-identical
  files still deduplicate.
- A search with both `query` and a top-level `knn` returns `size` hits, not
  `k` (#2561). The page was widened to `k`, so `size: 5, k: 20` returned
  20 hits. `k` still sets how many nearest neighbours join the candidate
  set, and `from`/`size` page through the union, as in Elasticsearch.
- Index deletion no longer waits for unrelated index statistics while
  resolving its selectors. Index listings and health checks also release
  their index-map locks before awaiting statistics, so a stalled schema
  update does not hold those locks against DELETE (part of #2405; extracted
  from #2489). Merge/flush cancellation and the process memory cap remain
  separate follow-ups.
- `xerj autoindex` compresses per-file phase-B stages with zstd level 1 and
  uses temporary files cleaned up by the operating system when the client
  exits (#2493, part of #2427). It finishes buffered compression before
  deleting previous records, so a stage finalization error preserves the old
  records and an ordinary resume can complete the replacement. Compression
  savings depend on the data; this does not impose a disk or server-memory cap.
- `autoindex` bulk back-pressure patience is now measured since the last
  progress, not since the first round. A window the server drains a few
  records at a time (per-item 429 `resource_exhausted` on an embedding
  deadline or admission refusal) used to abort with `bulk backend failed`
  once the rounds together passed the 600 s `THROTTLE_PATIENCE`, even though
  every round settled records. Each round that settles at least one item now
  restarts the patience clock and the backoff; rounds that settle nothing
  still count, so a server that answers 429 forever fails at the same limits
  as before.
- `xerj autoindex` titles a prose file that opens with YAML frontmatter from
  its `title:` key, or from the first line after the closing `---` when there
  is none (#2556). Every such file (Jekyll, Hugo, Obsidian) used to be titled
  `---`, its opening fence. A leading `---` block that is not parseable
  frontmatter (unclosed, not a YAML mapping, over 64 KiB) takes the first line
  that is not a bare `---`; the body, the frontmatter text in it and
  `start_line` are unchanged. An unchanged file is not re-extracted, so re-index
  with `xerj autoindex --fresh` to retitle documents already in an index.

- A `--no-graph` re-index whose options differ from the committed generation
  (for example `--sample` or `--follow-symlinks`) is refused before anything
  is copied, and the error names the option. It used to copy and prepare the
  whole folder, then report "could not derive generation N; the durable
  generation state is not internally consistent", although the state was
  intact and the original options still updated the corpus (#2577).

- `xerj autoindex --no-graph --dry-run` now refuses a changed option the way
  the real run does, naming the option, instead of printing a plan and exiting
  0 for a run that would then be refused. The `--max-minutes` note on this
  route recommends `--dry-run` as the way to check a plan first (#2684).

- `xerj search` and `xerj def` with no hits on a prefix whose autoindex
  indices exist but whose first run has not finished now say so: search again
  once the run finishes, or rerun the same command if it stopped. They used to
  print the node's other indices and "the catalog lists no prefixes; --prefix
  is the index name before the dataset slug", which read as a wrong `--prefix`
  (#2670).

- `xerj autoindex` reads a spreadsheet sheet with no header row and no text,
  such as an all-numbers export, as a table: one record per row, columns named
  `col_A`, `col_B` and so on, values keeping their cell types. It
  used to index such a sheet as one text document, which the 4,096-section cap
  cut off: in the #2720 reproduction a 200,000-row sheet kept rows up to
  72,724. A sheet whose first 20 rows hold a text cell, uneven rows, one column
  or only one row is still indexed as a document (#2720).
- A `--no-graph` rerun no longer aborts when a file gains a part the committed
  generation has no dataset for, for example a new or renamed spreadsheet
  sheet, or a sheet that gains a header row and moves from the document
  reading to the table reading. The file is set aside with a rebuild message
  (exit 3) and every other file is still indexed. It used to stop the whole
  run with "frozen assignment has 0 matches for group" (#2720).
- `xerj autoindex` indexes HTML partials and template files instead of
  junk-filing them as malformed XML. A file that opens with markup and has
  closing tags was read as XML, so a folder of 16 or more such files became an
  XML dataset and every file was junked at its first `<%`, `&&` or unclosed
  tag, with the text after that point lost. `.html` and `.htm` are now read as
  HTML, and `.hbs`, `.handlebars`, `.mustache`, `.ejs`, `.erb`, `.jsp`,
  `.aspx`, `.cshtml`, `.razor`, `.twig`, `.jinja`, `.jinja2`, `.j2`, `.njk`,
  `.liquid`, `.astro`, `.marko` and `.riot` as text, also when gzipped. Real
  XML, including `.xml`, `.xaml` and `.svg`, is unchanged. An index built
  before this fix keeps its junked files until each one changes or the folder
  is indexed again with `--fresh` (#2740).
- When the server refuses a record or a graph edge, `xerj autoindex` now
  names the file it came from and does not mark that file done. It used to
  mark every file in the same bulk done, so the rerun the abort message asks
  for resumed past the file, reported success and never sent the refused
  record (#2807).
- A file whose record the server refuses as over its 8 MiB per-document
  limit is now set aside as junk, with its file name and the server's reason,
  and the run completes with exit 3. Its other records are removed and it is
  retried on the next run. It used to abort the whole run, every rerun, until
  `--fresh`. On a `semantic_text` field the vectors the server adds count
  toward that limit: a 2 MB generated `.d.ts` file grew to 16.6 MB this way.
  `--no-semantic` may index such a file (#2807).
- `xerj corpus index` and `xerj autoindex --no-graph` now name the file a
  refused record came from, and for a size refusal they say how to index the
  rest: under a new `--prefix` and `--state-dir`, with the file left out
  (`--exclude`) or with `--no-semantic`. That route fixes its file list before
  it sends anything, so it cannot set a refused file aside. It used to say
  only "prepared bulk contained 1 rejected items" (#2807).
- `xerj corpus index` and `xerj autoindex --no-graph` now size each record
  with the vectors the server will add, before they fix the file list, and
  set aside a record that would not fit as a junk record. The run completes
  with exit 3, the file's other records are indexed, and reruns complete too.
  The 2 MB generated `.d.ts` file from #2807 loses only its whole-file record;
  its type records are still indexed. That route used to stop on the server's
  refusal, and every rerun stopped on the same record. A run that an earlier
  version already stopped this way replays the list it fixed and stops again;
  index that folder under a new `--prefix` and `--state-dir` (#2807).

---

### Assets and provenance

Binaries for 8 targets plus the XERJ Query-1 model bundle:

- `xerj-1.0.0-rc.101-<target>.tar.gz` / `.zip` (+ `.sha256`), `.deb` for the two linux-gnu targets.
- `xerj-model-bundle-v1-v1.0.0-rc.101.tar.gz` (+ `.sha256`): the XERJ Query-1 bundle (`candidate_a_s47`, FP16, served as int8 on CPU). Enable with `xerj --facts-model-dir <DIR>`; without the flag the node is rc.100. Install both in one step: `curl -fsSL https://xerj.org/get | sh -s -- --with-model`.

Provenance: this release's binaries were built from a private tree (public `main` at `3f6aefa8` + the XERJ-R storage/ingest/facts lanes + the proprietary model crates `xerj-infer`/`xerj-serve`/`xerj-exec`, which ship as binary + bundle only and are not in this repository). The six x86_64/macOS/Windows assets were cross-built by the release workflow; the two aarch64 Linux assets were built natively on an aarch64 host from the same tag after GitHub's ARM cross-build runners were shut down mid-job twice. Every asset carries its SHA-256.

Known limitations (measured): counting engages only on facts that carry `subject_id` and covers set counts, not sums; a count tallies the matched set and does not check the noun of the question (a quantity question about a relation the store lacks can be served as a member count); the model over-declines (383 of 1,600 standard-eval items). Details: `docs/FACTS_API.md`, `docs/XERJ_QUERY_1.md`.

Known issue (opt-in storage option): with `source_ref` enabled, a search that reads text from an edited source file can return the old text instead of the "file changed" error when the edit keeps the file size the same (intermittent, 2 of 3 isolated runs). The default layout stores text in the index and is not affected. Tracked for rc.102.

---

> **Source** [xerj-org/xerj](https://github.com/xerj-org/xerj) · `v1.0.0-rc.101` · 2026-11-05 · [upstream release](https://github.com/xerj-org/xerj/releases/tag/v1.0.0-rc.101)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
