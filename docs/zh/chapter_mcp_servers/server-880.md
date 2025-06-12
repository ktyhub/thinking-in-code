# ProContext-880

## 基本信息

- **开发者/组织**：MCPConnect Inc.
- **许可证**：开源 (BSD)
- **版本**：v5.9.3
- **发布日期**：2024-06-13
- **官方网站**：https://procontext-880.example.com
- **源代码仓库**：https://github.com/mcpconnect-inc./procontext-880

## 功能特点

ProContext-880是一款专业的MCP服务器，具有以下主要特点：

- **文档库集成**：支持高效的文档库集成能力
- **分布式架构支持**：支持高效的分布式架构支持能力
- **细粒度访问控制**：支持高效的细粒度访问控制能力


## 技术规格

- **支持的模型**：LLaMa-2, Mistral Medium, Llama 3-8B
- **部署方式**：Azure Functions
- **语言/框架**：Java / Rocket
- **性能指标**：每秒处理约2322请求，平均延迟<391ms

## API示例

```json
// 查询请求示例
{
  "model": "llama-2",
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

1. **实时决策支持**：利用ProContext-880提供的细粒度访问控制能力，实现高效的实时决策支持
2. **多源数据融合**：利用ProContext-880提供的分布式架构支持能力，实现高效的多源数据融合


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8858
  threads: 6

security:
  auth_required: true
  rate_limiting: true
  max_requests_per_minute: 3127

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