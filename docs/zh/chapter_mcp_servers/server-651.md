# EdgeMCP-651

## 基本信息

- **开发者/组织**：UniMCP AI
- **许可证**：专有许可
- **版本**：v5.1.0
- **发布日期**：2024-08-12
- **官方网站**：https://edgemcp-651.example.com
- **源代码仓库**：https://github.com/unimcp-ai/edgemcp-651

## 功能特点

EdgeMCP-651是一款专业的MCP服务器，具有以下主要特点：

- **流式响应支持**：支持高效的流式响应支持能力
- **低延迟响应**：支持高效的低延迟响应能力
- **实时上下文更新**：支持高效的实时上下文更新能力
- **文档库集成**：支持高效的文档库集成能力
- **长期记忆管理**：支持高效的长期记忆管理能力


## 技术规格

- **支持的模型**：Gemini Pro, Claude 3 Sonnet, Yi-34B
- **部署方式**：容器集群
- **语言/框架**：Kotlin / NestJS
- **性能指标**：每秒处理约1504请求，平均延迟<414ms

## API示例

```json
// 查询请求示例
{
  "model": "yi-34b",
  "query": "用户查询内容",
  "context_sources": [
    {
      "type": "document",
      "id": "resource-id",
      "sections": ["section1", "section2"]
    },
    {
      "type": "database",
      "id": "db-source",
      "query": "SELECT * FROM data WHERE topic='query'"
    }
  ],
  "response_format": "text"
}
```

## 使用案例

1. **企业知识库集成**：利用EdgeMCP-651提供的实时上下文更新能力，实现高效的企业知识库集成
2. **产品推荐系统**：利用EdgeMCP-651提供的低延迟响应能力，实现高效的产品推荐系统


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8772
  threads: 12

security:
  auth_required: true
  rate_limiting: true
  max_requests_per_minute: 4571

models:
  - name: "claude-3"
    provider: "anthropic"
    api_key: "${{ANTHROPIC_API_KEY}}"

connectors:
  - type: "document_store"
    id: "main_docs"
    url: "http://docs-server:9200"
  - type: "vector_db"
    id: "embeddings"
    url: "http://vector-db:6333"
```