---
title: "codebase-memory-mcp v0.10.2"
project: "codebase-memory-mcp"
repo: "DeusData/codebase-memory-mcp"
tag: "v0.10.2"
version: "v0.10.2"
published: "2026-08-11"
type: "patch"
lang: "en"
summary: "An install-and-upgrade release. If v0.10.0 or v0.10.1 refused to install, refused to update, or your MCP client showed a server that connected to nothing — this is the fix, and every one of those failures came from a…"
---

# codebase-memory-mcp v0.10.2

# codebase-memory-mcp v0.10.2

An install-and-upgrade release. If v0.10.0 or v0.10.1 refused to install, refused to update, or your MCP client showed a server that connected to nothing — this is the fix, and every one of those failures came from a user report filed in the last 24 hours.

The pattern behind all of them: gates that were right in principle refused ordinary, legitimate setups, and then didn't say why. Each one below keeps the protection that matters, drops the part that was refusing real users, and now names exactly what it refused and how to proceed.

## `npx` (and every ephemeral install path) works again

Running cbm through `npx codebase-memory-mcp` produced a server that answered nothing: the client waited 30 seconds and exited with **zero bytes on stdout**, which agents surfaced as `-32000: Connection closed`. Every npx invocation hit this, deterministically.

The daemon verifies a connecting client's binary image, and it was treating two very different outcomes as one failure: *"this image hashes differently than mine"* (the tamper case the check exists for) and *"this image cannot be examined at all"* — which is what an ephemeral npx cache path always produces. The second is now admitted: the handshake immediately before it has already proven semantic version, build fingerprint, and protocol/store/feature ABI, so refusing on top of that traded a real compatibility proof for an unavailable one. A genuine fingerprint **mismatch** still rejects, hard, and the admission is logged out loud so the weaker check is never invisible.

Separately and unconditionally: a client that cannot reach the daemon now **says so in JSON-RPC**, naming the reason, instead of exiting silently. Thanks to **@wassolles**, who arrived with the reproduction, the admission path already read, and three candidate fixes — the one we shipped was theirs.

## Installing into an ordinary Linux home works again

`install.sh` failed with `error: failed to stage install candidate: activation transaction I/O failed` — a message that sent people hunting disk errors and filesystem types for what was, in fact, a permission policy: the installer required no group-write bit on the install directory *and every parent above it*. WSL2 ships `~` and `~/.local` at 0775, as do several distro skeletons and any site using a shared primary group.

World-writable parents are still refused — any local user could swap a path component mid-install. Group-writable parents are now warned about and accepted, while the install directory itself stays strictly owner-private: that is where the binary lands, and group write there would let another account replace the executable between verification and launch. Refusals now name the directory, its mode, and which rule refused.

Root-caused by **@AmirF194** in a clean container, down to the exact predicate and line; independently confirmed by **@shochdoerfer** and **@iandol**.

## Updating from 0.9.x works again

v0.10.0 consolidated to one archive per platform with the graph UI always embedded, but `update` still asked which variant you wanted — where "ui" could only 404, and "standard" quietly *was* the UI build. The chooser and its flags are gone.

Binaries already installed in the field can't be fixed retroactively, so **releases now also publish `ui-*`-named copies of each archive**. Every 0.9.x updater that asks for the old name gets the same bytes and completes normally, with nothing required from you. Reported by **@iandol**.

## macOS install diagnostics

`install.sh` no longer prints `No such xattr: com.apple.quarantine` — a harmless line (a curl-downloaded archive simply carries no quarantine attribute) that was mistaken for the cause of an unrelated failure, to the point of becoming a bug report's title. And when installation is genuinely blocked by a running session, the error now points at `codebase-memory-mcp daemon status` to list the processes actually holding it, instead of asserting that sessions exist and leaving you to find them. Reported by **@listepo**.

## Upgrade

- **Binary installs:** download below, or re-run `install.sh` / `install.ps1` — re-running the installer *is* the update.
- **npm / PyPI:** update through your package manager as usual.
- **From 0.9.x:** the old updater works again as of this release; if it already failed for you, re-running the installer is the fastest path.
- No index, cache, or config migration.

**Full changelog:** https://github.com/DeusData/codebase-memory-mcp/compare/v0.10.1...v0.10.2

<!-- cbm-security-verification:start -->
## Security Verification

VirusTotal completed **14 distinct extracted byte objects** covering **32 exact extracted archive members**.
The extraction manifest binds those associations to **8 downloadable archives** by SHA-256 provenance. Downloadable .tar.gz/.zip release containers were not submitted to VirusTotal.

13 of 14 scanned objects returned **0 malicious and 0 suspicious** verdicts with 55–66 decisive engine results (required minimum: 50).
**1 object(s) carry a single Microsoft machine-learning detection** (`!ml`), which this project treats as a known false positive and publishes rather than hides. Every other engine returned clean. See [Antivirus False Positives](https://github.com/DeusData/codebase-memory-mcp/blob/main/SECURITY.md#antivirus-false-positives) for the evidence and for how to verify these artifacts yourself: `objects/scan-cac31c5358f3a1dcccc4d4ccbe2591f6fbae58949d23bb341429a6197e93a64b--codebase-memory-mcp`

Durable public evidence: [associations](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.2/virustotal-associations.tsv), [exact scan set](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.2/virustotal-scan-set.tsv), [per-extracted-object results and report links](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.2/virustotal-results.tsv), [evidence checksums](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.2/virustotal-evidence-checksums.txt).

Archive SHA-256 provenance (from the extraction manifest):

| Downloadable archive | SHA-256 provenance |
|---|---|
| `codebase-memory-mcp-darwin-amd64.tar.gz` | `bb6cb47aea9e50e2193cdd917d5dbafa63b7d9c1cbe74bab5ec9bf4faa67e295` |
| `codebase-memory-mcp-darwin-arm64.tar.gz` | `fa3ee085485fd9c16d1c1bd8a102df518862dabd2d6a09e4c6d8dfb3cd2a7eb4` |
| `codebase-memory-mcp-linux-amd64-portable.tar.gz` | `4ead161715fe959ef8a0e38946d63b1728d31e5fb1762a85dbb4b8c4abfbe481` |
| `codebase-memory-mcp-linux-amd64.tar.gz` | `6e3bb7353be21407a78e67b5465e53e3afb1a4a213e7a561606900ac08dcfdd6` |
| `codebase-memory-mcp-linux-arm64-portable.tar.gz` | `dcd6f31f4004c25e7945b355ae23a5a381acb2a620301bca93e1ddb159b672fd` |
| `codebase-memory-mcp-linux-arm64.tar.gz` | `b70148686cec55c31673fc0cebc0caf7f664f4ae29f7ba7f07b9617c2e5eaf85` |
| `codebase-memory-mcp-windows-amd64.zip` | `8f08e5c5b480e625adf9d4560765a860d493a690df6ded5b94127283ec5b660a` |
| `codebase-memory-mcp-windows-arm64.zip` | `b77b81975021b879ca53cdd94c60b48cc5de102194b52117938a2187a42f89c6` |
<!-- cbm-security-verification:end -->

---

> **Source** [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) · `v0.10.2` · 2026-08-11 · [upstream release](https://github.com/DeusData/codebase-memory-mcp/releases/tag/v0.10.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
