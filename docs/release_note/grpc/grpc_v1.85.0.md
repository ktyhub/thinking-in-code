---
title: "grpc v1.85.0"
project: "grpc"
repo: "grpc/grpc"
tag: "v1.85.0"
published: "2026-10-26"
type: "minor"
lang: "en"
summary: "This is release 1.85.0 (googol) of gRPC Core."
---

# grpc v1.85.0

This is release 1.85.0 ([googol](https://github.com/grpc/grpc/blob/master/doc/g_stands_for.md)) of gRPC Core.

For gRPC documentation, see [grpc.io](https://grpc.io/). For previous releases, see [Releases](https://github.com/grpc/grpc/releases).

This release contains refinements, improvements, and bug fixes, with highlights listed below.


Core
---

-  [security] Update gRPC repo roots. ([#43717](https://github.com/grpc/grpc/pull/43717))
-  [experiments] Add map_host_header_to_authority experiment. ([#43561](https://github.com/grpc/grpc/pull/43561))
-  [Security] Add MLKEM1024 as a key exchange option. ([#43514](https://github.com/grpc/grpc/pull/43514))
-  Remove OpenSSL1.0.2 Support. ([#43466](https://github.com/grpc/grpc/pull/43466))
-  [Autosharding-LB][Part-1] Implementing A119. ([#43406](https://github.com/grpc/grpc/pull/43406))
-  [OpenSSL] Add support for OpenSSL 4. ([#41932](https://github.com/grpc/grpc/pull/41932))
-  [A110] Add child channel options. ([#43314](https://github.com/grpc/grpc/pull/43314))

C#
---

-  [Build] Disambiguate protobuf_version in templates. ([#43433](https://github.com/grpc/grpc/pull/43433))

Python
---

-  [Python][AIO] Fixed data race in PollerCompletionQueue. ([#43429](https://github.com/grpc/grpc/pull/43429))
-  [Python] Fix SyncServicerContext abort not raising exception. ([#43126](https://github.com/grpc/grpc/pull/43126))
-  [Python] Fixed channelz module leak. ([#43196](https://github.com/grpc/grpc/pull/43196))
-  [Python] Fixed CSDS memory leak. ([#43202](https://github.com/grpc/grpc/pull/43202))
-  [Python] Unpin Cython dependency for source builds. ([#43378](https://github.com/grpc/grpc/pull/43378))

---

> **Source** [grpc/grpc](https://github.com/grpc/grpc) · `v1.85.0` · 2026-10-26 · [upstream release](https://github.com/grpc/grpc/releases/tag/v1.85.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
