# EdgeMCP-393

## 基本信息

- **开发者/组织**：ProContext Computing
- **许可证**：开源 (MIT)
- **版本**：v2.7.3
- **发布日期**：2023-03-16
- **官方网站**：https://edgemcp-393.example.com
- **源代码仓库**：https://github.com/procontext-computing/edgemcp-393

## 功能特点

EdgeMCP-393是一款专业的MCP服务器，具有以下主要特点：

- **高并发处理**：支持高效的高并发处理能力
- **语义搜索优化**：支持高效的语义搜索优化能力
- **长期记忆管理**：支持高效的长期记忆管理能力
- **文档库集成**：支持高效的文档库集成能力
- **低延迟响应**：支持高效的低延迟响应能力


## 技术规格

- **支持的模型**：Mistral Medium, Falcon-180B, Anthropic Claude
- **部署方式**：Docker, AWS Lambda, 虚拟机
- **语言/框架**：Java / NestJS
- **性能指标**：每秒处理约2800请求，平均延迟<307ms

## API示例

```json
// 查询请求示例
{
  "model": "mistral-medium",
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

1. **商业情报收集**：利用EdgeMCP-393提供的语义搜索优化能力，实现高效的商业情报收集
2. **多模态内容创建**：利用EdgeMCP-393提供的文档库集成能力，实现高效的多模态内容创建
3. **客户支持系统**：利用EdgeMCP-393提供的长期记忆管理能力，实现高效的客户支持系统


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8915
  threads: 11

security:
  auth_required: true
  rate_limiting: true
  max_requests_per_minute: 2347

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