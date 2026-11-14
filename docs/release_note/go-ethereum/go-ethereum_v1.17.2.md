---
title: "go-ethereum v1.17.2"
project: "go-ethereum"
repo: "ethereum/go-ethereum"
tag: "v1.17.2"
published: "2026-03-30"
type: "patch"
lang: "en"
summary: "This is a maintenance release with several important bug fixes. Notably, a critical issue in debug_executionWitness could previously corrupt node data, users relying on this RPC endpoint are strongly advised to upgrade."
---

# go-ethereum v1.17.2

<!-- EMF Suppressor (v1.17.2) -->

This is a maintenance release with several important bug fixes. Notably, a critical issue in `debug_executionWitness` could previously corrupt node data, users relying on this RPC endpoint are strongly advised to upgrade.

Geth now also supports syncing with chains where pre-Prague history has been pruned, and allows explicitly removing it via `geth prune-history --history.chain postprague`.

### Geth
- Set default cache size to 4GB across all networks (#33836, #33975)
- Added support for pruning chain history prior to the Prague fork (#33657, #34036)
- Added `fetchpayload` command to build execution witnesses for specific blocks (#33919)
- Optimized Era history import with batched insertion (#33894)
- Added `womir` target for keeper (#34079)
- Added support for iterating a single storage trie in `geth snapshot traverse-state` and `geth snapshot traverse-rawstate` (#34051)

### Core
- Amsterdam fork updates:
	- EIP-8024: Switch to branchless normalization and extend EXCHANGE (#33869)
	- EIP-7778: Block gas accounting without refunds (#33593)
	- EIP-7954: Increase maximum contract size (#33832)
	- EIP-7708: ETH transfers now emit logs (#33645)
	- Reworked gas measurement order (prerequisite for EIP-7928) (#33648)
- Improved payload building by prewarming trie nodes for state hash computation (#33945)
- Various binary trie improvements (#33951, #33961, #33989, #34021, #34032, #34022, #34056)
- Upgraded go-eth-kzg to v1.5.0, significantly reducing allocations in `VerifyCellProofBatch` (#33963)
- Refactored state database in preparation for binary trie integration (#33816)
- Enabled trie node history retention on existing nodes (#33934)
- Optimized historical state indexer with batch processing (#33640)
- Fixed potential deadlock in txlookup (#34039)
- Added new RLP APIs (#34052, #34048)
- Fix dir.Sync() failure in freezer on Windows (#34115)

### Networking
- Avoid duplicate connections by skipping simultaneous inbound/outbound dials (#33198)
- Fixed session key mismatch by using consistent remote address handling in discv5 tests (#34031)
- Added DNS hostname resolution for bootstrap nodes (#34101)

### RPC
- Fixed state corruption issue in `debug_executionWitness`; deprecated `debug_executionWitnessByHash` (#33931)
- Added MaxUsedGas field to `eth_simulateV1` response (#32789)
- Fixed gas cap handling in `eth_simulateV1` (#33952)
- Fixed nonce revert edge case during contract creation in tracer (#33978)
- Fixed `eth_createAccessList` to return an empty list instead of null for storage keys (#33976)
- `eth_getFilterLogs` now returns an error if the requested chain segment has been pruned (#33823)
- Fixed slot number encoding in RPC responses (#34005)
- Enforce RPC call limits for `eth_simulateV1` (#34616)
- Enforce storage slot limits for proofs in `eth_getProof` (#34617)

### Observability
- Various OpenTelemetry fixes (#33927, #33955)
- Added OpenTelemetry support for payload building (#33773)

### Build
- Fixed build issues on FreeBSD (#34008)

For a full rundown of the changes please consult the Geth [1.17.2](https://github.com/ethereum/go-ethereum/milestone/199?closed=1) release milestone.

---

As with all our previous releases, you can find the:

- Pre-built binaries for all platforms on our [downloads page](https://geth.ethereum.org/downloads/).
- Docker images published under [`ethereum/client-go`](https://hub.docker.com/r/ethereum/client-go) (use "stable" tag).
- Ubuntu packages in our [Launchpad PPA repository](https://launchpad.net/~ethereum/+archive/ubuntu/ethereum).
- macOS packages in our [Homebrew Tap repository](https://github.com/ethereum/homebrew-ethereum).

---

> **Source** [ethereum/go-ethereum](https://github.com/ethereum/go-ethereum) · `v1.17.2` · 2026-03-30 · [upstream release](https://github.com/ethereum/go-ethereum/releases/tag/v1.17.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
