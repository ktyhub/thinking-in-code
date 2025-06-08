# ChatTTS v0.2.0
### 为什么要使用ChatTTS

在这个信息爆炸的时代，声音的力量愈发显得重要。想象一下，你的内容可以通过自然流畅的语音传达给听众，而不是单调的文字。ChatTTS正是为此而生，它不仅能将文字转化为生动的语音，还能让你的信息以更具吸引力的方式传播。然而，许多人在选择语音合成工具时，往往面临着选择的困惑：是选择功能强大的工具，还是选择易于使用的工具？ChatTTS的出现，正是为了打破这种矛盾，提供一个既强大又易于上手的解决方案。

### ChatTTS是什么

ChatTTS是一个开源的文本转语音（TTS）项目，旨在为开发者提供一个灵活且高效的语音合成工具。它利用先进的深度学习技术，能够生成自然流畅的语音，支持多种语言和口音。无论是用于游戏、教育还是其他应用场景，ChatTTS都能提供高质量的语音输出，帮助用户更好地传达信息。

### 入门示例

想象一下，你是一位游戏开发者，正在为你的新游戏添加语音提示。使用ChatTTS，你可以轻松地将游戏中的文本转化为语音。只需几行代码，你就能实现这一功能：

```python
from ChatTTS import Chat

chat = Chat()
chat.load("your_model_path")
audio = chat.synthesize("欢迎来到游戏世界！")
audio.save("welcome_message.wav")
```

通过这个简单的示例，你不仅能为游戏增添趣味，还能提升玩家的沉浸感。

### ChatTTS v0.2.0版本更新了什么

在最新的v0.2.0版本中，ChatTTS进行了多项重要更新，包括：新增简单的HTTP API示例和命令行流式推理实例，支持批量Vocos解码，适配新VQ编码器，增加ZeroShot支持，以及初步支持vLLM。此外，命令行示例中增加了`--source`和`--custom_path`参数，提升了用户的使用体验。

### 更新日志

#### 新增
- 简单的HTTP API示例
- 命令行流式推理实例
- 批量Vocos解码（按最长token生成矩阵，其余填0）
- 适配新VQ编码器
- ZeroShot支持
- 初步支持vLLM
- 命令行示例增加`--source`和`--custom_path`参数
- 为引入微调，给`Speaker`类增加`inplace`参数
- 给`Chat.load`函数增加`experimental`参数

#### 修复
- 流式推理的声音有间断性毛刺
- WebUI相同条件下音频生成每次不同
- `normalizer`更改tag导致模型将tag读出
- 更换已失效的GitCode镜像
- repetition penalty idx处理错误

#### 优化
- 彻底移除`pretrain_models`字典
- 将`tokenizer`独立为一个类
- `normalizer`将所有不支持的字符删除以免推理出错
- 取消`config`文件夹，直接把设置写入代码方便更改
- 删除流式推理末尾多余的空白
- 在调用前设置`manual_seed`改为直接给`multinomial`提供`generator`
- 将`tokenizer`从直接加载`.pt`改为调用自带的`from_pretrained`方法
- 独立`speaker`类，放置`spk_stat`相关内容
- `Chat.load`参数改为默认关闭编译
- GPT切换到`safetensor`模型

#### 依赖
- 代码许可证更改为开源的AGPL3.0

### 总结

此次更新不仅增强了ChatTTS的功能，还修复了多个问题，优化了用户体验。无论是开发者还是普通用户，都能从中受益，享受到更高效、更流畅的语音合成体验。

### 爆款标题提案

- “ChatTTS v0.2.0：全新功能与优化，语音合成再升级！”
- “解锁ChatTTS v0.2.0：新增API示例与流式推理，开发者必看！”
- “ChatTTS v0.2.0发布：ZeroShot支持与命令行增强，语音合成新纪元！”
- “全新ChatTTS v0.2.0：优化体验，修复问题，语音合成更完美！”
- “ChatTTS v0.2.0：开源语音合成工具的重大更新，值得一试！”