# SE0 闭环优化

采集 → 翻译 → 发布 → 复盘搜索数据 → 调整 → 再采集。

这不是「让系统改自己的代码」。真正跑起来的是一条**带账本的有界优化闭环**：
系统只能动少数几个参数，每次改动都要先写下假设和判据，28–42 天后用真实
数据判输赢，输了的自动回滚、连续输的规则被停用。

说清楚为什么不做自我改写：无人值守的代码自改，失败模式是不可逆的——
站点会一天天偏离设计，而且没人能指着某一版说「是这里坏掉的」。有界参数
+ 实验账本，能做到 90% 的价值，同时保住 100% 的可回滚性。

---

## 一次运行做四件事

```
python3 scripts/release-tracker/loop.py            # 只提案，不写盘
python3 scripts/release-tracker/loop.py --apply    # 写盘并记账
python3 scripts/release-tracker/loop.py status     # 看台账 / 闸门 / 命中率
python3 scripts/release-tracker/loop.py rollback <id>
```

| 阶段 | 模块 | 产出 |
|---|---|---|
| 1 结算 | `loop.py settle()` | 观察窗到期的实验判出 win / lose / inconclusive |
| 2 采集 | `seo_telemetry.py` | `data/seo/latest.json`（页面级曝光、点击、排名） |
| 3 判定 | `loop_decide.py` | `data/seo/proposals.json`（带证据的提案） |
| 4 执行 | `loop_apply.py` | 写配置 + `data/loop-ledger.jsonl` |

顺序不能换。**结算必须先于判定**：判定用规则命中率决定「哪些规则还值得
信任」，如果先判定再结算，这一轮用的是上一轮的旧命中率。

---

## 规则表

规则分两类。自动执行的都满足：证据可量化、动作可逆、影响面有界。

### 自动执行（每轮最多 3 条）

| 规则 | 触发条件 | 动作 | 判据 |
|---|---|---|---|
| `DEMOTE_EMPTY_LOCALE` | 语言闸门开着，但翻译覆盖率 < 30%，或开闸 21 天后仍 0 展示 | 闸门改 `noindex` | 点击无损失 |
| `RETITLE_FAMILY` | 族展示 ≥ 300、CTR < 1.5%、排名 ≤ 25 | 切换标题变体（两个手写模板二选一） | CTR +10% |
| `FEATURE_PAIR` | 对比页展示 ≥ 50、CTR ≥ 4% | 置顶到对比索引页（最多 8 个） | 族点击 +10% |
| `SUPPRESS_PAIR` | 已索引但 35 天窗口内零展示 | 从内链撤掉（URL 保留可达） | 点击无损失 |
| `REORDER_TOPICS` | 专题页有点击分布 | 按真实点击重排专题索引 | 族点击 +10% |
| `SCAN_PRIORITY` | 项目页有 ≥ 3 次点击 | 加入 `scan.hot`，提高采集频率 | 族点击 +10% |

### 只建议、不自动做

需要人的判断，机器只负责把证据摆出来：

- `OPEN_LOCALE` — 覆盖率 ≥ 60% 的语言，可以考虑放量。开闸门是对域名的
  不可逆承诺（Google 的 scaled content abuse 判定会拖累整个域名），必须人工确认。
- `DEEPEN_FAMILY` — 族平均排名卡在 11–20（第二页），补内链最容易推进第一页，
  但补哪些项目要人来挑。
- `RULE_DISABLED` — 某规则命中率低于 1/3 且已输 3 次，本轮起停止自动执行。

---

## 动作空间（白名单）

`loop_apply.py` 里 `WHITELIST` 是硬边界。不在表里的写入直接抛错。

| 文件 | 允许的键 | 效果 |
|---|---|---|
| `site/src/data/index-gate.json` | `locales.*.status / since / reason` | 语言的收录开关 |
| `site/src/data/loop-state.json` | `topicOrder`、`compareFeatured`、`suppressPairs`、`titleVariant` | 排序、置顶、屏蔽、标题变体 |
| `scripts/release-tracker/config.json` | `scan.hot` | 采集优先级 |

页面代码、正文文案、新语言 —— 全部不在动作空间里。机器不生成内容，
只在人工写好的选项之间做选择。

---

## 账本

`data/loop-ledger.jsonl`，append-only。每条记录包含：

- `hypothesis` — 这次改动赌的是什么
- `evidence` — 触发时的数字
- `baseline` — 执行这一刻的指标前值
- `metric` — 用什么判、观测多久、门槛多少
- `writes` — 改了哪个文件的哪个键、before / after 各是什么
- `verdict` — pending → win / lose / inconclusive / rolled-back

回滚恢复的是**整键原值**，不是反向操作。两次变更叠在一起时，「减回去」
和「恢复原状」不是一回事。

### 防振荡

- 同一目标 30 天内只准改一次（CTR 类 42 天）
- 每轮最多 3 条动作
- 输了的实验不会自动重试，等人工看

没有冷却期，规则会在阈值附近反复横跳：今天 CTR 低就降权，明天数据抖动
回升又加回来，结果是每 7 天把全站排序打乱一次，任何实验都测不出结果。

---

## 数据从哪来

三条通道，按可用性排序。

### 1. 手工导出（零凭据，现在就能用）

Search Console → 效果 → 导出 CSV → 丢进 `data/seo/inbox/`，然后跑
`seo_telemetry.py --source file`。表头中英文都认，读过的文件自动归档到
`inbox/done/`。

### 2. Bing Webmaster API（免费自助，可全自动）

```bash
export BING_WEBMASTER_KEY=xxxx
python3 scripts/release-tracker/seo_telemetry.py --source bing
```

Bing 索引量比 Google 小一个数量级，但它是**唯一不需要 OAuth 就能自动拿
的搜索数据**。用它判断「这个页面族有没有真实需求」是有效的代理信号。

### 3. GSC Search Analytics API（最权威，需要 GCP 项目）

```bash
export GSC_SERVICE_ACCOUNT=/path/to/service-account.json
pip install cryptography
python3 scripts/release-tracker/seo_telemetry.py --source gsc
```

服务账号需要在 Search Console 里被加为站点用户。GitHub Actions 里配
secret `GSC_SA_JSON`（整个 JSON 内容）即可自动运行。

---

## 数据门槛

站点刚上线、只有几十次展示时，「CTR 低」全是噪声。所以：

- 全站展示 < 200 或有点击的页面 < 20 → **只做覆盖率类判断**，不碰点击率
- 判死规则要求闸门已开 ≥ 35 天 → 新站不会误杀刚上线的页面

这条门槛是本设计里最重要的部分。没有它，系统会在第一周就用噪声把顺序
调乱，然后靠后续数据把错误的改动一条条"证实"，越跑越偏。

---

## 节奏

- 每周一 05:00 UTC 跑一次（`.github/workflows/seo-loop.yml`）
- 观测窗 28 天（CTR 类 42 天）
- 跑得比观测窗更勤，等于在数据还没反映上一轮时又改一轮，实验互相污染

---

## 它会变强的地方，和不会变强的地方

**会**：失败率超 2/3 的规则被自动停用，赢过的规则优先占用动作额度。
系统不会变聪明，但它会**收敛到在这个站点上真的有效的策略集**。

**不会**：它不会发现「应该做一个新内容族」这种事——那需要判断力和对
搜索需求的理解。这类决策仍然是人做的（对比页和专题页就是这么来的）。
机器负责的是：把人想出来的策略，跑到它在该站点的局部最优。

---

## 现状与下一步

现在这一版能跑通完整链路，但有一个客观限制：**没有真实搜索数据**。
站点刚上线，GSC / Bing 后台还是空的。所以第一次真正有意义的运行，要等到
上线 4 周之后。

在那之前它只会做覆盖率类判断（当前 7 种语言覆盖率 59–100%，都过了 30%
红线，所以它什么都不会动——这是正确行为，不是没生效）。

下一步按收益排：

1. 配 `BING_WEBMASTER_KEY`（免费，5 分钟）→ 拿到第一批自动信号
2. 4 周后接 GSC 服务账号 → 主信号到位
3. 仓库数 163 → 500（这是所有内容族共用的分母，比任何规则都重要）
