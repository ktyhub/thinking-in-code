# spring-framework v6.2.0-M5
<<<<<<< HEAD
```markdown
## ⭐ 新特性

- 在 SimpleInstantiationStrategy 中统一处理当前工厂方法 [#33192](https://github.com/spring-projects/spring-framework/issues/33192)
- 在 SpEL 的 FunctionReference 中解包 InvocationTargetException [#33174](https://github.com/spring-projects/spring-framework/issues/33174)
- 支持渲染多个片段 [#33162](https://github.com/spring-projects/spring-framework/issues/33162)
- 允许使用现有头创建 MessageHeaderAccessor [#33153](https://github.com/spring-projects/spring-framework/issues/33153)
- 在 AssertJ 支持中泛化 HTTP 消息内容的消息转换 [#33148](https://github.com/spring-projects/spring-framework/issues/33148)
- 允许扫描任意包以进行反射使用 [#33132](https://github.com/spring-projects/spring-framework/issues/33132)
- 支持在 @TestBean 中通过全限定名引用外部方法 [#33125](https://github.com/spring-projects/spring-framework/issues/33125)
- 根据编码在 MVC FreeMarkerView 中更新 Content-Type [#33119](https://github.com/spring-projects/spring-framework/issues/33119)
- 引入 SmartHttpMessageConverter [#33118](https://github.com/spring-projects/spring-framework/issues/33118)
- 支持在 @Sql 脚本路径中使用属性占位符 [#33114](https://github.com/spring-projects/spring-framework/issues/33114)
- 在 WebFlux 中拒绝 ModelMap 参数类型 [#33109](https://github.com/spring-projects/spring-framework/issues/33109)
- 在 FreeMarkerView 实现中设置 output_encoding [#33106](https://github.com/spring-projects/spring-framework/issues/33106)
- 允许在 FreeMarker 支持中使用 Charset 设置编码 [#33102](https://github.com/spring-projects/spring-framework/issues/33102)
- 允许自定义 ObjectProvider 实现仅声明一个方法 [#33070](https://github.com/spring-projects/spring-framework/issues/33070)
- 在 MockMvcTester 中添加对已解析异常运行断言的支持 [#33060](https://github.com/spring-projects/spring-framework/issues/33060)
- 在 MockMvcTester 中添加专用的 MvcResult 打印支持 [#33059](https://github.com/spring-projects/spring-framework/issues/33059)
- 提供一种方法来确定上下文是否正在关闭 [#33058](https://github.com/spring-projects/spring-framework/issues/33058)
- 如果需要，MockHttpServletRequestBuilder 应从父级合并 URI [#33057](https://github.com/spring-projects/spring-framework/issues/33057)
- 如果 @Bean 方法同时声明 @Autowired，则快速失败 [#33051](https://github.com/spring-projects/spring-framework/issues/33051)
- 在 MockMvcTester 中添加专用的异步调度支持 [#33040](https://github.com/spring-projects/spring-framework/issues/33040)
- 在 MockMvcTester 中添加专用的多部分支持 [#33027](https://github.com/spring-projects/spring-framework/issues/33027)
- spring-form JSP 标签应根据响应字符编码转义 HTML 值 [#33023](https://github.com/spring-projects/spring-framework/pull/33023)
- 当响应体为空且状态码 >= 400 时，SimpleClientHttpResponse 抛出 IOException [#33020](https://github.com/spring-projects/spring-framework/issues/33020)
- MockHttpServletResponse 默认使用 ISO-8859-1 处理 JSON，而框架的其他部分默认使用 UTF-8 [#33019](https://github.com/spring-projects/spring-framework/issues/33019)
- 在 Spring MVC 中使用 Flux 流式传输时，将上下文传播到消息转换器 [#32813](https://github.com/spring-projects/spring-framework/issues/32813)
- 在 RestClient 中将 URI 解析为 baseUrl [#32679](https://github.com/spring-projects/spring-framework/issues/32679)
- 为 List、Map 和数组参数实现构造函数数据绑定支持 [#32426](https://github.com/spring-projects/spring-framework/issues/32426)
- 实现 Eclipse Jetty 核心 HTTP 处理器适配器 [#32097](https://github.com/spring-projects/spring-framework/pull/32097)
- 增加对生成文件注册的更好控制 [#31331](https://github.com/spring-projects/spring-framework/issues/31331)
- 提供对反射提示注册的更具声明性的控制 [#29194](https://github.com/spring-projects/spring-framework/issues/29194)
- 在 @Nullable 中用 @CheckForNull 替换 @Nonnull(when = When.MAYBE) [#27183](https://github.com/spring-projects/spring-framework/issues/27183)
- 为 Protobuf 编解码器添加 JSON 支持 [#25457](https://github.com/spring-projects/spring-framework/issues/25457)

## 🐞 Bug 修复

- AntPathPatternMatcher 在变量匹配和比较器中硬编码了 "/" 分隔符 [#33085](https://github.com/spring-projects/spring-framework/pull/33085)
- AOT 为具有嵌套未解析泛型的泛型类型生成原始类型 [#33069](https://github.com/spring-projects/spring-framework/issues/33069)
- 解包 Kotlin 内联值类返回值 [#33026](https://github.com/spring-projects/spring-framework/issues/33026)
- Kotlin 序列化支持未考虑空安全性 [#33016](https://github.com/spring-projects/spring-framework/issues/33016)

## 📔 文档

- 在参考文档目录中将测试移到其他框架关注点之下 [#33083](https://github.com/spring-projects/spring-framework/issues/33083)
- 将 Servlet HTTP 消息转换移到自己的章节 [#33063](https://github.com/spring-projects/spring-framework/issues/33063)
- 文档化 MockMvc 的 AssertJ 支持 [#32454](https://github.com/spring-projects/spring-framework/issues/32454)

## 🔨 依赖升级

- 升级到 HtmlUnit 4.2.0 [#33081](https://github.com/spring-projects/spring-framework/issues/33081)
- 升级到 Kotlin Coroutines 1.8.1 [#33176](https://github.com/spring-projects/spring-framework/issues/33176)
- 升级到 Micrometer 1.14.0-M1 [#33170](https://github.com/spring-projects/spring-framework/issues/33170)
- 升级到 Reactor 2024.0.0-M4 [#33171](https://github.com/spring-projects/spring-framework/issues/33171)

## ❤️ 贡献者

感谢所有为此版本工作过的贡献者：

[gregw](https://github.com/gregw), [stonio](https://github.com/stonio), 和 [tafjwr](https://github.com/tafjwr)
```
=======
### Spring Framework是什么？

Spring Framework是一个开源的Java框架，旨在简化企业级应用程序的开发。它提供了一系列功能，包括依赖注入、面向切面编程、事务管理、以及与各种持久化技术的集成。Spring的核心理念是通过简化Java EE的复杂性，使开发者能够更专注于业务逻辑的实现。

### 为什么要使用Spring Framework？

使用Spring Framework的原因有很多。首先，它提供了强大的依赖注入功能，使得组件之间的耦合度降低，增强了代码的可测试性和可维护性。其次，Spring支持多种编程模型，包括Web应用程序、RESTful服务和微服务架构。此外，Spring的生态系统非常丰富，提供了大量的扩展库和工具，如Spring Boot、Spring Cloud等，进一步简化了开发过程。最后，Spring拥有活跃的社区支持，开发者可以轻松找到解决方案和最佳实践。

### 入门示例

以下是一个简单的Spring应用程序示例，展示了如何使用Spring进行依赖注入：

```java
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.stereotype.Component;

@Component
class HelloWorld {
    public void sayHello() {
        System.out.println("Hello, World!");
    }
}

public class Main {
    public static void main(String[] args) {
        ApplicationContext context = new AnnotationConfigApplicationContext(HelloWorld.class);
        HelloWorld helloWorld = context.getBean(HelloWorld.class);
        helloWorld.sayHello();
    }
}
```

在这个示例中，我们定义了一个`HelloWorld`类，并使用Spring的`@Component`注解将其标记为一个Spring组件。然后，我们在`Main`类中创建了一个Spring应用上下文，并获取`HelloWorld`的实例，最后调用`sayHello`方法。

### Spring Framework v6.2.0-M5版本更新了什么

在Spring Framework v6.2.0-M5版本中，进行了多项重要更新和改进，包括：

#### 新特性
- 统一处理`SimpleInstantiationStrategy`中的当前工厂方法。
- 在SpEL的`FunctionReference`中解包`InvocationTargetException`。
- 支持渲染多个片段。
- 允许使用现有头部创建`MessageHeaderAccessor`。
- 在AssertJ支持中对HTTP消息内容进行消息转换的泛化。
- 允许扫描任意包以进行反射使用。
- 支持在`@TestBean`中通过完全限定名称引用外部方法。
- 基于`encoding`更新MVC的`FreeMarkerView`中的`Content-Type`。
- 引入`SmartHttpMessageConverter`。
- 支持在`@Sql`脚本路径中使用属性占位符。
- 在WebFlux中拒绝`ModelMap`参数类型。

#### Bug修复
- 修复了`AntPathPatternMatcher`在变量匹配和比较器中硬编码的"/"分隔符问题。
- AOT生成的原始类型对于具有嵌套未解析泛型的泛型类型进行了修复。
- 解包Kotlin内联值类的返回值。
- Kotlin序列化支持未考虑空安全性的问题。

#### 文档
- 在参考文档的目录中将测试部分移至其他框架关注点之下。
- 将Servlet HTTP消息转换移至其自己的部分。
- 文档化MockMvc的AssertJ支持。

#### 依赖升级
- 升级到HtmlUnit 4.2.0。
- 升级到Kotlin Coroutines 1.8.1。
- 升级到Micrometer 1.14.0-M1。
- 升级到Reactor 2024.0.0-M4。

### 更新日志

## ⭐ 新特性
- 统一处理`SimpleInstantiationStrategy`中的当前工厂方法。
- 在SpEL的`FunctionReference`中解包`InvocationTargetException`。
- 支持渲染多个片段。
- 允许使用现有头部创建`MessageHeaderAccessor`。
- 在AssertJ支持中对HTTP消息内容进行消息转换的泛化。
- 允许扫描任意包以进行反射使用。
- 支持在`@TestBean`中通过完全限定名称引用外部方法。
- 基于`encoding`更新MVC的`FreeMarkerView`中的`Content-Type`。
- 引入`SmartHttpMessageConverter`。
- 支持在`@Sql`脚本路径中使用属性占位符。
- 在WebFlux中拒绝`ModelMap`参数类型。
- 在`FreeMarkerView`实现中设置`output_encoding`。
- 允许在FreeMarker支持中使用`Charset`设置编码。
- 让自定义`ObjectProvider`实现仅声明一个方法。
- 在`MockMvcTester`中添加对已解析异常进行断言的支持。
- 在`MockMvcTester`中添加专门支持打印`MvcResult`。
- 提供一种方法来确定上下文是否正在关闭。
- `MockHttpServletRequestBuilder`在必要时应合并父URI。
- 如果`@Bean`方法同时声明`@Autowired`，则快速失败。
- 为`MockMvcTester`添加专门的异步调度支持。
- 为`MockMvcTester`添加专门的多部分支持。
- `spring-form` JSP标签应根据响应字符编码转义HTML值。
- `SimpleClientHttpResponse`在响应体为空且状态码大于等于400时抛出`IOException`。
- `MockHttpServletResponse`在JSON中默认为ISO-8859-1，而框架的其余部分默认为UTF-8。
- 在Spring MVC中使用Flux流式传输时将上下文传播到消息转换器。
- 在RestClient中解析URI到baseUrl。
- 对List、Map和数组参数的构造函数数据绑定支持。
- 实现Eclipse Jetty核心HTTP处理程序适配器。
- 更好地控制生成文件的注册。
- 提供对反射提示注册的更具声明性的控制。
- 将`@Nonnull(when = When.MAYBE)`替换为`@CheckForNull`在`@Nullable`中。
- 为Protobuf编解码器添加JSON支持。

## 🐞 Bug修复
- 修复了`AntPathPatternMatcher`在变量匹配和比较器中硬编码的"/"分隔符问题。
- AOT生成的原始类型对于具有嵌套未解析泛型的泛型类型进行了修复。
- 解包Kotlin内联值类的返回值。
- Kotlin序列化支持未考虑空安全性的问题。

## 📔 文档
- 在参考文档的目录中将测试部分移至其他框架关注点之下。
- 将Servlet HTTP消息转换移至其自己的部分。
- 文档化MockMvc的AssertJ支持。

## 🔨 依赖升级
- 升级到HtmlUnit 4.2.0。
- 升级到Kotlin Coroutines 1.8.1。
- 升级到Micrometer 1.14.0-M1。
- 升级到Reactor 2024.0.0-M4。
>>>>>>> branch 'main' of git@github.com:ktyhub/thinking-in-code.git
