# spring-framework v6.2.3
### 为什么要使用spring-framework

在当今快速发展的技术世界中，开发者面临着无数的选择和挑战。选择一个合适的框架就像在众多的星星中找到北极星。Spring Framework正是这样一颗明亮的星星，它不仅为开发者提供了强大的功能，还能帮助他们在复杂的项目中保持清晰的思路。然而，许多开发者在选择框架时常常陷入矛盾：是选择一个流行但复杂的框架，还是一个简单但功能有限的框架？Spring Framework恰好解决了这个矛盾，它以其灵活性和强大功能，成为了开发者的理想选择。

### spring-framework是什么

Spring Framework是一个开源的Java框架，旨在简化企业级应用程序的开发。它提供了全面的基础设施支持，使开发者能够专注于业务逻辑，而不必担心底层的复杂性。Spring的核心特性包括依赖注入、面向切面编程、事务管理等，使得构建可维护和可扩展的应用程序变得更加容易。

### 入门示例

想象一下，你正在开发一个在线购物平台。用户可以浏览商品、添加到购物车并进行结账。使用Spring Framework，你可以轻松地创建一个控制器来处理用户请求。比如，你可以创建一个`ProductController`，它使用Spring的依赖注入来获取商品服务，并返回商品列表。通过Spring的注解，你可以快速配置路由和服务，极大地提高开发效率。

```java
@RestController
@RequestMapping("/products")
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }
}
```

在这个示例中，Spring Framework帮助你简化了控制器的创建和依赖管理，让你能够更专注于实现业务逻辑。

### spring-framework v6.2.3版本更新了什么

Spring Framework v6.2.3版本带来了多项重要更新，包括对MockMvc Kotlin DSL的表单字段支持、ProblemDetail的可序列化实现、对测试类的@MockitoSpyBean的类型级支持等。此外，该版本还优化了默认属性编辑器的分配，增强了对HTTP/2连接的WebSocket升级支持。

### 更新日志

## ⭐ 新特性
- 为MockMvc Kotlin DSL添加表单字段支持
- 使ProblemDetail实现Serializable
- 在测试类的类型级别支持@MockitoSpyBean
- 将TestExecutionListener实现的顺序值暴露为常量
- ContentDisposition应以不区分大小写的方式匹配属性
- 在ServletRequestPathUtils中提供对servletPath的访问
- 使用ConversionService将POJO转换为数组以进行SpEL varargs调用
- 提供更具可操作性的CGLIB错误消息
- 在Servlet容器的onError回调中将断开连接的客户端异常包装为AsyncRequestNotUsableException
- 支持RFC 8441 WebSocket升级与HTTP/2 CONNECT
- 优化bean实例创建的默认属性编辑器分配
- 当当前bean已经在创建中时继续预实例化
- 允许过滤ObjectProvider#stream()返回的bean实例
- GenericConversionService为部分不可解析的泛型类型找到错误的转换器
- 避免在通过BeanFactory解析处理程序时重新创建HandlerMethod
- UrlResource应宽松处理不支持HEAD的HTTP端点
- 为处理Fallback和'defaultCandidate=false' beans添加API对应项
- 添加对多维数组的支持
- 为ServerResponseResultHandler添加getter
- 改进当无法通过类型选择Bean Override时的诊断
- 由于缺少上下文类上的注解类型，表达式性能回归

## 🐞 Bug修复
- PathMatchingResourcePatternResolver在类路径中对非jar文件失败
- 自6.2.0以来，无法在多层接口继承中正确获取泛型
- 测试Bean Overrides尊重fallback限定符而不是@Primary语义
- 如果查询参数名称包含冒号，HTTP接口客户端引发IllegalArgumentException
- Quartz风格的Nth Day of Week cron表达式可能溢出到其他月份
- 嵌入Tomcat时，组件扫描未能找到WEB-INF/classes中的jar条目
- 访问UserDestinationResult中的sessionIds时检查hasNext
- 对实现Iterable的Map的属性绑定不再有效
- GenericTypeResolver返回EmptyType
- 在升级到Spring 6.2.2时，在@Nested测试类层次中发现重复的BeanOverrideHandler
- AnnotationBeanNameGenerator对显式别名的value属性发出警告
- 停止假设AspectJ Advice的第一个参数是JoinPoint
- 对于简单类型List/Map/Array和嵌套容器组合，构造函数绑定失败
- Spring Framework 6.2.x中BeanFactoryUtils.beanNamesForTypeIncludingAncestors()行为的变化导致ClassCastExceptions
- 数据绑定未过滤构造函数绑定的HTTP头
- 嵌套占位符中的转义字符未正确检测，导致无效部分
- ReflectJvmMapping.getKotlinFunction对Kotlin属性返回null
- ConfigurationClassEnhancer应在CGLIB Enhancer上显式设置自定义ClassLoader
- Spring Web MVC控制器中的RestTemplate调用的连接重置异常被忽略
- AsyncExecution未能检测带有泛型的接口中注解方法的返回类型
- 确保WebFlux方法验证时可用Locale上下文

## 📔 文档
- 修复参考文档中对ApplicationContext#getAutowireCapableBeanFactory的引用
- 澄清带有@Lookup方法的抽象类的组件扫描
- WebSocket STOMP参考文档的小更新
- 澄清在没有响应体的POST场景中使用RestClient的文档
- 记录StandardWebSocketSession中localAddress的端口限制
- 修复字段反射提示的Javadoc
- 改进SpringProperties.getFlag()的Javadoc
- 链接到当前的AspectJ Javadoc
- 更新SimpleCommandLinePropertySource的Javadoc
- 更新RestClientException Javadoc以参考RestClient
- 记录TestExecutionListener实现的顺序值
- 记录自定义HttpServiceArgumentResolver的用法

## 🔨 依赖升级
- 升级到Micrometer 1.14.4
- 升级到Reactor 2024.0.3
- 升级到RSocket 1.1.5

### 总结

在Spring Framework v6.2.3版本中，开发者可以期待一系列新特性和修复，包括对Kotlin DSL的支持、Bug修复以及文档的改进。这些更新不仅提升了框架的稳定性和可用性，还为开发者提供了更强大的工具，以应对复杂的开发需求。