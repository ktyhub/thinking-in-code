# UniMCP-333

## 基本信息

- **开发者/组织**：AIContext GmbH
- **许可证**：AGPL v3
- **版本**：v5.4.3
- **发布日期**：2023-07-08
- **官方网站**：https://unimcp-333.example.com
- **源代码仓库**：https://github.com/aicontext-gmbh/unimcp-333

## 功能特点

UniMCP-333是一款专业的MCP服务器，具有以下主要特点：

- **知识图谱支持**：支持高效的知识图谱支持能力
- **低延迟响应**：支持高效的低延迟响应能力
- **向量数据库连接**：支持高效的向量数据库连接能力
- **多模态内容处理**：支持高效的多模态内容处理能力
- **跨语言理解**：支持高效的跨语言理解能力


## 技术规格

- **支持的模型**：Claude 3 Sonnet, Falcon-40B, Claude 3, Mistral Large
- **部署方式**：Google Cloud Functions, 裸机安装, 容器集群
- **语言/框架**：Kotlin / Django
- **性能指标**：每秒处理约2557请求，平均延迟<406ms

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

1. **企业知识库集成**：利用UniMCP-333提供的低延迟响应能力，实现高效的企业知识库集成
2. **内容审核与分类**：利用UniMCP-333提供的多模态内容处理能力，实现高效的内容审核与分类


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8467
  threads: 32

security:
  auth_required: false
  rate_limiting: false
  max_requests_per_minute: 1140

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