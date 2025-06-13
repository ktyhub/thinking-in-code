# UniMCP-155

## 基本信息

- **开发者/组织**：AIContext Foundation
- **许可证**：开源 (MIT)
- **版本**：v3.9.8
- **发布日期**：2023-09-28
- **官方网站**：https://unimcp-155.example.com
- **源代码仓库**：https://github.com/aicontext-foundation/unimcp-155

## 功能特点

UniMCP-155是一款专业的MCP服务器，具有以下主要特点：

- **多模态内容处理**：支持高效的多模态内容处理能力
- **上下文压缩优化**：支持高效的上下文压缩优化能力
- **多语言支持**：支持高效的多语言支持能力


## 技术规格

- **支持的模型**：LLaMa-2, Llama 3-8B, GPT-4-Turbo
- **部署方式**：容器集群, Google Cloud Functions, Kubernetes
- **语言/框架**：C# / Express
- **性能指标**：每秒处理约235请求，平均延迟<55ms

## API示例

```json
// 查询请求示例
{
  "model": "gpt-4-turbo",
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

1. **内容审核与分类**：利用UniMCP-155提供的多模态内容处理能力，实现高效的内容审核与分类
2. **科学文献分析**：利用UniMCP-155提供的多语言支持能力，实现高效的科学文献分析


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8896
  threads: 15

security:
  auth_required: true
  rate_limiting: true
  max_requests_per_minute: 3710

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