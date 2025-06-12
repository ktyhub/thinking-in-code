# EdgeMCP-721

## 基本信息

- **开发者/组织**：EdgeMCP Computing
- **许可证**：开源 (Apache 2.0)
- **版本**：v5.8.0
- **发布日期**：2023-09-20
- **官方网站**：https://edgemcp-721.example.com
- **源代码仓库**：https://github.com/edgemcp-computing/edgemcp-721

## 功能特点

EdgeMCP-721是一款专业的MCP服务器，具有以下主要特点：

- **流式响应支持**：支持高效的流式响应支持能力
- **跨语言理解**：支持高效的跨语言理解能力
- **知识图谱支持**：支持高效的知识图谱支持能力


## 技术规格

- **支持的模型**：BLOOM-176B, Yi-34B
- **部署方式**：Docker, 边缘设备
- **语言/框架**：Rust / Express
- **性能指标**：每秒处理约3322请求，平均延迟<242ms

## API示例

```json
// 查询请求示例
{
  "model": "yi-34b",
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

1. **企业知识库集成**：利用EdgeMCP-721提供的知识图谱支持能力，实现高效的企业知识库集成
2. **研究数据分析**：利用EdgeMCP-721提供的知识图谱支持能力，实现高效的研究数据分析


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8962
  threads: 16

security:
  auth_required: true
  rate_limiting: true
  max_requests_per_minute: 2753

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