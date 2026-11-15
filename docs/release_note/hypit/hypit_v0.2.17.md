---
title: "hypit v0.2.17"
project: "hypit"
repo: "hypit-ai/hypit"
tag: "v0.2.17"
version: "v0.2.17"
published: "2026-10-01"
type: "patch"
lang: "en"
summary: "A network failure now says which network failure it was. Node's fetch reports every connection-level failure as fetch failed and keeps the reason on error.cause, which the shared transport() helper dropped."
---

# hypit v0.2.17

## Highlights

- A network failure now says which network failure it was. Node's `fetch` reports every connection-level failure as `fetch failed` and keeps the reason on `error.cause`, which the shared `transport()` helper dropped. A failed HypiHub catalogue check therefore read `... generation not submitted: fetch failed`, which cannot tell DNS, TLS, a reset, a timeout or a proxy problem apart, and was misread as an upstream provider outage.

  The cause's code and message are now appended:

  | Failure | Before | After |
  | --- | --- | --- |
  | DNS | `fetch failed` | `fetch failed: getaddrinfo ENOTFOUND <host>` |
  | Certificate | `fetch failed` | `fetch failed: CERT_HAS_EXPIRED certificate has expired` |
  | Connect timeout | `fetch failed` | `fetch failed: UND_ERR_CONNECT_TIMEOUT Connect Timeout Error (attempted address: <ip>:<port>, timeout: 10000ms)` |

  Every provider's network failures pass through this helper, so HypiHub catalogue reads, OAuth refresh, uploads and downloads all gain the reason. The text comes from Node's network layer (host, address and port, error code, certificate reason) and contains no URL path, query string or header. (#376)

## Upgrade

Install `@hypit/hypit@0.2.17`. Existing video projects and materials need no migration. Error messages keep their original text as the prefix.

## Validation

PR checks passed on Linux and Windows, including the packaged-Distribution check. The new messages above were produced by sending real failing requests through `transport()`.

---

> **Source** [hypit-ai/hypit](https://github.com/hypit-ai/hypit) · `v0.2.17` · 2026-10-01 · [upstream release](https://github.com/hypit-ai/hypit/releases/tag/v0.2.17)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
