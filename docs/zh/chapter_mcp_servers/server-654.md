# VectorMCP-654

## 基本信息

- **开发者/组织**：MCP Group
- **许可证**：开源 (GPL v3)
- **版本**：v5.6.4
- **发布日期**：2023-08-02
- **官方网站**：https://vectormcp-654.example.com
- **源代码仓库**：https://github.com/mcp-group/vectormcp-654

## 功能特点

VectorMCP-654是一款专业的MCP服务器，具有以下主要特点：

- **细粒度访问控制**：支持高效的细粒度访问控制能力
- **自定义插件系统**：支持高效的自定义插件系统能力
- **上下文压缩优化**：支持高效的上下文压缩优化能力
- **长期记忆管理**：支持高效的长期记忆管理能力


## 技术规格

- **支持的模型**：Yi-34B, Falcon-40B
- **部署方式**：裸机安装, 边缘设备, Kubernetes
- **语言/框架**：Python / Ktor
- **性能指标**：每秒处理约4539请求，平均延迟<340ms

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

1. **个性化学习系统**：利用VectorMCP-654提供的上下文压缩优化能力，实现高效的个性化学习系统
2. **企业知识库集成**：利用VectorMCP-654提供的细粒度访问控制能力，实现高效的企业知识库集成


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8150
  threads: 19

security:
  auth_required: true
  rate_limiting: true
  max_requests_per_minute: 1851

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