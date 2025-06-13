# MCP-15

## 基本信息

- **开发者/组织**：FusionMCP Software
- **许可证**：开源 (Mozilla Public License)
- **版本**：v5.0.2
- **发布日期**：2024-06-01
- **官方网站**：https://mcp-15.example.com
- **源代码仓库**：https://github.com/fusionmcp-software/mcp-15

## 功能特点

MCP-15是一款专业的MCP服务器，具有以下主要特点：

- **细粒度访问控制**：支持高效的细粒度访问控制能力
- **文档库集成**：支持高效的文档库集成能力
- **语义搜索优化**：支持高效的语义搜索优化能力
- **向量数据库连接**：支持高效的向量数据库连接能力


## 技术规格

- **支持的模型**：GPT-4, GPT-4-Turbo, Mistral Large, GLM-4
- **部署方式**：Serverless架构, 虚拟机, Azure Functions
- **语言/框架**：C# / Actix
- **性能指标**：每秒处理约4753请求，平均延迟<357ms

## API示例

```json
// 查询请求示例
{
  "model": "mistral-large",
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

1. **个性化学习系统**：利用MCP-15提供的细粒度访问控制能力，实现高效的个性化学习系统
2. **内容审核与分类**：利用MCP-15提供的细粒度访问控制能力，实现高效的内容审核与分类


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8000
  threads: 26

security:
  auth_required: false
  rate_limiting: true
  max_requests_per_minute: 630

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