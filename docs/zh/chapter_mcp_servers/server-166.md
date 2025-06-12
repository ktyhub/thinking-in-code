# EdgeMCP-166

## 基本信息

- **开发者/组织**：UniMCP Computing
- **许可证**：商业许可
- **版本**：v2.6.9
- **发布日期**：2023-06-12
- **官方网站**：https://edgemcp-166.example.com
- **源代码仓库**：https://github.com/unimcp-computing/edgemcp-166

## 功能特点

EdgeMCP-166是一款专业的MCP服务器，具有以下主要特点：

- **低延迟响应**：支持高效的低延迟响应能力
- **自动扩缩容**：支持高效的自动扩缩容能力
- **流式响应支持**：支持高效的流式响应支持能力
- **高并发处理**：支持高效的高并发处理能力


## 技术规格

- **支持的模型**：GPT-4-Turbo, Falcon-180B
- **部署方式**：Google Cloud Functions, 虚拟机
- **语言/框架**：Java / 原生实现
- **性能指标**：每秒处理约4583请求，平均延迟<24ms

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

1. **医疗信息管理**：利用EdgeMCP-166提供的流式响应支持能力，实现高效的医疗信息管理
2. **产品推荐系统**：利用EdgeMCP-166提供的低延迟响应能力，实现高效的产品推荐系统


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8585
  threads: 12

security:
  auth_required: true
  rate_limiting: true
  max_requests_per_minute: 1528

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