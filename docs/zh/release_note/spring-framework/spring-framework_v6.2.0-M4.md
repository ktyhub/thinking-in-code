# spring-framework v6.2.0-M4
### Spring Framework是什么？

Spring Framework是一个开源的Java企业级应用程序开发框架，旨在简化Java应用程序的开发过程。它提供了一系列功能，包括依赖注入、面向切面编程、事务管理、MVC框架等，使得开发者能够更高效地构建可维护、可扩展的应用程序。Spring的核心特性是其控制反转（IoC）容器，允许开发者以松耦合的方式管理对象的生命周期和依赖关系。

### 为什么要使用Spring Framework？

使用Spring Framework的原因有很多。首先，它提供了强大的依赖注入功能，能够帮助开发者更好地管理对象之间的关系，减少代码的耦合度。其次，Spring的模块化设计使得开发者可以根据需要选择使用特定的功能模块，而不必引入整个框架。此外，Spring还提供了丰富的社区支持和文档，帮助开发者快速上手和解决问题。最后，Spring的灵活性和可扩展性使得它适用于各种规模的项目，从小型应用到大型企业级系统。

### 入门示例

下面是一个简单的Spring Framework入门示例，展示如何使用Spring来创建一个基本的应用程序。

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

在这个示例中，我们定义了一个简单的`HelloWorld`类，并使用Spring的`@Component`注解将其标记为一个Spring管理的组件。然后，我们在`Main`类中创建了一个应用上下文，并获取`HelloWorld`的实例，最后调用`sayHello`方法输出“Hello, World!”。

### Spring Framework v6.2.0-M4版本更新了什么

在Spring Framework v6.2.0-M4版本中，进行了多项重要更新和改进，包括：

- 添加对整个JSON文档转换的支持，而无需使用JSONPath。
- 支持Protobuf 4.x。
- 在释放保存点失败时不再吞噬异常。
- 能够为DefaultLifecycleProcessor中的特定阶段提供扩展超时。
- 允许使用AssertJ的AssertFactory转换JSON内容。
- 添加对在Kotlin companion object中定义的BeanPostProcessor的支持。
- 支持在接口中定义的@TestBean工厂方法。
- 允许为反应式JDK客户端设置超时。
- 修订@TestBean工厂方法的基于约定的语义。
- 支持将字段名称作为@TestBean、MockitoBean和MockitoSpyBean的后备限定符。
- 在RequestContext中内部使用getMessageSource。
- MockMvc不再需要为自定义方法提供String httpMethod类型的方法。
- 允许MockMvcTester在不需要静态导入的情况下准备查询。
- 重新设计Bean覆盖功能，以更好地与TCF上下文缓存配合使用。
- 引入API以在单例实例化之前初始化BeanFactory。
- 引入静态MultiValueMap工厂方法。
- 使公共API中使用JSONAssert成为可选。
- 精细化AOT过程中的异常处理，以提供额外的上下文。
- 处理MVC功能端点抛出的ResponseStatusException。
- 支持从请求头进行数据绑定。
- 在解析Accept-Language头时忽略尾随分号。
- 在RestClient中引入请求属性。
- 使WebSocketMessageBrokerStats可选择性地将统计信息导出到micrometer。
- 为反应式服务器添加分区cookie属性支持。
- 为调度任务添加执行元数据。

### 更新日志

## ⭐ 新特性
- 添加对整个JSON文档转换的支持，而无需使用JSONPath。
- 支持Protobuf 4.x。
- 在释放保存点失败时不再吞噬异常。
- 能够为DefaultLifecycleProcessor中的特定阶段提供扩展超时。
- 允许使用AssertJ的AssertFactory转换JSON内容。
- 添加对在Kotlin companion object中定义的BeanPostProcessor的支持。
- 支持在接口中定义的@TestBean工厂方法。
- 允许为反应式JDK客户端设置超时。
- 修订@TestBean工厂方法的基于约定的语义。
- 支持将字段名称作为@TestBean、MockitoBean和MockitoSpyBean的后备限定符。
- 在RequestContext中内部使用getMessageSource。
- MockMvc不再需要为自定义方法提供String httpMethod类型的方法。
- 允许MockMvcTester在不需要静态导入的情况下准备查询。
- 重新设计Bean覆盖功能，以更好地与TCF上下文缓存配合使用。
- 引入API以在单例实例化之前初始化BeanFactory。
- 引入静态MultiValueMap工厂方法。
- 使公共API中使用JSONAssert成为可选。
- 精细化AOT过程中的异常处理，以提供额外的上下文。
- 处理MVC功能端点抛出的ResponseStatusException。
- 支持从请求头进行数据绑定。
- 在解析Accept-Language头时忽略尾随分号。
- 在RestClient中引入请求属性。
- 使WebSocketMessageBrokerStats可选择性地将统计信息导出到micrometer。
- 为反应式服务器添加分区cookie属性支持。
- 为调度任务添加执行元数据。

## 🐞 Bug修复
- 阻止组件扫描的异常应提供受影响的配置类。
- 使用REPLACE_OR_CREATE_DEFINITION的Bean覆盖和按类型查找失败，如果没有找到匹配项。
- Bean覆盖工厂后处理与FactoryBean不兼容。
- 在多层@Nested层次结构中未找到@TestBean工厂方法。
- 支持在不透明URL中进行查询。
- AbstractJsonContentAssert应允许在JSON内容上运行satistfies，而不是原始字符串。
- WebFlux中的异常处理内容协商失败。

## 📔 文档
- 修复WebTestClient expectedXml中的拼写错误。

## 🔨 依赖升级
- 升级到Micrometer 1.13.1。
- 升级到Reactor 2024.0.0-M3。