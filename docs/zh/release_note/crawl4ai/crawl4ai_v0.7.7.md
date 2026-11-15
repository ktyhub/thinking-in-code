---
title: "crawl4ai v0.7.7"
project: "crawl4ai"
repo: "unclecode/crawl4ai"
tag: "v0.7.7"
version: "v0.7.7"
published: "2025-11-14"
type: "patch"
lang: "zh"
---

# crawl4ai v0.7.7

## 🎉 Crawl4AI v0.7.7 发布！

此版本引入了具有企业级实时监控功能的完整自托管平台。此版本将 Crawl4AI Docker 从一个简单的容器化爬虫转变为一个具有完全操作透明度和控制力的生产就绪平台。

## 🚀 新消息

  主要特点：实时监控和自托管平台

  Docker 部署现在包括：

  - 📊 交互式监控仪表板 (/dashboard)
  - 🔌综合监控器API
  - ⚡ WebSocket 流媒体
  - 🔥 智能浏览器池（3 层架构）
  - 🧹 清洁工系统
  - 📈 生产就绪

  🐛 关键错误修复
  - 修复了异步 LLM 提取阻塞问题 (#1055) - 现在支持真正的并行处理
  - 修复了具有指数退避的 CDP 端点验证 (#1445)
  - 修复了 arun_many 始终返回列表，即使出现异常

  配置与特点

  - 更新了浏览器和爬虫配置文档以匹配实现
  - 增强了 DFS 深度抓取策略，具有可见的 URL 跟踪
  - 修复了 AsyncUrlSeeder 中的站点地图解析和 URL 规范化 (#1559)
  - 修复了托管浏览器中的视口配置（#1490）
  - 修复了remove_overlay_elements功能（#1396）

  Docker 与基础设施

  - 修复了 LLM API 密钥处理以支持多提供商
  - 所有配置的标准化 Docker 端口为 11235
  - 通过全面的状态代码改进了错误处理
  - 修复了 /crawl 和 /crawl/stream 端点中的 fit_html 序列化

  安全性

  - 将 pyOpenSSL 从 >=24.3.0 更新为 >=25.3.0（安全漏洞修复）
  - 添加了安全更新的验证测试

### 📦 安装

**PyPI：**
```bash
pip install crawl4ai==0.7.7
```

**Docker：**
```bash
docker pull unclecode/crawl4ai:0.7.7
docker pull unclecode/crawl4ai:latest
```

**注意：** Docker 图像正在构建中，很快就会提供。
检查 [Docker 发布工作流程](https://github.com/unclecode/crawl4ai/actions/workflows/docker-release.yml) 的构建状态。

### 📝 发生了什么变化
详细信息请参见 [CHANGELOG.md](https://github.com/unclecode/crawl4ai/blob/main/CHANGELOG.md)。

---

> 📦 仓库：[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) · 🏷️ 版本：`v0.7.7` · 📅 发布：2025-11-14 · [查看英文原版 Release](https://github.com/unclecode/crawl4ai/releases/tag/v0.7.7)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
