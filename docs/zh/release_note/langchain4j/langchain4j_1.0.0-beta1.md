# langchain4j 1.0.0-beta1
### 为什么要使用langchain4j

在当今这个信息爆炸的时代，开发者们面临着一个巨大的挑战：如何快速而高效地构建智能应用程序。langchain4j的出现，正是为了应对这一挑战。它不仅提供了强大的功能，还能帮助开发者在复杂的环境中游刃有余。然而，随着技术的不断演进，许多开发者却发现，传统的工具和框架已经无法满足他们的需求。langchain4j的灵活性和可扩展性，恰恰解决了这一矛盾，使得开发者能够在快速变化的市场中保持竞争力。

### langchain4j是什么

langchain4j是一个开源的Java库，旨在简化构建基于语言模型的应用程序的过程。它提供了一系列工具和API，使开发者能够轻松集成和使用各种语言模型，支持多种数据源和处理方式。通过langchain4j，开发者可以快速构建聊天机器人、文本生成器等智能应用，提升开发效率。

### 入门示例

想象一下，你是一名开发者，正在为一家在线客服公司构建一个智能聊天机器人。使用langchain4j，你可以轻松实现这一目标。首先，你需要在项目中引入langchain4j的依赖。接下来，使用以下代码创建一个简单的聊天模型：

```java
ChatLanguageModel chatModel = new ChatLanguageModel();
String response = chatModel.chat("你好，今天的天气怎么样？");
System.out.println(response);
```

通过这段代码，你的聊天机器人就能快速响应用户的询问，提供实时的信息。这只是langchain4j的一个简单示例，实际上它的功能远不止于此。

### langchain4j 1.0.0-beta1版本更新了什么

在1.0.0-beta1版本中，langchain4j进行了多项重要更新，包括：弃用旧的生成API，推出新的聊天API；开始将模块与OkHttp客户端解耦，提升了灵活性；支持OpenAI的O1/O3模型和音频输入；增强了Azure OpenAI的结构化输出支持；并引入了可定制的HTTP客户端。这些更新将极大地提升开发者的使用体验。

### 更新日志

## 公告
- 我们将弃用旧的 `ChatLanguageModel.generate(...)` 和 `StreamingChatLanguageModel.generate(...)` API，转而使用新的 `ChatLanguageModel.chat(...)` 和 `StreamingChatLanguageModel.chat(...)` API。我们计划在接下来的版本中完全迁移所有聊天模型集成到新的 `chat()` API。如果您有任何疑虑或意见，请与我们联系。
- 我们已开始将模块与OkHttp客户端解耦。Ollama是此次发布中第一个迁移的模块。当使用 `langchain4j-ollama` 依赖时，`Ollama*Model` 现在默认使用JDK的 `HttpClient`。当使用 `langchain4j-ollama-spring-boot-starter` 依赖时，`Ollama*Model` 现在使用Spring的 `RestClient`。此更改减少了不必要的依赖，启用了开箱即用的可观察性，并使自定义支持的HTTP客户端或集成其他HTTP客户端变得简单。我们计划在未来的版本中迁移其他几个模块（如OpenAI、Anthropic、Mistral、Hugging Face等）。如果您有任何疑虑或意见，请与我们联系。

## 显著变化
- OpenAI:
  - 确保支持O1/O3模型。
  - 支持音频输入。
- Azure OpenAI: 支持流模式下的结构化输出。
- AWS Bedrock:
  - 支持对话API。
  - 支持Cohere嵌入。
- 可定制的HTTP客户端。
- 引入模型上下文协议。
- 改进错误处理和集成测试。

## 重大变化
- 移除了 `OpenAiChatModel` 和 `OpenAiStreamingChatModel` 的默认值。
- 将 `Document` 和 `Content` 转换为接口。
- 在流式传输中发生错误时，不再传播部分响应。

## 潜在重大变化
- Ollama: 从OkHttp迁移到JDK的 `HttpClient` 和Spring的 `RestClient`。
- Chroma: 从Gson迁移到Jackson。
- Vespa: 从Gson迁移到Jackson。

## Spring Boot集成中的更新
- 详见 [Spring Boot更新日志](https://github.com/langchain4j/langchain4j-spring/releases/tag/1.0.0-beta1)。

## 其他变化
- 更新了多个依赖项，修复了若干bug，改进了文档。

### 总结

在1.0.0-beta1版本中，langchain4j进行了多项重要更新，旨在提升开发者的使用体验和灵活性。这些更新不仅包括API的改进，还涵盖了对多个模块的解耦和增强功能的支持，为构建基于语言模型的应用程序提供了更强大的工具。