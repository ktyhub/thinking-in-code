# UniMCP-658

## 基本信息

- **开发者/组织**：UniMCP Technologies
- **许可证**：AGPL v3
- **版本**：v2.7.7
- **发布日期**：2024-04-13
- **官方网站**：https://unimcp-658.example.com
- **源代码仓库**：https://github.com/unimcp-technologies/unimcp-658

## 功能特点

UniMCP-658是一款专业的MCP服务器，具有以下主要特点：

- **多语言支持**：支持高效的多语言支持能力
- **长期记忆管理**：支持高效的长期记忆管理能力
- **高性能上下文处理**：支持高效的高性能上下文处理能力


## 技术规格

- **支持的模型**：Llama 3-8B, Falcon-40B, GLM-4, Llama 3-70B
- **部署方式**：边缘设备
- **语言/框架**：Java / Rocket
- **性能指标**：每秒处理约2051请求，平均延迟<317ms

## API示例

```json
// 查询请求示例
{
  "model": "glm-4",
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

1. **个性化学习系统**：利用UniMCP-658提供的长期记忆管理能力，实现高效的个性化学习系统
2. **企业知识库集成**：利用UniMCP-658提供的高性能上下文处理能力，实现高效的企业知识库集成


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8457
  threads: 18

security:
  auth_required: true
  rate_limiting: true
  max_requests_per_minute: 1625

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