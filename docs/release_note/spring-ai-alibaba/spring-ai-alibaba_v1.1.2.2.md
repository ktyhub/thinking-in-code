---
title: "spring-ai-alibaba v1.1.2.2"
project: "spring-ai-alibaba"
repo: "alibaba/spring-ai-alibaba"
tag: "v1.1.2.2"
published: "2026-03-10"
type: "patch"
lang: "en"
summary: "AgentScope Java is an agent-oriented programming framework for building LLM-powered applications."
---

# spring-ai-alibaba v1.1.2.2

## AgentScope Integration

[AgentScope Java](https://github.com/agentscope-ai/agentscope-java) is an agent-oriented programming framework for building LLM-powered applications. 

- **AgentScope** – AgentScopeAgent wraps [AgentScope ReActAgent as a BaseAgent for use in graph workflows](https://github.com/alibaba/spring-ai-alibaba/tree/main/examples/agentscope).

```xml
# Add the following dependency to ochestrate AgentScope using SAA Graph
<dependency>
  <groupId>com.alibaba.cloud.ai</groupId>
  <artifactId>spring-ai-alibaba-starter-agentscope</artifactId>
  <version>1.1.2.2</version>
</dependency>
```

## Multiagent Patterns
- **[Subagent](https://github.com/alibaba/spring-ai-alibaba/tree/main/examples/multiagent-patterns/subagent)** – Main orchestrator delegates tasks to specialized sub-agents (codebase explorer, web researcher, etc.) via Task/TaskOutput tools; supports both Markdown and API-defined sub-agents.
- **[Supervisor](https://github.com/alibaba/spring-ai-alibaba/tree/main/examples/multiagent-patterns/supervisor)** – Central supervisor agent wraps calendar and email agents as tools (AgentTool), invokes them on demand, and synthesizes results.
- **[Skills](https://github.com/alibaba/spring-ai-alibaba/tree/main/examples/multiagent-patterns/skills)** – Single agent uses `read_skill` to load skill content on demand; system prompt shows only skill descriptions for progressive disclosure and smaller context.
- **Routing**
  - **[Routing (simple)](https://github.com/alibaba/spring-ai-alibaba/tree/main/examples/multiagent-patterns/routing)** – LlmRoutingAgent classifies the user query, invokes specialist agents (GitHub, Notion, Slack) in parallel, then synthesizes a single answer.
  - **[Routing (graph)](https://github.com/alibaba/spring-ai-alibaba/tree/main/examples/multiagent-patterns/routing)** – LlmRoutingAgent as a StateGraph node with preprocess/postprocess and an internal merge node for routing and result synthesis.
- **Handoffs** 
  - **[Handoffs (single-agent)](https://github.com/alibaba/spring-ai-alibaba/tree/main/examples/multiagent-patterns/handoffs-singleagent)** – One ReactAgent advances steps via state (e.g. `current_step`); a ModelInterceptor injects step-specific system prompt and tools per turn.
  - **[Handoffs (multi-agent)](https://github.com/alibaba/spring-ai-alibaba/tree/main/examples/multiagent-patterns/handoffs-multiagent)** – Sales and support agents as graph nodes; handoff tools update `active_agent` and conditional edges route between agents.
- **[Workflow](https://github.com/alibaba/spring-ai-alibaba/tree/main/examples/multiagent-patterns/workflow)** – Custom workflow examples: RAG (rewrite → retrieve → prepare → agent) and SQL agent (list_tables → get_schema → run_query) as graph-based flows.

## Multimodal & Voice Agent 

- **[Voice Agent](https://github.com/alibaba/spring-ai-alibaba/tree/main/examples/voice-agent)** – Sandwich architecture (STT → ReactAgent → TTS): WebSocket-based real-time voice with DashScope ASR and CosyVoice TTS, plus text input; agent uses sandwich-order tools and streams events (stt_chunk, agent_chunk, tts_chunk).
- **[Multimodal](https://github.com/alibaba/spring-ai-alibaba/tree/main/examples/multimodal)** – Vision (image in/out) and TTS: DashScope vision models for image understanding and ReactAgent with media input; image generation via tools (Wanx), TTS via DashScopeAudioSpeechModel; ToolMultimodalResult for structured tool responses (url/base64).

---

> **Source** [alibaba/spring-ai-alibaba](https://github.com/alibaba/spring-ai-alibaba) · `v1.1.2.2` · 2026-03-10 · [upstream release](https://github.com/alibaba/spring-ai-alibaba/releases/tag/v1.1.2.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
