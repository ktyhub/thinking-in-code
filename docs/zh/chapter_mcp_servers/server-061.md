# ScaleMCP-61

## 基本信息

- **开发者/组织**：MCPConnect AI
- **许可证**：开源 (GPL v3)
- **版本**：v1.8.2
- **发布日期**：2023-09-14
- **官方网站**：https://scalemcp-61.example.com
- **源代码仓库**：https://github.com/mcpconnect-ai/scalemcp-61

## 功能特点

ScaleMCP-61是一款专业的MCP服务器，具有以下主要特点：

- **向量数据库连接**：支持高效的向量数据库连接能力
- **语义搜索优化**：支持高效的语义搜索优化能力
- **审计日志系统**：支持高效的审计日志系统能力
- **企业级安全**：支持高效的企业级安全能力
- **流式响应支持**：支持高效的流式响应支持能力


## 技术规格

- **支持的模型**：GPT-4-Turbo, Claude 3 Sonnet, GPT-4, Gemini Ultra
- **部署方式**：Docker, Serverless架构
- **语言/框架**：Go / Actix
- **性能指标**：每秒处理约2925请求，平均延迟<434ms

## API示例

```json
// 查询请求示例
{
  "model": "claude-3-sonnet",
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

1. **企业知识库集成**：利用ScaleMCP-61提供的语义搜索优化能力，实现高效的企业知识库集成
2. **内容审核与分类**：利用ScaleMCP-61提供的向量数据库连接能力，实现高效的内容审核与分类


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8465
  threads: 9

security:
  auth_required: false
  rate_limiting: false
  max_requests_per_minute: 583

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