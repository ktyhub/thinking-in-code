---
title: "grpc v1.78.2"
project: "grpc"
repo: "grpc/grpc"
tag: "v1.78.2"
published: "2026-11-05"
type: "patch"
lang: "en"
summary: "This is release gRPC Core 1.78.2 (gutsy)."
---

# grpc v1.78.2

This is release gRPC Core 1.78.2 (gutsy).

For gRPC documentation, see [grpc.io](https://grpc.io/). For previous releases, see [Releases](https://github.com/grpc/grpc/releases).

This release contains refinements, improvements, and bug fixes, with highlights listed below.

PHP 
--- 

- Disable php infinite recursion check for callback from Core to PHP ([42600](https://github.com/grpc/grpc/pull/42600))

Core
---

* [security] Update gRPC repo roots ([43847](https://github.com/grpc/grpc/pull/43847))

Python
---

- Fixes Denial of service in Health Watch RPC ([#43818](https://github.com/grpc/grpc/pull/43818))
- Fixes Memory leak in AsyncIO client-streaming calls with interceptors ([#43818](https://github.com/grpc/grpc/pull/43818))

---

> **Source** [grpc/grpc](https://github.com/grpc/grpc) · `v1.78.2` · 2026-11-05 · [upstream release](https://github.com/grpc/grpc/releases/tag/v1.78.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
