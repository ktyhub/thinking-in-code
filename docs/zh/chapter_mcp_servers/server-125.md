# GlobalMCP-125

## 基本信息

- **开发者/组织**：EdgeMCP Inc.
- **许可证**：开源 (BSD)
- **版本**：v2.6.3
- **发布日期**：2024-04-11
- **官方网站**：https://globalmcp-125.example.com
- **源代码仓库**：https://github.com/edgemcp-inc./globalmcp-125

## 功能特点

GlobalMCP-125是一款专业的MCP服务器，具有以下主要特点：

- **流式响应支持**：支持高效的流式响应支持能力
- **高性能上下文处理**：支持高效的高性能上下文处理能力
- **向量数据库连接**：支持高效的向量数据库连接能力
- **多语言支持**：支持高效的多语言支持能力


## 技术规格

- **支持的模型**：PaLM 2, GLM-4, Falcon-180B
- **部署方式**：Docker
- **语言/框架**：Julia / Gin
- **性能指标**：每秒处理约4848请求，平均延迟<345ms

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

1. **多模态内容创建**：利用GlobalMCP-125提供的向量数据库连接能力，实现高效的多模态内容创建
2. **产品推荐系统**：利用GlobalMCP-125提供的多语言支持能力，实现高效的产品推荐系统


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8553
  threads: 19

security:
  auth_required: true
  rate_limiting: false
  max_requests_per_minute: 665

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