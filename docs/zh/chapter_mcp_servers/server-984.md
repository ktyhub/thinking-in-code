# MCP-984

## 基本信息

- **开发者/组织**：LightMCP Ltd.
- **许可证**：开源 (GPL v3)
- **版本**：v1.9.5
- **发布日期**：2023-10-13
- **官方网站**：https://mcp-984.example.com
- **源代码仓库**：https://github.com/lightmcp-ltd./mcp-984

## 功能特点

MCP-984是一款专业的MCP服务器，具有以下主要特点：

- **分布式架构支持**：支持高效的分布式架构支持能力
- **流式响应支持**：支持高效的流式响应支持能力
- **自动扩缩容**：支持高效的自动扩缩容能力
- **细粒度访问控制**：支持高效的细粒度访问控制能力


## 技术规格

- **支持的模型**：Llama 3-70B, Gemini Pro
- **部署方式**：Azure Functions
- **语言/框架**：Python / Actix
- **性能指标**：每秒处理约3317请求，平均延迟<231ms

## API示例

```json
// 查询请求示例
{
  "model": "llama-3-70b",
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

1. **金融分析与预测**：利用MCP-984提供的流式响应支持能力，实现高效的金融分析与预测
2. **实时决策支持**：利用MCP-984提供的流式响应支持能力，实现高效的实时决策支持
3. **产品推荐系统**：利用MCP-984提供的流式响应支持能力，实现高效的产品推荐系统


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8610
  threads: 25

security:
  auth_required: false
  rate_limiting: false
  max_requests_per_minute: 4516

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