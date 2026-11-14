---
title: "FastGPT v4.17.3"
project: "FastGPT"
repo: "labring/FastGPT"
tag: "v4.17.3"
version: "v4.17.3"
published: "2026-11-01"
type: "patch"
lang: "en"
summary: "系统先完成启动必需任务及其前置依赖链，各 App 实例重载模型后启动业务。以下 3 个新增任务随后在后台自动执行，共享集群最多 3 个并发名额，失败不会阻断无依赖任务；可在管理页查看结果，修复失败数据后重试。"
---

# FastGPT v4.17.3

## 升级指南

### 配置变更

- 源码部署的 Node.js 版本须满足 `^22.23.4 || ^24.22.1 || ^26.12.1`，升级前请先确认运行环境符合该范围。
- `DEFAULT_TEAM_BASIC_PERMISSIONS_ENABLED` 仍默认 `false`；启用时，新团队默认全员组除应用、技能和知识库创建权限外，还会获得 API Key 创建权限，已有团队不自动补授。
- Agent 沙盒活跃实例总上限改为通过 `AGENT_SANDBOX_MAX` 配置，默认 100，应用会话与技能编辑共用额度；原 `AGENT_SANDBOX_MAX_EDIT_DEBUG` 不再使用。新增 `AGENT_SANDBOX_MAX_PER_TEAM` 设置单团队上限，默认不限制。商业版管理台中的配额配置优先于环境变量。
- OpenSandbox 新增 `AGENT_SANDBOX_CPU_OVERCOMMIT_FACTOR` 与 `AGENT_SANDBOX_MEMORY_OVERCOMMIT_FACTOR`，默认均为 1，取值须不小于 1。仅在 Kubernetes 运行态且 OpenSandbox Server 不低于 v0.2.1 时生效，降低资源预留但保持资源上限不变，仅影响新建或重建的沙盒。
- 商业版管理台新增「向量检索最大并发数」（`systemEnv.vectorRecallConcurrency`），允许配置 0–1000，默认 0 表示不限制。正数限制所有服务实例、所有向量库的共享召回并发；开源版不启用此限制，无对应环境变量。
- 新增 `AUXILIARY_GENERATION_SHOW_RUN_DETAIL`，默认 `false`，控制技能、Agent 和工作流辅助生成的运行详情入口是否展示。
- 应用市场默认地址（`MARKETPLACE_URL`）更新为 `https://v3.marketplace.fastgpt.cn`，显式配置的自定义地址继续使用原值。

### 镜像更新

- 更新 fastgpt-app（FastGPT 主服务）镜像 tag: v4.17.3
- 更新 fastgpt-pro（FastGPT 商业版）镜像 tag: v4.17.3
- 更新 fastgpt-plugin 镜像 tag: v1.2.0
- 更新 fastgpt-code-sandbox 镜像 tag(后续都独立发布，按需更新): v5.0.0
- 更新 AI Proxy 镜像 tag: v0.7.7

### 升级脚本

系统先完成启动必需任务及其前置依赖链，各 App 实例重载模型后启动业务。以下 3 个新增任务随后在后台自动执行，共享集群最多 3 个并发名额，失败不会阻断无依赖任务；可在管理页查看结果，修复失败数据后重试。

- **回填沙盒实例团队归属**（`20261009_backfill_agent_sandbox_team_id`）：根据来源应用或技能补齐历史实例的团队归属，用于团队配额统计；来源已删除的孤儿记录跳过并计数。
- **回填目录祖先路径**（`20261022_backfill_folder_ancestor_ids`）：重建应用、工具及知识库目录路径，清理非文件夹资源的残留字段。直接挂在其他类型目录树下的文件夹移到本团队根目录，并清理旧父级继承权限；更高层的跨树祖先路径在边界处截断。缺失父级、跨团队或成环等异常记录保留为失败项，修复后重试。
- **迁移系统模型价格至百万单位**（`20261025_token_prices_per_million`）：将历史系统模型价格换算并写入 `pricing`，保留旧字段原值，跳过已有合法 `pricing` 的模型；团队模型不参与迁移。

### 兼容说明

- **root 激活与密码**：移除 `DEFAULT_ROOT_PSW`，启动不再覆盖已有 root 密码。新建 root 初始密码为 `123456`，首次登录需设置新密码；历史 root 未保存 `status` 时需使用原密码登录并完成激活。日常改密在账号信息页操作，忘记密码时使用 root 密码重置脚本，并显式提供新密码。
- **模型计价单位**：LLM 使用 `pricing.tiers`，其他模型使用 `pricing.unitPrice`。Token 单价与阶梯 `maxInputTokens` 上限改为百万 Tokens，TTS 改为每百万字符，STT 仍按每 60 秒，单价最多保留两位小数。升级后确认后台迁移成功并核对系统模型价格；未迁入 `pricing` 的系统模型暂按免费处理，团队模型免费。
- **工作流编排校验**：画布、调试与辅助生成统一遵循[编排规则](/guide/build/workflow/rules)，禁止纯串行回环、跨工具流程连线及多个调用节点共用同一工具入口，允许由有效条件出口控制的回流。工具子流程可读取调用者上游，但不可引用调用者自身尚未产生的输出。旧工作流保留已有连线并可保存草稿，调试和发布前需修正不符合规则的连线。
- **知识库管理权限**：修改知识库基本信息、模型配置，以及文件名称、标签、禁用状态等自身属性需要可管理（`manage`）权限；内容操作继续使用原有编辑权限。移动文件时同时修改属性，也需要该文件的管理权限。
- **知识库导出**：`/api/core/dataset/exportAll` 仅支持单个知识库，目录导出需逐库请求；开启文件级权限时，仅导出当前成员可读文件。
- **对话文件类型**：附件分类新增 `document` 与 `unknown`；旧 `file` 入参和历史记录继续兼容，并按文件名、链接及响应信息归类。自定义客户端应兼容新分类，不再仅用 `file` 判断文档。
- **分页与错误响应**：通用分页将超过 500 的 `pageSize` 按 500 处理，部分接口仍有更小限制；同时传入 `offset` 和 `pageNum` 时优先使用 `offset`，包括 `offset=0`，非法偏移量不回退为页码。被识别为用户配置错误的 API 请求返回 HTTP 400，接入方需按失败响应处理。

## 🚀 新增内容

1. **[工作流与 Agent]** 商业版新增[工作流辅助生成](https://doc.fastgpt.io/zh-CN/guide/build/workflow/assisted-generation)，通过自然语言确认方案后，由同一 Agent 连续搭建、校验和修复并交付候选版本，中断后可根据已保存的对话、计划和任务状态继续。候选版本卡片支持赞踩反馈，需手动应用并检查、调试后再保存发布；使用时需有应用编辑权限，并启用辅助生成与沙盒能力。
2. **[工作流与 Agent]** 用户选择节点及表单的单选、多选字段支持变量引用动态选项，动态选项为空时返回明确错误。
3. **[工作流与 Agent]** 密码输入、工具密钥与 HTTP/MCP 鉴权请求头支持变量引用，可在运行时使用上游节点或应用变量提供凭据。
4. **[模型与计费]** 支持团队成员配置专属 AI 模型与渠道，完善资源隔离、鉴权及 AI Proxy 集成；团队所有者可批量替换失效的语言、语音播放和重排模型引用，覆盖知识库、应用及历史版本，并展示处理统计。空值、动态引用与索引模型不参与替换。
5. **[团队与权限]** 新增账号待激活与首次设置密码流程，root 可在账号信息页改密；激活或改密后保留当前登录会话并清理其他会话。商业版管理台可按全部、活跃、待激活、禁用和注销状态筛选用户。
6. **[团队与权限]** 创建应用、工具与知识库文件夹时可选择是否继承权限；资源目录导航支持沿父级路径访问被授权的子资源，父目录仅作为导航入口，不额外授予管理权限。
7. **[团队与权限]** 团队审计补充知识库训练任务重试、删除、切换索引模型，以及资源恢复权限继承等操作记录，保留资源路径和模型标识，支持按事件类型筛选。
8. **[对话体验]** 支持恢复输入草稿与已成功上传的附件引用，按成员、应用、会话隔离；当前浏览器标签页最多保留 10 份草稿，自最后编辑起保留 1 小时，发送被正式受理后清除。
9. **[对话体验]** Markdown 支持有限 HTML 渲染，完善富文本组件交互。
10. **[工具与渠道]** 系统插件的名称、简介、子工具、参数、密钥 Schema 与 README 支持多语言展示，已有工作流节点与 Agent 固定工具保留添加时的语言快照。
11. **[工具与渠道]** MCP 与外部渠道统一接入团队对话 QPM 限制，超限返回额度和等待时间，外部渠道去重后计数。依赖服务异常时记录日志并跳过检查，避免故障阻断对话。
12. **[系统与运维]** Agent 沙盒支持系统总配额与团队配额，OpenSandbox Kubernetes 运行态可独立配置 CPU、内存超卖倍率，控制活跃实例数量与资源预留。
13. **[系统与运维]** 新增按请求头 `x-fastgpt-profile: 1` 启用的性能采集，汇总阶段耗时、Mongo 操作及进程指标并支持 OTel 上报。
14. **[知识库与文件]** 新增 [OXR 自部署接入指南](https://doc.fastgpt.io/zh-CN/self-host/custom-models/oxr)，补充自定义 PDF 解析配置与源文件名追踪，便于部署和定位解析问题。

## ⚙️ 优化

1. **[工作流与 Agent]** 工作流与 Agent 辅助生成在本地无会话缓存时恢复服务端最近记录，恢复失败可重试；新建会话仅切换当前会话，保留历史及工作流版本归档。
2. **[工作流与 Agent]** 辅助生成按需准备沙盒，方案或画布基线实质变化时重新确认；沙盒丢失时根据已保存上下文重建。应用候选版本时优先关联可用系统密钥，无可用密钥的工具保持待激活。
3. **[工作流与 Agent]** 工作流候选版本的已应用状态在卡片和顶部提示间同步，未过期版本可再次应用；Agent 配置在实际应用完成后提示成功。
4. **[工作流与 Agent]** 改善模型原生工具调用流兼容性，处理并行参数混淆、名称重复或迟到、`functions.` 前缀及空参数；以工具调用状态结束但没有有效工具时明确返回错误。
5. **[工作流与 Agent]** 统一节点尺寸与画布布局，问题分类的默认文案随界面语言展示；提示词编辑器补充输入指引及系统、自定义变量选择器。
6. **[知识库与文件]** API 文件库同步先完成目录拉取与差量校验，再批量更新层级、名称和权限继承；远端请求失败时中止本轮同步，避免误删。服务地址兼容历史裸域名并默认补全 `https://`。
7. **[知识库与文件]** 启用同义词能力时，检索结果与引用可携带命中的标准词映射，重排兼顾原文与同义词标准化文本，保留较高分且不改写原文；未启用时保持原有行为。
8. **[知识库与文件]** 统一 AI 对话、Agent、工具与外部渠道的附件分类，区分文档、未知文件和图片、音视频，兼容旧文件类型；明确文档进入解析链路，未知文件仍可由文档读取工具尝试读取。无后缀链接支持从响应头及有限内容探测，复用文件名与请求内缓存。
9. **[知识库与文件]** 统一简易应用、Agent 与工作流的标签过滤交互，优化变量选择、启用状态和弹窗滚动；切换知识库清除无效自定义标签条件，手动输入关闭时保留已配置条件；工作流标签过滤补充结构示例与悬停说明。
10. **[知识库与文件]** `listV2` 可通过 `withFileCount` 按需获取全部层级的非目录文件数量；应用、技能与知识库支持按 ID 局部刷新，权限调整后保留分页及滚动位置。通用分页收到非数组列表时保留原有效数据并结束加载。
11. **[知识库与文件]** Agent 检索日志补充重排前候选快照，与知识库搜索节点统一使用 `retrievalResults`；仅在实际重排且 `RETRIEVAL_RESULTS_LIMIT > 0` 时记录，默认不记录。
12. **[对话体验]** 重试和编辑在删除成功后优先裁剪本地历史，减少额外历史请求；缺页时保留刷新，并丢弃裁剪前的过期分页响应。
13. **[对话体验]** 统一对话历史、资源选择器、发布历史及训练错误列表的初次加载与滚动追加状态，加载更多时保留已有内容，减少遮罩与嵌套滚动；切换查询或刷新后丢弃旧分页响应，避免旧数据混入当前列表。
14. **[对话体验]** 优化 Mermaid 的流式渲染、换行标签、缩放、拖拽与触控预览。
15. **[对话体验]** 简化加载动画与沙盒状态文案，改善思考过程、工具和技能详情的折叠、滚动与标题吸顶；错误标题、运行中节点与模型名称过长时省略显示，悬停可查看完整内容。
16. **[对话体验]** 支持通过 `/chat?pane=aa&tab=ta` 定位团队应用页签，刷新后保留选择。
17. **[对话体验]** 统一资源卡片间距，简介截断时可悬停查看完整内容。
18. **[工具与渠道]** MCP 工具失败及 HTTP 非 2xx 响应保留明确错误详情，便于排查限流与服务错误；MCP 收到 HTTP 429 时不再自动回退 SSE，避免重复连接。
19. **[团队与权限]** 初始化接口按登录状态返回公开配置，模型渠道和沙盒连接信息按需获取，账号切换后刷新缓存；成员名与登录用户名明确区分，强制填写时清除默认占位值，技能控制台补齐关联应用标签。
20. **[系统与运维]** 优化商业版应用与知识库管理列表查询，按 ID 倒序分页；知识库分块数统计仅查询当前页，并按团队与知识库配对匹配，减少全量扫描。
21. **[系统与运维]** 系统升级任务提示具体前置任务及对应语言文案，便于按依赖顺序执行或重试。
22. **[系统与运维]** 模型请求、请求记录与文件加载日志清理 base64 和不必要的调用栈，取消、探活中断及预期网络或用户配置错误按较低级别记录，减少无效告警。

## 🐛 修复

1. **[系统与运维]** 修复 SeekDB 容器重启或重建后数据丢失的问题。
2. **[系统与运维]** 修复 Pro API 流式或无 Content-Type 响应被 NextAPI 默认 JSON 包裹破坏的问题，等待流结束并保留微信回调等原始响应。
3. **[系统与运维]** 修复 `InvokeProcessor` session getter 自递归导致调用栈溢出的问题。
4. **[系统与运维]** 修复沙盒通过命令编辑文件时将特殊字符当作正则、无法替换多行文本的问题，按原文匹配替换并保留符号链接及文件权限；文件缺失、无读取权限或未完整读取时明确报错，写入中断时保留原文件。
5. **[团队与权限]** 应用测试对话和工作流调试执行传入节点前必须校验编辑权限；Agent 调用系统工具使用实际运行成员身份，重新签发登录会话保留 root 身份。
6. **[团队与权限]** 修复重复启用文件级权限清空独立授权、父目录所有者权限错误继承及目录权限未同步到内部文件的问题，保留独立权限分支并按各知识库开关同步后代授权。
7. **[团队与权限]** 修复历史成员名为 `null` 或缺失时，登录、团队列表、成员列表及搜索响应校验失败的问题，统一回落为 `Member`，已有空字符串及名称保持原值。
8. **[团队与权限]** 修复复制或转换新建 Agent 绕过创建上限的问题，统一 License、创建额度与账号资源用量统计。
9. **[团队与权限]** 修复批量创建成员及多团队登录补建个人团队时的事务与并发异常，避免重复创建和权限读取失败。
10. **[团队与权限]** 修复资源移动到根目录时空父级 ID 导致 BSON 转换或权限更新异常的问题，并修复技能卡片无法拖入文件夹的问题；批量选择时关闭拖拽以避免操作冲突。
11. **[团队与权限]** 修复邀请链接进入团队时，已加入成员无法自动切换到目标团队、成功提示在刷新后丢失的问题；切换失败时保留已接受的邀请结果并提示。
12. **[团队与权限]** 修复商业版成员部门路径顺序或重复拼接异常，仅对同步模式下已禁用成员显示恢复操作。
13. **[知识库与文件]** 修复 PG 与 OpenGauss 向量检索的团队隔离问题，以及商业版图片解析和索引加载可引用其他知识库内部图片路径的问题。
14. **[知识库与文件]** 修复网站同步异常或提前截断时误删历史页面的问题；爬取因积分不足、模型配置错误、达到页数上限或页面失败而未完整结束时，跳过过期页面清理并记录结果。
15. **[知识库与文件]** 修复 CSV 导入后重解析丢失逐行问答、自定义索引和元数据的问题，导出不再将系统索引当作自定义索引，文件级权限开启时仅导出可读内容。
16. **[知识库与文件]** 修复多库检索因某个知识库缺少指定标签而整体排除该库的问题，否定和空值条件按缺少标签的语义匹配。
17. **[知识库与文件]** 修复 PPTX 备注与幻灯片顺序错乱、XLSX 系统日期格式丢失世纪信息的问题；Doc2x 表格正确转义单元格竖线并保留 LaTeX 语义。
18. **[知识库与文件]** 修复大体量 CSV、OFD 与 PDF 处理因展开参数过多而失败，以及 Markdown 超长表头中断整份文档导入的问题。
19. **[知识库与文件]** 修复带查询参数的文件链接、SVG XML 声明与 UTF-16 文本的类型和编码识别异常，统一上传大小及数量限制的前后端口径；取消 S3 分片上传时及时中止请求，避免无效异常。
20. **[知识库与文件]** 外部 PDF 解析服务返回加密或损坏错误时，提示解密或重新上传。
21. **[知识库与文件]** 文件下载和日志导出失败时提取明确错误消息，避免展示整段 JSON 或重复弹错。
22. **[知识库与文件]** 修复解析任务积分耗尽后反复报错的问题，等待后续团队余额检查暂停处理。
23. **[工作流与 Agent]** 修复子工作流或工作流工具未捕获错误无法传到父节点，以及直接执行 MCP、HTTP、系统工具失败后不显示聊天错误卡片的问题；已捕获错误不向外提升，模型工具错误继续交给模型处理。
24. **[工作流与 Agent]** 修复商业版工作流辅助生成无法读取上传附件的问题，恢复文档解析及沙盒文件访问；私有附件按当前应用、成员和会话校验归属。沙盒文本读取工具明确仅支持 UTF-8 纯文本，二进制文档需先解析或转换。
25. **[工作流与 Agent]** 修复空说明表单提交时误报 dataId 重复的问题，兼容历史 `null` 及字段不完整的交互记录，保留有效交互的续跑信息。
26. **[工作流与 Agent]** 修复节点再次执行时保留旧输出的问题，本次未返回的输出清空，避免循环或交互恢复读到旧值；成功后才补齐必填输出默认值。
27. **[工作流与 Agent]** 修复判断器对数组及数字、布尔引用的包含判断，并保留正则中成对斜杠和转义语义，非法正则按错误处理。
28. **[工作流与 Agent]** 修复模型引用提取与替换不一致的问题，兼容旧名称、模型 ID、重复输入和自定义选择器，避免误识别工具的同名业务参数。
29. **[工作流与 Agent]** 修复代码助手生成的输入输出名称与实际参数 key 不一致、单步调试上传文件无法被解析节点识别的问题，保留已有输出标识及引用关系。
30. **[工作流与 Agent]** 修复多变量引用删除按钮、拖拽时下拉弹层与侧边面板首次引导的交互问题，打开面板时结束引导，避免旧弹层遮挡画布。
31. **[工作流与 Agent]** 修复工具选择器进入 MCP、HTTP 工具集时目录路径报错的问题，按读取权限返回所在目录及工具集路径；合并系统工具列表加载入口，避免切换目录、标签或搜索时重复请求。
32. **[工具与渠道]** 修复 MCP 循环引用 Schema 导致响应序列化失败的问题；不规范的外部 JSON-RPC 响应展示明确的格式错误提示。
33. **[工具与渠道]** 修复未知 MCP SSE 会话一直等待的问题，未知会话返回 HTTP 404；无效应用访问 Key 返回携带请求 ID 的协议错误。
34. **[工具与渠道]** 修复模型工具参数被额外过滤或校验阻断、工具结果被历史与 SSE 再次截断的问题，保留原始参数和模型实际消费的完整结果，已配置固定参数优先。
35. **[工具与渠道]** 修复飞书未提供话题 ID 时会话标识异常的问题，无话题消息按群聊标识归入会话。
36. **[工具与渠道]** 工具版本选择器展示实际版本号，长 MCP 名称不再撑宽选择器。
37. **[工具与渠道]** 修正 OpenAPI 必填 ObjectId 标记与最小请求示例，避免调用方误判必填参数。
38. **[对话体验]** 修复流结束、取消及异常退出时续传状态清理不完整、跨会话控制器相互影响和跨标签页反复写入本地存储的问题。
39. **[对话体验]** 修复赞踩反馈保存失败后界面状态与服务端不一致的问题，保存成功后再更新并提示结果；防止重复提交及切换会话后的迟到响应串写。
40. **[对话体验]** 修复并发生成会话标题时重复请求或旧结果覆盖的问题，保留手动标题，并保持未设置的 `customTitle` 为未设置状态。
41. **[对话体验]** 修复表格复制携带 CSV 转义引号，以及不同换行符导致复制或导出后错行的问题。
42. **[对话体验]** 修复文本预览截断 emoji 等字符的代理对导致乱码的问题。
43. **[对话体验]** 修复时间越界导致日期进位的问题，失焦时限制时分秒范围，切换日期保留时间编辑。
44. **[对话体验]** 修复文件大小进位展示异常的问题，避免显示 `1024 KB` 等结果。
45. **[模型与计费]** 修复 Agent 请求失败时遗漏已产生的 Token 与积分、历史思考 Token 预估缺失，以及 `maxInputTokens=0` 误判为无上限的问题。
46. **[模型与计费]** 修复思考模型在工具续轮、长度续写和 Agent 多轮调用中丢失 `reasoning_content` 的问题，保留已有思考文本，无思考文本时也按模型能力回传空字段。
47. **[模型与计费]** 修复开票列表刷新后选中记录丢失或错位的问题；商业版开票支持银行订单，并校验全部订单归属、金额与开票状态，防止重复申请。
48. **[模型与计费]** 修复套餐编辑将未填写配额转成 0 的问题，留空沿用标准值，显式 0 保留。
49. **[模型与计费]** 修复定价页面月付、年付计费切换的选中背景。

## 🛠️ 代码优化

1. **[工作流与 Agent]** 抽取共享 `workflow-core` 与 `workflow-cli`，统一节点、引用、条件分支和校验诊断；拆分资源授权、快照加载与运行时执行职责，减少重复校验。
2. **[工作流与 Agent]** 统一 Agent Ask 与辅助生成预览的结构化回复及持久化，拆分技能调试业务与 HTTP 适配，缓存辅助生成节点模板，减少重复写入。
3. **[对话体验]** 抽取统一聊天反馈上下文，集中管理赞踩、标注、自定义反馈及已读操作；按页面显式启用反馈类型，减少消息、控制器和弹窗间的逐层传参。
4. **[工具与渠道]** 补充企业微信 WebSocket 发布渠道的数据模型、凭据配置与连接状态管理。
5. **[系统与运维]** 区分错误分支数据、原始异常和展示详情，统一循环、并行与子工作流错误统计；用户配置错误保留本地诊断，跳过 OTel 日志导出，避免与系统故障混淆。修复不同 Next.js 模块实例间链路追踪状态不共享的问题。
6. **[系统与运维]** 运行镜像升级 Node.js 至 24.22.1，并更新 Hono、Vite、Multer、Nodemailer、Undici、Zod、MCP SDK、KaTeX 等依赖；升级 OpenSandbox SDK 与部署组件，清理未使用的 Deep RAG 路径及管理台依赖。

## What's Changed
* chore(deploy): bump images to v4.17.2 and sync deployment docs by @c121914yu in https://github.com/labring/FastGPT/pull/7934
* chore(deps): bump katex from 0.16.22 to 0.18.2 in /projects/app by @c121914yu in https://github.com/labring/FastGPT/pull/7935
* chore(deps): bump next from 15.5.24 to 15.5.27 in /document by @c121914yu in https://github.com/labring/FastGPT/pull/7936
* docs: supplement manual migration script details and index optimization for 4.17.2 by @c121914yu in https://github.com/labring/FastGPT/pull/7937
* chore(deps): bump @modelcontextprotocol/sdk from 1.26.0 to 1.32.1 by @c121914yu in https://github.com/labring/FastGPT/pull/7939
* feat(markdown): support controlled HTML rendering and rich components by @c121914yu in https://github.com/labring/FastGPT/pull/7940
* fix: update billing mode switch background by @changan-77 in https://github.com/labring/FastGPT/pull/7943
* docs: add v4.17.3 upgrade changelog and make echarts 100% full width by @c121914yu in https://github.com/labring/FastGPT/pull/7944
* fix(skill): align dashboard permission metadata by @FinleyGe in https://github.com/labring/FastGPT/pull/7941
* fix: persist SeekDB data across container recreation by @wangyunlai-seekdb in https://github.com/labring/FastGPT/pull/7942
* feat(dataset): restrict inheritPermission to folder creation by @SteelHe in https://github.com/labring/FastGPT/pull/7881
* feat: support agent user initialization and app ACL by @sxf-xiongtao in https://github.com/labring/FastGPT/pull/7927
* docs: supplement v4.17.3 release notes and bump pro submodule by @c121914yu in https://github.com/labring/FastGPT/pull/7945
* docs: 补充 4.17.1 AIProxy 模型测试环境变量说明 by @c121914yu in https://github.com/labring/FastGPT/pull/7947
* feat(model): support member-level model & channel isolation and AI Proxy integration by @DigHuang in https://github.com/labring/FastGPT/pull/7895
* fix: correct InvokeProcessor session getter self-recursion by @xqvvu in https://github.com/labring/FastGPT/pull/7949
* fix: prevent circular MCP tool schema from breaking response serialization by @xqvvu in https://github.com/labring/FastGPT/pull/7950
* fix(user): add ordered option to agent team member batch create by @sxf-xiongtao in https://github.com/labring/FastGPT/pull/7953
* fix(workflow): unify asynchronous file URL classification by @c121914yu in https://github.com/labring/FastGPT/pull/7946
* docs: supplement v4.17.3 release notes by @c121914yu in https://github.com/labring/FastGPT/pull/7955
* fix: classify aborted LLM requests as warn instead of error by @xqvvu in https://github.com/labring/FastGPT/pull/7951
* fix(migration): prompt exact prerequisite task name and align v4.17.2 upgrading docs by @c121914yu in https://github.com/labring/FastGPT/pull/7960
* fix(i18n): clarify team member name labels by @shortlight5980 in https://github.com/labring/FastGPT/pull/7961
* fix(model): hide account model tabs when team model is disabled by @DigHuang in https://github.com/labring/FastGPT/pull/7957
* fix(member-name): clear default name from force-fill modal by @shortlight5980 in https://github.com/labring/FastGPT/pull/7963
* feat(permission): add API key creation to default team permissions by @SuXiangcheng in https://github.com/labring/FastGPT/pull/7965
* feat(service): add configurable sandbox capacity limits by @ctlaltlaltc in https://github.com/labring/FastGPT/pull/7917
* feat(app-folder): add configurable permission inheritance by @shortlight5980 in https://github.com/labring/FastGPT/pull/7966
* fix: preserve streamed Pro API responses through NextAPI by @c121914yu in https://github.com/labring/FastGPT/pull/7971
* docs: update v4.17.3 notes, upgrade Next.js and standardize pagination by @c121914yu in https://github.com/labring/FastGPT/pull/7964
* fix: 修复复制 Agent 绕过创建上限和资源用量统计不准确 by @c121914yu in https://github.com/labring/FastGPT/pull/7974
* fix(inform): limit popup alerts to active notifications by @shortlight5980 in https://github.com/labring/FastGPT/pull/7978
* fix(agent): sign system tool invoke token as runtime caller by @FinleyGe in https://github.com/labring/FastGPT/pull/7982
* refactor(dataset): preserve API hierarchy and plan batch synchronization by @c121914yu in https://github.com/labring/FastGPT/pull/7959
* fix(mcp): treat an invalid app key as an expected client error by @xqvvu in https://github.com/labring/FastGPT/pull/7987
* fix: 收敛初始化配置返回值 by @c121914yu in https://github.com/labring/FastGPT/pull/7980
* fix(resource): unify node model extraction and decouple catalog lookup from snapshot resolution by @DigHuang in https://github.com/labring/FastGPT/pull/7984
* fix(dataset): 重解析保留 template 集合的 CSV 结构化数据 by @SteelHe in https://github.com/labring/FastGPT/pull/7998
* [AI-COMMIT][FIX] fix(dataset): stop counting system indexes in export… by @SteelHe in https://github.com/labring/FastGPT/pull/7994
* fix(workflow): 判断器数组值与非字符串引用比较时「包含/不包含」结果错误 by @Tong-bit-art in https://github.com/labring/FastGPT/pull/7986
* feat(chat): 客户端按会话缓存输入草稿 by @c121914yu in https://github.com/labring/FastGPT/pull/7983
* fix(admin): 套餐编辑可选配额未填时保留套餐默认值而非置为 0 by @c121914yu in https://github.com/labring/FastGPT/pull/8002
* fix(ai): 修复 toolChoice 流兼容和无效工具调用结束状态 by @c121914yu in https://github.com/labring/FastGPT/pull/7999
* fix(workflow): 保留判断器正则语义并修正斜杠解析 by @Tong-bit-art in https://github.com/labring/FastGPT/pull/8001
* feat(mcp): 接入团队对话 QPM 频次限制与流式错误内容增强 by @c121914yu in https://github.com/labring/FastGPT/pull/8003
* fix(auth): 强制会话签发显式传入管理员身份 by @DigHuang in https://github.com/labring/FastGPT/pull/8007
* fix(global): formatFileSize 进位到下一单位时显示成 1024 KB / 1024 MB by @kevin9327 in https://github.com/labring/FastGPT/pull/8021
* fix(global): replaceSensitiveText 只替换独立的 ns- 片段，不再改写 tokens-per-minute 等单词 by @kevin9327 in https://github.com/labring/FastGPT/pull/8018
* fix(auth): use App team mode for login fallback by @shortlight5980 in https://github.com/labring/FastGPT/pull/8005
* fix(workflow): 统一 valueTypeFormat 布尔转换为 JS 原生 Boolean 语义 by @Tong-bit-art in https://github.com/labring/FastGPT/pull/8008
* fix(global): parseFileExtensionFromUrl 在文件名含 % 时返回空扩展名 by @kevin9327 in https://github.com/labring/FastGPT/pull/8015
* fix(worker): write the default spreadsheet dates as ISO dates by @L4XB in https://github.com/labring/FastGPT/pull/8013
* fix(worker): place PowerPoint speaker notes after the slide they belong to by @L4XB in https://github.com/labring/FastGPT/pull/8014
* docs: complete and validate the English documentation edition by @yangchuansheng in https://github.com/labring/FastGPT/pull/7967
* fix(splitter): degrade table chunking when the markdown header exceeds chunk size by @xqvvu in https://github.com/labring/FastGPT/pull/7981
* fix(workflow): downgrade dataset resource missing errors to warn in search dispatch by @xqvvu in https://github.com/labring/FastGPT/pull/7975
* docs: add FAQ entry for switching the vector database from Milvus to pgvector by @mafirs in https://github.com/labring/FastGPT/pull/8023
* fix(openapi): 修正 ObjectId 请求参数的必填标记 by @c121914yu in https://github.com/labring/FastGPT/pull/8024
* refactor(skill): 分离调试对话业务与 HTTP 适配 by @c121914yu in https://github.com/labring/FastGPT/pull/8027
* fix(chat): 避免跨标签页同步重复回写 localStorage by @c121914yu in https://github.com/labring/FastGPT/pull/8026
* fix(deploy): use available code-sandbox image tag by @FinleyGe in https://github.com/labring/FastGPT/pull/8034
* fix(tracing): share langfuse state across module instances by @leilei3167 in https://github.com/labring/FastGPT/pull/7991
* Fix/s3 upload text type detection by @lavine77 in https://github.com/labring/FastGPT/pull/8006
* fix(workflow): 修复代码助手输出名称与实际 key 不一致 by @c121914yu in https://github.com/labring/FastGPT/pull/8028
* fix(chat): finalize stream resume cleanup on every exit by @c121914yu in https://github.com/labring/FastGPT/pull/8029
* feat(sandbox): derive kubernetes resource requests from overcommit factor by @ctlaltlaltc in https://github.com/labring/FastGPT/pull/7973
* feat(plugin): localize plugin metadata and tool schemas by @FinleyGe in https://github.com/labring/FastGPT/pull/7997
* [AI-COMMIT][FIX] fix(dataset): 移动到根目录时 parentId 空串导致 BSONError by @SteelHe in https://github.com/labring/FastGPT/pull/8009
* fix(chat): isolate stream resume controllers by conversation by @c121914yu in https://github.com/labring/FastGPT/pull/8036
* fix(marketplace): exclude Vitest configs from app type checking by @FinleyGe in https://github.com/labring/FastGPT/pull/8037
* feat(workflow): support dynamic interactive options by @lavine77 in https://github.com/labring/FastGPT/pull/7788
* fix(plugin): show version numbers in tool version selectors by @c121914yu in https://github.com/labring/FastGPT/pull/8038
* fix: Doc2x 表格管道符转义并保留 LaTeX 语义 by @RaphaelFakhri in https://github.com/labring/FastGPT/pull/8033
* fix(markdown): 修复 Mermaid 换行图表显示破图 by @c121914yu in https://github.com/labring/FastGPT/pull/8043
* fix(workflow): restore delete icon hover and click in multiple reference selector by @DigHuang in https://github.com/labring/FastGPT/pull/8042
* fix: restrict team member restore action by @shortlight5980 in https://github.com/labring/FastGPT/pull/8041
* feat(dataset): listV2 返回知识库文件数（不含文件夹） by @SteelHe in https://github.com/labring/FastGPT/pull/8045
* feat(outlink): add wecom websocket model support by @SuXiangcheng in https://github.com/labring/FastGPT/pull/8022
* feat(chat): support URL deep link to team apps tab by @xqvvu in https://github.com/labring/FastGPT/pull/8040
* style(workflow): unify node dimensions and support i18n for question classification by @DigHuang in https://github.com/labring/FastGPT/pull/8047
* fix(admin): restore configuration images and sync client cleanup by @c121914yu in https://github.com/labring/FastGPT/pull/8051
* fix: scope pg vector recall to team by @c121914yu in https://github.com/labring/FastGPT/pull/8052
* feat(workflow-builder): 接入共享 CLI、候选版本和画布交互 by @YYH211 in https://github.com/labring/FastGPT/pull/7901
* fix: 修复文件解析、模型选择器、分页与 preview 兼容，清理 admin 依赖并更新 V4.17.3 文档 by @c121914yu in https://github.com/labring/FastGPT/pull/7993
* fix(agent): 补充 Agent V2 提示词占位提示与变量选择 by @c121914yu in https://github.com/labring/FastGPT/pull/8063
* fix: 兼容开始节点历史输入并优化日志筛选对齐 by @c121914yu in https://github.com/labring/FastGPT/pull/8065
* chore(deps): 更新 Hono 与 Vite 依赖 by @c121914yu in https://github.com/labring/FastGPT/pull/8067
* feat(audit): support system-scoped team audit events by @shortlight5980 in https://github.com/labring/FastGPT/pull/8064
* fix(dataset): lock task and notify team on aiPointsNotEnough in parse queue by @xqvvu in https://github.com/labring/FastGPT/pull/7976
* fix(markdown): keep CSV quoting out of the copied Markdown table by @simpleqt in https://github.com/labring/FastGPT/pull/8056
* fix(dataset): normalize missing protocol in api dataset base url by @xqvvu in https://github.com/labring/FastGPT/pull/7985
* fix(dataset): exportAll 按文件级权限过滤导出内容 and 导出仅支持知识库，拒绝目录导出 by @SteelHe in https://github.com/labring/FastGPT/pull/8068
* fix(workflow): 修正引用和标签过滤校验并统一诊断码枚举 by @c121914yu in https://github.com/labring/FastGPT/pull/8071
* fix(vector): scope opengauss recall to team by @Tong-bit-art in https://github.com/labring/FastGPT/pull/8053
* fix(chat): simplify loading animation and status text by @c121914yu in https://github.com/labring/FastGPT/pull/8075
* fix(chat): 优化 Agent Ask 展示与工作流应用提示 by @c121914yu in https://github.com/labring/FastGPT/pull/8077
* fix(markdown): 表格复制与导出把裸 CR 当作换行处理 by @simpleqt in https://github.com/labring/FastGPT/pull/8078
* feat(dataset): move tag filter into params modal and polish filter UI by @DigHuang in https://github.com/labring/FastGPT/pull/8069
* chore(docker): upgrade Node.js images to 24.22.1 by @xqvvu in https://github.com/labring/FastGPT/pull/8085
* feat(audit): add dataset training audit events by @shortlight5980 in https://github.com/labring/FastGPT/pull/8082
* fix(workflow-builder): 统一交互回复并完善工具配置与聊天 UI by @c121914yu in https://github.com/labring/FastGPT/pull/8079
* fix(skill): allow dragging skill cards into folders by @FinleyGe in https://github.com/labring/FastGPT/pull/8088
* fix(dataset): 知识库/文件自身更新权限由 write 收紧为 manage by @SteelHe in https://github.com/labring/FastGPT/pull/8080
* feat: group hidden referenced apps by creator by @FinleyGe in https://github.com/labring/FastGPT/pull/8090
* fix(ui): show full truncated resource introductions on hover by @FinleyGe in https://github.com/labring/FastGPT/pull/8091
* fix(tool): pass model-generated tool params through by @FinleyGe in https://github.com/labring/FastGPT/pull/8089
* fix(mcp): keep long app names from widening the picker by @FinleyGe in https://github.com/labring/FastGPT/pull/8092
* Audit dataset by @shortlight5980 in https://github.com/labring/FastGPT/pull/8087
* fix(agent): preserve helper streams and restore generated configurations by @YYH211 in https://github.com/labring/FastGPT/pull/8094
* docs: 补齐 V4.17.3 更新说明并同步英文翻译 by @c121914yu in https://github.com/labring/FastGPT/pull/8093
* docs(dataset): rewrite collection tags guide and update openapi spec by @DigHuang in https://github.com/labring/FastGPT/pull/8095
* fix(i18n): capitalize English UI labels by @FinleyGe in https://github.com/labring/FastGPT/pull/8096
* fix(worker): downgrade external DNS and network failures to warn by @xqvvu in https://github.com/labring/FastGPT/pull/7969
* fix(dataset): disable collection switch for read-only users by @FinleyGe in https://github.com/labring/FastGPT/pull/8098
* feat(user): user list supports status filtering by @sxf-xiongtao in https://github.com/labring/FastGPT/pull/8081
* fix(workflow): include HTTP error response body in node error text by @Li-john1021 in https://github.com/labring/FastGPT/pull/8049
* fix(mcp): 未知 SSE 会话返回 404 并收敛消息处理异常 by @Tong-bit-art in https://github.com/labring/FastGPT/pull/8050
* feat(audit): add audit logging for restored inheritance by @shortlight5980 in https://github.com/labring/FastGPT/pull/8031
* fix: 虚拟机按需准备与状态同步，更新 V4.17.3 文档 by @c121914yu in https://github.com/labring/FastGPT/pull/8099
* feat: add folder ancestor paths and navigation by @FinleyGe in https://github.com/labring/FastGPT/pull/8030
* feat: add synonym-aware retrieval and index compatibility by @hellostronger in https://github.com/labring/FastGPT/pull/8011
* feat(api): support targeted resource refresh and explicit request modes by @c121914yu in https://github.com/labring/FastGPT/pull/8046
* fix(tool): include HTTP response body in tool error text by @Tong-bit-art in https://github.com/labring/FastGPT/pull/8104
* fix(sangfor): add stable statusText codes for encrypted and corrupted pdfs by @sunjiaqi52777 in https://github.com/labring/FastGPT/pull/8102
* fix(worker): avoid argument overflow when filtering large CSVs by @Ekko82 in https://github.com/labring/FastGPT/pull/8101
* fix(workflow): preserve edges and unify connection validation by @Nixieboluo in https://github.com/labring/FastGPT/pull/8107
* fix(worker): avoid argument overflow when detecting OFD base font size by @Tong-bit-art in https://github.com/labring/FastGPT/pull/8108
* chore(skills): merge PR change analysis into PR review by @c121914yu in https://github.com/labring/FastGPT/pull/8111
* fix(workflow-cli): honor global --version with other arguments by @Tong-bit-art in https://github.com/labring/FastGPT/pull/8112
* docs: require strict equality in coding standards by @c121914yu in https://github.com/labring/FastGPT/pull/8117
* fix(pricing): stop treating a zero maxInputTokens tier as open-ended by @lisry-1 in https://github.com/labring/FastGPT/pull/8115
* fix(dataset): keep negative tag filters when a dataset lacks the tag by @Tong-bit-art in https://github.com/labring/FastGPT/pull/8114
* fix(chat): preserve complete tool responses in history and SSE by @c121914yu in https://github.com/labring/FastGPT/pull/8125
* feat: add shared vector recall concurrency limit by @c121914yu in https://github.com/labring/FastGPT/pull/8054
* fix(permission): 修复重复启用清空独立节点子树 ACL 与父目录 owner 提权 by @SteelHe in https://github.com/labring/FastGPT/pull/8066
* chore(deps): bump nodemailer from 10.0.12 to 10.1.4 by @dependabot[bot] in https://github.com/labring/FastGPT/pull/8129
* docs: add FAQ entry for collecting loop results into an array by @mafirs in https://github.com/labring/FastGPT/pull/8135
* test: 修复 Agent Loop 公共模块边界检查误报 by @c121914yu in https://github.com/labring/FastGPT/pull/8137
* chore(deps): bump multer from 2.4.0 to 2.5.0 by @dependabot[bot] in https://github.com/labring/FastGPT/pull/8127
* fix(s3): treat multipart upload cancellation as expected by @xqvvu in https://github.com/labring/FastGPT/pull/8136
* chore(deps): bump undici from 7.30.0 to 7.30.1 by @dependabot[bot] in https://github.com/labring/FastGPT/pull/8128
* fix: 修复 Agent 历史思考 Token 统计及工作流工具面板入口 by @YYH211 in https://github.com/labring/FastGPT/pull/8139
* chore(deps): bump zod from 4.1.12 to 4.6.6 by @dependabot[bot] in https://github.com/labring/FastGPT/pull/8138
* test(workflow): cover uncovered If/Else operators and branch aggregation by @lemonzoey in https://github.com/labring/FastGPT/pull/8140
* feat: 升级任务优先执行启动依赖链并支持集群限流独立模式 by @c121914yu in https://github.com/labring/FastGPT/pull/8145
* feat: replace invalid team model references by @Nixieboluo in https://github.com/labring/FastGPT/pull/8143
* fix(ofd): replace page-level spreads with reduce to avoid stack overflow by @lemonzoey in https://github.com/labring/FastGPT/pull/8146
* feat(pricing): use M Tokens and million-character TTS prices by @c121914yu in https://github.com/labring/FastGPT/pull/8133
* fix(dataset): support portal in tag filter dropdowns and optimize modal scrolling by @DigHuang in https://github.com/labring/FastGPT/pull/8149
* docs: 更新 V4.17.3 升级说明并修正版本号 by @c121914yu in https://github.com/labring/FastGPT/pull/8144
* test(ofd): cover baseX fallback branch overflow in buildPageMarkdown by @lemonzoey in https://github.com/labring/FastGPT/pull/8151
* fix(pdf): replace spread with reduce to avoid stack overflow by @lemonzoey in https://github.com/labring/FastGPT/pull/8152
* fix(marketplace): update default marketplace base url to v3 by @FinleyGe in https://github.com/labring/FastGPT/pull/8157
* fix(workflow): replace custom LLM model refs by @Nixieboluo in https://github.com/labring/FastGPT/pull/8156
* fix(mcp): convert protocol errors to UserError for better UX by @FinleyGe in https://github.com/labring/FastGPT/pull/8158
* fix(docs): isolate standalone installs from workspace patches by @c121914yu in https://github.com/labring/FastGPT/pull/8159
* fix(dataset): 修复 folder 权限下发 by @SteelHe in https://github.com/labring/FastGPT/pull/8059
* perf(system-tool): add stage duration logs for tool list endpoints by @FinleyGe in https://github.com/labring/FastGPT/pull/8160
* feat(agent): 透出知识库检索的重排前候选快照 by @hellostronger in https://github.com/labring/FastGPT/pull/8161
* perf(system-tool): trace merge permission and filter durations by @c121914yu in https://github.com/labring/FastGPT/pull/8162
* fix(app): recover cross-tree folder references instead of failing migration by @FinleyGe in https://github.com/labring/FastGPT/pull/8155
* chore: remove system tool timing probes and update V4.17.3 notes by @c121914yu in https://github.com/labring/FastGPT/pull/8163
* ci: skip Docker Hub publishing without an account by @cuisongliu in https://github.com/labring/FastGPT/pull/8166
* feat(workflow-builder): 完善埋点链路与客户端上报校验 by @YYH211 in https://github.com/labring/FastGPT/pull/8154
* fix(string): 截断预览不再切开 emoji 代理对 by @simpleqt in https://github.com/labring/FastGPT/pull/8165
* refactor: remove unused Deep RAG search paths by @c121914yu in https://github.com/labring/FastGPT/pull/8168
* feat(user): require root password change on first login and in-app ch… by @FinleyGe in https://github.com/labring/FastGPT/pull/8105
* chore(deps): bump qs from 6.16.0 to 6.16.1 by @dependabot[bot] in https://github.com/labring/FastGPT/pull/8169
* fix(workflow): require write permission for workflow debug API by @FinleyGe in https://github.com/labring/FastGPT/pull/8170
* feat(profiling): 按请求头启用接口分段性能采集 by @xqvvu in https://github.com/labring/FastGPT/pull/8086
* fix(chat): require write permission for chat test API by @Tong-bit-art in https://github.com/labring/FastGPT/pull/8172
* feat(workflow): allow using references for secret fields by @Nixieboluo in https://github.com/labring/FastGPT/pull/7995
* feat(workflow-builder): 支持任务恢复、连续搭建和候选交付 by @YYH211 in https://github.com/labring/FastGPT/pull/8164
* fix(skill): 复审发布后清理旧 Codex 评论 by @c121914yu in https://github.com/labring/FastGPT/pull/8180
* fix(chat): tolerate incompatible interactive history payloads by @c121914yu in https://github.com/labring/FastGPT/pull/8181
* fix: 修复导出错误提示和日志导出重复 toast by @c121914yu in https://github.com/labring/FastGPT/pull/8182
* fix: reduce user config error telemetry noise by @xqvvu in https://github.com/labring/FastGPT/pull/8126
* fix(ai): improve multimodal URL extraction and short link classification by @DigHuang in https://github.com/labring/FastGPT/pull/8176
* fix: close workflow dropdowns and clamp time inputs by @Nixieboluo in https://github.com/labring/FastGPT/pull/8177
* feat(auxiliary): add run detail display switch and dismiss builder guide on panel open by @YYH211 in https://github.com/labring/FastGPT/pull/8183
* fix(chat): lease title generation per conversation by @c121914yu in https://github.com/labring/FastGPT/pull/8187
* [codex] feat(pdf): 新增 OXR 私有化部署指南与文件名追踪 by @YYH211 in https://github.com/labring/FastGPT/pull/8185
* fix(workflow): handle toolset in folder path and deduplicate system tool requests by @FinleyGe in https://github.com/labring/FastGPT/pull/8190
* fix(sandbox): update OpenSandbox suite to release-1.2.0 and update code-sandbox dependencies by @DigHuang in https://github.com/labring/FastGPT/pull/8186
* chore(deps): bump @hono/node-server from 2.0.12 to 2.1.3 by @dependabot[bot] in https://github.com/labring/FastGPT/pull/8191
* fix: 修复工作流错误展示与交互续跑并更新 V4.17.3 文档 by @c121914yu in https://github.com/labring/FastGPT/pull/8178
* fix(workflow): exclude tool caller outputs from child references by @c121914yu in https://github.com/labring/FastGPT/pull/8192
* docs: 分类整理 V4.17.3 更新说明并新增版本文档 Skill by @c121914yu in https://github.com/labring/FastGPT/pull/8193
* fix(sandbox-adapter): replace edit content literally instead of via sed by @RaphaelFakhri in https://github.com/labring/FastGPT/pull/8120
* [codex] feat(chat): 统一反馈上下文并完善辅助生成会话 by @YYH211 in https://github.com/labring/FastGPT/pull/8189
* docs: explain authenticated Streamable HTTP MCP toolkits by @ctcbyzx in https://github.com/labring/FastGPT/pull/8198
* feat(workflow): add valueDesc and tooltip for dataset tag filter by @DigHuang in https://github.com/labring/FastGPT/pull/8200
* fix: switch to invited team and preserve invitation toast by @shortlight5980 in https://github.com/labring/FastGPT/pull/8201
* fix(deps): constrain Node.js engines for CVE-2026-111497 by @FinleyGe in https://github.com/labring/FastGPT/pull/8202
* [codex] fix(workflow-builder): 修复附件读取和思考字段回传 by @YYH211 in https://github.com/labring/FastGPT/pull/8203
* fix: 统一文件分类和滚动加载，并更新 V4.17.3 文档 by @c121914yu in https://github.com/labring/FastGPT/pull/8196
* fix(user): 兼容空成员名，避免 OAuth 登录失败 by @c121914yu in https://github.com/labring/FastGPT/pull/8209
* chore(deploy): align root activation setup and password modal copy before release by @FinleyGe in https://github.com/labring/FastGPT/pull/8106
* docs: 更新 V4.17.3 中英文发布说明并同步 Pro by @c121914yu in https://github.com/labring/FastGPT/pull/8210

## New Contributors
* @wangyunlai-seekdb made their first contribution in https://github.com/labring/FastGPT/pull/7942
* @Tong-bit-art made their first contribution in https://github.com/labring/FastGPT/pull/7986
* @RaphaelFakhri made their first contribution in https://github.com/labring/FastGPT/pull/8033
* @Li-john1021 made their first contribution in https://github.com/labring/FastGPT/pull/8049
* @hellostronger made their first contribution in https://github.com/labring/FastGPT/pull/8011
* @Ekko82 made their first contribution in https://github.com/labring/FastGPT/pull/8101
* @lisry-1 made their first contribution in https://github.com/labring/FastGPT/pull/8115
* @lemonzoey made their first contribution in https://github.com/labring/FastGPT/pull/8140
* @ctcbyzx made their first contribution in https://github.com/labring/FastGPT/pull/8198

**Full Changelog**: https://github.com/labring/FastGPT/compare/v4.17.2...v4.17.3

---

> **Source** [labring/FastGPT](https://github.com/labring/FastGPT) · `v4.17.3` · 2026-11-01 · [upstream release](https://github.com/labring/FastGPT/releases/tag/v4.17.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
