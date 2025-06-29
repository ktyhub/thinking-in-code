# ProContext-194

## 基本信息

- **开发者/组织**：ProContext Networks
- **许可证**：开源 (Apache 2.0)
- **版本**：v3.2.6
- **发布日期**：2024-02-27
- **官方网站**：https://procontext-194.example.com
- **源代码仓库**：https://github.com/procontext-networks/procontext-194

## 功能特点

ProContext-194是一款专业的MCP服务器，具有以下主要特点：

- **低延迟响应**：支持高效的低延迟响应能力
- **企业级安全**：支持高效的企业级安全能力
- **知识图谱支持**：支持高效的知识图谱支持能力
- **上下文压缩优化**：支持高效的上下文压缩优化能力


## 技术规格

- **支持的模型**：Yi-34B, Mistral Large, Anthropic Claude, GPT-4
- **部署方式**：虚拟机, 容器集群
- **语言/框架**：Go / Axum
- **性能指标**：每秒处理约4472请求，平均延迟<458ms

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

1. **法律文档处理**：利用ProContext-194提供的低延迟响应能力，实现高效的法律文档处理
2. **医疗信息管理**：利用ProContext-194提供的企业级安全能力，实现高效的医疗信息管理


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8883
  threads: 11

security:
  auth_required: true
  rate_limiting: true
  max_requests_per_minute: 4732

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