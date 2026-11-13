---
title: "go-ethereum v1.16.9"
project: "go-ethereum"
repo: "ethereum/go-ethereum"
tag: "v1.16.9"
published: "2026-02-17"
type: "patch"
lang: "en"
summary: "This is a security hot-fix release. Specifically, this release fixes CVE-2026-26314, CVE-2026-26315."
---

# go-ethereum v1.16.9

This is a security hot-fix release. Specifically, this release fixes [CVE-2026-26314](https://github.com/ethereum/go-ethereum/security/advisories/GHSA-2gjw-fg97-vg3r), [CVE-2026-26315](https://github.com/ethereum/go-ethereum/security/advisories/GHSA-m6j8-rg6r-7mv8). 

We recommend recreating your p2p node key after installing this update, which you can do by removing the `DATADIR/geth/nodekey` file before restarting geth. Note this will cause a change in the p2p node ID, which may break static peering setups.

---

As with all our previous releases, you can find the:

- Pre-built binaries for all platforms on our [downloads page](https://geth.ethereum.org/downloads/).
- Docker images published under [`ethereum/client-go`](https://hub.docker.com/r/ethereum/client-go) (use "stable" tag).
- Ubuntu packages in our [Launchpad PPA repository](https://launchpad.net/~ethereum/+archive/ubuntu/ethereum).
- macOS packages in our [Homebrew Tap repository](https://github.com/ethereum/homebrew-ethereum).

---

> **Source** [ethereum/go-ethereum](https://github.com/ethereum/go-ethereum) · `v1.16.9` · 2026-02-17 · [upstream release](https://github.com/ethereum/go-ethereum/releases/tag/v1.16.9)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
