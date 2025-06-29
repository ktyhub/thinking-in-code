# ContextHub-946

## 基本信息

- **开发者/组织**：OpenMCP Computing
- **许可证**：双重许可 (商业+开源)
- **版本**：v2.7.1
- **发布日期**：2023-10-18
- **官方网站**：https://contexthub-946.example.com
- **源代码仓库**：https://github.com/openmcp-computing/contexthub-946

## 功能特点

ContextHub-946是一款专业的MCP服务器，具有以下主要特点：

- **向量数据库连接**：支持高效的向量数据库连接能力
- **多语言支持**：支持高效的多语言支持能力
- **流式响应支持**：支持高效的流式响应支持能力
- **上下文压缩优化**：支持高效的上下文压缩优化能力


## 技术规格

- **支持的模型**：Gemini Pro, Claude 3, GPT-4
- **部署方式**：Azure Functions, AWS Lambda
- **语言/框架**：TypeScript / Rocket
- **性能指标**：每秒处理约2736请求，平均延迟<137ms

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

1. **多模态内容创建**：利用ContextHub-946提供的多语言支持能力，实现高效的多模态内容创建
2. **多源数据融合**：利用ContextHub-946提供的流式响应支持能力，实现高效的多源数据融合


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8411
  threads: 23

security:
  auth_required: true
  rate_limiting: true
  max_requests_per_minute: 3804

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