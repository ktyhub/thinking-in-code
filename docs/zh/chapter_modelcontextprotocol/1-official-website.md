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
