---
title: "grpc v1.84.2"
project: "grpc"
repo: "grpc/grpc"
tag: "v1.84.2"
published: "2026-10-30"
type: "patch"
lang: "en"
summary: "This is release gRPC Core 1.84.2 (gimbal)."
---

# grpc v1.84.2

This is release gRPC Core 1.84.2 (gimbal).

For gRPC documentation, see [grpc.io](https://grpc.io/). For previous releases, see [Releases](https://github.com/grpc/grpc/releases).

This release contains refinements, improvements, and bug fixes.

### Python 
---

- Fixes Denial of service in Health Watch RPC ([#43784](https://github.com/grpc/grpc/pull/43784))
- Fixes Memory leak in AsyncIO client-streaming calls with interceptors ([#43784](https://github.com/grpc/grpc/pull/43784))

### Core
---

* host/:authority handling: consistent authority in xDS routing/RBAC, HPACK host->:authority mapping, enable map_host_header_to_authority ([#43798](https://github.com/grpc/grpc/pull/43798))

---

> **Source** [grpc/grpc](https://github.com/grpc/grpc) · `v1.84.2` · 2026-10-30 · [upstream release](https://github.com/grpc/grpc/releases/tag/v1.84.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
