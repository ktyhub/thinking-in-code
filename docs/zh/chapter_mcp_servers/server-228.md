# OpenMCP-228

## 基本信息

- **开发者/组织**：EdgeMCP Inc.
- **许可证**：AGPL v3
- **版本**：v1.3.7
- **发布日期**：2023-10-07
- **官方网站**：https://openmcp-228.example.com
- **源代码仓库**：https://github.com/edgemcp-inc./openmcp-228

## 功能特点

OpenMCP-228是一款专业的MCP服务器，具有以下主要特点：

- **向量数据库连接**：支持高效的向量数据库连接能力
- **流式响应支持**：支持高效的流式响应支持能力
- **高性能上下文处理**：支持高效的高性能上下文处理能力
- **文档库集成**：支持高效的文档库集成能力
- **长期记忆管理**：支持高效的长期记忆管理能力


## 技术规格

- **支持的模型**：Gemini Pro, Yi-34B, GPT-4
- **部署方式**：AWS Lambda, Azure Functions, 容器集群
- **语言/框架**：C++ / FastAPI
- **性能指标**：每秒处理约3617请求，平均延迟<421ms

## API示例

```json
// 查询请求示例
{
  "model": "gpt-4",
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

1. **科学文献分析**：利用OpenMCP-228提供的流式响应支持能力，实现高效的科学文献分析
2. **医疗信息管理**：利用OpenMCP-228提供的高性能上下文处理能力，实现高效的医疗信息管理


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8883
  threads: 31

security:
  auth_required: true
  rate_limiting: true
  max_requests_per_minute: 1108

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