# FusionMCP-966

## 基本信息

- **开发者/组织**：EdgeMCP Solutions
- **许可证**：开源 (Apache 2.0)
- **版本**：v3.0.7
- **发布日期**：2024-12-28
- **官方网站**：https://fusionmcp-966.example.com
- **源代码仓库**：https://github.com/edgemcp-solutions/fusionmcp-966

## 功能特点

FusionMCP-966是一款专业的MCP服务器，具有以下主要特点：

- **上下文压缩优化**：支持高效的上下文压缩优化能力
- **流式响应支持**：支持高效的流式响应支持能力
- **自定义插件系统**：支持高效的自定义插件系统能力


## 技术规格

- **支持的模型**：Llama 3-70B, GPT-4-Turbo, GPT-4, Llama 3-8B
- **部署方式**：AWS Lambda
- **语言/框架**：C++ / Spring Boot
- **性能指标**：每秒处理约2254请求，平均延迟<255ms

## API示例

```json
// 查询请求示例
{
  "model": "gpt-4-turbo",
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

1. **多模态内容创建**：利用FusionMCP-966提供的上下文压缩优化能力，实现高效的多模态内容创建
2. **内部企业搜索**：利用FusionMCP-966提供的流式响应支持能力，实现高效的内部企业搜索


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8337
  threads: 16

security:
  auth_required: true
  rate_limiting: false
  max_requests_per_minute: 1398

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