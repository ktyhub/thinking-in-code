# ProContext-893

## 基本信息

- **开发者/组织**：UniMCP Technologies
- **许可证**：AGPL v3
- **版本**：v5.2.6
- **发布日期**：2024-07-01
- **官方网站**：https://procontext-893.example.com
- **源代码仓库**：https://github.com/unimcp-technologies/procontext-893

## 功能特点

ProContext-893是一款专业的MCP服务器，具有以下主要特点：

- **自定义插件系统**：支持高效的自定义插件系统能力
- **上下文压缩优化**：支持高效的上下文压缩优化能力
- **多语言支持**：支持高效的多语言支持能力


## 技术规格

- **支持的模型**：Llama 3, Yi-34B, GLM-4, Gemini Pro
- **部署方式**：Docker, 容器集群, 虚拟机
- **语言/框架**：Kotlin / NestJS
- **性能指标**：每秒处理约2236请求，平均延迟<224ms

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

1. **学术研究助手**：利用ProContext-893提供的自定义插件系统能力，实现高效的学术研究助手
2. **企业知识库集成**：利用ProContext-893提供的多语言支持能力，实现高效的企业知识库集成


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8167
  threads: 21

security:
  auth_required: false
  rate_limiting: true
  max_requests_per_minute: 2757

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