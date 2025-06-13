# MCP-891

## 基本信息

- **开发者/组织**：ServerMCP Networks
- **许可证**：开源 (Mozilla Public License)
- **版本**：v2.9.7
- **发布日期**：2023-08-15
- **官方网站**：https://mcp-891.example.com
- **源代码仓库**：https://github.com/servermcp-networks/mcp-891

## 功能特点

MCP-891是一款专业的MCP服务器，具有以下主要特点：

- **分布式架构支持**：支持高效的分布式架构支持能力
- **文档库集成**：支持高效的文档库集成能力
- **实时上下文更新**：支持高效的实时上下文更新能力


## 技术规格

- **支持的模型**：Yi-34B, Falcon-180B
- **部署方式**：Serverless架构, 容器集群, Google Cloud Functions
- **语言/框架**：Rust / Flask
- **性能指标**：每秒处理约210请求，平均延迟<208ms

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

1. **学术研究助手**：利用MCP-891提供的文档库集成能力，实现高效的学术研究助手
2. **智能文档生成**：利用MCP-891提供的分布式架构支持能力，实现高效的智能文档生成


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8718
  threads: 22

security:
  auth_required: true
  rate_limiting: true
  max_requests_per_minute: 1305

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