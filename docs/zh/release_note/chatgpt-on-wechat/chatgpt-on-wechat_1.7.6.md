# chatgpt-on-wechat 1.7.6
# 为什么要使用chatgpt-on-wechat  
在这个注意力稀缺的时代，我们正经历着一场智能对话革命与社交孤岛化的激烈碰撞。传统聊天机器人困在机械应答的牢笼里，而chatgpt-on-wechat像一把破壁利刃，将最前沿的AI对话能力注入微信生态。它不仅打破了平台间数据割裂的僵局，更让每个人都能在熟悉的社交场景中，拥有24小时在线的智能助手——从即时翻译到情感陪伴，从知识问答到工作协同，这场无声的社交革命正在重塑人机交互的边界。

# chatgpt-on-wechat是什么  
一个基于ChatGPT的开源智能对话系统，可一键部署到微信/企业微信等社交平台，通过自然语言交互实现智能问答、多模态处理和自动化任务。它如同给社交软件装上AI大脑，让每个聊天窗口都成为通往智能世界的入口。

# 入门示例  
**真实场景**：某跨境电商团队将chatgpt-on-wechat接入企业微信群，当采购经理在群内发送"$translate How to handle defective rate exceeding 5%?"，系统即时返回中英双语对照的解决方案，并自动生成质量管控流程图。  

**开发示例**：  
1. 安装核心依赖：`pip install wechaty chatgpt-on-wechat`  
2. 配置`config.json`启用多模态功能：
```json
{
  "model": "gpt-4-vision-preview",
  "image_understanding": true
}
```
3. 用户发送产品设计草图图片，机器人自动解析图像并给出改良建议。

# chatgpt-on-wechat 1.7.6版本更新  
1. 新增Claude 4双模型支持（Opus/Sonnet）  
2. 重构Web对话界面，支持Markdown图文渲染  
3. 集成AgentMesh多智能体框架，实现终端/浏览器联动  
4. 优化百度长文本语音合成稳定性  
5. 修复企业微信token过期卡顿问题  

# 更新日志

## 🌟 更新

### 一、新增 Claude 4 模型
新增支持 Claude 4 Opus 和 Claude 4 Sonnet 模型，`model` 参数填写：`claude-opus-4-0`，`claude-sonnet-4-0`

> LinkAI的api服务也已支持，设置 `use_linkai` 为true即可

### 二、web channel优化
优化了web对话channel的界面及使用体验，可展示文本、图片等消息交互，支持markdown语法渲染，兼容插件执行

使用方式：
- 在 config.json 配置文件中的 channel_type 字段填入 web
- 程序运行后将监听9899端口，浏览器访问 http://localhost:9899/chat 即可使用

**页面效果：**  
![19341747987694_ pic](https://private-user-images.githubusercontent.com/26161723/446942149-eba8713c-6528-4e47-98a7-53e7bdbba0bf.jpg)

PR: #2593

### 三、新增 Agent插件
基于 [AgentMesh](https://github.com/MinimalFuture/AgentMesh) 多智能体框架实现的 [Agent插件](https://github.com/zhayujie/chatgpt-on-wechat/tree/master/plugins/agent)，可以让机器人快速获得Agent能力，通过自然语言对话来访问 **终端、浏览器、文件系统、搜索引擎** 等各类工具。同时还支持通过 **多智能体协作** 来完成复杂任务。

1. 确保已安装依赖：
```shell
pip install agentmesh-sdk>=0.1.3
```

2. 添加配置文件  
在 `plugins/agent`目录下的创建 `config.yaml`，可通过模板文件复制：
```shell
cp config-template.yaml config.yaml
```

3. 使用方式  
在对机器人发送的消息中使用 `$agent` 前缀来触发插件，支持以下命令：
- `$agent [task]`: 使用默认团队执行任务 (默认团队可通 config.yaml 中的team配置修改)
- `$agent teams`: 列出可用的团队
- `$agent use [team_name] [task]`: 使用指定的团队执行任务

#### 使用效果
场景示例1：**多智能体任务分发**  
![19361747991716_ pic](https://private-user-images.githubusercontent.com/26161723/446952175-946a99f5-3455-4f8a-b7ef-4a3ee21e30e0.jpg)

场景示例2：**多智能体协作讨论**  
![19351747991196_ pic](https://private-user-images.githubusercontent.com/26161723/446952130-45301fbe-365a-4019-9b08-983f3e1072e5.jpg)

> 可通过 `config.yaml` 配置智能体团队，零代码实现更多自定义场景，详细插件文档：[agent plugin](https://github.com/zhayujie/chatgpt-on-wechat/tree/master/plugins/agent)

PR: #2595

### 4. 百度语音合成优化
文本较长时，支持自动调用长文本合成接口

PR: #2592

### 5. 企微自建应用`access_token`获取优化
新增线程支持过期前提前刷新 `access_token`，避免过期时对话卡顿

PR: #2565

# 总结
本次更新带来三大突破：接入顶尖Claude 4模型实现认知跃迁，重构Web交互界面打造沉浸式对话体验，创新性引入多智能体框架开启人机协作新纪元。配合语音合成优化和企业微信稳定性提升，标志着chatgpt-on-wechat正式进入智能体操作系统时代。