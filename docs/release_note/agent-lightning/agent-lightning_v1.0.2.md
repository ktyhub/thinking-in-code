---
title: "agent-lightning v1.0.2"
project: "agent-lightning"
repo: "microsoft/agent-lightning"
tag: "v1.0.2"
version: "v1.0.2"
published: "2026-09-29"
type: "patch"
lang: "en"
summary: "MoE coding-agent training: Added Qwen3.5-35B-A3B training with CISPO and R3 expert-routing replay, plus a runnable example and guide (#601, #607)."
---

# agent-lightning v1.0.2

## Highlights

- **MoE coding-agent training:** Added Qwen3.5-35B-A3B training with CISPO and R3 expert-routing replay, plus a runnable example and guide (#601, #607). In the published pure-RL experiment, SWE-bench Verified performance rose from **47.8% to 61.6%** after 1,792 training examples (#608).
- **Multimodal training:** Image inputs now flow from rollout traces into VERL training batches, fixing a case where the model saw images during rollout but not during training. A multimodal QA example is included (#560).

## Features

- Updated the v1 PyPI release and test workflows, version checks, and package metadata (#548, #556).
- Added a contributing guide (#598).

## Bug Fixes

- Drop invalid multimodal rollout rows before PPO training (#588).
- Disable prefix caching in the multimodal QA example (#577).
- Make request cancellation effective with vLLM versions earlier than 0.9 (#590).
- Preserve gateway requests without valid prompt token IDs (#573).
- Reject non-object JSON request bodies with a clear HTTP 400 response (#587).
- Cancel gateway requests when agents disconnect (#604).
- Honor the configured agent URL for local workers (#582).
- Avoid spawning rollouts during controller shutdown (#580).
- Preserve timeout reasons across report retries (#585).
- Fail fast when the local runner is used on native Windows (#583).
- Replace Authorization headers case-insensitively (#584).
- Correctly parse ANSI-colored pytest statuses in SWE-smith (#599).
- Fix documentation deployment dependencies (#543) and the ALFWorld benchmark chart (#554).

## Contributors

Human contributors, listed alphabetically by GitHub username:

@dalongbao, @danfiedler-msft, @hiro-nikaitou, @hzy46, @JiahaoTanXX, @kiteretsu903, @KunyangZhang, @ldemon2333, @rioyu123, @shuming-dev, @SiweiPro, @ultmaster, @xccElephant, @YusefSyed, @ZenAlexa, @zzzhang1127.

---

> **Source** [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) · `v1.0.2` · 2026-09-29 · [upstream release](https://github.com/microsoft/agent-lightning/releases/tag/v1.0.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
