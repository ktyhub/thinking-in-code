# MCP-2

## 基本信息

- **开发者/组织**：MicroContext Computing
- **许可证**：AGPL v3
- **版本**：v2.9.3
- **发布日期**：2023-11-08
- **官方网站**：https://mcp-2.example.com
- **源代码仓库**：https://github.com/microcontext-computing/mcp-2

## 功能特点

MCP-2是一款专业的MCP服务器，具有以下主要特点：

- **多语言支持**：支持高效的多语言支持能力
- **多模态内容处理**：支持高效的多模态内容处理能力
- **长期记忆管理**：支持高效的长期记忆管理能力
- **上下文压缩优化**：支持高效的上下文压缩优化能力


## 技术规格

- **支持的模型**：Falcon-40B, Gemini Ultra, Llama 3-70B, Claude 3
- **部署方式**：容器集群
- **语言/框架**：Python / Gin
- **性能指标**：每秒处理约1192请求，平均延迟<90ms

## API示例

```json
// 查询请求示例
{
  "model": "gemini-ultra",
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

1. **内容审核与分类**：利用MCP-2提供的长期记忆管理能力，实现高效的内容审核与分类
2. **医疗信息管理**：利用MCP-2提供的长期记忆管理能力，实现高效的医疗信息管理


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8426
  threads: 30

security:
  auth_required: false
  rate_limiting: true
  max_requests_per_minute: 2069

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