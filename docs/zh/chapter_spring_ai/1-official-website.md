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

[https://docs.spring.io/spring-ai/reference/api/chatmodel.html](https://docs.spring.io/spring-ai/reference/api/chatmodel.html)

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

# Embeddings Model API 嵌入模型 API

[https://docs.spring.io/spring-ai/reference/api/embeddings.html](https://docs.spring.io/spring-ai/reference/api/embeddings.html)

| **类别**     | **词条**                      | **详细说明**                                                   |
|------------|-----------------------------|------------------------------------------------------------|
| **接口**     | EmbeddingClient             | Spring AI中用于与嵌入模型交互的核心接口，继承自`ModelClient`，提供文本转向量、批量处理等方法。 |
| **接口继承关系** | ModelClient                 | 通用的AI模型交互接口，定义了标准方法，`EmbeddingClient`基于此扩展，实现特定嵌入功能。       |
| **设计目标**   | 可移植性 (Portability)          | 支持快速切换不同嵌入模型（如OpenAI、Azure OpenAI等），代码修改最小化，符合Spring模块化理念。 |
|            | 简单性 (Simplicity)            | 提供`embed()`等简化方法，隐藏底层复杂性，使开发者无需深入算法即可使用嵌入功能。               |
| **核心类**    | EmbeddingRequest            | 继承自`ModelRequest`，封装嵌入请求的输入数据，包含文本列表和可选的配置选项。              |
|            | EmbeddingResponse           | 继承自`ModelResponse`，封装嵌入模型的输出，包含多个`Embedding`对象和元数据。        |
|            | Embedding                   | 表示单个文本的嵌入结果，包含向量数据、索引及元数据，继承自`ModelResult`。                |
| **元数据**    | EmbeddingResponseMetadata   | 嵌入响应中的元数据，可能包含模型版本、请求耗时等信息。                                |
|            | EmbeddingResultMetadata     | 单个嵌入结果的元数据，如置信度或特定模型的附加信息。                                 |
| **方法**     | `embed(String text)`        | 将单个文本转换为数值向量，默认调用批量方法处理。                                   |
|            | `embed(Document document)`  | 处理结构化文档的嵌入，提取文档内容后调用文本嵌入方法。                                |
|            | `embed(List<String> texts)` | 批量处理文本列表，返回多个嵌入向量，底层调用`call()`方法。                          |
|            | `call(EmbeddingRequest)`    | 核心方法，向嵌入模型发送请求并返回`EmbeddingResponse`，支持自定义参数。              |
|            | `dimensions()`              | 返回嵌入向量的维度数（如1536维），通过测试字符串的嵌入结果动态获取。                       |
| **数据类型**   | 数值向量 (Embedding Vector)     | 文本经嵌入模型转换后的浮点数列表，用于表示语义特征，支持下游任务（如分类、聚类）。                  |
| **功能**     | 批量处理 (Batch Processing)     | 支持同时处理多个文本，提升效率，通过`embed(List<String>)`实现。                 |
| **配置选项**   | EmbeddingOptions            | 可选的嵌入请求参数（如模型版本、精度），通过`EmbeddingRequest`传递，默认值为`EMPTY`。    |
| **应用场景**   | 语义分析 (Semantic Analysis)    | 利用嵌入向量分析文本语义相似性，应用于搜索、推荐等场景。                               |
|            | 文本分类 (Text Classification)  | 将文本嵌入后输入分类模型，提升分类效果。                                       |
| **实现方式**   | 低层库/API                     | 不同`EmbeddingClient`实现依赖不同技术（如OpenAI API、本地库Ollie）。         |

---

### 总结

Spring AI的**Embedding API**以**EmbeddingClient**接口为核心，围绕**可移植性**和**简单性**
两大目标设计，支持开发者灵活切换嵌入模型（如OpenAI、Titan）并简化文本到向量的转换流程。其核心类包括封装请求的*
*EmbeddingRequest**、响应结果的**EmbeddingResponse**及单个嵌入对象**Embedding**，通过`embed()`
系列方法实现单文本或批量处理，返回浮点数向量供语义分析、分类等任务使用。接口继承自通用**ModelClient**，扩展了`call()`
方法以支持底层模型调用，并通过`dimensions()`动态获取向量维度。元数据类（如**EmbeddingResponseMetadata**）提供附加信息，而*
*EmbeddingOptions**允许配置请求参数。整体设计体现了Spring的模块化理念，通过标准化接口和分层封装，降低AI集成复杂度，适用于多种应用场景。

# Image Model API

[https://docs.spring.io/spring-ai/reference/api/imageclient.html](https://docs.spring.io/spring-ai/reference/api/imageclient.html)

文章主题为**Spring AI Image Model API的设计与实现**，旨在阐述该API如何通过模块化、可移植的接口和配套类（如`ImagePrompt`、
`ImageResponse`等），简化开发者与图像生成模型的交互。其核心目标是提供统一的抽象层，允许开发者灵活切换不同AI模型的图像处理功能，同时封装请求构造和响应解析的复杂性。

---

### 关键词分类与说明

| 类别        | 词条                        | 详细说明                                                                                           |
|-----------|---------------------------|------------------------------------------------------------------------------------------------|
| **核心接口**  | `ImageModel`              | 函数式接口，继承自`Model<ImagePrompt, ImageResponse>`，定义了调用图像生成模型的统一方法`call()`。开发者通过此接口与不同模型交互。         |
| **输入封装类** | `ImagePrompt`             | 封装图像生成请求的输入数据，包含`ImageMessage`列表和可选的`ImageOptions`，实现`ModelRequest`接口。                         |
|           | `ImageMessage`            | 包含生成图像的文本描述及其权重（`text`和`weight`），用于指导模型生成内容。例如，权重可为正负值以增强或削弱某些特征。                              |
| **配置选项类** | `ImageOptions`            | 接口，继承自`ModelOptions`，定义图像生成的通用参数（如数量`n`、尺寸`width/height`、响应格式`responseFormat`等）。模型实现可扩展此接口。    |
|           | 模型特定选项（如OpenAI）           | 示例：OpenAI的`quality`（生成质量）和`style`（艺术风格）等参数，允许开发者在初始化或运行时覆盖默认配置。                                |
| **输出处理类** | `ImageResponse`           | 封装模型输出，包含`ImageGeneration`列表和元数据（`ImageResponseMetadata`），提供获取单结果或多结果的方法。                      |
|           | `ImageGeneration`         | 继承自`ModelResult<Image>`，表示单个生成结果及其元数据（如生成参数），包含图像数据（`Image`对象）和元数据（`ImageGenerationMetadata`）。 |
|           | `Image`                   | 表示生成的图像数据，可能包含URL或Base64编码的二进制内容，具体由模型实现决定。                                                    |
| **元数据类**  | `ImageResponseMetadata`   | 存储模型响应的全局元数据，如API调用耗时或请求ID。                                                                    |
|           | `ImageGenerationMetadata` | 存储单个生成结果的元数据，如模型使用的生成参数或调试信息。                                                                  |
| **设计理念**  | 模块化与可互换性                  | Spring框架的核心原则，允许开发者通过统一接口切换不同模型，减少代码改动。                                                        |
|           | 抽象化                       | 通过`ImageModel`和配套类隐藏模型差异，开发者仅需关注业务逻辑，无需处理底层请求/响应格式差异。                                          |
| **功能动词**  | 封装（Encapsulation）         | 将请求输入（`ImagePrompt`）、配置（`ImageOptions`）和输出（`ImageResponse`）封装为对象，简化交互流程。                       |
|           | 扩展（Extension）             | 允许模型实现扩展`ImageOptions`接口添加专属参数（如OpenAI的`quality`），兼顾通用性与灵活性。                                   |
|           | 解析（Parsing）               | API内部自动将模型返回的原始数据（如JSON或二进制）解析为结构化的`ImageResponse`对象。                                          |

---

### 总结

Spring AI Image Model API通过分层抽象和标准化类设计，实现了图像生成任务的模块化与可移植性。核心接口`ImageModel`及配套的输入类（
`ImagePrompt`、`ImageMessage`）、配置类（`ImageOptions`）和输出类（`ImageResponse`、`ImageGeneration`）共同构建了一个统一的交互框架。开发者可通过配置
`ImageOptions`定义通用参数，或使用模型专属选项（如OpenAI的`quality`）细化生成效果。API内部封装了请求构造与响应解析的复杂性，同时通过元数据类（
`ImageResponseMetadata`）提供调试和监控支持。这一设计既遵循了Spring的模块化理念，又兼顾了不同模型的扩展需求，最终降低了集成多模型图像生成功能的开发成本。

# 矢量数据库

[https://docs.spring.io/spring-ai/reference/api/vectordbs.html](https://docs.spring.io/spring-ai/reference/api/vectordbs.html)

### 向量数据库及相关概念分类表

| **类别**      | **词条**                      | **详细说明**                                                                           |
|-------------|-----------------------------|------------------------------------------------------------------------------------|
| **核心概念**    | 向量数据库（Vector Databases）     | 一种专门用于AI应用的数据库类型，通过存储向量嵌入（vector embeddings）实现相似性搜索，与传统数据库的精确匹配不同。                 |
|             | 相似性搜索（Similarity Search）    | 向量数据库的核心功能，根据查询向量返回相似向量，通过向量相似度计算（如余弦相似度）确定结果。                                     |
|             | 检索增强生成（RAG）                 | 技术名称，指将用户查询与向量数据库中检索的相似文档结合，作为上下文输入AI模型生成回答。                                       |
|             | Document类                   | 封装数据源（如PDF、Word文档）的内容和元数据（如文件名、标签等）的类，是向量数据库存储的基本单元。                               |
|             | 元数据（Metadata）               | 存储在Document中的键值对信息，用于过滤和增强搜索（如文件来源、时间戳等）。                                          |
| **操作与流程**   | 插入数据                        | 将数据封装为Document对象后存入向量数据库的过程，需通过Embedding模型生成向量嵌入。                                  |
|             | 计算嵌入（Embedding）             | 使用嵌入模型（如BERT、OpenAI的text-embedding-ada-002）将文本转换为数值向量（List<Double>）。               |
|             | 存储与检索                       | 向量数据库的核心操作：存储向量嵌入并支持基于相似度的检索。                                                      |
| **技术术语**    | 向量嵌入（Vector Embeddings）     | 文本的数值表示形式，通过嵌入模型生成，用于相似性比较。                                                        |
|             | K最近邻（KNN）                   | 相似性搜索算法，返回与查询向量最接近的K个结果（即`topK`参数）。                                                |
|             | 相似度阈值（Similarity Threshold） | 0-1之间的数值，过滤低于此阈值的搜索结果（默认0.75），值越高匹配越严格。                                            |
| **参数配置**    | `topK`                      | 控制返回的相似文档数量（如默认4）。                                                                 |
|             | `filterExpression`          | 类SQL的表达式字符串或`Filter.Expression`对象，用于基于元数据过滤结果（如`country == 'UK' && year >= 2020`）。 |
| **API与实现**  | `VectorStore`接口             | Spring AI提供的抽象接口，定义向量数据库的基本操作（如`add`、`delete`、`similaritySearch`）。                 |
|             | `SearchRequest`             | 构建相似性搜索请求的类，支持设置`topK`、阈值和过滤条件。                                                    |
|             | `SimpleVectorStore`         | Spring AI的持久化向量存储实现，适用于教学和小规模场景。                                                   |
| **工具与模型**   | `EmbeddingClient`           | Spring AI中生成向量嵌入的客户端组件，需与AI模型匹配（如OpenAI模型需用`OpenAiEmbeddingClient`）。               |
|             | 嵌入模型（Embedding Models）      | 包括Word2Vec、GLoVE、BERT、OpenAI的text-embedding-ada-002等，用于文本到向量的转换。                   |
| **过滤器与表达式** | `Filter.Expression`         | 通过流畅API（Fluent DSL）构建的过滤条件（如`eq("genre", "drama")`）。                               |
|             | 逻辑运算符                       | 支持`AND`、`OR`、`NOT`及比较运算符（`==`、`>`、`in`等），用于组合复杂过滤条件。                               |
| **数据加载与处理** | `JsonReader`                | Spring AI的工具类，从JSON文件加载数据并解析为Document列表，支持指定字段（如`price`、`name`）。                   |

---

### **总结**

向量数据库是AI应用中处理非结构化数据的核心工具，其核心功能是通过相似性搜索关联用户查询与存储的向量嵌入。Spring AI通过
`VectorStore`接口抽象了向量数据库的操作，支持插入数据、相似性搜索及基于元数据的过滤。关键技术点包括嵌入模型（如OpenAI的text-embedding-ada-002）生成向量、
`SearchRequest`参数（`topK`和阈值）控制搜索粒度，以及通过`Filter.Expression`
实现元数据过滤。典型应用场景是RAG：将检索的文档作为上下文输入AI模型，提升回答准确性。当前实现以`SimpleVectorStore`
为主，未来可能扩展更多数据库支持。开发者需关注嵌入模型的选择、数据加载流程（如`JsonReader`）及过滤表达式的灵活构建。

# Retrieval Augmented Generation （RAG) 检索增强生成

[https://docs.spring.io/spring-ai/reference/api/retrieval-augmented-generation.html](https://docs.spring.io/spring-ai/reference/api/retrieval-augmented-generation.html)

| **类别**         | **词条**                               | **详细说明**                                                            |
|----------------|--------------------------------------|---------------------------------------------------------------------|
| **RAG核心概念**    | Retrieval Augmented Generation (RAG) | 通过检索外部数据增强生成模型的技术，解决大模型的长文本处理、事实准确性和上下文感知的局限性。                      |
| **Advisors工具** | QuestionAnswerAdvisor                | 基于向量数据库的检索增强工具，通过相似性搜索获取相关文档，并将结果附加到用户查询上下文中。                       |
|                | RetrievalAugmentationAdvisor         | 模块化RAG流程的预置实现，支持自定义检索、增强和生成步骤。                                      |
| **RAG模块化架构**   | Pre-Retrieval (预检索阶段)                | 处理用户查询以优化检索结果的阶段，包括查询转换、扩展和翻译。                                      |
|                | Retrieval (检索阶段)                     | 从数据源（如向量数据库）中检索相关文档的阶段。                                             |
|                | Post-Retrieval (后检索阶段)               | 对检索到的文档进行排序、过滤或压缩的阶段，以提高生成质量。                                       |
|                | Generation (生成阶段)                    | 结合用户查询和检索文档生成最终响应的阶段。                                               |
| **预检索技术**      | Query Transformation (查询转换)          | 优化查询语义的技术，包括压缩、重写和翻译。                                               |
|                | CompressionQueryTransformer          | 将对话历史和后续查询压缩为独立查询，保留上下文核心。                                          |
|                | RewriteQueryTransformer              | 重写用户查询以适配目标系统（如向量库或搜索引擎）。                                           |
|                | TranslationQueryTransformer          | 将查询翻译为嵌入模型支持的目标语言。                                                  |
|                | MultiQueryExpander                   | 将单一查询扩展为多个语义变体，增加检索覆盖率。                                             |
| **检索技术**       | Document Search (文档搜索)               | 从数据源中检索相关文档的核心过程。                                                   |
|                | VectorStoreDocumentRetriever         | 基于向量数据库的文档检索工具，支持元数据过滤、相似性阈值（`similarityThreshold`）和返回数量（`topK`）配置。 |
| **后检索技术**      | Document Ranking (文档排序)              | 根据相关性对文档重新排序，解决“中间丢失”问题。                                            |
|                | Document Selection (文档选择)            | 去除冗余或不相关文档，优化生成输入。                                                  |
|                | Document Compression (文档压缩)          | 压缩文档内容以减少噪声，适应模型上下文长度限制。                                            |
| **生成技术**       | Query Augmentation (查询增强)            | 将检索文档内容整合到用户查询中，提供生成上下文。                                            |
|                | ContextualQueryAugmenter             | 将检索文档内容附加到用户查询的默认增强工具，支持空上下文处理配置（`allowEmptyContext`）。              |
| **配置与参数**      | Filter Expression (过滤表达式)            | 基于元数据的SQL式表达式，用于动态筛选检索结果（如`type == 'Spring'`）。                      |
|                | Similarity Threshold (相似性阈值)         | 设定检索结果的最小相似度（如`0.8`），过滤低相关性文档。                                      |
|                | topK                                 | 控制返回的检索结果数量（如`topK=5`）。                                             |
| **实现细节**       | Modular RAG Architecture             | 模块化RAG框架，支持灵活组合预检索、检索、后检索和生成组件。                                     |

---

### **总结**

Spring AI的RAG框架通过模块化设计将检索增强生成分解为预检索、检索、后检索和生成四个阶段，每个阶段提供可配置的组件（如查询转换工具
`QueryTransformer`、文档检索器`VectorStoreDocumentRetriever`）。核心工具`QuestionAnswerAdvisor`和
`RetrievalAugmentationAdvisor`
简化了RAG流程的集成，支持动态过滤表达式、相似性阈值等参数优化检索结果。预检索阶段通过查询扩展和翻译提升检索覆盖率，后检索阶段通过排序和压缩优化输入质量，最终结合上下文生成更准确的回答。该架构兼顾灵活性与性能，适用于复杂知识库增强的生成场景。



# ETL   

提取、转换和加载 （ETL） 框架是检索增强生成 （RAG） 用例中数据处理的主干

[https://docs.spring.io/spring-ai/reference/api/etl-pipeline.html](https://docs.spring.io/spring-ai/reference/api/etl-pipeline.html)

### 关键词总结表格

| **类别**                | **词条**                      | **详细说明**                                                                                                                                                                                                 |
|-------------------------|-------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **核心概念**            | ETL Pipeline                  | 数据处理的流程框架，包含数据抽取（Extract）、转换（Transform）、加载（Load）三个阶段，是RAG（检索增强生成）用例的基石。                                                                                     |
|                         | RAG (Retrieval Augmented Generation) | 一种通过检索外部数据增强生成模型能力的模式，ETL为其提供结构化数据支持。                                                                                                                                    |
| **接口与实现**          | DocumentReader                | 接口，负责从不同数据源（如PDF、JSON、TXT等）读取原始数据并转换为`Document`对象列表。具体实现包括`PagePdfDocumentReader`、`JsonReader`等。                                                                  |
|                         | DocumentTransformer           | 接口，负责对文档进行转换（如文本分割、元数据增强）。实现类如`TokenTextSplitter`、`KeywordMetadataEnricher`等。                                                                                             |
|                         | DocumentWriter                | 接口，负责将处理后的文档存储到目标位置（如文件、向量数据库）。实现类如`VectorStore`、`FileDocumentWriter`等。                                                                                               |
| **文档处理组件**        | Document                      | 核心数据单元，包含文本内容、元数据（如来源、页码）及可选的多媒体类型（图片、音频、视频）。                                                                                                                |
|                         | Metadata                      | 文档的附加信息（如文件名、字符集、关键词），用于增强检索和生成效果。                                                                                                                                      |
| **文档读取器实现**      | JsonReader                    | 从JSON文件读取文档，支持通过JSON Pointer提取嵌套数据，并可指定特定键作为内容或元数据。                                                                                                                   |
|                         | TextReader                    | 读取纯文本文件，生成单个文档，支持自定义字符集和元数据。                                                                                                                                                  |
|                         | MarkdownDocumentReader        | 解析Markdown文件，根据配置（如代码块、水平分割线）生成多个文档，保留标题和格式。                                                                                                                          |
|                         | PagePdfDocumentReader         | 基于PDFBox的PDF阅读器，按页拆分文档，支持配置页边距和文本格式化。                                                                                                                                         |
|                         | ParagraphPdfDocumentReader    | 根据PDF目录结构按段落拆分文档（需PDF包含目录信息）。                                                                                                                                                      |
|                         | TikaDocumentReader            | 基于Apache Tika的多格式文档解析器，支持DOCX、PPTX、HTML等格式。                                                                                                                                            |
| **转换器实现**          | TokenTextSplitter             | 按CL100K_BASE编码的Token数量分割文本，支持语义分块（如句末分割）和元数据继承。                                                                                                                            |
|                         | KeywordMetadataEnricher       | 调用生成模型提取文档关键词，并添加到元数据中。                                                                                                                                                            |
|                         | SummaryMetadataEnricher       | 调用生成模型生成当前/相邻文档摘要，增强上下文关联性。                                                                                                                                                     |
| **写入器实现**          | VectorStore                   | 将文档存储到向量数据库，供RAG模型检索。                                                                                                                                                                   |
|                         | FileDocumentWriter            | 将文档写入本地文件，支持元数据标记（如页码）、追加模式和文档分隔符。                                                                                                                                      |
| **配置与参数**          | JsonMetadataGenerator         | 可自定义的JSON元数据生成逻辑，用于`JsonReader`。                                                                                                                                                           |
|                         | PdfDocumentReaderConfig       | PDF阅读器的配置类，包含页边距、文本格式化规则（如删除顶部行数）等参数。                                                                                                                                  |
|                         | MetadataMode                  | 元数据处理模式（如`ALL`保留全部元数据，`NONE`忽略元数据），影响转换和存储行为。                                                                                                                            |
| **工具与库**            | Apache PDFBox                 | 用于解析PDF文件的库，被`PagePdfDocumentReader`和`ParagraphPdfDocumentReader`依赖。                                                                                                                         |
|                         | Apache Tika                   | 多格式文档解析库，支持DOCX、PPTX等格式，被`TikaDocumentReader`依赖。                                                                                                                                       |
|                         | Jackson                       | JSON处理库，用于`JsonReader`解析JSON数据。                                                                                                                                                                 |
| **数据处理行为**        | JSON Pointer                  | 在JSON文档中定位特定元素的语法（RFC 6901），用于精准提取嵌套内容。                                                                                                                                        |
|                         | Text Splitting                | 将长文本拆分为符合模型上下文窗口的小块，支持基于字符数、Token数或语义边界。                                                                                                                              |
|                         | Metadata Enrichment           | 通过生成模型或规则增强文档元数据（如关键词、摘要），提升检索效果。                                                                                                                                        |

---

### **总结**
本文详细阐述了Spring AI中ETL管道的核心组件及其在RAG用例中的应用。**ETL框架**通过`DocumentReader`（如JSON/PDF/Tika解析器）抽取多源数据，转换为标准`Document`对象；经`DocumentTransformer`（如文本分割、元数据增强）处理，适配模型需求；最终由`DocumentWriter`（如向量数据库、文件写入器）存储。关键工具如**Apache PDFBox**和**Tika**支持多格式解析，`TokenTextSplitter`和元数据增强器（如`KeywordMetadataEnricher`）则优化数据结构和检索效率。配置参数（如`MetadataMode`、`PdfDocumentReaderConfig`）提供了高度灵活性，确保从数据预处理到存储的全链路可控。这一框架为生成式AI的检索增强提供了可靠的数据基础。