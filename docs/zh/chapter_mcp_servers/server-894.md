# OpenMCP-894

## 基本信息

- **开发者/组织**：SmartContext GmbH
- **许可证**：商业订阅
- **版本**：v5.6.9
- **发布日期**：2023-11-09
- **官方网站**：https://openmcp-894.example.com
- **源代码仓库**：https://github.com/smartcontext-gmbh/openmcp-894

## 功能特点

OpenMCP-894是一款专业的MCP服务器，具有以下主要特点：

- **自定义插件系统**：支持高效的自定义插件系统能力
- **多语言支持**：支持高效的多语言支持能力
- **上下文压缩优化**：支持高效的上下文压缩优化能力


## 技术规格

- **支持的模型**：BLOOM-176B, Llama 3-8B, GPT-4-Turbo
- **部署方式**：容器集群, 边缘设备, 裸机安装
- **语言/框架**：Julia / Gin
- **性能指标**：每秒处理约935请求，平均延迟<399ms

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

1. **客户支持系统**：利用OpenMCP-894提供的上下文压缩优化能力，实现高效的客户支持系统
2. **多语言内容创建**：利用OpenMCP-894提供的多语言支持能力，实现高效的多语言内容创建


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8494
  threads: 26

security:
  auth_required: false
  rate_limiting: false
  max_requests_per_minute: 3902

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