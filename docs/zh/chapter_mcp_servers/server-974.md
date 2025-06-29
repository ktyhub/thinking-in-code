# MCP-974

## 基本信息

- **开发者/组织**：EdgeMCP Group
- **许可证**：开源 (MIT)
- **版本**：v1.0.1
- **发布日期**：2024-03-05
- **官方网站**：https://mcp-974.example.com
- **源代码仓库**：https://github.com/edgemcp-group/mcp-974

## 功能特点

MCP-974是一款专业的MCP服务器，具有以下主要特点：

- **流式响应支持**：支持高效的流式响应支持能力
- **自动扩缩容**：支持高效的自动扩缩容能力
- **实时上下文更新**：支持高效的实时上下文更新能力
- **分布式架构支持**：支持高效的分布式架构支持能力


## 技术规格

- **支持的模型**：PaLM 2, Mistral Large, GLM-4, Falcon-40B
- **部署方式**：裸机安装, Azure Functions
- **语言/框架**：Java / Django
- **性能指标**：每秒处理约694请求，平均延迟<232ms

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

1. **内部企业搜索**：利用MCP-974提供的流式响应支持能力，实现高效的内部企业搜索
2. **医疗信息管理**：利用MCP-974提供的实时上下文更新能力，实现高效的医疗信息管理


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8792
  threads: 23

security:
  auth_required: true
  rate_limiting: true
  max_requests_per_minute: 699

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