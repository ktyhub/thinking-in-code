---
title: "go-ethereum v1.17.10"
project: "go-ethereum"
repo: "ethereum/go-ethereum"
tag: "v1.17.10"
published: "2026-10-23"
type: "patch"
lang: "en"
---

# go-ethereum v1.17.10

<!-- Soil Reducer (v1.17.10) -->

This is a quick release that postpones the Amsterdam fork on the Hoodi testnet, previously scheduled for Oct 26, 2026, 17:42:48 UTC. Hoodi node operators running v1.17.9 must upgrade before then. A new date will be set in a future release; other networks are unaffected.

Snap sync now switches to snap/2 automatically once Amsterdam is active. Use `--snap.v2=false` or `--snap.v2=true` to force a protocol.

## Changes

- Cancel the Amsterdam activation on Hoodi (#36001)
- Use snap/2 automatically once Amsterdam is active (#35989)
- Optimize DUP/SWAP dispatch in the interpreter (#35959)

For a full rundown of the changes please consult the Geth [1.17.10](https://github.com/ethereum/go-ethereum/milestone/207?closed=1) release milestone.

---

As with all our previous releases, you can find the:

- Pre-built binaries for all platforms on our [downloads page](https://geth.ethereum.org/downloads/)
- Docker images published under [`ethereum/client-go`](https://hub.docker.com/r/ethereum/client-go) (use "stable" tag)
- Ubuntu packages in our [Launchpad PPA repository](https://launchpad.net/~ethereum/+archive/ubuntu/ethereum)
- macOS packages in our [Homebrew Tap repository](https://github.com/ethereum/homebrew-ethereum)

---

> **Source** [ethereum/go-ethereum](https://github.com/ethereum/go-ethereum) · `v1.17.10` · 2026-10-23 · [upstream release](https://github.com/ethereum/go-ethereum/releases/tag/v1.17.10)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
