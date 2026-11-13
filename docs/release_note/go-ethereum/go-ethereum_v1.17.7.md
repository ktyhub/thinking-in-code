---
title: "go-ethereum v1.17.7"
project: "go-ethereum"
repo: "ethereum/go-ethereum"
tag: "v1.17.7"
published: "2026-09-30"
type: "patch"
lang: "en"
---

# go-ethereum v1.17.7

<!-- Intact Neuro-Coil (v1.17.7) -->

This is a quick release, cut mainly because publishing v1.17.6 to the Ubuntu PPA failed. It also carries a few fixes merged since then. Both v1.17.6 and v1.17.7 are ready for the Amsterdam fork on Sepolia (Oct 6, 2026), so Sepolia validators can run either version.

Users can now also choose their own history pruning point with `--history.chain <block number>:<block hash>`. It works both for pruning an existing node with `geth prune-history` and for snap sync, which then skips downloading the chain history before that block.

## Changes

- Add `postosaka` and custom `<block number>:<block hash>` history pruning points (#35792)
- Account for both the execution and state gas (EIP-8037) when selecting transactions in the miner (#35773)
- Fix a memory leak by waiting for the block prefetcher when stopping the chain (#35821)
- Release the pathdb clean caches when the database is disabled (#35789)
- Encode and hash the block-level access list once, in a dedicated pipeline (#35772)
- Keep the snap sync v2 pivot moving by applying block-level access lists after the state sync (#35749)
- Only fetch block-level access lists close to the chain head (#35780)
- Skip peers whose announced block range doesn't cover the request (#35723)
- Restore the txpool empty-state fallback during snap sync, fixing the regression introduced in v1.17.3 (#35582)
- Allow restarting an interrupted snap sync when a history cutoff is configured (#35837, #35844)
- Update execution-spec-tests fixtures to v21 (#35835)
- Add five new multi-cloud bootnodes operated by NodeOps alongside the existing bootnodes (#35682)

For a full rundown of the changes please consult the Geth [1.17.7](https://github.com/ethereum/go-ethereum/milestone/204?closed=1) release milestone.

---

As with all our previous releases, you can find the:

- Pre-built binaries for all platforms on our [downloads page](https://geth.ethereum.org/downloads/)
- Docker images published under [`ethereum/client-go`](https://hub.docker.com/r/ethereum/client-go) (use "stable" tag)
- Ubuntu packages in our [Launchpad PPA repository](https://launchpad.net/~ethereum/+archive/ubuntu/ethereum)
- macOS packages in our [Homebrew Tap repository](https://github.com/ethereum/homebrew-ethereum)

---

> **Source** [ethereum/go-ethereum](https://github.com/ethereum/go-ethereum) · `v1.17.7` · 2026-09-30 · [upstream release](https://github.com/ethereum/go-ethereum/releases/tag/v1.17.7)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
