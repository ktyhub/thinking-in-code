---
title: "AutoGPT autogpt-platform-beta-v0.8.0"
project: "AutoGPT"
repo: "Significant-Gravitas/AutoGPT"
tag: "autogpt-platform-beta-v0.8.0"
version: "autogpt-platform-beta-v0.8.0"
published: "2026-09-19"
type: "pre"
lang: "zh"
---

# AutoGPT autogpt-platform-beta-v0.8.0

### ⚠️ 升级自托管安装 — 重大更改

`ENCRYPTION_KEY`、`UNSUBSCRIBE_SECRET_KEY` 和 `BETTER_AUTH_SECRET` 不再附带 `.env.default` 中的值；它们是在每次安装时生成的，并且后端**不会在用于包含的值 `.env.default` 上启动**。全新安装不需要 `make init-env`（或安装程序）之外的任何东西。设置自己值的安装不需要任何东西。如果您的安装在默认值上运行（`backend/.env` 中没有 `ENCRYPTION_KEY` 行，或者启动以 `ENCRYPTION_KEY is set to a value that was published…` 停止），请从 `autogpt_platform/` 执行此操作 - 它将您连接的集成移动到新密钥而不是丢失它们：

1.`docker compose down`
2. 保留用于加密数据的密钥：
   `export OLD_ENCRYPTION_KEY=$(git show autogpt-platform-beta-v0.7.4:autogpt_platform/backend/.env.default | grep '^ENCRYPTION_KEY=' | cut -d= -f2-)`
   （如果您设置了自己的密钥并要替换它，请导出该值并在结帐之外保留 `backend/.env` 的副本）。
3. 在`backend/.env`中，确保`=`中的`ENCRYPTION_KEY=`和`UNSUBSCRIBE_SECRET_KEY=`存在，且`=`之后没有任何内容，而`frontend/.env`中的`BETTER_AUTH_SECRET=`；然后 `make init-env` （填充每个空秘密，从不覆盖值）。
4. 重新加密存储的内容 - 首先试运行，然后应用：
   `docker compose build migrate rest_server && docker compose run --rm migrate`
   `docker compose run --rm --no-deps -e OLD_ENCRYPTION_KEY rest_server cli rotate-encryption-key`
   `docker compose run --rm --no-deps -e OLD_ENCRYPTION_KEY rest_server cli rotate-encryption-key --apply`
5. 清除旧`BETTER_AUTH_SECRET`下存储的令牌签名密钥，然后启动：
   `docker compose up -d --wait db`
   `docker compose exec db psql -U postgres -c 'DELETE FROM platform."UserAuthJwks";'`
   `docker compose up -d --build`

完整说明：[升级：每次安装都会生成机密](https://github.com/Significant-Gravitas/AutoGPT/blob/master/docs/platform/getting-started.md#upgrading-secrets-are-generated-per-install)。

此外，在此版本中：删除了旧版 HS256 JWT 验证路径，因此不再读取 `backend/.env` 中的 `JWT_VERIFY_KEY` (#14519)；未使用的 `TrialNotificationDelivery` 表将通过迁移删除。

## 🔥 有什么新内容？

### 新功能

- **#14688** - 站立工作：专家和奥托的例行公事，重复或一次（由@ntindle）
- **#14331** - 让 Discord 机器人提及服务器成员和角色，而不是所有人（由 @Bentlybro）
- **#14313** - 专用、可共享的专家页面，带有“即将推出”状态（由 @0ubbe 提供）
- **#14273** - 工具链外部的专家提案卡，包含批准流程和标语（作者：@Abhi1992002）
- **#14187** - 标记 DataFast 的设置-计费支付界面（由 @ntindle）
- **#14186** - 向 DataFast 报告每个入职步骤（由 @ntindle）
- **#13299** - 通过 Discord 启动警报 + 门管理员模拟（由 @ntindle）
- **#11791** - 添加按钮以将数据生成到本地开发上的管理仪表板（由@ntindle）
- **#14332** - 连接工具所需的每个提供商，然后继续一次（由@Pwuts）
- **#14342** - Group Home 最近由专家、工作流程或 Autopilot 完成的工作（作者：@0ubbe）
- **#13261** - 添加 Linux 和 macOS 设备安装程序（由 @ntindle 提供）
- **#14358** - 添加 GPT-6 Astra 支持（由 @ntindle 提供）
- **#14385** - 添加 Opus 5 并升级 Advanced Anthropic（由 @Torantulino）
- **#14075** - 支持 MCP 服务器的基本身份验证（由 @Torantulino 提供）
- **#14403** - 专家优先，单行运行，并在 Home 最近的工作上运行触发器（作者：@0ubbe）
- **#14361** - 添加可操作的自动化信用历史（由@Torantulino）
- **#14399** - 添加专家预算端点和运行源（由@Abhi1992002）
- **#14402** - 添加克劳德寓言 5.1 支持（由 @ntindle）
- **#14425** - 侧边栏中的专家新聊天按钮和专家感知的空会话（由 @0ubbe 提供）
- **#14322** - 看妈妈没有手 - 自动驾驶语音模式（由@Pwuts）
- **#14411** - 当跳过连接时，专家会执行工作的公共数据部分（由@Pwuts）
- **#14428** - 规范类别和类别过滤器（由 @Pwuts 提供）
- **#14353** - 添加可配置的需要卡的试验（由@ntindle）
- **#14422** - 添加 Google Gemini 3.8 Flash 支持（由 @ntindle 提供）
- **#14446** - 为市场页面提供真实的 Open Graph 链接预览（由 @Pwuts 提供）
- **#14431** - 列出市场上的知识技能并将其安装到 AutoPilot（由 @Pwuts 提供）
- **#14424** - 让 AutoPilot 读取用户的专家聊天记录（作者：@Pwuts）
- **#14244** - 用于生成回合的每棵树信封和分类帐（由@Pwuts）
- **#14420** - 一旦她的支出达到阈值，就暂停专家工作以供批准（作者：@Pwuts）
- **#14423** - AutoPilot 撰写了早间简报（作者：@Pwuts）
- **#14432** - 将知识技能发布到市场并进行审查（由 @Pwuts 提供）
- **#14395** - 使静默凭证连接失败可见（由 @Pwuts 提供）
- **#14421** - 根据存储的基线对每个专家的写作风格进行评分（由 @Pwuts 提供）
- **#14452** - 更新 API v2 的 Slant3D 集成（由 @ntindle 提供）
- **#14460** - 在团队和聊天界面添加生成的专家头像（由 @Abhi1992002 提供）
- **#14461** - 培养专家时选择生成的头像（作者：@Abhi1992002）
- **#14462** - 推荐入职脑力转储中的专家（作者：@Abhi1992002）
- **#14464** - 引入专家优先的入门向导（作者：@Abhi1992002）
- **#14465** - 在副驾驶入职中引入专家团队模型（作者：@Abhi1992002）
- **#14466** - 教 AutoPilot 提出聘请第一位专家的建议（作者：@Abhi1992002）
- **#14490** - 将专家的集成显示为团队卡上的徽标（由 @0ubbe 提供）
- **#14037** - 专家档案显示所需的服务、成本和 AI 披露（作者：@Abhi1992002）
- **#14379** - 在我们自己的 1 vCPU / 2 GiB 桌面映像上运行 copilot 沙箱（由 @ntindle 提供）
- **#14505** - 展示专家在其灵魂抽屉中学到了什么（作者：@Pwuts）
- **#14512** - 专家配置文件显示专家在第一天设置的内容（由 @Pwuts 提供）
- **#14389** - 添加 RMFG 制造块（由 @ntindle 提供）
- **#14506** - 在雇用前显示捆绑工作流程的节奏，并跳过雇用无法运行的安装时间计划（由@Pwuts）
- **#14504** - 从搜索和类别芯片中返回专家（由@Pwuts）
- **#14458** - 添加阿里巴巴 Qwen 3.8 Max (0902) 支持（由 @ntindle 提供）
- **#14414** - 每个专家或个人 AutoPilot 拥有的技能（由 @Abhi1992002 提供）
- **#14511** - 专家档案仅显示员工所具备的真正技能（作者：@Pwuts）
- **#14202** - 添加 Microsoft 365 Copilot 传输（由 @ntindle）
- **#14286** - 记录每个代理如何启动并发出激活事件（由@ntindle）
- **#14287** - 记录每个用户的 A/B 实验臂（由 @ntindle）
- **#14459** - 添加 Meta Muse Spark 1.3 支持（由 @ntindle 提供）
- **#14530** - 添加 DeepSeek V4.1 Flash（由 @ntindle）
- **#14393** - AutoPilot 会说出其任务还剩下什么，并在任务结束之前结束（作者：@Pwuts）
- **#14559** - 直接向您的一位专家安装市场技能（由 @Pwuts 提供）
- **#14544** - 使技能包的文件可轮流访问和运行（由@Pwuts）
- **#14549** - 将技能作为整个包进行存储、复制和删除（由 @Pwuts 提供）
- **#14555** - 以 zip 包的形式上传和下载技能（由 @Pwuts 提供）
- **#14538** - 添加 Sakana Fugu Ultra v2（由 @ntindle）
- **#12945** - 添加审核块（由@ntindle）
- **#14578** - 让聊天平台机器人通过 NO_REPLY 保持沉默（作者：@Bentlybro）
- **#14550** - 培养具有真正市场技能的专家（@0ubbe）
- **#14557** - 将技能作为整个包发布并安装（由 @Pwuts 提供）
- **#14561** - 在中心和管理员审核中显示技能包（由@Pwuts）
- **#14543** - 将营销分成四位范围内的专家（由@0ubbe）
- **#14415** - 专家仅运行具有授予凭据的已安装工作流程（由 @Abhi1992002 提供）
- **#14416** - AutoPilot 管理所有时间表，专家只能看到他们的运行（作者：@Abhi1992002）
- **#14417** - 在专家聊天中从连接卡授予访问权限（作者：@Abhi1992002）
- **#14365** - 具有实时嵌入流的交互式 E2B 桌面沙箱（由 @ntindle）
- **#14382** - 每个所有者一个盒子 - 桌面是 shell 的屏幕（由 @ntindle 提供）
- **#14288** - PostHog 和 LaunchDarkly 之间的一个匿名 ID，在注册时存储（由 @ntindle）
- **#14436** - 让 AutoPilot 编辑自己的聊天平台消息（由 @Bentlybro 提供）
- **#14514** - 添加受支持的官方 MCP 集成（由 @ntindle 提供）
- **#14568** - 能力注册核心和索引（by @ntindle）
- **#14038** - 专家漏斗 + 简报工具（作者：@Abhi1992002）
- **#14207** - 实时会话相互发送消息，并进行一次跨专家检查（由 @Pwuts 提供）
- **#14639** - 添加 TypeSafe Jev 判断块（由 @Torantulino 提供）
- **#14569** - 将副驾驶发现替换为 find/describe/run_capability (by @ntindle)
- **#14635** - 添加 Inception Mercury 2.5（由 @ntindle）
- **#14675** - 添加九名业务核心专家（by @0ubbe）
- **#14707** - 在药丸上显示专家职位，并在筹集资金时要求一个（由@0ubbe）
- **#14677** - 使用用户选择的凭据，并询问而不是猜测（由@Bentlybro）

### 增强功能

- **#14310** - 按终端状态计算图表运行次数（由@Bentlybro）
- **#14319** - 连接已定义但从未记录的应用程序指标（由@Bentlybro）
- **#14208** - 将 claude-agent-sdk 升级到 0.2.152 并显式固定上下文窗口（由 @Pwuts 提供）
- **#14360** - 澄清选择器中的 Max 模型访问（由 @Torantulino）
- **#14398** - 向核心原子添加紧凑变体并重新设计主页（by @Abhi1992002）
- **#14400** - 内联专家聊天和团队页面润色（作者：@Abhi1992002）
- **#14404** - 将文件页面重建为带有悬停预览的列表（由 @0ubbe 提供）
- **#14302** - 与旧服务器一起谈论 MCP 2026-07-28（作者：@kcze）
- **#14408** - Color Home 的工作芯片并显示工作流程图片（by @0ubbe）
- **#14442** - 重新校准 AutoPilot 的按计划每日和每周支出限制（由 @Pwuts 提供）
- **#14336** - 缩小 AutoPilot 读取的模式和工具结果（由 @Pwuts 提供）
- **#14469** - 文件多选、团队设置卡和团队/家庭设计润色（由 @0ubbe）
- **#14463** - 使用动画 AutoPilot 刷新大脑转储记录（作者：@Abhi1992002）
- **#14497** - 用入门卡替换专家启动自动运行（由 @0ubbe 提供）
- **#14571** - 将 GPT-6 Astra 提升为 Codex 高级默认值（由 @Otto-AGPT）
- **#14548** - 概念风格的专家化身，在加注流程中带有面部选择器（由 @0ubbe 提供）
- **#14457** - 构建后端映像一次而不是八次（由@Bentlybro）
- **#14603** - 当技能注册表自会话开始以来发生变化时通知会话（由@ntindle）

### UI/UX 改进

- **#14266** - 当请求的图表加载失败时显示错误 toast（由 @Pwuts 提供）
- **#14368** - 平静主页上最近的工作卡（by @0ubbe）
- **#14407** - 使用专业的纯色作为封面（作者：@Abhi1992002）
- **#14300** - IME 撰写时忽略 Enter 和其他键（作者：@kcze）
- **#14472** - 隐藏未完成的专家窗格 UI（由 @Abhi1992002 提供）
- **#14437** - 使用用户的区域设置设置侧边栏日期组标签的格式（由 @gaoanze888 提供）
- **#14673** - 将计费切换开关移至更靠近入职计划卡的位置（由 @0ubbe 提供）
- **#14661** - 统一专家显示和侧边栏聊天（由 @0ubbe 提供）
- **#14696** - 将桌面放回聊天范围内（由@kcze）
- **#14700** - 恢复通过 run_capability 运行的工具的结果卡（作者：@kcze）
- **#14682** - 停止响应显示停止的卡，而不是错误（由@Pwuts）

### 错误修复

- **#14721** - 在重新启动时应用构建模式指南，而不是从历史记录中重新派生它（由@Pwuts）
- **#14714** - 通过正常工具路径运行功能 id 到达的工具 — AutoPilot 可以再次创建和编辑代理（由 @Pwuts 提供）
- **#14702** - 通过面向模型的文本中的功能 ID 命名延迟工具（由 @kcze 提供）
- **#14330** - 阅读创建 Discord 线程的帖子（作者：@Bentlybro）
- **#14325** - 悄悄地跳过付费用户的预定运行（由@Bentlybro）
- **#14337** - 向退出的访客显示专家卡（由 @0ubbe 提供）
- **#14324** - 通过一个异步助手路由每个 Stripe SDK 调用（由 @Bentlybro 提供）
- **#14334** - 将 redis-py 升级到 8.1，这样丢失的集群连接就不再毒害 client（作者：@Bentlybro）
- **#14057** - 将具有已知对象形状的数组项渲染为真实的子表单（由@ntindle）
- **#14206** - 将 LLM 请求超时提高到 600 秒并使其可配置（由 @Pwuts 提供）
- **#14327** - 停止破坏 Connect 卡的托管、陈旧和触发凭据（由 @Pwuts 提供）
- **#14212** - 显示批准卡将执行的内容，并仅批准该内容（由@Pwuts）
- **#14320** - 使跨进程的副驾驶集成令牌缓存无效（由@Pwuts）
- **#14309** - 子会话返回有限结果，而不是整个工具日志（由 @Pwuts 提供）
- **#14205** - 需要图书馆会员资格和市场提交才能访问图形（由 @Pwuts 提供）
- **#14373** - 在 AutoPilot 中渲染规范的代理和块名称（由 @Torantulino）
- **#13524** - 通过目标团队 ID 授权团队管理，删除活跃团队要求（由 @ntindle）
- **#14394** - 遵循重定向时不区分大小写地匹配敏感标头名称（由 @Pwuts 提供）
- **#14441** - 从跑步活动摘要中删除第一人称语音（由 @0ubbe 提供）
- **#14303** - 停止删除 403 上的有效 MCP 凭证，并验证服务器端令牌（由 @kcze 提供）
- **#14445** - 将专家页面的“即将推出”置于雇佣专家标志上（由 @0ubbe 提供）
- **#14419** - 停止跨源重定向重放授权（由@kcze）
- **#14426** - 将每个专家的工作区文件与其他专家分开（由@0ubbe）
- **#14451** - 在嵌入回填之前绑定调度程序的 RPC 端口（由 @Pwuts 提供）
- **#14412** - 专家存储的事实现在保留为可回忆的记忆（由@Pwuts）
- **#14448** - 保持块和代理输入远离副驾驶设置卡（由@0ubbe）
- **#14434** - 使用安排代理时指定的 AutoPilot 时区（由 @Pwuts 提供）
- **#14390** - 当存储的凭据被拒绝时告诉 AutoPilot 和用户，而不是“未连接”（由 @Pwuts 提供）
- **#14454** - 在 CI 转储数据库以获取缓存之前种子 E2E 嵌入（由 @Pwuts 提供）
- **#14392** - 将 Vercel 预览标记为 Sentry 中的预览，并停止 pytest 运行报告（由 @Pwuts 提供）
- **#14391** - 存储提供者授予的范围，而不是我们要求的范围（由@Pwuts）
- **#14375** - 切勿在读取不权威的支付标记时删除用户的等级（由@Pwuts）
- **#14374** - 将压缩窗口引脚盖在路由模型的真实窗口上（由 @Pwuts 提供）
- **#14354** - 当浏览器没有声音时，大声朗读会退回到我们自己的 TTS（由 @Pwuts 提供）
- **#13420** - 对任何字段使用自定义 rjsf 验证器（由 @seer-by-sentry[bot] 提供）
- **#13576** - 对 ExecuteCodeBlock 变量有效负载进行 Base64 编码（由 @albatrossflyon-coder 提供）
- **#14372** - 隔离副驾驶调度睡眠模拟（由@Torantulino）
- **#14388** - 在入职提供程序中沉默 AbortError（由 @seer-by-sentry[bot] 提供）
- **#14323** - Guard Tally 弹出脚本删除以防止 NotFoundError （由 @seer-by-sentry[bot] 提供）
- **#14453** - 防止代理页面在 404 上崩溃（由 @seer-by-sentry[bot] 提供）
- **#14260** - 保护 AppSidebar keydown 监听器免受未定义的 event.key (by @seer-by-sentry[bot])
- **#14179** - 防止工具提示在受控/不受控之间切换（由 @seer-by-sentry[bot] 提供）
- **#13498** - 防止 FastAPI 422 细节中的 ApiError [object Object] (by @seer-by-sentry[bot])
- **#13581** - 防范 PlatformBadge 中未定义的平台（由 @seer-by-sentry[bot] 提供）
- **#13166** - 从凭证输入中删除良性的 console.warn （由 @seer-by-sentry[bot] 提供）
- **#14491** - 阻止招聘启动告诉专家运行工作流程（由@Pwuts）
- **#14492** - 停止记录 Ayrshare 请求（由 @Pwuts 提供）
- **#14500** - 连接服务后刷新每个专家列表（由@0ubbe）
- **#13356** - 修剪请求标头中的 Ayrshare 配置文件键（由 @pony-maggie）
- **#14515** - 立即发送问题答案并提前选择选项（作者：@Abhi1992002）
- **#14513** - 阻止花名册种子覆盖聘请专家的技能（@Pwuts）
- **#14178** - 停止工具结果呈现其自己的鉴别器（由@ntindle）
- **#14177** - 停止设备身份验证报告已删除的新凭证（由@ntindle）
- **#14326** - 避免在测试收集期间重试 Redis （由 @Ftgn-dpA 提供）
- **#14095** - 让设备代码提供商通过副驾驶聊天进行连接（由@ntindle）
- **#14517** - 禁用自托管安装的 CoPilot 支出上限（由 @ntindle 提供）
- **#14524** - 当GCS未设置时在本地存储市场媒体（由@ntindle）
- **#14526** - 在 UI 和工具方面区分 Otto 专家（@Torantulino）
- **#14529** - 等待 ThumbnailImages 本地媒体测试中的 onImagesChange 断言（由 @Pwuts 提供）
- **#14486** - 在布尔字符串转换中去除空格（由@soroush5）
- **#14488** - 在集合/元组转换中将字符串包装为单个元素（由@soroush5）
- **#14547** - 将员工的入职卡保留在专家自己的角色上（作者：@0ubbe）
- **#13750** - 稳定构建器画布上的 ReactFlow prop 引用（由 @chelsealong 提供）
- **#14439** - 在每次读取 get_execution_schedules 时停止取消暂停/触发的计划（由@Bentlybro）
- **#14542** - 当回合结束时收获浏览器进程树（由@Bentlybro）
- **#14556** - 测试装置删除他们创建的模板和员工（由@Pwuts）
- **#14435** - 向机器人平台提供 AutoPilot 澄清问题（由 @Bentlybro）
- **#14501** - 通过名称或 id 使机器人的提及实际 ping（由 @Bentlybro）
- **#14468** - 阻止默默安排任何内容的 CLI cron 工具（由 @kcze 提供）
- **#14363** - 强制字符串截断大小限制（由@QiuLsG）
- **#13527** - Gate 组织将 MANAGE_BILLING 背后的路由记入（由 @ntindle）
- **#14618** - 向第二张卡提供专家授予的凭证（由@Pwuts）
- **#14621** - 让雷米成为纯技能专家（@0ubbe）
- **#14519** - 删除旧版 HS256 验证路径（由 @kcze 提供）
- **#14614** - 将 autogpt_libs PyJWT 约束与后端对齐（由@kcze）
- **#14627** - 等待 MarketplaceStep 测试中的“添加”按钮（由 @Pwuts 提供）
- **#14628** - 在 Langfuse 发布后保持副驾驶系统提示符新鲜（由 @Pwuts 提供）
- **#14631** - 在市场技能标题中保留首字母缩略词大小写（由 @Pwuts 提供）
- **#14634** - 对没有 MANAGE_BILLING 的成员隐藏 /home 上的汇集组织余额（由 @Pwuts）
- **#14633** - 使第二个开启者等待桌面测试具有确定性（由 @Pwuts 提供）
- **#14641** - 停止专家启动测试继承过时的启动闩锁（由@Pwuts）
- **#14218** - 保留不可恢复的调度程序作业而不是删除它们（由@Pwuts）
- **#14643** - 防止受限 WebView 上出现 localStorage 错误（由 @sentry[bot] 提供）
- **#14518** - 在引导程序中生成本地秘密而不是传送它们（由@kcze）
- **#14670** - 桌面流无法启动，因为 VNC 堆栈以 root 身份运行（作者：@kcze）
- **#14667** - 当凭证无法刷新时提供重新连接卡（由@Bentlybro）
- **#14662** - 为沙箱提供连接卡显示为已连接的凭据（由@Bentlybro）
- **#14686** - 在普通 HTTP 源上对消息进行排队，而不会导致聊天崩溃（由 @Bentlybro 提供）
- **#14687** - 从方案为大写的 URL 读取主机（由 @Pwuts 提供）
- **#14689** - 停止将用户的取消报告为助手错误（由 @Pwuts 提供）
- **#14679** - 让用户输入主机范围和用户名/密码凭据（由@Pwuts）
- **#14709** - 允许跳过专家职位（由 @0ubbe 提供）
- **#14698** - 当 x11vnc 在实时 noVNC 后面死掉时重新启动桌面流（by @kcze）
- **#14699** - 当盒子暂停时停止桌面流（by @kcze）
- **#14684** - 向每个执行器 Pod 发送一个 Stop，而不是其中一个（由 @Pwuts 提供）
- **#14685** - 向每个 Pod 发送图形运行取消，而不是其中一个（由 @Pwuts 提供）
- **#14710** - 在主机范围凭证的主机上保留非默认端口（由 @Pwuts 提供）
- **#14712** - 在 Compose 安装程序中生成密钥并添加升级路径（由 @kcze 提供）

### 文档

- **#14335** - 发布新的 SECURITY.md （作者：@Pwuts）
- **#14305** - 将预测试屏幕截图作为评论附件发布，而不是存储库分支（由 @Pwuts 提供）
- **#14387** - 将 Forge 快速入门链接指向存在的文件（由 @firekou 提供）
- **#14470** - 为 Gemini 3.8 Flash 重新生成块文档（#14422 跳过它）（by @Pwuts）
- **#14483** - 添加 AutoPilot 工具名称 #14424 重新生成块文档（由 @Pwuts 提供）
- **#13998** - 修复自述文件中无效的功能请求链接（作者：@putramkti）
- **#14236** - 刷新代理引导路径（由@Ricky-7-Yan）
- **#14447** - 刷新手册指南和链接（由@ntindle）
- **#13048** - 文档集成图标、身份验证模式、自动发现、文档同步和测试模式（由 @ntindle 提供）
- **#14539** - 将 AGENTS.md 匹配器与套件对齐（无玩笑）（由 @ntindle 提供）

### 依赖关系和维护

- **#14720** - 将anyio 转换为CVE-2026-63374 的4.15.1（由@Pwuts 提供）
- **#14348** - 在 org_credit_test 中删除尾随空白行黑色拒绝（由@Bentlybro）
- **#14366** - 记录经纪人和模特归属（@Torantulino）
- **#14396** - 删除四个休眠的 claude-code-action 工作流程（由 @Pwuts 提供）
- **#14450** - 命名前端实际使用的图标库（由 @Pwuts 提供）
- **#14455** - 将 AutoPilot 工具架构预算扩大到 65,000 个字符（由 @Pwuts 提供）
- **#14484** - 将飞行中专家 PR 的 AutoPilot 工具架构预算提高到 67,651 个字符（由 @Pwuts 提供）
- **#14495** - 刷新专家写作风格基线（@Pwuts）
- **#14278** - 使经典 Python 检查调度安全（由@ntindle）
- **#14067** - 将 GitHub 审核机器人记录为公关技能中的一个选项（作者：@ntindle）
- **#14277** - 注册评分工作流调度（由@ntindle）
- **#14279** - 带有故障关闭报告的分片测试（由@ntindle）
- **#14536** - 拒绝跨分片报告的陈旧跳过限额（由@ntindle）
- **#14280** - 具有验证覆盖范围的分片集成测试（由@ntindle）
- **#14502** - 以 UTF-8 格式读取和写入块文档，无论平台如何（由 @Bentlybro 提供）
- **#14606** - 让秘密门控的跳过传递分叉 PR（作者：@Pwuts）
- **#14630** - 在测试中播种一份固定名单，而不是真正的名单（由@Pwuts）
- **#14632** - Credits authz 不变量可以看到整个应用程序并断言而不是豁免（由 @Pwuts 提供）
- **#14644** - 付款方式路由打开呼叫者自己的计费门户（由 @Pwuts 提供）
- **#14647** - 修复阻止 Dependabot PR 打开或传递 CI 的问题（由 @kcze 提供）
- **#14651** - 将 /autogpt_platform/frontend 中的 @chromatic-com/storybook 从 4.1.2 映射到 4.1.3 （由 @dependabot[bot] 提供）
- **#13274** - 通过 3 个更新将开发依赖项组跨越 1 个目录（由 @dependabot[bot] 提供）
- **#14562** - 将生产依赖项组跨 1 个目录进行 43 项更新（由 @dependabot[bot] 提供）
- **#13277** - 将 /autogpt_platform/autogpt_libs 中的加密从 46.0.5 更改为 50.0.1 （由 @dependabot[bot] 提供）
- **#13279** - 在 /autogpt_platform/backend 中将 faker 从 38.3.0 撞到 40.39.0 (by @dependabot[bot])
- **#12038** - 在 /autogpt_platform/backend 中将 groq 从 0.30.0 提升到 1.7.0 (by @dependabot[bot])
- **#12045** - 在 /autogpt_platform/backend 中将 aiodns 从 3.6.1 提升到 4.0.4 (by @dependabot[bot])

### 重构

- **#14343** - 完善团队和专家页面（@Abhi1992002）
- **#14210** - 将外部行为灵魂规则缩小到强制执行的范围（由@Pwuts）
- **#14456** - 将 API-key 路由移至其自己的功能模块中（由 @Pwuts 提供）
- **#14471** - 将副驾驶技能路线移至其自己的功能模块中（由 @Pwuts 提供）
- **#14473** - 将时间表路线移至其自己的功能模块中（由 @Pwuts 提供）
- **#14474** - 将执行路径移至 features/graph_executions (by @Pwuts)
- **#14475** - 将图形路线移至其自己的功能模块中（由 @Pwuts 提供）
- **#14476** - 将信用分类账路径移至功能/计费/信用中（由@Pwuts）
- **#14477** - 将订阅和 Stripe 路由移至功能/计费/订阅中（由 @Pwuts 提供）
- **#14478** - 将块和文件上传路由移动到功能/块中（由@Pwuts）
- **#14629** - 停止声明自动化会话无法调用的工具（由@Pwuts）
- **#14479** - 将入门路线移至功能/入门（由@Pwuts）
- **#14480** - 将用户设置路由移至 features/user 并删除 v1.py (by @Pwuts)
- **#14481** - 为四个碰撞响应模型提供明确的名称（由 @Pwuts 提供）
- **#14637** - 将试用卡与计划卡和账单卡相匹配（由 @0ubbe 提供）
- **#14648** - 删除 find_block，该工具没有任何调用（由@ntindle）

---

## 🎉 感谢我们的贡献者！

向所有为此版本做出贡献的人致以深深的谢意。特别感谢我们的新贡献者：

- @albatrossflyon-coder
- @chelsealong
- @firekou
- @Ftgn-dpA
- @gaoanze888
- @putramkti
- @QiuLsG
- @Ricky-7-Yan
- @soroush5

以及我们的回归贡献者：
- @0ubbe
-@Abhi1992002
- @Bentlybro
- @kcze
- @ntindle
- @奥托-AGPT
- @小马玛吉
- @Pwuts
- @Torantulino

---

## 📥 如何获取此更新

要更新到此版本，请运行：

```bash
git pull origin autogpt-platform-beta-v0.8.0
```

或者直接从官网下载  
[发布页面](https://github.com/Significant-Gravitas/AutoGPT/releases)。

有关更改的完整列表，请参阅[完整 Changelog](https://github.com/Significant-Gravitas/AutoGPT/compare/autogpt-platform-beta-v0.7.4...autogpt-platform-beta-v0.8.0)。

---

## 📝 **反馈和问题**
如果您遇到任何问题或有建议，请[加入我们的 Discord](https://discord.gg/autogpt) 告诉我们！

---

> 📦 仓库：[Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) · 🏷️ 版本：`autogpt-platform-beta-v0.8.0` · 📅 发布：2026-09-19 · [查看英文原版 Release](https://github.com/Significant-Gravitas/AutoGPT/releases/tag/autogpt-platform-beta-v0.8.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
