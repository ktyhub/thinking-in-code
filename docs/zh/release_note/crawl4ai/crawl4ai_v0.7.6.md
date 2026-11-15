---
title: "crawl4ai v0.7.6"
project: "crawl4ai"
repo: "unclecode/crawl4ai"
tag: "v0.7.6"
version: "v0.7.6"
published: "2025-10-22"
type: "patch"
lang: "zh"
---

# crawl4ai v0.7.6

## 🎉 Crawl4AI v0.7.6 发布！

Crawl4AI v0.7.6 - Docker 作业队列 API 的 Webhook 支持

用户现在可以：
  - 将 webhooks 与 /crawl/job 和 /llm/job 端点一起使用
  - 获取实时通知而不是轮询
  - 使用自定义标头配置 webhook 传递
  - 在 webhook 有效负载中包含完整数据
  - 在 config.yml 中设置全局 webhook URL
  - 受益于指数退避的自动重试
 
### 📦 安装

**PyPI：**
```bash
pip install crawl4ai==0.7.6
```

**Docker：**
```bash
docker pull unclecode/crawl4ai:0.7.6
docker pull unclecode/crawl4ai:latest
```

**注意：** Docker 图像正在构建中，很快就会提供。
检查 [Docker 发布工作流程](https://github.com/unclecode/crawl4ai/actions/workflows/docker-release.yml) 的构建状态。

### 📝 发生了什么变化
详细信息请参见 [CHANGELOG.md](https://github.com/unclecode/crawl4ai/blob/main/CHANGELOG.md)。

---

> 📦 仓库：[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) · 🏷️ 版本：`v0.7.6` · 📅 发布：2025-10-22 · [查看英文原版 Release](https://github.com/unclecode/crawl4ai/releases/tag/v0.7.6)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
