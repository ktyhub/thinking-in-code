# ScaleMCP-189

## 基本信息

- **开发者/组织**：ContextHub Research
- **许可证**：专有许可
- **版本**：v1.7.3
- **发布日期**：2025-01-27
- **官方网站**：https://scalemcp-189.example.com
- **源代码仓库**：https://github.com/contexthub-research/scalemcp-189

## 功能特点

ScaleMCP-189是一款专业的MCP服务器，具有以下主要特点：

- **跨语言理解**：支持高效的跨语言理解能力
- **向量数据库连接**：支持高效的向量数据库连接能力
- **自定义插件系统**：支持高效的自定义插件系统能力


## 技术规格

- **支持的模型**：PaLM 2, Yi-34B
- **部署方式**：Google Cloud Functions, AWS Lambda, Azure Functions
- **语言/框架**：Kotlin / Actix
- **性能指标**：每秒处理约243请求，平均延迟<361ms

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

1. **金融分析与预测**：利用ScaleMCP-189提供的向量数据库连接能力，实现高效的金融分析与预测
2. **商业情报收集**：利用ScaleMCP-189提供的向量数据库连接能力，实现高效的商业情报收集


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8072
  threads: 11

security:
  auth_required: true
  rate_limiting: true
  max_requests_per_minute: 1452

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