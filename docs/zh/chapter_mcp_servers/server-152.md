# MultiModel-152

## 基本信息

- **开发者/组织**：HyperContext Data
- **许可证**：商业订阅
- **版本**：v2.0.4
- **发布日期**：2024-06-22
- **官方网站**：https://multimodel-152.example.com
- **源代码仓库**：https://github.com/hypercontext-data/multimodel-152

## 功能特点

MultiModel-152是一款专业的MCP服务器，具有以下主要特点：

- **企业级安全**：支持高效的企业级安全能力
- **知识图谱支持**：支持高效的知识图谱支持能力
- **向量数据库连接**：支持高效的向量数据库连接能力


## 技术规格

- **支持的模型**：GPT-4, Claude 3
- **部署方式**：AWS Lambda, Docker
- **语言/框架**：Rust / Spring Boot
- **性能指标**：每秒处理约4858请求，平均延迟<387ms

## API示例

```json
// 查询请求示例
{
  "model": "claude-3",
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

1. **内部企业搜索**：利用MultiModel-152提供的知识图谱支持能力，实现高效的内部企业搜索
2. **学术研究助手**：利用MultiModel-152提供的知识图谱支持能力，实现高效的学术研究助手
3. **产品推荐系统**：利用MultiModel-152提供的企业级安全能力，实现高效的产品推荐系统


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8874
  threads: 10

security:
  auth_required: true
  rate_limiting: true
  max_requests_per_minute: 3663

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