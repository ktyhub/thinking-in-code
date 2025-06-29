# OpenMCP-73

## 基本信息

- **开发者/组织**：ServerMCP AI
- **许可证**：专有许可
- **版本**：v3.0.8
- **发布日期**：2024-10-07
- **官方网站**：https://openmcp-73.example.com
- **源代码仓库**：https://github.com/servermcp-ai/openmcp-73

## 功能特点

OpenMCP-73是一款专业的MCP服务器，具有以下主要特点：

- **细粒度访问控制**：支持高效的细粒度访问控制能力
- **高并发处理**：支持高效的高并发处理能力
- **实时上下文更新**：支持高效的实时上下文更新能力


## 技术规格

- **支持的模型**：LLaMa-2, BLOOM-176B, Llama 3
- **部署方式**：边缘设备, 虚拟机
- **语言/框架**：C# / Flask
- **性能指标**：每秒处理约2960请求，平均延迟<118ms

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

1. **内容审核与分类**：利用OpenMCP-73提供的细粒度访问控制能力，实现高效的内容审核与分类
2. **学术研究助手**：利用OpenMCP-73提供的实时上下文更新能力，实现高效的学术研究助手
3. **医疗信息管理**：利用OpenMCP-73提供的细粒度访问控制能力，实现高效的医疗信息管理


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8217
  threads: 10

security:
  auth_required: false
  rate_limiting: true
  max_requests_per_minute: 1701

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