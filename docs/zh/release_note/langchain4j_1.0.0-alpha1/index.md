# langchain4j 1.0.0-alpha1
### 为什么要使用langchain4j

在当今快速发展的技术世界中，开发者面临着无数选择，如何在众多工具中找到最适合自己的解决方案？langchain4j的出现正是为了解决这一矛盾。它不仅提供了强大的功能，还能帮助开发者在构建复杂的应用时，简化流程、提高效率。想象一下，您在开发过程中遇到的种种挑战，langchain4j就像一位经验丰富的向导，带您走出迷雾，找到最佳路径。

### langchain4j是什么

langchain4j是一个开源项目，旨在为开发者提供一个强大的框架，以便于构建基于语言模型的应用。它支持多种语言模型的集成，允许开发者轻松地创建和管理复杂的对话系统、文本生成工具等。通过其灵活的架构，开发者可以快速构建出符合需求的应用程序。

### 入门示例

假设您是一名开发者，正在为一家在线客服公司构建一个智能聊天机器人。使用langchain4j，您可以轻松集成OpenAI的聊天模型。只需几行代码，您就可以创建一个能够理解用户问题并提供实时反馈的聊天机器人。以下是一个简单的开发示例：

```java
ChatLanguageModel chatModel = new ChatLanguageModel();
String response = chatModel.chat("你好，今天的天气如何？");
System.out.println(response);
```

在这个场景中，您可以看到langchain4j如何帮助您快速实现复杂的功能，提升用户体验。

### langchain4j 1.0.0-alpha1版本更新了什么

langchain4j 1.0.0-alpha1版本带来了多个重要更新，包括全新的ChatLanguageModel API，初步实现的模型上下文协议（MCP）客户端和工具提供者，Azure OpenAI支持结构化输出，以及对Kotlin的初步支持。此外，更新还增强了对嵌入存储和元数据处理的支持，提升了整体性能和稳定性。

### 更新日志

## 通告
- 在开发LangChain4j超过1.5年后，我们期待在2025年第一季度发布稳定的1.0.0版本。请提供您的反馈，这将帮助我们优先处理1.0.0版本中需要解决的问题和功能。感谢您的意见！
- 此次发布包括全新改版的ChatLanguageModel API。目前，只有OpenAI聊天模型完全支持新API的所有功能。然而，现有的ChatLanguageModel.generate(...) API的功能已被新API ChatLanguageModel.chat(...)完全支持。如果您直接使用ChatLanguageModel.generate(...)或StreamingChatLanguageModel.generate(...)方法（例如，不通过AI服务），请尝试并提供反馈。我们期待在收到反馈后尽快全面覆盖所有其他LLM提供者的集成。

## 重要更新
- 新的ChatLanguageModel API。
- 模型上下文协议：MCP客户端和工具提供者的初步实现。
- Azure OpenAI：支持结构化输出并升级到1.0.0-beta.13。
- Ollama：支持结构化输出和流模式下的工具。
- Kotlin：对Kotlin的初步支持。
- 结构化输出：在JSON模式中支持anyOf。
- RAG：为检索的内容添加元数据（分数、重排分数和嵌入ID）。
- EmbeddingStore：支持addAll(ids, embeddings, segments)。
- MongoDB：支持元数据过滤和嵌入的移除，以及各种升级。

## 重大变更
- 修复Azure OpenAI：在聊天模型中传播所有异常。

## Spring Boot集成中的更新
- [Spring Boot集成更新链接](https://github.com/langchain4j/langchain4j-spring/releases/tag/1.0.0-alpha1)

## 其他更新
- 修复URI解析问题。
- 升级Kotlin版本到2.0.21，清理依赖项，升级Milvus和Guava。
- 更新README.md以反映新集成和社区库的信息。

### 总结

在langchain4j 1.0.0-alpha1版本中，开发团队通过引入新的API、增强功能和修复问题，显著提升了框架的灵活性和稳定性。这些更新不仅为开发者提供了更强大的工具，也为未来的版本奠定了坚实的基础。