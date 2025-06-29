# MCP-895

## 基本信息

- **开发者/组织**：SecureMCP Cloud
- **许可证**：开源 (Mozilla Public License)
- **版本**：v4.6.9
- **发布日期**：2023-09-23
- **官方网站**：https://mcp-895.example.com
- **源代码仓库**：https://github.com/securemcp-cloud/mcp-895

## 功能特点

MCP-895是一款专业的MCP服务器，具有以下主要特点：

- **语义搜索优化**：支持高效的语义搜索优化能力
- **流式响应支持**：支持高效的流式响应支持能力
- **企业级安全**：支持高效的企业级安全能力
- **分布式架构支持**：支持高效的分布式架构支持能力
- **高性能上下文处理**：支持高效的高性能上下文处理能力


## 技术规格

- **支持的模型**：GLM-4, PaLM 2
- **部署方式**：Azure Functions, 裸机安装
- **语言/框架**：C++ / Ktor
- **性能指标**：每秒处理约4307请求，平均延迟<291ms

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

1. **科学文献分析**：利用MCP-895提供的流式响应支持能力，实现高效的科学文献分析
2. **内容审核与分类**：利用MCP-895提供的流式响应支持能力，实现高效的内容审核与分类
3. **金融分析与预测**：利用MCP-895提供的语义搜索优化能力，实现高效的金融分析与预测


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8891
  threads: 14

security:
  auth_required: false
  rate_limiting: false
  max_requests_per_minute: 2309

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