# spring-framework v6.1.13
### Spring Framework是什么？

Spring Framework是一个开源的Java框架，旨在简化企业级应用程序的开发。它提供了一系列功能，包括依赖注入、面向切面编程、事务管理和MVC（模型-视图-控制器）架构，使开发者能够更轻松地构建可扩展和高效的应用程序。

### 为什么要使用Spring Framework？

使用Spring Framework的原因有很多。首先，它的依赖注入特性可以减少代码之间的耦合，使得应用程序更易于测试和维护。其次，Spring的模块化设计允许开发者根据需要选择和使用不同的功能。此外，Spring还提供了强大的社区支持和丰富的文档，使得开发者能够快速上手并解决问题。

### 入门示例

以下是一个简单的Spring应用程序示例，展示了如何使用Spring进行依赖注入：

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

在这个示例中，`AppConfig`类定义了Spring的配置，而`MyService`是一个简单的服务类，执行某个操作。

### Spring Framework v6.1.13版本更新了什么

在Spring Framework v6.1.13版本中，进行了多项重要更新，包括：

#### 新特性
- SmartLifecycle#stop抛出的错误导致不必要的关闭超时等待。
- 对功能端点的资源处理进行了更新。
- 在WebAsyncManager中停止记录结果。
- Spring Native不支持具有Kotlin默认值的方法处理。

#### Bug修复
- 确保在重定向时使用指定的状态码。
- 在Servlet和反应式栈中不一致的X-Forwarded-Prefix处理。
- ServerHttpObservationFilter未能注册新异步操作。
- 撤销对已弃用的rawStatusCode方法的移除。
- PathMatchingResourcePatternResolver不再跟随符号链接。
- 当客户端断开连接时，SseEmitter和StandardServletAsyncWebRequest之间的死锁问题。
- RestClient在处理请求时未打开作用域。
- 使用ParameterizedTypeReference时，WebTestClient泄漏。

#### 文档更新
- 文档中修复了CRaC的固定速率调度。
- 更新了参考手册中SpEL评估章节的信息。
- 停止在参考手册中记录使用-debug编译器标志。
- 在参考手册中使用离散标题而不是标题块。
- 修复了参考手册中@ImportResource的示例。
- 修复了CDS文档中的拼写错误。
- 修复了章节介绍的链接。
- 改进了通过Servlet请求参数与@RequestBody读取表单数据的文档。

#### 依赖升级
- 升级到Kotlin 1.9.25。
- 升级到Micrometer 1.12.10。
- 升级到Objenesis 3.4。
- 升级到Reactor 2023.0.10。

### 更新日志

## ⭐ 新特性
- SmartLifecycle#stop抛出的错误导致不必要的关闭超时等待。
- 对功能端点的资源处理进行了更新。
- 在WebAsyncManager中停止记录结果。
- Spring Native不支持具有Kotlin默认值的方法处理。

## 🐞 Bug修复
- 确保在重定向时使用指定的状态码。
- 在Servlet和反应式栈中不一致的X-Forwarded-Prefix处理。
- ServerHttpObservationFilter未能注册新异步操作。
- 撤销对已弃用的rawStatusCode方法的移除。
- PathMatchingResourcePatternResolver不再跟随符号链接。
- 当客户端断开连接时，SseEmitter和StandardServletAsyncWebRequest之间的死锁问题。
- RestClient在处理请求时未打开作用域。
- 使用ParameterizedTypeReference时，WebTestClient泄漏。

## 📔 文档
- 文档中修复了CRaC的固定速率调度。
- 更新了参考手册中SpEL评估章节的信息。
- 停止在参考手册中记录使用-debug编译器标志。
- 在参考手册中使用离散标题而不是标题块。
- 修复了参考手册中@ImportResource的示例。
- 修复了CDS文档中的拼写错误。
- 修复了章节介绍的链接。
- 改进了通过Servlet请求参数与@RequestBody读取表单数据的文档。

## 🔨 依赖升级
- 升级到Kotlin 1.9.25。
- 升级到Micrometer 1.12.10。
- 升级到Objenesis 3.4。
- 升级到Reactor 2023.0.10。