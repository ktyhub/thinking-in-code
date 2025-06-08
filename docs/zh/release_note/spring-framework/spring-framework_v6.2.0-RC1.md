# spring-framework v6.2.0-RC1
### Spring Framework是什么

Spring Framework是一个开源的Java框架，旨在简化企业级应用程序的开发。它提供了一系列功能，包括依赖注入、面向切面编程、事务管理、MVC框架等，帮助开发者构建高效、可维护和可扩展的应用程序。

### 为什么要使用Spring Framework？

使用Spring Framework的原因有很多。首先，它通过依赖注入（DI）降低了组件之间的耦合，使得代码更易于测试和维护。其次，Spring的面向切面编程（AOP）功能允许开发者将横切关注点（如日志、事务管理等）与业务逻辑分离。此外，Spring还提供了强大的事务管理和安全性支持，适合构建复杂的企业应用。

### 入门示例

以下是一个简单的Spring应用程序示例：

```java
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Main {
    public static void main(String[] args) {
        ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
        MyService myService = context.getBean(MyService.class);
        myService.performAction();
    }
}
```

在这个示例中，我们创建了一个Spring应用上下文，并从中获取一个服务实例，调用其方法。

### Spring Framework v6.2.0-RC1版本更新了什么

在v6.2.0-RC1版本中，Spring Framework进行了多项重要更新，包括：

- 更新`mime.types`并移除注释条目。
- 提供在使用MockMvc时访问未展开的URI模板的功能。
- 避免在AnnotationTypeMapping中分配空数组。
- 引入`DynamicPropertyRegistrar`作为`DynamicPropertyRegistry`的替代。
- 更新Content-Length，当通过拦截器更改请求体时。
- 修复了在多线程环境中从`StaticApplicationContext`的Bean Factory获取Bean时抛出的`BeanCurrentlyInCreationException`异常。

### 更新日志

## ⭐ 新特性
- 更新`mime.types`并移除注释条目。
- 提供在使用MockMvc时访问未展开的URI模板的功能。
- 避免在AnnotationTypeMapping中分配空数组。
- 引入`DynamicPropertyRegistrar`作为`DynamicPropertyRegistry`的替代。
- 避免在MethodParameter字段中存储重复的空数组。
- 避免在ResolvableType中分配空数组。
- 当通过拦截器更改请求体时更新Content-Length。
- UrlHandlerFilter不应从根URL中删除尾部斜杠。
- 在`ReflectionTestUtils`中调用非代理方法时解包CGLIB代理。
- 将eTag格式化逻辑重构为静态工具方法。
- 封装eTag比较逻辑。
- 在`http.client`包中统一Reactor客户端类名。
- 允许在ResponseBodyEmitter上使用多个监听器。
- 尽可能通过公共声明类型调用init/destroy/SpEL方法。
- 创建WebFlux等效过滤器以处理带尾部斜杠的URL。
- 为WebMvc功能端点提供更多通过ServerResponse流式传输的方式。

## 🐞 Bug修复
- 当多个线程从`StaticApplicationContext`的Bean Factory获取Bean时，抛出`BeanCurrentlyInCreationException`异常。

## 📔 文档
- 修订Spring JMX注解的参考文档。
- 为`ReflectionHints.registerForInterfaces()`添加Javadoc。
- 修订参考手册中的AOP代理部分。
- 整合参考手册中的自我注入文档。
- 扩展缩写`FQN`和`FQCN`。
- 记录WebFlux不支持前向重定向。
- 记录TaskDecorator与TaskExecutors的使用。

## 🔨 依赖升级
- 升级到JUnit 5.11。
- 升级到Micrometer 1.14.0-M3。
- 升级到Reactor 2024.0.0-M6。