# MCP-84

## 基本信息

- **开发者/组织**：DeepMCP Systems
- **许可证**：商业订阅
- **版本**：v2.2.1
- **发布日期**：2025-04-13
- **官方网站**：https://mcp-84.example.com
- **源代码仓库**：https://github.com/deepmcp-systems/mcp-84

## 功能特点

MCP-84是一款专业的MCP服务器，具有以下主要特点：

- **分布式架构支持**：支持高效的分布式架构支持能力
- **细粒度访问控制**：支持高效的细粒度访问控制能力
- **上下文压缩优化**：支持高效的上下文压缩优化能力
- **自动扩缩容**：支持高效的自动扩缩容能力
- **文档库集成**：支持高效的文档库集成能力


## 技术规格

- **支持的模型**：Falcon-180B, Claude 3 Sonnet, LLaMa-2, Claude 3 Opus
- **部署方式**：容器集群, Google Cloud Functions
- **语言/框架**：Julia / 原生实现
- **性能指标**：每秒处理约3097请求，平均延迟<387ms

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

1. **多源数据融合**：利用MCP-84提供的文档库集成能力，实现高效的多源数据融合
2. **企业知识库集成**：利用MCP-84提供的上下文压缩优化能力，实现高效的企业知识库集成


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8154
  threads: 31

security:
  auth_required: true
  rate_limiting: true
  max_requests_per_minute: 3178

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