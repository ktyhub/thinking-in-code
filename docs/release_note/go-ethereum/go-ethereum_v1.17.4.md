---
title: "go-ethereum v1.17.4"
project: "go-ethereum"
repo: "ethereum/go-ethereum"
tag: "v1.17.4"
published: "2026-06-22"
type: "patch"
lang: "en"
---

# go-ethereum v1.17.4

<!-- Flexible Polymer Casing (v1.17.4) -->

This is a maintenance release with accumulated bug fixes and improvements, and is recommended for all users. It also continues the implementation work for the upcoming Amsterdam hardfork.

One thing worth highlighting:

- **Clef has been removed.** The standalone `clef` signer has moved to <https://github.com/ethereum/clef> (#35097).

### Fork Implementation (Amsterdam)

- EIP-7928: Block-Level Access Lists: the block access list is now constructed and verified during block execution, with the serving side of the eth/71 BAL messages implemented (#34652, #34803, #34879, #34957, #34967, #34972, #34977, #35110)
- EIP-8189: snap/2, a new state-sync protocol based on block-level access lists, has been added (#34626, #34807, #35098, #35155, #35158, #35163, #35178, #35180, #35181)
- EIP-8037: state-creation gas cost increase, has been implemented (#33601)
  - The tracing system provides a new `OnGasChangeV2` hook for multi-dimensional gas (#34946)
- `engine_newPayloadWithWitnessV5` has been added and the witness format now uses the canonical spec field ordering (#35009)
- The `evm t8n` tooling has been updated for Amsterdam, adding BAL and slot-number support and binary-trie leaf export (#34843, #35025)
- For EIP-7843, the slot number is now set for the pending block post-Amsterdam (#34792, #35036)

### Geth

- Caches are now sized against the cgroup memory cap (e.g. Docker `--memory`) when one is set (#34947)
- A number of small command-line flag and logging issues have been fixed (#33880, #34732, #34943, #34948, #35011, #35104, #35116, #35136)
- A number of long-deprecated command-line flags have been removed (#35021)

### RPC

- `eth_baseFee` has been added, returning the base fee of the next block (#34904, #35023)
- `eth_capabilities` has been added, letting clients discover which historical data a node can serve (#33886)
- `debug_clearTxpool` has been added to clear the transaction pool (#33347, #35130)
- State-reading methods (`eth_getBalance`, `eth_getCode`, `eth_getStorageAt`, etc.) now default the block parameter to `latest` when omitted (#35100)
- Fixes for `eth_simulateV1`: an incorrect "base fee too low" error code and a pre-Shanghai withdrawal regression (#34951, #34939)
- `debug_setHead` now propagates rewind errors instead of silently ignoring them (#35001)
- EIP-7702 transactions with a nil `To` address are now rejected (#35094)
- HTTP RPC responses now always set `Content-Length`, and a WebSocket handshake status-code bug was fixed (#35072, #35111)

- The client can now configure trace-context propagation via the `traceparent` header, and response writes are now traced (#35132, #35049)

### GraphQL

- GraphQL request bodies are now limited to 5 MiB (#35034)
- Log-range queries with `begin > 0` and `end == 0` are now rejected (#35032)
- The `Block.raw` resolver now returns empty bytes when the block body is missing (#35027)

### Core

- A global cache for JUMPDEST bitmaps speeds up EVM execution (#34850)
- EVM stack operations are now computed in place, avoiding per-operand copies (#35156)
- New code-cache hit/miss meters have been added (#34821)
- A shutdown race in snapshot generation has been fixed (#33540)

### Engine API & Blobs

- Engine API JSON encoding for large blob payloads has been optimized, and gzip is disabled on the engine API (#33969, #35057)
- `engine_hasBlobs` has been added, and `engine_getBlobs` now counts only actually-available blobs (#34859, #35028)
- A cache for `GetBlobs` requests reduces engine API latency, and otel tracing has been added to the GetBlobs endpoints (#35124, #35026)
- Reorged v0 blob sidecar transactions are now dropped rather than converted (#35099)
- `testing_commitBlockV1` has been added as the write companion to `testing_buildBlockV1` (#34995)
- New payloads are now imported at genesis regardless of sync status (#32673)

### Networking

- NAT STUN discovery no longer fails on IPv6 servers (#35084)
- Several snap-sync robustness fixes: uncovered state is removed before resuming, a catch-up stall was fixed, sync restarts when the required BAL is unavailable, and the pivot is frozen once state download completes (#35159)

For a full rundown of the changes please consult the Geth [1.17.4](https://github.com/ethereum/go-ethereum/milestone/201?closed=1) release milestone.

---

As with all our previous releases, you can find the:

- Pre-built binaries for all platforms on our [downloads page](https://geth.ethereum.org/downloads/).
- Docker images published under [`ethereum/client-go`](https://hub.docker.com/r/ethereum/client-go) (use "stable" tag).
- Ubuntu packages in our [Launchpad PPA repository](https://launchpad.net/~ethereum/+archive/ubuntu/ethereum).
- macOS packages in our [Homebrew Tap repository](https://github.com/ethereum/homebrew-ethereum).

---

> **Source** [ethereum/go-ethereum](https://github.com/ethereum/go-ethereum) · `v1.17.4` · 2026-06-22 · [upstream release](https://github.com/ethereum/go-ethereum/releases/tag/v1.17.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
