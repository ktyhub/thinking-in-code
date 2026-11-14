---
title: "sofa-rpc v5.14.3"
project: "sofa-rpc"
repo: "sofastack/sofa-rpc"
tag: "v5.14.3"
published: "2026-06-30"
type: "patch"
lang: "en"
summary: "SOFARPC v5.14.3 introduces Apache Fory (formerly Fury) serialization support and fixes several issues in the Triple protocol and proxy generation, improving serialization performance and stability."
---

# sofa-rpc v5.14.3

## Abstract

**SOFARPC v5.14.3** introduces **Apache Fory (formerly Fury) serialization** support and fixes several issues in the Triple protocol and proxy generation, improving serialization performance and stability. (Requires JDK8 support)

---

## What's Changed

### Feature

- **Apache Fory serialization support** - Added Apache Fory serialization for SOFARPC by @sunhailin-Leo in #1551

### Enhancement

- **Increased gRPC message max size** - Changed gRPC message max size to `Integer.MAX_VALUE` by @EvenLjj in #1567

### Fix

- **Triple request baggage** - Parse request baggage from Triple headers on the server side by @EvenLjj in #1565
- **StreamObserver thread-safety** - Added thread-safety for concurrent `onNext` calls on StreamObserver by @EvenLjj in #1564
- **JavassistProxy duplicate methods** - Deduplicate methods in JavassistProxy to prevent `DuplicateMemberException` by @sunhailin-Leo in #1554
- **Fury FGC** - Avoid redundant Fury instance recreation to prevent FGC by @sunhailin-Leo in #1553

### Chore

- **Fory 1.0.0 upgrade** - Updated Fory version to 1.0.0 and removed unnecessary classloader setting by @sunhailin-Leo in #1563

---

## Full Changelog

[v5.14.2...v5.14.3](https://github.com/sofastack/sofa-rpc/compare/v5.14.2...v5.14.3)

---

> **Source** [sofastack/sofa-rpc](https://github.com/sofastack/sofa-rpc) · `v5.14.3` · 2026-06-30 · [upstream release](https://github.com/sofastack/sofa-rpc/releases/tag/v5.14.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
