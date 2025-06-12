# MCPConnect-336

## 基本信息

- **开发者/组织**：VectorMCP LLC
- **许可证**：双重许可 (商业+开源)
- **版本**：v1.9.1
- **发布日期**：2023-10-27
- **官方网站**：https://mcpconnect-336.example.com
- **源代码仓库**：https://github.com/vectormcp-llc/mcpconnect-336

## 功能特点

MCPConnect-336是一款专业的MCP服务器，具有以下主要特点：

- **多模态内容处理**：支持高效的多模态内容处理能力
- **企业级安全**：支持高效的企业级安全能力
- **长期记忆管理**：支持高效的长期记忆管理能力
- **自定义插件系统**：支持高效的自定义插件系统能力
- **知识图谱支持**：支持高效的知识图谱支持能力


## 技术规格

- **支持的模型**：Yi-34B, LLaMa-2
- **部署方式**：Docker, 边缘设备, Kubernetes
- **语言/框架**：Java / Rocket
- **性能指标**：每秒处理约3333请求，平均延迟<170ms

## API示例

```json
// 查询请求示例
{
  "model": "llama-2",
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

1. **内容审核与分类**：利用MCPConnect-336提供的多模态内容处理能力，实现高效的内容审核与分类
2. **商业情报收集**：利用MCPConnect-336提供的知识图谱支持能力，实现高效的商业情报收集


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8435
  threads: 4

security:
  auth_required: false
  rate_limiting: true
  max_requests_per_minute: 3195

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