# ServerMCP-28

## 基本信息

- **开发者/组织**：EnterpriseContext Computing
- **许可证**：开源 (BSD)
- **版本**：v3.4.5
- **发布日期**：2023-07-30
- **官方网站**：https://servermcp-28.example.com
- **源代码仓库**：https://github.com/enterprisecontext-computing/servermcp-28

## 功能特点

ServerMCP-28是一款专业的MCP服务器，具有以下主要特点：

- **细粒度访问控制**：支持高效的细粒度访问控制能力
- **上下文压缩优化**：支持高效的上下文压缩优化能力
- **流式响应支持**：支持高效的流式响应支持能力


## 技术规格

- **支持的模型**：Claude 3 Opus, Anthropic Claude
- **部署方式**：Azure Functions
- **语言/框架**：Go / 原生实现
- **性能指标**：每秒处理约3217请求，平均延迟<463ms

## API示例

```json
// 查询请求示例
{
  "model": "claude-3-opus",
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

1. **研究数据分析**：利用ServerMCP-28提供的上下文压缩优化能力，实现高效的研究数据分析
2. **医疗信息管理**：利用ServerMCP-28提供的流式响应支持能力，实现高效的医疗信息管理
3. **多语言内容创建**：利用ServerMCP-28提供的细粒度访问控制能力，实现高效的多语言内容创建


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8653
  threads: 18

security:
  auth_required: false
  rate_limiting: true
  max_requests_per_minute: 2831

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