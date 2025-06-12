# OpenMCP-794

## 基本信息

- **开发者/组织**：UniMCP LLC
- **许可证**：商业订阅
- **版本**：v2.0.6
- **发布日期**：2023-07-04
- **官方网站**：https://openmcp-794.example.com
- **源代码仓库**：https://github.com/unimcp-llc/openmcp-794

## 功能特点

OpenMCP-794是一款专业的MCP服务器，具有以下主要特点：

- **长期记忆管理**：支持高效的长期记忆管理能力
- **上下文压缩优化**：支持高效的上下文压缩优化能力
- **多模态内容处理**：支持高效的多模态内容处理能力


## 技术规格

- **支持的模型**：PaLM 2, Claude 3 Sonnet, Falcon-180B, Gemini Pro
- **部署方式**：Serverless架构
- **语言/框架**：Go / Rocket
- **性能指标**：每秒处理约1646请求，平均延迟<463ms

## API示例

```json
// 查询请求示例
{
  "model": "falcon-180b",
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

1. **内部企业搜索**：利用OpenMCP-794提供的多模态内容处理能力，实现高效的内部企业搜索
2. **智能文档生成**：利用OpenMCP-794提供的长期记忆管理能力，实现高效的智能文档生成


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8740
  threads: 12

security:
  auth_required: true
  rate_limiting: true
  max_requests_per_minute: 3799

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