---
title: "codebase-memory-mcp v0.11.0"
project: "codebase-memory-mcp"
repo: "DeusData/codebase-memory-mcp"
tag: "v0.11.0"
version: "v0.11.0"
published: "2026-09-15"
type: "minor"
lang: "en"
summary: "A large release, and an unusually community-heavy one: 171 pull requests merged since v0.10.8 (9 of them dependency bumps), 76 of them from contributors outside the maintainer."
---

# codebase-memory-mcp v0.11.0

# v0.11.0

A large release, and an unusually community-heavy one: **171 pull requests** merged since
v0.10.8 (9 of them dependency bumps), **76 of them from contributors outside the maintainer**.
Thank you — this release is mostly your work. It is a minor version rather than another 0.10.x
patch because the index format moves (one rebuild, below) and the tool output contract changes.

The reason v0.11.0 exists is install, uninstall and daemon-startup reliability, and memory: if cbm
ever refused to install, refused to uninstall cleanly, died at startup without telling you why, or
blew through the memory budget on a large repository, this is the release to take.

Two things to know before you upgrade, and one thing you will notice.

## Highlights

### The first run after upgrading rebuilds your index once

This is expected. It is not an error, and nothing is lost.

PR #1104 (`feb72080`, by **@LA-10**) completes the File-node change from #1108: a File node's
qualified name now keeps its file extension, so `auth.py` and `auth.ts` in the same directory are
finally distinct nodes instead of colliding on one name. That moves the on-disk index format
boundary, so an index built by v0.10.8 or earlier carries the old, collided identities.

Rather than migrate in place — an old collided database cannot reconstruct the siblings it lost —
cbm stamps the format in `PRAGMA user_version` and takes a **stale-format index through one full
reindex**. Your ADRs and index metadata are preserved across it (#516). After that single run, the
stamp is current and incremental indexing resumes as normal.

What you will see: the first `index_repository` (or the first watcher/daemon-triggered index) after
upgrading takes as long as a cold index of that repository instead of the usual incremental
seconds. A large monorepo will feel it. Everything after that is incremental again.

You may also see one `orphan_removed` line on that first run — that is #2111's new sweep clearing
staging files left behind by a worker that was killed under an older version. Also harmless, also
once.

### Lean, lossless output — findability preserved, no capability removed

PR #1597 (`3909e5a0`) makes CLI and MCP responses compact by default. To be explicit about what
this is **not**: no tool was removed, no field you could query before became unreachable, and no
answer got harder to find. What changed is that operational detail moved behind explicit flags and
parameters, and the default response carries the graph answer itself.

Kept in the default response, always:

- graph rows and node identities
- exact totals, not "about N"
- truncation state, so you always know when you are seeing a subset
- continuation cursors for everything that was omitted

Moved behind explicit opt-in: diagnostics, evidence columns, progress chatter, and JSON output.

Two companion changes complete the contract. `14c229b1` adds **lossless semantic pagination** —
`max_output_tokens` is enforced as a deterministic, model-neutral byte ceiling that cuts at whole
semantic units instead of slicing bytes mid-record, and every omission is independently pageable.
Cursors are bound to the query arguments, the result state and the index generation, so a stale
cursor fails closed rather than silently paging a different snapshot. `4a9fcd97` adds an explicit
**quiet CLI mode** for scripting.

Measured on the same serialized MCP `tools/list` fixture: 23,075 → 15,071 bytes (−34.7%), and
−31.4% / −30.7% on cl100k / o200k token counts. For result tables with repeated paths, response-local
directory-prefix compression cut token-shaped output by 38.3% (Unix paths) and 44.5% (Windows paths);
inputs where compression would not pay are left uncompressed, so no response gets larger.

Invalid UTF-8 in source is now preserved reversibly instead of being replaced, and code search is
scoped to canonically indexed files with globs that stay portable to BusyBox/Alpine.

### Memory: the budget is honoured, and the index needs far less of it

PR #2202 moves the indexer's memory onto one allocation core and makes `CBM_MEM_BUDGET_MB` a
promise rather than a hint. When an index approaches the budget, finished per-file results are
parked on disk and loaded back only for the moment a later pass reads them; the phases after
extraction start from the floor instead of inheriting everything that was extracted. The
semantic pass sizes its working set to the headroom left. What no budget can move is the graph
itself, so a budget below the graph's own size still fails whole, cleanly, as #2112 describes.

Measured on the Linux kernel (8.5 M nodes), same machine as v0.10.8: the default budget
(24,576 MB) used to abort the run; it now completes without spilling. At 16,000 MB and at
15,000 MB it completes through the spill path with the charged memory peaking at 14.6–14.7 GB,
and the graph is identical. On the ten LSP corpora we benchmark, peak memory dropped between
40% and 80% (Go 17.2 → 3.9 GB, Java 27.6 → 11.0 GB, C# 27.0 → 11.2 GB, TypeScript 12.0 → 2.5 GB)
with no corpus slower than v0.10.8: C# indexes in 128 s instead of 463 s, the kernel in 233 s
instead of 295 s.

Three things fell out of the proof runs and ship in the same release:

- **A per-file CPU budget covers the whole file, not just the parse.** Pathological files (a
  23 MB single-expression JIT test in dotnet/runtime, a few generic-nesting stress tests) used to
  hold a worker for minutes in the usage walk; they now stop at the budget, keep what was
  extracted, and skip the type-aware walks, logged by path.
- **A crash in cross-file resolution on large C/C++ trees is fixed**: the C++ class walk wrote a
  per-file scratch signature into the shared type registry, which another worker then read after
  the file's memory was gone. Found with an ASan build of the server on dotnet/runtime; the
  registry is copy-on-write now, and a test guards the contract.
- **Locale-free formatting on macOS**: every `vsnprintf` took the process locale lock, and
  eighteen workers formatting type names serialized on it. Each thread formats with a locale of
  its own now.

The daemon and the CLI are unchanged in behaviour; a 30-minute soak on all three platforms
holds a flat memory line (Linux 11.6 MB, macOS 17.4 MB, Windows 16.8 MB) under continuous
queries.

## Upgrade notes

- **One full reindex on first run.** See above. Expected, once per index, ADRs preserved.
- **A new `<db>.stage.*.lock` sidecar** appears next to the database while an index runs (#2111).
  It is the ownership marker that lets cbm tell a live writer from a dead one; it is removed when
  the run finishes.
- **An over-budget index spills first, then fails whole instead of soft-overshooting** (#2202,
  #2112). Near the budget, finished results are parked on disk under `<cache>/spill/` for the rest of
  the run and the run usually completes at the floor; an index whose graph alone exceeds the budget
  stops cleanly with `reason:"over_memory_budget"` and a named `budget_mb` / `peak_rss_mb`, and your
  previously serving index is left byte-identical. Raise `CBM_MEM_BUDGET_MB` if you hit it — the
  message names the variable.
- No configuration file changes are required.

## Install and reliability fixes

### Windows 10 could not install at all

**#2188** (`042a58bb`, reported and diagnosed by the reporter of #1856). `install.ps1` set
`SecurityProtocol = Tls12 -bor Tls13` unconditionally. Windows 10's schannel has no TLS 1.3 — it
arrives with Windows 11 and Server 2022 (build 20348) — but .NET Framework 4.8 still defines the
enum value, so the assignment succeeded silently and the first HTTPS request then died with
`The request was aborted: Could not create SSL/TLS secure channel`. An unsupported flag in that
bitmask is a hard failure, not a downgrade. **Every Windows 10 machine hit this.** The protocol set
is now computed: TLS 1.2 always, TLS 1.3 only on build 20348 and later, with an enum-name probe so
the script still parses on .NET Framework 4.7.

The same PR makes an activation refusal actionable. It used to print "Check the errors above" with
nothing above it; it now names the check that refused, says whether the offending ACE was
**inherited**, and gives a remedy that actually works for that case
(`icacls <dir> /inheritance:r /grant:r "%USERNAME%":(OI)(CI)F` — `/remove:g` cannot remove an
inherited ACE, which is why the old advice appeared to succeed while the refusal persisted).
No safety check was relaxed: an install directory writable by other accounts is still refused,
now in terms you can act on.

### Elevated and non-standard Windows installs

**#2139** (`1b067e3b`, closes #1705, #2023, #1686). A runtime directory created by an elevated
process is owned by the machine's built-in Administrator account, even when that account is renamed
or disabled — and cbm refused it, so install and activation failed outright on those machines. cbm
now resolves *this machine's* built-in Administrator SID (via the local SAM account domain) and
trusts it. Deliberately not a trailing-RID-500 match: a domain admin's `-500`, or another machine's
Administrator, is still foreign and still rejected. Separately, an owner-trust refusal that used to
report a bare `status -3, os 0` now names the offending owner's SID alongside the path.

### Daemon startup failures now tell you what happened

**#2113** (`91bee4fb`, closes #1828). A daemon that could not start — `/tmp` full being the
reported case — reported a misleading 30-second "active or starting" timeout and no cause. Every
listener stage now carries `stage=`, `errno=` and `path=` (for example
`stage=pending_publication errno=ENOSPC path=/tmp/cbm-daemon-<uid>/…`), and a doomed start now
surfaces in about a second as `CBM daemon failed to start: <stage> failed with <errno> at <path>`
instead of burning the full deadline and then reporting the wrong thing.

**#2138** (`055fbb7d`, closes #1830). Inside a single-uid user namespace
(`unshare -U --map-current-user`, `podman --userns=keep-id`) the root-owned top-level ancestors
appear owned by the kernel overflow uid, and the daemon refused to start in that entirely legitimate
setup. Overflow-owned **ancestors** are now accepted, but only when `/proc/self/uid_map` is a genuine
single-uid map and the overflow uid is read from `/proc` (never hardcoded). The directories that
actually hold data still require strict `== geteuid()` ownership, so the destination is no more
permissive than before. There is no environment escape hatch.

### Uninstall finishes, and stops leaving things behind

**#2110** (`b790be3d`, closes the executable/index half of #1954). `uninstall` used to abort on the
*first* agent-config cleanup error, before removing anything — so one refused `mcp.json` left a
~300 MB binary and the whole cache on disk. It now runs every agent cleanup, collects the failures,
removes the indexes and the binary, and exits non-zero listing exactly which config files could not
be cleaned and why.

The same PR lets the four config editors follow a **user-owned symlinked config file**, so a
stow/dotfiles `~/.cursor/mcp.json -> …` is no longer refused outright. Writes commit with
`renameat` on the parent directory handle, so the symlink survives — the target is edited, never
replaced. Other-owner links, dangling links, links to directories and world-writable parents stay
refused.

**#2060** (`cc6743e9`, by **@TheStranjer**, refs #1722) is the directory half of the same problem:
`~/.config/opencode -> /mnt/…`, a user-owned directory symlink, made every OpenCode write fail with
an opaque `agent_config` error. The parent-chain walk now follows a symlink owned by the invoking
user — the rule the Linux kernel's `fs.protected_symlinks` applies, and one that cannot reach
anything the user could not already write directly. Follow-up commits in the same PR bind the
ownership judgement to the inode actually followed and make following opt-in per call site.

**#2137** (`a0dc4183`, closes #2054). Index deletion — behind `cbm update`, `cbm uninstall` and
`install --reset-indexes` — unlinked each `*.db` but never its SQLite `-wal` / `-shm` / `-journal`
sidecars, so every explicit removal left orphans behind. All of them are now removed, including an
orphan `-wal` that outlived its database.

Also in this area: the install directory is removed from the Windows user `PATH` on uninstall
(#2117); YAML config removers answer OK for a config that is already absent, so uninstall no longer
refuses over it (#2059, **@dgilperez**); and the OpenHands integration is completed with
`settings.json` mcp_config plus agent-profile references (#2116, refs #1826).

### Indexing that stops honestly instead of being OOM-killed

**#2112** (`1d665384`, closes #1997, #832, and the OOM half of #1973/#1864). The indexing memory
budget was advisory: past the backpressure limit the pipeline logged `soft_overshoot` and kept
admitting work until the kernel OOM-killed the worker, and the supervisor then blamed your files.
An over-budget attempt now fails **whole** after one confirmation cycle, discards its staging, and
reports `reason:"over_memory_budget"` with `previous_index:"preserved"`, `budget_mb`, `peak_rss_mb`
and a hint naming `CBM_MEM_BUDGET_MB`. The index that was serving before is byte-identical and
`index_status` keeps serving it. A lone worker may now use the whole aggregate budget; concurrent
jobs split it, so fail-whole does not bite a single-job host. On Windows the worker's commit is also capped by
a Job Object at that budget (#2030, **@Subgurim**), so the OS enforces the ceiling the pipeline
promises.

### Staging files that clean up after themselves

**#2111** (`dd454b23`, closes #1839, #1864). Three defects in one area: the pipeline minted nested
`<db>.stage.A.stage.B` paths; a worker killed mid-run left a staging file that nothing ever swept;
and a *first* index printed a scary `invalid_existing_db` while integrity-checking its own empty
placeholder. Inner stages are now siblings, every stage is owned through an exclusive `.lock`
sidecar, a dead writer's orphans are swept before each run (a live writer's are kept), and a first
index is correctly routed as `no_existing_db`. `invalid_existing_db` is now reserved for a real
index that fails integrity.

### Startup and daemon stability

Installing into a sandbox or a different home no longer stops the daemon serving your real one
(#2115). The activation guard now resolves which cohort an install actually replaces, so a
sandboxed or foreign-home install leaves the host's sessions running instead of draining them —
previously an install under one HOME could quiesce an unrelated daemon out from under an active
editor session.

Three flake root causes were fixed rather than papered over: a mid-HELLO cold-storm racer now keeps
an ephemeral generation (#2179); tree-sitter parses are budgeted by **thread CPU time** rather than
wall clock, so a loaded machine no longer looks like a runaway parse (#2180); and Windows session
roots are compared separator-equivalently without respelling the policy root.

Further contributor fixes in this area: zombie generations from abandoned requests are contained and
mute endpoint holders are named (#1920, #1921, **@OhOkThisIsFine**); Unicode session roots are
accepted on Windows (#1876, **@ertankucukoglu**); a refused UI configuration is no longer reported
as a failed daemon start (#1796, **@liuchong**); the client selector is applied to registry
integrations (#1802, **@rarepops**); `--clients` appears in the CLI help (#1800,
**@kilianpaquier**); the OMP agent directory is respected and instructions preserved (**@DavidHLP**); the augment hook receives its input args and tool search works in subagents
(#1933, **@Chewji9875**); and PowerShell 5.1 stderr wrapping no longer aborts version probes
(distilled from #1255 by **@MasterFede5**).
- **The index worker is scoped to the request's repository, not to the daemon's environment**
  (#2076): a daemon serving several repositories runs each index in that repository's own scope.

## Language and extraction coverage

**162 languages**, up from 158 in v0.10.8, and **45 client surfaces**, up from 43.

New languages:

- **Chialisp**, with a first-party tree-sitter grammar (#1888). Distilled from PR #919 by
  **@darkverbito**, whose CLVM extraction logic this is built on.
- **Oracle PL/SQL** (#1854), distilled from #1033 by **@Oğuz** — packages, types, triggers,
  package-qualified calls and the `ref_call` usage vocabulary.
- **ArkTS**, via a self-maintained fork of tree-sitter-typescript.

Extraction and coverage improvements:

- **CFML tag dialect** — `.cfc` tag-dialect routing plus definitions inside embedded `<cfscript>`
  (#1872), distilled from #1412 by **@allanoepping**. A real recall hole, not a cosmetic one.
- **Blazor and Razor** — `.razor` files are discovered as C# (#1824, **@The1nk**), `@page`
  directives emit Route nodes (**@The1nk**), and Razor Pages / MVC `.cshtml` views are discovered
  and routed.
- **SQL gets first-class Table and View nodes** with FROM/JOIN lineage, and **dbt model lineage**
  is extracted through Jinja-templated SQL — both with **@alexisperinger-ux**.
- **Pkl** gains calls, branches, throws and decorators (#1426, **@tthayer**).
- **Svelte, HTML and Astro inline scripts** now yield structure instead of being skipped
  (#2056, **@bmcnaboe**).
- **Go**: blank-identifier struct fields are skipped, `field_declaration_list` is descended into,
  a bare reference never binds a struct Field, and USAGE/WRITES/READS are guarded against
  cross-language binds (#1937, #1938, #1940, #1944, #2006, all **@ilyabrykau-orca**).
- **Swift** call arguments are reached through `call_suffix` (#1896, **@CaptainMittens**).
- **Elixir** calls populate `first_string_arg` (#1721, **@henry-hz**).
- **TypeScript** dotted import basenames are preserved (#1811, **@pcristin**).
- **Cross-file base-class resolution** in the Python/TypeScript cross-LSP.
- **Prose is indexed in BM25** via a `nodes_fts` body column, with **@ShauryaaSharma**.
- **Index-time importance scoring** (weighted degree), with **@petercoxphoto**.
- **Ensemble production topology routing** (#1063, **@isc-tdyar**).
- **VB6 `.frm`/`.cls` files** no longer land in the FORM and Apex grammars (#2074, **@Tokarzewski**).
- **Route extraction** finds a path wherever it sits in a decorator's arguments and takes the
  handler from the last argument, not the first (#2008, #2009, **@CaptainMittens**).
- **Cypher** refuses what it cannot honour instead of answering wrongly: a query the parser did not
  fully read, a `WITH` wider than its binding, a name that is not in scope, and an unnamed head node
  now counted against the variable cap (#1875, #1918, #1922, #1998, **@CaptainMittens**);
  variable-length path semantics are enforced (#883, **@jstar0**).
- **Unreadable values stop becoming plausible ones** — a confidence, an environment setting and a
  span timestamp that cannot be read no longer silently become `0.0`, a wrong default, or a real
  duration (#1877, #1880, #1881, **@CaptainMittens**).
- **AST traversal stacks no longer outlive the file they walk** (#2013, **@shafty023**).
- **Weak Python member calls** are suppressed, distilled from #1324 by **@Enferlain**.

New tooling: a bounded **file outline** tool and a bounded **graph comparison** tool,
`manage_adr mode='set_sections'` for splicing ADR sections instead of rebuilding the document,
graph-augmented Bash tool searches (#1337, **@abendrothj**), a `watcher_enabled` master switch
(#1105, **@nguiaSoren**, closes #335), and artifact hashes reconciled against git on bootstrap.

New platforms and surfaces: **NetBSD** support across CLI, daemon IPC and runtime (#1342,
**@cmeerw**); FreeBSD `${LOCALBASE}/bin` treated as pkg-managed with self-resolution via sysctl
(#1777, **@ocochard**); **Grok Build** as an install target; **Oh My Pi (omp)** (#1229,
**@DavidHLP**); the **OpenCode** plugin extended to every documented context surface (#1487,
**@JCVIDev**); a UI-embedded **Nix** flake package (#1089, **@mipmip**) and a macOS
cross-architecture Nix dev shell; the UI showing its serving binary version (#2016, **@rarepops**)
and enumerating cbm processes correctly on Windows (#955, **@EightDoor**).

## Performance

- **C++ short-name type lookups are indexed** rather than scanned (#1679, **@astandrik**), with a
  follow-up unifying the two short-name indexes.
- **Coverage finds a line by table lookup** instead of rescanning the file, and stops reporting a
  duplicate range and a line past EOF (#1941, #1971, **@CaptainMittens**, closes #963).
- **Suffix globs are filtered while the search scope is built**, not after (#1836,
  **@ertankucukoglu**).
- **Prefix-directory scoring** in output compression is no longer quadratic in path count.
- **No-op Bash calls are gated before identity hashing** in the augment hook (#1337,
  **@abendrothj**).
- **Idle maintenance no longer polls twice** in the daemon.
- **Parse budgets are charged in thread CPU time** (#2180), so a busy machine no longer trips the
  budget on work that was never slow.
- **The per-file budget now covers the extraction walk and the type-aware walks** (#2202), so one
  pathological file can no longer hold a worker for minutes; C# on dotnet/runtime indexes 3.6x faster.
- **SQLite allocates from a heap of its own in the index worker** (#2202): the coverage publish
  step on the kernel went from 132 s to 9 s, and the whole kernel index from 295 s to 233 s.
- **Worker graph buffers no longer keep a dense id table over the whole id space** (#2202), and the
  spill path parks every cached result before resolve; the kernel's charged memory at a 15 GB budget
  peaks at 14.7 GB instead of 16.8 GB.

## Also in this release

Smaller fixes that did not get a section of their own. Each is real user-visible behaviour, and
every contributor-authored one is credited inline.

**Extraction and resolution**

- URL-builder helper calls resolve to Route / HTTP_CALLS edges (#1010, **@CharlesQueiroz**), and
  non-HTTP slash arguments no longer produce false routes (#1389, **@Yyunozor**).
- Dynamic edge properties are escaped as JSON (#1065, **@tmonestudio**).
- Trailing blank lines at EOF count as an absent newline, not a missed definition (#1773,
  **@rarepops**, closes #1746); the same for trailing Dockerfile whitespace (#1853).
- Ruby superclass names stay bare (#1709, **@benrfairless**).
- Swift protocol method requirements are indexed as Method nodes (#1763), and the Swift `try!`
  grammar entry no longer shifts past its own type (#1986, **@CaptainMittens**).
- Go cross-package field-chain calls resolve via type dispatch (#1939, **@xkchok**).
- Rust keeps its Cargo context in parallel resolution (#1850); Python suppresses bare calls shadowed
  by an enclosing parameter (#1912).
- A name-only registry match that the receiver chain contradicts is refused (#1897,
  **@CaptainMittens**).
- Symlink skips are reported through the ignored-files taxonomy (#1822, **@AmirF194**), and a file
  whose extractor exits non-zero is quarantined instead of aborting its whole chunk (#1438,
  **@shashwatMishra96**).
- The complexity pass is independent of worker id order (#2079), and the function sort is skipped
  when a graph has no functions (#2083).

**Server, daemon and tools**

- The MCP server survives atomic replacement of its own binary (#1204, **@DavidMusk93**).
- Windows stdio servers exit when the spawning client dies (#1874, **@LazyXuan**, closes #914).
- Query-only store resolution never mutates, and the ten read-only tools are annotated as such
  (#1871, **@LazyXuan**).
- Trace evidence columns come out in header order (#1703, **@rudi193-cmd**).
- `search_code` scan deadlines are bounded (#1866); semantic-search inputs and store errors are
  hardened (#2067).
- Markerless stale rendezvous sockets are recovered during activation (#1894, **@mvanhorn**); a held
  startup transition is waited out instead of failing at 10 s (#1772); a mismatched cohort holder is
  retried until the caller's deadline (#2047).
- Spawn backoff resumes after EINTR (#1799, **@rarepops**, closes #1616), and `autoindex.skip` logs
  the numeric `auto_index_limit` (#1779, **@rarepops**, closes #1466).
- Sparse absolute persistence loss is detected at dump time (#1851).
- The watcher excludes the indexer's own artifact directory from the git dirty signature (#2096,
  closes #1953).
- An explicit worker budget override is honoured (#1657, **@atirna**).

**Install, clients and binaries**

- Hermes YAML configs using `>`, `|`, `[` or `]` install correctly (#2094, closes #1924).
- `go install` was fetching v0.8.1 binaries; packaging versions are corrected and the drift is gated
  (#1902).
- Claude hooks are registered without a shell (#1849), and sensitive program roots are blocked before
  any background work (#1848).
- Pi adapter: parameters and `execute` are emitted (#1678, **@musichen**) and tool arguments travel
  over stdin (#1858). Codex: the global guidance is replaced with an activation pointer (#1739,
  **@astandrik**).
- ELF binaries keep their stack hardening through blob regeneration (#1774) and place the whole GOT
  inside the RELRO window (#1914); the CLI builds with Clang 23 (#2027).
- Graph UI: selecting a single node shows its details (#1235, **@Maystern**).

**Docs**

- Git LFS is recommended for a team-shared graph artifact (#1697, **@angusgastle**); a reproducible
  savings measurement guide (#1847) and the runtime trace observation model (#1901) are documented.

## Full changelog

Every commit between the two tags:
https://github.com/DeusData/codebase-memory-mcp/compare/v0.10.8...v0.11.0

328 non-merge commits across 171 merged pull requests.

## Contributors

Seventy-one people outside the maintainer have code in this release. Forty-seven authored commits
directly; twenty-four more are credited as co-authors on work distilled from their pull requests,
where the diagnosis, the extraction logic or the fix originated with them and the shipped change was
rebased or reshaped around it. Distilled or direct, the credit is the same — thank you all, sincerely.

**Commit authors**

@abendrothj (Jake Abendroth) · @AmirF194 (Amir Fathi) · @angusgastle (Angus Gastle) ·
@astandrik (Anton Standrik) · @atirna (Atirna) · @benrfairless (Ben Fairless) ·
@bmcnaboe (Brian McNaboe) · @CaptainMittens (Joshua Richter) · @CharlesQueiroz (Charles Queiroz) ·
@Chewji9875 (Choti Wongbussakorn) · @cmeerw (Christof Meerwald) · @DavidHLP ·
@DavidMusk93 (Mingqiang Sun) · @dgilperez (David Gil) · @EightDoor (周凯) ·
@ertankucukoglu (Ertan) · @henry-hz (Henry Hazan) · @ilyabrykau-orca (Ilya Brykau) ·
@isc-tdyar (Thomas Dyar) · @JCVIDev · @jstar0 (King Star) · @Jumaga2015 (Julio) · @kavish-19 ·
@kilianpaquier · @LA-10 · @LazyXuan (周文瑄) · @liuchong (刘冲) · @Maystern ·
@mipmip (Pim Snel) · @musichen (Alexander Musichen) · @mvanhorn (Matt Van Horn) ·
@nguiaSoren (Soren Nguia) · @ocochard (Olivier Cochard-Labbé) · @OhOkThisIsFine · @pcristin ·
@rarepops (Rares Popa) · @rudi193-cmd (Sean Campbell) · @shafty023 (Daniel Ochoa) ·
@shashwatMishra96 (Shashwat Mishra) · @Subgurim · @The1nk (Adam) · @TheStranjer · @tmonestudio ·
@Tokarzewski · @tthayer (Tony Thayer-Osborne) · @xkchok · @Yyunozor

**Credited on distilled work**

@alexisperinger-ux · @allanoepping (Allan Oepping) · Anand Aiyer · @andis777 · @aoright ·
@bethzyy · @darkverbito · Dustin Persek · @Enferlain · @Joseph-MingEn · @ketpatil77 · Kody ·
@kriswill (Kris Williams) · @MasterFede5 · @moofone · @nhtkylc91 · Oğuz · @petercoxphoto ·
@PR9000 · @sahil-mangla · @ShauryaaSharma · @xbsjason · Yusuf S. Demirci · Zhiyu

If your name is missing or wrong here, please open an issue — we will fix it and say so.

<!-- cbm-security-verification:start -->
## Security Verification

Every binary published below was scanned by VirusTotal before smoke and soak testing, and the verdict for the exact shipped bytes is linked per product (decisive engines: 59–68).
Every shipped binary was clean.

| Product | Shipped binary | VirusTotal verdict |
|---|---|---|
| `linux-amd64` | `a831cdcafaed7b1f7c23ce996a72a035f2188d7e20e9a18f39ec4b2d4e3302a6` | [clean](https://www.virustotal.com/gui/file/a831cdcafaed7b1f7c23ce996a72a035f2188d7e20e9a18f39ec4b2d4e3302a6/detection) |
| `linux-arm64` | `7812062c19030de15ae21ec2d30746447bb2c27bc72f3bf21924ba0e2dacd7e0` | [clean](https://www.virustotal.com/gui/file/7812062c19030de15ae21ec2d30746447bb2c27bc72f3bf21924ba0e2dacd7e0/detection) |
| `linux-amd64-portable` | `ce11c141431aeadd788506c3a7e6942db8fd438dec369d0707a39ec9fd8c6510` | [clean](https://www.virustotal.com/gui/file/ce11c141431aeadd788506c3a7e6942db8fd438dec369d0707a39ec9fd8c6510/detection) |
| `linux-arm64-portable` | `403d0fab6204e712916701936a3229dd472bad05080c757ea5177318a80fdbfe` | [clean](https://www.virustotal.com/gui/file/403d0fab6204e712916701936a3229dd472bad05080c757ea5177318a80fdbfe/detection) |
| `darwin-amd64` | `69ca71b4b62fe233677851bdf54953e2a6660cf5d687b4d64226b2591b14ed39` | [clean](https://www.virustotal.com/gui/file/69ca71b4b62fe233677851bdf54953e2a6660cf5d687b4d64226b2591b14ed39/detection) |
| `darwin-arm64` | `a67b7ccead5d2ca852051f8619458ab96af41393257b56fb36e523a110265d48` | [clean](https://www.virustotal.com/gui/file/a67b7ccead5d2ca852051f8619458ab96af41393257b56fb36e523a110265d48/detection) |
| `windows-amd64` | `7edcd3807ebcfd85ec1968985964080f2589748da2fc3c7ce9261eebab31ff04` | [clean](https://www.virustotal.com/gui/file/7edcd3807ebcfd85ec1968985964080f2589748da2fc3c7ce9261eebab31ff04/detection) |
| `windows-arm64` | `5615aa31e3cdbe6155e7096c43d07e62e335fe34d28e489b4cc3ce113e81b4e6` | [clean](https://www.virustotal.com/gui/file/5615aa31e3cdbe6155e7096c43d07e62e335fe34d28e489b4cc3ce113e81b4e6/detection) |

Selection is tuple-local and defaults to stripped. The selected executable SHA-256 was verified again after packaging; archive containers were not redundantly submitted to VirusTotal. Their hashes remain available in `checksums.txt`.

Durable evidence: [candidate provenance](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.11.0/release-candidates.tsv), [candidate VirusTotal results](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.11.0/virustotal-candidate-results.tsv), [selection decisions](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.11.0/release-selection.tsv).
<!-- cbm-security-verification:end -->

---

> **Source** [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) · `v0.11.0` · 2026-09-15 · [upstream release](https://github.com/DeusData/codebase-memory-mcp/releases/tag/v0.11.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
