---
title: "go-ethereum v1.17.5"
project: "go-ethereum"
repo: "ethereum/go-ethereum"
tag: "v1.17.5"
published: "2026-07-27"
type: "patch"
lang: "en"
summary: "This is a maintenance release with accumulated bug fixes and improvements, and is recommended for all users. It continues the implementation work for the upcoming Amsterdam hardfork."
---

# go-ethereum v1.17.5

<!-- Grav-Torque Pad (v1.17.5) -->

This is a maintenance release with accumulated bug fixes and improvements, and is recommended for all users. It continues the implementation work for the upcoming Amsterdam hardfork.

A few things worth highlighting:

- The default `GOGC` has changed from 20 to 50, trading a higher memory peak for less GC overhead. Set `--gogc=20` to keep the old behavior.
- Pebble v2 is now supported as a key-value store backend. Pebble v2 is used when Geth is bootstrapped from scratch, and falls back to Pebble v1 for a pre-existing database. Run `geth db pebble-upgrade` to explicitly upgrade a legacy Pebble v1 database to v2.

## Fork Implementation

- Several Amsterdam EIPs have been implemented or updated:
  - EIP-2780: Resource-based intrinsic transaction gas (#35212, #35318)
  - EIP-8037: State creation gas cost increase (#35173, #35318, #35301, #35342, #35279)
  - EIP-8038: State-access gas cost update (#35216)
  - EIP-8246: Remove SELFDESTRUCT burn (#35219)
  - EIP-8282: Builder execution requests (#35175, #35341)
  - EIP-7997: Deterministic factory contract (#35223, #35285)
  - EIP-7954: Increase maximum contract size (#35217)
  - EIP-7928: Block-level access lists (#35260, #35281, #35261, #35348, #35279)
- Improve Amsterdam fork test coverage (#35364)
- Introduce the `--override.amsterdam` flag (#35213)
- Remove named hardforks from the BPO schedule (#35029)
- Introduce the Bogota fork in the chain configuration (#34057)

## Core

- Introduce a sparse blobpool to reduce blob transaction pool memory usage (#34047)
- Migrate legacy blobpool limbo entries to the new cell-based sidecar format on startup (#35209)
- Drop support for v0 blob sidecars in blobpool (#35191)
- Inline gas deduction to fix a performance regression (#35203)
- Fix eth/71 block-access-list empty marker decoding which wrongly disconnected peers (#35286)
- Disable snap sync mode once the pivot block is committed (#35402, #35405)
- Speed up `debug_setHead` and reject unrecoverable targets (#35252)
- Fix snap sync failing to backfill blocks with missing canonical-hash mappings (#35190)
- Reuse the chain's JUMPDEST cache in payload building (#35378)
- Support Pebble v2 as the database backend (#34009)
- Support `.ere` files in the era store (#34978)
- Introduce the `trie.UpdateBatch` API (#32448)
- Fix freezer truncation error on newly-added empty tables after unclean shutdown (#35258)
- Improve state recoverability reporting by considering sync status (#35400)
- Fix account prefetching for absent accounts (#35256)
- Various snap v2 fixes (#35321, #35323)
- Optimize block validation (#35403)
- Various allocation improvements (#35234, #35237, #35232)
- Continue binary trie development (#34772)
- Fix tx size calculation (#35406)

## Networking

- Protect high-value peers from random dropping based on transaction-inclusion statistics (#34702)
- Keep invalid and unreachable nodes out of DNS discovery trees (#35312)
- Support a dual-stack discovery listener in `devp2p`, with several related fixes (#35220, #35298, #35243, #35206)

## RPC

- Introduce the `--rpc.http-body-limit` flag to configure the maximum HTTP request body size (#35224)
- Reject `gasPrice` when combined with an `authorizationList` (#35320)
- Reject a block parameter with neither a number nor a hash (#35271)
- Match the authorization scheme case-insensitively (#35022)

## Tracing

- Respect the configured log limit in the struct logger (#35349)
- Emit tracing frames in the EIP-2780 manner (#35396)
- Include the log index in ERC-7562 tracer output (#35200)
- Stop incorrectly capturing `callcode` transfers in the log tracer (#35248)

## Engine API

- Pass `TargetGasLimit` via the engine API (#35372)
- Make the maximum reorg depth configurable (#35335, #35373, #35391)
- Return block access lists from `engine_getPayloadBodiesV2` (#35347)
- Cap miner-configured `MaxBlobsPerBlock` to the protocol limit (#35295)

## Geth & Tooling

- Introduce a `--gogc` flag and bump the default `GOGC` to 50 (#35363, #34851)
- Write block-level access lists in `geth export` (#35369)
- Preserve metrics tag values containing `=` (#35168)
- Update eels tests to v20.0.0 (#35283)

## Accounts & ABI

- Forward the blob fee cap to external signers (#35167)
- Introduce a `GetABI()` method on abigen v2 generated contract bindings (#35221)
- Fix abigen v1 bindings to handle deployment of library dependencies (#32164)

## Build

- Update the `ckzg` dependency (#35336)
- Upgrade the `-dlgo` bootstrap Go version to 1.25.12 (#35317)

For a full rundown of the changes please consult the Geth [1.17.5](https://github.com/ethereum/go-ethereum/milestone/202?closed=1) release milestone.

---

As with all our previous releases, you can find the:

- Pre-built binaries for all platforms on our [downloads page](https://geth.ethereum.org/downloads/)
- Docker images published under [`ethereum/client-go`](https://hub.docker.com/r/ethereum/client-go) (use "stable" tag)
- Ubuntu packages in our [Launchpad PPA repository](https://launchpad.net/~ethereum/+archive/ubuntu/ethereum)
- macOS packages in our [Homebrew Tap repository](https://github.com/ethereum/homebrew-ethereum)

---

> **Source** [ethereum/go-ethereum](https://github.com/ethereum/go-ethereum) · `v1.17.5` · 2026-07-27 · [upstream release](https://github.com/ethereum/go-ethereum/releases/tag/v1.17.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
