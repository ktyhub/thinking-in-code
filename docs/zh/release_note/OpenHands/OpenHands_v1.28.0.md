---
title: "OpenHands v1.28.0"
project: "OpenHands"
repo: "OpenHands/OpenHands"
tag: "v1.28.0"
version: "v1.28.0"
published: "2026-10-19"
type: "minor"
lang: "zh"
---

# OpenHands v1.28.0

## 1.28.0 (2026-10-19)

<!-- 使用 main 的 .github/release.yml 中的配置生成 Release note -->

## 发生了什么变化
### 特点
*壮举（verify-openhands）：可执行的已知错误和@enyst在https://github.com/OpenHands/OpenHands/pull/18348中的可重复修复证明
* feat(i18n)：通过 @analisaperlengkapan 在 https://github.com/OpenHands/OpenHands/pull/18067 添加印尼语 (id) 语言环境
* 壮举：在 https://github.com/OpenHands/OpenHands/pull/18185 中 @DevinVinson 添加对入门清单的密切控制
* feat(secrets)：让代理通过https://github.com/OpenHands/OpenHands/pull/18408中的@VascoSch92通过对话中模式请求秘密
* feat(verify-openhands)：采用 https://github.com/OpenHands/OpenHands/pull/18355 中 @enyst 共享的已知错误合约
* 壮举（聊天）：https://github.com/OpenHands/OpenHands/pull/18491 中 @VascoSch92 的流畅、阅读速度流式传输以及单词淡入
* 壮举（秘密）：在 @VascoSch92 在 https://github.com/OpenHands/OpenHands/pull/18575 的聊天中内嵌请求请求的秘密
* 壮举（自动化）：隐藏与https://github.com/OpenHands/OpenHands/pull/18565中的@hieptl自托管实例（OHE-3611）上的内置集成重叠的模板
### 错误修复
* 修复（lint）：在 https://github.com/OpenHands/OpenHands/pull/18346 中使用 @enyst 的 Git Sync 反馈语义颜色
* 修复（主题）：使 https://github.com/OpenHands/OpenHands/pull/18321 中的 @enyst 可读后端连接反馈
*修复（主题）：在https://github.com/OpenHands/OpenHands/pull/18330中使用@enyst的可读验证和服务错误
* 修复（markdown）：在 https://github.com/OpenHands/OpenHands/pull/18357 中包裹长表格单元格而不是拉伸表格 @jpshackelford
* 修复（设置）：在 https://github.com/OpenHands/OpenHands/pull/18411 中使用 @lx3133584 的 llm 和代理配置文件专用的取名消息
* 修复（自动化）：当https://github.com/OpenHands/OpenHands/pull/18391中的@enyst自动编辑失败时显示API的消息
* 修复（设置）：在https://github.com/OpenHands/OpenHands/pull/18401中通过@enyst切换后端后显示活动后端的值
* 修复（自动化）：将草稿测试自动化保留在 https://github.com/OpenHands/OpenHands/pull/18393 中 @enyst 的概述图块之外
* 修复（自动化）：使草稿删除确认成为 @enyst 在 https://github.com/OpenHands/OpenHands/pull/18394 中的真实对话框
* 修复（聊天）：将 https://github.com/OpenHands/OpenHands/pull/18397 中 @enyst 的确认按钮标签保留在一行上
* 修复（文件）：让 https://github.com/OpenHands/OpenHands/pull/18398 中的@enyst 在手机屏幕上显示文件发现对话框
* 修复（模态）：将焦点移至 ModalBackdrop 对话框并通过 @enyst 在 https://github.com/OpenHands/OpenHands/pull/18400 中将其保留在那里
* 修复（主题）：使家庭模式切换标签在 https://github.com/OpenHands/OpenHands/pull/18402 中的 @enyst 的浅色主题中可读
* 修复（主题）：使 Toast 文本在 https://github.com/OpenHands/OpenHands/pull/18403 中 @enyst 的浅色主题中可读
*修复（自动化）：将设置编辑器排除在https://github.com/OpenHands/OpenHands/pull/18392中@enyst的家庭草稿之外
* 修复（自动化）：将设置切换保留在 https://github.com/OpenHands/OpenHands/pull/18385 中@enyst 自己的对话中
*修复（设置）：在https://github.com/OpenHands/OpenHands/pull/18422中保留@enyst的新LLM配置文件表单值
* 修复（聊天）：保留消息直到云运行时可访问，而不是通过 https://github.com/OpenHands/OpenHands/pull/18443 中的@hieptl 使其失败（OHE-3314）
*修复（对话）：从恢复中唤醒暂停的云沙箱，而不是通过https://github.com/OpenHands/OpenHands/pull/18442中的@hieptl调用其运行时（OHE-3407）
*修复（设置）：使https://github.com/OpenHands/OpenHands/pull/18370中的@enyst可以访问开关键盘
* 修复（自动化）：在 https://github.com/OpenHands/OpenHands/pull/18462 中显示 @enyst 拒绝草稿保存的原因
* 修复（自动化）：在https://github.com/OpenHands/OpenHands/pull/18463中@enyst在设置草稿栏中使用主题错误颜色
* 修复（代理配置文件）：将配置文件保留在每次启动的 LLM 精选中以及 https://github.com/OpenHands/OpenHands/pull/18419 中 @simonrosenberg 的 /new 中
*修复（自动化）：将https://github.com/OpenHands/OpenHands/pull/18482中@enyst的每个主题的设置错误药丸保持在4.5：1
* 修复（lint）：https://github.com/OpenHands/OpenHands/pull/18431 中 @enyst 的主题上下文使用反馈颜色
* 修复（主题）：在 https://github.com/OpenHands/OpenHands/pull/18327 中使用 @enyst 的可读后端焦点和有效的稀松布不透明度
* 修复（后端）：将编辑后端对话框宽度限制为视口并通过 https://github.com/OpenHands/OpenHands/pull/18220 中的 @lx3133584 启用垂直滚动
* 修复（主题）：保持 https://github.com/OpenHands/OpenHands/pull/18504 中 @enyst 可读的作曲家上下文反馈
* 修复（主题）：使https://github.com/OpenHands/OpenHands/pull/18508中的@enyst可以读取同意后端范围
*修复（主题）：保持https://github.com/OpenHands/OpenHands/pull/18510中@enyst可读的模型配置文件消息
* 修复：通过 @ak684 在 https://github.com/OpenHands/OpenHands/pull/18479 中列出每个组织的 Azure DevOps 存储库
* 修复（入门）：通过 https://github.com/OpenHands/OpenHands/pull/18447 中的 @hieptl 从可选 SAML 步骤打开身份验证提供商页面
* 修复（lint）：@enyst 在 https://github.com/OpenHands/OpenHands/pull/18535 中的主题评论家结果文本和分数
* 修复（设置）：当 https://github.com/OpenHands/OpenHands/pull/18549 中的 @enyst 保存 LLM 配置文件失败时，显示服务器的原因
* 修复（markdown）：通过 @enyst 在 https://github.com/OpenHands/OpenHands/pull/18542 中保持语法荧光笔标记内联
* 修复：https://github.com/OpenHands/OpenHands/pull/18311 中 @enyst 在启动过程中自动化后端退出时启动失败
* 修复（后端）：在 https://github.com/OpenHands/OpenHands/pull/18369 中静默 @enyst 的预期恢复模型和版本探测
* 修复（设置）：在 https://github.com/OpenHands/OpenHands/pull/18372 中 @enyst 保存失败后保留应用程序编辑
*修复（主题）：在https://github.com/OpenHands/OpenHands/pull/18513中保持@enyst可读的破坏性按钮标签
* 修复（主题）：保持启动错误并重试，https://github.com/OpenHands/OpenHands/pull/18515 中的 @enyst 可读
*修复（主题）：使批量模型保存结果可由https://github.com/OpenHands/OpenHands/pull/18529中的@enyst读取
* 修复（主题）：保持 Markdown 链接在 https://github.com/OpenHands/OpenHands/pull/18530 中@enyst 的主题之间可读
* 修复（自动化）：从 https://github.com/OpenHands/OpenHands/pull/18464 中被 @enyst 替换的预设启动自定义计划
* 修复（主题）：通过 @enyst 在 https://github.com/OpenHands/OpenHands/pull/18531 中澄清聊天加载和超时颜色
* 修复（主题）：保持 https://github.com/OpenHands/OpenHands/pull/18528 中的 @enyst 可读的设备授权反馈
* 修复（对话）：在https://github.com/OpenHands/OpenHands/pull/18537中@enyst以手机宽度打开使用面板页面
* 修复（设置）：在 https://github.com/OpenHands/OpenHands/pull/18490 中通过 @enyst 保存设置时不要重试 4xx 答案
*修复（后端）：在Escape上保留堆叠的后端表单，删除共享的404 toast，关闭https://github.com/OpenHands/OpenHands/pull/18423中的@enyst失败的登录弹出窗口
* 修复（lint）：https://github.com/OpenHands/OpenHands/pull/18526 中 @enyst 的主题自动化验证装饰
*修复（聊天）：清除https://github.com/OpenHands/OpenHands/pull/18553中@enyst在聊天中处理的斜线命令的已保存草稿
* 修复（聊天）：通过 @enyst 在 https://github.com/OpenHands/OpenHands/pull/18544 中的空作曲家中使用 Ctrl/Cmd+Enter 构建计划
* 修复（启动器）：通过 @enyst 在 https://github.com/OpenHands/OpenHands/pull/18368 中创建解析的终端套接字目录
* 修复（聊天）：在 https://github.com/OpenHands/OpenHands/pull/18574 中通过 @VascoSch92 删除聊天输入调整大小手柄上方的白线
* 修复（ui）：在https://github.com/OpenHands/OpenHands/pull/18551中@enyst以从右到左的语言将切换拇指保持在轨道内
* 修复（后端）：在 https://github.com/OpenHands/OpenHands/pull/18591 中 @enyst 的抽屉上逃逸中保持手机后端模式打开
*修复（自动化）：在https://github.com/OpenHands/OpenHands/pull/18617中@smolpaws的历史测试状态之前显示保存的草稿错误
*修复（自动化）：通过https://github.com/OpenHands/OpenHands/pull/18618中的@smolpaws在手机上保持详细标题操作可访问
* 修复（lint）：https://github.com/OpenHands/OpenHands/pull/18534 中 @enyst 的主题挂钩诊断和状态徽章
*修复（库）：在https://github.com/OpenHands/OpenHands/pull/18619中通过@smolpaws在浏览器主机中保留ESM对等导入
* 修复（验证）：正确清理并通过 @smolpaws 在 https://github.com/OpenHands/OpenHands/pull/18616 中扩展浏览器验证
* 修复（插件）：拒绝 @smolpaws 在 https://github.com/OpenHands/OpenHands/pull/18622 中明确支持的本地启动参数
* 修复（验证）：通过 @enyst 在 https://github.com/OpenHands/OpenHands/pull/18645 中测量 macOS 上的可用内存
* 修复（自动化）：在 https://github.com/OpenHands/OpenHands/pull/18649 中由 @jpshackelford 编辑自定义自动化时保留现有包
*修复（对话面板）：将丢失的运行时对话视为@adminypc在https://github.com/OpenHands/OpenHands/pull/18159中到处存档
### 文档
* 文档（verify-openhands）：由 @enyst 在 https://github.com/OpenHands/OpenHands/pull/18317 中澄清协调和实时传递规则
* 文档（verify-openhands）：地图维护 2026 年 10 月 13 日由 @enyst 在 https://github.com/OpenHands/OpenHands/pull/18399
* 文档（verify-openhands）：将自动化设置页面映射为https://github.com/OpenHands/OpenHands/pull/18452中@DevinVinson的F28
* 文档（verify-openhands）：地图维护 2026 年 10 月 14 日由 @enyst 在 https://github.com/OpenHands/OpenHands/pull/18437
* 文档（verify-openhands）：地图维护 2026 年 10 月 15 日由 @enyst 在 https://github.com/OpenHands/OpenHands/pull/18477
* 文档（verify-openhands）：回填https://github.com/OpenHands/OpenHands/pull/18334中@enyst所有现有的开放错误
* 文档（verify-openhands）：2026年10月16日@enyst在https://github.com/OpenHands/OpenHands/pull/18545进行地图维护
* 文档（验证）：使用现有的 OpenHands 配置文件进行 @smolpaws 在 https://github.com/OpenHands/OpenHands/pull/18611 中的评论家检查
* 文档（verify-openhands）：地图维护 2026 年 10 月 17 日由 @enyst 在 https://github.com/OpenHands/OpenHands/pull/18590
* 文档（verify-openhands）：2026年10月19日@enyst在https://github.com/OpenHands/OpenHands/pull/18658进行地图维护
### 维护
* 杂务（lint）：通过@enyst在https://github.com/OpenHands/OpenHands/pull/18320中删除多余的文本媒体颜色异常
* 杂务：通过 @VascoSch92 删除 https://github.com/OpenHands/OpenHands/pull/18417 中的无用代码
* refactor(mars): 默认挂载网桥；在 https://github.com/OpenHands/OpenHands/pull/18349 中删除 @sk09-dev 的 MARS_WEB=1 选择加入
* 重构（对话）：通过 https://github.com/OpenHands/OpenHands/pull/18406 中的 @VascoSch92 删除无法访问的概述抽屉部分
* 杂务：将代理服务器由 https://github.com/OpenHands/OpenHands/pull/18485 中的 @all-hands-bot 撞到 1.55.0
* 杂务：推迟 PR 工件清理，直到 https://github.com/OpenHands/OpenHands/pull/18469 中的 @enyst 合并到主干之后
* 杂务（lint）：删除https://github.com/OpenHands/OpenHands/pull/18499中@enyst的上下文颜色规范簿记
* 杂务：通过 https://github.com/OpenHands/OpenHands/pull/18500 中的 @all-hands-bot 将代理服务器提升到 1.55.1
* 重构（主题）：通过 @enyst 在 https://github.com/OpenHands/OpenHands/pull/18493 中将语义颜色应用于连接横幅
* ci：拒绝 @enyst 在 https://github.com/OpenHands/OpenHands/pull/18497 中发布 PR 中的临时工件
* 杂务：删除 https://github.com/OpenHands/OpenHands/pull/18300 中 @all-hands-bot 合并的 PR 工件
* 测试(e2e): 绑定和诊断侧边栏已修改-click 选项卡等待https://github.com/OpenHands/OpenHands/pull/18364 中的@enyst
* 杂务：删除 https://github.com/OpenHands/OpenHands/pull/18561 中 @all-hands-bot 合并的 PR 工件
* 重构（主题）：在 https://github.com/OpenHands/OpenHands/pull/18532 中使用 @enyst 的语义文件选择器颜色
* ci：将验证技能更改与 @smolpaws 在 https://github.com/OpenHands/OpenHands/pull/18458 中的实现 PR 隔离
* 杂务（lint）：报告隐藏在 https://github.com/OpenHands/OpenHands/pull/18643 中 @enyst 审计的类映射中的调色板颜色
* 重构（后端）：通过 @enyst 在 https://github.com/OpenHands/OpenHands/pull/18642 中使用静态实用程序快速选择幻灯片
* 重构（主题）：使用 https://github.com/OpenHands/OpenHands/pull/18641 中 @enyst 的图标状态类和差异计数
* 杂务：将 https://github.com/OpenHands/OpenHands/pull/18647 中的 @malhotra5 自动化提升至 1.21.0

## 新贡献者
* @analisaperlengkapan 在 https://github.com/OpenHands/OpenHands/pull/18067 中做出了第一个贡献
* @sk09-dev 在 https://github.com/OpenHands/OpenHands/pull/18349 中做出了第一个贡献
* @adminypc 在 https://github.com/OpenHands/OpenHands/pull/18159 中做出了第一个贡献

**完整 Changelog**：https://github.com/OpenHands/OpenHands/compare/v1.27.1...v1.28.0

---
此 PR 是通过[请发布](https://github.com/googleapis/release-please) 生成的。请参阅[文档](https://github.com/googleapis/release-please#release-please)。

<!-- AGENT_CANVAS_DOCKER_START -->

---

> 📦 仓库：[OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) · 🏷️ 版本：`v1.28.0` · 📅 发布：2026-10-19 · [查看英文原版 Release](https://github.com/OpenHands/OpenHands/releases/tag/v1.28.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
