---
title: "hypit v0.2.11"
project: "hypit"
repo: "hypit-ai/hypit"
tag: "v0.2.11"
version: "v0.2.11"
published: "2026-09-21"
type: "patch"
lang: "en"
summary: "fix(providers): keep async jobs pending when a progress poll hits a transport error in https://github.com/hypit-ai/hypit/pull/336."
---

# hypit v0.2.11

## What's Changed
* fix(providers): keep async jobs pending when a progress poll hits a transport error in https://github.com/hypit-ai/hypit/pull/336. A 5xx response (such as 522), a connection failure, or a timeout while checking job status no longer fails the Build; the job is polled again on the next interval, so a generation that completes remotely is still collected. Applies to HypiHub, BeatAPI, HiAPI, Pollo, Monid, and TokenDance.
* fix(pixverse): render at 540p or 720p.


**Full Changelog**: https://github.com/hypit-ai/hypit/compare/v0.2.10...v0.2.11

---

> **Source** [hypit-ai/hypit](https://github.com/hypit-ai/hypit) · `v0.2.11` · 2026-09-21 · [upstream release](https://github.com/hypit-ai/hypit/releases/tag/v0.2.11)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
