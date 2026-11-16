---
title: "codebase-memory-mcp v0.5.7"
project: "codebase-memory-mcp"
repo: "DeusData/codebase-memory-mcp"
tag: "v0.5.7"
version: "v0.5.7"
published: "2026-03-26"
type: "patch"
lang: "en"
summary: "53 commits, 3 merged PRs, 10 bugs closed. The most significant stability release since the Go→C rewrite."
---

# codebase-memory-mcp v0.5.7

## v0.5.7 — Stability, Install & Endurance Testing Overhaul

53 commits, 3 merged PRs, 10 bugs closed. The most significant stability release since the Go→C rewrite.

### Database Concurrency Fix (Critical)
- **Root cause found**: three threads (MCP handler, autoindex, watcher) could corrupt the database — `rename(.db.tmp, .db)` over open SQLite connections produced 48K+ garbage rows
- **Architecture change**: `rename()` eliminated entirely. Indexing writes directly, reindexing deletes old DB first, incremental upserts unchanged
- Pipeline lock serializes concurrent runs; corrupt DB auto-detected and cleaned

### Install & Update
- **`install.sh` + `install.ps1`** included in every release archive with `--skip-config` flag (#145)
- Kills stale MCP servers, strips macOS quarantine, ad-hoc signs binary
- Refreshes all 10 agent configs on every update
- In-memory zip extraction — no `unzip` needed on Windows
- Windows `.exe` path handling fixed across install, update, and uninstall

### Windows Path Normalization (PR #146)
- Mixed path separators normalized to forward slashes at all entry points
- `cbm_normalize_path_sep()` works on ALL platforms (cross-platform DB files)

### Soak Test Suite (New)
- Quick soak (10 min), ASan soak (15 min), weekly endurance (4h) — all per-platform
- RSS tracking, FD drift, query latency, crash recovery (kill -9 + clean restart)
- All soak tiers are release gates — no release ships without passing

### Bug Fixes
- **#139** Stack overflow in autoindex — 8MB default thread stack (thanks **@theron-sapp** for the detailed crash report with stack addresses, frequency table, and workaround!)
- **#140** `index_repository` fails on Windows — this report by **@Flipper1994** triggered the complete concurrency architecture overhaul!
- **#137** `detect_changes` fails on paths with spaces (thanks **@shekthesnek** for the sharp observation that 12 tools worked but 1 didn't!)
- **#135** macOS Gatekeeper blocks binary (thanks **@heraque** for the thorough xattr/spctl/codesign analysis!)
- **#133** `search_code` rejects Windows backslash (thanks **@ckelly8** for pinpointing the root cause!)
- **#130** O(N²) import extractors hang on large files (thanks **@halindrome** for both the issue AND the fix in PR #131!)
- **#127** Connection closed constantly — all crash paths fixed (thanks **@kingofthebongo2008**!)
- **#145** Skip agent config in install scripts (thanks **@sherif-fanous** — implemented same day!)
- Arena buffer overflow, test detection gaps, memory leaks, CodeQL TOCTOU, taskkill self-kill, MSYS2 python3 path translation, vendored tre ssize_t

### Testing
- **2586 unit tests** (up from 2042), zero skipped, zero memory leaks
- 480+ new tests covering arena, FQN, graph buffer, MCP dispatch, pipeline, store, YAML, watcher
- 15-phase smoke suite on all platforms including Windows
- Soak tests as release gate — endurance verified before every release

### Security
- Install scripts in VirusTotal scan alongside binaries (120 min timeout, all files must pass)
- `system()` eliminated from all production code
- Vendored dependency integrity checksums enforced

---

### Contributors 🙏

Every bug report and PR made this release better. Thank you:

| Contributor | Contribution |
|---|---|
| **@halindrome** | O(N²) import fix (PR #131) — merged |
| **@jimpark** | Windows path normalization (PR #146) — merged |
| **@chitralverma** | OpenCode config format fix (PR #134) — merged |
| **@theron-sapp** | Stack overflow crash report (#139) — fixed |
| **@Flipper1994** | Windows rename failure (#140) — fixed, triggered concurrency overhaul |
| **@shekthesnek** | Windows path-with-spaces (#137) — fixed |
| **@heraque** | macOS quarantine analysis (#135) — fixed |
| **@ckelly8** | Windows backslash root cause (#133) — fixed |
| **@kingofthebongo2008** | Connection stability (#127) — fixed |
| **@sherif-fanous** | Skip-config feature request (#145) — implemented |

---

### Security Verification

All release binaries have been independently verified:

**VirusTotal** — scanned by 70+ antivirus engines:

| Binary | Scan |
|--------|------|
| install.sh | [View Report](https://www.virustotal.com/gui/file-analysis/MjVlZmQ5N2UzMzQ0Y2Q2MGM5ZDgxZDZhM2IxMjY3ZDM6MTc3NDUzMDQxMg==/detection) |
| install.ps1 | [View Report](https://www.virustotal.com/gui/file-analysis/ZDk2Y2Y3MGI1MmJmMzFkZWJiMmIxODEzNzhmM2UzYTg6MTc3NDUzMDQxMg==/detection) |
| codebase-memory-mcp-windows-amd64.exe | [View Report](https://www.virustotal.com/gui/file-analysis/ZjM3OWRhYzg2NTI1NTMzOWFhYmIxZTUzZjNlMmNiYjA6MTc3NDUzMDQxNg==/detection) |
| codebase-memory-mcp-ui-windows-amd64.exe | [View Report](https://www.virustotal.com/gui/file-analysis/YTJlMDI3NDYzMWNjMmIxZTRmYzRlZDhlNjFmYjgwZDk6MTc3NDUzMDQxOQ==/detection) |
| codebase-memory-mcp-ui-linux-arm64 | [View Report](https://www.virustotal.com/gui/file-analysis/NmZhZjE3YzMyMDdjOTI2MWY3ZWRmZDgxYzkzOGRhNDM6MTc3NDUzMDQyMg==/detection) |
| codebase-memory-mcp-ui-linux-amd64 | [View Report](https://www.virustotal.com/gui/file-analysis/YjhkMGIzYWE1ZTlmYTEzMDVhYmM0ZTcxZGVhYWRhNTk6MTc3NDUzMDQyNQ==/detection) |
| codebase-memory-mcp-ui-darwin-arm64 | [View Report](https://www.virustotal.com/gui/file-analysis/ODZkMmU3YzMwNTM1NzMzZjdhNDU0ZWYwY2YyZmE2Y2I6MTc3NDUzMDQyOA==/detection) |
| codebase-memory-mcp-ui-darwin-amd64 | [View Report](https://www.virustotal.com/gui/file-analysis/NGM5NGRiYTg3YTkxMGE1ZDA0ZjhjYjRjODZlMzRiZjI6MTc3NDUzMDQzMQ==/detection) |
| codebase-memory-mcp-linux-arm64 | [View Report](https://www.virustotal.com/gui/file-analysis/ZDZmMjc4NTcxNzRmNzZhMjMzYmFhMjgyNDg4M2M5ZTI6MTc3NDUzMDQzNA==/detection) |
| codebase-memory-mcp-linux-amd64 | [View Report](https://www.virustotal.com/gui/file-analysis/ZTQxZjI5YzcxMjFlOGExYzc5MWUyZWIwYjA4N2ZjNDQ6MTc3NDUzMDQzNg==/detection) |
| codebase-memory-mcp-darwin-arm64 | [View Report](https://www.virustotal.com/gui/file-analysis/ODk3NmIyNzI4OTkzMDEzMTRjNjkzMzIwOWQxZDZlMjA6MTc3NDUzMDQzOQ==/detection) |
| codebase-memory-mcp-darwin-amd64 | [View Report](https://www.virustotal.com/gui/file-analysis/MjVlYjE2MjI4NGNlZWJhZTgwYTcyZTE2Y2Y2MjU1NjE6MTc3NDUzMDQ0Mg==/detection) |
| LICENSE | [View Report](https://www.virustotal.com/gui/file-analysis/NzQ1NWJkNmJjOTA4YmE5ZTc0MGE3Y2JmMTFmYjcwNDM6MTc3NDUzMDQ0Mg==/detection) |
**Build Provenance (SLSA)** — cryptographic proof each binary was built by GitHub Actions from this repo:
```
gh attestation verify <downloaded-file> --repo DeusData/codebase-memory-mcp
```

**Sigstore cosign** — keyless signature verification:
```
cosign verify-blob --bundle <file>.bundle <file>
```

**Native antivirus scans** — all binaries passed these scans before this release was created (any detection would have blocked the release):
- Windows: Windows Defender with ML heuristics (the same engine end users run)
- Linux: ClamAV with daily signature updates
- macOS: ClamAV with daily signature updates

**SBOM** — Software Bill of Materials (`sbom.json`) lists all vendored dependencies.

See [SECURITY.md](https://github.com/DeusData/codebase-memory-mcp/blob/main/SECURITY.md) for full details.

---

> **Source** [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) · `v0.5.7` · 2026-03-26 · [upstream release](https://github.com/DeusData/codebase-memory-mcp/releases/tag/v0.5.7)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
