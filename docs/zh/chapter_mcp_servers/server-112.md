# LightMCP-112

## 基本信息

- **开发者/组织**：SecureMCP Systems
- **许可证**：开源 (Apache 2.0)
- **版本**：v2.2.3
- **发布日期**：2023-08-27
- **官方网站**：https://lightmcp-112.example.com
- **源代码仓库**：https://github.com/securemcp-systems/lightmcp-112

## 功能特点

LightMCP-112是一款专业的MCP服务器，具有以下主要特点：

- **知识图谱支持**：支持高效的知识图谱支持能力
- **分布式架构支持**：支持高效的分布式架构支持能力
- **长期记忆管理**：支持高效的长期记忆管理能力
- **向量数据库连接**：支持高效的向量数据库连接能力
- **细粒度访问控制**：支持高效的细粒度访问控制能力


## 技术规格

- **支持的模型**：Llama 3, Claude 3 Sonnet
- **部署方式**：Azure Functions, 边缘设备, 虚拟机
- **语言/框架**：Kotlin / Flask
- **性能指标**：每秒处理约3508请求，平均延迟<162ms

## API示例

```json
// 查询请求示例
{
  "model": "claude-3-sonnet",
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

1. **实时决策支持**：利用LightMCP-112提供的知识图谱支持能力，实现高效的实时决策支持
2. **内部企业搜索**：利用LightMCP-112提供的长期记忆管理能力，实现高效的内部企业搜索


## 配置示例

```yaml
server:
  host: 0.0.0.0
  port: 8254
  threads: 29

security:
  auth_required: true
  rate_limiting: true
  max_requests_per_minute: 2974

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