# OpenMCP-72

## 基本信息

- **开发者/组织**：EnterpriseContext Technologies
- **许可证**：开源 (Mozilla Public License)
- **版本**：v3.5.7
- **发布日期**：2024-07-30
- **官方网站**：https://openmcp-72.example.com
- **源代码仓库**：https://github.com/enterprisecontext-technologies/openmcp-72

## 功能特点

OpenMCP-72是一款专业的MCP服务器，具有以下主要特点：

- **向量数据库连接**：支持高效的向量数据库连接能力
- **审计日志系统**：支持高效的审计日志系统能力
- **多模态内容处理**：支持高效的多模态内容处理能力


## 技术规格

- **支持的模型**：Anthropic Claude, Gemini Pro, BLOOM-176B
- **部署方式**：Kubernetes
- **语言/框架**：Elixir / FastAPI
- **性能指标**：每秒处理约2719请求，平均延迟<375ms

## API示例

```json
// 查询请求示例
{
  "model": "gemini-pro",
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

1. **产品推荐系统**：利用OpenMCP-72提供的多模态内容处理能力，实现高效的产品推荐系统
2. **实时决策支持**：利用OpenMCP-72提供的审计日志系统能力，实现高效的实时决策支持


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8857
  threads: 9

security:
  auth_required: false
  rate_limiting: false
  max_requests_per_minute: 1540

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