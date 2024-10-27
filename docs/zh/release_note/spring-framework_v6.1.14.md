# spring-framework v6.1.14
### Spring Framework是什么

Spring Framework是一个开源的Java应用程序框架，旨在简化企业级应用程序的开发。它提供了全面的基础设施支持，使开发者能够专注于业务逻辑，而不必担心底层的复杂性。Spring的核心特性包括依赖注入、面向切面编程和事务管理等，这些特性使得开发者能够构建高效、可维护和可扩展的应用程序。

### 为什么要使用Spring Framework？

使用Spring Framework的理由有很多。首先，它提供了强大的依赖注入功能，能够有效管理对象之间的关系，减少代码耦合。其次，Spring的模块化设计允许开发者根据需要选择和组合不同的功能模块，从而提高开发效率。此外，Spring还支持多种数据访问技术，如JDBC、Hibernate和JPA，使得数据库操作更加简便。最后，Spring的社区活跃，文档丰富，能够为开发者提供良好的支持。

### 入门示例

以下是一个简单的Spring应用程序示例，展示了如何使用Spring进行依赖注入：

```java
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

@Configuration
public class AppConfig {
    @Bean
    public MessageService messageService() {
        return new EmailService();
    }

    @Bean
    public UserController userController() {
        return new UserController(messageService());
    }
}

public class UserController {
    private final MessageService messageService;

    public UserController(MessageService messageService) {
        this.messageService = messageService;
    }

    public void sendMessage(String message) {
        messageService.sendMessage(message);
    }
}

public class Main {
    public static void main(String[] args) {
        ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
        UserController userController = context.getBean(UserController.class);
        userController.sendMessage("Hello, Spring!");
    }
}
```

### Spring Framework v6.1.14版本更新了什么

在Spring Framework v6.1.14版本中，进行了多项重要更新和修复，以下是一些主要内容：

#### 新特性
- 使用Locale.ROOT进行区域中立、大小写不敏感的比较。
- 改进了静态资源处理中的相对路径检查。
- CorsUtils.isCorsRequest在格式错误的Origin头时抛出未处理的IllegalArgumentException并返回500内部服务器错误。
- 跳过QualifierAnnotationAutowireCandidateResolver中的Java注解处理。
- 在MethodArgumentTypeMismatchException错误消息中包含参数名称。
- 在WebClientExtensions中保留协程上下文。
- 在ConcurrentReferenceHashMap中检测到阻塞调用。
- 关于bean后处理和急切注入的警告消息可能会建议错误的原因。

#### Bug修复
- DelegatingFilterProxy导致固定虚拟线程的问题。
- MethodParameter.getMethod()检查中可能出现的NPE。
- JMS连接工厂创建的JDK代理缺少本机图像提示。
- AotTestExecutionListener不应在@DisabledInAotMode测试类中被调用。
- 在spring-webflux中使用编码的资源路径而不是输入路径验证。

#### 文档更新
- 更新了fallback.adoc和scheduling.adoc文档。
- 修复了testing/support-jdbc.adoc中的链接。

#### 依赖升级
- 升级到Apache HttpClient 5.4。
- 升级到Apache HttpCore Reactive 5.3。
- 升级到Awaitility 4.2.2。
- 升级到Micrometer 1.12.11。
- 升级到Reactor 2023.0.11。

### 更新日志

## ⭐ 新特性
- 使用Locale.ROOT进行区域中立、大小写不敏感的比较。
- 改进了静态资源处理中的相对路径检查。
- CorsUtils.isCorsRequest在格式错误的Origin头时抛出未处理的IllegalArgumentException并返回500内部服务器错误。
- 跳过QualifierAnnotationAutowireCandidateResolver中的Java注解处理。
- 在MethodArgumentTypeMismatchException错误消息中包含参数名称。
- 在WebClientExtensions中保留协程上下文。
- 在ConcurrentReferenceHashMap中检测到阻塞调用。
- 关于bean后处理和急切注入的警告消息可能会建议错误的原因。

## 🐞 Bug修复
- DelegatingFilterProxy导致固定虚拟线程的问题。
- MethodParameter.getMethod()检查中可能出现的NPE。
- JMS连接工厂创建的JDK代理缺少本机图像提示。
- AotTestExecutionListener不应在@DisabledInAotMode测试类中被调用。
- 在spring-webflux中使用编码的资源路径而不是输入路径验证。
- org.springframework.util.ResourceUtils#toRelativeURL丢失自定义URLStreamHandler。
- 当前观察在WebClient ExchangeFilterFunction执行期间不在范围内。
- ZoneIdEditor为TypeConverterSupport抛出错误的异常类型。
- MimeMessageHelper addInline与ByteArrayResource在文件名为null时失败。
- @Cacheable在注解代码中抛出RuntimeException时抛出NullPointerException。
- 使用PathPattern时，RedirectView中缺少路径变量值。
- 响应式HttpComponentsClientHttpResponse忽略Expires cookie属性。

## 📔 文档
- 更新了fallback.adoc。
- 更新了scheduling.adoc。
- 修复了testing/support-jdbc.adoc中的链接。
- 调整了关于BeanPostProcessorChecker的Javadoc注释。
- 引用使用AspectJ的spring-framework-petclinic仓库。

## 🔨 依赖升级
- 升级到Apache HttpClient 5.4。
- 升级到Apache HttpCore Reactive 5.3。
- 升级到Awaitility 4.2.2。
- 升级到Micrometer 1.12.11。
- 升级到Reactor 2023.0.11。