---
title: "WeKnora v0.7.0"
project: "WeKnora"
repo: "Tencent/WeKnora"
tag: "v0.7.0"
version: "v0.7.0"
published: "2026-07-17"
type: "minor"
lang: "zh"
---

# WeKnora v0.7.0

## 发生了什么变化
* feat(im): 通过 @YS-zdck 在 https://github.com/Tencent/WeKnora/pull/1824 中新增 QQBot 即时通讯平台集成支持
* 修复（前端）：当 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/1825 中应用部分标题时，隐藏多余的卡徽章
* 杂务：https://github.com/Tencent/WeKnora/pull/1826 中 @lyingbug 将版本提升至 0.6.3
* 修复（嵌入）：通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/1828 中为嵌入器添加 SSRF 验证和安全 HTTP client
* ui(前端): 完善频道卡并在 https://github.com/Tencent/WeKnora/pull/1830 中使用 @lyingbug 的官方 QQBot 图标
* feat(frontend): Chrome 插件与 Claw Skill 集成集成页面 by @lyingbug in https://github.com/Tencent/WeKnora/pull/1832
*修复（前端）：在https://github.com/Tencent/WeKnora/pull/1829中@hiasky将卡片悬停弹出框重新定位到卡片而不是光标
*壮举（前端）：在https://github.com/Tencent/WeKnora/pull/1837中@lyingbug在侧边栏悬停时显示堆叠的集成图标
* 修复：通过 docker 中的环境变量使基础设施主机/端口可配置，由 https://github.com/Tencent/WeKnora/pull/1840 中的@hiasky 撰写
* 测试：通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/1842 中修复陈旧的 Doris SQL 形状和片状 OSS 存储桶断言
* 壮举（聊天）：@Skill/@MCP 在 https://github.com/Tencent/WeKnora/pull/1841 中通过@lyingbug 提到了范围代理运行时
* 通过 https://github.com/Tencent/WeKnora/pull/1843 中的 @lyingbug 优化 grep 标签提及范围
* feat(mcp)：通过 AuthType 驱动身份验证，并通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/1844 中自动检测 OAuth 连接测试
* feat(mcp)：在https://github.com/Tencent/WeKnora/pull/1845中@lyingbug在对话中提示并恢复OAuth授权
* 通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/1846 中将 MCP OAuth 和工具批准卡与代理工具时间线对齐
* 壮举：https://github.com/Tencent/WeKnora/pull/1847 中 @lyingbug 负责人的范围 API MCP OAuth
* 修复（前端）：通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/1850 中打开 API 集成选项卡并完善登陆页面
* 修复(docker): 默认 DB_HOST 为 .env.example 中的 postgres by @lyingbug in https://github.com/Tencent/WeKnora/pull/1851
*壮举（前端）：通过@lyingbug在https://github.com/Tencent/WeKnora/pull/1852中添加API集成游乐场
* 杂务：更新 https://github.com/Tencent/WeKnora/pull/1854 中的 @oxkrypton 的开发脚本检查和 Air 文档
*修复（vlm）：允许https://github.com/Tencent/WeKnora/pull/1858中的@lawrence1912为VLM模型配置温度
* feat(agent)：通过https://github.com/Tencent/WeKnora/pull/1863中的@lyingbug为每个代理添加可配置的MCP OAuth等待超时
* 通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/1871 中修复 lint 和测试失败
* feat(im)：在 https://github.com/Tencent/WeKnora/pull/1874 中的@lyingbug 在 IM 身份验证通知中包含每个服务的 MCP OAuth URL
* 修复 https://github.com/Tencent/WeKnora/pull/1877 中 @lyingbug 的 MCP 代码导入占位符
* 修复（安全）：通过 https://github.com/Tencent/WeKnora/pull/1881 中的 @lyingbug 关闭代理数据库工具中的 SQL 验证器旁路
* 修复（安全）：通过 https://github.com/Tencent/WeKnora/pull/1882 中的 @lyingbug 强制对 wiki 读取和相关 IDOR 路径进行 KB 访问
* 修复（安全）：https://github.com/Tencent/WeKnora/pull/1883 中的 @lyingbug 阻止知识导入、web_fetch 和数据源连接器中的 SSRF
* 修复（安全）：通过 https://github.com/Tencent/WeKnora/pull/1884 中的 @lyingbug 从查看者可访问的端点编辑集成机密
* 修复（安全）：关闭 https://github.com/Tencent/WeKnora/pull/1887 中 @lyingbug 安全分类中打开的 GHSA 结果
*修复（安全）：阻止刷新令牌作为https://github.com/Tencent/WeKnora/pull/1890中@lyingbug的承载和沙箱MCP上传
* 修复（nginx）：在 https://github.com/Tencent/WeKnora/pull/1879 中嵌入 @oxkrypton 的 iframe x-frame-options
* 修复（安全）：编辑 IM 列表凭据并通过 https://github.com/Tencent/WeKnora/pull/1897 中的 @lyingbug 强化 MinerU SSRF
* 修复（安全）：通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/1899 中强化后续请求和预览界面
* 修复（client）：通过 @coconut-yc 在 https://github.com/Tencent/WeKnora/pull/1740 中强化聊天和代理 SSE 可靠性
*壮举（cli）！：通过https://github.com/Tencent/WeKnora/pull/1741中的@coconut-yc添加代理优先`chat` / `session ask`输出模式
* 修复（cli）：https://github.com/Tencent/WeKnora/pull/1903 中 @lyingbug 输出模式合并后对齐流错误处理
* 修复https://github.com/Tencent/WeKnora/pull/1911中@lyingbug的手动知识编辑器发布流程
* 修复（前端）：防止 https://github.com/Tencent/WeKnora/pull/1925 中 @hiasky 损坏 localStorage 导致白屏
* 修复（前端）：在 https://github.com/Tencent/WeKnora/pull/1927 中@lyingbug #1925 之后强化设置 localStorage 加载
* [codex] 修复https://github.com/Tencent/WeKnora/pull/1933中@lyingbug上传飞书卡markdown图片的问题
* 重构（前端）：通过@hiasky在https://github.com/Tencent/WeKnora/pull/1931中提取共享文档操作菜单和卡片视图组件
* 修复（前端）：统一文档操作菜单样式并在https://github.com/Tencent/WeKnora/pull/1939中通过@lyingbug重置关闭时的移动状态
*壮举（cli）！：v0.10 CLI可靠性，代理UX和命令表面强化由https://github.com/Tencent/WeKnora/pull/1917中的@voidkey
* feat(redis)：支持 https://github.com/Tencent/WeKnora/pull/1930 中 @qilifan 的 Redis 连接的 TLS
* 修复（redis）：通过 https://github.com/Tencent/WeKnora/pull/1940 中的 @lyingbug 在启动时强化 TLS 测试和表面 TLS 配置
* 修复(im/feishu): 当 https://github.com/Tencent/WeKnora/pull/1908 中 @Greenplumwine 停止通道时，实际关闭 WebSocket 长连接
* 修复（代理）：将 end_turn 视为 @jacentsao 在 https://github.com/Tencent/WeKnora/pull/1868 中的自然停止
* 修复（搜索）：将标签过滤器应用于https://github.com/Tencent/WeKnora/pull/1907中@langcaiye的知识搜索
* 壮举：通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/1922 中添加范围租户 API 密钥
* 修复（前端）：在 https://github.com/Tencent/WeKnora/pull/1947 中 @lyingbug 保存后，保持 HMAC 秘密可见以供复制
* 壮举：通过 @ilya-bogin-keenable 在 https://github.com/Tencent/WeKnora/pull/1946 中添加 Keenable 作为可配置的网络搜索提供程序
* 修复（网络搜索）：在 https://github.com/Tencent/WeKnora/pull/1948 中的 @lyingbug #1946 之后完善 Keenable 提供程序集成
* 通过 https://github.com/Tencent/WeKnora/pull/1949 中的 @lyingbug 改进快速 QA 源抽屉和代理能力控制
* 在 https://github.com/Tencent/WeKnora/pull/1951 中通过 @lyingbug 切换聊天会话时关闭参考抽屉
* 修复（代理）：通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/1956 中完善选择器功能状态芯片
* 修复（搜索）：在 https://github.com/Tencent/WeKnora/pull/1952 中@lyingbug #1907 之后强化标签范围解析
* 修复（常见问题解答）：防止 https://github.com/Tencent/WeKnora/pull/1965 中的 @lyingbug 在导入计时日志中除以零
* feat(dev): 通过https://github.com/Tencent/WeKnora/pull/1966中的@lyingbug通过.env.local支持远程基础设施
* 修复（知识库）：通过 https://github.com/Tencent/WeKnora/pull/1967 中的 @lyingbug 改进文档过滤栏响应式布局
* 壮举（知识列表）：在 https://github.com/Tencent/WeKnora/pull/1970 中@lyingbug 在知识库卡片上显示 Wiki 徽章
* 在https://github.com/Tencent/WeKnora/pull/1971中添加@lyingbug的知识库重复流程
*壮举（前端）：在https://github.com/Tencent/WeKnora/pull/1973中通过@lyingbug在侧边栏中添加内联会话标题重命名
* 修复：通过 https://github.com/Tencent/WeKnora/pull/1978 中的 @lyingbug 强化文档管道并发性和诊断
* 修复(im): https://github.com/Tencent/WeKnora/pull/1969中@voidkey将钉钉文件/图片消息提取到知识库
* 修复(im): 通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/1982 中通过 SSRF 检查来强化钉钉文件下载
* feat(wiki)：https://github.com/Tencent/WeKnora/pull/1979 中 @lyingbug 提供的具有并发基于声明的批处理的专用工作池
* feat(models)：通过@lyingbug在https://github.com/Tencent/WeKnora/pull/1986中限制每个模型的背景LLM并发
* Chore(env): 在 https://github.com/Tencent/WeKnora/pull/1995 中通过 @lyingbug 将配置文件中的 WEKNORA_MODEL_MAX_CONCURRENCY 更新为 32
* feat(tenant)：可选的传统自动创建 API 密钥，由 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/1999 中创建租户
* 修复（im/feishu）：通过回复消息 API 回复，因此回复落在或…由 @Greenplumwine 在 https://github.com/Tencent/WeKnora/pull/1898
* feat(system): 通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/2001 中添加运行时任务队列可观察性仪表板
* 重构（RuntimeQueues）：通过https://github.com/Tencent/WeKnora/pull/2002中的@lyingbug增强UI布局和样式以获得更好的可读性
* feat(system)：通过 https://github.com/Tencent/WeKnora/pull/2003 中的 @lyingbug 在运行时队列仪表板上公开模型并发统计信息
* 杂务（deps）：通过@lyingbug解决https://github.com/Tencent/WeKnora/pull/2005中的Dependabot安全警报
* 修复（docreader）：通过 https://github.com/Tencent/WeKnora/pull/2004 中的 @lyingbug 正确路由标签错误的遗留 DOC 文件
* 修复（spans）：通过@lyingbug在https://github.com/Tencent/WeKnora/pull/2020中扩展长wiki slugs的知识跨度名称列
* 修复（spans）：使 fitSpanName 符文感知并规范化 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/2021 中的查找
* 修复（路由器）：允许范围内的 API 密钥通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/2022 中轮询常见问题解答导入进度
* 修复（文件）：通过 https://github.com/Tencent/WeKnora/pull/2023 中的 @lyingbug 通过 KB 范围的文件代理提供共享的 KB 图像
* 壮举（知识库）：通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/2026 中添加每个管道的自定义指令字段
* feat(worker)：https://github.com/Tencent/WeKnora/pull/2030 中 @lyingbug 具有共享弹性容量的每个池 asynq 治理
* 修复（wiki）：https://github.com/Tencent/WeKnora/pull/2028 中的 @lyingbug 从页面内容中去除内部块别名
* feat(provider)：通过 @Thibaultjaigu 在 https://github.com/Tencent/WeKnora/pull/2013 中添加 Requesty 作为 OpenAI 兼容模型提供程序
* 文档（模型）：通过 https://github.com/Tencent/WeKnora/pull/2036 中的 @lyingbug 将 Requesty 添加到 API 和 wiki 提供商列表
*修复（安全）：强化代理共享列表并通过@lyingbug在https://github.com/Tencent/WeKnora/pull/2034中对齐完全访问API关键路线
* feat(auth)：由 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/2037 中创建无租户配置和门禁自助服务工作区
* 重构（auth）：通过https://github.com/Tencent/WeKnora/pull/2038中的@lyingbug在共享default_tenant_mode策略下统一OIDC配置
*壮举（前端）：通过https://github.com/Tencent/WeKnora/pull/2039中的@lyingbug将系统设置重新组织为选项卡式部分
*壮举（系统）：通过https://github.com/Tencent/WeKnora/pull/2040中的@lyingbug添加管理员密码重置和会话撤销
* feat(agent)：在https://github.com/Tencent/WeKnora/pull/2045中添加@lyingbug的问题建议和答案后跟进
* 样式（系统）：通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/2046 中完善管理员密码重置触发器和对话框布局
* 修复（前端）：在 https://github.com/Tencent/WeKnora/pull/2041 中 @hiasky 将已取消、最终确定、草稿状态添加到解析状态下拉列表中
* 修复：通过 @darcyx 在 https://github.com/Tencent/WeKnora/pull/2048 中将分块策略传播到父子拆分器配置
* feat(system)：通过https://github.com/Tencent/WeKnora/pull/2049中的@lyingbug为运行时队列添加失败任务检查和手动重试
* feat(system): 通过https://github.com/Tencent/WeKnora/pull/2050中的@lyingbug扩展运行时队列任务检查和安全操作
* feat(models)：让系统管理员通过https://github.com/Tencent/WeKnora/pull/2051中的@lyingbug编辑内置模型配置
* 重构（术语）：通过 https://github.com/Tencent/WeKnora/pull/2052 中的 @lyingbug 将面向用户的租户标签重命名为工作区
*修复（知识）：将处理时间线状态与https://github.com/Tencent/WeKnora/pull/2053中的@lyingbug的知识行对齐
* feat(system): https://github.com/Tencent/WeKnora/pull/2056 中 @lyingbug 的运行时队列任务的游标分页
*壮举（聊天）：通过@lyingbug在https://github.com/Tencent/WeKnora/pull/2060中完善后续建议加载和回答工具栏计时
*修复（知识）：https://github.com/Tencent/WeKnora/pull/2059中的@lyingbug在服务器重新启动后安全地恢复任务
* 修复（前端）：在 https://github.com/Tencent/WeKnora/pull/2062 中 @lyingbug 在新选项卡中打开聊天参考链接
*修复（知识）：在https://github.com/Tencent/WeKnora/pull/2064中@hiasky在管理抽屉中重命名标签后重新加载文档列表
* feat(api-keys)：让manage_kbs覆盖https://github.com/Tencent/WeKnora/pull/2068中@lyingbug的完整KB生命周期路线
* 修复：https://github.com/Tencent/WeKnora/pull/2067 中 @ShadowSmallBaby 的存储引擎配置检索和默认提供程序回退处理
*修复（api-keys）：让manage_kbs键通过https://github.com/Tencent/WeKnora/pull/2070中的@lyingbug轮询KB复制进度
* 修复（存储）：通过 https://github.com/Tencent/WeKnora/pull/2071 中的 @lyingbug 将默认提供程序回退与 STORAGE_ALLOW_LIST 对齐
* 壮举（存储）：通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/2072 中为每个工作区添加多实例存储后端
* feat(resource): 稳定的资源注册表，通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/2075 中进行 LLM 上下文别名压缩
* feat(agent)：通过https://github.com/Tencent/WeKnora/pull/2076中的@lyingbug丰富后续建议生成上下文
* 修复（聊天）：改进 Markdown 图像上下文并强制通过 https://github.com/Tencent/WeKnora/pull/2077 中的 @lyingbug 检索图像输出
* 修复（代理）：落实后续建议并通过 https://github.com/Tencent/WeKnora/pull/2080 中的 @lyingbug 保留 click 上的 KB 范围
* feat(chat)：会话范围内的临时附件，由 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/2086 中进行异步解析
* 修复（聊天）：https://github.com/Tencent/WeKnora/pull/2089 中的 @lyingbug 原生加载占位符和建议 UI 优化
* 修复（代理）：通过 https://github.com/Tencent/WeKnora/pull/2092 中的 @lyingbug 改进编辑器中的 MCP 选择器和附件上传导航
* feat(llm): 在https://github.com/Tencent/WeKnora/pull/2093中通过@lyingbug引入请求本地源参考别名
* 修复（聊天）：通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/2097 中完善参考抽屉布局和网页参考标题
* feat(im,datasource): 支持@qilifan在https://github.com/Tencent/WeKnora/pull/2096中飞书国际版
* 修复（聊天）：当https://github.com/Tencent/WeKnora/pull/2098中的@lyingbug禁用引文输出时发出检索引用
* 修复（解析器）：通过 https://github.com/Tencent/WeKnora/pull/2104 中的 @lyingbug 删除工作区聊天解析器策略 UI
* 文档：由 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/2107 中发布 v0.7.0 注释和版本工件

## 新贡献者
* @YS-zdck 在 https://github.com/Tencent/WeKnora/pull/1824 中做出了第一个贡献
* @oxkrypton 在 https://github.com/Tencent/WeKnora/pull/1854 中做出了第一个贡献
* @lawrence1912 在 https://github.com/Tencent/WeKnora/pull/1858 中做出了第一个贡献
* @coconut-yc 在 https://github.com/Tencent/WeKnora/pull/1740 中做出了第一个贡献
* @qilifan 在 https://github.com/Tencent/WeKnora/pull/1930 中做出了第一个贡献
* @Greenplumwine 在 https://github.com/Tencent/WeKnora/pull/1908 中做出了第一个贡献
* @jacentsao 在 https://github.com/Tencent/WeKnora/pull/1868 中做出了第一个贡献
* @ilya-bogin-keenable 在 https://github.com/Tencent/WeKnora/pull/1946 中做出了第一个贡献
* @Thibaultjaigu 在 https://github.com/Tencent/WeKnora/pull/2013 中做出了第一个贡献
* @darcyx 在 https://github.com/Tencent/WeKnora/pull/2048 中做出了第一个贡献
* @ShadowSmallBaby 在 https://github.com/Tencent/WeKnora/pull/2067 中做出了第一个贡献

**完整 Changelog**：https://github.com/Tencent/WeKnora/compare/v0.6.3...v0.7.0

---

> 📦 仓库：[Tencent/WeKnora](https://github.com/Tencent/WeKnora) · 🏷️ 版本：`v0.7.0` · 📅 发布：2026-07-17 · [查看英文原版 Release](https://github.com/Tencent/WeKnora/releases/tag/v0.7.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
