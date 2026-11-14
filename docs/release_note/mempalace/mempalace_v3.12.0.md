---
title: "mempalace v3.12.0"
project: "mempalace"
repo: "MemPalace/mempalace"
tag: "v3.12.0"
version: "v3.12.0"
published: "2026-11-12"
type: "minor"
lang: "en"
summary: "MemPalace 3.12 keeps source text and bytes intact, makes interrupted re-mines recoverable, and cuts the work needed to maintain large palaces. Timestamps and project wings now follow the same rules across tools and…"
---

# mempalace v3.12.0

MemPalace 3.12 keeps source text and bytes intact, makes interrupted re-mines recoverable, and cuts the work needed to maintain large palaces. Timestamps and project wings now follow the same rules across tools and hooks. Antigravity gains a visual Palace explorer, and the final release review fixes graph identity collisions, concurrent checkpoint duplicates, document filtering, and newest-first pagination.

### Upgrade notes

- **Python 3.10 or newer is required.** Python 3.9 is no longer supported; native wheels use the Python 3.10+ ABI.
- **The next mine re-reads each source it covers once.** Normalization version 3 picks up the parsing and byte-preservation fixes. Drawers whose text is unchanged reuse their stored vectors; unchanged files keep their closets and AAAK summaries. Sources no longer on disk keep their existing drawers. Back up a large palace before upgrading and allow time for this first pass. ([#2813](https://github.com/MemPalace/mempalace/pull/2813))
- **Hallways migrate to SQLite on the first hallway write.** `hallways.json` is imported transactionally into `hallways.sqlite3` and retained under an `.imported-*` name. Upgrade every installation sharing the palace, since older versions keep writing the old JSON file. After a downgrade, rebuild derived hallways with `mempalace hallways --rebuild`. ([#2895](https://github.com/MemPalace/mempalace/pull/2895))
- **New timestamps carry an explicit UTC offset.** Legacy naive timestamps are read as local time, as they were written; existing metadata is not rewritten. Date-only filters still mean local calendar dates. Project wings also use one slug rule across CLI, MCP, mining and hooks; filters continue finding stored legacy spellings. ([#2851](https://github.com/MemPalace/mempalace/pull/2851), [upgrade details](https://github.com/MemPalace/mempalace/blob/main/CHANGELOG.md#upgrade-notes))
- **Local HTTP hubs can run without a token; network access requires one.** Plain loopback binds remain tokenless by default, with browser-origin, Host and proxy-header checks. Configure a token whenever a proxy or tunnel forwards traffic to the hub. Every `POST /mcp` now requires `Content-Type: application/json`.
- **Rename `closet_llm` environment variables** from `LLM_ENDPOINT`, `LLM_MODEL` and `LLM_KEY` to `MEMPALACE_LLM_ENDPOINT`, `MEMPALACE_LLM_MODEL` and `MEMPALACE_LLM_KEY`. External LLM endpoints require explicit consent. `mempalace.dedup` and `mempalace.onboarding` are removed; use `mempalace init --embedding-model ...` for embedder setup. ([#2773](https://github.com/MemPalace/mempalace/pull/2773))
- **PQL search filters use upper-case keywords.** Write `FIND auth IN backend`; lower-case `in`, `limit`, `source`, `since` and `before` stay part of the search text. `mempalace_search` also drops its default distance cutoff; pass `max_distance` explicitly when wanted. ([#2725](https://github.com/MemPalace/mempalace/pull/2725), [full upgrade notes](https://github.com/MemPalace/mempalace/blob/main/CHANGELOG.md#upgrade-notes))

### Source fidelity and recoverable writes

- **Conversation mining stores user turns as written.** Spell correction is off by default. ChatGPT imports follow the active conversation branch, repeated exports keep drawers under each source file, Claude messages retain their blank lines, and Gemini text parts join as their clients intended. Parsing steps that remove or change content are recorded in `transforms` metadata. ([#2790](https://github.com/MemPalace/mempalace/pull/2790), [#2796](https://github.com/MemPalace/mempalace/pull/2796), [#2800](https://github.com/MemPalace/mempalace/pull/2800))
- **Non-UTF-8 source bytes survive mining and export.** Encoding metadata permits exact reconstruction. MCP clients receive JSON-compatible display text, while `mempalace_get_drawer` with `include_source_bytes: true` returns exact drawer source bytes as base64. NUL characters and lone surrogates round-trip through storage. ([#2802](https://github.com/MemPalace/mempalace/pull/2802))
- **Re-mining writes replacement drawers before pruning the old ones.** A failed write leaves recoverable text, and the next mine completes interrupted publication. Diary ingestion uses the same ordering; unreadable mining state now stops the run instead of being mistaken for an empty palace. ([#2798](https://github.com/MemPalace/mempalace/pull/2798))
- **Drawer updates preserve the text they replace.** Prior text and metadata are appended and synced to `drawer_revisions.jsonl` before replacement; a failed revision write leaves the original drawer intact. Deletes remove the corresponding revision history. PQL drawer and diary writes also preserve literal escapes, spacing and numeric-looking content. ([#2866](https://github.com/MemPalace/mempalace/pull/2866), [#2772](https://github.com/MemPalace/mempalace/pull/2772))
- **`mempalace export <dir>` exports wings and rooms as Markdown.** Backend migration and repair preserve graph data, closets and sidecars. ([#2779](https://github.com/MemPalace/mempalace/pull/2779))

### Performance and large palaces

- **`sqlite_exact` writes stop scanning the full-text index.** On the measured 336,000-row palace, adding 50 drawers dropped from about 10 seconds to 10 milliseconds. Existing palaces repair mismatched full-text row IDs once on their next writable open. ([#2744](https://github.com/MemPalace/mempalace/pull/2744))
- **Hallway updates touch the affected wing and changed records.** On a copied 228,000-drawer palace with 830,000 hallways, the measured wing re-mine dropped from about 20 seconds to 1–4 seconds, and peak memory from 3.8 GB to about 150 MB. A first-time JSON import still has a one-off cost. ([#2895](https://github.com/MemPalace/mempalace/pull/2895))
- **Indexed newest-first reads speed up wake-up and browsing.** On the measured 150,000-drawer `sqlite_exact` palace, a 2,000-drawer recency read dropped from 1.5 seconds to 80 milliseconds, or from 5 seconds to 60 milliseconds when scoped to a wing. SQLiteExact and Qdrant metadata iteration also avoid repeated offset scans.
- **Hooks spend less time in the foreground.** Stop-hook diary saves run in the background, wake-up avoids importing the search stack until needed, and stdio MCP servers release the peer-writer lease after each mutating call so another session can write. ([#2769](https://github.com/MemPalace/mempalace/pull/2769), [#2909](https://github.com/MemPalace/mempalace/pull/2909))

### Antigravity Palace explorer

- **A bundled Aux Pane extension brings Recall, Palace, Graph and Logstream views into Antigravity.** Browse wings, rooms and tunnels, inspect verbatim drawers, explore active and historical KG facts, and follow coordination events and diaries. Recall supports lexical, hybrid and vector search, with Cite in Chat and Open File actions. ([#2983](https://github.com/MemPalace/mempalace/pull/2983))
- **The canonical plugin bundle lives at `plugins/mempalace`.** It includes the MCP configuration, recall rules and skills, plus cross-platform Node.js save and wake-up hooks. Install from a checkout with `agy plugin install ./plugins/mempalace`; the Python package remains a prerequisite. See the [Antigravity guide](https://github.com/MemPalace/mempalace/blob/main/website/guide/antigravity.md). ([#2984](https://github.com/MemPalace/mempalace/pull/2984))

### Correctness fixes from the release review

- **Legacy graph imports preserve entity identity.** Preview and apply compare canonical names, remap dependent subject and object references consistently, and report unresolved conflicts and skipped facts. The `O'Brien` / `OBrien` and `my_project` / `my project` collision cases have regression tests, including persistence after reopening. ([#2985](https://github.com/MemPalace/mempalace/pull/2985))
- **Concurrent checkpoints cannot invalidate each other's duplicate decision.** Duplicate checking and drawer publication remain serialized, preventing the same memory from being saved twice into different rooms during embedding. A controlled concurrent-save regression covers the race. ([#2985](https://github.com/MemPalace/mempalace/pull/2985))
- **Chroma document filters evaluate original text.** Escaped storage no longer hides matching Windows paths or creates matches on encoding markers. Filtering preserves vector-query order and applies pagination after checking decoded text. ([#2985](https://github.com/MemPalace/mempalace/pull/2985))
- **Palace viewer pages remain newest-first throughout the result set.** The selected page is hydrated in the requested order, and a Chroma fallback reads all matching metadata before slicing. Regression tests cover both the supplied pagination cases and 1,501 distinct drawers when the optimized reader is unavailable or locked. ([#2992](https://github.com/MemPalace/mempalace/pull/2992))
- **The Chroma warning regression ignores unrelated cleanup warnings.** The CI probe checks the intended warning by category and message. ([#2987](https://github.com/MemPalace/mempalace/pull/2987))

### Other fixes and security

- **Knowledge graph tools share one path resolver.** Reads no longer silently switch graphs or create an empty graph. `mempalace kg import-legacy` previews an explicit import and applies it with `--yes`; `--from` selects a source. New entity IDs preserve punctuation, re-adding an entity merges properties, and identical historical assertions deduplicate. ([#2850](https://github.com/MemPalace/mempalace/pull/2850), [#2770](https://github.com/MemPalace/mempalace/pull/2770), [#2605](https://github.com/MemPalace/mempalace/pull/2605))
- **Newer Codex rollouts are mined again**, hub-routed diary checkpoints work while the hub owns the writer lease, and finished hook mines release their PID slots. Repair rebuilds verify FTS5 integrity and preserve the coordination log. ([#2947](https://github.com/MemPalace/mempalace/pull/2947), [#2625](https://github.com/MemPalace/mempalace/pull/2625), [#2943](https://github.com/MemPalace/mempalace/pull/2943), [#2738](https://github.com/MemPalace/mempalace/pull/2738))
- **Model providers handle current reasoning-model parameters.** Anthropic calls omit the rejected default temperature; OpenAI-compatible reasoning calls retry without rejected parameters and use the required completion-token field. ([#2964](https://github.com/MemPalace/mempalace/pull/2964), [#2924](https://github.com/MemPalace/mempalace/pull/2924))
- **Hooks, daemon children and `serve` exclude working-directory imports.** Project configuration writes refuse symbolic links, ignore matching has bounded complexity, and state files publish through fresh temporary files with Windows-safe retries.
- **Credentials stay out of redirects and diagnostic text.** HTTP clients refuse redirects carrying credentials, endpoint userinfo and sensitive query parameters are masked, and external model calls require explicit consent. ([#2858](https://github.com/MemPalace/mempalace/pull/2858), [#2959](https://github.com/MemPalace/mempalace/pull/2959))
- **MCP and sync boundaries enforce their intended checks.** Light-server actions are allowlisted, daemon tool jobs use the dispatcher gates, and peer events and artifacts are validated before storage. Windows hubs reserve their port exclusively, and writers also contend for a palace-adjacent lock across different home directories.
- **Locked dependencies receive advisory fixes**, including urllib3, Pillow, pydantic-settings and virtualenv. Package requirements remain unchanged. ([#2960](https://github.com/MemPalace/mempalace/pull/2960))

---

**Install / upgrade**

```bash
pip install --upgrade mempalace==3.12.0
# or: uv tool upgrade mempalace / pipx upgrade mempalace
```

Optional EmbeddingGemma 2 and media search remain available through `mempalace[embeddinggemma2]` and `mempalace[multimodal]`. Native wheels and standalone executables are built by the release workflow; see the [native installation guide](https://github.com/MemPalace/mempalace/blob/main/crates/README.md).

Thanks to everyone who contributed code, bug reports and release reviews, including the 18 first-time contributors listed below. This release includes 163 merged pull requests. Special thanks to @milla-jovovich for the release review and pagination patch.

## What's Changed
* perf(sqlite-exact): synchronize docs_fts.rowid with documents.rowid for O(log N) writes by @igorls in https://github.com/MemPalace/mempalace/pull/2744
* fix(sqlite_exact): retire immutable readers after every commit by @igorls in https://github.com/MemPalace/mempalace/pull/2753
* ci: single-source the coverage threshold by @igorls in https://github.com/MemPalace/mempalace/pull/2754
* fix(cli): serve keeps the global --palace flag by @igorls in https://github.com/MemPalace/mempalace/pull/2758
* fix(proc): share one pid_alive across daemon, hooks, and registry by @igorls in https://github.com/MemPalace/mempalace/pull/2761
* fix(mcp): record tunnel crossings without the writer lease by @igorls in https://github.com/MemPalace/mempalace/pull/2768
* fix(general_extractor): keep paragraphs that match no keyword by @igorls in https://github.com/MemPalace/mempalace/pull/2774
* fix(split): keep the preamble, short sessions, and colliding names by @igorls in https://github.com/MemPalace/mempalace/pull/2776
* fix(convo_miner): stamp the mtime from the read, not a later stat by @igorls in https://github.com/MemPalace/mempalace/pull/2777
* perf(layers): wake up without importing the search stack by @igorls in https://github.com/MemPalace/mempalace/pull/2769
* fix(search): return closet hits as their own drawers by @igorls in https://github.com/MemPalace/mempalace/pull/2771
* fix(pql): keep stored content text opaque by @igorls in https://github.com/MemPalace/mempalace/pull/2772
* fix(kg): keep punctuation in entity ids and merge properties on re-add by @igorls in https://github.com/MemPalace/mempalace/pull/2770
* fix(llm): refuse silent calls to external endpoints by @igorls in https://github.com/MemPalace/mempalace/pull/2773
* fix(migrate): keep closets, the graph, and sidecars across a verified swap by @igorls in https://github.com/MemPalace/mempalace/pull/2779
* fix(format_miner): hold the palace lock and keep failed rewrites recoverable by @igorls in https://github.com/MemPalace/mempalace/pull/2775
* fix(hermes): use the palace write path and diary drawers by @igorls in https://github.com/MemPalace/mempalace/pull/2759
* fix(mcp-light): allowlist palace targets and answer stdio errors by @igorls in https://github.com/MemPalace/mempalace/pull/2765
* fix(service): route mcp_tool jobs through the dispatcher gates by @igorls in https://github.com/MemPalace/mempalace/pull/2764
* fix(mcp-http): lock the node profile and publish one integrity verdict by @igorls in https://github.com/MemPalace/mempalace/pull/2766
* refactor(mcp): derive tool capability sets from one registry by @igorls in https://github.com/MemPalace/mempalace/pull/2763
* fix(fsio): publish config through one Windows-safe atomic writer by @igorls in https://github.com/MemPalace/mempalace/pull/2778
* ci: run the test workflow on every pull request by @igorls in https://github.com/MemPalace/mempalace/pull/2788
* fix(hooks): legacy bash hooks delegate to hook run by @igorls in https://github.com/MemPalace/mempalace/pull/2762
* fix(backends): keep serializable metadata and publish markers atomically by @igorls in https://github.com/MemPalace/mempalace/pull/2783
* test(format_miner): compare the stored mtime with the miner's 1 ms tolerance by @igorls in https://github.com/MemPalace/mempalace/pull/2789
* perf(hooks): move the Stop diary save off the foreground by @igorls in https://github.com/MemPalace/mempalace/pull/2760
* fix(mine): stop the mine when the mined set cannot be read by @igorls in https://github.com/MemPalace/mempalace/pull/2791
* fix(search): no default distance cutoff, one cosine scale, keep unscored BM25 hits by @igorls in https://github.com/MemPalace/mempalace/pull/2792
* fix: refuse to overwrite a state file that did not parse by @igorls in https://github.com/MemPalace/mempalace/pull/2782
* perf(pgvector): look up ids with the primary key by @igorls in https://github.com/MemPalace/mempalace/pull/2781
* fix(mcp): keep a recoverable copy before update_drawer overwrites by @igorls in https://github.com/MemPalace/mempalace/pull/2767
* fix(convo): keep user turns as written; ChatGPT active branch; Slack null user by @igorls in https://github.com/MemPalace/mempalace/pull/2790
* fix(storage): escape NUL and lone surrogates reversibly by @igorls in https://github.com/MemPalace/mempalace/pull/2780
* fix(convo): stamp lossy parsing steps on every drawer of the file by @igorls in https://github.com/MemPalace/mempalace/pull/2796
* fix(hub): derive search forwarding and the hub fingerprint from one settings table by @igorls in https://github.com/MemPalace/mempalace/pull/2797
* refactor(mine): file every miner's drawers through one write-then-prune path by @igorls in https://github.com/MemPalace/mempalace/pull/2798
* fix(search): keep the closet boost through the hybrid rank and on the cosine scale by @igorls in https://github.com/MemPalace/mempalace/pull/2795
* fix(convo): file a conversation under every file that holds it by @igorls in https://github.com/MemPalace/mempalace/pull/2800
* fix(embedding): embed a bare string as one document and retry a failed dimension probe by @igorls in https://github.com/MemPalace/mempalace/pull/2803
* fix(init): record only explicit choices and name every project file once by @igorls in https://github.com/MemPalace/mempalace/pull/2805
* fix(compress): store AAAK summaries in their own collection, not the closets by @igorls in https://github.com/MemPalace/mempalace/pull/2801
* fix(repair): run the max_seq_id repair under the palace lease and hoist id-set rebuilds by @igorls in https://github.com/MemPalace/mempalace/pull/2807
* fix(mine): decode source files without turning bytes into U+FFFD by @igorls in https://github.com/MemPalace/mempalace/pull/2802
* fix: two order-dependent test failures, one of them a Windows cache-write bug by @igorls in https://github.com/MemPalace/mempalace/pull/2808
* fix(mcp): validate tool arguments at dispatch and require an HTTP token by default by @igorls in https://github.com/MemPalace/mempalace/pull/2806
* test(stray-bytes): serve the loopback hub tokenless now that the token is on by default by @igorls in https://github.com/MemPalace/mempalace/pull/2812
* fix(embedding): keep a recorded dimension when the probe fails for the same model by @igorls in https://github.com/MemPalace/mempalace/pull/2814
* fix(init): record a backend chosen with MEMPALACE_BACKEND by @igorls in https://github.com/MemPalace/mempalace/pull/2815
* fix(proxy): keep a search local when this session chose its own settings by @igorls in https://github.com/MemPalace/mempalace/pull/2816
* refactor(palace): purge what drawers leave behind through one drawers_removed helper by @igorls in https://github.com/MemPalace/mempalace/pull/2817
* fix(backends): update skips missing ids, and wake-up reads recent memories within its budget by @igorls in https://github.com/MemPalace/mempalace/pull/2804
* feat(mine): re-read every source once for the parsing fixes, reusing unchanged vectors by @igorls in https://github.com/MemPalace/mempalace/pull/2813
* refactor(diary): rebuild a diary through the shared write-then-prune path by @igorls in https://github.com/MemPalace/mempalace/pull/2818
* fix: honest graph errors, a sanitizer that says what it changed, typed bookkeeping metadata by @igorls in https://github.com/MemPalace/mempalace/pull/2809
* fix(lock): ride out Windows delete-pending opens and wait past LK_LOCK's ten tries by @igorls in https://github.com/MemPalace/mempalace/pull/2820
* fix(fsio): retry renames a Windows reader blocks, and fail fast on a lasting lock-file denial by @igorls in https://github.com/MemPalace/mempalace/pull/2822
* fix(serve): keep a local-only loopback hub tokenless, and harden it against proxies and browsers by @igorls in https://github.com/MemPalace/mempalace/pull/2821
* fix: keep bookkeeping rows out of user-facing readers, and keep chat whitespace and Gemini parts as written by @igorls in https://github.com/MemPalace/mempalace/pull/2823
* fix(mine): read stored vectors only for unchanged drawers, and re-embed if the read fails by @igorls in https://github.com/MemPalace/mempalace/pull/2824
* chore(lint): sort imports and drop unused noqa marks (ruff stage 0) by @igorls in https://github.com/MemPalace/mempalace/pull/2825
* ci: fail the Rust job on clippy warnings by @igorls in https://github.com/MemPalace/mempalace/pull/2828
* chore(search): drop dead closet helpers and PR-history comments by @igorls in https://github.com/MemPalace/mempalace/pull/2830
* refactor: remove dedup.py and clean the backend and palace comments by @igorls in https://github.com/MemPalace/mempalace/pull/2829
* chore: drop dead helpers and PR-history comments in the remaining modules by @igorls in https://github.com/MemPalace/mempalace/pull/2833
* chore(mine): drop dead helpers and PR-history comments in the miners by @igorls in https://github.com/MemPalace/mempalace/pull/2834
* chore(mcp): drop dead code and PR-history comments in the MCP server area by @igorls in https://github.com/MemPalace/mempalace/pull/2831
* chore(cli): wire mempalace export, drop onboarding.py, and clear dead code and PR-history notes by @igorls in https://github.com/MemPalace/mempalace/pull/2832
* test(layers): give the wake-up budget test headroom on slow CI runners by @igorls in https://github.com/MemPalace/mempalace/pull/2835
* chore: fail on PR and plan history in comments, docstrings and help text by @igorls in https://github.com/MemPalace/mempalace/pull/2836
* chore(lint): turn on bugbear, return and commented-out-code checks by @igorls in https://github.com/MemPalace/mempalace/pull/2837
* fix(update): retry a read that races a publish of the release cache by @igorls in https://github.com/MemPalace/mempalace/pull/2838
* refactor(hub): forward every hub call through one HubClient by @igorls in https://github.com/MemPalace/mempalace/pull/2842
* refactor(lexical): one tokenizer and BM25 scorer for the searcher and every backend by @igorls in https://github.com/MemPalace/mempalace/pull/2840
* refactor: write every durable state file through fsio by @igorls in https://github.com/MemPalace/mempalace/pull/2841
* refactor(hooks): one interpreter resolver for every hook wrapper by @igorls in https://github.com/MemPalace/mempalace/pull/2839
* refactor(backends): evaluate where filters through one shared _filters module by @igorls in https://github.com/MemPalace/mempalace/pull/2843
* refactor(backends): validate every write batch through one helper by @igorls in https://github.com/MemPalace/mempalace/pull/2846
* refactor(llm): parse every LLM reply and send every model request through llm_client by @igorls in https://github.com/MemPalace/mempalace/pull/2844
* refactor: one wing slug for every producer, and diary and ingest share the project wing by @igorls in https://github.com/MemPalace/mempalace/pull/2845
* refactor(env): parse environment variables through one shared helper by @igorls in https://github.com/MemPalace/mempalace/pull/2847
* refactor(chroma): one home for the raw-SQLite readers (backends/chroma_sqlite.py) by @igorls in https://github.com/MemPalace/mempalace/pull/2848
* refactor(paths): build every MemPalace state path through mempalace.paths by @igorls in https://github.com/MemPalace/mempalace/pull/2849
* refactor(kg): one knowledge graph path resolver; no silent graph switch, never merged by @igorls in https://github.com/MemPalace/mempalace/pull/2850
* refactor(timeutil): one timestamp helper; UTC writes, legacy-aware reads by @igorls in https://github.com/MemPalace/mempalace/pull/2851
* perf(sqlite_exact): push $in/$eq filters and index filed_at for get_recent by @igorls in https://github.com/MemPalace/mempalace/pull/2852
* refactor(logging): name module loggers by __name__ and share one warn-once helper by @igorls in https://github.com/MemPalace/mempalace/pull/2853
* chore: sync main into develop for 3.12.0 by @igorls in https://github.com/MemPalace/mempalace/pull/2856
* chore: require Python 3.10 (D-20) by @igorls in https://github.com/MemPalace/mempalace/pull/2855
* docs(changelog): cover every user-visible change since 3.11.0 by @igorls in https://github.com/MemPalace/mempalace/pull/2857
* fix(security): mask endpoint credentials in embedding and LLM errors by @igorls in https://github.com/MemPalace/mempalace/pull/2858
* chore(release): 3.12.0 by @igorls in https://github.com/MemPalace/mempalace/pull/2859
* fix(mine): keep --palace and media options on daemon-routed adapter mines by @igorls in https://github.com/MemPalace/mempalace/pull/2861
* Fix revision durability and graph import reporting by @milla-jovovich in https://github.com/MemPalace/mempalace/pull/2866
* fix(http): keep the hub's port exclusive on Windows by @igorls in https://github.com/MemPalace/mempalace/pull/2894
* perf(hallways): store hallways in SQLite so a mine touches only its wing by @igorls in https://github.com/MemPalace/mempalace/pull/2895
* chore(deps): bump pypa/gh-action-pypi-publish from 1.14.2 to 1.14.3 by @dependabot[bot] in https://github.com/MemPalace/mempalace/pull/2878
* perf(backends): add iter_metadata to sqlite_exact/qdrant and Qdrant scroll pagination by @igorls in https://github.com/MemPalace/mempalace/pull/2745
* fix(kg): don't cap the length of values the KG tools only look up by @messelink in https://github.com/MemPalace/mempalace/pull/2911
* fix(mcp): timestamp the log file and time every locked HTTP palace call by @BuboTheWise in https://github.com/MemPalace/mempalace/pull/2882
* fix(daemon): emit lifecycle and HTTP access lines to stdout/stderr (#2475) by @BuboTheWise in https://github.com/MemPalace/mempalace/pull/2607
* fix(repair-status): tell a healthy unflushed palace from one that lost its index by @L4XB in https://github.com/MemPalace/mempalace/pull/2525
* test(embeddinggemma2): skip scipy-dependent audio tests when scipy is absent by @BuboTheWise in https://github.com/MemPalace/mempalace/pull/2901
* test(daemon): lock #2673 module-level retention contract by @BuboTheWise in https://github.com/MemPalace/mempalace/pull/2896
* test(mcp): pin #2748 coexisting case-variant wing rename by @BuboTheWise in https://github.com/MemPalace/mempalace/pull/2883
* fix(mine): honour .git/info/exclude and skip .worktrees/.claude worktrees (#2599) by @BuboTheWise in https://github.com/MemPalace/mempalace/pull/2794
* fix(entities): honor entity_languages in extraction filters (#2811) by @jjcav84 in https://github.com/MemPalace/mempalace/pull/2881
* fix(hooks): derive the Codex wing from the rollout's payload.cwd by @JosefAschauer in https://github.com/MemPalace/mempalace/pull/2908
* fix(convo): select authored time by instant across UTC offsets by @shaun0927 in https://github.com/MemPalace/mempalace/pull/2869
* fix(miner): recognize registered entities in continuous CJK text by @shaun0927 in https://github.com/MemPalace/mempalace/pull/2870
* fix: report effective embedding devices and document GPU support by @igorls in https://github.com/MemPalace/mempalace/pull/2872
* fix(mcp): hold the peer-writer lease per call, not per process by @molanov in https://github.com/MemPalace/mempalace/pull/2909
* fix(mcp): give back embedder and heap memory after a mine by @davidemarchisio in https://github.com/MemPalace/mempalace/pull/2893
* test: the pathname2url surrogate boundary is 3.12, not 3.13 by @michael-gpu in https://github.com/MemPalace/mempalace/pull/2892
* fix(hooks): preserve valid path characters in Antigravity and Cursor stdin parsers by @LittlePeter52012 in https://github.com/MemPalace/mempalace/pull/2864
* fix(hooks): collapse <project>/.worktrees/<wt> into the project wing by @denysbutenko in https://github.com/MemPalace/mempalace/pull/2586
* fix(benchmarks): normalize LongMemEval NDCG against the full corpus by @monsterlag in https://github.com/MemPalace/mempalace/pull/2874
* fix(entity): add generic code terms to English stopwords (#476) by @leopechnicki in https://github.com/MemPalace/mempalace/pull/518
* fix: release the request lock around a checkpoint's embedding phases by @michael-gpu in https://github.com/MemPalace/mempalace/pull/2890
* fix: raise the MCP HTTP listen backlog above socketserver's default of 5 by @michael-gpu in https://github.com/MemPalace/mempalace/pull/2889
* fix(palace): lock the palace for writers with a different HOME by @0xdhx in https://github.com/MemPalace/mempalace/pull/2867
* fix(storage): use OFD locks on Linux even when fcntl lacks F_OFD_SETLK by @igorls in https://github.com/MemPalace/mempalace/pull/2918
* test: clear the developer's own MemPalace env for the test session by @messelink in https://github.com/MemPalace/mempalace/pull/2912
* fix(chroma): don't quarantine HNSW segments under a live writer by @neeraju in https://github.com/MemPalace/mempalace/pull/2906
* fix: Stop hook diary checkpoint always fails on sqlite_exact backend: "attempt to write a readonly database" by @nandanadileep in https://github.com/MemPalace/mempalace/pull/2898
* Forward mempalace sync to the live hub by @igorls in https://github.com/MemPalace/mempalace/pull/2919
* fix(kg): dedupe identical closed-interval add_triple replays (#2598) by @aashish254 in https://github.com/MemPalace/mempalace/pull/2605
* Docs: OpenClaw Skill Update by @ggettert in https://github.com/MemPalace/mempalace/pull/2237
* fix(recall): also listen on agent/created, so memory reaches DSH 0.2.x sessions by @In-Question in https://github.com/MemPalace/mempalace/pull/2876
* docs(changelog): finalize 3.12.0 release notes after triage merges by @igorls in https://github.com/MemPalace/mempalace/pull/2920
* fix: land Tier 1 release-blocker fixes before v3.12.0 (#2860) by @igorls in https://github.com/MemPalace/mempalace/pull/2938
* fix(miner): validate room names from mempalace.yaml by @igorls in https://github.com/MemPalace/mempalace/pull/2951
* fix(miner): validate the wing from mempalace.yaml by @igorls in https://github.com/MemPalace/mempalace/pull/2952
* fix(layers): fence stored memory in wake-up and Hermes prompts by @igorls in https://github.com/MemPalace/mempalace/pull/2946
* fix(hooks): clean up convos mine PID slot and bound shutdown (#2917) by @igorls in https://github.com/MemPalace/mempalace/pull/2943
* fix(hooks): report a checkpoint queued behind a running mine as queued, not failed by @L4XB in https://github.com/MemPalace/mempalace/pull/2826
* chore(deps): bump docker/login-action from 4.6.0 to 4.7.0 by @dependabot[bot] in https://github.com/MemPalace/mempalace/pull/2954
* chore(deps): bump actions/download-artifact from 8.0.1 to 8.0.2 by @dependabot[bot] in https://github.com/MemPalace/mempalace/pull/2786
* chore(deps): bump actions/upload-artifact from 7.0.1 to 7.0.2 by @dependabot[bot] in https://github.com/MemPalace/mempalace/pull/2785
* fix: close five pre-release security gaps found in the 3.12 audit by @igorls in https://github.com/MemPalace/mempalace/pull/2959
* fix(mcp): treat only upper-case PQL clause keywords as keywords by @Lesereingrape in https://github.com/MemPalace/mempalace/pull/2725
* fix(chroma): quarantine HNSW metadata only after stability checks (#2897) by @AdityaxDeore in https://github.com/MemPalace/mempalace/pull/2957
* fix(llm): retry reasoning models without the parameters they reject (#2914) by @devanshc777 in https://github.com/MemPalace/mempalace/pull/2924
* chore(deps): bump locked packages with published advisories by @igorls in https://github.com/MemPalace/mempalace/pull/2960
* fix(repair): gate the from-sqlite rebuild on FTS5's own integrity check (#2707) by @y16689540962-cloud in https://github.com/MemPalace/mempalace/pull/2738
* fix(hooks): file the save-hook diary checkpoint through a live hub by @Yi-111-a in https://github.com/MemPalace/mempalace/pull/2625
* ci: run the suite in parallel and cancel superseded PR runs (items A and B from #2961) by @igorls in https://github.com/MemPalace/mempalace/pull/2963
* test: keep the suite off the resolver (first item from #2961) by @igorls in https://github.com/MemPalace/mempalace/pull/2962
* fix(llm): stop sending temperature to Anthropic and raise its token budget by @igorls in https://github.com/MemPalace/mempalace/pull/2964
* test: stop the suite waiting on the kernel and the resolver by @igorls in https://github.com/MemPalace/mempalace/pull/2965
* fix(codex): read response_item messages from newer Codex rollouts by @thelastbackspace in https://github.com/MemPalace/mempalace/pull/2947
* test(dsh): wait on the hook queue instead of fixed ticks by @igorls in https://github.com/MemPalace/mempalace/pull/2968
* docs(changelog): fold Unreleased into 3.12.0 and date the release by @igorls in https://github.com/MemPalace/mempalace/pull/2969
* fix(mcp): bind the HTTP server without a reverse DNS lookup by @igorls in https://github.com/MemPalace/mempalace/pull/2966
* docs(changelog): fold the #2966 entry into 3.12.0 by @igorls in https://github.com/MemPalace/mempalace/pull/2970
* test(dsh): wait on the wake-up reads instead of fixed ticks by @igorls in https://github.com/MemPalace/mempalace/pull/2971
* test(chroma): hand the write lock over explicitly in the contention test by @igorls in https://github.com/MemPalace/mempalace/pull/2972
* feat(antigravity): add Aux Pane UI sidecar extension and build-plugins schema upgrade by @igorls in https://github.com/MemPalace/mempalace/pull/2983
* feat(antigravity): zero-touch Marketplace bundle (plugins/mempalace) & cross-platform Node hooks by @igorls in https://github.com/MemPalace/mempalace/pull/2984
* fix: address three 3.12 release regressions by @igorls in https://github.com/MemPalace/mempalace/pull/2985
* test: isolate Chroma warning probe from cleanup warnings by @igorls in https://github.com/MemPalace/mempalace/pull/2987
* fix: preserve newest-first Palace viewer pagination by @igorls in https://github.com/MemPalace/mempalace/pull/2992
* release: promote v3.12.0 to main by @igorls in https://github.com/MemPalace/mempalace/pull/2860

## New Contributors
* @molanov made their first contribution in https://github.com/MemPalace/mempalace/pull/2909
* @davidemarchisio made their first contribution in https://github.com/MemPalace/mempalace/pull/2893
* @michael-gpu made their first contribution in https://github.com/MemPalace/mempalace/pull/2892
* @LittlePeter52012 made their first contribution in https://github.com/MemPalace/mempalace/pull/2864
* @denysbutenko made their first contribution in https://github.com/MemPalace/mempalace/pull/2586
* @monsterlag made their first contribution in https://github.com/MemPalace/mempalace/pull/2874
* @leopechnicki made their first contribution in https://github.com/MemPalace/mempalace/pull/518
* @0xdhx made their first contribution in https://github.com/MemPalace/mempalace/pull/2867
* @neeraju made their first contribution in https://github.com/MemPalace/mempalace/pull/2906
* @nandanadileep made their first contribution in https://github.com/MemPalace/mempalace/pull/2898
* @aashish254 made their first contribution in https://github.com/MemPalace/mempalace/pull/2605
* @In-Question made their first contribution in https://github.com/MemPalace/mempalace/pull/2876
* @Lesereingrape made their first contribution in https://github.com/MemPalace/mempalace/pull/2725
* @AdityaxDeore made their first contribution in https://github.com/MemPalace/mempalace/pull/2957
* @devanshc777 made their first contribution in https://github.com/MemPalace/mempalace/pull/2924
* @y16689540962-cloud made their first contribution in https://github.com/MemPalace/mempalace/pull/2738
* @Yi-111-a made their first contribution in https://github.com/MemPalace/mempalace/pull/2625
* @thelastbackspace made their first contribution in https://github.com/MemPalace/mempalace/pull/2947

**Full Changelog**: https://github.com/MemPalace/mempalace/compare/v3.11.0...v3.12.0

---

> **Source** [MemPalace/mempalace](https://github.com/MemPalace/mempalace) · `v3.12.0` · 2026-11-12 · [upstream release](https://github.com/MemPalace/mempalace/releases/tag/v3.12.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
