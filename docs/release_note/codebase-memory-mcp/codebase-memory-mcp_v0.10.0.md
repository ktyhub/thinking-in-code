---
title: "codebase-memory-mcp v0.10.0"
project: "codebase-memory-mcp"
repo: "DeusData/codebase-memory-mcp"
tag: "v0.10.0"
version: "v0.10.0"
published: "2026-08-10"
type: "minor"
lang: "en"
summary: "A milestone release since v0.9.0 — cbm's backend has been rearchitected around a shared coordination daemon, tool output was rebuilt into a compact tree format (99% fewer output tokens on large results), the…"
---

# codebase-memory-mcp v0.10.0

# codebase-memory-mcp v0.10.0

> **⚠️ Please use [v0.10.1](https://github.com/DeusData/codebase-memory-mcp/releases/tag/v0.10.1) instead.** v0.10.0 shipped a critical MCP-client regression ([#1522](https://github.com/DeusData/codebase-memory-mcp/issues/1522)): the default output format of the core discovery tools rendered as an empty `{}` in spec-compliant MCP clients such as Claude Code. Everything below describes this release accurately — but the fix release supersedes it and is the one to install.

A milestone release since v0.9.0 — cbm's backend has been rearchitected around a shared coordination daemon, tool output was rebuilt into a compact tree format (~99% fewer output tokens on large results), the long-standing Windows memory ratchet is fixed and verified, and a new **coverage system makes the graph's blind spots visible** — introducing cbm's **15th tool, `check_index_coverage`**, and a missed-code skeleton rendered right beside the code galaxy in the graph UI. Since the release candidate, the graph gained a new **evidence-backed `CALL_REFERENCE` edge class**, the Linux binaries' allocator override was found silently inactive and switched genuinely on, and every daemon/installer/Windows issue reported against the RC is fixed. Add three new community-contributed language surfaces, Swift cross-package resolution, a Nix extraction overhaul, and a broad community-driven correctness batch across the query engine, store, and extractors.

**781 commits · 183 merged PRs · 42 contributors · 40+ community-reported issues fixed** (v0.9.0…v0.10.0)

## From release candidate to v0.10.0

This is the final release of what shipped as **v0.9.1-rc.1** on 2026-07-30. It graduates as **v0.10.0**, not v0.9.1: a new backend execution model, a new tool, a new output format, and a new edge class are not a patch release, and the version number should say so. There will be no v0.9.1 final — this is it.

To everyone who ran the RC in their daily workflows: **thank you — it worked exactly as hoped.** The 1.5 weeks since the RC brought 335 commits across 76 PRs, and the most valuable of them started as your field reports. Daemon conflict handshakes that left a client hanging on "pending" (#1383), an installer that removed existing Claude Code hooks instead of adding its own (#1387), hook-augment silently emitting nothing (#1388), Windows install/uninstall refusing to stop active sessions (#1416), focus-stealing console windows from the detached daemon (#1427), a query response size that could kill the MCP server with no diagnostics (#1375), multi-key `ORDER BY` dropping `LIMIT` (#1334) — every one of these was reported against rc.1 by an RC user and is fixed in this release.

**The coverage ask stands.** The coverage system makes the gap between your code and the graph *measurable* — help us shrink it. Ask your agent to run **`check_index_coverage`** across your repositories (or click the missed skeleton's report-an-edge-case callout in the UI) and paste the resulting summary into a GitHub issue or discussion: miss classes, affected languages and file kinds, counts. That's aggregate numbers, not source code — everything stays on your machine unless you choose to paste it. Every real-world coverage summary points us at a concrete parser edge case, resolver gap, or language quirk we can fix — your repos are the test corpus we can't clone.

## ⚠️ Behavior changes

- **New edge class: `CALL_REFERENCE` — and `CALLS` now means exactly one thing.** The graph now distinguishes *invoking* a callable from *passing it as a value* (`app.register(pluginFn, opts)`). `CALLS` is reserved exclusively for invocations; `CALL_REFERENCE` is emitted only when deterministic parser/LSP/registry evidence proves the exact callable value (occurrence-exact spans, lexical binding state, resolved symbol identity); ambiguous, shadowed, or dynamically rebound occurrences remain `USAGE`. Queries that assumed every callable relationship was a `CALLS` edge should account for the new label — and gain a precision they didn't have before: a `CALL_REFERENCE` edge is proof, not a guess.

- **One archive per platform — the UI is always included.** The `ui-*` / non-UI variant split is gone: every platform now ships a single archive with the graph UI embedded, and the npm/PyPI packages include it by default (the `CBM_VARIANT=ui` opt-in from the RC is obsolete). Fewer artifacts, no wrong-variant downloads, one composition to verify.

## Highlights

- **The coordination daemon — a backend milestone.** Until now every cbm session was an island: each MCP server, CLI call, and hook opened the store on its own and knew nothing about its neighbors. As of this release, **all of them coordinate through a per-user daemon** — build/version conflict handshakes, indexing admission control, and a shared graph UI. New `daemon start|stop|status` CLI; a warm daemon removes per-command startup cost — measured **40–58% faster CLI commands** on an 8.5M-node graph (~2.6 s saved per call). Hardened by RC field reports: every rejection path now answers the client with a reason instead of leaving it waiting. Beyond the immediate wins, this is the foundation the next releases build on: **centralized controls for multi-agent workflows** and **local-only reporting/observability infrastructure** — everything stays on your machine; nothing is sent anywhere.
- **Evidence-backed call graphs.** The new `CALL_REFERENCE` edge class (see behavior changes) closes a long-standing precision gap: higher-order patterns — plugins registered by value, callbacks, handler tables — are now first-class graph relationships backed by deterministic evidence, while `CALLS` stops absorbing guesses. Optional **`include_evidence`** output shows *why* an edge exists: the resolution provenance behind it.
- **Tree-format tool output** — TOON-compact, prefix-grouped rows with exactly-once pagination, real `detect_changes` impact reporting, and graph cycle detection. Measured **~99% fewer output tokens vs v0.9.0** on large query results — and MCP responses no longer duplicate their payload in `structuredContent`, roughly doubling the usable response budget on top.
- **Windows memory ratchet fixed (#581) — and the Linux override switched on.** The allocator override silently compiled out under MinGW, so the CRT kept freed pages committed and long-lived daemons ratcheted memory for months. mimalloc now genuinely owns Windows allocations, thread heaps release at thread exit, and an out-loud ownership audit makes any future regression announce itself at startup. Verified on release artifacts: a 10-minute pure-query soak that measured **53× committed-heap growth on v0.9.0-era builds now measures 1.06×**. The same audit then caught the mirror image on Linux: shipped Linux binaries had **never** actually routed ordinary malloc through mimalloc — as of this release they do.
- **One install, 43 coding agents** — the installer automatically (or conditionally, where a client's documented markers are present) configures **43 agent and client surfaces** — Claude Code, Codex CLI, Gemini CLI, Cursor, Zed, VS Code, Windsurf, Cline, Aider, Goose, Amp, Copilot CLI, Sourcegraph Cody, and 30 more — with pi and OpenCode extensions now generated straight from the tool registry. Experimental **tool profiles** (`--tool-profile=analysis|scout`) expose restricted inspection surfaces for lightweight scout agents. And it no longer touches what isn't its own: existing hooks are preserved even when a script rewrite is refused.
- **Honest coverage — the missed graph** — what did *not* make it into the graph is now first-class, headlined by **`check_index_coverage` — the 15th cbm tool**: parse-coverage signals per file, deliberately-ignored files reported as a by-design class, coverage folded into `index_status` with notes on `get_code_snippet`, and a queryable miss graph persisted in the store. **In the UI**, the missed code renders as a **skeleton beside the code galaxy** — click-to-focus, with a report-an-edge-case callout.
- **New language surfaces** — Perl LSP-tier semantic resolution, InterSystems IRIS ObjectScript support, and Mojo wiring — all three community-contributed — plus **Swift cross-package IMPORTS** resolved through `Package.swift` manifests and a two-part **Nix extraction overhaul** (function-rooted files no longer drop their definitions; attrpaths modeled with scoped qualified names).
- **Query engine robustness** — `coalesce()` and multi-arg scalar functions in WHERE, correct var-length path semantics with an advertised depth clamp, DISTINCT-before-LIMIT, the full multi-key `ORDER BY` list honored with `LIMIT` intact, composite/escaped property returns, a wall-clock execution deadline for runaway queries, and `tools/list` pagination for non-paginating clients.
- **Store & artifact integrity** — a four-report series from one community member exposed torn WAL-mode exports, swallowed `SQLITE_CORRUPT`, stale WAL replay over fresh DBs, and invalid JSON on async edges; all four are fixed. Reindex publication is now **atomic end to end** — staged, verified, and quarantined on failure rather than replacing a good database with a broken one.
- **CI, completely wrapped up** — local CI, PR CI, dry runs, and releases all execute the *same* canonical leg scripts, enforced by a venue-parity contract that turns any drift into a red build. Parallel per-suite test execution with a zero-loss gate, release-gating soak legs, per-run isolation, artifact attestation, and VirusTotal scanning of the real archive artifacts as a standard pre-release step.

## What's changed

### Coordination daemon & concurrency
This is the largest backend change since the project began: cbm's execution model moved from independent per-session processes to a coordinated per-user backend. Concurrent sessions coordinate through the daemon (`daemon start|stop|status`, permanent or session-managed) with authenticated IPC, build-fingerprint/version/cache-root conflict detection, physical-job admission control for parallel indexing, and the graph UI served from the daemon. Because a per-user daemon is a security boundary, its IPC was hardened accordingly — on Windows, pipe clients are validated by process identity rather than impersonation, private-namespace objects are owner-stamped with the token user's SID, and DACLs are strictly validated; on POSIX, socket identity is checked against inode-pinned records. Everything remains strictly local.

RC field reports then hardened the seams: a client whose binary image the daemon rejects now gets an answer instead of an indefinite "pending" (#1383); an oversized MCP reply produces a structured error instead of process death (#1375); hooks surface daemon build conflicts to their caller instead of emitting nothing (#1388); and the admission path that accepts a mismatched build now names its cohort in diagnostics. On macOS, subprocesses spawn via `posix_spawn` instead of fork+exec.

**Preparation for worktree-native multi-agent workflows.** The daemon is also the groundwork for how multi-agent setups actually run today: one agent per git worktree. Right now each worktree has to be indexed as if it were a separate repository. With the centralized daemon layer in place, upcoming releases will rework exactly this: worktrees become **children of the main repository's graph**, sharing everything unchanged and indexing only what differs — making the agent-per-worktree pattern dramatically cheaper in time and disk.

### Graph semantics & reindexing
The `CALL_REFERENCE` work (see behavior changes) runs through the whole stack: extraction, LSP resolution, sequential and parallel publication, persistence, MCP/UI counts, and documentation, with occurrence-exact matching so an LSP result can never promote a different same-named usage, and fail-closed handling for lexical shadowing and ambiguity. Alongside it, warm re-indexing moved to a **delta-merge pipeline** — unchanged data is copied forward and only the changed slice is patched and atomically swapped in, replacing the previous rebuild-and-repair path. Warm re-index performance at very large scale is still work in progress (see known issues), but the structural rework this release ships is the foundation the remaining wins land on.

### Tool output & MCP surface
TOON compact output across the query surface (~10× smaller) and then the tree format on top (prefix-grouped rows, exactly-once pagination cursors, real change-impact in `detect_changes`, SCC cycle detection) for a combined ~99% output-token reduction vs v0.9.0 on large results. MCP responses stop duplicating their entire payload in `structuredContent` (#1375). Optional `include_evidence` exposes edge resolution provenance. `detect_changes` scopes seed detection to changed line ranges. ADR tools got a community correctness pass: reads stay nonblocking during reindex, misleading section writes are rejected, and coverage scope labels are preserved. `index_repository` resolves a `repo_path` from a known project name; an invalid project name can no longer send the daemon littering `.corrupt.<hex>` files (#1425); CLI activation refusals are attributed to the recorded safety check (#1416); and `--help` derives its tool list from the MCP registry, so it can't drift.

### Windows & memory safety
The #581 chain: route ordinary Windows allocations through mimalloc (`--wrap` + static-CRT override), release thread heaps from a TLS detach callback, drop an SQLite page-cache slab that faulted on arm64, and audit allocator ownership per size class out loud at startup so "the tuning is decoration" can never happen silently again. **New since the RC:** the same audit philosophy caught that shipped **Linux** binaries had never actually routed malloc through mimalloc — the override is now genuinely active (#1360); memory diagnostics report OS-truth RSS on every platform; graph databases under **non-ASCII cache paths** open reliably on Windows (every maintenance-path SQLite open now routes through the same wide-path normalization as the primary open — previously the *second* index into e.g. a Cyrillic-named cache failed); stdio runs in binary mode under MCP on Windows; spawned child processes no longer flash console windows (#1427, plus a community fix for the general case); and the codebase compiles cleanly under MinGW GCC.

### Windows now ships a single binary — and updates run from install.ps1

Windows previously shipped two executables: a small permanent launcher plus the product binary behind it. It now ships **one binary**, exactly like Linux and macOS.

The launcher existed so the product could update itself in place: on Windows a running executable cannot replace its own image, so a second resident binary had to perform the swap. That small helper reliably trips antivirus heuristics, and we could not keep it without shipping something that gets flagged — so the update step moved out of the running process and into `install.ps1`, which runs while codebase-memory-mcp is not running.

**What changes for you:** on Windows, `codebase-memory-mcp update` no longer updates in place. It prints the exact command to run instead:

```
powershell -ExecutionPolicy Bypass -File "<install-dir>\install.ps1"
```

`install.ps1` is idempotent, so re-running it *is* the update: it stops the daemon, retires the running binary, installs the new one, and cleans up. Installing through **npm or pip is unaffected** — update with your package manager as before.

### Languages & extraction accuracy
Perl LSP-tier semantic resolution; InterSystems ObjectScript language support; Mojo wiring. **New since the RC:** Swift cross-package IMPORTS resolved through `Package.swift` manifests; Nix files whose root expression is a function no longer drop every definition, and Nix attrpaths are modeled with leaf names and scoped QNs, with module-level bindings minted as Variables; decorators separated by a comment stay attached; same-named GoogleTest macros in one file get unique names instead of collapsing into a single node and dropping call edges (#1266); JS/TS template-literal URLs flatten to `{}` placeholders so route rendezvous works; Haskell array handling is alias-safe. Carried from the RC batch: native `fetch()` as HTTP_CALLS, CommonJS `require()` shadow fixes, aliased-import resolution, C/C++ `#include`-to-header edges and `#ifdef`-split recovery, PHP trait-recursion OOM fixes, Laravel and JAX-RS route composition, env-access CONFIGURES guards, File-node QN collision fixes, UTF-8-safe docstring truncation, and bounded GLR stack-merge recursion.

### Query engine (Cypher)
`coalesce()` and multi-arg scalar functions in WHERE; var-length path semantics fixed with an advertised depth clamp; DISTINCT applied before RETURN limits; whole-value returns for composite and escaped properties; a wall-clock execution deadline; `tools/list` default pagination. **New since the RC:** the full multi-key `ORDER BY` list is parsed and applied with `LIMIT` kept intact (#1334); OPTIONAL MATCH can no longer fabricate a "no match" row after the row budget fills; and aggregation columns are classified by actual aggregate functions.

### Store, artifacts & lifecycle
Atomic cache publish in the SQLite writer; snapshot exports made consistent and corrupt imports refused; destination WAL/SHM sidecars removed before installing a fresh DB; `SQLITE_CORRUPT` surfaced from row scans; WAL bounded via `journal_size_limit`; watcher reindexes dirty repos once per distinct state; relative `repo_path` canonicalization no longer corrupts and auto-deletes project DBs. **New since the RC:** reindex publication is atomic end to end — staged under private paths, verified, and quarantined on failure; WAL sealing before artifact swap; and label allowlists route through the canonical type-like set.

### Agents, clients & installer
Agent integration coverage spans **43 automatic/conditional client surfaces**, each changed only when its documented platform, marker, or existing config path is present. **New since the RC — mostly straight from RC field reports:** the installer **never removes existing hooks** when a script rewrite is refused, and `--dry-run` predicts exactly that outcome (#1387); generated Codex agent role TOMLs declare their transport; pi and OpenCode extensions are generated from the tool registry, so new tools appear in them automatically; **indexing roots can be declared from the CLI**, discovery prunes the cache directory, and compression is size-safe on huge inputs; Windows install/uninstall/doctor no longer fail on sessions they themselves can stop safely (#1416). Carried from the RC batch: the security-hardened Windows install transaction path, unknown-flag rejection with nearest-flag suggestions, honest `--dry-run` labeling, growing discovery walk stacks, FreeBSD memory detection, and the `CBM_MEM_BUDGET_MB` strict resolver.

### CI & test infrastructure
Every venue — local CI, PR CI, the pre-release dry run, and the release pipeline — runs the **same canonical leg scripts**, with a venue-parity contract that turns any drift into a red build; parallel per-suite execution with a zero-loss gate (~2.5× faster suites); widened ThreadSanitizer coverage plus native ARM64 Windows UBSan; release-artifact attestation; release-gating soak legs. **New since the RC:** VirusTotal scanning of the exact archive artifacts is a standard final step of every dry run (with the flagging engine named, not just counted); local-CI runs are isolated per run id; and the release pipeline itself was debugged in public — `skip_tests` no longer silently skips smoke and soak, and script exec bits are pinned by contract.

## Known issues

- **Small Windows-only memory growth under sustained query load** (~4.5 KB/query; neither macOS nor Linux shows it). This is *not* the #581 ratchet — ownership audits pass and the 53× failure mode is gone — but it is tracked with a follow-up investigation.
- **Warm re-index at very large scale is still slower than v0.9.0-era, but improving.** The delta-merge pipeline shipped in this release replaces the rebuild-and-repair path and already cut warm re-index times substantially in our A/B runs; closing the remaining gap to the v0.9.0-era cache-hit numbers is active work in progress. Cold indexing is at or faster than all baselines.
- **Multi-threaded edge-count jitter**: node counts are byte-stable across runs; edge totals can vary marginally run-to-run on resolution-heavy languages (worst case TypeScript). Tracked as an open determinism investigation.
- On macOS a startup line `mem.allocator.not_owned` may appear in logs — on macOS this is the designed configuration (the allocator serves the bound sqlite/tree-sitter populations; ordinary malloc stays with the system allocator) and is harmless. On Windows *and now Linux* it is the tripwire for the #581 class: if you see it there, please file it.

## Antivirus false positives — the full story, and a policy change

**This release ships with 0 detections on every artifact** — every binary archive, both install scripts, and the notices files, each scanned by 60+ engines. The verification table below is generated from those scans, and every VirusTotal link in it is durable: you can re-check the exact bytes yourself at any time.

We owe you the longer story, because it changed how our release gate works — and because it is one of the main reasons the stretch from RC to final took weeks rather than days.

**What happened.** During the RC and final stretch, some builds intermittently tripped **one** machine-learning heuristic — Microsoft's engine reporting `Trojan:Script/Wacatac.B!ml` — while every other engine reported clean. The `!ml` suffix marks a statistical model's score, not a signature match; the `Script` token is a generic bucket in that naming scheme and says nothing about script content. We treated it as a potential compromise first: full dissection of a release matrix built from one commit, reverse-engineering of the flagged artifacts, entropy analysis against packed-payload profiles. Nothing. The verdicts split across every axis at once — the static/dynamic link axis *inverted* between architectures, two macOS binaries with identical segment structure split clean/flagged, and sibling artifacts of one build landed in different variant buckets.

**The decisive evidence:** one identical file — same SHA-256 — went from 0/62 clean to flagged within about an hour, with no change on our side. And the experiment we ran in the other direction confirmed it: we removed every embedded shell script from the binary and moved the UI bundle and integration templates into separate verified files — **the detection count did not drop**, it simply moved between artifacts, so we reverted to the simpler single-binary composition. Part of the verdict lives in the scanner's own state, not in our bytes. No code change can guarantee non-detection, because the classifier is not judging only the code.

**Why the policy changed.** The RC notes said our gate was zero detections, permanently, with no tolerance — and we meant it when we wrote it. But a zero gate against a verdict that flips on identical bytes means our release timing is a function of Defender's cloud-model state, not of our code: each incident cost *days* of verifying bytes against a live Defender endpoint, filing a false-positive report with Microsoft, and waiting for a classifier revision — with development effectively hard-blocked behind it. That is not a sustainable way to ship, and pretending the absolute rule still held would have been the dishonest option. So we replaced it with a policy we can actually keep, [documented and pinned by a contract test in SECURITY.md](https://github.com/DeusData/codebase-memory-mcp/blob/main/SECURITY.md#antivirus-false-positives):

- A release may ship with **at most one** detection, and only when the engine is Microsoft and the label ends in `!ml` — the exact, evidenced false-positive class described above.
- **Everything else still blocks, hard:** two or more engines, any signature-based label, any other vendor, any "suspicious" verdict.
- A tolerated detection is **published, never hidden** — it appears in the verification table below with its VirusTotal link and a `TOLERATED` marker, so you can always see exactly what shipped.

This release did not need the tolerance — it scans fully clean — but you should know the rule under which future releases ship.

**This is endemic, not specific to us.** The same `!ml` family repeatedly hits large, unsigned, native open-source binaries: [llama.cpp](https://github.com/ggml-org/llama.cpp/issues/15874) (nothing found on reverse engineering), [GitHub's own `gh` CLI](https://github.com/cli/cli/issues/13306), [Microsoft's own Go toolchain](https://github.com/microsoft/go/issues/1255), [Anthropic's Claude Code](https://github.com/anthropics/claude-code/issues/36796), [OpenAI's Codex](https://github.com/openai/codex/issues/2228), [rust-lang](https://github.com/rust-lang/rust/issues/88297), [yt-dlp](https://github.com/yt-dlp/yt-dlp/issues/7532), [Godot](https://github.com/godotengine/godot/issues/110612), [PyInstaller](https://github.com/pyinstaller/pyinstaller/issues/5854), [Tauri](https://github.com/tauri-apps/tauri/issues/2486). A Microsoft engineer on the Go team [put it plainly](https://github.com/microsoft/go/issues/1255): *"we can't exactly go fix something and solve all Go false positives."* We deliberately do not reshape the binary to dodge the classifier — that is what malware does, and the same engineer reports it *"increases scrutiny rather than avoiding it."* We would rather be scannable and explain a false positive than be unreadable and score well.

**What we fixed anyway.** The investigation turned up real defects, corrected on their own merits and now asserted by release gates: every Linux binary we had ever shipped requested an executable stack (a missing `.note.GNU-stack` annotation); a test-only fork probe was compiled into production builds; the daemon spawned `curl` against the GitHub releases API to check for updates — removed, **cbm now makes no network request of its own accord**; unused extraction and SQLite loadable-extension machinery compiled out; temp-file and symlink-scan hardening; and build timestamps removed for reproducible bytes.

**The durable fix is code signing**, and it is underway — identity validation and platform enrollment are bureaucratic, not technical, so it lands on its own schedule. Signing will help on Windows; note that no code-signing scheme exists that AV engines honour for Linux ELF binaries, so the transparency above is permanent, not transitional. If you find anything that contradicts our assessment, we want to know: open an issue with the **`av-analysis`** label — a concrete finding changes our position. Until signing lands, the gate above, published hashes, build provenance attestation, and source you can always build yourself are the trust anchors for this project.

## Thanks to our contributors

This release is substantially community work — features, fixes, and the reports that made the fixes possible. Merged contributions:

@halindrome (Perl LSP-tier resolution, #461/#459) · @isc-tdyar (ObjectScript support #467, extractor fixes #1060) · @aaiyer (Mojo wiring #939, coverage scope labels #1148) · @WarGloom (atomic cache publish #940, structured compact results #1043, alias-safe Haskell arrays #1232, similarity/worker fixes #1368/#1369) · @SEPURI-SAI-KRISHNA (Cypher & store robustness #1173/#1175/#1176/#1177) · @sini (Nix extraction overhaul #1304/#1305) · @gsdali (Swift cross-package IMPORTS #1222) · @AmirF194 (Cypher aggregation classification #1221, project-name resolution #1258) · @harshitaajoshi (Cypher `coalesce()` #991, UTF-8 docstring boundary #1094, GoogleTest node collisions #1329) · @CharlesQueiroz (JAX-RS route composition #1007, template-literal URL flattening #1008) · @JhohanBustamante (Cypher composite properties #1098, decorator extraction #1097) · @SS-42 (nonblocking ADR reads #892) · @M-Marbouh (ADR write validation #1141) · @lishixiang0705 (detect_changes scoping #1372) · @agn-7 (shared-skills improvements #1373) · @dergachoff (Codex role TOML transport #1408) · @ahmadgamal15-art (Windows binary-mode stdio #1424) · @mlandolfi90 (hidden child-process consoles #1448) · @Oxygen56 (MinGW GCC compatibility #1226) · @lukiod (UI Accept-Language ranking #1313) · @dpersek (TSan CI target #890, tools/list pagination #980) · @blankanswer (C++ line remap #949, CLI docs/tests #947/#948) · @pcristin (Cypher DISTINCT #906) · @muba00 (PHP trait OOM #920) · @apappas1129 (native fetch() HTTP_CALLS #927) · @yangsec888 (memory-budget resolver #954) · @Cosm1cAC (Windows UTF-8 temp files #956) · @LA-10 (aliased import resolution #979) · @Dhruvy0804 (CONFIGURES guards #982) · @Sinjan-Debnath (C/C++ include resolution #983) · @ShiroKSH (ADR clear on delete #985) · @spde (incremental File naming #995) · @metehanulusoy (shadow-row project resolution #1046) · @tmonestudio (test cache isolation #1067) · @PR9000 (FreeBSD memory detection #1093) · @alex-plosceac (.gitattributes ordering #916) · @CooperSheroy (docs #605) · @gandie (docs #1131)

And the reporters whose precise, reproducible issues drove this release's correctness work — including everyone who took the RC ask seriously and ran it in anger:

@dergachoff (#1387, #1388, #1425 — three rc.1 reports, each now fixed) · @artaommahe (#1360, #1375) · @OmerZeyveli (#1383) · @jayeshh-1 (#1416) · @0hirume (#1427) · @b1rdex (#1334) · @masesas (#1234) · @ysyecust (#1266) · @kriswill (the store-integrity series #895–#898) · @KasaharaDefries (#765) · @tmstack-io (#951) · @ericsonjulio1 (#773) · @Phantom-Star829 (#794) · @aitoroses (#797) · @rockywang101 (#856) · @zihaozhaoo (#858) · @trinhan2106 (#871) · @rudi193-cmd (#874) · @bsahafian (#929) · @wymfly (#937) · @paolo-blocklabs (#952) · @ARZF (#958) · @Zeermil (#964) · @squall-cyber (#973) · @LA-10 (#988) · @meszkee (#996) · @KnifeOfLife (#1025) · @mostafnamazy (#1032) · @metehanulusoy (#1044) · @rehanazher (#1077) · @itayost (#1085) · @lg320531124 (#764)

…and the reporters of every other issue resolved in this cycle:

@ahundt · @asemraza · @Carnival-z · @castlemilk · @davidwwu · @ecosuper2025 · @edwardmhughes · @georgejieh · @holsee · @jimeng754-eng · @junk151516 · @kenvqin · @Leon-L-Li-RSP · @LiberiFatali · @materwelonDhruv · @mattepiu · @maxniu1 · @mentallabyrinth · @MrXuanZF · @niksh06 · @oscar6echo · @raksasaa · @regoravalaz · @saitrsh · @skbs-eng · @thunderstumpges-servicenow · @x1051445024 · @YugantM

…and everyone who discussed, re-tested, and nudged. Dependency updates via Dependabot.

**Full changelog:** https://github.com/DeusData/codebase-memory-mcp/compare/v0.9.0...v0.10.0

<!-- cbm-security-verification:start -->
## Security Verification

VirusTotal completed **14 distinct extracted byte objects** covering **32 exact extracted archive members**.
The extraction manifest binds those associations to **8 downloadable archives** by SHA-256 provenance. Downloadable .tar.gz/.zip release containers were not submitted to VirusTotal.

Every scanned object returned **0 malicious and 0 suspicious** verdicts with 54–69 decisive engine results (required minimum: 50).
Microsoft returned a decisive clean verdict for all 8 executable objects.

Durable public evidence: [associations](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.0/virustotal-associations.tsv), [exact scan set](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.0/virustotal-scan-set.tsv), [per-extracted-object results and report links](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.0/virustotal-results.tsv), [evidence checksums](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.0/virustotal-evidence-checksums.txt).

Archive SHA-256 provenance (from the extraction manifest):

| Downloadable archive | SHA-256 provenance |
|---|---|
| `codebase-memory-mcp-darwin-amd64.tar.gz` | `1efcb2096a21e76a090a2c2c1b103fc705f0445f7107df7ca9bead4eab130f5d` |
| `codebase-memory-mcp-darwin-arm64.tar.gz` | `0e559ee1c1170a2925e72e6752d527ff66785ab17efb55efecb225c9a6babc21` |
| `codebase-memory-mcp-linux-amd64-portable.tar.gz` | `3868eecb025c93b0018b2c48f00f2ba435557aaf2ac83edbfe613b7fca9a23b1` |
| `codebase-memory-mcp-linux-amd64.tar.gz` | `ef5ca5c8ded02f700d90b04444bc0cb67d0e9508831ab44c1a4ede02f1fa189c` |
| `codebase-memory-mcp-linux-arm64-portable.tar.gz` | `a97089ec5ccf011e9fc936fa4648e728f10f8cde7ba3b3a81be8d9264d7df5b0` |
| `codebase-memory-mcp-linux-arm64.tar.gz` | `d8215279e3e46a65b83e382e26ae87392649aa56f4360dbfba7b9453eddb6b35` |
| `codebase-memory-mcp-windows-amd64.zip` | `f8a50d2baad94ea2c1ef8c045452a0ef35974e0b03e95e75fb42fea743ab86ef` |
| `codebase-memory-mcp-windows-arm64.zip` | `925abf7cb23d82130bd1c52eb7c4801f1aee4d824f28d03a69897b7d54dd0a54` |
<!-- cbm-security-verification:end -->

---

> **Source** [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) · `v0.10.0` · 2026-08-10 · [upstream release](https://github.com/DeusData/codebase-memory-mcp/releases/tag/v0.10.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
