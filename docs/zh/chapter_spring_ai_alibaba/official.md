# 格式化输出(Structured Output)

| 类别       | 词条                         | 详细说明                                                                              |
|----------|----------------------------|-----------------------------------------------------------------------------------|
| **核心概念** | 结构化输出(Structured Output)   | 通过特定格式指令指导大语言模型（LLM）生成可被下游应用程序可靠解析的结构化数据（如JSON、XML、Java类实例等）的机制                   |
|          | 输出格式指令                     | 附加在用户提示中的指导性文本，用于明确指定LLM生成响应时应遵循的结构化格式要求                                          |
|          | 转换器(Converter)             | 将LLM输出的原始文本转换为结构化数据类型的工具，包含格式指令生成和结果反序列化两个阶段                                      |
| **API类** | BeanOutputConverter        | 通过Java类或ParameterizedTypeReference配置，将LLM输出的JSON反序列化为对应Java对象的转换器实现               |
|          | MapOutputConverter         | 将LLM输出的JSON转换为`java.util.Map<String, Object>`结构的转换器实现                             |
|          | ListOutputConverter        | 将LLM输出的逗号分隔文本转换为`java.util.List`的转换器实现                                            |
| **技术实现** | JSON模式(DRAFT_2020_12)      | BeanOutputConverter使用的JSON模式规范，用于验证LLM输出与目标Java类的匹配性                              |
|          | RFC8259标准                  | MapOutputConverter遵循的JSON合规性标准，确保输出的JSON能被标准解析器处理                                 |
|          | ObjectMapper               | 在BeanOutputConverter中用于JSON反序列化的工具类，实现文本到Java对象的转换                                |
| **数据格式** | JSON                       | 最常用的结构化输出格式，支持键值对结构和嵌套数据表示                                                        |
|          | XML                        | 可扩展标记语言，支持树形结构数据表示（文中未展开但属于支持范畴）                                                  |
|          | Java类实例                    | 通过反序列化将LLM输出转换为具体的Java对象，如`ActorsFilms`记录类实例                                      |
| **功能模块** | 提示工程(Prompt Engineering)   | 在用户提示中插入格式指令的技术，用于控制LLM输出的数据结构                                                    |
|          | 反序列化                       | 将LLM输出的结构化文本（如JSON）转换为程序可操作的数据对象的过程                                               |
| **使用方式** | ChatClient                 | 高级API接口，通过链式调用实现结构化输出转换（如`.entity(Class)`直接获取对象结果）                                |
|          | ChatModel                  | 底层原子API，需手动处理提示模板构建和转换器调用（如`chatModel.call()`配合`convert()`方法）                     |
| **开发实践** | ParameterizedTypeReference | 用于处理泛型类型的容器类，在转换复杂结构（如`List<ActorsFilms>`）时提供类型安全支持                               |
|          | DefaultConversionService   | ListOutputConverter依赖的类型转换服务，实现文本到List的解析                                         |
| **应用场景** | 下游应用程序                     | 依赖可靠解析LLM输出值的系统，需要结构化数据作为输入来源（如工作流、智能体应用等）                                        |
| **示例组件** | ActorsFilms记录类             | 示例中定义的数据结构`record ActorsFilms(String actor, List<String> movies)`，用于接收演员电影作品结构化数据 |
| **操作指令** | 生成(Generate)               | LLM根据格式指令创建结构化数据的核心动作                                                             |
|          | 转换(Convert)                | 将LLM原始输出文本映射到目标数据结构的处理过程                                                          |
|          | 解析(Parse)                  | 对LLM输出的结构化文本进行语法分析和数据提取                                                           |
| **特性说明** | 可靠解析                       | 结构化输出的核心价值，确保下游系统能稳定处理AI模型的返回结果                                                   |
|          | 快速集成                       | 通过自动类型转换减少开发工作量，加速AI功能与现有系统的整合                                                    |

# 向量存储(Vector Store)

| 类别          | 词条                     | 详细说明                                                      |
|-------------|------------------------|-----------------------------------------------------------|
| **核心概念**    | 向量存储（VectorStore）      | 一种用于存储和检索高维向量数据的数据库或存储解决方案，适用于处理嵌入模型转换后的数据，支持相似性搜索而非精确匹配。 |
|             | 高维向量数据                 | 经过嵌入模型转化的数值数组（如`float[]`），用于表示文本、图像等非结构化数据的特征。            |
|             | 嵌入模型（EmbeddingModel）   | 将文本内容转换为数值向量的模型，用于生成向量存储中的高维数据。                           |
|             | 相似性搜索                  | 根据向量之间的距离或相似度进行检索，返回与查询向量最接近的文档。                          |
|             | 检索增强生成（RAG）            | 技术流程：先检索相似文档作为上下文，再结合用户查询发送给AI模型生成答案。                     |
| **接口类与方法**  | VectorStore接口          | Spring AI提供的抽象接口，包含数据加载、删除和相似性搜索的核心方法。                    |
|             | `add(List<Document>)`  | 将文档列表添加到向量存储中，需结合嵌入模型生成向量。                                |
|             | `delete(List<String>)` | 根据文档ID列表删除向量存储中的文档。                                       |
|             | `similaritySearch()`   | 执行相似性搜索，支持通过`SearchRequest`或直接传入查询字符串进行检索。                |
|             | SearchRequest构建器       | 用于配置搜索参数的类，支持设置`topK`、相似度阈值和过滤表达式。                        |
| **文档处理**    | Document类              | 封装文本内容及其元数据（如文件名、来源格式），是向量存储操作的基本单元。                      |
|             | 元数据（Metadata）          | 键值对形式的附加信息（如`country == 'UK'`），用于过滤或增强文档检索。               |
| **接口参数与选项** | `topK`                 | 返回相似文档的最大数量（默认为4），用于控制检索结果的规模。                            |
|             | 相似度阈值（threshold）       | 仅返回相似度高于该值的文档（范围0-1，默认0.75）。                              |
|             | Filter.Expression      | 类SQL的过滤表达式，基于文档元数据进行条件筛选（如`year >= 2020`）。                |
| **配置与集成**   | Auto-configuration     | Spring Boot自动配置功能，简化向量存储的依赖注入和初始化流程。                      |
|             | VectorStore Properties | 配置前缀`spring.ai.dashscope`，用于设置API密钥等连接参数。                 |
|             | Runtime Options        | 通过`DashScopeStoreOptions`动态配置参数（如指定知识库名称）。                |
|             | DashScopeCloudStore    | 阿里云百炼平台的具体向量存储实现类，需传入API实例和配置选项。                          |
| **框架与注解**   | @RestController        | Spring MVC注解，标记类为处理HTTP请求的控制器。                            |
|             | @Autowired             | Spring依赖注入注解，自动装配`DashScopeCloudStore`实例。                 |
|             | @GetMapping            | 定义HTTP GET请求的端点映射，如示例中的`/ai/search`路径。                    |
| **处理过程**    | 向量嵌入（Embedding）        | 使用嵌入模型将文本内容转换为数值数组的过程，是数据加载到向量存储前的必要步骤。                   |
|             | 元数据过滤                  | 通过`Filter.Expression`在搜索时筛选符合条件的文档，提升检索精准度。               |

# 智能机票助手

| 类别     | 词条                | 详细说明                                 |
|--------|-------------------|--------------------------------------|
| 框架与平台  | Spring AI Alibaba | 阿里云提供的AI开发框架，用于构建智能体应用，支持与大模型交互和功能扩展 |
|        | Spring Boot       | Java应用开发框架，用于构建智能机票助手的核心系统           |
| AI模型相关 | AI大模型             | 通义等基础模型，用于自然语言理解、决策和多轮对话能力           |
|        | 自然语言处理(NLP)       | 理解用户通过自然语言表达的机票操作需求                  |
|        | 多轮对话              | 支持连续对话并在上下文中保持意图理解                   |
|        | 意图识别              | 识别用户请求类型（如改签/退票/查询）                  |
| 应用功能   | 机票预定              | 核心业务功能，需结合航空规则和用户需求完成                |
|        | 问题解答              | 回答用户关于航班、政策等问题的能力                    |
|        | 机票改签              | 涉及规则校验（如航空公司政策、手续费计算）的复杂操作           |
|        | 机票取消              | 需要验证用户权限和合规性的敏感操作                    |
| 架构组件   | Vector Store      | 存储机票规则等向量化数据的检索库，支持RAG模式             |
|        | 业务数据库             | 存储用户预订记录、操作历史等结构化数据                  |
|        | 工具调用              | 执行具体业务动作（如修改数据库记录）的功能接口              |
| 技术模式   | RAG(检索增强)         | 通过领域知识（如退改签规则）增强模型决策准确性的技术           |
|        | Function Calling  | 将模型决策转换为具体函数调用，实现业务操作的执行机制           |
|        | Chat Memory       | 对话记忆管理，维护多轮对话的上下文信息                  |
| 开发概念   | Prompt管理          | 设计优化与大模型交互的提示词模板                     |
|        | 决策执行              | 将AI决策转化为可执行的业务流程（与传统系统结合）            |
|        | 持久化               | 业务数据存储到数据库的操作                        |
| 业务规则   | 航空法规              | 必须遵守的行业法规（如运输条款、旅客权益）                |
|        | 退改签规则             | 各航空公司差异化的政策，需严格校验的核心业务逻辑             |
|        | 手续费计算             | 基于规则和用户条件的动态计算逻辑                     |
| 系统特性   | 智能化能力             | 结合AI模型与传统系统的混合决策机制                   |
|        | 经济风险控制            | 涉及资金操作的业务需防范法律/经济风险的设计要求             |
|        | 上下文感知             | 系统对对话历史和业务状态的整体理解能力                  |
| 代码实现   | ChatClient        | Spring AI提供的流式API，用于集成多种AI能力组件       |
|        | Fluent API        | 声明式编程接口，简化智能体构建流程                    |
|        | Advisor           | 功能扩展点（如日志记录、记忆管理、检索增强等模块）            |
| 验证机制   | 用户身份验证            | 获取预订号、客户姓名等敏感信息的安全验证过程               |
|        | 规则合规校验            | 执行操作前对航空政策的自动核查                      |
|        | 操作确认              | 涉及费用变更时需用户明确同意的交互流程                  |

# RAG

以下是基于当前网页内容整理的关键概念、名词、动词及技术术语的表格，覆盖了所有技术相关内容，排除了社区资源与目录部分：

| **类别**     | **词条**                       | **详细说明**                                                        |
|------------|------------------------------|-----------------------------------------------------------------|
| **核心概念**   | RAG（检索增强生成）                  | 一种结合检索模型与生成模型的技术，通过外部数据源增强大语言模型（LLM）生成结果的准确性和相关性，无需重新训练模型。      |
|            | Indexing Pipeline（索引管道）      | 数据处理流程，包括文档加载、解析、分块（chunk）、向量化及存储到向量数据库，为后续检索提供结构化数据基础。         |
|            | RAG阶段                        | 包含用户提问向量化、向量数据库检索、文档重排、提示词优化及调用大模型生成回答的完整流程。                    |
| **技术组件**   | DashScopeApi                 | 阿里云提供的API接口，用于调用文档解析、向量化、知识库操作等功能。                              |
|            | DashScopeDocumentCloudReader | 基于DashScope的文档解析工具，支持加载和解析PDF等格式文档。                             |
|            | DashScopeEmbeddingModel      | 阿里云的文本嵌入模型，用于将文本转换为向量表示。                                        |
|            | DashScopeCloudStore          | 基于DashScope的云存储组件，用于管理向量数据库中的知识库文档（如添加、删除操作）。                   |
|            | DocumentRetriever            | 文档检索接口，支持从向量数据库中检索与用户提问相关的文档片段。                                 |
|            | ChatClient                   | 封装大模型调用的客户端工具，支持集成检索增强逻辑（如通过`DocumentRetrievalAdvisor`）。        |
| **技术流程**   | 文档解析                         | 将非结构化文档（如PDF）转换为结构化文本数据的过程。                                     |
|            | Chunk切分                      | 将长文本分割为短片段（chunk），便于向量化与检索。                                     |
|            | 向量化                          | 使用嵌入模型将文本转换为向量表示，便于相似性计算。                                       |
|            | 知识库导入                        | 将处理后的文档向量存储到向量数据库（如DashScopeCloudStore）。                        |
|            | 文档检索                         | 根据用户提问的向量，从向量数据库中召回相关文档片段。                                      |
|            | 模型调用                         | 通过ChatClient调用大模型（如DashScopeChatModel），结合检索结果生成最终回答。            |
| **技术术语**   | 语义搜索                         | 基于向量相似性的搜索方式，理解用户意图而非关键词匹配。                                     |
|            | 混合搜索                         | 结合语义搜索与传统关键词搜索的检索策略，提升结果相关性。                                    |
|            | 知识库（向量数据库）                   | 存储文档向量的数据库，支持高效检索（如DashScopeCloudStore中的“bailian-knowledge”索引）。 |
|            | 私有数据/专有数据                    | RAG中补充大模型的外部数据源，如企业内部文档或未公开信息。                                  |
|            | 生成模型（LLM）                    | 大语言模型（如DashScopeChatModel），根据检索内容生成自然语言回答。                      |
| **工具与框架**  | Spring AI Alibaba Graph      | 基于Spring生态的框架，提供RAG流程开发支持，简化智能体应用构建（如Dify工作流）。                  |
|            | DocumentRetrievalAdvisor     | 用于集成文档检索逻辑的组件，可配置是否返回引用的文档内容。                                   |
| **存储组件**   | DashScopeStoreOptions        | 配置向量数据库存储的参数（如索引名称“bailian-knowledge”）。                         |
| **代码操作**   | add()                        | 向向量数据库添加文档的方法。                                                  |
|            | delete()                     | 从向量数据库中删除指定文档的方法。                                               |
| **输出与元数据** | ChatResponse                 | 包含大模型生成回答的对象，可获取回答内容及引用的文档元数据（如标题、分数）。                          |
|            | Retrieved Documents          | 检索后采纳的文档列表，包含元数据（如文档名称、相关性分数）。                                  |

# 仅用十几行代码实现 OpenManus，Spring AI Alibaba Graph 快速预览

https://java2ai.com/blog/spring-ai-alibaba-graph-preview/?spm=4347728f.3f2b363b.0.0.717ba35esAeuI3&source=blog/

| **类别**      | **词条**                  | **详细说明**                                                                             |
|-------------|-------------------------|--------------------------------------------------------------------------------------|
| **框架与组件**   | Spring AI Alibaba Graph | 阿里巴巴基于Spring AI开发的智能体框架，支持工作流编排、多智能体系统构建，参考Langgraph设计理念。                            |
|             | StateGraph              | 用于定义状态图的组件，可通过节点（Node）和边（Edge）构建流程控制逻辑。                                              |
|             | AgentStateFactory       | 创建智能体状态的工厂类，负责注册状态键和策略（如ReplaceStrategy）。                                            |
|             | ReactAgent              | 基于ReAct模式的智能体实现，支持工具调用与迭代执行任务，通过maxIterations控制最大循环次数。                               |
| **功能模块**    | 工作流编排                   | 通过节点和条件边实现自动化流程，如客户评价处理系统中的分类与分流逻辑。                                                  |
|             | 智能体（Agent）              | 具有独立功能的程序单元，如Planning Agent（任务规划）、Supervisor Agent（任务监督）、Executor Agent（任务执行）。       |
|             | 多智能体系统                  | 多个智能体协作的系统，如OpenManus中Planning、Supervisor、Executor Agent的协同工作。                       |
| **示例应用**    | 客户评价处理系统                | 通过两级分类节点处理用户评论，区分正面（positive）与负面（negative）反馈，并按问题类型分流到处理节点。                          |
|             | 天气预报查询系统                | 基于ReAct Agent模式循环调用天气查询工具，直到模型返回无tool_call指令时结束流程。                                   |
|             | OpenManus               | 多智能体协作系统，新版通过Spring AI Alibaba Graph减少80%流程控制代码，支持任务规划、监督和执行。                        |
| **技术概念**    | 条件边（Conditional Edges）  | 根据节点输出结果动态选择下一个节点，如根据分类结果跳转到"recorder"或"specific_question_classifier"。               |
|             | 全局State管理               | 通过OverAllState类统一管理流程中的输入、分类结果和解决方案等状态数据。                                            |
|             | 工具调用（Tool Call）         | Agent通过调用外部工具（如天气查询API）完成任务，ReAct模式下需判断工具调用状态。                                       |
| **开发工具与流程** | Maven                   | 项目构建工具，需通过`mvn clean install`编译未发布的Spring AI Alibaba Graph源码。                        |
|             | Spring Boot             | 示例应用基于Spring Boot启动，通过`@SpringBootApplication`注解运行GraphApplication主类。                |
|             | API-KEY配置               | 使用`export AI_DASHSCOPE_API_KEY=xxx`设置大模型访问密钥，为框架提供AI服务连接能力。                          |
| **流程控制**    | 节点（Node）                | 流程中的执行单元，如"feedback_classifier"（反馈分类节点）、"specific_question_classifier"（具体问题分类节点）。    |
|             | 边（Edge）                 | 节点间的连接关系，包括起始边（START）、结束边（END）和条件边。                                                  |
|             | 状态注册（registerKey）       | 使用state.registerKeyAndStrategy()注册状态键及更新策略（如覆盖策略ReplaceStrategy）。                    |
| **智能体模式**   | ReAct模式                 | 结合推理（Reasoning）和行动（Action）的智能体模式，在工具调用与结果处理间循环直至任务完成。                                |
|             | Supervisor模式            | 监督式多智能体协作模式，由Supervisor Agent协调子智能体按规划执行任务。                                          |
| **问题与优化**   | 流程编排复杂度                 | 旧版OpenManus因缺乏框架支持需手动处理80%的流程控制代码，新版通过Graph框架显著降低开发难度。                               |
|             | 工具覆盖度                   | 旧版工具（如浏览器、脚本执行）功能有限，新版通过Executor Agent集成更多工具（Browser_use、FileSaver、PythonExecutor等）。 |


# MCP 协议重大升级，Spring AI Alibaba 联合 Higress 发布业界首个 Stramable HTTP 实现方案

https://java2ai.com/blog/spring-ai-alibaba-mcp-streamable-http/?spm=4347728f.3f2b363b.0.0.717ba35esAeuI3

| 类别                | 词条                      | 详细说明                                                                 |
|---------------------|--------------------------|-----------------------------------------------------------------------|
| 协议与标准          | MCP协议                  | Model Context Protocol的简称，定义AI系统间的通信规范                     |
|                     | Streamable HTTP          | 新型传输层协议，支持灵活选择普通HTTP响应或SSE流式传输                      |
|                     | HTTP+SSE                 | 旧版传输机制，通过HTTP请求+Server-Sent Events实现通信                     |
| 技术组件            | Spring AI Alibaba        | 阿里云开源的Java AI框架，支持MCP协议集成                                  |
|                     | Higress网关              | 云原生API网关，支持Streamable HTTP协议实现                              |
|                     | Java SDK                 | MCP协议的Java语言开发工具包                                             |
|                     | TypeScript SDK           | MCP协议的TypeScript语言实现                                             |
| 技术机制            | 会话ID（Session ID）     | 用于标识和管理会话状态的唯一标识符，支持断线重连和状态恢复                   |
|                     | 断线重连机制             | 网络中断后通过会话ID恢复之前交互状态的能力                                |
|                     | 统一端点（/mcp）         | 所有通信通过单一端点完成，取代原有的多端点设计                             |
|                     | 按需流式传输             | 服务器可根据场景选择立即响应或转为SSE流式传输                             |
| 应用场景            | 无状态服务器模式         | 适用于简单API服务，无需维护会话状态                                       |
|                     | 流式进度反馈             | 处理长时间任务时实时返回进度信息的应用场景                                 |
|                     | 复杂AI会话               | 需要维护上下文的多轮对话场景                                             |
|                     | 断线恢复模式             | 弱网环境下保持会话连续性的应用场景                                        |
| 实现细节            | GET空请求初始化          | 客户端通过空GET请求主动建立SSE连接                                        |
|                     | POST请求升级响应         | 服务器可根据请求内容决定返回普通HTTP响应或升级为SSE流                       |
|                     | 响应内容协商             | 通过Content-Type（application/json/text-event-stream）区分响应类型         |
|                     | Mono响应式编程           | Java实现中使用的Project Reactor响应式编程模型                             |
| 问题与挑战          | 粘性会话连接             | HTTP+SSE模式需要将相同会话请求路由到同一服务节点的限制                      |
|                     | 长连接资源消耗           | 服务器维护大量SSE连接导致的高资源占用问题                                  |
|                     | 基础设施兼容性限制       | 传统Web设施（CDN/防火墙等）对长连接支持不足的问题                           |
| 改进与优势          | 架构可扩展性             | Streamable HTTP减少对粘性会话的依赖，提升系统扩展能力                      |
|                     | 灵活响应模式             | 支持立即响应/短流/长流多种传输形态                                        |
|                     | 状态恢复能力             | 通过会话ID实现中断后的状态重建                                            |
|                     | 弱网可靠性提升           | 改进后的协议在网络不稳定时仍能保持会话连续性                                |
| 示例与请求模式      | 初始化请求               | 客户端发送包含协议版本和客户端信息的初始化请求                              |
|                     | JSON-RPC 2.0             | 使用的远程调用协议规范                                                    |
|                     | SSE事件格式              | 遵循Server-Sent Events规范的事件流格式                                    |
|                     | 进度反馈事件             | 包含百分比进度信息的SSE事件（如"progress:30%"）                            |
| 相关项目            | OpenManus               | 文中提到的智能体应用开发框架                                             |
|                     | Dify工作流              | 基于Spring AI Alibaba开发的智能体工作流系统                              |
|                     | Ollama本地模型          | 支持本地模型运行的AI框架（在相关文章提到，当前页面未展开）                  |
|                     | RAG应用                 | 检索增强生成型应用（在相关文章提到）                                       |
 