# FastGPT v4.8.13
### 为什么要使用FastGPT

在当今快速发展的科技时代，人工智能的应用已经渗透到我们生活的方方面面。然而，许多现有的AI工具往往复杂、难以使用，导致用户在使用过程中感到沮丧。FastGPT的出现，正是为了打破这种局限。它不仅提供了强大的功能，还以用户友好的界面和简洁的操作流程，帮助用户轻松实现自己的创意。想象一下，一个工具能够让你在几分钟内完成原本需要数小时的工作，这就是FastGPT所带来的革命性变化。

### FastGPT是什么

FastGPT是一个开源的人工智能工具，旨在为用户提供高效、便捷的文本生成和处理能力。它结合了最新的自然语言处理技术，能够理解和生成自然语言文本，适用于多种场景，如内容创作、对话生成和数据分析等。无论是开发者还是普通用户，都能通过FastGPT轻松实现自己的需求。

### 入门示例

想象一下，你是一名内容创作者，正在为即将发布的博客寻找灵感。使用FastGPT，你只需输入一个主题，比如“可持续发展”，系统便会迅速生成一篇结构完整、内容丰富的文章草稿。你可以进一步与AI进行对话，询问具体的细节或修改建议，快速迭代出满意的内容。这样的场景不仅提高了工作效率，也激发了创作灵感。

### FastGPT v4.8.13版本更新了什么

FastGPT v4.8.13版本带来了多项重要更新，包括支持数组变量的多选功能、文件上传方案的调整、对话记录增加时间显示等。此外，工作流校验错误时会自动跳转至错误节点，优化了用户体验。整体上，这些更新旨在提升系统的灵活性和易用性。

### 更新日志

## 更新说明
1. 新增 - 数组变量选择支持多选，可以选多个数组或对应的单一数据类型，会自动按选择顺序进行合并。
2. 新增 - 文件上传方案调整，AI对话和工具调用节点直接支持接收文件链接，并且会强制加入提示词，无需由模型决策调用。插件自定义变量支持文件上传类型，取代全局文件。
3. 新增 - 对话记录增加时间显示。
4. 新增 - 工作流校验错误时，跳转至错误节点。
5. 新增 - 循环节点增加下标值。
6. 新增 - 部分对话错误提醒增加翻译。
7. 新增 - 对话输入框支持拖拽文件上传，可直接拖文件到输入框中。
8. 新增 - 对话日志，来源可显示分享链接/API具体名称。
9. 新增 - 分享链接支持配置是否展示实时运行状态。
10. 优化 - 合并多个 system 提示词成 1 个，避免部分模型不支持多个 system 提示词。
11. 优化 - 知识库上传文件，优化报错提示。
12. 优化 - 全文检索语句，减少一轮子查询。
13. 优化 - 修改 findLast 为 [...array].reverse().find，适配旧版浏览器。
14. 优化 - Markdown 组件自动空格，避免分割 url 中的中文。
15. 优化 - 工作流上下文拆分，性能优化。
16. 优化 - 语音播报，不支持 mediaSource 的浏览器可等待完全生成语音后输出。
17. 优化 - 知识库部分 UI 和交互。
18. 优化 - csv 导入问题引导可能乱码。
19. 修复 - Dockerfile pnpm install 支持代理。
20. 修复 - BI 图表生成无法写入文件。
21. 修复 - docker build 第二次运行pnpm i时，部分系统会报错。
22. 修复 - 分享链接首次加载时，标题显示不正确。

## 更新指南
### 1. 做好数据备份
### 2. 修改镜像
- 更新 FastGPT 镜像 tag: v4.8.13
- 更新 FastGPT 商业版镜像 tag: v4.8.13 （fastgpt-pro镜像）
- Sandbox 镜像，可以不更新
### 3. 调整文件上传编排
虽然依然兼容旧版的文件上传编排，但是未来两个版本内将会去除兼容代码，请尽快调整编排，以适应最新的文件上传逻辑。尤其是嵌套应用的文件传递，未来将不会自动传递，必须手动指定传递的文件。

## 总结

在FastGPT v4.8.13版本中，新增了多项功能和优化，旨在提升用户体验和系统性能。用户可以享受到更灵活的数组变量选择、更便捷的文件上传方式以及更清晰的对话记录等改进。这些更新不仅增强了工具的实用性，也为用户提供了更高效的工作流程。