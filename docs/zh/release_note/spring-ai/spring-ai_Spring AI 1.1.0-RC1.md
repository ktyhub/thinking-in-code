# spring-ai Spring AI 1.1.0-RC1
# 为什么要使用Spring AI

在人工智能的浪潮中，开发者们常常陷入两难境地：一边是AI技术的无限潜力，另一边却是集成复杂性和陡峭的学习曲线。传统AI开发如同在迷宫中摸索——每个模型都有自己的API、每个服务都需要独特的配置，你不得不花费大量时间在重复的样板代码上，而非专注于创造价值。

但Spring AI的出现打破了这一僵局。它像一位经验丰富的向导，带领你穿越AI集成的丛林。想象一下，你不再需要为每个AI服务编写繁琐的连接代码，不再需要担心不同模型之间的兼容性问题。Spring AI提供了一个统一的抽象层，让你能够以声明式的方式调用各种AI能力——从OpenAI到本地模型，从文本生成到图像处理。

更令人振奋的是，Spring AI与Spring生态系统的无缝集成。如果你已经是Spring开发者，那么你早已掌握了使用Spring AI的钥匙。依赖注入、自动配置、测试支持——所有这些你熟悉的Spring特性都被完美地融入AI开发中。这就像是给AI能力装上了Spring的翅膀，让它们能够轻松地飞入你的应用程序。

矛盾的是，在AI技术日益普及的今天，许多团队却因为集成复杂度而望而却步。Spring AI正是为了解决这一矛盾而生——它让AI民主化，让每个开发者都能轻松驾驭这股技术浪潮。选择Spring AI，不仅是选择了一个工具，更是选择了一条通往AI未来的捷径。

# Spring AI是什么

Spring AI是一个开源项目，旨在简化人工智能能力的集成和使用。它基于Spring框架构建，为开发者提供了统一的API来访问各种AI模型和服务。无论是大型语言模型、图像生成还是语音处理，Spring AI都能通过一致的接口帮助你快速实现功能。

这个项目抽象了不同AI提供商之间的差异，让你可以用相同的方式调用OpenAI、Azure AI、Amazon Bedrock等服务。它继承了Spring框架的优点——依赖注入、自动配置、模块化设计，让AI集成变得像使用数据库或消息队列一样简单。

# 入门示例

假设你正在为一个在线客服系统开发智能问答功能。传统方式需要你直接调用AI服务的API，处理认证、错误重试、响应解析等繁琐细节。而使用Spring AI，你可以在几分钟内搭建起完整的解决方案。

首先，在Spring Boot项目中添加Spring AI依赖：

```xml
<dependency>
    <groupId>org.springframework.ai</groupId>
    <artifactId>spring-ai-openai-spring-boot-starter</artifactId>
</dependency>
```

然后在application.properties中配置你的OpenAI密钥：

```properties
spring.ai.openai.api-key=你的API密钥
```

现在创建一个简单的客服问答服务：

```java
@Service
public class CustomerServiceBot {
    
    private final ChatClient chatClient;
    
    public CustomerServiceBot(ChatClient chatClient) {
        this.chatClient = chatClient;
    }
    
    public String answerCustomerQuestion(String question) {
        String prompt = """
            你是一个专业的客服助手。请用友好、专业的方式回答用户问题。
            问题：%s
            """.formatted(question);
            
        return chatClient.prompt()
                        .user(prompt)
                        .call()
                        .content();
    }
}
```

在控制器中暴露API：

```java
@RestController
public class CustomerServiceController {
    
    private final CustomerServiceBot bot;
    
    public CustomerServiceController(CustomerServiceBot bot) {
        this.bot = bot;
    }
    
    @PostMapping("/ask")
    public String askQuestion(@RequestBody String question) {
        return bot.answerCustomerQuestion(question);
    }
}
```

这个真实场景展示了Spring AI的强大之处：原本需要数十行代码的AI集成，现在只需几行配置和一个方法调用。你的客服系统立即获得了智能问答能力，能够处理从产品咨询到售后支持的各类问题。

# Spring AI 1.1.0-RC1版本更新

Spring AI 1.1.0-RC1引入了多项重要改进，包括OpenAI TTS接口标准化和已弃用API的清理。新增功能涵盖推理内容支持、安全标识符和自动重试配置，提升了开发体验。MongoDB聊天记忆持久化和Ollama推理模式支持扩展了应用场景。性能优化包括事件驱动的工具回调缓存，同时修复了多个集成问题和配置缺陷。

# 更新日志

## Spring AI 1.1.0-RC1 发布说明

### 🎯 重点内容
本次发布包含10项新功能、8个错误修复、10项文档改进和12项其他改进。

### ⏪ 破坏性变更
- OpenAI TTS实现已迁移到共享的TextToSpeechModel接口，速度参数现在使用Double类型而不是String类型
- 移除了已弃用的API，为1.1.0正式版发布做准备。使用已弃用方法的应用程序需要迁移到新的替代方案

### ⚠️ 升级说明
- OpenAI TTS用户应更新使用新的共享TextToSpeechModel接口。速度参数现在使用Double类型而不是String类型。请参阅TTS迁移指南获取详细说明
- 使用在1.1.0中移除的已弃用API的应用程序必须迁移到