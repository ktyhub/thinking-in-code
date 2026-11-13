---
title: "grpc v1.83.2"
project: "grpc"
repo: "grpc/grpc"
tag: "v1.83.2"
published: "2026-11-02"
type: "patch"
lang: "en"
summary: "This is release 1.83.2 (garden) of gRPC Core."
---

# grpc v1.83.2

This is release 1.83.2 ([garden](https://github.com/grpc/grpc/blob/master/doc/g_stands_for.md)) of gRPC Core.

For gRPC documentation, see [grpc.io](https://grpc.io/). For previous releases, see [Releases](https://github.com/grpc/grpc/releases).

This release contains refinements, improvements, and bug fixes, with highlights listed below.


Core
---

-  [Backport][v1.83.x][security] Update gRPC repo roots. ([#43740](https://github.com/grpc/grpc/pull/43740))
-  [Security] Default to Post-Quantum Cryptography in TLS key exchange. ([#42560](https://github.com/grpc/grpc/pull/42560))
-  [authz] don't pass RBAC policy by value when constructing authorization engine. ([#42636](https://github.com/grpc/grpc/pull/42636))

C#
---

-  Migrate CSharp Grpc.Tools to new DotNet Version. ([#42661](https://github.com/grpc/grpc/pull/42661))
-  [C#] Tools - Build: Fix protoc SIGSEGV on ARM64 by aligning max-page-size and migrating to manylinux_2_28. ([#42590](https://github.com/grpc/grpc/pull/42590))

Python
---

-  [Backport][v1.83.x][export] Internal change. ([#43792](https://github.com/grpc/grpc/pull/43792))
-  [Backport][v1.83.x][Python] Fix the StatusCode Enums to be int. ([#43252](https://github.com/grpc/grpc/pull/43252))
-  [Backport][v1.83.x][Python] grpc-status: Relax protobuf dependency lower bound to allow 6.x. ([#43001](https://github.com/grpc/grpc/pull/43001))
-  [Python] Add abort_with_status to the aio ServicerContext ABC. ([#42733](https://github.com/grpc/grpc/pull/42733))
-  [Python] Update lower bound for protobuf from 6.33.5 to 7.35.1. ([#42914](https://github.com/grpc/grpc/pull/42914))
-  [Python] Pyright typeCheckingMode - standard. ([#42739](https://github.com/grpc/grpc/pull/42739))
-  [Python] Support 3.15 - Update docker images which include 3.15.0b2. ([#42374](https://github.com/grpc/grpc/pull/42374))
-  [Python] Support Python 3.15 - Upgrade bazel dep rules_python to 2.0.2. ([#42637](https://github.com/grpc/grpc/pull/42637))
-  [Python] Handle _InactiveRpcError pytorch exception wrapper edge case. ([#42644](https://github.com/grpc/grpc/pull/42644))
-  [Python] Hide internal symbols from Python's `cygrpc` shared object. ([#42325](https://github.com/grpc/grpc/pull/42325))
-  [Python] Handle custom Interceptor exceptions in InterceptedCall APIs . ([#42593](https://github.com/grpc/grpc/pull/42593))

---

> **Source** [grpc/grpc](https://github.com/grpc/grpc) · `v1.83.2` · 2026-11-02 · [upstream release](https://github.com/grpc/grpc/releases/tag/v1.83.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
