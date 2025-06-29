# UniMCP-77

## 基本信息

- **开发者/组织**：LightMCP AI
- **许可证**：商业订阅
- **版本**：v2.4.0
- **发布日期**：2023-02-22
- **官方网站**：https://unimcp-77.example.com
- **源代码仓库**：https://github.com/lightmcp-ai/unimcp-77

## 功能特点

UniMCP-77是一款专业的MCP服务器，具有以下主要特点：

- **企业级安全**：支持高效的企业级安全能力
- **语义搜索优化**：支持高效的语义搜索优化能力
- **审计日志系统**：支持高效的审计日志系统能力
- **自动扩缩容**：支持高效的自动扩缩容能力


## 技术规格

- **支持的模型**：Claude 3 Sonnet, Mistral Large, GLM-4
- **部署方式**：AWS Lambda
- **语言/框架**：Java / Gin
- **性能指标**：每秒处理约2025请求，平均延迟<73ms

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

1. **金融分析与预测**：利用UniMCP-77提供的自动扩缩容能力，实现高效的金融分析与预测
2. **多模态内容创建**：利用UniMCP-77提供的企业级安全能力，实现高效的多模态内容创建


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8702
  threads: 31

security:
  auth_required: true
  rate_limiting: true
  max_requests_per_minute: 4330

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