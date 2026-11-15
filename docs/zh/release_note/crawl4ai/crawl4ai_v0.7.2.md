---
title: "crawl4ai v0.7.2"
project: "crawl4ai"
repo: "unclecode/crawl4ai"
tag: "v0.7.2"
version: "v0.7.2"
published: "2025-07-25"
type: "patch"
lang: "zh"
---

# crawl4ai v0.7.2

# 🚀 Crawl4AI v0.7.2：CI/CD 和依赖项优化更新

*2025 年 7 月 25 日 • 阅读时间 3 分钟*

---

此版本引入了自动化 CI/CD 管道以实现无缝发布，并优化了依赖项以实现更轻、更高效的包。

## 🎯 新消息

### 🔄 自动发布管道
- **GitHub Actions CI/CD**：自动 PyPI 和 Docker Hub 在标签推送上发布
- **多平台 Docker 映像**：支持 AMD64 和 ARM64 架构
- **版本一致性检查**：确保标签、封装和 Docker 版本一致
- **自动 release notes**：自动创建的 GitHub 版本

### 📦 依赖优化
- **将句子转换器移至可选依赖项**：显着减少默认安装大小
- **更轻的 Docker 图像**：优化的 Docker 文件可实现更快的构建和更小的图像
- **更好的依赖关系管理**：核心依赖关系与可选依赖关系清晰分离

## 🏗️ CI/CD 管道

新的自动化发布流程可确保一致、可靠的发布：

```yaml
# Trigger releases with a simple tag
git tag v0.7.2
git push origin v0.7.2

# Automatically:
# ✅ Validates version consistency
# ✅ Builds and publishes to PyPI
# ✅ Builds multi-platform Docker images
# ✅ Pushes to Docker Hub with proper tags
# ✅ Creates GitHub release
```

## 💾 打火机安装

默认安装现在明显更小：

```bash
# Core installation (smaller, faster)
pip install crawl4ai==0.7.2

# With ML features (includes sentence-transformers)
pip install crawl4ai[transformer]==0.7.2

# Full installation
pip install crawl4ai[all]==0.7.2
```

## 🐳 Docker 改进

增强了 Docker 对多平台图像的支持：

```bash
# Pull the latest version
docker pull unclecode/crawl4ai:0.7.2
docker pull unclecode/crawl4ai:latest

# Available tags:
# - unclecode/crawl4ai:0.7.2 (specific version)
# - unclecode/crawl4ai:0.7 (minor version)
# - unclecode/crawl4ai:0 (major version)
# - unclecode/crawl4ai:latest
```

## 🔧 技术细节

### 依赖关系更改
- `sentence-transformers` 从必需依赖项移至可选依赖项
- 将默认安装减少约 500MB
- 不需要变压器功能时不会影响功能

### CI/CD 配置
- GitHub 自动发布的操作工作流程
- 发布前进行版本验证
- 并行 PyPI 和 Docker 集线器部署
- Docker图像的自动标记策略

## 🚀 安装

```bash
pip install crawl4ai==0.7.2
```

无重大更改 - 直接从 v0.7.0 或 v0.7.1 升级。

 - -

问题？问题？ 
- GitHub：[github.com/unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)
- 不和谐：[discord.gg/crawl4ai](https://discord.gg/jP8KfhDhyN)
- Twitter：[@unclecode](https://x.com/unclecode)

*附注新的 CI/CD 管道将使未来的版本更快、更可靠。感谢您在我们改进发布流程过程中的耐心等待！*

---

> 📦 仓库：[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) · 🏷️ 版本：`v0.7.2` · 📅 发布：2025-07-25 · [查看英文原版 Release](https://github.com/unclecode/crawl4ai/releases/tag/v0.7.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
