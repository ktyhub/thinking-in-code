# spring-framework v6.1.11
<<<<<<< HEAD
```markdown
## ⭐ 新功能

- 确保在 SpEL 的 `ReflectionHelper` 中，`MethodHandle` 的可变参数组件类型不为 `null` [#33193](https://github.com/spring-projects/spring-framework/issues/33193)
- 在响应期间遇到 Reactor-Netty 的 `PrematureCloseException` 时，WebClient 异常信息混乱 [#33127](https://github.com/spring-projects/spring-framework/issues/33127)
- 当发现无效的 factoryBeanObjectType 属性时，在异常中包含 bean 名称 [#33117](https://github.com/spring-projects/spring-framework/issues/33117)
- 为响应式缓存切面使用错误处理器 [#33073](https://github.com/spring-projects/spring-framework/pull/33073)
- `getTypeForFactoryMethod` 应捕获 `NoClassDefFoundError` [#33075](https://github.com/spring-projects/spring-framework/issues/33075)

## 🐞 Bug 修复

- SpEL 无法调用带数组的可变参数 `MethodHandle` 函数 [#33191](https://github.com/spring-projects/spring-framework/issues/33191)
- SpEL 无法调用带零可变参数的 `MethodHandle` 函数 [#33190](https://github.com/spring-projects/spring-framework/issues/33190)
- 嵌套的 bean 实例供应者调用不保留以前的工厂方法 [#33180](https://github.com/spring-projects/spring-framework/issues/33180)
- `DefaultErrorResponseBuilder` 未实现 `headers(Consumer)` [#33156](https://github.com/spring-projects/spring-framework/pull/33156)
- 修复 Set 方法参数违规的适配问题 [#33150](https://github.com/spring-projects/spring-framework/pull/33150)
- 使用 kotlinx-serialization 时，Web 控制器调用无效主体导致 500 而不是 400 [#33138](https://github.com/spring-projects/spring-framework/issues/33138)
- "file:." 无法解析为 `java.nio.file.Path` （而普通的 "." 值解析为类路径根） [#33124](https://github.com/spring-projects/spring-framework/issues/33124)
- Mockito 模拟错误地初始化为带 AspectJ 切面的 CGLIB 代理 [#33113](https://github.com/spring-projects/spring-framework/issues/33113)
- 修复当 adaptConstraintViolations=true 时返回值验证中的 ClassCastException [#33105](https://github.com/spring-projects/spring-framework/pull/33105)
- Spring 协程 AOP 不兼容 `@Transactional` [#33095](https://github.com/spring-projects/spring-framework/issues/33095)
- ReactorClientHttpConnector 为每个请求创建新的 HttpClient [#33093](https://github.com/spring-projects/spring-framework/issues/33093)
- 请求体建议 bean 不再传播 Trace 和 Span IDs [#33091](https://github.com/spring-projects/spring-framework/issues/33091)
- 如果 bean 定义为 null，`LocalContainerEntityManagerFactoryBean` 的早期初始化失败 [#33082](https://github.com/spring-projects/spring-framework/issues/33082)
- 如果原因是 `null`，`ReactorNettyClientRequest.convertException` 应包括原始异常 [#33080](https://github.com/spring-projects/spring-framework/issues/33080)
- SpEL 错误地按逗号拆分字符串参数以调用 `Object...` 可变参数方法 [#33013](https://github.com/spring-projects/spring-framework/issues/33013)
- 如果使用字节数组，ProtobufMessageConverter 无法解析 JSON 负载 [#27408](https://github.com/spring-projects/spring-framework/issues/27408)

## 📔 文档

- 统一 URI 编码部分的措辞 [#33166](https://github.com/spring-projects/spring-framework/pull/33166)
- 记录 `ModelMap` 不是 WebFlux 中支持的参数类型 [#33107](https://github.com/spring-projects/spring-framework/issues/33107)
- Spring 框架文档中方法注入部分的示例引用了错误的 bean 名称 [#33096](https://github.com/spring-projects/spring-framework/issues/33096)
- 资源写入器不考虑 `InputStreamResource` 的子类以绕过内容长度 [#33089](https://github.com/spring-projects/spring-framework/issues/33089)
- 改进 FreeMarker 支持中有关编码的文档 [#33071](https://github.com/spring-projects/spring-framework/issues/33071)
- WebFlux 中的验证失败异常与文档不匹配 [#33061](https://github.com/spring-projects/spring-framework/issues/33061)

## 🔨 依赖升级

- 升级到 Kotlin 1.9.24 [#33177](https://github.com/spring-projects/spring-framework/issues/33177)
- 升级到 Kotlin Serialization 1.6.3 [#33175](https://github.com/spring-projects/spring-framework/issues/33175)
- 升级到 Micrometer 1.12.8 [#33168](https://github.com/spring-projects/spring-framework/issues/33168)
- 升级到 Reactor 2023.0.8 [#33169](https://github.com/spring-projects/spring-framework/issues/33169)

## ❤️ 贡献者

感谢所有参与此次发布的贡献者：
TAKETODAY、hunhee98、imvtsl、snussbaumer 和 zizare
```
=======
### Spring Framework是什么？

Spring Framework是一个开源的Java应用程序框架，旨在简化企业级应用程序的开发。它提供了一系列功能，包括依赖注入、面向切面编程、事务管理、持久化支持等，使开发者能够更轻松地构建和管理复杂的应用程序。Spring的核心理念是“简化开发”，通过提供灵活的配置和模块化的架构，帮助开发者专注于业务逻辑，而不是底层的基础设施。

### 为什么要使用Spring Framework？

使用Spring Framework的原因有很多。首先，它提供了强大的依赖注入功能，使得组件之间的耦合度降低，便于测试和维护。其次，Spring支持多种编程模型，包括传统的Java EE、Spring MVC、Spring Boot等，适用于不同类型的应用程序。此外，Spring的社区活跃，文档丰富，提供了大量的第三方库和工具，能够加速开发过程。最后，Spring的灵活性和可扩展性使得它能够适应不断变化的业务需求。

### 入门示例

以下是一个简单的Spring应用程序示例，展示了如何使用Spring进行依赖注入：

```java
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.stereotype.Component;

@Component
class HelloWorld {
    public void sayHello() {
        System.out.println("Hello, Spring!");
    }
}

public class Main {
    public static void main(String[] args) {
        ApplicationContext context = new AnnotationConfigApplicationContext(Main.class);
        HelloWorld helloWorld = context.getBean(HelloWorld.class);
        helloWorld.sayHello();
    }
}
```

在这个示例中，我们定义了一个`HelloWorld`类，并使用`@Component`注解将其标记为Spring管理的组件。通过`ApplicationContext`，我们可以获取到`HelloWorld`的实例并调用其方法。

### Spring Framework v6.1.11版本更新了什么

在Spring Framework v6.1.11版本中，进行了多项重要更新和修复，具体如下：

#### 新特性
- 确保SpEL的`ReflectionHelper`中的varargs组件类型不为null。
- 修复Reactor-Netty中的WebClient异常消息，使其更清晰。
- 当发现无效的`factoryBeanObjectType`属性时，异常中包含bean名称。
- 对于反应式缓存方面，使用错误处理程序。
- `getTypeForFactoryMethod`应捕获`NoClassDefFoundError`。

#### Bug修复
- 修复SpEL无法使用数组调用varargs的`MethodHandle`函数的问题。
- 修复嵌套bean实例供应商调用未保留先前工厂方法的问题。
- 修复Web控制器调用无效主体时返回500而不是400的问题。

#### 文档
- 统一URI编码部分的措辞。
- 记录`ModelMap`在WebFlux中不是支持的参数类型。

#### 依赖升级
- 升级到Kotlin 1.9.24。
- 升级到Micrometer 1.12.8。

### 更新日志

## ⭐ 新特性
- 确保SpEL的`ReflectionHelper`中的varargs组件类型不为null。
- 修复Reactor-Netty中的WebClient异常消息，使其更清晰。
- 当发现无效的`factoryBeanObjectType`属性时，异常中包含bean名称。
- 对于反应式缓存方面，使用错误处理程序。
- `getTypeForFactoryMethod`应捕获`NoClassDefFoundError`。

## 🐞 Bug修复
- 修复SpEL无法使用数组调用varargs的`MethodHandle`函数的问题。
- 修复嵌套bean实例供应商调用未保留先前工厂方法的问题。
- 修复Web控制器调用无效主体时返回500而不是400的问题。

## 📔 文档
- 统一URI编码部分的措辞。
- 记录`ModelMap`在WebFlux中不是支持的参数类型。

## 🔨 依赖升级
- 升级到Kotlin 1.9.24。
- 升级到Micrometer 1.12.8。
>>>>>>> branch 'main' of git@github.com:ktyhub/thinking-in-code.git
