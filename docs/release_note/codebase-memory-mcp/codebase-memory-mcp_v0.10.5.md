---
title: "codebase-memory-mcp v0.10.5"
project: "codebase-memory-mcp"
repo: "DeusData/codebase-memory-mcp"
tag: "v0.10.5"
version: "v0.10.5"
published: "2026-08-15"
type: "patch"
lang: "en"
summary: "An install-and-startup release. If v0.10.4 refused to install for you, refused to write your config, or told you something that turned out not to be true, this is the one to take."
---

# codebase-memory-mcp v0.10.5

# codebase-memory-mcp v0.10.5

An install-and-startup release. If v0.10.4 refused to install for you, refused to write your
config, or told you something that turned out not to be true, this is the one to take.

Several of these are cases where **cbm refused its own work** — an installer directory our own
binary then rejected, a config entry we wrote ourselves and later called foreign, an error
message that named the wrong directory and sent people to inspect a file that was fine.

## Windows: installs that refused themselves

**The installer was creating a directory our own binary then rejected.** `install.ps1` made its
staging directory with `New-Item`, which inherits whatever `%TEMP%` carries. The downloaded binary
validates its own directory and refuses inherited cross-account mutation grants — so we handed our
own check a directory we had just made wrong. Measured on a Windows VM: a fresh staging directory
came up unprotected with **five inherited ACEs**; it now carries a single owner-only entry.

That is the `acl-grants-cross-account-mutation to S-1-5-21-…` failure. Reported by **@RoccoZero**,
**@aecesr**, **@Kiborgik** and **@nasodaengineer**, whose corrections stopped us fixing the wrong
thing twice — @Kiborgik warned that keying on the sandbox group's *name* would miss a synthesized-SID
variant, and @nasodaengineer disproved an off-by-one-RID theory by showing the ACE really was present
on the inherited DACL. **@spam0115** independently wrote a working installer whose decisive line was
the same `icacls /inheritance:r`, and handed it back to us rather than keeping it.

**Sandboxed applications no longer block the daemon.** The ancestor walk refused any
mutation-granting entry on `%LOCALAPPDATA%`, including AppContainer identities left by ordinary
installed software. On reported machines the blocking entry resolved to a shipping desktop
application — nothing a user could reasonably remove. Ancestor components now tolerate AppContainer
package and capability identities; the private runtime directory keeps demanding the exact current
user, unchanged. Approach and the ancestor-only boundary follow **@mlandolfi90**'s work.

## Startup: when the daemon could not be reached

- **The rendezvous directory can be relocated in a shipped build** via `CBM_RUNTIME_DIR`. Previously
  the only relocation hook was compiled out unless test seams were enabled — so a *test* build
  started where the *product* build did not, and when the default ancestry was unacceptable
  **every** invocation failed, `config list` included, leaving no way to reach the settings surface
  and fix it. (#1537, #1574, #1621)

  **@tmonestudio** and **@Carnival-z** each proposed exactly this, independently, before we built it
  — @tmonestudio in #1574 with the ancestry walked and the offending component named, @Carnival-z in
  #1621 after finding that `CBM_CACHE_DIR` moves the cache but never the rendezvous. Both had opened
  pull requests reaching the same conclusion this change implements; the merged commit credits
  @tmonestudio by name for the approach and the variable name.
- **Refusal messages now name the directory that actually refused.** The ancestor walk validates the
  directory it is already in, but printed the name of the child about to be entered — so #1537 was
  told `.cache` was at fault when the home directory was refusing, and #1621 was told
  `cbm-daemon-501` when `/private/tmp` was. Both reporters inspected exactly what we named, found it
  clean, and said so. **They were right, and we kept pointing at it for weeks.** The message now
  names the containing directory and says explicitly not to check the one it used to blame.

## Errors that name what actually refused

Three fixes, one complaint: our messages did not say enough to act on.

- **`secure CLI coordination could not be created (endpoint)`** now prints the validation detail —
  the directory and the rule that refused. Four separate reporters hit that message; one built an
  instrumented binary to discover a single ACE was the cause.
- **A refused agent-config write says what the target is** — whether it exists, and what kind of file
  it is. Nine distinct fail-closed conditions previously collapsed into one indistinguishable failure.
- Neither prints `errno`. It is called from 119 sites and can be stale, which is exactly how an
  earlier release handed a reporter a fabricated "file not found" for a permission decision.

## Config files we wrongly refused to touch

- **An MCP entry your client annotated is no longer treated as foreign** (#1630, #1582). OpenCode
  writes `"enabled": true` beside the `command` and `type` we write; our ownership check demanded an
  exact key-set match, so a three-key entry with two recognised keys was classified as somebody
  else's and left alone — **we refused to touch an entry we had written ourselves**. In one reporter's
  file every MCP server carried the key, so this is OpenCode's normal shape, not an unusual hand-edit:
  anyone who has ever toggled a server on or off in the UI was hit.
- **YAML values containing `*` or `&` are no longer mistaken for aliases and anchors** (part of #1631).
  Prose asterisks, a glob inside a description, a kaomoji — all were refused as if they began a node.
  The test is now positional. Root-caused by **@rg6304**, who reproduced it in isolation, read the
  source, and corrected our hypothesis: the constructs we had guessed appear nowhere in the failing
  file. This is one of four constructs in that report; the rest are still open.

## Data loss and diagnosis

- **`uninstall --help` no longer performs a real uninstall** (#1038). It removed the binary and every
  agent configuration for someone asking what the command does. The guard is checked before argument
  parsing, so a `-y` elsewhere on the line cannot auto-confirm the destruction being prevented.
- **A crashed worker's log now survives and names its run** (#1145, #1130, #1132, #1450, #1133, #1070).
  Six reports ended at the same dead end: the supervisor prints the log path and the file is 0 bytes,
  so the one diagnostic that would explain the failure was silenced by the failure itself.
- **`cli <tool>` no longer blocks forever reading standard input** (#1359) for a tool that declares no
  arguments. `--json` and `--progress` are stripped before the stdin fallback is reached, so
  `cli list_projects --json` hung too — the reporter's correction that "no flags" was not the trigger
  was right.

## Reliability

- **Spawn retries no longer grow without bound** (**@moffermann**). The clamp we shipped could never
  fire, while the doubling it was meant to bound ran free — a future budget increase would have meant
  a 40-second wait where the retry exists to avoid exactly that. Both current budgets are unchanged.
- **Two concurrent sessions can no longer be handed the same temporary directory**
  (**@ertankucukoglu**) — a process-global buffer in the Windows temp-directory helper.
- **Instrumented test builds now know they are instrumented** (**@moffermann**). Four places asked
  that question four different ways, so some sanitizer lanes measured instrumented code against
  native timing budgets.

## Correctness

- **`check_index_coverage` no longer reports every path as unavailable** when a repository has more
  than 2,000 ignored files (**@SunneeYang**). A truncated catalog was treated as proof that no
  per-path answer existed, including for paths with a current hash record.
- **Go routes built by string concatenation now resolve** (**@AmirF194**). A handler registered with
  `base + "/orders"` produced no usable route path; the literal half is now recovered, and a path
  assembled from a variable is still left unresolved rather than fabricated.
- **Cypher queries repeating a variable-length node no longer double it** (**@jstar0**), matching the
  unification the fixed-length path already did.
- **A Windows publish failure says what actually failed.** The atomic publish discarded the Win32
  error and reported a bare `errno`, and one path returned `PERSIST_FAILED` with no log line at all —
  which is how a reporter with an ACL problem was told to check that their repository path existed.
- **Cross-repo intelligence works again on any project that has ever recorded a parse miss**
  (**@vitaliy-shatskiy**, #1609). Indexing writes an internal `<name>::missed` row into the same
  database, and the validation required exactly one row over *all* of them — so such a project was
  rejected as "not indexed", both as source and as target, with no workaround available to the
  operator. The same defect was fixed for `list_projects` in #1044; this site never learned it.

## Performance

- **Windows code search prefilters simple suffix globs** (**@ertankucukoglu**), so a `*.ext` filter no
  longer scans and then discards. The pattern reaching the shell stays behind an allowlist, and the
  original post-scan filter is retained as a second guard.
- **A failed search launch no longer leaks its compiled path filter** (**@ertankucukoglu**).
- **`search_code` can report per-phase timings on request** (**@ertankucukoglu**) — `scope_ms`,
  `scan_ms` and `enrich_ms`, behind `debug: true`. Default output is unchanged, and the measurement
  itself is skipped unless asked for, so nothing is paid for by callers who do not want it.

## Updating from 0.9.x is possible again

**If you are on 0.9.x and `update` has been refusing to install, this is the release that fixes it**
(#1134). v0.10.0 consolidated to one archive per platform, so the `codebase-memory-mcp-ui-*` names
that 0.9.x updaters ask for stopped existing and those updaters 404'd. We fixed that by publishing
byte-identical copies under the legacy names — but that step runs *after* `checksums.txt` is
generated and signed, so the aliases never appeared in it, and an updater that verifies the name it
asked for refused what it could not check:

```
warning: codebase-memory-mcp-ui-darwin-arm64.tar.gz not found in checksums.txt
error: refusing to install an unverified download
```

We fixed the 404 and moved the failure to verification. Confirmed on v0.10.4: eight `ui-*` archives
published, none of them listed. Their digests are now emitted before the attestation step, so the
attested checksum file covers both names — no new bytes, and an alias is a copy, so its digest is by
construction the one already computed. Reported by **@AmooAti**, whose installer was behaving
correctly the whole time.

## Also

- The test suite no longer writes into the developer's real agent configuration (**@phyrexia**).
- A release-gate verdict no longer depends on a live network fetch. The licence provenance audit
  downloaded the canonical Apache-2.0 text while running and byte-compared it, so a failed request
  reported a licence discrepancy that did not exist — reddening an unrelated contributor's pull
  request for over two weeks. It is now pinned by digest.
- MCP envelope fuzz coverage for wrong JSON types (**@lukiod**).
- Release notes now report the verdict for the binary actually shipped, and no longer claim a minimum
  engine count that stopped being true.

## Still open — not fixed in this release

Being explicit, because several of these have been open a long time and shipping quietly around them
would be worse than saying so:

- **#635** — on Windows, clients using the Python MCP SDK never complete the handshake, so no tools
  appear. Open 50 days.
- **#1633** — Codex refuses `config.toml` entries *cbm itself wrote in an earlier version*. The
  OpenCode half of this pattern is fixed above; the Codex/TOML half is not, and we have asked the
  reporter for the exact entry shape.
- **#1631** — three of the four YAML constructs in that report remain unsupported.
- **#1620** — on one Windows host, indexing always fails with a generic `Pipeline failed`: our own
  protected cache-directory DACL breaks `MoveFileExW(REPLACE_EXISTING)`. **Only the diagnosis half is
  fixed here** — the publish failure now reports the real Win32 error instead of a discarded `errno`,
  so the next person is not sent to check that their repository path exists. The behaviour itself is
  unchanged: a fix broke daemon startup in testing and was pulled rather than shipped half-right.
- **#1650** — where another agent's sandbox (OpenAI Codex CLI) has given a **local group**
  profile-wide ACEs, the daemon still refuses to start. The tolerance added above covers AppContainer
  identities, which a process cannot escape; an ordinary local group names a principal that really can
  be exercised, so it is still refused deliberately. `CBM_RUNTIME_DIR` is the intended way out — point
  it at a directory whose ancestry passes.
- **#1632** — `update` can print an `install.sh` path that does not exist, with no fallback. A fix is
  in review; it did not make this release.
- **#1654** — a large tree that v0.9.0 indexed in ~13 minutes fails to index on v0.10.4, reaching
  about 1% in 45 minutes and then dying on allocation failures. Reported today and **not yet
  reproduced by us**; nothing in this release targets it. If you are on a large repository, this
  release does not change that behaviour. One thing here does help though: a crashed worker's log now
  survives, so the next run should produce a diagnostic instead of an empty file.
- **#1343**, **#630**, **#1083** — reproduced by their reporters, not yet by us.

If you are hitting one of these, the issue is the best place to follow it; we would rather point you
at an open ticket than imply it is handled.

## Upgrade

- **Binary installs:** download below, or re-run `install.sh` / `install.ps1`.
- **Package managers:** update through them as usual.
- No index, cache, or config migration.

**Full changelog:** https://github.com/DeusData/codebase-memory-mcp/compare/v0.10.4...v0.10.5

<!-- cbm-security-verification:start -->
## Security Verification

Every binary published below was scanned by VirusTotal before smoke and soak testing, and the verdict for the exact shipped bytes is linked per product (decisive engines: 60–66).
**1 shipped binary** carried only the documented single Microsoft machine-learning `!ml` result; no other decisive engine reported malicious or suspicious.

> **Correction (post-publication).** The table above originally reported
> `linux-amd64` as carrying a Microsoft `!ml` detection and `darwin-arm64` as clean. That was taken
> from the pre-selection candidate scan. The final scan of the exact shipped bytes, run minutes
> later, returned the **opposite** verdicts for those two files, and the table now reflects that
> final scan.
>
> Nothing about the binaries changed between the two scans — same bytes, same hashes. Microsoft's
> machine-learning engine simply returned a different answer for each of them within the same hour,
> in opposite directions. The other six products were stable and clean in both scans.
>
> This is worth stating plainly rather than quietly editing: a `!ml` verdict is a probabilistic
> classifier output, not a property of the file, and we cannot make it stable from our side. Every
> hash above is linked so you can check the current verdict yourself — and it may well differ again
> from what we recorded.


| Product | Shipped binary | VirusTotal verdict |
|---|---|---|
| `linux-amd64` | `82750cd15af0165241c6a22e783eaf8c3e57575aed86aaf2a84a866a15de7ab6` | [clean](https://www.virustotal.com/gui/file/82750cd15af0165241c6a22e783eaf8c3e57575aed86aaf2a84a866a15de7ab6/detection) |
| `linux-arm64` | `f944b83584fd9b6e83f5199fd71bf628218516fe0af2e8ced9376ee1367f19da` | [clean](https://www.virustotal.com/gui/file/f944b83584fd9b6e83f5199fd71bf628218516fe0af2e8ced9376ee1367f19da/detection) |
| `linux-amd64-portable` | `dfd7db016354f223cb8c8a22d8c4ceb418b51b8b4bce541669ff32288731ad03` | [clean](https://www.virustotal.com/gui/file/dfd7db016354f223cb8c8a22d8c4ceb418b51b8b4bce541669ff32288731ad03/detection) |
| `linux-arm64-portable` | `235258163aae1e573ae61933fee31f1e023d593211acc1243507401727f6f9a8` | [clean](https://www.virustotal.com/gui/file/235258163aae1e573ae61933fee31f1e023d593211acc1243507401727f6f9a8/detection) |
| `darwin-amd64` | `785862e49b5939b6093ca150d322fb6666a237dec93c2d74f1c632f2edcc3f1a` | [clean](https://www.virustotal.com/gui/file/785862e49b5939b6093ca150d322fb6666a237dec93c2d74f1c632f2edcc3f1a/detection) |
| `darwin-arm64` | `6d3c5be6412008c039b1dbaadc2a295a032bbcae52671e71ee13233b665495a8` | [Microsoft `!ml`](https://www.virustotal.com/gui/file/6d3c5be6412008c039b1dbaadc2a295a032bbcae52671e71ee13233b665495a8/detection) |
| `windows-amd64` | `f8aee1683f94f7598ae70640a588f27d51811433f046b39c1faf186c17010739` | [clean](https://www.virustotal.com/gui/file/f8aee1683f94f7598ae70640a588f27d51811433f046b39c1faf186c17010739/detection) |
| `windows-arm64` | `c3a91dcab960250521a31dd831e2aad6785971db40c013513d37f17eda95b3a0` | [clean](https://www.virustotal.com/gui/file/c3a91dcab960250521a31dd831e2aad6785971db40c013513d37f17eda95b3a0/detection) |

Selection is tuple-local and defaults to stripped. The selected executable SHA-256 was verified again after packaging; archive containers were not redundantly submitted to VirusTotal. Their hashes remain available in `checksums.txt`.

Durable evidence: [candidate provenance](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.5/release-candidates.tsv), [candidate VirusTotal results](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.5/virustotal-candidate-results.tsv), [selection decisions](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.5/release-selection.tsv).
<!-- cbm-security-verification:end -->

---

> **Source** [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) · `v0.10.5` · 2026-08-15 · [upstream release](https://github.com/DeusData/codebase-memory-mcp/releases/tag/v0.10.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
