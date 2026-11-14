---
title: "spring-ai-alibaba v1.1.0.0-M5"
project: "spring-ai-alibaba"
repo: "alibaba/spring-ai-alibaba"
tag: "v1.1.0.0-M5"
published: "2025-11-17"
type: "pre"
lang: "en"
summary: "Spring AI Alibaba 1.1.x provides the core features for building enterprise-level agent applications, built upon the practical experience learned from building agent with 1.0.x in Alibaba and numerous enterprises."
---

# spring-ai-alibaba v1.1.0.0-M5

# Spring AI Alibaba 1.1.0.0-M5 Release Notes
Spring AI Alibaba 1.1.x provides the core features for building enterprise-level agent applications, built upon the practical experience learned from building agent with 1.0.x in Alibaba and numerous enterprises. 1.1.x  offers various agent development modes such as Agentic, Multi-agent, and Workflow orchestration, helping developers construct enterprise-grade applications.

The [official website and documentation ](https://java2ai.com/)have also been upgraded following 1.1.x.

## Agent Framework

### ReactAgent
+ ReAct paradigm (Reasoning + Acting) implementation with reasoning-action loop iteration
+ Tool calling capabilities with FunctionToolCallback and ToolContext for state access
+ Streaming output support with real-time execution progress and token streaming
+ Structured output with outputSchema and outputType for format definition

### Context Engineering
+ Model context: Dynamic system prompts, message history management, tool selection, model configuration
+ Tool context: Access state, store, and runtime configuration through ToolContext
+ Lifecycle context: Hook mechanism (before/after agent/model) for context injection and modification

### Memory Management
+ Short-term memory: Session-level persistence based on Checkpointer (MemorySaver, RedisSaver, etc.)
+ Long-term memory: MemoryStore supports cross-session data storage with namespace and key-value management
+ Message management: Strategies for message trimming, deletion, and summarization to address context window limitations

### Human-in-the-Loop
+ HumanInTheLoopHook supports manual approval workflow for tool calls
+ Three decision types: approve, edit, and reject
+ Interrupt recovery mechanism based on Checkpointer

### Hooks & Interceptors
+ Built-in Hooks: SummarizationHook, ModelCallLimitHook, PIIDetectionHook, HumanInTheLoopHook
+ Built-in Interceptors: ToolRetryInterceptor, TodoListInterceptor, ToolSelectionInterceptor, ContextEditingInterceptor
+ Custom extensions: ModelHook, AgentHook, ModelInterceptor, ToolInterceptor

## Multi-agent Support

### Flow Agents
+ SequentialAgent: Sequential execution of multiple agents with state passing
+ ParallelAgent: Parallel execution of multiple agents with custom merge strategies
+ LlmRoutingAgent: LLM-based intelligent routing for dynamic selection of the most suitable sub-agent
+ FlowAgent abstraction: Support for custom multi-agent collaboration patterns

### Agent as Tool
+ AgentTool: Encapsulates ReactAgent as a tool for other agents to call
+ Input/output control: Supports inputSchema, inputType, outputSchema, outputType
+ Context isolation: Sub-agents execute independently, results returned to the controller agent

### A2A (Agent-to-Agent)
+ A2A protocol support: Enables distributed agent communication
+ Nacos integration: Agent registration and discovery with load balancing support
+ A2aRemoteAgent: Remote agent invocation capability

## Enhanced Graph Engine

### StateGraph
+ Core concepts: State, Node, Edge
+ Custom nodes: Support for NodeAction and NodeActionWithConfig interfaces
+ Conditional routing: addConditionalEdges supports state-based dynamic branching
+ Parallel execution: Supports multi-node parallel execution and result aggregation

### ReactAgent Integration
+ ReactAgent.asNode(): Embeds agent as SubGraph node in workflows
+ Context passing: Controls message history and reasoning content transmission
+ Hybrid orchestration: Mix agent nodes with regular nodes

### Streaming & Performance
+ Streaming response: Real-time streaming output of node execution status and tokens
+ Performance optimization: 15x+ throughput improvement compared to Dify platform (150 RPS vs 10 RPS)

## RAG (Retrieval-Augmented Generation)

+ Two-step RAG: Fixed retrieval-generation pipeline, suitable for FAQ and document bots
+ Agentic RAG: Agent-driven dynamic retrieval with multi-tool access
+ Hybrid RAG: Complete workflow combining query enhancement, retrieval validation, and answer verification
+ Knowledge base construction: Supports document loading, text splitting, and vector store integration

## Upgrade Spring AI to 1.1.0 latest milestone version

+ MCP (Model Context Protocol) upgrade, including authentication, connection retry, streamable, stateless, etc. 
+ Bugfixes and enhancements

## Breaking Changes and Migration Guide
Please check documentation on the official website for breaking changes and how to migrate to 1.0.x.

---

> **Source** [alibaba/spring-ai-alibaba](https://github.com/alibaba/spring-ai-alibaba) · `v1.1.0.0-M5` · 2025-11-17 · [upstream release](https://github.com/alibaba/spring-ai-alibaba/releases/tag/v1.1.0.0-M5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
