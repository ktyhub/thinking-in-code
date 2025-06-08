# spring-data-commons 3.4.0-M1
### spring-data-commons是什么

Spring Data Commons是Spring框架的一部分，旨在简化数据访问层的开发。它提供了一组通用的功能和抽象，使得开发者可以更轻松地与各种数据存储（如关系数据库、NoSQL数据库等）进行交互。通过Spring Data Commons，开发者可以使用一致的编程模型来处理不同类型的数据源，从而提高开发效率。

### 为什么要使用spring-data-commons?

使用Spring Data Commons的主要原因包括：

- **简化数据访问**：提供了统一的API，减少了与不同数据存储交互时的复杂性。
- **增强生产力**：通过自动化常见的数据访问模式，开发者可以专注于业务逻辑，而不是底层的数据库操作。
- **灵活性**：支持多种数据存储类型，允许开发者根据需求选择最合适的存储解决方案。
- **社区支持**：作为Spring生态系统的一部分，Spring Data Commons享有广泛的社区支持和丰富的文档资源。

### 入门示例

以下是一个简单的Spring Data Commons使用示例，展示如何定义一个实体和一个基本的Repository：

```java
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    // Getters and Setters
}

public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByName(String name);
}
```

在这个示例中，我们定义了一个`User`实体，并创建了一个`UserRepository`接口，继承自`JpaRepository`，这使得我们可以轻松地进行CRUD操作。

### spring-data-commons 3.4.0-M1版本更新了什么

在3.4.0-M1版本中，Spring Data Commons引入了一些新特性和修复了多个bug，具体更新内容如下：

#### 新特性

- KotlinBeanInfoFactory不再考虑重写的bean属性访问器。
- 增加对使用Kotlin "is" 属性的接口投影支持。
- 引入了`Parameter.getRequiredName()`方法。
- Kotlin懒加载属性被识别为持久化实体。
- 在`AbstractRepositoryMetadata`验证异常消息中添加类型名称。
- 增加了提前注册存储库片段的SPI机制。

#### Bug修复

- JSON渲染设置导致自定义Page实现无法正确渲染。
- 在保存单属性Kotlin数据类时，`IndexOutOfBoundsException`异常。
- 解决了`Repositories#cacheRepositoryFactory()`中的线程固定问题。
- 自定义存储库返回类型为`Optional`的问题。
- `@EnableSpringDataWebSupport`在原生镜像中无法工作的问题。
- 解决了`TransactionalEventListener`中的`ConcurrentModificationException`问题。
- `KotlinBeanInfoFactory.getBeanInfo`在检查值类的getter时抛出异常。
- DTO投影属性映射到关联时未填充的问题。
- 如果未找到`SpringDataWebSettings`，`PageModel`使用包装序列化模式。

### 更新日志

#### 📗 链接
- [Spring Data Commons 3.4参考文档](https://docs.spring.io/spring-data/commons/reference/3.4/)
- [Spring Data Commons 3.4 Javadoc](https://docs.spring.io/spring-data/commons/docs/3.4.0-M1/api/)

#### ⭐ 新特性
- KotlinBeanInfoFactory不再考虑重写的bean属性访问器。
- 增加对使用Kotlin "is" 属性的接口投影支持。
- 引入了`Parameter.getRequiredName()`方法。
- Kotlin懒加载属性被识别为持久化实体。
- 在`AbstractRepositoryMetadata`验证异常消息中添加类型名称。
- 增加了提前注册存储库片段的SPI机制。

#### 🐞 Bug修复
- JSON渲染设置导致自定义Page实现无法正确渲染。
- 在保存单属性Kotlin数据类时，`IndexOutOfBoundsException`异常。
- 解决了`Repositories#cacheRepositoryFactory()`中的线程固定问题。
- 自定义存储库返回类型为`Optional`的问题。
- `@EnableSpringDataWebSupport`在原生镜像中无法工作的问题。
- 解决了`TransactionalEventListener`中的`ConcurrentModificationException`问题。
- `KotlinBeanInfoFactory.getBeanInfo`在检查值类的getter时抛出异常。
- DTO投影属性映射到关联时未填充的问题。
- 如果未找到`SpringDataWebSettings`，`PageModel`使用包装序列化模式。

#### 📔 文档
- 将投影文档片段拆分为多个子片段。
- 更正协程的定义。
- 将Javadoc与Antora文档网站捆绑。

#### 🔨 依赖升级
- 升级到Maven Wrapper 3.9.8。