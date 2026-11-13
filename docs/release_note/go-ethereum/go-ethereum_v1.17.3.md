---
title: "go-ethereum v1.17.3"
project: "go-ethereum"
repo: "ethereum/go-ethereum"
tag: "v1.17.3"
published: "2026-05-11"
type: "patch"
lang: "en"
---

# go-ethereum v1.17.3

<!-- Enzymatic Injector (v1.17.3) -->

This is a maintenance release with continued progress on the Amsterdam fork implementation. It also introduces ETH/70, which is now live on the network.

Breaking change for tracing APIs (debug_trace*), specifically the structLog (opcode) tracer. The following response fields now follow the newly established client-wide spec (ethereum/execution-apis#762) and `reexec` has been removed from the tracing config:

- `memory`: words are 0x-prefixed and padded to 32 bytes
- `storage`: keys and values are 0x-prefixed
- `error`: omitted when empty (previously serialized as "")

### Geth

- Add retry mechanism for checkpoint init in blsync (#33966)
- Add subcommand for offline binary tree conversion (#33740)
- Add code exporter for db export (#34696)

### Core

- Amsterdam fork updates:
  - Prerequisites of EIP-7928: Block-Level Access Lists (#34064, #34644, #34726, #34776, #34799, #33737)
  - Prerequisites of EIP-8037: State Creation Gas Cost Increase (#34691, #34712, #34841)
  - EIP-7976: Increase Calldata Floor Cost (#34748)
  - EIP-7981: Increase Access List Cost (#34755)
  - EIP-7610: Reject contract creation when storage is non-empty (#34718)
  - Update state tests (#34671)
- Implement stack arena (#33960)
- Implement EIP-7975: eth/70 partial block receipt lists (#33153)
- Prerequisites of `snap/2` protocol (#34083, #34649, #34654, #34874)
- Implement history index pruner for path-mode archive nodes (#33999)
- Add Prague chain segment pruning point for Hoodi (#34714)
- Allow reorging head to parent within 32 blocks under ePBS (#34767)
- Stop serving chain segment requests when data is unavailable (#34787)
- Drop peers sending invalid bodies or receipts (#34745, #34870)
- Add kzg4844 cell-related functions (#34766)
- State database refactoring (#33102, #34700, #34763, #34724)
- Binary trie improvements (#34055, #34110, #34670, #34676, #34680, #34690, #34754, #34758, #34777, #34794)
- Merge EIP-4762 access events for all system calls (#34637)
- Reject duplicate layers in the path database (#34642)
- Omit empty `slotNumber` and fix block value collection in pre-Amsterdam engine API payloads (#34704)
- Include the operand in EIP-8024 error messages (#34635)
- Fix vmodule downgrades and propagate verbosity changes to derived loggers (#33111)
- Fix incorrect fsync ordering for index file truncation (#34728)
- Fix file descriptor leak in freezer error paths (#34735)
- Fix size calculation in path database (#34828)
- Fix gapped queue size cap in blobpool (#34831)
- Improve txpool pending concurrency by using read-only locking (#32924)
- Replace deprecated TypeMux with Feed (#32585)
- Continue blob retrieval when individual cell proof extraction fails (#34891)
- Use uint256 in core Message for faster gas calculations (#34934)

### Networking

- Fix early exit of timeout loop when removing expired matchers (#34743, #34878)
- Prevent data races by copying discover buffers before unhandled read errors (#34888)
- Fix discover waitForNodes deadlock by decoupling nodeFeed from table mutex (#34898)

### Cryptography

- Validate hash length in nocgo signature verification (#33839)

### RPC

- Fix structLog JSON output format and drop `reexec` from tracing config (#34093)
- Apply block overrides (gasLimit, blobBaseFee) in `eth_estimateGas` (#34081)
- Apply block overrides to header in `eth_call` (#34842)
- Add `MaxUsedGas` to `eth_simulate` call results (#34820)
- Integrate trienode history indexing progress into `eth_syncing` (#34633)
- Return -32602 from log RPCs (`eth_getLogs`, `eth_getFilterLogs`, …) when the block range limit is exceeded (#34647)


### Others
- Fix prestate tracer to distinguish cleared code from unchanged in EIP-7702 (#34675)
- Emit logs for EIP-7708 ETH burns in tracer (#34623)
- Forward V2 state hooks through mux tracer (#34869)
- Send WebSocket close frame on client disconnect (#33909)
- Omit empty address/topics fields in RPC filter requests (#33884)
- Add package-level error for event signature mismatch (#34076, #34868)
- Add gRPC transport for OTLP trace export (#33941)
- Add system call tracing in t8n command (#34862)
- Stream t8n alloc output to reduce memory use (#34785)
- Enable fsnotify watcher on linux/arm64 (#34834)
- Fix FreeBSD build (#34784)
- Fix disconnect decoding in RLPx ping (#34781)
- Fix hive test for discv5 findnode results (#34043)
- Fix truncation of opening parenthesis in clef (#33702)

For a full rundown of the changes please consult the Geth [1.17.3](https://github.com/ethereum/go-ethereum/milestone/200?closed=1) release milestone.

---

As with all our previous releases, you can find the:

- Pre-built binaries for all platforms on our [downloads page](https://geth.ethereum.org/downloads/).
- Docker images published under [`ethereum/client-go`](https://hub.docker.com/r/ethereum/client-go) (use "stable" tag).
- Ubuntu packages in our [Launchpad PPA repository](https://launchpad.net/~ethereum/+archive/ubuntu/ethereum).
- macOS packages in our [Homebrew Tap repository](https://github.com/ethereum/homebrew-ethereum).

---

> **Source** [ethereum/go-ethereum](https://github.com/ethereum/go-ethereum) · `v1.17.3` · 2026-05-11 · [upstream release](https://github.com/ethereum/go-ethereum/releases/tag/v1.17.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
