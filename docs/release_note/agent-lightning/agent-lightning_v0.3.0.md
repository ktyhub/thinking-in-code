---
title: "agent-lightning v0.3.0"
project: "agent-lightning"
repo: "microsoft/agent-lightning"
tag: "v0.3.0"
version: "v0.3.0"
published: "2025-12-24"
type: "minor"
lang: "en"
summary: "Agent-lightning v0.3.0 is a major release that introduces several new features and bug fixes. The release is a collaborative effort between Agent-lightning core teams and the community. Thanks to all the contributors…"
---

# agent-lightning v0.3.0

Agent-lightning v0.3.0 is a major release that introduces several new features and bug fixes. The release is a collaborative effort between Agent-lightning core teams and the community. Thanks to all the contributors who made this release possible.

## Highlights

* **Tinker integration**: Support Tinker as an alternative backend for Reinforcement Learning (#226 #245 #264 #269 #327). See [example code](https://github.com/microsoft/agent-lightning/tree/v0.3.0/examples/tinker), [blog 1](https://medium.com/@yugez/tuning-any-ai-agent-with-tinker-agent-lightning-part-1-1d8c9a397f0e) and [blog 2](https://medium.com/@yugez/tuning-any-ai-agent-with-tinker-agent-lightning-part-2-332c5437f0dc).
* **Azure OpenAI integration**: Support Azure OpenAI as a backend for LLM inference and supervised fine-tuning (#256 #327). [Example code](https://github.com/microsoft/agent-lightning/tree/v0.3.0/examples/azure).
* **MongoDB-based Lightning Store** is added as an alternative backend for Lightning Store (#323). [Documentation](https://microsoft.github.io/agent-lightning/0.3.0/tutorials/parallelize/#parallelizing-lightningstore).
* **Contrib package**: Add contrib package for community projects. Search-R1 is integrated as a contrib recipe. More coming. (#239 #396 #410 #412 #417).
* **RESTful API**: Stabilize and document RESTful API for Lightning Store (#241 #275). [Documentation](https://microsoft.github.io/agent-lightning/0.3.0/reference/restful/).
* **OTel Semantic Conventions** that are specifically designed for Agent-optimization areas (#340). [Documentation](http://microsoft.github.io/agent-lightning/0.3.0/reference/semconv/).
* *[Preview]* **Agent-lightning Dashboard** is now available (#288 #289 #291 #296 #371 #375). It's the official web application for inspecting and debugging Agent-lightning experiments. See details [here](https://microsoft.github.io/agent-lightning/0.3.0/tutorials/debug/).
* *[Preview]* **Multi-modality example** featuring VERL and a LangGraph agent on ChartQA dataset (#379). [Example code](https://github.com/microsoft/agent-lightning/tree/v0.3.0/examples/chartqa).
* *[Preview]* Integrate **Claude Code** as a LitAgent and support training on SWE-Bench (#332 #346 #348). [Example code](https://github.com/microsoft/agent-lightning/tree/v0.3.0/examples/claude_code).
* *[Preview]* **Weave tracer** as a substitute for AgentOps tracer (#277 #411 #420 #423). [Documentation](https://microsoft.github.io/agent-lightning/0.3.0/tutorials/traces/#weave-tracer-experimental).
* *[Preview]* **Trajectory Level Aggregation** for more efficient training with VERL. See [blog](https://agent-lightning.github.io/posts/trajectory_level_aggregation/) and [documentation](https://microsoft.github.io/agent-lightning/0.3.0/algorithm-zoo/verl/).

<img width="1817" height="917" alt="image" src="https://github.com/user-attachments/assets/96c23fba-4999-456f-922c-d7fc40919094" />

## Store Benchmark

In this release, the Lightning Store core was redesigned for significantly greater efficiency and scalability (#315 #318 #328 #342 #344 #356 #380 #388 #418 #421). The benchmark results below demonstrate the impact: with large numbers of concurrent runners, v0.3.0 delivers up to a 15x increase in throughput compared to v0.2.2.

| Throughput (\#rollout/sec) | v0.2.2 | v0.3.0 (in-memory) | v0.3.0 (Mongo) |
| :---- | :---- | :---- | :---- |
| Minimal (batch, #runner=32, #turns=6) | 8.73 | 9.06 | 8.71 |
| Medium (batch, #runners=100, #turns=10) | 12.03 | 23.26 | 32.79 |
| Mid-high (batch, #runners=300, #turns=6) | 10.61 | 24.42 | 40.24 |
| Large (batch, #runners=1000, #turns=3) | 3.36 | 14.60 | 50.05 |
| Long queue (queue, #runners=256, #turns=4) | 7.42 | 30.86 | 57.01 |
| Heavy trace (queue, #runners=512, #turns=20) | 5.93 | 13.28 | 29.41 |

*Notes:*

1. Benchmarks were run on a single Standard_D32as_v4 Azure VM (Large and heavy trace tests used Standard_D64ads_v5), executed via GitHub Actions.
2. Two algorithm patterns are evaluated: the batch pattern submits a group of rollouts and waits for all to finish before starting the next group, while the queue pattern maintains a set number of in-flight rollouts, submitting new ones as soon as capacity frees up. Configuration details are available [here](https://github.com/microsoft/agent-lightning/blob/v0.3.0/.github/workflows/benchmark.yml).
3. The number of turns is directly proportional to the number of spans each rollout generates.

## Maintenance and Bug fixes

### Core (Store, Interfaces, etc.)

* Add Trainer port option for client-server strategies (#198)
* Fix store port conflict handling (#227)
* Unified PythonServerLauncher (#286 #292 #303)
* Make health timeout configurable (#305)
* Refactor logging (#306)
* Support OTLP in LightningStore (#313)
* Centralized metrics helper (#368)
* Fix redundant cancel tracebacks on Ctrl+C (#370)

### Proxy, Adapters and Algorithms

* Fix training metrics before and after processing in VERL (#145)
* Forward streaming requests for Anthropic and OpenAI APIs (as non-streaming requests) (#299)
* Check traces with reward for VERL (#317)
* Patch LiteLLM root span (#341)
* Handle ref_in_actor flag for LoRA compatibility (#386)
* Support `with_llm_proxy` and `with_store` in algorithms (#398)
* Support image URL export in TracerTraceToTriplets (#400)
* Fix match_rewards assign_to elements in TraceTree (#403)
* Support customizing trainer and daemon in VERL (#407)

### Runners, Tracers and Agents

* Refactor tracer initialization (#321)
* Fix OpenAI Agents 0.6 compatibility (#322)
* `emit_operation`, `emit_annotation`, tags and links (#359)
* Sunset HTTP tracer (#402)

### Examples

* Fix typos in train-first-agent.md (#263)
* Fix room_selector example which always runs the first task (#270)
* Fix typo in SQL agent example (#285)
* Add the README and script files for training SQL agent on NPU (#272)
* Examples Catalog and Refine Contribution Guide (#331)
* Upgrade LangChain to 1.x (#364)
* Update RAG example to Agent-lightning v0.2.x (#349)

### Miscellaneous

* DeepWiki Badge (#263)
* Add AGENTS.md (#374)

## New Contributors

Warm welcome to our first-time contributors: @cptnm3, @TerryChan, @genji970, @zxgx, @xiaochulaoban, @lspinheiro, @Kwanghoon-Choi, @Vasuk12, @totoluo, @jinghuan-Chen 🎉

**Full Changelog**: https://github.com/microsoft/agent-lightning/compare/v0.2.0...v0.3.0

---

> **Source** [microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) · `v0.3.0` · 2025-12-24 · [upstream release](https://github.com/microsoft/agent-lightning/releases/tag/v0.3.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
