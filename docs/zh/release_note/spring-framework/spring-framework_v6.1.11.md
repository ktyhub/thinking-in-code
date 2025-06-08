# spring-framework v6.1.11
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