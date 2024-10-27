# spring-framework v6.2.0-RC3
### Spring Framework是什么？

Spring Framework是一个开源的Java企业级应用程序开发框架，旨在简化Java开发，提供全面的基础设施支持。它通过依赖注入（DI）和面向切面编程（AOP）等核心特性，帮助开发者构建高效、可维护的应用程序。Spring的模块化设计使得开发者可以根据需求选择合适的组件，从而实现灵活的架构。

### 为什么要使用Spring Framework？

使用Spring Framework的理由有很多。首先，它提供了强大的依赖注入功能，使得代码更加松耦合，易于测试和维护。其次，Spring的AOP支持允许开发者在不修改业务逻辑的情况下，添加横切关注点（如日志、安全等）。此外，Spring还提供了丰富的生态系统，包括Spring Boot、Spring Cloud等，极大地简化了微服务和云原生应用的开发。

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

### Spring Framework v6.1.14版本更新了什么

在Spring Framework v6.1.14版本中，进行了多项重要更新和修复。以下是一些关键更新：

#### 新特性
- 使用Locale.ROOT进行区域无关的、不区分大小写的比较。
- 改进了静态资源处理中的相对路径检查。
- CorsUtils.isCorsRequest在格式错误的Origin头时抛出未处理的IllegalArgumentException并返回500内部服务器错误。
- 在MethodArgumentTypeMismatchException错误消息中包含参数名称。
- 在WebClientExtensions中保留协程上下文。

#### Bug修复
- 解决了DelegatingFilterProxy导致的虚拟线程固定问题。
- 修复了KotlinDelegate.hasDefaultValue()中的潜在空指针异常。
- 解决了在使用PathPattern时RedirectView中缺少路径变量值的问题。

#### 文档更新
- 更新了fallback.adoc和scheduling.adoc文档。

#### 依赖升级
- 升级到Apache HttpClient 5.4和Apache HttpCore Reactive 5.3。

### 更新日志

## ⭐ 新特性
- 使用Locale.ROOT进行区域无关、不区分大小写的比较。
- 改进了静态资源处理中的相对路径检查。
- CorsUtils.isCorsRequest在格式错误的Origin头时抛出未处理的IllegalArgumentException并返回500内部服务器错误。
- 在QualifierAnnotationAutowireCandidateResolver中跳过Java注解的处理。
- 在MethodArgumentTypeMismatchException错误消息中包含参数名称。
- 在WebClientExtensions中保留协程上下文。
- 在ConcurrentReferenceHashMap中检测到阻塞调用。
- 关于bean后处理和急切注入的警告消息可能会建议错误的原因。

## 🐞 Bug修复
- 解决了DelegatingFilterProxy导致的虚拟线程固定问题。
- 修复了KotlinDelegate.hasDefaultValue()中的潜在空指针异常。
- 解决了JMS连接工厂创建的JDK代理缺少本机图像提示的问题。
- AotTestExecutionListener不应在@DisabledInAotMode测试类中被调用。
- 在spring-webflux中使用编码的资源路径而不是输入路径验证。
- org.springframework.util.ResourceUtils#toRelativeURL丢弃自定义URLStreamHandler。
- 在WebClient ExchangeFilterFunction执行期间当前观察未在范围内。
- ZoneIdEditor为TypeConverterSupport抛出错误的异常类型。
- MimeMessageHelper addInline与ByteArrayResource在文件名为null时失败。
- @Cacheable在注解代码中抛出RuntimeException时抛出NullPointerException。
- 使用PathPattern时RedirectView中缺少路径变量值。
- Reactive HttpComponentsClientHttpResponse忽略Expires cookie属性。

## 📔 文档
- 更新了fallback.adoc。
- 更新了scheduling.adoc。
- 修复了testing/support-jdbc.adoc中的链接。
- 调整了关于BeanPostProcessorChecker的Javadoc注释。
- 参考了使用AspectJ的spring-framework-petclinic仓库。

## 🔨 依赖升级
- 升级到Apache HttpClient 5.4。
- 升级到Apache HttpCore Reactive 5.3。
- 升级到Awaitility 4.2.2。
- 升级到Micrometer 1.12.11。
- 升级到Reactor 2023.0.11。