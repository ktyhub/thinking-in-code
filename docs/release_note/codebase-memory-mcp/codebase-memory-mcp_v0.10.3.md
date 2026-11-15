---
title: "codebase-memory-mcp v0.10.3"
project: "codebase-memory-mcp"
repo: "DeusData/codebase-memory-mcp"
tag: "v0.10.3"
version: "v0.10.3"
published: "2026-08-13"
type: "patch"
lang: "en"
summary: "A fixes-only release, and most of it arrived as finished work from the community: six contributed pull requests are in here, alongside repairs for two regressions we shipped ourselves in v0.10.2."
---

# codebase-memory-mcp v0.10.3

# codebase-memory-mcp v0.10.3

A fixes-only release, and most of it arrived as finished work from the community: six contributed pull requests are in here, alongside repairs for two regressions we shipped ourselves in v0.10.2.

Two things worth knowing before you upgrade. **If you run more than one MCP client against the same project**, this release closes a bug that could silently destroy a healthy index — start with the first section. **And if installing or updating has been failing for you**, three separate causes are fixed here: a permission rule that refused ordinary home directories, an error message that reported the wrong reason entirely, and Codex losing your cache directory. Several of those failed *silently* or blamed the wrong thing, which is why they survived multiple releases.

## Concurrent instances no longer quarantine each other's databases

The worst bug in this release, fixed by **@LynxBay**. When two cbm instances raced on the same project — two editors, an editor plus a CLI call, a daemon and a stray session — the loser of the lock race could conclude the database was *corrupt* and quarantine it: renamed away, rebuilt from scratch, hours of indexing gone. The database was healthy; the integrity check just couldn't tell "damaged" from "busy" (#1206).

The same check had the opposite blind spot too: a database with genuinely torn pages passed as long as its top-level bookkeeping looked right, so real damage went unnoticed until queries misbehaved (#1037).

Integrity now returns a three-way verdict. Only confirmed corruption quarantines; a lock race says "project is busy; retry after indexing" and leaves the data alone; and a deep `quick_check` catches page-level damage the shallow probe missed. Both directions carry regression tests.

## Graph determinism, twice

Two contributions from **@Studnicky** close two long-standing sources of run-to-run drift — the "same repo, slightly different edge counts" behavior tracked in our known issues since the 0.9.1 RC:

- When the same logical edge is produced twice with different attributes (an LSP-resolved call and a textual match, say), the survivor was whichever arrived last — a function of thread scheduling. The merge is now a total order: higher confidence wins, ties break deterministically, and the outcome is independent of arrival order by construction.
- CONFIGURES candidate collection sorted nothing before applying its cap, so which candidates survived depended on worker merge order. Candidates are now ordered by a pure content key first — notably *not* by node id, which looks stable but is itself handed out in merge order.

## Windows: daemon files created with an empty ACL

**@Kiborgik** diagnosed and fixed a subtle one (#1351): the daemon's private directory combined a protected DACL with a non-inheritable ACE, which on Windows means children inherit *nothing* — every file created inside was born with an empty ACL and unreadable even by its owner. Directories now carry a properly inheritable owner-only ACE, so the strict security posture is kept and the files actually work. A companion fix from the same contributor closed a trap where a machine named like its user granted permissions to an empty principal; testing that on a non-domain-joined machine surfaced the mirror-image trap, so our build tooling now identifies the account by SID and stops resolving names altogether.

## Repairs for two v0.10.2 regressions

Both reported within hours — thank you for the fast signal.

- **`update --ui` stopped working** (#1544, @ehendrix23). v0.10.2 removed the obsolete ui/standard chooser *and* the flags that drove it, so a command living in scripts and muscle memory became a hard error. Both flags are accepted again — they do nothing, say so once, and genuinely unknown flags still fail.
- **The generated Pi extension broke Pi entirely** (#1550, @musichen). Pi loads an extension by calling its default export; ours exported a named function instead, and a Pi extension that fails to load takes every `pi` command down with it, `pi doctor` included. The extension now default-exports its factory. Fixed independently by @musichen and @henri-edh as well, whose sharper description of Pi's loader is the comment now in our source.

## Structured output stops dropping evidence

`trace_path(include_evidence: true)` promised per-hop `strategy` and `confidence` columns, and delivered them — in tree format only. With `format: "json"` both fields silently vanished, which hit exactly the callers most likely to want them: the ones consuming structured output programmatically (#1542, @asemraza). The JSON path now carries both fields with the same semantics, nulls standing where the tree format prints `-`.

## Subprocess spawns survive a busy machine

Chasing a CI flake uncovered a real robustness gap: when the kernel refuses a process spawn with "try again" — a momentarily full process table on a loaded machine — cbm treated it as a permanent failure. A git probe or LSP server would refuse to start for a reason invisible to the user. Transient spawn failures now retry briefly; real errors (missing binaries, permissions) still fail immediately with unchanged semantics.

## Install and activation: the refusal nobody could act on

Follow-up to #1537 (@listepo), and it turned out to be two defects stacked on each other.

The daemon refused to run when any *ancestor* of its cache directory was group-writable — the same rule we removed on the installer side in v0.10.2, in the sibling check that decision covers but that never got changed. A group-writable `~` or `~/.cache` is ordinary (WSL2 ships 0775, so do several distro skeletons and any machine with a shared primary group), so for those users the daemon was permanently unusable, with nothing to close and nothing a reboot would fix. World-writable ancestors are still refused — any local user could swap a path component — and the private directory itself is still forced to owner-only, which is what makes admitting the ancestor safe.

Underneath that, the error message was inventing its own evidence: the refusal path set no error code, so the reporting fell back to printing whatever `errno` happened to hold, and handed the reporter `ENOENT` for a permission decision. They went looking for a missing file that was there the whole time. The message now names the directory and the rule that refused it.

Also in this area: the activation guard reported every refusal as "active CBM sessions could not be stopped", including failures where nothing is running at all. Those are now separate messages, the second says plainly that nothing needs closing, and neither remedy assumes a `codebase-memory-mcp` binary is still on PATH — advice that was unusable at exactly the moment it printed, right after `uninstall`.

## Also fixed

- **Codex saw no cbm tools when `CBM_CACHE_DIR` was set** (#1562, @anton-matosov). Codex passes only explicitly-listed variables into an MCP subprocess, so the server it spawned read the default cache while the daemon used the configured one; they disagreed and the connection closed during initialization. The generated config now forwards the variable.
- **The installed skill file failed to load in strict YAML readers** (#1554, @xezzon). Its `description` contained `Triggers on: ` unquoted, and a colon-space in an unquoted YAML scalar means "nested mapping" — so parsers rejected the whole document and the skill silently never loaded.
- **`search_code` echoed a negative `limit` back as the result count** (#1511, fix by @lukiod), which reads to an agent as an answer rather than a rejected argument.
- ~~**OpenCode installs went into the wrong file** (@iandol).~~ **Correction:** this was listed here in error. The fix merged a few hours *after* the v0.10.3 tag was cut, so it is **not** in this release — it ships in v0.10.4. If your OpenCode config is a `.jsonc` file, upgrading to v0.10.3 will not have helped, and we are sorry for the wasted time.
- **Release archives are validated before extraction** (#1510, @cyphercodes): an exact member set, with symlinked members refused outright.

## Upgrade

- **Binary installs:** download below, or re-run `install.sh` / `install.ps1` — re-running the installer *is* the update.
- **npm / PyPI:** update through your package manager as usual.
- No index, cache, or config migration.

**Full changelog:** https://github.com/DeusData/codebase-memory-mcp/compare/v0.10.2...v0.10.3

<!-- cbm-security-verification:start -->
## Security Verification

VirusTotal completed **17 distinct extracted byte objects** covering **56 exact extracted archive members**.
The extraction manifest binds those associations to **14 downloadable archives** by SHA-256 provenance. Downloadable .tar.gz/.zip release containers were not submitted to VirusTotal.

16 of 17 scanned objects returned **0 malicious and 0 suspicious** verdicts with 57–68 decisive engine results (required minimum: 50).
**1 object(s) carry a single Microsoft machine-learning detection** (`!ml`), which this project treats as a known false positive and publishes rather than hides. Every other engine returned clean. See [Antivirus False Positives](https://github.com/DeusData/codebase-memory-mcp/blob/main/SECURITY.md#antivirus-false-positives) for the evidence and for how to verify these artifacts yourself: `objects/scan-c05a4598b3bb23d82efbde5e6bc01989297156ed153dadbd281ba8886c96f2d6--codebase-memory-mcp`

Durable public evidence: [associations](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.3/virustotal-associations.tsv), [exact scan set](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.3/virustotal-scan-set.tsv), [per-extracted-object results and report links](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.3/virustotal-results.tsv), [evidence checksums](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.3/virustotal-evidence-checksums.txt).

Archive SHA-256 provenance (from the extraction manifest):

| Downloadable archive | SHA-256 provenance |
|---|---|
| `codebase-memory-mcp-darwin-amd64.mcpb` | `b430ec7898c7c857f72672faf1347a3da0b2ec9eac34ffe7940d857a42d62616` |
| `codebase-memory-mcp-darwin-amd64.tar.gz` | `1107fea28285823e1436e4f38a4e00a0b472d8a43c379da7dfd200c914a4b9dd` |
| `codebase-memory-mcp-darwin-arm64.mcpb` | `c0f524d28970682b940e2e08f702f7c46c0c4a6d593349ccd1e409e4e11425ed` |
| `codebase-memory-mcp-darwin-arm64.tar.gz` | `0ebf02328207d4c3d862c837b5e973de5bac808df92b0941737721d467287f7f` |
| `codebase-memory-mcp-linux-amd64-portable.mcpb` | `704549677d608d61fd6164a5a65ab16d1f143732906be28d2bdfb062b56e9e3e` |
| `codebase-memory-mcp-linux-amd64-portable.tar.gz` | `254937e3e252c5caa2c507366be8258acea239dc5d1c0dd715ee425259ef492c` |
| `codebase-memory-mcp-linux-amd64.tar.gz` | `74997fb0934e70a22f20c2e112fb4d883867dc1f01a7bcdc94cf86d13b5cbd31` |
| `codebase-memory-mcp-linux-arm64-portable.mcpb` | `aff4f741dfe34dbf68649593808abfa3312770b153607b97a0cd7a1a7227bc42` |
| `codebase-memory-mcp-linux-arm64-portable.tar.gz` | `b4ee6aafcc2f3a12e537709e16e42dc49e98ad5c1d620eba1fbad5d83825dac5` |
| `codebase-memory-mcp-linux-arm64.tar.gz` | `967b9eababfdbd2ef1987c571d55bc7c028cd1db7f99279830634c58db311e32` |
| `codebase-memory-mcp-windows-amd64.mcpb` | `a88a2670fdc7b4aeb31b16dc7c37646aad85b93d44d656acb1fcae02a222a6be` |
| `codebase-memory-mcp-windows-amd64.zip` | `fa7e53dd5e6b8daf633db7bf37a923061d836a70dd380d6627736d95b998875b` |
| `codebase-memory-mcp-windows-arm64.mcpb` | `391262ebf664c0bba4ba1be343fa4fde92d1f30918811a0656dcd711df8d34e8` |
| `codebase-memory-mcp-windows-arm64.zip` | `dd1dfc9039ee431fbdeab1dfb482ec19ea7a5f0fd821b1f04ae1599c9e772342` |
<!-- cbm-security-verification:end -->

---

> **Source** [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) · `v0.10.3` · 2026-08-13 · [upstream release](https://github.com/DeusData/codebase-memory-mcp/releases/tag/v0.10.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
