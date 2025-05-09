# 概述

[https://docs.spring.io/spring-ai/reference/index.html](https://docs.spring.io/spring-ai/reference/index.html)

| **类别**       | **词条**                                                                                     | **详细说明**                                  |
|--------------|--------------------------------------------------------------------------------------------|-------------------------------------------|
| **项目名称**     | Spring AI                                                                                  | Spring AI项目旨在简化集成人工智能功能的应用程序开发，避免不必要的复杂性。 |
| **相关项目/库**   | LangChain、LlamaIndex                                                                       | 灵感来源于这些Python项目，但Spring AI并非直接移植。         |
| **核心概念**     | 生成式AI应用（Generative AI）                                                                     | 能够生成新内容（如文本、图像）的AI应用，未来将支持多种编程语言。         |
|              | 抽象（Abstractions）                                                                           | 提供开发AI应用的基础接口，允许通过不同实现轻松替换组件。             |
| **模型提供商**    | OpenAI、Microsoft、Amazon、Google、Huggingface                                                 | 支持的主流AI模型提供商，涵盖聊天和文生图等功能。                 |
| **模型类型**     | Chat                                                                                       | 面向对话交互的AI模型类型。                            |
|              | Text to Image                                                                              | 文本生成图像的AI模型类型，未来将支持更多类型。                  |
| **向量数据库提供商** | Azure Vector Search、Chroma、Milvus、Neo4j、PostgreSQL/PGVector、PineCone、Qdrant、Redis、Weaviate | 支持的主流向量数据库，用于高效存储和检索向量化数据。                |
| **功能特性**     | 便携API（Portable API）                                                                        | 允许在不同AI模型和向量数据库提供商之间切换，减少代码依赖。            |
|              | 同步API与流式API                                                                                | 支持同步调用和流式响应（如实时生成文本）。                     |
|              | 模型特定功能访问                                                                                   | 允许直接调用特定模型的底层功能。                          |
|              | POJO映射                                                                                     | 将AI模型输出映射到普通Java对象（POJO），简化数据处理。          |
|              | 函数调用（Function Calling）                                                                     | 支持通过API调用预定义函数，扩展模型能力。                    |
|              | Spring Boot自动配置与启动器                                                                        | 为AI模型和向量数据库提供Spring Boot快速集成支持。           |
|              | ETL框架                                                                                      | 用于数据工程的ETL（提取、转换、加载）工具，支持文档预处理和向量化存储。     |
|              | 元数据过滤API                                                                                   | 提供类似SQL的元数据过滤接口，用于向量数据库的便携化查询。            |
| **用例**       | 文档问答（Q&A over docs）                                                                        | 基于自定义文档的问答系统，通过向量搜索和AI模型实现。               |
|              | 文档聊天（Chat with docs）                                                                       | 允许用户与文档进行对话交互的应用场景。                       |
| **开发支持**     | 组件互换性                                                                                      | 通过抽象接口和实现分离，允许以最小代码改动更换组件（如切换AI模型或数据库）。   |

### 说明：

- **覆盖范围**：表格涵盖项目目标、核心技术、支持的外部服务、功能特性及典型用例，排除商标声明等无关内容。
- **分类逻辑**：
    - **核心概念**：包括项目设计理念（如抽象、生成式AI）和关键技术（如POJO映射）。
    - **功能特性**：细化具体技术能力（如便携API、ETL框架），强调开发者可直接使用的功能。
    - **提供商分类**：区分AI模型和向量数据库，便于理解生态兼容性。
    - **用例**：提供典型场景帮助理解项目应用价值。

# AI概念

[https://docs.spring.io/spring-ai/reference/concepts.html](https://docs.spring.io/spring-ai/reference/concepts.html)

| **类别**      | **词条**                               | **详细说明**                                                                                               |
|-------------|--------------------------------------|--------------------------------------------------------------------------------------------------------|
| **AI模型**    | AI Models                            | 人工智能模型是通过学习大量数据集中的模式，处理并生成信息（如文本、图像等）的算法。例如，GPT-4、Gemini、Llama等。                                       |
|             | Embeddings                           | 将文本转换为数值向量（数组），使模型能处理语言数据。常用于语义搜索、分类和RAG（检索增强生成）等任务。                                                   |
|             | Tokens                               | 模型处理文本的基本单元，输入时单词被转换为Token，输出时再转换回文本。计费基于Token数量，且模型有Token限制（如上下文窗口）。                                  |
| **提示与交互**   | Prompts                              | 用户与模型交互的语言输入，用于引导模型生成特定输出。在ChatGPT等模型中，提示包含角色（如系统角色、用户角色）和上下文。                                         |
|             | Prompt Engineering                   | 设计和优化提示的学科，通过调整语言风格和结构提升输出质量。例如，“深呼吸并逐步思考”可能显著改善结果。                                                    |
|             | Prompt Templates                     | 使用模板引擎（如StringTemplate）动态生成提示，支持占位符替换。类似于Spring MVC中的视图层，通过数据模型填充内容。                                   |
| **数据处理与流程** | Output Parsing                       | 将模型输出的字符串解析为结构化数据（如JSON）。需结合提示工程和工具（如OpenAI Functions）确保格式正确。                                          |
|             | Retrieval Augmented Generation (RAG) | 通过向量数据库存储文档的嵌入表示，结合用户查询检索相关数据并注入到提示中，以增强模型对未训练知识的处理能力。                                                 |
|             | Document Processing                  | 包括文档读取（DocumentReader）、分割（DocumentSplitter）、转换（DocumentTransformer）和存储（DocumentWriter），用于预处理数据以适应模型限制。 |
| **模型扩展与集成** | Function Calling                     | 允许模型调用外部系统API的函数，扩展其能力（如实时数据查询）。Spring AI简化了函数注册和调用流程。                                                 |
|             | Fine-Tuning                          | 传统机器学习方法，通过调整模型内部权重适配特定任务。但对大型模型（如GPT）成本高且复杂。                                                          |
|             | Prompt Stuffing                      | 将外部数据注入提示中，受限于Token限制，需结合RAG技术筛选关键信息。                                                                  |
| **评估与优化**   | Context Window                       | 模型单次处理的最大Token数（如GPT-4支持8K/16K/32K）。超出部分无法处理，需分块处理（如分割长文本）。                                            |
|             | Evaluating AI Responses              | 通过模型自身或附加数据评估输出的相关性、准确性和逻辑性。例如，检查回答是否符合用户意图及文档内容。                                                      |
| **数学与底层概念** | Semantic Space                       | 高维向量空间，文本的嵌入表示在其中反映语义相似性。相似内容在空间中距离更近，支持分类、搜索等任务。                                                      |
|             | Vector Database                      | 存储嵌入向量的数据库，用于高效检索与用户查询语义相近的文档片段（如RAG场景）。                                                               |

---

### **总结**

本文系统梳理了Spring
AI的核心概念，涵盖模型类型（如GPT、Embeddings）、交互机制（提示工程、模板）、数据处理流程（RAG、文档分割）、扩展能力（函数调用）及评估方法。AI模型通过预训练技术（如GPT的“P”）成为通用开发工具，无需复杂机器学习背景即可使用。关键挑战包括Token限制（上下文窗口）、外部数据集成（通过RAG和函数调用）以及输出解析。Spring
AI通过模板引擎、向量数据库和简化的函数调用机制，帮助开发者高效处理长文本、动态生成提示并集成实时数据。最终，这些技术共同支持构建可扩展、响应精准的AI应用，尤其适用于需结合私有数据的场景（如企业知识库）。

# 入门Spring AI

[https://docs.spring.io/spring-ai/reference/getting-started.html](https://docs.spring.io/spring-ai/reference/getting-started.html)

| **类别**         | **词条**                | **详细说明**                                                                   |
|----------------|-----------------------|----------------------------------------------------------------------------|
| **依赖管理**       | Spring Milestone 仓库   | 用于发布 Spring 项目的稳定版本（非快照），需在构建工具中配置仓库地址 `https://repo.spring.io/milestone`。 |
|                | Spring Snapshots 仓库   | 用于发布 Spring 项目的开发版本（快照），需配置仓库地址 `https://repo.spring.io/snapshot`。         |
|                | Maven                 | Java 项目构建工具，通过 `<repository>` 标签配置仓库依赖。                                    |
|                | Gradle                | 另一种 Java 项目构建工具，通过 `repositories` 代码块配置仓库依赖。                               |
| **Spring CLI** | `spring boot new`     | 通过命令行快速创建新 Spring 项目，支持模板（如 `ai` 或 `ai-azure`）。                            |
|                | `spring boot add`     | 向现有项目添加模块（如 `ai` 或 `ai-azure`）。                                            |
|                | `project-catalog add` | 添加项目目录（如 `ai-azure`），扩展可用的项目模板列表。                                          |
|                | `ai` 项目类型             | 针对 OpenAI 的 Spring AI 基础项目模板。                                              |
|                | `ai-azure` 项目类型       | 针对 Azure OpenAI 的 Spring AI 项目模板，支持更多扩展功能。                                 |
| **AI 模型模块**    | Chat Models           | Spring AI 中用于对话交互的模型实现，例如与 Bedrock 等平台的集成。                                 |
|                | Embedding Models      | Spring AI 中用于生成文本嵌入向量的模型模块。                                                |

### 总结段落

本文档主要介绍了 Spring AI 的快速入门指南，涵盖依赖管理配置、Spring CLI 工具的使用，以及 AI 模型模块的核心概念。

1. **依赖管理**部分详细说明了如何为 Maven 和 Gradle 配置 Spring Milestone/Snapshots 仓库，以获取 Spring AI 的稳定版或开发版依赖。
2. **Spring CLI** 工具提供类似 `create-react-app` 的快速开发体验，支持通过命令（如 `spring boot new` 和 `spring boot add`
   ）创建或扩展项目，并针对 OpenAI 和 Azure OpenAI 提供专用模板。
3. **AI 模型模块**包括对话模型（Chat Models）和嵌入模型（Embedding Models），用于实现与 AI 服务的基础交互。  
   整体内容旨在帮助开发者快速集成 Spring AI 功能，并灵活适配不同云平台（如 Azure）的 AI 服务。

# Chat Client API 聊天客户端 API

| **类别**       | **词条**                       | **详细说明**                                                                                  |
|--------------|------------------------------|-------------------------------------------------------------------------------------------|
| **API核心概念**  | Chat Completion API          | 提供AI驱动的聊天完成功能，允许开发者集成自然语言生成能力，基于预训练模型（如GPT）生成类人对话响应。                                      |
|              | 预训练语言模型                      | 如GPT，用于理解输入并生成自然语言响应，模型通过大量数据训练获得语言模式。                                                    |
| **核心接口与类**   | ChatClient                   | 核心接口，继承自`ModelClient<Prompt, ChatResponse>`，提供`call`方法处理字符串或`Prompt`请求，返回`ChatResponse`。  |
|              | StreamingChatClient          | 扩展`StreamingModelClient`的接口，使用反应式`Flux`流式传输响应，适用于实时对话场景。                                  |
|              | Prompt                       | 封装输入的`ModelRequest`类，包含消息列表（`List<Message>`）和可选模型配置（`ChatOptions`），用于构建请求。                |
|              | Message                      | 接口，定义消息内容、属性（`Map<String, Object>`）和类型（`MessageType`），如系统、用户、助手等角色。                       |
|              | ChatOptions                  | 继承自`ModelOptions`的配置接口，定义通用选项（如`temperature`、`topP`），允许模型特定扩展（如OpenAI的`presencePenalty`）。 |
|              | ChatResponse                 | 封装模型响应的类，包含`Generation`列表和元数据（`ChatResponseMetadata`），支持多结果返回。                            |
|              | Generation                   | 继承自`ModelResult<AssistantMessage>`的类，表示单条生成结果及其元数据（如使用统计）。                                |
| **消息处理**     | MessageType                  | 消息角色分类（如系统、用户、助手），用于区分对话中不同参与者的作用。                                                        |
|              | UserMessage/AssistantMessage | `Message`的具体实现，分别表示用户输入和助手生成的响应。                                                          |
| **配置与扩展**    | ModelOptions                 | 模型配置基类，`ChatOptions`继承并扩展其功能，支持运行时覆盖默认配置。                                                 |
|              | 模型特定选项                       | 如OpenAI的`frequencyPenalty`、`bestOf`等，允许开发者通过`Prompt`传递特定模型的配置。                            |
| **响应处理与元数据** | ChatResponseMetadata         | 包含模型响应的全局元数据（如请求耗时、令牌使用量）。                                                                |
|              | ChatGenerationMetadata       | 单条生成结果的元数据（如生成原因或置信度），附加到`Generation`中。                                                   |
| **设计理念**     | 模块化与可互换性                     | Spring哲学，通过统一接口（如`ChatClient`）实现不同模型的无缝切换，减少代码改动。                                         |
|              | 简化API交互                      | 通过`Prompt`和`ChatResponse`封装请求与响应，隐藏底层复杂性（如序列化、解析）。                                        |
| **技术实现**     | 反应式Flux API                  | `StreamingChatClient`使用`Flux`实现流式响应，支持异步和非阻塞处理。                                           |

---

### 总结

Spring AI Chat Completion API 是一个以模块化和可互换性为核心的框架，旨在简化AI模型（如GPT）的集成。其核心接口`ChatClient`和
`StreamingChatClient`分别支持同步和流式交互，通过`Prompt`封装输入（包含多角色`Message`列表及配置），并返回结构化的
`ChatResponse`（包含多`Generation`结果及元数据）。配置方面，`ChatOptions`提供通用参数（如`temperature`
），同时允许模型特定扩展，兼顾灵活性与统一性。设计上，该API抽象了请求准备与响应解析的复杂性，通过`MessageType`区分对话角色，利用
`ModelRequest`和`ModelResponse`标准化输入输出，使开发者能够快速切换不同模型（如OpenAI）且保持代码简洁。整体架构体现了Spring的模块化理念，结合反应式编程（
`Flux`）和分层元数据管理，为构建高效、可维护的AI应用提供了坚实基础。

# Advisors API 顾问

[https://docs.spring.io/spring-ai/reference/api/advisors.html](https://docs.spring.io/spring-ai/reference/api/advisors.html)

| **类别**      | **词条**              | **详细说明**                                                                              |
|-------------|---------------------|---------------------------------------------------------------------------------------|
| **核心组件**    | Advisors API        | Spring框架中用于拦截、修改和增强AI交互的API，支持非流式（CallAroundAdvisor）和流式（StreamAroundAdvisor）处理模式。     |
|             | CallAroundAdvisor   | 同步处理接口，通过`aroundCall()`方法拦截请求和响应，需调用`nextAroundCall()`传递处理链。                          |
|             | StreamAroundAdvisor | 流式处理接口，通过`aroundStream()`方法处理`Flux`流数据，需调用`nextAroundStream()`传递处理链。                  |
|             | AdvisedRequest      | 封装未处理的用户请求（Prompt），包含用户输入、参数及共享的上下文（AdvisorContext），支持动态修改。                           |
|             | AdvisedResponse     | 封装AI模型返回的响应（ChatResponse），包含处理后的结果及共享上下文，支持拦截和修改。                                     |
|             | AdvisorContext      | 线程安全的共享上下文，用于在Advisor链中传递状态，通过`updateContext()`方法更新。                                  |
| **执行顺序与控制** | getOrder()          | 决定Advisor在链中的执行顺序，值越小优先级越高，遵循Spring Ordered接口规范。                                      |
|             | Advisor Chain       | 由框架自动创建的Advisor执行链，按顺序调用Advisor，最后一个节点调用AI模型。                                         |
|             | 栈式执行                | Advisor链按栈结构执行：请求时从高优先级到低优先级，响应时反向处理。                                                 |
| **接口与方法**   | aroundCall()        | 同步处理的核心方法，接收AdvisedRequest并返回AdvisedResponse。                                         |
|             | aroundStream()      | 流式处理的核心方法，返回`Flux<AdvisedResponse>`，支持响应式编程。                                          |
|             | getName()           | 返回Advisor唯一名称，用于标识和调试。                                                                |
| **功能模式**    | 拦截（Intercept）       | 在请求到达AI模型前或响应返回前插入处理逻辑。                                                               |
|             | 修改（Modify）          | 动态调整请求内容（如Prompt增强）或响应结果（如过滤敏感信息）。                                                    |
|             | 阻断（Block）           | 某些Advisor可中断处理链，直接返回自定义响应（如安全检查失败时）。                                                  |
| **实现案例**    | Logging Advisor     | 记录请求和响应的日志，支持流式与非流式场景，使用`MessageAggregator`聚合流数据。                                     |
|             | Re-Reading Advisor  | 实现Re2技术，通过修改用户输入（追加重复指令）提升模型推理能力。                                                     |
| **流式处理**    | Flux                | 响应式编程中的流式数据容器，用于处理连续生成的AI响应。                                                          |
|             | MessageAggregator   | 工具类，将流式响应聚合成完整响应，适用于日志记录等场景。                                                          |
| **版本变更**    | 1.0 M2 → M3变更       | 废弃RequestAdvisor/ResponseAdvisor，合并为CallAroundAdvisor/StreamAroundAdvisor；上下文改为不可变对象。 |
|             | 上下文映射（Context Map）  | M2中为独立可变对象，M3中整合到AdvisedRequest/Response并通过`updateContext()`更新。                       |
| **设计原则**    | 模块化                 | 建议Advisor职责单一（如日志、安全、RAG），通过组合实现复杂功能。                                                 |
|             | 上下文共享               | 利用AdvisorContext在多个Advisor间传递数据（如对话ID、临时计算结果）。                                        |

---

### **总结**

Spring AI Advisors API 提供了一套模块化的拦截增强机制，通过**核心组件**（如`CallAroundAdvisor`、`AdvisedRequest`
）支持同步/流式处理，其**执行顺序**由`getOrder()`控制，形成栈式调用链。开发者可通过实现接口方法（`aroundCall()`、
`aroundStream()`）实现请求/响应的拦截、修改或阻断，典型应用包括日志记录、输入增强（如Re2技术）及安全控制。**流式处理**依赖
`Flux`和响应式编程，需注意数据聚合与状态管理。**版本演进**中，接口从分离的Request/ResponseAdvisor合并为统一的Advisor，上下文改为不可变对象以提升线程安全性。
**最佳实践**强调职责单一、上下文共享及顺序规划，确保功能可维护性和扩展性。

# Spring AI API

[https://docs.spring.io/spring-ai/reference/api/index.html](https://docs.spring.io/spring-ai/reference/api/index.html)

| **类别**    | **词条**                               | **详细说明**                                                           |
|-----------|--------------------------------------|--------------------------------------------------------------------|
| **核心功能**  | AI Model API                         | 提供跨AI提供商的统一接口，支持聊天、图像生成、音频转录、文本转语音、嵌入模型等，支持同步和流式API。               |
|           | Vector Store API                     | 跨向量数据库的便携API，支持元数据过滤和14种向量数据库（如Redis、Pinecone、Milvus等）。            |
|           | Tool Calling API                     | 允许AI模型通过`@Tool`注解或`java.util.Function`调用用户自定义服务。                   |
| **模型类型**  | Chat Models                          | 支持OpenAI、Azure、Mistral等提供商的对话模型，包含函数调用（部分已弃用）。                     |
|           | Embedding Models                     | 支持文本嵌入、多模态嵌入，集成Amazon Bedrock、Google VertexAI、OpenAI等。             |
|           | Image Models                         | 支持图像生成（如Stability、ZhiPuAI）、多模态生成（如Azure OpenAI）。                   |
|           | Audio Models                         | 包含语音转录（Transcription）和文本转语音（TTS），支持Azure OpenAI、OpenAI等。           |
|           | Moderation Models                    | 支持OpenAI的内容审核模型。                                                   |
| **集成与扩展** | AI Provider 支持                       | 涵盖OpenAI、Azure、Amazon Bedrock、Google VertexAI、Hugging Face等20+服务商。 |
|           | Vector Database 支持                   | 支持14种向量数据库，包括Chroma、Elasticsearch、Redis、Pinecone等。                 |
| **数据处理**  | ETL Pipeline                         | 提供数据加载框架，用于向量数据库的数据工程，支持检索增强生成（RAG）模式。                             |
|           | Retrieval Augmented Generation (RAG) | 通过结合用户数据与AI模型生成响应，提升结果相关性。                                         |
| **开发工具**  | Auto Configuration                   | Spring Boot自动配置和Starter，简化AI模型和向量数据库的集成。                           |
|           | Model Context Protocol (MCP)         | 提供客户端/服务端工具，支持模型上下文管理。                                             |
| **应用场景**  | Structured Output                    | 支持AI模型输出结构化数据（如JSON）。                                              |
|           | Chat Memory                          | 管理对话历史状态，用于持续上下文交互。                                                |
|           | Observability                        | 提供模型调用监控和跟踪功能。                                                     |
|           | Multimodality                        | 支持多模态输入（文本、图像、音频）的联合处理。                                            |
| **API特性** | Prompt Engineering                   | 提供提示词模板（Prompts）和模式（Patterns），优化模型输入。                              |
|           | Function Calling (Deprecated)        | 旧版函数调用接口（部分模型已弃用）。                                                 |
| **工具与规范** | Service Connections                  | 支持Docker Compose、Testcontainers、云绑定等部署方式。                          |
|           | Contribution Guidelines              | 提供开源贡献规范和升级说明。                                                     |

---

### 总结

Spring AI API 是一个综合性框架，核心围绕**跨AI提供商的统一接口**（如Chat、Embedding、Image模型）和**向量数据库集成**
（支持14种数据库）。其特色包括**工具调用API**（通过注解或函数调用服务）、**数据工程支持**（ETL管道和RAG模式）、**Spring Boot自动配置
**，以及**多模态处理能力**（文本、图像、音频）。  
该框架覆盖了从模型调用、数据管理到部署的全流程，强调可移植性（如Model Context Protocol）、开发便捷性（Auto
Configuration）和扩展性（支持20+AI服务商），适用于复杂AI应用场景（如结构化输出、对话记忆管理）。

# Chat Model API  聊天模型 API

| **类别**       | **词条**                   | **详细说明**                                                                   |
|--------------|--------------------------|----------------------------------------------------------------------------|
| **核心接口**     | `ChatModel`              | 继承自`Model<Prompt, ChatResponse>`，提供`call`方法处理聊天请求，支持不同模型的切换。               |
|              | `StreamingChatModel`     | 继承自`StreamingModel<Prompt, ChatResponse>`，使用响应式`Flux`流式传输结果。               |
| **请求/响应类**   | `Prompt`                 | 封装输入消息列表（`List<Message>`）和可选的模型配置（`ChatOptions`），作为请求传递给模型。                |
|              | `ChatResponse`           | 包含模型生成的响应结果列表（`List<Generation>`）和元数据（`ChatResponseMetadata`）。             |
|              | `Generation`             | 继承自`ModelResult<AssistantMessage>`，表示单次生成的输出消息及其元数据（如置信度）。                 |
| **消息结构**     | `Message`                | 接口，定义消息内容（`content`）、媒体附件（`Media`列表）和角色类型（`MessageType`）。                  |
|              | `MessageType`            | 消息角色分类（如`system`、`user`、`assistant`），用于区分对话中的不同参与者。                        |
|              | `UserMessage`            | `Message`的实现类，代表用户输入的消息。                                                   |
|              | `AssistantMessage`       | `Message`的实现类，代表模型生成的响应消息。                                                 |
| **配置选项**     | `ChatOptions`            | 继承自`ModelOptions`，定义模型参数（如`temperature`、`topP`、`topK`），可全局或通过`Prompt`动态覆盖。 |
|              | `ModelOptions`           | 基础接口，提供模型配置的扩展能力。                                                          |
| **元数据**      | `ChatResponseMetadata`   | 包含模型响应的全局元数据（如总耗时、模型版本）。                                                   |
|              | `ChatGenerationMetadata` | 包含单次生成结果的元数据（如生成时间、token使用量）。                                              |
| **设计哲学**     | 模块化与可互换性                 | Spring的核心设计原则，通过统一接口（如`ChatModel`）实现不同模型的快速切换。                             |
| **功能方法**     | `call(String)`           | `ChatModel`的简化方法，直接接受字符串输入并返回响应文本。                                         |
|              | `call(Prompt)`           | `ChatModel`的核心方法，接受结构化的`Prompt`输入并返回`ChatResponse`。                        |
|              | `stream(Prompt)`         | `StreamingChatModel`的方法，以流式方式返回`Flux<ChatResponse>`。                       |
| **模型实现与扩展**  | 预训练语言模型（如GPT）            | 支持集成多种模型（如OpenAI），通过`ChatModel`接口统一调用。                                     |
|              | 模型特定选项                   | 允许开发者使用特定模型的参数（如OpenAI的`presencePenalty`），通过`Prompt`或全局配置覆盖。               |
| **基础接口与工具类** | `Node<T>`                | 泛型接口，定义内容（`content`）和元数据（`metadata`键值对），`Message`继承自`Node<String>`。        |
|              | `Media`                  | 表示消息中附加的多媒体内容（如图片、文件）。                                                     |

---

### **总结**

Spring AI Chat Model API 提供了一套标准化的接口（如`ChatModel`和`StreamingChatModel`）与工具类（如`Prompt`、`Message`
），用于集成多种预训练语言模型（如GPT）的对话能力。其核心设计遵循模块化和可互换性原则，开发者可通过统一的`call`或`stream`
方法处理请求，并通过`ChatOptions`灵活配置模型参数。请求通过`Prompt`封装多角色消息（如`system`、`user`），响应则由
`ChatResponse`和`Generation`
结构化的元数据（如生成耗时、token统计）支持进一步分析。此API通过抽象化模型差异（如OpenAI的特定参数）和简化请求/响应处理流程，显著降低了AI能力集成的复杂性，同时保留了对底层模型的细粒度控制。