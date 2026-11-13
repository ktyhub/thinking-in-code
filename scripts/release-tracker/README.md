# Release 追踪采集流水线

每日自动采集追踪仓库的新 Release，翻译为中文生成站点页面，实现每日新增 SEO 内容。

## 工作原理

```
config.json（追踪仓库列表）
    │
    ▼  每日 09:30（北京时间）GitHub Actions 定时触发
collect.py
    ├── GitHub API 拉取每个仓库最新 Release（GITHUB_TOKEN 提升限额）
    ├── 对比 state.json 已知 tag，筛出新版本（每仓库最多 3 个/次，全站 25 个/次）
    ├── translate.py 翻译（Google 免费公开端点，无 Key 无费用）
    │     └── Markdown 保护：代码块/行内代码/URL 先占位再翻译后还原
    ├── 生成 docs/zh/release_note/{repo}/{repo}_{tag}.md
    └── 更新 state.json + git commit → 触发 ci 部署 → 新页面进入 sitemap
```

## 文件说明

| 文件 | 用途 |
|------|------|
| `config.json` | 追踪仓库列表与限额参数，**加仓库改这里** |
| `collect.py` | 采集主脚本（纯 Python 标准库，无第三方依赖） |
| `translate.py` | 免费翻译模块（Google 公开端点，带 Markdown 结构保护） |
| `state.json` | 已采集 tag 的去重状态（自动维护，随脚本一起提交） |

## 手动运行

```bash
# 本地测试（不写文件）
python scripts/release-tracker/collect.py --dry-run --limit 3 --repos apache/kafka

# 只跑某个仓库
GITHUB_TOKEN=ghp_xxx python scripts/release-tracker/collect.py --repos apache/kafka
```

也可以在 GitHub 仓库 Actions 页手动触发 `daily-release-tracker` workflow（workflow_dispatch）。

## 翻译方案说明

- **主通道**：Google 翻译网页版公开端点（`translate.googleapis.com`）——免费、无需 API Key，与 Stags Tracker 桌面应用同款方案
- 注意：Google Cloud Translation API 是**收费**服务，不要混淆
- 若公开端点未来不可用，备选开源方案：自建 [LibreTranslate](https://libretranslate.com/) 或本地 [Argos Translate](https://www.argosopentech.com/)，只需替换 `translate.py` 中的 `_translate_chunk`
- 单条翻译失败自动重试 3 次，仍失败则降级保留英文原文并给出提示，不会中断整批任务

## 调参建议

- `max_total_per_run: 25`：控制每日新增页面数（SEO 上每天稳定新增 10-30 页比较健康，突增大量低质页反而不好）
- 追踪仓库优先选**站点已有主题相关**的（Kafka/Dubbo/K8s/Spring 等），保持内容垂直度
- `include_prereleases: false`：默认不采集预发布版本，避免 rc 版本刷屏
