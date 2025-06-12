# AIContext-120

## 基本信息

- **开发者/组织**：OpenMCP Group
- **许可证**：开源 (MIT)
- **版本**：v5.7.0
- **发布日期**：2023-06-04
- **官方网站**：https://aicontext-120.example.com
- **源代码仓库**：https://github.com/openmcp-group/aicontext-120

## 功能特点

AIContext-120是一款专业的MCP服务器，具有以下主要特点：

- **上下文压缩优化**：支持高效的上下文压缩优化能力
- **跨语言理解**：支持高效的跨语言理解能力
- **审计日志系统**：支持高效的审计日志系统能力
- **长期记忆管理**：支持高效的长期记忆管理能力


## 技术规格

- **支持的模型**：Gemini Ultra, BLOOM-176B, Llama 3-8B
- **部署方式**：容器集群, Google Cloud Functions
- **语言/框架**：JavaScript / Flask
- **性能指标**：每秒处理约1971请求，平均延迟<263ms

## API示例

```json
// 查询请求示例
{
  "model": "llama-3-8b",
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

1. **多语言内容创建**：利用AIContext-120提供的长期记忆管理能力，实现高效的多语言内容创建
2. **客户支持系统**：利用AIContext-120提供的长期记忆管理能力，实现高效的客户支持系统
3. **内容审核与分类**：利用AIContext-120提供的上下文压缩优化能力，实现高效的内容审核与分类


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8743
  threads: 20

security:
  auth_required: true
  rate_limiting: true
  max_requests_per_minute: 3550

models:
  - name: "llama-3"
    provider: "local"
    model_path: "/models/llama-3-70b"

connectors:
  - type: "document_store"
    id: "main_docs"
    url: "http://docs-server:9200"
  - type: "vector_db"
    id: "embeddings"
    url: "http://vector-db:6333"
```