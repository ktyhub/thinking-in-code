---
title: "codebase-memory-mcp v0.10.4"
project: "codebase-memory-mcp"
repo: "DeusData/codebase-memory-mcp"
tag: "v0.10.4"
version: "v0.10.4"
published: "2026-08-14"
type: "patch"
lang: "en"
summary: "An install-and-diagnostics release. If v0.10.3 refused to install or start for you — particularly on Windows, or on a machine where you installed cbm through a package manager — this is the one to take."
---

# codebase-memory-mcp v0.10.4

# codebase-memory-mcp v0.10.4

An install-and-diagnostics release. If v0.10.3 refused to install or start for you — particularly on Windows, or on a machine where you installed cbm through a package manager — this is the one to take.

Most of what follows came from people who filed precise reports and, in several cases, root-caused the bug before we did.

## Windows: elevated accounts could not install or start at all

Running as an Administrators-group account meant `install` failed with `activation transaction I/O failed: owner-not-current-user`, or the MCP server exited during startup with nothing in the log but a closed transport.

The cause was ours and specific: we compared a file's owner against the token's *user* SID, but Windows stamps newly-created objects with the token's *owner* SID — which for any member of the Administrators group defaults to `BUILTIN\Administrators`. So the installer created its own staging file and then refused it, seconds later, as belonging to someone else. No amount of rebooting or closing processes could help, because nothing was running.

We now also accept the SID Windows actually stamps on what we create. This is narrower than "trust any administrator": a file owned by a genuinely different account is still refused. Reported by **@spam0115** and **@gotspatel**, and it is very likely the cause of the long-running #1416 as well.

## Installing no longer touches things it doesn't own

Two changes for people whose setup we were trampling:

**A binary installed by mise, Homebrew, nix, asdf or cargo is left alone.** Previously `install` dropped a second copy into `~/.local/bin` — shadowing the managed one depending on `PATH` order — and appended to your shell rc file. Now it configures the agents and leaves the binary and your `PATH` untouched, `update` refuses honestly and names the command that will work (`mise upgrade`, `brew upgrade`), and `PATH` is only modified when we actually placed the binary. Reported by **@SC-CTS**.

**You can choose which clients get configured.** `install` wrote MCP config, agents, skills and hooks for *every* detected client, and reverting the ones you didn't want was pointless because the next install recreated them. `--clients=claude,codex` now restricts it, and `--clients` on its own lists every supported token. Reported by **@PsyTech-Rob**.

## Errors that tell you what actually happened

Three fixes in a row here, all from the same complaint: our messages were confidently wrong.

- **An activation refusal no longer points at evidence it doesn't show.** v0.10.3 correctly stopped blaming "active CBM sessions" for failures no session caused, but then told you to check errors that were never printed. It now names the directory and the rule that refused.
- **A server that cannot start says why.** Client-path startup failures wrote to stderr only, which no MCP client surfaces — so a specific, nameable refusal reached you as "transport closed unexpectedly". Those failures now arrive as a JSON-RPC error carrying the reason.
- **The UI listener can be turned off without editing JSON.** `ui_enabled` governs a loopback HTTP port, and the only way to disable it was hand-editing `config.json`; it was invisible to `config list` and rejected by `config set`. Both it and `ui_port` are now first-class config keys. Reported by **@PsyTech-Rob**, who spent two debugging sessions finding the switch.

## Codex, OpenCode and config-file repair

- **A duplicated install no longer breaks Codex permanently** (**@astandrik**). An owned inline hook assignment is reconciled into the canonical block instead of being ignored and re-added alongside; foreign hook entries are preserved untouched, and genuinely ambiguous TOML is refused without modifying the file at all.
- ~~**OpenCode installs land in the file OpenCode actually reads** (@iandol).~~ **Correction (2026-08-14):** this is only half true and we should not have claimed it outright. The *targeting* is fixed — we now write whichever of `opencode.json` / `opencode.jsonc` already exists, instead of always creating a `.json` file OpenCode ignores. But the **write itself still fails** on v0.10.4 with `error: agent_config agent=OpenCode op=mcp_install`, reported on both Linux and Windows. Tracked in #1630. This is the second release running in which we have described this fix as complete; sorry, and thank you to the reporters who kept saying it was not.
- **An orphan marker we wrote heals itself.** An earlier install could leave a closing `# <<<` marker with no opener, after which every install failed that client outright. Removal now strips the stray line. A *write* still refuses on an imbalance — with one marker there is no defensible region to replace.

## Query correctness and platform support

- **`OPTIONAL MATCH` stopped silently dropping rows** (**@SEPURI-SAI-KRISHNA**). Once the hop buffer saturated, the no-match rows — exactly what `WHERE x IS NULL` exists to surface — were discarded. Not a crash, not a memory error: quietly fewer results, with nothing to indicate the answer was incomplete.
- **FreeBSD resolves its own executable path** (**@PR9000**), which the install and ownership checks depend on, plus a build fix for platforms outside the main three.

## Security

The release pipeline now pins and verifies the external tooling it downloads before executing any of it, rather than trusting whatever the upstream project publishes at build time. Verification covers every platform the job may run on, from a single pinned reference.

Reported by **Andrew Hundt** (#1245).

## Reliability

Subprocess spawns survive a busy machine. v0.10.3 started retrying a spawn the kernel refused with "try again", but only for about 30ms — enough for a momentary dip, not for a machine that stays process-starved for hundreds of milliseconds at a stretch, which is exactly when it happens. The retry now backs off exponentially to roughly half a second before giving up. A genuinely exhausted machine still fails fast rather than hanging, and real errors — a missing binary, a permission denial — fail immediately as before.

And the release pipeline no longer publishes its registry entry before the release is public — the bug that made v0.10.3's own registry step fail with a 404 against its own assets.

## Upgrade

- **Binary installs:** download below, or re-run `install.sh` / `install.ps1`.
- **Package managers:** update through them as usual — cbm will now leave that binary alone.
- **npm / PyPI:** as usual.
- No index, cache, or config migration.

## Contributors

Code in this release came from:

- **@astandrik** — Codex hook reconciliation, with fail-closed handling that leaves an ambiguous config byte-identical rather than guessing
- **@PR9000** (Pedro Ramos) — native FreeBSD executable-path resolution, plus a build fix for platforms outside the main three
- **@SEPURI-SAI-KRISHNA** — the `OPTIONAL MATCH` row-loss fix, including the analysis that separated "in bounds" from "correct"
- **Andrew Hundt** — the release-pipeline hardening above, co-authored

And these reports found bugs we could not have found ourselves, several of them root-caused by the reporter before we looked:

**@spam0115** and **@gotspatel** (Windows elevated accounts) · **@SC-CTS** (package-manager installs) · **@PsyTech-Rob** (four separate findings in one install cycle) · **@listepo** (the diagnostics that identified a refusal we had been guessing at) · **@iandol** (OpenCode config targeting)

Thank you — particularly to those of you who kept reporting through several releases of install trouble.

**Full changelog:** https://github.com/DeusData/codebase-memory-mcp/compare/v0.10.3...v0.10.4

<!-- cbm-security-verification:start -->
## Security Verification

Before smoke and soak testing, VirusTotal completed **24 executable scans**: stripped and unstripped candidates for each of the **8 release products**. Every scan had at least 50 decisive engines (observed range: 59–68).
**3 candidate(s)** had only the documented single Microsoft machine-learning `!ml` result; no other decisive engine reported malicious or suspicious.

| Product | Stripped candidate | Unstripped candidate | Shipped |
|---|---|---|---|
| `linux-amd64` | [clean](https://www.virustotal.com/gui/file/09db4f424c1fca97b5d06feb75ca6540629a5b67309e39a9a551e745b081023b/detection) | [clean](https://www.virustotal.com/gui/file/7f6311b204bbd48ec220922b2939f99a0dccabd9a0296bfdf85fb03d087552ae/detection) | `stripped` (`09db4f424c1fca97b5d06feb75ca6540629a5b67309e39a9a551e745b081023b`) |
| `linux-arm64` | [Microsoft `!ml`](https://www.virustotal.com/gui/file/a2a67782753de23b8badecfe71cfaed53717ae4f4492441a75a4d1401d66fd80/detection) | [clean](https://www.virustotal.com/gui/file/cb3bee368ac5484e1298dc28597e94ead77f2e81ebf14b07e284cc746b6c9425/detection) | `debug-stripped` (`e0cd04812093d420a889397a603959c9a35ea3c78dea67c44db80e25a04d29b8`) |
| `linux-amd64-portable` | [clean](https://www.virustotal.com/gui/file/df1b97b0f5266924072a0c020027a14fa1890fa7457183c2106ff7eab4b62122/detection) | [clean](https://www.virustotal.com/gui/file/410fd1ecc0b3f621a6479a027f93c8c008b40f28dd0ec1a5297b39abfc406057/detection) | `stripped` (`df1b97b0f5266924072a0c020027a14fa1890fa7457183c2106ff7eab4b62122`) |
| `linux-arm64-portable` | [Microsoft `!ml`](https://www.virustotal.com/gui/file/57bd8d04972adc281ee9eabf25f82c9a2044e636540a98ece5be48ff29b07d86/detection) | [clean](https://www.virustotal.com/gui/file/877b021a402c2899d4159449ab2bb51e8d46ef96f67b2e359494eafae8f2d924/detection) | `debug-stripped` (`8427e22d1445b1e4a9a883034c12c18eb78c30e6ba183235ca79e153641a39e9`) |
| `darwin-amd64` | [clean](https://www.virustotal.com/gui/file/9ae79b267fe60438ffbba046bb5ed9e36b2b0f0c04e32970ee6995d616a8ccc6/detection) | [clean](https://www.virustotal.com/gui/file/ea9fd0355e764fe9ee7ebcc5b94e85456a58e0a5174cfa8874c4422c4eefa868/detection) | `stripped` (`9ae79b267fe60438ffbba046bb5ed9e36b2b0f0c04e32970ee6995d616a8ccc6`) |
| `darwin-arm64` | [clean](https://www.virustotal.com/gui/file/75dadd4f243415c3058a8dd0c47137f4e2fd17861c5e79e70efad150ec02724f/detection) | [clean](https://www.virustotal.com/gui/file/4db82a38c393fa38e3e45f97b3d0a21fed69b5d5443f5806c1c00943f3d59e35/detection) | `stripped` (`75dadd4f243415c3058a8dd0c47137f4e2fd17861c5e79e70efad150ec02724f`) |
| `windows-amd64` | [clean](https://www.virustotal.com/gui/file/edfd73e60f40c687bc36b88140056838c0f95842f0839ec20cd0cb061d107f50/detection) | [clean](https://www.virustotal.com/gui/file/739ecd26c5a4e6d2426b740ed63945b85c61354c57cb806ce9a52e940b64899b/detection) | `stripped` (`edfd73e60f40c687bc36b88140056838c0f95842f0839ec20cd0cb061d107f50`) |
| `windows-arm64` | [clean](https://www.virustotal.com/gui/file/48f8e9eeff39d4016a10c93084947142dee3cbc356aa5fa8df57c886beb92e0c/detection) | [clean](https://www.virustotal.com/gui/file/461b215de64bdb8448484dccfd10d56aaae649c84dd4969101bc9edf1acf7a31/detection) | `stripped` (`48f8e9eeff39d4016a10c93084947142dee3cbc356aa5fa8df57c886beb92e0c`) |

Selection is tuple-local and defaults to stripped. The selected executable SHA-256 was verified again after packaging; archive containers were not redundantly submitted to VirusTotal. Their hashes remain available in `checksums.txt`.

Durable evidence: [candidate provenance](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.4/release-candidates.tsv), [candidate VirusTotal results](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.4/virustotal-candidate-results.tsv), [selection decisions](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.4/release-selection.tsv).
<!-- cbm-security-verification:end -->

---

> **Source** [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) · `v0.10.4` · 2026-08-14 · [upstream release](https://github.com/DeusData/codebase-memory-mcp/releases/tag/v0.10.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
