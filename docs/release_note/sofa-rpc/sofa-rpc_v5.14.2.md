---
title: "sofa-rpc v5.14.2"
project: "sofa-rpc"
repo: "sofastack/sofa-rpc"
tag: "v5.14.2"
published: "2026-03-11"
type: "patch"
lang: "en"
summary: "SOFARPC v5.14.2 is an enhancement release that focuses on fixing several issues in the Triple protocol, including POJO generic calls, Tracer context propagation, and optimizing the remote IP retrieval logic. This…"
---

# sofa-rpc v5.14.2

## Abstract

**SOFARPC v5.14.2** is an enhancement release that focuses on fixing several issues in the Triple protocol, including POJO generic calls, Tracer context propagation, and optimizing the remote IP retrieval logic. This release improves the stability and reliability of the framework. (Requires JDK8 support)

---

## What's Changed

### Enhancement

- **Enhanced remote IP retrieval logic** - Improved the way remote IP addresses are obtained in the Triple protocol by @EvenLjj in #1529

### Fix

- **Fixed Triple POJO overload issue** - Resolved method overload matching problems when calling generics in POJO mode with the Triple protocol by @EvenLjj in #1523
- **Fixed Triple generic error** - Fixed issues with Triple generic calls and unit test errors by @sunhailin-Leo in #1531
- **Fixed Triple Tracer context cross-thread propagation issue** - Solved the problem of tracer context being lost in cross-thread scenarios by @EvenLjj in #1539

### Chore

- **Fixed two flaky CI tests in test-integration** - Resolved unstable tests in the test-integration module by @app/copilot-swe-agent in #1534

---

## New Contributors
* @sunhailin-Leo made their first contribution in https://github.com/sofastack/sofa-rpc/pull/1531
* @Copilot made their first contribution in https://github.com/sofastack/sofa-rpc/pull/1534

---

## Full Changelog

[v5.14.1...v5.14.2](https://github.com/sofastack/sofa-rpc/compare/v5.14.1...v5.14.2)

---

---

> **Source** [sofastack/sofa-rpc](https://github.com/sofastack/sofa-rpc) · `v5.14.2` · 2026-03-11 · [upstream release](https://github.com/sofastack/sofa-rpc/releases/tag/v5.14.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
