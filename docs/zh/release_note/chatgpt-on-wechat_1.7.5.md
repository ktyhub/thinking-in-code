# chatgpt-on-wechat 1.7.5
## 为什么要使用chatgpt-on-wechat  

当传统客服机器人还在用机械的"您好，请问有什么可以帮您？"开场时，用户早已厌倦了千篇一律的对话模板。企业主们陷入两难：既要控制人力成本，又担心智能化服务缺乏人情味。这就是chatgpt-on-wechat横空出世的时刻——它像一位精通十八般武艺的数字化管家，在微信生态中实现对话式AI的降维打击。不同于普通聊天机器人需要5秒响应延迟，它能以人类级别的自然交流实时响应，更支持多模态交互：当用户发送商品图片，它能瞬间解析图像生成卖点文案；收到语音咨询时，可自动转文字并调用知识库精准回复。这个开源利器正在重新定义即时通讯场景的人机交互边界。

## chatgpt-on-wechat是什么  

一个将ChatGPT深度集成到微信生态的开源中间件。如同给微信装上AI大脑，开发者可通过简单配置让公众号/企业微信具备智能对话、语音交互、图像生成等能力，支持多协议接入的"瑞士军刀"级解决方案。

## 入门示例  

**真实场景**：某跨境电商的微信客服每天需处理3000+咨询，凌晨3点仍有用户询问："这件毛衣机洗会缩水吗？"  

**开发实践**：  
1. 部署chatgpt-on-wechat至云服务器  
2. 配置商品知识库和售后政策文档  
3. 编写特定指令处理逻辑：
```python
if "退换货" in query:
   return search_policy("return") + "\n需要人工协助请回复#9"
elif "材质" in query:
   return generate_material_response(query)
```
4. 接入企业微信后，当用户发送毛衣照片询问时，AI自动识别织物成分，结合洗护标签生成定制化建议，将客服效率提升600%。

## chatgpt-on-wechat 1.7.5版本更新  

1. 新增wechatferry协议实现微信深度集成  
2. 接入ModelScope模型市场支持32B参数大模型  
3. 整合腾讯云语音识别/合成API  
4. 新增deepseek模型兼容OpenAI接口  
5. 修复多媒体内容重复展示问题

## 更新日志  

### 🌟 更新  

#### 1. 新增 `wechatferry` 协议  
新增 `wcf` 协议接入微信功能，具体使用方式参考 issue #2568。  

#### 2. 新增支持 `ModelScope` API 接口  
配置示例：  
```json
"bot_type": "modelscope",
"model": "Qwen/QwQ-32B",
"modelscope_api_key": "your_api_key",
"modelscope_base_url": "https://api-inference.modelscope.cn/v1/chat/completions",
"text_to_image": "MusePublic/489_ckpt_FLUX_1",
```

#### 3. 新增支持腾讯云语音能力  
需申请腾讯云密钥后配置：  
```json
"voice_to_text": "tencent",
"text_to_voice": "tencent",
```

#### 4. 新增支持 `deepseek` 模型  
配置示例：  
```json
"open_ai_api_key": "sk-589axxxxxxxx48fb74",
"open_ai_api_base": "https://api.deepseek.com/v1",
"model": "deepseek-chat",
```

#### 5. 修复图片和链接重复展示问题  
优化LinkAI平台服务的多媒体内容展示逻辑。

#### 6. 新增支持 `Gitee-AI` API 接口  
配置示例：  
```json
"bot_type": "chatGPT",
"model": "Qwen2.5-72B-Instruct",
"open_ai_api_key": "K8CJTFxxxxxxxxxxxxxxxxxxxxxxxxxx7IBTQEJFA5Z",
"open_ai_api_base": "https://ai.gitee.com/v1",
```

#### 7. 更新讯飞星火lite模型参数  
将请求地址的 `domain` 参数由 `general` 改为 `lite`。

## 版本更新总结  

1.7.5版本实现三大突破：新增微信深度集成协议，扩展ModelScope/DeepSeek等顶尖模型支持，整合腾讯云语音技术。如同为AI引擎加装涡轮增压，不仅提升多模态处理能力，更打通了商业应用落地的"最后一公里"。