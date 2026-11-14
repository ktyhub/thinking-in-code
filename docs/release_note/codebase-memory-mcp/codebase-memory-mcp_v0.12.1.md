---
title: "codebase-memory-mcp v0.12.1"
project: "codebase-memory-mcp"
repo: "DeusData/codebase-memory-mcp"
tag: "v0.12.1"
version: "v0.12.1"
published: "2026-10-16"
type: "patch"
lang: "en"
summary: "Every install path works again, and Helm charts join the graph."
---

# codebase-memory-mcp v0.12.1

# v0.12.1

**Every install path works again, and Helm charts join the graph.**

v0.12.1 fixes v0.12.0's package installs and the other install paths we found broken while checking every channel. It also links Helm charts to what they deploy, and stops the graph from inventing a registry for container images.

> **Upgrading?** The first index of each existing project after the upgrade is a full rebuild, once (image identities changed; see below).

## Fixed: installs

- **npm, PyPI and Go installs.** `npm i`, `pnpm add`, `pip install` and the Go wrapper could not install v0.12.0 on any platform. Each wrapper refused an archive member above 256 MiB, and every v0.12.0 binary is 331-335 MB. The size limits are gone from all three wrappers. The archive is still verified against the release's `checksums.txt` before it is unpacked, its contents must be exactly the expected files, and the binary must answer `--version`. Thank you, @hydroplexus, for the precise report (#2657).
- **Homebrew.** The formula was still at 0.10.3, and on Linux it installed the dynamically linked build, which needs glibc 2.38 (Ubuntu 22.04, Debian 12 and RHEL 9 do not have it). It now installs the current release, and on Linux the static `-portable` build that runs on any distribution.
- **`go install`.** A pinned `go install .../pkg/go/cmd/codebase-memory-mcp@vX.Y.Z` never worked, and `@latest` installed a stale version. Releases now carry `pkg/go/vX.Y.Z` tags, and the wrapper installs the release matching its own version.
- **npm `next`.** The `next` dist-tag no longer points to an old release candidate; a stable release moves it.
- **Docs.** winget and Chocolatey were listed as install channels but are not published; they are removed until they are. Windows arm64 builds ship and are now listed.

**Install-path smoke tests.** Every pull request and every release now installs the npm, PyPI and Go wrappers, the way a user's package manager does, against the real release archives, and runs the binary each one installed. A release is published only after these installs pass, so an installer that cannot install what we ship can no longer reach you.

## Helm charts in the graph

A Helm chart used to be an isolated node. Now it links to what it deploys (#2663):

- **Chart → objects** (`DEPLOYS`, `via: chart`): every Kubernetes object rendered from the chart's `templates/` (a subchart's objects belong to the subchart).
- **values file → Chart** (`CONFIGURES`): `values.yaml` and `values-<x>.yaml` beside `Chart.yaml`.
- **Chart → images** (`DEPLOYS`, `ref: image`): every image its objects name literally (a templated image names none).

`HelmRelease → Chart → Deployment → Image` is now one traversable path. On 20 infrastructure repositories, charts with no outgoing edge dropped from 238 of 260 to 109, and 2,511 chart-to-object links appeared; every other edge stayed identical.

## Images keep the registry the code names

An image without a registry host used to be stored under an invented `docker.io/library/...` (#2654). Docker Hub is only Docker's default: Podman and CRI-O resolve short names through a search list, mirrors rewrite them, and a local build tag may exist on no registry at all. An image now keeps its name as written, with `registry: unknown` when no host is stated; a stated host is kept (Docker Hub's spellings become `docker.io`). `FROM nginx` and `image: docker.io/library/nginx` are now two Image nodes. This changes image identities, which is why each project is rebuilt once after the upgrade.

## Upgrade notes

- The first index of each existing project after the upgrade is a full rebuild, once.
- Image nodes without a stated registry now carry `registry: unknown` and the name as written, instead of `docker.io/library/...`.

<!-- cbm-security-verification:start -->
## Security Verification

Every binary published below was scanned by VirusTotal before smoke and soak testing, and the verdict for the exact shipped bytes is linked per product (decisive engines: 61–69).
Every shipped binary was clean.

| Product | Shipped binary | VirusTotal verdict |
|---|---|---|
| `linux-amd64` | `6761236d038de87bf49da5695dd52d7928180d814624d4ceb8d8e849ba07f4c8` | [clean](https://www.virustotal.com/gui/file/6761236d038de87bf49da5695dd52d7928180d814624d4ceb8d8e849ba07f4c8/detection) |
| `linux-arm64` | `43a096f3655a9ea0606146da1dbd92aece344e24248e305fc007d239e3b891ae` | [clean](https://www.virustotal.com/gui/file/43a096f3655a9ea0606146da1dbd92aece344e24248e305fc007d239e3b891ae/detection) |
| `linux-amd64-portable` | `77745491f0a9c346d6da23eed4d92b5feaa31a27a883c9faa4fa9f47c8183705` | [clean](https://www.virustotal.com/gui/file/77745491f0a9c346d6da23eed4d92b5feaa31a27a883c9faa4fa9f47c8183705/detection) |
| `linux-arm64-portable` | `6a64e20e2ca8dc15b4a412e981e5aea60804ed3e952d693ab491c93ccd36ed45` | [clean](https://www.virustotal.com/gui/file/6a64e20e2ca8dc15b4a412e981e5aea60804ed3e952d693ab491c93ccd36ed45/detection) |
| `darwin-amd64` | `f3ba4d7dd462be868eff85f0dccb7375405f58084da800826065df2312b028ab` | [clean](https://www.virustotal.com/gui/file/f3ba4d7dd462be868eff85f0dccb7375405f58084da800826065df2312b028ab/detection) |
| `darwin-arm64` | `a36cfa1f5d10d8c4762501d63feef082711aae4704b9e8f9066db52779a8601e` | [clean](https://www.virustotal.com/gui/file/a36cfa1f5d10d8c4762501d63feef082711aae4704b9e8f9066db52779a8601e/detection) |
| `windows-amd64` | `39f6a789cd858d7428561ac5afaefb9a47b018dcba0ad6fa41ae71a45e0ed656` | [clean](https://www.virustotal.com/gui/file/39f6a789cd858d7428561ac5afaefb9a47b018dcba0ad6fa41ae71a45e0ed656/detection) |
| `windows-arm64` | `b19816bb88ef3145a0f4b81856665c67a684cc038e06ae696e76960277c67b41` | [clean](https://www.virustotal.com/gui/file/b19816bb88ef3145a0f4b81856665c67a684cc038e06ae696e76960277c67b41/detection) |

Selection is tuple-local and defaults to stripped. The selected executable SHA-256 was verified again after packaging; archive containers were not redundantly submitted to VirusTotal. Their hashes remain available in `checksums.txt`.

Durable evidence: [candidate provenance](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.12.1/release-candidates.tsv), [candidate VirusTotal results](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.12.1/virustotal-candidate-results.tsv), [selection decisions](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.12.1/release-selection.tsv).
<!-- cbm-security-verification:end -->

---

> **Source** [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) · `v0.12.1` · 2026-10-16 · [upstream release](https://github.com/DeusData/codebase-memory-mcp/releases/tag/v0.12.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
