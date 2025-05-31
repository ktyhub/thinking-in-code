# Spring AI 技术栈

## 概述

Spring AI 是 Spring 生态系统中专门用于构建 AI 应用程序的框架。它提供了与各种 AI 服务和模型集成的抽象层，简化了 AI 功能在 Spring 应用中的集成和使用。

## 核心特性

### 统一的 AI 抽象
- **模型抽象**: 统一的接口访问不同的 AI 模型
- **提示工程**: 结构化的提示模板和管理
- **输出解析**: 自动解析 AI 模型输出
- **向量存储**: 支持向量数据库集成

### 多模型支持
- **OpenAI**: GPT-3.5、GPT-4 等模型
- **Azure OpenAI**: 微软 Azure 上的 OpenAI 服务
- **Anthropic**: Claude 系列模型
- **Ollama**: 本地部署的开源模型

### 向量数据库集成
- **Pinecone**: 云端向量数据库
- **Weaviate**: 开源向量搜索引擎
- **Chroma**: 轻量级向量数据库
- **Redis**: 基于 Redis 的向量存储

## 架构设计

### 整体架构
```
┌─────────────────────────────────────────────────────────────┐
│                    Spring AI Application                    │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │
│  │   Chat      │ │   Image     │ │  Embedding  │           │
│  │   Client    │ │   Client    │ │   Client    │           │
│  └─────────────┘ └─────────────┘ └─────────────┘           │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │
│  │   Prompt    │ │   Output    │ │   Vector    │           │
│  │  Template   │ │   Parser    │ │   Store     │           │
│  └─────────────┘ └─────────────┘ └─────────────┘           │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │
│  │   OpenAI    │ │   Azure     │ │   Ollama    │           │
│  │   Client    │ │   OpenAI    │ │   Client    │           │
│  └─────────────┘ └─────────────┘ └─────────────┘           │
└─────────────────────────────────────────────────────────────┘
```

### 核心组件

#### Chat 客户端
```java
@Service
public class ChatService {
    
    private final ChatClient chatClient;
    
    public ChatService(ChatClient chatClient) {
        this.chatClient = chatClient;
    }
    
    public String chat(String message) {
        return chatClient.call(message);
    }
}
```

#### 提示模板
```java
@Component
public class PromptService {
    
    private final PromptTemplate promptTemplate;
    
    public PromptService() {
        this.promptTemplate = new PromptTemplate(
            "请根据以下信息回答问题：{context}\n问题：{question}"
        );
    }
    
    public Prompt createPrompt(String context, String question) {
        Map<String, Object> variables = Map.of(
            "context", context,
            "question", question
        );
        return promptTemplate.create(variables);
    }
}
```

#### 向量存储
```java
@Configuration
public class VectorStoreConfig {
    
    @Bean
    public VectorStore vectorStore() {
        return new SimpleVectorStore();
    }
    
    @Bean
    public EmbeddingClient embeddingClient() {
        return new OpenAiEmbeddingClient(apiKey);
    }
}
```

## 实践案例

### 智能问答系统
```java
@RestController
public class QAController {
    
    private final ChatClient chatClient;
    private final VectorStore vectorStore;
    
    @PostMapping("/ask")
    public String ask(@RequestBody QuestionRequest request) {
        // 1. 向量搜索相关文档
        List<Document> documents = vectorStore.similaritySearch(
            SearchRequest.query(request.getQuestion()).withTopK(5)
        );
        
        // 2. 构建上下文
        String context = documents.stream()
            .map(Document::getContent)
            .collect(Collectors.joining("\n"));
        
        // 3. 生成回答
        String prompt = String.format(
            "基于以下上下文回答问题：\n%s\n\n问题：%s", 
            context, 
            request.getQuestion()
        );
        
        return chatClient.call(prompt);
    }
}
```

### 文档处理和索引
```java
@Service
public class DocumentService {
    
    private final VectorStore vectorStore;
    private final EmbeddingClient embeddingClient;
    private final DocumentReader documentReader;
    
    public void indexDocument(String filePath) {
        // 1. 读取文档
        List<Document> documents = documentReader.get();
        
        // 2. 文档分块
        TextSplitter textSplitter = new TokenTextSplitter();
        List<Document> chunks = textSplitter.apply(documents);
        
        // 3. 生成向量并存储
        vectorStore.add(chunks);
    }
}
```

### 图像生成
```java
@Service
public class ImageService {
    
    private final ImageClient imageClient;
    
    public String generateImage(String prompt) {
        ImagePrompt imagePrompt = new ImagePrompt(prompt);
        ImageResponse response = imageClient.call(imagePrompt);
        
        return response.getResult().getOutput().getUrl();
    }
}
```

## 配置管理

### OpenAI 配置
```yaml
spring:
  ai:
    openai:
      api-key: ${OPENAI_API_KEY}
      chat:
        options:
          model: gpt-3.5-turbo
          temperature: 0.7
          max-tokens: 1000
      embedding:
        options:
          model: text-embedding-ada-002
```

### Azure OpenAI 配置
```yaml
spring:
  ai:
    azure:
      openai:
        api-key: ${AZURE_OPENAI_API_KEY}
        endpoint: ${AZURE_OPENAI_ENDPOINT}
        chat:
          options:
            deployment-name: gpt-35-turbo
```

### 向量存储配置
```yaml
spring:
  ai:
    vectorstore:
      pinecone:
        api-key: ${PINECONE_API_KEY}
        environment: ${PINECONE_ENVIRONMENT}
        project-id: ${PINECONE_PROJECT_ID}
        index-name: my-index
```

## 最佳实践

### 提示工程
- **清晰的指令**: 使用明确、具体的指令
- **上下文管理**: 合理控制上下文长度
- **示例驱动**: 提供少量示例提高效果
- **角色设定**: 为 AI 设定合适的角色

### 性能优化
- **缓存策略**: 缓存常用的查询结果
- **批量处理**: 批量处理向量操作
- **异步处理**: 使用异步方式处理长时间任务
- **连接池**: 合理配置 HTTP 连接池

### 安全考虑
- **API 密钥管理**: 安全存储和轮换 API 密钥
- **输入验证**: 验证和清理用户输入
- **输出过滤**: 过滤敏感或不当内容
- **访问控制**: 实施适当的访问控制

### 监控和调试
- **请求日志**: 记录 AI 服务请求和响应
- **性能指标**: 监控响应时间和成功率
- **成本控制**: 监控 API 使用成本
- **错误处理**: 优雅处理 AI 服务错误

## 相关文章

- [Spring AI 官网笔记](1-official-website.md)

## 参考资料

- [Spring AI 官方文档](https://docs.spring.io/spring-ai/reference/)
- [Spring AI GitHub](https://github.com/spring-projects/spring-ai)
- [OpenAI API 文档](https://platform.openai.com/docs/)