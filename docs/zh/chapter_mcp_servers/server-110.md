# ServerMCP-110

## 基本信息

- **开发者/组织**：AIContext Group
- **许可证**：专有许可
- **版本**：v2.1.8
- **发布日期**：2025-03-30
- **官方网站**：https://servermcp-110.example.com
- **源代码仓库**：https://github.com/aicontext-group/servermcp-110

## 功能特点

ServerMCP-110是一款专业的MCP服务器，具有以下主要特点：

- **多语言支持**：支持高效的多语言支持能力
- **审计日志系统**：支持高效的审计日志系统能力
- **知识图谱支持**：支持高效的知识图谱支持能力


## 技术规格

- **支持的模型**：GLM-4, Yi-34B
- **部署方式**：虚拟机, Serverless架构
- **语言/框架**：Kotlin / Express
- **性能指标**：每秒处理约445请求，平均延迟<90ms

## API示例

```json
// 查询请求示例
{
  "model": "yi-34b",
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

1. **智能文档生成**：利用ServerMCP-110提供的多语言支持能力，实现高效的智能文档生成
2. **个性化学习系统**：利用ServerMCP-110提供的知识图谱支持能力，实现高效的个性化学习系统


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8519
  threads: 23

security:
  auth_required: true
  rate_limiting: true
  max_requests_per_minute: 4893

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