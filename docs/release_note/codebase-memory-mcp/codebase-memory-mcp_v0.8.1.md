---
title: "codebase-memory-mcp v0.8.1"
project: "codebase-memory-mcp"
repo: "DeusData/codebase-memory-mcp"
tag: "v0.8.1"
version: "v0.8.1"
published: "2026-06-12"
type: "patch"
lang: "en"
summary: "A focused follow-up to v0.8.0."
---

# codebase-memory-mcp v0.8.1

A focused follow-up to v0.8.0.

## First-party HTTP server

The graph-UI web server has been reimplemented from scratch as a lean in-house module — a refactor that removes the last third-party server library from the binary. The new transport (`src/ui/httpd.c`) is purpose-built for what the UI actually needs:

- **Localhost-only by construction** — binds `127.0.0.1` exclusively, with platform-correct socket options on every OS.
- **Strict HTTP/1.1 parsing** — hard request caps (16 KB head / 1 MB body), strict CRLF handling, raw path matching, and a per-connection receive deadline.
- **Simple by design** — one request per connection (`Connection: close`); no keep-alive state machine, no chunked encoding.

A new 28-test transport and routing suite covers the parsing edge cases, CORS policy, RPC dispatch, and shutdown behavior. All routes, status codes, and the localhost-only CORS policy behave exactly as before.

## Also in this release

- **Slimmer grammar set** — the `nim` grammar (by far the largest vendored grammar at 66 MB) was dropped; 158 languages remain supported.
- **Attribution bundle in every archive** — release archives now include `THIRD_PARTY_NOTICES.md`, a consolidated file with the license texts of all vendored components. Homebrew and AUR installs place it alongside the binary.
- **Richer SBOM** — per-component license and version metadata for everything compiled into the binary.
- Test suite: **5,604 tests** (+27 vs v0.8.0).

## Update

```bash
codebase-memory-mcp update
```

or grab the binaries below — every asset is signed, checksummed, and attested as usual.

## Security Verification

All release binaries scanned with 70+ antivirus engines — **0 detections**.

| Binary | SHA-256 | VirusTotal |
|--------|---------|------------|
| `darwin-amd64` | `6cd48f218bf135a7b831...` | [0/72 ✅](https://www.virustotal.com/gui/file/6cd48f218bf135a7b83173e6222c672b18ded26eb20eb5bcfab8ff6d453337e9/detection) |
| `darwin-arm64` | `595cedd259200424f3d9...` | [0/72 ✅](https://www.virustotal.com/gui/file/595cedd259200424f3d92b04e116dc2de4d75bc38ed6a615205ab51ee61de485/detection) |
| `linux-amd64` | `58a0e1a968dacd324cde...` | [0/72 ✅](https://www.virustotal.com/gui/file/58a0e1a968dacd324cde582a1f40fd9ea07b9f98e5529ab571757136563504db/detection) |
| `linux-arm64` | `45d5c33d59d55b998b98...` | [0/72 ✅](https://www.virustotal.com/gui/file/45d5c33d59d55b998b98b1aab7e4a250b22777fd9f4d43ee50226ed043502a79/detection) |
| `windows-amd64` | `12375e6a39a31f003d77...` | [0/72 ✅](https://www.virustotal.com/gui/file/12375e6a39a31f003d776e54ef487640f9f59db7dbeee96973a9ee9eb18bc7bb/detection) |

---

> **Source** [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) · `v0.8.1` · 2026-06-12 · [upstream release](https://github.com/DeusData/codebase-memory-mcp/releases/tag/v0.8.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
