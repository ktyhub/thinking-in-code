# LightMCP-60

## 基本信息

- **开发者/组织**：MicroContext LLC
- **许可证**：开源 (MIT)
- **版本**：v4.7.6
- **发布日期**：2024-09-23
- **官方网站**：https://lightmcp-60.example.com
- **源代码仓库**：https://github.com/microcontext-llc/lightmcp-60

## 功能特点

LightMCP-60是一款专业的MCP服务器，具有以下主要特点：

- **自动扩缩容**：支持高效的自动扩缩容能力
- **长期记忆管理**：支持高效的长期记忆管理能力
- **多语言支持**：支持高效的多语言支持能力
- **文档库集成**：支持高效的文档库集成能力


## 技术规格

- **支持的模型**：GPT-4, Mistral Medium, Falcon-40B
- **部署方式**：AWS Lambda
- **语言/框架**：Rust / FastAPI
- **性能指标**：每秒处理约2644请求，平均延迟<326ms

## API示例

```json
// 查询请求示例
{
  "model": "falcon-40b",
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

1. **医疗信息管理**：利用LightMCP-60提供的长期记忆管理能力，实现高效的医疗信息管理
2. **多模态内容创建**：利用LightMCP-60提供的长期记忆管理能力，实现高效的多模态内容创建
3. **金融分析与预测**：利用LightMCP-60提供的文档库集成能力，实现高效的金融分析与预测


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8814
  threads: 6

security:
  auth_required: true
  rate_limiting: true
  max_requests_per_minute: 1976

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