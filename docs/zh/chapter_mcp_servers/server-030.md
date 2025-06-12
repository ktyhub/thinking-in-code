# EdgeMCP-30

## 基本信息

- **开发者/组织**：EnterpriseContext Foundation
- **许可证**：开源 (Apache 2.0)
- **版本**：v1.9.1
- **发布日期**：2024-03-27
- **官方网站**：https://edgemcp-30.example.com
- **源代码仓库**：https://github.com/enterprisecontext-foundation/edgemcp-30

## 功能特点

EdgeMCP-30是一款专业的MCP服务器，具有以下主要特点：

- **语义搜索优化**：支持高效的语义搜索优化能力
- **长期记忆管理**：支持高效的长期记忆管理能力
- **多模态内容处理**：支持高效的多模态内容处理能力


## 技术规格

- **支持的模型**：BLOOM-176B, PaLM 2, Claude 3, GPT-4
- **部署方式**：容器集群, Docker, 边缘设备
- **语言/框架**：Python / Actix
- **性能指标**：每秒处理约1131请求，平均延迟<304ms

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

1. **内部企业搜索**：利用EdgeMCP-30提供的长期记忆管理能力，实现高效的内部企业搜索
2. **个性化学习系统**：利用EdgeMCP-30提供的语义搜索优化能力，实现高效的个性化学习系统
3. **科学文献分析**：利用EdgeMCP-30提供的语义搜索优化能力，实现高效的科学文献分析


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8147
  threads: 32

security:
  auth_required: true
  rate_limiting: true
  max_requests_per_minute: 3267

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