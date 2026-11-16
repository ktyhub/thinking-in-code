---
title: "WeKnora v0.7.1"
project: "WeKnora"
repo: "Tencent/WeKnora"
tag: "v0.7.1"
version: "v0.7.1"
published: "2026-07-24"
type: "patch"
lang: "zh"
---

# WeKnora v0.7.1

## 发生了什么变化
* feat(chat)：在 https://github.com/Tencent/WeKnora/pull/2109 中添加会话标头操作和 @lyingbug 的 Markdown 导出
* feat(tracing)：通过https://github.com/Tencent/WeKnora/pull/2099中的@lordk911将langfuse client迁移到OTLP/OTel有线协议
* 修复（跟踪）：合并 Langfuse 完成元数据并通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/2111 中导出自动根跨度
* 样式（聊天）：通过 https://github.com/Tencent/WeKnora/pull/2114 中的 @lyingbug 将对话内容区域从 800px 扩大到 960px
* 修复（wiki）：通过https://github.com/Tencent/WeKnora/pull/2106中的@014代码防止摄取超时后陈旧的挂起任务
* 修复：稳定 @KKtwo 在 https://github.com/Tencent/WeKnora/pull/2091 中的 top-k 检索排序
* 重构：通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/2130 中删除基于 Neo4j 的对话记忆功能
* feat(web-search): 在 https://github.com/Tencent/WeKnora/pull/2115 中添加由 @lyingbug 提供的智浦 AI 网络搜索提供程序支持
*壮举（会话）：添加管理API会话存储桶并通过@lyingbug在https://github.com/Tencent/WeKnora/pull/2151中稳定侧边栏过滤器
* 修复（前端）：通过 https://github.com/Tencent/WeKnora/pull/2153 中的@lyingbug 通过摘要固定 nginx 基础映像以实现旧主机兼容性
*修复（api-keys）：允许https://github.com/Tencent/WeKnora/pull/2154中的@lyingbug提供范围内的文件服务和摄取批量路由
* 修复（前端）：在 https://github.com/Tencent/WeKnora/pull/2148 中加载 @jacentsao 的完整 TDesign 样式
* 壮举：支持 @KKtwo 在 https://github.com/Tencent/WeKnora/pull/2147 中的 Volcengine 重新排名
* 修复（重新排序）：通过 https://github.com/Tencent/WeKnora/pull/2155 中的 @lyingbug 批量 Volcengine 重新排序超过 API 文档限制的请求
* feat(session): 在 https://github.com/Tencent/WeKnora/pull/2156 中通过 @lyingbug 在管理员后面控制 IM/embed/API 通道会话
* 修复(嵌入): 兼容不支持 crypto.randomUUID 的浏览器以及http请求模式 by @hbh112233abc in https://github.com/Tencent/WeKnora/pull/2159
* 修复（类型）：在 https://github.com/Tencent/WeKnora/pull/2157 中的 @steptian 的 Message.KnowledgeReferences 中使用正确的 GORM 标记分隔符
* 修复（重新排序）：https://github.com/Tencent/WeKnora/pull/2160 中 @draix 默认停止发送 vLLM truncate_prompt_tokens
* feat(im): 在 https://github.com/Tencent/WeKnora/pull/2149 中添加 @jacentsao 的云智家集成
*壮举（撰写）：将环境变量与代码对齐+修复@Greenplumwine在https://github.com/Tencent/WeKnora/pull/2164中的helm GraphRAG错误
* 修复（撰写）：让 PDF 渲染并行性遵循 https://github.com/Tencent/WeKnora/pull/2168 中 @lyingbug 默认的 CPU 感知代码
* 修复（feishu）：弹性大型 wiki 同步 — 重试、流媒体恢复、https://github.com/Tencent/WeKnora/pull/2166 中 @voidkey 的失败可见性
*壮举（api-keys）：通过@lyingbug在https://github.com/Tencent/WeKnora/pull/2165中添加平台范围的API密钥以实现控制平面自动化
* 修复（知识）：https://github.com/Tencent/WeKnora/pull/2169 中 @lyingbug 的多集 AminusB 用于 KB 克隆同步
* 修复（前端）：在https://github.com/Tencent/WeKnora/pull/2172中@lyingbug在生产版本中保留自定义主题令牌
* feat(im): 在 https://github.com/Tencent/WeKnora/pull/2180 中将云之家的回复渲染为 @jacentsao 的 Markdown
*修复（知识）：在https://github.com/Tencent/WeKnora/pull/2183中通过@lyingbug重写克隆上的块内容图像URL
*修复（知识）：通过https://github.com/Tencent/WeKnora/pull/2188中的@lyingbug全局传递重写父文本块图像URL
*修复：修复IM问答无法读取会话的问题，作者：@wangkeee2002，https://github.com/Tencent/WeKnora/pull/2182
* 修复(cli)：@yuefanxiao 在 https://github.com/Tencent/WeKnora/pull/2178 对当前 CLI 合约进行 e2e 修复验收
* 修复（知识）：通过 https://github.com/Tencent/WeKnora/pull/2191 中的 @lyingbug 将嵌入的块图像复制到导出命名空间中
* 修复（聊天）：通过 https://github.com/Tencent/WeKnora/pull/2193 中的 @lyingbug 在代理时间轴中内联显示模型推理
* 修复：通过 https://github.com/Tencent/WeKnora/pull/2171 中的 @lyingbug 将 API 密钥到期时间戳标准化为 UTC (#2137)
* 修复（知识）：通过 https://github.com/Tencent/WeKnora/pull/2195 中的 @lyingbug 阻止异步删除留下可见/僵尸行（#2192）
* 修复：https://github.com/Tencent/WeKnora/pull/2190 中 @ttommybot 正确的图形和多模式处理轨迹
*壮举（wiki）：在 https://github.com/Tencent/WeKnora/pull/2196 中 @lyingbug 撤回文档后修剪空文件夹
* 修复(dev): nc 兼容BSD netcat by @hbh112233abc in https://github.com/Tencent/WeKnora/pull/2205
* 修复跨工作空间共享知识库原始文档预览失败 by @chang30519-art in https://github.com/Tencent/WeKnora/pull/2200
* 修复（wiki）：支持 @wolfkill 在 https://github.com/Tencent/WeKnora/pull/2209 中对 sqlite 的孤儿计数
*壮举（知识）：通过@lyingbug在https://github.com/Tencent/WeKnora/pull/2198中添加范围活动审计跟踪
* 修复（嵌入）：在 https://github.com/Tencent/WeKnora/pull/2201 中重用 @March-77 的 SSRF 安全 HTTP 传输
* 重构(http)：通过https://github.com/Tencent/WeKnora/pull/2213中的@lyingbug在模型clients之间共享SSRF安全传输
* 修复：在 https://github.com/Tencent/WeKnora/pull/2212 中由 @ttommybot 审核后刷新挂起的加入请求计数
* 修复（搜索）：通过 @March-77 在 https://github.com/Tencent/WeKnora/pull/2203 中验证混合搜索查询文本
* 修复（任务）：@March-77 在 https://github.com/Tencent/WeKnora/pull/2202 中对已删除的知识库进行出列工作
* 修复（任务）：通过 https://github.com/Tencent/WeKnora/pull/2215 中的 @lyingbug 将 KB 删除队列清理与请求 ctx 分离
* feat(im): 支持 https://github.com/Tencent/WeKnora/pull/2214 中 @jacentsao 的云之家 WebSocket 图像消息
* 修复(im): 在 https://github.com/Tencent/WeKnora/pull/2216 中 @lyingbug #2214 后强化云之家图片下载
* 修复（任务检查器）：通过 https://github.com/Tencent/WeKnora/pull/2218 中的 @LHYintheCode 处理惰性队列未找到错误
* 修复（mcp）：通过 https://github.com/Tencent/WeKnora/pull/2227 中的 @lyingbug 协调 OAuth 令牌刷新和授权轮询
* 修复：防止 API 按键在 https://github.com/Tencent/WeKnora/pull/2225 中由 @ttommybot 分配所有者角色
* 文档：通过 @ttommybot 在 https://github.com/Tencent/WeKnora/pull/2224 中澄清工作区所有者基数
* feat(runtime): 通过@lyingbug 在 https://github.com/Tencent/WeKnora/pull/2233 中批量清除存档队列任务和 chat_attachment i18n
* feat(llm)：通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/2236 中添加提示缓存可观察性和 wiki 缓存友好提示
*壮举（聊天）：在https://github.com/Tencent/WeKnora/pull/2239中@lyingbug在参考抽屉中显示wiki工具结果
* 修复（模型）：通过 https://github.com/Tencent/WeKnora/pull/2240 中的 @lyingbug 将模型调试上传限制与全局 MAX_FILE_SIZE 对齐
* 壮举（前端）：通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/2245 中完善共享空间设置并加入预览 UI
* 壮举（前端）：通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/2249 中完善组织空间 UI 和共享到空间面板
* 修复（知识）：https://github.com/Tencent/WeKnora/pull/2250 中 @lyingbug 限制源文件下载到编辑器及以上版本
* 修复：@ttommybot 在 https://github.com/Tencent/WeKnora/pull/2268 中写入后同步组织状态
*修复（前端）：在https://github.com/Tencent/WeKnora/pull/2269中由@lyingbug进行审查和详细加载后正确的乐观组织状态
* 修复（代理）：遵守 https://github.com/Tencent/WeKnora/pull/2253 中 @jack-wang-176 提出的建议问题限制参数
* 修复：防止 https://github.com/Tencent/WeKnora/pull/2271 中 @lyingbug 在组织设置弹出窗口中 TDesign 文本区域自动调整大小崩溃
* 修复（org）：消除共享空间术语的歧义并收紧 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/2273 中的邀请搜索
* 修复（doris）：通过 https://github.com/Tencent/WeKnora/pull/2276 中的 @lyingbug 使用 SSRF 安全的 client 强化流加载 HTTP
* 修复（wiki）：通过 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/2280 中强化摄取和代理写入路径之间的 slug 完整性
* 杂务（发布）：由 @lyingbug 在 https://github.com/Tencent/WeKnora/pull/2286 中准备 v0.7.1

## 新贡献者
* @lordk911 在 https://github.com/Tencent/WeKnora/pull/2099 中做出了第一个贡献
* @014-code 在 https://github.com/Tencent/WeKnora/pull/2106 中做出了第一个贡献
* @KKtwo 在 https://github.com/Tencent/WeKnora/pull/2091 中做出了第一个贡献
* @hbh112233abc 在 https://github.com/Tencent/WeKnora/pull/2159 中做出了第一个贡献
* @steptian 在 https://github.com/Tencent/WeKnora/pull/2157 中做出了第一个贡献
* @wangkeee2002 在 https://github.com/Tencent/WeKnora/pull/2182 中做出了第一个贡献
* @yuefanxiao 在 https://github.com/Tencent/WeKnora/pull/2178 中做出了第一个贡献
* @ttommybot 在 https://github.com/Tencent/WeKnora/pull/2190 中做出了第一个贡献
* @chang30519-art 在 https://github.com/Tencent/WeKnora/pull/2200 中做出了第一个贡献
* @March-77 在 https://github.com/Tencent/WeKnora/pull/2201 中做出了第一个贡献
* @LHYintheCode 在 https://github.com/Tencent/WeKnora/pull/2218 中做出了第一个贡献

**完整 Changelog**：https://github.com/Tencent/WeKnora/compare/v0.7.0...v0.7.1

---

> 📦 仓库：[Tencent/WeKnora](https://github.com/Tencent/WeKnora) · 🏷️ 版本：`v0.7.1` · 📅 发布：2026-07-24 · [查看英文原版 Release](https://github.com/Tencent/WeKnora/releases/tag/v0.7.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
