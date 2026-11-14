---
title: "headroom v0.43.1"
project: "headroom"
repo: "headroomlabs-ai/headroom"
tag: "v0.43.1"
version: "v0.43.1"
published: "2026-11-05"
type: "patch"
lang: "en"
---

# headroom v0.43.1

## [0.43.1](https://github.com/headroomlabs-ai/headroom/compare/v0.43.0...v0.43.1) (2026-11-05)


### Bug Fixes

* **ccr:** keep the in-memory order queue from evicting re-stored entries ([#4545](https://github.com/headroomlabs-ai/headroom/issues/4545)) ([c6f5bf9](https://github.com/headroomlabs-ai/headroom/commit/c6f5bf9549e9b357e9c2369d4e04bc437f5e180d))
* **memory:** read the relation key the memory_save schema advertises ([#4647](https://github.com/headroomlabs-ai/headroom/issues/4647)) ([7592e68](https://github.com/headroomlabs-ai/headroom/commit/7592e681459f14a2041eb5f524a658cb6ad1dd92))
* **memory:** replace the HNSW vector when a memory is re-indexed ([#4649](https://github.com/headroomlabs-ai/headroom/issues/4649)) ([ee638f9](https://github.com/headroomlabs-ai/headroom/commit/ee638f9532b3788bacd13ed8d26dd0faf0740baf))
* **openclaw:** accept 12-character hashes in headroom_retrieve ([#4640](https://github.com/headroomlabs-ai/headroom/issues/4640)) ([8d3e9e5](https://github.com/headroomlabs-ai/headroom/commit/8d3e9e5ca7cd645eb73084b848edbea5fc796e1a))
* **ort:** avoid implicit runtime discovery from the workspace ([#4570](https://github.com/headroomlabs-ai/headroom/issues/4570)) ([69fbd23](https://github.com/headroomlabs-ai/headroom/commit/69fbd2390d9c8b0fa1f59fb8314bc9b8f01b1a55))
* **proxy:** bound the model-keyed tokenizer, beacon and litellm caches ([#4497](https://github.com/headroomlabs-ai/headroom/issues/4497)) ([e51b806](https://github.com/headroomlabs-ai/headroom/commit/e51b8065a4a2aa3a3c7f266c1cb8d8bde6b568d0))
* **proxy:** use HTTP/1.1 client for ChatGPT streaming and model metadata ([#4006](https://github.com/headroomlabs-ai/headroom/issues/4006)) ([e1becdf](https://github.com/headroomlabs-ai/headroom/commit/e1becdf7329bf4ca03874b9f512ac19837ca29c2))
* **release:** normalize damaged release PR envelopes before detection ([#4664](https://github.com/headroomlabs-ai/headroom/issues/4664)) ([917edc6](https://github.com/headroomlabs-ai/headroom/commit/917edc62230c3c4a8a415e2053da68dab1f003dd))
* **router:** keep tagged blocks out of the lossy size-gate fallback ([#4543](https://github.com/headroomlabs-ai/headroom/issues/4543)) ([f333edf](https://github.com/headroomlabs-ai/headroom/commit/f333edf20f0d7acf5ea67e040c1f58539a0edd4d))
* **router:** log the ONNX fallbacks at info instead of warning ([#4535](https://github.com/headroomlabs-ai/headroom/issues/4535)) ([db30d82](https://github.com/headroomlabs-ai/headroom/commit/db30d82dfffdb3bbe4d60a0e0bfe88640e58470f))


### Dependencies

* bump the npm-minor-patch group across 3 directories with 6 updates ([#4662](https://github.com/headroomlabs-ai/headroom/issues/4662)) ([8f104f8](https://github.com/headroomlabs-ai/headroom/commit/8f104f8e298c85ff0005f2fd4848eea95f32b7c7))

<!-- headroom-teams-footer -->

---

**Want more savings?** Headroom Enterprise saves more for teams and enterprises. Talk to us at [hello@headroomlabs.ai](mailto:hello@headroomlabs.ai) or [headroomlabs.ai](https://headroomlabs.ai).

---

> **Source** [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) · `v0.43.1` · 2026-11-05 · [upstream release](https://github.com/headroomlabs-ai/headroom/releases/tag/v0.43.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
