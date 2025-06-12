# MCPConnect-91

## 基本信息

- **开发者/组织**：MCP Software
- **许可证**：开源 (BSD)
- **版本**：v3.6.5
- **发布日期**：2023-05-21
- **官方网站**：https://mcpconnect-91.example.com
- **源代码仓库**：https://github.com/mcp-software/mcpconnect-91

## 功能特点

MCPConnect-91是一款专业的MCP服务器，具有以下主要特点：

- **知识图谱支持**：支持高效的知识图谱支持能力
- **多语言支持**：支持高效的多语言支持能力
- **审计日志系统**：支持高效的审计日志系统能力
- **实时上下文更新**：支持高效的实时上下文更新能力


## 技术规格

- **支持的模型**：Mistral Large, Anthropic Claude, GPT-4-Turbo, Llama 3-8B
- **部署方式**：裸机安装
- **语言/框架**：Scala / Gin
- **性能指标**：每秒处理约3290请求，平均延迟<399ms

## API示例

```json
// 查询请求示例
{
  "model": "mistral-large",
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

1. **金融分析与预测**：利用MCPConnect-91提供的多语言支持能力，实现高效的金融分析与预测
2. **内容审核与分类**：利用MCPConnect-91提供的实时上下文更新能力，实现高效的内容审核与分类
3. **多模态内容创建**：利用MCPConnect-91提供的实时上下文更新能力，实现高效的多模态内容创建


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8541
  threads: 19

security:
  auth_required: true
  rate_limiting: true
  max_requests_per_minute: 2124

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