# EdgeMCP-41

## 基本信息

- **开发者/组织**：AIContext Corporation
- **许可证**：商业订阅
- **版本**：v5.6.8
- **发布日期**：2024-11-26
- **官方网站**：https://edgemcp-41.example.com
- **源代码仓库**：https://github.com/aicontext-corporation/edgemcp-41

## 功能特点

EdgeMCP-41是一款专业的MCP服务器，具有以下主要特点：

- **上下文压缩优化**：支持高效的上下文压缩优化能力
- **向量数据库连接**：支持高效的向量数据库连接能力
- **文档库集成**：支持高效的文档库集成能力
- **低延迟响应**：支持高效的低延迟响应能力


## 技术规格

- **支持的模型**：BLOOM-176B, Falcon-40B
- **部署方式**：Google Cloud Functions, Serverless架构
- **语言/框架**：Go / FastAPI
- **性能指标**：每秒处理约3462请求，平均延迟<35ms

## API示例

```json
// 查询请求示例
{
  "model": "bloom-176b",
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

1. **客户支持系统**：利用EdgeMCP-41提供的向量数据库连接能力，实现高效的客户支持系统
2. **内部企业搜索**：利用EdgeMCP-41提供的上下文压缩优化能力，实现高效的内部企业搜索


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8747
  threads: 10

security:
  auth_required: true
  rate_limiting: false
  max_requests_per_minute: 4764

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