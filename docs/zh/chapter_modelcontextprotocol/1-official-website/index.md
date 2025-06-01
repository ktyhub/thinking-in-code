# MCP介绍

[https://modelcontextprotocol.io/introduction](https://modelcontextprotocol.io/introduction)

| 类别     | 词条                           | 详细说明                                              |
|--------|------------------------------|---------------------------------------------------|
| 协议基础   | Model Context Protocol (MCP) | 开源协议，标准化应用程序向LLMs提供上下文的方式，类比USB-C的通用连接标准          |
| 核心组件   | MCP Hosts                    | 宿主应用程序（如Claude Desktop/IDE/AI工具），通过MCP协议访问数据的终端程序 |
|        | MCP Clients                  | 协议客户端，维护与服务器1:1连接的通信模块                            |
|        | MCP Servers                  | 轻量级服务程序，通过标准化协议暴露特定功能模块                           |
| 数据与服务  | Local Data Sources           | 本地计算机的私有数据资源（文件/数据库/本地服务），受安全协议保护的数据访问层           |
|        | Remote Services              | 通过API等接口连接的互联网远程服务系统                              |
| 开发路径   | Server Developers            | 开发自定义MCP服务器的技术角色，需实现协议规范定义的服务接口                   |
|        | Client Developers            | 开发协议客户端的工程角色，负责集成MCP服务器功能到宿主应用                    |
|        | Claude Desktop Users         | 终端用户角色，通过预建服务器扩展AI应用功能                            |
| 功能模块   | Resources                    | 服务端向LLM暴露结构化数据资源的标准化机制                            |
|        | Prompts                      | 可复用的提示模板系统，支持动态工作流构建                              |
|        | Tools                        | 服务端动作执行框架，使LLM能调用预定义功能接口                          |
|        | Sampling                     | 服务端主动请求LLM生成内容的逆向交互机制                             |
|        | Transports                   | 协议通信层的传输实现（如HTTP/WebSocket等）                      |
| 开发工具   | Debugging Guide              | 服务端与客户端集成的故障排除技术文档                                |
|        | MCP Inspector                | 交互式调试工具，用于协议消息流监控与分析                              |
| 核心优势   | Pre-built Integrations       | 协议提供的即插即用功能模块集合                                   |
|        | Vendor Agnostic              | 支持灵活切换不同LLM供应商的技术中立性                              |
|        | Security Infrastructure      | 数据驻留本地的基础安全架构设计                                   |
| 架构概念   | Client-Server Architecture   | 基于请求-响应模式的分层系统架构                                  |
|        | Standardized Connection      | 统一的服务发现与接入规范                                      |
| 开发规范   | SDKs                         | 多语言实现工具包（Python/TypeScript/Java等），包含协议编解码与接口抽象    |
|        | Specification                | 协议核心规范文档，定义通信格式与交互流程                              |
| 功能扩展   | Example Servers              | 官方实现的功能参考案例库                                      |
|        | Example Clients              | 已支持协议的应用示范列表                                      |
| 开发流程   | Building with LLMs           | 使用大模型加速协议开发的工程方法                                  |
| 协议扩展机制 | Contributing Guide           | 开源社区协作规范与功能扩展指引                                   |
| 动词     | Standardize                  | 统一不同数据源和工具的接入方式                                   |
|        | Integrate                    | 实现系统与服务间的功能互操作                                    |
|        | Switch                       | 在不同LLM供应商间进行技术迁移的操作能力                             |
| 安全机制   | Secure Access                | 本地数据源的安全访问控制策略                                    |
| 交互模式   | Request Completions          | 服务端向LLM发起内容生成请求的交互模式                              |
| 部署模式   | Lightweight Programs         | 服务端要求的轻量化部署特性                                     |

# Resources资源

[https://modelcontextprotocol.io/docs/concepts/resources](https://modelcontextprotocol.io/docs/concepts/resources)

| **类别**   | **词条**                       | **详细说明**                                                                                                    |
|----------|------------------------------|-------------------------------------------------------------------------------------------------------------|
| **核心概念** | Model Context Protocol (MCP) | 一种协议，允许服务器向客户端暴露数据资源，供客户端在LLM交互中作为上下文使用。                                                                    |
|          | Resources                    | MCP的核心抽象单元，代表服务器暴露的任何形式的数据或内容（如文件、数据库记录、API响应等）。每个资源通过唯一URI标识，支持文本或二进制数据。                                   |
| **资源标识** | URI                          | 唯一标识资源的统一资源标识符，格式由协议和路径结构组成（例如 `file://...` 或自定义协议）。                                                        |
|          | URI Scheme                   | URI的协议部分（如`file`、`postgres`、`screen`），由服务器定义自定义方案以支持动态资源。                                                   |
| **资源类型** | Text Resources               | 包含UTF-8编码的文本数据，适用于源代码、配置文件、日志、JSON/XML等场景。                                                                  |
|          | Binary Resources             | 包含Base64编码的二进制数据，适用于图片、PDF、音视频等非文本格式。                                                                       |
| **资源发现** | Direct Resources             | 通过`resources/list`端点直接暴露静态资源列表，包含URI、类型、描述和元数据。                                                             |
|          | Resource Templates           | 动态资源的URI模板（如`screen://{display}`），客户端通过参数化模板构造有效URI。                                                        |
| **资源读取** | `resources/read`             | 客户端通过此请求读取资源内容，返回`resource_contents`结构（包含数据、MIME类型、大小等）。                                                    |
|          | MIME Type                    | 资源内容的媒体类型标识（如`text/plain`），用于客户端解析数据。                                                                       |
| **资源更新** | List Changes                 | 服务器通过`notifications/resources/list_changed`通知客户端资源列表变动。                                                     |
|          | Content Subscriptions        | 客户端通过`resources/subscribe`订阅资源更新，通过`notifications/resources/updated`接收变更通知，最后取消订阅（`resources/unsubscribe`）。 |
| **实现相关** | TypeScript/Python Example    | 示例代码展示如何实现资源支持（如端点处理、URI解析、订阅管理）。                                                                           |
| **最佳实践** | 命名规范                         | 使用清晰、描述性的资源名称和URI（如`postgres://database/customers`）。                                                        |
|          | 动态资源模板                       | 为动态资源设计URI模板（如`screen://{display_id}`），并明确参数规则。                                                             |
|          | 错误处理                         | 返回明确的错误消息（如无效URI、权限不足等），并支持分页处理大型资源列表。                                                                      |
|          | 缓存与验证                        | 缓存频繁访问的资源内容，并在处理前验证URI有效性。                                                                                  |
| **安全考虑** | URI验证                        | 防止恶意URI注入，确保路径合法性（如禁止`../`目录遍历）。                                                                            |
|          | 访问控制                         | 按需限制资源访问权限（如数据库敏感记录仅限授权用户）。                                                                                 |
|          | 二进制数据风险                      | 避免直接执行或渲染未经验证的二进制数据（如可能包含恶意代码的文件）。                                                                          |
|          | 速率限制与审计                      | 对高频读取请求实施限速，并记录资源访问日志用于审计。                                                                                  |
|          | 数据加密                         | 在传输过程中对敏感资源内容使用TLS等加密协议。                                                                                    |
| **操作动词** | 暴露（Expose）                   | 服务器主动公开资源供客户端使用。                                                                                            |
|          | 订阅（Subscribe）                | 客户端通过订阅机制接收资源更新通知。                                                                                          |
|          | 解析（Parse）                    | 客户端根据MIME类型解析资源内容（如JSON转结构化数据）。                                                                             |
|          | 清理（Cleanup）                  | 服务器定期清理过期或无效资源（如临时生成的文件）。                                                                                   |

# Prompts

[https://modelcontextprotocol.io/docs/concepts/prompts](https://modelcontextprotocol.io/docs/concepts/prompts)

| **类别**    | **词条**                       | **详细说明**                                                      |
|-----------|------------------------------|---------------------------------------------------------------|
| **协议基础**  | Prompts (MCP)                | 服务器预定义的可复用提示模板和交互流程，用于标准化客户端与LLM的交互方式。                        |
|           | Model Context Protocol (MCP) | 支持通过结构化协议管理提示模板的框架，提供动态参数、上下文嵌入和多步骤流程控制。                      |
| **核心组件**  | Prompt Templates             | 预定义的文本模板，允许动态参数插入和上下文资源引用，例如表单生成或对话引导。                        |
|           | Dynamic Arguments            | 提示模板中需要运行时传入的参数（如用户输入或环境变量），用于生成具体任务内容。                       |
|           | Context Resources            | 来自系统或用户会话的上下文数据（如用户ID、文档内容），可自动嵌入到提示模板中。                      |
| **动态特性**  | Embedded Resource Context    | 服务器在处理`prompts/get`请求时自动将相关资源上下文注入提示模板的能力。                    |
|           | Multi-step Workflows         | 通过串联多个提示模板实现复杂交互流程（如问答后自动执行数据分析）。                             |
| **技术实现**  | RESTful Endpoints            | `prompts/list`（发现可用提示）、`prompts/get`（获取具体提示实例）等API接口。         |
|           | Server Capability            | 服务器通过`prompts.listChanged`声明支持提示列表变更通知的能力。                    |
| **客户端交互** | Client Discovery             | 客户端通过调用`prompts/list`端点获取服务器支持的提示模板列表。                        |
|           | Argument Validation          | 对客户端传入参数进行格式和完整性校验，防止模板渲染错误。                                  |
| **最佳实践**  | Descriptive Naming           | 使用清晰描述性的提示命名（如`/generate-summary`），便于人工和LLM理解用途。              |
|           | Versioning                   | 对提示模板进行版本控制以兼容不同客户端，避免接口变更导致系统故障。                             |
|           | Content Caching              | 对动态生成的内容（如实时数据）进行缓存，提升响应速度并降低资源消耗。                            |
| **安全考虑**  | Sanitize User Input          | 对用户输入进行净化和转义处理，防止XSS等攻击方式通过提示参数注入。                            |
|           | Rate Limiting                | 限制提示调用频率，防止恶意用户通过高频调用消耗系统资源。                                  |
|           | Access Controls              | 基于角色或权限控制提示模板的访问范围（如仅允许特定用户组使用敏感操作提示）。                        |
|           | Prompt Injection Risks       | 防范通过参数注入恶意指令影响LLM输出的攻击行为（如诱导模型泄露隐私数据）。                        |
| **UI集成**  | Slash Commands               | 将提示模板映射为`/command`形式的快捷指令，集成到聊天界面或搜索框中。                       |
|           | Command Palette              | 通过全局命令面板集中展示可用的提示操作，支持关键词搜索和分类过滤。                             |
|           | Interactive Forms            | 将参数化的提示模板转换为可视化表单，引导用户逐步输入所需信息。                               |
| **更新与通知** | ListChanged Notification     | 通过`notifications/prompts/list_changed`事件通知客户端提示列表发生变更，触发重新拉取。 |

# Tools工具

[https://modelcontextprotocol.io/docs/concepts/tools](https://modelcontextprotocol.io/docs/concepts/tools)

| 类别         | 词条                           | 详细说明                                             |
|------------|------------------------------|--------------------------------------------------|
| **协议与架构**  | Model Context Protocol (MCP) | 一种协议规范，定义服务器向客户端暴露可执行功能（工具）的交互方式，支持LLM与外部系统交互。   |
|            | Tools                        | MCP的核心组件，表示服务器提供的动态操作能力，可修改系统状态或调用外部API，区别于静态资源。 |
|            | Resources                    | MCP中的静态数据实体，与动态工具形成对比，通过唯一名称标识但不支持执行操作。          |
| **工具核心机制** | Discovery                    | 客户端通过`tools/list`端点动态发现可用工具，支持运行时工具列表更新。         |
|            | Invocation                   | 客户端通过`tools/call`端点调用工具，服务器执行操作后返回结构化结果。         |
|            | Flexibility                  | 工具支持的操作范围从简单计算到复杂API集成，体现协议扩展性。                  |
| **工具定义结构** | Name/Description             | 工具的唯一标识符和自然语言描述，用于指导LLM选择合适工具。                   |
|            | Parameters                   | 使用JSON Schema定义的输入参数规范，支持类型验证和示例说明。              |
|            | Return Value Structure       | 明确定义的工具输出格式，包括成功响应和错误信息的标准化结构。                   |
| **实现模式**   | System Operations            | 本地系统交互类工具（如文件读写、命令执行），需严格限制权限。                   |
|            | API Integrations             | 封装第三方API的工具（如发送邮件、查询数据库），需处理认证和错误重试。             |
|            | Data Processing              | 数据转换/分析工具（如JSON解析、统计计算），需考虑性能优化。                 |
| **安全实践**   | Input Validation             | 参数校验策略：包括路径消毒、URL验证、参数范围检查，防范注入攻击。               |
|            | Access Control               | 认证授权机制：基于角色的访问控制、操作审计和速率限制。                      |
|            | Error Sanitization           | 错误处理原则：隐藏内部错误细节，记录安全相关日志，执行超时后的资源清理。             |
| **最佳实践**   | Atomic Operations            | 保持工具功能单一化，确保操作原子性以便错误恢复。                         |
|            | Progress Reporting           | 长时间运行工具需提供进度反馈机制。                                |
|            | Documentation Standards      | 要求包含参数示例、返回值示例和使用场景说明。                           |
| **动态更新机制** | Notifications                | 通过`notifications/tools/list_changed`推送工具列表变更事件。  |
|            | Hot Swapping                 | 支持运行时动态添加/移除工具定义，需保证版本兼容性。                       |
| **错误处理规范** | isError Flag                 | 结果对象中的布尔标志位，明确指示操作失败状态。                          |
|            | Error Payload                | 标准化错误详情格式，包含错误代码、描述和可恢复性标识。                      |
| **测试策略**   | Functional Testing           | 验证工具在合法/非法输入下的行为符合预期。                            |
|            | Integration Testing          | 使用真实和模拟依赖测试外部系统集成。                               |
|            | Security Testing             | 覆盖输入消毒、身份验证、权限提升防护等安全维度。                         |
|            | Performance Testing          | 评估高负载下的超时处理、资源泄漏预防和吞吐量表现。                        |

# Sampling采样

[https://modelcontextprotocol.io/docs/concepts/sampling](https://modelcontextprotocol.io/docs/concepts/sampling)

| **类别**    | **词条**                       | **详细说明**                                                 |
|-----------|------------------------------|----------------------------------------------------------|
| **核心概念**  | Sampling                     | MCP协议的核心功能，允许服务器通过客户端请求LLM补全，在保持安全隐私的前提下实现智能代理行为         |
|           | Model Context Protocol (MCP) | 支持跨服务器上下文管理的协议框架                                         |
|           | Human-in-the-loop            | 用户参与审核和修改请求/补全的设计原则，确保对LLM输入输出的控制                        |
| **协议流程**  | sampling/createMessage       | 服务器向客户端发起采样请求的API端点                                      |
|           | Request Review               | 客户端对请求的审查和修改阶段                                           |
|           | Completion Review            | 客户端对LLM生成结果的审查阶段                                         |
| **消息格式**  | messages array               | 包含对话历史的结构化数组，每个元素包含角色和内容                                 |
|           | role                         | 消息角色定义：user（用户）或 assistant（助手）                           |
|           | content                      | 消息内容容器，支持文本或图像格式                                         |
|           | text                         | 纯文本内容字段                                                  |
|           | data & mimeType              | 图像内容的Base64编码数据和MIME类型标识                                 |
| **模型偏好**  | modelPreferences             | 服务器指定的模型选择偏好配置                                           |
|           | hints                        | 建议模型名称列表（如"claude-3"），支持模糊匹配不同供应商的等效模型                   |
|           | name                         | 模型名称匹配模式（完整或部分名称）                                        |
|           | costPriority                 | 成本优化优先级（0-1标准化值）                                         |
|           | speedPriority                | 响应速度优先级（0-1标准化值）                                         |
|           | intelligencePriority         | 模型智能能力优先级（0-1标准化值）                                       |
| **上下文管理** | includeContext               | 控制上下文包含范围的参数：none（无）/thisServer（当前服务器）/allServers（所有服务器） |
| **系统控制**  | systemPrompt                 | 可选的系统级提示词，客户端可修改或忽略                                      |
| **采样参数**  | temperature                  | 控制生成随机性的参数（0.0确定性 ~ 1.0高随机性）                             |
|           | maxTokens                    | 生成结果的最大token数量限制                                         |
|           | stopSequences                | 触发生成终止的字符串序列数组                                           |
|           | metadata                     | 供应商特定的扩展参数容器                                             |
| **安全控制**  | Sanitization                 | 敏感信息过滤处理流程                                               |
|           | Rate Limiting                | 请求频率限制机制                                                 |
|           | Data Encryption              | 传输数据加密要求                                                 |
|           | Privacy Auditing             | 用户数据隐私审计功能                                               |
| **代理模式**  | Agentic Workflows            | 支持智能代理行为的模式，包括：资源分析、上下文决策、结构化数据生成、多步骤任务处理等               |
| **限制条件**  | Context Size Limits          | 上下文内容的容量限制                                               |
|           | Model Availability           | 不同供应商模型的可访问性差异                                           |
|           | Content Type Support         | 支持的内容类型限制（如某些模型不支持图像）                                    |
| **最佳实践**  | Prompt Structuring           | 构建清晰、结构化的提示词要求                                           |
|           | Context Management           | 上下文管理原则：最小必要量、清晰结构、及时更新                                  |
|           | Fallback Handling            | 错误处理机制：超时管理、限速处理、响应验证、备用方案                               |
| **监控机制**  | Usage Monitoring             | 采样使用情况的跟踪和分析                                             |
|           | Cost Monitoring              | 资源消耗成本的追踪管理                                              |
| **交互控制**  | User Moderation              | 用户对提示词/补全结果的修改/拒绝权限                                      |
|           | Model Selection Control      | 用户对最终模型选择的控制权                                            |

1. 优先级参数采用0-1标准化值实现多目标优化
2. 上下文管理采用分级控制（none/thisServer/allServers）
3. 安全机制强调端到端控制（从输入审查到传输加密）
4. 代理模式支持多模态智能交互（文本+图像）
5. 用户控制贯穿整个生命周期（请求-生成-输出）

# Roots根

[https://modelcontextprotocol.io/docs/concepts/roots](https://modelcontextprotocol.io/docs/concepts/roots)

| 类别        | 词条            | 详细说明                                                  |
|-----------|---------------|-------------------------------------------------------|
| **核心概念**  | Roots         | MCP中定义服务器操作边界的URI集合，用于声明客户端希望服务器关注的资源范围（如文件路径、API端点等） |
| **技术术语**  | URI           | 统一资源标识符，用于唯一标识资源（如`file://`或`https://`开头的路径）          |
|           | 文件系统路径        | 本地文件系统的物理路径（如`file:///home/user/projects/myapp`）      |
|           | HTTP URL      | 网络资源地址（如`https://api.example.com/v1`）                 |
| **功能特性**  | 声明能力（Declare） | 客户端在连接时通过声明`roots capability`告知服务器支持根目录配置             |
|           | 逻辑分离          | 通过多个根目录将不同资源（如前端代码库和API）保持独立管理                        |
| **操作流程**  | 连接时建议         | 客户端首次连接服务器时提供建议的根目录列表                                 |
|           | 动态变更通知        | 客户端在根目录变化时主动通知服务器（需服务器支持）                             |
| **服务器行为** | 资源定位          | 服务器根据根目录URI访问对应资源（如解析文件路径或调用API）                      |
|           | 边界优先          | 服务器优先处理根目录边界内的操作请求                                    |
| **配置字段**  | `uri`         | JSON配置中定义根目录位置的核心字段（必须为有效URI）                         |
|           | `name`        | JSON配置中根目录的可读性标识（如"Frontend Repository"）              |
| **使用场景**  | 项目目录          | 开发项目所在的本地或远程目录                                        |
|           | 仓库位置          | 代码版本控制系统（如Git）的存储路径                                   |
|           | API端点         | 网络服务接口的统一入口地址                                         |
|           | 配置位置          | 应用程序配置文件的存储路径                                         |
|           | 资源边界          | 限制服务器操作范围的安全策略（如仅允许访问指定目录）                            |
| **设计原则**  | 必要资源声明        | 仅向服务器暴露必需的最小资源集                                       |
|           | 描述性名称         | 使用清晰命名的根目录帮助开发者理解资源用途（如"生产环境数据库"）                     |
| **运维要求**  | 可访问性监控        | 持续验证根目录指向资源的可用性（如网络连接/文件权限检查）                         |
|           | 变更容错处理        | 服务器需优雅处理根目录失效或变更场景（如自动重试或通知客户端）                       |

### 特别说明

1. **非技术概念**包含`工作区（Workspace）`，指通过根目录定义的逻辑资源集合
2. **隐含关系**中：
    - `guidance`（引导）体现为通过根目录影响服务器行为
    - `clarity`（清晰性）通过显式声明资源范围实现
3. **系统特性**包含`弱约束性`，即根目录属建议性配置而非强制访问控制
4. **扩展能力**支持任意协议URI（如`s3://`云存储或`ftp://`文件传输协议）

# Transports传输

[https://modelcontextprotocol.io/docs/concepts/transports](https://modelcontextprotocol.io/docs/concepts/transports)

| 类别         | 词条                           | 详细说明                                                                |
|------------|------------------------------|---------------------------------------------------------------------|
| **核心协议**   | Model Context Protocol (MCP) | 定义客户端与服务端通信的基础协议，包含传输层、消息格式等规范                                      |
| **消息格式**   | JSON-RPC 2.0                 | MCP协议使用的网络传输格式，包含请求(Requests)、响应(Responses)、通知(Notifications)三种消息类型 |
| **传输层基础**  | Transport                    | 负责消息的实际传输机制，需实现消息与JSON-RPC格式的互相转换                                   |
| **内置传输类型** | 标准输入/输出 (stdio)              | 基于标准输入输出流的传输方式，适用于命令行工具和本地集成                                        |
|            | 服务器推送事件 (SSE)                | 基于HTTP的传输方式，支持服务端到客户端的单向流式通信                                        |
| **自定义传输**  | 自定义网络协议                      | 可扩展实现如WebSocket、gRPC等特殊协议                                           |
|            | 专用通信通道                       | 针对特定硬件或场景优化的通信方式（如IoT设备）                                            |
| **错误处理**   | 连接错误                         | 网络连接失败、认证失败等底层错误                                                    |
|            | 消息解析错误                       | JSON-RPC格式转换过程中的数据异常                                                |
|            | 协议错误                         | 不符合MCP规范的消息结构或流程错误                                                  |
| **最佳实践**   | 连接生命周期管理                     | 包含建立连接、维持心跳、优雅断开等全过程管理                                              |
|            | 资源清理                         | 释放网络连接、内存缓存等系统资源                                                    |
| **安全措施**   | TLS加密                        | 为网络传输层提供加密保护                                                        |
|            | 认证授权机制                       | 包括OAuth、API密钥等身份验证方式                                                |
| **性能优化**   | 消息队列背压处理                     | 防止消息积压导致系统过载的流量控制机制                                                 |
| **调试方法**   | 网络分析工具                       | Wireshark、tcpdump等报文抓取工具                                            |
| **消息规范**   | 请求(Requests)                 | 需要接收方响应的消息类型                                                        |
|            | 响应(Responses)                | 包含请求处理结果的返回消息                                                       |
|            | 通知(Notifications)            | 无需回应的单向消息类型                                                         |
| **系统集成**   | 现有系统集成                       | 支持与企业遗留系统或第三方平台对接                                                   |
| **监控运维**   | 健康检查                         | 定期检测连接可用性的机制                                                        |
|            | 异常模式监控                       | 识别异常流量或错误爆发的监控系统                                                    |
| **网络策略**   | 速率限制                         | 防止服务被滥用的流量控制策略                                                      |
|            | 防火墙规则                        | 控制网络访问权限的安全策略                                                       |
| **开发实现**   | Transport接口                  | 自定义传输需要实现的标准接口规范                                                    |
| **数据安全**   | 消息完整性验证                      | 确保传输内容未被篡改的校验机制                                                     |
|            | 输入数据清洗                       | 防止注入攻击的安全过滤机制                                                       |
| **错误跟踪**   | 错误日志记录                       | 记录传输层异常的调试信息                                                        |
| **特殊场景**   | 受限网络环境                       | 网络端口受限或需要代理的特殊部署场景                                                  |

注：此表格已合并重复类别（如将"安全考虑"统一为"安全措施"
），排除了示例代码语言（TypeScript/Python）等具体实现细节，聚焦协议层面的核心概念。涵盖了传输机制、消息规范、安全策略、运维监控等完整技术栈要素。

# Java SDK

## 概述

[https://modelcontextprotocol.io/sdk/java/mcp-overview](https://modelcontextprotocol.io/sdk/java/mcp-overview)

| 类别        | 词条                           | 详细说明                                                                                           |
|-----------|------------------------------|------------------------------------------------------------------------------------------------|
| **协议相关**  | Model Context Protocol (MCP) | 整体协议框架，用于工具和资源的上下文管理，支持客户端-服务器交互的标准化协议                                                         |
|           | JSON-RPC                     | 消息传输格式，用于协议层消息的序列化和反序列化，支持请求-响应模式的消息处理                                                         |
| **架构层**   | Client/Server Layer          | 客户端（McpClient）和服务器（McpServer）的协议操作层，McpClient处理客户端协议，McpServer管理服务端逻辑                          |
|           | Session Layer (McpSession)   | 通过DefaultMcpSession实现通信模式和状态管理，支持同步/异步操作                                                       |
|           | Transport Layer              | 负责消息传输的底层实现，包括StdioTransport和多种HTTP SSE传输方式                                                    |
| **核心组件**  | MCP Client                   | 客户端组件，负责与MCP服务器建立连接、管理通信并执行协议操作                                                                |
|           | MCP Server                   | 服务端组件，提供工具、资源和能力给客户端，实现服务器端协议逻辑                                                                |
|           | McpSession                   | 会话管理对象，控制通信状态和模式（同步/异步）                                                                        |
| **协议功能**  | Tool discovery               | 工具发现机制，客户端可动态识别服务器提供的功能                                                                        |
|           | Execution                    | 工具执行能力，客户端通过协议触发服务器端工具运行                                                                       |
|           | Roots list management        | 资源根目录列表管理功能，支持列表变更通知和订阅机制                                                                      |
|           | URI template-based access    | 基于URI模板的资源访问方式，支持动态参数化资源定位                                                                     |
| **传输实现**  | StdioTransport               | 基于标准输入输出的进程间通信传输方式，核心模块默认实现                                                                    |
|           | HTTP SSE transports          | 服务器发送事件的HTTP传输实现，包括：<br>- Java HttpClient<br>- Spring WebFlux（响应式）<br>- Spring WebMVC（Servlet） |
| **编程范式**  | Synchronous                  | 同步编程模式，支持阻塞式请求处理                                                                               |
|           | Asynchronous                 | 异步编程模式，支持非阻塞式消息处理                                                                              |
| **消息处理**  | Type-safe response           | 类型安全的响应处理机制，确保数据格式正确性                                                                          |
|           | Error handling               | 协议层的错误处理机制，包含验证和异常管理                                                                           |
| **交互流程**  | Protocol compatibility check | 协议初始化时的版本兼容性验证                                                                                 |
|           | Capability negotiation       | 客户端与服务器之间的能力协商过程                                                                               |
| **资源管理**  | Subscription system          | 资源变更订阅机制，支持客户端注册监听特定资源变化                                                                       |
|           | Content retrieval            | 资源内容获取功能，支持按需获取服务器资源                                                                           |
| **依赖管理**  | Maven/Gradle                 | 项目构建工具，用于管理协议SDK的依赖集成                                                                          |
|           | BOM (Bill of Materials)      | 依赖版本管理机制，声明所有推荐依赖版本，确保各传输模块版本兼容性                                                               |
| **SDK组件** | mcp (核心库)                    | 提供基础协议实现和API的核心依赖                                                                              |
|           | mcp-spring-webflux           | 基于响应式编程的WebFlux SSE传输实现                                                                        |
|           | mcp-spring-webmvc            | 基于Servlet的WebMVC SSE传输实现                                                                       |
|           | mcp-test                     | 测试工具库，支持MCP应用的集成测试                                                                             |

## MCP ClientMCP 客户端

| **类别**    | **词条**                       | **详细说明**                                                         |
|-----------|------------------------------|------------------------------------------------------------------|
| **协议组件**  | MCP Client                   | Model Context Protocol（MCP）架构中的核心组件，负责与MCP服务器建立连接、管理协议实现及客户端功能。  |
|           | Model Context Protocol       | 定义客户端与服务器之间交互规则的协议，涵盖通信、资源管理、工具执行等模块。                            |
| **协议协商**  | Protocol version negotiation | 客户端与服务器协商协议版本，确保兼容性。                                             |
|           | Capability negotiation       | 确定客户端与服务器之间支持的功能（如资源访问、采样等），以启用或禁用特定交互能力。                        |
| **通信机制**  | Message transport            | 客户端与服务器之间的消息传输机制，支持同步和异步通信。                                      |
|           | JSON-RPC                     | 基于JSON的远程过程调用协议，用于客户端与服务器之间的结构化数据交换。                             |
| **工具与执行** | Tool discovery               | 客户端发现服务器端提供的可用工具列表，工具为服务器端定义的函数。                                 |
|           | Tool execution               | 客户端通过参数映射调用服务器端工具，支持同步（Sync API）和异步（Async API）方式。                |
| **资源管理**  | Resource access              | 客户端通过URI模板访问服务器端资源（如数据源），支持发现和检索资源内容。                            |
|           | Resource management          | 客户端对服务器端资源的统一管理接口，包括资源权限控制和生命周期管理。                               |
| **提示系统**  | Prompt system                | 客户端与服务器端预定义提示模板的交互系统，支持动态生成文本（如基于参数的对话或指令生成）。                    |
| **客户端能力** | Roots Support                | 定义服务器可访问的文件系统根目录边界，包括根目录列表查询、变更通知及权限控制。                          |
|           | Sampling Support             | 允许服务器通过客户端发起LLM（大语言模型）交互请求（如文本生成或图像生成），客户端控制模型访问权限并可选附加MCP上下文信息。 |
| **传输层实现** | STDIO                        | 基于标准输入输出的传输层实现，用于本地进程间通信。                                        |
|           | SSE (HttpClient)             | 基于HTTP客户端的长连接（Server-Sent Events）传输实现，适用于实时流式通信场景。               |
|           | SSE (WebFlux)                | 使用Reactive Web框架（如Spring WebFlux）实现的SSE传输层，支持高并发异步通信。            |
| **API类型** | Sync API                     | 同步接口，适用于需要阻塞式调用的应用场景（如命令行工具）。                                    |
|           | Async API                    | 异步接口，适用于非阻塞式高并发场景（如Web应用或实时系统）。                                  |
| **核心功能**  | Roots management             | 管理服务器可访问的文件系统根目录列表，支持动态更新和权限分配。                                  |
|           | LLM interactions             | 通过客户端代理的大语言模型交互，包括文本补全（completions）和生成（generations）等操作。          |
|           | API keys                     | 客户端集中管理模型API密钥，避免服务器直接接触敏感信息，提升安全性。                              |
| **交互类型**  | Text-based interactions      | 基于文本的LLM交互（如自然语言生成）。                                             |
|           | Image-based interactions     | 基于图像的LLM交互（如图像生成或视觉推理）。                                          |
| **上下文控制** | MCP server context           | 可选功能，允许将MCP服务器上下文信息（如会话状态）注入到LLM提示中，以增强生成相关性。                    |
| **数据结构**  | Parameters map               | 工具或提示模板执行时传入的键值对参数集合，用于动态配置操作行为。                                 |
|           | URI templates                | 资源访问中使用的统一资源标识符模板，支持动态路径匹配和参数化查询。                                |

## MCP Server

| **类别**       | **词条**                                                   | **详细说明**                                             |
|--------------|----------------------------------------------------------|------------------------------------------------------|
| **协议与架构**    | Model Context Protocol (MCP)                             | 核心协议，定义了服务器与客户端之间的交互规范，包括工具、资源、提示等功能的标准化操作流程。        |
|              | MCP架构                                                    | 包含服务器和客户端的整体架构设计，支持会话管理、能力协商等功能。                     |
|              | 会话架构                                                     | 版本0.8.x引入的基于会话的架构，支持多客户端并发连接和状态管理。                   |
|              | JSON-RPC                                                 | 用于STDIO传输的消息协议，支持双向通信和非阻塞处理。                         |
| **服务器组件与功能** | MCP Server                                               | 协议的服务端实现，负责暴露工具、管理资源、提供提示模板、处理客户端请求等核心功能。            |
|              | 工具支持                                                     | 允许服务器注册工具（如计算器、API调用），供客户端调用。                        |
|              | 资源支持                                                     | 支持URI访问模式的资源管理（如文件、数据库记录），客户端可读取资源内容。                |
|              | 提示支持                                                     | 提供预定义的提示模板，供客户端生成标准化请求（如用户问候）。                       |
|              | 完成支持                                                     | 为提示或资源URI提供自动补全建议（如代码补全）。                            |
|              | 能力协商                                                     | 服务器与客户端协商支持的功能（如是否支持资源、工具、日志）。                       |
|              | 结构化日志                                                    | 支持按不同级别（DEBUG、INFO等）发送日志通知，客户端可过滤接收。                 |
|              | 会话管理                                                     | 管理多个客户端连接的会话生命周期，包括状态维护和优雅关闭。                        |
| **传输与通信**    | 传输层                                                      | 负责客户端与服务器的通信协议实现，如STDIO、SSE等。                        |
|              | STDIO传输                                                  | 通过标准输入/输出流进行JSON-RPC通信，适合进程间集成。                      |
|              | SSE (Server-Sent Events)                                 | 基于HTTP的服务器推送技术，支持WebFlux、WebMvc、Servlet等实现。          |
|              | WebFlux                                                  | 响应式SSE传输实现，适用于Spring WebFlux框架。                      |
|              | WebMvc                                                   | 传统Spring MVC的SSE传输实现。                                |
|              | Servlet                                                  | 基于Servlet API的SSE传输，支持异步处理和会话管理。                     |
|              | 双向通信                                                     | STDIO支持客户端与服务器的双向请求/响应。                              |
|              | 非阻塞消息处理                                                  | STDIO传输的消息处理机制，避免阻塞主线程。                              |
|              | 序列化/反序列化                                                 | 使用ObjectMapper处理JSON消息的转换。                           |
|              | 优雅关闭                                                     | 支持安全终止连接，确保未完成请求处理完毕。                                |
|              | HTTP流式传输                                                 | SSE通过HTTP长连接持续推送事件。                                  |
| **工具与资源**    | 工具（Tool）                                                 | 服务器暴露的可执行功能（如计算器），需定义名称、描述和参数模式（JSON Schema）。        |
|              | 资源（Resource）                                             | 通过URI访问的数据实体（如文件、API响应），需定义MIME类型和读取逻辑。              |
|              | 提示模板（Prompt Template）                                    | 预定义的交互模板，包含参数化消息（如动态生成用户提示）。                         |
|              | 参数模式（JSON Schema）                                        | 工具或提示的参数约束定义，使用JSON Schema描述。                        |
|              | CallToolResult                                           | 工具调用的返回结果，包含输出内容及是否需进一步交互。                           |
|              | ReadResourceResult                                       | 资源读取的返回结果，包含资源内容。                                    |
|              | GetPromptResult                                          | 提示请求的返回结果，包含格式化后的消息列表。                               |
|              | CompleteResult                                           | 自动补全的返回结果，包含建议列表及分页信息。                               |
| **规范与配置**    | Server Capabilities                                      | 服务器配置的功能开关（如启用资源、工具、日志）。                             |
|              | SyncToolSpecification/AsyncToolSpecification             | 同步/异步工具的实现规范，包含工具定义和处理器函数。                           |
|              | SyncResourceSpecification/AsyncResourceSpecification     | 同步/异步资源的实现规范，包含资源定义和读取逻辑。                            |
|              | SyncPromptSpecification/AsyncPromptSpecification         | 同步/异步提示的实现规范，包含提示定义和模板生成逻辑。                          |
|              | SyncCompletionSpecification/AsyncCompletionSpecification | 同步/异步自动补全的实现规范，包含补全类型（提示或资源）和处理器函数。                  |
|              | ServerCapabilities构建器                                    | 使用建造者模式配置服务器能力（如`.resources(true).tools(true)`）。     |
| **交互与操作**    | 注册工具/资源/提示                                               | 通过`addTool()`、`addResource()`等方法将功能注册到服务器。           |
|              | 管理客户端连接                                                  | 处理并发连接，支持同步（McpSyncServer）或异步（McpAsyncServer）模式。     |
|              | 处理请求                                                     | 在工具/资源/提示的处理器函数中执行具体逻辑（如计算、读取数据）。                    |
|              | 发送日志通知                                                   | 通过`exchange.loggingNotification()`在会话中发送日志消息。        |
|              | 设置日志级别                                                   | 客户端通过`setLoggingLevel()`过滤日志（如仅接收INFO及以上级别）。         |
|              | 调用工具（CallTool）                                           | 客户端通过工具名称和参数调用服务器功能。                                 |
|              | 请求采样（Sampling）                                           | 服务器向客户端请求语言模型生成内容（需客户端支持），需定义`CreateMessageRequest`。 |
|              | CreateMessageRequest                                     | 采样请求参数，包含输入内容、模型偏好（如模型提示词、优先级）、最大生成长度等。              |
| **日志与错误处理**  | LoggingLevel                                             | 日志级别枚举（DEBUG=0, INFO=1, NOTICE=2, ..., EMERGENCY=7）。 |
|              | LoggingMessageNotification                               | 日志消息通知对象，包含级别、记录器名称、数据内容等。                           |
|              | McpError                                                 | 统一错误类，覆盖协议兼容性、传输问题、工具执行异常等场景。                        |
| **其他概念**     | 同步API/异步API                                              | 服务器支持两种集成模式：同步（阻塞式）和异步（响应式，如Project Reactor的Mono）。   |
|              | 内容序列化                                                    | 使用ObjectMapper将对象转换为JSON格式。                          |
|              | 上下文注入                                                    | 提示模板支持参数化替换（如将用户名动态插入问候语）。                           |
|              | 会话生命周期                                                   | 从客户端连接到断开期间的状态管理（如资源释放）。                             |
