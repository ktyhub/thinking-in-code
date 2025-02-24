# gpt4free g4f v0.4.7.0
### 为什么要使用gpt4free

在这个信息爆炸的时代，获取高质量的人工智能工具变得愈发重要。然而，许多用户面临着高昂的费用和复杂的使用门槛。gpt4free的出现，正是为了打破这一矛盾。它不仅提供了免费的AI服务，还让用户能够轻松上手，享受强大的功能。想象一下，您可以在不花费一分钱的情况下，利用先进的AI技术来提升工作效率、激发创意，甚至解决日常问题，这无疑是一个令人振奋的选择。

### gpt4free是什么

gpt4free是一个开源项目，旨在为用户提供免费的GPT-4模型访问。通过这个项目，用户可以轻松地使用强大的自然语言处理能力，而无需支付高昂的费用。它支持多种模型和提供者，旨在为开发者和普通用户提供灵活、便捷的AI解决方案。

### 入门示例

想象一下，您是一名学生，正在为即将到来的论文写作而烦恼。通过gpt4free，您可以快速创建一个智能助手，帮助您生成大纲、提供参考资料，甚至撰写部分内容。以下是一个简单的开发示例：

```python
from g4f.tools.pydantic_ai import apply_patch
apply_patch()

from pydantic_ai import Agent

# 定义代理
agent = Agent(
    'g4f:Gemini:Gemini',
    system_prompt='请简明扼要，用一句话回答。'
)
```

通过这个简单的代码，您就可以创建一个与AI互动的代理，轻松获取所需的信息。

### gpt4free g4f v0.4.7.0版本更新了什么

在最新的gpt4free v0.4.7.0版本中，工具支持得到了增强，特别是在OpenaiTemplate和GeminiPro方面。更新了DDG、PerplexityLabs和Gemini中的模型，修复了新版本中的curl_cffi问题。默认情况下，现在只显示免费的提供者，并新增了来自DDG的mixtral_small_24b模型。

### 更新日志

## 更新内容
- 改进了OpenaiTemplate和GeminiPro中的工具支持。
- 更新了DDG、PerplexityLabs和Gemini中的模型。
- 修复了新版本中的curl_cffi问题。
- 默认情况下仅显示免费的提供者。
- 新增了来自DDG的mixtral_small_24b模型。

### 总结

在gpt4free v0.4.7.0版本中，用户将享受到更强大的工具支持和更丰富的模型选择，同时也解决了一些使用中的问题，使得体验更加流畅。通过这些更新，gpt4free继续致力于为用户提供高效、免费的AI服务。