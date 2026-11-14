---
title: "spring-ai-alibaba v1.1.2.0"
project: "spring-ai-alibaba"
repo: "alibaba/spring-ai-alibaba"
tag: "v1.1.2.0"
version: "v1.1.2.0"
published: "2026-02-02"
type: "patch"
lang: "en"
summary: "This release upgrades Spring AI to 1.1.2, adds Agent Skills support for Agent Framework, adds parallel sub-agent execution for workflow agents (LlmRouting, Supervisor), extends the graph with parallel conditional edges…"
---

# spring-ai-alibaba v1.1.2.0

# Summary
This release upgrades Spring AI to 1.1.2, adds Agent Skills support for Agent Framework,  adds parallel sub-agent execution for workflow agents (LlmRouting, Supervisor), extends the graph with parallel conditional edges, parallel aggregation strategy (allOf and anyOf), async tool execution, and tool returnDirect. It also includes serialization and MergeStrategy fixes, admin/UI fixes, and documentation updates.

Please see the <a href="https://java2ai.com/docs/versions/" target="_blank">documentation</a> for more details.

## Features
### Agent
+ **<a href="https://java2ai.com/docs/frameworks/agent-framework/tutorials/skills" target="_blank">Agent Skills in ReactAgent</a>** (#3975) — Integrated skills capabilities in ReactAgent, supports skill and too progressive disclosure.
+ **Built-in multi-agent pattern support**  — Supports routing, supervisor, supervisor(agent as tool), handoffs, skills, etc., multi-agent patterns; added parallel execution support for routing and supervisor patterns.
+ **Flow agent hook support** (#3983) — All flow agent (routing, supervisor, loop, sequential, etc) supports customized Hooks.
+ **New Agent API** (#4031) — New `streamMessages` API for simplified message streaming; New overload `invoke`and `call`methods for extra inputs.
+ **Async and parallel tool execution** (#4037)  — Support tool execution in parallelization and asynchronous tool execution .
+ **Tool returnDirect** (#4139) — Support for tool `returnDirect` behavior.
+ **ToolContextHelper** (#4163) — Helper class for metadata access in tool context (fixes #3110).

### Graph
+ **Parallel conditional edges** (#4027) — Conditional edges support parallel execution (fixes #3917).
+ **Aggregation strategy for parallel branches** (#4028) — New aggregation strategy (AllOf and AnyOf) for parallel branches.
+ **Batch addEdge for parallel branches** (#3938) — Convenient batch `addEdge` methods for parallel branch definition in `StateGraph`.
+ **interruptAfter hook** (#3864) — `InterruptableAction` supports `interruptAfter` hook (fixes #3447, #3904).
+ **Async tool execution for AgentToolNode** (#4037 / #3988) — Async tool execution support for `AgentToolNode`.
+ **Full output for streaming node** (#3941) — Streaming nodes now emit full output including `_FINISHED` OutputType.

### Sandbox & Studio
+ **SAA Sandbox** (#4069) — New SAA Sandbox module that provides safe and isolated tool execution. 
+ **Built-in RenderTemplate** (#3935) — Built-in customized `RenderTemplate` implementation.
+ **Studio CORS optional** (#4154) — CORS configuration is now optional in Studio.

---

## Fixes
### DashScopeChatModel
* **Connection reset reported in #3942 (spring-ai-alibaba/spring-ai-extensions#140)** — Set default HTTP client for `DashScopeApi` to better manage connections, avoid Connection Reset issue when the connection is closed by model server. 

### Graph
+ **Serialization** (#3969) — Fixed `class` bug in serialization (fixes #3895, #3931)..
+ **MergeStrategy** (#4129) — Corrected `Optional` handling and enforced strict type checks in `MergeStrategy` (fixes #3909).

### Agent
+ **Instruction** (#3974) — Added instruction handling; fixed CI and tests.
+ **AgentLlmNode model options** (#3986) — Prevent AgentLlmNode from overriding default model options; ensure `internalToolExecution(false)` is set for ChatOptions (fixes #3903).
+ **selectorModel** (#4045) — Added `selectorModel` support (fixes #4026).
+ **systemPrompt** (#4067) — Fixed system prompt handling.
+ **ParallelAgent maxConcurrency** (#4053) — Ensured `maxConcurrency` function of ParallelAgent is implemented.
+ **jumpTo** (#4081) — Ensured `jumpTo` operates correctly.
+ **ModelRequest builder systemMessage** (#4138) — ModelRequest builder no longer loses `systemMessage`.
+ **NacosReactAgentBuilder** (#4093) — Fixed NacosReactAgentBuilder to properly merge local tools.
+ **AgentLlmNode tool callbacks** (#4112) — Corrected tool callbacks filtering logic in AgentLlmNode.

### Admin & UI
+ **Admin package rename** (#3977) — Renamed `@agentscope-ai/flow` to `@spark-ai/flow` (fixes #3949).
+ **Admin startup/compilation** (#4123) — Fixed spring-ai-alibaba-admin startup and compilation issues.
+ **CustomInputsControl** (#4106) — Added `variableList` prop to CustomInputsControl.



## Dependencies
+ **Spring AI version** — Spring Ai upgraded to 1.1.2
+ **Spring AI Alibaba Extensions version**  — Spring Ai Alibaba Extensions upgraded to 1.1.2.1

## Upgrade Notes
+ **Spring AI**: This release uses Spring AI 1.1.2. Align your project's Spring AI version accordingly.
+ **Admin**: If you use the admin flow UI, update the dependency from `@agentscope-ai/flow` to `@spark-ai/flow`.

---

> **Source** [alibaba/spring-ai-alibaba](https://github.com/alibaba/spring-ai-alibaba) · `v1.1.2.0` · 2026-02-02 · [upstream release](https://github.com/alibaba/spring-ai-alibaba/releases/tag/v1.1.2.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
