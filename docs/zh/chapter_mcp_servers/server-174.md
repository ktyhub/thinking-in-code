# StreamMCP-174

## 基本信息

- **开发者/组织**：ProContext Cloud
- **许可证**：开源 (GPL v3)
- **版本**：v1.9.7
- **发布日期**：2024-01-06
- **官方网站**：https://streammcp-174.example.com
- **源代码仓库**：https://github.com/procontext-cloud/streammcp-174

## 功能特点

StreamMCP-174是一款专业的MCP服务器，具有以下主要特点：

- **自定义插件系统**：支持高效的自定义插件系统能力
- **多语言支持**：支持高效的多语言支持能力
- **知识图谱支持**：支持高效的知识图谱支持能力


## 技术规格

- **支持的模型**：Claude 3 Opus, LLaMa-2
- **部署方式**：Google Cloud Functions
- **语言/框架**：C++ / ASP.NET Core
- **性能指标**：每秒处理约4053请求，平均延迟<156ms

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

1. **内部企业搜索**：利用StreamMCP-174提供的知识图谱支持能力，实现高效的内部企业搜索
2. **医疗信息管理**：利用StreamMCP-174提供的多语言支持能力，实现高效的医疗信息管理
3. **法律文档处理**：利用StreamMCP-174提供的自定义插件系统能力，实现高效的法律文档处理


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8221
  threads: 20

security:
  auth_required: false
  rate_limiting: true
  max_requests_per_minute: 4957

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