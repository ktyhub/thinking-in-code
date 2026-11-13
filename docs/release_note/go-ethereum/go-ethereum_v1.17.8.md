---
title: "go-ethereum v1.17.8"
project: "go-ethereum"
repo: "ethereum/go-ethereum"
tag: "v1.17.8"
published: "2026-10-08"
type: "patch"
lang: "en"
summary: "This is a security-focused release, fixing several DoS risk issues ❤️‍🩹 . Note most of the the fixes related to bugs which only become possible after the activation of the Amsterdam fork. There are also some general…"
---

# go-ethereum v1.17.8

This is a security-focused release, fixing several DoS risk issues ❤️‍🩹 . Note most of the the fixes related to bugs which only become possible after the activation of the Amsterdam fork. There are also some general correctness improvements.

This release is recommended for all users.

## All Changes

### Security

- In the eth and snap p2p protocol handler, DoS resistance has been improved for multiple packet handlers (#35862, #35883, #35859, #35857, #35904, #35856)
- JUMPDEST analysis caching has been hardened for attack cases after Amsterdam fork (#35881)
- The IP address predictor now requires IP verification before accepting statements (#35861)
- A post-Amsterdam DoS vector related to BAL accounts is resolved (#35865)
- A rogue STUN server could crash the node with an invalid response (#35863)

### RPC

- `eth_createAccessList` now works when the sender account has no balance (#35397)
- `eth_simulateV1` has been fixed to correctly report ETH transfer logs post-Amsterdam (#35617)
- `eth_simulateV1` virtual blocks are now aligned with the Amsterdam spec (#35668)
- `eth_capabilities` reports the availability of receipts bounded by the transaction hash index (#35878)
- For `eth_call` and related operations, the transaction gas limit is no longer applied (after Amsterdam fork) (#35845)
- A post-Amsterdam crash in journaled live tracers core/tracing: handle creator nonce change without an open frame (#35896)
- An edge case in processing beacon chain head updates after unclean shutdown is resolved (#35804)
- abigen will now use sequential nonces when deploying library dependencies of a contract (#35888)

### Core Library

- The hard-coded Hoodi testnet beacon chain genesis time was incorrect (#35876)
- blsync could get stuck if the server was unresponsive or overloaded (#35872)

### P2P

- A correctness issue in the EIP-8070 Sparse Blobpool (Amsterdam fork) implementation is fixed (#35860)
- The dial scheduler now handles IPv4 <> IPv6 transitions for DNS-resolved static nodes (#35880)

### Build

- The PPA now publishes for Ubuntu 26.04 "Resolute Raccoon" (#35854)

---

For a full rundown of the changes please consult the Geth [1.17.8](https://github.com/ethereum/go-ethereum/milestone/205?closed=1) release milestone.

As with all our previous releases, you can find the:

- Pre-built binaries for all platforms on our [downloads page](https://geth.ethereum.org/downloads/).
- Docker images published under [`ethereum/client-go`](https://hub.docker.com/r/ethereum/client-go) (use "stable" tag).
- Ubuntu packages in our [Launchpad PPA repository](https://launchpad.net/~ethereum/+archive/ubuntu/ethereum).
- macOS packages in our [Homebrew Tap repository](https://github.com/ethereum/homebrew-ethereum).

---

> **Source** [ethereum/go-ethereum](https://github.com/ethereum/go-ethereum) · `v1.17.8` · 2026-10-08 · [upstream release](https://github.com/ethereum/go-ethereum/releases/tag/v1.17.8)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
