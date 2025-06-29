# MCP Server 贡献指南

感谢您有兴趣为MCP Server收录目录做出贡献！本指南将帮助您了解如何提交新的MCP Server或更新现有条目。

## 提交新的MCP Server

如果您开发了一个新的MCP Server或发现了一个尚未被收录的服务器，请按照以下步骤提交：

### 提交要求

新提交的MCP Server应满足以下条件：

1. 符合MCP (Model Context Protocol)标准规范
2. 有可访问的文档或API描述
3. 至少有一个稳定的发行版本
4. 有明确的许可证信息

### 提交流程

1. Fork本仓库到您的GitHub账户
2. 创建一个新分支：`git checkout -b add-new-mcp-server`
3. 在`docs/zh/chapter_mcp_servers/`目录中创建新的Markdown文件，使用格式`server-XXX.md`
4. 按照[模板](#提交模板)填写服务器信息
5. 提交Pull Request，并在描述中简要介绍该服务器的特点

## 更新现有条目

如果您想更新现有MCP Server的信息，请：

1. Fork本仓库到您的GitHub账户
2. 创建一个新分支：`git checkout -b update-mcp-server`
3. 更新相关的Markdown文件
4. 提交Pull Request，并在描述中说明更新的内容和原因

## 提交模板

创建新MCP Server条目时，请使用以下模板：


# [服务器名称]

## 基本信息

- **开发者/组织**：[开发者或组织名称]
- **许可证**：[许可证类型]
- **版本**：[最新稳定版本]
- **发布日期**：[最近发布日期]
- **官方网站**：[网站URL]
- **源代码仓库**：[GitHub/GitLab等URL]

## 功能特点

[在此描述该MCP Server的主要功能和特点]

## 技术规格

- **支持的模型**：[列出支持的LLM模型]
- **部署方式**：[Docker/Kubernetes/裸机等]
- **语言/框架**：[使用的编程语言和框架]
- **性能指标**：[性能数据，如每秒请求数、延迟等]

## API示例

```json
// API请求示例
{
  "example": "request"
}
```

## 使用案例

[描述几个实际应用场景或使用案例]

## 配置示例

[提供基本配置示例]
```

感谢您的贡献！
