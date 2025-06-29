# ProContext-38

## 基本信息

- **开发者/组织**：CloudMCP AI
- **许可证**：开源 (Mozilla Public License)
- **版本**：v4.2.3
- **发布日期**：2023-04-08
- **官方网站**：https://procontext-38.example.com
- **源代码仓库**：https://github.com/cloudmcp-ai/procontext-38

## 功能特点

ProContext-38是一款专业的MCP服务器，具有以下主要特点：

- **流式响应支持**：支持高效的流式响应支持能力
- **高性能上下文处理**：支持高效的高性能上下文处理能力
- **语义搜索优化**：支持高效的语义搜索优化能力


## 技术规格

- **支持的模型**：Mistral Medium, Falcon-180B, GPT-4, Yi-34B
- **部署方式**：虚拟机
- **语言/框架**：Java / NestJS
- **性能指标**：每秒处理约1089请求，平均延迟<481ms

## API示例

```json
// 查询请求示例
{
  "model": "yi-34b",
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

1. **内部企业搜索**：利用ProContext-38提供的高性能上下文处理能力，实现高效的内部企业搜索
2. **研究数据分析**：利用ProContext-38提供的语义搜索优化能力，实现高效的研究数据分析
3. **商业情报收集**：利用ProContext-38提供的流式响应支持能力，实现高效的商业情报收集


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8960
  threads: 21

security:
  auth_required: true
  rate_limiting: true
  max_requests_per_minute: 2534

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