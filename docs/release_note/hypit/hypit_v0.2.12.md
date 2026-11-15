---
title: "hypit v0.2.12"
project: "hypit"
repo: "hypit-ai/hypit"
tag: "v0.2.12"
version: "v0.2.12"
published: "2026-09-21"
type: "patch"
lang: "en"
summary: "fix(endpoint-kit): share the poll error decision across asynchronous Providers in https://github.com/hypit-ai/hypit/pull/337."
---

# hypit v0.2.12

## What's Changed
* fix(endpoint-kit): share the poll error decision across asynchronous Providers in https://github.com/hypit-ai/hypit/pull/337. Progress polling now keeps a job pending on HTTP 429 as well as 5xx and transport errors, waiting the `Retry-After` the service asks for when it gives one. Configuration errors such as a missing API key or refresh token fail the job immediately instead of waiting out the operation deadline. Applies to HypiHub, BeatAPI, HiAPI, Pollo, Monid, and TokenDance.


**Full Changelog**: https://github.com/hypit-ai/hypit/compare/v0.2.11...v0.2.12

---

> **Source** [hypit-ai/hypit](https://github.com/hypit-ai/hypit) · `v0.2.12` · 2026-09-21 · [upstream release](https://github.com/hypit-ai/hypit/releases/tag/v0.2.12)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
