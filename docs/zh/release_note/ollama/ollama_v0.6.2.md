# ollama v0.6.2
# 为什么要使用Ollama  
当AI开发者被困在云端服务的牢笼里，当算力资源成为创新者的枷锁——Ollama如同一把钥匙，解开了本地化运行大语言模型的封印。它直面当代AI开发的终极矛盾：**算力霸权与创作自由的对抗**。无需依赖昂贵的云服务，不必忍受API调用的延迟与隐私风险，你可以在自己的笔记本上运行Gemma、Llama等尖端模型，甚至离线调试AI应用。当其他工具还在用"云端赋能"画饼时，Ollama已让开发者真正掌控了自己的AI命运。

# Ollama是什么  
一个开箱即用的AI引擎，将复杂的大语言模型压缩成可本地运行的轻量级程序。通过命令行或API接口，开发者能在个人设备上快速部署、测试和微调各类开源模型，就像启动一个本地服务器般简单。

# 入门示例  
**真实场景**：凌晨三点的咖啡厅里，独立开发者小林正在为创业项目集成AI客服。使用Ollama三步搭建测试环境：  
1. `ollama pull llama3` 下载最新Llama3模型  
2. 创建量化版模型节省内存：  
```bash
ollama create custom-llama -f Modelfile --quantize q4_0
```  
3. 通过REST API实时交互：  
```python
import requests
response = requests.post(
    'http://localhost:11434/api/generate',
    json={'model': 'custom-llama', 'prompt': '用户说产品太贵怎么回应？'}
)
print(response.json()['response'])
```  
20分钟后，他的MacBook Pro已运行着响应速度媲美云端服务的对话引擎。

# Ollama v0.6.2版本更新  
- Gemma 3支持多图输入处理  
- 修复Gemma 3内存泄漏问题  
- 量化转换支持safetensors格式  
- 解决含斜杠模型名无法保存的BUG  
- 新增AMD Strix Halo GPU支持  

# 更新日志  
## 主要变更  
- Gemma 3现已支持多图像输入  
- 修复Gemma 3运行时会占用过高系统内存的问题  
- 使用`safetensors`格式转换Gemma 3时，`ollama create --quantize`命令可正常执行  
- 修正模型名称包含`/`字符时无法使用`/save`功能的问题  
- 新增对AMD Strix Halo系列显卡的支持  

## 完整更新记录  
[v0.6.1...v0.6.2-rc0](https://github.com/ollama/ollama/compare/v0.6.1...v0.6.2-rc0)

# 版本更新总结  
本次升级聚焦性能优化与硬件适配：Gemma 3系列增强多模态能力的同时降低内存消耗，量化工具链全面兼容新格式，更解决了特殊字符导致的系统异常，并为AMD新架构显卡铺平道路。