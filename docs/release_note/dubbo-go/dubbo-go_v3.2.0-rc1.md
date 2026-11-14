---
title: "dubbo-go v3.2.0-rc1"
project: "dubbo-go"
repo: "apache/dubbo-go"
tag: "v3.2.0-rc1"
published: "2024-03-10"
type: "minor"
lang: "en"
summary: "Introduce brand new programming API. · Upgraded triple protocol, 100% compatible with gRPC while supporting direct HTTP API access with application/json payload. · RPC service definition supports both IDL and NON-IDL."
---

# dubbo-go v3.2.0-rc1

## Features
* Introduce brand [new programming API](https://github.com/apache/dubbo-go-samples/tree/main/helloworld).
* Upgraded [triple protocol](https://github.com/apache/dubbo-go-samples/tree/main/rpc/triple), 100% compatible with gRPC while supporting direct HTTP API access with `application/json` payload.
* RPC service definition supports both [IDL](https://github.com/apache/dubbo-go-samples/tree/main/rpc/triple/pb) and [NON-IDL](https://github.com/apache/dubbo-go-samples/tree/main/rpc/triple).
* Observability enhancement, [metrics](https://github.com/apache/dubbo-go-samples/tree/main/metrics) & [tracing](https://github.com/apache/dubbo-go-samples/tree/main/otel/tracing)
* Introduce weighted round-robin and alias-method load-balance strategies

## Interoperability With Java
This version guarantees fully interoperability between dubbo go and java implementations, below are some interop examples:

* Example demonstrating `dubbo + hesian` interop
* Example demonstrating `triple + protobuf` interop
* Example demonstrating `triple + non-protobuf` interop
* Example demonstrating `service discovery` interop

## Compatibility
This version is completely compatible with 3.0.x ~ 3.1.x versions. Users using old API and triple protocol can upgrade to this version directly without changing any code.

## New Contributors
* @Axkea made their first contribution in https://github.com/apache/dubbo-go/pull/2393
* @L2ncE made their first contribution in https://github.com/apache/dubbo-go/pull/2421
* @Jafeyyu made their first contribution in https://github.com/apache/dubbo-go/pull/2552
* @shikharish made their first contribution in https://github.com/apache/dubbo-go/pull/2573
* @klboke made their first contribution in https://github.com/apache/dubbo-go/pull/2579
* @setcy made their first contribution in https://github.com/apache/dubbo-go/pull/2596
* @NX-Official made their first contribution in https://github.com/apache/dubbo-go/pull/2606

---

> **Source** [apache/dubbo-go](https://github.com/apache/dubbo-go) · `v3.2.0-rc1` · 2024-03-10 · [upstream release](https://github.com/apache/dubbo-go/releases/tag/v3.2.0-rc1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
