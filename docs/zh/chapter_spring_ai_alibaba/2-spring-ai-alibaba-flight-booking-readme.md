# 基于 Spring AI Alibaba 的智能专家系统演示

本项目演示了如何利用 Spring AI Alibaba 构建一个 AI 驱动的智能专家系统，具备以下核心能力：

- **知识检索增强（RAG）**：系统可访问条款与条件等知识库，结合大模型实现智能问答。
- **工具调用（Function Calling）**：AI 可调用后端 Java 方法，完成实际业务操作。
- **自然语言交互**：通过大语言模型（LLM）与用户进行自然对话。

![spring-ai-alibaba-flight-booking](/img/chapter_spring_ai_alibaba/diagram.png)

![flight-booking-show.png](/img/chapter_spring_ai_alibaba/flight-booking-show.png)

## 一、环境要求

- **Java 17 及以上**
- 配置 Dashscope API Key 到环境变量：`AI_DASHSCOPE_API_KEY`

## 二、快速启动

### 1. 依赖引入

在 `pom.xml` 中添加 Spring AI Alibaba Boot Starter 依赖：

```xml

<dependency>
    <groupId>org.springframework.ai</groupId>
    <artifactId>spring-ai-alibaba-starter</artifactId>
    <version>1.0.0-M8.1</version>
</dependency>
```

### 2. 配置 DashScope

在 `application.properties` 中添加如下配置：

```properties
spring.ai.dashscope.api-key=${AI_DASHSCOPE_API_KEY}
spring.ai.dashscope.chat.options.model=qwen-max
```

### 3. 启动应用

- 在 IDE 中运行 `Application.java`
- 或者在命令行执行：

```shell
mvn spring-boot:run
```

## 三、打包与部署

### 1. 构建 Jar 包

```shell
./mvnw clean package
```

### 2. 运行 Jar 包

```shell
java -jar ./target/playground-flight-booking-0.0.1-SNAPSHOT.jar
```

## 四、前端构建

如需前端资源更新，执行：

```shell
mvn clean compile -Pbuild-frontend
```

构建完成后，可在 [localhost:9000](http://localhost:9000) 访问体验。

---

## 五、总结

本项目通过 Spring AI Alibaba 框架，结合 RAG、Function Calling 等技术，打造了一个可扩展、可交互的 AI
智能专家系统。无论是企业智能客服、知识问答，还是自动化业务处理，都能快速落地。欢迎体验与交流！