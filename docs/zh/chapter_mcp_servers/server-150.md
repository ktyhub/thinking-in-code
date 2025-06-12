# LightMCP-150

## 基本信息

- **开发者/组织**：FastContext LLC
- **许可证**：AGPL v3
- **版本**：v2.0.9
- **发布日期**：2024-10-11
- **官方网站**：https://lightmcp-150.example.com
- **源代码仓库**：https://github.com/fastcontext-llc/lightmcp-150

## 功能特点

LightMCP-150是一款专业的MCP服务器，具有以下主要特点：

- **审计日志系统**：支持高效的审计日志系统能力
- **流式响应支持**：支持高效的流式响应支持能力
- **向量数据库连接**：支持高效的向量数据库连接能力


## 技术规格

- **支持的模型**：BLOOM-176B, GPT-4-Turbo
- **部署方式**：容器集群
- **语言/框架**：Rust / 原生实现
- **性能指标**：每秒处理约3643请求，平均延迟<143ms

## API示例

```json
// 查询请求示例
{
  "model": "bloom-176b",
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

1. **个性化学习系统**：利用LightMCP-150提供的审计日志系统能力，实现高效的个性化学习系统
2. **多模态内容创建**：利用LightMCP-150提供的向量数据库连接能力，实现高效的多模态内容创建
3. **企业知识库集成**：利用LightMCP-150提供的审计日志系统能力，实现高效的企业知识库集成


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8420
  threads: 32

security:
  auth_required: false
  rate_limiting: true
  max_requests_per_minute: 3607

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