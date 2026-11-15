---
title: "ragflow v0.25.3"
project: "ragflow"
repo: "infiniflow/ragflow"
tag: "v0.25.3"
version: "v0.25.3"
published: "2026-05-13"
type: "patch"
lang: "zh"
---

# ragflow v0.25.3

# 总结

## 新功能

- 数据源和解析：为电子表格文件解析器添加了列级语义/元数据控制；引入了 ETag 优化，用于 S3 数据源的增量同步，以避免不必要的文件传输。
- 允许将特定角色（例如内容、元数据和主键）分配给表列。 [#13710](https://github.com/infiniflow/ragflow/pull/13710)

## 改进

- API 重构和安全
  - 继续将 Web API 过渡到 RESTful 约定，确保所有旧端点的向后兼容性。
  - 将 `POST /api/v1/messages` 中的 `user_id` 绑定到经过身份验证的 JWT 主体。 [#14745](https://github.com/infiniflow/ragflow/pull/14745)
  - 保护沙箱执行器免受动态和间接代码执行绕过。 [#14690](https://github.com/infiniflow/ragflow/pull/14690)
  - LLM请求超时控制
  - 高并发阻塞调用线程池
- 减少摄取服务器启动时间。 [#14894](https://github.com/infiniflow/ragflow/pull/14894)

## 错误修复

- 多工作表 Excel 工作簿中的图像未按工作表划分范围，导致图像在不同工作表中错误归属。 [#14120](https://github.com/infiniflow/ragflow/pull/14120)
- 迭代项别名传递
- 工具参数模板解析
- 代码执行附件输出
- 火山模型添加修复

## 发生了什么变化
* Go：实现提供者：Baidu by @Haruko386 in https://github.com/infiniflow/ragflow/pull/14741
* feat(connectors)：基于 ETag 的旁路，用于 https://github.com/infiniflow/ragflow/pull/14677 中的 @hunnyboy1217 增量 S3 摄取 (#14628)
* Go：修复https://github.com/infiniflow/ragflow/pull/14742中@JinHai-CN的百度重排问题
* Go：修复https://github.com/infiniflow/ragflow/pull/14743中@JinHai-CN的siliconflow重新排序问题
* Go：通过https://github.com/infiniflow/ragflow/pull/14630中的@pandadev66在OpenAI驱动程序中实现编码（嵌入）
* 修复：https://github.com/infiniflow/ragflow/pull/14407 中 @JimZhang-lab 的 Radio.Group cloneElement 在非元素子元素上崩溃
* 修复（auth）：在https://github.com/infiniflow/ragflow/pull/14569中由@mhtkarakose回退到_load_user中基于会话的身份验证
* 修复：https://github.com/infiniflow/ragflow/pull/14601中@wanghualoong解析工具组件参数中的模板字符串
* 修复 @Qwerrty574 在 https://github.com/infiniflow/ragflow/pull/14555 中 HuggingfaceRerank 中的 base_url 处理
* @ahmadintisar 在 https://github.com/infiniflow/ragflow/pull/13710 中的特征/表解析器列角色
* 壮举：通过 LiteLLM 添加 BedrockCV，用于 https://github.com/infiniflow/ragflow/pull/14705 中的 @vincentlambert 的视觉/图像2文本推理
* Go：在https://github.com/infiniflow/ragflow/pull/14702中@bittoby在Volcengine驱动程序中实现ListModels
* 壮举：在 https://github.com/infiniflow/ragflow/pull/14553 中通过 @ParasSondhi 使沙箱 Docker 文件镜像可选与 ARG
* 修复（llm）：通过 https://github.com/infiniflow/ragflow/pull/14313 中的 @Ricardo-M-L 在 LLM 集成层中为 HTTP 请求添加超时
* Go：在https://github.com/infiniflow/ragflow/pull/14682中由@Joseff531在Google Gemini驱动程序中实现编码（嵌入）
* 修复(go): 将 Google CheckConnection 连接到 https://github.com/infiniflow/ragflow/pull/14660 中 @zeus1959 的 ListModels
* 修复(Go)：在 https://github.com/infiniflow/ragflow/pull/14673 中@Joseff531 纠正 Aliyun 驱动程序中的 Name() 和区域 URL 回退
* 修复：通过 https://github.com/infiniflow/ragflow/pull/14690 中的 @Sp1kyss 关闭沙箱执行器中的两个安全分析器旁路路径
* 修复：通过 https://github.com/infiniflow/ragflow/pull/14556 中的@vincentlambert 处理retrieval_by_children 中丢失的父块
* Go：在 https://github.com/infiniflow/ragflow/pull/14698 中 @bittoby 在 Gitee AI 驱动程序中实现编码（嵌入）
* 修复（keyword_extraction）：https://github.com/infiniflow/ragflow/pull/14540 中@Qinsanz 接受中文逗号/分号/换行符作为关键字分隔符
* Go：通过 https://github.com/infiniflow/ragflow/pull/14688 中的 @pandadev66 在 vLLM 驱动程序中实现编码（嵌入）
* 修复：重新排序模块的完整稳健性修复，解决 https://github.com/infiniflow/ragflow/pull/14265 中@07heco 的所有评论评论
* 修复（提示）：https://github.com/infiniflow/ragflow/pull/14164 中 @hyl64 在 message_fit_in 中预留系统预算
* Go：通过 @jack-stormentswe 在 https://github.com/infiniflow/ragflow/pull/14664 中的 Ollama 驱动程序中实现编码（嵌入）
* Go：在https://github.com/infiniflow/ragflow/pull/14700中由@bittoby在NVIDIA驱动程序中实现编码（嵌入）
* Perf(Go)：@Joseff531 在 https://github.com/infiniflow/ragflow/pull/14719 中批量处理 SiliconFlow Encode 请求，并进行 32 项分块
* Go：通过https://github.com/infiniflow/ragflow/pull/14694中的@pandadev66在LM Studio驱动程序中实现编码（嵌入）
* 修复（Go）：在 https://github.com/infiniflow/ragflow/pull/14717 中 @Joseff531 的格式错误响应中，使 OpenRouter Encode 严重失败
* 重构：通过@web-dev0521在https://github.com/infiniflow/ragflow/pull/14668中整理file_service中的ThreadPoolExecutor生命周期和任务执行器
* GraphRAG 功能 - 第 1 部分 - 通过 @wangq8 在 https://github.com/infiniflow/ragflow/pull/14670 中添加 spacy 来提取实体和关系
* 修复：https://github.com/infiniflow/ragflow/pull/14120 中 @fplust 在 Excel 解析器中按工作表范围挂起的单元格图像
* 修复（dify）：通过 @Achieve3318 在 https://github.com/infiniflow/ragflow/pull/14169 中保护检索参数错误行为
* 修复：通过 @jony376 在 https://github.com/infiniflow/ragflow/pull/14745 中将内存消息 `user_id` 绑定到经过身份验证的用户以进行 JWT 身份验证
* 修复：https://github.com/infiniflow/ragflow/pull/14759 中的数据集搜索通过 @buua436 重新排序 id 类型
* 修复：@buua436 在 https://github.com/infiniflow/ragflow/pull/14764 中查找共享数据集块索引
* 修复：在 https://github.com/infiniflow/ragflow/pull/14144 中的 @Ricardo-M-L 在 file_service.py 中使用 ThreadPoolExecutor 的上下文管理器
* Go：@JinHai-CN在https://github.com/infiniflow/ragflow/pull/14757中重构嵌入接口
* 修复：安全参数保护并删除 https://github.com/infiniflow/ragflow/pull/14060 中 @paulhuiseismic 的冗余 redis 调用
* 修复：将阻塞的 DB/Redis 调用卸载到线程池以实现高并发支持 (#13825) by @tmimmanuel in https://github.com/infiniflow/ragflow/pull/13941
* 事实：在 https://github.com/infiniflow/ragflow/pull/13627 中添加了 @Sank-WoT 的私人助手 _visibility_and_status_filter
* 修复：在 https://github.com/infiniflow/ragflow/pull/13352 中 @as-ondewo 可检索块之前，文档解析状态设置为“完成”
* 修复（网络）：修复 https://github.com/infiniflow/ragflow/pull/14122 中 @yshchm 的引文参考中不完整的 Docx 预览
* 修复：OCR.detect() 返回真实的 None 元组，导致 https://github.com/infiniflow/ragflow/pull/13951 中的 @octo-patch 导致 NoneType 下标崩溃
* 杂务：修复一些注释以提高https://github.com/infiniflow/ragflow/pull/14756中@box4wangjing的可读性
* 修复（opensearch）：在https://github.com/infiniflow/ragflow/pull/14577中通过@tmimmanuel在OSConnection上实现doc-meta调度表面
* Go：在https://github.com/infiniflow/ragflow/pull/14785中添加@JinHai-CN的开发指导文档
* Go：在 https://github.com/infiniflow/ragflow/pull/14778 中通过 @RenzoMXD 在 NVIDIA 驱动程序中实现 Rerank
* 修复：在 https://github.com/infiniflow/ragflow/pull/14787 中添加 @buua436 输出的 codeexec 附件
* Go：实现提供者：CoHere 和 FishAudio by @Haruko386 in https://github.com/infiniflow/ragflow/pull/14790
* Go: 修复@JinHai-CN在https://github.com/infiniflow/ragflow/pull/14794中检索测试错误
* [Bug]：REDIS 错误#12870，作者：https://github.com/infiniflow/ragflow/pull/13875 中的 @raminmardani
* 修复(dify): 在 /dify/retrieval 中添加 GET 方法支持，用于 https://github.com/infiniflow/ragflow/pull/13837 中 @Lntanohuang 的健康检查
* 壮举（猛禽）：在 https://github.com/infiniflow/ragflow/pull/14679 中添加由 @CaptainTimon 提供的具有原始空间排名和安全迁移的 Psi 树构建器
* 杂务（deps）：https://github.com/infiniflow/ragflow/pull/14824 中的 @dependabot[bot] 将 /agent/sandbox 中的 urllib3 从 2.6.3 提升到 2.7.0
* 重构（Go）：通过 @Haruko386 在 https://github.com/infiniflow/ragflow/pull/14822 中删除 Huggingface 提供程序中的硬代码
* 修复(agent): 支持https://github.com/infiniflow/ragflow/pull/14146中@hyl64在子节点中迭代项别名
* Go：实现提供者：StepFun by @tmimmanuel in https://github.com/infiniflow/ragflow/pull/14815
* 修复（文档）：纠正 https://github.com/infiniflow/ragflow/pull/13838 中 @majiayu000 损坏的知识图构建链接
* 修复：https://github.com/infiniflow/ragflow/pull/14829 中 @buua436 的一些代理错误
* Refact：沙盒quickstart.md并添加@Magicbook1108在https://github.com/infiniflow/ragflow/pull/14786中的代码执行组件教程
* 测试：https://github.com/infiniflow/ragflow/pull/14170 中 @Achieve3318 的列表和标量值的聚合边缘情况
* 执行：实现提供者：https://github.com/infiniflow/ragflow/pull/14832 中 @Haruko386 的 Baichuan
* Go：在https://github.com/infiniflow/ragflow/pull/14819中@tmimmanuel在Upstage驱动程序中实现Embed（嵌入）
* 通过 @wangq8 在 https://github.com/infiniflow/ragflow/pull/14833 中加快启动时间
* GO：在https://github.com/infiniflow/ragflow/pull/14834中通过@buua436实现GET /api/v1/datasets/:dataset_id
* Go: 在https://github.com/infiniflow/ragflow/pull/14836中添加@JinHai-CN的ASR、TTS、OCR命令
* Go：通过https://github.com/infiniflow/ragflow/pull/14837中的@buua436修复数据集时间单位
* Go：在 https://github.com/infiniflow/ragflow/pull/14807 中 @tmimmanuel 在 Mistral 驱动程序中实现 Embed（嵌入）
* Go：实现提供者：Jina by @Haruko386 in https://github.com/infiniflow/ragflow/pull/14838
*修复：在https://github.com/infiniflow/ragflow/pull/14828中@oxtensor在OpenAI模型列表中公开gpt-5.5和gpt-5.4
* 功能：当循环节点中等待节点位于消息节点之前时，传出消息将被分成两个单独的消息。作者：@cike8899 在 https://github.com/infiniflow/ragflow/pull/14839
* 修复 #14801 以允许在 https://github.com/infiniflow/ragflow/pull/14841 中由 @wangq8 添加时搜索数据集列表
* Go: 修复https://github.com/infiniflow/ragflow/pull/14843中使用@JinHai-CN模型时的模型类型检查
* 文档：如何添加 Bitbucket 作为数据源。作者：https://github.com/infiniflow/ragflow/pull/14846 中的 @writinwaters
* 修复：在 https://github.com/infiniflow/ragflow/pull/14791 中@yaoper 删除音频支持的扩展列表中重复的 .wav 和 .aac
* 修复(api): 授权https://github.com/infiniflow/ragflow/pull/14775中@dale053列出聊天和搜索应用程序的owner_ids
* 通过 @wangq8 在 https://github.com/infiniflow/ragflow/pull/14872 中添加 REST API 向后兼容性
* 修复：在 @shawnxiao105-afk 嵌入 https://github.com/infiniflow/ragflow/pull/13938 之前保护仅限空白的块
* 修复（Go）：使百度编码在 https://github.com/infiniflow/ragflow/pull/14721 中 @Joseff531 的格式错误的响应中大声失败
* 修复删除graphrag在https://github.com/infiniflow/ragflow/pull/14879中@wangq8在UI中不生效的问题
* 修复：知识块创建中的文本字段大小调整功能… by @stardyun in https://github.com/infiniflow/ragflow/pull/14212
* 转到：实施提供商：Novita.ai，作者：@tmimmanuel，位于 https://github.com/infiniflow/ragflow/pull/14850
* 杂务：通过 https://github.com/infiniflow/ragflow/pull/14871 中的 @6ba3i 将测试迁移到宁静的 api
* 删除https://github.com/infiniflow/ragflow/pull/14883中@wangq8的重复路线
* Go：实现提供者：LongCat by @tmimmanuel in https://github.com/infiniflow/ragflow/pull/14809
* 修复：表单初始化时设置嵌入模型。通过 @dcc123456 在 https://github.com/infiniflow/ragflow/pull/14889
* Go：在https://github.com/infiniflow/ragflow/pull/14886中由@pandadev66在ZhipuAI驱动程序中实现ListModels
*修复：llm添加https://github.com/infiniflow/ragflow/pull/14885中被@buua436覆盖的api密钥
* Go: 修复https://github.com/infiniflow/ragflow/pull/14891中@JinHai-CN的OCR命令
* 通过 @wangq8 在 https://github.com/infiniflow/ragflow/pull/14894 中加速 ragflow 服务器
* 文档：更新 https://github.com/infiniflow/ragflow/pull/14896 中 @asiroliu 的自述文件和文档中对 v0.25.3 的版本引用
* Go：在 https://github.com/infiniflow/ragflow/pull/14813 中 @tmimmanuel 在 LocalAI 驱动程序中实现 Rerank
* 文档：0.25.3 release note 草案，由 @writinwaters 在 https://github.com/infiniflow/ragflow/pull/14898 中编写
* 由 @JinHai-CN 在 https://github.com/infiniflow/ragflow/pull/14897 中碰撞到无穷大 v0.7.0-dev7
* 文档：@writinwaters 在 https://github.com/infiniflow/ragflow/pull/14899 中更新了 v0.25.3 release note 草案
* 修复：在 https://github.com/infiniflow/ragflow/pull/14782 中 @jony376 在检索流中强制执行 `tenant_rerank_id` 的租户授权
* 修复@JinHai-CN在https://github.com/infiniflow/ragflow/pull/14900中的go编译

## 新贡献者
* @hunnyboy1217 在 https://github.com/infiniflow/ragflow/pull/14677 中做出了第一个贡献
* @JimZhang-lab 在 https://github.com/infiniflow/ragflow/pull/14407 中做出了第一个贡献
* @mhtkarakose 在 https://github.com/infiniflow/ragflow/pull/14569 中做出了第一个贡献
* @Qwerrty574 在 https://github.com/infiniflow/ragflow/pull/14555 中做出了第一个贡献
* @zeus1959 在 https://github.com/infiniflow/ragflow/pull/14660 中做出了第一个贡献
* @Sp1kyss 在 https://github.com/infiniflow/ragflow/pull/14690 中做出了第一个贡献
* @Qinsanz 在 https://github.com/infiniflow/ragflow/pull/14540 中做出了第一个贡献
* @07heco 在 https://github.com/infiniflow/ragflow/pull/14265 中做出了第一个贡献
* @fplust 在 https://github.com/infiniflow/ragflow/pull/14120 中做出了第一个贡献
* @yshchm 在 https://github.com/infiniflow/ragflow/pull/14122 中做出了第一个贡献
* @box4wangjing 在 https://github.com/infiniflow/ragflow/pull/14756 中做出了第一个贡献
* @CaptainTimon 在 https://github.com/infiniflow/ragflow/pull/14679 中做出了第一个贡献
* @oxtensor 在 https://github.com/infiniflow/ragflow/pull/14828 中做出了第一个贡献
* @yaoper 在 https://github.com/infiniflow/ragflow/pull/14791 中做出了第一个贡献
* @shawnxiao105-afk 在 https://github.com/infiniflow/ragflow/pull/13938 中做出了第一个贡献
* @stardyun 在 https://github.com/infiniflow/ragflow/pull/14212 中做出了第一个贡献

**完整 Changelog**：https://github.com/infiniflow/ragflow/compare/v0.25.2...v0.25.3

---

> 📦 仓库：[infiniflow/ragflow](https://github.com/infiniflow/ragflow) · 🏷️ 版本：`v0.25.3` · 📅 发布：2026-05-13 · [查看英文原版 Release](https://github.com/infiniflow/ragflow/releases/tag/v0.25.3)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
