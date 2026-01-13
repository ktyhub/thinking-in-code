# langchain4j 1.9.0 and 1.9.0-beta16
### 为什么要使用langchain4j

想象一下这个场景：你，一位才华横溢的Java开发者，正站在AI浪潮之巅。眼前是OpenAI、Anthropic、谷歌Gemini等巨擘提供的强大模型，它们承诺能彻底改变你的应用。你摩拳擦掌，准备大干一场——直到你开始动手。你发现，你需要为每个模型编写不同的适配器代码，要绞尽脑汁设计对话记忆系统，要为工具调用（Function Calling）处理复杂的JSON解析，还要为实现检索增强生成（RAG）去集成向量数据库……你从构建创新应用的梦想家，瞬间变成了一个忙于粘合各种底层API的“胶水工程师”。你的代码变得臃肿、脆弱，且难以维护。这就是矛盾所在：AI的潜力无限，但将其优雅、高效地集成到成熟的Java生态中，却是一条布满荆棘的道路。

而LangChain4j，就是为你劈开这条荆棘的利剑。它不是另一个需要学习的AI模型，而是你已有的Java技艺与AI超能力之间的“无缝翻译官”和“强力粘合剂”。使用它，意味着你将告别重复造轮子的疲惫，重新夺回创新的主动权。你可以用极少的、声明式的代码，快速构建出复杂、稳定、可扩展的AI驱动型应用。在竞争激烈的数字化时代，这不仅是技术的选择，更是战略的必然——让你和你的团队，能专注于创造真正的业务价值，而非深陷集成的泥潭。

### langchain4j是什么

LangChain4j是一个专为Java开发者设计的AI应用框架。它的核心使命是简化大型语言模型（LLM）的集成过程。你可以将它理解为构建AI驱动应用的“乐高工具箱”和“最佳实践模板”。

它提供了一系列简洁的抽象层和开箱即用的组件，帮助你轻松完成以下核心任务：
*   **连接多种LLM**：统一接口调用OpenAI、Azure OpenAI、Gemini、Claude、本地模型等。
*   **管理对话上下文**：自动处理多轮对话的历史消息，让AI拥有“记忆力”。
*   **构建智能体（Agents）**：让AI学会调用你提供的工具（如查询数据库、调用API），自主完成复杂任务。
*   **实现检索增强生成（RAG）**：轻松将外部知识（文档、数据库）与模型结合，生成更准确、及时的答案。
*   **结构化输出**：将模型自由文本的回复，自动解析为你定义的Java对象。

简而言之，LangChain4j让Java开发者能够以符合自身生态习惯的方式，快速、稳健地拥抱AI能力。

### 入门示例

让我们从一个真实的场景开始：为你正在开发的电商平台构建一个智能客服助手。这个助手需要理解用户关于订单的复杂问题，并能查询后端系统来获取准确信息。

**目标**：创建一个AI助手，当用户询问“我最新一笔订单的状态是什么？”时，它能自动调用工具查询订单系统，并给出友好回复。

**开发步骤**：

1.  **定义“查询订单”工具**：首先，我们创建一个Java方法作为AI可以调用的工具。
    ```java
    import dev.langchain4j.agent.tool.Tool;
    import static java.time.format.DateTimeFormatter.ISO_LOCAL_DATE_TIME;

    public class OrderTools {
        @Tool(“根据用户ID查询该用户最新一笔订单的状态信息”)
        public String getLatestOrderStatus(String userId) {
            // 这里模拟调用你的订单服务或数据库
            // 实际开发中，这里会是HTTP客户端或Repository调用
            return String.format(“用户 %s 的最新订单（编号：ORD-789）状态为‘已发货’，预计明天送达。最后更新时间：%s”，
                                 userId, LocalDateTime.now().format(ISO_LOCAL_DATE_TIME));
        }
    }
    ```

2.  **装配AI助手**：使用LangChain4j的流畅API，将工具和LLM模型组合起来。
    ```java
    import dev.langchain4j.model.chat.ChatLanguageModel;
    import dev.langchain4j.model.openai.OpenAiChatModel;
    import dev.langchain4j.service.AiServices;

    public class CustomerServiceAssistant {
        public static void main(String[] args) {
            // 1. 创建LLM模型实例（以OpenAI为例）
            ChatLanguageModel model = OpenAiChatModel.withApiKey(“your-api-key”);
            // 2. 创建工具实例
            OrderTools orderTools = new OrderTools();
            // 3. 定义助手接口
            interface Assistant {
                String chat(String userMessage);
            }
            // 4. 使用AiServices魔法般地将它们连接起来！
            Assistant assistant = AiServices.builder(Assistant.class)
                                             .chatLanguageModel(model)
                                             .tools(orderTools)
                                             .build();
            // 5. 进行对话
            String userQuestion = “我最新一笔订单的状态是什么？我的用户ID是 alice123。”;
            String answer = assistant.chat(userQuestion);
            System.out.println(“助手回复：” + answer);
        }
    }
    ```

**运行结果**：
助手将自动识别用户意图，调用`getLatestOrderStatus(“alice123”)`工具获取数据，并组织成一段自然的语言回复：
`“根据查询，用户 alice123 的最新订单（编号：ORD-789）状态为‘已发货’，预计明天送达。最后更新时间：2023-10-27T14:30:00。”`

通过这个示例，你可以看到LangChain4j如何将繁琐的工具调用、提示词组装和结果解析自动化，让你用非常直观的Java代码就实现了一个功能强大的智能体。这只是冰山一角，RAG、复杂编排、流式响应等功能都能以类似的优雅方式实现。

### langchain4j 1.9.0 and 1.9.0-beta16版本更新了什么

根据发布日志，1.9.0 和 1.9.0-beta16 版本主要带来了以下关键更新：
1.  **Agentic AI 重大革新**：引入了一个通用的智能体规划器，并基于此重构了所有智能体模式，为构建复杂的AI工作流提供了更强大、统一的基础。
2.  **MCP（Model Context Protocol）增强**：新增了对WebSocket传输协议的支持，并允许通过供应商方法提供自定义请求头，提升了与外部工具和模型服务连接的灵活性与能力。
3.  **Gemini 功能扩展**：全面支持了Gemini的批量处理（Batch）API，并实现了完整的文件（Files）API，使批量内容处理和文件管理变得更高效。
4.  **模型提供商集成深化**：新增了通过Vertex AI使用Anthropic模型（如Claude）的支持，并扩展了OpenAI对GPT-5o系列推理努力控制和视频内容类型的支持。
5.  **框架稳固性与体验优化**：包括初始化了新的防护栏（Guardrails）模块、修复了多个Bug、增强了聊天内存的动态窗口管理，并改进了结构化输出解析的鲁棒性，使整个框架更稳定、易用。

### 更新日志

#### 显著变化

*   **智能体（Agentic）**：引入了一个通用的智能体规划器，并基于此重构了所有的智能体模式。
*   **MCP**：支持 WebSocket 