# MultiModel-761

## 基本信息

- **开发者/组织**：FastContext Computing
- **许可证**：开源 (GPL v3)
- **版本**：v1.7.9
- **发布日期**：2025-03-17
- **官方网站**：https://multimodel-761.example.com
- **源代码仓库**：https://github.com/fastcontext-computing/multimodel-761

## 功能特点

MultiModel-761是一款专业的MCP服务器，具有以下主要特点：

- **长期记忆管理**：支持高效的长期记忆管理能力
- **多模态内容处理**：支持高效的多模态内容处理能力
- **文档库集成**：支持高效的文档库集成能力


## 技术规格

- **支持的模型**：PaLM 2, Claude 3 Sonnet
- **部署方式**：容器集群
- **语言/框架**：Scala / Axum
- **性能指标**：每秒处理约1773请求，平均延迟<183ms

## API示例

```json
// 查询请求示例
{
  "model": "palm-2",
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

1. **产品推荐系统**：利用MultiModel-761提供的文档库集成能力，实现高效的产品推荐系统
2. **内部企业搜索**：利用MultiModel-761提供的多模态内容处理能力，实现高效的内部企业搜索


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8245
  threads: 11

security:
  auth_required: true
  rate_limiting: true
  max_requests_per_minute: 4388

models:
  - name: "gpt-4"
    provider: "openai"
    api_key: "${{OPENAI_API_KEY}}"

connectors:
  - type: "document_store"
    id: "main_docs"
    url: "http://docs-server:9200"
  - type: "vector_db"
    id: "embeddings"
    url: "http://vector-db:6333"
```