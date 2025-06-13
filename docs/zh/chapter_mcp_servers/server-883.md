# EdgeMCP-883

## 基本信息

- **开发者/组织**：UniMCP Group
- **许可证**：开源 (Apache 2.0)
- **版本**：v3.9.6
- **发布日期**：2025-02-12
- **官方网站**：https://edgemcp-883.example.com
- **源代码仓库**：https://github.com/unimcp-group/edgemcp-883

## 功能特点

EdgeMCP-883是一款专业的MCP服务器，具有以下主要特点：

- **知识图谱支持**：支持高效的知识图谱支持能力
- **低延迟响应**：支持高效的低延迟响应能力
- **高性能上下文处理**：支持高效的高性能上下文处理能力


## 技术规格

- **支持的模型**：Mistral Large, Claude 3 Opus, Mistral Medium
- **部署方式**：AWS Lambda
- **语言/框架**：Rust / Ktor
- **性能指标**：每秒处理约1381请求，平均延迟<174ms

## API示例

```json
// 查询请求示例
{
  "model": "mistral-medium",
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

1. **内容审核与分类**：利用EdgeMCP-883提供的高性能上下文处理能力，实现高效的内容审核与分类
2. **产品推荐系统**：利用EdgeMCP-883提供的知识图谱支持能力，实现高效的产品推荐系统


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8253
  threads: 31

security:
  auth_required: true
  rate_limiting: true
  max_requests_per_minute: 4469

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