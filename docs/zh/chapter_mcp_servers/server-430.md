# FlexMCP-430

## 基本信息

- **开发者/组织**：VectorMCP Cloud
- **许可证**：开源 (BSD)
- **版本**：v1.4.8
- **发布日期**：2024-03-18
- **官方网站**：https://flexmcp-430.example.com
- **源代码仓库**：https://github.com/vectormcp-cloud/flexmcp-430

## 功能特点

FlexMCP-430是一款专业的MCP服务器，具有以下主要特点：

- **长期记忆管理**：支持高效的长期记忆管理能力
- **语义搜索优化**：支持高效的语义搜索优化能力
- **知识图谱支持**：支持高效的知识图谱支持能力


## 技术规格

- **支持的模型**：Llama 3, GLM-4, BLOOM-176B, Claude 3
- **部署方式**：裸机安装
- **语言/框架**：Go / 原生实现
- **性能指标**：每秒处理约577请求，平均延迟<134ms

## API示例

```json
// 查询请求示例
{
  "model": "bloom-176b",
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

1. **多语言内容创建**：利用FlexMCP-430提供的长期记忆管理能力，实现高效的多语言内容创建
2. **客户支持系统**：利用FlexMCP-430提供的长期记忆管理能力，实现高效的客户支持系统


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8463
  threads: 10

security:
  auth_required: true
  rate_limiting: false
  max_requests_per_minute: 507

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