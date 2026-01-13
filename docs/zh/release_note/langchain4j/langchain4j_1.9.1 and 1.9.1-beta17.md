# langchain4j 1.9.1 and 1.9.1-beta17
### 为什么要使用langchain4j

想象一下，你手中握有当今最强大的AI模型，但它却像一位沉睡的巨人，无法理解你的业务数据，也无法执行你精心设计的任务流程。你不得不花费数周甚至数月，在复杂的API调用、上下文管理、外部工具集成和提示词工程中挣扎。这是每一位开发者与AI力量之间的核心矛盾：我们拥有前所未有的智能，却深陷于将其落地应用的繁琐泥潭。

而这就是使用 Langchain4j 的理由。它如同一把精心锻造的钥匙，旨在瞬间解锁这种矛盾。它不是为了增加另一层抽象，而是为了拆除那些阻碍你与AI直接对话的高墙。通过提供一套直观、统一且符合Java开发者直觉的组件，它将构建AI驱动应用从“概念验证的炼狱”转变为“高效生产的流水线”。你可以告别那些脆弱的胶水代码，转而专注于创造真正的价值——构建能够理解、推理并行动的智能应用。选择 Langchain4j，意味着你选择不再与复杂性搏斗，而是开始驾驭智能本身。

### langchain4j是什么

Langchain4j 是一个专为 Java 开发者设计的 AI 应用开发框架。它的核心使命是将大型语言模型（LLM）的强大能力轻松集成到你的Java应用程序中。你可以把它想象成一个功能丰富的“工具箱”和一套清晰的“设计蓝图”，它帮助你处理与AI交互时的各种常见且复杂的任务，例如：管理对话历史（记忆）、精准地构建提示词、无缝连接外部工具和数据源（如你的文档、数据库），以及编排复杂的多步骤推理流程（智能体）。简而言之，它让在Java应用中添加智能变得像使用其他主流库一样简单直接。

### 入门示例

**真实场景：构建一个智能客户支持助手**

假设我们正在为一个电商平台开发一个内部客服助手，它能快速从产品手册（PDF文件）中查找信息来回答员工的问题。

**开发示例：**

1.  **添加依赖**：首先，在你的 Maven 或 Gradle 项目中引入 Langchain4j 及相关组件的依赖。
2.  **核心代码**：

```java
// 1. 创建文档嵌入模型（用于理解文档内容，这里使用本地嵌入模型）
EmbeddingModel embeddingModel = new AllMiniLmL6V2EmbeddingModel();

// 2. 创建并加载文档存储（将产品手册PDF嵌入并存储以备检索）
EmbeddingStore<TextSegment> embeddingStore = new InMemoryEmbeddingStore<>();
Document document = loadDocument(“path/to/product_manual.pdf”); // 加载PDF
DocumentSplitter splitter = new DocumentByParagraphSplitter();
List<TextSegment> segments = splitter.split(document);
embeddingStore.addAll(embeddingModel.embedAll(segments).content(), segments);

// 3. 创建检索器（用于从文档库中找到最相关的片段）
Retriever<TextSegment> retriever = embeddingStore.asRetriever();

// 4. 创建对话链（将检索到的信息注入给大模型，生成友好回答）
ChatLanguageModel model = OpenAiChatModel.withApiKey(“your-api-key”);
Assistant assistant = AiServices.builder(Assistant.class)
        .chatLanguageModel(model)
        .retriever(retriever) // 关键：为助手注入“知识”
        .build();

// 定义助手接口
interface Assistant {
    String answer(String userMessage);
}

// 5. 使用助手
String answer = assistant.answer(“用户问：旗舰手机X的防水等级是多少？”);
System.out.println(answer); // 助手会基于产品手册内容生成回答
```

在这个示例中，Langchain4j 帮助我们轻松完成了文档加载、分块、向量化存储、语义检索，并将检索到的上下文与LLM的对话能力无缝结合，快速构建了一个基于知识的问答助手。

### langchain4j 1.9.1 and 1.9.1-beta17版本更新了什么

根据官方发布日志，本次更新主要包含以下内容：
1.  文档更新至 1.9.0 和 1.9.0-beta16 版本。
2.  将开发版本号更新为 1.10.0-SNAPSHOT 和 1.10.0-beta17-SNAPSHOT。
3.  在附加材料中新增了经审核的 LangChain4j 研讨会内容。
4.  更新了 Gemini 批处理功能的文档。
5.  修复了智能体无输出时可能引发空指针异常（NPE）的问题，并默认禁用了 `GlobalTestRetryExtension` 及移除了相关配置文件。

### 更新日志
#### 更新内容
*   文档：将版本更新至 1.9.0 和 1.9.0-beta16。
*   将版本更新至 1.10.0-SNAPSHOT 和 1.10.0-beta17-SNAPSHOT。
*   在附加材料中新增了 LangChain4j 研讨会内容。
*   更新了 Gemini 批处理相关文档。
*   修复了当智能体没有输出时可能引发空指针异常的问题。
*   默认禁用了 `GlobalTestRetryExtension` 并移除了 junit-platform.properties 文件。

**完整更新日志**：[1.9.0...1.9.1](https://github.com/langchain4j/langchain4j/compare/1.9.0...1.9.1)

### 总结概括
本次更新是一次以维护和优化为主的迭代，重点修复了关键的空指针异常问题，并同步更新了项目文档、教程材料及版本号信息，同时简化了测试配置，提升了项目的稳定性和开发者体验。