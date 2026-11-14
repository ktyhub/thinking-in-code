# Release 追踪与多语言流水线

每日自动采集追踪仓库的新 Release，产出**英文原文（canonical）+ 中文译文**，并把新增条目的摘要增量翻译成 5 种语言，供 7 语言站点使用。

## 全链路

```
config.json（追踪仓库列表）
    │
    ▼  每日 09:30（北京时间）· GitHub Actions
collect.py --translate
    ├── GitHub API 拉取最新 Release（GITHUB_TOKEN 提升限额）
    ├── 对比 state.json，筛出新版本（每仓库 3 个/次，全站 25 个/次）
    ├── 英文原文 → docs/release_note/{repo}/{repo}_{tag}.md   ← canonical
    ├── 中文译文 → docs/zh/release_note/{repo}/{repo}_{tag}.md
    │       └── translate.py：多通道轮询，免费、无 Key
    └── state.json
    │
    ▼
gen_summaries.py（增量，只翻新增 key）
    └── site/src/data/summaries.json  ← 随仓库提交，作为下次的基线
    │
    ▼  git commit → ci workflow（Astro 构建 + GitHub Pages）
7 语言静态站：/ · /zh · /ja · /de · /fr · /es · /pt
```

## 多通道轮询翻译器（translate.py）

批量任务把请求摊到多个独立通道，避免单端点限流；单通道连续失败自动熔断冷却，任务可断点续跑。

| 通道 | 需要 Key | 说明 |
|------|----------|------|
| Google `translate_a/single` (gtx) | 否 | 默认启用 |
| Google `translate_a/single` (dict-chrome-ex) | 否 | 默认启用 |
| Google `translate.google.com/...` | 否 | 默认启用 |
| Google `clients5.google.com/translate_a/t` | 否 | 默认启用 |
| Google `translate.googleapis.com/translate_a/t` | 否 | 默认启用 |
| DeepL API Free | `DEEPL_API_KEY` | 50 万字符/月，欧洲语种质量更好 |
| Cloudflare Workers AI (m2m100) | `CF_ACCOUNT_ID` + `CF_API_TOKEN` | 100 语言，每日免费 neurons |
| LibreTranslate | `LIBRETRANSLATE_URL` | 可自建，无限制 |

后面三个**只要设置对应环境变量就会自动加入轮询池**，无需改代码。

- 调度：Round-Robin + 连续 3 次失败熔断冷却 + 指数退避抖动
- 缓存：SQLite（`.cache/translations.sqlite3`，已 gitignore），按 `sha1(目标语言 + 原文)` 命中，重跑不重复请求
- 结构保护：代码块、行内代码、URL、`{var}` 模板变量、语义化版本号、技术专有名词先占位再还原，避免链接和术语被翻坏
- 实测吞吐：8 并发约 **14 条/秒**，4435 条全量约 6 分钟，0 失败

```bash
python scripts/release-tracker/translate.py --selftest   # 测试全部通道与结构保护
python scripts/release-tracker/translate.py --bench 25   # 压测轮询分布
python scripts/release-tracker/translate.py --stats      # 查看通道与缓存状态
python scripts/release-tracker/translate.py --text "..." --target ja
```

## 文件说明

| 文件 | 用途 |
|------|------|
| `config.json` | 追踪仓库列表与限额，**加仓库改这里** |
| `collect.py` | 每日采集（英文原文 + 中文译文） |
| `translate.py` | 多通道轮询翻译器（被所有翻译脚本复用） |
| `state.json` | 已采集 tag 去重状态 |
| `gen_dicts.py` | 生成 7 语言 UI 字典 → `site/src/lib/dicts.generated.ts` |
| `ui-overrides.json` | **人工定稿**的核心 UI 文案，优先于机翻 |
| `gen_summaries.py` | 增量翻译 Release 摘要 → `site/src/data/summaries.json` |
| `backfill.py` | 一次性回填历史英文原文（已完成，保留备用） |

## 为什么有人工定稿表

短词单独机翻容易歧义（实测 `Releases` 被翻成日语「方法」，`stack` 被翻成德语 `Stapel`／西语 `pila`）。导航、按钮、首页标题、meta 描述这类**高可见且高频**的文案因此由 `ui-overrides.json` 定稿；长尾描述性文案才交给轮询器。`gen_dicts.py` 会校验定稿文案里的 `{n}` 等占位符，手误会直接报错。

## 站点语言策略

- **英文默认**挂根路径 `/`，中文在 `/zh`，新增语言 `/ja` `/de` `/fr` `/es` `/pt`；`hreflang` 全量输出 + `x-default`
- 新增语言只覆盖**导航层与聚合页**（首页 / Releases / Projects / Method / 项目版本历史 + 各自 RSS）：这些页面有翻译后的摘要，属于真实增量内容
- **Release 正文不翻译**：保留英文原文 canonical，避免几千篇机翻正文被判重复内容；列表页用 `EN` chip 明确标注正文语言
- 旧中文 URL（`/zh/chapter_*`、`/zh/release_note/*`）全部保留，SEO 零损失
- 缺失译文一律回落英文原文，不会出现空白或坏文案
- `Intl.DateTimeFormat` 按 locale 本地化月份与日期，无需翻译

## 手动运行

```bash
# 采集（试跑，不写文件）
python scripts/release-tracker/collect.py --dry-run --limit 3 --repos apache/kafka

# 采集 + 中文译文
GITHUB_TOKEN=ghp_xxx python scripts/release-tracker/collect.py --translate

# 重新生成 UI 字典（改了 i18n.ts 或 ui-overrides.json 后）
python scripts/release-tracker/gen_dicts.py --workers 5

# 增量补齐摘要译文（已有译文会跳过）
python scripts/release-tracker/gen_summaries.py --workers 8

# 小样本试跑，不覆盖产物
python scripts/release-tracker/gen_dicts.py --sample 8 --langs ja,de
python scripts/release-tracker/gen_summaries.py --limit 20
```

也可以在 Actions 页手动触发 `daily-release-tracker`（`workflow_dispatch`）。摘要翻译步骤设了 `continue-on-error`，免费端点偶发限流不会阻断当天采集内容上线。

## 成本与风险

- 全部通道均为免费额度或免密公开端点，**预期成本 0**；未启用任何付费 API、未开启自动续费
- Google 公开端点是非官方接口，可能限流或变更；轮询 + 熔断 + 保留原文的降级策略已覆盖，未来被封禁可直接切 DeepL/CF/LibreTranslate（设置环境变量即可）
- 批量机翻页面本身不带来排名，SEO 收益依赖 hreflang、结构化数据、内链与真实增量价值；新增语言建议先在 Search Console 观察收录后再扩语种
- `max_total_per_run: 25` 控制每日新增页面数，避免突增低质页

## 调参建议

- 追踪仓库优先选站点已有主题相关的（Kafka / Dubbo / K8s / Spring 等），保持内容垂直度
- `include_prereleases: false`：默认不采集预发布版本，避免 rc 刷屏
- 想扩语言：在 `site/src/lib/i18n.ts` 的 `LOCALES` / `LOCALE_META` 加一项，补 `ui-overrides.json` 的核心词条，再跑 `gen_dicts.py` 和 `gen_summaries.py --langs <新语言>` 即可
