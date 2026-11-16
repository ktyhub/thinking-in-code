---
title: "Vane v1.11.0"
project: "Vane"
repo: "ItzCrazyKns/Vane"
tag: "v1.11.0"
version: "v1.11.0"
published: "2025-10-21"
type: "minor"
lang: "zh"
---

# Vane v1.11.0

## v1.11.0

### 发生了什么变化

**主要特点**
- **新设置向导**：带有模型选择和提供商设置的新初始配置体验
- **配置管理大修**：完全重新设计的配置系统，具有实时更新和迁移支持
- **增强的 UI/UX**：新的侧边栏、改进的主题系统以及所有组件的响应式设计更新
- **设置对话框**：带有模型选择器、嵌入配置和系统说明的新设置界面
- **单命令安装**：现在可以使用单个 Docker 命令安装 Perplexica，而无需提取整个存储库。

<img width="1920" height="1280" alt="419_1x_shots_so" src="https://github.com/user-attachments/assets/12b0a5df-905b-4459-b8ec-7414c86d2e8f" />

**提供商和型号更新**
- 添加了对最新 AI 型号的支持：GPT-5、GPT-5 Mini、O3、Claude Opus 4.1 和 Gemini 2.5 型号
- 新提供商：AIML API、Lemonade、LM Studio 和 Transformers（动态加载）
- 通过统一模型注册表增强提供商管理
- 使用 @langchain/groq 改进了 Groq 集成
- 模型现在是动态获取的，而不是硬编码的

**用户界面改进**
- 移动设置按钮可在较小的屏幕上更好地访问
- 带有地理位置支持和英制/公制单位的天气小部件
- 增强的“发现”页面，具有主题选择和预览模式
- 改进了具有浅色主题兼容性的文件附件模式
- 通过智能向后滚动检测自动滚动聊天

**开发者经验**
- API 路由验证以防止格式错误的请求
- 单独的消息实体处理以获得更好的性能
- 改进了渲染的引文组件
- 基于哈希的配置管理可实现高效更新
- 基于仪器的迁移替换 ts-node

**修复**
- 修复了重复的第一个令牌和思考标签处理问题
- 解决了双 stringify JSON 解析错误
- 修复了消息重写期间的错误历史记录
- 更正了 DOC 文件的文件上传错误
- 修复了 iOS 输入缩放问题
- 解决了跨组件的灯光模式颜色问题

### 新贡献者
* @ClawCloud-Ron 在 https://github.com/ItzCrazyKns/Perplexica/pull/731 中做出了第一个贡献
* @haddadrm 在 https://github.com/ItzCrazyKns/Perplexica/pull/743 中做出了第一个贡献
* @alckasoc 在 https://github.com/ItzCrazyKns/Perplexica/pull/781 中做出了第一个贡献
* @glitchySid 在 https://github.com/ItzCrazyKns/Perplexica/pull/801 中做出了第一个贡献
* @koyasi777 在 https://github.com/ItzCrazyKns/Perplexica/pull/785 中做出了第一个贡献
* @Davixk 在 https://github.com/ItzCrazyKns/Perplexica/pull/784 中做出了第一个贡献
* @D1m7asis 在 https://github.com/ItzCrazyKns/Perplexica/pull/815 中做出了第一个贡献
* @kittrydge 在 https://github.com/ItzCrazyKns/Perplexica/pull/817 中做出了第一个贡献
* @chriswritescode-dev 在 https://github.com/ItzCrazyKns/Perplexica/pull/787 中做出了第一个贡献
* @amosHydra 在 https://github.com/ItzCrazyKns/Perplexica/pull/827 中做出了第一个贡献
* @boarder2 在 https://github.com/ItzCrazyKns/Perplexica/pull/830 中做出了第一个贡献
* @tuxthepenguin84 在 https://github.com/ItzCrazyKns/Perplexica/pull/832 中做出了第一个贡献
* @skoved 在 https://github.com/ItzCrazyKns/Perplexica/pull/855 中做出了第一个贡献
* @justinmayer 在 https://github.com/ItzCrazyKns/Perplexica/pull/828 中做出了第一个贡献
* @agungbesti 在 https://github.com/ItzCrazyKns/Perplexica/pull/866 中做出了第一个贡献
* @fizikiukas 在 https://github.com/ItzCrazyKns/Perplexica/pull/876 中做出了第一个贡献
* @ramkrishna2910 在 https://github.com/ItzCrazyKns/Perplexica/pull/877 中做出了第一个贡献
* @ruturaj-rathod 在 https://github.com/ItzCrazyKns/Perplexica/pull/880 中做出了第一个贡献

**完整 Changelog**：https://github.com/ItzCrazyKns/Perplexica/compare/v1.10.2...v1.11.0

---

> 📦 仓库：[ItzCrazyKns/Vane](https://github.com/ItzCrazyKns/Vane) · 🏷️ 版本：`v1.11.0` · 📅 发布：2025-10-21 · [查看英文原版 Release](https://github.com/ItzCrazyKns/Vane/releases/tag/v1.11.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
