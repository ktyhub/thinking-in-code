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
            .user(userMessageContent) // 注入用户消息
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

## prompt方法

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
 



```java
public DefaultChatClientRequestSpec(ChatModel chatModel, @Nullable String userText,
				Map<String, Object> userParams, @Nullable String systemText, Map<String, Object> systemParams,
				List<ToolCallback> toolCallbacks, List<Message> messages, List<String> toolNames, List<Media> media,
				@Nullable ChatOptions chatOptions, List<Advisor> advisors, Map<String, Object> advisorParams,
				ObservationRegistry observationRegistry,
				@Nullable ChatClientObservationConvention observationConvention, Map<String, Object> toolContext,
				@Nullable TemplateRenderer templateRenderer) {

			Assert.notNull(chatModel, "chatModel cannot be null");
			Assert.notNull(userParams, "userParams cannot be null");
			Assert.notNull(systemParams, "systemParams cannot be null");
			Assert.notNull(toolCallbacks, "toolCallbacks cannot be null");
			Assert.notNull(messages, "messages cannot be null");
			Assert.notNull(toolNames, "toolNames cannot be null");
			Assert.notNull(media, "media cannot be null");
			Assert.notNull(advisors, "advisors cannot be null");
			Assert.notNull(advisorParams, "advisorParams cannot be null");
			Assert.notNull(observationRegistry, "observationRegistry cannot be null");
			Assert.notNull(toolContext, "toolContext cannot be null");

			this.chatModel = chatModel;
			this.chatOptions = chatOptions != null ? chatOptions.copy()
					: (chatModel.getDefaultOptions() != null) ? chatModel.getDefaultOptions().copy() : null;

			this.userText = userText;
			this.userParams.putAll(userParams);
			this.systemText = systemText;
			this.systemParams.putAll(systemParams);

			this.toolNames.addAll(toolNames);
			this.toolCallbacks.addAll(toolCallbacks);
			this.messages.addAll(messages);
			this.media.addAll(media);
			this.advisors.addAll(advisors);
			this.advisorParams.putAll(advisorParams);
			this.observationRegistry = observationRegistry;
			this.observationConvention = observationConvention != null ? observationConvention
					: DEFAULT_CHAT_CLIENT_OBSERVATION_CONVENTION;
			this.toolContext.putAll(toolContext);
			this.templateRenderer = templateRenderer != null ? templateRenderer : DEFAULT_TEMPLATE_RENDERER;
		}

```