---
title: "go-ethereum v1.17.9"
project: "go-ethereum"
repo: "ethereum/go-ethereum"
tag: "v1.17.9"
published: "2026-10-21"
type: "patch"
lang: "en"
summary: "This release enables the Amsterdam fork 🦩 on the Hoodi testnet at block timestamp 1793036568 (Mon, 26 Oct 2026 17:42:48 UTC)."
---

# go-ethereum v1.17.9

This release enables the Amsterdam fork 🦩 on the Hoodi testnet at block timestamp **1793036568 (Mon, 26 Oct 2026 17:42:48 UTC)**.

It also contains changes to the EVM to improve the performance significantly.

This release is recommended for all users running their nodes on the Hoodi testnet.

## Geth

- Blsync now supports the Gloas beacon chain fork and had some bug fixes (#35956, #35385, #35957)
- When running an archive node, you can now configure the transaction index history using `--history.transactions` flag. (#35907)

## Core

- Amsterdam fork is set to activate at block timestamp 1793036568. (#35974)
- EVM interpreter opcode dispatching became 16% faster due to a new inlined switch implementation. (#35638)
- Several fixes for database corruption on power failure (#35939, #35936)
- Bug fix in trie database related to concurrent state reading (#35978)
- RPC call concurrent with block processing could result in BAL corruption. (#35905)
- State history committing is moved to the background, making `newPayload` 2% faster. (#35949)
- Key-value database settings changed for improved write performance (#35691)
- Fixed log index under history pruning beyond the checkpoint (#35875)

## Networking 

- Fixed snap/2 restart issue by checking for pivot block reorg in the header chain (#35930, #35982)
- Added metrics to discovery listeners (#35673)
- Fixed mempool corruption with tip below base fee (#35988)

## RPC

- `eth_simulateV1` spec compliance fixes (#35841, #35842, #35953)
- `eth_call` and similar methods will reject fields which are not aligned with forks 
- `eth_fillTransaction` always chooses AccessList transaction when `accessList` is provided by user. (#35969)
- `eth_newFilter` now accepts `earliest` in `toBlock`. (#35933)
- `eth_sendTransaction` rejects invalid `yParity` value in 7702 transactions. (#35761)
- In `debug_traceTransaction`, `debug_traceCall`, omit storage on halted SLOAD/SSTORE steps. (#35961)
- Pending block access was fixed on the Amsterdam fork transition block. (#35968)
- Historical RPC calls will reject transaction features which have not yet activated. (#35914, #35928)

---

For a full rundown of the changes please consult the Geth [1.17.9](https://github.com/ethereum/go-ethereum/milestone/206?closed=1) release milestone.

As with all our previous releases, you can find the:

- Pre-built binaries for all platforms on our [downloads page](https://geth.ethereum.org/downloads/).
- Docker images published under [`ethereum/client-go`](https://hub.docker.com/r/ethereum/client-go) (use "stable" tag).
- Ubuntu packages in our [Launchpad PPA repository](https://launchpad.net/~ethereum/+archive/ubuntu/ethereum).
- macOS packages in our [Homebrew Tap repository](https://github.com/ethereum/homebrew-ethereum).

---

> **Source** [ethereum/go-ethereum](https://github.com/ethereum/go-ethereum) · `v1.17.9` · 2026-10-21 · [upstream release](https://github.com/ethereum/go-ethereum/releases/tag/v1.17.9)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
