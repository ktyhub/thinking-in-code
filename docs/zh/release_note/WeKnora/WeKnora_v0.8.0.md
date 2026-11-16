---
title: "WeKnora v0.8.0"
project: "WeKnora"
repo: "Tencent/WeKnora"
tag: "v0.8.0"
version: "v0.8.0"
published: "2026-09-03"
type: "minor"
lang: "zh"
---

# WeKnora v0.8.0

## 发生了什么变化
*修复（租户）：在https://github.com/Tencent/WeKnora/pull/2589中@jiahao6635删除成员后清除陈旧的家庭租户
* https://github.com/Tencent/WeKnora/pull/2548 中 @Syt3s 的壮举/问题 2401 自动标记
*修复（知识）：强化自动标记并让它尊重https://github.com/Tencent/WeKnora/pull/2595中@lyingbug的手动标记
* feat(auth): 在https://github.com/Tencent/WeKnora/pull/2591中通过@jiahao6635在用户个人资料中添加自助更改密码
* 修复（auth）：在https://github.com/Tencent/WeKnora/pull/2596中@lyingbug #2591之后强化自助更改密码
* fix(query-understand): LLM输出不可解析时应回退到原始查询输入 by @mdrkrg in https://github.com/Tencent/WeKnora/pull/2592
* 文档：修复登陆拼写错误，由 @jiahao6635 在 https://github.com/Tencent/WeKnora/pull/2598 中登录
* feat(files)：通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/2605 中为共享代理聊天图像添加消息范围代理
* 修复（vlm）：在 https://github.com/Tencent/WeKnora/pull/2614 中使用 @renezander030 的 GPT-5 / o 系列视觉模型 max_completion_tokens
* 修复：pptx/ppt 附件解析失败 — 缺少解析器引擎 + @putcn 在 https://github.com/Tencent/WeKnora/pull/2621 中提供的 markitdown 附加功能
* 修复（安全）：通过 https://github.com/Tencent/WeKnora/pull/2626 中的 @lyingbug 强化出站 URL SSRF 保护
* 壮举：在 https://github.com/Tencent/WeKnora/pull/2625 中添加 @hiasky 的 Metaso 网络搜索提供商
* feat: 邀请链接在invite_only模式改为登录后加入空间 by @asmh1989 in https://github.com/Tencent/WeKnora/pull/2627
* feat(邀请): 在https://github.com/Tencent/WeKnora/pull/2633中添加@asmh1989邀请注册用户的自动接受开关
* 修复（邀请）：强化 https://github.com/Tencent/WeKnora/pull/2638 中@lyingbug 代码审查的自动接受后续功能
* 修复（im）：在 https://github.com/Tencent/WeKnora/pull/2629 中保留 @jacentsao 的会话模式配置
* feat(agent)：在https://github.com/Tencent/WeKnora/pull/2631中由@mdrkrg预填充代理创建时的默认重新排序模型
* 修复（前端）：在 https://github.com/Tencent/WeKnora/pull/2624 中通过 @hiasky 消除文件夹导航上的陈旧卡片弹出窗口
* 修复（mcp）：保留https://github.com/Tencent/WeKnora/pull/2622中@jay3cx省略的服务更新字段
* 修复（测试）：在 https://github.com/Tencent/WeKnora/pull/2640 中 @lyingbug 在 MCP 服务更新测试中使用可解析的 URL
*修复（cli）：在https://github.com/Tencent/WeKnora/pull/2599中由@jiahao6635在retry_argv中保留代理更新标志
* 重构（处理程序）：通过 @mdrkrg 在 https://github.com/Tencent/WeKnora/pull/2610 中提取共享的 searchResultFromMap
* fix(config): 补齐 WEKNORA_TENANT_ENABLE_CROSS_TENANT_ACCESS 的 env 由 @asmh1989 在 https://github.com/Tencent/WeKnora/pull/2594 中读取
* feat(yunzhijia): 支持 @jacentsao 在 https://github.com/Tencent/WeKnora/pull/2630 中的线程会话
* https://github.com/Tencent/WeKnora/pull/2301 中 @nullptr-error 的壮举（沙箱）
* 修复(i18n): 在https://github.com/Tencent/WeKnora/pull/2649中添加@hanxiantao的常见更新成功翻译
* feat(auth): 添加 /auth/oidc/start 端点以通过 @asmh1989 在 https://github.com/Tencent/WeKnora/pull/2647 中直接登录 302 OIDC
* feat(sandbox): 沙箱改为按空间配置，并补齐 E2B 模板与检测诊断 by @lyingbug in https://github.com/Tencent/WeKnora/pull/2651
* 修复：修复共享空间下拉列表无法滚动 by @WHUTcjh-2024 in https://github.com/Tencent/WeKnora/pull/2644
* 修复（嵌入）：通过 @pengpengyi92 在 https://github.com/Tencent/WeKnora/pull/2646 中验证 WeKnoraCloud 响应索引
* 壮举：在 https://github.com/Tencent/WeKnora/pull/2617 中添加 @Syt3s 的 Exa WebSearch
* 壮举（沙箱）：通过 https://github.com/Tencent/WeKnora/pull/2655 中 @lyingbug 的自托管支持统一 E2B 协议上的远程沙箱
* 壮举（知识）：在https://github.com/Tencent/WeKnora/pull/2654中添加@hanxiantao的文档下载操作
* feat(i18n): 前端默认语言支持经 DEFAULT_LOCALE 环境变量运行时配置 by @asmh1989 in https://github.com/Tencent/WeKnora/pull/2658
* 修复（i18n）：在 https://github.com/Tencent/WeKnora/pull/2660 中的 @lyingbug #2658 之后强化 DEFAULT_LOCALE 运行时配置
* feat(sandbox)：通过https://github.com/Tencent/WeKnora/pull/2659中的@lyingbug增强沙箱操作的日志记录和错误诊断
*修复（docreader）：在https://github.com/Tencent/WeKnora/pull/2657中保留@Lion-Leporidae垂直合并的表格单元格
* 修复（前端）：在 https://github.com/Tencent/WeKnora/pull/2661 中保持 @hiasky 可见的知识视图控件
*壮举：允许通过@estongu在https://github.com/Tencent/WeKnora/pull/2607中更新API关键知识库范围
* 修复（wiki）：为https://github.com/Tencent/WeKnora/pull/2608中@jiahao6635的generateWithTemplate LLM调用设置MaxTokens
* 壮举：@hiasky 在 https://github.com/Tencent/WeKnora/pull/2664 中对文档块进行分页
* 修复（前端）：通过 https://github.com/Tencent/WeKnora/pull/2665 中的 @lyingbug 强化文档块分页状态处理
* 修复（docreader）：在 https://github.com/Tencent/WeKnora/pull/2663 中@jiahao6635 的 xlsx 预处理过程中避免图表序列化
* feat(datasource): 在https://github.com/Tencent/WeKnora/pull/2662中添加@hengjoey的腾讯IMA数据源
* 修复（前端）：通过 https://github.com/Tencent/WeKnora/pull/2670 中的 @lyingbug 优化用户配置文件更改密码弹出用户体验
* fix(ui): 统一剪贴板复制为公共方法，HTTP 环境回退 execCommand by @asmh1989 in https://github.com/Tencent/WeKnora/pull/2668
*修复：恢复@ttommybot在https://github.com/Tencent/WeKnora/pull/2669中的FAQ批量操作
*修复（代理）：共享知识库在https://github.com/Tencent/WeKnora/pull/2564中由@ShadowSmallBaby在runtime_context中呈现doc_count = 0
* feat(im)：通过 @jacentsao 在 https://github.com/Tencent/WeKnora/pull/2667 中处理 QA 中的文件附件
* feat(datasource): 支持 GitLab 数据源文档同步 @Numblgw in https://github.com/Tencent/WeKnora/pull/2656
* feat(im): 支持https://github.com/Tencent/WeKnora/pull/2550中@Greenplumwine对飞书websocket长连接的反向代理
* 修复(datasource/gitlab): 修复项目路径编码与连接器单例存储问题 by @lyingbug in https://github.com/Tencent/WeKnora/pull/2673
* 修复：https://github.com/Tencent/WeKnora/pull/2677中支持@wheatzone保留目录结构的文件夹拖拽上传
* 修复：允许在 https://github.com/Tencent/WeKnora/pull/2675 中清除 @ttommybot 的可选模型选择
*修复（数据分析）：修复Excel表格摘要丢失样本数据，由@Numblgw在https://github.com/Tencent/WeKnora/pull/2682中
* 修复（分块）：在 https://github.com/Tencent/WeKnora/pull/2680 中保留 @sandaogouchen 的父子文本子嵌入
* 修复(dev): 对 https://github.com/Tencent/WeKnora/pull/2683 中的 @hanxiantao 的本地服务使用 IPv4 环回
* feat(memory)：通过https://github.com/Tencent/WeKnora/pull/2689中的@lyingbug添加跨会话长期记忆
* 修复：同步https://github.com/Tencent/WeKnora/pull/2691中@T3L000知识搜索的Swagger路由与实际接口
* 修复（docparser）：在 https://github.com/Tencent/WeKnora/pull/2695 中@oscarlius 的 MinerU 分段上传中保留文件扩展名
* ci：通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/2696 中添加 golangci-lint 工作流程来控制新的 PR 代码
* 修复（数据源）：通过 @mdrkrg 在 https://github.com/Tencent/WeKnora/pull/2690 中执行针对每个数据源范围的真正同步删除
*修复：完善API Playground SSE终态处理 by @T3L000 in https://github.com/Tencent/WeKnora/pull/2697
* 修复（块合并）：当连续块重复 @ChenRussell 在 https://github.com/Tencent/WeKnora/pull/2686 中的文本时，停止删除内容
* 修复：在 https://github.com/Tencent/WeKnora/pull/2674 中按 @ttommybot 的部署功能过滤菜单
* 修复（聊天）：修复对话时间轴的三处失真（占位行风格、历史丢步骤、兜底计数） by @lyingbug in https://github.com/Tencent/WeKnora/pull/2699
* 【修复】https://github.com/Tencent/WeKnora/pull/2704中@Greenplumwine修复docker-compose.yml中配置的postgres安全检查问题
* feat(docparser): 引入anydoc引擎，在Go进程内解析office文档 by @lyingbug in https://github.com/Tencent/WeKnora/pull/2702
*修复（docker）：在https://github.com/Tencent/WeKnora/pull/2719中@lyingbug下载go mod之前复制anydoc-go go.mod
* 修复(anydoc): 升级到 0.1.9，为无效 PDF 的解析花费加上上界 by @lyingbug in https://github.com/Tencent/WeKnora/pull/2720
* 修复（docker）：默认在应用镜像中链接任何文档解析引擎，由@lyingbug in https://github.com/Tencent/WeKnora/pull/2721
* 修复（构建）：在 https://github.com/Tencent/WeKnora/pull/2287 中通过 @hbh112233abc 在 build_images.sh 中启用 Docker BuildKit
* 文档：通过 @hata333 在 https://github.com/Tencent/WeKnora/pull/2735 中更新网站屏幕截图跟踪器
* 修复（块）：在https://github.com/Tencent/WeKnora/pull/2701中由@oscarlius在持久化之前清理上下文标头
* 文档（cli）：将重试指导与https://github.com/Tencent/WeKnora/pull/2731中@Lem0nTea2002的retry_argv对齐
* 修复（混合搜索）：守卫 MatchCount=0 截断 https://github.com/Tencent/WeKnora/pull/1156 中 @toy0116 的所有结果
* 修复/混合搜索匹配计数规范化，由 @iuyo5678 在 https://github.com/Tencent/WeKnora/pull/2750 中进行
* 修复（i18n）：在 https://github.com/Tencent/WeKnora/pull/2739 中恢复 @koishi514-Z 的无租户入职副本
* 修复：当https://github.com/Tencent/WeKnora/pull/2710中的@LHMQ878将配置保存在数据库中时，本地化内置代理卡
* 修复(检索): 分段中删除的图片不再被@lawrence1912 in https://github.com/Tencent/WeKnora/pull/2730检索到
* 修复：在 https://github.com/Tencent/WeKnora/pull/2754 中将聊天引用导航到 @hiasky 的文档文件夹
* 修复(迁移): 补齐 Lite 模式缺失的 SQLite 版本化迁移 (修复 #2158) by @icatw in https://github.com/Tencent/WeKnora/pull/2749
* fix(deps): 升级 dingtalk-stream-sdk-go 修复 https://github.com/Tencent/WeKnora/pull/2727 中 @jettjia 在封闭通道上发送导致崩溃的问题
*功能：支持在https://github.com/Tencent/WeKnora/pull/2752中通过@hiasky编辑文档摘要
* ci: 按路径进行PR检查，避免https://github.com/Tencent/WeKnora/pull/2755中@lyingbug的anydoc与无关lint误触发
* feat(frontend): 选择VLLM模型时添加supports_vision判断 by @cainbit in https://github.com/Tencent/WeKnora/pull/2741
*修复（会话）：绑定自动生成的会话标题以适应https://github.com/Tencent/WeKnora/pull/2738中@hjxccc的列
* 修复（前端）：在 https://github.com/Tencent/WeKnora/pull/2732 中隔离 @jacentsao 的 Markdown 预览渲染器
* perf(agent): 在https://github.com/Tencent/WeKnora/pull/2737中通过@hjxccc使knowledge_search MMR选择增量
* Docs/cli 通过 @iuyo5678 在 https://github.com/Tencent/WeKnora/pull/2748 中进行词汇扫描
* 文档：通过 @bilibili336396-prog 在 https://github.com/Tencent/WeKnora/pull/2757 中修复 Trendshift 徽章替代文本中 URL 编码的斜线
* 修复（wiki）：通过 @hjxccc 在 https://github.com/Tencent/WeKnora/pull/2715 中阻止具有持久 Wiki 积压的强制失败文档的内务处理
* feat(docreader): 在https://github.com/Tencent/WeKnora/pull/2713中添加@guiyangyuan的XMind大纲解析
* feat(system-admin): 添加用于在 https://github.com/Tencent/WeKnora/pull/2722 中通过 @mdrkrg 创建用户的端点
* feat(dsh-weknora)：DeepSeek Harness 插件通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/2759 中公开 WeKnora 检索工具
* ci(dsh-weknora)：缓存固定的 dsh 安装以加速 https://github.com/Tencent/WeKnora/pull/2760 中 @lyingbug 的 e2e
* ci(dsh-weknora)：通过 https://github.com/Tencent/WeKnora/pull/2764 中的 @lyingbug 恢复冷 dsh 缓存的 e2e 超时
*修复（anydoc）：重建截断的修补板条箱，而不是https://github.com/Tencent/WeKnora/pull/2766中@lyingbug的失败货物
* 修复(数据源): 修复同步删除关闭状态无法保存的问题 by @Numblgw in https://github.com/Tencent/WeKnora/pull/2765
* feat(agent)：https://github.com/Tencent/WeKnora/pull/2772 中 @ochanism 报告并属性每轮 LLM 代币使用情况
* 修复（i18n）：在 https://github.com/Tencent/WeKnora/pull/2773 中添加 @hanxiantao 缺少的常用语言环境键
*壮举（沙箱）：用https://github.com/Tencent/WeKnora/pull/2769中的@lyingbug替换使用会话范围容器运行的一次性docker
* 修复（处理程序）：在https://github.com/Tencent/WeKnora/pull/2776中验证@pengpengyi92的知识搜索分页
* 修复（docreader）：应用 PDF 图像 SMask，以便 https://github.com/Tencent/WeKnora/pull/2775 中的@649111698 嵌入的图形不是全黑的
* 修复(im): 在https://github.com/Tencent/WeKnora/pull/2777中处理@waterbang的钉钉富文本消息
* 壮举（沙箱）：通过 https://github.com/Tencent/WeKnora/pull/2781 中的 @nullptr-error 添加租户技能快照基础设施
* 文档：通过 @hiasky 在 https://github.com/Tencent/WeKnora/pull/2784 中澄清 Docker 图像发布标签
* feat(chat): 在https://github.com/Tencent/WeKnora/pull/2762中显示@Jonesxq的消息时间戳
* 壮举（沙箱）：通过https://github.com/Tencent/WeKnora/pull/2783中的@nullptr-error添加租户技能安装和删除服务层
* 修复：在 https://github.com/Tencent/WeKnora/pull/2770 中停止 @sufan721 的 Markdown 表正则表达式灾难性回溯
* 修复（聊天）：通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/2788 中插入时间戳作为对话流分隔符
*修复（前端）：通过https://github.com/Tencent/WeKnora/pull/2787中的@ochanism向智能推理代理公开历史记录和检索保留
* feat(sandbox)：通过 HTTP 和 https://github.com/Tencent/WeKnora/pull/2789 中的 @nullptr-error 在控制台中公开租户技能管理
* ui(sandbox)：将设置重命名为技能沙箱并修复https://github.com/Tencent/WeKnora/pull/2792中@lyingbug的技能安装
*修复（沙箱）：跳过相同的技能安装并修剪https://github.com/Tencent/WeKnora/pull/2791中@lyingbug的旧快照
* feat(sandbox): 在 https://github.com/Tencent/WeKnora/pull/2795 中通过 @lyingbug 从 ClawHub、SkillHub 和 git URL 安装技能
* 修复（前端）：将设置导航与 https://github.com/Tencent/WeKnora/pull/2797 中 @lyingbug 的单节查询同步
* ui(chat)：通过 https://github.com/Tencent/WeKnora/pull/2801 中的 @lyingbug 完善生成的文件表面和 shell_exec 卡
*修复（沙箱）：仅在https://github.com/Tencent/WeKnora/pull/2800中宣传图像技能并取消@lyingbug的安装
* 修复（沙箱）：https://github.com/Tencent/WeKnora/pull/2802 中 @lyingbug 从模板目录中隐藏 Cube 技能快照
* feat(sandbox): 在https://github.com/Tencent/WeKnora/pull/2804中通过@lyingbug从设置中浏览已安装的技能文件
* ui(agent)：https://github.com/Tencent/WeKnora/pull/2806 中的 @lyingbug 将技能和沙箱合并到一个编辑器选项卡中
* 壮举（沙盒）：Docker 技能快照、Cube DNS 以及 https://github.com/Tencent/WeKnora/pull/2805 中 @lyingbug 冻结技能后的配置
*壮举（api）：在https://github.com/Tencent/WeKnora/pull/2814中@lyingbug的混合搜索上尊重resource_urls=public
* feat(sandbox)：通过https://github.com/Tencent/WeKnora/pull/2815中的@lyingbug删除本地主机进程后端
* ui(sandbox)：通过 https://github.com/Tencent/WeKnora/pull/2816 中的 @lyingbug 解释谁仍然持有配置
* ui(agent)：统一编辑器中的技能命名和图标，并在 https://github.com/Tencent/WeKnora/pull/2818 中由 @lyingbug 提及
*修复（代理）：通过https://github.com/Tencent/WeKnora/pull/2821中的@lyingbug将压缩的沙箱流保留在持久历史记录中
* feat(agent)：预览技能工件并验证安装，无需通过https://github.com/Tencent/WeKnora/pull/2823中的@lyingbug运行它们
* 测试（沙箱）：从 https://github.com/Tencent/WeKnora/pull/2830 中 @lyingbug 的 Cube 测试中删除 TEST-NET DNS 固定装置
* 修复（代理）：停止使用聊天模型对https://github.com/Tencent/WeKnora/pull/2831中@lyingbug的知识搜索进行重新排序
*修复（沙箱）：固定Docker会话，以便@lyingbug在https://github.com/Tencent/WeKnora/pull/2834中收集技能工件
* 修复(i18n): 修复内置智能体名称与描述不随界面语言切换的问题 by @asmh1989 in https://github.com/Tencent/WeKnora/pull/2828
* feat(sandbox)：在 https://github.com/Tencent/WeKnora/pull/2833 中通过 @nullptr-error 执行时注入每个用户和工作区技能环境变量
* 壮举（聊天）：通过 https://github.com/Tencent/WeKnora/pull/2839 中的 @nullptr-error 添加长时间溢出会话的问题大纲
* 修复（沙箱）：保留技能环境声明并通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/2842 中首次安装 Docker exec
* ui(chat)：通过 https://github.com/Tencent/WeKnora/pull/2845 中的 @lyingbug 将问题大纲细化为更严格的类似 Codex 的轨道
* ui(skills)：通过https://github.com/Tencent/WeKnora/pull/2847中的@lyingbug将技能目录从沙盒编辑器中分离出来
* 修复（代理）：通过 https://github.com/Tencent/WeKnora/pull/2853 中的 @lyingbug 保留模型和 UI 失败时的技能脚本标准输出
* 壮举（技能）：https://github.com/Tencent/WeKnora/pull/2852 中 @lyingbug 提供的带有 install-per-sandbox 的租户目录
* 修复(im): 在 https://github.com/Tencent/WeKnora/pull/2848 中处理 @Roovelrz 的 WeCom 32 字节 PKCS7 填充
* ui(聊天): 在https://github.com/Tencent/WeKnora/pull/2854中通过@lyingbug在工具卡上显示技能名称并渲染沙箱文件列表
* 修复（wiki）：防止 @JYao-Chen 在 https://github.com/Tencent/WeKnora/pull/2850 中并发重复页面标识
* 修复（代理）：通过 https://github.com/Tencent/WeKnora/pull/2856 中的 @nullptr-error 暂存沙箱附件并公开文件工具
* feat(agent)：编写工作区脚本并通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/2865 中安装的技能运行它们
*修复（技能）：将ClawHub @owner/slug映射到https://github.com/Tencent/WeKnora/pull/2866中@lyingbug的slug加上ownerHandle
* feat(agent)：将最大完成令牌保留为默认值或由https://github.com/Tencent/WeKnora/pull/2867中的@lyingbug自定义上限
* 修复（技能）：通过可加载性验证安装并通过 https://github.com/Tencent/WeKnora/pull/2889 中的 @lyingbug 修复缺失的 deps
* 修复（markdown）：通过 @Jonesxq 在 https://github.com/Tencent/WeKnora/pull/2870 中清理无效的 UTF-8 和 NUL 字节
*修复（s3）：通过https://github.com/Tencent/WeKnora/pull/2872中的@Jonesxq禁用兼容端点的可选校验和
* 修复（wiki）：回到 https://github.com/Tencent/WeKnora/pull/2871 中 @Jonesxq 的知识 QA 模型
* 修复：在 https://github.com/Tencent/WeKnora/pull/2864 中通过@hiasky 共享链接加入后协调直接邀请
*修复（前端）：防止流式美人鱼图恢复为https://github.com/Tencent/WeKnora/pull/2890中@lyingbug的代码
* 修复（docreader）：https://github.com/Tencent/WeKnora/pull/2891 中的 @lyingbug 无法抓取 URL，而不是索引错误文本
* 修复（解析器）：当 https://github.com/Tencent/WeKnora/pull/2892 中的 @lyingbug 没有引擎规则时，默认 ppt/pptx 为 markitdown
* 文档：通过 https://github.com/Tencent/WeKnora/pull/2893 中的 @lyingbug 将 dsh-weknora 链接到其 npm 包页面
* 修复（dsh-weknora）：在 https://github.com/Tencent/WeKnora/pull/2895 中的@lyingbug 的插件答案中显示知识库数据（#2829）
* 修复(docreader): 在 https://github.com/Tencent/WeKnora/pull/2902 中通过 @ResistanceTo 剥离 mhtml header 时处理 Header 对象
*修复（docreader）：将DOCX表内容保留在https://github.com/Tencent/WeKnora/pull/2898中@LuckVd解析的文本中
* 修复（可观察性）：在 https://github.com/Tencent/WeKnora/pull/2904 中@lyingbug 在聊天跟踪下嵌套后续和沙箱跨度
* 修复（前端）：收紧技能目录卡并在https://github.com/Tencent/WeKnora/pull/2910中通过@lyingbug添加头像快捷方式
* 修复（前端）：澄清代理技能选择器并通过 https://github.com/Tencent/WeKnora/pull/2928 中的 @lyingbug 就地打开安装进度
* 修复（前端）：在 https://github.com/Tencent/WeKnora/pull/2926 中使用 @cainbit 的最新系统设置值
* 修复：通过 https://github.com/Tencent/WeKnora/pull/2927 中的 @chiliec JWKS 验证 OIDC id_token 签名（修复 #2799）
* 功能：在 https://github.com/Tencent/WeKnora/pull/2929 中支持 @cainbit 的复杂密码
* 壮举：通过 @prodmanpd 在 https://github.com/Tencent/WeKnora/pull/2923 中添加 LiteLLM 作为模型提供者
* 修复(im/feishu): 在https://github.com/Tencent/WeKnora/pull/2909中@LeonPure以完整输出模式显示进度卡
* 修复(feishu): 在https://github.com/Tencent/WeKnora/pull/2911中由@gongwen完成流媒体卡状态
* 修复：https://github.com/Tencent/WeKnora/pull/2935 中的 @lyingbug 在 SSRF 和沙箱 URL 防护之间共享 IP 分类
* 壮举：需要通过 https://github.com/Tencent/WeKnora/pull/2936 中的 @lyingbug 选择加入 Docker 沙箱后端
* 修复（auth）：通过 @mdrkrg 在 https://github.com/Tencent/WeKnora/pull/2922 中记录 SwitchTenant 上的最后活动租户首选项
* 修复（沙箱）：通过 https://github.com/Tencent/WeKnora/pull/2939 中的 @lyingbug 向应用程序用户授予应用程序容器内的 docker.sock 组
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/Tencent/WeKnora/pull/2947 中对 /cli 中的 cli-deps 组进行 2 次更新
* 修复（代理）：通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/2952 中恢复带有杂散尾随片段的工具参数
* perf(skills)：https://github.com/Tencent/WeKnora/pull/2960 中 @nullptr-error 的批量安装验证和实时安装程序进度
*修复（技能）：计算GitHub技能子树并通过@lyingbug在https://github.com/Tencent/WeKnora/pull/2948中完善目录安装UI
*修复（技能）：@Greenplumwine在https://github.com/Tencent/WeKnora/pull/2954中@提及不再收窄技能白名单
* 修复（前端）：在 https://github.com/Tencent/WeKnora/pull/2986 中 @lyingbug 构建的 UI 映像中包含 nginx-api-proxy.conf
* 修复（技能）：解析 JSON 中的@Greenplumwine 中的 JSON 数据库形式的参数 https://github.com/Tencent/WeKnora/pull/2955
* feat(agent)：通过https://github.com/Tencent/WeKnora/pull/2988中的@lyingbug告诉会话代理他们的工作空间并确定沙盒工具的范围
*修复（技能）：通过https://github.com/Tencent/WeKnora/pull/2941中的@lyingbug安装解析器安装ClawHub Skills.sh目录页面
* 修复（模型）：当https://github.com/Tencent/WeKnora/pull/2975中的@leon4z阻止删除时显示使用详细信息
*壮举（代理）：防止https://github.com/Tencent/WeKnora/pull/2994中的@lyingbug长时间沙箱轮流截断、溢出或重写文件
* 壮举（代理）：通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/3000 中流式传输沙箱写入和编辑的实时 +/- 进度
*壮举（聊天）：保持提示前缀稳定并通过https://github.com/Tencent/WeKnora/pull/3002中的@lyingbug发送提供者缓存标记
* feat(sandbox)：通过https://github.com/Tencent/WeKnora/pull/2995中的@nullptr-error添加租户可配置的网络策略
* 修复（沙箱）：隐藏入站无线电并让 Cube L7 规则通过 https://github.com/Tencent/WeKnora/pull/3007 中的 @nullptr-error 重新排序
* 杂务：准备 v0.8.0 版本，由 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/3009 中发布

## 新贡献者
* @Syt3s 在 https://github.com/Tencent/WeKnora/pull/2548 中做出了第一个贡献
* @putcn 在 https://github.com/Tencent/WeKnora/pull/2621 中做出了第一个贡献
* @jay3cx 在 https://github.com/Tencent/WeKnora/pull/2622 中做出了第一个贡献
* @nullptr-error 在 https://github.com/Tencent/WeKnora/pull/2301 中做出了第一个贡献
* @hanxiantao 在 https://github.com/Tencent/WeKnora/pull/2649 中做出了第一个贡献
* @Lion-Leporidae 在 https://github.com/Tencent/WeKnora/pull/2657 中做出了第一个贡献
* @estongu 在 https://github.com/Tencent/WeKnora/pull/2607 中做出了第一个贡献
* @Numblgw 在 https://github.com/Tencent/WeKnora/pull/2656 中做出了第一个贡献
* @wheatzone 在 https://github.com/Tencent/WeKnora/pull/2677 中做出了第一个贡献
* @sandaogouchen 在 https://github.com/Tencent/WeKnora/pull/2680 中做出了第一个贡献
* @T3L000 在 https://github.com/Tencent/WeKnora/pull/2691 中做出了第一个贡献
* @hata333 在 https://github.com/Tencent/WeKnora/pull/2735 中做出了他们的第一个贡献
* @Lem0nTea2002 在 https://github.com/Tencent/WeKnora/pull/2731 中做出了他们的第一个贡献
* @iuyo5678 在 https://github.com/Tencent/WeKnora/pull/2750 中做出了第一个贡献
* @LHMQ878 在 https://github.com/Tencent/WeKnora/pull/2710 中做出了他们的第一个贡献
* @icatw 在 https://github.com/Tencent/WeKnora/pull/2749 中做出了第一个贡献
* @jettjia 在 https://github.com/Tencent/WeKnora/pull/2727 中做出了第一个贡献
* @cainbit 在 https://github.com/Tencent/WeKnora/pull/2741 中做出了第一个贡献
* @hjxccc 在 https://github.com/Tencent/WeKnora/pull/2738 中做出了第一个贡献
* @bilibili336396-prog 在 https://github.com/Tencent/WeKnora/pull/2757 中做出了第一个贡献
* @guiyangyuan 在 https://github.com/Tencent/WeKnora/pull/2713 中做出了第一个贡献
* @649111698 在 https://github.com/Tencent/WeKnora/pull/2775 中做出了第一个贡献
* @waterbang 在 https://github.com/Tencent/WeKnora/pull/2777 中做出了第一个贡献
* @Jonesxq 在 https://github.com/Tencent/WeKnora/pull/2762 中做出了第一个贡献
* @sufan721 在 https://github.com/Tencent/WeKnora/pull/2770 中做出了第一个贡献
* @Roovelrz 在 https://github.com/Tencent/WeKnora/pull/2848 中做出了第一个贡献
* @JYao-Chen 在 https://github.com/Tencent/WeKnora/pull/2850 中做出了第一个贡献
* @ResistanceTo 在 https://github.com/Tencent/WeKnora/pull/2902 中做出了第一个贡献
* @LuckVd 在 https://github.com/Tencent/WeKnora/pull/2898 中做出了第一个贡献
* @chiliec 在 https://github.com/Tencent/WeKnora/pull/2927 中做出了第一个贡献
* @prodmanpd 在 https://github.com/Tencent/WeKnora/pull/2923 中做出了第一个贡献
* @LeonPure 在 https://github.com/Tencent/WeKnora/pull/2909 中做出了他们的第一个贡献
* @gongwen 在 https://github.com/Tencent/WeKnora/pull/2911 中做出了第一个贡献
* @leon4z 在 https://github.com/Tencent/WeKnora/pull/2975 中做出了第一个贡献

**完整 Changelog**：https://github.com/Tencent/WeKnora/compare/v0.7.2...v0.8.0

---

> 📦 仓库：[Tencent/WeKnora](https://github.com/Tencent/WeKnora) · 🏷️ 版本：`v0.8.0` · 📅 发布：2026-09-03 · [查看英文原版 Release](https://github.com/Tencent/WeKnora/releases/tag/v0.8.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
