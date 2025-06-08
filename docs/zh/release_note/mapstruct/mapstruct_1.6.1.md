# mapstruct 1.6.1
### 为什么要使用mapstruct

在现代软件开发中，数据传输对象（DTO）与实体之间的转换常常成为开发者的噩梦。手动编写这些转换代码不仅繁琐，还容易出错，导致维护成本高昂。mapstruct的出现，犹如一缕阳光，照亮了这一黑暗的角落。它通过注解处理器自动生成高效的映射代码，让开发者从繁重的手动工作中解放出来。然而，许多开发者仍在犹豫：到底是继续忍受手动映射的痛苦，还是勇敢地迈出使用mapstruct的第一步？这正是我们需要深入探讨的。

### mapstruct是什么

mapstruct是一个Java库，旨在简化Java Bean之间的映射。通过使用注解，开发者可以定义源对象和目标对象之间的映射关系，mapstruct会在编译时自动生成相应的映射代码。这种方式不仅提高了开发效率，还减少了运行时错误的可能性。

### 入门示例

假设我们正在开发一个电商平台，需要将用户的注册信息从DTO转换为实体。我们可以定义一个UserDTO类和一个User实体类：

```java
public class UserDTO {
    private String name;
    private String email;
    // getters and setters
}

public class User {
    private String name;
    private String email;
    // getters and setters
}
```

接下来，我们可以创建一个映射接口：

```java
@Mapper
public interface UserMapper {
    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);
    User toUser(UserDTO userDTO);
}
```

通过调用`UserMapper.INSTANCE.toUser(userDTO)`，mapstruct会自动生成转换代码，让我们轻松实现DTO到实体的转换。

### mapstruct 1.6.1版本更新了什么

mapstruct 1.6.1版本引入了一些重要的增强功能和bug修复。新增了对Java 19及以上版本的支持，允许使用`LinkedHashSet`和`LinkedHashMap`的新工厂方法。此外，修复了多个与映射策略和类型不一致相关的bug，提升了整体稳定性和性能。

### 更新日志

#### 增强功能
- 在Java 19或更高版本中，使用`LinkedHashSet`和`LinkedHashMap`的新工厂方法，具有已知容量。

#### Bug修复
- 修复了仅对目标的忽略映射时，逆向继承策略不工作的错误。
- 解决了使用`SubclassMapping`时，泛型与原始类型之间的不一致模糊映射方法错误。
- 修复了在使用`InheritInverseConfiguration`时，嵌套目标属性和反转`target = "."`的回归问题。
- 修复了在1.6.0版本中，深度映射与多个映射的破损问题。
- 修复了在1.6.0版本中，两个不同常量被忽略的问题。
- 解决了在1.6.0版本中，泛型与原始类型之间的不一致模糊映射方法错误。
- 修复了跨模块记录与接口不识别访问器的问题。
- 修复了在使用目标与构建器时，`@AfterMapping`方法被调用两次的问题。
- 修复了在使用`@AfterMapping`方法与构建器和目标对象时的编译错误。

### 总结

mapstruct 1.6.1版本的更新不仅增强了对新Java版本的支持，还修复了多个关键bug，提升了映射的稳定性和性能。这些改进使得开发者在使用mapstruct时能够更加高效和安心。