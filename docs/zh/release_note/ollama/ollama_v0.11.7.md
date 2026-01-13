# ollama v0.11.7
### 为什么要使用ollama

你是否曾因AI模型部署的复杂性而望而却步？是否厌倦了云端服务的高延迟、隐私泄露风险和高昂成本？Ollama的出现，彻底打破了这种困境。它让每个人都能在本地轻松运行强大的大语言模型，无需依赖网络，无需担心数据泄露，更无需支付持续的服务费用。但矛盾在于：在追求高效便捷的AI体验时，我们是否真的愿意放弃云服务的“便利”？Ollama用事实告诉你，真正的自由和控制权，远比虚假的便利更有价值——它不仅是技术工具，更是对AI垄断的彻底反抗。

### ollama是什么

Ollama是一个开源项目，允许用户在本地计算机上快速部署和运行大型语言模型（如Llama、DeepSeek等）。它简化了模型下载、配置和推理过程，通过命令行工具提供交互式体验，无需复杂的环境搭建或深度学习知识。简单来说，它就是“本地版的ChatGPT”，但完全由你掌控。

### 入门示例

想象一下，你是一名开发者，正在开发一款智能写作助手。你需要一个AI模型来生成内容，但又不希望用户数据离开本地环境。使用Ollama，只需几步即可实现：

1. **安装Ollama**（以Mac为例）：
   ```bash
   curl -fsSL https://ollama.com/install.sh | sh
   ```

2. 拉取并运行模型（例如Llama 3）：
   ```bash
   ollama run llama3
   ```

3. 在Python项目中集成Ollama的API：
   ```python
   import requests

   response = requests.post(
       "http://localhost:11434/api/generate",
       json={"model": "llama3", "prompt": "写一篇关于AI民主化的短文"}
   )
   print(response.json()["response"])
   ```

**真实场景**：一家医疗公司使用Ollama本地处理患者咨询，既保护隐私，又无需支付云端API调用费用。

### ollama v0.11.7版本更新了什么

1. 新增DeepSeek-V3.1模型，支持思维模式与非思维模式混合推理。
2. 修复了CPU-only系统无法加载多模型的问题。
3. 优化了模型输出解析，兼容跳过初始`<think>`标签的模型（如DeepSeek-V3.1）。
4. 修复了工具调用中包含`{`或`}`时解析错误的问题。
5. 解决了无 opening `<think>` 标签时文本异常输出的问题。

### 更新日志

#### New models
- [DeepSeek-V3.1](https://ollama.com/library/deepseek-v3.1)：一种混合模型，支持思维模式和非思维模式。

#### What's Changed
- 修复了在仅CPU系统上无法加载多个模型的问题。
- Ollama 现在兼容跳过输出初始 `<think>` 标签的模型（例如 DeepSeek-V3.1）。
- 修复了模型没有输出 opening `<think>` 标签时仍会发射文本的问题。
- 修复了工具调用中包含 `{` 或 `}` 时无法正确解析的问题。

**完整更新日志**：[v0.11.6...v0.11.7](https://github.com/ollama/ollama/compare/v0.11.6...v0.11.7)

### 总结
Ollama v0.11.7 版本主要引入了 DeepSeek-V3.1 混合模型，并修复了多项关键问题，包括多模型加载兼容性、思维标签解析逻辑和工具调用符号处理，显著提升了稳定性和模型适配范围。