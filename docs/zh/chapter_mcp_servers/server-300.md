# UniMCP-300

## 基本信息

- **开发者/组织**：EdgeMCP LLC
- **许可证**：商业许可
- **版本**：v4.3.4
- **发布日期**：2024-04-19
- **官方网站**：https://unimcp-300.example.com
- **源代码仓库**：https://github.com/edgemcp-llc/unimcp-300

## 功能特点

UniMCP-300是一款专业的MCP服务器，具有以下主要特点：

- **长期记忆管理**：支持高效的长期记忆管理能力
- **自动扩缩容**：支持高效的自动扩缩容能力
- **上下文压缩优化**：支持高效的上下文压缩优化能力


## 技术规格

- **支持的模型**：Llama 3-8B, Claude 3 Sonnet, Claude 3, LLaMa-2
- **部署方式**：Azure Functions, Serverless架构
- **语言/框架**：Java / Axum
- **性能指标**：每秒处理约3038请求，平均延迟<241ms

## API示例

```json
// 查询请求示例
{
  "model": "llama-3-8b",
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

1. **产品推荐系统**：利用UniMCP-300提供的上下文压缩优化能力，实现高效的产品推荐系统
2. **多模态内容创建**：利用UniMCP-300提供的长期记忆管理能力，实现高效的多模态内容创建
3. **研究数据分析**：利用UniMCP-300提供的上下文压缩优化能力，实现高效的研究数据分析


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8355
  threads: 8

security:
  auth_required: true
  rate_limiting: true
  max_requests_per_minute: 3049

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