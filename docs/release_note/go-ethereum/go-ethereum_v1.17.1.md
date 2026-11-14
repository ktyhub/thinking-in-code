---
title: "go-ethereum v1.17.1"
project: "go-ethereum"
repo: "ethereum/go-ethereum"
tag: "v1.17.1"
published: "2026-03-03"
type: "patch"
lang: "en"
summary: "This is a bug fix release and is recommended for all users. It resolves a regression in snap sync, as well as several security issues."
---

# go-ethereum v1.17.1

<!-- Eezo Shunt (v1.17.1) -->

This is a bug fix release and is recommended for all users. It resolves a regression in snap sync, as well as several security issues.

### Geth

- The engine API no longer enables plain-text HTTP2, due to some reports of incompatibilities with the teku CL (#33922)
- The new `--metrics.influxdb.interval` flag allows changing the metrics reporting interval. (#33767)
- Geth has a new `inspect-trie` subcommand that prints information about node counts at all state trie depths (#28892)

### Core

- Some Amsterdam fork-related changes:
  - EIP-7834 SLOTNUM opcode (#33589)
  - EIP-8024 is now enabled in Amsterdam mode (#33928)
  - Several fixes for EIP-7928 Block-Level Access Lists (#33741, #33743, #33742, #33774)
- Payload building had a fix that could prevent the CL from receiving the latest built payloads (#33908)

### Networking

- Geth no longer supports p2p protocol version eth/68 (#33511)
- A rare crash in p2p request tracking is resolved (#33940)
- The transaction pool, and specifically the blobpool, saw some fixes that reduce relaying transactions that likely won't make it into the chain, or have already been included on chain recently. This should reduce txpool traffic (#33607, #33887, #33923, #33893)
- In v1.17.0, a regression in snap-sync was introduced that would cause sync to fail when using --history.chain=postmerge (#33865)
- Snap-sync had a bug where peer connections would stop being used after a timeout or similar event. This wasn't too noticeable for mainnet sync because of peer churn (#33790)
- Unexpected state delivered by peers is now reported during snap-sync (#33898)
- P2P listener metrics now record handshake timeouts correctly  (#33539)

### RPC

- `eth_estimateGas` now honors the user-supplied access list (#33849)
- New RPC method: `eth_getStorageValues` (#32591)
- New RPC method: `testing_buildBlockV1` (#33656)

### Build

- This release is built with Go 1.25.7 (#33874)
- Our official Docker images are experimentally built with Go 1.26 (#33899)

For a full rundown of the changes please consult the Geth [1.17.1](https://github.com/ethereum/go-ethereum/milestone/198?closed=1) release milestone.

---

As with all our previous releases, you can find the:

- Pre-built binaries for all platforms on our [downloads page](https://geth.ethereum.org/downloads/).
- Docker images published under [`ethereum/client-go`](https://hub.docker.com/r/ethereum/client-go) (use "stable" tag).
- Ubuntu packages in our [Launchpad PPA repository](https://launchpad.net/~ethereum/+archive/ubuntu/ethereum).
- macOS packages in our [Homebrew Tap repository](https://github.com/ethereum/homebrew-ethereum).

---

> **Source** [ethereum/go-ethereum](https://github.com/ethereum/go-ethereum) · `v1.17.1` · 2026-03-03 · [upstream release](https://github.com/ethereum/go-ethereum/releases/tag/v1.17.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
