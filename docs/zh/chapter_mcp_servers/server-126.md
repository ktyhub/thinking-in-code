# ScaleMCP-126

## 基本信息

- **开发者/组织**：MCPConnect Group
- **许可证**：开源 (BSD)
- **版本**：v3.4.8
- **发布日期**：2024-10-21
- **官方网站**：https://scalemcp-126.example.com
- **源代码仓库**：https://github.com/mcpconnect-group/scalemcp-126

## 功能特点

ScaleMCP-126是一款专业的MCP服务器，具有以下主要特点：

- **语义搜索优化**：支持高效的语义搜索优化能力
- **跨语言理解**：支持高效的跨语言理解能力
- **细粒度访问控制**：支持高效的细粒度访问控制能力


## 技术规格

- **支持的模型**：Claude 3 Opus, Anthropic Claude, BLOOM-176B
- **部署方式**：AWS Lambda
- **语言/框架**：JavaScript / NestJS
- **性能指标**：每秒处理约744请求，平均延迟<207ms

## API示例

```json
// 查询请求示例
{
  "model": "claude-3-opus",
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

1. **商业情报收集**：利用ScaleMCP-126提供的细粒度访问控制能力，实现高效的商业情报收集
2. **多语言内容创建**：利用ScaleMCP-126提供的细粒度访问控制能力，实现高效的多语言内容创建


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8129
  threads: 7

security:
  auth_required: true
  rate_limiting: true
  max_requests_per_minute: 1501

models:
  - name: "llama-3"
    provider: "local"
    model_path: "/models/llama-3-70b"

connectors:
  - type: "document_store"
    id: "main_docs"
    url: "http://docs-server:9200"
  - type: "vector_db"
    id: "embeddings"
    url: "http://vector-db:6333"
```