# ollama v0.6.5
# 为什么要使用ollama  
当开发者被困在臃肿的云端AI服务中，忍受着响应延迟、数据隐私风险和高昂成本时；当研究者因本地部署大模型的硬件门槛望而却步时——ollama像一柄手术刀精准切开这些矛盾。它让13B参数量的模型在16GB内存的笔记本上流畅运行，将需要数天配置的环境缩短为三行命令，用开源生态打破商业垄断，这正是AI民主化进程中最锋利的破冰船。

# ollama是什么  
一个开源的本地化大语言模型运行框架，支持在个人电脑上零配置部署Llama、Mistral等主流模型，提供跨平台的命令行交互和API接口，让开发者像使用Docker容器般轻松管理AI模型。

# 入门示例  
**真实场景**：电商公司的全栈工程师小明需要为商品详情页添加智能问答功能，但担心云服务延迟影响用户体验。  
**开发步骤**：  
1. 在开发机安装`ollama run llama3`，3分钟完成8B参数模型部署  
2. 通过`curl http://localhost:11434/api/generate -d '{"model":"llama3","prompt":"这款运动鞋适合马拉松训练吗？"}'`实时获取响应  
3. 在Python中集成：  
```python
import requests
response = requests.post('http://localhost:11434/api/generate', json={
    'model': 'llama3',
    'prompt': '用户咨询内容...',
    'stream': False
})
print(response.json()['response'])
```

# ollama v0.6.5版本更新  
- 新增Mistral Small 3.1模型支持（当前需指定版本号运行）  
- 优化Gemma 3在云端存储挂载文件系统的加载速度  
- 改进Windows平台安装程序的数字签名验证  
- 修复GPU内存分配异常问题  
- 更新API文档中的流式响应示例

# 更新日志
## 新增模型
- [Mistral Small 3.1](https://ollama.com/library/mistral-small)：同尺寸中性能最佳的模型。正式发布后将作为`mistral-small`的默认版本，目前可通过`ollama run mistral-small:24b-3.1-instruct-2503-q4_K_M`命令体验

## 主要变更
- 支持Mistral Small 3.1模型
- 优化Gemma 3在Google云存储等网络文件系统上的模型加载速度

## 完整更新记录
查看详细变更日志：[v0.6.4...v0.6.5](https://github.com/ollama/ollama/compare/v0.6.4...v0.6.5)

# 版本更新总结  
本次升级重点引入性能强劲的Mistral Small 3.1模型，显著优化云端环境下的Gemma 3加载效率，同步完善Windows系统支持与API文档，持续提升开发者体验。