# FlexMCP-221

## 基本信息

- **开发者/组织**：MultiModel Computing
- **许可证**：开源 (GPL v3)
- **版本**：v3.2.3
- **发布日期**：2023-06-23
- **官方网站**：https://flexmcp-221.example.com
- **源代码仓库**：https://github.com/multimodel-computing/flexmcp-221

## 功能特点

FlexMCP-221是一款专业的MCP服务器，具有以下主要特点：

- **高性能上下文处理**：支持高效的高性能上下文处理能力
- **流式响应支持**：支持高效的流式响应支持能力
- **上下文压缩优化**：支持高效的上下文压缩优化能力
- **知识图谱支持**：支持高效的知识图谱支持能力


## 技术规格

- **支持的模型**：Anthropic Claude, GLM-4
- **部署方式**：裸机安装, Azure Functions, Serverless架构
- **语言/框架**：Java / Actix
- **性能指标**：每秒处理约3454请求，平均延迟<148ms

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

1. **内部企业搜索**：利用FlexMCP-221提供的上下文压缩优化能力，实现高效的内部企业搜索
2. **企业知识库集成**：利用FlexMCP-221提供的上下文压缩优化能力，实现高效的企业知识库集成


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8032
  threads: 14

security:
  auth_required: false
  rate_limiting: true
  max_requests_per_minute: 711

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