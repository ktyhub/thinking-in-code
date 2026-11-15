---
title: "hypit v0.2.13"
project: "hypit"
repo: "hypit-ai/hypit"
tag: "v0.2.13"
version: "v0.2.13"
published: "2026-09-23"
type: "patch"
lang: "en"
summary: "fix(oauth): return sign-in through the hosted callback page in https://github.com/hypit-ai/hypit/pull/349. hypit auth login now works when the CLI runs on a remote host, in a container, or under a remote agent."
---

# hypit v0.2.13

## What's Changed
* fix(oauth): return sign-in through the hosted callback page in https://github.com/hypit-ai/hypit/pull/349. `hypit auth login` now works when the CLI runs on a remote host, in a container, or under a remote agent. The HypiHub callback page shows a `code#state` to copy back when the browser is on another machine, and finishes the login by itself when the browser is on the same machine.
* fix: ignore album artwork in media probes in https://github.com/hypit-ai/hypit/pull/347. An MP3 with cover art is read as audio, so cutting it to WAV works. Fixes #346.
* fix: include bundled packages in vocabulary listings in https://github.com/hypit-ai/hypit/pull/345. `hypit vocabulary` lists the packages bundled with the Distribution, including in an empty project. Fixes #344.
* fix: encode HyperFrames renders with BT.709 and tag the output in https://github.com/hypit-ai/hypit/pull/342. Rendered colors match the source in players and platform transcoders.
* docs: link Runtime from the images pages with a relative path in https://github.com/hypit-ai/hypit/pull/341. Fixes #340.
* fix: round mux duration to the PCM sample boundary in https://github.com/hypit-ai/hypit/pull/339. Exports at NTSC frame rates such as 30000/1001 fps get through the mux step. Fixes #338.


**Full Changelog**: https://github.com/hypit-ai/hypit/compare/v0.2.12...v0.2.13

---

> **Source** [hypit-ai/hypit](https://github.com/hypit-ai/hypit) · `v0.2.13` · 2026-09-23 · [upstream release](https://github.com/hypit-ai/hypit/releases/tag/v0.2.13)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
