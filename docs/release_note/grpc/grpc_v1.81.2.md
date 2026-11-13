---
title: "grpc v1.81.2"
project: "grpc"
repo: "grpc/grpc"
tag: "v1.81.2"
published: "2026-11-06"
type: "patch"
lang: "en"
summary: "This is release 1.81.2 (graphic) of gRPC Core."
---

# grpc v1.81.2

This is release 1.81.2 ([graphic](https://github.com/grpc/grpc/blob/master/doc/g_stands_for.md)) of gRPC Core.

For gRPC documentation, see [grpc.io](https://grpc.io/). For previous releases, see [Releases](https://github.com/grpc/grpc/releases).

This release contains refinements, improvements, and bug fixes, with highlights listed below.


Core
---

-  [Backport][v1.81.x][security] Update gRPC repo roots. ([#43822](https://github.com/grpc/grpc/pull/43822))
-  [EventEngine] Fix a potential use-after-free error on Windows. ([#42078](https://github.com/grpc/grpc/pull/42078))
-  [ssl] Server side handshaker factory stores a map of key signers. ([#42002](https://github.com/grpc/grpc/pull/42002))
-  [Core] Fix completion queue shutdown race on weak memory models (ARM). ([#41510](https://github.com/grpc/grpc/pull/41510))
-  [EventEngine] Fix a Windows race that causes an assertion error. ([#41563](https://github.com/grpc/grpc/pull/41563))
-  [grpc_error] enable error_flatten experiment in OSS. ([#41471](https://github.com/grpc/grpc/pull/41471))

Objective-C
---

-  [ObjC] Add receiveNextMessage to GRPCUnaryProtoCall. ([#42260](https://github.com/grpc/grpc/pull/42260))

Python
---

-  [Backport][v1.81.x][export] Internal change. ([#43790](https://github.com/grpc/grpc/pull/43790))
-  [Python] Add typing_extensions dep to aio Bazel target. ([#42001](https://github.com/grpc/grpc/pull/42001))
-  [Python] [Pyright] Part 1 - Pyright for src/python/grpcio/grpc/aio/_base_server.py. ([#42240](https://github.com/grpc/grpc/pull/42240))
-  [Python] Drop 3.9. ([#42145](https://github.com/grpc/grpc/pull/42145))
-  [Python] grpc-status: Relax protobuf dependency upper bound to allow 7.x. ([#41948](https://github.com/grpc/grpc/pull/41948))
-  [Python] [Typeguard] Part 5 - Add Typeguard SYNC Stack in tests. ([#40278](https://github.com/grpc/grpc/pull/40278))
-  [Python] Remove GIL from ReceiveMessageOperation.un_c method. ([#41812](https://github.com/grpc/grpc/pull/41812))
-  [Python] Support observability in AsyncIO stack. ([#41573](https://github.com/grpc/grpc/pull/41573))
-  [Python] Trim Python2 backward compatiblity syntax - removed (object) inheritance. ([#41708](https://github.com/grpc/grpc/pull/41708))

Ruby
---

-  [Ruby] Drop support for EOL Ruby 3.1 and clean up. ([#41435](https://github.com/grpc/grpc/pull/41435))
-  [Ruby] Composed CallCredentials keep a reference to their source. ([#41782](https://github.com/grpc/grpc/pull/41782))

---

> **Source** [grpc/grpc](https://github.com/grpc/grpc) · `v1.81.2` · 2026-11-06 · [upstream release](https://github.com/grpc/grpc/releases/tag/v1.81.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
