# 机票预定请求

首先我们通过如下请求来调用机票预定信息

**API 路径**  
`/api/assistant/chat`

**请求方法**  
GET

**请求参数**

| 参数名         | 类型     | 是否必填 | 说明     |
|-------------|--------|------|--------|
| chatId      | String | 是    | 会话唯一标识 |
| userMessage | String | 是    | 用户消息内容 |

**说明**  
该接口用于与 AI 客服助手进行对话，采用 Server-Sent Events（SSE）流式返回消息，适合实时聊天场景。请求需携带 `chatId`（会话 ID）和
`userMessage`（用户消息内容）参数。

# `AssistantController` 详解

`AssistantController` 是一个基于 Spring WebFlux 的 REST 控制器，主要用于处理与 AI 客服助手的对话请求。它通过响应式流（Reactive
Stream）实现了与前端的实时通信，适合构建现代化的 AI 聊天应用。

### 1. 类定义与注解

- `@RestController`：声明该类为 REST 控制器，返回值会自动序列化为 JSON 或其他格式。
- `@RequestMapping("/api/assistant")`：为控制器下所有接口统一添加路径前缀 `/api/assistant`。

### 2. 依赖注入

```java
private final CustomerSupportAssistant agent;

public AssistantController(CustomerSupportAssistant agent) {
    this.agent = agent;
}
```

通过构造方法注入 `CustomerSupportAssistant`，实现了控制器与业务逻辑的解耦，便于测试和维护。

### 3. 核心接口

```java

@RequestMapping(path = "/chat", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
public Flux<String> chat(@RequestParam(name = "chatId") String chatId,
                         @RequestParam(name = "userMessage") String userMessage) {
    return agent.chat(chatId, userMessage);
}
```

- `@RequestMapping(path="/chat", produces = MediaType.TEXT_EVENT_STREAM_VALUE)`  
  声明 `/chat` 路径的接口，返回类型为 `text/event-stream`，即 SSE（Server-Sent Events），用于服务端推送消息到前端，实现流式对话体验。
- `@RequestParam`：接收前端传递的 `chatId`（会话 ID）和 `userMessage`（用户消息）。
- 返回值类型为 `Flux<String>`，即响应式流，可以持续不断地向前端推送消息。

### 4. 工作流程

1. 前端通过 HTTP 请求调用 `/api/assistant/chat`，携带 `chatId` 和 `userMessage` 参数。
2. 控制器将请求转发给 `CustomerSupportAssistant` 业务组件。
3. 业务组件处理 AI 对话逻辑，并以流的形式返回响应。
4. 控制器将响应流通过 SSE 推送给前端，实现实时对话。

### 5. 适用场景

- AI 聊天机器人
- 智能客服系统
- 需要实时推送消息的 Web 应用

---

#### 总结

`AssistantController` 利用 Spring WebFlux 的响应式特性，实现了高效、实时的 AI 对话接口。通过 SSE
技术，前端可以无感知地接收服务端推送的消息，极大提升了用户体验。该设计模式适合现代 AI 驱动的交互式应用开发。

# CustomerSupportAssistant

`CustomerSupportAssistant` 类是一个模拟航空公司 Funnair 客户支持助手的服务组件，基于 Spring AI
框架，集成了自然语言对话、对话记忆、知识检索（RAG）和函数调用等能力。下面详细解析其核心方法 `chat`，并结合整个类的设计思路，整理成博客内容。

---

## 一、类结构与核心能力

- **依赖注入**：通过构造方法注入 `ChatClient.Builder`、`VectorStore`、`ChatMemory`，实现灵活扩展和解耦。
- **AI 聊天能力**：集成 `ChatClient`，支持与用户进行自然语言交互。
- **对话记忆**：通过 `ChatMemory` 记录和检索历史对话，提升上下文理解能力。
- **知识检索（RAG）**：结合 `VectorStore`，实现基于知识库的智能问答。
- **函数调用**：支持 AI 触发后端 Java 方法，完成如查询、改签、取消等业务操作。

---

## 二、chat方法详解

### 方法签名

```java
public Flux<String> chat(String chatId, String userMessageContent)
```

- **参数说明**：
    - `chatId`：会话唯一标识，用于区分不同用户或会话上下文。
    - `userMessageContent`：用户输入的消息内容。

- **返回值**：`Flux<String>`，即响应式流，支持流式返回 AI 回复内容，适合实时对话场景。

### 核心流程

1. **构建 Prompt**  
   使用 `chatClient.prompt()` 创建对话上下文，设置系统参数（如当前日期）、用户消息等。

2. **系统参数注入**  
   通过 `.system(s -> s.param("current_date", LocalDate.now().toString()))` 注入当前日期，便于 AI 生成更贴合实际的回复。

3. **用户消息注入**  
   `.user(userMessageContent)` 将用户输入传递给 AI。

4. **Advisor 配置**  
   `.advisors(a -> a.param(CHAT_MEMORY_CONVERSATION_ID_KEY, chatId).param(CHAT_MEMORY_RETRIEVE_SIZE_KEY, 100))`
    - 绑定会话 ID，实现多轮对话记忆。
    - 设置记忆检索条数（如最近 100 条），提升上下文连贯性。

5. **流式输出**  
   `.stream().content()` 以响应式流的方式返回 AI 回复，前端可实时接收。

---

## 三、类的整体设计亮点

- **系统提示（System Prompt）**：在构造器中通过 `.defaultSystem()` 设定 AI 的角色、语气、业务范围和操作规范，确保回复专业且合规。
- **插件式 Advisor 组合**：支持记忆、知识检索、日志等多种 Advisor，灵活扩展。
- **函数调用（Function Calling）**：通过 `.defaultTools()` 配置可调用的后端方法，AI 可根据业务需求自动触发。
- **响应式编程**：全流程基于 Reactor 的 `Flux`，高并发、低延迟，适合现代 Web 应用。

---

# Spring AI 打造航空公司智能客服：CustomerSupportAssistant 深度解析

在智能客服系统中，如何让 AI 既能“聊天”，又能“懂业务”，还能“记住你说过的话”？本文以 Funnair 航空公司为例，带你深入解析 Spring
AI Alibaba 生态下的智能专家系统核心——`CustomerSupportAssistant`。

### 1. 业务场景

- 支持机票查询、改签、取消等常见业务
- 能理解上下文，避免重复提问
- 可调用后端接口，真正落地业务操作

### 2. 技术架构

- **自然语言对话**：基于大模型，支持多轮交流
- **对话记忆**：每个会话独立记忆，体验更自然
- **知识检索（RAG）**：结合知识库，回答更专业
- **函数调用**：AI 可自动触发后端业务逻辑

### 3. chat方法全流程

| 步骤        | 说明                                                   |
|-----------|------------------------------------------------------|
| 构建 Prompt | 注入系统参数（如当前日期）、用户消息，设定 AI 角色                          |
| 记忆绑定      | 通过 chatId 关联历史对话，检索最近 100 条消息                        |
| 知识检索      | 结合 VectorStore，智能回答业务相关问题                            |
| 函数调用      | 支持 getBookingDetails、changeBooking、cancelBooking 等操作 |
| 流式输出      | 采用响应式流，前端可实时收到 AI 回复                                 |

### 4. 代码片段

CustomerSupportAssistant 初始化方法

```java
/**
 * 构造方法，注入聊天模型构建器、向量知识库和聊天记忆
 * @param modelBuilder 聊天模型构建器
 * @param vectorStore 向量知识库
 * @param chatMemory 聊天记忆
 */
public CustomerSupportAssistant(ChatClient.Builder modelBuilder, VectorStore vectorStore, ChatMemory chatMemory) {

    // 使用建造者模式配置 ChatClient
    this.chatClient = modelBuilder
            // 设置系统提示，定义AI角色、语气、业务范围和操作规范
            .defaultSystem("""
                        您是“Funnair”航空公司的客户聊天支持代理。请以友好、乐于助人且愉快的方式来回复。
                        您正在通过在线聊天系统与客户互动。
                        您能够支持已有机票的预订详情查询、机票日期改签、机票预订取消等操作，其余功能将在后续版本中添加，如果用户问的问题不支持请告知详情。
                          在提供有关机票预订详情查询、机票日期改签、机票预订取消等操作之前，您必须始终从用户处获取以下信息：预订号、客户姓名。
                          在询问用户之前，请检查消息历史记录以获取预订号、客户姓名等信息，尽量避免重复询问给用户造成困扰。
                          在更改预订之前，您必须确保条款允许这样做。
                          如果更改需要收费，您必须在继续之前征得用户同意。
                          使用提供的功能获取预订详细信息、更改预订和取消预订。
                          如果需要，您可以调用相应函数辅助完成。
                          请讲中文。
                          今天的日期是 {current_date}.
                    """)
            // 配置默认顾问（插件），包括聊天记忆、知识检索和日志
            .defaultAdvisors(
                    new PromptChatMemoryAdvisor(chatMemory), // 聊天记忆顾问，支持多轮对话
                    // new VectorStoreChatMemoryAdvisor(vectorStore)), // 可选：基于向量的聊天记忆

                    new QuestionAnswerAdvisor(vectorStore, SearchRequest.builder().topK(4).similarityThresholdAll().build()), // 知识检索顾问，RAG能力
                    // new QuestionAnswerAdvisor(vectorStore, SearchRequest.defaults()
                    //     .withFilterExpression("'documentType' == 'terms-of-service' && region in ['EU', 'US']")), // 可选：带过滤条件的知识检索

                    new SimpleLoggerAdvisor() // 日志顾问，记录对话日志
            )
            // 配置AI可调用的后端函数
            .defaultTools("getBookingDetails", "changeBooking", "cancelBooking")
            // 构建 ChatClient 实例
            .build();
}
```

chat 方法

```java
/**
 * 聊天主方法，处理用户输入并返回AI回复（流式）
 * @param chatId 会话唯一标识
 * @param userMessageContent 用户消息内容
 * @return AI回复的响应式流
 */
public Flux<String> chat(String chatId, String userMessageContent) {

    // 创建对话上下文，注入当前日期、用户消息、会话ID等参数，流式返回AI回复
    return this.chatClient.prompt()
            .system(s -> s.param("current_date", LocalDate.now().toString())) // 注入当前日期参数
            .user(userMessageContent) // 前端请求参数，注入用户消息
            .advisors(
                    a -> a.param(CHAT_MEMORY_CONVERSATION_ID_KEY, chatId)
                            .param(CHAT_MEMORY_RETRIEVE_SIZE_KEY, 100)) // 绑定会话ID，检索最近100条对话
            .stream() // 以流式方式输出
            .content(); // 获取AI回复内容
}

```

### 5. 总结

`CustomerSupportAssistant` 通过 Spring AI 的强大能力，将“懂业务、会聊天、有记忆”的 AI
客服变为现实。无论是企业智能客服，还是自动化业务处理，都能快速落地，极大提升用户体验。

### prompt方法

```java

@Override
public ChatClientRequestSpec prompt() {
    return new DefaultChatClientRequestSpec(this.defaultChatClientRequest);
}
```

这段代码是 `DefaultChatClient` 类中 `prompt()` 方法的实现。其作用和流程如下：

- **方法签名**  
  `@Override public ChatClientRequestSpec prompt()`
  实现了 `ChatClient` 接口的 `prompt()` 方法，用于创建一次新的对话请求规范。

- **核心逻辑**  
  `return new DefaultChatClientRequestSpec(this.defaultChatClientRequest);`
  这里通过调用 `DefaultChatClientRequestSpec` 的拷贝构造方法，基于当前 `DefaultChatClient` 的默认请求规范（
  `defaultChatClientRequest`）创建一个全新的请求规范对象。

- **作用**  
  这样做的好处是：每次调用 `prompt()` 都会返回一个全新的、可链式配置的请求规范对象，避免了线程安全和状态污染问题。你可以在返回的对象上继续配置用户消息、系统参数、advisors、tools
  等内容，最后发起 AI 对话。

默认请求规范的构造器：DefaultChatClientRequestSpec

```java
public DefaultChatClientRequestSpec(ChatModel chatModel, @Nullable String userText,
                                    Map<String, Object> userParams, @Nullable String systemText, Map<String, Object> systemParams,
                                    List<ToolCallback> toolCallbacks, List<Message> messages, List<String> toolNames, List<Media> media,
                                    @Nullable ChatOptions chatOptions, List<Advisor> advisors, Map<String, Object> advisorParams,
                                    ObservationRegistry observationRegistry,
                                    @Nullable ChatClientObservationConvention observationConvention, Map<String, Object> toolContext,
                                    @Nullable TemplateRenderer templateRenderer) {
    // ...
    // 赋值 chatModel
    this.chatModel = chatModel;
    // 赋值 chatOptions，优先用传入的，否则用模型默认的
    this.chatOptions = chatOptions != null ? chatOptions.copy()
            : (chatModel.getDefaultOptions() != null) ? chatModel.getDefaultOptions().copy() : null;

    // 赋值用户消息文本
    this.userText = userText;
    // 复制用户参数
    this.userParams.putAll(userParams);
    // 赋值系统消息文本
    this.systemText = systemText;
    // 复制系统参数
    this.systemParams.putAll(systemParams);

    // 复制工具名称
    this.toolNames.addAll(toolNames);
    // 复制工具回调
    this.toolCallbacks.addAll(toolCallbacks);
    // 复制消息
    this.messages.addAll(messages);
    // 复制媒体资源
    this.media.addAll(media);
    // 复制顾问
    this.advisors.addAll(advisors);
    // 复制顾问参数
    this.advisorParams.putAll(advisorParams);
    // 赋值观测注册器
    this.observationRegistry = observationRegistry;
    // 赋值观测约定，优先用传入的，否则用默认
    this.observationConvention = observationConvention != null ? observationConvention
            : DEFAULT_CHAT_CLIENT_OBSERVATION_CONVENTION;
    // 复制工具上下文
    this.toolContext.putAll(toolContext);
    // 赋值模板渲染器，优先用传入的，否则用默认
    this.templateRenderer = templateRenderer != null ? templateRenderer : DEFAULT_TEMPLATE_RENDERER;
}

```

对应变量信息如下：

| 变量名                   | 说明                           |
|-----------------------|------------------------------|
| chatModel             | 聊天模型实例，AI 对话的核心引擎            |
| userText              | 用户输入的消息文本                    |
| userParams            | 用户参数，键值对形式，支持自定义变量           |
| systemText            | 系统消息文本（如系统提示、角色设定）           |
| systemParams          | 系统参数，键值对形式，支持自定义变量           |
| toolCallbacks         | 工具回调列表，AI 可调用的后端函数实现         |
| messages              | 聊天消息历史，支持多轮对话                |
| toolNames             | 工具名称列表，AI 可用的工具标识            |
| media                 | 媒体资源列表，支持图片、音频等多模态输入         |
| chatOptions           | 聊天参数（如温度、最大长度等），可选           |
| advisors              | 顾问列表，扩展对话能力（如记忆、知识检索、日志等）    |
| advisorParams         | 顾问参数，键值对形式，传递给各类顾问           |
| observationRegistry   | 观测注册器，用于埋点、监控等               |
| observationConvention | 观测约定，定制观测行为，若未传入则用默认         |
| toolContext           | 工具上下文，传递给工具的额外参数             |
| templateRenderer      | 模板渲染器，支持 prompt 模板化，若未传入则用默认 |

### system方法

该方法 `system(Consumer<PromptSystemSpec> consumer)` 用于配置系统消息的文本和参数。它接收一个
`Consumer<PromptSystemSpec>` 类型的参数，允许调用者通过回调的方式灵活地设置系统消息的内容和相关参数。

首先，方法通过 `Assert.notNull(consumer, "consumer cannot be null");` 确保传入的 `consumer` 不为 `null`，以避免空指针异常。

接着，创建了一个 `DefaultPromptSystemSpec` 实例 `systemSpec`，这是一个用于存储系统消息文本和参数的对象。

```java
var systemSpec = new DefaultPromptSystemSpec();
```

然后，调用 `consumer.accept(systemSpec);`，将 `systemSpec` 传递给调用者提供的 `Consumer`，以便调用者对其进行配置，例如设置系统消息文本或添加参数。

配置完成后，方法检查 `systemSpec` 中是否有设置的文本。如果有，则将其赋值给当前对象的 `systemText`；否则，保留原有的
`systemText` 值：

```java
this.systemText =StringUtils.

hasText(systemSpec.text())?systemSpec.

text() :this.systemText;
```

最后，将 `systemSpec` 中的参数合并到当前对象的 `systemParams` 中：

```java
this.systemParams.putAll(systemSpec.params());
```

方法返回当前对象 `this`，支持链式调用。通过这种设计，调用者可以灵活地配置系统消息，同时保持代码的简洁性和可读性。

在这里设置的两个系统变量如下：

- 系统参数为current_date -> 2025-05-21
- 系统文本： 您是“Funnair”航空公司的客户聊天支持代理。请以友好、乐于助人且愉快的方式来回复。
  您正在通过在线聊天系统与客户互动。
  您能够支持已有机票的预订详情查询、机票日期改签、机票预订取消等操作，其余功能将在后续版本中添加，如果用户问的问题不支持请告知详情。
  在提供有关机票预订详情查询、机票日期改签、机票预订取消等操作之前，您必须始终从用户处获取以下信息：预订号、客户姓名。
  在询问用户之前，请检查消息历史记录以获取预订号、客户姓名等信息，尽量避免重复询问给用户造成困扰。
  在更改预订之前，您必须确保条款允许这样做。
  如果更改需要收费，您必须在继续之前征得用户同意。
  使用提供的功能获取预订详细信息、更改预订和取消预订。
  如果需要，您可以调用相应函数辅助完成。
  请讲中文。
  今天的日期是 {current_date}.

### advisors方法

advisors 是一个用于存放 Advisor（顾问）对象的列表，类型为 List<Advisor>。在 Spring AI 的对话系统中，Advisor
负责在对话流程中插入自定义的逻辑，比如记忆管理、知识检索、日志记录等。你可以通过添加不同的 Advisor，扩展和定制 AI
聊天的行为。例如，可以实现对话记忆、RAG 检索、日志埋点等功能。

该方法 `advisors(Consumer<ChatClient.AdvisorSpec> consumer)` 用于通过回调的方式动态配置顾问（Advisor）及其相关参数。
它接收一个 `Consumer<ChatClient.AdvisorSpec>` 类型的参数，允许调用者通过提供的回调函数对顾问进行灵活的设置。

首先，方法通过 `Assert.notNull(consumer, "consumer cannot be null");` 确保传入的 `consumer` 不为 `null`，以避免空指针异常。

接着，创建了一个 `DefaultAdvisorSpec` 实例 `advisorSpec`，这是一个用于存储顾问及其参数的对象。

```java
var advisorSpec = new DefaultAdvisorSpec();
```

然后，调用 `consumer.accept(advisorSpec);`，将 `advisorSpec` 传递给调用者提供的 `Consumer`，以便调用者对其进行配置，例如添加顾问或设置参数。

配置完成后，方法将 `advisorSpec` 中的参数合并到当前对象的 `advisorParams` 中：

```java
this.advisorParams.putAll(advisorSpec.getParams());
```

同时，将 `advisorSpec` 中的顾问添加到当前对象的 `advisors` 列表中：

```java
this.advisors.addAll(advisorSpec.getAdvisors());
```

最后，方法返回当前对象 `this`，支持链式调用。这种设计使得调用者可以通过回调灵活地配置顾问，同时保持代码的简洁性和可读性。

这里设置了两个顾问参数：

- chat_memory_response_size -> 100
- chat_memory_conversation_id -> 5d7444d3-c21f-4830-8bb0-f6b56c2cf637

这里提供的顾问advisors有三个如下所示：（在初始化CustomerSupportAssistant时候进行了设置）

- PromptChatMemoryAdvisor：用于对话记忆管理。它会记录和检索用户与 AI 之间的历史消息，帮助 AI 记住上下文，实现多轮对话的连贯性。例如，可以根据会话
  ID 关联历史消息，避免重复提问。
- QuestionAnswerAdvisor：实现知识检索（RAG）。当用户提问时，它会从外部知识库（如向量数据库）中检索相关内容，辅助 AI
  回答用户问题，提升回答的准确性和丰富性。
- SimpleLoggerAdvisor：用于日志记录。它会记录对话过程中的关键信息，便于后续分析、调试或审计，帮助开发者了解对话流程和系统行为

### stream方法

```java
public StreamResponseSpec stream() {
    // 构建顾问链（Advisor Chain），包含所有需要在流式请求中依次执行的顾问逻辑（如记忆、检索、日志等），
    // 并在链尾自动加入 ChatModelCallAdvisor 和 ChatModelStreamAdvisor，确保最终能调用底层大模型。
    BaseAdvisorChain advisorChain = buildAdvisorChain();

    // 将当前请求规范（DefaultChatClientRequestSpec）转换为 AdvisedRequest，
    // 再用模板渲染器（templateRenderer）生成标准的 ChatClientRequest，
    // 并结合顾问链、观测注册表和观测约定，创建并返回一个流式响应规范（DefaultStreamResponseSpec）。
    // 这个对象负责后续的流式响应处理（如 SSE、WebSocket）。
    return new DefaultStreamResponseSpec(
            toAdvisedRequest(this).toChatClientRequest(this.templateRenderer),
            advisorChain,
            observationRegistry,
            observationConvention
    );
}
```

**讲解：**  
该方法用于生成一个流式对话响应规范（StreamResponseSpec），以支持 AI 聊天的流式输出。

1. 首先通过 `buildAdvisorChain()` 构建顾问链，确保所有自定义逻辑（如对话记忆、知识检索、日志等）都能在请求处理过程中被依次应用。
2. 然后将当前请求对象转换为标准的 `ChatClientRequest`，并结合顾问链、观测注册表（用于监控和埋点）以及观测约定，创建
   `DefaultStreamResponseSpec`。
3. 最终返回的对象可用于获取流式响应内容，实现边生成边推送的对话体验。

#### buildAdvisorChain 方法

`buildAdvisorChain` 方法的主要作用是构建一个用于对话请求处理的“顾问链”（Advisor Chain）。在 Spring AI
的对话系统中，顾问（Advisor）是一种拦截器机制，可以在请求处理流程中插入自定义逻辑，比如对话记忆、知识检索、日志记录等。通过将多个顾问按顺序组合成链式结构，可以灵活地扩展和管理对话的处理流程。

在该方法中，首先会将两个核心的模型调用顾问 `ChatModelCallAdvisor` 和 `ChatModelStreamAdvisor`
添加到顾问列表的末尾。这两个顾问分别负责最终将请求同步或流式地发送到底层大模型（如
OpenAI、阿里云等），确保无论前面有多少自定义顾问，最终都能正确地完成模型调用。

随后，方法通过 `DefaultAroundAdvisorChain.builder` 创建一个新的顾问链对象，并将当前所有的顾问（包括自定义和系统自动添加的）依次压入链中。同时，还会设置模板渲染器（
`templateRenderer`），用于对请求中的模板内容进行渲染处理。最终，构建好的 `BaseAdvisorChain` 对象会被返回，用于后续的请求处理流程。

这种设计模式极大地提升了对话系统的可扩展性和灵活性，开发者可以根据实际需求自由插拔各种顾问，实现复杂的业务逻辑和上下文管理。

示例代码及详细注释如下：

```java
/**
 * 构建对话请求处理的顾问链（Advisor Chain）。
 * 该链条会依次应用所有自定义和系统内置的顾问，确保请求最终能被正确处理并发送到底层大模型。
 *
 * @return BaseAdvisorChain 顾问链对象，用于后续对话请求的处理流程。
 */
private BaseAdvisorChain buildAdvisorChain() {
    // 在顾问列表末尾添加 ChatModelCallAdvisor，负责同步调用底层大模型，生成完整回复。
    this.advisors.add(ChatModelCallAdvisor.builder().chatModel(this.chatModel).build());
    // 在顾问列表末尾添加 ChatModelStreamAdvisor，负责流式调用底层大模型，实现边生成边推送。
    this.advisors.add(ChatModelStreamAdvisor.builder().chatModel(this.chatModel).build());

    // 使用 DefaultAroundAdvisorChain 构建顾问链，将所有顾问按顺序压入链中，并设置模板渲染器。
    return DefaultAroundAdvisorChain.builder(this.observationRegistry)
            .pushAll(this.advisors)           // 压入所有顾问（自定义+系统自动添加）
            .templateRenderer(this.templateRenderer) // 设置模板渲染器
            .build();                         // 构建并返回顾问链对象
}
```

通过该方法，开发者可以灵活地扩展对话处理流程，实现如上下文记忆、知识检索、日志埋点等多种功能，并保证最终请求能够顺利到达底层大模型，获得期望的响应。

ChatModelCallAdvisor 和 ChatModelStreamAdvisor 都是 Spring AI 对话系统中的“顾问”组件（Advisor），用于在对话流程中拦截和处理请求，具体作用如下：

- ChatModelCallAdvisor：用于处理普通（非流式）对话请求。当用户发送消息后，经过一系列自定义的 Advisor 处理，最终由
  ChatModelCallAdvisor 调用底层的大模型（如 OpenAI、阿里云等）生成完整的回复结果。它是同步、一次性返回全部内容的调用。
- ChatModelStreamAdvisor：用于处理流式对话请求。当对话采用流式（Streaming）方式时，ChatModelStreamAdvisor
  负责将用户请求传递给底层大模型，并以流的形式逐步返回生成的内容（如 SSE、WebSocket 场景）。这样可以让用户边看边等，提升交互体验。

这两个 Advisor 通常作为 Advisor 链的最后一环，确保最终请求能被正确地发送到大模型并获得响应

这里的模版渲染器templateRenderer类型为： StTemplateRenderer：
StTemplateRenderer 是 Spring AI 框架中的一个核心组件，它实现了 TemplateRenderer 接口，专门用于处理 AI
对话系统中的模板渲染需求。作为默认的模板渲染实现，它在整个对话请求处理流程中发挥着重要作用

DefaultAroundAdvisorChain构造器

#### `DefaultAroundAdvisorChain` 构造方法的详细解析

`DefaultAroundAdvisorChain` 构造方法是 Spring AI 框架中顾问链的核心初始化入口。下面将对构造方法的每一行代码进行详细解析，以理解其设计思想和实现细节。

```java
/**
 * DefaultAroundAdvisorChain 构造方法
 *
 * 该构造方法负责初始化一个完整的顾问链，提供 AI 交互过程中的拦截处理能力。
 * 顾问链采用责任链模式，支持同步和流式两种交互模式的拦截器队列管理。
 *
 * @param observationRegistry 观测注册表，提供全链路监控和指标收集能力
 * @param templateRenderer 模板渲染器，负责处理模板内容，支持为空（会使用默认实现）
 * @param callAroundAdvisors 同步调用顾问队列，按优先级处理同步请求
 * @param streamAroundAdvisors 流式调用顾问队列，按优先级处理流式请求
 */
DefaultAroundAdvisorChain(ObservationRegistry observationRegistry, @Nullable TemplateRenderer templateRenderer,
                          Deque<CallAroundAdvisor> callAroundAdvisors, Deque<StreamAroundAdvisor> streamAroundAdvisors) {
    //...
    // 成员变量初始化部分：设置实例属性
    // 设置观测注册表，用于后续的链路监控和性能指标收集
    this.observationRegistry = observationRegistry;
    // 设置模板渲染器，如果传入为空则使用默认的 StTemplateRenderer 实现
    // 这种设计既提供了灵活性（允许自定义），又确保了系统的健壮性（总有可用实现）
    this.templateRenderer = templateRenderer != null ? templateRenderer : DEFAULT_TEMPLATE_RENDERER;
    // 设置同步顾问队列，用于处理同步请求的拦截和处理逻辑
    this.callAroundAdvisors = callAroundAdvisors;
    // 设置流式顾问队列，用于处理流式请求的拦截和处理逻辑
    this.streamAroundAdvisors = streamAroundAdvisors;
    // 创建同步顾问队列的不可变快照，用于后续查询和调试
    // 使用 List.copyOf 确保返回的是不可变集合，防止外部修改内部状态
    this.originalCallAdvisors = List.copyOf(callAroundAdvisors);
    // 创建流式顾问队列的不可变快照，同样用于后续查询和调试
    // 这种设计保留了原始配置，即使工作队列在处理中被修改，原始状态仍可访问
    this.originalStreamAdvisors = List.copyOf(streamAroundAdvisors);
}
```
 
### content方法


`content()` 方法是 Spring AI 框架中流式响应处理的关键方法，负责从大语言模型的流式响应中提取纯文本内容并以 Flux 流的形式返回。下面是该方法的完整解析：

```java
@Override
public Flux<String> content() {
   // @formatter:off
   return doGetObservableFluxChatResponse(this.request)
     // 从 ChatClientResponse 中提取 ChatResponse 对象，忽略可能的 null 值
     // 这确保了流中只包含有效的响应对象，增强了处理链的稳定性
     .mapNotNull(ChatClientResponse::chatResponse)
     // 将每个 ChatResponse 对象映射为其中包含的文本内容
     // 使用链式路径验证确保安全地处理可能的空值情况
     .map(r -> {
      // 检查响应结构完整性，返回空字符串代替 null，避免流中断
      if (r.getResult() == null || r.getResult().getOutput() == null
        || r.getResult().getOutput().getText() == null) {
       return "";
      }
      // 从完整响应中提取纯文本内容，这是大语言模型生成的实际文本部分
      return r.getResult().getOutput().getText();
     })
     // 过滤掉空字符串，只保留有实际内容的文本片段
     // 使用 SpringFramework 的工具类确保统一的空值检查行为
     .filter(StringUtils::hasLength);
   // @formatter:on
}
```

#### `doGetObservableFluxChatResponse` 方法详解

```java
private Flux<ChatClientResponse> doGetObservableFluxChatResponse(ChatClientRequest chatClientRequest) {
   // 使用deferContextual创建响应式流，它允许访问上游的Reactor上下文，实现跨组件的数据传递
   // 这种延迟创建方式确保了流的懒加载特性，只有订阅时才会执行实际操作
   return Flux.deferContextual(contextView -> {

    // 创建观测上下文，包含请求信息、流式顾问列表和流式标志
    // 这个上下文对象将被传递给观测工具，用于记录和监控整个流程
    ChatClientObservationContext observationContext = ChatClientObservationContext.builder()
     .request(chatClientRequest)
     .advisors(advisorChain.getStreamAdvisors())
     .stream(true)
     .build();

    // 创建观测实例，使用配置的或默认的观测约定
    // 观测实例将记录流式请求的性能指标、执行状态等信息
    Observation observation = ChatClientObservationDocumentation.AI_CHAT_CLIENT.observation(
      observationConvention, DEFAULT_CHAT_CLIENT_OBSERVATION_CONVENTION, () -> observationContext,
      observationRegistry);

    // 设置父观测实例并启动当前观测
    // 如果上下文中存在父观测，则建立关联，形成观测树，支持分布式追踪
    observation.parentObservation(contextView.getOrDefault(ObservationThreadLocalAccessor.KEY, null))
     .start();

    // @formatter:off
    // 应用顾问链，处理流式请求
    // 通过advisorChain.nextStream方法启动整个责任链模式的处理过程
    // 顾问链最终会以ChatModelStreamAdvisor结束，它负责调用实际的AI模型
    return advisorChain.nextStream(chatClientRequest)
      // 注册错误处理器，将错误传播到观测系统
      // 确保任何异常都被正确记录，便于问题诊断
      .doOnError(observation::error)
      // 注册完成处理器，无论流以何种方式终止都会停止观测
      // 这确保了资源的正确释放和指标的完整性
      .doFinally(s -> observation.stop())
      // 将当前观测写入上下文，使下游操作可以访问
      // 这种上下文传播机制是实现全链路追踪的关键
      .contextWrite(ctx -> ctx.put(ObservationThreadLocalAccessor.KEY, observation));
    // @formatter:on
   });
  }
```

这个方法是Spring AI框架中流式响应的核心基础设施，它通过响应式编程和可观测性的结合，为大语言模型的流式交互提供了完整的处理框架。方法采用延迟创建模式，确保了资源的高效利用；通过观测机制，实现了全链路的性能监控和问题诊断；而责任链模式则提供了灵活的请求拦截和处理能力。这种设计使开发者能够构建高性能、可监控、可扩展的AI交互应用。

这个方法通过函数式编程链式调用实现了流式处理的核心逻辑：先调用内部方法获取带观测能力的响应流，然后提取响应对象，再从响应对象中安全地提取文本内容，最后过滤掉空值。整个过程保持了响应式编程的非阻塞特性，同时确保了处理过程的健壮性。

这是流式 AI 交互的重要部分，使客户端能够即时接收和处理模型生成的内容片段，而不必等待完整响应，从而支持打字机效果、实时翻译和流式内容生成等应用场景。


#### Flux.deferContextual 方法详解

`deferContextual` 方法是 Reactor 中的关键操作符，用于延迟创建响应式流，并能够在创建时访问当前的上下文信息。

```java
public static <T> Flux<T> deferContextual(
    Function<ContextView, ? extends Publisher<T>> contextualPublisherFactory)
```

## 核心功能

1. **延迟创建**：与 `defer()` 类似，只有在订阅发生时才会创建实际的 Publisher
2. **上下文感知**：能够访问当前订阅者的上下文信息来定制流的行为
3. **动态构建**：可以根据上下文中的信息动态选择或配置数据源

## 与普通 defer 的区别

普通的 `defer()` 方法接收一个简单的 `Supplier`，而 `deferContextual()` 接收一个函数，该函数能够访问当前的上下文信息：

```java
// 普通 defer 无法访问上下文
Flux.defer(() -> Flux.just("hello"));

// deferContextual 可以访问上下文
Flux.deferContextual(ctx -> {
    String user = ctx.get("user");
    return Flux.just("欢迎, " + user);
});
```

## 实用示例

### 基于用户角色返回不同数据

```java
Flux<String> dataStream = Flux.deferContextual(ctx -> {
    String role = ctx.getOrDefault("role", "guest");
    
    if ("admin".equals(role)) {
        return Flux.just("敏感数据1", "敏感数据2", "敏感数据3");
    } else {
        return Flux.just("普通数据A", "普通数据B");
    }
})
.contextWrite(Context.of("role", "admin"));  // 设置上下文

dataStream.subscribe(System.out::println);
// 输出: 敏感数据1, 敏感数据2, 敏感数据3
```

### 多语言支持示例

```java
Flux<String> messages = Flux.deferContextual(ctx -> {
    String language = ctx.getOrDefault("language", "zh_CN");
    
    Map<String, List<String>> translations = Map.of(
        "en_US", List.of("Hello", "Welcome"),
        "zh_CN", List.of("你好", "欢迎"),
        "ja_JP", List.of("こんにちは", "ようこそ")
    );
    
    return Flux.fromIterable(translations.getOrDefault(language, translations.get("zh_CN")));
});

// 使用日语上下文订阅
messages.contextWrite(Context.of("language", "ja_JP"))
        .subscribe(System.out::println);
// 输出: こんにちは, ようこそ
```

## 工作原理

每当发生订阅时，Reactor 会：

1. 获取当前的上下文信息(`ContextView`)
2. 将上下文传递给工厂函数
3. 使用返回的 Publisher 执行实际的订阅

这种模式使开发者能够创建真正的动态响应式流，根据调用环境、用户身份或其他上下文参数来调整流的行为。