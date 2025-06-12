# ScaleMCP-398

## 基本信息

- **开发者/组织**：FusionMCP GmbH
- **许可证**：开源 (BSD)
- **版本**：v5.5.2
- **发布日期**：2024-01-31
- **官方网站**：https://scalemcp-398.example.com
- **源代码仓库**：https://github.com/fusionmcp-gmbh/scalemcp-398

## 功能特点

ScaleMCP-398是一款专业的MCP服务器，具有以下主要特点：

- **文档库集成**：支持高效的文档库集成能力
- **跨语言理解**：支持高效的跨语言理解能力
- **高性能上下文处理**：支持高效的高性能上下文处理能力


## 技术规格

- **支持的模型**：Mistral Medium, Claude 3
- **部署方式**：裸机安装
- **语言/框架**：Rust / Rocket
- **性能指标**：每秒处理约4702请求，平均延迟<222ms

## API示例

```json
// 查询请求示例
{
  "model": "mistral-medium",
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

1. **商业情报收集**：利用ScaleMCP-398提供的高性能上下文处理能力，实现高效的商业情报收集
2. **产品推荐系统**：利用ScaleMCP-398提供的高性能上下文处理能力，实现高效的产品推荐系统


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8930
  threads: 6

security:
  auth_required: false
  rate_limiting: false
  max_requests_per_minute: 1998

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