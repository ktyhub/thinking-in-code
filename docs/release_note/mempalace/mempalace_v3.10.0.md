---
title: "mempalace v3.10.0"
project: "mempalace"
repo: "MemPalace/mempalace"
tag: "v3.10.0"
version: "v3.10.0"
published: "2026-09-16"
type: "minor"
lang: "en"
summary: "Agents get lighter ways in: a 3-tool MCP server with Palace Query Language, shared-brain rules for host:harness:project identities, and optional native exact-vector search."
---

# mempalace v3.10.0

Agents get lighter ways in: a 3-tool MCP server with Palace Query Language, shared-brain rules for `host:harness:project` identities, and optional native exact-vector search. New installs follow XDG, and storage fixes close a silent write-loss path, a macOS integrity refusal and several hangs.

### Upgrade notes

- **`mempalace rules` no longer accepts `--agent`.** Pass `--host`, `--harness` and `--project`, then re-render any installed shared-brain block. (#2508)
- **`get_collection()` refuses names MemPalace never reads.** Any name other than the configured drawers collection or `mempalace_closets` raises `CollectionNameMismatchError`; maintenance scripts can pass `_skip_name_check=True`. (#2446)
- **The MCP event listing returns the newest events first when no cursor is given.** `mempalace_event_list` and `palace_coordinate` now default to newest-first unless `since_event_id` or `order` is passed; `mempalace logstream list` and `Logstream.list_events()` still default to oldest-first. (#2497)
- **New installs keep config and palace under `~/.config/mempalace`** (or `$XDG_CONFIG_HOME/mempalace`). Existing `~/.mempalace` installs are unchanged. (#148)

### Performance & Architecture (Dual-Track Rust Engine)

- **Optional native Rust exact-vector acceleration (`rust_exact`).**
  Reads the existing SQLite format into a contiguous float buffer, uses Rayon
  for large scans, and releases the Python GIL. Local and external writes
  invalidate the native cache. Loading is collection-scoped and decodes blobs
  safely; serial and parallel scans preserve deterministic tie ordering.
  Complex filters and absent native extensions fall back to Python.

- **Standalone native vector CLI and optional wheels.**
  GitHub releases include native wheels and platform executables. The CLI
  accepts JSON embedding vectors via `--vector` or stdin; it does not embed
  text or require Python. Platform runtime libraries may still be required.

- **NumPy top-k optimization.**
  Cache vector norms and partition distances before sorting the selected
  results, preserving row-order ties at the cutoff.

- **Read-only search operations stop contending with palace writer leases.**
  `searcher.py` and `_open_search_collection` now explicitly open collections with `read_only=True`. Read-only queries connect in SQLite WAL reader mode without attempting schema initialization or writer lease locks, allowing CLI and agent searches to run concurrently with an active background MCP server or writer process without raising `MineAlreadyRunning`.

### Refactors

- **MCP server is a package, not an 8 000-line module.** `mempalace.mcp_server` stays the public import path (`TOOLS`, `handle_request`, `main`, every `tool_*` handler, and the process-global names tests monkeypatch). Implementation lives in domain files under `mempalace/mcp_server/` so PRs can target drawers, KG, coordination, protocol, or HTTP without colliding on one god-file. Fragments exec into the package namespace — a physical split, not a behaviour change.
- **CLI is a package, not a 4 000-line module.** `mempalace.cli` stays the public import path (`main`, every `cmd_*` handler, and the names tests monkeypatch). Implementation lives in domain files under `mempalace/cli/` so PRs can target init, mine, search, repair, logstream, or argparse without colliding on one god-file. Fragments exec into the package namespace — a physical split, not a behaviour change.
- **MCP server tests are split by domain.** `tests/test_mcp_server.py` is now `tests/mcp/` (protocol, read, search, write, diary, KG, guards, stale-library) so community MCP PRs do not collide on one 8 600-line test file. Shared helpers live in `tests/_mcp_server_helpers.py`.
- **Searcher is a package, not a 2 200-line module.** `mempalace.searcher` stays the public import path (`search`, `search_memories`, `SearchError`, and the helpers tests monkeypatch). Implementation lives under `mempalace/searcher/` (ranking, filters, sqlite BM25, candidates, query, CLI, render) so PRs can target one seam. Fragments exec into the package namespace — a physical split, not a behaviour change.
- **Palace ops are a package, not a 1 800-line module.** `mempalace.palace` stays the public import path (`get_collection`, `mine_lock`, `mine_palace_lock`, closet helpers, and the names tests monkeypatch). Implementation lives under `mempalace/palace/` (collection, backend, closets, mine locks, mined-set) so PRs can target one seam. Fragments exec into the package namespace — a physical split, not a behaviour change.

### Features

- **Shared-brain rules use a `host:harness:project` identity and can name either MCP tool surface.** `mempalace rules` takes `--host`, `--harness` and `--project` (stable lowercase tokens) instead of `--agent`, plus `--mcp full|light`: `full` (default) names the 45-tool `mempalace-mcp` tools, and `light` names the `palace_query` / `palace_exec` / `palace_coordinate` triad with identical prose. The rendered block has agents compose the identity from their current workspace, sweep the inbox when they start collaborating instead of arming a watcher at session start, and arm `logstream watch` only when asked to listen, after claiming a task or after delegating. `logstream watch --agent` now defaults `--state-file` to `~/.mempalace/watch/<agent>.json` with `_` doubled and `:` sanitized to `_`, so Windows `host:harness:project` identities need no private path. (#2508)
- **`mempalace-light-mcp`: a 3-tool MCP server with Palace Query Language.** `palace_query`, `palace_exec` and `palace_coordinate` cover search, taxonomy, KG, graph, diary, drawers, mining, tunnels and RFC 003 coordination through a one-line PQL string (`FIND "oauth" IN backend/auth LIMIT 5`) or a structured dict, at about a quarter of the 45-tool schema (10.6 KB versus 41.6 KB). Writes go through the same sanitizing handlers, so drawer text stays verbatim; search ranking is unchanged, stdio is hub-first, and `--read-only` refuses `palace_exec` and `palace_coordinate`. Register it beside the full server rather than in place of it: `claude mcp add mempalace-light -- mempalace-light-mcp`. (#2412)
- **Config follows the XDG Base Directory Specification on new installs.** Resolution order is `$MEMPALACE_CONFIG_DIR`, then an existing `~/.mempalace` that holds `config.json`, `people_map.json` or `palace/chroma.sqlite3`, then `$XDG_CONFIG_HOME/mempalace` (absolute values only), then `~/.config/mempalace`. Existing installs keep `~/.mempalace`, and `palace_path` defaults to `<config_dir>/palace`. (#148)
- **CLI writes honour the daemon write-routing policy.** `mine`, `sweep`, `sync` and the post-setup mine in `init` follow `direct` / `prefer` / `require` from `MEMPALACE_CLI_WRITE_ROUTING` or `write_routing.cli` in `config.json`, with `--daemon` / `--direct` as per-command overrides. The default stays `direct`, so nothing changes unless you opt in. Once a job is submitted to the daemon it is never re-run directly on error, since the daemon may already have accepted it. `sweep` is now a daemon job. (#2033)
- **pgvector fleets can share one table set across machines.** The opt-in `pgvector_shared_namespace` (config key, `MEMPALACE_PGVECTOR_SHARED_NAMESPACE`, or the `shared_namespace` backend option) replaces the palace-path hash in the table prefix, so nodes with different local palace paths read and write the same tables. Unset, prefixes are byte-for-byte unchanged; the value is normalized strictly and recorded in the backend marker. (#2167)
- **Hybrid-rank weights are configurable.** `MEMPALACE_HYBRID_VECTOR_WEIGHT` / `MEMPALACE_HYBRID_BM25_WEIGHT`, or `hybrid_rank_vector_weight` / `hybrid_rank_bm25_weight` in `config.json`. Defaults stay 0.6 / 0.4, and malformed values fall back to them. (#2430)
- **Drawers track `last_modified`.** New drawers set it from `filed_at`; every `update_drawer` that changes content, wing or room stamps it afresh while `filed_at` keeps the creation time. Legacy drawers report `filed_at` as their `last_modified`. (#2147)
- **Search results say where their dates come from.** Vector, union and lexical-only hits return `filed_at`, `authored_at_source`, `content_date` and `content_date_source` (`filename`, `frontmatter`, `body`, `mtime`, or `unknown`). Provenance is recorded at mine time and never reconstructed for legacy drawers. (#2453)
- **`mempalace_kg_timeline` paginates.** `limit` / `offset` follow the `list_drawers` convention; the hardcoded first-100 cap is gone. (#2406)
- **Logstream listings default to the newest events when no cursor is given.** `mempalace_event_list` and `palace_coordinate` return the most recent events first when `order` is omitted and no `since_event_id` is passed, and keep ascending order when resuming from a cursor; an explicit `order` always wins and is case-insensitive. The light server's `palace_coordinate` schema now exposes `order`, `limit`, `preview` and `since_created_at`. (#2497)
- **`dynamics.effective_strength()` computes connection decay at read time.** It is pure, so reading a strength cannot change it and repeated maintenance passes cannot compound decay the way `apply_decay` does. The module docstring no longer claims hallways and tunnels already potentiate or decay. (#2416)
- **MemPalace plugin for the DeepSeek Harness (`.dsh-plugin/`).** A DSH bundle plugin with three rows, built against the DSH 0.1.5 extension points. `mempalace-recall` puts `mempalace wake-up` for the project's wing in each top-level session's system prompt from its first model call; DSH resolves prompt text before plugins can wait on anything else, so the row holds only the first assembly, for a bounded time, and never fails the step. `mempalace-autosave` keeps an append-only transcript per session under `$DSH_HOME/mempalace/transcripts/`, holding only what the user wrote and the assistant's text (never harness context, tool results, reasoning or compaction summaries), and runs MemPalace's own `stop`, `precompact` and `session-end` hooks against it through the new `dsh` harness. `mempalace-mcp` serves the palace through DSH's own MCP client with `mempalace-light-mcp`: its 3 tools cost about 2,100 schema tokens per model step against about 7,700 for the 45-tool server. A `node --test` suite covers the plugin and `tests/test_dsh_plugin.py` runs it under pytest.

### Improvements

- **`repair` says when it declines an in-place FTS5 heal, and names the SQLite that decided.** Declining was a silent `return` on two paths, so the operator saw the ABORT banner with no sign that a rebuild had been considered; `--dry-run` withheld the same explanation. All of them now print it, and the `--dry-run` copy is marked as a preview so it cannot be read as the run it is predicting. `sqlite3.sqlite_version` accompanies every verdict these paths state — the abort banner, both `--dry-run` branches, the heal's outcome line, the post-recovery check, all three shapes of the MCP integrity payload, the tool-refusal payload, the integrity log line and `MineValidationError`'s message — because a clean result from a build that cannot detect a given FTS5 fault reads exactly like one from a build that can. The post-mine validator reports at `warning` rather than `info`, the level that survives on the `mempalace mine` path, which configures no logging. (#2240, #2254)
- **A skipped startup integrity probe is no longer reported as a clean verdict.** Above `MEMPALACE_STARTUP_INTEGRITY_MAX_MB` no `quick_check` runs, yet the MCP payload answered `checked: true, ok: true`. It now returns the not-applicable shape with the skip as its `reason`, and that reason states sizes precisely enough to show the comparison it reports — a 1.4 MB database against a 1 MB limit used to read as "is 1 MB, over the 1 MB limit". Write tools gate on recorded errors rather than on `ok`, so nothing is newly refused, and `/statusz` no longer collapses a missing verdict into a failure — `ok` is false only when a check came back dirty, which also stops a non-chroma backend from reporting itself unhealthy (#1931). (#2240, #2254)
- **The FTS5 classifier is anchored to the start of the `quick_check` row.** `sqlite_integrity_errors` reports a failed probe as `PRAGMA quick_check failed: <error>`, and an unanchored match read such a row as an isolated FTS5 fault — authorizing a rebuild on a database whose state was never established. `fts5: checksum mismatch`, which SQLite 3.51.2 emits, stays unmatched deliberately: it does not name which side is damaged, and a rebuild reads from the content table. (#2240, #2254)
- **`list_drawers` and `graph_stats` walk a Qdrant collection in one scroll.** `BaseCollection.get_all_rows()` joins `get_all_metadata()` as the ids-carrying bulk read; its default still pages through `get(limit=, offset=)`, and Qdrant overrides it with a single scroll where the offset loop had cost 275 s and 292 s on a 126k-drawer palace. The embedding wrapper forwards the call so the override is reached. (#2452, #2474)
- **Hallway recompute reads only the mined wing.** `compute_hallways_for_wing` fetched every drawer in the palace on each mine; it now pages through `get(where={"wing": ...})` in bounded pages, keeping the #1619 variable-limit protection, so the cost follows the wing rather than the palace. On Qdrant, whose `get()` still scrolls `offset + limit` rows for each page, a wing larger than one page re-reads its earlier pages. (#2466, #2477)
- **CLI `status` reads backend metadata in one pass when the direct SQLite tally is unavailable.** Chroma palaces are still tallied straight from `chroma.sqlite3`. On the collection path, used by backends such as Qdrant, `status()` now calls `get_all_metadata()` when the collection exposes it instead of paging with `get()`: 1 m 46 s down to 3.4 s on a 160k-drawer Qdrant palace. (#2153, #2154)

### Bug Fixes

- **The transcript-path fallback no longer gives every git worktree its own wing.** `_wing_from_transcript_path`'s primary path (reading `cwd` from the JSONL) already collapsed a `<project>/.claude/worktrees/<wt>` segment before deriving the wing; the fallback path, used whenever `cwd` is absent, had no equivalent strip, so the flattened `--claude-worktrees-<wt>` segment survived into the wing name. Applied the same collapse there. (#2388, #2454)
- **`mempalace mine --daemon` no longer mines the daemon's own working directory instead of the caller's.** The daemon is a long-lived background process that keeps whatever cwd it happened to start with, so a relative source (`mempalace mine .`) submitted to it resolved against that stale cwd rather than the directory the CLI call actually ran from, silently mining the wrong project into the wrong wing on every subsequent hook-driven call. `cmd_mine` now resolves the source to an absolute path before it enters the daemon job payload, matching the resolution `_forward_mine_to_hub` already does for the hub-forwarding path. (#2441, #2467)
- **`mempalace init` no longer replaces a `known_entities.json` it could not read with the entities of that one run.** The merge reads the registry, falls back to an empty dict when the read does not conclude, and rewrites the file whole, so a registry holding four categories became one holding `people: 1`, measured, with `_load_known_entities` dropping from 10 names to 1 and `get_topics_by_wing` from two wings to none, while the command printed `Registry updated`. None of that needs an interrupted write: through the CLI, one `mempalace init` replaced a 28-byte JSON array and a 172-byte truncated object alike, and a registry re-saved in a legacy encoding ended the run in a traceback before any of it. The writer also truncates the file and serializes into it afterwards, so a killed run or a full disk leaves the same kinds of file. Reads now treat only `FileNotFoundError` as an absent registry. One that does not parse, whether from a truncated write, a byte that is not UTF-8, a hand-edit that lost a brace or a JSON array, is renamed aside and its new name printed before a fresh registry is written, and one that exists but cannot be read is left alone with a message rather than overwritten. The write itself goes through a temporary file and a rename, as `migrate._apply_topics_by_wing_renames` already did for this same file, so an interrupted run leaves the previous registry byte for byte. A byte that is not UTF-8 also stopped leaving `UnicodeDecodeError` out of the call, where `mempalace init` rendered it as a traceback. The call answers `None` when it wrote nothing, so `mempalace init` no longer prints `Registry updated` over a registry it left alone; a registry reached through a symlink is written through it rather than replaced; a directory that will not take a temporary file gets the merge in place with a message rather than a traceback; and a UTF-8 byte-order mark is no longer read as a parse failure. (#2358, #2359)
- **`repair-status` no longer reports a database it could not reach as one the palace never had.** `repair.status` drew that line with `os.path.isfile`, which follows symlinks and folds `OSError` and `ValueError` alike into False, so `Palace dir at … exists but has no chroma.sqlite3 yet` and `status: "uninitialized"` came back for a palace whose database sat intact behind a directory permission, for one whose name had become a broken symlink, and for a symlink loop — word for word what a palace that really has no database is told. What that sentence invites is a re-mine, which on the broken-symlink shape builds a second database beside the untouched first and leaves behind any drawer that has no source file to be re-derived from. Absence is now decided by `ENOENT` alone, the `_integrity_target_is_absent` predicate #2290 added, and an unreachable database no longer takes that early return: the capacity report below it answers for the palace instead, printing `sqlite count: (unreadable)` and `UNKNOWN`. A truly absent database still reports `uninitialized`. Getting past that gate puts one more state in front of the read: a named pipe, which `os.path.isfile` used to turn away and whose open parks in the kernel until a writer arrives — inside sqlite3, where the `O_NONBLOCK` answer `miner._read_text_no_follow` uses is not available. What keeps the read from parking is a type check next to the open itself, in `sqlite_drawer_count`; the gate above repeats it only so the operator is told which state this is instead of the `(unreadable)` a permission also produces, and a check at the gate alone would not do, because under a directory this process cannot enter its `stat` fails and answers False by design. No other type needs a case: a directory, a socket, a block device and a character device each answered with an error in well under a second, and landed in that same unreadable report. The printed answer and the returned dict are what change; the exit code was 0 for all of these before and still is. (#2293, #2393)
- **Layer 1 wake-up fetches the most recent drawers instead of an arbitrary scan window.** `BaseCollection.get_recent()` returns the newest N by `filed_at`; pgvector overrides it with an `ORDER BY ... DESC LIMIT n` pushdown (capability token `supports_recency_order`), and backends without pushdown keep the previous scan-and-sort behavior. On palaces larger than the 2,000-drawer scan cap, wake-up no longer leads with the oldest backfill. Ordering is on the stored `filed_at` text, the same comparison Layer 1 has used since #1630. (#1630, #2168)
- **Checkpoints summarize the conversation, not the harness.** Text the tooling injects with `role: "user"` (slash-command expansion, local-command blocks, task notifications, skill preambles, pasted-image placeholders, interruption records) no longer becomes the checkpoint's `recent:` line. The match is anchored to the opening of the message, so a genuine message that quotes one of those wrappers anywhere after the first character is still summarized. (#2170)
- **The backend header sniff no longer drops the WAL writer's POSIX locks.** `detect()` and `_database_signature()` opened the palace database with a plain `open()` on nearly every MCP call; on POSIX, closing that descriptor released every `fcntl` lock the process held on the file, including the WAL writer's SHARED lock, so an external connection's clean close could checkpoint and unlink the live `-wal` / `-shm` from under it. The sniff no longer disturbs the process's locks. (#2471, #2472)
- **macOS no longer refuses every tool on a healthy WAL palace.** Apple's SQLite fails a read-only connection's first statement when the `-wal` / `-shm` sidecars are absent, which is the normal state before any process opens the palace, so the integrity gate reported the palace unreadable. That one case now takes a normal open; everything else keeps `mode=ro`. (#2489, #2490)
- **A malformed JSON-RPC request that carries an `id` gets an answer instead of silence.** A non-string `method` or non-object `params` raised inside dispatch, so stdio wrote nothing and HTTP closed the socket, leaving the client waiting on that `id` forever. Malformed envelopes now return `-32601` / `-32602`, and a dispatch failure returns `-32603`. `notifications/*` methods are still never answered, as before. (#2231, #2232)
- **`get_collection` refuses a collection name MemPalace never reads.** Any name other than the configured drawers collection and `mempalace_closets` raises `CollectionNameMismatchError` (a `ValueError`) instead of silently creating an orphan store that search, MCP and repair cannot see. Maintenance scripts can pass `_skip_name_check=True`. (#2347, #2446)
- **A stranded HNSW index is no longer reported as flush-lag.** When `index_metadata.pickle` is absent, two states that never resolve on their own are now named. A `hnsw:sync_threshold` the collection can never reach is reported as `flush_unreachable`, with how to force a flush, and vector search stays enabled. A replacement stub whose payload cannot hold the SQLite count is reported as `diverged`, with `mempalace repair` as the fix. Both need at least 2,000 embeddings (the stub case, a shortfall of at least 2,000), so smaller collections still get the flush-lag report. (#2435)
- **Impossible counts in an HNSW `header.bin` are rejected.** Astronomical capacities and element counts above capacity now feed segment health, startup quarantine and the capacity report before Chroma's native reader opens the segment. (#2146)
- **Caller-vector Chroma collections are created without an embedding function.** Chroma attached `DefaultEmbeddingFunction` when none was passed and persisted it in the schema, so a document-only write on a 3-dimensional collection tried to embed at 384 dimensions. Collections are now created and reopened EF-free, and fail closed if one is still exposed. (#2141)
- **Chroma systems owned by the backend are stopped before the shared cache is cleared.** On an external inode or mtime change the backend cleared Chroma's process-global system cache before closing its own clients, so the displaced `System.stop()` never ran. Clients the backend does not own, such as a directly constructed `PersistentClient`, are outside this fix. (#2421)
- **pgvector reconnects once when Postgres drops the pooled connection.** A server restart used to cost each long-lived client one `terminating connection due to administrator command` error. SQLSTATE class 57 and a closed handle retry once on a fresh connection; statement-level errors still propagate on the first attempt. (#2084)
- **CLI `search --wing` / `--room` recovers from Chroma's `Error finding id`.** It now uses the same filtered-query fallback as MCP search. (#2373, #2380)
- **An unparsed Codex rollout is no longer imported as raw JSON.** A rollout with `session_meta` that the installed parser cannot normalize is skipped with a logged reason and left eligible for a retry after a parser update; existing drawers are untouched. (#2469)
- **`mempalace_diary_read` sees entries past the first 10,000.** It pages through the agent's diary and keeps the newest `last_n`, and `total` is no longer capped. (#563, #2464)
- **A backend that fails to initialize is no longer reported as a peer writer.** Setup failures are reported separately from lease contention, with recovery guidance, and the light MCP client forwards writes to a live hub instead of first trying to take the local writer lease. (#2465)
- **A busy daemon keeps its registration.** `start_daemon` deleted `endpoint.json` and the pid file after one failed health probe, stranding a live daemon that still owned the palace lock. (#2442, #2473)
- **Stripping a leaked `PYTHONPATH` keeps the running interpreter's own site-packages.** An embedding host that put the venv's own `purelib` / `platlib` on `PYTHONPATH` lost its dependencies at import. (#2484, #2496)
- **A named pipe at `chroma.sqlite3` no longer stops the MCP server from answering.** The integrity probe opened the pipe for reading, which waits until a writer arrives, and gated tool calls, `mempalace_status`, `mempalace_reconnect` and `/statusz` all run it or wait behind it. Over stdio the first such call left the session answering nothing, `ping` included, until the idle watchdog ended the process; over HTTP those calls hung while `ping` and `/healthz` kept answering. The probe now refuses the pipe by type before any open, as `repair-status` already does, and reports it as an integrity error: gated tool calls get the `-32002` refusal naming it, and `python -m mempalace.repair rebuild` stops at the abort banner instead of hanging. (#2498)
- **Hooks run on fresh installs that keep their config under `~/.config/mempalace`.** Since #148 a new install writes its config and palace to the XDG config directory and never creates `~/.mempalace`, but the hooks' kill-switch only looked for `~/.mempalace`, so the Stop, PreCompact and SessionEnd hooks returned `{}` without saving anything: a fresh `mempalace init` followed by a PreCompact hook filed 0 drawers, against 20 once `~/.mempalace` existed. The kill-switch in `hooks_cli` and in the Antigravity shell hooks now also accepts the resolved config directory, and the shell hooks read `hooks.auto_save` from it. Existing installs behave exactly as before.
- **`mempalace wake-up` no longer reports a healthy palace as missing while a hub is running.** The L1–L3 layers opened the palace writable, and on the `sqlite_exact` backend a writable open takes the palace mine lock to initialise its schema. With a hub, daemon or mine holding that lock the open failed, and the swallowed exception printed "No palace found. Run: mempalace mine <dir>", inviting a pointless re-mine. The layers now ask for a read-only open, which `sqlite_exact` serves without the lock; ChromaDB ignores the option, but its collection open never took the mine lock. A lock conflict that does surface gets its own message instead of the missing-palace one.
- **A writable `mempalace serve` waits for a busy writer lease instead of restart-looping.** Startup refused with status `2` the moment another process held the palace writer lease, and under the systemd template's `Restart=always` that became a loop that never started, never gave up and never reached `failed`. The server now retries with backoff for `MEMPALACE_MCP_WRITER_WAIT_SECONDS` (default `120`, `0` refuses at once) and logs once when the wait starts; a backend or lock-directory failure still refuses immediately. The unit sets `RestartPreventExitStatus=2`, so a wait that runs out lands in `failed` with the reason in the journal, and the idle watchdog runs the registered cleanup before exiting, so `serverinfo.json` no longer advertises a dead PID. (#2500, #2501)
- **`mempalace daemon start` and `stop` recover from a stale registration.** The #2442 guard refused to start while the registered pid was alive, and after a crash that pid can belong to an unrelated process, so start refused forever; the suggested `mempalace daemon stop` used the same failing health probe and did nothing. A registered pid that is dead, or whose process started after the registration was written, is now treated as stale: `start` replaces it and `stop` removes it. A live daemon that does not answer keeps its registration, a foreground start refuses beside it as a background one does, and both commands name the process to stop. (#2522)

### Documentation

- **Codex plugin install instructions use the built-in marketplace.** (#2372)

---

**Install / upgrade**

```bash
pip install --upgrade mempalace        # or: uv tool upgrade mempalace / pipx upgrade mempalace
```

Optional native exact-vector search: the `mempalace_native_core` wheels and standalone `mempalace-native` executables are attached to this release (see `crates/README.md`).


A big thank-you to everyone who contributed. This release includes 63 merged PRs: 60 from 20 contributors, twelve of them first-time, plus three Dependabot bumps.

**Install:** `pip install -U mempalace==3.10.0`

## What's Changed
* feat(mcp): Lightweight MCP Server with Palace Query Language (PQL) & Principled Retrieval Engine by @igorls in https://github.com/MemPalace/mempalace/pull/2412
* feat: add optional Rust exact-search backend and native CLI by @igorls in https://github.com/MemPalace/mempalace/pull/2444
* fix(mcp): distinguish writer setup failures and forward writes to hub by @igorls in https://github.com/MemPalace/mempalace/pull/2465
* fix(daemon): keep a live daemon's registration when the health probe fails by @L4XB in https://github.com/MemPalace/mempalace/pull/2473
* fix: paginate diary reads past 10k entries by @Formatted in https://github.com/MemPalace/mempalace/pull/2464
* refactor(mcp): split mcp_server.py into a package by @igorls in https://github.com/MemPalace/mempalace/pull/2485
* refactor(cli): split cli.py into a package by @igorls in https://github.com/MemPalace/mempalace/pull/2486
* chore(deps-dev): bump ruff from 0.16.1 to 0.16.6 by @dependabot[bot] in https://github.com/MemPalace/mempalace/pull/2483
* chore(deps): bump actions/download-artifact from 4 to 8 by @dependabot[bot] in https://github.com/MemPalace/mempalace/pull/2482
* chore(deps): bump actions/upload-artifact from 4 to 7 by @dependabot[bot] in https://github.com/MemPalace/mempalace/pull/2481
* ci: sync ruff pins in ci.yml and pre-commit with pyproject.toml (0.16.6) by @igorls in https://github.com/MemPalace/mempalace/pull/2487
* perf(hallways): scope the drawer fetch to the wing instead of walking the palace by @L4XB in https://github.com/MemPalace/mempalace/pull/2477
* fix(hooks): collapse worktree segment in transcript-path wing fallback by @AmirF194 in https://github.com/MemPalace/mempalace/pull/2454
* test(mcp): split test_mcp_server.py into domain files by @igorls in https://github.com/MemPalace/mempalace/pull/2488
* ci: pin GitHub Actions to immutable commit SHAs for CI/CD best practices by @vibemasshq-dev in https://github.com/MemPalace/mempalace/pull/2479
* fix: reject raw fallback for unparsed Codex rollouts by @jdorado in https://github.com/MemPalace/mempalace/pull/2469
* test(init): make leaked-PYTHONPATH test layout-agnostic (#2460) by @BuboTheWise in https://github.com/MemPalace/mempalace/pull/2461
* test(config): skip EPERM rewrite test on Windows by @BuboTheWise in https://github.com/MemPalace/mempalace/pull/2455
* fix(ci): isolate MCP writer-lock state between tests by @fatkobra in https://github.com/MemPalace/mempalace/pull/2422
* fix(chroma): release systems before cache reset by @fatkobra in https://github.com/MemPalace/mempalace/pull/2421
* fix(repair): prove an absent database by ENOENT, not by isfile (#2293) by @mvalentsev in https://github.com/MemPalace/mempalace/pull/2393
* fix(search): reuse filtered-query fallback in CLI by @MichaelWave369 in https://github.com/MemPalace/mempalace/pull/2380
* fix(miner): keep a known_entities.json the merge could not read (#2358) by @mvalentsev in https://github.com/MemPalace/mempalace/pull/2359
* fix(sqlite): read a WAL palace whose sidecars are gone by @L4XB in https://github.com/MemPalace/mempalace/pull/2490
* fix(mcp): answer every JSON-RPC request that carries an id (#2231) by @mvalentsev in https://github.com/MemPalace/mempalace/pull/2232
* fix(hooks): skip harness boilerplate in the checkpoint recent: line by @ATKabli in https://github.com/MemPalace/mempalace/pull/2170
* feat(drawers): track last_modified timestamps by @fatkobra in https://github.com/MemPalace/mempalace/pull/2147
* fix(repair): anchor the FTS5 classifier, attribute integrity verdicts (#2240) by @mvalentsev in https://github.com/MemPalace/mempalace/pull/2254
* fix(palace): fail loudly on a mismatched get_collection name (fixes #2347) by @BuboTheWise in https://github.com/MemPalace/mempalace/pull/2446
* feat: make hybrid-rank vector/BM25 weights configurable (#2298) by @BuboTheWise in https://github.com/MemPalace/mempalace/pull/2430
* feat(pgvector): shared namespace for multi-node fleets on one database by @ATKabli in https://github.com/MemPalace/mempalace/pull/2167
* fix(chroma): reject impossible HNSW header counts by @fatkobra in https://github.com/MemPalace/mempalace/pull/2146
* refactor: remove seven unused helpers by @Vinv-AI in https://github.com/MemPalace/mempalace/pull/2386
* refactor(search): split searcher.py into a package by @igorls in https://github.com/MemPalace/mempalace/pull/2492
* fix(chroma): persist EF-free caller-vector schema by @fatkobra in https://github.com/MemPalace/mempalace/pull/2141
* fix(layers): fetch the most recent drawers for L1 wake-up by @ATKabli in https://github.com/MemPalace/mempalace/pull/2168
* fix(pgvector): reconnect once when the server drops the pooled connection by @messelink in https://github.com/MemPalace/mempalace/pull/2084
* fix(hnsw): detect stranded indexes instead of reporting them as flush-lag by @Vanguadm in https://github.com/MemPalace/mempalace/pull/2435
* feat(dynamics): add read-time effective_strength, and correct the module docstring by @scotmcc in https://github.com/MemPalace/mempalace/pull/2416
* docs(plugins): Revise README for MemPalace Codex plugin installation by @tanji in https://github.com/MemPalace/mempalace/pull/2372
* fix(status): wire CLI status() to get_all_metadata() fast path (#2153) by @javapacr in https://github.com/MemPalace/mempalace/pull/2154
* fix: expose content-date provenance in search results by @jason-allen-oneal in https://github.com/MemPalace/mempalace/pull/2453
* perf(qdrant): walk the cursor once for list_drawers and graph_stats by @L4XB in https://github.com/MemPalace/mempalace/pull/2474
* test(logstream): assert the idle deadline caps the poll without a clock by @L4XB in https://github.com/MemPalace/mempalace/pull/2491
* refactor(palace): split palace.py into a package by @igorls in https://github.com/MemPalace/mempalace/pull/2494
* fix(mcp): stop peer sync thread and bind logstream path to avoid test flake by @igorls in https://github.com/MemPalace/mempalace/pull/2495
* fix(mine): resolve relative daemon source against the caller's cwd by @AmirF194 in https://github.com/MemPalace/mempalace/pull/2467
* feat(kg): paginate kg_timeline with limit/offset (list_drawers convention) by @raman325 in https://github.com/MemPalace/mempalace/pull/2406
* feat: support XDG Base Directory Specification (closes #46) by @mvalentsev in https://github.com/MemPalace/mempalace/pull/148
* feat(cli): apply shared daemon write-routing policy by @fatkobra in https://github.com/MemPalace/mempalace/pull/2033
* fix(init): keep this environment's own paths when stripping leaked PYTHONPATH by @L4XB in https://github.com/MemPalace/mempalace/pull/2496
* fix(storage): stop header sniff from dropping the writer's POSIX locks by @felixmurphybox-dot in https://github.com/MemPalace/mempalace/pull/2472
* feat(coord): add context-aware ordering and expose pagination parameters in light MCP by @igorls in https://github.com/MemPalace/mempalace/pull/2497
* fix(repair): refuse a named pipe in the integrity probe (#2498) by @mvalentsev in https://github.com/MemPalace/mempalace/pull/2499
* fix(hooks): let the kill-switch accept the XDG config directory by @igorls in https://github.com/MemPalace/mempalace/pull/2504
* docs(changelog): consolidate unreleased entries for the next release by @igorls in https://github.com/MemPalace/mempalace/pull/2503
* feat(dsh): add the MemPalace plugin for the DeepSeek Harness by @igorls in https://github.com/MemPalace/mempalace/pull/2505
* feat(rules): host:harness:project identity and MCP-shape aware shared-brain rules by @igorls in https://github.com/MemPalace/mempalace/pull/2508
* fix(hooks): expand a leading ~ in the shell config-dir resolver by @igorls in https://github.com/MemPalace/mempalace/pull/2509
* test(storage): wait for the writer lock to release after close by @igorls in https://github.com/MemPalace/mempalace/pull/2512
* fix(mcp): run the registered cleanup when the idle watchdog exits by @L4XB in https://github.com/MemPalace/mempalace/pull/2501
* fix(mcp): wait for a busy writer lease before refusing HTTP startup by @igorls in https://github.com/MemPalace/mempalace/pull/2516
* chore(release): 3.10.0 by @igorls in https://github.com/MemPalace/mempalace/pull/2518
* fix(daemon): recover start and stop from a stale registration by @igorls in https://github.com/MemPalace/mempalace/pull/2522
* chore: sync main into develop before the v3.10.0 promotion by @igorls in https://github.com/MemPalace/mempalace/pull/2523
* release: promote v3.10.0 to main by @igorls in https://github.com/MemPalace/mempalace/pull/2519

## New Contributors
* @L4XB made their first contribution in https://github.com/MemPalace/mempalace/pull/2473
* @Formatted made their first contribution in https://github.com/MemPalace/mempalace/pull/2464
* @vibemasshq-dev made their first contribution in https://github.com/MemPalace/mempalace/pull/2479
* @jdorado made their first contribution in https://github.com/MemPalace/mempalace/pull/2469
* @BuboTheWise made their first contribution in https://github.com/MemPalace/mempalace/pull/2461
* @Vinv-AI made their first contribution in https://github.com/MemPalace/mempalace/pull/2386
* @Vanguadm made their first contribution in https://github.com/MemPalace/mempalace/pull/2435
* @scotmcc made their first contribution in https://github.com/MemPalace/mempalace/pull/2416
* @tanji made their first contribution in https://github.com/MemPalace/mempalace/pull/2372
* @javapacr made their first contribution in https://github.com/MemPalace/mempalace/pull/2154
* @jason-allen-oneal made their first contribution in https://github.com/MemPalace/mempalace/pull/2453
* @felixmurphybox-dot made their first contribution in https://github.com/MemPalace/mempalace/pull/2472

**Full Changelog**: https://github.com/MemPalace/mempalace/compare/v3.9.0...v3.10.0

---

> **Source** [MemPalace/mempalace](https://github.com/MemPalace/mempalace) · `v3.10.0` · 2026-09-16 · [upstream release](https://github.com/MemPalace/mempalace/releases/tag/v3.10.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
