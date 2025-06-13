# UniMCP-108

## 基本信息

- **开发者/组织**：ServerMCP Research
- **许可证**：开源 (BSD)
- **版本**：v3.9.8
- **发布日期**：2024-12-31
- **官方网站**：https://unimcp-108.example.com
- **源代码仓库**：https://github.com/servermcp-research/unimcp-108

## 功能特点

UniMCP-108是一款专业的MCP服务器，具有以下主要特点：

- **流式响应支持**：支持高效的流式响应支持能力
- **分布式架构支持**：支持高效的分布式架构支持能力
- **细粒度访问控制**：支持高效的细粒度访问控制能力
- **语义搜索优化**：支持高效的语义搜索优化能力
- **向量数据库连接**：支持高效的向量数据库连接能力


## 技术规格

- **支持的模型**：Llama 3-8B, Llama 3, Gemini Ultra
- **部署方式**：Serverless架构, AWS Lambda, Docker
- **语言/框架**：Python / Express
- **性能指标**：每秒处理约836请求，平均延迟<204ms

## API示例

```json
// 查询请求示例
{
  "model": "gemini-ultra",
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

1. **多语言内容创建**：利用UniMCP-108提供的向量数据库连接能力，实现高效的多语言内容创建
2. **企业知识库集成**：利用UniMCP-108提供的语义搜索优化能力，实现高效的企业知识库集成


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8959
  threads: 22

security:
  auth_required: false
  rate_limiting: true
  max_requests_per_minute: 2806

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