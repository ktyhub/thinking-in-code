# MCP-223

## 基本信息

- **开发者/组织**：HyperContext Foundation
- **许可证**：开源 (Mozilla Public License)
- **版本**：v5.8.0
- **发布日期**：2023-10-25
- **官方网站**：https://mcp-223.example.com
- **源代码仓库**：https://github.com/hypercontext-foundation/mcp-223

## 功能特点

MCP-223是一款专业的MCP服务器，具有以下主要特点：

- **高并发处理**：支持高效的高并发处理能力
- **多语言支持**：支持高效的多语言支持能力
- **细粒度访问控制**：支持高效的细粒度访问控制能力
- **多模态内容处理**：支持高效的多模态内容处理能力
- **文档库集成**：支持高效的文档库集成能力


## 技术规格

- **支持的模型**：Llama 3, BLOOM-176B
- **部署方式**：Azure Functions
- **语言/框架**：Go / Axum
- **性能指标**：每秒处理约3840请求，平均延迟<483ms

## API示例

```json
// 查询请求示例
{
  "model": "llama-3",
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

1. **商业情报收集**：利用MCP-223提供的多模态内容处理能力，实现高效的商业情报收集
2. **多源数据融合**：利用MCP-223提供的细粒度访问控制能力，实现高效的多源数据融合
3. **内容审核与分类**：利用MCP-223提供的细粒度访问控制能力，实现高效的内容审核与分类


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8021
  threads: 17

security:
  auth_required: true
  rate_limiting: true
  max_requests_per_minute: 4613

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