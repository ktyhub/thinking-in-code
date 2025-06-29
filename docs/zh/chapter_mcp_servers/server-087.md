# MCPConnect-87

## 基本信息

- **开发者/组织**：ProContext Systems
- **许可证**：开源 (BSD)
- **版本**：v2.8.3
- **发布日期**：2023-04-03
- **官方网站**：https://mcpconnect-87.example.com
- **源代码仓库**：https://github.com/procontext-systems/mcpconnect-87

## 功能特点

MCPConnect-87是一款专业的MCP服务器，具有以下主要特点：

- **长期记忆管理**：支持高效的长期记忆管理能力
- **语义搜索优化**：支持高效的语义搜索优化能力
- **知识图谱支持**：支持高效的知识图谱支持能力


## 技术规格

- **支持的模型**：Llama 3-8B, Claude 3 Opus, Claude 3
- **部署方式**：AWS Lambda, 虚拟机, Serverless架构
- **语言/框架**：C++ / Gin
- **性能指标**：每秒处理约2853请求，平均延迟<142ms

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

1. **金融分析与预测**：利用MCPConnect-87提供的长期记忆管理能力，实现高效的金融分析与预测
2. **智能文档生成**：利用MCPConnect-87提供的语义搜索优化能力，实现高效的智能文档生成


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8025
  threads: 20

security:
  auth_required: true
  rate_limiting: false
  max_requests_per_minute: 1636

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