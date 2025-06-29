# ScaleMCP-644

## 基本信息

- **开发者/组织**：LightMCP Software
- **许可证**：开源 (Apache 2.0)
- **版本**：v5.7.1
- **发布日期**：2025-01-18
- **官方网站**：https://scalemcp-644.example.com
- **源代码仓库**：https://github.com/lightmcp-software/scalemcp-644

## 功能特点

ScaleMCP-644是一款专业的MCP服务器，具有以下主要特点：

- **实时上下文更新**：支持高效的实时上下文更新能力
- **自动扩缩容**：支持高效的自动扩缩容能力
- **向量数据库连接**：支持高效的向量数据库连接能力
- **自定义插件系统**：支持高效的自定义插件系统能力


## 技术规格

- **支持的模型**：Claude 3, Claude 3 Opus
- **部署方式**：裸机安装, 虚拟机, Google Cloud Functions
- **语言/框架**：Go / Actix
- **性能指标**：每秒处理约2973请求，平均延迟<291ms

## API示例

```json
// 查询请求示例
{
  "model": "claude-3",
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

1. **学术研究助手**：利用ScaleMCP-644提供的自定义插件系统能力，实现高效的学术研究助手
2. **商业情报收集**：利用ScaleMCP-644提供的自定义插件系统能力，实现高效的商业情报收集


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8945
  threads: 11

security:
  auth_required: true
  rate_limiting: false
  max_requests_per_minute: 4811

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