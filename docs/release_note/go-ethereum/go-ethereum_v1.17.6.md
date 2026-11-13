---
title: "go-ethereum v1.17.6"
project: "go-ethereum"
repo: "ethereum/go-ethereum"
tag: "v1.17.6"
published: "2026-09-23"
type: "patch"
lang: "en"
---

# go-ethereum v1.17.6

<!-- Inorganic Lubricant (v1.17.6) -->

This is a maintenance release with a number of performance improvements to block processing and initial sync, and is recommended for all users.

A few things worth highlighting:

- The Amsterdam hardfork is scheduled on the Sepolia testnet at timestamp `1791294816` (Oct 6, 2026, 13:53:36 UTC). Sepolia node operators must upgrade before that time.
- The Holesky testnet has been removed, as the network reached end-of-life.
- Go 1.24 is no longer supported. Release binaries and Docker images are now built with Go 1.27.

## Fork Implementation

- Schedule the Amsterdam fork on Sepolia (#35734)
- Remove the EIP-7610 implementation (#35581)
- Update EIP-2780 and EIP-8038 gas parameters (#35454, #35497)
- Update EIP-7997 deterministic factory contract (#35458)
- Update EIP-8037, repaying the outstanding gas debt first after absorbing a child frame (#35633)
- Implement parallel block execution driven by the block-level access list (#35264, #35441, #35443, #35459, #35461, #35465, #35575, #35693)
- Rename "regular gas" to "execution gas" to match EIP-8037 (#35457, #35486)

## Core

- Remove the Holesky testnet (#35591)
- Optimize JSON decoding of large requests such as `engine_newPayload` (#35518)
- Process the receipts for bloom construction and root calculation alongside execution (#35738)
- Introduce a precompile result cache shared between prefetcher, block processing and miner (#35388, #35473, #35526, #35578, #35753)
- Parallelize chain data and state writes in the post-execution commit (#35595)
- Do not seal a block if a database error occurred (#35427)
- Fix a panic in the log indexer when a reorg shortens the chain onto the rendered block (#35619)
- Honor `ExecuteConfig.EnableTracer` for the EVM-level tracing hooks (#35512)
- Add a metered LRU cache variant (#33719)
- Retain block-level access lists alongside bad blocks (#35423)
- Unset the block-level access list at the end of each transaction (#35498)
- Fix the blob cache initialization (#35509)
- Fix head truncation below a diverged tail group (#35551)
- Improve the blob fetcher with a few defensive operations (#35572)
- Fix deadlock when re-requesting partial receipts in eth/70 (#35537)
- Reject empty partial receipt responses in eth/70 (#35593)
- Cap the total size of blocked blob transactions in the sparse blobpool (#35367)
- Fix the `Cells`/`GetCells` RLP encoding in eth/72 (#35428)
- Cache recovered blobs in the blobpool to speed up serving pre-eth/72 peers (#35543)
- Add fork validation for transaction types in the state transition (#35588)
- Avoid announcing sparse blob txs to legacy peers (#35589)
- Add eth/71 (EIP-8159) tests (#35389)
- Fix gas tracer hooks and gas measurement (#35646)
- The eth/72 blob buffer is capped at 128 MiB total and 16 MiB per peer (#35766)

## Sync

- Optimize the state sync by parallelizing response processing (#35533)
- Implement best-effort downloading of block-level access lists (#35386, #35493)
- Rework the scheduling of body and receipt retrievals during sync (#35680)
- Add metrics for chain segment downloading and snap sync progress (#35678, #35689)
- Various snap v2 fixes and improvements (#35299, #35316, #35463, #35477, #35705, #35722)

## Networking

- Validate the announced blob transaction size against the announcer's protocol version (#35524)
- Add more discv5 hive coverage to `devp2p` (#34770)
- Add eth/72 tests and Amsterdam testdata to `devp2p` (#35368, #35637, #35647, #35648, #35687)
- Add `devp2p discovery listen` to serve discv4 and discv5 on a single UDP socket (#35254)

## Cryptography

- Reconstruct blobs directly from data cells without KZG recovery (#35528)
- Recover the full cell set of a blob with a fast path for complete data cells (#35529)
- Fix `G2.Neg` in the bn256 library by syncing with upstream (#35686)

## Engine API

- Add support for optional `TargetGasLimit` and enforce the system contract code check (#35514)
- Allow reorging `headBlock` down to `finalized` (#35519)
- Fix the fork gate on `engine_forkchoiceUpdatedWithWitnessV3`/`V4` (#35719)
- Pass `targetGasLimit` through in `testing_buildBlockV1` (#35501)
- Fix hive failures (#35580, #35664)
- Fix `engine_getBlobsV4` returning null cells for blob-mode cache entries (#35439)

## RPC

- Reject `null` for required arguments (#35576)
- Unescape JSON object keys when parsing a message (#35587)
- Reject `eth_getLogs` ranges with `toBlock` before `fromBlock` (#35070)
- Skip unconfigured forks when computing the next fork in `eth_config` (#35553)
- Return `null` for `pending` and unresolvable tags in `eth_getHeaderByNumber` (#35627)
- Treat a post-merge difficulty override as no-op in `eth_simulateV1` (#35672)
- Reject blob and setcode call arguments without `to` (#35695)
- Remove per-authorization gas guard in the `eth_createAccessList` (#35698)
- Return the actual used gas for plain transfer estimates after Amsterdam (#35592)
- Make the block parameter of `debug_traceCall` optional (#35583)
- Add `slotNumber` to the GraphQL block schema (#35469)
- Return `NotFound` when the block transaction count is nil in `ethclient` (#35605)
- Verify the withdrawal list against the header root in `ethclient` (#35610)

## Geth & Tooling

- Deprecate the state sizer tool (#35520)
- Use original Solidity names for custom errors in abigen v2 bindings (#35332)
- Filter out unexpected logs from the event subscription stream instead of terminating it (#35701)
- Respect the configured log limit in the struct logger `OnEnter`/`OnExit` hooks (#35360)
- Add a `t8n` test for a missing London base fee config (#35636)

## Build

- Drop support for Go 1.24 and add support for Go 1.27 (#35573)
- Upgrade the `-dlgo` bootstrap Go version to 1.27.1 (#35656)
- Build RPM packages for Fedora COPR (#35557)
- Add a retry mechanism for package uploading (#35510)

For a full rundown of the changes please consult the Geth [1.17.6](https://github.com/ethereum/go-ethereum/milestone/203?closed=1) release milestone.

---

As with all our previous releases, you can find the:

- Pre-built binaries for all platforms on our [downloads page](https://geth.ethereum.org/downloads/)
- Docker images published under [`ethereum/client-go`](https://hub.docker.com/r/ethereum/client-go) (use "stable" tag)
- Ubuntu packages in our [Launchpad PPA repository](https://launchpad.net/~ethereum/+archive/ubuntu/ethereum)
- macOS packages in our [Homebrew Tap repository](https://github.com/ethereum/homebrew-ethereum)

---

> **Source** [ethereum/go-ethereum](https://github.com/ethereum/go-ethereum) · `v1.17.6` · 2026-09-23 · [upstream release](https://github.com/ethereum/go-ethereum/releases/tag/v1.17.6)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
