# GlobalMCP-149

## 基本信息

- **开发者/组织**：ProContext Ltd.
- **许可证**：开源 (BSD)
- **版本**：v3.9.3
- **发布日期**：2024-02-17
- **官方网站**：https://globalmcp-149.example.com
- **源代码仓库**：https://github.com/procontext-ltd./globalmcp-149

## 功能特点

GlobalMCP-149是一款专业的MCP服务器，具有以下主要特点：

- **自动扩缩容**：支持高效的自动扩缩容能力
- **语义搜索优化**：支持高效的语义搜索优化能力
- **流式响应支持**：支持高效的流式响应支持能力


## 技术规格

- **支持的模型**：GLM-4, Claude 3 Opus, Llama 3-8B, Falcon-40B
- **部署方式**：边缘设备, AWS Lambda
- **语言/框架**：Rust / Flask
- **性能指标**：每秒处理约4043请求，平均延迟<95ms

## API示例

```json
// 查询请求示例
{
  "model": "glm-4",
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

1. **医疗信息管理**：利用GlobalMCP-149提供的流式响应支持能力，实现高效的医疗信息管理
2. **科学文献分析**：利用GlobalMCP-149提供的语义搜索优化能力，实现高效的科学文献分析


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8940
  threads: 26

security:
  auth_required: true
  rate_limiting: true
  max_requests_per_minute: 1030

models:
  - name: "gpt-4"
    provider: "openai"
    api_key: "${{OPENAI_API_KEY}}"

connectors:
  - type: "document_store"
    id: "main_docs"
    url: "http://docs-server:9200"
  - type: "vector_db"
    id: "embeddings"
    url: "http://vector-db:6333"
```