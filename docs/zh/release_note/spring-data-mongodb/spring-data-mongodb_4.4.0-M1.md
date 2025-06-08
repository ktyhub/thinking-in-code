# spring-data-mongodb 4.4.0-M1
### 为什么要使用spring-data-mongodb

在当今数据驱动的世界中，开发者面临着一个矛盾：如何在快速变化的需求和复杂的数据结构之间找到平衡。传统的数据库操作往往显得繁琐且低效，尤其是在处理非关系型数据时。Spring Data MongoDB应运而生，它不仅简化了与MongoDB的交互，还提供了强大的功能，使得开发者能够专注于业务逻辑，而不是数据存取的细节。选择Spring Data MongoDB，意味着选择了一条高效、灵活的开发之路，助你在激烈的竞争中脱颖而出。

### spring-data-mongodb是什么

Spring Data MongoDB是一个用于简化与MongoDB数据库交互的框架。它提供了一系列的API和工具，使得开发者能够轻松地执行CRUD操作、查询和数据映射。通过Spring Data MongoDB，开发者可以利用Spring的强大生态系统，快速构建高效的应用程序。

### 入门示例

想象一下，你正在开发一个社交媒体应用，需要存储用户信息和他们的帖子。使用Spring Data MongoDB，你可以轻松创建一个用户实体类，并通过MongoRepository接口实现数据的增删改查。例如：

```java
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
    User findByUsername(String username);
}
```

在这个例子中，`User`类代表用户信息，而`UserRepository`接口则提供了对用户数据的操作。通过简单的注解和接口定义，你就能快速实现复杂的数据操作，极大地提升开发效率。

### spring-data-mongodb 4.4.0-M1版本更新了什么

在4.4.0-M1版本中，Spring Data MongoDB引入了对单元返回的挂起函数的`@Update`注解支持，调整了`EnableMongoRepositories`以与数据通用库的更改保持一致。新增了查询投影方法`.include()`和`.exclude()`，允许接受集合类型。此外，还支持了Kotlin类的实例化，特别是那些重写只读属性的类。最后，提供了类型安全的Kotlin更新扩展，进一步增强了开发体验。

### 更新日志

## 📗 链接
- [Spring Data MongoDB 4.4 参考文档](https://docs.spring.io/spring-data/mongodb/reference/4.4/)
- [Spring Data MongoDB 4.4 Javadoc](https://docs.spring.io/spring-data/mongodb/docs/4.4.0-M1/api/)

## ⭐ 新特性
- 支持在返回单元的挂起函数上使用`@Update`注解。
- 将`EnableMongoRepositories`与数据通用库的更改对齐。
- 允许查询投影方法`.include()`和`.exclude()`接受集合类型。
- 支持实例化重写只读属性的Kotlin类。
- 提供类型安全的Kotlin更新扩展。

## 🐞 Bug修复
- 修复了`MongoRepository.findAll(Pageable)`在使用未分页的`Pageable`时忽略`Sort`的问题。
- 解决了引用或使用通过`SetWindowFieldsOperation`设置的字段值的问题。
- 修复了在原生映像中使用`@Query`与排序时出现的异常。
- 解决了在传递单元素集合时，`$all`在`_id`上导致异常的问题。
- 修复了使用记录作为`@Unwrapped`审计对象时的错误。
- 解决了聚合操作中`$unwind`和`$project`引发的`IllegalArgumentException`。
- 修复了在评估聚合操作查询方法时多次调用转换器的问题。
- 解决了自定义转换器的空值存储在文档中的问题。
- 修复了`SpringDataMongodbQuery`和`SpringDataMongodbSerializer`重复应用映射的问题。
- 解决了在`QueryMapper.getMappedValue(…)`中处理ID转换时未考虑嵌套的问题。
- 修复了在应用于ID字段时，`Criteria.regex`被转换为`String`的问题。
- 解决了`MongoExceptionTranslator`隐藏写冲突的问题。

## 📔 文档
- 将Javadoc与Antora文档网站捆绑。
- 修复错误代码参考文件。

## 🔨 依赖升级
- 升级至MongoDB驱动5.1.4。
- 升级至MongoDB驱动5.1.3。
- 升级至Maven Wrapper 3.9.8。
- 升级至MongoDB 5.1.2驱动。

### 总结

在4.4.0-M1版本中，Spring Data MongoDB不仅引入了多项新特性，提升了开发者的使用体验，还修复了多个关键bug，确保了更高的稳定性和性能。通过这些更新，开发者能够更高效地构建与MongoDB的交互，进一步推动项目的成功。