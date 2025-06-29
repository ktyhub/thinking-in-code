# EdgeMCP-85

## 基本信息

- **开发者/组织**：VectorMCP AI
- **许可证**：开源 (GPL v3)
- **版本**：v5.3.5
- **发布日期**：2024-10-12
- **官方网站**：https://edgemcp-85.example.com
- **源代码仓库**：https://github.com/vectormcp-ai/edgemcp-85

## 功能特点

EdgeMCP-85是一款专业的MCP服务器，具有以下主要特点：

- **知识图谱支持**：支持高效的知识图谱支持能力
- **细粒度访问控制**：支持高效的细粒度访问控制能力
- **分布式架构支持**：支持高效的分布式架构支持能力
- **语义搜索优化**：支持高效的语义搜索优化能力


## 技术规格

- **支持的模型**：Llama 3, Yi-34B, Llama 3-70B, Gemini Ultra
- **部署方式**：裸机安装, 边缘设备
- **语言/框架**：Julia / Express
- **性能指标**：每秒处理约2372请求，平均延迟<433ms

## API示例

```json
// 查询请求示例
{
  "model": "llama-3",
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

1. **个性化学习系统**：利用EdgeMCP-85提供的分布式架构支持能力，实现高效的个性化学习系统
2. **商业情报收集**：利用EdgeMCP-85提供的细粒度访问控制能力，实现高效的商业情报收集


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8894
  threads: 28

security:
  auth_required: true
  rate_limiting: true
  max_requests_per_minute: 3219

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