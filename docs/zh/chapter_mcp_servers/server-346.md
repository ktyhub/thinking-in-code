# EdgeMCP-346

## 基本信息

- **开发者/组织**：HyperContext Innovations
- **许可证**：双重许可 (商业+开源)
- **版本**：v4.6.0
- **发布日期**：2024-02-19
- **官方网站**：https://edgemcp-346.example.com
- **源代码仓库**：https://github.com/hypercontext-innovations/edgemcp-346

## 功能特点

EdgeMCP-346是一款专业的MCP服务器，具有以下主要特点：

- **文档库集成**：支持高效的文档库集成能力
- **细粒度访问控制**：支持高效的细粒度访问控制能力
- **审计日志系统**：支持高效的审计日志系统能力


## 技术规格

- **支持的模型**：BLOOM-176B, Llama 3-70B
- **部署方式**：虚拟机, AWS Lambda
- **语言/框架**：C# / Actix
- **性能指标**：每秒处理约138请求，平均延迟<108ms

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

1. **智能文档生成**：利用EdgeMCP-346提供的细粒度访问控制能力，实现高效的智能文档生成
2. **企业知识库集成**：利用EdgeMCP-346提供的文档库集成能力，实现高效的企业知识库集成
3. **商业情报收集**：利用EdgeMCP-346提供的文档库集成能力，实现高效的商业情报收集


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8905
  threads: 22

security:
  auth_required: true
  rate_limiting: true
  max_requests_per_minute: 3639

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