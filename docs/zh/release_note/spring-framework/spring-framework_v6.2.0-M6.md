# spring-framework v6.2.0-M6
<<<<<<< HEAD
```markdown
## ⭐ 新功能

- 在 AbstractServerHttpRequest 中按需初始化 RequestPath [#33227](https://github.com/spring-projects/spring-framework/issues/33227)
- 增加对 MapAccessor 只读模式的支持 [#33222](https://github.com/spring-projects/spring-framework/pull/33222)
- DefaultPartHttpMessageReader 不应急切实例化 Reactor Scheduler [#33218](https://github.com/spring-projects/spring-framework/issues/33218)
- 将 JavaScript 的 MIME 类型映射更改为 `text/javascript` [#33197](https://github.com/spring-projects/spring-framework/issues/33197)
- 在 WebSocketMessageBrokerStats 中处理 SimpleAsyncTaskExecutor [#33104](https://github.com/spring-projects/spring-framework/issues/33104)
- 支持从 `HandlerMethodValidationException` 中提取 `ConstraintViolation` [#33025](https://github.com/spring-projects/spring-framework/issues/33025)

## 🐞 Bug 修复

- AssertJ 对 multipart 的支持未在请求中设置属性内容类型 [#33232](https://github.com/spring-projects/spring-framework/issues/33232)
- MockMvc 构建器与之前的 6.x 版本不兼容 [#33229](https://github.com/spring-projects/spring-framework/issues/33229)
- 当 BeanFactory 有大量 bean 定义时，生成的 __BeanFactoryRegistrations 文件可能过大 [#33126](https://github.com/spring-projects/spring-framework/issues/33126)

## ❤️ 贡献者

感谢所有为此版本工作过的贡献者：

[quaff](https://github.com/quaff)
```
=======
### Spring Framework是什么？

Spring Framework是一个开源的Java框架，旨在简化企业级应用程序的开发。它提供了全面的基础设施支持，帮助开发者构建高效、可维护的Java应用程序。Spring的核心特性包括依赖注入（DI）、面向切面编程（AOP）、事务管理、以及对各种持久化技术的支持。通过这些功能，Spring Framework使得开发者能够专注于业务逻辑，而不必过多关注底层的技术细节。

### 为什么要使用Spring Framework？

使用Spring Framework的原因有很多。首先，它提供了强大的依赖注入功能，使得组件之间的耦合度降低，增强了代码的可测试性和可维护性。其次，Spring的模块化设计允许开发者根据需要选择和使用不同的功能模块，从而提高了灵活性。此外，Spring还支持多种持久化技术，如JPA、Hibernate等，方便开发者进行数据访问。最后，Spring拥有一个活跃的社区和丰富的文档资源，能够为开发者提供持续的支持和帮助。

### 入门示例

以下是一个简单的Spring Framework入门示例，展示如何使用Spring进行依赖注入：

```java
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

@Configuration
class AppConfig {
    @Bean
    public MessageService messageService() {
        return new MessageServiceImpl();
    }

    @Bean
    public MessagePrinter messagePrinter() {
        return new MessagePrinter(messageService());
    }
}

class MessageService {
    public String getMessage() {
        return "Hello, Spring!";
    }
}

class MessagePrinter {
    private final MessageService messageService;

    public MessagePrinter(MessageService messageService) {
        this.messageService = messageService;
    }

    public void printMessage() {
        System.out.println(messageService.getMessage());
    }
}

public class Main {
    public static void main(String[] args) {
        ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
        MessagePrinter printer = context.getBean(MessagePrinter.class);
        printer.printMessage();
    }
}
```

### Spring Framework v6.2.0-M6版本更新了什么

在Spring Framework v6.2.0-M6版本中，进行了多项重要更新，包括：

#### 新特性
- 在AbstractServerHttpRequest中按需初始化RequestPath。
- 增加对MapAccessor只读支持。
- DefaultPartHttpMessageReader不应急切实例化Reactor Scheduler。
- 将JavaScript的MIME类型映射更改为`text/javascript`。
- 在WebSocketMessageBrokerStats中处理SimpleAsyncTaskExecutor。
- 支持从HandlerMethodValidationException中提取ConstraintViolation。

#### Bug修复
- AssertJ对多部分的支持未在请求上设置内容类型属性。
- MockMvc构建器与之前的6.x版本不兼容。
- BeanFactoryRegistrations生成的文件在BeanFactory中定义的bean过多时可能过大。

### 更新日志

## ⭐ 新特性
- 在AbstractServerHttpRequest中按需初始化RequestPath。
- 增加对MapAccessor只读支持。
- DefaultPartHttpMessageReader不应急切实例化Reactor Scheduler。
- 将JavaScript的MIME类型映射更改为`text/javascript`。
- 在WebSocketMessageBrokerStats中处理SimpleAsyncTaskExecutor。
- 支持从HandlerMethodValidationException中提取ConstraintViolation。

## 🐞 Bug修复
- AssertJ对多部分的支持未在请求上设置内容类型属性。
- MockMvc构建器与之前的6.x版本不兼容。
- BeanFactoryRegistrations生成的文件在BeanFactory中定义的bean过多时可能过大。
>>>>>>> branch 'main' of git@github.com:ktyhub/thinking-in-code.git
