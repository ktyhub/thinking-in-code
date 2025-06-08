# spring-framework v6.1.10
<<<<<<< HEAD
## ⭐ 新特性

- 在关闭时，`PersistenceExceptionTranslationInterceptor`中的防御性`PersistenceExceptionTranslator` bean检索 [#33067](https://github.com/spring-projects/spring-framework/issues/33067)
- `DisconnectedClientHelper`支持所有"connection reset"异常短语 [#33064](https://github.com/spring-projects/spring-framework/issues/33064)

## 🐞 Bug修复

- 使用RestClient记录了重复的观察 [#33068](https://github.com/spring-projects/spring-framework/issues/33068)
- 自Spring Framework 6.1.3起，WebFlux验证需要Servlet API [#33043](https://github.com/spring-projects/spring-framework/issues/33043)
- 在意外的`@Autowired` `@Bean`方法中带有`@Value`参数时，没有符合类型'java.lang.String'的bean [#33030](https://github.com/spring-projects/spring-framework/issues/33030)
- 当多次调用时，ConfigurationClassEnhancer不使用正确的ClassLoader [#33024](https://github.com/spring-projects/spring-framework/issues/33024)

## 📔 文档

- Spring框架文档中的注解驱动监听器端点部分的拼写错误 [#33050](https://github.com/spring-projects/spring-framework/issues/33050)
- Spring框架文档中的容器扩展点部分引用了错误的属性名 [#33037](https://github.com/spring-projects/spring-framework/issues/33037)
- 修复注释中的拼写错误 [#33036](https://github.com/spring-projects/spring-framework/pull/33036)
- ApplicationContextEvent的javadoc中的构造函数详情不正确 [#33032](https://github.com/spring-projects/spring-framework/issues/33032)

## ❤️ 贡献者

感谢所有参与此次发布的贡献者：

github-actions[bot] 和 [tafjwr](https://github.com/tafjwr)
=======
### Spring Framework是什么？

Spring Framework是一个开源的Java企业级应用程序开发框架，旨在简化Java开发过程。它提供了全面的基础设施支持，使开发者能够专注于业务逻辑，而不必过多关注底层细节。Spring的核心特性包括依赖注入、面向切面编程、事务管理和MVC框架等，广泛应用于构建企业级应用程序和微服务架构。

### 为什么要使用Spring Framework？

使用Spring Framework的原因有很多。首先，它提供了强大的依赖注入功能，使得组件之间的耦合度降低，便于测试和维护。其次，Spring的模块化设计允许开发者根据需要选择和使用特定的功能模块。此外，Spring还支持多种数据访问技术，包括JDBC、Hibernate和JPA，极大地提高了开发效率。最后，Spring的社区活跃，文档丰富，提供了大量的学习资源和支持。

### 入门示例

下面是一个简单的Spring应用程序示例，展示了如何使用Spring进行依赖注入：

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
        ApplicationContext context = new AnnotationConfigApplicationContext(Main.class);
        HelloWorld helloWorld = context.getBean(HelloWorld.class);
        helloWorld.sayHello();
    }
}
```

在这个示例中，我们定义了一个`HelloWorld`类，并使用Spring的注解来标记它为一个组件。通过`ApplicationContext`获取`HelloWorld`的实例，并调用`sayHello`方法。

### Spring Framework v6.1.10版本更新了什么

在Spring Framework v6.1.10版本中，进行了以下重要更新：

#### 新特性
- 防御性地在关闭时从`PersistenceExceptionTranslationInterceptor`中检索`PersistenceExceptionTranslator` bean。
- 在`DisconnectedClientHelper`中支持所有“连接重置”异常短语。

#### Bug修复
- 修复了使用RestClient时记录重复观察的问题。
- WebFlux验证自Spring Framework 6.1.3以来需要Servlet API。
- 修复了在意外使用`@Autowired`的`@Bean`方法时没有合格的`java.lang.String`类型bean的问题。
- 修复了`ConfigurationClassEnhancer`在多次调用时未使用正确的ClassLoader的问题。

#### 文档
- 修复了Spring Framework文档中关于注解驱动监听器端点部分的拼写错误。
- 修复了Spring Framework文档中容器扩展点部分引用错误属性名称的问题。
- 修复了注释中的拼写错误。
- 修复了`ApplicationContextEvent`的javadoc中构造函数细节不正确的问题。

### 更新日志

## 新特性
- 防御性地在关闭时从`PersistenceExceptionTranslationInterceptor`中检索`PersistenceExceptionTranslator` bean。
- 在`DisconnectedClientHelper`中支持所有“连接重置”异常短语。

## Bug修复
- 修复了使用RestClient时记录重复观察的问题。
- WebFlux验证自Spring Framework 6.1.3以来需要Servlet API。
- 修复了在意外使用`@Autowired`的`@Bean`方法时没有合格的`java.lang.String`类型bean的问题。
- 修复了`ConfigurationClassEnhancer`在多次调用时未使用正确的ClassLoader的问题。

## 文档
- 修复了Spring Framework文档中关于注解驱动监听器端点部分的拼写错误。
- 修复了Spring Framework文档中容器扩展点部分引用错误属性名称的问题。
- 修复了注释中的拼写错误。
- 修复了`ApplicationContextEvent`的javadoc中构造函数细节不正确的问题。
>>>>>>> branch 'main' of git@github.com:ktyhub/thinking-in-code.git
