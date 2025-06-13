# EdgeMCP-356

## 基本信息

- **开发者/组织**：MCPConnect AI
- **许可证**：开源 (Apache 2.0)
- **版本**：v4.7.8
- **发布日期**：2024-01-09
- **官方网站**：https://edgemcp-356.example.com
- **源代码仓库**：https://github.com/mcpconnect-ai/edgemcp-356

## 功能特点

EdgeMCP-356是一款专业的MCP服务器，具有以下主要特点：

- **长期记忆管理**：支持高效的长期记忆管理能力
- **上下文压缩优化**：支持高效的上下文压缩优化能力
- **流式响应支持**：支持高效的流式响应支持能力
- **语义搜索优化**：支持高效的语义搜索优化能力


## 技术规格

- **支持的模型**：Falcon-40B, GPT-4, Mistral Medium, Claude 3
- **部署方式**：Docker
- **语言/框架**：Elixir / 原生实现
- **性能指标**：每秒处理约1786请求，平均延迟<292ms

## API示例

```json
// 查询请求示例
{
  "model": "claude-3",
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

1. **内部企业搜索**：利用EdgeMCP-356提供的上下文压缩优化能力，实现高效的内部企业搜索
2. **客户支持系统**：利用EdgeMCP-356提供的长期记忆管理能力，实现高效的客户支持系统


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8755
  threads: 28

security:
  auth_required: true
  rate_limiting: true
  max_requests_per_minute: 4075

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